import { motion } from 'framer-motion';
import { Studio } from '@/data/studios';

interface StudioLocalSupportProps {
  studio: Studio;
}

const StudioLocalSupport = ({ studio }: StudioLocalSupportProps) => {
  const studioLocation = studio.name.replace('The Pole Room ', '');
  
  // Local businesses for Mitcham area
  const localBusinesses = [
    { name: "Rise & Grind Coffee Shop Mitcham", image: "/images/local-businesses/rise-grind.png" },
    { name: "Subway Mitcham", image: "/images/local-businesses/subway.png" },
    { name: "Woolworths Mitcham", image: "/images/local-businesses/woolworths.png" },
    { name: "Nutrition Warehouse Ringwood", image: "/images/local-businesses/nutrition-warehouse.png" },
    { name: "Mitcham Recovery Centre", image: "/images/local-businesses/mitcham-recovery.png" },
    { name: "Eastland Shopping Centre", image: "/images/local-businesses/eastland.png" }
  ];

  return (
    <section className="py-20 bg-gray-800/50 cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Supporting Our Students & <span className="gradient-text">Our Locals</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We proudly support local {studioLocation} businesses. Together, we're building a stronger community. 
            Meet our talented students & instructors, and where we all go to hangout after a fierce session in the studio!
          </p>
        </motion.div>

        {/* Image Grid - 1/3 size with 6 columns */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-8 max-w-3xl mx-auto">
          {localBusinesses.map((business, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="aspect-square rounded-lg overflow-hidden group cursor-pointer"
              title={business.name}
            >
              <div className="w-full h-full bg-white relative overflow-hidden">
                <img 
                  src={business.image} 
                  alt={business.name}
                  className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-fuchsia-500/50 rounded-lg transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Link */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a 
            href="#" 
            className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors text-sm font-medium underline underline-offset-4"
          >
            Local business owner? Introduce your business and be featured here →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default StudioLocalSupport;
