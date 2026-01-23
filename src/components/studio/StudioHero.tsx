import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, Play, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Studio } from '@/data/studios';

interface StudioHeroProps {
  studio: Studio;
}

const StudioHero = ({ studio }: StudioHeroProps) => {
  const [selectedMedia, setSelectedMedia] = useState<{ type: 'video' | 'image'; src: string }>({
    type: 'video',
    src: 'https://player.vimeo.com/video/286796328?autoplay=1&loop=1&muted=1&background=1'
  });

  const studioImages = [
    { type: 'image' as const, src: studio.image, label: 'Studio' },
    { type: 'image' as const, src: '/lovable-uploads/5b3dd8e8-6bc4-4f4a-af01-655d55902167.png', label: 'Poles' },
    { type: 'image' as const, src: '/lovable-uploads/9f395d23-917c-4f57-aee6-3730701698b1.png', label: 'Aerial' },
    { type: 'image' as const, src: '/lovable-uploads/29e3bddc-c99a-43e5-87df-ab4c0905e1a0.png', label: 'Class' },
    { type: 'image' as const, src: '/lovable-uploads/14503a9b-f9c7-41ee-a0b5-131b4a9a6989.png', label: 'Community' },
  ];

  const benefits = [
    'New Student Offer',
    'Beginner Friendly Classes',
    'Award Winning Instructors',
    'Make Amazing Friends',
    'Part of the local community'
  ];

  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-gray-900 via-purple-900/80 to-gray-900 cyber-grid overflow-hidden">
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-fuchsia-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Review Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-fuchsia-500/30"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-fuchsia-400 text-fuchsia-400" />
                ))}
              </div>
              <span className="text-white text-sm font-medium">
                {studio.rating || 4.9} from {studio.reviewCount || 127} reviews
              </span>
            </motion.div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              The Pole Room{' '}
              <span className="gradient-text">{studio.name.replace('The Pole Room ', '')}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-gray-300 max-w-lg">
              Build confidence, strength, and community in {studio.name.replace('The Pole Room ', '')}'s premier pole fitness studio
            </p>

            {/* Info Card */}
            <div className="cyber-card p-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-fuchsia-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">{studio.address}</p>
                  {studio.nearbyLandmark && (
                    <p className="text-gray-400 text-sm mt-1">{studio.nearbyLandmark}</p>
                  )}
                </div>
              </div>
              
              {studio.studioSpecs && (
                <div className="pt-4 border-t border-white/10">
                  <p className="text-cyan-400 text-sm font-medium mb-2">Studio Specs</p>
                  <p className="text-gray-300 text-sm">{studio.studioSpecs}</p>
                </div>
              )}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button className="neon-button px-8 py-6 text-lg">
                I'm a New Student
              </Button>
              <Button 
                variant="outline" 
                className="px-8 py-6 text-lg border-fuchsia-500/50 text-white hover:bg-fuchsia-500/20"
              >
                See {studio.name.replace('The Pole Room ', '')}'s Timetable
              </Button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-4">
              {studio.instagram && (
                <a 
                  href={studio.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 border border-fuchsia-500/30 hover:bg-fuchsia-500/20 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-fuchsia-400" />
                </a>
              )}
              {studio.facebook && (
                <a 
                  href={studio.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 border border-fuchsia-500/30 hover:bg-fuchsia-500/20 transition-colors"
                >
                  <svg className="w-5 h-5 text-fuchsia-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              )}
            </div>
          </motion.div>

          {/* Right Content - Video/Image Display with Shopify Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative space-y-4"
          >
            {/* Main Display Area */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden cyber-border bg-gray-800">
              {selectedMedia.type === 'video' ? (
                <iframe
                  src={selectedMedia.src}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Studio Tour Video"
                />
              ) : (
                <img 
                  src={selectedMedia.src} 
                  alt={studio.name}
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Shopify-style Thumbnail Carousel */}
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
              {/* Video Thumbnail */}
              <button
                onClick={() => setSelectedMedia({ 
                  type: 'video', 
                  src: 'https://player.vimeo.com/video/286796328?autoplay=1&loop=1&muted=1&background=1' 
                })}
                className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                  selectedMedia.type === 'video' 
                    ? 'border-fuchsia-500 ring-2 ring-fuchsia-500/50' 
                    : 'border-gray-600 hover:border-fuchsia-400'
                }`}
              >
                <img 
                  src={studio.image} 
                  alt="Video thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Play className="w-6 h-6 text-white fill-white" />
                </div>
              </button>

              {/* Image Thumbnails */}
              {studioImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedMedia({ type: 'image', src: image.src })}
                  className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedMedia.type === 'image' && selectedMedia.src === image.src
                      ? 'border-fuchsia-500 ring-2 ring-fuchsia-500/50' 
                      : 'border-gray-600 hover:border-fuchsia-400'
                  }`}
                >
                  <img 
                    src={image.src} 
                    alt={image.label}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Benefits Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-3"
        >
          {benefits.map((benefit, index) => (
            <span 
              key={benefit}
              className={`px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm transition-colors ${
                index === benefits.length - 1 
                  ? 'bg-fuchsia-500/30 text-fuchsia-300 border border-fuchsia-500/50' 
                  : 'bg-white/10 text-gray-300 border border-white/20 hover:bg-white/20'
              }`}
            >
              {benefit}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StudioHero;
