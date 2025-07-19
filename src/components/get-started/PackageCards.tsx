import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Zap, Users, Award, ShoppingBag, Percent } from "lucide-react";

const PackageCards = () => {
  const packages = [
    {
      title: "Introductory Package",
      subtitle: "2 Sessions per Week",
      price: "$149",
      originalPrice: "$180",
      savings: "Save $31",
      popular: false,
      features: [
        "Orientation session with coach",
        "Dedicated personal coach",
        "Momentum progress cards",
        "Unlimited practice sessions",
        "10% off all retail items",
        "Flexible scheduling"
      ]
    },
    {
      title: "Introductory Package",
      subtitle: "3 Sessions per Week", 
      price: "$199",
      originalPrice: "$240",
      savings: "Save $41",
      popular: true,
      features: [
        "Orientation session with coach",
        "Dedicated personal coach", 
        "Momentum progress cards",
        "Unlimited practice sessions",
        "10% off all retail items",
        "Flexible scheduling",
        "Priority class booking",
        "Bonus technique workshop"
      ]
    }
  ];

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold gradient-text mb-2">
          Choose Your Level Up Package
        </h2>
        <p className="text-lg text-muted-foreground">
          Start your transformation with expert guidance and structured progression
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {packages.map((pkg, index) => (
          <Card key={index} className={`
            cyber-card hover:border-primary/50 transition-all duration-300 relative overflow-hidden
            ${pkg.popular ? 'border-primary/50 bg-primary/5' : ''}
          `}>
            {pkg.popular && (
              <div className="absolute top-0 left-0 right-0">
                <div className="bg-gradient-to-r from-primary to-cyan-400 text-black text-center py-2 text-sm font-bold">
                  <Zap className="w-4 h-4 inline mr-1" />
                  MOST POPULAR
                </div>
              </div>
            )}
            
            <CardContent className={`p-6 ${pkg.popular ? 'pt-16' : ''}`}>
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold gradient-text mb-1">
                  {pkg.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {pkg.subtitle}
                </p>
                
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-3xl font-bold gradient-text">
                    {pkg.price}
                  </span>
                  <div className="text-left">
                    <div className="text-sm text-muted-foreground line-through">
                      {pkg.originalPrice}
                    </div>
                    <Badge className="bg-red-500/20 text-red-400 border-red-500/30 text-xs">
                      {pkg.savings}
                    </Badge>
                  </div>
                </div>
                
                <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-4">
                  Limited packages available at your location
                </Badge>
              </div>
              
              <div className="space-y-3 mb-6">
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                className={`w-full text-lg py-3 ${
                  pkg.popular ? 'neon-button' : 'cyber-button'
                }`}
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Buy Now & Secure Your Spot
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PackageCards;