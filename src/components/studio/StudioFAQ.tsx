import { useState } from "react";
import { ChevronRight, X, Newspaper, Clock, User, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import FreeTrialBookingForm from "../FreeTrialBookingForm";

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
    id: 5,
    title: "Bringing Friends: The Power of Working Out Together",
    excerpt: "Why bringing a friend to your first class can make all the difference in your fitness journey.",
    image: "/lovable-uploads/3cc0b943-7d1c-4140-a59c-a60390d03154.jpg",
    date: "December 20, 2023",
    author: "Sarah Mitchell",
    readTime: "4 min read",
    content: `
      <p>Everything is better with friends, and pole fitness is no exception. Here's why bringing a buddy to class can enhance your experience.</p>
      
      <h3>Shared Experience</h3>
      <p>Learning something new together creates lasting memories. You can encourage each other, laugh together, and celebrate each other's wins.</p>
      
      <h3>Accountability Partner</h3>
      <p>Having a friend to attend classes with increases your likelihood of showing up consistently. You'll motivate each other on those days when the couch seems more appealing.</p>
      
      <h3>Special Group Rates</h3>
      <p>We offer special rates for groups booking together! Whether it's a girls' night out or a regular training duo, ask about our buddy discounts.</p>
    `
  },
  {
    id: 6,
    title: "Understanding Our Cancellation Policy",
    excerpt: "Life happens! Here's everything you need to know about our flexible cancellation policy.",
    image: "/lovable-uploads/8a7c62c9-86e6-4d10-a555-f79e5ed95001.png",
    date: "December 15, 2023",
    author: "Admin Team",
    readTime: "3 min read",
    content: `
      <p>We understand that life can be unpredictable. Our cancellation policy is designed to be fair while ensuring classes remain available for all students.</p>
      
      <h3>Cancellation Window</h3>
      <p>Classes can be cancelled up to 12 hours before the scheduled start time without penalty. This allows other students on the waitlist to take your spot.</p>
      
      <h3>Late Cancellations</h3>
      <p>Cancellations made less than 12 hours before class will be counted as a used class for casual passers or marked as attended for term students.</p>
      
      <h3>How to Cancel</h3>
      <p>You can cancel through our booking system, app, or by contacting the studio directly. We make it easy to manage your bookings.</p>
      
      <h3>Freezing Memberships</h3>
      <p>Going on holiday or dealing with an injury? We offer membership freezes for extended absences. Just chat with our team to arrange.</p>
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
      
      <h3>What Makes It Special</h3>
      <p>Pole combines strength training, dance, and acrobatics into one workout. It's challenging but incredibly rewarding, and the supportive community makes every achievement feel celebrated.</p>
    `
  }
];

// FAQ data with linked blog posts
const faqs = [
  {
    question: "What should I wear to my first class?",
    blogPostId: 2
  },
  {
    question: "Do I need to be fit or flexible to start?",
    blogPostId: 3
  },
  {
    question: "Is pole dancing appropriate for beginners?",
    blogPostId: 7
  },
  {
    question: "What's included in my membership?",
    blogPostId: 4
  },
  {
    question: "Can I bring a friend to class?",
    blogPostId: 5
  },
  {
    question: "What if I need to cancel or reschedule?",
    blogPostId: 6
  }
];

const StudioFAQ = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<typeof blogPostsData[0] | null>(null);
  const isMobile = useIsMobile();

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
            Click on any question to read our detailed blog article with all the information you need.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => handleFaqClick(faq.blogPostId)}
              className="group cursor-pointer border border-primary/20 rounded-xl p-5 bg-gray-900/50 hover:border-fuchsia-500/50 hover:bg-gray-900/80 transition-all duration-300"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-medium text-white group-hover:text-fuchsia-400 transition-colors">
                  {faq.question}
                </span>
                <div className="flex items-center gap-2 shrink-0">
                  <Badge variant="outline" className="text-xs border-fuchsia-500/30 text-fuchsia-400 hidden sm:flex">
                    <Newspaper className="w-3 h-3 mr-1" />
                    Blog
                  </Badge>
                  <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-fuchsia-400 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
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
