import { Gift, TrendingUp, Users, Trophy } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Gift,
      title: "Unlock Exclusive Program Bonuses",
      description: "Get access to special workshops, technique videos, and member-only events"
    },
    {
      icon: TrendingUp,
      title: "More Sessions = Faster Results", 
      description: "Consistent practice accelerates your progress - see transformation in weeks, not months"
    },
    {
      icon: Users,
      title: "Be Supported by a Dedicated Coach",
      description: "Your personal coach tracks your progress and adjusts your training for optimal results"
    },
    {
      icon: Trophy,
      title: "Get the Most Out of Your Journey from Day 1",
      description: "Start with proper foundation and technique to avoid plateaus and prevent injury"
    }
  ];

  return (
    <div className="cyber-card p-8 mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold gradient-text mb-2">
          Why Buy Your Package Now?
        </h2>
        <p className="text-lg text-muted-foreground">
          Maximize your transformation with these exclusive benefits
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 border border-primary/20 hover:border-primary/40 transition-all">
            <div className="p-3 rounded-lg bg-primary/20 text-primary flex-shrink-0">
              <benefit.icon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold gradient-text mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;