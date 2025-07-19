import { CheckCircle } from "lucide-react";

const ProgressIndicator = () => {
  const steps = [
    { number: 1, title: "Book Free Trial", completed: true },
    { number: 2, title: "Create Account", completed: true },
    { number: 3, title: "Secure Your Level Up Intro Package", completed: false, current: true }
  ];

  return (
    <div className="cyber-card p-6 mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center flex-1">
            <div className="flex flex-col items-center">
              <div className={`
                w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all
                ${step.completed 
                  ? 'bg-primary/20 border-primary text-primary' 
                  : step.current 
                    ? 'bg-gradient-to-r from-primary to-cyan-400 border-primary text-black font-bold animate-pulse' 
                    : 'border-muted-foreground/30 text-muted-foreground'
                }
              `}>
                {step.completed ? (
                  <CheckCircle className="w-6 h-6" />
                ) : (
                  <span className="text-sm font-bold">{step.number}</span>
                )}
              </div>
              <div className="mt-2 text-center">
                <p className={`text-sm font-medium ${
                  step.current ? 'gradient-text' : step.completed ? 'text-primary' : 'text-muted-foreground'
                }`}>
                  {step.title}
                </p>
                {step.current && (
                  <p className="text-xs text-cyan-400 font-medium mt-1">You are here!</p>
                )}
              </div>
            </div>
            
            {index < steps.length - 1 && (
              <div className={`
                flex-1 h-0.5 mx-4 transition-all
                ${steps[index + 1].completed || steps[index + 1].current 
                  ? 'bg-gradient-to-r from-primary to-cyan-400' 
                  : 'bg-muted-foreground/30'
                }
              `} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;