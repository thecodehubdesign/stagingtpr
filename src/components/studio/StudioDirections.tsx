import { motion } from 'framer-motion';
import { MapPin, Train, Car, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Studio } from '@/data/studios';

interface StudioDirectionsProps {
  studio: Studio;
}

const StudioDirections = ({ studio }: StudioDirectionsProps) => {
  const studioLocation = studio.name.replace('The Pole Room ', '');
  
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(studio.address)}`;

  return (
    <section className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Getting to <span className="gradient-text">The Pole Room {studioLocation}</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl overflow-hidden cyber-border h-80 lg:h-full min-h-[320px]">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(studio.address)}`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-125"
              />
            </div>
            
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-4 h-4 text-fuchsia-400" />
                <span className="text-sm">{studio.address}</span>
              </div>
              <a 
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-fuchsia-400 hover:text-fuchsia-300 text-sm font-medium"
              >
                Open in Google Maps
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Info Cards Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Public Transport Card */}
            <Card className="cyber-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <Train className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">Public Transport</h3>
              </div>
              
              <div className="space-y-3">
                {studio.transportInfo ? (
                  studio.transportInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-fuchsia-500/20 flex items-center justify-center text-fuchsia-400 text-sm font-medium flex-shrink-0">
                        {index + 1}
                      </span>
                      <p className="text-gray-300 text-sm">{info}</p>
                    </div>
                  ))
                ) : (
                  <>
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-fuchsia-500/20 flex items-center justify-center text-fuchsia-400 text-sm font-medium flex-shrink-0">1</span>
                      <p className="text-gray-300 text-sm">Take the train to the nearest station</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-fuchsia-500/20 flex items-center justify-center text-fuchsia-400 text-sm font-medium flex-shrink-0">2</span>
                      <p className="text-gray-300 text-sm">Walk 5-10 minutes to the studio</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-fuchsia-500/20 flex items-center justify-center text-fuchsia-400 text-sm font-medium flex-shrink-0">3</span>
                      <p className="text-gray-300 text-sm">Bus routes also available nearby</p>
                    </div>
                  </>
                )}
              </div>
            </Card>

            {/* Parking Card */}
            <Card className="cyber-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-fuchsia-500/20 flex items-center justify-center">
                  <Car className="w-5 h-5 text-fuchsia-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">Parking</h3>
              </div>
              
              <div className="space-y-2">
                {studio.parkingInfo ? (
                  studio.parkingInfo.map((info, index) => (
                    <p key={index} className="text-gray-300 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400" />
                      {info}
                    </p>
                  ))
                ) : (
                  <>
                    <p className="text-gray-300 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400" />
                      Free onsite parking available
                    </p>
                    <p className="text-gray-300 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400" />
                      Additional street parking nearby
                    </p>
                    <p className="text-gray-300 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400" />
                      Accessible parking bay near entrance
                    </p>
                  </>
                )}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StudioDirections;
