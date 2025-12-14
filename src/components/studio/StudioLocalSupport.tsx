import { motion } from 'framer-motion';
import { Studio } from '@/data/studios';

interface StudioLocalSupportProps {
  studio: Studio;
}

const StudioLocalSupport = ({ studio }: StudioLocalSupportProps) => {
  const studioLocation = studio.name.replace('The Pole Room ', '');
  
  // Placeholder local business images
  const localBusinesses = [
    '/lovable-uploads/8a7c62c9-86e6-4d10-a555-f79e5ed95001.png',
    '/lovable-uploads/5b3dd8e8-6bc4-4f4a-af01-655d55902167.png',
    '/lovable-uploads/b34c042d-145b-435a-8197-68969f1f31eb.png',
    '/lovable-uploads/e72918ef-7386-4492-8d6e-6cf1cbeb62e4.png',
    '/lovable-uploads/a3f3abdb-e872-4fb0-a921-052f1d92afec.png',
    '/lovable-uploads/930cee8a-33f0-430b-8ef4-34c83d23d2d3.png',
    '/lovable-uploads/9f395d23-917c-4f57-aee6-3730701698b1.png',
    '/lovable-uploads/ff325961-11eb-4009-8f03-cb52bcfc97e0.png'
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

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
          {localBusinesses.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="aspect-square rounded-xl overflow-hidden group cursor-pointer"
            >
              <div className="w-full h-full bg-gray-700 relative overflow-hidden">
                <img 
                  src={image} 
                  alt={`Local business ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-fuchsia-500/50 rounded-xl transition-colors" />
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
