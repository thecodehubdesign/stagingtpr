
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Heart, Zap, Crown, ChevronLeft, ChevronRight } from 'lucide-react';

const SocialProofCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah M.",
      type: "The Achiever",
      icon: Star,
      color: "from-yellow-400 to-orange-500",
      quote: "I've never felt stronger! In just 8 weeks I went from barely hanging on the pole to nailing my first spin combo. The structured progression kept me motivated every single week.",
      image: "/lovable-uploads/14503a9b-f9c7-41ee-a0b5-131b4a9a6989.png"
    },
    {
      name: "Jess K.",
      type: "The Social Butterfly",
      icon: Heart,
      color: "from-pink-400 to-rose-500",
      quote: "The friendships I've made here are incredible! We cheer each other on, laugh together, and now we hang out outside class too. It's like finding your tribe.",
      image: "/lovable-uploads/5b3dd8e8-6bc4-4f4a-af01-655d55902167.png"
    },
    {
      name: "Michelle R.",
      type: "The Athlete",
      icon: Zap,
      color: "from-cyan-400 to-blue-500",
      quote: "This is hands down the best workout I've ever done. My core strength has gone through the roof and I'm more flexible than I've been in years. It's addictive!",
      image: "/lovable-uploads/9f395d23-917c-4f57-aee6-3730701698b1.png"
    },
    {
      name: "Emma T.",
      type: "The Stage Star",
      icon: Crown,
      color: "from-purple-400 to-fuchsia-500",
      quote: "I discovered a confidence I never knew I had. Dancing on the pole makes me feel powerful, graceful, and completely myself. I'm already planning my first performance!",
      image: "/lovable-uploads/29e3bddc-c99a-43e5-87df-ab4c0905e1a0.png"
    },
    {
      name: "Lisa H.",
      type: "The Achiever",
      icon: Star,
      color: "from-yellow-400 to-orange-500",
      quote: "At 45, I thought it was too late to try something new. Wrong! The instructors meet you where you are and celebrate every small win. I'm proof that pole is for everyone.",
      image: "/lovable-uploads/14503a9b-f9c7-41ee-a0b5-131b4a9a6989.png"
    },
    {
      name: "Amy S.",
      type: "The Social Butterfly",
      icon: Heart,
      color: "from-pink-400 to-rose-500",
      quote: "I was so nervous for my first class, but within 10 minutes I was laughing and having the best time. The community here is so welcoming - you feel at home immediately.",
      image: "/lovable-uploads/5b3dd8e8-6bc4-4f4a-af01-655d55902167.png"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.08] border border-white/[0.15] backdrop-blur-sm mb-6">
            Studio Success Stories
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            <span className="gradient-text">Real Stories</span> from Real People
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Every pathway leads to transformation. Here's what our students have to say about their journey.
          </p>
        </div>

        <div className="relative">
          {/* Main Carousel */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => {
                const IconComponent = testimonial.icon;
                
                return (
                  <div key={index} className="w-full flex-shrink-0">
                    <Card className="cyber-card p-8 mx-4">
                      <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                        {/* Image */}
                        <div className="flex-shrink-0">
                          <div 
                            className="w-24 h-24 rounded-full bg-cover bg-center relative"
                            style={{ backgroundImage: `url(${testimonial.image})` }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-full"></div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-grow text-center md:text-left">
                          <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                            <div className={`w-8 h-8 bg-gradient-to-r ${testimonial.color} rounded-full flex items-center justify-center`}>
                              <IconComponent className="w-4 h-4 text-white" />
                            </div>
                            <Badge className={`bg-gradient-to-r ${testimonial.color} text-white border-0`}>
                              {testimonial.type}
                            </Badge>
                          </div>
                          
                          <blockquote className="text-lg text-gray-300 italic mb-4 leading-relaxed">
                            "{testimonial.quote}"
                          </blockquote>
                          
                          <cite className="text-white font-semibold">
                            — {testimonial.name}
                          </cite>
                        </div>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800/80 rounded-full flex items-center justify-center text-white hover:bg-gray-700/80 transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800/80 rounded-full flex items-center justify-center text-white hover:bg-gray-700/80 transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-fuchsia-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofCarousel;
