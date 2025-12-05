import ProgramPageTemplate from '@/components/templates/ProgramPageTemplate';

const PoleTeensPage = () => {
  return (
    <ProgramPageTemplate
      badge="Teen Pole (Ages 13-17)"
      title="Empowering the Next Generation"
      subtitle="Build strength, confidence, and self-expression"
      heroImage="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      description="Our teen pole program focuses on athleticism, strength, and self-confidence in a safe, supervised environment. Teens learn circus-style pole tricks, build incredible fitness, and develop body positivity - all while having fun with friends."
      duration="8 Weeks"
      classSize="Max 8 students"
      frequency="1x per week"
      level="Ages 13-17, All Levels"
      highlights={[
        "Focus on athletic and acrobatic pole",
        "Build strength, flexibility, and coordination",
        "Boost confidence and self-esteem",
        "Safe, supervised, parent-approved environment",
        "Connect with like-minded teens",
        "Age-appropriate curriculum and music"
      ]}
      curriculum={[
        { week: 1, title: "Introduction & Safety", description: "Learn studio rules, safety protocols, and your first basic spins. Meet your fellow teen pole stars!" },
        { week: 2, title: "Spin Foundations", description: "Master fundamental spins with proper technique. Focus on grip strength and body control." },
        { week: 3, title: "Climbing Adventures", description: "Learn to climb the pole safely. Build upper body and core strength." },
        { week: 4, title: "Acrobatic Skills", description: "Introduction to holds and poses. Focus on strength and balance." },
        { week: 5, title: "Tricks & Transitions", description: "Connect moves together smoothly. Learn creative transitions." },
        { week: 6, title: "Freestyle Flow", description: "Express yourself through movement. Develop your personal style." },
        { week: 7, title: "Routine Building", description: "Create a routine with your classmates. Teamwork and creativity!" },
        { week: 8, title: "Showcase for Parents", description: "Perform for family and friends. Celebrate your achievements!" }
      ]}
      whatToBring={[
        "Athletic shorts and fitted top",
        "Water bottle",
        "Hair ties for long hair",
        "Positive attitude",
        "Signed parent consent form"
      ]}
      faqs={[
        { question: "Is pole appropriate for teenagers?", answer: "Absolutely! Our teen program focuses on athletic, circus-style pole - similar to gymnastics. All content is age-appropriate and parent-approved." },
        { question: "Do parents need to stay?", answer: "Parents are welcome to stay for the first class. After that, teens participate independently while parents can wait in our comfortable lounge area." },
        { question: "What do teens wear?", answer: "Athletic shorts (like volleyball or gymnastics shorts) and a fitted top. We focus on comfortable athletic wear." },
        { question: "Is the music appropriate?", answer: "Yes! We use age-appropriate, clean music for all teen classes." },
        { question: "Can boys join too?", answer: "Absolutely! Pole is for everyone, and we welcome teens of all genders." },
        { question: "Will this help with other sports?", answer: "Yes! Pole builds incredible strength, flexibility, and body awareness that transfers to gymnastics, dance, and other athletic pursuits." }
      ]}
      price="From $180/term"
      ctaText="Enroll Your Teen"
    />
  );
};

export default PoleTeensPage;
