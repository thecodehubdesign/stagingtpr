import FunctionPageTemplate from '@/components/templates/FunctionPageTemplate';
import { Star, Clock, MapPin, Heart, Cake, Gift } from 'lucide-react';

const BirthdayPartiesPage = () => {
  return (
    <FunctionPageTemplate
      badge="Birthday Parties"
      title="Celebrate in Style"
      subtitle="Make your birthday unforgettable with pole & aerial fun!"
      heroImage="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      introTitle="The Ultimate Birthday Experience"
      introDescription="Whether you're turning 18 or 80, celebrate your special day with an activity you'll never forget. Our birthday parties are perfect for kids, teens, and adults who want something unique and empowering."
      features={[
        { icon: Cake, title: "All Ages Welcome", description: "Packages for kids, teens, and adults with age-appropriate activities" },
        { icon: Star, title: "Expert Instructors", description: "Our friendly team makes everyone feel comfortable and confident" },
        { icon: Clock, title: "Flexible Timing", description: "Day or evening parties to fit your schedule" },
        { icon: Gift, title: "Party Extras", description: "Add decorations, snacks, and photo packages" }
      ]}
      steps={[
        { step: 1, title: "Learn Fun Moves", description: "Our instructors teach age-appropriate spins and tricks that everyone can enjoy" },
        { step: 2, title: "Dance & Play", description: "Games, music, and activities tailored to your group's energy" },
        { step: 3, title: "Celebrate!", description: "Time for cake, presents, and photos with your pole star friends" }
      ]}
      packages={[
        { name: "Kids Party", price: "from $35", priceNote: "/child", features: ["60 minutes", "Age-appropriate activities", "Up to 10 kids", "Party host included"] },
        { name: "Teen Party", price: "from $40", priceNote: "/person", features: ["90 minutes", "Beginner pole & aerial", "Photo time", "Music of choice"], popular: true },
        { name: "Adult Party", price: "from $45", priceNote: "/person", features: ["90-120 minutes", "Pole dance lesson", "Optional add-ons", "BYO decorations"] }
      ]}
      faqs={[
        { question: "What ages are birthday parties for?", answer: "We offer parties for ages 8+ with age-appropriate content for each group." },
        { question: "Can parents stay?", answer: "For kids parties, one parent/guardian must remain on premises. Adults are welcome to watch or participate!" },
        { question: "Can we bring food and cake?", answer: "Absolutely! We have a party area for food, cake, and presents." }
      ]}
      formTitle="Plan Your Party"
      formSubtitle="Let's make your birthday unforgettable!"
    />
  );
};

export default BirthdayPartiesPage;
