import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, Zap, Star, MapPin, ChevronDown, Sparkles } from 'lucide-react';
import { instructors, Instructor } from '@/data/instructors';
import { studios } from '@/data/studios';
import teachersTeam from '@/assets/teachers-team.png';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Instructors = () => {
  const navigate = useNavigate();
  const [selectedStudio, setSelectedStudio] = useState<string | null>(null);
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);

  // Extract all unique specialties from instructors
  const allSpecialties = [...new Set(instructors.flatMap(i => i.specialties))].sort();

  // Get studio name by ID
  const getStudioName = (studioId?: string) => {
    if (!studioId) return null;
    const studio = studios.find(s => s.id === studioId);
    return studio ? studio.name.replace('The Pole Room ', '') : null;
  };

  // Filter instructors by selected studio and specialty
  const filteredInstructors = instructors.filter(i => {
    const matchesStudio = !selectedStudio || i.studioId === selectedStudio;
    const matchesSpecialty = !selectedSpecialty || i.specialties.includes(selectedSpecialty);
    return matchesStudio && matchesSpecialty;
  });

  const getSpecialtyColor = (specialty: string) => {
    const colors: Record<string, string> = {
      'Pole': 'bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/30',
      'Aerial Silks': 'bg-purple-500/10 text-purple-400 border-purple-500/30',
      'Aerial Hoop': 'bg-blue-500/10 text-blue-400 border-blue-500/30',
      'Flexibility': 'bg-green-500/10 text-green-400 border-green-500/30',
      'Dance': 'bg-pink-500/10 text-pink-400 border-pink-500/30',
      'Contortion': 'bg-orange-500/10 text-orange-400 border-orange-500/30',
      'Strength Training': 'bg-red-500/10 text-red-400 border-red-500/30',
      'Tricks': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
      'Flow': 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
      'Choreography': 'bg-violet-500/10 text-violet-400 border-violet-500/30',
      'Exotic': 'bg-rose-500/10 text-rose-400 border-rose-500/30',
      'Heels': 'bg-amber-500/10 text-amber-400 border-amber-500/30',
      'Floor Work': 'bg-teal-500/10 text-teal-400 border-teal-500/30',
      'Beginners': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      'Fundamentals': 'bg-lime-500/10 text-lime-400 border-lime-500/30',
    };
    return colors[specialty] || 'bg-gray-500/10 text-gray-400 border-gray-500/30';
  };

  const handleInstructorClick = (instructor: Instructor) => {
    // Navigate to studio page if instructor has a studio
    if (instructor.studioId) {
      navigate(`/studios/${instructor.studioId}`);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 cyber-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl sm:text-6xl font-bold gradient-text neon-glow mb-6">
              Meet Our Instructors
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Our team of expert instructors are passionate about guiding you through 
              your transformation journey with skill, compassion, and unwavering support.
            </p>
          </div>
        </div>
      </section>

      {/* Join Our Team Banner */}
      <section className="bg-white py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Team Photo */}
            <div className="w-full md:w-1/3 flex-shrink-0">
              <img 
                src={teachersTeam} 
                alt="The Pole Room Team" 
                className="w-full h-48 md:h-56 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-gray-600 italic text-lg sm:text-xl mb-1">Do you have what it takes to</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                JOIN OUR TEAM?
              </h2>
            </div>
            
            {/* CTA Button */}
            <div className="flex-shrink-0">
              <Button 
                className="bg-primary hover:bg-primary/90 text-white font-bold px-6 py-3 text-sm sm:text-base"
                onClick={() => navigate('/contact')}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                APPLICATIONS OPEN
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters - Studio and Specialty */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {/* Filter by Studio */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  className="border-primary/50 bg-background/50 hover:bg-primary/10 text-foreground min-w-[200px] justify-between"
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    {selectedStudio ? getStudioName(selectedStudio) : 'All Studios'}
                  </div>
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[200px]">
                <DropdownMenuItem onClick={() => setSelectedStudio(null)}>
                  All Studios
                </DropdownMenuItem>
                {studios.map((studio) => (
                  <DropdownMenuItem 
                    key={studio.id} 
                    onClick={() => setSelectedStudio(studio.id)}
                  >
                    {studio.name.replace('The Pole Room ', '')}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Filter by Specialty */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  className="border-primary/50 bg-background/50 hover:bg-primary/10 text-foreground min-w-[200px] justify-between"
                >
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-primary" />
                    {selectedSpecialty || 'All Specialties'}
                  </div>
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[200px] max-h-[300px] overflow-y-auto">
                <DropdownMenuItem onClick={() => setSelectedSpecialty(null)}>
                  All Specialties
                </DropdownMenuItem>
                {allSpecialties.map((specialty) => (
                  <DropdownMenuItem 
                    key={specialty} 
                    onClick={() => setSelectedSpecialty(specialty)}
                  >
                    {specialty}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInstructors.map((instructor, index) => (
              <Card 
                key={instructor.id}
                className="cyber-card overflow-hidden animate-fade-in hover:scale-105 transition-transform duration-300 cursor-pointer"
                style={{ animationDelay: `${index * 0.15}s` }}
                onClick={() => handleInstructorClick(instructor)}
              >
                {/* Instructor Photo */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* Studio Location Badge */}
                  {instructor.studioId && (
                    <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      <MapPin className="w-3.5 h-3.5 text-primary" />
                      <span className="text-white text-sm font-medium">
                        {getStudioName(instructor.studioId)}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-1">{instructor.name}</h3>
                    <p className="text-primary font-medium">{instructor.specialty}</p>
                  </div>

                  {/* Experience */}
                  <div className="mb-4 text-sm text-muted-foreground">
                    {instructor.experience} Experience
                  </div>

                  {/* Specialties */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {instructor.specialties.map((specialty, specialtyIndex) => (
                        <Badge 
                          key={specialtyIndex}
                          className={`${getSpecialtyColor(specialty)} border text-xs`}
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {instructor.bio}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* No results message */}
          {filteredInstructors.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No instructors found matching your filters. Try selecting different options.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Instructor Philosophy */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-16 h-16 text-primary mx-auto mb-6 neon-glow" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Our <span className="gradient-text">Teaching Philosophy</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Every instructor at The Pole Room shares our core belief: transformation happens 
            when you feel safe, supported, and celebrated. We're not just teaching moves - 
            we're guiding you to discover your power.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Empowering</h3>
              <p className="text-muted-foreground text-sm">We celebrate every achievement and push you to discover what's possible</p>
            </div>
            <div className="text-center">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Supportive</h3>
              <p className="text-muted-foreground text-sm">Our classes are judgment-free zones where everyone belongs</p>
            </div>
            <div className="text-center">
              <Star className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Expert</h3>
              <p className="text-muted-foreground text-sm">All our instructors are highly trained and continuously learning</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Instructors;
