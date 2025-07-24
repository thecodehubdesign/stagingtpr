
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MapPin, Clock, Users, Star, Heart, Zap, Sparkles } from "lucide-react";
import SectionHeader from '@/components/ui/section-header';
import PoleTypeQuizModal from '@/components/PoleTypeQuizModal';
import { Link } from 'react-router-dom';

const ClassDiscoverySection = () => {
  const programTypes = [
    {
      title: "Pole Classes",
      description: "Master the art of pole dancing with strength, grace, and confidence. From beginner spins to advanced tricks, our pole classes build both physical and mental strength while empowering you to express your unique style.",
      image: "/lovable-uploads/d97f60e6-9bb0-46b6-a9cc-aaa13ede7d4b.png",
      icon: Zap,
      locations: "6 Locations",
      classTypes: "15 Class Types", 
      specialties: "Tricks, Dance, Static, Spin",
      levels: "All Levels",
      href: "/classes?style=Pole"
    },
    {
      title: "Aerial Classes", 
      description: "Soar through the air with silks, hoops, and hammocks. Our aerial classes combine artistry with athleticism, building upper body strength while creating beautiful flowing movements that defy gravity.",
      image: "/lovable-uploads/ecb5bd9c-6055-4d41-8797-bbb506648a5b.png",
      icon: Sparkles,
      locations: "4 Locations",
      classTypes: "8 Class Types",
      specialties: "Silks, Hoop, Hammock, Straps", 
      levels: "Beginner to Advanced",
      href: "/classes?style=Aerial"
    },
    {
      title: "Flexibility Classes",
      description: "Improve your range of motion, prevent injury, and achieve your flexibility goals. From front splits to backbends, our targeted flexibility training helps you reach new levels of mobility and grace.",
      image: "/lovable-uploads/ff325961-11eb-4009-8f03-cb52bcfc97e0.png", 
      icon: Heart,
      locations: "6 Locations",
      classTypes: "6 Class Types",
      specialties: "Splits, Backbends, Mobility, Recovery",
      levels: "All Levels", 
      href: "/classes?style=Flexibility"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0
    }
  };

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background with cyberpunk elements */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-fuchsia-500/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="flex flex-col gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header Section */}
          <SectionHeader 
            badgeText="Class Discovery"
            title="Find Your Perfect Class"
            subtitle="From complete beginner to advanced performer, discover the class that matches your journey and goals."
          />

          {/* Grid Section */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {programTypes.map((program, index) => (
              <motion.div 
                key={index}
                className="group cyber-card rounded-xl overflow-hidden hover:scale-105 transition-all duration-300"
                variants={itemVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -10 }}
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 right-4">
                    <program.icon className="w-8 h-8 text-fuchsia-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-fuchsia-300 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed mb-6">
                    {program.description}
                  </p>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-sm text-white/60">
                      <MapPin className="w-4 h-4 mr-2 text-cyan-400" />
                      {program.locations}
                    </div>
                    <div className="flex items-center text-sm text-white/60">
                      <Star className="w-4 h-4 mr-2 text-fuchsia-400" />
                      {program.classTypes}
                    </div>
                    <div className="flex items-center text-sm text-white/60">
                      <Users className="w-4 h-4 mr-2 text-cyan-400" />
                      {program.levels}
                    </div>
                    <div className="flex items-center text-sm text-white/60">
                      <Sparkles className="w-4 h-4 mr-2 text-fuchsia-400" />
                      All Styles
                    </div>
                  </div>
                  
                  {/* Specialties */}
                  <div className="mb-6">
                    <p className="text-xs text-white/50 mb-2">SPECIALTIES</p>
                    <p className="text-sm text-white/80">{program.specialties}</p>
                  </div>
                  
                  <Button 
                    asChild
                    className="w-full neon-button"
                  >
                    <Link to={program.href}>
                      View {program.title}
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="text-center"
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-white/60 mb-6 text-lg">
              Not sure which class is right for you?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <PoleTypeQuizModal>
                <motion.button 
                  className="neon-button px-8 py-4 rounded-full text-black font-semibold text-lg hover:shadow-2xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Take Our Style Quiz
                </motion.button>
              </PoleTypeQuizModal>
              <motion.button 
                className="cyber-border px-8 py-4 rounded-full text-cyan-400 hover:bg-cyan-400/10 font-semibold text-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book a Consultation
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClassDiscoverySection;
