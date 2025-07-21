
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, ArrowRight, Zap } from 'lucide-react';
import StyleQuizModal from './StyleQuizModal';
import VoucherClaimForm from './VoucherClaimForm';
import SectionHeader from '@/components/ui/section-header';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <iframe
          src="https://player.vimeo.com/video/374290944?autoplay=1&loop=1&muted=1&controls=0&background=1"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            width: '100vw',
            height: '100vh',
            minWidth: '100%',
            minHeight: '100%',
            transform: 'scale(1.2)',
            transformOrigin: 'center center'
          }}
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
        {/* Dark transparent overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
      </div>
      
      {/* Neon Accent Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-fuchsia-500"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <SectionHeader 
            badgeText="Enter the Future of Fitness"
            title="Discover the Strength, Grace and Confidence Within You"
            subtitle=""
            className="mb-4"
          />
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of women transforming their bodies and minds through 
            <span className="text-fuchsia-400 neon-glow"> pole </span>
            and 
            <span className="text-cyan-400 neon-glow"> aerial </span>
            fitness
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <VoucherClaimForm />
            <StyleQuizModal />
          </div>

          {/* Video Play Button */}
          <div className="mt-12">
            
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
