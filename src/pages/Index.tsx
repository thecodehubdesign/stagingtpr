
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StudioBrandsSlider from '@/components/StudioBrandsSlider';
import FounderSection from '@/components/FounderSection';
import PoleDancerTypes from '@/components/PoleDancerTypes';
import LevelUpMethod from '@/components/LevelUpMethod';
import FlexibilityProgram from '@/components/FlexibilityProgram';
import ClassDiscoverySection from '@/components/ClassDiscoverySection';
import StyleQuiz from '@/components/StyleQuiz';
import StudioLocations from '@/components/StudioLocations';
import { PremiumTestimonials } from '@/components/ui/premium-testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <StudioBrandsSlider />
      <FounderSection />
      <PoleDancerTypes />
      <LevelUpMethod />
      <FlexibilityProgram />
      <ClassDiscoverySection />
      <StyleQuiz />
      <StudioLocations />
      <PremiumTestimonials />
      <Footer />
    </div>
  );
};

export default Index;
