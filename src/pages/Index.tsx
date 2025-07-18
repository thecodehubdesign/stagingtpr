
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StudioBrandsSlider from '@/components/StudioBrandsSlider';
import FounderSection from '@/components/FounderSection';
import VideoSection from '@/components/VideoSection';
import LevelUpMethod from '@/components/LevelUpMethod';
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
      <VideoSection />
      <LevelUpMethod />
      <ClassDiscoverySection />
      <PoleTypeQuiz />
      <PremiumTestimonials />
      <StudioLocations />
      <Footer />
    </div>
  );
};

export default Index;
