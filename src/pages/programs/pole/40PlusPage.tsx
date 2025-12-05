import ProgramPageTemplate from '@/components/templates/ProgramPageTemplate';

const Pole40PlusPage = () => {
  return (
    <ProgramPageTemplate
      badge="40+ & Fabulous"
      title="It's Your Time to Shine"
      subtitle="Strength, confidence, and community for adults 40+"
      heroImage="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      description="You're never too old to start something new! Our 40+ program is designed specifically for adults who want to discover pole fitness in a welcoming, age-appropriate environment. Focus on building strength, improving mobility, and having fun with like-minded women."
      duration="8 Weeks"
      classSize="Max 6 students"
      frequency="1-2x per week"
      level="All Levels Welcome"
      highlights={[
        "Age-appropriate progressions and modifications",
        "Focus on joint health and injury prevention",
        "Build functional strength and flexibility",
        "Supportive community of peers",
        "Boost confidence and body positivity",
        "Fun, judgment-free atmosphere"
      ]}
      curriculum={[
        { week: 1, title: "Welcome & Warm-Up", description: "Gentle introduction to pole fitness. Focus on proper warm-up techniques and joint-friendly movements." },
        { week: 2, title: "Foundation Building", description: "Learn your first spins with modifications available. Focus on grip strength and body awareness." },
        { week: 3, title: "Strength & Stability", description: "Build core and upper body strength with pole-assisted exercises. Learn stabilizing techniques." },
        { week: 4, title: "Graceful Movement", description: "Introduction to floor work and transitions. Focus on elegance and flow." },
        { week: 5, title: "Building Confidence", description: "More spins and combinations. Celebrate your progress and push comfort zones gently." },
        { week: 6, title: "Flexibility Focus", description: "Improve mobility and flexibility safely. Stretching techniques for mature bodies." },
        { week: 7, title: "Putting It Together", description: "Create a mini routine. Express yourself through movement." },
        { week: 8, title: "Celebration Class", description: "Share your progress with classmates. Plan your continued pole journey!" }
      ]}
      whatToBring={[
        "Comfortable workout clothes",
        "Supportive sports bra",
        "Water bottle",
        "Any joint supports you use",
        "Positive attitude!"
      ]}
      faqs={[
        { question: "Am I too old to start pole?", answer: "Absolutely not! We have students starting in their 50s, 60s, and beyond. It's never too late to try something new." },
        { question: "What if I have health conditions?", answer: "Please let us know about any health concerns. Our instructors are trained to provide modifications and work around limitations." },
        { question: "Will it hurt my joints?", answer: "We focus on joint-friendly techniques and proper warm-up. Many students find pole actually improves their joint health and mobility!" },
        { question: "Is this class only for women?", answer: "While our marketing focuses on women, all adults 40+ are welcome regardless of gender identity." },
        { question: "Will I be with younger students?", answer: "No, this class is exclusively for adults 40+, so you'll be with peers who share your life stage." },
        { question: "What if I can't do everything?", answer: "Every exercise has modifications. Success looks different for everyone, and we celebrate all progress!" }
      ]}
      price="From $200/term"
      ctaText="Join Our 40+ Community"
    />
  );
};

export default Pole40PlusPage;
