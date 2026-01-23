import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, X } from 'lucide-react';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  review: string;
  date: string;
  verified: boolean;
  tags: string[];
}

// Mock reviews data by studio with tags for filtering
const reviewsByStudio: Record<string, Review[]> = {
  mitcham: [
    {
      id: 1,
      name: "Amy",
      avatar: "/images/testimonials/alex.png",
      rating: 5,
      review: "Everyone is so kind and welcoming, and SO encouraging of one another. From the second you walk in the door, you're home. Best decision I ever made was joining TPR!",
      date: "2 weeks ago",
      verified: true,
      tags: ['community', 'studio']
    },
    {
      id: 2,
      name: "May Wong",
      avatar: "/images/testimonials/amber.png",
      rating: 5,
      review: "Starting my pole journey with TPR has been an incredible experience! The instructors and community at TPR are amazing. They make every class feel special and push you to be your best.",
      date: "1 month ago",
      verified: true,
      tags: ['instructors', 'community', 'classes']
    },
    {
      id: 3,
      name: "Beth",
      avatar: "/images/testimonials/courtney.png",
      rating: 5,
      review: "This is an amazing and supportive space! It is always fun to go and while the classes are challenging they don't feel like a workout. The instructors are incredible!",
      date: "3 weeks ago",
      verified: true,
      tags: ['studio', 'classes', 'instructors']
    },
    {
      id: 4,
      name: "Sarah M",
      avatar: "/images/testimonials/sarah.png",
      rating: 5,
      review: "I've been coming here for 6 months now and I can honestly say it's changed my life. The confidence I've gained is incredible. Love this place!",
      date: "1 week ago",
      verified: true,
      tags: ['community', 'studio']
    },
    {
      id: 5,
      name: "Lauren",
      avatar: "/images/testimonials/lauren.png",
      rating: 5,
      review: "Best fitness decision I've ever made! The classes are challenging but so much fun. The instructors really care about your progress.",
      date: "2 months ago",
      verified: true,
      tags: ['classes', 'instructors']
    },
    {
      id: 6,
      name: "Simone",
      avatar: "/images/testimonials/simone.png",
      rating: 5,
      review: "Found my new happy place! Every class leaves me feeling stronger and more confident. The community here is like family.",
      date: "1 month ago",
      verified: true,
      tags: ['community', 'studio', 'classes']
    }
  ],
  eltham: [
    {
      id: 1,
      name: "Jessica",
      avatar: "/images/testimonials/alex.png",
      rating: 5,
      review: "The Eltham studio is absolutely gorgeous and the instructors are so supportive. Best workout I've ever found!",
      date: "1 week ago",
      verified: true,
      tags: ['studio', 'instructors']
    },
    {
      id: 2,
      name: "Kate",
      avatar: "/images/testimonials/amber.png",
      rating: 5,
      review: "Love coming here every week! The atmosphere is so welcoming and encouraging. The community makes it special.",
      date: "3 weeks ago",
      verified: true,
      tags: ['community', 'studio']
    }
  ]
};

// Default reviews for studios without specific data
const defaultReviews: Review[] = [
  {
    id: 1,
    name: "Happy Student",
    avatar: "/images/testimonials/alex.png",
    rating: 5,
    review: "Amazing studio with incredible instructors! The community here is so supportive and welcoming.",
    date: "1 week ago",
    verified: true,
    tags: ['studio', 'instructors', 'community']
  }
];

const filterKeywords = ['community', 'studio', 'classes', 'instructors'] as const;

interface FloatingReviewsButtonProps {
  studioId: string;
}

const ReviewCard = ({ review }: { review: Review }) => (
  <div className="bg-gray-900/80 rounded-xl p-6 border border-fuchsia-500/20 hover:border-fuchsia-500/40 transition-colors">
    {/* Star Rating */}
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={cn(
            "w-5 h-5",
            i < review.rating 
              ? "fill-yellow-400 text-yellow-400" 
              : "fill-gray-600 text-gray-600"
          )} 
        />
      ))}
    </div>
    
    {/* Review Text */}
    <p className="text-white/90 leading-relaxed mb-4 text-base">
      "{review.review}"
    </p>
    
    {/* Footer: Avatar + Name / Verified Badge */}
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img 
          src={review.avatar} 
          alt={review.name}
          className="w-10 h-10 rounded-full object-cover border border-fuchsia-500/30"
        />
        <span className="font-medium text-white">{review.name}</span>
      </div>
      
      {review.verified && (
        <div className="flex items-center gap-1.5 text-fuchsia-400 text-sm">
          <img 
            src="/images/mindbody-symbol-black.svg" 
            alt="Mindbody" 
            className="w-4 h-4 invert"
          />
          <span className="font-medium">Verified Review</span>
        </div>
      )}
    </div>
  </div>
);

const FloatingReviewsButton = ({ studioId }: FloatingReviewsButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const isMobile = useIsMobile();
  
  const allReviews = reviewsByStudio[studioId] || defaultReviews;
  const reviewCount = allReviews.length;
  const displayAvatars = allReviews.slice(0, 3);
  
  // Filter reviews based on active filter
  const filteredReviews = activeFilter 
    ? allReviews.filter(r => r.tags.includes(activeFilter))
    : allReviews;
  
  // Hide on mobile
  if (isMobile) return null;
  
  return (
    <>
      {/* Floating Button - Fixed Position */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-50 bg-gray-900 rounded-full px-5 py-3 shadow-lg flex items-center gap-4 hover:shadow-xl transition-all duration-300 border border-fuchsia-500/30 hover:border-fuchsia-500/60 group"
        initial={{ opacity: 0, y: 20, x: -20 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        whileHover={{ scale: 1.02 }}
      >
        {/* Mindbody Symbol with Badge */}
        <div className="relative">
          <img 
            src="/images/mindbody-symbol-black.svg" 
            alt="Mindbody" 
            className="w-8 h-8 invert"
          />
          <span className="absolute -top-2 -right-2 bg-fuchsia-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {reviewCount}
          </span>
        </div>
        
        {/* Reviews Text */}
        <span className="font-semibold text-white group-hover:text-fuchsia-400 transition-colors">
          Reviews
        </span>
        
        {/* Stacked Avatars */}
        <div className="flex -space-x-2">
          {displayAvatars.map((review, i) => (
            <img 
              key={review.id}
              src={review.avatar}
              alt={review.name}
              className="w-8 h-8 rounded-full border-2 border-gray-900 object-cover"
              style={{ zIndex: 3 - i }}
            />
          ))}
        </div>
        
        {/* Total Count Badge */}
        <span className="bg-fuchsia-500/20 text-fuchsia-300 text-sm font-medium rounded-full px-3 py-1">
          {reviewCount > 1000 ? "1K+" : `${reviewCount}+`}
        </span>
      </motion.button>
      
      {/* Reviews Sheet Panel */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent 
          side="left" 
          className="w-full sm:w-[50vw] sm:max-w-2xl p-0 bg-gray-950 border-r border-fuchsia-500/20 overflow-hidden [&>button]:hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-950 p-6 relative border-b border-fuchsia-500/20">
            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white/70 hover:text-fuchsia-400 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Mindbody Logo */}
            <div className="mb-4">
              <img 
                src="/images/mindbody-logo.svg" 
                alt="Mindbody" 
                className="h-8 invert"
              />
            </div>
            
            {/* Title */}
            <h2 className="text-2xl font-bold text-white">
              What people say about <span className="gradient-text">our classes</span>
            </h2>
            <p className="text-gray-400 mt-1">
              {reviewCount} verified reviews from our Mindbody booking system
            </p>
            
            {/* Overall Rating */}
            <div className="flex items-center gap-2 mt-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white font-semibold">5.0</span>
              <span className="text-gray-500">({reviewCount} reviews)</span>
            </div>
            
            {/* AI Filter Section */}
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-3">Let AI filter reviews by subject...</p>
              <div className="flex flex-wrap gap-2">
                {filterKeywords.map((keyword) => (
                  <button
                    key={keyword}
                    onClick={() => setActiveFilter(activeFilter === keyword ? null : keyword)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all",
                      activeFilter === keyword
                        ? "bg-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/25"
                        : "bg-gray-800 text-gray-300 border border-fuchsia-500/30 hover:border-fuchsia-500/60 hover:text-white"
                    )}
                  >
                    {keyword.charAt(0).toUpperCase() + keyword.slice(1)}
                  </button>
                ))}
                {activeFilter && (
                  <button 
                    onClick={() => setActiveFilter(null)} 
                    className="text-fuchsia-400 text-sm hover:text-fuchsia-300 transition-colors px-2"
                  >
                    Clear
                  </button>
                )}
              </div>
              {activeFilter && (
                <p className="text-sm text-fuchsia-400 mt-2">
                  Showing {filteredReviews.length} reviews about "{activeFilter}"
                </p>
              )}
            </div>
          </div>
          
          {/* Reviews List */}
          <div className="p-6 overflow-y-auto max-h-[calc(100vh-350px)] space-y-4">
            {filteredReviews.length > 0 ? (
              filteredReviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                No reviews found for "{activeFilter}"
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default FloatingReviewsButton;
