import { Play, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import SectionHeader from '@/components/ui/section-header';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useState } from 'react';

const VideoSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          badgeText="See The Magic In Action"
          title="Experience The Pole Room Story"
          subtitle="Watch how we've transformed thousands of lives through the power of pole and aerial fitness. See real students, real transformations, and real community."
        />

        <div className="relative max-w-4xl mx-auto animate-fade-in" style={{animationDelay: '0.3s'}}>
          {/* Video Thumbnail Container */}
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <div className="relative aspect-video rounded-2xl overflow-hidden cyber-border bg-gradient-to-br from-gray-800 to-gray-900 cursor-pointer group">
                {/* Vimeo Video Thumbnail */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://i.vimeocdn.com/video/738607298-1280x720.jpg')`
                  }}
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300 group-hover:scale-110 neon-glow"
                    size="icon"
                  >
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </Button>
                </div>

                {/* Video Duration Badge */}
                <div className="absolute bottom-4 right-4">
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                    3:42
                  </span>
                </div>
              </div>
            </DialogTrigger>
            
            <DialogContent className="max-w-4xl w-full p-0 bg-black border-0">
              <div className="aspect-video w-full">
                <iframe
                  src="https://player.vimeo.com/video/298504350?autoplay=1&title=0&byline=0&portrait=0"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </DialogContent>
          </Dialog>

          {/* Video Stats */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="cyber-card p-6 rounded-xl">
              <div className="text-2xl font-bold gradient-text mb-2">50K+</div>
              <div className="text-gray-400 text-sm">Video Views</div>
            </div>
            <div className="cyber-card p-6 rounded-xl">
              <div className="text-2xl font-bold gradient-text mb-2">98%</div>
              <div className="text-gray-400 text-sm">Student Satisfaction</div>
            </div>
            <div className="cyber-card p-6 rounded-xl">
              <div className="text-2xl font-bold gradient-text mb-2">2 Min</div>
              <div className="text-gray-400 text-sm">Watch Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;