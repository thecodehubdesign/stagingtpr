import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Clock, Calendar, Users, CreditCard } from 'lucide-react';
import { VoucherFormData } from '../VoucherClaimForm';
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
      date: 'Today',
      daysFromNow: 0,
      spotsRemaining: 8
    }, {
      id: '2',
      title: 'Intro to Aerial Silks',
      time: '7:30 PM',
      duration: '60 min',
      level: 'Beginner',
      date: 'Today',
      daysFromNow: 0,
      spotsRemaining: 5
    }, {
      id: '3',
      title: 'Pole Flow for Beginners',
      time: '6:00 PM',
      duration: '75 min',
      level: 'Beginner',
      date: 'Tomorrow',
      daysFromNow: 1,
      spotsRemaining: 12
    }, {
      id: '4',
      title: 'Flexibility & Conditioning',
      time: '5:30 PM',
      duration: '45 min',
      level: 'All Levels',
      date: 'Wed 24 Jul',
      daysFromNow: 2,
      spotsRemaining: 15
    }, {
      id: '5',
      title: 'Beginner Pole Tricks',
      time: '7:00 PM',
      duration: '60 min',
      level: 'Beginner',
      date: 'Thu 25 Jul',
      daysFromNow: 3,
      spotsRemaining: 9
    }];
    return baseClasses;
  };
  const upcomingClasses = getUpcomingClasses();
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
        <h3 className="text-lg font-semibold mb-2 gradient-text">
          Upcoming Free Trial Classes at {formData.studioLocation}
        </h3>
        <p className="text-sm mb-6 text-muted-foreground">The schedule shows the upcoming Free Trial classes. Free trial classes cannot be booked anymore than 4 days ahead of time. To secure your spot please select your preferred class and complete final details. </p>
      </div>

      {!showCreditCardForm && <div className="space-y-4">
          <div className="cyber-border bg-primary/10 rounded-lg p-4 mb-4">
            <p className="text-sm text-primary font-semibold">
              <strong>Regular classes are normally $42, now FREE for newbies - for a limited time only!</strong>
            </p>
          </div>

          {upcomingClasses.map(classItem => <Card key={classItem.id} className="cyber-card hover:bg-card/80 transition-all duration-200 cursor-pointer" onClick={() => handleClassSelection(classItem.id)}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg text-foreground mb-1">{classItem.title}</h4>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4 text-white" />
                        <span className="text-white">{classItem.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4 text-white" />
                        <span className="text-white">{classItem.time} ({classItem.duration})</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="bg-primary/20 text-white px-2 py-1 rounded-full border border-primary/30">
                        {classItem.level}
                      </span>
                      <span className="text-white">
                        {formData.studioLocation}
                      </span>
                    </div>
                    <p className="text-sm text-white mt-2">
                      Starts in {classItem.daysFromNow === 0 ? 'today' : `${classItem.daysFromNow} days`}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 text-sm text-emerald-400">
                      <Users className="w-4 h-4 text-white" />
                      <span className="text-white">{classItem.spotsRemaining} spots remaining</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>}

      {showCreditCardForm && <div className="space-y-6">
          <div className="cyber-border bg-accent/10 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <CreditCard className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Credit Card Required</h4>
                <p className="text-sm text-muted-foreground mb-2">
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