
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StudioSearch from '@/components/StudioSearch';
import StudioMap from '@/components/StudioMap';
import SectionNavigation from '@/components/SectionNavigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, Users, Wifi, Coffee, Car } from 'lucide-react';
import FreeTrialBookingForm from '@/components/FreeTrialBookingForm';

const Studios = () => {
  const sections = [{
    id: 'hero',
    label: 'Studios'
  }, {
    id: 'map',
    label: 'Locations'
  }, {
    id: 'search',
    label: 'Find Studio'
  }, {
    id: 'features',
    label: 'Features'
  }];

  const studioFeatures = [{
    icon: Users,
    title: "Small Class Sizes",
    description: "Maximum 8 students per class for personalized attention"
  }, {
    icon: Wifi,
    title: "Premium Equipment",
    description: "Professional-grade poles, aerial points, and safety mats"
  }, {
    icon: Coffee,
    title: "Comfort Amenities",
    description: "Changing rooms, lockers, and refreshment areas"
  }, {
    icon: Car,
    title: "Easy Access",
    description: "Convenient parking and public transport connections"
  }];

  return <div className="min-h-screen">
      <Header />
      <SectionNavigation sections={sections} />
      
      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 cyber-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl sm:text-6xl font-bold gradient-text mb-6">
              Our Studios
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Six premium locations across Melbourne, each designed to provide 
              a safe, inspiring space for your transformation journey.
            </p>
            <FreeTrialBookingForm />
          </div>
        </div>
      </section>

      {/* Google Maps Section - Moved up and made larger */}
      <section id="map" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[600px]">
            <StudioMap />
          </div>
        </div>
      </section>

      {/* Studio Search Section */}
      <section id="search" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Find Your <span className="gradient-text">Nearest Studio</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Search by location and filter by the apparatus you're interested in to find your ideal studio.
            </p>
          </div>
          <StudioSearch />
        </div>
      </section>

      {/* Studio Features */}
      <section id="features" className="py-20 bg-gray-900">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {studioFeatures.map((feature, index) => <Card key={index} className="cyber-card p-6 text-center animate-fade-in" style={{
            animationDelay: `${index * 0.15}s`
          }}>
                <feature.icon className="w-12 h-12 text-fuchsia-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </Card>)}
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};

export default Studios;
