import ProgramPageTemplate from '@/components/templates/ProgramPageTemplate';

const PoleIntermediatePage = () => {
  return (
    <ProgramPageTemplate
      badge="Intermediate Course"
      title="Elevate Your Skills"
      subtitle="Take your pole journey to the next level"
      heroImage="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      description="Ready to level up? Our intermediate course builds on your foundational skills with more challenging spins, inversions, and combinations. You'll develop the strength and technique needed for advanced moves while refining your personal style."
      duration="8 Weeks"
      classSize="Max 8 students"
      frequency="2x per week recommended"
      level="Some Experience Required"
      highlights={[
        "Master advanced spins and combinations",
        "Develop confident inversions and holds",
        "Learn dynamic transitions and flow",
        "Build strength for advanced tricks",
        "Explore different pole dance styles",
        "Create longer choreographed sequences"
      ]}
      curriculum={[
        { week: 1, title: "Assessment & Advancement", description: "Review foundational skills and set goals for the term. Introduction to intermediate-level spins." },
        { week: 2, title: "Advanced Spins", description: "Learn complex spinning combinations including attitude spin, carousel, and extended variations." },
        { week: 3, title: "Inversion Confidence", description: "Build strength and confidence in inverted positions. Learn crucifix, scorpio prep, and butterfly." },
        { week: 4, title: "Climbing & Holds", description: "Advanced climbing techniques and static holds. Build endurance for longer tricks." },
        { week: 5, title: "Dynamic Movement", description: "Learn momentum-based moves and dynamic transitions. Introduction to spin pole techniques." },
        { week: 6, title: "Combo Building", description: "Connect advanced moves into flowing combinations. Develop your personal style." },
        { week: 7, title: "Performance Skills", description: "Work on musicality, expression, and stage presence. Create a personal routine." },
        { week: 8, title: "Showcase Performance", description: "Perform your intermediate routine and celebrate your growth. Plan your advanced journey!" }
      ]}
      whatToBring={[
        "Pole shorts and fitted top",
        "Grip aid (optional - available for purchase)",
        "Water bottle",
        "Knee pads (optional)",
        "Leg warmers for warm-up"
      ]}
      prerequisites={[
        "Completed beginner course or equivalent",
        "Confident with basic spins (fireman, chair, back hook)",
        "Can perform a basic climb",
        "Comfortable with floor work"
      ]}
      faqs={[
        { question: "How do I know if I'm ready for intermediate?", answer: "If you can confidently perform basic spins, climb the pole, and hold a seated position, you're ready! Unsure? Book a skills assessment with us." },
        { question: "Will I learn inversions?", answer: "Yes! Intermediate includes safe progression into inversions with proper spotting and conditioning exercises." },
        { question: "How often should I attend?", answer: "We recommend 2 classes per week for optimal progress. You can also supplement with open practice sessions." },
        { question: "Is there homework?", answer: "We provide conditioning exercises to practice at home, but in-class time is where the magic happens!" },
        { question: "Can I try spin pole?", answer: "Yes! You'll be introduced to spin pole techniques as part of the intermediate curriculum." }
      ]}
      price="From $240/term"
      ctaText="Book Your Free Trial"
    />
  );
};

export default PoleIntermediatePage;
