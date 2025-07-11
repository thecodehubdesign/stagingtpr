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
  return;
};
export default SocialProof;