import { motion } from 'framer-motion';
import { Trophy, Heart, Building2, Award } from 'lucide-react';

const whyChooseFeatures = [
  { 
    title: "Performance Opportunities", 
    description: "Showcase your skills at SHINE and GLOW events",
    icon: Trophy,
    image: "/images/glow/hero-1.png"
  },
  { 
    title: "Strong Community", 
    description: "No mean girl vibes - just genuine support",
    icon: Heart,
    image: "/images/first-timers/gallery-5.avif"
  },
  { 
    title: "Beautiful Studios", 
    description: "Purpose-built spaces designed for you",
    icon: Building2,
    image: "/images/first-timers/gallery-6.avif"
  },
  { 
    title: "Expert Instructors", 
    description: "Trained professionals who care",
    icon: Award,
    image: "/images/instructors/courtney.png"
  },
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Choose <span className="gradient-text">The Pole Room</span>
          </h2>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {whyChooseFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="cyber-card rounded-xl overflow-hidden hover:border-fuchsia-500/50 transition-all group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <feature.icon className="w-6 h-6 text-fuchsia-400 mb-2" />
                <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text">7</div>
            <p className="text-gray-400">Studios</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text">10+</div>
            <p className="text-gray-400">Years</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text">5000+</div>
            <p className="text-gray-400">Members</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
