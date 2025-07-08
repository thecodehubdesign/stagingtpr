
import { Button } from '@/components/ui/button';
import { Play, ArrowRight, Zap } from 'lucide-react';
import StyleQuizModal from './StyleQuizModal';
import FreeTrialSidebar from './FreeTrialSidebar';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid">
      {/* Cyberpunk Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(8,8,15,0.8), rgba(20,20,35,0.8)), url('https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      
      {/* Neon Accent Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-fuchsia-500"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Zap className="w-6 h-6 text-fuchsia-400 neon-glow" />
            <span className="text-sm font-semibold uppercase tracking-wider text-cyan-400 neon-glow">
              Enter the Future of Fitness
            </span>
            <Zap className="w-6 h-6 text-cyan-400 neon-glow" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 gradient-text pulse-neon">
            Discover the Strength, Grace and Confidence Within You
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of women transforming their bodies and minds through 
            <span className="text-fuchsia-400 neon-glow"> pole </span>
            and 
            <span className="text-cyan-400 neon-glow"> aerial </span>
            fitness
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <FreeTrialSidebar />
            <StyleQuizModal />
          </div>

          {/* Video Play Button */}
          <div className="mt-12">
            <Button 
              variant="ghost" 
              size="lg"
              className="text-white hover:text-fuchsia-300 hover:bg-white/10 cyber-border neon-button"
            >
              <Play className="w-6 h-6 mr-2" />
              Watch Our Story
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Neon Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-fuchsia-500/30 rounded-full blur-xl animate-pulse float"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-cyan-500/30 rounded-full blur-xl animate-pulse float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-500/30 rounded-full blur-xl animate-pulse float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default HeroSection;
