
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FounderSection from '@/components/FounderSection';
import FlexibilityProgram from '@/components/FlexibilityProgram';
import ClassDiscovery from '@/components/ClassDiscovery';
import StyleQuiz from '@/components/StyleQuiz';
import FreeTrialOffer from '@/components/FreeTrialOffer';
import StudioLocations from '@/components/StudioLocations';
import SocialProof from '@/components/SocialProof';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FounderSection />
      <FlexibilityProgram />
      <ClassDiscovery />
      <StyleQuiz />
      <FreeTrialOffer />
      <StudioLocations />
      <SocialProof />
      <Footer />
    </div>
  );
};

export default Index;
