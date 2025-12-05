import ProgramPageTemplate from '@/components/templates/ProgramPageTemplate';

const WorkshopsPage = () => {
  return (
    <ProgramPageTemplate
      badge="Workshops"
      title="Skill Up Fast"
      subtitle="Intensive sessions on specialty topics"
      heroImage="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      description="Deep-dive into specific skills with our intensive workshops. From flexibility to handstands to exotic pole, our workshops help you master specialty areas quickly."
      duration="2-4 hours"
      classSize="Max 12 students"
      frequency="Monthly specials"
      level="Varies by workshop"
      highlights={[
        "Focused skill development",
        "Guest instructor features",
        "Specialty topics",
        "Intensive learning format",
        "Certificate of completion",
        "Networking opportunities"
      ]}
      curriculum={[
        { week: 1, title: "Flexibility Workshops", description: "Front splits, middle splits, backbends and more." },
        { week: 2, title: "Style Workshops", description: "Exotic, contemporary, Russian, and other styles." },
        { week: 3, title: "Trick Workshops", description: "Focus on specific tricks like handstands or deadlifts." },
        { week: 4, title: "Performance Workshops", description: "Stage presence, choreography, and artistry." }
      ]}
      whatToBring={["Workshop-specific requirements (communicated in advance)", "Water", "Notebook"]}
      faqs={[
        { question: "How often do workshops run?", answer: "We run 2-4 workshops per month on various topics." },
        { question: "Do I need experience?", answer: "Each workshop has level requirements listed in the description." },
        { question: "Can I request a workshop topic?", answer: "Yes! We love hearing what skills our community wants to develop." }
      ]}
      price="From $50/workshop"
      ctaText="View Upcoming Workshops"
    />
  );
};

export default WorkshopsPage;
