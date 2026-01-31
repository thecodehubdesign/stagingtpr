import ProgramPageTemplate from '@/components/templates/ProgramPageTemplate';

const AerialHoopAdvancedPage = () => {
  return (
    <ProgramPageTemplate
      badge="Advanced Aerial Hoop"
      title="Aerial Hoop Advanced"
      subtitle="Master complex skills and performance artistry"
      heroImage="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      description="For experienced aerialists ready to master the most challenging skills. Learn complex drops, dynamic sequences, and performance-ready routines that will leave audiences breathless."
      duration="8 Weeks"
      classSize="Max 4 students"
      frequency="2x per week recommended"
      level="Advanced"
      highlights={[
        "Master complex drops and catches",
        "Advanced spinning combinations",
        "Performance choreography",
        "Competition preparation",
        "Unique signature moves",
        "Artistic expression at height"
      ]}
      curriculum={[
        { week: 1, title: "Advanced Assessment", description: "Evaluate skills and create personalized training goals." },
        { week: 2, title: "Complex Drops", description: "Learn advanced drops with proper technique and safety." },
        { week: 3, title: "Dynamic Sequences", description: "High-energy combinations with multiple elements." },
        { week: 4, title: "Contortion Integration", description: "Incorporate advanced flexibility into aerial work." },
        { week: 5, title: "Spinning Mastery", description: "Complex spinning sequences and controlled momentum." },
        { week: 6, title: "Signature Development", description: "Create unique moves that define your style." },
        { week: 7, title: "Performance Polish", description: "Refine routines for competition or showcase performance." },
        { week: 8, title: "Final Performance", description: "Showcase your advanced skills and celebrate your journey!" }
      ]}
      whatToBring={[
        "Performance-quality aerial wear",
        "Grip aids",
        "Video recording device",
        "Competition music (if applicable)"
      ]}
      prerequisites={[
        "Completed intermediate aerial hoop",
        "Strong in advanced poses",
        "Comfortable with drops",
        "Instructor recommendation"
      ]}
      faqs={[
        { question: "Can I compete after this course?", answer: "Yes! Our advanced course prepares you for aerial competitions and performances." },
        { question: "How often should I train?", answer: "We recommend 2-3 sessions per week for optimal progress at advanced level." },
        { question: "What makes advanced different from intermediate?", answer: "Advanced focuses on performance quality, complex combinations, and competition-level skills." }
      ]}
      availableStudios={['mitcham', 'eltham']}
      price="From $270/term"
      ctaText="Apply for Advanced"
    />
  );
};

export default AerialHoopAdvancedPage;
