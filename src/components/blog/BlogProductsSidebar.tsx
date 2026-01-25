import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star } from 'lucide-react';
import { getFeaturedProducts } from '@/data/products';

const BlogProductsSidebar = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <Card className="cyber-card">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold gradient-text mb-4 flex items-center gap-2">
          <ShoppingCart className="w-5 h-5" />
          Shop Essentials
        </h3>
        
        <div className="space-y-4">
          {featuredProducts.map((product) => (
            <div 
              key={product.id} 
              className="group p-3 rounded-lg bg-gray-800/30 border border-gray-700/50 hover:border-fuchsia-500/50 transition-all duration-300"
            >
              <div className="flex gap-3">
                {/* Product Image */}
                <div className="w-16 h-16 flex-shrink-0 bg-gradient-to-br from-fuchsia-900/30 to-cyan-900/30 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6 text-fuchsia-400/60" />
                </div>
                
                {/* Product Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-sm font-medium text-gray-100 group-hover:text-fuchsia-300 transition-colors line-clamp-1">
                      {product.name}
                    </h4>
                    {product.popular && (
                      <Badge className="text-[10px] px-1.5 py-0 bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30">
                        Hot
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-fuchsia-400">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-gray-500 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <Link to="/products" className="block mt-4">
          <Button 
            size="sm" 
            className="w-full neon-button bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            View All Products
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default BlogProductsSidebar;
