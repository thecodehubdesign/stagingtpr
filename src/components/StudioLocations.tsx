import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import StudioMap from './StudioMap';
import SectionHeader from '@/components/ui/section-header';
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
  return <section id="studios" className="py-20 bg-background cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          badgeText="Studio Locations"
          title="Find Your Nearest Studio"
          subtitle="Discover your local fitness community across Melbourne with convenient locations"
        />

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