
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Quote, Star, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

const testimonials = [
  {
    name: "Emma Williams",
    role: "Marketing Manager",
    company: "Creative Agency",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The Pole Room completely transformed my confidence and strength. I never thought I could do aerial silks, but the instructors made me feel so supported. Now I'm addicted!",
    results: ["Increased confidence", "Amazing strength gains", "Supportive community"]
  },
  {
    name: "Sophie Chen",
    role: "Software Developer",
    company: "Tech Startup",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "After years of sitting at a desk, pole dancing gave me back my body. The classes are challenging but so rewarding. I've made incredible friends here too.",
    results: ["Better posture", "New friendships", "Physical transformation"]
  },
  {
    name: "Jessica Martinez",
    role: "Nurse",
    company: "City Hospital",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The instructors at The Pole Room are phenomenal. They create such a safe, non-judgmental space where you can truly express yourself and grow stronger every class.",
    results: ["Safe environment", "Personal growth", "Expert instruction"]
  },
  {
    name: "Rachel Thompson",
    role: "Teacher",
    company: "Elementary School",
    avatar: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "I started with zero fitness experience and now I'm performing moves I never dreamed possible. The progression is amazing and the community is like family.",
    results: ["Zero to hero journey", "Family atmosphere", "Incredible progress"]
  },
  {
    name: "Amanda Davis",
    role: "Business Owner",
    company: "Local Boutique",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The Pole Room isn't just a fitness studio - it's a place where women empower each other. The energy in every class is electric and inspiring.",
    results: ["Empowering environment", "Electric energy", "Inspiring classes"]
  }
];

export function PremiumTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45
    })
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.23, 0.86, 0.39, 0.96] 
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative py-32 cyber-grid overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient mesh */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/[0.08] via-purple-500/[0.05] to-cyan-500/[0.08]"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundSize: '400% 400%'
          }}
        />
        
        {/* Moving light orbs */}
        <motion.div
          className="absolute top-1/3 left-1/5 w-72 h-72 bg-fuchsia-400/15 rounded-full blur-3xl"
          animate={{
            x: [0, 150, 0],
            y: [0, 80, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-cyan-400/15 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-fuchsia-400/50 rounded-full"
            style={{
              left: `${15 + (i * 7)}%`,
              top: `${25 + (i * 5)}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 1, 0.2],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <motion.div 
        ref={containerRef}
        className="relative z-10 max-w-7xl mx-auto px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          variants={fadeInUp}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.08] border border-fuchsia-500/30 backdrop-blur-sm mb-6"
            whileHover={{ scale: 1.05, borderColor: "rgba(255, 0, 255, 0.5)" }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-4 w-4 text-fuchsia-400" />
            </motion.div>
            <span className="text-sm font-medium text-white/80">
              ✨ Real Stories, Real Results
            </span>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          </motion.div>

          <motion.h2 
            className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 tracking-tight"
            variants={fadeInUp}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Loved by
            </span>
            <br />
            <motion.span 
              className="gradient-text"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundSize: '200% 200%'
              }}
            >
              Amazing Women
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Join thousands of women who have discovered their strength, grace, and confidence at The Pole Room.
          </motion.p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-6xl mx-auto mb-16">
          <div className="relative h-[500px] md:h-[400px] perspective-1000">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 },
                  rotateY: { duration: 0.6 }
                }}
                className="absolute inset-0"
              >
                <div className="relative h-full cyber-card p-8 md:p-12 overflow-hidden group">
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/[0.08] via-purple-500/[0.05] to-cyan-500/[0.08] rounded-lg"
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{
                      backgroundSize: '300% 300%'
                    }}
                  />

                  {/* Quote icon */}
                  <motion.div
                    className="absolute top-8 right-8 opacity-20"
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Quote className="w-16 h-16 text-fuchsia-400" />
                  </motion.div>

                  <div className="relative z-10 h-full flex flex-col md:flex-row items-center gap-8">
                    {/* User Info */}
                    <div className="flex-shrink-0 text-center md:text-left">
                      <motion.div
                        className="relative mb-6"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-24 h-24 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-fuchsia-400/30 relative">
                          <img 
                            src={testimonials[currentIndex].avatar} 
                            alt={testimonials[currentIndex].name}
                            className="w-full h-full object-cover"
                          />
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-fuchsia-400/20 to-cyan-400/20"
                            animate={{ opacity: [0, 0.3, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                          />
                        </div>
                        
                        {/* Floating ring animation */}
                        <motion.div
                          className="absolute inset-0 border-2 border-fuchsia-400/30 rounded-full"
                          animate={{ 
                            scale: [1, 1.4, 1],
                            opacity: [0.5, 0, 0.5]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </motion.div>

                      <h3 className="text-2xl font-bold text-white mb-2">
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="text-fuchsia-300 mb-1 font-medium">
                        {testimonials[currentIndex].role}
                      </p>
                      <p className="text-gray-400 mb-4">
                        {testimonials[currentIndex].company}
                      </p>
                      
                      {/* Star Rating */}
                      <div className="flex justify-center md:justify-start gap-1 mb-6">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1, duration: 0.3 }}
                          >
                            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <motion.blockquote 
                        className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 font-light italic"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                      >
                        "{testimonials[currentIndex].text}"
                      </motion.blockquote>

                      {/* Results */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {testimonials[currentIndex].results.map((result, i) => (
                          <motion.div
                            key={i}
                            className="bg-white/[0.05] rounded-lg p-3 border border-fuchsia-500/20 backdrop-blur-sm"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                            whileHover={{ backgroundColor: "rgba(255, 0, 255, 0.1)" }}
                          >
                            <span className="text-sm text-white/70 font-medium">
                              {result}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <motion.button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white/[0.08] border border-fuchsia-500/30 backdrop-blur-sm text-white hover:bg-fuchsia-500/20 transition-all"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 0, 255, 0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-fuchsia-400 scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white/[0.08] border border-fuchsia-500/30 backdrop-blur-sm text-white hover:bg-fuchsia-500/20 transition-all"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 0, 255, 0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={staggerContainer}
        >
          {[
            { number: "2000+", label: "Happy Students" },
            { number: "98%", label: "Would Recommend" },
            { number: "5+", label: "Years Experience" },
            { number: "15+", label: "Expert Instructors" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="text-3xl md:text-4xl font-bold gradient-text mb-2"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-400 text-sm font-medium group-hover:text-gray-300 transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
