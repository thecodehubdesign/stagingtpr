import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { VoucherFormData } from '../VoucherClaimForm';
interface VoucherStep1Props {
  formData: VoucherFormData;
  updateFormData: (data: Partial<VoucherFormData>) => void;
  onNext: () => void;
}
const VoucherStep1 = ({
  formData,
  updateFormData,
  onNext
}: VoucherStep1Props) => {
  const locations = ['Highett', 'Kilsyth', 'Narre Warren', 'Eltham', 'Mitcham', 'CBD'];
  const programs = ['Pole Dance', 'Aerial Silks', 'Aerial Lyra/Hoop', 'Other Aerials'];
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.studioLocation && formData.program && formData.agreeToTerms) {
      onNext();
    }
  };
  const isFormValid = formData.name && formData.email && formData.phone && formData.studioLocation && formData.program && formData.agreeToTerms;
  return <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4 text-fuchsia-500">
          Let's get to know you
        </h3>
        <p className="text-sm mb-6 text-slate-50">
          Please provide your contact information so we can send you your special offer voucher.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="name" className="text-sm font-medium text-white-700">
            Full Name *
          </Label>
          <Input id="name" type="text" value={formData.name} onChange={e => updateFormData({
          name: e.target.value
        })} className="mt-1" required />
        </div>

        <div>
          <Label htmlFor="email" className="text-sm font-medium text-white-700">
            Email Address *
          </Label>
          <Input id="email" type="email" value={formData.email} onChange={e => updateFormData({
          email: e.target.value
        })} className="mt-1" required />
        </div>

        <div>
          <Label htmlFor="phone" className="text-sm font-medium text-white-700">
            Phone Number *
          </Label>
          <Input id="phone" type="tel" value={formData.phone} onChange={e => updateFormData({
          phone: e.target.value
        })} className="mt-1" required />
        </div>

        <div>
          <Label className="text-sm font-medium text-white-700 mb-3 block">
            Preferred Studio Location *
          </Label>
          <Select value={formData.studioLocation} onValueChange={value => updateFormData({
          studioLocation: value
        })}>
            <SelectTrigger>
              <SelectValue placeholder="Select a studio location" />
            </SelectTrigger>
            <SelectContent>
              {locations.map(location => <SelectItem key={location} value={location}>
                  {location}
                </SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-sm font-medium text-white-700 mb-3 block">
            Program Interest *
          </Label>
          <RadioGroup value={formData.program} onValueChange={value => updateFormData({
          program: value
        })} className="space-y-2">
            {programs.map(program => <div key={program} className="flex items-center space-x-2">
                <RadioGroupItem value={program} id={program} />
                <Label htmlFor={program} className="text-sm">{program}</Label>
              </div>)}
          </RadioGroup>
        </div>

        <div className="flex items-start space-x-2 pt-4">
          <Checkbox id="terms" checked={formData.agreeToTerms} onCheckedChange={checked => updateFormData({
          agreeToTerms: checked as boolean
        })} />
          <Label htmlFor="terms" className="text-sm text-white-600 leading-tight">
            I agree to the Terms of Service and Privacy Policy. I understand this is a special offer voucher and consent to being contacted about my offer. *
          </Label>
        </div>
      </div>

      <Button type="submit" className="w-full bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700" disabled={!isFormValid}>
        Continue to Next Step
      </Button>
    </form>;
};
export default VoucherStep1;