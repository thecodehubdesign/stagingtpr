import { useState, useMemo } from 'react';
import { format, addDays, startOfWeek, isSameDay, isToday } from 'date-fns';
import { ChevronLeft, ChevronRight, Clock, User, MapPin, Users, ChevronDown, ChevronUp, Calendar, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';
import { instructors, Instructor } from '@/data/instructors';

interface ClassSession {
  id: string;
  name: string;
  instructor: string;
  time: string;
  duration: string;
  location: string;
  spotsLeft: number;
  totalSpots: number;
  level: 'beginner' | 'intermediate' | 'advanced' | 'all-levels';
  category: 'pole' | 'aerial' | 'flexibility' | 'dance' | 'conditioning';
  description: string;
  isBeginner: boolean;
}

interface CustomTimetableProps {
  studioName: string;
  activeFilter: 'full' | 'beginner';
}

// Mock class data - in production this would come from an API
const generateMockClasses = (date: Date, studioName: string): ClassSession[] => {
  const dayOfWeek = date.getDay();
  
  const allClasses: ClassSession[] = [
    {
      id: '1',
      name: 'Pole Beginners',
      instructor: 'Sarah',
      time: '09:00',
      duration: '60 min',
      location: studioName,
      spotsLeft: 4,
      totalSpots: 8,
      level: 'beginner',
      category: 'pole',
      description: 'Perfect for those new to pole! Learn basic spins, climbs, and floor work in a supportive environment. No experience necessary.',
      isBeginner: true,
    },
    {
      id: '2',
      name: 'Pole Flow',
      instructor: 'Bianca',
      time: '10:00',
      duration: '60 min',
      location: studioName,
      spotsLeft: 2,
      totalSpots: 8,
      level: 'intermediate',
      category: 'pole',
      description: 'Connect your tricks with fluid transitions. Focus on musicality and creating seamless combos. Prerequisites: confident inverts.',
      isBeginner: false,
    },
    {
      id: '3',
      name: 'Flexibility Foundations',
      instructor: 'Alison',
      time: '11:00',
      duration: '60 min',
      location: studioName,
      spotsLeft: 6,
      totalSpots: 12,
      level: 'all-levels',
      category: 'flexibility',
      description: 'Improve your splits, backbends, and overall flexibility. Safe progressions for all levels with hands-on guidance.',
      isBeginner: true,
    },
    {
      id: '4',
      name: 'Aerial Hoop Beginners',
      instructor: 'Courtney',
      time: '12:00',
      duration: '60 min',
      location: studioName,
      spotsLeft: 3,
      totalSpots: 6,
      level: 'beginner',
      category: 'aerial',
      description: 'Introduction to lyra/aerial hoop. Learn mounts, basic poses, and transitions in this beautiful aerial apparatus.',
      isBeginner: true,
    },
    {
      id: '5',
      name: 'Pole Tricks',
      instructor: 'Derryn',
      time: '14:00',
      duration: '60 min',
      location: studioName,
      spotsLeft: 5,
      totalSpots: 8,
      level: 'advanced',
      category: 'pole',
      description: 'Master advanced tricks including deadlifts, iron-x progressions, and complex inversions. Strong intermediate skills required.',
      isBeginner: false,
    },
    {
      id: '6',
      name: 'Dance & Floorwork',
      instructor: 'Gillian',
      time: '16:00',
      duration: '60 min',
      location: studioName,
      spotsLeft: 7,
      totalSpots: 10,
      level: 'all-levels',
      category: 'dance',
      description: 'Express yourself through sensual floorwork and dance. Build confidence while learning choreography basics.',
      isBeginner: true,
    },
    {
      id: '7',
      name: 'Conditioning & Strength',
      instructor: 'KP',
      time: '17:00',
      duration: '60 min',
      location: studioName,
      spotsLeft: 8,
      totalSpots: 15,
      level: 'all-levels',
      category: 'conditioning',
      description: 'Build pole-specific strength! Target arms, core, and grip with exercises designed to improve your pole practice.',
      isBeginner: true,
    },
    {
      id: '8',
      name: 'Pole Intermediate',
      instructor: 'Sarah',
      time: '18:00',
      duration: '60 min',
      location: studioName,
      spotsLeft: 1,
      totalSpots: 8,
      level: 'intermediate',
      category: 'pole',
      description: 'Progress your pole journey with inverts, leg hangs, and more complex spins. Confident beginners welcome.',
      isBeginner: false,
    },
    {
      id: '9',
      name: 'Exotic Pole',
      instructor: 'Bianca',
      time: '19:00',
      duration: '60 min',
      location: studioName,
      spotsLeft: 4,
      totalSpots: 8,
      level: 'intermediate',
      category: 'dance',
      description: 'Embrace your sensuality with exotic pole dance. Heels encouraged but not required. Learn fluid movements and transitions.',
      isBeginner: false,
    },
  ];

  // Vary classes by day
  const dayVariations: Record<number, number[]> = {
    0: [0, 2, 5], // Sunday - lighter schedule
    1: [0, 1, 2, 3, 5, 6, 7], // Monday
    2: [0, 2, 3, 4, 5, 7, 8], // Tuesday
    3: [0, 1, 2, 5, 6, 7], // Wednesday
    4: [0, 2, 3, 4, 5, 6, 7, 8], // Thursday
    5: [0, 1, 2, 4, 5, 7], // Friday
    6: [0, 2, 3, 5, 6], // Saturday
  };

  const indices = dayVariations[dayOfWeek] || [0, 1, 2];
  return indices.map((idx, i) => ({
    ...allClasses[idx],
    id: `${date.toISOString()}-${i}`,
    spotsLeft: Math.floor(Math.random() * allClasses[idx].totalSpots) + 1,
  }));
};

const getLevelSuffix = (level: ClassSession['level']) => {
  switch (level) {
    case 'beginner': return '(BEG+)';
    case 'intermediate': return '(INTER+)';
    case 'advanced': return '(ADV+)';
    default: return '(ALL)';
  }
};

const CustomTimetable = ({ studioName, activeFilter }: CustomTimetableProps) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [weekStart, setWeekStart] = useState(startOfWeek(new Date(), { weekStartsOn: 1 }));
  const [expandedClass, setExpandedClass] = useState<string | null>(null);
  const [showFullCalendar, setShowFullCalendar] = useState(false);
  const [selectedInstructor, setSelectedInstructor] = useState<Instructor | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedClassForBooking, setSelectedClassForBooking] = useState<ClassSession | null>(null);
  const [bookingStep, setBookingStep] = useState<'choice' | 'existing'>('choice');

  // Generate week days
  const weekDays = useMemo(() => {
    return Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));
  }, [weekStart]);

  // Get classes for selected date
  const classes = useMemo(() => {
    const allClasses = generateMockClasses(selectedDate, studioName);
    if (activeFilter === 'beginner') {
      return allClasses.filter(c => c.isBeginner);
    }
    return allClasses;
  }, [selectedDate, activeFilter, studioName]);

  const navigateWeek = (direction: 'prev' | 'next') => {
    setWeekStart(prev => addDays(prev, direction === 'next' ? 7 : -7));
  };

  const handleInstructorClick = (instructorName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const instructor = instructors.find(i => i.name === instructorName);
    if (instructor) {
      setSelectedInstructor(instructor);
    }
  };

  const handleBookNow = (classItem: ClassSession, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedClassForBooking(classItem);
    setBookingStep('choice');
    setBookingModalOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Date Navigation */}
      <div className="cyber-card rounded-xl p-4">
        <div className="flex items-center justify-between mb-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigateWeek('prev')}
            className="text-muted-foreground hover:text-foreground hover:bg-primary/10"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <button
            onClick={() => setShowFullCalendar(!showFullCalendar)}
            className="flex items-center gap-2 text-lg font-semibold text-foreground hover:text-primary transition-colors"
          >
            <Calendar className="w-5 h-5 text-primary" />
            {format(weekStart, 'MMMM yyyy')}
            {showFullCalendar ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigateWeek('next')}
            className="text-muted-foreground hover:text-foreground hover:bg-primary/10"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Week View */}
        <div className="grid grid-cols-7 gap-2">
          {weekDays.map((day) => {
            const isSelected = isSameDay(day, selectedDate);
            const today = isToday(day);
            
            return (
              <button
                key={day.toISOString()}
                onClick={() => setSelectedDate(day)}
                className={cn(
                  "relative p-3 rounded-xl text-center transition-all duration-300",
                  isSelected
                    ? "neon-button text-primary-foreground"
                    : "hover:bg-primary/10 text-muted-foreground hover:text-foreground",
                  today && !isSelected && "ring-1 ring-primary/50"
                )}
              >
                <span className="block text-xs uppercase tracking-wide mb-1 opacity-70">
                  {format(day, 'EEE')}
                </span>
                <span className={cn(
                  "block text-xl font-bold",
                  isSelected && "text-primary-foreground"
                )}>
                  {format(day, 'd')}
                </span>
                {today && !isSelected && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-[hsl(160,84%,60%)] rounded-full animate-pulse" />
                )}
              </button>
            );
          })}
        </div>

        {/* Full Calendar (expandable) */}
        <AnimatePresence>
          {showFullCalendar && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mt-4 pt-4 border-t border-border"
            >
              <div className="text-center text-sm text-muted-foreground">
                Full calendar view - Click any date above to view classes
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Classes List */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-lg font-semibold text-foreground">
            {format(selectedDate, 'EEEE, MMMM d')}
          </h3>
          <span className="text-sm text-muted-foreground">
            {classes.length} {classes.length === 1 ? 'class' : 'classes'}
          </span>
        </div>

        <AnimatePresence mode="popLayout">
          {classes.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="cyber-card rounded-xl p-8 text-center"
            >
              <p className="text-muted-foreground">No classes scheduled for this day.</p>
            </motion.div>
          ) : (
            classes.map((classItem, index) => (
              <motion.div
                key={classItem.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.05 }}
                className={cn(
                  "cyber-card rounded-xl overflow-hidden transition-all duration-300",
                  expandedClass === classItem.id && "ring-1 ring-primary/50"
                )}
              >
                <button
                  onClick={() => setExpandedClass(expandedClass === classItem.id ? null : classItem.id)}
                  className="w-full p-4 text-left"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold text-foreground truncate">
                          {classItem.name} {getLevelSuffix(classItem.level)}
                        </h4>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4 text-primary" />
                          {classItem.time} ({classItem.duration})
                        </span>
                        <button
                          onClick={(e) => handleInstructorClick(classItem.instructor, e)}
                          className="flex items-center gap-1 hover:text-primary transition-colors"
                        >
                          <User className="w-4 h-4 text-primary" />
                          <span className="underline underline-offset-2">{classItem.instructor}</span>
                        </button>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-primary" />
                          {classItem.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center gap-1 text-sm">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span className={cn(
                          "font-medium",
                          classItem.spotsLeft <= 2 ? "text-destructive" : "text-[hsl(160,84%,60%)]"
                        )}>
                          {classItem.spotsLeft}
                        </span>
                        <span className="text-muted-foreground">/ {classItem.totalSpots}</span>
                      </div>
                      <ChevronDown className={cn(
                        "w-5 h-5 text-muted-foreground transition-transform",
                        expandedClass === classItem.id && "rotate-180"
                      )} />
                    </div>
                  </div>
                </button>

                {/* Expanded Description */}
                <AnimatePresence>
                  {expandedClass === classItem.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 pt-2 border-t border-border/50">
                        <p className="text-sm text-muted-foreground mb-4">
                          {classItem.description}
                        </p>
                        <div className="flex items-center gap-3">
                          <Button
                            className="neon-button rounded-full px-6"
                            disabled={classItem.spotsLeft === 0}
                            onClick={(e) => handleBookNow(classItem, e)}
                          >
                            {classItem.spotsLeft === 0 ? 'Class Full' : 'Book Now'}
                          </Button>
                          <Button
                            variant="outline"
                            className="rounded-full border-primary/30 hover:bg-primary/10"
                          >
                            Add to Waitlist
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>

      {/* Instructor Modal */}
      <Dialog open={!!selectedInstructor} onOpenChange={() => setSelectedInstructor(null)}>
        <DialogContent className="max-w-lg bg-gray-900 border border-fuchsia-500/50 p-8 rounded-2xl">
          {selectedInstructor && (
            <div className="text-center">
              {/* Circular Image */}
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-fuchsia-500/50">
                <img 
                  src={selectedInstructor.image} 
                  alt={selectedInstructor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Name & Experience */}
              <h3 className="text-2xl font-bold text-white mb-2">{selectedInstructor.name}</h3>
              <p className="text-fuchsia-400 mb-4">{selectedInstructor.experience} Experience</p>
              
              {/* Specialties Badges */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {selectedInstructor.specialties.map((specialty) => (
                  <Badge 
                    key={specialty}
                    className="bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/30"
                  >
                    {specialty}
                  </Badge>
                ))}
              </div>
              
              {/* Bio */}
              <p className="text-gray-300 leading-relaxed">{selectedInstructor.bio}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Booking Modal */}
      <Dialog open={bookingModalOpen} onOpenChange={(open) => {
        setBookingModalOpen(open);
        if (!open) setBookingStep('choice');
      }}>
        <DialogContent className="max-w-md bg-gray-900 border border-fuchsia-500/50 p-8 rounded-2xl">
          {selectedClassForBooking && (
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-2">Book Your Class</h3>
              <p className="text-muted-foreground mb-6">
                {selectedClassForBooking.name} {getLevelSuffix(selectedClassForBooking.level)} at {selectedClassForBooking.time}
              </p>

              {bookingStep === 'choice' ? (
                <div className="flex flex-col gap-4">
                  <Button 
                    className="neon-button py-6 text-lg"
                    onClick={() => {
                      // Navigate to new student signup
                      window.location.href = '/get-started';
                    }}
                  >
                    New Student
                  </Button>
                  <Button 
                    variant="outline"
                    className="py-6 text-lg border-primary/30 hover:bg-primary/10"
                    onClick={() => setBookingStep('existing')}
                  >
                    Existing Student
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="cyber-card p-6 rounded-xl">
                    <Smartphone className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-white mb-2">Download the TPR App</h4>
                    <p className="text-muted-foreground text-sm mb-6">
                      Book classes, manage your account, and track your progress all in one place.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-3">
                      <a 
                        href="https://apps.apple.com/app/the-pole-room" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-black text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                        </svg>
                        App Store
                      </a>
                      <a 
                        href="https://play.google.com/store/apps/details?id=com.thepoleroom" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-black text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                        </svg>
                        Google Play
                      </a>
                    </div>
                  </div>
                  <Button 
                    variant="ghost"
                    className="text-muted-foreground hover:text-foreground"
                    onClick={() => setBookingStep('choice')}
                  >
                    ← Back
                  </Button>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CustomTimetable;
