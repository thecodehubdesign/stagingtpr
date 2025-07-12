
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StudioBrandsSlider from '@/components/StudioBrandsSlider';
import FounderSection from '@/components/FounderSection';
import LevelUpMethod from '@/components/LevelUpMethod';
import FlexibilityProgram from '@/components/FlexibilityProgram';
import ClassDiscoverySection from '@/components/ClassDiscoverySection';
import PoleTypeQuiz from '@/components/PoleTypeQuiz';
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
      <LevelUpMethod />
      <FlexibilityProgram />
      <ClassDiscoverySection />
      <PoleTypeQuiz />
      <StudioLocations />
      <PremiumTestimonials />
      <Footer />
    </div>
  );
};

export default Index;
