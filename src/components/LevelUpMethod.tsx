
import { Zap, Shield, Cpu, Target, Brain, Heart, Flame, Sparkles } from 'lucide-react';

const LevelUpMethod = () => {
  const stages = [
    {
      number: "01",
      title: "Initiation",
      subtitle: "The First Step is Showing Up",
      description: "You arrive unsure. Maybe intimidated. Maybe even doubting if this is for you. That's the moment of transformation. We surround you with a community that believes in you before you believe in yourself.",
      builds: "trust in your body, comfort in movement, and a new sense of possibility",
      icon: Shield,
      color: "electric-purple"
    },
    {
      number: "02", 
      title: "Integration",
      subtitle: "Strength Meets Identity",
      description: "With every class, you're doing more than learning tricks. You're creating a new narrative: \"I can do hard things.\" You start to carry yourself differently — at work, in social settings, and in the mirror.",
      builds: "physical power, mental resilience and a sense of belonging",
      icon: Cpu,
      color: "neon-pink"
    },
    {
      number: "03",
      title: "Expression", 
      subtitle: "Find Your Voice Through Movement",
      description: "You start to move with purpose. Style. Emotion. Pole becomes your outlet — a place where you explore the parts of yourself you've kept hidden.",
      builds: "confidence in being seen, self-expression and emotional intelligence",
      icon: Heart,
      color: "cyber-blue"
    },
    {
      number: "04",
      title: "Expansion",
      subtitle: "Step Into Every Room Like You Own It", 
      description: "By now, it's not about the pole anymore. Your posture has changed. Your tone of voice. Your decisions. You've become someone who takes up space — proudly, powerfully, and without apology.",
      builds: "magnetism, courage and unstoppable momentum — in every part of your life",
      icon: Target,
      color: "acid-green"
    }
  ];

  return (
    <section className="py-20 cyberpunk-bg relative overflow-hidden">
      {/* Background matrix grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(187, 134, 252, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(187, 134, 252, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      {/* Holographic overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric-purple/10 via-transparent to-neon-pink/10"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-cyber-blue/5 via-transparent to-acid-green/5"></div>

      {/* Scan lines */}
      <div className="absolute inset-0 scan-lines opacity-30"></div>

      {/* Floating data particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="data-stream" 
            style={{ 
              left: `${10 + i * 12}%`, 
              animationDelay: `${i * 1.8}s`,
              height: '120px'
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20 fade-in">
          <div className="inline-flex items-center space-x-3 neon-blue mb-6">
            <Brain className="w-6 h-6 animate-pulse" />
            <span className="text-lg font-orbitron font-bold uppercase tracking-widest">
              NEURAL ENHANCEMENT PROTOCOL
            </span>
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-black text-white mb-8 leading-tight">
            <div className="glitch-text neon-text" data-text="UNLOCK YOUR">UNLOCK YOUR</div>
            <div className="text-transparent bg-clip-text cyberpunk-gradient mt-2">
              EXTRAORDINARY
            </div>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              At The Pole Room, we don't just teach pole dancing — we guide everyday people to discover their 
              <span className="neon-pink font-bold"> power</span>, rewrite their 
              <span className="neon-blue font-bold"> identity</span>, and step into a life of 
              <span className="neon-green font-bold"> unapologetic confidence</span>.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="cyberpunk-card p-6 rounded-xl">
                <p className="text-white font-semibold">No experience? <span className="neon-pink">No worries.</span></p>
              </div>
              <div className="cyberpunk-card p-6 rounded-xl">
                <p className="text-white font-semibold">No rhythm? <span className="neon-blue">Doesn't matter.</span></p>
              </div>
              <div className="cyberpunk-card p-6 rounded-xl">
                <p className="text-white font-semibold">No strength? <span className="neon-green">You'll build it.</span></p>
              </div>
            </div>

            <p className="text-xl font-semibold text-white mt-8">
              This is a proven pathway that begins on the pole, but transforms how you show up in your 
              <span className="neon-pink"> relationships</span>, your 
              <span className="neon-blue"> career</span>, your 
              <span className="neon-green"> body </span>
              and your 
              <span className="electric-purple"> voice</span>.
            </p>
          </div>
        </div>

        {/* Method Title */}
        <div className="text-center mb-16 fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="inline-flex items-center space-x-3 mb-6">
            <Flame className="w-8 h-8 neon-pink animate-pulse" />
            <h3 className="text-3xl sm:text-4xl font-orbitron font-black text-transparent bg-clip-text cyberpunk-gradient uppercase tracking-wider">
              THE METHOD: 4 STAGES TO UNSTOPPABLE
            </h3>
            <Flame className="w-8 h-8 neon-pink animate-pulse" />
          </div>
        </div>

        {/* Stages Grid */}
        <div className="space-y-12 mb-20">
          {stages.map((stage, index) => (
            <div 
              key={index}
              className="fade-in group"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                {/* Stage Number & Icon */}
                <div className="lg:col-span-2 text-center lg:text-left">
                  <div className="relative inline-block">
                    <div className={`text-8xl font-orbitron font-black text-${stage.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}>
                      {stage.number}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <div className={`w-20 h-20 hologram-border rounded-2xl flex items-center justify-center bg-gradient-to-br from-${stage.color}/20 to-${stage.color}/40 group-hover:from-${stage.color}/40 group-hover:to-${stage.color}/60 transition-all duration-300`}>
                          <stage.icon className="w-10 h-10 text-white group-hover:animate-pulse" />
                        </div>
                        <div className={`absolute inset-0 bg-${stage.color}/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-10">
                  <div className="cyberpunk-card p-8 rounded-2xl border-l-4" style={{ borderLeftColor: `hsl(var(--${stage.color}))` }}>
                    <div className="mb-6">
                      <h4 className={`text-3xl font-orbitron font-black text-${stage.color} mb-2`}>
                        {stage.title}
                      </h4>
                      <p className="text-xl text-white font-semibold opacity-90">
                        {stage.subtitle}
                      </p>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                      {stage.description}
                    </p>
                    
                    <div className={`bg-gradient-to-r from-${stage.color}/10 to-transparent p-4 rounded-xl border border-${stage.color}/30`}>
                      <div className="flex items-start space-x-3">
                        <Zap className={`w-5 h-5 text-${stage.color} flex-shrink-0 mt-1 animate-pulse`} />
                        <p className="text-white font-semibold">
                          <span className="text-gray-400">You build:</span> {stage.builds}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="text-center fade-in" style={{ animationDelay: '1s' }}>
          <div className="cyberpunk-card p-12 rounded-3xl border-2 border-electric-purple/50 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-electric-purple/10 via-neon-pink/5 to-cyber-blue/10 animate-pulse"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-orbitron font-black text-transparent bg-clip-text cyberpunk-gradient mb-6">
                THIS IS MORE THAN MOVEMENT. IT'S YOUR METAMORPHOSIS.
              </h3>
              
              <div className="space-y-4 text-lg text-gray-300 max-w-3xl mx-auto">
                <p>
                  Other fitness programs stop at <span className="neon-pink font-bold">results</span>.
                </p>
                <p>
                  We keep going — until you <span className="neon-blue font-bold">own who you are</span>.
                </p>
                <p className="text-xl text-white font-semibold mt-8">
                  Welcome to a method that doesn't just change how you <span className="neon-green">move</span>…
                  <br />
                  It changes what you believe is <span className="electric-purple font-bold">possible</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating holographic elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-electric-purple/20 rounded-full blur-3xl animate-pulse float-up"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-neon-pink/20 rounded-full blur-3xl animate-pulse float-up" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-cyber-blue/20 rounded-full blur-3xl animate-pulse float-up" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/3 right-1/3 w-28 h-28 bg-acid-green/20 rounded-full blur-3xl animate-pulse float-up" style={{ animationDelay: '0.5s' }}></div>
    </section>
  );
};

export default LevelUpMethod;
