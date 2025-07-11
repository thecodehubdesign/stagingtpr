import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
  const studios = [{
    id: 'highett',
    name: 'Highett'
  }, {
    id: 'kilsyth',
    name: 'Kilsyth'
  }, {
    id: 'narre-warren',
    name: 'Narre Warren'
  }, {
    id: 'eltham',
    name: 'Eltham'
  }, {
    id: 'mitcham',
    name: 'Mitcham'
  }, {
    id: 'cbd',
    name: 'CBD'
  }];
  const timeSlots = ['Morning (6AM - 12PM)', 'Afternoon (12PM - 6PM)', 'Evening (6PM - 9PM)'];
  const upcomingClasses = [{
    id: '1',
    title: 'Beginner Pole - Introduction',
    date: 'Monday, March 18',
    time: '7:00 PM - 8:00 PM',
    studio: formData.selectedStudio,
    instructor: 'Jasmine',
    spotsLeft: 5
  }, {
    id: '2',
    title: 'Aerial Silks Basics',
    date: 'Tuesday, March 19',
    time: '6:30 PM - 7:30 PM',
    studio: formData.selectedStudio,
    instructor: 'Sarah',
    spotsLeft: 3
  }, {
    id: '3',
    title: 'Dance & Floorwork Intro',
    date: 'Wednesday, March 20',
    time: '7:30 PM - 8:30 PM',
    studio: formData.selectedStudio,
    instructor: 'Emma',
    spotsLeft: 7
  }];
  const handleEnrollmentCallChange = (wantsCall: string) => {
    const wants = wantsCall === 'yes';
    updateFormData({
      wantsEnrollmentCall: wants
    });
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
  return <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Book your free trial class
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          Let's find the perfect class time for you.
        </p>
      </div>

      <div className="space-y-6">
        <div className="border border-blue-200 rounded-lg p-4 bg-zinc-500">
          <div className="flex items-center space-x-2 mb-3">
            <Phone className="w-5 h-5 text-blue-600" />
            <h4 className="font-medium text-blue-900">Personal Assistance</h4>
          </div>
          <Label className="text-sm font-medium text-gray-700 mb-3 block">
            Would you like an Enrollment Specialist to call you to help book your class?
          </Label>
          <RadioGroup value={formData.wantsEnrollmentCall ? 'yes' : 'no'} onValueChange={handleEnrollmentCallChange} className="space-y-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="call-yes" />
              <Label htmlFor="call-yes" className="text-sm">Yes, I'd like a call to help me choose</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="call-no" />
              <Label htmlFor="call-no" className="text-sm">No, I'll book online myself</Label>
            </div>
          </RadioGroup>
        </div>

        {formData.wantsEnrollmentCall === false && <div className="space-y-4">
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-3 block">
                Select Studio *
              </Label>
              <Select value={formData.selectedStudio} onValueChange={value => updateFormData({
            selectedStudio: value
          })}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose your preferred studio" />
                </SelectTrigger>
                <SelectContent>
                  {studios.map(studio => <SelectItem key={studio.id} value={studio.name}>
                      {studio.name}
                    </SelectItem>)}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-sm font-medium text-gray-700 mb-3 block">
                Preferred Time *
              </Label>
              <Select value={formData.selectedTimeSlot} onValueChange={value => updateFormData({
            selectedTimeSlot: value
          })}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose your preferred time" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map(slot => <SelectItem key={slot} value={slot}>
                      {slot}
                    </SelectItem>)}
                </SelectContent>
              </Select>
            </div>

            {formData.selectedStudio && formData.selectedTimeSlot && !showClassSelection && <Button type="button" onClick={handleFindClasses} className="w-full bg-blue-600 hover:bg-blue-700">
                Find Available Classes
              </Button>}

            {showClassSelection && <div>
                <h4 className="font-medium text-gray-900 mb-4">Available Classes</h4>
                {upcomingClasses.length > 0 ? <RadioGroup value={formData.selectedClass} onValueChange={value => updateFormData({
            selectedClass: value
          })} className="space-y-4">
                    {upcomingClasses.map(cls => <div key={cls.id}>
                        <RadioGroupItem value={cls.id} id={cls.id} className="sr-only" />
                        <Label htmlFor={cls.id} className="cursor-pointer">
                          <Card className={`border-2 transition-colors ${formData.selectedClass === cls.id ? 'border-rose-500 bg-rose-50' : 'border-gray-200 hover:border-rose-300'}`}>
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
                                  <span>{cls.studio}</span>
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
                      </div>)}
                  </RadioGroup> : <div className="text-center py-8 bg-gray-50 rounded-lg">
                    <p className="text-gray-600 mb-4">No classes available for your selected time.</p>
                    <p className="text-sm text-gray-500">
                      Don't worry! Our enrollment specialist will call you to find the perfect time.
                    </p>
                  </div>}
              </div>}
          </div>}
      </div>

      <div className="flex space-x-4">
        <Button type="button" variant="outline" onClick={onPrev} className="flex items-center space-x-2">
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </Button>
        <Button type="submit" className="flex-1 bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700" disabled={!canProceed}>
          {formData.wantsEnrollmentCall ? 'Request Call Back' : 'Book My Class'}
        </Button>
      </div>
    </form>;
};
export default BookingStep3;