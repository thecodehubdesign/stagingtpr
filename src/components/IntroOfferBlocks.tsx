
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Heart, Zap, Crown, ArrowRight, Calendar, Users } from 'lucide-react';

const IntroOfferBlocks = () => {
  const offers = [
    {
      type: "The Achiever",
      icon: Star,
      color: "from-yellow-400 to-orange-500",
      offer: "28-Day Foundation Program",
      price: "$89",
      originalPrice: "$120",
      description: "Perfect for goal-setters who want structured progress",
      features: [
        "4 progressive classes over 4 weeks",
        "Personal progress tracking",
        "Goal-setting session with instructor",
        "Free practice session included"
      ],
      whyThisFits: "You'll love the structured approach and being able to track your improvements week by week",
      cta: "Start My Journey"
    },
    {
      type: "The Social Butterfly",
      icon: Heart,
      color: "from-pink-400 to-rose-500",
      offer: "Bring-a-Friend Trial",
      price: "$45",
      originalPrice: "$60",
      description: "Share the experience with someone special",
      features: [
        "2 classes for you + your friend",
        "Welcome drink and chat time",
        "Group photo session",
        "Friend gets discount if they join"
      ],
      whyThisFits: "Making memories with friends is what you're all about - this doubles the fun!",
      cta: "Bring My Friend"
    },
    {
      type: "The Athlete",
      icon: Zap,
      color: "from-cyan-400 to-blue-500",
      offer: "Strength & Conditioning Package",
      price: "$75",
      originalPrice: "$100",
      description: "Maximum workout, maximum results",
      features: [
        "3 high-intensity pole classes",
        "Conditioning workshop included",
        "Flexibility assessment",
        "Nutrition guide provided"
      ],
      whyThisFits: "You want results fast - this intensive package delivers serious fitness gains",
      cta: "Get Strong Now"
    },
    {
      type: "The Stage Star",
      icon: Crown,
      color: "from-purple-400 to-fuchsia-500",
      offer: "Express Yourself Experience",
      price: "$65",
      originalPrice: "$85",
      description: "Unleash your inner performer",
      features: [
        "2 expressive movement classes",
        "Mini photoshoot session",
        "Confidence building workshop",
        "Performance tips from pros"
      ],
      whyThisFits: "You're ready to shine - this experience helps you find your unique pole personality",
      cta: "Find My Stage"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Your Perfect <span className="gradient-text">Starting Package</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Each pathway has its ideal intro offer - designed specifically for how you want to experience pole
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offers.map((offer, index) => {
            const IconComponent = offer.icon;
            
            return (
              <Card
                key={index}
                className="cyber-card p-6 relative overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${offer.color}`}></div>
                
                {/* Header */}
                <div className="text-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${offer.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <Badge className="bg-gray-700/50 text-gray-300 border-gray-600 text-xs mb-2">
                    FOR {offer.type.toUpperCase()}
                  </Badge>
                  <h3 className="text-lg font-bold text-white">{offer.offer}</h3>
                </div>

                {/* Pricing */}
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-2xl font-bold text-white">{offer.price}</span>
                    <span className="text-sm text-gray-400 line-through">{offer.originalPrice}</span>
                  </div>
                  <p className="text-gray-300 text-sm mt-1">{offer.description}</p>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {offer.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-2">
                      <ArrowRight className="w-3 h-3 text-fuchsia-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Why This Fits */}
                <div className="bg-gray-800/50 rounded-lg p-3 mb-6">
                  <p className="text-xs text-gray-400 mb-1">Why this fits you:</p>
                  <p className="text-xs text-gray-300">{offer.whyThisFits}</p>
                </div>

                {/* CTA */}
                <Button className={`w-full bg-gradient-to-r ${offer.color} hover:opacity-90 text-white font-bold`}>
                  {offer.cta}
                </Button>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Not sure which offer suits you best?
          </p>
          <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
            Take Our 1-Minute Quiz
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IntroOfferBlocks;
