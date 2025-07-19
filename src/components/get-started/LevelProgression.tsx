import { ArrowRight, Star } from "lucide-react";

const LevelProgression = () => {
  const levels = [
    { name: "Beginner", description: "Build foundation & confidence", color: "from-green-400 to-emerald-500" },
    { name: "Intermediate", description: "Develop strength & flow", color: "from-blue-400 to-cyan-500" },
    { name: "Advanced", description: "Master complex moves", color: "from-purple-400 to-pink-500" },
    { name: "Elite", description: "Performance ready", color: "from-yellow-400 to-orange-500" }
  ];

  return (
    <div className="cyber-card p-8 mb-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold gradient-text mb-2">
          Your Path to Pole Success
        </h2>
        <p className="text-lg text-muted-foreground">
          How our students go from self-doubt to unstoppable – on stage, in life, at work.
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
        {levels.map((level, index) => (
          <div key={level.name} className="flex items-center gap-4">
            <div className="text-center group">
              <div className={`
                w-20 h-20 rounded-full bg-gradient-to-r ${level.color} 
                flex items-center justify-center mb-3 transition-transform
                group-hover:scale-110 relative
              `}>
                <Star className="w-8 h-8 text-white" />
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-cyan-400 rounded-full opacity-0 group-hover:opacity-20 animate-pulse" />
              </div>
              
              <h3 className="font-bold text-lg gradient-text mb-1">
                {level.name}
              </h3>
              <p className="text-xs text-muted-foreground">
                {level.description}
              </p>
            </div>
            
            {index < levels.length - 1 && (
              <ArrowRight className="w-6 h-6 text-primary hidden md:block" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LevelProgression;