import ProgramPageTemplate from '@/components/templates/ProgramPageTemplate';

const AerialSilksIntermediatePage = () => {
  return (
    <ProgramPageTemplate
      badge="Intermediate Aerial Silks"
      title="Weave Your Story"
      subtitle="Complex wraps, drops, and flowing sequences"
      heroImage="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      description="Advance your silks journey with complex wraps, controlled drops, and flowing combinations. Learn to tell stories through movement and create sequences that showcase your growing skills."
      duration="8 Weeks"
      classSize="Max 6 students"
      frequency="1-2x per week"
      level="Some Experience Required"
      highlights={[
        "Learn complex wrap sequences",
        "Introduction to drops and rolls",
        "Advanced climbing techniques",
        "Create flowing combinations",
        "Build performance-ready skills",
        "Develop personal style"
      ]}
      curriculum={[
        { week: 1, title: "Skills Review", description: "Assess current skills and set intermediate goals." },
        { week: 2, title: "Advanced Wraps", description: "Complex wrapping sequences for stunning poses." },
        { week: 3, title: "Drops Introduction", description: "Safe progression into your first silks drops." },
        { week: 4, title: "Dynamic Movement", description: "Swinging, rolling, and dynamic transitions." },
        { week: 5, title: "Hip Keys & Knots", description: "Advanced rigging techniques on your body." },
        { week: 6, title: "Flexibility Integration", description: "Incorporate splits and backbends in the air." },
        { week: 7, title: "Choreography", description: "Build a flowing routine with music." },
        { week: 8, title: "Performance", description: "Showcase your intermediate skills!" }
      ]}
      whatToBring={[
        "Fitted silks wear",
        "Grip aids",
        "Water bottle",
        "Knee and ankle protection (optional)"
      ]}
      prerequisites={[
        "Completed beginner aerial silks",
        "Confident climbing and foot locks",
        "Can hold basic wraps",
        "Good conditioning base"
      ]}
      faqs={[
        { question: "Will I learn drops?", answer: "Yes! We safely introduce drops with proper progressions." },
        { question: "How high will I be?", answer: "Intermediate students work at increased heights as skills develop." },
        { question: "Do I need to be flexible?", answer: "Flexibility enhances your work but isn't required. You'll improve as you progress." }
      ]}
      price="From $250/term"
      ctaText="Book Your Assessment"
    />
  );
};

export default AerialSilksIntermediatePage;
