
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FounderSection from '@/components/FounderSection';
import LevelUpMethod from '@/components/LevelUpMethod';
import FlexibilityProgram from '@/components/FlexibilityProgram';
import ClassDiscovery from '@/components/ClassDiscovery';
import StyleQuiz from '@/components/StyleQuiz';
import StudioLocations from '@/components/StudioLocations';
import SocialProof from '@/components/SocialProof';
import { PremiumTestimonials } from '@/components/ui/premium-testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FounderSection />
      <LevelUpMethod />
      <FlexibilityProgram />
      <ClassDiscovery />
      <StyleQuiz />
      <StudioLocations />
      <PremiumTestimonials />
      <SocialProof />
      <Footer />
    </div>
  );
};

export default Index;
