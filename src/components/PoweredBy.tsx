import { Card } from "@/components/ui/card";
import { Brain, Cpu, Network, Sparkles } from "lucide-react";

const technologies = [
  {
    icon: Brain,
    title: "Advanced AI Models",
    description: "Powered by state-of-the-art language models for intelligent decision making"
  },
  {
    icon: Cpu,
    title: "High Performance",
    description: "Built on scalable infrastructure that grows with your needs"
  },
  {
    icon: Network,
    title: "Cloud Native",
    description: "Native integration with AWS, Azure, GCP and more"
  },
  {
    icon: Sparkles,
    title: "Continuous Learning",
    description: "AI that learns from your patterns and improves over time"
  }
];

const PoweredBy = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Powered by <span className="text-primary">cutting-edge technology</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built with the latest advancements in AI and cloud infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <Card
                key={index}
                className="p-8 bg-gradient-to-br from-secondary/30 to-muted/20 border-border/50 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {tech.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {tech.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PoweredBy;
