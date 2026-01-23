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
  { name: "Leader", src: "/images/logos/leader.png" },
  { name: "BIG Review TV", src: "/images/logos/big-review-tv.png" },
  { name: "Australian Pole Dancers Magazine", src: "/images/logos/pole-dancers-magazine.png" },
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
    <section className="py-20 bg-gray-800/50 cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
            Proving Fitness Can be Fun since 2014
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hear from our students how Pole has changed the way they move and their experience at The Pole Room
          </p>
        </motion.div>

        {/* Testimonials Carousel - Single Row */}
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

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-none scroll-smooth px-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {displayTestimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="flex-shrink-0 w-[200px] sm:w-[220px] md:w-[240px] cursor-pointer group"
                onClick={() => setSelectedTestimonial(testimonial)}
              >
                <div className="aspect-[3/4] rounded-xl overflow-hidden relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-fuchsia-500/80 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-fuchsia-500/30">
                      <Play className="w-5 h-5 text-white ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-fuchsia-500/50 rounded-xl transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* As Seen On Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-sm uppercase tracking-widest mb-6">As Seen In:</p>
          <div className="flex items-center justify-center gap-6 md:gap-10 flex-wrap">
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
        </motion.div>
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
