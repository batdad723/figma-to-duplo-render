import { Card } from "@/components/ui/card";
import { Wallet, Globe, BarChart3, Shield } from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Expense Management",
    description: "Control, track, and optimize your expenditures in real-time with automated workflows.",
  },
  {
    icon: Globe,
    title: "Global Payments",
    description: "Send and receive payments across borders seamlessly with competitive exchange rates.",
  },
  {
    icon: BarChart3,
    title: "Financial Analytics",
    description: "Get comprehensive insights into your spending patterns and financial health.",
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description: "Bank-level security with full regulatory compliance across multiple jurisdictions.",
  },
];

const Features = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            A fully integrated suite of{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              financial products
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything your business needs to manage finances efficiently
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-medium transition-all duration-300 group cursor-pointer border-border/50"
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
