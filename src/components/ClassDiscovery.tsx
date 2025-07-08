import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Wind, Music } from 'lucide-react';

const ClassDiscovery = () => {
  const classTypes = [
    {
      title: "Pole Dancing",
      description: "Build strength, flexibility and confidence on the pole",
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      gradient: "from-rose-500 to-pink-500"
    },
    {
      title: "Aerial (Silks/Lyra)",
      description: "Graceful movements through the air on silks and hoop",
      icon: Wind,
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      title: "Dance & Floorwork",
      description: "Sensual movement and choreography on the ground",
      icon: Music,
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      gradient: "from-rose-400 to-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="classes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Class Is Right for You?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover your perfect fitness journey with our three main pathways to strength and grace
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {classTypes.map((classType, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={classType.image}
                  alt={classType.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${classType.gradient} opacity-60`}></div>
                
                {/* Icon */}
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <classType.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{classType.title}</h3>
                <p className="text-gray-600 mb-4">{classType.description}</p>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-rose-50 group-hover:border-rose-300 group-hover:text-rose-700 transition-colors"
                >
                  Explore Classes
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Class Finder CTA */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-4 bg-white p-6 rounded-2xl shadow-lg">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Still not sure?</h3>
              <p className="text-gray-600 text-sm">Use our Class Finder Tool to get personalized recommendations</p>
            </div>
            <Button className="bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 whitespace-nowrap">
              Find My Class
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassDiscovery;
