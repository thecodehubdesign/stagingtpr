import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Check, 
  Users, 
  Calendar, 
  Award, 
  Monitor, 
  MapPin, 
  ChevronRight, 
  Star, 
  Play,
  Sparkles,
  Clock,
  Heart,
  Trophy,
  Building2,
  X
} from 'lucide-react';
import { studios } from '@/data/studios';
import appMockup from '@/assets/app-mockup.png';

// Data Arrays
const firstClassReviews = [
  { quote: "I was so nervous but everyone was amazing!", name: "Sarah M.", studio: "Mitcham" },
  { quote: "Best decision I've made for myself in years!", name: "Emma K.", studio: "Eltham" },
  { quote: "The instructors made me feel so welcome from day one.", name: "Jade L.", studio: "CBD" },
  { quote: "Never thought I could do this - now I'm hooked!", name: "Amy T.", studio: "Kilsyth" },
  { quote: "Such a supportive environment, no judgment at all.", name: "Lisa R.", studio: "Highett" },
  { quote: "My first class changed everything for me.", name: "Nicole B.", studio: "Narre Warren" },
  { quote: "I found my people here. It's more than just fitness.", name: "Courtney H.", studio: "Rowville" },
  { quote: "The nerves disappeared within 5 minutes!", name: "Bec S.", studio: "Mitcham" },
];

const trustBadges = [
  { icon: Calendar, text: "Runs in Structured Terms" },
  { icon: Award, text: "Expert Instructors" },
  { icon: Users, text: "Beginner Friendly" },
  { icon: Sparkles, text: "Variety of Classes" },
  { icon: Trophy, text: "Level Programs" },
  { icon: Heart, text: "Female Owned" },
];

const disciplineGrid = [
  { name: "Pole Foundations", image: "/images/first-timers/gallery-1.png", href: "/programs/pole/beginner" },
  { name: "Aerial Lyra", image: "/images/first-timers/gallery-2.avif", href: "/programs/aerial-hoop/beginner" },
  { name: "Aerial Silks", image: "/images/first-timers/gallery-3.avif", href: "/programs/aerial-silks/beginner" },
  { name: "Dance & Floorwork", image: "/images/first-timers/gallery-4.avif", href: "/programs/pole/pure-pole-dance" },
];

const curriculumSteps = [
  { step: 1, title: "Choose Your Studio", description: "Find the location that works for you" },
  { step: 2, title: "Beginner Induction", description: "Join at the start of a mini term" },
  { step: 3, title: "Foundations Classes", description: "Progress through the mini term" },
  { step: 4, title: "Progress Pathways", description: "Explore pole, aerials, dance & more" },
];

const miniTermSchedule = [
  { week: "Week 1", event: "Induction", action: "Register & attend intro session", joinable: true },
  { week: "Weeks 2-6", event: "Foundations Progression", action: "Weekly classes building skills", joinable: false },
  { week: "End of Term", event: "Next Steps", action: "Level guidance & pathway selection", joinable: false },
];

const eligibilityTable = [
  { status: "Brand new to The Pole Room", eligible: true, note: "Intro offer available" },
  { status: "Returning member", eligible: false, note: "Standard pricing applies" },
  { status: "Returning after long break", eligible: false, note: "Restart pathway recommended" },
  { status: "Visiting from another studio", eligible: false, note: "Placement consultation" },
];

const firstVisitAccordion = [
  { 
    step: 1, 
    title: "Arrive 10 minutes early", 
    description: "Time to settle in and meet your instructor",
    image: "/images/first-timers/gallery-2.avif"
  },
  { 
    step: 2, 
    title: "Check in at the desk", 
    description: "Quick registration and waiver",
    image: "/images/first-timers/gallery-3.avif"
  },
  { 
    step: 3, 
    title: "Warm up together", 
    description: "Group stretches and body prep",
    image: "/images/first-timers/gallery-4.avif"
  },
  { 
    step: 4, 
    title: "Foundations moves", 
    description: "Learn your first spins and poses",
    image: "/images/first-timers/gallery-5.avif"
  },
  { 
    step: 5, 
    title: "Cool down & stretch", 
    description: "Wind down and celebrate your first class",
    image: "/images/first-timers/gallery-6.avif"
  },
];

const classAttire = [
  { classType: "Pole", wear: "Shorts, singlet, grip-friendly", avoid: "Moisturiser, oils" },
  { classType: "Lyra", wear: "Leggings, fitted top", avoid: "Loose clothing, jewellery" },
  { classType: "Silks/Hammock", wear: "Leggings, sleeves optional", avoid: "Zips, buckles" },
];

const studioGuidelines = [
  { do: "Bring water and a small towel", dont: "Apply moisturiser on class day" },
  { do: "Wear comfortable workout clothes", dont: "Wear jewellery or watches" },
  { do: "Arrive with clean skin", dont: "Wear clothes with zips or buttons" },
];

const whyChooseFeatures = [
  { 
    title: "Performance Opportunities", 
    description: "Showcase your skills at SHINE and GLOW events",
    icon: Trophy,
    image: "/images/glow/hero-1.png"
  },
  { 
    title: "Strong Community", 
    description: "No mean girl vibes - just genuine support",
    icon: Heart,
    image: "/images/first-timers/gallery-5.avif"
  },
  { 
    title: "Beautiful Studios", 
    description: "Purpose-built spaces designed for you",
    icon: Building2,
    image: "/images/first-timers/gallery-6.avif"
  },
  { 
    title: "Expert Instructors", 
    description: "Trained professionals who care",
    icon: Award,
    image: "/images/instructors/courtney.png"
  },
];


const faqs = [
  { 
    question: "Can I start mid-term?", 
    answer: "For the best experience, beginners join at the start of each mini term during our Induction week. This ensures you learn the foundations properly and start with others at the same level. Check our term dates and join the next intake!" 
  },
  { 
    question: "Do I need strength or flexibility?", 
    answer: "Absolutely not! Our beginner program is designed for complete newbies with no fitness background. Pole and aerials will BUILD your strength and flexibility over time. You don't need to 'get fit' first - just show up!" 
  },
  { 
    question: "Can I do pole AND aerials?", 
    answer: "Yes! Many of our students train in multiple disciplines. We encourage you to start with one (usually pole) to build your foundations, then explore aerials, silks, or lyra once you're comfortable. Mixing is encouraged!" 
  },
  { 
    question: "What if I miss a week?", 
    answer: "Life happens! If you miss a class, you can catch up with our Virtual Studio content, attend a makeup class at another location, or work with your instructor to stay on track. We're flexible and supportive." 
  },
  { 
    question: "I'm returning after a long break - where should I start?", 
    answer: "Welcome back! We recommend booking a restart consultation so we can assess your current level and recommend the right class. Depending on how long you've been away, you may restart at foundations or jump back into your previous level." 
  },
  { 
    question: "How do I find my studio's schedule?", 
    answer: "Head to our Studios page, select your preferred location, and you'll see the full timetable including all beginner-friendly classes. You can also filter by class type to find exactly what you're looking for." 
  },
];

const FirstTimers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Section 1: Hero */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* First Timers Bubble */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 text-sm font-medium mb-6">
              First Timers
            </span>
          </motion.div>
          
          {/* H1 - Full Width Single Column */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8 text-center"
          >
            Your First Class{' '}
            <span className="gradient-text">Starts Here</span>
          </motion.h1>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-xl text-gray-300 mb-4">
                No experience needed. No judgment. Just a supportive, structured environment where you'll learn at your own pace.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                Join hundreds of first-timers who walked in nervous and walked out smiling.
              </p>
              
              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4">
                {trustBadges.map((badge, index) => (
                  <motion.div
                    key={badge.text}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-gray-800/50 border border-fuchsia-500/20"
                  >
                    <badge.icon className="w-5 h-5 text-fuchsia-400" />
                    <span className="text-sm text-gray-300">{badge.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Right - Video/Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden cyber-card"
            >
              <img 
                src="/images/first-timers/gallery-1.png" 
                alt="Beginner pole class with smiling students" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2 text-white">
                  <Play className="w-8 h-8 text-fuchsia-400" />
                  <span className="text-sm">Watch what your first class looks like</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Social Proof Strip */}
      <section className="py-6 bg-gray-900/80 border-y border-fuchsia-500/20 overflow-hidden">
        <div className="relative">
          <div className="flex animate-scroll-left">
            {[...firstClassReviews, ...firstClassReviews].map((review, index) => (
              <div 
                key={index}
                className="flex-shrink-0 mx-4 px-6 py-4 rounded-xl bg-gray-800/50 border border-fuchsia-500/20 min-w-[300px]"
              >
                <div className="flex items-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm mb-2">"{review.quote}"</p>
                <p className="text-fuchsia-400 text-xs">{review.name} • {review.studio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Start with Pole, Explore Aerials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Copy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Start with pole,{' '}
                <span className="gradient-text">explore aerials</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Most of our students begin with pole dancing - it's the perfect foundation for building strength, confidence, and body awareness.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Once you've got the basics down, the world of aerials opens up. Many students train in multiple disciplines, mixing pole with lyra, silks, or dance.
              </p>
              <p className="text-fuchsia-400 font-semibold text-lg">
                There's no wrong path - just your path.
              </p>
            </motion.div>
            
            {/* Right - 2x2 Grid */}
            <div className="grid grid-cols-2 gap-4">
              {disciplineGrid.map((discipline, index) => (
                <motion.div
                  key={discipline.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative aspect-square rounded-xl overflow-hidden border border-fuchsia-500/20 hover:border-fuchsia-500/50 transition-all"
                >
                  <Link to={discipline.href}>
                    <img 
                      src={discipline.image} 
                      alt={discipline.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-semibold">{discipline.name}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: First Timer Classes */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                First Timer <span className="gradient-text">Classes</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Our First Timer classes are packed with beginners just like you. It's the best place to start your journey - everyone's learning together, and our instructors are experts at helping nervous newbies feel at home.
              </p>
              <p className="text-gray-400 mb-8">
                View the First Timer schedule at your preferred location and book your spot.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="neon-button text-black font-bold" asChild>
                  <Link to="/studios">
                    <Calendar className="w-5 h-5 mr-2" />
                    View First Timer Schedule
                  </Link>
                </Button>
                <Button variant="outline" className="border-fuchsia-500/50 text-white hover:bg-fuchsia-500/10" asChild>
                  <Link to="/studios">
                    <MapPin className="w-5 h-5 mr-2" />
                    Choose My Studio
                  </Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-fuchsia-500/20"
            >
              <img 
                src="/images/first-timers/gallery-5.avif" 
                alt="Instructor helping a beginner student" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5: How Our Curriculum Works */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              How Our <span className="gradient-text">Curriculum Works</span>
            </h2>
            <p className="text-xl text-gray-300">Terms & Inductions - Your pathway to progress</p>
          </motion.div>
          
          {/* Curriculum Pathway Diagram */}
          <div className="relative mb-16">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500 -translate-y-1/2 rounded-full" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {curriculumSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center mx-auto mb-4 relative z-10 border-4 border-background">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Mini Term Schedule Table */}
          <div className="cyber-card rounded-2xl overflow-hidden">
            <div className="aspect-[21/9] w-full overflow-hidden">
              <img 
                src="/images/first-timers/gallery-6.avif" 
                alt="Studio atmosphere" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-6">How Beginners Join</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-fuchsia-500/30">
                      <th className="text-left py-3 px-4 text-fuchsia-400 font-semibold">Timing</th>
                      <th className="text-left py-3 px-4 text-fuchsia-400 font-semibold">What Happens</th>
                      <th className="text-left py-3 px-4 text-fuchsia-400 font-semibold">What You Do</th>
                      <th className="text-right py-3 px-4"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {miniTermSchedule.map((row, index) => (
                      <tr key={index} className="border-b border-gray-700/50 last:border-b-0">
                        <td className="py-4 px-4 text-white font-medium">{row.week}</td>
                        <td className="py-4 px-4 text-gray-300">{row.event}</td>
                        <td className="py-4 px-4 text-gray-400">{row.action}</td>
                        <td className="py-4 px-4 text-right">
                          {row.joinable && (
                            <Button size="sm" className="neon-button text-black text-xs">
                              Join This Intake
                            </Button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Choose Your Studio */}
      <section className="py-20 bg-gray-900/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Choose Your <span className="gradient-text">Studio</span>
            </h2>
            <p className="text-xl text-gray-300">7 locations across Melbourne</p>
          </motion.div>
        </div>
        
        {/* Sliding Studios Carousel */}
        <div className="relative">
          <div className="flex animate-scroll-left">
            {[...studios, ...studios].map((studio, index) => (
              <Link 
                key={`${studio.id}-${index}`}
                to={`/studios/${studio.id}`}
                className="flex-shrink-0 mx-3 w-[280px] cyber-card rounded-xl overflow-hidden hover:border-fuchsia-500/50 transition-all group"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={studio.image} 
                    alt={studio.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {studio.name.replace('The Pole Room ', '')}
                  </h3>
                  <p className="text-sm text-gray-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {studio.address.split(',')[0]}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Intro Offers */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Rules & CTA */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="px-4 py-2 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 text-sm font-medium mb-4 inline-block">
                Brand New Students Only
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Intro Offers for <span className="gradient-text">First Timers</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Our intro offers are exclusively for brand new students who have never trained at The Pole Room before. This is your chance to try us out at a special rate.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-green-500" />
                  4 weeks of unlimited beginner classes
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-green-500" />
                  Access to all 7 studio locations
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-green-500" />
                  Virtual Studio access included
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-green-500" />
                  No lock-in contracts
                </li>
              </ul>
              
              <Button className="neon-button text-black font-bold text-lg px-8 py-4 h-auto">
                Claim Newbie Offer
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
            
            {/* Right - Offer Card & Table */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Offer Card */}
              <div className="relative rounded-2xl border-2 border-fuchsia-500/50 bg-gray-900/50 p-8 text-center">
                <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-500/20 to-purple-500/20 rounded-2xl blur-xl" />
                <div className="relative">
                  <Sparkles className="w-12 h-12 text-fuchsia-400 mx-auto mb-4" />
                  <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Intro Offer</p>
                  <div className="text-5xl font-bold text-white mb-2">$99</div>
                  <p className="text-gray-300">for 4 weeks unlimited</p>
                  <p className="text-fuchsia-400 text-sm mt-4">Save over $100 on your first month</p>
                </div>
              </div>
              
              {/* Eligibility Table */}
              <div className="cyber-card rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-4">Eligibility</h4>
                <table className="w-full">
                  <tbody>
                    {eligibilityTable.map((row, index) => (
                      <tr key={index} className="border-b border-gray-700/50 last:border-b-0">
                        <td className="py-3 text-gray-300">{row.status}</td>
                        <td className="py-3 text-right">
                          {row.eligible ? (
                            <Check className="w-5 h-5 text-green-500 inline" />
                          ) : (
                            <X className="w-5 h-5 text-red-500 inline" />
                          )}
                        </td>
                        <td className="py-3 pl-4 text-sm text-gray-400">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 8: What to Expect */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What to Expect in Your <span className="gradient-text">First Visit</span>
            </h2>
          </motion.div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {firstVisitAccordion.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`visit-${index}`}
                className="cyber-card rounded-xl border-fuchsia-500/30 px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-white hover:text-fuchsia-400 text-left py-4 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-400 font-normal">{item.description}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pb-4">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-48 object-cover rounded-xl border border-fuchsia-500/20"
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Section 9: What to Wear */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What to Wear & <span className="gradient-text">Studio Guidelines</span>
            </h2>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* What to Wear Table */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="cyber-card rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-white mb-6">What to Wear</h3>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-fuchsia-500/30">
                    <th className="text-left py-3 text-fuchsia-400 font-semibold">Class Type</th>
                    <th className="text-left py-3 text-fuchsia-400 font-semibold">Wear This</th>
                    <th className="text-left py-3 text-fuchsia-400 font-semibold">Avoid</th>
                  </tr>
                </thead>
                <tbody>
                  {classAttire.map((row, index) => (
                    <tr key={index} className="border-b border-gray-700/50 last:border-b-0">
                      <td className="py-4 text-white font-medium">{row.classType}</td>
                      <td className="py-4 text-gray-300">{row.wear}</td>
                      <td className="py-4 text-gray-400">{row.avoid}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
            
            {/* Do's and Don'ts */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="cyber-card rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-white mb-6">Do's & Don'ts</h3>
              <div className="space-y-4">
                {studioGuidelines.map((guideline, index) => (
                  <div key={index} className="grid grid-cols-2 gap-4">
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{guideline.do}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-400 text-sm">{guideline.dont}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 10: Why Choose The Pole Room */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose <span className="gradient-text">The Pole Room</span>
            </h2>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {whyChooseFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="cyber-card rounded-xl overflow-hidden hover:border-fuchsia-500/50 transition-all group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <feature.icon className="w-6 h-6 text-fuchsia-400 mb-2" />
                  <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text">7</div>
              <p className="text-gray-400">Studios</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text">10+</div>
              <p className="text-gray-400">Years</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text">5000+</div>
              <p className="text-gray-400">Members</p>
            </div>
          </div>
        </div>
      </section>


      {/* Section 13: FAQs */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`}
                className="cyber-card rounded-xl border-fuchsia-500/30 px-6"
              >
                <AccordionTrigger className="text-white hover:text-fuchsia-400 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Section 14: Final CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/first-timers/gallery-1.png" 
            alt="Studio group photo" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/80 via-purple-600/80 to-cyan-600/80" />
        </div>
        <div className="absolute inset-0 cyber-grid opacity-20" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Clock className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Next Beginner Induction Starts Soon
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Don't wait for the "perfect time" - there isn't one. Start now and discover what you're capable of.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-purple-900 hover:bg-gray-100 font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto">
                Join the Next Intake
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto" asChild>
                <Link to="/studios">
                  Choose My Studio
                </Link>
              </Button>
            </div>
            <p className="text-purple-200 text-sm mt-6">
              No experience needed • All bodies welcome • 7 Melbourne locations
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
      
      {/* Add scroll animation */}
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default FirstTimers;
