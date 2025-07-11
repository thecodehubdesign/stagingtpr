import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Play, Quote, ArrowLeft, ArrowRight } from 'lucide-react';
const SocialProof = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [{
    name: "Sarah Johnson",
    age: 28,
    location: "Melbourne CBD",
    rating: 5,
    text: "I never thought I could do pole dancing, but Jasmine and her team made me feel so welcome. Six months later, I'm stronger and more confident than ever!",
    image: "https://images.unsplash.com/photo-1494790108755-2616c5e912e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    achievement: "First Invert in 3 months"
  }, {
    name: "Emma Chen",
    age: 35,
    location: "South Melbourne",
    rating: 5,
    text: "After having kids, I lost confidence in my body. The Pole Room helped me rediscover my strength and femininity. It's been life-changing!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    achievement: "Completed Level 3"
  }, {
    name: "Jessica Williams",
    age: 24,
    location: "Richmond",
    rating: 5,
    text: "The community here is incredible. Everyone supports each other, and the instructors are amazing. I've made lifelong friends and discovered a passion I never knew I had.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    achievement: "Now teaching beginner classes"
  }];
  const stats = [{
    number: "5,000+",
    label: "Happy Students"
  }, {
    number: "50+",
    label: "Expert Instructors"
  }, {
    number: "3",
    label: "Studio Locations"
  }, {
    number: "4.9/5",
    label: "Average Rating"
  }];
  const nextTestimonial = () => {
    setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };
  return <section className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-200">
            What Our Students Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of women who have transformed their lives at The Pole Room
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => <div key={index} className="text-center animate-fade-in" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
            </div>)}
        </div>

        {/* Video Testimonial Section */}
        <div className="mb-16">
          <Card className="relative overflow-hidden shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-rose-500 to-purple-600 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-white/30 transition-colors cursor-pointer">
                  <Play className="w-8 h-8 ml-1" fill="currentColor" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Watch Student Success Stories</h3>
                <p className="text-rose-100">See real transformations from our amazing community</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Testimonial Carousel */}
        <Card className="p-8 shadow-xl bg-white/80 backdrop-blur-sm">
          <div className="relative">
            <div className="flex items-center justify-between mb-6">
              <div className="flex space-x-1">
                {Array.from({
                length: 5
              }, (_, i) => <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />)}
              </div>
              
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" onClick={prevTestimonial}>
                  <ArrowLeft className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={nextTestimonial}>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="animate-fade-in" key={currentTestimonial}>
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <img src={testimonials[currentTestimonial].image} alt={testimonials[currentTestimonial].name} className="w-16 h-16 rounded-full object-cover" />
                </div>
                
                <div className="flex-1">
                  <Quote className="w-8 h-8 text-rose-400 mb-4" />
                  <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonials[currentTestimonial].name}, {testimonials[currentTestimonial].age}
                      </h4>
                      <p className="text-sm text-gray-600">{testimonials[currentTestimonial].location}</p>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-sm font-medium text-rose-600">
                        {testimonials[currentTestimonial].achievement}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => <button key={index} onClick={() => setCurrentTestimonial(index)} className={`w-2 h-2 rounded-full transition-colors ${index === currentTestimonial ? 'bg-rose-500' : 'bg-gray-300'}`} />)}
            </div>
          </div>
        </Card>
      </div>
    </section>;
};
export default SocialProof;