
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft } from 'lucide-react';
import { VoucherFormData } from '../VoucherClaimForm';

interface VoucherStep2Props {
  formData: VoucherFormData;
  updateFormData: (data: Partial<VoucherFormData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

const VoucherStep2 = ({
  formData,
  updateFormData,
  onNext,
  onPrev
}: VoucherStep2Props) => {
  const goals = ['Build strength and flexibility', 'Learn a new skill', 'Improve confidence', 'Get fit and have fun', 'Meet new people', 'Creative expression', 'Stress relief', 'Competition/Performance goals'];
  const hearAboutUsOptions = ['Google Search', 'Social Media (Instagram/Facebook)', 'Friend/Family Recommendation', 'Existing Student', 'Local Advertisement', 'Walking Past Studio', 'Other'];
  const startTimeOptions = ['This week', 'Next week', 'Within a month', 'In 1-3 months', 'Just exploring options'];
  const experienceOptions = ['Complete beginner', 'Some dance/movement experience', 'Previous pole/aerial experience (less than 6 months)', 'Previous pole/aerial experience (6+ months)', 'Returning after a break'];
  const fitnessLevels = ['Low - I\'m just starting my fitness journey', 'Moderate - I exercise occasionally', 'Good - I exercise regularly', 'High - I\'m very active/athletic'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.goals.length > 0 && formData.howHeardAboutUs && formData.whenToStart && formData.priorExperience && formData.fitnessLevel) {
      onNext();
    }
  };

  const handleGoalChange = (goal: string, checked: boolean) => {
    if (checked) {
      updateFormData({
        goals: [...formData.goals, goal]
      });
    } else {
      updateFormData({
        goals: formData.goals.filter(g => g !== goal)
      });
    }
  };

  const isFormValid = formData.goals.length > 0 && formData.howHeardAboutUs && formData.whenToStart && formData.priorExperience && formData.fitnessLevel;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4 text-zinc-50">
          Tell us about yourself
        </h3>
        <p className="text-sm mb-6 text-slate-50">
          Help us customize your experience and match you with the perfect offer.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <Label className="text-sm font-medium text-white-700 mb-3 block">
            What are you looking to achieve? (Select all that apply) *
          </Label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {goals.map(goal => (
              <div key={goal} className="flex items-start space-x-2">
                <Checkbox 
                  id={goal} 
                  checked={formData.goals.includes(goal)} 
                  onCheckedChange={checked => handleGoalChange(goal, checked as boolean)} 
                />
                <Label htmlFor={goal} className="text-sm leading-tight">{goal}</Label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Label className="text-sm font-medium text-white-700 mb-3 block">
            How did you hear about us? *
          </Label>
          <Select value={formData.howHeardAboutUs} onValueChange={value => updateFormData({ howHeardAboutUs: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select how you found us" />
            </SelectTrigger>
            <SelectContent>
              {hearAboutUsOptions.map(option => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-sm font-medium text-white-700 mb-3 block">
            When would you like to start? *
          </Label>
          <Select value={formData.whenToStart} onValueChange={value => updateFormData({ whenToStart: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select when you'd like to start" />
            </SelectTrigger>
            <SelectContent>
              {startTimeOptions.map(option => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-sm font-medium text-white-700 mb-3 block">
            What's your experience level? *
          </Label>
          <Select value={formData.priorExperience} onValueChange={value => updateFormData({ priorExperience: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select your experience level" />
            </SelectTrigger>
            <SelectContent>
              {experienceOptions.map(option => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-sm font-medium text-white-900 mb-3 block">
            How would you describe your current fitness level? *
          </Label>
          <Select value={formData.fitnessLevel} onValueChange={value => updateFormData({ fitnessLevel: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select your fitness level" />
            </SelectTrigger>
            <SelectContent>
              {fitnessLevels.map(level => (
                <SelectItem key={level} value={level}>
                  {level}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex space-x-4">
        <Button type="button" variant="outline" onClick={onPrev} className="flex items-center space-x-2">
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </Button>
        <Button type="submit" className="flex-1 bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700" disabled={!isFormValid}>
          Continue to Vouchers
        </Button>
      </div>
    </form>
  );
};

export default VoucherStep2;
