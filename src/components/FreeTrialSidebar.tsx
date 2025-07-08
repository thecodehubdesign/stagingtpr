
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, MapPin, ArrowLeft } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const FreeTrialSidebar = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    agreeToTerms: false
  });
  const [selectedClass, setSelectedClass] = useState('');

  const locations = [
    'Melbourne CBD', 
    'South Yarra', 
    'Richmond', 
    'St Kilda', 
    'Fitzroy', 
    'Brunswick'
  ];

  const upcomingClasses = [
    {
      id: '1',
      title: 'Beginner Pole - Introduction',
      date: 'Monday, March 18',
      time: '7:00 PM - 8:00 PM',
      location: 'Melbourne CBD',
      instructor: 'Jasmine',
      spotsLeft: 5
    },
    {
      id: '2',
      title: 'Aerial Silks Basics',
      date: 'Tuesday, March 19',
      time: '6:30 PM - 7:30 PM',
      location: 'South Yarra',
      instructor: 'Sarah',
      spotsLeft: 3
    },
    {
      id: '3',
      title: 'Dance & Floorwork Intro',
      date: 'Wednesday, March 20',
      time: '7:30 PM - 8:30 PM',
      location: 'Richmond',
      instructor: 'Emma',
      spotsLeft: 7
    },
    {
      id: '4',
      title: 'Beginner Pole - Spins & Flow',
      date: 'Thursday, March 21',
      time: '6:00 PM - 7:00 PM',
      location: 'St Kilda',
      instructor: 'Lisa',
      spotsLeft: 4
    }
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.location && formData.agreeToTerms) {
      setStep(2);
    }
  };

  const handleStep2Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedClass) {
      console.log('Free trial booking:', { ...formData, selectedClass });
      // Here you would normally send the data to your backend
      alert('Free trial booked successfully! Check your email for confirmation.');
      resetForm();
    }
  };

  const resetForm = () => {
    setStep(1);
    setFormData({
      name: '',
      email: '',
      phone: '',
      location: '',
      agreeToTerms: false
    });
    setSelectedClass('');
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700">
          Free Trial Class
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-xl font-bold text-gray-900">
            Book Your Free Trial Class
          </SheetTitle>
        </SheetHeader>

        <div className="py-6">
          {step === 1 ? (
            <form onSubmit={handleStep1Submit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="mt-1"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="mt-1"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="mt-1"
                    required
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-3 block">
                    Preferred Location *
                  </Label>
                  <RadioGroup
                    value={formData.location}
                    onValueChange={(value) => handleInputChange('location', value)}
                    className="space-y-2"
                  >
                    {locations.map((location) => (
                      <div key={location} className="flex items-center space-x-2">
                        <RadioGroupItem value={location} id={location} />
                        <Label htmlFor={location} className="text-sm">{location}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => handleInputChange('agreeToTerms', checked as boolean)}
                  />
                  <Label htmlFor="terms" className="text-sm text-gray-600 leading-tight">
                    I agree to the Terms of Service and understand that this is a free trial class. *
                  </Label>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700"
                disabled={!formData.name || !formData.email || !formData.phone || !formData.location || !formData.agreeToTerms}
              >
                Continue to Class Selection
              </Button>
            </form>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setStep(1)}
                  className="p-0 h-auto"
                >
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  Back to Details
                </Button>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Select Your Free Trial Class
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  Choose from our upcoming beginner-friendly classes at {formData.location}
                </p>
              </div>

              <form onSubmit={handleStep2Submit}>
                <RadioGroup
                  value={selectedClass}
                  onValueChange={setSelectedClass}
                  className="space-y-4 mb-6"
                >
                  {upcomingClasses
                    .filter(cls => cls.location === formData.location)
                    .map((cls) => (
                    <div key={cls.id}>
                      <RadioGroupItem value={cls.id} id={cls.id} className="sr-only" />
                      <Label htmlFor={cls.id} className="cursor-pointer">
                        <Card className={`border-2 transition-colors ${selectedClass === cls.id ? 'border-rose-500 bg-rose-50' : 'border-gray-200 hover:border-rose-300'}`}>
                          <CardHeader className="pb-3">
                            <CardTitle className="text-base">{cls.title}</CardTitle>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <div className="space-y-2 text-sm text-gray-600">
                              <div className="flex items-center space-x-2">
                                <Calendar className="w-4 h-4" />
                                <span>{cls.date}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Clock className="w-4 h-4" />
                                <span>{cls.time}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <MapPin className="w-4 h-4" />
                                <span>{cls.location}</span>
                              </div>
                              <div className="flex items-center justify-between mt-3">
                                <span className="text-xs text-gray-500">with {cls.instructor}</span>
                                <span className="text-xs font-medium text-green-600">
                                  {cls.spotsLeft} spots left
                                </span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700"
                  disabled={!selectedClass}
                >
                  Book My Free Trial Class
                </Button>
              </form>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default FreeTrialSidebar;
