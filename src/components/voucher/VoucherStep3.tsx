import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Clock, Calendar, Users, CreditCard, Phone, Eye, MapPin } from 'lucide-react';
import { VoucherFormData } from '../VoucherClaimForm';
import CountdownTimer from '../CountdownTimer';
interface VoucherStep3Props {
  formData: VoucherFormData;
  updateFormData: (data: Partial<VoucherFormData>) => void;
  onPrev: () => void;
  onComplete: () => void;
}
const VoucherStep3 = ({
  formData,
  updateFormData,
  onPrev,
  onComplete
}: VoucherStep3Props) => {
  const [selectedClassId, setSelectedClassId] = useState<string>('');
  const [showCreditCardForm, setShowCreditCardForm] = useState(false);
  const [showAllClasses, setShowAllClasses] = useState(false);
  const [creditCardData, setCreditCardData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: ''
  });

  // Mock upcoming classes for the selected location
  const getUpcomingClasses = () => {
    const baseClasses = [{
      id: '1',
      title: 'Beginner Pole Fundamentals',
      time: '6:00 PM',
      duration: '60 min',
      level: 'Beginner',
      apparatus: 'Pole',
      date: 'Today',
      daysFromNow: 0,
      spotsRemaining: 8,
      address: '123 Main St, Mitcham VIC 3132'
    }, {
      id: '2',
      title: 'Intro to Aerial Silks',
      time: '7:30 PM',
      duration: '60 min',
      level: 'Beginner',
      apparatus: 'Silks',
      date: 'Today',
      daysFromNow: 0,
      spotsRemaining: 5,
      address: '123 Main St, Mitcham VIC 3132'
    }, {
      id: '3',
      title: 'Pole Flow for Beginners',
      time: '6:00 PM',
      duration: '75 min',
      level: 'Beginner',
      apparatus: 'Pole',
      date: 'Tomorrow',
      daysFromNow: 1,
      spotsRemaining: 12,
      address: '123 Main St, Mitcham VIC 3132'
    }, {
      id: '4',
      title: 'Flexibility & Conditioning',
      time: '5:30 PM',
      duration: '45 min',
      level: 'All Levels',
      apparatus: 'Floor',
      date: 'Wed 24 Jul',
      daysFromNow: 2,
      spotsRemaining: 15,
      address: '123 Main St, Mitcham VIC 3132'
    }, {
      id: '5',
      title: 'Beginner Pole Tricks',
      time: '7:00 PM',
      duration: '60 min',
      level: 'Beginner',
      apparatus: 'Pole',
      date: 'Thu 25 Jul',
      daysFromNow: 3,
      spotsRemaining: 9,
      address: '123 Main St, Mitcham VIC 3132'
    }];
    return baseClasses;
  };
  const upcomingClasses = getUpcomingClasses();
  const displayedClasses = showAllClasses ? upcomingClasses : upcomingClasses.slice(0, 3);
  const handleClassSelection = (classId: string) => {
    setSelectedClassId(classId);
    setShowCreditCardForm(true);
    updateFormData({
      selectedVoucher: classId
    });
  };
  const handleCreditCardChange = (field: string, value: string) => {
    setCreditCardData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedClassId && creditCardData.cardNumber && creditCardData.expiryDate && creditCardData.cvv && creditCardData.nameOnCard) {
      // Navigate to get-started page
      window.location.href = '/get-started';
    }
  };
  const canProceed = selectedClassId && showCreditCardForm && creditCardData.cardNumber && creditCardData.expiryDate && creditCardData.cvv && creditCardData.nameOnCard;
  return <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-4xl font-semibold gradient-text mb-2">
          Upcoming Free Trial Classes at {formData.studioLocation} Studio
        </h3>
        <p className="text-sm mb-4 text-muted-foreground">
          These classes are based on your preferences in Step 1. 
          <button type="button" className="text-primary hover:underline ml-1" onClick={() => {/* Navigate to all classes */}}>
            Click here to view all available free trial classes.
          </button>
        </p>
        <p className="text-sm mb-6 text-muted-foreground">
          Free trial classes cannot be booked more than 4 days ahead of time. To secure your spot please select your preferred class and complete final details.
        </p>
      </div>

      {!showCreditCardForm && <div className="space-y-4">
          <div className="cyber-border rounded-lg p-4 mb-4 bg-[#4fe709]/0">
            <p className="text-sm text-primary font-semibold">
              <strong className="bg-white rounded">Regular classes are normally $42, now FREE for newbies - for a limited time only!</strong>
            </p>
          </div>

          {displayedClasses.map(classItem => <Card key={classItem.id} className="cyber-card hover:bg-card/80 transition-all duration-200 cursor-pointer" onClick={() => handleClassSelection(classItem.id)}>
              <CardContent className="p-4">
                <div className="space-y-3">
                  {/* Header with title and spots */}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <h4 className="font-semibold text-lg text-slate-50">{classItem.title}</h4>
                    <div className="flex items-center space-x-1 text-sm text-emerald-400">
                      <Users className="w-4 h-4 text-white" />
                      <span className="text-white">{classItem.spotsRemaining} spots remaining</span>
                    </div>
                  </div>

                  {/* Date and time info */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4 text-white" />
                      <span className="text-white">{classItem.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-white" />
                      <span className="text-white">{classItem.time} ({classItem.duration})</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary/20 px-3 py-1 rounded-full border border-primary/30 text-green-500 text-sm">
                      {classItem.level}
                    </span>
                    <span className="bg-purple-500/20 px-3 py-1 rounded-full border border-purple-500/30 text-purple-300 text-sm">
                      {classItem.apparatus}
                    </span>
                    <span className="bg-blue-500/20 px-3 py-1 rounded-full border border-blue-500/30 text-blue-300 text-sm">
                      {formData.studioLocation} Studio
                    </span>
                  </div>

                  {/* Address with location icon */}
                  <div className="flex items-center space-x-2 text-sm text-white/70">
                    <MapPin className="w-4 h-4" />
                    <span>{classItem.address}</span>
                  </div>

                  {/* Countdown or days info */}
                  <div className="text-sm text-white">
                    {classItem.daysFromNow === 0 ? <CountdownTimer targetTime={classItem.time} className="text-white font-medium" /> : `Starts in ${classItem.daysFromNow} days`}
                  </div>
                </div>
              </CardContent>
            </Card>)}

          {/* Show more/less button */}
          {upcomingClasses.length > 3 && <div className="flex justify-center mt-4">
              <Button type="button" variant="outline" onClick={() => setShowAllClasses(!showAllClasses)} className="flex items-center space-x-2 cyber-border bg-card/30 hover:bg-card/50 text-white">
                <Eye className="w-4 h-4" />
                <span>{showAllClasses ? 'Show Less' : `Show All ${upcomingClasses.length} Classes`}</span>
              </Button>
            </div>}

          {/* Enrollment specialist call option */}
          <div className="cyber-border bg-accent/10 rounded-lg p-4 mt-6">
            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Need Help Choosing?</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Book a call with one of our enrollment specialists to discuss other options and find the perfect class for you.
                </p>
                <Button type="button" variant="outline" className="cyber-border bg-primary/10 hover:bg-primary/20 text-primary border-primary/30">
                  <Phone className="w-4 h-4 mr-2" />
                  Book Enrollment Call
                </Button>
              </div>
            </div>
          </div>
        </div>}

      {showCreditCardForm && <div className="space-y-6">
          <div className="cyber-border bg-accent/10 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <CreditCard className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Credit Card Required</h4>
                <p className="text-sm mb-2 text-zinc-50">
                  In order for the reservation to be held, CC details must be provided. 
                  In the case of a no-show the full cost of the session will be passed along.
                </p>
                <p className="text-sm text-primary font-medium">
                  <strong>6 hours notice is required to cancel a class.</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <Label className="text-sm font-medium text-foreground mb-2 block">
                Name on Card
              </Label>
              <Input type="text" placeholder="John Doe" value={creditCardData.nameOnCard} onChange={e => handleCreditCardChange('nameOnCard', e.target.value)} className="cyber-border bg-card/50" />
            </div>

            <div>
              <Label className="text-sm font-medium text-foreground mb-2 block">
                Card Number
              </Label>
              <Input type="text" placeholder="1234 5678 9012 3456" value={creditCardData.cardNumber} onChange={e => handleCreditCardChange('cardNumber', e.target.value)} className="cyber-border bg-card/50" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium text-foreground mb-2 block">
                  Expiry Date
                </Label>
                <Input type="text" placeholder="MM/YY" value={creditCardData.expiryDate} onChange={e => handleCreditCardChange('expiryDate', e.target.value)} className="cyber-border bg-card/50" />
              </div>
              <div>
                <Label className="text-sm font-medium text-foreground mb-2 block">
                  CVV
                </Label>
                <Input type="text" placeholder="123" value={creditCardData.cvv} onChange={e => handleCreditCardChange('cvv', e.target.value)} className="cyber-border bg-card/50" />
              </div>
            </div>
          </div>
        </div>}

      <div className="flex space-x-4">
        <Button type="button" variant="outline" onClick={onPrev} className="flex items-center space-x-2 cyber-border bg-card/30 hover:bg-card/50">
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </Button>
        <Button type="submit" className="flex-1 neon-button text-primary-foreground" disabled={!canProceed}>
          {showCreditCardForm ? 'Make Reservation!' : 'Continue'}
        </Button>
      </div>
    </form>;
};
export default VoucherStep3;