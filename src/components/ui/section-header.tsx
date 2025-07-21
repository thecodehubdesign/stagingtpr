import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface SectionHeaderProps {
  badgeText: string;
  title: string;
  subtitle?: string;
  titleGradient?: string;
  className?: string;
}

const SectionHeader = ({ 
  badgeText, 
  title, 
  subtitle, 
  titleGradient = "from-indigo-300 via-purple-300 to-rose-300",
  className = ""
}: SectionHeaderProps) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className={`text-center mb-16 ${className}`}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.08] border border-white/[0.15] backdrop-blur-sm mb-6"
        whileHover={{ scale: 1.05, borderColor: "rgba(255, 255, 255, 0.3)" }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="h-4 w-4 text-indigo-300" />
        </motion.div>
        <span className="text-sm font-medium text-white/80">
          ✨ {badgeText}
        </span>
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
      </motion.div>

      <motion.h2 
        className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 tracking-tight"
        variants={fadeInUp}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.span 
          className={`bg-clip-text text-transparent bg-gradient-to-r ${titleGradient}`}
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
          {title}
        </motion.span>
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          className="text-xl sm:text-2xl text-white/60 max-w-4xl mx-auto leading-relaxed"
          variants={fadeInUp}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeader;