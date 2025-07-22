import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import VoucherStep1 from './voucher/VoucherStep1';
import VoucherStep2 from './voucher/VoucherStep2';
import VoucherStep3 from './voucher/VoucherStep3';
import VoucherThankYou from './voucher/VoucherThankYou';
export interface VoucherFormData {
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

  // Step 3 - Select Voucher
  selectedVoucher: string;
  wantsEnrollmentCall: boolean;
}
const VoucherClaimForm = () => {
  const [step, setStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [formData, setFormData] = useState<VoucherFormData>({
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
    selectedVoucher: '',
    wantsEnrollmentCall: false
  });
  const updateFormData = (data: Partial<VoucherFormData>) => {
    setFormData(prev => ({
      ...prev,
      ...data
    }));
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
  const completeVoucherClaim = () => {
    console.log('Voucher claimed:', formData);
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
      selectedVoucher: '',
      wantsEnrollmentCall: false
    });
  };
  const getStepTitle = () => {
    switch (step) {
      case 1:
        return 'Your Information';
      case 2:
        return 'About You';
      case 3:
        return 'Claim Your Voucher';
      default:
        return 'Get Free Trial';
    }
  };
  return <Sheet>
      <SheetTrigger asChild>
        <Button className="neon-button text-primary-foreground font-normal">
          Book Your Free Trial Class
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-2xl overflow-y-auto bg-background cyber-grid">
        <SheetHeader>
          <SheetTitle className="text-xl font-bold gradient-text">
            {isComplete ? 'Voucher Claimed!' : getStepTitle()}
          </SheetTitle>
        </SheetHeader>

        <div className="py-6">
          {!isComplete && <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                {[1, 2, 3].map(stepNum => <div key={stepNum} className={`flex items-center ${stepNum < 3 ? 'flex-1' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium border-2 ${stepNum <= step ? 'bg-primary text-primary-foreground border-primary' : 'bg-muted text-muted-foreground border-border'}`}>
                      {stepNum}
                    </div>
                    {stepNum < 3 && <div className={`flex-1 h-0.5 mx-2 ${stepNum < step ? 'bg-primary' : 'bg-border'}`} />}
                  </div>)}
              </div>
            </div>}

          {isComplete ? <VoucherThankYou formData={formData} onReset={resetForm} /> : <Card className="cyber-card border-border/50">
              <CardContent className="p-6">
                {step === 1 && <VoucherStep1 formData={formData} updateFormData={updateFormData} onNext={nextStep} />}
                {step === 2 && <VoucherStep2 formData={formData} updateFormData={updateFormData} onNext={nextStep} onPrev={prevStep} />}
                {step === 3 && <VoucherStep3 formData={formData} updateFormData={updateFormData} onPrev={prevStep} onComplete={completeVoucherClaim} />}
              </CardContent>
            </Card>}
        </div>
      </SheetContent>
    </Sheet>;
};
export default VoucherClaimForm;