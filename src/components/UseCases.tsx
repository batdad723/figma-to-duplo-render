import { Card } from "@/components/ui/card";
import { Code2, Sparkles, Rocket, Shield } from "lucide-react";

const useCases = [
  {
    icon: Code2,
    title: "Cost Optimization",
    description: "Analyze and optimize cloud infrastructure costs automatically, identifying savings opportunities."
  },
  {
    icon: Sparkles,
    title: "Security Compliance",
    description: "Continuously monitor and enforce security policies across your entire infrastructure."
  },
  {
    icon: Rocket,
    title: "Auto Scaling",
    description: "Intelligently scale resources based on demand patterns and performance metrics."
  },
  {
    icon: Shield,
    title: "Incident Response",
    description: "Detect, diagnose, and resolve production incidents automatically with AI-powered analysis."
  }
];

const UseCases = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
              Use <span className="text-primary">Cases</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform your DevOps operations with AI-powered automation and intelligent workflows
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 bg-card hover:bg-accent/50 transition-all duration-300 border-border group cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {useCase.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {useCase.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
