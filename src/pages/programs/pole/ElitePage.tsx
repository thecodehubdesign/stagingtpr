import ProgramPageTemplate from '@/components/templates/ProgramPageTemplate';

const PoleElitePage = () => {
  return (
    <ProgramPageTemplate
      badge="Elite Program"
      title="Join the Elite"
      subtitle="Competition-level training for serious athletes"
      heroImage="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      description="Our elite program is designed for pole athletes pursuing competition, performance, or professional careers. Work with champion instructors, receive personalized coaching, and push the boundaries of what's possible on the pole."
      duration="Ongoing Program"
      classSize="Max 4 students"
      frequency="3+ sessions per week"
      level="Elite / Pre-Professional"
      highlights={[
        "Train with competition champions and judges",
        "Personalized coaching and technique analysis",
        "Video review and feedback sessions",
        "Competition preparation and strategy",
        "Performance opportunities at major events",
        "Networking with the pole community"
      ]}
      curriculum={[
        { week: 1, title: "Assessment & Goal Setting", description: "Comprehensive skill assessment, competition goals, and personalized training plan development." },
        { week: 2, title: "Signature Moves", description: "Develop your unique signature tricks and combinations that set you apart in competition." },
        { week: 3, title: "Artistry & Expression", description: "Deep dive into musicality, emotional expression, and performance quality scoring." },
        { week: 4, title: "Technical Excellence", description: "Focus on execution, lines, and technical perfection for maximum scoring potential." },
        { week: 5, title: "Competition Simulation", description: "Practice performing under competition conditions with mock judging and feedback." },
        { week: 6, title: "Routine Development", description: "Work on competition or showcase routines with instructor guidance and choreography support." },
        { week: 7, title: "Mental Preparation", description: "Competition psychology, pre-performance routines, and handling pressure." },
        { week: 8, title: "Performance Review", description: "Video analysis, scoring breakdown, and planning for upcoming competitions." }
      ]}
      whatToBring={[
        "Competition-quality pole wear",
        "Multiple grip aids",
        "Video recording equipment",
        "Competition music (prepared)",
        "Notebook for feedback"
      ]}
      prerequisites={[
        "Mastery of advanced curriculum",
        "Strong inversion and dynamic skills",
        "Previous performance or competition experience",
        "Instructor recommendation required",
        "Commitment to regular training schedule"
      ]}
      faqs={[
        { question: "How do I get accepted into the elite program?", answer: "Elite program entry requires an audition or instructor recommendation. Contact us to schedule an assessment." },
        { question: "What competitions can I enter?", answer: "We prepare students for local, national, and international competitions including PSO, Miss Pole Dance, and more." },
        { question: "Is there one-on-one coaching?", answer: "Yes! Elite members receive personalized coaching sessions in addition to group training." },
        { question: "What about injuries?", answer: "We work closely with sports physiotherapists and prioritize injury prevention. Recovery and conditioning are part of the program." },
        { question: "Can this become a career?", answer: "Many of our elite graduates have gone on to perform professionally, teach, and compete at the highest levels." }
      ]}
      price="Custom pricing"
      ctaText="Apply for Elite Program"
    />
  );
};

export default PoleElitePage;
