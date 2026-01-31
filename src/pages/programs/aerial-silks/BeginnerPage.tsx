import ProgramPageTemplate from '@/components/templates/ProgramPageTemplate';

const AerialSilksBeginnerPage = () => {
  return (
    <ProgramPageTemplate
      badge="Beginner Aerial Silks"
      title="Aerial Silks Beginner"
      subtitle="Climb, wrap, and create beautiful shapes"
      heroImage="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      description="Aerial silks is a stunning circus art where you climb, wrap, and perform acrobatic moves on flowing fabric. Our beginner course builds the strength and technique you need to create beautiful aerial artistry."
      duration="8 Weeks"
      classSize="Max 6 students"
      frequency="1-2x per week"
      level="Complete Beginner"
      highlights={[
        "Learn to climb and descend safely",
        "Master basic wraps and foot locks",
        "Build incredible upper body strength",
        "Create beautiful poses in the silks",
        "Develop aerial body awareness",
        "Express yourself through fabric"
      ]}
      curriculum={[
        { week: 1, title: "Introduction to Silks", description: "Learn about the apparatus, safety, and basic conditioning. Your first time touching the silks!" },
        { week: 2, title: "Climbing Basics", description: "Learn the french climb and proper technique for ascending the silks." },
        { week: 3, title: "Foot Locks", description: "Master single and double foot locks - the foundation of silks work." },
        { week: 4, title: "Basic Wraps", description: "Learn your first wraps and poses. Create shapes with the fabric." },
        { week: 5, title: "Descents", description: "Safe and controlled ways to come down from height." },
        { week: 6, title: "Poses & Shapes", description: "More poses and combinations. Build your aerial vocabulary." },
        { week: 7, title: "Sequence Building", description: "Connect moves together into flowing sequences." },
        { week: 8, title: "Showcase Performance", description: "Perform a beginner routine and celebrate your progress!" }
      ]}
      whatToBring={[
        "Fitted clothing covering arms and legs",
        "No jewelry or zippers",
        "Water bottle",
        "Hair tied back securely",
        "Rosin or grip aid (optional)"
      ]}
      faqs={[
        { question: "Do I need to be strong?", answer: "You'll build strength as you progress! Silks is one of the best ways to develop upper body strength naturally." },
        { question: "Why do I need to cover my skin?", answer: "Covered skin protects you from fabric burn and helps you grip the silks better." },
        { question: "Is it scary being high up?", answer: "We progress gradually, starting low and building height as you gain confidence." },
        { question: "What's the difference between silks and hoop?", answer: "Silks involves wrapping and climbing fabric, while hoop focuses on poses within a metal ring. Both are beautiful!" },
        { question: "Will I get fabric burn?", answer: "Some friction is normal at first, but proper technique and clothing minimize this." }
      ]}
      availableStudios={['mitcham', 'eltham', 'cbd']}
      price="From $230/term"
      ctaText="Book Your Free Trial"
    />
  );
};

export default AerialSilksBeginnerPage;
