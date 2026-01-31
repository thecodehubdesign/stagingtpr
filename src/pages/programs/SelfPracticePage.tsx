import ProgramPageTemplate from '@/components/templates/ProgramPageTemplate';

const SelfPracticePage = () => {
  return (
    <ProgramPageTemplate
      badge="Self Practice"
      title="Self Practice"
      subtitle="Studio time to hone your skills"
      heroImage="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      description="Book studio time to practice what you've learned in class. Self practice sessions give you space to drill moves, work on routines, and build muscle memory."
      duration="1-2 hours"
      classSize="Shared studio space"
      frequency="As available"
      level="Current Students Only"
      highlights={[
        "Affordable studio access",
        "Practice at your own pace",
        "Work on routines",
        "Build muscle memory",
        "Flexible booking",
        "Supervised environment"
      ]}
      curriculum={[
        { week: 1, title: "Book Your Slot", description: "Check availability and reserve your practice time." },
        { week: 2, title: "Warm Up Properly", description: "Always warm up before practicing - we provide guidance." },
        { week: 3, title: "Focused Practice", description: "Work on specific skills from your classes." },
        { week: 4, title: "Cool Down", description: "Stretch and recover after your session." }
      ]}
      whatToBring={["Your own music/speaker", "Water", "Practice goals"]}
      faqs={[
        { question: "Who can book self practice?", answer: "Self practice is available to current term students only." },
        { question: "Is it supervised?", answer: "A staff member is always on site, but this is not an instructed session." },
        { question: "Can I practice with a friend?", answer: "Yes! Book together and split the cost." }
      ]}
      availableStudios={['mitcham', 'eltham', 'cbd', 'kilsyth', 'highett', 'narre-warren', 'rowville']}
      price="$15/hour"
      ctaText="Book Practice Time"
    />
  );
};

export default SelfPracticePage;
