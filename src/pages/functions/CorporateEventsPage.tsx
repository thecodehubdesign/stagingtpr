import FunctionPageTemplate from '@/components/templates/FunctionPageTemplate';
import { Users, Target, Heart, Trophy } from 'lucide-react';

const CorporateEventsPage = () => {
  return (
    <FunctionPageTemplate
      badge="Corporate Events"
      title="Team Building with a Twist"
      subtitle="Unique experiences that bring teams together"
      heroImage="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      introTitle="Unforgettable Team Experiences"
      introDescription="Looking for team building that's actually memorable? Our corporate events combine fun, fitness, and team bonding in a unique setting. Perfect for work events, end-of-year celebrations, or wellness initiatives."
      features={[
        { icon: Users, title: "Team Bonding", description: "Activities designed to build trust and connection" },
        { icon: Target, title: "Goal Achievement", description: "Challenge yourselves and celebrate success together" },
        { icon: Heart, title: "Wellness Focus", description: "Promote health and wellbeing in your workplace" },
        { icon: Trophy, title: "Memorable Experience", description: "An event your team will talk about for years" }
      ]}
      steps={[
        { step: 1, title: "Warm Up Together", description: "Get everyone moving and comfortable in a fun, low-pressure environment" },
        { step: 2, title: "Learn & Laugh", description: "Try pole or aerial basics as a team - lots of laughs guaranteed!" },
        { step: 3, title: "Team Challenges", description: "Optional team competitions and collaborative activities" }
      ]}
      packages={[
        { name: "Team Taster", price: "from $40", priceNote: "/person", features: ["60 minutes", "Basic introduction", "10-20 people", "One activity"] },
        { name: "Corporate Classic", price: "from $55", priceNote: "/person", features: ["90 minutes", "Multiple activities", "Team challenges", "Photos included"], popular: true },
        { name: "Full Experience", price: "from $75", priceNote: "/person", features: ["2+ hours", "Multiple activities", "Catering options", "Event coordinator"] }
      ]}
      faqs={[
        { question: "Is this appropriate for all workplaces?", answer: "Absolutely! We focus on fitness and fun, keeping everything professional and inclusive." },
        { question: "What if some team members can't participate?", answer: "Everyone can participate at their own comfort level. We also have observation options." },
        { question: "Can we get an invoice for the company?", answer: "Yes, we provide full invoicing and can work with your procurement process." }
      ]}
      formTitle="Plan Your Corporate Event"
      formSubtitle="Let's create an unforgettable team experience"
    />
  );
};

export default CorporateEventsPage;
