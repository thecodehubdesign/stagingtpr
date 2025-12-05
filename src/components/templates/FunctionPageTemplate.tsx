import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/ui/section-header';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Step {
  step: number;
  title: string;
  description: string;
}

interface Package {
  name: string;
  price: string;
  priceNote?: string;
  features: string[];
  popular?: boolean;
}

interface FAQ {
  question: string;
  answer: string;
}

interface FunctionPageProps {
  badge: string;
  title: string;
  subtitle: string;
  heroImage: string;
  introTitle: string;
  introDescription: string;
  features: Feature[];
  steps: Step[];
  packages: Package[];
  faqs: FAQ[];
  formTitle?: string;
  formSubtitle?: string;
}

const FunctionPageTemplate = ({
  badge,
  title,
  subtitle,
  heroImage,
  introTitle,
  introDescription,
  features,
  steps,
  packages,
  faqs,
  formTitle = "Enquire Now",
  formSubtitle = "Ready to book? Get in touch with us today!"
}: FunctionPageProps) => {
  useScrollToTop();
  
  const [formData, setFormData] = useState({
    fullName: '',
    numberOfPeople: '',
    email: '',
    phone: '',
    preferredDate: '',
    message: '',
    agreeContact: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${heroImage}')`
          }}
        />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Badge className="mb-6 text-lg px-6 py-2">
            <Sparkles className="w-5 h-5 mr-2" />
            {badge}
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {title}
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            {subtitle}
          </p>
          
          <Button size="lg" className="neon-button text-lg px-8">
            Enquire Now
          </Button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <SectionHeader
            badgeText="Unique Experience"
            title={introTitle}
            subtitle={introDescription}
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader
            badgeText="Why Choose Us"
            title="What Makes Us Special"
            subtitle="We provide unforgettable experiences with professional instruction"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {features.map((feature, index) => (
              <Card key={index} className="cyber-card text-center">
                <CardContent className="p-6">
                  <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader
            badgeText="Step by Step"
            title="What Happens on the Day"
            subtitle="Your complete experience breakdown"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {steps.map((step, index) => (
              <Card key={index} className="cyber-card">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-primary">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader
            badgeText="Choose Your Package"
            title="Packages & Pricing"
            subtitle="We offer a range of packages to suit your needs"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {packages.map((pkg, index) => (
              <Card key={index} className={`cyber-card ${pkg.popular ? 'border-primary' : ''}`}>
                <CardHeader className="text-center">
                  {pkg.popular && <Badge className="mb-2 mx-auto">Most Popular</Badge>}
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary mt-2">
                    {pkg.price}
                    {pkg.priceNote && <span className="text-lg text-muted-foreground">{pkg.priceNote}</span>}
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${pkg.popular ? 'neon-button' : ''}`}>
                    Enquire Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeader
            badgeText="Got Questions?"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know"
          />
          
          <div className="space-y-6 mt-12">
            {faqs.map((faq, index) => (
              <Card key={index} className="cyber-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-2xl mx-auto px-4">
          <SectionHeader
            badgeText="Let's Plan Your Event"
            title={formTitle}
            subtitle={formSubtitle}
          />
          
          <Card className="cyber-card mt-12">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <Input
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Number of People *</label>
                    <Input
                      type="number"
                      value={formData.numberOfPeople}
                      onChange={(e) => handleInputChange('numberOfPeople', e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number *</label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Date</label>
                  <Input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={4}
                    placeholder="Tell us about your event..."
                    required
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="agree"
                    checked={formData.agreeContact}
                    onCheckedChange={(checked) => handleInputChange('agreeContact', checked as boolean)}
                  />
                  <label htmlFor="agree" className="text-sm text-muted-foreground">
                    I agree to be contacted about my enquiry
                  </label>
                </div>
                
                <Button type="submit" className="w-full neon-button text-lg py-6">
                  Submit Enquiry
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FunctionPageTemplate;
