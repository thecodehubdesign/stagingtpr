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
    onNext();
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
  const isFormValid = true;
  return <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="font-semibold mb-4 gradient-text text-3xl">
          Tell us about yourself
        </h3>
        <p className="text-sm mb-6 text-muted-foreground">
          Help us customize your experience and match you with the perfect offer.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <Label className="text-sm font-medium text-foreground mb-3 block">
            What are you looking to achieve? (Select all that apply)
          </Label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {goals.map(goal => <div key={goal} className="flex items-start space-x-3 p-3 rounded-lg cyber-border bg-card/30 hover:bg-card/50 transition-all">
                <Checkbox id={goal} checked={formData.goals.includes(goal)} onCheckedChange={checked => handleGoalChange(goal, checked as boolean)} className="border-white data-[state=checked]:bg-white data-[state=checked]:text-black" />
                <Label htmlFor={goal} className="text-sm leading-tight text-white">{goal}</Label>
              </div>)}
          </div>
        </div>

        <div>
          <Label className="text-sm font-medium text-foreground mb-3 block">
            How did you hear about us?
          </Label>
          <Select value={formData.howHeardAboutUs} onValueChange={value => updateFormData({
          howHeardAboutUs: value
        })}>
            <SelectTrigger className="cyber-border bg-card/50">
              <SelectValue placeholder="Select how you found us" />
            </SelectTrigger>
            <SelectContent className="bg-card border-border">
              {hearAboutUsOptions.map(option => <SelectItem key={option} value={option} className="hover:bg-accent">
                  {option}
                </SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-sm font-medium text-foreground mb-3 block">
            When would you like to start?
          </Label>
          <Select value={formData.whenToStart} onValueChange={value => updateFormData({
          whenToStart: value
        })}>
            <SelectTrigger className="cyber-border bg-card/50">
              <SelectValue placeholder="Select when you'd like to start" />
            </SelectTrigger>
            <SelectContent className="bg-card border-border">
              {startTimeOptions.map(option => <SelectItem key={option} value={option} className="hover:bg-accent">
                  {option}
                </SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-sm font-medium text-foreground mb-3 block">
            What's your experience level?
          </Label>
          <Select value={formData.priorExperience} onValueChange={value => updateFormData({
          priorExperience: value
        })}>
            <SelectTrigger className="cyber-border bg-card/50">
              <SelectValue placeholder="Select your experience level" />
            </SelectTrigger>
            <SelectContent className="bg-card border-border">
              {experienceOptions.map(option => <SelectItem key={option} value={option} className="hover:bg-accent">
                  {option}
                </SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-sm font-medium text-foreground mb-3 block">
            How would you describe your current fitness level?
          </Label>
          <Select value={formData.fitnessLevel} onValueChange={value => updateFormData({
          fitnessLevel: value
        })}>
            <SelectTrigger className="cyber-border bg-card/50">
              <SelectValue placeholder="Select your fitness level" />
            </SelectTrigger>
            <SelectContent className="bg-card border-border">
              {fitnessLevels.map(level => <SelectItem key={level} value={level} className="hover:bg-accent">
                  {level}
                </SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex space-x-4">
        <Button type="button" variant="outline" onClick={onPrev} className="flex items-center space-x-2 cyber-border bg-card/30 hover:bg-card/50">
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </Button>
        <Button type="submit" className="flex-1 neon-button text-primary-foreground" disabled={!isFormValid}>
          Continue to Vouchers
        </Button>
      </div>
    </form>;
};
export default VoucherStep2;