import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Studio } from '@/data/studios';
import CustomTimetable from './CustomTimetable';

interface StudioClassListProps {
  studio: Studio;
}

const StudioClassList = ({ studio }: StudioClassListProps) => {
  const [activeFilter, setActiveFilter] = useState<'full' | 'beginner'>('full');
  
  // Extract just the location name (e.g., "Mitcham" from "The Pole Room Mitcham")
  const locationName = studio.name.replace('The Pole Room ', '');

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
            View our upcoming schedule with something for everyone. We aim to offer a variety 
            of classes for all skill levels across dance, conditioning and tricks classes. 
            You can also use the filters at the top to filter between all classes and beginner 
            friendly classes. Read the class descriptions to learn more. You can also view our{' '}
            <a href="/programs/pole/beginner" className="text-primary hover:text-primary/80 underline">
              level guide here
            </a>{' '}
            with more information on starting out.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-6 cyber-card border-0">
            {/* Filter Toggle - Inside Card */}
            <div className="flex justify-center gap-4 mb-6">
              <button
                onClick={() => setActiveFilter('full')}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeFilter === 'full'
                    ? 'neon-button text-primary-foreground'
                    : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
                }`}
              >
                Full Timetable
              </button>
              <button
                onClick={() => setActiveFilter('beginner')}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeFilter === 'beginner'
                    ? 'neon-button text-primary-foreground'
                    : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
                }`}
              >
                Beginner Friendly
              </button>
            </div>

            <div className="flex items-center mb-6">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse mr-3 shadow-lg shadow-emerald-500/50" />
              <h3 className="text-xl font-bold text-foreground">Live Class Schedule</h3>
            </div>
            
            {/* Custom Timetable Component */}
            <CustomTimetable 
              studioName={locationName}
              activeFilter={activeFilter}
            />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StudioClassList;
