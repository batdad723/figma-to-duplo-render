import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

const stats = [
  { value: "8x", label: "Engineering time efficiency gain" },
  { value: "20x", label: "Cost savings" },
  { value: "25%", label: "Of total code volume" }
];

const BuildYourOwn = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Stats and testimonial */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
                  Trusted by world-class teams
                </h2>
                <p className="text-lg text-muted-foreground">
                  Engineering teams at leading companies use Devin to ship faster and focus on what matters.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="space-y-1">
                    <div className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <Card className="p-6 bg-card border-border">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex-shrink-0" />
                    <div className="space-y-2">
                      <p className="text-sm text-foreground leading-relaxed">
                        "Devin has become an essential part of our engineering workflow. It's like having an additional senior engineer on every project."
                      </p>
                      <div className="text-sm">
                        <div className="font-semibold text-foreground">Sarah Chen</div>
                        <div className="text-muted-foreground">VP of Engineering, Nubank</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <div>
                <Button variant="outline" size="lg">
                  Read customer stories
                </Button>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="relative">
              <Card className="p-8 bg-card border-border">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">Impact metrics</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Code quality</span>
                        <span className="font-semibold">98%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full w-[98%] bg-gradient-to-r from-green-500 to-emerald-500" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Time saved</span>
                        <span className="font-semibold">85%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full w-[85%] bg-gradient-to-r from-blue-500 to-cyan-500" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Developer satisfaction</span>
                        <span className="font-semibold">92%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full w-[92%] bg-gradient-to-r from-purple-500 to-pink-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildYourOwn;
