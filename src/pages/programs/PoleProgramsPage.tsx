import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Calendar, 
  Camera, 
  ChevronRight, 
  Clock, 
  MapPin, 
  Sparkles, 
  Star, 
  Tag, 
  Trophy, 
  Users, 
  CheckCircle2,
  GraduationCap
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { studios } from '@/data/studios';

// Program levels data with routes
const programLevels = [
  {
    name: "Pole Beginner",
    badge: "Complete Beginner",
    description: "Build strength, confidence, and grace from day one. No experience required.",
    duration: "8 Weeks",
    frequency: "1-2x per week",
    href: "/programs/pole/beginner",
    color: "from-green-400 to-emerald-500",
    badgeColor: "bg-green-500/20 text-green-400 border-green-500/30"
  },
  {
    name: "Pole Intermediate",
    badge: "Some Experience",
    description: "Take your pole journey to the next level with inversions and spin pole.",
    duration: "8 Weeks",
    frequency: "2x per week",
    href: "/programs/pole/intermediate",
    color: "from-blue-400 to-cyan-500",
    badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30"
  },
  {
    name: "Pole Advanced",
    badge: "Advanced",
    description: "Master complex combinations, drops, and advanced inversions.",
    duration: "8 Weeks",
    frequency: "2-3x per week",
    href: "/programs/pole/advanced",
    color: "from-purple-400 to-violet-500",
    badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/30"
  },
  {
    name: "Pole Elite",
    badge: "Pre-Professional",
    description: "Train at the highest level with competition-ready routines and signature moves.",
    duration: "8 Weeks",
    frequency: "3x per week",
    href: "/programs/pole/elite",
    color: "from-yellow-400 to-amber-500",
    badgeColor: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
  },
  {
    name: "40+ & Fabulous",
    badge: "Ages 40+",
    description: "Age-inclusive classes with modified techniques for bodies over 40.",
    duration: "8 Weeks",
    frequency: "1-2x per week",
    href: "/programs/pole/40-plus",
    color: "from-pink-400 to-rose-500",
    badgeColor: "bg-pink-500/20 text-pink-400 border-pink-500/30"
  },
  {
    name: "Teen Pole",
    badge: "Ages 13-17",
    description: "Safe, age-appropriate pole fitness for teenagers with parental consent.",
    duration: "8 Weeks",
    frequency: "1x per week",
    href: "/programs/pole/teens",
    color: "from-teal-400 to-cyan-500",
    badgeColor: "bg-teal-500/20 text-teal-400 border-teal-500/30"
  },
  {
    name: "Pure Pole Dance",
    badge: "Dance-Focused",
    description: "Focus on choreography, expression, and dance rather than tricks.",
    duration: "8 Weeks",
    frequency: "1-2x per week",
    href: "/programs/pole/pure-pole-dance",
    color: "from-fuchsia-400 to-pink-500",
    badgeColor: "bg-fuchsia-500/20 text-fuchsia-400 border-fuchsia-500/30"
  },
  {
    name: "Dance Filthy",
    badge: "Exotic & Heels",
    description: "Heels, floor work, and exotic dance styles for confident expression.",
    duration: "8 Weeks",
    frequency: "1-2x per week",
    href: "/programs/pole/dance-filthy",
    color: "from-red-400 to-rose-500",
    badgeColor: "bg-red-500/20 text-red-400 border-red-500/30"
  },
  {
    name: "Front Splits Masterclass",
    badge: "Flexibility",
    description: "Dedicated flexibility training to achieve your front splits goals.",
    duration: "8 Weeks",
    frequency: "1x per week",
    href: "/programs/pole/front-splits",
    color: "from-orange-400 to-amber-500",
    badgeColor: "bg-orange-500/20 text-orange-400 border-orange-500/30"
  }
];

// Level progression path
const levelProgression = [
  {
    level: "Beginner",
    color: "from-green-400 to-emerald-500",
    skills: ["Basic spins (fireman, chair, back hook)", "Basic climb", "Floor work fundamentals", "Grip technique"]
  },
  {
    level: "Intermediate",
    color: "from-blue-400 to-cyan-500",
    skills: ["Advanced spins", "Inversions (crucifix, butterfly)", "Spin pole introduction", "Move combinations"]
  },
  {
    level: "Advanced",
    color: "from-purple-400 to-violet-500",
    skills: ["Complex inversions (janeiro, aysha)", "Drops and dynamic moves", "Flexibility integration", "Competition prep"]
  },
  {
    level: "Elite",
    color: "from-yellow-400 to-amber-500",
    skills: ["Signature moves", "Competition routines", "Professional performance", "Teaching preparation"]
  }
];

// Grading criteria
const gradingCriteria = [
  {
    icon: CheckCircle2,
    title: "Skills Checklist",
    description: "Each level has a checklist of moves you need to master before progressing"
  },
  {
    icon: Users,
    title: "Instructor Assessment",
    description: "Your instructor will evaluate your technique, strength, and safety"
  },
  {
    icon: Star,
    title: "Confidence Ready",
    description: "You'll feel confident and ready - no surprises!"
  },
  {
    icon: Clock,
    title: "No Rush Policy",
    description: "Progress at your own pace. There's no pressure to level up"
  }
];

// Term calendar data
const terms2025 = [
  {
    id: 'term1-2025',
    name: 'Term 1',
    startDate: 'Feb 3',
    endDate: 'Mar 28',
    year: '2025',
    weeks: 8,
    status: 'in-progress',
    showcaseDate: 'Mar 28'
  },
  {
    id: 'mini1-2025',
    name: 'Mini Term 1',
    startDate: 'Apr 7',
    endDate: 'May 2',
    year: '2025',
    weeks: 4,
    status: 'enrolling',
    isMini: true
  },
  {
    id: 'term2-2025',
    name: 'Term 2',
    startDate: 'May 12',
    endDate: 'Jul 4',
    year: '2025',
    weeks: 8,
    status: 'coming-soon',
    showcaseDate: 'Jul 4'
  },
  {
    id: 'mini2-2025',
    name: 'Mini Term 2',
    startDate: 'Jul 14',
    endDate: 'Aug 8',
    year: '2025',
    weeks: 4,
    status: 'coming-soon',
    isMini: true
  },
  {
    id: 'term3-2025',
    name: 'Term 3',
    startDate: 'Aug 18',
    endDate: 'Oct 10',
    year: '2025',
    weeks: 8,
    status: 'coming-soon',
    showcaseDate: 'Oct 10'
  },
  {
    id: 'term4-2025',
    name: 'Term 4',
    startDate: 'Oct 20',
    endDate: 'Dec 12',
    year: '2025',
    weeks: 8,
    status: 'coming-soon',
    showcaseDate: 'Dec 12'
  }
];

// Member benefits
const memberBenefits = [
  {
    icon: Sparkles,
    title: "Performance Opportunities",
    description: "Showcase your skills at Performance Nights, GLOW Showcase, and SHINE Competition",
    color: "text-fuchsia-400",
    link: "/events"
  },
  {
    icon: Camera,
    title: "Professional Photoshoots",
    description: "Termly photoshoot sessions with professional lighting, backdrops, and edited photos",
    color: "text-cyan-400"
  },
  {
    icon: GraduationCap,
    title: "Exclusive Workshops",
    description: "Guest instructor masterclasses, specialty techniques, and flexibility clinics",
    color: "text-purple-400",
    link: "/programs/workshops"
  },
  {
    icon: Tag,
    title: "Member Discounts",
    description: "10% off retail, early event access, discounted privates, and studio hire rates",
    color: "text-green-400"
  },
  {
    icon: Users,
    title: "Community Events",
    description: "Studio social nights, movie nights, themed parties, and end-of-term celebrations",
    color: "text-pink-400"
  },
  {
    icon: Trophy,
    title: "Progress Tracking",
    description: "Skill checklist tracking, level progression system, and milestone celebrations",
    color: "text-yellow-400"
  }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'enrolling':
      return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Enrolling Now</Badge>;
    case 'in-progress':
      return <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">In Progress</Badge>;
    case 'coming-soon':
      return <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">Coming Soon</Badge>;
    default:
      return <Badge className="bg-muted text-muted-foreground">TBA</Badge>;
  }
};

const PoleProgramsPage = () => {
  const scrollToCalendar = () => {
    document.getElementById('term-calendar')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background effects */}
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6 bg-fuchsia-500/20 text-fuchsia-400 border-fuchsia-500/30 text-sm px-4 py-2">
                Pole Dancing Programs
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="gradient-text">Master the Art</span>
                <br />
                <span className="text-foreground">of Pole</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                From your first spin to advanced tricks, discover a journey of strength, grace, and confidence at Melbourne's premier pole studios.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="neon-button text-primary-foreground text-lg px-8 py-6" asChild>
                  <Link to="/get-started">Book Free Trial</Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-fuchsia-500/50 text-foreground hover:bg-fuchsia-500/10 text-lg px-8 py-6"
                  onClick={scrollToCalendar}
                >
                  View Term Dates
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          {/* Build Real Strength */}
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center mb-24"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="cyber-card rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Pole dancer building strength"
                className="w-full h-80 object-cover"
              />
            </div>
            <div>
              <div className="w-16 h-1 bg-gradient-to-r from-fuchsia-500 to-pink-500 mb-6" />
              <h2 className="text-4xl font-bold mb-4 text-foreground">Build Real Strength</h2>
              <p className="text-muted-foreground text-lg">
                Pole fitness develops functional strength you'll use in everyday life. Build your upper body, core, and grip strength naturally through progressive training. Watch as your body transforms and moves you never thought possible become second nature.
              </p>
            </div>
          </motion.div>

          {/* Express Your Style */}
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center mb-24"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="order-2 md:order-1">
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mb-6" />
              <h2 className="text-4xl font-bold mb-4 text-foreground">Express Your Style</h2>
              <p className="text-muted-foreground text-lg">
                Whether you're drawn to athletic tricks, fluid dance, or exotic floor work, there's a pole style for you. Our diverse range of classes lets you explore different expressions - from powerful and strong to sensual and graceful.
              </p>
            </div>
            <div className="cyber-card rounded-2xl overflow-hidden order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Pole dancer expressing style"
                className="w-full h-80 object-cover"
              />
            </div>
          </motion.div>

          {/* Join a Community */}
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="cyber-card rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Pole community"
                className="w-full h-80 object-cover"
              />
            </div>
            <div>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-violet-500 mb-6" />
              <h2 className="text-4xl font-bold mb-4 text-foreground">Join a Community</h2>
              <p className="text-muted-foreground text-lg">
                The Pole Room is more than a studio - it's a family. Connect with like-minded individuals who support and celebrate each other. From your first class to your hundredth, you'll find encouragement, friendship, and belonging.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Levels */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-500/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-fuchsia-500/20 text-fuchsia-400 border-fuchsia-500/30">
              Our Programs
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Find Your Level</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Whether you're a complete beginner or an experienced pole athlete, we have a program designed for you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programLevels.map((program, index) => (
              <motion.div
                key={program.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={program.href}>
                  <div className="cyber-card rounded-xl p-6 h-full hover:scale-[1.02] transition-transform duration-300 group">
                    <div className="flex items-start justify-between mb-4">
                      <Badge className={program.badgeColor}>{program.badge}</Badge>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-fuchsia-400 transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{program.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{program.description}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {program.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {program.frequency}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Grade and Level Up */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-purple-500/20 text-purple-400 border-purple-500/30">
              Progression System
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">How to Grade & Level Up</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Clear progression criteria so you always know what's next on your pole journey.
            </p>
          </motion.div>

          {/* Level Progression Visual */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              {levelProgression.map((level, index) => (
                <motion.div
                  key={level.level}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  <div className="cyber-card rounded-xl p-6 min-w-[200px]">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${level.color} flex items-center justify-center mb-4`}>
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">{level.level}</h3>
                    <ul className="space-y-1">
                      {level.skills.map((skill) => (
                        <li key={skill} className="text-sm text-muted-foreground flex items-start gap-2">
                          <CheckCircle2 className="w-3 h-3 text-fuchsia-400 mt-1 flex-shrink-0" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {index < levelProgression.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-fuchsia-400 hidden md:block" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Grading Criteria */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gradingCriteria.map((criteria, index) => (
              <motion.div
                key={criteria.title}
                className="cyber-card rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <criteria.icon className="w-10 h-10 text-fuchsia-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">{criteria.title}</h3>
                <p className="text-sm text-muted-foreground">{criteria.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="neon-button text-primary-foreground" asChild>
              <Link to="/contact">Book a Skills Assessment</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mini Terms Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
              Flexible Options
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Try Our Mini Terms</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Not ready for a full 8-week commitment? Try 4 weeks first!
            </p>
          </motion.div>

          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="cyber-card rounded-2xl p-8 border-cyan-500/30 hover:border-cyan-500/50 transition-colors">
              <div className="flex items-start justify-between mb-6">
                <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 text-lg px-4 py-2">
                  4 Weeks
                </Badge>
                <span className="text-2xl font-bold text-foreground">From $120</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Mini Term Program</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span>Perfect for trying first</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span>Condensed learning</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span>Great value intro</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span>Seamless transition</span>
                </div>
              </div>
              <Button className="w-full neon-button text-primary-foreground" asChild>
                <Link to="/programs/mini-terms">
                  View Mini Terms <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Term Calendar */}
      <section id="term-calendar" className="py-20 relative scroll-mt-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-fuchsia-500/20 text-fuchsia-400 border-fuchsia-500/30">
              2025 Schedule
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Term Intake Calendar</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Plan your pole journey with our 2025 term dates. Enroll early for the best availability.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {terms2025.map((term, index) => (
              <motion.div
                key={term.id}
                className={`cyber-card rounded-xl p-6 ${term.status === 'enrolling' ? 'ring-2 ring-green-500/50' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground">{term.name}</h3>
                  {getStatusBadge(term.status)}
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{term.startDate} - {term.endDate}, {term.year}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{term.weeks} Weeks</span>
                  </div>
                  {term.showcaseDate && (
                    <div className="flex items-center gap-2 text-fuchsia-400">
                      <Star className="w-4 h-4" />
                      <span>Showcase: {term.showcaseDate}</span>
                    </div>
                  )}
                </div>
                {term.status === 'enrolling' && (
                  <Button className="w-full neon-button text-primary-foreground" asChild>
                    <Link to="/get-started">Enroll Now</Link>
                  </Button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Benefits */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-purple-500/20 text-purple-400 border-purple-500/30">
              Exclusive Perks
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">More Than Just Classes</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Being part of The Pole Room family means access to exclusive experiences, events, and opportunities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {memberBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="cyber-card rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <benefit.icon className={`w-10 h-10 ${benefit.color} mb-4`} />
                <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{benefit.description}</p>
                {benefit.link && (
                  <Link to={benefit.link} className="text-fuchsia-400 text-sm hover:underline inline-flex items-center gap-1">
                    Learn More <ChevronRight className="w-4 h-4" />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Locations */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
              Convenient Locations
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Train at {studios.length} Locations</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Find a studio near you across Melbourne.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studios.map((studio, index) => (
              <motion.div
                key={studio.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/studios/${studio.id}`}>
                  <div className="cyber-card rounded-xl p-6 hover:scale-[1.02] transition-transform group">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{studio.name.replace('The Pole Room ', '')}</h3>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {studio.address.split(',')[0]}
                        </p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-fuchsia-400 transition-colors" />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {studio.apparatus.map((item) => (
                        <Badge key={item} variant="secondary" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                    {studio.rating && (
                      <div className="flex items-center gap-1 mt-3 text-sm text-muted-foreground">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span>{studio.rating}</span>
                        <span className="text-xs">({studio.reviewCount} reviews)</span>
                      </div>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-fuchsia-500/50 text-foreground hover:bg-fuchsia-500/10" asChild>
              <Link to="/studios">View All Studios <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/20 via-purple-500/20 to-cyan-500/20" />
        <div className="absolute inset-0 cyber-grid opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Ready to Start Your</span>
              <br />
              <span className="text-foreground">Pole Journey?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Book your free trial class and discover why thousands of women have transformed their lives through pole.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="neon-button text-primary-foreground text-lg px-8 py-6" asChild>
                <Link to="/get-started">Book Your Free Trial</Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-fuchsia-500/50 text-foreground hover:bg-fuchsia-500/10 text-lg px-8 py-6"
                asChild
              >
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PoleProgramsPage;
