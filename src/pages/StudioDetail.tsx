
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
import { studios } from '@/data/studios';

const StudioDetail = () => {
  const { studioId } = useParams<{ studioId: string }>();
  
  const studio = studios.find(s => s.id === studioId);
  
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

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 cyber-grid">
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
        <StudioAbout studio={studio} />
        <StudioContact studio={studio} />
        <StudioGettingStarted />
        <StudioInstructors studioId={studio.id} />
        <StudioClassTypes studio={studio} />
        <StudioReviews studioId={studio.id} />
        <StudioClassList studioId={studio.id} />
        <StudioFAQ />
        <StudioLocationMap studio={studio} />
      </div>

      <Footer />
    </div>
  );
};

export default StudioDetail;
