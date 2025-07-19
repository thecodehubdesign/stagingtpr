import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      level: "Beginner → Advanced",
      image: "/lovable-uploads/3cc0b943-7d1c-4140-a59c-a60390d03154.jpg",
      quote: "The Level Up Program changed everything for me. I went from being terrified to perform to competing nationally in just 8 months!",
      rating: 5
    },
    {
      name: "Jessica K.", 
      level: "Complete Beginner → Instructor",
      image: "/lovable-uploads/c7f8bec0-23c5-44db-871b-dccfbacb26a5.jpg",
      quote: "Having a dedicated coach made all the difference. The structured progression kept me motivated and seeing real results every week.",
      rating: 5
    },
    {
      name: "Maya L.",
      level: "Intermediate → Elite Performer",
      image: "/lovable-uploads/1d83d83b-0057-4bd1-8052-79584b039a97.jpg", 
      quote: "I tried other studios but nothing compared to the Level Up system. The momentum cards kept me accountable and the results speak for themselves!",
      rating: 5
    }
  ];

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold gradient-text mb-2">
          Real Transformations, Real Results
        </h2>
        <p className="text-lg text-muted-foreground">
          See what our Level Up students have achieved
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="cyber-card hover:border-primary/50 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/30">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold gradient-text">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.level}</p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <Quote className="w-6 h-6 text-primary/30 mb-2" />
                <p className="text-sm text-muted-foreground italic">
                  "{testimonial.quote}"
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;