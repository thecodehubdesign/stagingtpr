
import { ArrowLeft, Calendar, User, Tag, Clock } from 'lucide-react';
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
      tags: ["Mental Health", "Pole Dancing", "Wellness"],
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Getting Started: What to Expect in Your First Pole Class",
      excerpt: "Nervous about your first pole class? Here's everything you need to know to feel confident and prepared.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      date: "March 10, 2024",
      author: "Sarah Mitchell",
      tags: ["Beginners", "Tips", "First Class"],
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "The Science Behind Flexibility Training",
      excerpt: "Understanding the biomechanics of stretching and how our flexibility program accelerates your progress.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      date: "March 5, 2024",
      author: "Dr. Amanda Chen",
      tags: ["Flexibility", "Science", "Training"],
      readTime: "7 min read"
    },
    {
      id: 4,
      title: "Aerial Silks vs Pole: Which is Right for You?",
      excerpt: "Explore the differences between aerial silks and pole dancing to find your perfect aerial art form.",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1472&q=80",
      date: "February 28, 2024",
      author: "Emma Rodriguez",
      tags: ["Aerial Silks", "Pole Dancing", "Comparison"],
      readTime: "6 min read"
    },
    {
      id: 5,
      title: "Building Upper Body Strength for Aerial Arts",
      excerpt: "Essential exercises and techniques to develop the strength needed for pole and aerial performances.",
      image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      date: "February 20, 2024",
      author: "Marcus Thompson",
      tags: ["Strength Training", "Upper Body", "Fitness"],
      readTime: "8 min read"
    },
    {
      id: 6,
      title: "Creating a Home Practice Space",
      excerpt: "Tips for setting up a safe and inspiring practice area in your own home.",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=1488&q=80",
      date: "February 15, 2024",
      author: "Lisa Park",
      tags: ["Home Practice", "Setup", "Safety"],
      readTime: "5 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-background cyber-grid pt-16">
      {/* Hero Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black border-b border-fuchsia-500/30">
        <div className="absolute inset-0 cyber-grid opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center space-x-4 mb-8">
            <Button 
              variant="ghost" 
              onClick={() => window.history.back()}
              className="text-gray-300 hover:text-fuchsia-400 hover:bg-gray-800/50"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </div>
          
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
              The Pole Room Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Tips, inspiration, and insights from our community of instructors and students. 
              Discover the world of pole dancing, aerial arts, and fitness through expert advice and real stories.
            </p>
            <div className="flex justify-center">
              <div className="h-1 w-20 bg-gradient-to-r from-fuchsia-500 to-cyan-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card 
              key={post.id} 
              className="cyber-card overflow-hidden hover:shadow-2xl hover:shadow-fuchsia-500/20 transition-all duration-300 group cursor-pointer"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4 text-fuchsia-400" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-100 mb-3 hover:text-fuchsia-400 transition-colors group-hover:text-fuchsia-300 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center space-x-1 mb-4">
                  <User className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-400">{post.author}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Tag className="w-4 h-4 text-gray-500" />
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <span 
                          key={index} 
                          className="text-xs bg-fuchsia-500/20 text-fuchsia-300 px-2 py-1 rounded border border-fuchsia-500/30 hover:bg-fuchsia-500/30 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10 neon-button text-sm"
                  >
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Section */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="neon-button bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white px-8 py-4 text-lg hover:from-fuchsia-600 hover:to-cyan-600"
          >
            Load More Posts
          </Button>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-fuchsia-900/20 to-cyan-900/20 border-t border-fuchsia-500/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold gradient-text mb-4">
            Stay in the Loop
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Get the latest tips, stories, and updates delivered straight to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800/50 border border-fuchsia-500/30 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-400/20"
            />
            <Button className="neon-button bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white px-6 py-3 hover:from-fuchsia-600 hover:to-cyan-600">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
