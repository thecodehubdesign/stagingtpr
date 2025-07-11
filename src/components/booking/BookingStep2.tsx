
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
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
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Tell us about yourself
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          Help us customize your experience and match you with the perfect class.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-3 block">
            What are you looking to achieve? (Select all that apply) *
          </Label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {goals.map((goal) => (
              <div key={goal} className="flex items-start space-x-2">
                <Checkbox
                  id={goal}
                  checked={formData.goals.includes(goal)}
                  onCheckedChange={(checked) => handleGoalChange(goal, checked as boolean)}
                />
                <Label htmlFor={goal} className="text-sm leading-tight">{goal}</Label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Label className="text-sm font-medium text-gray-700 mb-3 block">
            How did you hear about us? *
          </Label>
          <Select value={formData.howHeardAboutUs} onValueChange={(value) => updateFormData({ howHeardAboutUs: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select how you found us" />
            </SelectTrigger>
            <SelectContent>
              {hearAboutUsOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-sm font-medium text-gray-700 mb-3 block">
            When would you like to start? *
          </Label>
          <RadioGroup
            value={formData.whenToStart}
            onValueChange={(value) => updateFormData({ whenToStart: value })}
            className="space-y-2"
          >
            {startTimeOptions.map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={option} />
                <Label htmlFor={option} className="text-sm">{option}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div>
          <Label className="text-sm font-medium text-gray-700 mb-3 block">
            What's your experience level? *
          </Label>
          <RadioGroup
            value={formData.priorExperience}
            onValueChange={(value) => updateFormData({ priorExperience: value })}
            className="space-y-2"
          >
            {experienceOptions.map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={option} />
                <Label htmlFor={option} className="text-sm">{option}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div>
          <Label className="text-sm font-medium text-gray-700 mb-3 block">
            How would you describe your current fitness level? *
          </Label>
          <RadioGroup
            value={formData.fitnessLevel}
            onValueChange={(value) => updateFormData({ fitnessLevel: value })}
            className="space-y-2"
          >
            {fitnessLevels.map((level) => (
              <div key={level} className="flex items-center space-x-2">
                <RadioGroupItem value={level} id={level} />
                <Label htmlFor={level} className="text-sm">{level}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </div>

      <div className="flex space-x-4">
        <Button 
          type="button"
          variant="outline"
          onClick={onPrev}
          className="flex items-center space-x-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </Button>
        <Button 
          type="submit" 
          className="flex-1 bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700"
          disabled={!isFormValid}
        >
          Continue to Booking
        </Button>
      </div>
    </form>
  );
};

export default BookingStep2;
