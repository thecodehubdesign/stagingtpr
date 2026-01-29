import { useEffect } from 'react';
import { Studio } from '@/data/studios';
import StudioSisterStudio from './StudioSisterStudio';

interface StudioClassListProps {
  studio: Studio;
}

const StudioClassList = ({ studio }: StudioClassListProps) => {
  const locationName = studio.name.replace('The Pole Room ', '');

  // Load Mindbody widget script
  useEffect(() => {
    const scriptSrc = 'https://brandedweb.mindbodyonline.com/embed/widget.js';
    
    // Check if script already exists
    const existingScript = document.querySelector(`script[src="${scriptSrc}"]`);
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = scriptSrc;
      script.async = true;
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup on unmount - only remove if navigating away
      const script = document.querySelector(`script[src="${scriptSrc}"]`);
      if (script && !document.querySelector('.mindbody-widget')) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary text-sm uppercase tracking-widest mb-3">Our Classes</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-foreground">{locationName} </span>
            <span className="gradient-text">Daily Timetable</span>
          </h2>
          <p className="text-foreground/80 max-w-3xl mx-auto">
            Book your next class directly below. View our upcoming schedule with 
            something for everyone across dance, conditioning and tricks classes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="cyber-card rounded-2xl overflow-hidden">
            <div className="flex items-center justify-center py-4 px-6 border-b border-primary/20">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse mr-3 shadow-lg shadow-emerald-500/50" />
              <h3 className="text-xl font-bold text-foreground">Live Class Schedule</h3>
            </div>
            
            <div className="min-h-[500px] p-2">
              <div 
                className="mindbody-widget" 
                data-widget-type="Schedules" 
                data-widget-id="d98131628e"
              />
            </div>
          </div>

          {/* Sister Studio - appears directly below timetable for partnered studios */}
          <StudioSisterStudio studio={studio} inline />
        </div>
      </div>
    </section>
  );
};

export default StudioClassList;
