import ProgramPageTemplate from '@/components/templates/ProgramPageTemplate';

const AerialHoopBeginnerPage = () => {
  return (
    <ProgramPageTemplate
      badge="Beginner Aerial Hoop"
      title="Discover Aerial Grace"
      subtitle="Float, spin, and soar in the lyra"
      heroImage="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      description="Aerial hoop (also known as lyra) is a beautiful circus art that combines strength, grace, and artistry. Our beginner course teaches you how to mount, spin, and pose in the hoop while building the strength and technique for beautiful aerial movement."
      duration="8 Weeks"
      classSize="Max 6 students"
      frequency="1-2x per week"
      level="Complete Beginner"
      highlights={[
        "Learn to mount and dismount safely",
        "Master beginner poses and sits",
        "Develop grip strength and body awareness",
        "Create beautiful shapes in the air",
        "Build core and upper body strength",
        "Express yourself through aerial art"
      ]}
      curriculum={[
        { week: 1, title: "Introduction to Lyra", description: "Learn about the apparatus, safety, and your first mount. Practice basic hangs and conditioning." },
        { week: 2, title: "Basic Mounts", description: "Master multiple ways to get into the hoop. Build comfort and confidence in the air." },
        { week: 3, title: "Seated Positions", description: "Learn basic sits including single and double point. Focus on balance and control." },
        { week: 4, title: "Poses & Shapes", description: "Create beautiful poses in the hoop. Man in the moon, gazelle, and more." },
        { week: 5, title: "Spinning Basics", description: "Introduction to spinning in the hoop. Learn to control momentum and spot." },
        { week: 6, title: "Transitions", description: "Connect poses smoothly. Flow from one position to another with grace." },
        { week: 7, title: "Mini Routine", description: "Put your skills together into a short sequence. Express your personal style." },
        { week: 8, title: "Showcase & Celebration", description: "Perform for your fellow students and celebrate your aerial journey!" }
      ]}
      whatToBring={[
        "Fitted clothing that covers behind the knees",
        "Water bottle",
        "Hair tied back",
        "Grip gloves (optional)",
        "No jewelry or watches"
      ]}
      faqs={[
        { question: "Is aerial hoop painful?", answer: "There can be some discomfort as you build conditioning, but proper technique and progression minimizes this. Most students find the sensation manageable and decreasing over time." },
        { question: "Do I need upper body strength?", answer: "You'll build strength as you progress! We start with conditioning and gradually increase difficulty as you get stronger." },
        { question: "What's the difference between aerial hoop and pole?", answer: "Aerial hoop is a circular apparatus you sit, hang, and pose in. It focuses more on poses and shapes, while pole involves more spinning and climbing." },
        { question: "How high is the hoop?", answer: "We adjust hoop height based on skill level. Beginners start with hoops low enough to mount from the ground." },
        { question: "Can I wear shorts?", answer: "For lyra, we recommend clothing that covers behind the knees and underarms to prevent discomfort from the apparatus." }
      ]}
      price="From $230/term"
      ctaText="Book Your Free Trial"
    />
  );
};

export default AerialHoopBeginnerPage;
