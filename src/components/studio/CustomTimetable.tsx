import { useState, useMemo } from 'react';
import { format, addDays, startOfWeek, isSameDay, isToday } from 'date-fns';
import { ChevronLeft, ChevronRight, Clock, User, MapPin, Users, ChevronDown, ChevronUp, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface ClassSession {
  id: string;
  name: string;
  instructor: string;
  time: string;
  duration: string;
  room: string;
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
const generateMockClasses = (date: Date): ClassSession[] => {
  const dayOfWeek = date.getDay();
  
  const allClasses: ClassSession[] = [
    {
      id: '1',
      name: 'Pole Beginners',
      instructor: 'Sarah M.',
      time: '09:00',
      duration: '60 min',
      room: 'Studio A',
      spotsLeft: 4,
      totalSpots: 8,
      level: 'beginner',
      category: 'pole',
      description: 'Perfect for those new to pole! Learn basic spins, climbs, and floor work in a supportive environment. No experience necessary.',
      isBeginner: true,
    },
    {
      id: '2',
      name: 'Pole Flow Intermediate',
      instructor: 'Bianca K.',
      time: '10:30',
      duration: '75 min',
      room: 'Studio A',
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
      instructor: 'Alison R.',
      time: '11:45',
      duration: '60 min',
      room: 'Studio B',
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
      instructor: 'Courtney L.',
      time: '13:00',
      duration: '60 min',
      room: 'Studio B',
      spotsLeft: 3,
      totalSpots: 6,
      level: 'beginner',
      category: 'aerial',
      description: 'Introduction to lyra/aerial hoop. Learn mounts, basic poses, and transitions in this beautiful aerial apparatus.',
      isBeginner: true,
    },
    {
      id: '5',
      name: 'Pole Tricks Advanced',
      instructor: 'Derryn P.',
      time: '14:30',
      duration: '90 min',
      room: 'Studio A',
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
      instructor: 'Gillian T.',
      time: '16:00',
      duration: '60 min',
      room: 'Studio A',
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
      time: '17:30',
      duration: '45 min',
      room: 'Studio B',
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
      instructor: 'Sarah M.',
      time: '19:00',
      duration: '75 min',
      room: 'Studio A',
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
      instructor: 'Bianca K.',
      time: '20:30',
      duration: '60 min',
      room: 'Studio A',
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

const CustomTimetable = ({ studioName, activeFilter }: CustomTimetableProps) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [weekStart, setWeekStart] = useState(startOfWeek(new Date(), { weekStartsOn: 1 }));
  const [expandedClass, setExpandedClass] = useState<string | null>(null);
  const [showFullCalendar, setShowFullCalendar] = useState(false);

  // Generate week days
  const weekDays = useMemo(() => {
    return Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));
  }, [weekStart]);

  // Get classes for selected date
  const classes = useMemo(() => {
    const allClasses = generateMockClasses(selectedDate);
    if (activeFilter === 'beginner') {
      return allClasses.filter(c => c.isBeginner);
    }
    return allClasses;
  }, [selectedDate, activeFilter]);

  const navigateWeek = (direction: 'prev' | 'next') => {
    setWeekStart(prev => addDays(prev, direction === 'next' ? 7 : -7));
  };

  const getLevelColor = (level: ClassSession['level']) => {
    switch (level) {
      case 'beginner':
        return 'bg-[hsl(160,84%,39%)]/20 text-[hsl(160,84%,60%)] border-[hsl(160,84%,39%)]/30';
      case 'intermediate':
        return 'bg-[hsl(38,92%,50%)]/20 text-[hsl(38,92%,60%)] border-[hsl(38,92%,50%)]/30';
      case 'advanced':
        return 'bg-destructive/20 text-destructive border-destructive/30';
      default:
        return 'bg-primary/20 text-primary border-primary/30';
    }
  };

  const getCategoryIcon = (category: ClassSession['category']) => {
    switch (category) {
      case 'pole':
        return '💃';
      case 'aerial':
        return '🎪';
      case 'flexibility':
        return '🧘';
      case 'dance':
        return '✨';
      case 'conditioning':
        return '💪';
    }
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
                        <span className="text-xl">{getCategoryIcon(classItem.category)}</span>
                        <h4 className="font-semibold text-foreground truncate">
                          {classItem.name}
                        </h4>
                        <span className={cn(
                          "px-2 py-0.5 text-xs rounded-full border",
                          getLevelColor(classItem.level)
                        )}>
                          {classItem.level.replace('-', ' ')}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4 text-primary" />
                          {classItem.time} ({classItem.duration})
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4 text-primary" />
                          {classItem.instructor}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-primary" />
                          {classItem.room}
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
    </div>
  );
};

export default CustomTimetable;
