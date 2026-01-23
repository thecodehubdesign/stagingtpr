import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';
import { Studio } from '@/data/studios';
import { cn } from '@/lib/utils';

interface Instructor {
  id: number;
  name: string;
  specialty: string;
  specialties: string[];
  experience: string;
  bio: string;
  image: string;
  video?: string;
}

const instructors: Instructor[] = [
  {
    id: 1,
    name: "Derryn",
    specialty: "Pole & Flexibility",
    specialties: ["Pole", "Flexibility", "Dance"],
    experience: "8+ years",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Derryn brings passion and energy to every class, focusing on building strength and confidence in her students. Her teaching style emphasizes proper technique while making every session fun and engaging.",
    image: "/images/instructors/derryn.png",
    video: "/videos/instructors/derryn.mp4"
  },
  {
    id: 2,
    name: "Bianca",
    specialty: "Aerial Silks & Hoop",
    specialties: ["Aerial Silks", "Aerial Hoop", "Contortion"],
    experience: "6+ years",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bianca specializes in aerial arts and brings a graceful, creative approach to her classes. She loves helping students discover new movements and push their boundaries safely.",
    image: "/images/instructors/bianca.png",
    video: "/videos/instructors/bianca.mp4"
  },
  {
    id: 3,
    name: "Alison",
    specialty: "Pole & Strength",
    specialties: ["Pole", "Strength Training", "Tricks"],
    experience: "10+ years",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Alison is dedicated to helping her students build incredible strength and master advanced pole tricks. Her systematic approach ensures safe progression for all levels.",
    image: "/images/instructors/alison.png",
    video: "/videos/instructors/alison.mp4"
  },
  {
    id: 4,
    name: "KP",
    specialty: "Flow & Choreography",
    specialties: ["Flow", "Choreography", "Dance"],
    experience: "5+ years",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. KP brings creativity and musicality to every class, specializing in fluid transitions and expressive choreography that helps students find their unique style.",
    image: "/images/instructors/kp.png"
  },
  {
    id: 5,
    name: "Gillian",
    specialty: "Exotic & Heels",
    specialties: ["Exotic", "Heels", "Floor Work"],
    experience: "7+ years",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gillian empowers her students through sensual movement and confident expression. Her classes are designed to build body confidence and embrace femininity.",
    image: "/images/instructors/gillian.png"
  },
  {
    id: 6,
    name: "Courtney",
    specialty: "Pole & Aerials",
    specialties: ["Pole", "Aerial Hoop", "Flexibility"],
    experience: "4+ years",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Courtney brings enthusiasm and a nurturing approach to her teaching, making every student feel welcome and supported on their fitness journey.",
    image: "/images/instructors/courtney.png"
  }
];

interface InstructorCardProps {
  instructor: Instructor;
  index: number;
  onClick: () => void;
}

const InstructorCard = ({ instructor, index, onClick }: InstructorCardProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && instructor.video) {
      videoRef.current.playbackRate = 2.0;
      if (isHovering) {
        videoRef.current.play().catch(() => {
          // Autoplay may be blocked, that's okay
        });
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovering, instructor.video]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex-shrink-0 w-[280px] cursor-pointer group"
      onClick={onClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="aspect-video rounded-xl overflow-hidden relative">
        {/* Static Image */}
        <img 
          src={instructor.image} 
          alt={instructor.name}
          className={cn(
            "w-full h-full object-cover transition-all duration-500",
            isHovering && instructor.video ? "opacity-0 scale-110" : "opacity-100 group-hover:scale-110"
          )}
        />
        
        {/* Video overlay (shown on hover) */}
        {instructor.video && (
          <video
            ref={videoRef}
            src={instructor.video}
            muted
            loop
            playsInline
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-300",
              isHovering ? "opacity-100" : "opacity-0"
            )}
          />
        )}
        
        {/* Bottom gradient overlay with text */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 z-10">
          <h3 className="text-white font-bold text-lg">{instructor.name}</h3>
          <p className="text-fuchsia-400 text-sm">{instructor.specialty}</p>
        </div>
        
        {/* Hover border */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-fuchsia-500/50 rounded-xl transition-colors z-10" />
      </div>
    </motion.div>
  );
};

interface StudioInstructorsProps {
  studio: Studio;
}

const StudioInstructors = ({ studio }: StudioInstructorsProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedInstructor, setSelectedInstructor] = useState<Instructor | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const locationName = studio.name.replace('The Pole Room ', '');

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-fuchsia-400 text-sm uppercase tracking-widest mb-3">Our Team</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-white">Meet Your </span>
            <span className="gradient-text">{locationName} Instructors</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            We have a number of talented instructors working from our {locationName} location, 
            all of whom are highly trained with a variety of skill sets. Our instructors will 
            cater to your experience and skill level as they guide you through the program.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Left Arrow */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/90 hover:bg-fuchsia-500/30 border border-fuchsia-500/50 rounded-full p-3 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Scrollable Container */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth px-12 py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {instructors.map((instructor, index) => (
              <InstructorCard
                key={instructor.id}
                instructor={instructor}
                index={index}
                onClick={() => setSelectedInstructor(instructor)}
              />
            ))}
          </div>

          {/* Right Arrow */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/90 hover:bg-fuchsia-500/30 border border-fuchsia-500/50 rounded-full p-3 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <Link 
            to="/instructors" 
            className="text-fuchsia-400 hover:text-fuchsia-300 font-medium inline-flex items-center gap-2 group"
          >
            View All Instructors
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Instructor Detail Modal */}
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
    </section>
  );
};

export default StudioInstructors;
