import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                Simplified Financial Management
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Simplified Expense Management and{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Global Payments
              </span>{" "}
              for Businesses
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Automate spend management, simplify cross-border payments, and control your business' finances – all in one place!
            </p>
            
            <div className="space-y-4">
              <ul className="space-y-3">
                {[
                  "Real-time expense tracking",
                  "Seamless global payments",
                  "Automated workflows",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="hero" size="lg" className="group">
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Right Column - Illustration */}
          <div className="relative animate-slide-up lg:block hidden">
            <div className="relative z-10">
              <img
                src={heroIllustration}
                alt="Duplo financial management dashboard"
                className="w-full h-auto rounded-2xl shadow-glow animate-float"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Hero;
