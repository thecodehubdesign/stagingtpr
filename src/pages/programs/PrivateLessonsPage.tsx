import ProgramPageTemplate from '@/components/templates/ProgramPageTemplate';

const PrivateLessonsPage = () => {
  return (
    <ProgramPageTemplate
      badge="Private Lessons"
      title="Personalized Training"
      subtitle="One-on-one instruction tailored to your goals"
      heroImage="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      description="Get undivided attention from our expert instructors. Private lessons are perfect for accelerated learning, working on specific skills, or preparing for performances and competitions."
      duration="60-90 minutes"
      classSize="1-on-1"
      frequency="As scheduled"
      level="All Levels"
      highlights={[
        "Completely customized curriculum",
        "Accelerated skill development",
        "Work on specific goals",
        "Flexible scheduling",
        "Perfect for competition prep",
        "Address individual challenges"
      ]}
      curriculum={[
        { week: 1, title: "Assessment", description: "Evaluate your current skills and discuss your goals." },
        { week: 2, title: "Custom Plan", description: "Your instructor creates a personalized training plan." },
        { week: 3, title: "Focused Training", description: "Work intensively on your target skills." },
        { week: 4, title: "Progress Review", description: "Assess improvement and plan next steps." }
      ]}
      whatToBring={["Your goals list", "Appropriate clothing", "Water", "Questions!"]}
      faqs={[
        { question: "How do I book a private?", answer: "Contact us to schedule based on instructor availability." },
        { question: "Can I bring a friend?", answer: "Yes! Semi-private lessons for 2 people are available at a reduced per-person rate." },
        { question: "Which instructors offer privates?", answer: "Most of our instructors offer private lessons. Let us know your goals and we'll match you." }
      ]}
      price="From $95/hour"
      ctaText="Book a Private"
    />
  );
};

export default PrivateLessonsPage;
