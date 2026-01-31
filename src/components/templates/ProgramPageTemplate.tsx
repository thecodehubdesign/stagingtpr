import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, Clock, Users, Star, Calendar, Sparkles, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';

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
}

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
  ctaText = "Book Your Free Trial"
}: ProgramPageProps) => {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - First Timers Style */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 text-sm font-medium mb-6"
          >
            {badge}
          </motion.span>
          
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
            {subtitle}
          </motion.p>
        </div>
      </section>

      {/* Course Overview - First Timers Style */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-fuchsia-400 font-medium text-sm uppercase tracking-wider">
              Course Overview
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
              What You'll <span className="gradient-text">Learn</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">{description}</p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0 }}
                className="cyber-card rounded-xl p-4 flex items-center gap-3"
              >
                <Clock className="w-6 h-6 text-fuchsia-400" />
                <div>
                  <p className="text-sm text-gray-400">Duration</p>
                  <p className="font-semibold text-white">{duration}</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="cyber-card rounded-xl p-4 flex items-center gap-3"
              >
                <Users className="w-6 h-6 text-fuchsia-400" />
                <div>
                  <p className="text-sm text-gray-400">Class Size</p>
                  <p className="font-semibold text-white">{classSize}</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="cyber-card rounded-xl p-4 flex items-center gap-3"
              >
                <Calendar className="w-6 h-6 text-fuchsia-400" />
                <div>
                  <p className="text-sm text-gray-400">Frequency</p>
                  <p className="font-semibold text-white">{frequency}</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="cyber-card rounded-xl p-4 flex items-center gap-3"
              >
                <Star className="w-6 h-6 text-fuchsia-400" />
                <div>
                  <p className="text-sm text-gray-400">Level</p>
                  <p className="font-semibold text-white">{level}</p>
                </div>
              </motion.div>
            </div>
            
            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Course Highlights</h3>
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

      {/* What to Bring / Prerequisites - First Timers Style */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="cyber-card rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">What to Bring</h3>
              <ul className="space-y-3">
                {whatToBring.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            {prerequisites && prerequisites.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="cyber-card rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Prerequisites</h3>
                <ul className="space-y-3">
                  {prerequisites.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-cyan-400" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section - First Timers Style */}
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

      {/* Final CTA - First Timers Style with Background Image */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Studio atmosphere" 
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
            <Sparkles className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of students who have transformed their lives through pole and aerial fitness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-purple-900 hover:bg-gray-100 font-bold text-lg px-8 py-4 h-auto" asChild>
                <Link to="/get-started">
                  {ctaText}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProgramPageTemplate;
