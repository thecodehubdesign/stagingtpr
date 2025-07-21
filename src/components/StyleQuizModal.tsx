import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Sparkles, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
const StyleQuizModal = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const questions = [{
    question: "What's your primary fitness goal?",
    options: ["Build strength and muscle tone", "Improve flexibility and grace", "Learn choreography and dance", "Try something completely new"]
  }, {
    question: "How would you describe your current fitness level?",
    options: ["Complete beginner", "Some fitness experience", "Regular gym-goer", "Former dancer/athlete"]
  }, {
    question: "What appeals to you most?",
    options: ["Challenging strength moves", "Flowing aerial sequences", "Sensual floor choreography", "A mix of everything"]
  }];
  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };
  const getRecommendation = () => {
    if (answers.includes("Challenging strength moves") || answers.includes("Build strength and muscle tone")) {
      return {
        title: "Pole Dancing",
        description: "Perfect for building strength while learning graceful movements. You'll love the challenge!",
        color: "from-rose-500 to-pink-500"
      };
    } else if (answers.includes("Flowing aerial sequences") || answers.includes("Improve flexibility and grace")) {
      return {
        title: "Aerial Silks",
        description: "Your graceful nature and flexibility goals make aerial silks the perfect fit for you.",
        color: "from-purple-500 to-indigo-500"
      };
    } else {
      return {
        title: "Dance & Floorwork",
        description: "Start with our dance classes to build confidence and learn beautiful choreography.",
        color: "from-rose-400 to-purple-500"
      };
    }
  };
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };
  const closeModal = () => {
    setIsOpen(false);
    resetQuiz();
  };
  return <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-rose-600" />
              <DialogTitle className="text-xl font-bold">Find Your Perfect Style</DialogTitle>
            </div>
            <Button variant="ghost" size="sm" onClick={closeModal}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="py-4">
          {!showResult ? <div className="animate-fade-in">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Question {currentQuestion + 1} of {questions.length}</span>
                  <span>{Math.round((currentQuestion + 1) / questions.length * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-rose-500 to-purple-600 h-2 rounded-full transition-all duration-500" style={{
                width: `${(currentQuestion + 1) / questions.length * 100}%`
              }}></div>
                </div>
              </div>

              {/* Question */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  {questions[currentQuestion].question}
                </h3>
                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, index) => <button key={index} onClick={() => handleAnswer(option)} className="w-full p-4 text-left bg-white border border-gray-200 rounded-lg hover:border-rose-300 hover:bg-rose-50 transition-all duration-200 group">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700 group-hover:text-rose-700">{option}</span>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-rose-500 opacity-0 group-hover:opacity-100 transition-all" />
                      </div>
                    </button>)}
                </div>
              </div>
            </div> : <div className="text-center animate-fade-in">
              <div className="mb-6">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Perfect Match Found!</h3>
              </div>

              {(() => {
            const recommendation = getRecommendation();
            return <div className={`bg-gradient-to-r ${recommendation.color} p-6 rounded-2xl text-white mb-6`}>
                    <h4 className="text-2xl font-bold mb-2">{recommendation.title}</h4>
                    <p className="text-lg opacity-90">{recommendation.description}</p>
                  </div>;
          })()}

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700">
                  Book My Free Trial
                </Button>
                <Button size="lg" variant="outline" onClick={resetQuiz}>
                  Take Quiz Again
                </Button>
              </div>
            </div>}
        </div>
      </DialogContent>
    </Dialog>;
};
export default StyleQuizModal;