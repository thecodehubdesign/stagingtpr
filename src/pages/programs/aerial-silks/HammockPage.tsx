import ProgramPageTemplate from '@/components/templates/ProgramPageTemplate';

const HammockPage = () => {
  return (
    <ProgramPageTemplate
      badge="Aerial Hammock"
      title="Float and Flow"
      subtitle="Where aerial yoga meets circus arts"
      heroImage="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      description="Aerial hammock combines the flowing beauty of aerial silks with the supportive comfort of a fabric sling. Perfect for those who want aerial arts with a gentler learning curve, or as a complement to your yoga practice."
      duration="8 Weeks"
      classSize="Max 8 students"
      frequency="1-2x per week"
      level="All Levels Welcome"
      highlights={[
        "Accessible entry to aerial arts",
        "Supportive fabric for confidence",
        "Combines fitness and relaxation",
        "Beautiful poses and transitions",
        "Complements yoga practice",
        "Gentle on the body"
      ]}
      curriculum={[
        { week: 1, title: "Introduction to Hammock", description: "Learn to use the hammock safely. Basic sits and supported positions." },
        { week: 2, title: "Inversions & Stretches", description: "Use the hammock for supported inversions and deep stretches." },
        { week: 3, title: "Poses & Shapes", description: "Create beautiful shapes within the hammock cocoon." },
        { week: 4, title: "Wraps & Holds", description: "Learn to wrap the hammock for different positions." },
        { week: 5, title: "Flow Sequences", description: "Connect poses into flowing, dance-like sequences." },
        { week: 6, title: "Strength Building", description: "Use the hammock for aerial conditioning and strength." },
        { week: 7, title: "Acrobatic Elements", description: "Introduction to more dynamic hammock moves." },
        { week: 8, title: "Flow Performance", description: "Perform a beautiful hammock sequence to music." }
      ]}
      whatToBring={[
        "Fitted, comfortable clothing",
        "No jewelry or zippers",
        "Water bottle",
        "Open mind!"
      ]}
      faqs={[
        { question: "Is hammock easier than silks?", answer: "Many find hammock more accessible as the fabric provides more support. It's a great entry point to aerial arts." },
        { question: "Can I do hammock if I do yoga?", answer: "Absolutely! Hammock beautifully complements a yoga practice and many poses translate." },
        { question: "Is it relaxing or a workout?", answer: "Both! Hammock can be deeply restorative or intensely physical depending on what you're working on." },
        { question: "Do I need experience?", answer: "No! Hammock is perfect for complete beginners and experienced aerialists alike." }
      ]}
      price="From $220/term"
      ctaText="Book Your Free Trial"
    />
  );
};

export default HammockPage;
