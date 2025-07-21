
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StudioAbout from '@/components/studio/StudioAbout';
import StudioContact from '@/components/studio/StudioContact';
import StudioGettingStarted from '@/components/studio/StudioGettingStarted';
import StudioInstructors from '@/components/studio/StudioInstructors';
import StudioClassTypes from '@/components/studio/StudioClassTypes';
import StudioReviews from '@/components/studio/StudioReviews';
import StudioClassList from '@/components/studio/StudioClassList';
import StudioFAQ from '@/components/studio/StudioFAQ';
import StudioLocationMap from '@/components/studio/StudioLocationMap';
import FreeTrialBookingForm from '@/components/FreeTrialBookingForm';
import SectionNavigation from '@/components/SectionNavigation';
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
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
    { id: 'getting-started', label: 'Getting Started' },
    { id: 'instructors', label: 'Instructors' },
    { id: 'class-types', label: 'Class Types' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'classes', label: 'Classes' },
    { id: 'faq', label: 'FAQ' },
    { id: 'location', label: 'Location' }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <SectionNavigation sections={sections} />
      
      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 cyber-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl sm:text-6xl font-bold gradient-text mb-6">
              {studio.name}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              {studio.address}
            </p>
            <FreeTrialBookingForm />
          </div>
        </div>
      </section>

      {/* Studio Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="about">
          <StudioAbout studio={studio} />
        </div>
        <div id="contact">
          <StudioContact studio={studio} />
        </div>
        <div id="getting-started">
          <StudioGettingStarted />
        </div>
        <div id="instructors">
          <StudioInstructors studioId={studio.id} />
        </div>
        <div id="class-types">
          <StudioClassTypes studio={studio} />
        </div>
        <div id="reviews">
          <StudioReviews studioId={studio.id} />
        </div>
        <div id="classes">
          <StudioClassList studioId={studio.id} />
        </div>
        <div id="faq">
          <StudioFAQ />
        </div>
        <div id="location">
          <StudioLocationMap studio={studio} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default StudioDetail;
