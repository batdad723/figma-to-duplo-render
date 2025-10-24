import { Card } from "@/components/ui/card";
import { Code2, Sparkles, Rocket, Shield } from "lucide-react";

const useCases = [
  {
    icon: Code2,
    title: "Write code",
    description: "Devin writes production-ready code across your entire stack, from frontend to backend."
  },
  {
    icon: Sparkles,
    title: "Fix bugs",
    description: "Automatically identify, debug, and resolve issues in your codebase with intelligent analysis."
  },
  {
    icon: Rocket,
    title: "Ship features",
    description: "Go from idea to deployed feature faster with AI-powered development workflows."
  },
  {
    icon: Shield,
    title: "Maintain quality",
    description: "Ensure code quality with automated testing, reviews, and best practice enforcement."
  }
];

const UseCases = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
              What Devin can do
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collaborative AI teammate that handles the full software development lifecycle
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
