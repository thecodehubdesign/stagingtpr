
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Studio } from '@/data/studios';
import FreeTrialBookingForm from '../FreeTrialBookingForm';

interface StudioContactProps {
  studio: Studio;
}

const StudioContact = ({ studio }: StudioContactProps) => {
  return (
    <section className="py-8 sm:py-16 bg-gray-800/50 rounded-2xl my-8 sm:my-16 mx-2 sm:mx-0">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-12 text-center">
          Contact <span className="gradient-text">Information</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
          <Card className="p-4 sm:p-6 bg-gray-800 border-gray-700">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Get In Touch</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-fuchsia-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm sm:text-base break-words">{studio.address}</span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-fuchsia-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm sm:text-base">{studio.phone}</span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-fuchsia-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm sm:text-base break-all">{studio.email}</span>
              </div>
            </div>
            <Button className="w-full mt-4 sm:mt-6 bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 text-sm sm:text-base">
              Call Now
            </Button>
          </Card>
          
          <Card className="p-4 sm:p-6 bg-gray-800 border-gray-700">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-fuchsia-400 inline mr-2" />
              Studio Hours
            </h3>
            <div className="space-y-2">
              {Object.entries(studio.hours).map(([day, hours]) => (
                <div key={day} className="flex justify-between gap-2 text-sm sm:text-base">
                  <span className="text-gray-300 font-medium whitespace-nowrap">{day}</span>
                  <span className="text-gray-400 text-right">{hours}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 sm:mt-6">
              <FreeTrialBookingForm />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StudioContact;
