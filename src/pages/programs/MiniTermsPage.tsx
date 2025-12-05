import ProgramPageTemplate from '@/components/templates/ProgramPageTemplate';

const MiniTermsPage = () => {
  return (
    <ProgramPageTemplate
      badge="Mini Terms"
      title="Short & Sweet"
      subtitle="4-week intensive programs to jumpstart your journey"
      heroImage="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      description="Not ready for a full 8-week commitment? Our mini terms give you a taste of pole and aerial in just 4 weeks. Perfect for trying before committing or fitting training into a busy schedule."
      duration="4 Weeks"
      classSize="Max 8 students"
      frequency="1x per week"
      level="All Levels"
      highlights={[
        "Try before you commit",
        "Condensed learning experience",
        "Perfect for busy schedules",
        "All skill levels available",
        "Great value introduction",
        "Seamless transition to full terms"
      ]}
      curriculum={[
        { week: 1, title: "Foundations", description: "Learn the basics and get comfortable with the apparatus." },
        { week: 2, title: "Building Skills", description: "Add new moves and build on week one's foundation." },
        { week: 3, title: "Combinations", description: "Start connecting moves together." },
        { week: 4, title: "Mini Showcase", description: "Celebrate your progress with a mini performance!" }
      ]}
      whatToBring={["Appropriate workout wear", "Water bottle", "Enthusiasm!"]}
      faqs={[
        { question: "When do mini terms run?", answer: "Mini terms run throughout the year between main terms. Check our schedule for upcoming dates." },
        { question: "Can I continue after a mini term?", answer: "Absolutely! Most mini term students continue into full term programs." },
        { question: "What levels are offered?", answer: "We offer beginner mini terms in pole, aerial hoop, and silks." }
      ]}
      price="From $120"
      ctaText="View Mini Terms"
    />
  );
};

export default MiniTermsPage;
