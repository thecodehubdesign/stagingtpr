
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Share2, Star, ArrowLeft, Clock, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const ClassDetail = () => {
  const { classId } = useParams<{ classId: string }>();
  const [currentSlide, setCurrentSlide] = useState(0);

  // All classes data (same as Classes page)
  const allClasses = [
    {
      name: "Pure Pole Dance",
      level: "Intermediate",
      duration: "75 min",
      description: "Experience the artistry of pole dance with this flowing, dance-focused class. Perfect your technique while expressing yourself through beautiful combinations and choreography.",
      slug: "pure-pole-dance",
      category: "Pole Dancing",
      style: "Pole",
      instructors: [
        { name: "Maya Rodriguez", image: "/lovable-uploads/3cc0b943-7d1c-4140-a59c-a60390d03154.jpg" },
        { name: "Ava Johnson", image: "/lovable-uploads/c7f8bec0-23c5-44db-871b-dccfbacb26a5.jpg" }
      ],
      location: "Melbourne",
      image: "/lovable-uploads/e72918ef-7386-4492-8d6e-6cf1cbeb62e4.png",
      featured: true
    },
    {
      name: "Pole Basics",
      level: "Beginner",
      duration: "60 min",
      description: "Perfect introduction to pole fitness. Learn fundamental spins, poses, and build confidence in a supportive environment. Ideal for complete beginners.",
      slug: "pole-basics",
      category: "Pole Dancing",
      style: "Pole",
      instructors: [
        { name: "Sarah Chen", image: "/lovable-uploads/1d83d83b-0057-4bd1-8052-79584b039a97.jpg" },
        { name: "Maya Rodriguez", image: "/lovable-uploads/3cc0b943-7d1c-4140-a59c-a60390d03154.jpg" }
      ],
      location: "Mitcham",
      image: "/lovable-uploads/d97f60e6-9bb0-46b6-a9cc-aaa13ede7d4b.png",
      featured: true
    },
    {
      name: "Front Splits Masterclass",
      level: "All Levels",
      duration: "75 min",
      description: "Intensive flexibility training focused on achieving and perfecting your front splits. Includes warm-up routines and progressive stretching techniques.",
      slug: "front-splits-masterclass",
      category: "Flexibility & Conditioning",
      style: "Flexibility",
      instructors: [
        { name: "Zara Kim", image: "/lovable-uploads/4d4d16ef-17d9-47e3-a464-cfa3c9b9eef6.jpg" }
      ],
      location: "Kilsyth",
      image: "/lovable-uploads/ecb5bd9c-6055-4d41-8797-bbb506648a5b.png"
    },
    {
      name: "Pole Jam",
      level: "Intermediate",
      duration: "90 min",
      description: "High-energy freestyle sessions where you can practice moves, experiment with combinations, and dance to your favorite beats in a fun, social environment.",
      slug: "pole-jam",
      category: "Pole Dancing",
      style: "Pole",
      instructors: [
        { name: "Maya Rodriguez", image: "/lovable-uploads/3cc0b943-7d1c-4140-a59c-a60390d03154.jpg" },
        { name: "Alex Turner", image: "/lovable-uploads/8b589fd4-a71e-43de-823f-c2af97fef88d.jpg" }
      ],
      location: "Melbourne",
      image: "/lovable-uploads/e72918ef-7386-4492-8d6e-6cf1cbeb62e4.png"
    },
    {
      name: "Pole Foundations",
      level: "Beginner",
      duration: "60 min",
      description: "Comprehensive beginner program covering safety, basic techniques, and fundamental movements. Perfect stepping stone to more advanced classes.",
      slug: "pole-foundations",
      category: "Pole Dancing",
      style: "Pole",
      instructors: [
        { name: "Sarah Chen", image: "/lovable-uploads/1d83d83b-0057-4bd1-8052-79584b039a97.jpg" }
      ],
      location: "Kilsyth",
      image: "/lovable-uploads/8a7c62c9-86e6-4d10-a555-f79e5ed95001.png",
      featured: true
    },
    {
      name: "Sexy Basics",
      level: "Beginner",
      duration: "60 min",
      description: "Introduction to sensual movement and confidence building. Learn to embrace your sexuality through dance in a supportive, judgment-free environment.",
      slug: "sexy-basics",
      category: "Dance & Movement",
      style: "Dance",
      instructors: [
        { name: "Ava Johnson", image: "/lovable-uploads/c7f8bec0-23c5-44db-871b-dccfbacb26a5.jpg" },
        { name: "Maya Rodriguez", image: "/lovable-uploads/3cc0b943-7d1c-4140-a59c-a60390d03154.jpg" }
      ],
      location: "Highett",
      image: "/lovable-uploads/8be1e610-6a66-4ace-b02d-1945fd276001.png"
    },
    {
      name: "Intermediate Flow",
      level: "Intermediate",
      duration: "75 min",
      description: "Flowing intermediate sequences combining spins, climbs, and inversions. Perfect for students ready to advance their pole skills.",
      slug: "intermediate-flow",
      category: "Pole Dancing",
      style: "Pole",
      instructors: [
        { name: "Maya Rodriguez", image: "/lovable-uploads/3cc0b943-7d1c-4140-a59c-a60390d03154.jpg" }
      ],
      location: "Melbourne",
      image: "/lovable-uploads/d97f60e6-9bb0-46b6-a9cc-aaa13ede7d4b.png"
    },
    {
      name: "Exotic Intermediate",
      level: "Intermediate",
      duration: "60 min",
      description: "Sensual intermediate moves with floor work and transitions. Develop your personal style and confidence.",
      slug: "exotic-intermediate",
      category: "Exotic Dancing",
      style: "Exotic",
      instructors: [
        { name: "Ava Johnson", image: "/lovable-uploads/c7f8bec0-23c5-44db-871b-dccfbacb26a5.jpg" }
      ],
      location: "Melbourne",
      image: "/lovable-uploads/8be1e610-6a66-4ace-b02d-1945fd276001.png"
    }
  ];

  // Find current class and similar classes
  const currentClass = allClasses.find(cls => cls.slug === classId);
  const similarClasses = allClasses.filter(cls => 
    cls.slug !== classId && 
    cls.level === currentClass?.level && 
    cls.location === currentClass?.location
  );

  // Mock class data - in a real app, this would be fetched based on classId
  const classData = {
    id: 'beginner-pole-foundations',
    name: currentClass?.name || 'Pole Foundations',
    level: currentClass?.level || 'Beginner',
    duration: currentClass?.duration || '60 min',
    heroImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    description: currentClass?.description || "Unlock your inner strength and confidence with our most popular beginner class! Designed for absolute first-timers and those looking to build a solid foundation, Beginner Pole Foundations covers the basics of pole dance in a welcoming, supportive environment. You'll learn spins, transitions, and simple tricks while making friends and having a laugh. No fitness or dance experience required—just bring your curiosity and a sense of fun. All ages and abilities welcome!",
    features: [
      'No experience needed',
      'All genders welcome', 
      'Focus on technique and confidence-building',
      'Supportive, inclusive community',
      'Free first class for new students'
    ],
    reviews: [
      {
        name: 'Jessica R.',
        rating: 5,
        text: "I was so nervous for my first pole class but Sarah made me feel so welcome! The class was challenging but fun, and I've already booked my next session."
      },
      {
        name: 'Emma L.',
        rating: 5,
        text: "Perfect beginner class! I never thought I could do pole dance but now I'm obsessed. The community here is incredible."
      },
      {
        name: 'Rachel K.',
        rating: 5,
        text: "Sarah is an amazing instructor. She breaks everything down so clearly and creates such a supportive environment. Highly recommend!"
      }
    ]
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(similarClasses.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(similarClasses.length / 3)) % Math.ceil(similarClasses.length / 3));
  };

  useEffect(() => {
    // Load the MindBody widget script
    const script = document.createElement('script');
    script.src = 'https://brandedweb.mindbodyonline.com/embed/widget.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://brandedweb.mindbodyonline.com/embed/widget.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  if (!classData) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Class Not Found</h1>
          <p className="text-gray-400">The class you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const shareClass = () => {
    if (navigator.share) {
      navigator.share({
        title: classData.name,
        text: classData.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      {/* Back to Classes Link */}
      <section className="pt-20 pb-4 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/classes" 
            className="inline-flex items-center text-fuchsia-400 hover:text-fuchsia-300 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Class Search
          </Link>
        </div>
      </section>
      
      {/* Hero Section - Reduced top padding since we added back link */}
      <section className="pt-8 pb-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(8,8,15,0.7), rgba(20,20,35,0.7)), url('${classData.heroImage}')`
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <Badge className="mb-4 bg-fuchsia-500/20 text-fuchsia-400 border-fuchsia-500/30">
              {classData.level} • {classData.duration}
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold gradient-text neon-glow mb-6">
              {classData.name}
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="neon-button text-black font-bold text-lg px-8 py-3">
                Book Your First Class Free
              </Button>
              <Button 
                variant="outline" 
                className="cyber-border text-cyan-400 hover:bg-cyan-400/10"
                onClick={shareClass}
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share Class
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Class Description & Features */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">About This Class</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                {classData.description}
              </p>
              <Button className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700">
                Book Now
              </Button>
            </div>
            
            <Card className="cyber-card p-8">
              <h3 className="text-xl font-bold text-white mb-6">What Makes This Class Special</h3>
              <div className="space-y-4">
                {classData.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Schedule Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Upcoming <span className="gradient-text">Schedule</span>
            </h2>
            <p className="text-lg text-gray-300">Book your spot in our upcoming classes</p>
          </div>

          <Card className="cyber-card p-8">
            <div className="min-h-[400px]">
              <div className="mindbody-widget" data-widget-type="Schedules" data-widget-id="d98131628e"></div>
            </div>
          </Card>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Student <span className="gradient-text">Reviews</span>
            </h2>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-xl font-bold text-white">5.0</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {classData.reviews.map((review, index) => (
              <Card key={index} className="cyber-card p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">"{review.text}"</p>
                <p className="font-bold text-white">- {review.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            <Card className="cyber-card p-6">
              <h3 className="text-lg font-bold text-white mb-2">What should I wear to class?</h3>
              <p className="text-gray-300">
                Wear shorts and a tank top or sports bra. Skin grip is essential for pole work. 
                We recommend bringing a water bottle and small towel.
              </p>
            </Card>
            
            <Card className="cyber-card p-6">
              <h3 className="text-lg font-bold text-white mb-2">Is the first class really free?</h3>
              <p className="text-gray-300">
                Yes! All new students get their first Beginner Pole Foundations class completely free. 
                No strings attached - just bring yourself and get ready to have fun.
              </p>
            </Card>
            
            <Card className="cyber-card p-6">
              <h3 className="text-lg font-bold text-white mb-2">What if I'm not flexible or strong?</h3>
              <p className="text-gray-300">
                Perfect! This class is designed for absolute beginners. You'll build strength and 
                flexibility naturally as you progress. Everyone starts somewhere.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Similar Classes Carousel */}
      {similarClasses.length > 0 && (
        <section className="py-16 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Similar <span className="gradient-text">Classes</span>
              </h2>
              <p className="text-lg text-gray-300">
                Other {classData.level.toLowerCase()} classes available at {currentClass?.location}
              </p>
            </div>

            <div className="relative">
              {/* Carousel Navigation */}
              {similarClasses.length > 3 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Carousel Content */}
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {Array.from({ length: Math.ceil(similarClasses.length / 3) }).map((_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0">
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {similarClasses.slice(slideIndex * 3, (slideIndex + 1) * 3).map((classItem, index) => (
                          <Card key={classItem.slug} className="cyber-card group cursor-pointer overflow-hidden animate-fade-in hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-fuchsia-500/20">
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
                                    {classItem.location}
                                  </div>
                                </div>

                                <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                                  {classItem.description}
                                </p>

                                {/* Instructors with profile pictures */}
                                <div className="flex items-center mb-4">
                                  <div className="flex -space-x-2 mr-3">
                                    {classItem.instructors.slice(0, 3).map((instructor, idx) => (
                                      <img
                                        key={idx}
                                        src={instructor.image}
                                        alt={instructor.name}
                                        className="w-6 h-6 rounded-full border-2 border-gray-700 object-cover"
                                      />
                                    ))}
                                  </div>
                                  <span className="text-xs text-gray-400">
                                    {classItem.instructors[0].name}
                                    {classItem.instructors.length > 1 && (
                                      <span className="text-fuchsia-400 ml-1">
                                        +{classItem.instructors.length - 1}
                                      </span>
                                    )}
                                  </span>
                                </div>

                                <div className="flex items-center justify-between mb-4">
                                  <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full">
                                    {classItem.style}
                                  </span>
                                </div>

                                {/* View Class Button */}
                                <Button 
                                  variant="outline" 
                                  className="w-full bg-transparent border-fuchsia-400/50 text-fuchsia-400 hover:bg-fuchsia-400/10 hover:border-fuchsia-400 transition-all duration-300"
                                >
                                  View Class
                                </Button>
                              </div>
                            </Link>
                          </Card>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dots indicator */}
              {similarClasses.length > 3 && (
                <div className="flex justify-center mt-8 space-x-2">
                  {Array.from({ length: Math.ceil(similarClasses.length / 3) }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentSlide ? 'bg-fuchsia-400' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default ClassDetail;
