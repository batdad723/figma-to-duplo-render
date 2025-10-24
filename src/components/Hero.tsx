import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Hero = () => {
  const steps = [
    {
      number: 1,
      title: "Ticket",
      description: "Integrate Slack, Web, and VS Code"
    },
    {
      number: 2,
      title: "Plan",
      description: "Quickly review Duplo's proposal"
    },
    {
      number: 3,
      title: "Execute",
      description: "Duplo makes the changes by itself"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-dark"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Duplo, <span className="text-primary">The AI DevOps Engineer</span>
              </h1>
            </div>

            <div className="flex gap-4">
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                See demo
              </Button>
              <Button size="lg" variant="secondary" className="bg-secondary hover:bg-secondary/80">
                Contact us
              </Button>
            </div>

            <p className="text-xl text-muted-foreground">
              Crush your backlog with your personal AI DevOps team.
            </p>

            {/* Steps */}
            <div className="space-y-3 pt-4">
              {steps.map((step) => (
                <Card key={step.number} className="p-4 bg-secondary/50 border-border/50 hover:bg-secondary/70 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-foreground font-bold">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column - Slack Interface Mockup */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative bg-gradient-to-br from-secondary/40 to-muted/20 rounded-2xl p-8 border border-border/30 shadow-2xl backdrop-blur-sm">
              {/* Browser tabs mockup */}
              <div className="flex gap-2 mb-6">
                <div className="px-4 py-2 bg-foreground/10 rounded-lg text-sm flex items-center gap-2">
                  <span className="text-xs">📱</span>
                  <span>Slack</span>
                </div>
                <div className="px-4 py-2 bg-muted/30 rounded-lg text-sm flex items-center gap-2 opacity-60">
                  <span className="text-xs">🌐</span>
                  <span>Browser</span>
                </div>
                <div className="px-4 py-2 bg-muted/30 rounded-lg text-sm flex items-center gap-2 opacity-60">
                  <span className="text-xs">💻</span>
                  <span>IDE</span>
                </div>
              </div>

              {/* Slack conversation mockup */}
              <div className="bg-foreground/5 rounded-xl p-6 space-y-4 backdrop-blur-md border border-border/20">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold">
                    A
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="font-semibold">Adam</span>
                      <span className="text-xs text-muted-foreground">2:43 PM</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      @duplo Can you help me deploy a mongoDB instance in my cluster and provide the cluster IP for the same
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center text-background font-bold">
                    D
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="font-semibold">Duplo</span>
                      <span className="text-xs text-muted-foreground">Just now</span>
                    </div>
                    <p className="text-sm mb-3">
                      Happy to help you. Please create a ticket with necessary environment details so I can assist you further.
                    </p>
                    <Button size="sm" className="bg-primary/80 hover:bg-primary text-primary-foreground">
                      Create ticket
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-gradient-primary opacity-10 blur-3xl -z-10 rounded-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
