import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Studio } from '@/data/studios';
import FreeTrialBookingForm from '../FreeTrialBookingForm';

interface StudioClassTypesProps {
  studio: Studio;
}

const StudioClassTypes = ({ studio }: StudioClassTypesProps) => {
  const allClassTypes = [
    {
      name: "Beginner Pole",
      apparatus: "Pole",
      description: "Perfect for first-timers! Learn basic spins, poses, and build foundational strength.",
      duration: "60 minutes",
      difficulty: "Beginner"
    },
    {
      name: "Intermediate Pole",
      apparatus: "Pole",
      description: "Build on your basics with more challenging moves and fluid combinations.", 
      duration: "60 minutes",
      difficulty: "Intermediate"
    },
    {
      name: "Advanced Pole",
      apparatus: "Pole", 
      description: "Master complex tricks, inversions, and advanced choreography.",
      duration: "60 minutes",
      difficulty: "Advanced"
    },
    {
      name: "Aerial Silks",
      apparatus: "Aerials",
      description: "Graceful movements and poses using aerial fabric to build strength and flexibility.",
      duration: "60 minutes", 
      difficulty: "All Levels"
    },
    {
      name: "Aerial Hoop",
      apparatus: "Aerials", 
      description: "Elegant poses and flows on the lyra hoop, perfect for building upper body strength.",
      duration: "60 minutes",
      difficulty: "All Levels"
    },
    {
      name: "Pole Flow",
      apparatus: "Pole",
      description: "Combine pole work with floor flow for a complete full-body workout.",
      duration: "60 minutes",
      difficulty: "Intermediate"
    }
  ];

  // Filter classes based on studio apparatus
  const availableClasses = allClassTypes.filter(classType => 
    studio.apparatus.some(apparatus => classType.apparatus.includes(apparatus))
  );

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {availableClasses.map((classType, index) => (
            <Card key={index} className="p-6 bg-gray-800 border-gray-700">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-white">{classType.name}</h3>
                <Badge className="bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/30">
                  {classType.apparatus}
                </Badge>
              </div>
              
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
