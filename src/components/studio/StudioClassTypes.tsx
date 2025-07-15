
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Studio } from '@/data/studios';
import FreeTrialBookingForm from '../FreeTrialBookingForm';

interface StudioClassTypesProps {
  studio: Studio;
}

const StudioClassTypes = ({ studio }: StudioClassTypesProps) => {
  const classTypes = [
    {
      name: "Pole Tricks",
      description: "Master impressive pole tricks and build strength with our comprehensive tricks program. Perfect for developing power and technique.",
      heroImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      duration: "60 minutes",
      difficulty: "All Levels"
    },
    {
      name: "Pole Dance",
      description: "Express yourself through the art of pole dance. Learn flowing choreography and build confidence in a supportive environment.",
      heroImage: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      duration: "60 minutes",
      difficulty: "All Levels"
    },
    {
      name: "Flexibility & Conditioning",
      description: "Enhance your flexibility and build functional strength. Essential foundation for all pole work and overall fitness.",
      heroImage: "https://images.unsplash.com/photo-1571019613454-1cbffaa5b517?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      duration: "45 minutes",
      difficulty: "All Levels"
    }
  ];

  return (
    <section className="py-16 bg-gray-800/50 rounded-2xl my-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Available <span className="gradient-text">Class Types</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore our range of classes designed for all skill levels and interests.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {classTypes.map((classType, index) => (
            <Card key={index} className="overflow-hidden bg-gray-800 border-gray-700">
              {/* Hero Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={classType.heroImage} 
                  alt={classType.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">{classType.name}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {classType.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-white">{classType.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Level:</span>
                    <span className="text-white">{classType.difficulty}</span>
                  </div>
                </div>

                <Badge className="bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/30">
                  {classType.name}
                </Badge>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <FreeTrialBookingForm />
        </div>
      </div>
    </section>
  );
};

export default StudioClassTypes;
