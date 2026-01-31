import ProgramPageTemplate from '@/components/templates/ProgramPageTemplate';

const PoleAdvancedPage = () => {
  return (
    <ProgramPageTemplate
      badge="Advanced Course"
      title="Pole Advanced"
      subtitle="Push your limits and perfect your craft"
      heroImage="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      description="For experienced pole dancers ready to tackle the most challenging moves. Master complex combinations, aerial tricks, and performance-ready routines. This course demands dedication and rewards you with extraordinary skills."
      duration="8 Weeks"
      classSize="Max 6 students"
      frequency="2-3x per week recommended"
      level="Advanced"
      highlights={[
        "Master complex aerial inversions and drops",
        "Learn advanced combinations and transitions",
        "Develop competition-level technique",
        "Explore specialty moves and personal style",
        "Build performance-ready routines",
        "Prepare for showcases and competitions"
      ]}
      curriculum={[
        { week: 1, title: "Advanced Assessment", description: "Evaluate current skills and set ambitious goals. Introduction to advanced trick progressions." },
        { week: 2, title: "Complex Inversions", description: "Master janeiro, aysha, and iron-x progressions. Focus on strength and control." },
        { week: 3, title: "Drops & Dynamics", description: "Learn controlled drops and dynamic movement. Safety-first approach to impressive tricks." },
        { week: 4, title: "Spin Pole Mastery", description: "Advanced spin pole techniques and combinations. Momentum control and flow." },
        { week: 5, title: "Flexibility Integration", description: "Incorporate flexibility into advanced moves. Splits, backbends, and contortion elements." },
        { week: 6, title: "Specialty Styles", description: "Explore exotic, contemporary, or athletic pole styles. Find your unique expression." },
        { week: 7, title: "Competition Prep", description: "Learn about competition formats, judging criteria, and presentation skills." },
        { week: 8, title: "Final Showcase", description: "Perform an advanced routine showcasing your growth. Celebrate your achievements!" }
      ]}
      whatToBring={[
        "Pole wear (shorts, crop top)",
        "Grip aid",
        "Knee pads",
        "Crash mat (provided)",
        "Video recording device for progress tracking"
      ]}
      prerequisites={[
        "Completed intermediate course",
        "Confident inversions (crucifix, butterfly)",
        "Strong climbing and holds",
        "Basic spin pole experience",
        "Instructor approval recommended"
      ]}
      faqs={[
        { question: "How strong do I need to be?", answer: "You should be able to hold inverted positions confidently and have good upper body and core strength. We'll continue building strength in class." },
        { question: "Are drops safe?", answer: "Yes, when taught properly! We use progressive training, crash mats, and spotting to ensure safe learning of all dynamic moves." },
        { question: "Can I prepare for competitions here?", answer: "Absolutely! Our advanced course includes competition preparation, and we have instructors who are experienced competitors and judges." },
        { question: "What if I plateau?", answer: "Plateaus are normal! We provide personalized feedback and alternative progressions to help you break through barriers." },
        { question: "Is there a level beyond advanced?", answer: "Yes! Our Elite program is for those pursuing professional or competition-level pole." }
      ]}
      availableStudios={['mitcham', 'eltham', 'cbd', 'kilsyth', 'highett']}
      price="From $260/term"
      ctaText="Book Your Assessment"
    />
  );
};

export default PoleAdvancedPage;
