
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Wind, Music, Zap, Target, Cpu } from 'lucide-react';

const ClassDiscovery = () => {
  const classTypes = [
    {
      title: "Pole Mastery Protocol",
      description: "Strength amplification through vertical combat training",
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      gradient: "from-neon-pink to-electric-purple"
    },
    {
      title: "Aerial Neural Network",
      description: "Gravity-defying movements through silk and hoop interfaces",
      icon: Wind,
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      gradient: "from-electric-purple to-cyber-blue"
    },
    {
      title: "Floor Combat Sequence",
      description: "Ground-based movement patterns and flow states",
      icon: Music,
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      gradient: "from-cyber-blue to-acid-green"
    }
  ];

  return (
    <section className="py-20 cyberpunk-bg relative overflow-hidden" id="classes">
      {/* Scan lines */}
      <div className="absolute inset-0 scan-lines opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 neon-blue mb-6">
            <Target className="w-6 h-6 animate-pulse" />
            <span className="text-lg font-orbitron font-bold uppercase tracking-widest">
              TRAINING PROTOCOLS
            </span>
            <Cpu className="w-6 h-6 animate-pulse" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-orbitron font-black text-white mb-6">
            <span className="neon-text">CHOOSE YOUR</span>
            <br />
            <span className="text-transparent bg-clip-text cyberpunk-gradient">SPECIALIZATION</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Three distinct pathways to unlock your hidden potential and transform into the warrior within
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {classTypes.map((classType, index) => (
            <div 
              key={index} 
              className="group cyberpunk-card rounded-2xl overflow-hidden shadow-2xl fade-in hover:shadow-[0_0_40px_rgba(187,134,252,0.3)]"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={classType.image}
                  alt={classType.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  style={{ filter: 'hue-rotate(270deg) saturate(1.3) contrast(1.2)' }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${classType.gradient} opacity-60`}></div>
                
                {/* Holographic overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-electric-purple/20 via-transparent to-neon-pink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon */}
                <div className="absolute top-4 right-4">
                  <div className="relative">
                    <div className="w-12 h-12 hologram-border rounded-full flex items-center justify-center bg-black/50 backdrop-blur-sm">
                      <classType.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-electric-purple/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-orbitron font-bold text-white mb-3">{classType.title}</h3>
                <p className="text-gray-400 mb-6 font-inter">{classType.description}</p>
                
                <Button 
                  variant="outline" 
                  className="w-full hologram-border bg-transparent text-electric-purple hover:bg-electric-purple/10 hover:text-white transition-all duration-300 group/btn"
                >
                  <span className="font-orbitron">ACCESS PROTOCOL</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Class Finder CTA */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-6 cyberpunk-card p-8 rounded-2xl shadow-2xl">
            <div className="text-left">
              <h3 className="text-xl font-orbitron font-bold text-white mb-2">NEURAL COMPATIBILITY SCAN</h3>
              <p className="text-gray-400 text-sm font-inter">Let our AI analyze your profile for optimal training protocol matching</p>
            </div>
            <Button className="cyberpunk-button whitespace-nowrap font-orbitron font-bold">
              <Zap className="w-5 h-5 mr-2" />
              SCAN NOW
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassDiscovery;
