import { motion } from 'framer-motion';
import { Star, Play, CheckCircle } from 'lucide-react';

interface StudioGalleryProps {
  studioId: string;
}

const StudioGallery = ({ studioId }: StudioGalleryProps) => {
  const reviews = [
    {
      text: "Super beginner friendly! The instructors make you feel so welcome from day one.",
      author: "Sarah M."
    },
    {
      text: "My ultimate happy place. Best decision I ever made joining TPR!",
      author: "Jessica K."
    }
  ];

  const galleryImages = [
    '/lovable-uploads/8b589fd4-a71e-43de-823f-c2af97fef88d.jpg',
    '/lovable-uploads/c7f8bec0-23c5-44db-871b-dccfbacb26a5.jpg',
    '/lovable-uploads/4d4d16ef-17d9-47e3-a464-cfa3c9b9eef6.jpg',
    '/lovable-uploads/1d83d83b-0057-4bd1-8052-79584b039a97.jpg',
    '/lovable-uploads/3cc0b943-7d1c-4140-a59c-a60390d03154.jpg',
    '/lovable-uploads/8a7c62c9-86e6-4d10-a555-f79e5ed95001.png'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Review Quotes */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="cyber-card p-6 max-w-sm"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-fuchsia-400 text-fuchsia-400" />
                ))}
              </div>
              <p className="text-white italic mb-3">"{review.text}"</p>
              <p className="text-gray-400 text-sm">— {review.author}</p>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">It's Everything You Wish</span>
            <br />
            <span className="text-white">The Gym Was And More</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Step into a space where fitness meets artistry. Our studio is designed to inspire, 
            challenge, and support you every step of your pole and aerial journey.
          </p>
          
          {/* Instagram Handle */}
          <div className="flex items-center justify-center gap-2 text-sm">
            <span className="text-fuchsia-400 font-medium">@thepoleroom</span>
            <CheckCircle className="w-4 h-4 text-cyan-400" />
            <span className="text-gray-400">14.7K Followers</span>
          </div>
        </motion.div>

        {/* Gallery Title */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-white">
            Take A Look Inside The Studio:
          </h3>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
            >
              <img 
                src={image} 
                alt={`Studio gallery ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Play button overlay for video-style posts */}
              {index % 3 === 0 && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 rounded-full bg-fuchsia-500/80 flex items-center justify-center backdrop-blur-sm">
                    <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudioGallery;
