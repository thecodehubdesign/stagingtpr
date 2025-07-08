
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, Phone, Calendar, Eye } from 'lucide-react';

const StudioLocations = () => {
  const studios = [
    {
      name: "The Pole Room Melbourne CBD",
      address: "123 Collins Street, Melbourne VIC 3000",
      phone: "(03) 9123 4567",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: ["6 Pole Stations", "Aerial Points", "Changing Rooms", "Parking Available"]
    },
    {
      name: "The Pole Room South Melbourne",
      address: "456 Chapel Street, South Melbourne VIC 3205",
      phone: "(03) 9234 5678",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: ["8 Pole Stations", "Aerial Silks", "Dance Floor", "Retail Store"]
    },
    {
      name: "The Pole Room Richmond",
      address: "789 Bridge Road, Richmond VIC 3121",
      phone: "(03) 9345 6789",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: ["10 Pole Stations", "Lyra Hoops", "Private Lessons", "Beginner-Friendly"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="studios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Studio Locations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find your nearest Pole Room studio and discover your local fitness community
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {studios.map((studio, index) => (
            <Card 
              key={index} 
              className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Studio Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={studio.image}
                  alt={studio.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Studio Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{studio.name}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-start space-x-2 text-gray-600">
                    <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-rose-500" />
                    <span className="text-sm">{studio.address}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Phone className="w-4 h-4 flex-shrink-0 text-rose-500" />
                    <span className="text-sm">{studio.phone}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Studio Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {studio.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex}
                        className="text-xs bg-rose-100 text-rose-700 px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-rose-300 text-rose-700 hover:bg-rose-50"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    View Classes
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-purple-300 text-purple-700 hover:bg-purple-50"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Take a Tour
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Find Nearest Studio CTA */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700"
          >
            <MapPin className="w-5 h-5 mr-2" />
            Find My Nearest Studio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StudioLocations;
