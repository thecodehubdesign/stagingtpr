
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Studio } from '@/data/studios';

interface StudioContactProps {
  studio: Studio;
}

const StudioContact = ({ studio }: StudioContactProps) => {
  return (
    <section className="py-16 bg-gray-800/50 rounded-2xl my-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
          Contact <span className="gradient-text">Information</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6 bg-gray-800 border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-fuchsia-400 flex-shrink-0" />
                <span className="text-gray-300">{studio.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-fuchsia-400 flex-shrink-0" />
                <span className="text-gray-300">{studio.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-fuchsia-400 flex-shrink-0" />
                <span className="text-gray-300">{studio.email}</span>
              </div>
            </div>
            <Button className="w-full mt-6 bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700">
              Call Now
            </Button>
          </Card>
          
          <Card className="p-6 bg-gray-800 border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4">
              <Clock className="w-5 h-5 text-fuchsia-400 inline mr-2" />
              Studio Hours
            </h3>
            <div className="space-y-2">
              {Object.entries(studio.hours).map(([day, hours]) => (
                <div key={day} className="flex justify-between">
                  <span className="text-gray-300 font-medium">{day}</span>
                  <span className="text-gray-400">{hours}</span>
                </div>
              ))}
            </div>
            <Button className="w-full mt-6 bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700">
              Book a Class
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StudioContact;
