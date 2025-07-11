
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

const StudioFAQ = () => {
  const faqs = [
    {
      question: "What should I wear to my first class?",
      answer: "Wear comfortable workout clothes that allow for movement. For pole classes, we recommend shorts and a tank top to help with grip. Bring a water bottle and arrive 15 minutes early for your first visit."
    },
    {
      question: "Do I need to be fit or flexible to start?",
      answer: "Not at all! Our classes are designed for all fitness levels. You'll build strength and flexibility gradually as you progress. Our instructors will modify moves to suit your current ability."
    },
    {
      question: "Is pole dancing appropriate for beginners?",
      answer: "Absolutely! Pole fitness is a legitimate form of exercise that builds strength, flexibility, and confidence. Our beginner classes focus on fitness and technique in a supportive, non-intimidating environment."
    },
    {
      question: "What's included in my membership?",
      answer: "Memberships include unlimited classes, access to open studio time, member discounts on workshops and events, and use of our changing facilities and equipment."
    },
    {
      question: "Can I bring a friend to class?",
      answer: "Yes! We love when students bring friends. Your friend can book their own free trial class, or you can both sign up for a partner package."
    },
    {
      question: "What if I need to cancel or reschedule?",
      answer: "You can cancel or reschedule classes up to 12 hours in advance through our online booking system. Late cancellations may result in a credit deduction."
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Got questions? We've got answers! Here are the most common questions from new students.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-gray-700 rounded-lg px-6 bg-gray-800"
            >
              <AccordionTrigger className="text-left text-white hover:text-fuchsia-400">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <Button className="neon-button text-black font-bold text-lg px-8 py-3">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StudioFAQ;
