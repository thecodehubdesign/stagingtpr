import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import StudioMap from './StudioMap';
const StudioLocations = () => {
  const navigate = useNavigate();
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };
  const handleSearchClick = () => {
    navigate('/studios');
  };
  return <section id="studios" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{
        once: true
      }} variants={containerVariants}>
          <motion.div variants={itemVariants} transition={{
          duration: 0.6,
          ease: "easeOut"
        }}>
            <Badge className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.08] border border-white/[0.15] backdrop-blur-sm mb-6">
              Studio Locations
            </Badge>
          </motion.div>
          <motion.h2 variants={itemVariants} transition={{
          duration: 0.6,
          ease: "easeOut"
        }} className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-300 to-rose-300 font-bold text-6xl">
            Find Your Nearest Studio
          </motion.h2>
          <motion.p variants={itemVariants} transition={{
          duration: 0.6,
          ease: "easeOut"
        }} className="text-lg text-muted-foreground max-w-2xl mx-auto my-[20px] py-0">
            Discover your local fitness community across Melbourne with convenient locations
          </motion.p>
        </motion.div>

        {/* Interactive Map Section */}
        <motion.div className="mb-16" initial="hidden" whileInView="visible" viewport={{
        once: true
      }} variants={itemVariants} transition={{
        duration: 0.8,
        ease: "easeOut"
      }}>
          <div className="rounded-xl overflow-hidden border border-border cyber-card">
            <StudioMap onSearchClick={handleSearchClick} />
          </div>
        </motion.div>
      </div>
    </section>;
};
export default StudioLocations;