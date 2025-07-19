import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Clock, Users, Search, Filter, MapPin, GraduationCap, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useMemo } from 'react';

const Classes = () => {
  // State for search and filters
  const [searchQuery, setSearchQuery] = useState('');
  const [levelFilter, setLevelFilter] = useState('');
  const [styleFilter, setStyleFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [instructorFilter, setInstructorFilter] = useState('');

  // Enhanced class data with additional properties for filtering
  const allClasses = [
    {
      name: "Pole Foundations",
      level: "Beginner",
      duration: "60 min",
      description: "Perfect first class - learn basic spins, poses and floorwork in a supportive environment",
      slug: "beginner-pole-foundations",
      category: "Pole Dancing",
      style: "Pole",
      instructor: "Sarah Chen",
      location: "Downtown Studio",
      image: "/lovable-uploads/1d83d83b-0057-4bd1-8052-79584b039a97.jpg",
      featured: true
    },
    {
      name: "Pole Progression",
      level: "Intermediate", 
      duration: "60 min",
      description: "Build on basics with inversions and intermediate combinations for confident movement",
      slug: "pole-progression",
      category: "Pole Dancing",
      style: "Pole",
      instructor: "Maya Rodriguez",
      location: "Downtown Studio",
      image: "/lovable-uploads/3cc0b943-7d1c-4140-a59c-a60390d03154.jpg"
    },
    {
      name: "Advanced Pole Flow",
      level: "Advanced",
      duration: "75 min", 
      description: "Complex tricks, transitions and choreographed sequences for experienced dancers",
      slug: "advanced-pole-flow",
      category: "Pole Dancing",
      style: "Pole",
      instructor: "Alex Turner",
      location: "Midtown Studio",
      image: "/lovable-uploads/4d4d16ef-17d9-47e3-a464-cfa3c9b9eef6.jpg"
    },
    {
      name: "Aerial Silks Intro",
      level: "Beginner",
      duration: "60 min",
      description: "Learn basic climbs, poses and sequences on aerial silks in this beginner-friendly class",
      slug: "aerial-silks-intro",
      category: "Aerial Arts",
      style: "Aerial",
      instructor: "Luna Park",
      location: "Downtown Studio",
      image: "/lovable-uploads/8b589fd4-a71e-43de-823f-c2af97fef88d.jpg"
    },
    {
      name: "Lyra Foundations", 
      level: "Beginner",
      duration: "60 min",
      description: "Explore the aerial hoop with fundamental poses and spins perfect for newcomers",
      slug: "lyra-foundations",
      category: "Aerial Arts",
      style: "Aerial",
      instructor: "Zara Kim",
      location: "Uptown Studio",
      image: "/lovable-uploads/c7f8bec0-23c5-44db-871b-dccfbacb26a5.jpg"
    },
    {
      name: "Aerial Flow",
      level: "Intermediate",
      duration: "75 min",
      description: "Combine silks and lyra skills into flowing sequences that tell a story",
      slug: "aerial-flow",
      category: "Aerial Arts",
      style: "Aerial",
      instructor: "Luna Park",
      location: "Midtown Studio",
      image: "/lovable-uploads/1d83d83b-0057-4bd1-8052-79584b039a97.jpg"
    },
    {
      name: "Floorwork Foundations",
      level: "All Levels",
      duration: "45 min", 
      description: "Ground-based movement focusing on fluidity and expression through dance",
      slug: "floorwork-foundations",
      category: "Dance & Movement",
      style: "Dance",
      instructor: "Ava Johnson",
      location: "Downtown Studio",
      image: "/lovable-uploads/3cc0b943-7d1c-4140-a59c-a60390d03154.jpg"
    },
    {
      name: "Exotic Dance",
      level: "All Levels",
      duration: "60 min",
      description: "Confidence-building dance class focusing on sensual movement and self-expression",
      slug: "exotic-dance",
      category: "Dance & Movement",
      style: "Dance",
      instructor: "Ava Johnson",
      location: "Uptown Studio",
      image: "/lovable-uploads/4d4d16ef-17d9-47e3-a464-cfa3c9b9eef6.jpg"
    },
    {
      name: "Chair Dance",
      level: "All Levels", 
      duration: "45 min",
      description: "Playful and empowering choreography using a chair as a prop for creative expression",
      slug: "chair-dance",
      category: "Dance & Movement",
      style: "Dance",
      instructor: "Maya Rodriguez",
      location: "Midtown Studio",
      image: "/lovable-uploads/8b589fd4-a71e-43de-823f-c2af97fef88d.jpg"
    },
    {
      name: "Flexibility Flow",
      level: "All Levels",
      duration: "60 min",
      description: "Active and passive stretching to improve overall flexibility and mobility",
      slug: "flexibility-flow",
      category: "Flexibility & Conditioning",
      style: "Conditioning",
      instructor: "Zara Kim",
      location: "Downtown Studio",
      image: "/lovable-uploads/c7f8bec0-23c5-44db-871b-dccfbacb26a5.jpg"
    },
    {
      name: "Pole Conditioning",
      level: "All Levels", 
      duration: "45 min",
      description: "Strength training specifically designed for pole and aerial arts performance",
      slug: "pole-conditioning",
      category: "Flexibility & Conditioning",
      style: "Conditioning",
      instructor: "Alex Turner",
      location: "Uptown Studio",
      image: "/lovable-uploads/1d83d83b-0057-4bd1-8052-79584b039a97.jpg"
    },
    {
      name: "Splits & Backbends",
      level: "Intermediate",
      duration: "60 min",
      description: "Targeted training for advanced flexibility goals including splits and backbends",
      slug: "splits-backbends",
      category: "Flexibility & Conditioning",
      style: "Conditioning",
      instructor: "Sarah Chen",
      location: "Midtown Studio",
      image: "/lovable-uploads/3cc0b943-7d1c-4140-a59c-a60390d03154.jpg"
    }
  ];

  // Filter options
  const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];
  const styles = ['Pole', 'Aerial', 'Dance', 'Conditioning'];
  const locations = ['Downtown Studio', 'Midtown Studio', 'Uptown Studio'];
  const instructors = ['Sarah Chen', 'Maya Rodriguez', 'Alex Turner', 'Luna Park', 'Zara Kim', 'Ava Johnson'];

  // Filtered classes based on search and filters
  const filteredClasses = useMemo(() => {
    return allClasses.filter(classItem => {
      const matchesSearch = classItem.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           classItem.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           classItem.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesLevel = !levelFilter || classItem.level === levelFilter;
      const matchesStyle = !styleFilter || classItem.style === styleFilter;
      const matchesLocation = !locationFilter || classItem.location === locationFilter;
      const matchesInstructor = !instructorFilter || classItem.instructor === instructorFilter;
      
      return matchesSearch && matchesLevel && matchesStyle && matchesLocation && matchesInstructor;
    });
  }, [searchQuery, levelFilter, styleFilter, locationFilter, instructorFilter]);

  const clearFilters = () => {
    setSearchQuery('');
    setLevelFilter('');
    setStyleFilter('');
    setLocationFilter('');
    setInstructorFilter('');
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-500/10 text-green-400 border-green-500/30';
      case 'Intermediate': return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30';
      case 'Advanced': return 'bg-red-500/10 text-red-400 border-red-500/30';
      default: return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
    }
  };

  const hasActiveFilters = searchQuery || levelFilter || styleFilter || locationFilter || instructorFilter;

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section with About */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 cyber-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl sm:text-6xl font-bold gradient-text neon-glow mb-6">
              Class Archive
            </h1>
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                About Our Classes
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Discover our comprehensive collection of pole dancing, aerial arts, dance, and conditioning classes. 
                Whether you're a complete beginner or an experienced performer, we have classes designed to meet you 
                where you are and help you grow.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Our expert instructors create a supportive, empowering environment where you can build strength, 
                flexibility, and confidence while expressing your unique style. Join our community and transform 
                how you move through the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters Section */}
      <section className="py-12 bg-gray-800 border-b border-fuchsia-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="relative mb-8">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search classes by name, description, or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-4 bg-gray-900/50 border-2 border-fuchsia-500/30 rounded-lg text-white placeholder-gray-400 text-lg focus:border-fuchsia-400 focus:ring-fuchsia-400/20"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 items-center justify-center mb-6">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-fuchsia-400" />
              <span className="text-white font-medium">Filters:</span>
            </div>
            
            <Select value={levelFilter} onValueChange={setLevelFilter}>
              <SelectTrigger className="w-40 bg-gray-900/50 border-cyan-500/30 text-white">
                <GraduationCap className="w-4 h-4 mr-2 text-cyan-400" />
                <SelectValue placeholder="Level" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-cyan-500/30">
                {levels.map((level) => (
                  <SelectItem key={level} value={level} className="text-white hover:bg-gray-800">
                    {level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={styleFilter} onValueChange={setStyleFilter}>
              <SelectTrigger className="w-40 bg-gray-900/50 border-purple-500/30 text-white">
                <SelectValue placeholder="Style" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-purple-500/30">
                {styles.map((style) => (
                  <SelectItem key={style} value={style} className="text-white hover:bg-gray-800">
                    {style}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={locationFilter} onValueChange={setLocationFilter}>
              <SelectTrigger className="w-44 bg-gray-900/50 border-green-500/30 text-white">
                <MapPin className="w-4 h-4 mr-2 text-green-400" />
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-green-500/30">
                {locations.map((location) => (
                  <SelectItem key={location} value={location} className="text-white hover:bg-gray-800">
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={instructorFilter} onValueChange={setInstructorFilter}>
              <SelectTrigger className="w-44 bg-gray-900/50 border-yellow-500/30 text-white">
                <Users className="w-4 h-4 mr-2 text-yellow-400" />
                <SelectValue placeholder="Instructor" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-yellow-500/30">
                {instructors.map((instructor) => (
                  <SelectItem key={instructor} value={instructor} className="text-white hover:bg-gray-800">
                    {instructor}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {hasActiveFilters && (
              <Button
                onClick={clearFilters}
                variant="outline"
                className="cyber-border text-red-400 hover:bg-red-400/10 hover:text-red-300"
              >
                <X className="w-4 h-4 mr-2" />
                Clear All
              </Button>
            )}
          </div>

          {/* Results Count */}
          <div className="text-center">
            <p className="text-gray-400">
              Showing <span className="text-fuchsia-400 font-bold">{filteredClasses.length}</span> 
              {filteredClasses.length === 1 ? ' class' : ' classes'}
            </p>
          </div>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredClasses.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">No classes found</h3>
              <p className="text-gray-400 mb-8">Try adjusting your search or filters to find more classes.</p>
              <Button
                onClick={clearFilters}
                className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredClasses.map((classItem, index) => (
                <Card 
                  key={classItem.slug}
                  className="cyber-card group cursor-pointer overflow-hidden animate-fade-in hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-fuchsia-500/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Link to={`/classes/${classItem.slug}`} className="block">
                    {/* Class Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={classItem.image}
                        alt={classItem.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <Badge className={`${getLevelColor(classItem.level)} border font-medium`}>
                          {classItem.level}
                        </Badge>
                      </div>
                      {classItem.featured && (
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white border-0">
                            Featured
                          </Badge>
                        </div>
                      )}
                    </div>

                    {/* Class Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-fuchsia-400 transition-colors">
                        {classItem.name}
                      </h3>
                      
                      <div className="flex items-center justify-between mb-3 text-sm text-gray-400">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {classItem.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {classItem.location.split(' ')[0]}
                        </div>
                      </div>

                      <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                        {classItem.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          with {classItem.instructor}
                        </span>
                        <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full">
                          {classItem.style}
                        </span>
                      </div>
                    </div>
                  </Link>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-fuchsia-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            Try any class for FREE! Experience our method, meet our community, 
            and discover what's possible when you step into your power.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="neon-button text-black font-bold text-lg px-8 py-3">
              Claim Free Trial
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-3">
              View Schedule
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Classes;