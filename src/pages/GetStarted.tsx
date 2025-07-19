import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  CheckCircle, 
  User, 
  Smartphone, 
  GraduationCap, 
  Clock, 
  ShoppingBag, 
  Heart,
  Apple,
  Play
} from "lucide-react";

const CountdownTimer = ({ targetDate, label }: { targetDate: Date; label: string }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="cyber-card p-4 rounded-lg">
      <p className="text-sm text-muted-foreground mb-2">{label}</p>
      <div className="grid grid-cols-4 gap-2">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="text-center">
            <div className="text-2xl font-bold gradient-text">{value}</div>
            <div className="text-xs text-muted-foreground capitalize">{unit}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const StepCard = ({ 
  number, 
  title, 
  description, 
  icon: Icon, 
  completed = false,
  children 
}: {
  number: number;
  title: string;
  description: string;
  icon: any;
  completed?: boolean;
  children?: React.ReactNode;
}) => (
  <Card className="cyber-card hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
    <div className="absolute top-4 right-4">
      {completed ? (
        <CheckCircle className="w-6 h-6 text-green-400" />
      ) : (
        <Badge variant="secondary" className="bg-primary/20 text-primary">
          {number}
        </Badge>
      )}
    </div>
    
    <CardContent className="p-6">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-primary/20 text-primary">
          <Icon className="w-6 h-6" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2 gradient-text">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          {children}
        </div>
      </div>
    </CardContent>
  </Card>
);

const GetStarted = () => {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  
  // Example dates - these would come from your CMS/API
  const nextTermDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days from now
  const promoEndDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days from now

  const toggleStep = (stepNumber: number) => {
    setCompletedSteps(prev => 
      prev.includes(stepNumber) 
        ? prev.filter(s => s !== stepNumber)
        : [...prev, stepNumber]
    );
  };

  const progressPercentage = (completedSteps.length / 6) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-block p-1 rounded-lg bg-gradient-to-r from-primary to-cyan-400 mb-6">
            <div className="bg-background rounded-md px-6 py-3">
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
                🎉 Congratulations!
              </h1>
              <p className="text-xl text-muted-foreground">
                You've scheduled your Free Trial Class
              </p>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Progress</span>
              <span>{completedSteps.length}/6 steps</span>
            </div>
            <Progress value={progressPercentage} className="h-3" />
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-8 max-w-4xl mx-auto">
          
          <StepCard
            number={1}
            title="Create Your Account"
            description="Set up your personalized pole journey account to track your progress and book classes."
            icon={User}
            completed={completedSteps.includes(1)}
          >
            <div className="space-y-3">
              <Button 
                className="w-full neon-button"
                onClick={() => toggleStep(1)}
              >
                Create Account Now
              </Button>
              <p className="text-xs text-muted-foreground">
                Quick setup in under 2 minutes
              </p>
            </div>
          </StepCard>

          <StepCard
            number={2}
            title="Download Our App"
            description="Get instant access to class schedules, exclusive content, and your pole progress tracker."
            icon={Smartphone}
            completed={completedSteps.includes(2)}
          >
            <div className="grid grid-cols-2 gap-3">
              <Button 
                variant="outline" 
                className="flex items-center gap-2"
                onClick={() => toggleStep(2)}
              >
                <Apple className="w-4 h-4" />
                App Store
              </Button>
              <Button 
                variant="outline"
                className="flex items-center gap-2"
              >
                <Play className="w-4 h-4" />
                Google Play
              </Button>
            </div>
          </StepCard>

          <StepCard
            number={3}
            title="Learn About Level Up Courses"
            description="Discover our structured progression system designed to take you from beginner to advanced."
            icon={GraduationCap}
            completed={completedSteps.includes(3)}
          >
            <Button 
              variant="secondary"
              onClick={() => toggleStep(3)}
            >
              Explore Level Up System
            </Button>
          </StepCard>

          <StepCard
            number={4}
            title="Countdown to Next Term"
            description="Our new term starts soon! Don't miss out on joining a structured learning journey."
            icon={Clock}
            completed={completedSteps.includes(4)}
          >
            <div className="space-y-4">
              <CountdownTimer 
                targetDate={nextTermDate}
                label="Next Term Starts In:"
              />
              <Button 
                variant="outline"
                onClick={() => toggleStep(4)}
              >
                Reserve Your Spot
              </Button>
            </div>
          </StepCard>

          <StepCard
            number={5}
            title="Buy Intro Package & Save 30%"
            description="Limited time offer! Get our introductory package with 4 classes and save big."
            icon={ShoppingBag}
            completed={completedSteps.includes(5)}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-3">
                <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
                  Limited Time
                </Badge>
                <span className="text-lg font-bold gradient-text">30% OFF</span>
              </div>
              
              <CountdownTimer 
                targetDate={promoEndDate}
                label="Offer Ends In:"
              />
              
              <Button 
                className="w-full neon-button text-lg py-3"
                onClick={() => toggleStep(5)}
              >
                Claim 30% Discount
              </Button>
              
              <p className="text-sm text-muted-foreground text-center">
                <s>$120</s> <span className="text-primary font-bold">$84</span> for 4 classes
              </p>
            </div>
          </StepCard>

          <StepCard
            number={6}
            title="What to Expect on Your First Visit"
            description="Feel confident and prepared for your first pole class with our complete guide."
            icon={Heart}
            completed={completedSteps.includes(6)}
          >
            <div className="space-y-3">
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Arrive 15 minutes early for check-in</li>
                <li>• Bring a water bottle and towel</li>
                <li>• Wear shorts and a tank top</li>
                <li>• We provide all equipment needed</li>
              </ul>
              <Button 
                variant="secondary"
                onClick={() => toggleStep(6)}
              >
                Read Full First Visit Guide
              </Button>
            </div>
          </StepCard>

        </div>

        {/* Completion Message */}
        {completedSteps.length === 6 && (
          <div className="text-center mt-12">
            <div className="cyber-card p-8 max-w-md mx-auto">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold gradient-text mb-2">
                You're All Set!
              </h3>
              <p className="text-muted-foreground">
                We can't wait to see you at your first class!
              </p>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default GetStarted;