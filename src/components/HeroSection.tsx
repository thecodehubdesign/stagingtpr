
import { Button } from '@/components/ui/button';
import { Play, ArrowRight } from 'lucide-react';
import StyleQuizModal from './StyleQuizModal';
import FreeTrialSidebar from './FreeTrialSidebar';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2820&q=80')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Discover the Strength, Grace and Confidence Within You
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join thousands of women transforming their bodies and minds through pole and aerial fitness
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
              className="text-white hover:text-rose-300 hover:bg-white/10"
            >
              <Play className="w-6 h-6 mr-2" />
              Watch Our Story
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-rose-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default HeroSection;
