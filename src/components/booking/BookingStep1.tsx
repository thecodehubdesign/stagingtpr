
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BookingFormData } from '../FreeTrialBookingForm';

interface BookingStep1Props {
  formData: BookingFormData;
  updateFormData: (data: Partial<BookingFormData>) => void;
  onNext: () => void;
}

const BookingStep1 = ({ formData, updateFormData, onNext }: BookingStep1Props) => {
  const locations = [
    'Highett', 
    'Kilsyth', 
    'Narre Warren', 
    'Eltham', 
    'Mitcham', 
    'CBD'
  ];

  const programs = [
    'Pole Dance',
    'Aerial Silks',
    'Aerial Lyra/Hoop',
    'Other Aerials'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">
          Let's get to know you
        </h3>
        <p className="text-sm text-gray-400 mb-6">
          Please provide your contact information so we can book your free trial class.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="name" className="text-sm font-medium text-gray-300">
            Full Name
          </Label>
          <Input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => updateFormData({ name: e.target.value })}
            className="mt-1 bg-gray-800/50 border-fuchsia-500/30 text-white placeholder:text-gray-500 focus:border-fuchsia-500 focus:ring-fuchsia-500/50"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-sm font-medium text-gray-300">
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => updateFormData({ email: e.target.value })}
            className="mt-1 bg-gray-800/50 border-fuchsia-500/30 text-white placeholder:text-gray-500 focus:border-fuchsia-500 focus:ring-fuchsia-500/50"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <Label htmlFor="phone" className="text-sm font-medium text-gray-300">
            Phone Number
          </Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => updateFormData({ phone: e.target.value })}
            className="mt-1 bg-gray-800/50 border-fuchsia-500/30 text-white placeholder:text-gray-500 focus:border-fuchsia-500 focus:ring-fuchsia-500/50"
            placeholder="Enter your phone number"
          />
        </div>

        <div>
          <Label className="text-sm font-medium text-gray-300 mb-3 block">
            Preferred Studio Location
          </Label>
          <Select value={formData.studioLocation} onValueChange={(value) => updateFormData({ studioLocation: value })}>
            <SelectTrigger className="bg-gray-800/50 border-fuchsia-500/30 text-white focus:border-fuchsia-500 focus:ring-fuchsia-500/50">
              <SelectValue placeholder="Select a studio location" className="text-gray-500" />
            </SelectTrigger>
            <SelectContent className="bg-gray-900 border-fuchsia-500/30">
              {locations.map((location) => (
                <SelectItem 
                  key={location} 
                  value={location}
                  className="text-white hover:bg-fuchsia-500/20 focus:bg-fuchsia-500/20"
                >
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-sm font-medium text-gray-300 mb-3 block">
            Program Interest (select all that apply)
          </Label>
          <div className="space-y-2">
            {programs.map((program) => (
              <div key={program} className="flex items-center space-x-2">
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
                  className="border-fuchsia-500/50 data-[state=checked]:bg-fuchsia-500 data-[state=checked]:border-fuchsia-500"
                />
                <Label htmlFor={program} className="text-sm text-gray-300">{program}</Label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-start space-x-2 pt-4">
          <Checkbox
            id="terms"
            checked={formData.agreeToTerms}
            onCheckedChange={(checked) => updateFormData({ agreeToTerms: checked as boolean })}
            className="border-fuchsia-500/50 data-[state=checked]:bg-fuchsia-500 data-[state=checked]:border-fuchsia-500"
          />
          <Label htmlFor="terms" className="text-sm text-gray-400 leading-tight">
            I agree to the Terms of Service and Privacy Policy. I understand this is a free trial class and consent to being contacted about my booking.
          </Label>
        </div>
      </div>

      <Button 
        type="submit" 
        className="w-full neon-button"
      >
        Continue to Next Step
      </Button>
    </form>
  );
};

export default BookingStep1;
