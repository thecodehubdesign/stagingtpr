import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { studios } from '@/data/studios';

interface StudioOtherLocationsProps {
  currentStudioId: string;
}

const StudioOtherLocations = ({ currentStudioId }: StudioOtherLocationsProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Filter out current studio
  const otherStudios = studios.filter(s => s.id !== currentStudioId);
  
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-fuchsia-400 font-medium mb-2 uppercase tracking-wider">Explore More</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            View Other <span className="gradient-text">Studios</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our other locations across Melbourne. Each studio offers the same great classes with its own unique community.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-gray-800/80 border border-gray-700 flex items-center justify-center text-white hover:bg-fuchsia-500/20 hover:border-fuchsia-500/50 transition-all hidden lg:flex"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-none px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {otherStudios.map((studio, index) => (
              <motion.div
                key={studio.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/studios/${studio.id}`}>
                  <div className="cyber-card p-6 hover:border-fuchsia-500/60 transition-all cursor-pointer min-w-[300px] group">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-fuchsia-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-fuchsia-500/30 transition-colors">
                        <MapPin className="w-6 h-6 text-fuchsia-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-fuchsia-400 transition-colors">
                          {studio.name.replace('The Pole Room ', '')}
                        </h3>
                        <p className="text-gray-400 text-sm line-clamp-2">{studio.address}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-fuchsia-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                      View Studio <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-gray-800/80 border border-gray-700 flex items-center justify-center text-white hover:bg-fuchsia-500/20 hover:border-fuchsia-500/50 transition-all hidden lg:flex"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default StudioOtherLocations;
