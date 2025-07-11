
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Play, Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
            Join Our Community
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Thousands of students have transformed their lives with us
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm lg:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Carousel */}
        <motion.div
          className="relative max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="cyber-card p-8 lg:p-12 bg-gray-800/50 border-gray-700">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 lg:w-24 lg:h-24 rounded-full object-cover border-2 border-fuchsia-500"
                />
              </div>
              
              <div className="flex-1 text-center lg:text-left">
                <Quote className="w-8 h-8 text-fuchsia-400 mb-4 mx-auto lg:mx-0" />
                <p className="text-lg lg:text-xl text-gray-200 mb-6 leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </p>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold text-lg">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Age {testimonials[currentTestimonial].age} • {testimonials[currentTestimonial].location}
                  </p>
                  <p className="text-fuchsia-400 text-sm font-medium mt-1">
                    {testimonials[currentTestimonial].achievement}
                  </p>
                </div>

                <div className="flex justify-center lg:justify-start">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center mt-8 gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="border-fuchsia-500/30 text-fuchsia-300 hover:bg-fuchsia-500/20"
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="border-fuchsia-500/30 text-fuchsia-300 hover:bg-fuchsia-500/20"
              >
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
