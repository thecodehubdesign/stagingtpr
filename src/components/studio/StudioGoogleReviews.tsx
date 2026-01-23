import { useState } from 'react';
import { Star, ChevronDown, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { motion, AnimatePresence } from 'framer-motion';

interface GoogleReview {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  review: string;
  date: string;
}

interface StudioGoogleReviewsProps {
  studioId: string;
}

const reviews: GoogleReview[] = [
  {
    id: 1,
    name: "Amy",
    avatar: "/images/testimonials/amber.png",
    rating: 5,
    review: "Everyone is so kind and welcoming! I used to get so nervous going to classes and now I love it. The instructors are amazing and make you feel like you belong from day one.",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "May Wong",
    avatar: "/images/testimonials/sarah.png",
    rating: 5,
    review: "Starting my pole journey with TPR was the best decision I've ever made. The community is incredible and the progress I've made in just a few months is beyond what I imagined.",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Beth",
    avatar: "/images/testimonials/courtney.png",
    rating: 5,
    review: "This is an amazing and supportive space for anyone wanting to try pole or aerial. No judgment, just encouragement and fun! I've made lifelong friends here.",
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "Sarah M",
    avatar: "/images/testimonials/lauren.png",
    rating: 5,
    review: "I've been coming here for 6 months and my strength and confidence have completely transformed. The instructors remember your name and genuinely care about your progress.",
    date: "1 month ago"
  },
  {
    id: 5,
    name: "Lauren",
    avatar: "/images/testimonials/simone.png",
    rating: 5,
    review: "Best fitness decision I've ever made! I dreaded going to the gym but now I actually look forward to my classes. The vibe is so welcoming and fun.",
    date: "2 months ago"
  },
  {
    id: 6,
    name: "Simone",
    avatar: "/images/testimonials/alex.png",
    rating: 5,
    review: "Found my new happy place! The aerial silks classes are incredible and the instructors break everything down so well. Can't recommend TPR enough!",
    date: "1 month ago"
  },
  {
    id: 7,
    name: "Jessica R",
    avatar: "/images/testimonials/amber.png",
    rating: 5,
    review: "Best decision I ever made joining TPR! I was so intimidated at first but everyone made me feel so welcome. Now I'm addicted!",
    date: "3 months ago"
  },
  {
    id: 8,
    name: "Emma L",
    avatar: "/images/testimonials/sarah.png",
    rating: 5,
    review: "I was so nervous for my first class but the instructors were amazing. They made sure I felt comfortable and confident. Now I'm hooked!",
    date: "2 months ago"
  },
  {
    id: 9,
    name: "Rachel K",
    avatar: "/images/testimonials/courtney.png",
    rating: 5,
    review: "The aerial classes are phenomenal! Great progression system and the instructors really know their stuff. Highly recommend to anyone thinking about it!",
    date: "1 month ago"
  }
];

const ReviewCard = ({ review }: { review: GoogleReview }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="bg-gray-800/80 border border-gray-700 rounded-xl p-6 flex flex-col"
  >
    {/* Stars */}
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className="w-5 h-5 fill-yellow-400 text-yellow-400"
        />
      ))}
    </div>

    {/* Review Text */}
    <p className="text-white/90 text-sm leading-relaxed flex-1 mb-6">
      "{review.review}"
    </p>

    {/* Footer */}
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Avatar className="w-10 h-10">
          <AvatarImage src={review.avatar} alt={review.name} />
          <AvatarFallback className="bg-fuchsia-500/20 text-fuchsia-400">
            {review.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <span className="font-medium text-white">{review.name}</span>
      </div>
      
      {/* Verified Badge */}
      <div className="flex items-center gap-1.5 text-green-400 text-sm">
        <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
          <Check className="w-3 h-3 text-white" />
        </div>
        <span>Verified Review</span>
      </div>
    </div>
  </motion.div>
);

const StudioGoogleReviews = ({ studioId }: StudioGoogleReviewsProps) => {
  const [showAll, setShowAll] = useState(false);
  const visibleReviews = showAll ? reviews : reviews.slice(0, 3);

  return (
    <section className="py-8 sm:py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          {/* Rating Badge */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 sm:w-6 sm:h-6 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-white/80 text-sm sm:text-lg">
              Rated <span className="text-white font-semibold">4.9/5</span> · 300+ Reviews
            </span>
            {/* Google Logo */}
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-2">
            Hear From People Who Started Right Where You Are Now
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <AnimatePresence mode="popLayout">
            {visibleReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </AnimatePresence>
        </div>

        {/* Show More Button */}
        {reviews.length > 3 && (
          <div className="text-center px-4">
            <Button
              variant="outline"
              onClick={() => setShowAll(!showAll)}
              className="bg-fuchsia-500/10 border-fuchsia-500/30 text-fuchsia-400 hover:bg-fuchsia-500/20 hover:text-fuchsia-300 px-4 sm:px-8 py-4 sm:py-6 text-sm sm:text-lg w-full sm:w-auto"
            >
              <span className="truncate">
                {showAll ? 'Show Less' : `Show ${reviews.length - 3} More Reviews`}
              </span>
              <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 ml-2 flex-shrink-0 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default StudioGoogleReviews;
