
import { Heart, Users, Award, MapPin, GraduationCap, Clock, Building, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const FounderSection = () => {
  const benefits = [{
    icon: Heart,
    title: "Inclusive & Supportive Studios",
    description: "A welcoming space for every body and fitness level"
  }, {
    icon: Users,
    title: "Beginner-Friendly",
    description: "No experience needed - we'll guide you every step"
  }, {
    icon: Award,
    title: "Structured Programs",
    description: "Progressive classes that help you achieve your goals"
  }];

  const statistics = [{
    icon: Users,
    number: "5000+",
    label: "Students Served"
  }, {
    icon: Clock,
    number: "100,000",
    label: "Classes Taught and Counting"
  }, {
    icon: Building,
    number: "6",
    label: "Studio Locations"
  }, {
    icon: GraduationCap,
    number: "40+",
    label: "Instructors"
  }];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            About <span className="gradient-text">The Pole Room</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We're more than a fitness studio - we're a community that transforms lives, 
            builds confidence, and empowers everyone to discover their extraordinary potential.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="cyber-card p-6 text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <benefit.icon className="w-12 h-12 text-fuchsia-400 mx-auto mb-4 neon-glow" />
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
            </Card>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {statistics.map((stat, index) => (
            <div 
              key={index} 
              className="text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <stat.icon className="w-12 h-12 text-fuchsia-400 mx-auto mb-4 neon-glow" />
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2 neon-glow">
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button className="neon-button text-black font-bold text-lg px-8 py-3">
            Start Your Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
