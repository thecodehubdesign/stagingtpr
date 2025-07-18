
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Heart, Zap, Crown, ArrowRight } from 'lucide-react';

const FourPolePathways = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const pathways = [
    {
      id: 1,
      name: "The Achiever",
      subtitle: "Goals & Growth",
      description: "You love setting targets and smashing them",
      icon: Star,
      color: "from-yellow-400 to-orange-500",
      hoverDetails: [
        "You're motivated by progress and milestones",
        "Love tracking improvements and learning new skills",
        "Thrive on structured programs and challenges",
        "Want to see how strong and capable you can become"
      ],
      image: "/lovable-uploads/14503a9b-f9c7-41ee-a0b5-131b4a9a6989.png"
    },
    {
      id: 2,
      name: "The Social Butterfly",
      subtitle: "Community & Connection",
      description: "It's all about the friendships and fun times",
      icon: Heart,
      color: "from-pink-400 to-rose-500",
      hoverDetails: [
        "You're here for the amazing community vibes",
        "Love group classes and making new friends",
        "Enjoy the social aspect as much as the workout",
        "Want to be part of something bigger than yourself"
      ],
      image: "/lovable-uploads/5b3dd8e8-6bc4-4f4a-af01-655d55902167.png"
    },
    {
      id: 3,
      name: "The Athlete",
      subtitle: "Strength & Conditioning",
      description: "You want the ultimate full-body workout",
      icon: Zap,
      color: "from-cyan-400 to-blue-500",
      hoverDetails: [
        "Fitness is your priority - you want results",
        "Love the strength-building aspect of pole",
        "Enjoy pushing your physical limits",
        "Want to complement your existing fitness routine"
      ],
      image: "/lovable-uploads/9f395d23-917c-4f57-aee6-3730701698b1.png"
    },
    {
      id: 4,
      name: "The Stage Star",
      subtitle: "Performance & Expression",
      description: "You're ready to shine and express yourself",
      icon: Crown,
      color: "from-purple-400 to-fuchsia-500",
      hoverDetails: [
        "You love the artistry and self-expression",
        "Dream of performing and feeling confident",
        "Want to explore your sensual, powerful side",
        "Ready to step into the spotlight and shine"
      ],
      image: "/lovable-uploads/29e3bddc-c99a-43e5-87df-ab4c0905e1a0.png"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Which One <span className="gradient-text">Are You?</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-4">
            Every pole journey is unique. Find your pathway and start where it feels right for you.
          </p>
          <Badge className="bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/30 border">
            You're never locked in—most people explore different pathways as they grow!
          </Badge>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pathways.map((pathway) => {
            const IconComponent = pathway.icon;
            const isHovered = hoveredCard === pathway.id;
            
            return (
              <Card
                key={pathway.id}
                className="cyber-card relative overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105"
                onMouseEnter={() => setHoveredCard(pathway.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ minHeight: '400px' }}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${pathway.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>
                </div>

                {/* Gradient Border */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${pathway.color}`}></div>

                {/* Content */}
                <div className="relative z-10 p-6 h-full flex flex-col">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${pathway.color} rounded-full flex items-center justify-center mb-4 neon-glow`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Always visible content */}
                  <div className={`transition-all duration-300 ${isHovered ? 'opacity-0 transform -translate-y-4' : 'opacity-100'}`}>
                    <h3 className="text-xl font-bold text-white mb-2">{pathway.name}</h3>
                    <p className="text-fuchsia-400 font-medium text-sm mb-3">{pathway.subtitle}</p>
                    <p className="text-gray-300 text-sm">{pathway.description}</p>
                  </div>

                  {/* Hover content */}
                  <div className={`absolute inset-6 transition-all duration-300 ${isHovered ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4 pointer-events-none'}`}>
                    <div className="flex flex-col h-full">
                      <h3 className="text-xl font-bold text-white mb-4">{pathway.name}</h3>
                      <div className="space-y-2 flex-grow">
                        {pathway.hoverDetails.map((detail, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <ArrowRight className="w-3 h-3 text-fuchsia-400 mt-1 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{detail}</span>
                          </div>
                        ))}
                      </div>
                      <Button className={`w-full bg-gradient-to-r ${pathway.color} hover:opacity-90 text-white font-bold mt-4`}>
                        This Is Me!
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FourPolePathways;
