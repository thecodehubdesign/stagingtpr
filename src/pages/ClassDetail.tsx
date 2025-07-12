
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Users, Star, Heart, CheckCircle, Phone, Car, Share2 } from 'lucide-react';

const ClassDetail = () => {
  const { classId } = useParams<{ classId: string }>();

  // Mock class data - in a real app, this would be fetched based on classId
  const classData = {
    id: 'beginner-pole-foundations',
    name: 'Beginner Pole Foundations',
    level: 'Beginner',
    duration: '60 min',
    heroImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    description: "Unlock your inner strength and confidence with our most popular beginner class! Designed for absolute first-timers and those looking to build a solid foundation, Beginner Pole Foundations covers the basics of pole dance in a welcoming, supportive environment. You'll learn spins, transitions, and simple tricks while making friends and having a laugh. No fitness or dance experience required—just bring your curiosity and a sense of fun. All ages and abilities welcome!",
    features: [
      'No experience needed',
      'All genders welcome', 
      'Focus on technique and confidence-building',
      'Supportive, inclusive community',
      'Free first class for new students'
    ],
    instructor: {
      name: 'Sarah Mitchell',
      photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80',
      bio: 'Sarah has been teaching pole dance for over 8 years and specializes in helping absolute beginners discover their strength and confidence. Her warm, encouraging approach makes everyone feel welcome from day one.'
    },
    studio: {
      name: 'The Pole Room - Central',
      address: '123 Collins Street, Melbourne VIC 3000',
      phone: '(03) 9123 4567',
      parking: 'Street parking available. Wilson Parking nearby at 456 Elizabeth Street.',
      lat: -37.8136,
      lng: 144.9631
    },
    upcomingClasses: [
      { date: 'Mon, Jan 15', time: '7:00 PM', spotsLeft: 5 },
      { date: 'Wed, Jan 17', time: '6:30 PM', spotsLeft: 3 },
      { date: 'Fri, Jan 19', time: '7:00 PM', spotsLeft: 8 },
      { date: 'Mon, Jan 22', time: '7:00 PM', spotsLeft: 6 }
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
    ],
    relatedClasses: [
      { name: 'Pole Progression', level: 'Intermediate', id: 'pole-progression' },
      { name: 'Flexibility Flow', level: 'All Levels', id: 'flexibility-flow' }
    ]
  };

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
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 relative overflow-hidden">
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

      {/* Instructor Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Meet Your <span className="gradient-text">Instructor</span>
            </h2>
          </div>
          
          <Card className="cyber-card p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img 
                  src={classData.instructor.photo}
                  alt={classData.instructor.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-fuchsia-500/30"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-4">{classData.instructor.name}</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {classData.instructor.bio}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Studio Location */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Class <span className="gradient-text">Location</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="cyber-card p-8">
              <h3 className="text-xl font-bold text-white mb-6">{classData.studio.name}</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-fuchsia-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{classData.studio.address}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-fuchsia-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{classData.studio.phone}</span>
                </div>
                <div className="flex items-start">
                  <Car className="w-5 h-5 text-fuchsia-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{classData.studio.parking}</span>
                </div>
              </div>
            </Card>

            <div className="w-full h-64 lg:h-full rounded-lg overflow-hidden border border-fuchsia-500/30">
              <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                <p className="text-gray-400">Interactive Map Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Classes */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Upcoming <span className="gradient-text">Class Times</span>
            </h2>
            <p className="text-lg text-gray-300">Book your spot in the next available class</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {classData.upcomingClasses.map((classTime, index) => (
              <Card key={index} className="cyber-card p-6 text-center">
                <div className="mb-4">
                  <div className="flex items-center justify-center text-fuchsia-400 mb-2">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span className="font-bold">{classTime.date}</span>
                  </div>
                  <div className="flex items-center justify-center text-cyan-400 mb-2">
                    <Clock className="w-5 h-5 mr-2" />
                    <span className="font-bold">{classTime.time}</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-300">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm">{classTime.spotsLeft} spots left</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700">
                  Book Now
                </Button>
              </Card>
            ))}
          </div>
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

      {/* Related Classes */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Related <span className="gradient-text">Classes</span>
            </h2>
            <p className="text-lg text-gray-300">Continue your journey with these classes</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {classData.relatedClasses.map((relatedClass, index) => (
              <Card key={index} className="cyber-card p-6 hover:scale-105 transition-transform cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{relatedClass.name}</h3>
                  <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                    {relatedClass.level}
                  </Badge>
                </div>
                <Button variant="outline" className="cyber-border text-cyan-400 hover:bg-cyan-400/10">
                  Learn More
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ClassDetail;
