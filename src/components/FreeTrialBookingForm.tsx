
import { useState } from 'react';
import { Button } from '@/components/ui/button';
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
  programs: string[];
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
    programs: [],
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
      programs: [],
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
        <Button className="neon-button">
          Book Free Trial Class
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-2xl overflow-y-auto bg-gradient-to-br from-gray-900 via-purple-900/80 to-gray-900 border-l border-fuchsia-500/30">
        {/* Cyber grid overlay */}
        <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
        
        <div className="relative z-10">
          <SheetHeader>
            <SheetTitle className="text-2xl font-bold text-white">
              {isComplete ? (
                <span className="gradient-text">Thank You!</span>
              ) : (
                <span className="gradient-text">Book Your Free Trial Class</span>
              )}
            </SheetTitle>
            {!isComplete && (
              <p className="text-lg text-gray-300 mt-2">{getStepTitle()}</p>
            )}
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
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                          stepNum <= step
                            ? 'bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-white shadow-lg shadow-fuchsia-500/50'
                            : 'bg-gray-800 text-gray-500 border border-gray-700'
                        }`}
                      >
                        {stepNum}
                      </div>
                      {stepNum < 3 && (
                        <div
                          className={`flex-1 h-0.5 mx-2 ${
                            stepNum < step 
                              ? 'bg-gradient-to-r from-fuchsia-500 to-cyan-400' 
                              : 'bg-gray-700'
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
              <div className="cyber-card p-6 rounded-xl">
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
              </div>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default FreeTrialBookingForm;
