import { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface VideoTimestamp {
  time: string;
  label: string;
}

interface BlogVideoPlayerProps {
  videoUrl: string;
  title: string;
  summary?: VideoTimestamp[];
}

const BlogVideoPlayer = ({ videoUrl, title, summary }: BlogVideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  const handlePlay = () => {
    const video = document.getElementById('blog-video') as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
        setShowOverlay(false);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMute = () => {
    const video = document.getElementById('blog-video') as HTMLVideoElement;
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    const video = document.getElementById('blog-video') as HTMLVideoElement;
    if (video && video.requestFullscreen) {
      video.requestFullscreen();
    }
  };

  const handleTimestampClick = (timeString: string) => {
    const video = document.getElementById('blog-video') as HTMLVideoElement;
    if (video) {
      const [minutes, seconds] = timeString.split(':').map(Number);
      video.currentTime = minutes * 60 + seconds;
      if (!isPlaying) {
        video.play();
        setIsPlaying(true);
        setShowOverlay(false);
      }
    }
  };

  return (
    <Card className="cyber-card overflow-hidden mb-8">
      <CardContent className="p-0">
        {/* Video Container */}
        <div className="relative aspect-video bg-black group">
          <video
            id="blog-video"
            src={videoUrl}
            className="w-full h-full object-cover"
            onClick={handlePlay}
            onEnded={() => {
              setIsPlaying(false);
              setShowOverlay(true);
            }}
          />
          
          {/* Play Overlay */}
          {showOverlay && (
            <div 
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center cursor-pointer"
              onClick={handlePlay}
            >
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-fuchsia-500/80 flex items-center justify-center mx-auto mb-4 hover:bg-fuchsia-500 transition-colors hover:scale-110 duration-300">
                  <Play className="w-10 h-10 text-white ml-1" fill="white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
              </div>
            </div>
          )}
          
          {/* Custom Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20"
                  onClick={handlePlay}
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20"
                  onClick={handleMute}
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </Button>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
                onClick={handleFullscreen}
              >
                <Maximize className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Video Summary */}
        {summary && summary.length > 0 && (
          <div className="p-4 border-t border-gray-700/50">
            <Accordion type="single" collapsible defaultValue="summary">
              <AccordionItem value="summary" className="border-none">
                <AccordionTrigger className="text-gray-100 hover:text-fuchsia-300 py-2">
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-fuchsia-400" />
                    Video Summary & Timestamps
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2 pt-2">
                    {summary.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => handleTimestampClick(item.time)}
                        className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-fuchsia-500/10 transition-colors text-left group"
                      >
                        <span className="text-sm font-mono text-cyan-400 group-hover:text-cyan-300 min-w-[45px]">
                          {item.time}
                        </span>
                        <span className="text-gray-300 group-hover:text-gray-100">
                          {item.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BlogVideoPlayer;
