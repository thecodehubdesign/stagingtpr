
import { Button } from '@/components/ui/button';
import { Star, Clock, Users, Heart, Zap } from 'lucide-react';

const FreeTrialOffer = () => {
  const benefits = [
    { icon: Star, text: "No experience necessary" },
    { icon: Clock, text: "45-minute trial class" },
    { icon: Users, text: "Small, supportive groups" },
    { icon: Heart, text: "Welcoming community" }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Cyberpunk Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(8,8,15,0.9), rgba(20,20,35,0.9)), url('https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      
      {/* Neon Grid Overlay */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <div className="inline-flex items-center space-x-2 text-fuchsia-400 mb-4">
            <Zap className="w-5 h-5 neon-glow" />
            <span className="text-sm font-semibold uppercase tracking-wide neon-glow">Limited Time Offer</span>
            <Zap className="w-5 h-5 neon-glow" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 gradient-text pulse-neon">
            Experience It for Yourself – On Us!
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Book a free trial and take your first step into a more confident, 
            <span className="text-fuchsia-400 neon-glow"> empowered </span>
            version of you.
          </p>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-3 cyber-card rounded-lg p-4 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <benefit.icon className="w-5 h-5 text-cyan-400 flex-shrink-0 neon-glow" />
                <span className="text-white text-sm font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <Button 
              size="lg" 
              className="neon-button text-lg px-12 py-4 h-auto text-black font-bold shadow-2xl"
            >
              Book My Free Trial
            </Button>
            
            <p className="text-gray-400 text-sm">
              No credit card required • Available at all locations
            </p>
          </div>
        </div>
      </div>

      {/* Floating Neon Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-fuchsia-500/30 rounded-full blur-xl animate-pulse float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-500/30 rounded-full blur-xl animate-pulse float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default FreeTrialOffer;
