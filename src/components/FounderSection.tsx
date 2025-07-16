import { Heart, Users, Award, MapPin, GraduationCap, Clock, Building, Zap } from 'lucide-react';
const FounderSection = () => {
  const benefits = [{
    icon: Heart,
    title: "Inclusive & Supportive Studios",
    description: "A welcoming space for every body and fitness level"
  }, {
    icon: Users,
    title: "Beginner-Friendly",
    description: "No experience needed - we'll guide you every step"
  }, {
    icon: Award,
    title: "Structured Programs",
    description: "Progressive classes that help you achieve your goals"
  }];
  const statistics = [{
    icon: Users,
    number: "5000+",
    label: "Students Served"
  }, {
    icon: Clock,
    number: "100,000",
    label: "Classes Taught and Counting"
  }, {
    icon: Building,
    number: "6",
    label: "Studio Locations"
  }, {
    icon: GraduationCap,
    number: "40+",
    label: "Instructors"
  }];
  return;
};
export default FounderSection;