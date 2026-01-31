import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Heart, Zap, Star, MapPin, ChevronDown, Sparkles, Search, ChevronUp, Target } from 'lucide-react';
import { instructors, Instructor } from '@/data/instructors';
import { studios } from '@/data/studios';
import teachersTeam from '@/assets/teachers-team.png';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const INITIAL_DISPLAY_COUNT = 9;

const Instructors = () => {
  const navigate = useNavigate();
  const [selectedStudio, setSelectedStudio] = useState<string | null>(null);
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAll, setShowAll] = useState(false);

  // Extract all unique specialties from instructors
  const allSpecialties = [...new Set(instructors.flatMap(i => i.specialties))].sort();

  // Get studio name by ID
  const getStudioName = (studioId?: string) => {
    if (!studioId) return null;
    const studio = studios.find(s => s.id === studioId);
    return studio ? studio.name.replace('The Pole Room ', '') : null;
  };

  // Filter instructors by selected studio, specialty, and search query
  const filteredInstructors = instructors.filter(i => {
    const matchesStudio = !selectedStudio || i.studioId === selectedStudio;
    const matchesSpecialty = !selectedSpecialty || i.specialties.includes(selectedSpecialty);
    const matchesSearch = !searchQuery || i.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStudio && matchesSpecialty && matchesSearch;
  });

  // Reset showAll when filters change
  useEffect(() => {
    setShowAll(false);
  }, [selectedStudio, selectedSpecialty, searchQuery]);

  // Display limited or all instructors
  const displayedInstructors = showAll 
    ? filteredInstructors 
    : filteredInstructors.slice(0, INITIAL_DISPLAY_COUNT);
  const hasMoreToShow = filteredInstructors.length > INITIAL_DISPLAY_COUNT;
  const remainingCount = filteredInstructors.length - INITIAL_DISPLAY_COUNT;

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

  const philosophyPillars = [
    {
      icon: Zap,
      title: 'Empowering',
      description: 'We celebrate every achievement and push you to discover what\'s possible',
      color: 'from-fuchsia-500 to-purple-500'
    },
    {
      icon: Heart,
      title: 'Supportive',
      description: 'Our classes are judgment-free zones where everyone belongs',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Star,
      title: 'Expert',
      description: 'All our instructors are highly trained and continuously learning',
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: Target,
      title: 'Progressive',
      description: 'Building skills methodically so you reach your goals safely and confidently',
      color: 'from-cyan-500 to-blue-500'
    }
  ];

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

      {/* Join Our Team Banner - Cyberpunk Style */}
      <section className="relative py-12 sm:py-16 bg-gradient-to-r from-gray-900 via-purple-900/80 to-gray-900 overflow-hidden">
        {/* Cyber grid overlay */}
        <div className="absolute inset-0 cyber-grid opacity-30"></div>
        
        {/* Animated glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cyber-card p-6 sm:p-8 lg:p-10"
          >
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Team Photo with neon border */}
              <div className="w-full lg:w-2/5 flex-shrink-0">
                <div className="relative group">
                  {/* Neon glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-pink-500 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
                  <img 
                    src={teachersTeam} 
                    alt="The Pole Room Team" 
                    className="relative w-full h-56 sm:h-64 lg:h-72 object-cover rounded-xl border-2 border-fuchsia-500/50"
                  />
                </div>
              </div>
              
              {/* Text Content */}
              <div className="flex-1 text-center lg:text-left">
                <p className="text-gray-400 italic text-lg sm:text-xl mb-2">Do you have what it takes to</p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                  <span className="gradient-text neon-glow">JOIN OUR TEAM?</span>
                </h2>
                <p className="text-gray-300 text-base sm:text-lg mb-6 max-w-xl">
                  Be part of Australia's leading pole & aerial studio team. We're looking for passionate 
                  instructors who want to inspire and empower others.
                </p>
                
                {/* CTA Button with neon effect */}
                <Button 
                  className="relative group bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white font-bold px-8 py-4 text-base sm:text-lg rounded-lg transition-all duration-300 hover:scale-105"
                  onClick={() => navigate('/contact')}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-lg blur opacity-0 group-hover:opacity-50 transition duration-300"></span>
                  <span className="relative flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    APPLICATIONS OPEN
                  </span>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Instructors Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filters */}
          <div className="flex flex-col items-center gap-4 mb-12">
            {/* Search Input */}
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
              <Input
                type="text"
                placeholder="Search by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-primary/50 bg-background/50 focus:border-primary text-foreground placeholder:text-muted-foreground"
              />
            </div>

            {/* Dropdown Filters */}
            <div className="flex flex-wrap justify-center gap-4">
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
                <DropdownMenuContent className="w-[200px] bg-background border-border">
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
                <DropdownMenuContent className="w-[200px] max-h-[300px] overflow-y-auto bg-background border-border">
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
          </div>

          {/* Instructor Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedInstructors.map((instructor, index) => (
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

          {/* Show More / Show Less Button */}
          {hasMoreToShow && (
            <div className="flex justify-center mt-12">
              <Button
                variant="outline"
                className="group border-primary/50 bg-background/50 hover:bg-primary/10 text-foreground px-8 py-3"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? (
                  <>
                    <ChevronUp className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform" />
                    Show Less
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
                    Show More ({remainingCount} more instructor{remainingCount !== 1 ? 's' : ''})
                  </>
                )}
              </Button>
            </div>
          )}

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

      {/* Teaching Philosophy - Standout Grid Design */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-purple-900/50 to-gray-900 overflow-hidden">
        {/* Cyber grid overlay */}
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fuchsia-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 mb-6">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="gradient-text neon-glow">Teaching Philosophy</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Every instructor at The Pole Room shares our core belief: transformation happens 
              when you feel safe, supported, and celebrated. We're not just teaching moves - 
              we're guiding you to discover your power.
            </p>
          </motion.div>

          {/* Philosophy Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophyPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="cyber-card h-full p-6 hover:scale-105 transition-transform duration-300">
                  {/* Icon with gradient background */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${pillar.color} mb-5`}>
                    <pillar.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Instructors;
