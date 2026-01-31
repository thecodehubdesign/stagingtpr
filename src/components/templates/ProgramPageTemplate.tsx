import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { 
  Clock, Users, Star, Calendar, Check, ChevronLeft, ChevronRight, 
  ChevronDown, MapPin, Search, ClipboardCheck 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { studios } from '@/data/studios';
import { programs } from '@/data/programs';

interface CurriculumWeek {
  week: number;
  title: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface Instructor {
  name: string;
  image: string;
  specialty: string;
}

interface ProgramPageProps {
  badge: string;
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;
  duration: string;
  classSize: string;
  frequency: string;
  level: string;
  highlights: string[];
  curriculum: CurriculumWeek[];
  whatToBring: string[];
  prerequisites?: string[];
  faqs: FAQ[];
  instructors?: Instructor[];
  price?: string;
  ctaText?: string;
  images?: string[];
  availableStudios?: string[];
}

// Static term schedule data
const termSchedule = [
  { name: 'Term 1 2025', startDate: 'Feb 10', endDate: 'Apr 4', status: 'In Progress' },
  { name: 'Term 2 2025', startDate: 'Apr 28', endDate: 'Jun 20', status: 'Enrolling' },
  { name: 'Term 3 2025', startDate: 'Jul 21', endDate: 'Sep 12', status: 'Coming Soon' },
  { name: 'Term 4 2025', startDate: 'Oct 13', endDate: 'Dec 5', status: 'Coming Soon' },
  { name: 'Term 1 2026', startDate: 'Feb 9', endDate: 'Apr 3', status: 'Coming Soon' },
  { name: 'Term 2 2026', startDate: 'Apr 27', endDate: 'Jun 19', status: 'Coming Soon' },
];

const ProgramPageTemplate = ({
  badge,
  title,
  subtitle,
  heroImage,
  description,
  duration,
  classSize,
  frequency,
  level,
  highlights,
  curriculum,
  whatToBring,
  prerequisites,
  faqs,
  instructors,
  price,
  ctaText = "Book Your Free Trial",
  images,
  availableStudios
}: ProgramPageProps) => {
  useScrollToTop();
  
  // Image carousel state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const carouselImages = images && images.length > 0 ? images : [heroImage];
  
  // Program search state
  const [programSearch, setProgramSearch] = useState('');
  const [selectedProgramStudio, setSelectedProgramStudio] = useState<string | null>(null);
  const [selectedProgramCategory, setSelectedProgramCategory] = useState<string | null>(null);
  
  // Filter programs
  const filteredPrograms = useMemo(() => {
    return programs.filter(program => {
      const matchesSearch = program.name.toLowerCase().includes(programSearch.toLowerCase()) ||
                           program.description.toLowerCase().includes(programSearch.toLowerCase());
      const matchesCategory = !selectedProgramCategory || program.category === selectedProgramCategory;
      return matchesSearch && matchesCategory;
    });
  }, [programSearch, selectedProgramCategory]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Clear Page Labeling */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          {/* Tagline in bubble */}
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 text-sm font-medium mb-6"
          >
            {subtitle}
          </motion.span>
          
          {/* Page name as title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            <span className="gradient-text">{title}</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
          
          {/* Level Progression - Integrated into Hero */}
          {(() => {
            const poleLevels = [
              { abbr: 'Beg', fullName: 'Pole Beginner', href: '/programs/pole/beginner' },
              { abbr: 'Int 1', fullName: 'Pole Intermediate', href: '/programs/pole/intermediate' },
              { abbr: 'Int 2', fullName: 'Pole Intermediate 2', href: '/programs/pole/intermediate-2' },
              { abbr: 'Adv 1', fullName: 'Pole Advanced', href: '/programs/pole/advanced' },
              { abbr: 'Adv 2', fullName: 'Pole Advanced 2', href: '/programs/pole/advanced-2' },
              { abbr: 'Elite', fullName: 'Pole Elite', href: '/programs/pole/elite' },
            ];
            
            // Determine current level based on page title
            const getCurrentLevelIndex = () => {
              const titleLower = title.toLowerCase();
              if (titleLower.includes('intermediate 2') || titleLower.includes('inter 2')) return 2;
              if (titleLower.includes('advanced 2') || titleLower.includes('adv 2')) return 4;
              if (titleLower.includes('beginner')) return 0;
              if (titleLower.includes('intermediate')) return 1;
              if (titleLower.includes('advanced')) return 3;
              if (titleLower.includes('elite')) return 5;
              return -1; // Not a pole level page
            };
            const currentLevelIndex = getCurrentLevelIndex();
            
            // Only show for pole programs
            if (currentLevelIndex === -1) return null;
            
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-10"
              >
                <div className="relative max-w-2xl mx-auto">
                  {/* Connecting line */}
                  <div className="hidden md:block absolute top-7 left-[8%] right-[8%] h-1 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-fuchsia-500 rounded-full" />
                  
                  {/* Level circles - 6 columns on desktop, 3x2 on mobile */}
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-2">
                    {poleLevels.map((level, index) => {
                      const isCurrentLevel = index === currentLevelIndex;
                      
                      return (
                        <motion.div
                          key={level.abbr}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + index * 0.05 }}
                          className="relative"
                        >
                          <Link to={level.href} className="group block">
                            <div className={`
                              w-14 h-14 rounded-full 
                              bg-gradient-to-br from-fuchsia-500 to-purple-600 
                              flex items-center justify-center mx-auto 
                              relative z-10 border-4 
                              ${isCurrentLevel 
                                ? 'border-cyan-400 shadow-[0_0_20px_rgba(0,255,255,0.5)] scale-110' 
                                : 'border-background group-hover:scale-105'
                              } 
                              transition-all duration-300
                            `}>
                              <span className="text-xs font-bold text-white text-center leading-tight">
                                {level.abbr}
                              </span>
                            </div>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })()}
        </div>
      </section>

      {/* Prerequisites Section - Moved here after Level Progression */}
      {prerequisites && prerequisites.length > 0 && (
        <section className="py-16 bg-gray-900/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="cyber-card rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Prerequisites</h3>
              <ul className="space-y-3 max-w-xl mx-auto">
                {prerequisites.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>
      )}

      {/* Program Overview - Image Carousel (LEFT) + Highlights (RIGHT) + Stats Bar */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-fuchsia-400 font-medium text-sm uppercase tracking-wider">
              Program Overview
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
              What You'll <span className="gradient-text">Learn</span>
            </h2>
          </motion.div>
          
          {/* Top Row: Image Carousel (LEFT) + Highlights (RIGHT) - SWAPPED */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            {/* Left: Image Carousel */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden cyber-card">
                <img 
                  src={carouselImages[currentImageIndex]}
                  alt="Program preview"
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
              </div>
              
              {/* Carousel Navigation - only show if multiple images */}
              {carouselImages.length > 1 && (
                <>
                  <button 
                    onClick={() => setCurrentImageIndex(prev => prev === 0 ? carouselImages.length - 1 : prev - 1)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-fuchsia-500/30 flex items-center justify-center text-white hover:bg-fuchsia-500/20 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => setCurrentImageIndex(prev => prev === carouselImages.length - 1 ? 0 : prev + 1)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-fuchsia-500/30 flex items-center justify-center text-white hover:bg-fuchsia-500/20 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  
                  {/* Dots indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {carouselImages.map((_, index) => (
                      <button 
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-fuchsia-400' : 'bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </motion.div>
            
            {/* Right: Program Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Program Highlights</h3>
              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">{highlight}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Bottom Row: Horizontal Stats Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            <div className="cyber-card rounded-xl p-4 flex items-center gap-3">
              <Clock className="w-6 h-6 text-fuchsia-400" />
              <div>
                <p className="text-sm text-gray-400">Duration</p>
                <p className="font-semibold text-white">{duration}</p>
              </div>
            </div>
            <div className="cyber-card rounded-xl p-4 flex items-center gap-3">
              <Users className="w-6 h-6 text-fuchsia-400" />
              <div>
                <p className="text-sm text-gray-400">Class Size</p>
                <p className="font-semibold text-white">{classSize}</p>
              </div>
            </div>
            <div className="cyber-card rounded-xl p-4 flex items-center gap-3">
              <Calendar className="w-6 h-6 text-fuchsia-400" />
              <div>
                <p className="text-sm text-gray-400">Frequency</p>
                <p className="font-semibold text-white">{frequency}</p>
              </div>
            </div>
            <div className="cyber-card rounded-xl p-4 flex items-center gap-3">
              <Star className="w-6 h-6 text-fuchsia-400" />
              <div>
                <p className="text-sm text-gray-400">Level</p>
                <p className="font-semibold text-white">{level}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Curriculum - First Timers Pathway Style */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Your <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-gray-300">Week by week progression</p>
          </motion.div>
          
          {/* Pathway Diagram - First 4 weeks */}
          <div className="relative mb-12">
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-1 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500 rounded-full" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {curriculum.slice(0, 4).map((week, index) => (
                <motion.div
                  key={week.week}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center mx-auto mb-4 relative z-10 border-4 border-background">
                    <span className="text-xl font-bold text-white">{week.week}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{week.title}</h3>
                  <p className="text-sm text-gray-400">{week.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Remaining weeks as cards if more than 4 */}
          {curriculum.length > 4 && (
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {curriculum.slice(4).map((week, index) => (
                <motion.div
                  key={week.week}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="cyber-card rounded-xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-fuchsia-500/20 to-purple-600/20 border border-fuchsia-500/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-fuchsia-400 font-bold">W{week.week}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">{week.title}</h4>
                      <p className="text-gray-400">{week.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Upcoming Term Schedule - First Timers Table Style */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Upcoming <span className="gradient-text">Term Dates</span>
            </h2>
            <p className="text-gray-300">8-week program blocks over the next 12 months</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cyber-card rounded-2xl overflow-hidden"
          >
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-fuchsia-500/30">
                      <th className="text-left py-3 px-4 text-fuchsia-400 font-semibold">Term</th>
                      <th className="text-left py-3 px-4 text-fuchsia-400 font-semibold">Start Date</th>
                      <th className="text-left py-3 px-4 text-fuchsia-400 font-semibold">End Date</th>
                      <th className="text-left py-3 px-4 text-fuchsia-400 font-semibold">Status</th>
                      <th className="text-right py-3 px-4"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {termSchedule.map((term, index) => (
                      <tr key={index} className="border-b border-gray-700/50 last:border-b-0">
                        <td className="py-4 px-4 text-white font-medium">{term.name}</td>
                        <td className="py-4 px-4 text-gray-300">{term.startDate}</td>
                        <td className="py-4 px-4 text-gray-300">{term.endDate}</td>
                        <td className="py-4 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            term.status === 'Enrolling' 
                              ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                              : term.status === 'In Progress'
                              ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                              : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                          }`}>
                            {term.status}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-right">
                          {term.status === 'Enrolling' && (
                            <Button size="sm" className="neon-button text-black text-xs" asChild>
                              <Link to="/get-started">Enrol Now</Link>
                            </Button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
          
          {/* Midterm Enrollment Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30"
          >
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-cyan-400 font-medium mb-1">Midterm Enrollments Available</p>
                <p className="text-gray-300 text-sm">
                  We accept enrolments every 4 weeks (midterm - Week 5) as our Pole Foundations Beginner level allows for flexible start dates.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Prerequisites Section moved above Program Overview */}

      {/* Grading Assessment CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cyber-card rounded-2xl p-8 text-center border-cyan-500/30"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-6">
              <ClipboardCheck className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Returning or Coming From Another Studio?
            </h3>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Not sure which level is right for you? Take our quick grading assessment to find the perfect fit for your current skill level.
            </p>
            <Button className="neon-button text-black" asChild>
              <Link to="/grading-assessment">
                Take the Grading Assessment
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section - First Timers Style */}
      <section className="py-20 bg-gray-900/50">
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
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <AccordionItem value={`item-${index}`} className="cyber-faq-item">
                  <AccordionTrigger className="py-5 text-left font-medium text-white hover:text-fuchsia-400 hover:no-underline transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Available Studios Section */}
      {availableStudios && availableStudios.length > 0 && (
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Available <span className="gradient-text">Locations</span>
              </h2>
              <p className="text-gray-300">This program is offered at these studios</p>
            </motion.div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {availableStudios.map((studioId) => {
                const studio = studios.find(s => s.id === studioId);
                if (!studio) return null;
                return (
                  <motion.div
                    key={studioId}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <Link 
                      to={`/studios/${studioId}`}
                      className="block cyber-card rounded-xl p-6 hover:border-fuchsia-500/50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            {studio.name.replace('The Pole Room ', '')}
                          </h3>
                          <p className="text-sm text-gray-400">{studio.address}</p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Explore Other Programs Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Explore Our <span className="gradient-text">Programs</span>
            </h2>
            <p className="text-gray-300">Find other classes that match your interests</p>
          </motion.div>
          
          {/* Search and Filters */}
          <div className="flex flex-col items-center gap-4 mb-12">
            {/* Search Input */}
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-fuchsia-400" />
              <Input
                type="text"
                placeholder="Search programs..."
                value={programSearch}
                onChange={(e) => setProgramSearch(e.target.value)}
                className="pl-10 border-fuchsia-500/50 bg-background/50 focus:border-fuchsia-400"
              />
            </div>

            {/* Dropdown Filters */}
            <div className="flex flex-wrap justify-center gap-4">
              {/* Filter by Studio */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="border-fuchsia-500/50 bg-background/50 min-w-[200px] justify-between">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-fuchsia-400" />
                      {selectedProgramStudio || 'All Studios'}
                    </div>
                    <ChevronDown className="w-4 h-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-gray-900 border-fuchsia-500/30">
                  <DropdownMenuItem onClick={() => setSelectedProgramStudio(null)}>
                    All Studios
                  </DropdownMenuItem>
                  {studios.map((studio) => (
                    <DropdownMenuItem key={studio.id} onClick={() => setSelectedProgramStudio(studio.name)}>
                      {studio.name.replace('The Pole Room ', '')}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Filter by Category */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="border-fuchsia-500/50 bg-background/50 min-w-[200px] justify-between">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-fuchsia-400" />
                      {selectedProgramCategory || 'All Categories'}
                    </div>
                    <ChevronDown className="w-4 h-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-gray-900 border-fuchsia-500/30">
                  <DropdownMenuItem onClick={() => setSelectedProgramCategory(null)}>All Categories</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedProgramCategory('Pole')}>Pole</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedProgramCategory('Aerial')}>Aerial</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedProgramCategory('Dance')}>Dance</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedProgramCategory('Flexibility')}>Flexibility</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          
          {/* Program Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((program, index) => (
              <motion.div
                key={program.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link to={program.href}>
                  <Card className="cyber-card rounded-xl overflow-hidden hover:scale-105 transition-transform border-0">
                    <div className="h-48 overflow-hidden">
                      <img src={program.image} alt={program.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 text-xs rounded-full bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/30">
                          {program.category}
                        </span>
                        <span className="px-2 py-1 text-xs rounded-full bg-gray-500/10 text-gray-400 border border-gray-500/30">
                          {program.level}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{program.name}</h3>
                      <p className="text-gray-400 text-sm line-clamp-2">{program.description}</p>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProgramPageTemplate;
