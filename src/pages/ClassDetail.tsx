
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Share2, Star } from 'lucide-react';
import { useEffect } from 'react';

const ClassDetail = () => {
  const { classId } = useParams<{ classId: string }>();

  // Mock class data - in a real app, this would be fetched based on classId
  const classData = {
    id: 'beginner-pole-foundations',
    name: 'Pole Foundations',
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
      
      {/* Hero Section - Increased height by 50px */}
      <section className="pt-20 pb-20 relative overflow-hidden">
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

      <Footer />
    </div>
  );
};

export default ClassDetail;
