import { InfiniteSlider } from '@/components/ui/infinite-slider';
const StudioBrandsSlider = () => {
  const brands = [{
    name: "Pole Paradise",
    logo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=100&fit=crop&crop=center"
  }, {
    name: "Aerial Arts Studio",
    logo: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200&h=100&fit=crop&crop=center"
  }, {
    name: "Flex & Flow",
    logo: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=200&h=100&fit=crop&crop=center"
  }, {
    name: "Grace & Strength",
    logo: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=200&h=100&fit=crop&crop=center"
  }, {
    name: "Elevate Fitness",
    logo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=100&fit=crop&crop=center"
  }, {
    name: "Soar Studios",
    logo: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200&h=100&fit=crop&crop=center"
  }];
  return <section className="py-16 bg-gradient-to-r from-gray-900 via-purple-900/20 to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        
        
        <InfiniteSlider gap={40} reverse className="w-full" duration={30} durationOnHover={60}>
          {brands.map((brand, index) => <div key={index} className="flex items-center justify-center h-20 w-48 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
              <img src={brand.logo} alt={`${brand.name} logo`} className="h-12 w-auto object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
            </div>)}
        </InfiniteSlider>
      </div>
    </section>;
};
export default StudioBrandsSlider;