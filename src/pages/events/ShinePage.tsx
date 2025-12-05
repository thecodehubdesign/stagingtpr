import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Calendar, MapPin, Star, Users, Award, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/ui/section-header';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const ShinePage = () => {
  useScrollToTop();

  const categories = [
    { name: "Beginner", description: "For those in their first year of pole", prize: "$500" },
    { name: "Intermediate", description: "1-3 years of experience", prize: "$750" },
    { name: "Advanced", description: "3+ years of experience", prize: "$1,000" },
    { name: "Professional", description: "Instructors and performers", prize: "$1,500" },
    { name: "Artistic", description: "Focus on storytelling and emotion", prize: "$750" },
    { name: "Athletic", description: "Focus on strength and tricks", prize: "$750" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Badge className="mb-6 text-lg px-6 py-2 bg-yellow-500/20 border-yellow-500">
            <Trophy className="w-5 h-5 mr-2" />
            Premier Competition
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">SHINE</span> Competition
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-gray-200">
            Where Stars Are Born
          </p>
          
          <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
            Our premier annual pole competition celebrating artistry, athleticism, and personal achievement. Compete across multiple categories from beginner to professional.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="neon-button text-lg px-8">
              Register to Compete
            </Button>
            <Button size="lg" variant="outline" className="cyber-border text-lg px-8">
              Buy Spectator Tickets
            </Button>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <Card className="cyber-card">
              <CardContent className="p-6">
                <Calendar className="w-10 h-10 mx-auto mb-3 text-primary" />
                <h3 className="font-bold">Date</h3>
                <p className="text-muted-foreground">March 15, 2025</p>
              </CardContent>
            </Card>
            <Card className="cyber-card">
              <CardContent className="p-6">
                <MapPin className="w-10 h-10 mx-auto mb-3 text-primary" />
                <h3 className="font-bold">Venue</h3>
                <p className="text-muted-foreground">Melbourne Convention Centre</p>
              </CardContent>
            </Card>
            <Card className="cyber-card">
              <CardContent className="p-6">
                <Users className="w-10 h-10 mx-auto mb-3 text-primary" />
                <h3 className="font-bold">Competitors</h3>
                <p className="text-muted-foreground">100+ Athletes</p>
              </CardContent>
            </Card>
            <Card className="cyber-card">
              <CardContent className="p-6">
                <Award className="w-10 h-10 mx-auto mb-3 text-primary" />
                <h3 className="font-bold">Prize Pool</h3>
                <p className="text-muted-foreground">$5,000+</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader
            badgeText="Competition Categories"
            title="Find Your Category"
            subtitle="Categories for every level and style"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {categories.map((category) => (
              <Card key={category.name} className="cyber-card">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    {category.name}
                    <Badge variant="outline" className="text-primary border-primary">
                      {category.prize}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-yellow-600 via-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <Sparkles className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Shine?
          </h2>
          <p className="text-lg text-yellow-100 mb-8">
            Whether you're competing or cheering, be part of the biggest pole event of the year!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 font-bold">
              Register Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ShinePage;
