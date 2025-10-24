import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20 pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    Devin
                  </span>
                  <br />
                  <span className="text-muted-foreground">
                    The AI Software Engineer
                  </span>
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-xl">
                  A collaborative AI teammate built to help ambitious engineering teams achieve more.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-base px-8">
                  Get started
                </Button>
                <Button size="lg" variant="outline" className="text-base px-8">
                  Watch demo
                </Button>
              </div>
            </div>

            {/* Right: Interactive Demo */}
            <div className="relative">
              <div className="relative bg-card border border-border rounded-2xl overflow-hidden shadow-2xl">
                {/* Browser tabs */}
                <div className="bg-muted/50 border-b border-border px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 flex gap-2 ml-4">
                    <div className="px-3 py-1.5 bg-background border border-border rounded-md text-xs font-medium">
                      IDE
                    </div>
                    <div className="px-3 py-1.5 text-xs font-medium text-muted-foreground">
                      Terminal
                    </div>
                    <div className="px-3 py-1.5 text-xs font-medium text-muted-foreground">
                      Browser
                    </div>
                  </div>
                </div>

                {/* Code/Chat Interface */}
                <div className="p-6 space-y-4 bg-gradient-to-br from-muted/20 to-muted/5 min-h-[400px]">
                  <div className="space-y-3">
                    {/* User message */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-semibold flex-shrink-0">
                        U
                      </div>
                      <div className="flex-1 bg-background border border-border rounded-lg p-4">
                        <p className="text-sm text-foreground">
                          Can you help me implement authentication in our Next.js app?
                        </p>
                      </div>
                    </div>

                    {/* Devin response */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
                        D
                      </div>
                      <div className="flex-1 bg-card border border-border rounded-lg p-4 space-y-3">
                        <p className="text-sm text-foreground">
                          I'll implement authentication for you. Let me:
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li className="flex items-start gap-2">
                            <span className="text-green-500">✓</span>
                            Set up NextAuth.js configuration
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-500">✓</span>
                            Create login/signup pages
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-500 animate-pulse">●</span>
                            Implementing protected routes...
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating indicators */}
              <div className="absolute -right-4 -bottom-4 bg-card border border-border rounded-lg px-4 py-2 shadow-lg">
                <div className="text-xs text-muted-foreground">Running tests...</div>
                <div className="text-sm font-semibold text-green-500">98% passed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
