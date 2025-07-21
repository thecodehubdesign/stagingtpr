
import { motion } from 'framer-motion';

const StudioBrandsSlider = () => {
  const brands = [
    {
      name: "Red Balloon",
      logo: "/lovable-uploads/1ace8a07-f17f-4c52-9cc2-3b06defbe855.png"
    },
    {
      name: "Leader Community News",
      logo: "/lovable-uploads/b34c042d-145b-435a-8197-68969f1f31eb.png"
    },
    {
      name: "Herald Sun",
      logo: "/lovable-uploads/d4147969-5343-4196-80a1-a763a3b9fe1a.png"
    },
    {
      name: "Shark Tank",
      logo: "/lovable-uploads/4f8a3b38-6622-49df-9ffc-9a197bb87544.png"
    }
  ];

  // Duplicate the array to create seamless loop
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="py-12 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm text-gray-400 uppercase tracking-wider">
            As Featured In
          </p>
        </div>
        
        <div className="relative">
          <motion.div
            className="flex items-center gap-16"
            animate={{
              x: [0, -50 * brands.length + '%']
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }}
          >
            {duplicatedBrands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-16 w-48"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-full max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StudioBrandsSlider;
