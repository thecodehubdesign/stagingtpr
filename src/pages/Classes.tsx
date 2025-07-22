import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Clock, Users, Search, Filter, MapPin, GraduationCap, X, Wifi, Coffee, Car } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
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
  const allClasses = [{
    name: "Pole Basics",
    level: "Beginner",
    duration: "60 min",
    description: "Perfect introduction to pole fitness. Learn fundamental spins, poses, and build confidence in a supportive environment. Ideal for complete beginners.",
    slug: "pole-basics",
    category: "Pole Dancing",
    style: "Pole",
    instructors: [{
      name: "Sarah Chen",
      image: "/lovable-uploads/1d83d83b-0057-4bd1-8052-79584b039a97.jpg"
    }, {
      name: "Maya Rodriguez",
      image: "/lovable-uploads/3cc0b943-7d1c-4140-a59c-a60390d03154.jpg"
    }],
    location: "Mitcham",
    locations: ["Mitcham", "Kilsyth", "Melbourne"],
    image: "/lovable-uploads/d97f60e6-9bb0-46b6-a9cc-aaa13ede7d4b.png",
    featured: true
  }, {
    name: "Front Splits Masterclass",
    level: "All Levels",
    duration: "75 min",
    description: "Intensive flexibility training focused on achieving and perfecting your front splits. Includes warm-up routines and progressive stretching techniques.",
    slug: "front-splits-masterclass",
    category: "Flexibility & Conditioning",
    style: "Flexibility",
    instructors: [{
      name: "Zara Kim",
      image: "/lovable-uploads/4d4d16ef-17d9-47e3-a464-cfa3c9b9eef6.jpg"
    }],
    location: "Kilsyth",
    locations: ["Kilsyth", "Highett"],
    image: "/lovable-uploads/ecb5bd9c-6055-4d41-8797-bbb506648a5b.png"
  }, {
    name: "Pole Jam",
    level: "Intermediate",
    duration: "90 min",
    description: "High-energy freestyle sessions where you can practice moves, experiment with combinations, and dance to your favorite beats in a fun, social environment.",
    slug: "pole-jam",
    category: "Pole Dancing",
    style: "Pole",
    instructors: [{
      name: "Maya Rodriguez",
      image: "/lovable-uploads/3cc0b943-7d1c-4140-a59c-a60390d03154.jpg"
    }, {
      name: "Alex Turner",
      image: "/lovable-uploads/8b589fd4-a71e-43de-823f-c2af97fef88d.jpg"
    }],
    location: "Melbourne",
    locations: ["Melbourne", "Mitcham", "Narre Warren", "Kilsyth"],
    image: "/lovable-uploads/e72918ef-7386-4492-8d6e-6cf1cbeb62e4.png"
  }, {
    name: "Chair and Lap",
    level: "All Levels",
    duration: "60 min",
    description: "Sensual dance class incorporating chair work and floor movements. Focus on fluidity, confidence, and connecting with your feminine energy.",
    slug: "chair-and-lap",
    category: "Dance & Movement",
    style: "Dance",
    instructors: [{
      name: "Ava Johnson",
      image: "/lovable-uploads/c7f8bec0-23c5-44db-871b-dccfbacb26a5.jpg"
    }],
    location: "Highett",
    locations: ["Highett", "Melbourne", "Narre Warren"],
    image: "/lovable-uploads/ff325961-11eb-4009-8f03-cb52bcfc97e0.png"
  }, {
    name: "Dance Filthy",
    level: "Intermediate",
    duration: "75 min",
    description: "Embrace your inner confidence with sultry choreography and expressive movement. Perfect for building self-esteem and body positivity.",
    slug: "dance-filthy",
    category: "Dance & Movement",
    style: "Dance",
    instructors: [{
      name: "Maya Rodriguez",
      image: "/lovable-uploads/3cc0b943-7d1c-4140-a59c-a60390d03154.jpg"
    }, {
      name: "Ava Johnson",
      image: "/lovable-uploads/c7f8bec0-23c5-44db-871b-dccfbacb26a5.jpg"
    }, {
      name: "Luna Park",
      image: "/lovable-uploads/1d83d83b-0057-4bd1-8052-79584b039a97.jpg"
    }, {
      name: "Zara Kim",
      image: "/lovable-uploads/4d4d16ef-17d9-47e3-a464-cfa3c9b9eef6.jpg"
    }, {
      name: "Sarah Chen",
      image: "/lovable-uploads/1d83d83b-0057-4bd1-8052-79584b039a97.jpg"
    }],
    location: "Narre Warren",
    locations: ["Narre Warren", "Mitcham", "Kilsyth", "Melbourne", "Highett"],
    image: "/lovable-uploads/a3f3abdb-e872-4fb0-a921-052f1d92afec.png"
  }, {
    name: "Pole Conditioning",
    level: "All Levels",
    duration: "45 min",
    description: "Strength-focused class designed to build the muscle groups essential for pole dancing. Includes core work, flexibility training, and pole-specific conditioning.",
    slug: "pole-conditioning",
    category: "Flexibility & Conditioning",
    style: "Conditioning",
    instructors: [{
      name: "Alex Turner",
      image: "/lovable-uploads/8b589fd4-a71e-43de-823f-c2af97fef88d.jpg"
    }, {
      name: "Zara Kim",
      image: "/lovable-uploads/4d4d16ef-17d9-47e3-a464-cfa3c9b9eef6.jpg"
    }],
    location: "Mitcham",
    locations: ["Mitcham", "Melbourne"],
    image: "/lovable-uploads/cc11c8dc-6872-48a7-9124-7e1c3602e410.png"
  }, {
    name: "Pole Foundations",
    level: "Beginner",
    duration: "60 min",
    description: "Comprehensive beginner program covering safety, basic techniques, and fundamental movements. Perfect stepping stone to more advanced classes.",
    slug: "pole-foundations",
    category: "Pole Dancing",
    style: "Pole",
    instructors: [{
      name: "Sarah Chen",
      image: "/lovable-uploads/1d83d83b-0057-4bd1-8052-79584b039a97.jpg"
    }],
    location: "Kilsyth",
    locations: ["Kilsyth", "Highett", "Narre Warren", "Mitcham"],
    image: "/lovable-uploads/8a7c62c9-86e6-4d10-a555-f79e5ed95001.png",
    featured: true
  }, {
    name: "Pure Pole Dance",
    level: "Advanced",
    duration: "75 min",
    description: "Artistic pole dancing focusing on flow, grace, and technical precision. Combines athletic skill with beautiful choreography and self-expression.",
    slug: "pure-pole-dance",
    category: "Pole Dancing",
    style: "Pole",
    instructors: [{
      name: "Luna Park",
      image: "/lovable-uploads/1d83d83b-0057-4bd1-8052-79584b039a97.jpg"
    }, {
      name: "Alex Turner",
      image: "/lovable-uploads/8b589fd4-a71e-43de-823f-c2af97fef88d.jpg"
    }],
    location: "Melbourne",
    locations: ["Melbourne", "Mitcham", "Kilsyth"],
    image: "/lovable-uploads/119fcd15-3aac-4f1f-920c-a13497b0b348.png"
  }, {
    name: "Sexy Basics",
    level: "Beginner",
    duration: "60 min",
    description: "Introduction to sensual movement and confidence building. Learn to embrace your sexuality through dance in a supportive, judgment-free environment.",
    slug: "sexy-basics",
    category: "Dance & Movement",
    style: "Dance",
    instructors: [{
      name: "Ava Johnson",
      image: "/lovable-uploads/c7f8bec0-23c5-44db-871b-dccfbacb26a5.jpg"
    }, {
      name: "Maya Rodriguez",
      image: "/lovable-uploads/3cc0b943-7d1c-4140-a59c-a60390d03154.jpg"
    }],
    location: "Highett",
    locations: ["Highett", "Narre Warren"],
    image: "/lovable-uploads/8be1e610-6a66-4ace-b02d-1945fd276001.png"
  }, {
    name: "Floor Play",
    level: "All Levels",
    duration: "45 min",
    description: "Ground-based movements focusing on floorwork, transitions, and dance flow. Perfect complement to pole work or as a standalone class.",
    slug: "floor-play",
    category: "Dance & Movement",
    style: "Dance",
    instructors: [{
      name: "Zara Kim",
      image: "/lovable-uploads/4d4d16ef-17d9-47e3-a464-cfa3c9b9eef6.jpg"
    }, {
      name: "Ava Johnson",
      image: "/lovable-uploads/c7f8bec0-23c5-44db-871b-dccfbacb26a5.jpg"
    }],
    location: "Narre Warren",
    locations: ["Narre Warren", "Kilsyth", "Melbourne"],
    image: "/lovable-uploads/32863f0f-165a-4abf-b73e-3eea2045dce5.png"
  }];

  // Filter options
  const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced', 'Elite'];
  const styles = ['Pole', 'Aerial', 'Dance', 'Conditioning', 'Flexibility'];
  const locations = ['Mitcham', 'Kilsyth', 'Melbourne', 'Highett', 'Narre Warren'];
  const instructors = ['Sarah Chen', 'Maya Rodriguez', 'Alex Turner', 'Luna Park', 'Zara Kim', 'Ava Johnson'];

  // Filtered classes based on search and filters
  const filteredClasses = useMemo(() => {
    const filtered = allClasses.filter(classItem => {
      const matchesSearch = classItem.name.toLowerCase().includes(searchQuery.toLowerCase()) || classItem.description.toLowerCase().includes(searchQuery.toLowerCase()) || classItem.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLevel = !levelFilter || classItem.level === levelFilter;
      const matchesStyle = !styleFilter || classItem.style === styleFilter;
      const matchesLocation = !locationFilter || classItem.location === locationFilter;
      const matchesInstructor = !instructorFilter || classItem.instructors.some(instructor => instructor.name === instructorFilter);
      return matchesSearch && matchesLevel && matchesStyle && matchesLocation && matchesInstructor;
    });
    
    // Sort to show featured classes first
    return filtered.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
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
      case 'Beginner':
        return 'bg-green-500/10 text-green-400 border-green-500/30';
      case 'Intermediate':
        return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30';
      case 'Advanced':
        return 'bg-red-500/10 text-red-400 border-red-500/30';
      case 'Elite':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/30';
      default:
        return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
    }
  };
  const hasActiveFilters = searchQuery || levelFilter || styleFilter || locationFilter || instructorFilter;
  const studioFeatures = [{
    icon: Users,
    title: "Small Class Sizes",
    description: "Maximum 8 students per class for personalized attention"
  }, {
    icon: Wifi,
    title: "Premium Equipment",
    description: "Professional-grade poles, aerial points, and safety mats"
  }, {
    icon: Coffee,
    title: "Comfort Amenities",
    description: "Changing rooms, lockers, and refreshment areas"
  }, {
    icon: Car,
    title: "Easy Access",
    description: "Convenient parking and public transport connections"
  }];
  return <div className="min-h-screen">
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
              
            </div>
          </div>
        </div>
      </section>

      {/* Studio Features */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              What Makes Our <span className="gradient-text">Studios Special</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Every detail has been carefully considered to create the perfect environment 
              for your fitness journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {studioFeatures.map((feature, index) => <Card key={index} className="cyber-card p-6 text-center animate-fade-in" style={{
            animationDelay: `${index * 0.15}s`
          }}>
                <feature.icon className="w-12 h-12 text-fuchsia-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Class Pricing */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Class <span className="gradient-text">Pricing</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Introductory Offers */}
            <Card className="cyber-card p-6">
              <h3 className="text-lg font-bold text-white mb-4">Introductory Offers</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                  <span className="text-gray-300">Free Trial Class</span>
                  <span className="text-fuchsia-400 font-semibold">Free</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300">28 Day Intro Program</span>
                  <span className="text-fuchsia-400 font-semibold">$99</span>
                </div>
              </div>
            </Card>

            {/* Session Packages */}
            <Card className="cyber-card p-6">
              <h3 className="text-lg font-bold text-white mb-4">Session Packages</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                  <span className="text-gray-300">Drop in Session</span>
                  <span className="text-fuchsia-400 font-semibold">$35</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                  <span className="text-gray-300">8 Session Package</span>
                  <span className="text-fuchsia-400 font-semibold">$240</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300">16 Session Package</span>
                  <span className="text-fuchsia-400 font-semibold">$440</span>
                </div>
              </div>
            </Card>

            {/* Memberships */}
            <Card className="cyber-card p-6">
              <h3 className="text-lg font-bold text-white mb-4">Memberships</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                  <span className="text-gray-300">2 Sessions/week</span>
                  <span className="text-fuchsia-400 font-semibold">from $55</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                  <span className="text-gray-300">3 Sessions/week</span>
                  <span className="text-fuchsia-400 font-semibold">from $75</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300">5 Sessions/week</span>
                  <span className="text-fuchsia-400 font-semibold">from $120</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Find Your Perfect Class Heading */}
      <section className="pt-16 pb-8 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Find Your <span className="gradient-text">Perfect Class</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              From complete beginner to advanced performer, discover the class that matches your journey and goals.
            </p>
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
              <Input type="text" placeholder="Search classes by name, description, or category..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="pl-12 pr-4 py-4 bg-gray-900/50 border-2 border-fuchsia-500/30 rounded-lg text-white placeholder-gray-400 text-lg focus:border-fuchsia-400 focus:ring-fuchsia-400/20" />
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
                {levels.map(level => <SelectItem key={level} value={level} className="text-white hover:bg-gray-800">
                    {level}
                  </SelectItem>)}
              </SelectContent>
            </Select>

            <Select value={styleFilter} onValueChange={setStyleFilter}>
              <SelectTrigger className="w-40 bg-gray-900/50 border-purple-500/30 text-white">
                <SelectValue placeholder="Style" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-purple-500/30">
                {styles.map(style => <SelectItem key={style} value={style} className="text-white hover:bg-gray-800">
                    {style}
                  </SelectItem>)}
              </SelectContent>
            </Select>

            <Select value={locationFilter} onValueChange={setLocationFilter}>
              <SelectTrigger className="w-44 bg-gray-900/50 border-green-500/30 text-white">
                <MapPin className="w-4 h-4 mr-2 text-green-400" />
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-green-500/30">
                {locations.map(location => <SelectItem key={location} value={location} className="text-white hover:bg-gray-800">
                    {location}
                  </SelectItem>)}
              </SelectContent>
            </Select>

            <Select value={instructorFilter} onValueChange={setInstructorFilter}>
              <SelectTrigger className="w-44 bg-gray-900/50 border-yellow-500/30 text-white">
                <Users className="w-4 h-4 mr-2 text-yellow-400" />
                <SelectValue placeholder="Instructor" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-yellow-500/30">
                {instructors.map(instructor => <SelectItem key={instructor} value={instructor} className="text-white hover:bg-gray-800">
                    {instructor}
                  </SelectItem>)}
              </SelectContent>
            </Select>

            {hasActiveFilters && <Button onClick={clearFilters} variant="outline" className="cyber-border text-red-400 hover:bg-red-400/10 hover:text-red-300">
                <X className="w-4 h-4 mr-2" />
                Clear All
              </Button>}
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
          {filteredClasses.length === 0 ? <div className="text-center py-16">
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">No classes found</h3>
              <p className="text-gray-400 mb-8">Try adjusting your search or filters to find more classes.</p>
              <Button onClick={clearFilters} className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700">
                Clear Filters
              </Button>
            </div> : <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredClasses.map((classItem, index) => <Card key={classItem.slug} className="cyber-card group cursor-pointer overflow-hidden animate-fade-in hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-fuchsia-500/20" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                  <Link to={`/classes/${classItem.slug}`} className="block">
                    {/* Class Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img src={classItem.image} alt={classItem.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      {classItem.featured && <div className="absolute top-4 left-4">
                          <Badge className="bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white border-0">
                            Free Trial Available
                          </Badge>
                        </div>}
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
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className="flex items-center cursor-pointer hover:text-fuchsia-400 transition-colors">
                                <MapPin className="w-4 h-4 mr-1" />
                                {classItem.location} +{classItem.locations.length - 1}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="text-sm">Available at: {classItem.locations.join(', ')}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>

                      <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                        {classItem.description}
                      </p>

                      {/* Instructors with profile pictures */}
                      <div className="flex items-center mb-4">
                        <div className="flex -space-x-2 mr-3">
                          {classItem.instructors.slice(0, 3).map((instructor, idx) => <img key={idx} src={instructor.image} alt={instructor.name} className="w-6 h-6 rounded-full border-2 border-gray-700 object-cover" />)}
                        </div>
                        <span className="text-xs text-gray-400">
                          {classItem.instructors[0].name}
                          {classItem.instructors.length > 1 && <span className="text-fuchsia-400 ml-1">
                              +{classItem.instructors.length - 1}
                            </span>}
                        </span>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full">
                          {classItem.style}
                        </span>
                        <Badge className={`${getLevelColor(classItem.level)} border font-medium text-xs`}>
                          {classItem.level}
                        </Badge>
                      </div>

                      {/* View Class Button */}
                      <Button variant="outline" className="w-full bg-transparent border-fuchsia-400/50 text-fuchsia-400 hover:bg-fuchsia-400/10 hover:border-fuchsia-400 transition-all duration-300">View Class Details</Button>
                    </div>
                  </Link>
                </Card>)}
            </div>}
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
    </div>;
};
export default Classes;