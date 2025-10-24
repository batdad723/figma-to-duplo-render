import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const features = [
  {
    title: "Powered by Generative AI",
    description: "Advanced AI capabilities that understand context and deliver intelligent solutions for your DevOps workflows.",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "No-code Platform",
    description: "Build and deploy without writing a single line of code. Duplo handles all the complexity for you.",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Enterprise Ready",
    description: "Built for scale with enterprise-grade security, compliance, and support for your mission-critical workloads.",
    gradient: "from-green-500/20 to-emerald-500/20"
  }
];

const ExploreMore = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Explore more with{" "}
            <span className="text-primary">Duplo</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the powerful features that make Duplo the perfect DevOps companion
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`p-8 bg-gradient-to-br ${feature.gradient} border-border/50 hover:border-primary/50 transition-all duration-300 group`}
            >
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {feature.description}
              </p>
              <Button variant="ghost" className="group-hover:text-primary p-0">
                Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreMore;
