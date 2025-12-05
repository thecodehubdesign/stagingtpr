import FunctionPageTemplate from '@/components/templates/FunctionPageTemplate';
import { Sparkles, Camera, Music, Palette } from 'lucide-react';

const CustomEventsPage = () => {
  return (
    <FunctionPageTemplate
      badge="Custom Events"
      title="Your Event, Your Way"
      subtitle="Fully customizable experiences for any occasion"
      heroImage="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      introTitle="Create Something Unique"
      introDescription="Have a vision that doesn't fit our standard packages? We love creating custom experiences! From photo shoots to music videos, private showcases to themed events - if you can dream it, we can help make it happen."
      features={[
        { icon: Sparkles, title: "Fully Custom", description: "We work with you to create exactly what you envision" },
        { icon: Camera, title: "Photo & Video", description: "Professional shoots in our stunning studios" },
        { icon: Music, title: "Performances", description: "Private showcases and entertainment" },
        { icon: Palette, title: "Themed Events", description: "Transform our space for your theme" }
      ]}
      steps={[
        { step: 1, title: "Share Your Vision", description: "Tell us what you're dreaming of - no idea is too creative!" },
        { step: 2, title: "Custom Proposal", description: "We'll create a tailored proposal and quote for your event" },
        { step: 3, title: "Make It Happen", description: "Our team brings your vision to life" }
      ]}
      packages={[
        { name: "Studio Hire", price: "from $150", priceNote: "/hour", features: ["Private studio access", "Basic equipment", "Flexible timing", "No instruction"] },
        { name: "Photo Shoot", price: "from $300", priceNote: "/session", features: ["2 hour studio", "Pole/aerial props", "Lighting setup", "Instructor assist"], popular: true },
        { name: "Full Production", price: "Custom", priceNote: " quote", features: ["Multi-hour hire", "Full team support", "Equipment & props", "Complete customization"] }
      ]}
      faqs={[
        { question: "What kind of events can you host?", answer: "Photo shoots, music videos, private performances, product launches, themed parties, and more!" },
        { question: "Can we bring external vendors?", answer: "Yes! Photographers, caterers, decorators - we're happy to coordinate." },
        { question: "How far in advance should we book?", answer: "We recommend 2-4 weeks minimum, longer for complex events." }
      ]}
      formTitle="Tell Us Your Vision"
      formSubtitle="Let's create something amazing together"
    />
  );
};

export default CustomEventsPage;
