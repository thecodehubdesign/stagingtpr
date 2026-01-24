
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft } from 'lucide-react';
import { BookingFormData } from '../FreeTrialBookingForm';

interface BookingStep2Props {
  formData: BookingFormData;
  updateFormData: (data: Partial<BookingFormData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

const BookingStep2 = ({ formData, updateFormData, onNext, onPrev }: BookingStep2Props) => {
  const goals = [
    'Build strength and flexibility',
    'Learn a new skill',
    'Improve confidence',
    'Get fit and have fun',
    'Meet new people',
    'Creative expression',
    'Stress relief',
    'Competition/Performance goals'
  ];

  const hearAboutUsOptions = [
    'Google Search',
    'Social Media (Instagram/Facebook)',
    'Friend/Family Recommendation',
    'Existing Student',
    'Local Advertisement',
    'Walking Past Studio',
    'Other'
  ];

  const startTimeOptions = [
    'This week',
    'Next week',
    'Within a month',
    'In 1-3 months',
    'Just exploring options'
  ];

  const experienceOptions = [
    'Complete beginner',
    'Some dance/movement experience',
    'Previous pole/aerial experience (less than 6 months)',
    'Previous pole/aerial experience (6+ months)',
    'Returning after a break'
  ];

  const fitnessLevels = [
    'Low - I\'m just starting my fitness journey',
    'Moderate - I exercise occasionally',
    'Good - I exercise regularly',
    'High - I\'m very active/athletic'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.goals.length > 0 && formData.howHeardAboutUs && formData.whenToStart && formData.priorExperience && formData.fitnessLevel) {
      onNext();
    }
  };

  const handleGoalChange = (goal: string, checked: boolean) => {
    if (checked) {
      updateFormData({ goals: [...formData.goals, goal] });
    } else {
      updateFormData({ goals: formData.goals.filter(g => g !== goal) });
    }
  };

  const isFormValid = formData.goals.length > 0 && formData.howHeardAboutUs && formData.whenToStart && formData.priorExperience && formData.fitnessLevel;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">
          Tell us about yourself
        </h3>
        <p className="text-sm text-gray-400 mb-6">
          Help us customize your experience and match you with the perfect class.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <Label className="text-sm font-medium text-gray-300 mb-3 block">
            What are you looking to achieve? (Select all that apply) <span className="text-fuchsia-400">*</span>
          </Label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {goals.map((goal) => (
              <div key={goal} className="flex items-start space-x-2">
                <Checkbox
                  id={goal}
                  checked={formData.goals.includes(goal)}
                  onCheckedChange={(checked) => handleGoalChange(goal, checked as boolean)}
                  className="border-fuchsia-500/50 data-[state=checked]:bg-fuchsia-500 data-[state=checked]:border-fuchsia-500"
                />
                <Label htmlFor={goal} className="text-sm text-gray-300 leading-tight">{goal}</Label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Label className="text-sm font-medium text-gray-300 mb-3 block">
            How did you hear about us? <span className="text-fuchsia-400">*</span>
          </Label>
          <Select value={formData.howHeardAboutUs} onValueChange={(value) => updateFormData({ howHeardAboutUs: value })}>
            <SelectTrigger className="bg-gray-800/50 border-fuchsia-500/30 text-white focus:border-fuchsia-500 focus:ring-fuchsia-500/50">
              <SelectValue placeholder="Select how you found us" />
            </SelectTrigger>
            <SelectContent className="bg-gray-900 border-fuchsia-500/30">
              {hearAboutUsOptions.map((option) => (
                <SelectItem 
                  key={option} 
                  value={option}
                  className="text-white hover:bg-fuchsia-500/20 focus:bg-fuchsia-500/20"
                >
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-sm font-medium text-gray-300 mb-3 block">
            When would you like to start? <span className="text-fuchsia-400">*</span>
          </Label>
          <Select value={formData.whenToStart} onValueChange={(value) => updateFormData({ whenToStart: value })}>
            <SelectTrigger className="bg-gray-800/50 border-fuchsia-500/30 text-white focus:border-fuchsia-500 focus:ring-fuchsia-500/50">
              <SelectValue placeholder="Select when you'd like to start" />
            </SelectTrigger>
            <SelectContent className="bg-gray-900 border-fuchsia-500/30">
              {startTimeOptions.map((option) => (
                <SelectItem 
                  key={option} 
                  value={option}
                  className="text-white hover:bg-fuchsia-500/20 focus:bg-fuchsia-500/20"
                >
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-sm font-medium text-gray-300 mb-3 block">
            What's your experience level? <span className="text-fuchsia-400">*</span>
          </Label>
          <Select value={formData.priorExperience} onValueChange={(value) => updateFormData({ priorExperience: value })}>
            <SelectTrigger className="bg-gray-800/50 border-fuchsia-500/30 text-white focus:border-fuchsia-500 focus:ring-fuchsia-500/50">
              <SelectValue placeholder="Select your experience level" />
            </SelectTrigger>
            <SelectContent className="bg-gray-900 border-fuchsia-500/30">
              {experienceOptions.map((option) => (
                <SelectItem 
                  key={option} 
                  value={option}
                  className="text-white hover:bg-fuchsia-500/20 focus:bg-fuchsia-500/20"
                >
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-sm font-medium text-gray-300 mb-3 block">
            How would you describe your current fitness level? <span className="text-fuchsia-400">*</span>
          </Label>
          <Select value={formData.fitnessLevel} onValueChange={(value) => updateFormData({ fitnessLevel: value })}>
            <SelectTrigger className="bg-gray-800/50 border-fuchsia-500/30 text-white focus:border-fuchsia-500 focus:ring-fuchsia-500/50">
              <SelectValue placeholder="Select your fitness level" />
            </SelectTrigger>
            <SelectContent className="bg-gray-900 border-fuchsia-500/30">
              {fitnessLevels.map((level) => (
                <SelectItem 
                  key={level} 
                  value={level}
                  className="text-white hover:bg-fuchsia-500/20 focus:bg-fuchsia-500/20"
                >
                  {level}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex space-x-4">
        <Button 
          type="button"
          variant="outline"
          onClick={onPrev}
          className="flex items-center space-x-2 border-fuchsia-500/50 text-white hover:bg-fuchsia-500/20 bg-transparent"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </Button>
        <Button 
          type="submit" 
          className="flex-1 neon-button"
          disabled={!isFormValid}
        >
          Continue to Booking
        </Button>
      </div>
    </form>
  );
};

export default BookingStep2;
