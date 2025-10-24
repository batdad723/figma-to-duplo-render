import { Card } from "@/components/ui/card";
import { Code, Database, Zap, Shield } from "lucide-react";

const useCases = [
  {
    icon: Code,
    title: "Infrastructure as Code",
    description: "Automate infrastructure provisioning with AI-powered code generation"
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Deploy and manage databases with zero configuration"
  },
  {
    icon: Zap,
    title: "CI/CD Automation",
    description: "Streamline deployments with intelligent pipeline automation"
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Built-in security scanning and compliance monitoring"
  }
];

const UseCases = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Use Cases
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From startups to enterprises, see how teams use Duplo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-secondary/30 border-border/50 hover:bg-secondary/50 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {useCase.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
