import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Gift, Star, Clock, Phone, Sparkles } from 'lucide-react';
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
  const vouchers = [{
    id: 'first-class-80-off',
    title: '80% Off First Class',
    description: 'Perfect for trying us out with minimal commitment',
    originalPrice: '$35',
    discountPrice: '$7',
    savings: '$28',
    icon: Star,
    highlight: 'Most Popular',
    color: 'from-rose-500 to-pink-600'
  }, {
    id: 'intro-package-50-off',
    title: '50% Off Intro Package',
    description: '4 classes over 4 weeks - ideal for beginners',
    originalPrice: '$120',
    discountPrice: '$60',
    savings: '$60',
    icon: Gift,
    highlight: 'Best Value',
    color: 'from-purple-500 to-indigo-600'
  }, {
    id: 'unlimited-month-40-off',
    title: '40% Off First Month Unlimited',
    description: 'Unlimited classes for your first month',
    originalPrice: '$180',
    discountPrice: '$108',
    savings: '$72',
    icon: Sparkles,
    highlight: 'For Committed Beginners',
    color: 'from-cyan-500 to-blue-600'
  }];
  const handleEnrollmentCallChange = (wantsCall: string) => {
    const wants = wantsCall === 'yes';
    updateFormData({
      wantsEnrollmentCall: wants
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.selectedVoucher || formData.wantsEnrollmentCall) {
      onComplete();
    }
  };
  const canProceed = formData.selectedVoucher || formData.wantsEnrollmentCall;
  return <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4 text-slate-50">
          Choose Your Special Offer
        </h3>
        <p className="text-sm mb-6 text-slate-50">
          Select the voucher that best fits your goals and budget.
        </p>
      </div>

      <div className="space-y-6">
        <div className="border border-blue-200 rounded-lg p-4 bg-stone-900">
          <div className="flex items-center space-x-2 mb-3">
            <Phone className="w-5 h-5 text-blue-600" />
            <h4 className="font-semibold text-fuchsia-700">Need Help Choosing?</h4>
          </div>
          <Label className="text-sm font-medium text-white-700 mb-3 block">
            Would you like an Enrollment Specialist to call you to help choose the best offer?
          </Label>
          <RadioGroup value={formData.wantsEnrollmentCall ? 'yes' : 'no'} onValueChange={handleEnrollmentCallChange} className="space-y-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="call-yes" />
              <Label htmlFor="call-yes" className="text-sm">Yes, I'd like a call to help me choose</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="call-no" />
              <Label htmlFor="call-no" className="text-sm">No, I'll choose my voucher now</Label>
            </div>
          </RadioGroup>
        </div>

        {formData.wantsEnrollmentCall === false && <div>
            <h4 className="font-medium mb-4 text-slate-50">Available Vouchers</h4>
            <RadioGroup value={formData.selectedVoucher} onValueChange={value => updateFormData({
          selectedVoucher: value
        })} className="space-y-4">
              {vouchers.map(voucher => <div key={voucher.id}>
                  <RadioGroupItem value={voucher.id} id={voucher.id} className="sr-only" />
                  <Label htmlFor={voucher.id} className="cursor-pointer">
                    <Card className={`border-2 transition-all duration-200 ${formData.selectedVoucher === voucher.id ? 'border-rose-500 bg-rose-50 shadow-lg' : 'border-gray-200 hover:border-rose-300 hover:shadow-md'}`}>
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-lg bg-gradient-to-r ${voucher.color}`}>
                              <voucher.icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <CardTitle className="text-base">{voucher.title}</CardTitle>
                              {voucher.highlight && <span className="text-xs font-medium text-rose-600 bg-rose-100 px-2 rounded-full mx-0 my-[4px] py-0">
                                  {voucher.highlight}
                                </span>}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-sm mb-4 text-slate-50">{voucher.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span className="text-lg font-bold text-green-600">{voucher.discountPrice}</span>
                            <span className="text-sm text-gray-500 line-through">{voucher.originalPrice}</span>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium text-rose-600">Save {voucher.savings}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Label>
                </div>)}
            </RadioGroup>
          </div>}
      </div>

      <div className="flex space-x-4">
        <Button type="button" variant="outline" onClick={onPrev} className="flex items-center space-x-2">
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </Button>
        <Button type="submit" className="flex-1 bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700" disabled={!canProceed}>
          {formData.wantsEnrollmentCall ? 'Request Call Back' : 'Claim My Voucher'}
        </Button>
      </div>
    </form>;
};
export default VoucherStep3;