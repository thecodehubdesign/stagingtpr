
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Star, Users, Clock, Award, Heart, Zap, Sparkles, Flame, Target, Music } from "lucide-react";
import SectionHeader from '@/components/ui/section-header';
import PoleTypeQuizModal from '@/components/PoleTypeQuizModal';

const ClassDiscoverySection = () => {
  const classTypes = [
    {
      title: "Pole Basics",
      description: "Perfect introduction to pole fitness. Learn fundamental spins, poses, and build confidence in a supportive environment. Ideal for complete beginners.",
      image: "/lovable-uploads/d97f60e6-9bb0-46b6-a9cc-aaa13ede7d4b.png",
      icon: Heart,
      level: "Beginner",
      duration: "60 min"
    },
    {
      title: "Front Splits Masterclass",
      description: "Intensive flexibility training focused on achieving and perfecting your front splits. Includes warm-up routines and progressive stretching techniques.",
      image: "/lovable-uploads/ecb5bd9c-6055-4d41-8797-bbb506648a5b.png",
      icon: Target,
      level: "All Levels",
      duration: "75 min"
    },
    {
      title: "Pole Jam",
      description: "High-energy freestyle sessions where you can practice moves, experiment with combinations, and dance to your favorite beats in a fun, social environment.",
      image: "/lovable-uploads/e72918ef-7386-4492-8d6e-6cf1cbeb62e4.png",
      icon: Music,
      level: "Intermediate",
      duration: "90 min"
    },
    {
      title: "Chair and Lap",
      description: "Sensual dance class incorporating chair work and floor movements. Focus on fluidity, confidence, and connecting with your feminine energy.",
      image: "/lovable-uploads/ff325961-11eb-4009-8f03-cb52bcfc97e0.png",
      icon: Sparkles,
      level: "All Levels",
      duration: "60 min"
    },
    {
      title: "Dance Filthy",
      description: "Embrace your inner confidence with sultry choreography and expressive movement. Perfect for building self-esteem and body positivity.",
      image: "/lovable-uploads/a3f3abdb-e872-4fb0-a921-052f1d92afec.png",
      icon: Flame,
      level: "Intermediate",
      duration: "75 min"
    },
    {
      title: "Pole Conditioning",
      description: "Strength-focused class designed to build the muscle groups essential for pole dancing. Includes core work, flexibility training, and pole-specific conditioning.",
      image: "/lovable-uploads/cc11c8dc-6872-48a7-9124-7e1c3602e410.png",
      icon: Zap,
      level: "All Levels",
      duration: "45 min"
    },
    {
      title: "Pole Foundations",
      description: "Comprehensive beginner program covering safety, basic techniques, and fundamental movements. Perfect stepping stone to more advanced classes.",
      image: "/lovable-uploads/8a7c62c9-86e6-4d10-a555-f79e5ed95001.png",
      icon: Award,
      level: "Beginner",
      duration: "60 min"
    },
    {
      title: "Pure Pole Dance",
      description: "Artistic pole dancing focusing on flow, grace, and technical precision. Combines athletic skill with beautiful choreography and self-expression.",
      image: "/lovable-uploads/119fcd15-3aac-4f1f-920c-a13497b0b348.png",
      icon: Star,
      level: "Intermediate",
      duration: "75 min"
    },
    {
      title: "Sexy Basics",
      description: "Introduction to sensual movement and confidence building. Learn to embrace your sexuality through dance in a supportive, judgment-free environment.",
      image: "/lovable-uploads/8be1e610-6a66-4ace-b02d-1945fd276001.png",
      icon: Heart,
      level: "Beginner",
      duration: "60 min"
    },
    {
      title: "Floor Play",
      description: "Ground-based movements focusing on floorwork, transitions, and dance flow. Perfect complement to pole work or as a standalone class.",
      image: "/lovable-uploads/32863f0f-165a-4abf-b73e-3eea2045dce5.png",
      icon: Users,
      level: "All Levels",
      duration: "45 min"
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {classTypes.map((classType, index) => (
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
                    src={classType.image} 
                    alt={classType.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <Badge className="bg-black/40 text-white border-white/20">
                      {classType.level}
                    </Badge>
                    <Badge className="bg-black/40 text-white border-white/20">
                      <Clock className="w-3 h-3 mr-1" />
                      {classType.duration}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <classType.icon className="w-6 h-6 text-fuchsia-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-semibold text-white mb-3 group-hover:text-fuchsia-300 transition-colors">
                    {classType.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed mb-4">
                    {classType.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full bg-transparent border-fuchsia-400/50 text-fuchsia-400 hover:bg-fuchsia-400/10 hover:border-fuchsia-400 transition-all duration-300"
                  >
                    View Class
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
