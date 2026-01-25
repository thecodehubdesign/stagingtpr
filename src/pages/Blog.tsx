
import { ArrowLeft, Calendar, User, Tag, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Blog = () => {
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      title: "5 Benefits of Pole Dancing for Mental Health",
      excerpt: "Discover how pole dancing can boost your confidence, reduce stress, and improve your overall mental wellbeing.",
      image: "/images/blog/mental-health-benefits.png",
      date: "March 15, 2024",
      author: "Jasmine Zapka",
      tags: ["Mental Health", "Pole Dancing", "Wellness"],
      readTime: "5 min read",
      content: `
        <p>Pole dancing has evolved far beyond its origins to become a powerful form of fitness and self-expression that offers incredible mental health benefits. Here are five ways this art form can transform your mental wellbeing:</p>
        
        <h2>1. Boosts Self-Confidence</h2>
        <p>Learning new moves and mastering challenging combinations builds confidence like nothing else. Every small victory on the pole translates to increased self-assurance in daily life.</p>
        
        <h2>2. Reduces Stress and Anxiety</h2>
        <p>The physical exertion combined with the need for focus creates a meditative state that helps clear your mind of daily worries and stressors.</p>
        
        <h2>3. Improves Body Image</h2>
        <p>Pole dancing teaches you to appreciate what your body can do rather than focusing on how it looks. This shift in perspective is transformative for body positivity.</p>
        
        <h2>4. Creates Community Connections</h2>
        <p>The pole community is incredibly supportive and welcoming. Building friendships through shared challenges and achievements provides crucial social support.</p>
        
        <h2>5. Provides Emotional Release</h2>
        <p>Movement is a powerful way to process emotions. Pole dancing offers a safe space to express feelings and work through emotional challenges.</p>
        
        <p>Ready to experience these benefits for yourself? Book a trial class and discover how pole dancing can enhance your mental wellbeing.</p>
      `
    },
    {
      id: 2,
      title: "Getting Started: What to Expect in Your First Pole Class",
      excerpt: "Nervous about your first pole class? Here's everything you need to know to feel confident and prepared.",
      image: "/images/blog/first-class-expectations.png",
      date: "March 10, 2024",
      author: "Sarah Mitchell",
      tags: ["Beginners", "Tips", "First Class"],
      readTime: "4 min read",
      content: `
        <p>Starting your pole journey can feel intimidating, but knowing what to expect can help ease those first-class nerves. Here's your complete guide to your first pole class experience:</p>
        
        <h2>What to Wear</h2>
        <p>Wear shorts or leggings and a comfortable top. You'll want skin contact with the pole for grip, so avoid lotions on your hands and legs before class.</p>
        
        <h2>Class Structure</h2>
        <p>Most beginner classes start with a warm-up, followed by basic spins and poses, then a cool-down stretch. Your instructor will demonstrate each move clearly.</p>
        
        <h2>Don't Worry About Strength</h2>
        <p>You don't need to be strong to start! Pole dancing builds strength gradually, and every move can be modified for your current fitness level.</p>
        
        <h2>Embrace the Learning Curve</h2>
        <p>Everyone struggles with their first spins and climbs. It's completely normal to feel uncoordinated at first – every expert was once a beginner!</p>
        
        <h2>Ask Questions</h2>
        <p>Your instructor is there to help. Don't hesitate to ask for modifications, clarifications, or extra support when you need it.</p>
        
        <p>Remember, your first class is about exploration and fun, not perfection. Come with an open mind and prepare to surprise yourself!</p>
      `
    },
    {
      id: 3,
      title: "The Science Behind Flexibility Training",
      excerpt: "Understanding the biomechanics of stretching and how our flexibility program accelerates your progress.",
      image: "/images/blog/flexibility-science.png",
      date: "March 5, 2024",
      author: "Dr. Amanda Chen",
      tags: ["Flexibility", "Science", "Training"],
      readTime: "7 min read",
      content: `
        <p>Flexibility training is often misunderstood, but science reveals the fascinating mechanisms behind how our bodies adapt to stretching. Let's explore the biomechanics that make our flexibility program so effective:</p>
        
        <h2>The Neuromuscular System</h2>
        <p>Flexibility isn't just about muscle length – it's largely controlled by your nervous system. The brain decides how much stretch to allow based on perceived safety and familiarity.</p>
        
        <h2>Progressive Overload in Stretching</h2>
        <p>Just like strength training, flexibility improves through progressive overload. Gradually increasing stretch intensity and duration creates lasting changes in range of motion.</p>
        
        <h2>Active vs. Passive Flexibility</h2>
        <p>Active flexibility (your muscles' ability to move through range) is different from passive flexibility (being pushed into position). Both are important for pole dancing.</p>
        
        <h2>The Role of Consistency</h2>
        <p>Regular, consistent stretching is more effective than intense, sporadic sessions. Your nervous system needs time to adapt and accept new ranges of motion.</p>
        
        <h2>Temperature and Timing</h2>
        <p>Warm muscles stretch more safely and effectively. This is why our classes always include proper warm-up protocols before deeper stretching.</p>
        
        <p>Understanding these principles helps you train smarter, not just harder. Trust the process and celebrate small improvements – they add up to significant changes over time.</p>
      `
    },
    {
      id: 4,
      title: "Aerial Silks vs Pole: Which is Right for You?",
      excerpt: "Explore the differences between aerial silks and pole dancing to find your perfect aerial art form.",
      image: "/images/blog/silks-vs-pole.png",
      date: "February 28, 2024",
      author: "Emma Rodriguez",
      tags: ["Aerial Silks", "Pole Dancing", "Comparison"],
      readTime: "6 min read",
      content: `
        <p>Both aerial silks and pole dancing offer incredible benefits, but they appeal to different personalities and goals. Here's how to choose the right aerial art for you:</p>
        
        <h2>Aerial Silks: Flow and Grace</h2>
        <p>Silks emphasize fluid movements, drops, and wrapping sequences. If you love dance, enjoy creative flow, and want to work on flexibility, silks might be perfect.</p>
        
        <h2>Pole Dancing: Strength and Precision</h2>
        <p>Pole focuses on spins, inversions, and strength-based moves. If you enjoy fitness challenges, love learning tricks, and want to build muscle, pole could be ideal.</p>
        
        <h2>Physical Demands</h2>
        <p>Silks require more flexibility and comfort with being upside down. Pole demands more grip strength and shoulder stability. Both build incredible core strength.</p>
        
        <h2>Learning Curve</h2>
        <p>Pole typically offers quicker initial gratification with spins you can master in your first class. Silks require more patience as you build the flexibility for advanced moves.</p>
        
        <h2>Why Not Both?</h2>
        <p>Many students find that pole and silks complement each other beautifully. The strength from pole helps with silks, while silks flexibility enhances pole performance.</p>
        
        <p>The best choice is the one that excites you most. Come try both and see which one makes your heart sing!</p>
      `
    },
    {
      id: 5,
      title: "Building Upper Body Strength for Aerial Arts",
      excerpt: "Essential exercises and techniques to develop the strength needed for pole and aerial performances.",
      image: "/images/blog/upper-body-strength.png",
      date: "February 20, 2024",
      author: "Marcus Thompson",
      tags: ["Strength Training", "Upper Body", "Fitness"],
      readTime: "8 min read",
      content: `
        <p>Upper body strength is crucial for aerial arts success, but building it doesn't have to be intimidating. Here's your roadmap to developing the strength you need for pole and aerial excellence:</p>
        
        <h2>Start with Bodyweight Basics</h2>
        <p>Push-ups, planks, and assisted pull-ups form the foundation. Master these movements before progressing to more complex exercises.</p>
        
        <h2>Progressive Pull-Up Training</h2>
        <p>Pull-ups are essential for aerial arts. Use resistance bands, assisted machines, or negative repetitions to build up to full pull-ups gradually.</p>
        
        <h2>Functional Movement Patterns</h2>
        <p>Train movements that mimic aerial arts: hanging, pulling, and pressing in various planes of motion. This builds strength that directly transfers to the pole or silks.</p>
        
        <h2>Core Integration</h2>
        <p>Your core connects your upper and lower body. Strong abs and back muscles are essential for controlling your body during aerial movements.</p>
        
        <h2>Recovery and Progression</h2>
        <p>Allow adequate rest between strength sessions. Progressive overload – gradually increasing difficulty – is key to continuous improvement.</p>
        
        <h2>Complementary Training</h2>
        <p>Yoga, Pilates, and mobility work support your strength training by maintaining flexibility and preventing imbalances that could lead to injury.</p>
        
        <p>Remember, strength building is a journey, not a destination. Celebrate every small improvement and trust that consistency will yield incredible results.</p>
      `
    },
    {
      id: 6,
      title: "Creating a Home Practice Space",
      excerpt: "Tips for setting up a safe and inspiring practice area in your own home.",
      image: "/images/blog/home-practice-space.png",
      date: "February 15, 2024",
      author: "Lisa Park",
      tags: ["Home Practice", "Setup", "Safety"],
      readTime: "5 min read",
      content: `
        <p>Creating a home practice space can accelerate your progress and provide convenient training opportunities. Here's how to set up a safe, inspiring practice area at home:</p>
        
        <h2>Safety First: Structural Considerations</h2>
        <p>Ensure your ceiling can support dynamic loads. Consult a structural engineer for permanent installations, or use tension-mounted equipment rated for your weight plus safety margin.</p>
        
        <h2>Space Requirements</h2>
        <p>You need enough clearance in all directions – typically 8x8 feet minimum for pole, more for silks. Consider ceiling height requirements for your chosen apparatus.</p>
        
        <h2>Flooring Solutions</h2>
        <p>Crash mats are essential for safety. Yoga mats provide grip for floor work. Avoid slippery surfaces that could cause dangerous falls.</p>
        
        <h2>Creating Ambiance</h2>
        <p>Good lighting, mirrors, and music make practice more enjoyable. Consider LED strips for mood lighting and a sound system for motivation.</p>
        
        <h2>Storage and Organization</h2>
        <p>Keep grip aids, water, towels, and other accessories easily accessible. Organization helps maintain focus during practice sessions.</p>
        
        <h2>Start Small</h2>
        <p>You don't need a full studio setup immediately. Start with basics like mats and grip aids, then expand as your practice develops.</p>
        
        <p>A well-designed home practice space becomes a sanctuary for growth, creativity, and personal development. Invest in safety first, then comfort and inspiration.</p>
      `
    }
  ];

  const handlePostClick = (postId: number) => {
    navigate(`/blog/${postId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="cyber-grid pt-16">
        {/* Hero Header */}
        <div className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black border-b border-fuchsia-500/30">
          <div className="absolute inset-0 cyber-grid opacity-30"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
                onClick={() => handlePostClick(post.id)}
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

      <Footer />
    </div>
  );
};

// Export the blog posts data for use in the single post page
export const blogPostsData = [
  {
    id: 1,
    title: "5 Benefits of Pole Dancing for Mental Health",
    excerpt: "Discover how pole dancing can boost your confidence, reduce stress, and improve your overall mental wellbeing.",
    image: "/images/blog/mental-health-benefits.png",
    date: "March 15, 2024",
    author: "Jasmine Zapka",
    authorImage: "/images/instructors/kp.png",
    authorBio: "Jasmine is the founder of The Pole Room and has been teaching pole dancing for over 12 years. She's passionate about helping students discover their inner strength and confidence through movement.",
    tags: ["Mental Health", "Pole Dancing", "Wellness"],
    readTime: "5 min read",
    video: "/videos/reel-1.mp4",
    videoSummary: [
      { time: "0:00", label: "Introduction to mental health benefits" },
      { time: "0:15", label: "Building confidence through movement" },
      { time: "0:30", label: "Community and connection" },
    ],
    content: `
      <p>Pole dancing has evolved far beyond its origins to become a powerful form of fitness and self-expression that offers incredible mental health benefits. Here are five ways this art form can transform your mental wellbeing:</p>
      
      <h2>1. Boosts Self-Confidence</h2>
      <p>Learning new moves and mastering challenging combinations builds confidence like nothing else. Every small victory on the pole translates to increased self-assurance in daily life.</p>
      
      <h2>2. Reduces Stress and Anxiety</h2>
      <p>The physical exertion combined with the need for focus creates a meditative state that helps clear your mind of daily worries and stressors.</p>
      
      <h2>3. Improves Body Image</h2>
      <p>Pole dancing teaches you to appreciate what your body can do rather than focusing on how it looks. This shift in perspective is transformative for body positivity.</p>
      
      <h2>4. Creates Community Connections</h2>
      <p>The pole community is incredibly supportive and welcoming. Building friendships through shared challenges and achievements provides crucial social support.</p>
      
      <h2>5. Provides Emotional Release</h2>
      <p>Movement is a powerful way to process emotions. Pole dancing offers a safe space to express feelings and work through emotional challenges.</p>
      
      <p>Ready to experience these benefits for yourself? Book a trial class and discover how pole dancing can enhance your mental wellbeing.</p>
    `
  },
  {
    id: 2,
    title: "Getting Started: What to Expect in Your First Pole Class",
    excerpt: "Nervous about your first pole class? Here's everything you need to know to feel confident and prepared.",
    image: "/images/blog/first-class-expectations.png",
    date: "March 10, 2024",
    author: "Sarah Mitchell",
    authorImage: "/images/instructors/courtney.png",
    authorBio: "Sarah has been a pole instructor for 5 years and specializes in beginner classes. She loves helping newcomers feel comfortable and confident from day one.",
    tags: ["Beginners", "Tips", "First Class"],
    readTime: "4 min read",
    content: `
      <p>Starting your pole journey can feel intimidating, but knowing what to expect can help ease those first-class nerves. Here's your complete guide to your first pole class experience:</p>
      
      <h2>What to Wear</h2>
      <p>Wear shorts or leggings and a comfortable top. You'll want skin contact with the pole for grip, so avoid lotions on your hands and legs before class.</p>
      
      <h2>Class Structure</h2>
      <p>Most beginner classes start with a warm-up, followed by basic spins and poses, then a cool-down stretch. Your instructor will demonstrate each move clearly.</p>
      
      <h2>Don't Worry About Strength</h2>
      <p>You don't need to be strong to start! Pole dancing builds strength gradually, and every move can be modified for your current fitness level.</p>
      
      <h2>Embrace the Learning Curve</h2>
      <p>Everyone struggles with their first spins and climbs. It's completely normal to feel uncoordinated at first – every expert was once a beginner!</p>
      
      <h2>Ask Questions</h2>
      <p>Your instructor is there to help. Don't hesitate to ask for modifications, clarifications, or extra support when you need it.</p>
      
      <p>Remember, your first class is about exploration and fun, not perfection. Come with an open mind and prepare to surprise yourself!</p>
    `
  },
  {
    id: 3,
    title: "The Science Behind Flexibility Training",
    excerpt: "Understanding the biomechanics of stretching and how our flexibility program accelerates your progress.",
    image: "/images/blog/flexibility-science.png",
    date: "March 5, 2024",
    author: "Dr. Amanda Chen",
    authorImage: "/images/instructors/gillian.png",
    authorBio: "Dr. Amanda Chen is a sports physiotherapist and flexibility specialist who works with our instructors to develop safe, science-based stretching programs.",
    tags: ["Flexibility", "Science", "Training"],
    readTime: "7 min read",
    video: "/videos/reel-3.mp4",
    videoSummary: [
      { time: "0:00", label: "Introduction to flexibility science" },
      { time: "0:20", label: "Neuromuscular adaptations" },
      { time: "0:40", label: "Progressive stretching techniques" },
    ],
    content: `
      <p>Flexibility training is often misunderstood, but science reveals the fascinating mechanisms behind how our bodies adapt to stretching. Let's explore the biomechanics that make our flexibility program so effective:</p>
      
      <h2>The Neuromuscular System</h2>
      <p>Flexibility isn't just about muscle length – it's largely controlled by your nervous system. The brain decides how much stretch to allow based on perceived safety and familiarity.</p>
      
      <h2>Progressive Overload in Stretching</h2>
      <p>Just like strength training, flexibility improves through progressive overload. Gradually increasing stretch intensity and duration creates lasting changes in range of motion.</p>
      
      <h2>Active vs. Passive Flexibility</h2>
      <p>Active flexibility (your muscles' ability to move through range) is different from passive flexibility (being pushed into position). Both are important for pole dancing.</p>
      
      <h2>The Role of Consistency</h2>
      <p>Regular, consistent stretching is more effective than intense, sporadic sessions. Your nervous system needs time to adapt and accept new ranges of motion.</p>
      
      <h2>Temperature and Timing</h2>
      <p>Warm muscles stretch more safely and effectively. This is why our classes always include proper warm-up protocols before deeper stretching.</p>
      
      <p>Understanding these principles helps you train smarter, not just harder. Trust the process and celebrate small improvements – they add up to significant changes over time.</p>
    `
  },
  {
    id: 4,
    title: "Aerial Silks vs Pole: Which is Right for You?",
    excerpt: "Explore the differences between aerial silks and pole dancing to find your perfect aerial art form.",
    image: "/images/blog/silks-vs-pole.png",
    date: "February 28, 2024",
    author: "Emma Rodriguez",
    authorImage: "/images/instructors/bianca.png",
    authorBio: "Emma teaches both aerial silks and pole at The Pole Room. With expertise in both disciplines, she helps students find the perfect fit for their goals and personality.",
    tags: ["Aerial Silks", "Pole Dancing", "Comparison"],
    readTime: "6 min read",
    content: `
      <p>Both aerial silks and pole dancing offer incredible benefits, but they appeal to different personalities and goals. Here's how to choose the right aerial art for you:</p>
      
      <h2>Aerial Silks: Flow and Grace</h2>
      <p>Silks emphasize fluid movements, drops, and wrapping sequences. If you love dance, enjoy creative flow, and want to work on flexibility, silks might be perfect.</p>
      
      <h2>Pole Dancing: Strength and Precision</h2>
      <p>Pole focuses on spins, inversions, and strength-based moves. If you enjoy fitness challenges, love learning tricks, and want to build muscle, pole could be ideal.</p>
      
      <h2>Physical Demands</h2>
      <p>Silks require more flexibility and comfort with being upside down. Pole demands more grip strength and shoulder stability. Both build incredible core strength.</p>
      
      <h2>Learning Curve</h2>
      <p>Pole typically offers quicker initial gratification with spins you can master in your first class. Silks require more patience as you build the flexibility for advanced moves.</p>
      
      <h2>Why Not Both?</h2>
      <p>Many students find that pole and silks complement each other beautifully. The strength from pole helps with silks, while silks flexibility enhances pole performance.</p>
      
      <p>The best choice is the one that excites you most. Come try both and see which one makes your heart sing!</p>
    `
  },
  {
    id: 5,
    title: "Building Upper Body Strength for Aerial Arts",
    excerpt: "Essential exercises and techniques to develop the strength needed for pole and aerial performances.",
    image: "/images/blog/upper-body-strength.png",
    date: "February 20, 2024",
    author: "Marcus Thompson",
    authorImage: "/images/instructors/derryn.png",
    authorBio: "Marcus is a certified personal trainer and strength coach who specializes in conditioning athletes for aerial arts. He's helped hundreds of students achieve their strength goals.",
    tags: ["Strength Training", "Upper Body", "Fitness"],
    readTime: "8 min read",
    video: "/videos/reel-4.mp4",
    videoSummary: [
      { time: "0:00", label: "Introduction to strength training" },
      { time: "0:15", label: "Pull-up progressions" },
      { time: "0:30", label: "Core integration exercises" },
      { time: "0:45", label: "Recovery tips" },
    ],
    content: `
      <p>Upper body strength is crucial for aerial arts success, but building it doesn't have to be intimidating. Here's your roadmap to developing the strength you need for pole and aerial excellence:</p>
      
      <h2>Start with Bodyweight Basics</h2>
      <p>Push-ups, planks, and assisted pull-ups form the foundation. Master these movements before progressing to more complex exercises.</p>
      
      <h2>Progressive Pull-Up Training</h2>
      <p>Pull-ups are essential for aerial arts. Use resistance bands, assisted machines, or negative repetitions to build up to full pull-ups gradually.</p>
      
      <h2>Functional Movement Patterns</h2>
      <p>Train movements that mimic aerial arts: hanging, pulling, and pressing in various planes of motion. This builds strength that directly transfers to the pole or silks.</p>
      
      <h2>Core Integration</h2>
      <p>Your core connects your upper and lower body. Strong abs and back muscles are essential for controlling your body during aerial movements.</p>
      
      <h2>Recovery and Progression</h2>
      <p>Allow adequate rest between strength sessions. Progressive overload – gradually increasing difficulty – is key to continuous improvement.</p>
      
      <h2>Complementary Training</h2>
      <p>Yoga, Pilates, and mobility work support your strength training by maintaining flexibility and preventing imbalances that could lead to injury.</p>
      
      <p>Remember, strength building is a journey, not a destination. Celebrate every small improvement and trust that consistency will yield incredible results.</p>
    `
  },
  {
    id: 6,
    title: "Creating a Home Practice Space",
    excerpt: "Tips for setting up a safe and inspiring practice area in your own home.",
    image: "/images/blog/home-practice-space.png",
    date: "February 15, 2024",
    author: "Lisa Park",
    authorImage: "/images/instructors/alison.png",
    authorBio: "Lisa is a studio designer and home practice enthusiast who has helped dozens of students create their own training spaces. Safety and inspiration are her top priorities.",
    tags: ["Home Practice", "Setup", "Safety"],
    readTime: "5 min read",
    content: `
      <p>Creating a home practice space can accelerate your progress and provide convenient training opportunities. Here's how to set up a safe, inspiring practice area at home:</p>
      
      <h2>Safety First: Structural Considerations</h2>
      <p>Ensure your ceiling can support dynamic loads. Consult a structural engineer for permanent installations, or use tension-mounted equipment rated for your weight plus safety margin.</p>
      
      <h2>Space Requirements</h2>
      <p>You need enough clearance in all directions – typically 8x8 feet minimum for pole, more for silks. Consider ceiling height requirements for your chosen apparatus.</p>
      
      <h2>Flooring Solutions</h2>
      <p>Crash mats are essential for safety. Yoga mats provide grip for floor work. Avoid slippery surfaces that could cause dangerous falls.</p>
      
      <h2>Creating Ambiance</h2>
      <p>Good lighting, mirrors, and music make practice more enjoyable. Consider LED strips for mood lighting and a sound system for motivation.</p>
      
      <h2>Storage and Organization</h2>
      <p>Keep grip aids, water, towels, and other accessories easily accessible. Organization helps maintain focus during practice sessions.</p>
      
      <h2>Start Small</h2>
      <p>You don't need a full studio setup immediately. Start with basics like mats and grip aids, then expand as your practice develops.</p>
      
      <p>A well-designed home practice space becomes a sanctuary for growth, creativity, and personal development. Invest in safety first, then comfort and inspiration.</p>
    `
  }
];

export default Blog;
