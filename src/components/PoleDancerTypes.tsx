
import { Card, CardContent } from '@/components/ui/card';
import { Users, Zap, Music, Trophy } from 'lucide-react';

const PoleDancerTypes = () => {
  const dancerTypes = [
    {
      title: "Fun & Friendship / Community",
      description: "Find your people and build lifelong friendships.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      icon: Users,
      gradient: "from-pink-500/20 to-purple-500/20",
      iconColor: "text-pink-400"
    },
    {
      title: "Fitness & Strength",
      description: "Challenge your body and discover a new level of fitness and strength.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      icon: Zap,
      gradient: "from-cyan-500/20 to-blue-500/20",
      iconColor: "text-cyan-400"
    },
    {
      title: "Performance & Dance",
      description: "Express yourself, unleash your creativity, and dance like no one's watching.",
      image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      icon: Music,
      gradient: "from-purple-500/20 to-fuchsia-500/20",
      iconColor: "text-purple-400"
    },
    {
      title: "Competitions",
      description: "Take it to the next level and shine on stage in competitions.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      icon: Trophy,
      gradient: "from-yellow-500/20 to-orange-500/20",
      iconColor: "text-yellow-400"
    }
  ];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-fuchsia-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            What Kind of Pole Dancer Will You Become at The Pole Room?
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-fuchsia-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        {/* Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dancerTypes.map((type, index) => {
            const IconComponent = type.icon;
            return (
              <Card 
                key={index} 
                className="cyber-card group hover:scale-105 transition-all duration-500 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative">
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={type.image} 
                      alt={type.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${type.gradient} opacity-60`}></div>
                    
                    {/* Icon Overlay */}
                    <div className="absolute top-4 right-4">
                      <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                        <IconComponent className={`w-6 h-6 ${type.iconColor}`} />
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 bg-gradient-to-b from-card/90 to-card">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:gradient-text transition-all duration-300">
                    {type.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {type.description}
                  </p>
                  
                  {/* Decorative line */}
                  <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-fuchsia-400 to-cyan-400 group-hover:w-full transition-all duration-500"></div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom decorative elements */}
        <div className="flex justify-center mt-16">
          <div className="flex space-x-2">
            {[...Array(4)].map((_, i) => (
              <div 
                key={i}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400 animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoleDancerTypes;
