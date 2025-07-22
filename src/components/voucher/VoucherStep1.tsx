import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

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
    onNext();
  };
  return <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="mb-4 text-3xl font-bold gradient-text">
          Let's get to know you
        </h3>
        <p className="text-sm mb-6 text-muted-foreground">
          Please provide your contact information so we can send you your special offer voucher.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="name" className="text-sm font-medium text-foreground">
            Full Name
          </Label>
          <Input id="name" type="text" value={formData.name} onChange={e => updateFormData({
          name: e.target.value
        })} className="mt-1 cyber-border bg-card/50" />
        </div>

        <div>
          <Label htmlFor="email" className="text-sm font-medium text-foreground">
            Email Address
          </Label>
          <Input id="email" type="email" value={formData.email} onChange={e => updateFormData({
          email: e.target.value
        })} className="mt-1 cyber-border bg-card/50" />
        </div>

        <div>
          <Label htmlFor="phone" className="text-sm font-medium text-foreground">
            Phone Number
          </Label>
          <Input id="phone" type="tel" value={formData.phone} onChange={e => updateFormData({
          phone: e.target.value
        })} className="mt-1 cyber-border bg-card/50" />
        </div>

        <div>
          <Label className="text-sm font-medium text-foreground mb-3 block">
            Preferred Studio Location
          </Label>
          <Select value={formData.studioLocation} onValueChange={value => updateFormData({
          studioLocation: value
        })}>
            <SelectTrigger className="cyber-border bg-card/50">
              <SelectValue placeholder="Select a studio location" />
            </SelectTrigger>
            <SelectContent className="bg-card border-border">
              {locations.map(location => <SelectItem key={location} value={location} className="hover:bg-accent">
                  {location}
                </SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-sm font-medium text-foreground mb-3 block">
            Program Interest (select all that apply)
          </Label>
          <div className="space-y-3">
            {programs.map((program) => (
              <div key={program} className="flex items-center space-x-3 p-3 rounded-lg cyber-border bg-card/30 hover:bg-card/50 transition-all">
                <Checkbox
                  id={program}
                  checked={formData.programs.includes(program)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      updateFormData({ programs: [...formData.programs, program] });
                    } else {
                      updateFormData({ programs: formData.programs.filter(p => p !== program) });
                    }
                  }}
                  className="border-white data-[state=checked]:bg-white data-[state=checked]:text-black"
                />
                <Label htmlFor={program} className="text-sm text-white">{program}</Label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-start space-x-3 pt-4 p-3 rounded-lg cyber-border bg-card/30">
          <Checkbox id="terms" checked={formData.agreeToTerms} onCheckedChange={checked => updateFormData({
          agreeToTerms: checked as boolean
        })} className="border-white data-[state=checked]:bg-white data-[state=checked]:text-black mt-1" />
          <Label htmlFor="terms" className="text-sm text-white leading-tight">
            I agree to the Terms of Service and Privacy Policy. I understand this is a special offer voucher and consent to being contacted about my offer.
          </Label>
        </div>
      </div>

      <Button type="submit" className="w-full neon-button text-primary-foreground font-normal">
        Continue to Next Step
      </Button>
    </form>;
};
export default VoucherStep1;