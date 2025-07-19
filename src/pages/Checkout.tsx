
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Plus, Minus, ShoppingCart, CreditCard, User, MapPin } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  validity: string;
  popular?: boolean;
}

interface CartItem extends Product {
  quantity: number;
}

const Checkout = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [customerInfo, setCustomerInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postcode: '',
    state: ''
  });

  const products: Product[] = [
    {
      id: '1',
      name: '4 Class Pack',
      price: 99,
      description: 'Perfect for trying different classes',
      validity: 'Valid for 6 weeks',
    },
    {
      id: '2',
      name: '8 Class Pack',
      price: 179,
      description: 'Great value for regular students',
      validity: 'Valid for 10 weeks',
      popular: true,
    },
    {
      id: '3',
      name: '12 Class Pack',
      price: 249,
      description: 'Best value for committed students',
      validity: 'Valid for 14 weeks',
    },
    {
      id: '4',
      name: 'Unlimited Monthly',
      price: 149,
      description: 'Unlimited classes for one month',
      validity: 'Valid for 30 days',
    },
    {
      id: '5',
      name: 'Drop-In Class',
      price: 35,
      description: 'Single class, no commitment',
      validity: 'Valid for 30 days',
    },
    {
      id: '6',
      name: 'Private Session',
      price: 120,
      description: 'One-on-one instruction',
      validity: 'Book within 60 days',
    }
  ];

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      setCartItems(prev => prev.filter(item => item.id !== id));
    } else {
      setCartItems(prev =>
        prev.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleInputChange = (field: string, value: string) => {
    setCustomerInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckout = () => {
    // Handle checkout logic here
    console.log('Checkout:', { cartItems, customerInfo, total: getTotalPrice() });
    // In a real app, this would process the payment
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
              Choose Your Package
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Select your class packages and complete your purchase to start your pole journey
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Products Section */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <ShoppingCart className="w-6 h-6 mr-2 text-fuchsia-400" />
                Class Packages
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {products.map((product) => (
                  <Card key={product.id} className="cyber-card relative">
                    {product.popular && (
                      <Badge className="absolute -top-3 left-4 bg-fuchsia-500 text-white">
                        Most Popular
                      </Badge>
                    )}
                    <CardHeader className="pb-4">
                      <CardTitle className="text-white flex justify-between items-start">
                        <span>{product.name}</span>
                        <span className="text-fuchsia-400 font-bold">${product.price}</span>
                      </CardTitle>
                      <p className="text-gray-300 text-sm">{product.description}</p>
                      <p className="text-cyan-400 text-xs">{product.validity}</p>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <Button 
                        onClick={() => addToCart(product)}
                        className="w-full neon-button text-black font-bold"
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Cart and Checkout Section */}
            <div className="lg:col-span-1">
              {/* Cart Summary */}
              <Card className="cyber-card mb-6">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <ShoppingCart className="w-5 h-5 mr-2 text-fuchsia-400" />
                    Your Cart ({cartItems.length})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {cartItems.length === 0 ? (
                    <p className="text-gray-400 text-center py-4">Your cart is empty</p>
                  ) : (
                    <div className="space-y-4">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center justify-between border-b border-gray-700 pb-2">
                          <div className="flex-1">
                            <h4 className="text-white font-medium text-sm">{item.name}</h4>
                            <p className="text-gray-400 text-xs">${item.price} each</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="h-6 w-6 p-0 cyber-border text-cyan-400"
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="text-white text-sm w-6 text-center">{item.quantity}</span>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="h-6 w-6 p-0 cyber-border text-cyan-400"
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                          </div>
                          <div className="text-fuchsia-400 font-bold text-sm ml-4 w-16 text-right">
                            ${item.price * item.quantity}
                          </div>
                        </div>
                      ))}
                      <div className="pt-4 border-t border-gray-700">
                        <div className="flex justify-between items-center text-lg font-bold">
                          <span className="text-white">Total:</span>
                          <span className="text-fuchsia-400">${getTotalPrice()}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Customer Information Form */}
              {cartItems.length > 0 && (
                <Card className="cyber-card">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <User className="w-5 h-5 mr-2 text-fuchsia-400" />
                      Customer Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-gray-300">First Name</Label>
                        <Input
                          id="firstName"
                          value={customerInfo.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className="bg-gray-800 border-gray-600 text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-gray-300">Last Name</Label>
                        <Input
                          id="lastName"
                          value={customerInfo.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          className="bg-gray-800 border-gray-600 text-white"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-gray-300">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={customerInfo.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="bg-gray-800 border-gray-600 text-white"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone" className="text-gray-300">Phone</Label>
                      <Input
                        id="phone"
                        value={customerInfo.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="bg-gray-800 border-gray-600 text-white"
                      />
                    </div>

                    <div className="pt-4">
                      <h4 className="text-white font-medium mb-3 flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-fuchsia-400" />
                        Billing Address
                      </h4>
                      <div className="space-y-3">
                        <Input
                          placeholder="Address"
                          value={customerInfo.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                          className="bg-gray-800 border-gray-600 text-white"
                        />
                        <div className="grid grid-cols-2 gap-3">
                          <Input
                            placeholder="City"
                            value={customerInfo.city}
                            onChange={(e) => handleInputChange('city', e.target.value)}
                            className="bg-gray-800 border-gray-600 text-white"
                          />
                          <Input
                            placeholder="State"
                            value={customerInfo.state}
                            onChange={(e) => handleInputChange('state', e.target.value)}
                            className="bg-gray-800 border-gray-600 text-white"
                          />
                        </div>
                        <Input
                          placeholder="Postcode"
                          value={customerInfo.postcode}
                          onChange={(e) => handleInputChange('postcode', e.target.value)}
                          className="bg-gray-800 border-gray-600 text-white"
                        />
                      </div>
                    </div>

                    <Button 
                      onClick={handleCheckout}
                      className="w-full neon-button text-black font-bold text-lg py-3 mt-6"
                      disabled={!customerInfo.firstName || !customerInfo.lastName || !customerInfo.email}
                    >
                      <CreditCard className="w-5 h-5 mr-2" />
                      Complete Purchase - ${getTotalPrice()}
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
