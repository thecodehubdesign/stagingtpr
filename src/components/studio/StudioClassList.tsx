
import { Card } from '@/components/ui/card';
import { Calendar } from 'lucide-react';
import { useEffect } from 'react';
import FreeTrialBookingForm from '../FreeTrialBookingForm';

interface StudioClassListProps {
  studioId: string;
}

const StudioClassList = ({ studioId }: StudioClassListProps) => {
  useEffect(() => {
    // Load the MindBody widget script
    const script = document.createElement('script');
    script.src = 'https://widgets.mindbodyonline.com/javascripts/healcode.js';
    script.type = 'text/javascript';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="py-16 bg-gray-800/50 rounded-2xl my-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Upcoming <span className="gradient-text">Class Schedule</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Book your spot in our upcoming classes and start your fitness journey today.
          </p>
        </div>

        <div className="mb-8">
          <Card className="p-6 bg-gray-800 border-gray-700">
            <div className="flex items-center mb-4">
              <Calendar className="w-6 h-6 mr-2 text-fuchsia-400" />
              <h3 className="text-xl font-bold text-white">Live Class Schedule</h3>
            </div>
            
            {/* MindBody Schedule Widget Container */}
            <div className="bg-white rounded-lg p-4 min-h-[400px]">
              <div 
                dangerouslySetInnerHTML={{
                  __html: `
                    <script src="https://widgets.mindbodyonline.com/javascripts/healcode.js" type="text/javascript"></script>
                    <healcode-widget data-type="schedules" data-widget-partner="object" data-widget-id="d927417628e" data-widget-version="1"></healcode-widget>
                  `
                }}
              />
            </div>
          </Card>
        </div>

        <div className="text-center mt-12">
          <FreeTrialBookingForm />
        </div>
      </div>
    </section>
  );
};

export default StudioClassList;
