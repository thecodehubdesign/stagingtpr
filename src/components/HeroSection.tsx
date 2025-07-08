
import { Button } from '@/components/ui/button';
import { Play, ArrowRight, Zap, Target, Users } from 'lucide-react';
import StyleQuizModal from './StyleQuizModal';
import FreeTrialSidebar from './FreeTrialSidebar';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden cyberpunk-bg">
      {/* Cyberpunk Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          filter: 'hue-rotate(270deg) saturate(1.5) contrast(1.2)'
        }}
      />
      
      {/* Holographic overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric-purple/20 via-transparent to-neon-pink/20"></div>
      
      {/* Animated scan lines */}
      <div className="absolute inset-0 scan-lines"></div>
      
      {/* Data streams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="data-stream" 
            style={{ 
              left: `${15 + i * 15}%`, 
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Neon accent borders */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-electric-purple to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-pink to-transparent"></div>
      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-cyber-blue to-transparent"></div>
      <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-acid-green to-transparent"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="fade-in">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="relative">
              <Zap className="w-8 h-8 neon-pink animate-pulse" />
              <div className="absolute inset-0 w-8 h-8 bg-neon-pink/30 rounded-full blur-lg"></div>
            </div>
            <span className="text-lg font-orbitron font-bold uppercase tracking-widest neon-text">
              ENTER THE MATRIX
            </span>
            <div className="relative">
              <Target className="w-8 h-8 neon-blue animate-pulse" />
              <div className="absolute inset-0 w-8 h-8 bg-cyber-blue/30 rounded-full blur-lg"></div>
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-orbitron font-black text-white mb-8 leading-tight">
            <div className="glitch-text neon-text" data-text="UNLOCK">UNLOCK</div>
            <div className="text-transparent bg-clip-text cyberpunk-gradient mt-2">
              YOUR POWER
            </div>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Step into the underground rebellion of fitness. Where 
            <span className="neon-pink font-bold"> strength </span>
            meets 
            <span className="neon-blue font-bold"> grace</span>,
            and every woman discovers her 
            <span className="neon-green font-bold"> limitless potential</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <FreeTrialSidebar />
            <StyleQuizModal />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
            {[
              { number: "5K+", label: "Rebels", icon: Users },
              { number: "100K+", label: "Sessions", icon: Zap },
              { number: "6", label: "Underground Locations", icon: Target }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-2">
                  <stat.icon className="w-8 h-8 mx-auto neon-text group-hover:animate-pulse" />
                  <div className="absolute inset-0 bg-electric-purple/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="text-3xl font-orbitron font-bold neon-text">{stat.number}</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Video Play Button */}
          <div className="mt-16">
            <Button 
              variant="ghost" 
              size="lg"
              className="hologram-border text-white hover:text-electric-purple hover:bg-electric-purple/10 transition-all duration-300 group"
            >
              <Play className="w-6 h-6 mr-3 group-hover:animate-pulse" />
              <span className="font-orbitron">WITNESS THE TRANSFORMATION</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Floating holographic elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-electric-purple/20 rounded-full blur-2xl animate-pulse float-up"></div>
      <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-neon-pink/20 rounded-full blur-2xl animate-pulse float-up" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyber-blue/20 rounded-full blur-2xl animate-pulse float-up" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/3 right-1/3 w-36 h-36 bg-acid-green/20 rounded-full blur-2xl animate-pulse float-up" style={{ animationDelay: '1.5s' }}></div>
    </section>
  );
};

export default HeroSection;
