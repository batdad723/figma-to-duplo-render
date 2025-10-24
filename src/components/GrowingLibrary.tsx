import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Code2, FileText, Video } from "lucide-react";

const resources = [
  {
    icon: BookOpen,
    title: "Documentation",
    description: "Comprehensive guides and API references",
    count: "200+ articles"
  },
  {
    icon: Code2,
    title: "Code Examples",
    description: "Ready-to-use templates and snippets",
    count: "150+ examples"
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Step-by-step video guides",
    count: "50+ videos"
  },
  {
    icon: FileText,
    title: "Best Practices",
    description: "Industry-standard patterns and guidelines",
    count: "100+ guides"
  }
];

const GrowingLibrary = () => {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Access a growing <span className="text-primary">library of resources</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to succeed with Duplo, from getting started to advanced implementations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-card/50 border-border/50 hover:bg-card hover:border-primary/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="mb-2">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {resource.count}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {resource.description}
                </p>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90">
            Browse all resources
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GrowingLibrary;
