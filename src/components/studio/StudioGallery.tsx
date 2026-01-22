import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

interface StudioGalleryProps {
  studioId: string;
}

const StudioGallery = ({ studioId }: StudioGalleryProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 280;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const reviews = [
    {
      text: "Super beginner friendly! The instructors make you feel so welcome from day one.",
      author: "Sarah M."
    },
    {
      text: "My ultimate happy place. Best decision I ever made joining TPR!",
      author: "Jessica K."
    }
  ];

  const galleryVideos = [
    '/videos/reel-1.mp4',
    '/videos/reel-3.mp4',
    '/videos/reel-4.mp4',
    '/videos/reel-5.mp4',
    '/videos/reel-6.mp4',
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Review Quotes */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="cyber-card p-6 max-w-sm"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-fuchsia-400 text-fuchsia-400" />
                ))}
              </div>
              <p className="text-white italic mb-3">"{review.text}"</p>
              <p className="text-gray-400 text-sm">— {review.author}</p>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">It's Everything You Wish</span>
            <br />
            <span className="text-white">The Gym Was And More</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Step into a space where fitness meets artistry. Our studio is designed to inspire, 
            challenge, and support you every step of your pole and aerial journey.
          </p>
          
          {/* Instagram Handle */}
          <div className="flex items-center justify-center gap-2 text-sm">
            <span className="text-fuchsia-400 font-medium">@thepoleroom</span>
            <CheckCircle className="w-4 h-4 text-cyan-400" />
            <span className="text-gray-400">14.7K Followers</span>
          </div>
        </motion.div>

        {/* Video Carousel - Facebook Reel Style */}
        <div className="relative">
          {/* Left Arrow */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-gray-800/80 border border-fuchsia-500/30 flex items-center justify-center hover:bg-fuchsia-500/20 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          
          {/* Scrollable Video Container */}
          <div 
            ref={scrollRef}
            className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-none [&::-webkit-scrollbar]:hidden px-12 py-4"
            style={{ scrollbarWidth: 'none' }}
          >
            {galleryVideos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px] aspect-[9/16] rounded-xl overflow-hidden shadow-lg shadow-fuchsia-500/10"
              >
                <video
                  src={video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
          
          {/* Right Arrow */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-gray-800/80 border border-fuchsia-500/30 flex items-center justify-center hover:bg-fuchsia-500/20 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default StudioGallery;
