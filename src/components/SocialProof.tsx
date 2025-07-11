
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

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of women who have transformed their lives through pole and aerial fitness
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="p-8 relative overflow-hidden">
            <div className="flex items-center gap-6">
              <div className="flex-shrink-0">
                <img 
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 rounded-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex gap-1 mb-2">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-700 mb-4 italic">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <div className="text-sm text-gray-600">
                  <strong>{testimonials[currentTestimonial].name}</strong>, {testimonials[currentTestimonial].age} • {testimonials[currentTestimonial].location}
                  <br />
                  <span className="text-purple-600 font-medium">{testimonials[currentTestimonial].achievement}</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center gap-4 mt-6">
              <Button variant="outline" size="sm" onClick={prevTestimonial}>
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <div className="flex gap-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-purple-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              <Button variant="outline" size="sm" onClick={nextTestimonial}>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
