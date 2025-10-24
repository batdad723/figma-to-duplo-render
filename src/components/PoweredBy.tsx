import { Card } from "@/components/ui/card";
import { Brain, Code2, Workflow, Settings } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Advanced reasoning",
    description: "State-of-the-art AI models trained specifically for software engineering tasks"
  },
  {
    icon: Code2,
    title: "Full-stack capabilities",
    description: "Works across your entire codebase, from database to frontend"
  },
  {
    icon: Workflow,
    title: "Autonomous workflows",
    description: "Independently plans, executes, and validates complex development tasks"
  },
  {
    icon: Settings,
    title: "Integrated tooling",
    description: "Seamlessly works with your existing development tools and workflows"
  }
];

const PoweredBy = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
              Built for ambitious teams
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Devin combines cutting-edge AI with practical software engineering to deliver real results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index}
                  className="p-8 bg-card hover:bg-accent/50 transition-all duration-300 border-border group cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
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

export default PoweredBy;
