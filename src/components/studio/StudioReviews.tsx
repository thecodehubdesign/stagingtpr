
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

interface StudioReviewsProps {
  studioId: string;
}

const StudioReviews = ({ studioId }: StudioReviewsProps) => {
  // Mock review data - in a real app, this would be fetched from Google Reviews API
  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      rating: 5,
      date: "2 weeks ago",
      review: "Amazing studio with incredible instructors! I've grown so much in confidence and strength since starting here. The community is so welcoming and supportive."
    },
    {
      id: 2,
      name: "Jessica R.",
      rating: 5,
      date: "1 month ago", 
      review: "Best decision I ever made was joining The Pole Room! The classes are challenging but fun, and the instructors really care about your progress."
    },
    {
      id: 3,
      name: "Emma L.",
      rating: 5,
      date: "3 weeks ago",
      review: "I was so nervous for my first class but everyone was so welcoming! Now I'm addicted and come 3 times a week. Such a great workout and stress relief!"
    },
    {
      id: 4,
      name: "Rachel K.",
      rating: 5,
      date: "1 week ago",
      review: "The aerial classes here are phenomenal! Great equipment, knowledgeable instructors, and a beautiful studio space. Highly recommend!"
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            What Our <span className="gradient-text">Students Say</span>
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-xl font-bold text-white">5.0</span>
            <span className="text-gray-400">• Based on 50+ Google Reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="p-6 bg-gray-800 border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-bold text-white">{review.name}</h4>
                  <span className="text-sm text-gray-400">{review.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">{review.review}</p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Ready to write your own success story?</p>
          <Button className="neon-button text-black font-bold text-lg px-8 py-3">
            Book Your Free Trial
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StudioReviews;
