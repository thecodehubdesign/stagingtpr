
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

interface StudioInstructorsProps {
  studioId: string;
}

const StudioInstructors = ({ studioId }: StudioInstructorsProps) => {
  // Mock instructor data - in a real app, this would be fetched based on studioId
  const instructors = [
    {
      id: 1,
      name: "Sarah Johnson",
      specialties: ["Pole", "Flexibility"],
      experience: "5+ years",
      bio: "Sarah brings passion and expertise to every class, helping students discover their strength and confidence.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: "Emma Wilson",
      specialties: ["Aerials", "Pole"],
      experience: "7+ years",
      bio: "Emma's creative choreography and supportive teaching style makes every class an inspiring experience.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      name: "Jessica Lee",
      specialties: ["Pole", "Flow"],
      experience: "4+ years",
      bio: "Jessica focuses on building strength and grace, helping students achieve their fitness goals with confidence.",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Meet Your <span className="gradient-text">Instructors</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our experienced and passionate instructors are here to guide you on your fitness journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor) => (
            <Card key={instructor.id} className="group relative overflow-hidden bg-gray-800 border-gray-700 h-96 cursor-pointer">
              <div className="relative h-full">
                <img 
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Rating stars - always visible */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Content overlay - slides up on hover/touch */}
                <div className="absolute inset-x-0 bottom-0 p-6 transform translate-y-4 transition-all duration-300 group-hover:translate-y-0 group-active:translate-y-0">
                  <h3 className="text-xl font-bold text-white mb-2">{instructor.name}</h3>
                  <p className="text-fuchsia-400 font-medium mb-3">{instructor.experience} Experience</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {instructor.specialties.map((specialty) => (
                      <Badge 
                        key={specialty}
                        className="bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/30"
                      >
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Bio text - only visible on hover/touch */}
                  <p className="text-gray-300 text-sm leading-relaxed opacity-0 transform translate-y-4 transition-all duration-300 delay-100 group-hover:opacity-100 group-hover:translate-y-0 group-active:opacity-100 group-active:translate-y-0">
                    {instructor.bio}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudioInstructors;
