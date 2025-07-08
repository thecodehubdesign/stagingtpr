
import { Heart, Users, Award, MapPin, GraduationCap, Clock, Building, Zap, Shield, Cpu } from 'lucide-react';

const FounderSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Safe Haven Protocol",
      description: "A protected space for every body and skill level to evolve"
    },
    {
      icon: Cpu,
      title: "Neural Network Training",
      description: "Advanced progression systems that adapt to your journey"
    },
    {
      icon: Zap,
      title: "Power Amplification",
      description: "Unlock abilities you never knew existed within you"
    }
  ];

  const statistics = [
    { icon: Users, number: "5000+", label: "Cyber Rebels" },
    { icon: Clock, number: "100,000", label: "Training Sessions" },
    { icon: Building, number: "6", label: "Underground Bases" },
    { icon: GraduationCap, number: "40+", label: "Elite Operatives" }
  ];

  return (
    <section className="py-20 cyberpunk-bg relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 scan-lines opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Statistics Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {statistics.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 cyberpunk-card rounded-xl fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <div className="w-16 h-16 hologram-border rounded-lg flex items-center justify-center bg-gradient-to-br from-electric-purple/20 to-cyber-blue/20 group-hover:from-electric-purple/40 group-hover:to-cyber-blue/40 transition-all duration-300">
                    <stat.icon className="w-8 h-8 text-white group-hover:animate-pulse" />
                  </div>
                  <div className="absolute inset-0 bg-electric-purple/30 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              <div className="text-3xl font-orbitron font-bold neon-text mb-2">{stat.number}</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative fade-in">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl hologram-border">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616c5e912e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="Jasmine Zapka, Founder of The Pole Room"
                className="w-full h-full object-cover"
                style={{ filter: 'hue-rotate(270deg) saturate(1.3) contrast(1.1)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-electric-purple/20 via-transparent to-neon-pink/20"></div>
            </div>
            
            {/* Holographic quote bubble */}
            <div className="absolute -bottom-8 -right-8 cyberpunk-card p-6 rounded-2xl max-w-sm border border-electric-purple/50">
              <p className="text-gray-300 italic text-sm font-inter">
                "Every woman is a warrior waiting to be awakened. We just provide the training ground."
              </p>
              <p className="neon-pink font-orbitron font-bold mt-3 text-right">- JASMINE ZAPKA</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center space-x-3 mb-4">
              <Zap className="w-6 h-6 neon-blue animate-pulse" />
              <h3 className="text-sm font-orbitron font-bold text-cyber-blue uppercase tracking-widest">
                SYSTEM ARCHITECT // REBEL LEADER
              </h3>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-orbitron font-black text-white mb-8 leading-tight">
              <span className="neon-text">FROM GARAGE</span>
              <br />
              <span className="text-transparent bg-clip-text cyberpunk-gradient">TO REVOLUTION</span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-10 leading-relaxed font-inter">
              What began as two poles in a suburban garage has evolved into Melbourne's most 
              <span className="neon-pink font-bold"> revolutionary </span>
              fitness underground. Jasmine didn't just create a studio – she built a 
              <span className="neon-blue font-bold"> movement </span>
              that challenges everything society tells women about their bodies and potential.
            </p>

            {/* Benefits Grid */}
            <div className="space-y-6">
              <h3 className="text-xl font-orbitron font-bold text-white mb-6 uppercase tracking-wide">
                Why Join The Rebellion
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-5 p-5 cyberpunk-card rounded-xl group">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="w-14 h-14 hologram-border rounded-lg flex items-center justify-center bg-gradient-to-br from-electric-purple/20 to-neon-pink/20 group-hover:from-electric-purple/40 group-hover:to-neon-pink/40 transition-all duration-300">
                          <benefit.icon className="w-7 h-7 text-white group-hover:animate-pulse" />
                        </div>
                        <div className="absolute inset-0 bg-electric-purple/30 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-orbitron font-bold text-white mb-2 text-lg">{benefit.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
