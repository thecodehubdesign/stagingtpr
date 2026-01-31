import ProgramPageTemplate from '@/components/templates/ProgramPageTemplate';

const PoleBeginnerPage = () => {
  return (
    <ProgramPageTemplate
      badge="Beginner Course"
      title="Pole Beginner"
      subtitle="Build strength, confidence, and grace from day one"
      heroImage="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      description="Our beginner pole course is designed for complete newcomers. No experience, strength, or flexibility required - just an open mind and willingness to try something new. You'll learn foundational spins, basic climbs, and elegant floor work in a supportive, judgment-free environment."
      duration="8 Weeks"
      classSize="Max 8 students"
      frequency="1-2x per week"
      level="Complete Beginner"
      highlights={[
        "Learn 10+ foundational pole spins and tricks",
        "Build upper body and core strength naturally",
        "Master proper grip techniques for safety",
        "Develop confidence in your body and movement",
        "Connect with a supportive community of beginners",
        "Progress at your own pace with personalized attention"
      ]}
      curriculum={[
        { week: 1, title: "Introduction & Fundamentals", description: "Meet your instructors, learn studio etiquette, and master your first basic spin. We'll focus on grip strength and building confidence on the pole." },
        { week: 2, title: "Building Your Foundation", description: "Learn 2-3 beginner spins including the fireman and front hook spin. Introduction to floor work and transitions." },
        { week: 3, title: "Strength & Technique", description: "Focus on proper form and body engagement. Learn the chair spin and back hook spin while building core strength." },
        { week: 4, title: "Climbing Basics", description: "Introduction to climbing techniques. Learn the basic climb and seated position on the pole." },
        { week: 5, title: "Flow & Transitions", description: "Start connecting moves together. Learn how to create smooth transitions between spins and floor work." },
        { week: 6, title: "Inversions Introduction", description: "Safely learn your first inverted position with proper spotting. Build the strength and technique for upside-down moves." },
        { week: 7, title: "Choreography Basics", description: "Learn to put moves together into a mini routine. Express your personal style through movement." },
        { week: 8, title: "Showcase & Celebration", description: "Perform your first routine for fellow students. Celebrate your progress and plan your next steps!" }
      ]}
      whatToBring={[
        "Comfortable workout clothes (shorts recommended)",
        "Water bottle",
        "Small towel",
        "Positive attitude!",
        "No lotions or oils on skin"
      ]}
      faqs={[
        { question: "Do I need any prior experience?", answer: "Absolutely not! Our beginner course is designed for complete newcomers. We'll teach you everything from scratch in a supportive environment." },
        { question: "What if I'm not strong or flexible?", answer: "Perfect! You'll build strength and flexibility as you progress. Most of our students start with zero fitness background and see amazing transformations." },
        { question: "What should I wear?", answer: "Shorts and a fitted top work best as bare skin helps you grip the pole. We recommend avoiding long pants and slippery fabrics." },
        { question: "Will I be able to do tricks right away?", answer: "You'll learn your first spin in week one! By the end of 8 weeks, you'll have mastered 10+ moves and be ready for the next level." },
        { question: "Is pole dancing appropriate for all body types?", answer: "Absolutely! Pole is for EVERY body. Our instructors are trained to modify moves for different body types and abilities." },
        { question: "Can I join mid-term?", answer: "We recommend starting at the beginning of a term for the best experience, but reach out to us and we can discuss options." }
      ]}
      availableStudios={['mitcham', 'eltham', 'cbd', 'kilsyth', 'highett', 'narre-warren', 'rowville']}
      price="From $220/term"
      ctaText="Book Your Free Trial"
    />
  );
};

export default PoleBeginnerPage;
