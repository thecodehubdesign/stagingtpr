import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What happens after I buy the Intro Package?",
      answer: "You'll receive a welcome email with login details, your coach assignment, and instructions to book your orientation session. Your coach will contact you within 24 hours."
    },
    {
      question: "Can I upgrade later?",
      answer: "Absolutely! You can upgrade to more sessions per week or extend your package at any time. Your coach will help you find the perfect progression plan."
    },
    {
      question: "When does my first session start?",
      answer: "Your package begins with an orientation session that you can book immediately after purchase. Regular classes start based on your schedule and availability."
    },
    {
      question: "What if I can't make my first class?",
      answer: "No worries! You can reschedule up to 2 hours before your class time. Your package sessions never expire, so you have full flexibility."
    },
    {
      question: "How do I access my retail discount?",
      answer: "Your 10% discount is automatically applied to your account. Just mention your package when shopping in-studio or use your member portal online."
    }
  ];

  return (
    <div className="cyber-card p-8">
      <h2 className="text-3xl font-bold gradient-text mb-6 text-center">
        Frequently Asked Questions
      </h2>
      
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="cyber-faq-item">
            <AccordionTrigger className="py-5 text-left font-medium text-white hover:text-fuchsia-400 hover:no-underline transition-colors">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-300 pb-5 leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;