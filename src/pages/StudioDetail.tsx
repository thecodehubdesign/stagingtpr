
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StudioHero from '@/components/studio/StudioHero';
import StudioVideoTestimonials from '@/components/studio/StudioVideoTestimonials';
import StudioClassesFilter from '@/components/studio/StudioClassesFilter';
import StudioClassList from '@/components/studio/StudioClassList';
import StudioInstructors from '@/components/studio/StudioInstructors';
import StudioGallery from '@/components/studio/StudioGallery';
import StudioFAQ from '@/components/studio/StudioFAQ';
import StudioLocalSupport from '@/components/studio/StudioLocalSupport';
import StudioDirections from '@/components/studio/StudioDirections';
import StudioContact from '@/components/studio/StudioContact';
import SectionNavigation from '@/components/SectionNavigation';
import FloatingReviewsButton from '@/components/studio/FloatingReviewsButton';
import { studios } from '@/data/studios';


const StudioDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const studio = studios.find(s => s.id === slug);
  
  if (!studio) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Studio Not Found</h1>
          <p className="text-gray-400">The studio you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const sections = [
    { id: 'hero', label: 'Studio' },
    { id: 'testimonials', label: 'Reviews' },
    { id: 'classes-filter', label: 'Classes' },
    { id: 'timetable', label: 'Timetable' },
    { id: 'instructors', label: 'Instructors' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'faq', label: 'FAQ' },
    { id: 'local-support', label: 'Community' },
    { id: 'directions', label: 'Directions' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <SectionNavigation sections={sections} />
      
      {/* Hero Section */}
      <div id="hero">
        <StudioHero studio={studio} />
      </div>

      {/* Video Testimonials Section */}
      <div id="testimonials">
        <StudioVideoTestimonials />
      </div>

      {/* Classes Filter Section */}
      <div id="classes-filter">
        <StudioClassesFilter studio={studio} />
      </div>

      {/* Timetable Section */}
      <div id="timetable">
        <StudioClassList studio={studio} />
      </div>

      {/* Instructors Section */}
      <div id="instructors">
        <StudioInstructors studio={studio} />
      </div>

      {/* Gallery Section */}
      <div id="gallery">
        <StudioGallery studioId={studio.id} />
      </div>

      {/* FAQ Section */}
      <div id="faq">
        <StudioFAQ />
      </div>

      {/* Local Support Section */}
      <div id="local-support">
        <StudioLocalSupport studio={studio} />
      </div>

      {/* Directions Section */}
      <div id="directions">
        <StudioDirections studio={studio} />
      </div>

      {/* Contact Section */}
      <div id="contact">
        <StudioContact studio={studio} />
      </div>

      {/* Floating Reviews Button */}
      <FloatingReviewsButton studioId={studio.id} />

      <Footer />
    </div>
  );
};

export default StudioDetail;
