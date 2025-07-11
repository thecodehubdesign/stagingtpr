
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StudioLocations from '@/components/StudioLocations';
import StudioMap from '@/components/StudioMap';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, Clock, Phone, Mail, Car, Wifi, Coffee, Users } from 'lucide-react';

const Studios = () => {
  const studioFeatures = [
    { icon: Users, title: "Small Class Sizes", description: "Maximum 8 students per class for personalized attention" },
    { icon: Wifi, title: "Premium Equipment", description: "Professional-grade poles, aerial points, and safety mats" },
    { icon: Coffee, title: "Comfort Amenities", description: "Changing rooms, lockers, and refreshment areas" },
    { icon: Car, title: "Easy Access", description: "Convenient parking and public transport connections" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 cyber-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl sm:text-6xl font-bold gradient-text mb-6">
              Our Studios
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Three premium locations across Melbourne, each designed to provide 
              a safe, inspiring space for your transformation journey.
            </p>
            <Button className="neon-button text-black font-bold text-lg px-8 py-3">
              Find Your Nearest Studio
            </Button>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Find <span className="gradient-text">Our Studios</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Located across Melbourne for your convenience. Click on the markers to see more details about each location.
            </p>
          </div>
          <StudioMap />
        </div>
      </section>

      {/* Studio Features */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              What Makes Our <span className="gradient-text">Studios Special</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Every detail has been carefully considered to create the perfect environment 
              for your fitness journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {studioFeatures.map((feature, index) => (
              <Card 
                key={index} 
                className="cyber-card p-6 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <feature.icon className="w-12 h-12 text-fuchsia-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Locations Component */}
      <StudioLocations />

      {/* Virtual Tour CTA */}
      <section className="py-20 bg-gradient-to-r from-fuchsia-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Take a Virtual Studio Tour
          </h2>
          <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            Get a feel for our spaces before you visit. Explore our studios from 
            the comfort of your home and see what makes each location special.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="neon-button text-black font-bold text-lg px-8 py-3">
              Start Virtual Tour
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-3">
              Schedule Visit
            </Button>
          </div>
        </div>
      </section>

      {/* Opening Hours */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Studio <span className="gradient-text">Hours</span>
            </h2>
            <p className="text-lg text-gray-300">
              We're open 7 days a week to fit your schedule
            </p>
          </div>

          <Card className="cyber-card p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-fuchsia-400" />
                  Weekdays
                </h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>6:00 AM - 9:00 PM</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    Early morning and evening classes available
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-fuchsia-400" />
                  Weekends
                </h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Studios;
