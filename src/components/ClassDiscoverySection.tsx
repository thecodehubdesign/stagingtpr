
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Star, Users, Clock, Award, Heart, Zap } from "lucide-react";

const ClassDiscoverySection = () => {
  const classTypes = [
    {
      title: "Beginner Pole",
      description: "Perfect for those new to pole fitness. Build strength, flexibility, and confidence in a supportive environment.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Heart,
      level: "Beginner",
      duration: "60 min"
    },
    {
      title: "Intermediate Flow",
      description: "Take your pole skills to the next level with dynamic combinations and fluid transitions.",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Star,
      level: "Intermediate",
      duration: "75 min"
    },
    {
      title: "Aerial Silks",
      description: "Experience the artistry of aerial fitness with graceful movements and strength-building exercises.",
      image: "https://images.unsplash.com/photo-1506629905607-37f36637e4ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Zap,
      level: "All Levels",
      duration: "60 min"
    },
    {
      title: "Advanced Pole",
      description: "Master complex tricks, inversions, and advanced choreography with expert guidance.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Award,
      level: "Advanced",
      duration: "90 min"
    },
    {
      title: "Flexibility & Flow",
      description: "Enhance your flexibility and create beautiful flowing movements on and off the pole.",
      image: "https://images.unsplash.com/photo-1506629905607-37f36637e4ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Users,
      level: "All Levels",
      duration: "45 min"
    },
    {
      title: "Competition Prep",
      description: "Intensive training for those ready to showcase their skills in competitions and performances.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Clock,
      level: "Advanced",
      duration: "120 min"
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
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
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
          <motion.div 
            className="flex gap-6 flex-col items-center text-center"
            variants={itemVariants}
          >
            <Badge className="bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30 hover:bg-fuchsia-500/30">
              Class Discovery
            </Badge>
            <div className="flex gap-4 flex-col max-w-4xl">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold gradient-text tracking-tight">
                Find Your Perfect Class
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-white/70 max-w-3xl mx-auto">
                From complete beginner to advanced performer, discover the class that matches your journey and goals.
              </p>
            </div>
          </motion.div>

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
                  <p className="text-white/70 leading-relaxed">
                    {classType.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="text-center"
            variants={itemVariants}
          >
            <p className="text-white/60 mb-6 text-lg">
              Not sure which class is right for you?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button 
                className="neon-button px-8 py-4 rounded-full text-black font-semibold text-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Take Our Style Quiz
              </motion.button>
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
