import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Video, BookOpen } from "lucide-react";

const resources = [
  {
    icon: FileText,
    title: "Case studies",
    description: "See how leading teams use Devin to transform their development process",
    count: "12+ stories"
  },
  {
    icon: Video,
    title: "Product demos",
    description: "Watch Devin in action solving real-world engineering challenges",
    count: "Watch now"
  },
  {
    icon: BookOpen,
    title: "Documentation",
    description: "Comprehensive guides to get the most out of Devin",
    count: "Start learning"
  }
];

const GrowingLibrary = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
              Learn more about Devin
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore resources to understand how Devin can help your team
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <Card 
                  key={index}
                  className="p-8 bg-card hover:bg-accent/50 transition-all duration-300 border-border group cursor-pointer"
                >
                  <div className="space-y-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-foreground">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {resource.description}
                      </p>
                    </div>
                    <div className="pt-2">
                      <span className="text-sm font-semibold text-primary group-hover:underline">
                        {resource.count} →
                      </span>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              View all resources
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowingLibrary;
