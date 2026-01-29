import { useState } from "react";
import { ChevronRight, X, Newspaper, Clock, User, Calendar, Info, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useIsMobile } from "@/hooks/use-mobile";
import FreeTrialBookingForm from "../FreeTrialBookingForm";
import { Studio } from "@/data/studios";

// Blog posts data linked to FAQs
const blogPostsData = [
  {
    id: 2,
    title: "Getting Started: What to Expect in Your First Pole Class",
    excerpt: "Nervous about your first class? Here's everything you need to know to feel prepared and confident.",
    image: "/lovable-uploads/c7f8bec0-23c5-44db-871b-dccfbacb26a5.jpg",
    date: "January 10, 2024",
    author: "Emma Rodriguez",
    readTime: "6 min read",
    content: `
      <p>Walking into your first pole class can feel intimidating, but we're here to tell you that everyone starts somewhere, and our studio is designed to make beginners feel welcome.</p>
      
      <h3>What to Wear</h3>
      <p>For your first class, wear comfortable workout clothes - shorts and a tank top or sports bra work best. You'll need skin contact with the pole for grip, so avoid long pants and long sleeves. Bring a towel and water bottle!</p>
      
      <h3>What You'll Learn</h3>
      <p>In your introductory class, you'll cover basic pole holds, simple spins like the fireman spin and front hook, and some floor work. Don't worry about doing everything perfectly - it's all about having fun and trying something new.</p>
      
      <h3>No Experience Necessary</h3>
      <p>You don't need any dance background or particular fitness level to start. Our beginner classes are designed for absolute beginners, and our instructors will guide you every step of the way.</p>
    `
  },
  {
    id: 3,
    title: "The Science Behind Flexibility Training",
    excerpt: "Learn how flexibility training works and why it's essential for pole dancers of all levels.",
    image: "/lovable-uploads/1d83d83b-0057-4bd1-8052-79584b039a97.jpg",
    date: "January 5, 2024",
    author: "Dr. Lisa Chen",
    readTime: "10 min read",
    content: `
      <p>Flexibility is a cornerstone of pole dance, but it's also one of the most misunderstood aspects of fitness. Let's dive into the science of flexibility and how you can improve yours safely.</p>
      
      <h3>You Don't Need to Be Flexible to Start</h3>
      <p>One of the biggest myths is that you need to be flexible before starting pole. The truth is, flexibility is something you develop through consistent practice. Everyone starts at their own level.</p>
      
      <h3>How Flexibility Develops</h3>
      <p>Flexibility improves through a combination of stretching techniques, strength training, and neural adaptation. Your body learns to relax into positions over time, and your muscles become more supple with regular practice.</p>
      
      <h3>Safe Flexibility Training</h3>
      <p>Our classes incorporate warm-up stretches and cool-down sequences designed to improve flexibility gradually and safely. We never push students beyond their limits and always prioritize injury prevention.</p>
    `
  },
  {
    id: 4,
    title: "Membership Options: Finding Your Perfect Fit",
    excerpt: "Explore our flexible membership options designed to suit every lifestyle and fitness goal.",
    image: "/lovable-uploads/4d4d16ef-17d9-47e3-a464-cfa3c9b9eef6.jpg",
    date: "December 28, 2023",
    author: "Marketing Team",
    readTime: "5 min read",
    content: `
      <p>We believe fitness should fit your life, not the other way around. That's why we offer a variety of membership options to suit different schedules and goals.</p>
      
      <h3>Casual Classes</h3>
      <p>Perfect for those with unpredictable schedules. Pay as you go with no commitment. Great for trying different class types.</p>
      
      <h3>Term Courses</h3>
      <p>Our structured courses run in 8-week terms, offering a progressive curriculum that builds skills week by week. Ideal for serious students who want to level up.</p>
      
      <h3>Unlimited Memberships</h3>
      <p>For the dedicated pole enthusiast, unlimited access means you can attend as many classes as you like. This is the best value for those training multiple times per week.</p>
      
      <h3>Private Lessons</h3>
      <p>One-on-one sessions with our experienced instructors for personalized attention and accelerated progress.</p>
    `
  },
  {
    id: 7,
    title: "Is Pole Dancing Right for You? A Complete Guide for Beginners",
    excerpt: "Everything you need to know about starting your pole fitness journey, regardless of your background.",
    image: "/lovable-uploads/8b589fd4-a71e-43de-823f-c2af97fef88d.jpg",
    date: "January 15, 2024",
    author: "Sarah Mitchell",
    readTime: "8 min read",
    content: `
      <p>Pole dance fitness has evolved from its origins to become one of the most comprehensive full-body workouts available today. Whether you're looking to build strength, improve flexibility, or boost your confidence, pole fitness offers something for everyone.</p>
      
      <h3>Pole Fitness Is For Everyone</h3>
      <p>Absolutely! Pole fitness is a legitimate form of exercise that builds strength, flexibility, and confidence. Our beginner classes focus on fitness and technique in a supportive, non-intimidating environment.</p>
      
      <h3>No Prior Experience Needed</h3>
      <p>You don't need dance experience, athletic ability, or a certain body type. Our classes accommodate all fitness levels and body types. Everyone progresses at their own pace.</p>
      
      <h3>What Ages Are Appropriate?</h3>
      <p>We offer classes for teens (13+) with parental consent, adults of all ages, and even specialized 40+ classes. Pole fitness is adaptable to different life stages and fitness levels. There's no upper age limit - we have students in their 60s who love it!</p>
      
      <h3>What Makes It Special</h3>
      <p>Pole combines strength training, dance, and acrobatics into one workout. It's challenging but incredibly rewarding, and the supportive community makes every achievement feel celebrated.</p>
    `
  }
];

interface FAQItem {
  question: string;
  type: 'faq' | 'blog';
  blogPostId?: number;
  answer?: string;
}

interface StudioFAQProps {
  studio: Studio;
}

const getFAQsForStudio = (studio: Studio): FAQItem[] => {
  const locationName = studio.name.replace('The Pole Room ', '');
  
  return [
    {
      question: `How do I get started with ${studio.name}?`,
      type: 'faq',
      answer: `Starting is easy! Book your first class through our online booking system or give us a call at ${studio.phone}. We recommend starting with a Beginner Pole Foundations class - no experience required. Our friendly team will guide you through everything.`
    },
    {
      question: `Do I need any experience to start pole dancing classes at ${locationName}?`,
      type: 'blog',
      blogPostId: 2
    },
    {
      question: "What should I wear to my first class?",
      type: 'blog',
      blogPostId: 2
    },
    {
      question: `Is there parking available at the ${locationName} studio?`,
      type: 'faq',
      answer: studio.parkingInfo?.join(' ') || 'Please contact the studio for parking information.'
    },
    {
      question: "What are the class sizes like?",
      type: 'faq',
      answer: "Our classes typically have 6-10 students maximum, ensuring you get personalized attention from your instructor. This intimate setting allows for proper supervision and hands-on corrections."
    },
    {
      question: "How do I choose my first class?",
      type: 'faq',
      answer: "We recommend starting with 'Beginner Pole Foundations' - it's designed specifically for first-timers with no experience required. After completing the foundations, your instructor will help guide you to the right progression class."
    },
    {
      question: "Do I need to be fit, flexible or strong to start?",
      type: 'blog',
      blogPostId: 3
    },
    {
      question: "What ages is pole dancing appropriate for?",
      type: 'blog',
      blogPostId: 7
    },
    {
      question: "What membership options do you offer?",
      type: 'blog',
      blogPostId: 4
    },
    {
      question: "Can I visit the studio before signing up?",
      type: 'faq',
      answer: `Absolutely! We encourage studio visits before booking your first class. Drop in to ${studio.address} during our opening hours to meet the team, see the space, and ask any questions. No appointment needed!`
    }
  ];
};

const StudioFAQ = ({ studio }: StudioFAQProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<typeof blogPostsData[0] | null>(null);
  const isMobile = useIsMobile();
  
  const faqs = getFAQsForStudio(studio);

  const handleFaqClick = (blogPostId: number) => {
    const post = blogPostsData.find(p => p.id === blogPostId);
    if (post) {
      setSelectedPost(post);
      setIsOpen(true);
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-fuchsia-400 text-sm uppercase tracking-widest mb-3">Got Questions?</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-white">Frequently Asked </span>
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about {studio.name}. Click on blog posts to read more.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              faq.type === 'faq' ? (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <AccordionItem 
                    value={`faq-${index}`} 
                    className="border border-cyan-500/20 rounded-xl px-5 bg-gray-900/50 data-[state=open]:border-cyan-500/50 transition-colors"
                  >
                    <AccordionTrigger className="py-5 hover:no-underline group">
                      <div className="flex items-center gap-4 flex-1">
                        <span className="font-medium text-white text-left group-hover:text-cyan-400 transition-colors">
                          {faq.question}
                        </span>
                      </div>
                      <Badge variant="outline" className="text-xs border-cyan-500/30 text-cyan-400 shrink-0 mr-3">
                        <Info className="w-3 h-3 mr-1" />
                        FAQ
                      </Badge>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 pb-5 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ) : (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  onClick={() => handleFaqClick(faq.blogPostId!)}
                  className="group cursor-pointer border border-fuchsia-500/20 rounded-xl p-5 bg-gray-900/50 hover:border-fuchsia-500/50 hover:bg-gray-900/80 transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-medium text-white group-hover:text-fuchsia-400 transition-colors">
                      {faq.question}
                    </span>
                    <div className="flex items-center gap-2 shrink-0">
                      <Badge variant="outline" className="text-xs border-fuchsia-500/30 text-fuchsia-400">
                        <Newspaper className="w-3 h-3 mr-1" />
                        Blog
                      </Badge>
                      <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-fuchsia-400 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </Accordion>
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">Still have questions? We'd love to hear from you!</p>
          <FreeTrialBookingForm />
        </motion.div>
      </div>

      {/* Blog Post Side Panel */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent 
          side={isMobile ? "top" : "left"}
          className={`
            bg-gray-950 border-fuchsia-500/30 p-0 flex flex-col
            ${isMobile 
              ? 'h-[90vh] w-full inset-x-0 rounded-b-2xl' 
              : 'w-full sm:w-1/2 sm:max-w-[50vw] h-full'
            }
          `}
        >
          {/* Custom Close Button */}
          <SheetClose className="absolute right-4 top-4 z-50 rounded-full bg-gray-800/80 p-2 hover:bg-fuchsia-500/20 transition-colors">
            <X className="h-5 w-5 text-white" />
            <span className="sr-only">Close</span>
          </SheetClose>

          {selectedPost && (
            <>
              {/* Header */}
              <SheetHeader className="p-6 pb-4 border-b border-fuchsia-500/20">
                <div className="flex items-center gap-2 mb-3">
                  <Badge className="bg-fuchsia-500/20 text-fuchsia-400 border-fuchsia-500/30">
                    <Newspaper className="w-3 h-3 mr-1" />
                    Blog Post
                  </Badge>
                </div>
                <SheetTitle className="text-xl sm:text-2xl font-bold text-white text-left pr-8">
                  {selectedPost.title}
                </SheetTitle>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mt-2">
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {selectedPost.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {selectedPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {selectedPost.readTime}
                  </span>
                </div>
              </SheetHeader>

              {/* Scrollable Content */}
              <ScrollArea className="flex-1 p-6">
                {/* Featured Image */}
                <div className="mb-6 rounded-xl overflow-hidden">
                  <img 
                    src={selectedPost.image} 
                    alt={selectedPost.title}
                    className="w-full h-48 sm:h-64 object-cover"
                  />
                </div>

                {/* Excerpt */}
                <p className="text-fuchsia-300 text-lg mb-6 leading-relaxed">
                  {selectedPost.excerpt}
                </p>

                {/* Content */}
                <div 
                  className="prose prose-invert prose-fuchsia max-w-none
                    prose-headings:text-white prose-headings:font-bold prose-headings:mt-6 prose-headings:mb-3
                    prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4
                    prose-strong:text-fuchsia-400
                    prose-a:text-fuchsia-400 prose-a:no-underline hover:prose-a:underline"
                  dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                />
              </ScrollArea>

              {/* Footer */}
              <div className="p-6 pt-4 border-t border-fuchsia-500/20 bg-gray-950">
                <Link to={`/blog/${selectedPost.id}`} onClick={() => setIsOpen(false)}>
                  <Button className="w-full neon-button">
                    Read Full Article
                  </Button>
                </Link>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default StudioFAQ;
