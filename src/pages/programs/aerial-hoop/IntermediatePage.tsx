import ProgramPageTemplate from '@/components/templates/ProgramPageTemplate';

const AerialHoopIntermediatePage = () => {
  return (
    <ProgramPageTemplate
      badge="Intermediate Aerial Hoop"
      title="Soar Higher"
      subtitle="Advanced poses, spins, and dynamic movement"
      heroImage="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      description="Take your aerial hoop skills to new heights! Learn advanced poses, dynamic spins, and flowing sequences. This course builds on your foundational skills to create truly impressive aerial artistry."
      duration="8 Weeks"
      classSize="Max 6 students"
      frequency="1-2x per week"
      level="Some Experience Required"
      highlights={[
        "Master advanced poses and balances",
        "Learn dynamic spinning techniques",
        "Develop seamless transitions",
        "Build performance-ready sequences",
        "Increase strength and flexibility",
        "Explore your personal style"
      ]}
      curriculum={[
        { week: 1, title: "Skills Assessment", description: "Review foundations and set intermediate goals. Introduction to advanced mounts." },
        { week: 2, title: "Advanced Poses", description: "Learn bird's nest, amazon, and advanced single point poses." },
        { week: 3, title: "Top Bar Work", description: "Poses and moves on the top bar of the hoop. Build confidence at height." },
        { week: 4, title: "Dynamic Spins", description: "Controlled spinning sequences and momentum management." },
        { week: 5, title: "Drops & Rolls", description: "Safe introduction to drops and rolling movements." },
        { week: 6, title: "Flexibility Poses", description: "Incorporate splits and backbends into your aerial work." },
        { week: 7, title: "Sequence Building", description: "Create flowing combinations that showcase your skills." },
        { week: 8, title: "Performance Showcase", description: "Perform your intermediate routine and plan your advanced journey!" }
      ]}
      whatToBring={[
        "Fitted aerial wear",
        "Grip gloves or wrist supports",
        "Water bottle",
        "Knee and elbow protection (optional)"
      ]}
      prerequisites={[
        "Completed beginner aerial hoop course",
        "Confident with basic mounts and sits",
        "Can hold poses for extended periods",
        "Basic spinning experience"
      ]}
      faqs={[
        { question: "How do I know if I'm ready for intermediate?", answer: "If you can confidently mount, perform basic sits, and have completed our beginner course, you're ready!" },
        { question: "Will I learn drops?", answer: "Yes! We introduce drops safely with proper progressions and spotting." },
        { question: "Is spinning hard?", answer: "Spinning takes practice! We teach you how to manage momentum and avoid dizziness." },
        { question: "Do I need to be flexible?", answer: "Flexibility helps but isn't required. You'll build flexibility as part of the program." }
      ]}
      price="From $250/term"
      ctaText="Book Your Assessment"
    />
  );
};

export default AerialHoopIntermediatePage;
