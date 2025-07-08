
import { Zap, Users, Heart, Crown, Sparkles, ArrowRight } from 'lucide-react';

const LevelUpMethod = () => {
  const stages = [
    {
      number: "01",
      title: "Initiation",
      subtitle: "The First Step is Showing Up",
      description: "You arrive unsure. Maybe intimidated. Maybe even doubting if this is for you. That's the moment of transformation. We surround you with a community that believes in you before you believe in yourself.",
      builds: "trust in your body, comfort in movement, and a new sense of possibility.",
      icon: Users,
      color: "from-fuchsia-500 to-purple-500"
    },
    {
      number: "02",
      title: "Integration",
      subtitle: "Strength Meets Identity",
      description: "With every class, you're doing more than learning tricks. You're creating a new narrative: \"I can do hard things.\" You start to carry yourself differently — at work, in social settings, and in the mirror.",
      builds: "physical power, mental resilience and a sense of belonging.",
      icon: Zap,
      color: "from-purple-500 to-cyan-500"
    },
    {
      number: "03",
      title: "Expression",
      subtitle: "Find Your Voice Through Movement",
      description: "You start to move with purpose. Style. Emotion. Pole becomes your outlet — a place where you explore the parts of yourself you've kept hidden.",
      builds: "confidence in being seen, self-expression and emotional intelligence.",
      icon: Heart,
      color: "from-cyan-500 to-pink-500"
    },
    {
      number: "04",
      title: "Expansion",
      subtitle: "Step Into Every Room Like You Own It",
      description: "By now, it's not about the pole anymore. Your posture has changed. Your tone of voice. Your decisions. You've become someone who takes up space — proudly, powerfully, and without apology.",
      builds: "magnetism, courage and unstoppable momentum — in every part of your life.",
      icon: Crown,
      color: "from-pink-500 to-fuchsia-500"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden cyber-grid">
      {/* Cyberpunk Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(8,8,15,0.95), rgba(20,20,35,0.95)), url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      
      {/* Neon Accent Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-6 h-6 text-fuchsia-400 neon-glow" />
            <span className="text-sm font-semibold uppercase tracking-wider text-fuchsia-400 neon-glow">
              Our Method
            </span>
            <Sparkles className="w-6 h-6 text-fuchsia-400 neon-glow" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 gradient-text pulse-neon">
            Unlock Your Extraordinary
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl text-gray-300 leading-relaxed">
              At The Pole Room, we don't just teach pole dancing — we guide everyday people to discover their power, 
              rewrite their identity, and step into a life of 
              <span className="text-fuchsia-400 neon-glow"> unapologetic confidence</span>.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div className="cyber-card p-4 rounded-xl">
                <p className="text-gray-400 text-sm mb-1">No experience?</p>
                <p className="text-cyan-400 font-semibold neon-glow">No worries.</p>
              </div>
              <div className="cyber-card p-4 rounded-xl">
                <p className="text-gray-400 text-sm mb-1">No rhythm?</p>
                <p className="text-fuchsia-400 font-semibold neon-glow">Doesn't matter.</p>
              </div>
              <div className="cyber-card p-4 rounded-xl">
                <p className="text-gray-400 text-sm mb-1">No strength?</p>
                <p className="text-purple-400 font-semibold neon-glow">You'll build it.</p>
              </div>
            </div>
            
            <p className="text-lg text-gray-300">
              This is a proven pathway that begins on the pole, but transforms how you show up in your 
              <span className="text-cyan-400 neon-glow"> relationships</span>, your 
              <span className="text-fuchsia-400 neon-glow"> career</span>, your 
              <span className="text-purple-400 neon-glow"> body </span>
              and your 
              <span className="text-pink-400 neon-glow"> voice</span>.
            </p>
          </div>
        </div>

        {/* The Method Title */}
        <div className="text-center mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="inline-flex items-center space-x-3 cyber-card px-8 py-4 rounded-full">
            <Zap className="w-6 h-6 text-orange-400 neon-glow" />
            <h3 className="text-2xl font-bold text-white">THE METHOD: 4 STAGES TO UNSTOPPABLE</h3>
            <Zap className="w-6 h-6 text-orange-400 neon-glow" />
          </div>
        </div>

        {/* Stages */}
        <div className="space-y-12">
          {stages.map((stage, index) => (
            <div 
              key={index}
              className="relative animate-fade-in"
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              {/* Connection Line */}
              {index < stages.length - 1 && (
                <div className="absolute left-1/2 top-full w-px h-12 bg-gradient-to-b from-fuchsia-500 to-transparent transform -translate-x-1/2 z-0"></div>
              )}
              
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                {/* Stage Number & Icon */}
                <div className="lg:col-span-2 flex flex-col items-center text-center">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${stage.color} flex items-center justify-center mb-4 neon-glow cyber-border`}>
                    <stage.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-transparent bg-gradient-to-br bg-clip-text from-white to-gray-400">
                    {stage.number}
                  </div>
                </div>

                {/* Stage Content */}
                <div className="lg:col-span-10">
                  <div className="cyber-card p-8 rounded-2xl">
                    <div className="mb-6">
                      <h4 className="text-2xl font-bold text-white mb-2 gradient-text">
                        {stage.title}
                      </h4>
                      <h5 className="text-lg text-gray-400 mb-4">{stage.subtitle}</h5>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {stage.description}
                      </p>
                    </div>
                    
                    {/* What You Build */}
                    <div className="flex items-start space-x-3 p-4 bg-gradient-to-r from-fuchsia-500/10 to-cyan-500/10 rounded-xl cyber-border">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-fuchsia-500 to-cyan-500 rounded-lg flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1">You build:</p>
                        <p className="text-white font-medium">{stage.builds}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Message */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="cyber-card p-8 rounded-2xl max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Sparkles className="w-5 h-5 text-fuchsia-400 neon-glow" />
              <h3 className="text-2xl font-bold gradient-text">This Is More Than Movement. It's Your Metamorphosis.</h3>
              <Sparkles className="w-5 h-5 text-fuchsia-400 neon-glow" />
            </div>
            
            <p className="text-lg text-gray-300 mb-4">
              Other fitness programs stop at results.<br />
              <span className="text-fuchsia-400 neon-glow">We keep going — until you own who you are.</span>
            </p>
            
            <div className="flex items-center justify-center space-x-2 text-white">
              <span>Welcome to a method that doesn't just change how you move…</span>
              <ArrowRight className="w-5 h-5 text-cyan-400 neon-glow" />
              <span className="text-cyan-400 neon-glow font-semibold">It changes what you believe is possible.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Neon Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-fuchsia-500/30 rounded-full blur-xl animate-pulse float"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-cyan-500/30 rounded-full blur-xl animate-pulse float" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-3/4 left-1/3 w-16 h-16 bg-purple-500/30 rounded-full blur-xl animate-pulse float" style={{ animationDelay: '2.5s' }}></div>
    </section>
  );
};

export default LevelUpMethod;
