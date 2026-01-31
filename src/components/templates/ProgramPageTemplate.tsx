import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, Clock, Users, Star, CheckCircle, Calendar, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/ui/section-header';
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
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          {/* Fuchsia Pill Badge */}
          <span className="inline-block px-4 py-2 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 text-sm font-medium mb-6">
            {badge}
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {title}
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                badgeText="Course Overview"
                title="What You'll Learn"
                subtitle={description}
              />
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <Card className="cyber-card">
                  <CardContent className="p-4 flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-semibold">{duration}</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="cyber-card">
                  <CardContent className="p-4 flex items-center space-x-3">
                    <Users className="w-6 h-6 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Class Size</p>
                      <p className="font-semibold">{classSize}</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="cyber-card">
                  <CardContent className="p-4 flex items-center space-x-3">
                    <Calendar className="w-6 h-6 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Frequency</p>
                      <p className="font-semibold">{frequency}</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="cyber-card">
                  <CardContent className="p-4 flex items-center space-x-3">
                    <Star className="w-6 h-6 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Level</p>
                      <p className="font-semibold">{level}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Course Highlights</h3>
              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeader
            badgeText="Your Journey"
            title="Curriculum Breakdown"
            subtitle="Week by week, you'll build strength, confidence, and skills"
          />
          
          <div className="mt-12 space-y-4">
            {curriculum.map((week, index) => (
              <Card key={index} className="cyber-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">W{week.week}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{week.title}</h4>
                      <p className="text-muted-foreground">{week.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What to Bring / Prerequisites */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="cyber-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">What to Bring</h3>
                <ul className="space-y-3">
                  {whatToBring.map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            {prerequisites && prerequisites.length > 0 && (
              <Card className="cyber-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Prerequisites</h3>
                  <ul className="space-y-3">
                    {prerequisites.map((item, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400" />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeader
            badgeText="Got Questions?"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about this course"
          />
          
          <Accordion type="single" collapsible className="mt-12 space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="cyber-faq-item">
                <AccordionTrigger className="py-5 text-left font-medium text-white hover:text-fuchsia-400 hover:no-underline transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-fuchsia-600 via-purple-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <Sparkles className="w-16 h-16 text-white mx-auto mb-6" />
          
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          
          <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of students who have transformed their lives through pole and aerial fitness.
          </p>
          
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-bold text-lg px-8" asChild>
            <Link to="/get-started">
              {ctaText}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProgramPageTemplate;
