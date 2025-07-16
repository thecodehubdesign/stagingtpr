
import { Play, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VideoSection = () => {
  const handlePlayVideo = () => {
    // This would typically open a modal or navigate to a video player
    console.log('Play video clicked');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-5 h-5 text-fuchsia-400 neon-glow" />
            <span className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              See The Magic In Action
            </span>
            <Sparkles className="w-5 h-5 text-cyan-400 neon-glow" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 gradient-text">
            Experience The Pole Room Story
          </h2>
          
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Watch how we've transformed thousands of lives through the power of pole and aerial fitness. 
            See real students, real transformations, and real community.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto animate-fade-in" style={{animationDelay: '0.3s'}}>
          {/* Video Thumbnail Container */}
          <div className="relative aspect-video rounded-2xl overflow-hidden cyber-border bg-gradient-to-br from-gray-800 to-gray-900">
            {/* Placeholder Video Thumbnail */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
              }}
            />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                onClick={handlePlayVideo}
                className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-110 neon-glow"
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
