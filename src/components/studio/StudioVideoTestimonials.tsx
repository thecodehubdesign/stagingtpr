import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, X, Star } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface Testimonial {
  id: number;
  name: string;
  quote: string;
  image: string;
  videoUrl?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Simone",
    quote: "Whether you're really fit or have no fitness, you can come in and start... it's really good for everyone and you can do it at your own pace",
    image: "/images/testimonials/simone.png",
    videoUrl: "/videos/reel-1.mp4"
  },
  {
    id: 2,
    name: "Courtney",
    quote: "My chiro told that I had core separation. I had no idea how to engage my core. So I started doing pole and within weeks, he was like it's improving massively",
    image: "/images/testimonials/courtney.png",
    videoUrl: "/videos/reel-3.mp4"
  },
  {
    id: 3,
    name: "Amber",
    quote: "Everyone's so supportive and willing to help you learn. It's a good way to get fit without doing the boring weight and running. It's a social way of getting fit",
    image: "/images/testimonials/amber.png",
    videoUrl: "/videos/reel-4.mp4"
  },
  {
    id: 4,
    name: "Alex",
    quote: "I'd never been a dancer, gymnast or done ballet. So I was worried it wouldn't be inclusive. But The Pole Room has been amazing, everyone's just so positive",
    image: "/images/testimonials/alex.png",
    videoUrl: "/videos/reel-5.mp4"
  },
  {
    id: 5,
    name: "Lauren",
    quote: "When I first started I hated my body and didn't want to show my legs or stomach. As the weeks go by, suddenly the shorts and tops get shorter... you feel amazing",
    image: "/images/testimonials/lauren.png",
    videoUrl: "/videos/reel-6.mp4"
  },
  {
    id: 6,
    name: "Sarah",
    quote: "I used to spend so much time focusing on how the rest of the world saw me, coming here took that away, I'm so happy with myself and my body",
    image: "/images/testimonials/sarah.png",
    videoUrl: "/videos/reel-1.mp4"
  }
];

const logos = [
  { name: "Shark Tank", src: "/images/logos/shark-tank.png" },
  { name: "Herald Sun", src: "/images/logos/herald-sun.png" },
  { name: "Leader", src: "/images/logos/herald-sun.png" },
  { name: "BIG", src: "/images/logos/shark-tank.png" },
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
    <section className="py-16 bg-gradient-to-b from-pink-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-10 uppercase tracking-wide"
        >
          11+ Years of Proving Fitness can Be Fun
        </motion.h2>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all hover:scale-110"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all hover:scale-110"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
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
                <div className="relative rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow">
                  {/* Image with Play Button Overlay */}
                  <div className="relative aspect-[3/4]">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                      <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                        <Play className="w-6 h-6 text-gray-800 ml-1" fill="currentColor" />
                      </div>
                    </div>
                    
                    {/* Bottom Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 pt-12">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-white text-lg">{testimonial.name}</h3>
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-white/90 text-sm leading-relaxed line-clamp-4">
                        "{testimonial.quote}"
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* As Seen On Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-6">As Seen In:</p>
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
                className="h-6 md:h-8 w-auto grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={!!selectedTestimonial} onOpenChange={() => setSelectedTestimonial(null)}>
        <DialogContent className="max-w-3xl p-0 bg-black border-none overflow-hidden">
          <button
            onClick={() => setSelectedTestimonial(null)}
            className="absolute top-4 right-4 z-50 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
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
