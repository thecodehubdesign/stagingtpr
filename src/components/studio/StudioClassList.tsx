import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import FreeTrialBookingForm from '../FreeTrialBookingForm';
import { Studio } from '@/data/studios';

declare global {
  interface Window {
    healcode?: {
      loadWidgets: () => void;
    };
  }
}

interface StudioClassListProps {
  studio: Studio;
}

const StudioClassList = ({ studio }: StudioClassListProps) => {
  const [activeFilter, setActiveFilter] = useState<'full' | 'beginner'>('full');
  
  // Extract just the location name (e.g., "Mitcham" from "The Pole Room Mitcham")
  const locationName = studio.name.replace('The Pole Room ', '');

  useEffect(() => {
    // Load the MindBody widget script
    const script = document.createElement('script');
    script.src = 'https://widgets.mindbodyonline.com/javascripts/healcode.js';
    script.type = 'text/javascript';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.head.querySelector('script[src="https://widgets.mindbodyonline.com/javascripts/healcode.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  // Reload widget when filter changes
  useEffect(() => {
    if (window.healcode) {
      window.healcode.loadWidgets();
    }
  }, [activeFilter]);

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-fuchsia-400 text-sm uppercase tracking-widest mb-3">Our Classes</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-white">{locationName} </span>
            <span className="gradient-text">Daily Timetable</span>
          </h2>
          <p className="text-white/80 max-w-3xl mx-auto">
            View our upcoming schedule with something for everyone. We aim to offer a variety 
            of classes for all skill levels across dance, conditioning and tricks classes. 
            You can also use the filters at the top to filter between all classes and beginner 
            friendly classes. Read the class descriptions to learn more. You can also view our{' '}
            <a href="/programs/pole/beginner" className="text-fuchsia-400 hover:text-fuchsia-300 underline">
              level guide here
            </a>{' '}
            with more information on starting out.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="p-6 bg-gray-800 border-gray-700">
            {/* Filter Toggle - Inside Card */}
            <div className="flex justify-center gap-4 mb-6">
              <button
                onClick={() => setActiveFilter('full')}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeFilter === 'full'
                    ? 'bg-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/30'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                Full Timetable
              </button>
              <button
                onClick={() => setActiveFilter('beginner')}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeFilter === 'beginner'
                    ? 'bg-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/30'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                Beginner Friendly
              </button>
            </div>

            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-3 shadow-lg shadow-green-500/50" />
              <h3 className="text-xl font-bold text-white">Live Class Schedule</h3>
            </div>
            
            {/* MindBody Schedule Widget Container - conditionally render based on filter */}
            <div className="bg-white rounded-lg p-4 min-h-[400px]">
              {activeFilter === 'full' ? (
                <div 
                  key="full-schedule"
                  dangerouslySetInnerHTML={{
                    __html: `
                      <healcode-widget data-type="schedules" data-widget-partner="object" data-widget-id="d927417628e" data-widget-version="1"></healcode-widget>
                    `
                  }}
                />
              ) : (
                <div 
                  key="beginner-schedule"
                  dangerouslySetInnerHTML={{
                    __html: `
                      <healcode-widget data-type="schedules" data-widget-partner="object" data-widget-id="BEGINNER_WIDGET_ID" data-widget-version="1"></healcode-widget>
                    `
                  }}
                />
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StudioClassList;
