
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CheckCircle, ArrowRight, Sparkles, Users, Zap, Star, Trophy } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface QuizAnswer {
  questionIndex: number;
  answerIndex: number;
  value: string;
}

interface QuizResult {
  type: 'community' | 'fitness' | 'performer' | 'competitor';
  icon: React.ComponentType<any>;
  headline: string;
  description: string;
  pathway: string;
  color: string;
  image: string;
}

const PoleTypeQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const quizImages = [
    {
      src: "/lovable-uploads/62c85b2c-a16e-4a03-ab52-224dae2b446b.png",
      alt: "The Social Butterfly - Community focused pole dancing"
    },
    {
      src: "/lovable-uploads/7935ee95-b0f2-4393-9a65-5426a48942c3.png", 
      alt: "The Fitspo Queen - Fitness focused pole dancing"
    },
    {
      src: "/lovable-uploads/2eedcd47-29dd-40c7-8263-7fcf920d041c.png",
      alt: "The Spotlight Seeker - Performance focused pole dancing"
    },
    {
      src: "/lovable-uploads/930cee8a-33f0-430b-8ef4-34c83d23d2d3.png",
      alt: "The Overachiever - Competition focused pole dancing"
    }
  ];

  const questions = [
    {
      question: "What made you interested in trying pole dancing at The Pole Room?",
      options: ["I want to have fun and meet new people", "I'm looking for a new way to get fit and build strength", "I love dancing and want to express myself creatively", "I'm competitive and want to set myself a challenge", "I'm just curious!"]
    },
    {
      question: "When you picture your ideal class, which appeals to you more?",
      options: ["Laughing and learning in a group", "Focusing on pushing myself physically", "Getting lost in the music and dance", "Working towards a goal or event"]
    },
    {
      question: "Which of these outcomes would make you feel most proud?",
      options: ["Making new friends and being part of a community", "Feeling stronger and fitter than ever before", "Pulling off a routine and feeling like a performer", "Standing on stage or winning a comp"]
    },
    {
      question: "Which of these best describes your vibe?",
      options: ["Outgoing and social", "Determined and driven", "Creative and expressive", "Ambitious and competitive"]
    },
    {
      question: "What's most important to you at the end of a program?",
      options: ["I've made friends and look forward to every class", "I'm stronger, more flexible, and can do things I never thought possible", "I can perform a routine or feel confident dancing", "I've taken part in a showcase, comp, or smashed a big goal"]
    }
  ];

  const handleAnswer = (answerIndex: number, value: string) => {
    const newAnswer: QuizAnswer = {
      questionIndex: currentQuestion,
      answerIndex,
      value
    };
    const newAnswers = [...answers, newAnswer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getQuizResult = (): QuizResult => {
    // Count answers by type
    const scores = {
      community: 0,
      fitness: 0,
      performer: 0,
      competitor: 0
    };

    answers.forEach(answer => {
      if (answer.answerIndex === 0) scores.community++;
      else if (answer.answerIndex === 1) scores.fitness++;
      else if (answer.answerIndex === 2) scores.performer++;
      else if (answer.answerIndex === 3) scores.competitor++;
    });

    // Find the highest score
    const maxScore = Math.max(...Object.values(scores));
    const resultType = Object.keys(scores).find(key => scores[key as keyof typeof scores] === maxScore) as keyof typeof scores;

    const results: Record<keyof typeof scores, QuizResult> = {
      community: {
        type: 'community',
        icon: Users,
        headline: "You're a Social Butterfly!",
        description: "You thrive on connection, support, and good times. The Pole Room is where you'll find your crew and have a blast every session.",
        pathway: "Start with our 28-Day Intro Program, make friends, and discover where pole can take you!",
        color: "from-rose-500 to-pink-500",
        image: "/lovable-uploads/62c85b2c-a16e-4a03-ab52-224dae2b446b.png"
      },
      fitness: {
        type: 'fitness',
        icon: Zap,
        headline: "You're a Fitspo Queen!",
        description: "You love to push yourself, get strong, and see progress. Our classes will help you smash your fitness goals and unlock new tricks.",
        pathway: "Join our 28-Day Intro Program to build confidence and strength, then explore our Foundation and Technique classes.",
        color: "from-purple-500 to-indigo-500",
        image: "/lovable-uploads/7935ee95-b0f2-4393-9a65-5426a48942c3.png"
      },
      performer: {
        type: 'performer',
        icon: Star,
        headline: "You're a Spotlight Seeker!",
        description: "You love music and movement. At The Pole Room, you'll shine in dance-based classes and have a chance to perform.",
        pathway: "Try our Choreography and Dance classes during the 28-Day Intro, and join a studio showcase when you're ready!",
        color: "from-rose-400 to-purple-500",
        image: "/lovable-uploads/2eedcd47-29dd-40c7-8263-7fcf920d041c.png"
      },
      competitor: {
        type: 'competitor',
        icon: Trophy,
        headline: "You're an Overachiever!",
        description: "You thrive on challenge and big goals. We'll help you map out your journey from your first class to the comp stage.",
        pathway: "Start with a 1-on-1 assessment or our 28-Day Intro Program, then chat with our team about competition training!",
        color: "from-amber-500 to-orange-500",
        image: "/lovable-uploads/930cee8a-33f0-430b-8ef4-34c83d23d2d3.png"
      }
    };

    return results[resultType];
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setShowLeadForm(false);
    setFormData({ name: '', email: '' });
  };

  const handleLeadCapture = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Lead capture:', { ...formData, quizResult: getQuizResult() });
    alert('Thanks! Your personalized results are on their way to your inbox.');
    resetQuiz();
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 cyber-grid">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 text-rose-600 mb-4">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">Discover Your Type</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white gradient-text">
            Find Your Pole Dancer Type
          </h2>
          <p className="text-lg text-gray-300">
            Not sure where to begin? Take our quick quiz to discover what kind of pole dancer you'll become and the best way to start your journey!
          </p>
        </div>

        {/* Image Carousel */}
        <div className="mb-8">
          <Carousel className="w-full max-w-md mx-auto">
            <CarouselContent>
              {quizImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl cyber-border">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>

        <Card className="p-8 shadow-2xl cyber-card">
          {!showResult && !showLeadForm ? (
            <div className="animate-fade-in">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>Question {currentQuestion + 1} of {questions.length}</span>
                  <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-rose-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Question */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-6">
                  {questions[currentQuestion].question}
                </h3>
                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(index, option)}
                      className="w-full p-4 text-left bg-gray-800/50 border border-gray-600 rounded-lg hover:border-rose-400 hover:bg-rose-500/10 transition-all duration-200 group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-gray-200 group-hover:text-rose-300">{option}</span>
                        <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-rose-400 opacity-0 group-hover:opacity-100 transition-all" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : showResult && !showLeadForm ? (
            <div className="text-center animate-fade-in">
              <div className="mb-6">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Perfect Match Found!</h3>
              </div>

              {(() => {
                const result = getQuizResult();
                const IconComponent = result.icon;
                return (
                  <div className={`bg-gradient-to-r ${result.color} p-6 rounded-2xl text-white mb-6`}>
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-32 h-40 rounded-lg overflow-hidden border-2 border-white/30 shadow-xl">
                        <img 
                          src={result.image} 
                          alt={result.headline}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-center mb-4">
                      <IconComponent className="w-8 h-8 mr-2" />
                    </div>
                    <h4 className="text-2xl font-bold mb-2">{result.headline}</h4>
                    <p className="text-lg opacity-90 mb-4">{result.description}</p>
                    <p className="text-sm font-semibold bg-white/20 rounded-lg p-3">
                      {result.pathway}
                    </p>
                  </div>
                );
              })()}

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700"
                  onClick={() => setShowLeadForm(true)}
                >
                  Get My Personalized Results
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={resetQuiz}
                  className="border-gray-600 text-gray-300 hover:bg-gray-800"
                >
                  Take Quiz Again
                </Button>
              </div>
            </div>
          ) : (
            <div className="animate-fade-in">
              <div className="mb-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Get Your Personalized Results!</h3>
                <p className="text-gray-300">
                  Want your personalised pathway, class recommendations, and tips sent straight to your inbox?
                </p>
              </div>

              <form onSubmit={handleLeadCapture} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-gray-300">Name</Label>
                  <Input 
                    id="name" 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-gray-800 border-gray-600 text-white"
                    required 
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-300">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-gray-800 border-gray-600 text-white"
                    required 
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 flex-1"
                  >
                    Send My Results
                  </Button>
                  <Button 
                    type="button" 
                    size="lg" 
                    variant="outline" 
                    onClick={() => setShowLeadForm(false)}
                    className="border-gray-600 text-gray-300 hover:bg-gray-800"
                  >
                    Back to Results
                  </Button>
                </div>
                
                <p className="text-xs text-gray-500 text-center mt-4">
                  We respect your privacy. Unsubscribe any time.
                </p>
              </form>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
};

export default PoleTypeQuiz;
