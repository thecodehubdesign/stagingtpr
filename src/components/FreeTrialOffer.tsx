import { Button } from '@/components/ui/button';
import { Star, Clock, Users, Heart } from 'lucide-react';

const FreeTrialOffer = () => {
  const benefits = [
    { icon: Star, text: "No experience necessary" },
    { icon: Clock, text: "45-minute trial class" },
    { icon: Users, text: "Small, supportive groups" },
    { icon: Heart, text: "Welcoming community" }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <div className="inline-flex items-center space-x-2 text-rose-400 mb-4">
            <Star className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">Limited Time Offer</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Experience It for Yourself – On Us!
          </h2>
          
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Book a free trial and take your first step into a more confident, empowered version of you.
          </p>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <benefit.icon className="w-5 h-5 text-rose-400 flex-shrink-0" />
                <span className="text-white text-sm font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-lg px-12 py-4 h-auto text-white shadow-2xl"
            >
              Book My Free Trial
            </Button>
            
            <p className="text-gray-300 text-sm">
              No credit card required • Available at all locations
            </p>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-rose-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default FreeTrialOffer;
