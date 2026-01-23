import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface Testimonial {
  id: number;
  name: string;
  image: string;
  videoUrl?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Simone",
    image: "/images/testimonials/simone.png",
    videoUrl: "/videos/reel-1.mp4"
  },
  {
    id: 2,
    name: "Courtney",
    image: "/images/testimonials/courtney.png",
    videoUrl: "/videos/reel-3.mp4"
  },
  {
    id: 3,
    name: "Amber",
    image: "/images/testimonials/amber.png",
    videoUrl: "/videos/reel-4.mp4"
  },
  {
    id: 4,
    name: "Alex",
    image: "/images/testimonials/alex.png",
    videoUrl: "/videos/reel-5.mp4"
  },
  {
    id: 5,
    name: "Lauren",
    image: "/images/testimonials/lauren.png",
    videoUrl: "/videos/reel-6.mp4"
  },
  {
    id: 6,
    name: "Sarah",
    image: "/images/testimonials/sarah.png",
    videoUrl: "/videos/reel-1.mp4"
  }
];

const logos = [
  { name: "Shark Tank", src: "/images/logos/shark-tank.png" },
  { name: "Herald Sun", src: "/images/logos/herald-sun.png" },
];

const StudioVideoTestimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

  // Duplicate testimonials to create the effect of many
  const displayTestimonials = [...testimonials, ...testimonials, ...testimonials];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white mb-10 uppercase tracking-wide"
        >
          11 Years of Proving Fitness can Be <span className="gradient-text">Fun!</span>
        </motion.h2>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/90 hover:bg-fuchsia-500/30 border border-fuchsia-500/50 shadow-lg shadow-fuchsia-500/20 rounded-full p-3 transition-all hover:scale-110"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/90 hover:bg-fuchsia-500/30 border border-fuchsia-500/50 shadow-lg shadow-fuchsia-500/20 rounded-full p-3 transition-all hover:scale-110"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Testimonials Scroll Container */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-none px-12 pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {displayTestimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex-shrink-0 w-[280px] cursor-pointer group"
                onClick={() => setSelectedTestimonial(testimonial)}
              >
                {/* Card */}
                <div className="relative rounded-2xl overflow-hidden cyber-card group-hover:border-cyan-400/50 transition-all">
                  {/* Image with Play Button Overlay */}
                  <div className="relative aspect-[3/4]">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                      <div className="w-14 h-14 rounded-full bg-fuchsia-500/80 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-fuchsia-500/30">
                        <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* As Seen On Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm uppercase tracking-widest mb-6">As Seen In:</p>
          <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
            {logos.map((logo, index) => (
              <motion.img
                key={index}
                src={logo.src}
                alt={logo.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-8 md:h-10 w-auto brightness-0 invert opacity-40 hover:opacity-100 transition-all"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={!!selectedTestimonial} onOpenChange={() => setSelectedTestimonial(null)}>
        <DialogContent className="max-w-3xl p-0 bg-gray-900 border border-fuchsia-500/50 overflow-hidden rounded-2xl">
          {selectedTestimonial?.videoUrl && (
            <video
              src={selectedTestimonial.videoUrl}
              controls
              autoPlay
              className="w-full aspect-[9/16] max-h-[80vh] object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default StudioVideoTestimonials;
