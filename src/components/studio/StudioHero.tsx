import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Star, Play, Instagram, ChevronLeft, ChevronRight, Circle, Disc, LayoutGrid } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Studio } from '@/data/studios';

interface StudioHeroProps {
  studio: Studio;
}

// Helper to get appropriate icon for studio spec
const getSpecIcon = (spec: string) => {
  const specLower = spec.toLowerCase();
  if (specLower.includes('pole')) return Circle;
  if (specLower.includes('hammock')) return Disc;
  if (specLower.includes('hoop')) return Circle;
  if (specLower.includes('silk')) return Disc;
  if (specLower.includes('rig') || specLower.includes('truss')) return LayoutGrid;
  return Circle;
};

const StudioHero = ({ studio }: StudioHeroProps) => {
  const allMedia = [
    { type: 'video' as const, src: 'https://player.vimeo.com/video/286796328?autoplay=0&loop=1', label: 'Take A Tour Of Our Studio' },
    { type: 'image' as const, src: '/lovable-uploads/5b3dd8e8-6bc4-4f4a-af01-655d55902167.png', label: 'Beginner Friendly Classes' },
    { type: 'image' as const, src: '/lovable-uploads/9f395d23-917c-4f57-aee6-3730701698b1.png', label: 'Make Amazing Friends' },
    { type: 'image' as const, src: '/lovable-uploads/29e3bddc-c99a-43e5-87df-ab4c0905e1a0.png', label: 'Award Winning Instructors' },
    { type: 'image' as const, src: '/lovable-uploads/14503a9b-f9c7-41ee-a0b5-131b4a9a6989.png', label: 'Part of the Local Community' },
    { type: 'image' as const, src: '/lovable-uploads/8be1e610-6a66-4ace-b02d-1945fd276001.png', label: 'State of the Art Equipment' },
    { type: 'image' as const, src: '/lovable-uploads/62c85b2c-a16e-4a03-ab52-224dae2b446b.png', label: 'All Skill Levels Welcome' },
    { type: 'image' as const, src: '/lovable-uploads/a3f3abdb-e872-4fb0-a921-052f1d92afec.png', label: 'Supportive Environment' },
    { type: 'image' as const, src: '/lovable-uploads/32863f0f-165a-4abf-b73e-3eea2045dce5.png', label: 'Fun Fitness Classes' },
    { type: 'image' as const, src: '/lovable-uploads/e72918ef-7386-4492-8d6e-6cf1cbeb62e4.png', label: 'Build Your Confidence' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentMedia = allMedia[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? allMedia.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === allMedia.length - 1 ? 0 : prev + 1));
  };

  // Thumbnail carousel navigation
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  const scrollThumbnails = (direction: 'left' | 'right') => {
    if (thumbnailsRef.current) {
      const scrollAmount = 200;
      thumbnailsRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };


  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-purple-900/80 to-gray-900 cyber-grid overflow-hidden">
      {/* Floating orbs - hidden on mobile for performance */}
      <div className="hidden sm:block absolute top-20 left-10 w-64 h-64 bg-fuchsia-500/20 rounded-full blur-3xl animate-float" />
      <div className="hidden sm:block absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="hidden sm:block absolute top-1/2 left-1/3 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-4">
        {/* Stack vertically on mobile, side-by-side on lg+ */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Content - Text/CTA Section - Always first */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 sm:space-y-6 order-1"
          >
            {/* Review Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-4 inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-fuchsia-500/30"
            >
              {/* Google Logo */}
              <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white text-xs sm:text-sm font-medium">
                {studio.rating || 4.9} from {studio.reviewCount || 127} reviews
              </span>
            </motion.div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              The Pole Room{' '}
              <span className="gradient-text">{studio.name.replace('The Pole Room ', '')}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-300 max-w-lg">
              Build confidence, strength, and community in {studio.name.replace('The Pole Room ', '')}'s premier pole fitness studio
            </p>

            {/* Info Card */}
            <div className="cyber-card p-4 sm:p-6 space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-fuchsia-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium text-sm sm:text-base">{studio.address}</p>
                  {studio.nearbyLandmark && (
                    <p className="text-gray-400 text-xs sm:text-sm mt-1">{studio.nearbyLandmark}</p>
                  )}
                </div>
              </div>
              
              {studio.studioSpecs && (
                <div className="pt-3 sm:pt-4 border-t border-white/10">
                  <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                    {studio.studioSpecs.split('•').map((spec, index) => {
                      const specTrimmed = spec.trim();
                      const IconComponent = getSpecIcon(specTrimmed);
                      return (
                        <div key={index} className="flex items-center gap-2">
                          <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 flex-shrink-0" />
                          <span className="text-gray-300 text-xs sm:text-sm">{specTrimmed}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* CTAs - Stack on mobile */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button className="neon-button px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg w-full sm:w-auto">
                I'm a New Student
              </Button>
              <Button 
                variant="outline" 
                className="px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg border-fuchsia-500/50 text-white hover:bg-fuchsia-500/20 w-full sm:w-auto"
              >
                See Timetable
              </Button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 sm:gap-4 pt-2 sm:pt-4 pb-4 sm:pb-8">
              {studio.instagram && (
                <a 
                  href={studio.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 sm:p-3 rounded-full bg-white/10 border border-fuchsia-500/30 hover:bg-fuchsia-500/20 transition-colors"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-fuchsia-400" />
                </a>
              )}
              {studio.facebook && (
                <a 
                  href={studio.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 sm:p-3 rounded-full bg-white/10 border border-fuchsia-500/30 hover:bg-fuchsia-500/20 transition-colors"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-fuchsia-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              )}
            </div>
          </motion.div>

          {/* Media Section - Always second */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full order-2 lg:mt-16 space-y-3"
          >
            {/* Main Display Area with Arrows */}
            <div className="relative">
              {/* Left Arrow */}
              <button
                onClick={goToPrevious}
                className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 sm:-translate-x-1/2 z-10 
                           w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 backdrop-blur-sm 
                           border border-white/20 hover:bg-fuchsia-500/30 
                           flex items-center justify-center transition-all hover:scale-110"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>

              {/* Right Arrow */}
              <button
                onClick={goToNext}
                className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 sm:translate-x-1/2 z-10 
                           w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 backdrop-blur-sm 
                           border border-white/20 hover:bg-fuchsia-500/30 
                           flex items-center justify-center transition-all hover:scale-110"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>

              {/* Media Container */}
              <div className="relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden cyber-border bg-gray-800">
                {currentMedia.type === 'video' ? (
                  <iframe
                    src={currentMedia.src}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="Studio Tour Video"
                  />
                ) : (
                  <img 
                    src={currentMedia.src} 
                    alt={currentMedia.label}
                    className="w-full h-full object-cover"
                  />
                )}
                
                {/* Caption Overlay - Pill Badge Style */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentMedia.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2"
                  >
                    <span className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-gray-800/70 backdrop-blur-sm border border-white/20 text-white text-xs sm:text-sm font-medium whitespace-nowrap shadow-lg">
                      {currentMedia.label}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Thumbnail Strip - Horizontal Carousel */}
            <div className="relative">
              {/* Left Thumbnail Arrow */}
              <button
                onClick={() => scrollThumbnails('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10
                           w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm
                           border border-white/20 hover:bg-fuchsia-500/30
                           flex items-center justify-center transition-all"
                aria-label="Scroll thumbnails left"
              >
                <ChevronLeft className="w-4 h-4 text-white" />
              </button>

              {/* Right Thumbnail Arrow */}
              <button
                onClick={() => scrollThumbnails('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10
                           w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm
                           border border-white/20 hover:bg-fuchsia-500/30
                           flex items-center justify-center transition-all"
                aria-label="Scroll thumbnails right"
              >
                <ChevronRight className="w-4 h-4 text-white" />
              </button>

              {/* Thumbnail Container */}
              <div 
                ref={thumbnailsRef}
                className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth px-6"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {allMedia.map((media, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`relative flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-lg overflow-hidden border-2 transition-all ${
                      currentIndex === index
                        ? 'border-fuchsia-500 ring-2 ring-fuchsia-500/50'
                        : 'border-gray-600 hover:border-fuchsia-400'
                    }`}
                  >
                    {media.type === 'video' ? (
                      <>
                        <img 
                          src="/lovable-uploads/5b3dd8e8-6bc4-4f4a-af01-655d55902167.png"
                          alt="Video thumbnail"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-white" />
                        </div>
                      </>
                    ) : (
                      <img 
                        src={media.src} 
                        alt={media.label}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StudioHero;
