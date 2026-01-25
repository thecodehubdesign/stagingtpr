import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogPostsData } from './Blog';
import BlogProductsSidebar from '@/components/blog/BlogProductsSidebar';
import BlogShareButtons from '@/components/blog/BlogShareButtons';
import ArticleEndDivider from '@/components/blog/ArticleEndDivider';
import BlogVideoPlayer from '@/components/blog/BlogVideoPlayer';
import ReadingProgress from '@/components/blog/ReadingProgress';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const post = blogPostsData.find(p => p.id === parseInt(id || '0'));

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-16 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold gradient-text mb-4">Post Not Found</h1>
            <Button onClick={() => navigate('/blog')} className="neon-button">
              Back to Blog
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedPosts = blogPostsData
    .filter(p => p.id !== post.id)
    .slice(0, 3);

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className="min-h-screen bg-background">
      <ReadingProgress />
      <Header />
      
      <div className="cyber-grid pt-16">
        {/* Hero Image */}
        <div className="relative h-96 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          
          {/* Back Button */}
          <div className="absolute top-8 left-8">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/blog')}
              className="text-white hover:text-fuchsia-400 hover:bg-black/50 backdrop-blur-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </div>
          
          {/* Post Meta Overlay */}
          <div className="absolute bottom-8 left-8 right-8">
            <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm mb-4">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4 text-fuchsia-400" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4 text-cyan-400" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4 text-yellow-400" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="text-xs bg-fuchsia-500/20 text-fuchsia-300 px-3 py-1 rounded-full border border-fuchsia-500/30 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content - 2 Column Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Article Content - 2/3 width */}
            <div className="lg:col-span-2">
              <Card className="cyber-card">
                <CardContent className="p-8">
                  {/* Video Module (if available) */}
                  {post.video && (
                    <BlogVideoPlayer 
                      videoUrl={post.video} 
                      title={`Watch: ${post.title}`}
                      summary={post.videoSummary}
                    />
                  )}
                  
                  {/* Article Body */}
                  <div 
                    className="prose prose-invert prose-lg max-w-none
                      prose-headings:gradient-text prose-headings:font-bold
                      prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
                      prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
                      prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-4
                      prose-strong:text-fuchsia-300
                      prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:text-cyan-300"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                  
                  {/* Clear Article End Divider */}
                  <ArticleEndDivider />
                  
                  {/* Share Buttons */}
                  <BlogShareButtons title={post.title} url={currentUrl} />
                  
                  {/* Author Bio with Image */}
                  <div className="mt-8 pt-8 border-t border-gray-700/50">
                    <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">About the Author</h3>
                    <div className="flex items-start space-x-4">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-fuchsia-500/50 flex-shrink-0">
                        {post.authorImage ? (
                          <img 
                            src={post.authorImage} 
                            alt={post.author}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-fuchsia-500 to-cyan-500 flex items-center justify-center">
                            <User className="w-10 h-10 text-white" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-gray-100 mb-2">{post.author}</h4>
                        <p className="text-gray-400 leading-relaxed">
                          {post.authorBio || `Our expert instructors and guest writers share their knowledge and passion for pole dancing, 
                          aerial arts, and fitness. Each brings unique perspectives and years of experience to help 
                          guide your journey.`}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Sidebar - 1/3 width */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Products Sidebar */}
                <BlogProductsSidebar />
                
                {/* Newsletter Signup */}
                <Card className="cyber-card">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold gradient-text mb-4">Stay Updated</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      Get the latest tips and stories delivered to your inbox.
                    </p>
                    <div className="space-y-3">
                      <input
                        type="email"
                        placeholder="Your email"
                        className="w-full px-3 py-2 text-sm bg-gray-800/50 border border-fuchsia-500/30 rounded text-gray-100 placeholder-gray-400 focus:outline-none focus:border-fuchsia-400"
                      />
                      <Button size="sm" className="w-full neon-button bg-gradient-to-r from-fuchsia-500 to-cyan-500">
                        Subscribe
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Popular Tags */}
                <Card className="cyber-card">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold gradient-text mb-4">Popular Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Beginner Tips', 'Mental Health', 'Strength Training', 'Flexibility', 'Aerial Silks', 'Pole Dancing'].map((tag) => (
                        <span 
                          key={tag}
                          className="text-xs bg-gray-800/50 text-gray-300 px-2 py-1 rounded border border-gray-600/50 hover:border-fuchsia-500/50 hover:text-fuchsia-300 cursor-pointer transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="bg-gradient-to-r from-fuchsia-900/10 to-cyan-900/10 border-t border-fuchsia-500/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-3xl font-bold gradient-text mb-8 text-center">Related Articles</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Card 
                  key={relatedPost.id} 
                  className="cyber-card overflow-hidden hover:shadow-xl hover:shadow-fuchsia-500/20 transition-all duration-300 group cursor-pointer"
                  onClick={() => navigate(`/blog/${relatedPost.id}`)}
                >
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-1 text-sm text-gray-400 mb-3">
                      <Calendar className="w-4 h-4 text-fuchsia-400" />
                      <span>{relatedPost.date}</span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-100 mb-3 group-hover:text-fuchsia-300 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">
                      {relatedPost.excerpt}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPost;