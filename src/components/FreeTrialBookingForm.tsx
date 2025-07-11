
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import BookingStep1 from './booking/BookingStep1';
import BookingStep2 from './booking/BookingStep2';
import BookingStep3 from './booking/BookingStep3';
import BookingThankYou from './booking/BookingThankYou';

export interface BookingFormData {
  // Step 1 - Your Info
  name: string;
  phone: string;
  email: string;
  studioLocation: string;
  program: string;
  agreeToTerms: boolean;
  
  // Step 2 - About You
  goals: string[];
  howHeardAboutUs: string;
  whenToStart: string;
  priorExperience: string;
  fitnessLevel: string;
  
  // Step 3 - Book
  wantsEnrollmentCall: boolean;
  selectedStudio: string;
  selectedTimeSlot: string;
  selectedDate: string;
  selectedClass: string;
}

const FreeTrialBookingForm = () => {
  const [step, setStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    email: '',
    studioLocation: '',
    program: '',
    agreeToTerms: false,
    goals: [],
    howHeardAboutUs: '',
    whenToStart: '',
    priorExperience: '',
    fitnessLevel: '',
    wantsEnrollmentCall: false,
    selectedStudio: '',
    selectedTimeSlot: '',
    selectedDate: '',
    selectedClass: ''
  });

  const updateFormData = (data: Partial<BookingFormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const completeBooking = () => {
    console.log('Booking completed:', formData);
    setIsComplete(true);
  };

  const resetForm = () => {
    setStep(1);
    setIsComplete(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      studioLocation: '',
      program: '',
      agreeToTerms: false,
      goals: [],
      howHeardAboutUs: '',
      whenToStart: '',
      priorExperience: '',
      fitnessLevel: '',
      wantsEnrollmentCall: false,
      selectedStudio: '',
      selectedTimeSlot: '',
      selectedDate: '',
      selectedClass: ''
    });
  };

  const getStepTitle = () => {
    switch (step) {
      case 1: return 'Your Information';
      case 2: return 'About You';
      case 3: return 'Book Your Class';
      default: return 'Book Free Trial';
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700">
          Book Free Trial Class
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-2xl overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-xl font-bold text-gray-900">
            {isComplete ? 'Thank You!' : getStepTitle()}
          </SheetTitle>
        </SheetHeader>

        <div className="py-6">
          {!isComplete && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                {[1, 2, 3].map((stepNum) => (
                  <div
                    key={stepNum}
                    className={`flex items-center ${stepNum < 3 ? 'flex-1' : ''}`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        stepNum <= step
                          ? 'bg-rose-500 text-white'
                          : 'bg-gray-200 text-gray-600'
                      }`}
                    >
                      {stepNum}
                    </div>
                    {stepNum < 3 && (
                      <div
                        className={`flex-1 h-0.5 mx-2 ${
                          stepNum < step ? 'bg-rose-500' : 'bg-gray-200'
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {isComplete ? (
            <BookingThankYou formData={formData} onReset={resetForm} />
          ) : (
            <Card>
              <CardContent className="p-6">
                {step === 1 && (
                  <BookingStep1
                    formData={formData}
                    updateFormData={updateFormData}
                    onNext={nextStep}
                  />
                )}
                {step === 2 && (
                  <BookingStep2
                    formData={formData}
                    updateFormData={updateFormData}
                    onNext={nextStep}
                    onPrev={prevStep}
                  />
                )}
                {step === 3 && (
                  <BookingStep3
                    formData={formData}
                    updateFormData={updateFormData}
                    onPrev={prevStep}
                    onComplete={completeBooking}
                  />
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default FreeTrialBookingForm;
