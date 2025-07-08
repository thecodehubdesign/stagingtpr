
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Gift, Clock, Users } from 'lucide-react';

const FlexibilityProgram = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log('Form submitted:', { name, email });
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-rose-500 to-purple-600 rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image Side */}
            <div className="relative h-64 lg:h-auto">
              <img
                src="https://images.unsplash.com/photo-1506629905607-c60abee5af70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Woman stretching and doing splits"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 to-purple-600/20"></div>
            </div>

            {/* Content Side */}
            <div className="p-8 lg:p-12 text-white">
              <div className="flex items-center space-x-2 mb-4">
                <Gift className="w-6 h-6" />
                <span className="text-sm font-semibold uppercase tracking-wide">Free Program</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Want to Feel More Flexible in Just 7 Days?
              </h2>
              
              <p className="text-lg text-rose-100 mb-6">
                Grab our free online flexibility training program led by Jasmine Zapka. 
                Perfect for beginners and a great foundation for your pole journey.
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">7-day program</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">Beginner-friendly</span>
                </div>
              </div>

              {/* Form */}
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-rose-200"
                    />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-rose-200"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-white text-rose-600 hover:bg-rose-50 font-semibold"
                  >
                    Send Me the Program
                  </Button>
                </form>
              ) : (
                <div className="bg-white/10 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                  <p className="text-rose-100">
                    Check your email for your free flexibility program. Can't wait to see you in the studio!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlexibilityProgram;
