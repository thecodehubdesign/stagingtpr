
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { CheckCircle, Star, Zap } from 'lucide-react';

const ProgramsComparison = () => {
  const programData = [
    {
      level: "Absolute Beginner",
      pole: {
        skills: "Basic spins, walks, floor work",
        conditioning: "Core activation, grip strength",
        dance: "Basic movement patterns"
      },
      aerials: {
        skills: "Mounting, basic poses, dismounts",
        conditioning: "Upper body strength, flexibility",
        dance: "Graceful transitions, flow"
      }
    },
    {
      level: "Beginner",
      pole: {
        skills: "Basic climbs, inverts, static holds",
        conditioning: "Full body strength, coordination",
        dance: "Choreographed routines, rhythm"
      },
      aerials: {
        skills: "Wraps, drops, sequences",
        conditioning: "Grip endurance, flexibility",
        dance: "Artistic expression, musicality"
      }
    },
    {
      level: "Intermediate",
      pole: {
        skills: "Advanced spins, combos, flow",
        conditioning: "Dynamic strength, control",
        dance: "Complex choreography, style development"
      },
      aerials: {
        skills: "Dynamic drops, advanced poses",
        conditioning: "Advanced strength, mobility",
        dance: "Performance quality, storytelling"
      }
    },
    {
      level: "Advanced",
      pole: {
        skills: "Competition moves, creative flow",
        conditioning: "Elite strength, power",
        dance: "Professional performance level"
      },
      aerials: {
        skills: "High-level sequences, risk moves",
        conditioning: "Peak physical condition",
        dance: "Stage-ready performances"
      }
    }
  ];

  const differences = [
    {
      aspect: "Primary Focus",
      pole: "Vertical apparatus with spinning and static modes",
      aerials: "Suspended apparatus focusing on height and drops"
    },
    {
      aspect: "Strength Requirements",
      pole: "Grip strength, core stability, upper body power",
      aerials: "Upper body endurance, shoulder stability, flexibility"
    },
    {
      aspect: "Movement Style",
      pole: "Ground-to-air transitions, spins, inversions",
      aerials: "Aerial sequences, wraps, controlled falls"
    },
    {
      aspect: "Performance Style",
      pole: "Dynamic, powerful, athletic artistry",
      aerials: "Graceful, flowing, ethereal beauty"
    },
    {
      aspect: "Safety Considerations",
      pole: "Grip aids, crash mats, proper warm-up",
      aerials: "Height awareness, rigging safety, spotting"
    }
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Our <span className="gradient-text">Programs</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Understanding the unique benefits and progression paths of our Pole Dance and Aerials programs, 
            designed to take you from complete beginner to stage-ready performer.
          </p>
        </div>

        {/* Key Differences */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Pole Dance vs <span className="gradient-text">Aerials</span>
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="cyber-card p-6">
              <div className="flex items-center mb-4">
                <Zap className="w-6 h-6 text-fuchsia-400 mr-3" />
                <h4 className="text-xl font-bold text-white">Pole Dance</h4>
              </div>
              <p className="text-gray-300 mb-4">
                A dynamic combination of athleticism, artistry, and empowerment using a vertical pole as your apparatus. 
                Develops incredible strength while expressing your unique style through spins, climbs, and inversions.
              </p>
              <div className="space-y-2">
                <Badge className="bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/30 mr-2">
                  Strength Building
                </Badge>
                <Badge className="bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/30 mr-2">
                  Core Focus
                </Badge>
                <Badge className="bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/30">
                  Dynamic Movement
                </Badge>
              </div>
            </Card>

            <Card className="cyber-card p-6">
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 text-cyan-400 mr-3" />
                <h4 className="text-xl font-bold text-white">Aerials Program</h4>
              </div>
              <p className="text-gray-300 mb-4">
                Graceful and flowing movement through the air using silks, lyra, hammocks, and cube. 
                Focus on flexibility, upper body strength, and creating beautiful sequences suspended above ground.
              </p>
              <div className="space-y-2">
                <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/30 mr-2">
                  Flexibility Focus
                </Badge>
                <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/30 mr-2">
                  Grace & Flow
                </Badge>
                <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/30">
                  Aerial Artistry
                </Badge>
              </div>
            </Card>
          </div>

          {/* Comparison Table */}
          <Card className="cyber-card overflow-hidden">
            <div className="p-6">
              <h4 className="text-xl font-bold text-white mb-4">Program Comparison</h4>
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-700">
                    <TableHead className="text-gray-300">Aspect</TableHead>
                    <TableHead className="text-fuchsia-400">Pole Dance</TableHead>
                    <TableHead className="text-cyan-400">Aerials</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {differences.map((item, index) => (
                    <TableRow key={index} className="border-gray-700">
                      <TableCell className="font-medium text-white">{item.aspect}</TableCell>
                      <TableCell className="text-gray-300">{item.pole}</TableCell>
                      <TableCell className="text-gray-300">{item.aerials}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </div>

        {/* Skill Progression Framework */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Skill Development <span className="gradient-text">Framework</span>
          </h3>
          <p className="text-center text-gray-300 mb-8 max-w-3xl mx-auto">
            Our systematic approach ensures every student progresses safely from beginner to stage-ready performer 
            through structured skill acquisition, conditioning, and dance integration.
          </p>

          <Card className="cyber-card overflow-hidden">
            <div className="p-6">
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-700">
                    <TableHead className="text-gray-300">Level</TableHead>
                    <TableHead className="text-gray-300">Skills</TableHead>
                    <TableHead className="text-gray-300">Conditioning</TableHead>
                    <TableHead className="text-gray-300">Dance</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {programData.map((level, index) => (
                    <>
                      <TableRow key={`${index}-pole`} className="border-gray-700">
                        <TableCell className="font-medium text-white border-r border-gray-700">
                          <div className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-fuchsia-400 mr-2" />
                            {level.level}
                            <Badge className="ml-2 bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/30 text-xs">
                              Pole
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell className="text-gray-300">{level.pole.skills}</TableCell>
                        <TableCell className="text-gray-300">{level.pole.conditioning}</TableCell>
                        <TableCell className="text-gray-300">{level.pole.dance}</TableCell>
                      </TableRow>
                      <TableRow key={`${index}-aerials`} className="border-gray-700">
                        <TableCell className="font-medium text-white border-r border-gray-700">
                          <div className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                            {level.level}
                            <Badge className="ml-2 bg-cyan-500/10 text-cyan-400 border-cyan-500/30 text-xs">
                              Aerials
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell className="text-gray-300">{level.aerials.skills}</TableCell>
                        <TableCell className="text-gray-300">{level.aerials.conditioning}</TableCell>
                        <TableCell className="text-gray-300">{level.aerials.dance}</TableCell>
                      </TableRow>
                    </>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProgramsComparison;
