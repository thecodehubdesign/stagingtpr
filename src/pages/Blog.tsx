import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Benefits of Pole Dancing for Mental Health",
      excerpt: "Discover how pole dancing can boost your confidence, reduce stress, and improve your overall mental wellbeing.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      date: "March 15, 2024",
      author: "Jasmine Zapka",
      tags: ["Mental Health", "Pole Dancing", "Wellness"]
    },
    {
      id: 2,
      title: "Getting Started: What to Expect in Your First Pole Class",
      excerpt: "Nervous about your first pole class? Here's everything you need to know to feel confident and prepared.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      date: "March 10, 2024",
      author: "Sarah Mitchell",
      tags: ["Beginners", "Tips", "First Class"]
    },
    {
      id: 3,
      title: "The Science Behind Flexibility Training",
      excerpt: "Understanding the biomechanics of stretching and how our flexibility program accelerates your progress.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      date: "March 5, 2024",
      author: "Dr. Amanda Chen",
      tags: ["Flexibility", "Science", "Training"]
    },
    {
      id: 4,
      title: "Aerial Silks vs Pole: Which is Right for You?",
      excerpt: "Explore the differences between aerial silks and pole dancing to find your perfect aerial art form.",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1472&q=80",
      date: "February 28, 2024",
      author: "Emma Rodriguez",
      tags: ["Aerial Silks", "Pole Dancing", "Comparison"]
    },
    {
      id: 5,
      title: "Building Upper Body Strength for Aerial Arts",
      excerpt: "Essential exercises and techniques to develop the strength needed for pole and aerial performances.",
      image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      date: "February 20, 2024",
      author: "Marcus Thompson",
      tags: ["Strength Training", "Upper Body", "Fitness"]
    },
    {
      id: 6,
      title: "Creating a Home Practice Space",
      excerpt: "Tips for setting up a safe and inspiring practice area in your own home.",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=1488&q=80",
      date: "February 15, 2024",
      author: "Lisa Park",
      tags: ["Home Practice", "Setup", "Safety"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-pink-50">
      {/* Header */}
      <div className="bg-white border-b border-rose-100 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center space-x-4 mb-6">
            <Button variant="ghost" onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">The Pole Room Blog</h1>
          <p className="text-lg text-gray-600">
            Tips, inspiration, and insights from our community of instructors and students
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-rose-600 transition-colors cursor-pointer">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Tag className="w-4 h-4 text-gray-400" />
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="text-xs bg-rose-100 text-rose-700 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-rose-600 hover:text-rose-700">
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
