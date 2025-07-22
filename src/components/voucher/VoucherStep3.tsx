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
        <h3 className="text-lg font-semibold mb-2 text-slate-50">
          Upcoming Free Trial Classes at {formData.studioLocation}
        </h3>
        <p className="text-sm mb-6 text-slate-50">The schedule shows the upcoming Free Trial classes. Free trial classes cannot be booked anymore than 4 days ahead of time. To secure your spot please select your preferred class and complete final details. </p>
      </div>

      {!showCreditCardForm && <div className="space-y-4">
          <div className="bg-rose-100 border border-rose-200 rounded-lg p-3 mb-4">
            <p className="text-sm text-rose-800">
              <strong>Regular classes are normally $42, now FREE for newbies - for a limited time only!</strong>
            </p>
          </div>

          {upcomingClasses.map(classItem => <Card key={classItem.id} className="border-2 border-gray-200 hover:border-rose-300 hover:shadow-md transition-all duration-200 cursor-pointer" onClick={() => handleClassSelection(classItem.id)}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg text-slate-50 mb-1">{classItem.title}</h4>
                    <div className="flex items-center space-x-4 text-sm text-slate-50 mb-2">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{classItem.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{classItem.time} ({classItem.duration})</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        {classItem.level}
                      </span>
                      <span className="text-slate-50">
                        {formData.studioLocation}
                      </span>
                    </div>
                    <p className="text-sm text-slate-50 mt-2">
                      Starts in {classItem.daysFromNow === 0 ? 'today' : `${classItem.daysFromNow} days`}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 text-sm text-green-600">
                      <Users className="w-4 h-4" />
                      <span>{classItem.spotsRemaining} spots remaining</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>}

      {showCreditCardForm && <div className="space-y-6">
          <div className="bg-yellow-100 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start space-x-2">
              <CreditCard className="w-5 h-5 text-yellow-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-yellow-800 mb-2">Credit Card Required</h4>
                <p className="text-sm text-yellow-700 mb-2">
                  In order for the reservation to be held, CC details must be provided. 
                  In the case of a no-show the full cost of the session will be passed along.
                </p>
                <p className="text-sm text-yellow-700">
                  <strong>6 hours notice is required to cancel a class.</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <Label className="text-sm font-medium text-slate-50 mb-2 block">
                Name on Card
              </Label>
              <Input type="text" placeholder="John Doe" value={creditCardData.nameOnCard} onChange={e => handleCreditCardChange('nameOnCard', e.target.value)} />
            </div>

            <div>
              <Label className="text-sm font-medium text-slate-50 mb-2 block">
                Card Number
              </Label>
              <Input type="text" placeholder="1234 5678 9012 3456" value={creditCardData.cardNumber} onChange={e => handleCreditCardChange('cardNumber', e.target.value)} />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium text-slate-50 mb-2 block">
                  Expiry Date
                </Label>
                <Input type="text" placeholder="MM/YY" value={creditCardData.expiryDate} onChange={e => handleCreditCardChange('expiryDate', e.target.value)} />
              </div>
              <div>
                <Label className="text-sm font-medium text-slate-50 mb-2 block">
                  CVV
                </Label>
                <Input type="text" placeholder="123" value={creditCardData.cvv} onChange={e => handleCreditCardChange('cvv', e.target.value)} />
              </div>
            </div>
          </div>
        </div>}

      <div className="flex space-x-4">
        <Button type="button" variant="outline" onClick={onPrev} className="flex items-center space-x-2">
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </Button>
        <Button type="submit" className="flex-1 bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700" disabled={!canProceed}>
          {showCreditCardForm ? 'Make Reservation!' : 'Continue'}
        </Button>
      </div>
    </form>;
};
export default VoucherStep3;