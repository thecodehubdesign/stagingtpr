
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProgramsComparison from '@/components/ProgramsComparison';
import StudioHistory from '@/components/StudioHistory';
import FounderSection from '@/components/FounderSection';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, Zap, Users, Trophy, Star, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Empowerment",
      description: "We believe every person has the power to transform their life through movement and community."
    },
    {
      icon: Users,
      title: "Inclusive Community",
      description: "A safe space where everyone belongs, regardless of experience, body type, or background."
    },
    {
      icon: Trophy,
      title: "Excellence",
      description: "We're committed to providing world-class instruction and an exceptional studio experience."
    },
    {
      icon: Target,
      title: "Personal Growth",
      description: "Beyond physical fitness, we focus on building confidence, self-expression, and inner strength."
    }
  ];

  const stats = [
    { number: "6+", label: "Years of Excellence" },
    { number: "6", label: "Studio Locations" },
    { number: "2000+", label: "Lives Transformed" },
    { number: "100+", label: "Classes per Week" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Founder Section - Moved to top */}
      <FounderSection />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 cyber-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl sm:text-6xl font-bold gradient-text neon-glow mb-6">
              About The Pole Room
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're not just a fitness studio. We're a movement that transforms lives, 
              builds confidence, and creates a community where everyone can discover 
              their extraordinary.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                At The Pole Room, we guide everyday people to discover their power, 
                rewrite their identity, and step into a life of unapologetic confidence.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Through our proven method, we create transformation that begins on the pole 
                but extends into every aspect of your life - your relationships, career, 
                and how you show up in the world.
              </p>
              <Button className="neon-button text-black font-bold">
                Start Your Journey
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Pole dancing class"
                className="rounded-lg cyber-border float"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Comparison Section */}
      <ProgramsComparison />

      {/* Values Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              These core principles guide everything we do and shape the community we've built.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="cyber-card p-6 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <value.icon className="w-12 h-12 text-fuchsia-400 mx-auto mb-4 neon-glow" />
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Studio History Timeline */}
      <StudioHistory />

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-fuchsia-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Impact
            </h2>
            <p className="text-lg text-purple-100">
              Numbers that reflect our commitment to transformation
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2 neon-glow">
                  {stat.number}
                </div>
                <div className="text-purple-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Zap className="w-16 h-16 text-fuchsia-400 mx-auto mb-6 neon-glow pulse-neon" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to <span className="gradient-text">Transform</span>?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of people who have discovered their power through our proven method. 
            Your transformation starts with a single step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="neon-button text-black font-bold text-lg px-8 py-3">
              Book Free Trial Class
            </Button>
            <Button variant="outline" className="cyber-border text-cyan-400 hover:bg-cyan-400/10 text-lg px-8 py-3">
              Learn About Our Method
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
