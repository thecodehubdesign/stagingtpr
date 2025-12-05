import ProgramPageTemplate from '@/components/templates/ProgramPageTemplate';

const CasualClassesPage = () => {
  return (
    <ProgramPageTemplate
      badge="Casual Classes"
      title="Drop In, Have Fun"
      subtitle="No commitment, pay-as-you-go flexibility"
      heroImage="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      description="Perfect for those who want flexibility! Drop into any class that suits your schedule and skill level. Pay per session with no term commitment required."
      duration="Single Sessions"
      classSize="Varies by class"
      frequency="As you choose"
      level="All Levels"
      highlights={[
        "No commitment required",
        "Pay per session",
        "Choose classes that fit your schedule",
        "Try different styles and instructors",
        "Perfect for busy lifestyles",
        "Available at all locations"
      ]}
      curriculum={[
        { week: 1, title: "Choose Your Class", description: "Browse our timetable and book any class that suits your level and interests." },
        { week: 2, title: "Attend & Enjoy", description: "Show up, learn, and have fun - no pressure to continue if it's not for you." },
        { week: 3, title: "Track Progress", description: "Keep attending casually and watch your skills grow over time." },
        { week: 4, title: "Consider Terms", description: "When you're ready, term courses offer structured progression and savings." }
      ]}
      whatToBring={["Pole/aerial appropriate clothing", "Water bottle", "Positive attitude"]}
      faqs={[
        { question: "How do I book a casual class?", answer: "Book online through our website or app. Select any class marked as available for casual attendance." },
        { question: "Is it more expensive than term?", answer: "Casual classes are $35 per session. Terms offer better value for regular attendees." },
        { question: "Can I attend any level?", answer: "You should attend classes appropriate to your skill level. Contact us if unsure." }
      ]}
      price="$35 per class"
      ctaText="View Timetable"
    />
  );
};

export default CasualClassesPage;
