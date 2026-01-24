import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, MapPin, ArrowLeft, Phone } from 'lucide-react';
import { BookingFormData } from '../FreeTrialBookingForm';

interface BookingStep3Props {
  formData: BookingFormData;
  updateFormData: (data: Partial<BookingFormData>) => void;
  onPrev: () => void;
  onComplete: () => void;
}

const BookingStep3 = ({
  formData,
  updateFormData,
  onPrev,
  onComplete
}: BookingStep3Props) => {
  const [showClassSelection, setShowClassSelection] = useState(false);
  
  const studios = [
    { id: 'highett', name: 'Highett' },
    { id: 'kilsyth', name: 'Kilsyth' },
    { id: 'narre-warren', name: 'Narre Warren' },
    { id: 'eltham', name: 'Eltham' },
    { id: 'mitcham', name: 'Mitcham' },
    { id: 'cbd', name: 'CBD' }
  ];
  
  const timeSlots = ['Morning (6AM - 12PM)', 'Afternoon (12PM - 6PM)', 'Evening (6PM - 9PM)'];
  
  const upcomingClasses = [
    {
      id: '1',
      title: 'Beginner Pole - Introduction',
      date: 'Monday, March 18',
      time: '7:00 PM - 8:00 PM',
      studio: formData.selectedStudio,
      instructor: 'Jasmine',
      spotsLeft: 5
    },
    {
      id: '2',
      title: 'Aerial Silks Basics',
      date: 'Tuesday, March 19',
      time: '6:30 PM - 7:30 PM',
      studio: formData.selectedStudio,
      instructor: 'Sarah',
      spotsLeft: 3
    },
    {
      id: '3',
      title: 'Dance & Floorwork Intro',
      date: 'Wednesday, March 20',
      time: '7:30 PM - 8:30 PM',
      studio: formData.selectedStudio,
      instructor: 'Emma',
      spotsLeft: 7
    }
  ];

  const handleEnrollmentCallChange = (wantsCall: string) => {
    const wants = wantsCall === 'yes';
    updateFormData({ wantsEnrollmentCall: wants });
    if (!wants) {
      setShowClassSelection(true);
    }
  };

  const handleFindClasses = () => {
    if (formData.selectedStudio && formData.selectedTimeSlot) {
      setShowClassSelection(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.wantsEnrollmentCall || formData.selectedClass) {
      onComplete();
    }
  };

  const canProceed = formData.wantsEnrollmentCall || formData.selectedClass;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">
          Book your free trial class
        </h3>
        <p className="text-sm text-gray-400 mb-6">
          Let's find the perfect class time for you.
        </p>
      </div>

      <div className="space-y-6">
        {/* Personal Assistance Section */}
        <div className="border border-cyan-500/30 rounded-lg p-4 bg-gray-800/50 backdrop-blur-sm">
          <div className="flex items-center space-x-2 mb-3">
            <Phone className="w-5 h-5 text-cyan-400" />
            <h4 className="text-fuchsia-400 font-semibold text-lg">Personal Assistance</h4>
          </div>
          <Label className="text-sm font-medium text-gray-300 mb-3 block">
            Would you like an Enrollment Specialist to call you to help book your class?
          </Label>
          <RadioGroup 
            value={formData.wantsEnrollmentCall ? 'yes' : 'no'} 
            onValueChange={handleEnrollmentCallChange} 
            className="space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem 
                value="yes" 
                id="call-yes" 
                className="border-fuchsia-500/50 text-fuchsia-500"
              />
              <Label htmlFor="call-yes" className="text-sm text-gray-300">Yes, I'd like a call to help me choose</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem 
                value="no" 
                id="call-no"
                className="border-fuchsia-500/50 text-fuchsia-500"
              />
              <Label htmlFor="call-no" className="text-sm text-gray-300">No, I'll book online myself</Label>
            </div>
          </RadioGroup>
        </div>

        {formData.wantsEnrollmentCall === false && (
          <div className="space-y-4">
            <div>
              <Label className="text-sm font-medium text-gray-300 mb-3 block">
                Select Studio <span className="text-fuchsia-400">*</span>
              </Label>
              <Select value={formData.selectedStudio} onValueChange={value => updateFormData({ selectedStudio: value })}>
                <SelectTrigger className="bg-gray-800/50 border-fuchsia-500/30 text-white focus:border-fuchsia-500 focus:ring-fuchsia-500/50">
                  <SelectValue placeholder="Choose your preferred studio" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-fuchsia-500/30">
                  {studios.map(studio => (
                    <SelectItem 
                      key={studio.id} 
                      value={studio.name}
                      className="text-white hover:bg-fuchsia-500/20 focus:bg-fuchsia-500/20"
                    >
                      {studio.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-sm font-medium text-gray-300 mb-3 block">
                Preferred Time <span className="text-fuchsia-400">*</span>
              </Label>
              <Select value={formData.selectedTimeSlot} onValueChange={value => updateFormData({ selectedTimeSlot: value })}>
                <SelectTrigger className="bg-gray-800/50 border-fuchsia-500/30 text-white focus:border-fuchsia-500 focus:ring-fuchsia-500/50">
                  <SelectValue placeholder="Choose your preferred time" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-fuchsia-500/30">
                  {timeSlots.map(slot => (
                    <SelectItem 
                      key={slot} 
                      value={slot}
                      className="text-white hover:bg-fuchsia-500/20 focus:bg-fuchsia-500/20"
                    >
                      {slot}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {formData.selectedStudio && formData.selectedTimeSlot && !showClassSelection && (
              <Button 
                type="button" 
                onClick={handleFindClasses} 
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg shadow-cyan-500/30"
              >
                Find Available Classes
              </Button>
            )}

            {showClassSelection && (
              <div>
                <h4 className="font-medium text-white mb-4">Available Classes</h4>
                {upcomingClasses.length > 0 ? (
                  <RadioGroup 
                    value={formData.selectedClass} 
                    onValueChange={value => updateFormData({ selectedClass: value })} 
                    className="space-y-4"
                  >
                    {upcomingClasses.map(cls => (
                      <div key={cls.id}>
                        <RadioGroupItem value={cls.id} id={cls.id} className="sr-only" />
                        <Label htmlFor={cls.id} className="cursor-pointer block">
                          <div className={`border-2 rounded-lg p-4 transition-all ${
                            formData.selectedClass === cls.id 
                              ? 'border-fuchsia-500 bg-fuchsia-500/10 shadow-lg shadow-fuchsia-500/20' 
                              : 'border-gray-700 bg-gray-800/50 hover:border-fuchsia-400'
                          }`}>
                            <h5 className="text-base font-semibold text-white mb-3">{cls.title}</h5>
                            <div className="space-y-2 text-sm text-gray-400">
                              <div className="flex items-center space-x-2">
                                <Calendar className="w-4 h-4 text-fuchsia-400" />
                                <span>{cls.date}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Clock className="w-4 h-4 text-fuchsia-400" />
                                <span>{cls.time}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <MapPin className="w-4 h-4 text-fuchsia-400" />
                                <span>{cls.studio}</span>
                              </div>
                              <div className="flex items-center justify-between mt-3">
                                <span className="text-xs text-gray-500">with {cls.instructor}</span>
                                <span className="text-xs font-medium text-cyan-400">
                                  {cls.spotsLeft} spots left
                                </span>
                              </div>
                            </div>
                          </div>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                ) : (
                  <div className="text-center py-8 bg-gray-800/50 rounded-lg border border-gray-700">
                    <p className="text-gray-400 mb-4">No classes available for your selected time.</p>
                    <p className="text-sm text-gray-500">
                      Don't worry! Our enrollment specialist will call you to find the perfect time.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {canProceed && (
        <div className="border border-cyan-500/30 rounded-lg p-4 bg-gray-800/50">
          <h4 className="font-medium text-white mb-3">Order Summary</h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400">Class Session</span>
              <span className="text-gray-300">$42.00</span>
            </div>
            <div className="flex justify-between text-cyan-400">
              <span>Free Trial Discount</span>
              <span>-$42.00</span>
            </div>
            <div className="border-t border-gray-700 pt-2">
              <div className="flex justify-between font-semibold text-lg">
                <span className="text-white">Total</span>
                <span className="text-cyan-400">$0.00</span>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Your first class is completely free - no payment required!
          </p>
        </div>
      )}

      <div className="flex space-x-4">
        <Button 
          type="button" 
          variant="outline" 
          onClick={onPrev} 
          className="flex items-center space-x-2 border-fuchsia-500/50 text-white hover:bg-fuchsia-500/20 bg-transparent"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </Button>
        <Button 
          type="submit" 
          className="flex-1 neon-button" 
          disabled={!canProceed}
        >
          {formData.wantsEnrollmentCall ? 'Request Call Back' : 'Book My Class'}
        </Button>
      </div>
    </form>
  );
};

export default BookingStep3;
