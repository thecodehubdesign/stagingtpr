import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Studio } from '@/data/studios';

interface StudioClassesFilterProps {
  studio: Studio;
}

const StudioClassesFilter = ({ studio }: StudioClassesFilterProps) => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Pole', 'Aerial', 'Dance', 'Stretch', 'Strength'];
  
  const classes = [
    {
      name: 'Pole Conditioning',
      image: '/lovable-uploads/8b589fd4-a71e-43de-823f-c2af97fef88d.jpg',
      level: 'Beginner Friendly',
      description: 'Build your pole strength and technique with our conditioning classes.',
      category: 'Pole'
    },
    {
      name: 'Pole Courses',
      image: '/lovable-uploads/c7f8bec0-23c5-44db-871b-dccfbacb26a5.jpg',
      level: 'Beginner to Advanced',
      description: 'Structured learning from beginner to advanced with our 8-week courses.',
      category: 'Pole'
    },
    {
      name: 'Aerial Silks',
      image: '/lovable-uploads/4d4d16ef-17d9-47e3-a464-cfa3c9b9eef6.jpg',
      level: 'All Levels',
      description: 'Flow through the air with grace and strength on aerial silks.',
      category: 'Aerial'
    },
    {
      name: 'Aerial Hammock',
      image: '/lovable-uploads/1d83d83b-0057-4bd1-8052-79584b039a97.jpg',
      level: 'Beginner Friendly',
      description: 'Experience the joy of aerial arts in our supportive hammock classes.',
      category: 'Aerial'
    },
    {
      name: 'Flexibility Training',
      image: '/lovable-uploads/3cc0b943-7d1c-4140-a59c-a60390d03154.jpg',
      level: 'All Levels',
      description: 'Improve your flexibility and mobility with targeted stretching.',
      category: 'Stretch'
    }
  ];

  const filteredClasses = activeFilter === 'All' 
    ? classes 
    : classes.filter(c => c.category === activeFilter);

  const studioLocation = studio.name.replace('The Pole Room ', '');

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-fuchsia-400 font-medium text-sm uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
            Pole & Aerial Classes At <span className="gradient-text">{studioLocation}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From beginners to advanced, we offer a variety of pole and aerial classes to suit your fitness journey.
          </p>
          <a href="#" className="text-fuchsia-400 hover:text-fuchsia-300 text-sm mt-2 inline-block">
            Online classes also available! →
          </a>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all ${
                activeFilter === filter
                  ? 'neon-button'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Classes Carousel */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-none [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none' }}>
            {filteredClasses.map((classItem, index) => (
              <motion.div
                key={classItem.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-72 h-full"
              >
                <div className="cyber-card overflow-hidden group cursor-pointer h-full flex flex-col rounded-2xl">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
                    <img 
                      src={classItem.image} 
                      alt={classItem.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-fuchsia-500/80 text-white backdrop-blur-sm">
                        {classItem.level}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-lg font-semibold text-white mb-2">{classItem.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{classItem.description}</p>
                    <a 
                      href="#classes" 
                      className="text-fuchsia-400 hover:text-fuchsia-300 text-sm font-medium mt-auto"
                    >
                      See {studioLocation} timetable →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-gray-800 border border-fuchsia-500/30 flex items-center justify-center hover:bg-fuchsia-500/20 transition-colors hidden lg:flex">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-gray-800 border border-fuchsia-500/30 flex items-center justify-center hover:bg-fuchsia-500/20 transition-colors hidden lg:flex">
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default StudioClassesFilter;
