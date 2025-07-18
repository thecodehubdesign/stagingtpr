
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Studio } from '@/data/studios';
import FreeTrialBookingForm from '../FreeTrialBookingForm';

interface StudioAboutProps {
  studio: Studio;
}

const StudioAbout = ({ studio }: StudioAboutProps) => {
  const studioImages = [
    studio.image,
    '/lovable-uploads/5b3dd8e8-6bc4-4f4a-af01-655d55902167.png',
    '/lovable-uploads/9f395d23-917c-4f57-aee6-3730701698b1.png',
    '/lovable-uploads/29e3bddc-c99a-43e5-87df-ab4c0905e1a0.png',
    '/lovable-uploads/14503a9b-f9c7-41ee-a0b5-131b4a9a6989.png'
  ];

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

          <FreeTrialBookingForm />
        </div>
        
        <div className="relative">
          <Carousel className="w-full">
            <CarouselContent>
              {studioImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative">
                    <img 
                      src={image} 
                      alt={`${studio.name} - Image ${index + 1}`}
                      className="w-full h-96 object-cover rounded-lg shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-black/50 border-white/20 text-white hover:bg-black/70" />
            <CarouselNext className="right-4 bg-black/50 border-white/20 text-white hover:bg-black/70" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default StudioAbout;
