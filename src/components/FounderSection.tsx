
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
    <section className="py-20 bg-gray-800" id="founder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="w-6 h-6 text-fuchsia-400 neon-glow" />
              <span className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                Meet Our Founder
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Meet <span className="gradient-text">Jasmine</span>, Our Founder & Visionary
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Starting with just two poles in her garage, Jasmine transformed her passion 
              into Melbourne's premier pole and aerial fitness community. Her vision was 
              simple: create a space where everyone feels empowered to discover their strength.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Today, The Pole Room has grown into 6+ locations across Melbourne, but our 
              core mission remains the same - helping people transform their relationship 
              with fitness and themselves.
            </p>
            <Button className="neon-button text-black font-bold">
              Learn About Our Journey
            </Button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Jasmine, founder of The Pole Room"
              className="rounded-lg cyber-border float"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent rounded-lg"></div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="cyber-card p-6 text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <benefit.icon className="w-12 h-12 text-fuchsia-400 mx-auto mb-4 neon-glow" />
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div 
              key={index} 
              className="text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <stat.icon className="w-8 h-8 text-fuchsia-400 mx-auto mb-2 neon-glow" />
              <div className="text-3xl font-bold text-white mb-2 neon-glow">
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
