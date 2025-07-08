
import { Button } from '@/components/ui/button';
import { Star, Clock, Users, Heart, Zap, Shield, Target, Cpu } from 'lucide-react';

const FreeTrialOffer = () => {
  const benefits = [
    { icon: Shield, text: "Zero Prerequisites Required" },
    { icon: Clock, text: "45-Min Initiation Protocol" },
    { icon: Users, text: "Elite Support Squad" },
    { icon: Heart, text: "Judgment-Free Zone" }
  ];

  return (
    <section className="py-20 relative overflow-hidden cyberpunk-bg">
      {/* Background Image with Cyberpunk filter */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          filter: 'hue-rotate(270deg) saturate(1.4) contrast(1.3)'
        }}
      />
      
      {/* Holographic overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/20 via-transparent to-electric-purple/20"></div>
      
      {/* Scan lines effect */}
      <div className="absolute inset-0 scan-lines opacity-40"></div>
      
      {/* Data streams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div 
            key={i}
            className="data-stream" 
            style={{ 
              left: `${20 + i * 20}%`, 
              animationDelay: `${i * 1.2}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="fade-in">
          <div className="inline-flex items-center space-x-3 neon-pink mb-6">
            <Zap className="w-6 h-6 animate-pulse" />
            <span className="text-lg font-orbitron font-bold uppercase tracking-widest">
              INITIATION PROTOCOL // ZERO COST
            </span>
            <Target className="w-6 h-6 animate-pulse" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-black text-white mb-8 leading-tight">
            <div className="glitch-text neon-text" data-text="EXPERIENCE">EXPERIENCE</div>
            <div className="text-transparent bg-clip-text cyberpunk-gradient mt-2">
              THE AWAKENING
            </div>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Your first step into the underground is 
            <span className="neon-pink font-bold"> completely free</span>.
            No strings, no catches – just pure 
            <span className="neon-blue font-bold"> transformation </span>
            waiting to be unlocked.
          </p>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-4 cyberpunk-card rounded-xl p-6 fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <benefit.icon className="w-6 h-6 neon-blue flex-shrink-0 group-hover:animate-pulse" />
                  <div className="absolute inset-0 bg-cyber-blue/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <span className="text-white text-sm font-medium font-inter">{benefit.text}</span>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <Button 
              size="lg" 
              className="cyberpunk-button text-xl px-16 py-6 h-auto text-black font-orbitron font-bold shadow-2xl hover:shadow-[0_0_40px_rgba(255,0,200,0.6)]"
            >
              INITIATE PROTOCOL
            </Button>
            
            <p className="text-gray-400 text-sm font-inter">
              No payment required • All underground locations • Immediate access
            </p>
          </div>
        </div>
      </div>

      {/* Floating holographic elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-electric-purple/30 rounded-full blur-2xl animate-pulse float-up"></div>
      <div className="absolute bottom-20 right-10 w-36 h-36 bg-neon-pink/30 rounded-full blur-2xl animate-pulse float-up" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-cyber-blue/30 rounded-full blur-2xl animate-pulse float-up" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default FreeTrialOffer;
