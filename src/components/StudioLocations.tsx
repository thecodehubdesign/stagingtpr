import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Calendar, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import StudioMap from './StudioMap';
const StudioLocations = () => {
  const studios = [{
    name: "The Pole Room Mitcham",
    address: "2e Cochrane Street, Mitcham VIC 3132",
    phone: "(03) 9123 4567",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    features: ["6 Pole Stations", "Aerial Points", "Changing Rooms", "Parking Available"]
  }, {
    name: "The Pole Room Melbourne CBD",
    address: "2/333 Flinders Lane, Melbourne VIC 3000",
    phone: "(03) 9234 5678",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    features: ["8 Pole Stations", "Aerial Silks", "Dance Floor", "Retail Store"]
  }];
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };
  return <section id="studios" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{
        once: true
      }} variants={containerVariants}>
          <motion.div variants={itemVariants} transition={{
          duration: 0.6,
          ease: "easeOut"
        }}>
            <Badge className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.08] border border-white/[0.15] backdrop-blur-sm mb-6">
              Studio Locations
            </Badge>
          </motion.div>
          <motion.h2 variants={itemVariants} transition={{
          duration: 0.6,
          ease: "easeOut"
        }} className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-300 to-rose-300 font-bold text-6xl">Find Your 
Nearest Studio</motion.h2>
          <motion.p variants={itemVariants} transition={{
          duration: 0.6,
          ease: "easeOut"
        }} className="text-lg text-muted-foreground max-w-2xl mx-auto py-0">
            Discover your local fitness community across Melbourne with convenient locations
          </motion.p>
        </motion.div>

        {/* Interactive Map Section */}
        <motion.div className="mb-16" initial="hidden" whileInView="visible" viewport={{
        once: true
      }} variants={itemVariants} transition={{
        duration: 0.8,
        ease: "easeOut"
      }}>
          
          <div className="rounded-xl overflow-hidden border border-border cyber-card">
            <StudioMap />
          </div>
        </motion.div>

        {/* Studio Cards Grid */}
        <motion.div className="grid lg:grid-cols-2 gap-8 mb-12" initial="hidden" whileInView="visible" viewport={{
        once: true
      }} variants={containerVariants}>
          {studios.map((studio, index) => <motion.div key={index} variants={itemVariants} transition={{
          duration: 0.6,
          ease: "easeOut"
        }} whileHover={{
          scale: 1.02
        }}>
              <Card className="overflow-hidden cyber-card hover:shadow-2xl transition-all duration-300 bg-card border-border">
                {/* Studio Image */}
                <div className="relative h-48 overflow-hidden">
                  <img src={studio.image} alt={studio.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent"></div>
                </div>

                {/* Studio Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{studio.name}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start space-x-2 text-muted-foreground">
                      <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-fuchsia-400" />
                      <span className="text-sm">{studio.address}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Phone className="w-4 h-4 flex-shrink-0 text-fuchsia-400" />
                      <span className="text-sm">{studio.phone}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Studio Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {studio.features.map((feature, featureIndex) => <Badge key={featureIndex} className="text-xs bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30">
                          {feature}
                        </Badge>)}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" size="sm" className="border-fuchsia-500/30 text-fuchsia-300 hover:bg-fuchsia-500/20">
                      <Calendar className="w-4 h-4 mr-2" />
                      View Classes
                    </Button>
                    <Button variant="outline" size="sm" className="border-purple-500/30 text-purple-300 hover:bg-purple-500/20">
                      <Eye className="w-4 h-4 mr-2" />
                      Take a Tour
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>)}
        </motion.div>

        {/* Find Nearest Studio CTA */}
        <motion.div className="text-center" initial="hidden" whileInView="visible" viewport={{
        once: true
      }} variants={itemVariants} transition={{
        duration: 0.6,
        ease: "easeOut"
      }}>
          <Button size="lg" className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 text-white font-semibold px-8 py-3">
            <MapPin className="w-5 h-5 mr-2" />
            Find My Nearest Studio
          </Button>
        </motion.div>
      </div>
    </section>;
};
export default StudioLocations;