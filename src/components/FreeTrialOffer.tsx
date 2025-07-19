import { Button } from '@/components/ui/button';
import { Star, Clock, Users, Heart, Zap, LucideIcon } from 'lucide-react';
import VoucherClaimForm from './VoucherClaimForm';
interface Benefit {
  icon: LucideIcon;
  text: string;
}
interface FreeTrialOfferProps {
  backgroundImage?: string;
  limitedTimeText?: string;
  mainHeading?: string;
  description?: string;
  highlightedWord?: string;
  benefits?: Benefit[];
  buttonText?: string;
  disclaimerText?: string;
}
const FreeTrialOffer = ({
  backgroundImage = 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  limitedTimeText = 'Limited Time Offers',
  mainHeading = 'Get Started with Amazing Savings!',
  description = 'Choose from our exclusive voucher offers and take your first step into a more confident,',
  highlightedWord = 'empowered',
  benefits = [{
    icon: Star,
    text: "No experience necessary"
  }, {
    icon: Clock,
    text: "Flexible scheduling"
  }, {
    icon: Users,
    text: "Small, supportive groups"
  }, {
    icon: Heart,
    text: "Welcoming community"
  }],
  buttonText = 'Claim Special Offer',
  disclaimerText = 'No credit card required • Multiple locations available'
}: FreeTrialOfferProps) => {
  return <section className="py-20 relative overflow-hidden">
      {/* Cyberpunk Background */}
      <div className="absolute inset-0 bg-cover bg-center" style={{
      backgroundImage: `linear-gradient(rgba(8,8,15,0.9), rgba(20,20,35,0.9)), url('${backgroundImage}')`
    }} />
      
      {/* Neon Grid Overlay */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <div className="inline-flex items-center space-x-2 text-fuchsia-400 mb-4">
            <Zap className="w-5 h-5 neon-glow" />
            <span className="text-sm font-semibold uppercase tracking-wide neon-glow">{limitedTimeText}</span>
            <Zap className="w-5 h-5 neon-glow" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 gradient-text pulse-neon gradient-text">
            {mainHeading}
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {description}
            <span className="text-fuchsia-400 neon-glow"> {highlightedWord} </span>
            version of you.
          </p>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {benefits.map((benefit, index) => <div key={index} className="flex items-center space-x-3 cyber-card rounded-lg p-4 animate-fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <benefit.icon className="w-5 h-5 text-cyan-400 flex-shrink-0 neon-glow" />
                <span className="text-white text-sm font-medium">{benefit.text}</span>
              </div>)}
          </div>

          <div className="space-y-4">
            <VoucherClaimForm />
            
            <p className="text-gray-400 text-sm">
              {disclaimerText}
            </p>
          </div>
        </div>
      </div>

      {/* Floating Neon Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-fuchsia-500/30 rounded-full blur-xl animate-pulse float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-500/30 rounded-full blur-xl animate-pulse float" style={{
      animationDelay: '1s'
    }}></div>
    </section>;
};
export default FreeTrialOffer;