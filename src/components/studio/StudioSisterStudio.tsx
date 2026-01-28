import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, MapPin, ArrowRight } from 'lucide-react';
import { Studio, studios } from '@/data/studios';

interface StudioSisterStudioProps {
  studio: Studio;
}

// Define sister studio relationships
const sisterRelationships: Record<string, string> = {
  'rowville': 'narre-warren',
  'narre-warren': 'rowville',
  'mitcham': 'kilsyth',
  'kilsyth': 'mitcham',
};

const StudioSisterStudio = ({ studio }: StudioSisterStudioProps) => {
  const sisterStudioId = sisterRelationships[studio.id];
  
  // Only render if this studio has a sister relationship
  if (!sisterStudioId) return null;
  
  const sisterStudio = studios.find(s => s.id === sisterStudioId);
  if (!sisterStudio) return null;
  
  const currentLocation = studio.name.replace('The Pole Room ', '');
  const sisterLocation = sisterStudio.name.replace('The Pole Room ', '');

  return (
    <section className="py-16 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="cyber-card p-6 sm:p-8 rounded-2xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
              <Heart className="w-5 h-5 text-purple-400" />
            </div>
            <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-medium">
              Sister Studio
            </span>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-3">
            Train at <span className="gradient-text">{sisterLocation}</span> Too!
          </h3>
          
          <p className="text-gray-300 mb-6">
            Your {currentLocation} membership gives you access to train at our {sisterLocation} studio too! 
            Enjoy the flexibility of training at either location with the same membership.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin className="w-4 h-4 text-fuchsia-400" />
              <span className="text-sm">{sisterStudio.address}</span>
            </div>
            
            <Link 
              to={`/studios/${sisterStudioId}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-fuchsia-500/20 text-fuchsia-400 hover:bg-fuchsia-500/30 transition-colors text-sm font-medium"
            >
              View {sisterLocation} Studio
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StudioSisterStudio;
