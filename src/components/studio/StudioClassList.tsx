
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Users } from 'lucide-react';

interface StudioClassListProps {
  studioId: string;
}

const StudioClassList = ({ studioId }: StudioClassListProps) => {
  // Mock class schedule data - in a real app, this would be fetched based on studioId
  const weekClasses = [
    {
      day: "Monday",
      classes: [
        { time: "6:00 AM", name: "Morning Pole Flow", instructor: "Sarah", level: "All Levels", spots: 8 },
        { time: "7:00 PM", name: "Beginner Pole", instructor: "Emma", level: "Beginner", spots: 6 },
        { time: "8:15 PM", name: "Intermediate Pole", instructor: "Jessica", level: "Intermediate", spots: 4 }
      ]
    },
    {
      day: "Tuesday", 
      classes: [
        { time: "6:30 PM", name: "Aerial Silks", instructor: "Emma", level: "All Levels", spots: 7 },
        { time: "7:45 PM", name: "Advanced Pole", instructor: "Sarah", level: "Advanced", spots: 5 }
      ]
    },
    {
      day: "Wednesday",
      classes: [
        { time: "6:00 AM", name: "Early Bird Pole", instructor: "Jessica", level: "Intermediate", spots: 6 },
        { time: "7:00 PM", name: "Beginner Pole", instructor: "Sarah", level: "Beginner", spots: 8 },
        { time: "8:15 PM", name: "Pole Flow", instructor: "Emma", level: "All Levels", spots: 3 }
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-800/50 rounded-2xl my-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            This Week's <span className="gradient-text">Class Schedule</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Check out our upcoming classes and secure your spot today.
          </p>
        </div>

        <div className="space-y-8">
          {weekClasses.map((day) => (
            <div key={day.day}>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Calendar className="w-6 h-6 mr-2 text-fuchsia-400" />
                {day.day}
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {day.classes.map((classItem, index) => (
                  <Card key={index} className="p-4 bg-gray-800 border-gray-700">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="flex items-center text-fuchsia-400 font-bold mb-1">
                          <Clock className="w-4 h-4 mr-1" />
                          {classItem.time}
                        </div>
                        <h4 className="font-bold text-white">{classItem.name}</h4>
                        <p className="text-sm text-gray-400">with {classItem.instructor}</p>
                      </div>
                      <Badge 
                        variant="outline"
                        className="border-gray-600 text-gray-300 text-xs"
                      >
                        {classItem.level}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center text-sm text-gray-400">
                        <Users className="w-4 h-4 mr-1" />
                        {classItem.spots} spots left
                      </div>
                    </div>
                    
                    <Button 
                      size="sm" 
                      className="w-full bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700"
                    >
                      Book Class
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="neon-button text-black font-bold text-lg px-8 py-3">
            View Full Schedule
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StudioClassList;
