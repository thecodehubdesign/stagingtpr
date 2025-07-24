
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import VideoSection from '@/components/VideoSection';
import LevelUpMethod from '@/components/LevelUpMethod';
import ClassDiscoverySection from '@/components/ClassDiscoverySection';
import StudioLocations from '@/components/StudioLocations';
import { PremiumTestimonials } from '@/components/ui/premium-testimonials';
import Footer from '@/components/Footer';
import SectionNavigation from '@/components/SectionNavigation';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const Index = () => {
  useScrollToTop();
  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'video', label: 'Video' },
    { id: 'method', label: 'Method' },
    { id: 'classes', label: 'Classes' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'locations', label: 'Locations' }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <SectionNavigation sections={sections} />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="video">
        <VideoSection />
      </div>
      <div id="method">
        <LevelUpMethod />
      </div>
      <div id="classes">
        <ClassDiscoverySection />
      </div>
      <div id="testimonials">
        <PremiumTestimonials />
      </div>
      <div id="locations">
        <StudioLocations />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
