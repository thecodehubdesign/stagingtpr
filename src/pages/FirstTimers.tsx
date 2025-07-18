
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionNavigation from '@/components/SectionNavigation';
import TermCountdown from '@/components/TermCountdown';
import StartAnytime from '@/components/StartAnytime';
import FastTrackProgram from '@/components/FastTrackProgram';
import FourPolePathways from '@/components/FourPolePathways';
import StyleQuizModal from '@/components/StyleQuizModal';
import CoursesVsCasualComparison from '@/components/CoursesVsCasualComparison';
import IntroOfferBlocks from '@/components/IntroOfferBlocks';
import SocialProofCarousel from '@/components/SocialProofCarousel';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Sparkles, MessageCircle, ArrowRight, Play } from 'lucide-react';

const FirstTimers = () => {
  const sections = [
    { id: 'countdown', label: 'Next Term' },
    { id: 'start-anytime', label: 'Start Now' },
    { id: 'pathways', label: 'Find Your Path' },
    { id: 'quiz', label: 'Take Quiz' },
    { id: 'comparison', label: 'Learning Styles' },
    { id: 'offers', label: 'Intro Offers' },
    { id: 'fast-track', label: 'Fast Track' },
    { id: 'testimonials', label: 'Success Stories' }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <SectionNavigation sections={sections} />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 cyber-grid relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-fuchsia-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-cyan-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-fuchsia-500/10 border border-fuchsia-500/30 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-fuchsia-400" />
              <span className="text-fuchsia-400 text-sm font-medium">Your Pole Journey Starts Here</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-bold gradient-text mb-6">
              Find Your Perfect<br />Pole Pathway
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Pole is what you make it—fun, fitness, friends, or performance. 
              <span className="text-fuchsia-400 font-semibold"> Start your journey with us!</span>
            </p>
            
            {/* Hero Video/Image Placeholder */}
            <div className="relative max-w-4xl mx-auto mb-8">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-fuchsia-500/30 flex items-center justify-center">
                <div className="text-center">
                  <Play className="w-16 h-16 text-fuchsia-400 mx-auto mb-4 neon-glow" />
                  <p className="text-gray-300">Diverse, vibrant pole studio community</p>
                  <p className="text-sm text-gray-400">Representing different ages, backgrounds, and personalities</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="neon-button text-black font-bold text-lg px-8 py-3">
                Take Our 1-Minute Quiz
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700 text-lg px-8 py-3">
                Chat With Our Team
                <MessageCircle className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Term Countdown */}
      <div id="countdown">
        <TermCountdown />
      </div>

      {/* Start Anytime */}
      <div id="start-anytime">
        <StartAnytime />
      </div>

      {/* Four Pole Pathways */}
      <div id="pathways">
        <FourPolePathways />
      </div>

      {/* Interactive Quiz Section */}
      <section id="quiz" className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="cyber-card p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-fuchsia-400 to-purple-600"></div>
            
            <Sparkles className="w-16 h-16 text-fuchsia-400 mx-auto mb-6 neon-glow" />
            
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Not Sure Which <span className="gradient-text">Fits You?</span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Take our fun 1-minute quiz and discover your perfect pole pathway. 
              We'll match you with the ideal intro offer and class recommendations!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <StyleQuizModal />
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                Skip Quiz - Show Me Everything
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Courses vs Casual Comparison */}
      <div id="comparison">
        <CoursesVsCasualComparison />
      </div>

      {/* Intro Offer Blocks */}
      <div id="offers">
        <IntroOfferBlocks />
      </div>

      {/* Fast Track Program */}
      <div id="fast-track">
        <FastTrackProgram />
      </div>

      {/* Social Proof/Testimonials */}
      <div id="testimonials">
        <SocialProofCarousel />
      </div>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-fuchsia-600 via-purple-600 to-cyan-600 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-cyan-300/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <Sparkles className="w-16 h-16 text-white mx-auto mb-6 pulse-neon" />
          
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Begin Your Pole Journey?
          </h2>
          
          <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            You belong here. Whether you're seeking strength, community, artistry, or pure fun - 
            your perfect pole pathway is waiting. Take the first step today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="neon-button text-black font-bold text-lg px-8 py-3">
              Book My First Class
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-3">
              Chat With Us
              <MessageCircle className="w-5 h-5 ml-2" />
            </Button>
          </div>
          
          <p className="text-purple-200 text-sm mt-6">
            Questions? Our friendly team is here to help you find your perfect starting point.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FirstTimers;
