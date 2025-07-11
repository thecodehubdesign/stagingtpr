
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Studio } from '@/data/studios';

interface StudioAboutProps {
  studio: Studio;
}

const StudioAbout = ({ studio }: StudioAboutProps) => {
  return (
    <section className="py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            About <span className="gradient-text">{studio.name}</span>
          </h2>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            {studio.description}
          </p>
          
          <div className="space-y-4 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Available Apparatus</h3>
              <div className="flex flex-wrap gap-2">
                {studio.apparatus.map((apparatus) => (
                  <Badge 
                    key={apparatus}
                    className="bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/30"
                  >
                    {apparatus}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Studio Features</h3>
              <div className="flex flex-wrap gap-2">
                {studio.features.map((feature) => (
                  <Badge 
                    key={feature}
                    variant="outline"
                    className="border-gray-600 text-gray-300"
                  >
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <Button className="neon-button text-black font-bold text-lg px-8 py-3">
            Start Your Journey Today
          </Button>
        </div>
        
        <div className="relative">
          <img 
            src={studio.image} 
            alt={studio.name}
            className="w-full h-96 object-cover rounded-lg shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default StudioAbout;
