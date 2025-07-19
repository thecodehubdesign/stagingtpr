
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star, Shield, Shirt, Calendar, Target } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: string;
  image: string;
  featured?: boolean;
  popular?: boolean;
}

const Products = () => {
  const products: Product[] = [
    // Class Passes
    {
      id: 'class-pack-4',
      name: '4 Class Pack',
      price: 99,
      description: 'Perfect for trying different classes and getting started with pole',
      category: 'Class Passes',
      image: '/placeholder.svg',
      featured: true,
    },
    {
      id: 'class-pack-8',
      name: '8 Class Pack',
      price: 179,
      originalPrice: 200,
      description: 'Great value for regular students building their skills',
      category: 'Class Passes',
      image: '/placeholder.svg',
      popular: true,
    },
    {
      id: 'unlimited-monthly',
      name: 'Unlimited Monthly',
      price: 149,
      description: 'Unlimited classes for one month - perfect for intensive training',
      category: 'Class Passes',
      image: '/placeholder.svg',
    },
    
    // Protective Gear
    {
      id: 'knee-pads',
      name: 'Premium Knee Pads',
      price: 45,
      description: 'Professional grade knee protection for floor work and spins',
      category: 'Protective Gear',
      image: '/placeholder.svg',
      featured: true,
    },
    {
      id: 'grip-aid',
      name: 'Grip Enhancement Spray',
      price: 25,
      description: 'Long-lasting grip formula for better pole connection',
      category: 'Grip & Safety',
      image: '/placeholder.svg',
    },
    {
      id: 'grip-gloves',
      name: 'Grip Gloves',
      price: 35,
      description: 'Fingerless gloves for extra grip during challenging moves',
      category: 'Grip & Safety',
      image: '/placeholder.svg',
    },
    
    // Apparel
    {
      id: 'pole-shorts',
      name: 'High-Waisted Pole Shorts',
      price: 55,
      description: 'Comfortable, stretchy shorts designed for pole movement',
      category: 'Apparel',
      image: '/placeholder.svg',
      popular: true,
    },
    {
      id: 'sports-bra',
      name: 'Supportive Sports Bra',
      price: 40,
      description: 'Medium support sports bra perfect for pole classes',
      category: 'Apparel',
      image: '/placeholder.svg',
    },
    {
      id: 'tank-top',
      name: 'Breathable Tank Top',
      price: 30,
      description: 'Lightweight, moisture-wicking fabric for comfort',
      category: 'Apparel',
      image: '/placeholder.svg',
    },
    
    // Accessories
    {
      id: 'microfiber-towel',
      name: 'Microfiber Towel',
      price: 15,
      description: 'Quick-dry towel for wiping down poles and yourself',
      category: 'Accessories',
      image: '/placeholder.svg',
    },
    {
      id: 'water-bottle',
      name: 'Insulated Water Bottle',
      price: 20,
      description: 'Stay hydrated during intense training sessions',
      category: 'Accessories',
      image: '/placeholder.svg',
    },
    {
      id: 'gym-bag',
      name: 'Studio Gym Bag',
      price: 65,
      description: 'Spacious bag with compartments for all your pole gear',
      category: 'Accessories',
      image: '/placeholder.svg',
    },
  ];

  const categories = ['All', 'Class Passes', 'Protective Gear', 'Grip & Safety', 'Apparel', 'Accessories'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Class Passes': return Calendar;
      case 'Protective Gear': return Shield;
      case 'Grip & Safety': return Target;
      case 'Apparel': return Shirt;
      case 'Accessories': return ShoppingCart;
      default: return ShoppingCart;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
              Pole Studio Store
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Everything you need to start your pole journey - from class passes to essential gear
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => {
                const IconComponent = getCategoryIcon(category);
                return (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category 
                      ? "neon-button text-black font-bold" 
                      : "cyber-border text-cyan-400 hover:text-black hover:bg-cyan-400"
                    }
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {category}
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="cyber-card relative group hover:scale-105 transition-transform duration-300">
                {product.featured && (
                  <Badge className="absolute -top-3 left-4 bg-cyan-400 text-black font-bold z-10">
                    Featured
                  </Badge>
                )}
                {product.popular && (
                  <Badge className="absolute -top-3 right-4 bg-fuchsia-500 text-white z-10">
                    Popular
                  </Badge>
                )}
                
                <CardHeader className="pb-4">
                  {/* Product Image Placeholder */}
                  <div className="w-full h-40 bg-gradient-to-br from-fuchsia-900/20 to-cyan-900/20 rounded-lg mb-4 flex items-center justify-center">
                    <ShoppingCart className="w-12 h-12 text-fuchsia-400/50" />
                  </div>
                  
                  <CardTitle className="text-white text-lg">{product.name}</CardTitle>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-fuchsia-400">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-gray-500 line-through text-sm">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    <Badge variant="outline" className="text-cyan-400 border-cyan-400">
                      {product.category}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-gray-400 text-xs ml-2">(4.8)</span>
                    </div>
                  </div>
                  
                  <Link to="/checkout" className="block">
                    <Button className="w-full neon-button text-black font-bold group-hover:shadow-lg group-hover:shadow-fuchsia-500/25">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action Section */}
          <div className="text-center">
            <Card className="cyber-card max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Start Your Pole Journey?
                </h3>
                <p className="text-gray-300 mb-6">
                  Get everything you need in one go with our starter bundles, or browse individual items to customize your kit.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/checkout">
                    <Button className="neon-button text-black font-bold px-8 py-3">
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      View Cart & Checkout
                    </Button>
                  </Link>
                  <Link to="/classes">
                    <Button variant="outline" className="cyber-border text-cyan-400 px-8 py-3">
                      Browse Classes
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
