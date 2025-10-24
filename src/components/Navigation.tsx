import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <div className="w-4 h-4 bg-background rounded"></div>
            </div>
            <span className="text-xl font-bold text-foreground">DuploCloud</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#enterprise" className="text-foreground/80 hover:text-foreground transition-colors text-sm">
              Enterprise
            </a>
            <a href="#pricing" className="text-foreground/80 hover:text-foreground transition-colors text-sm">
              Pricing
            </a>
            <a href="#security" className="text-foreground/80 hover:text-foreground transition-colors text-sm">
              Security & Compliance
            </a>
            <a href="#documentation" className="text-foreground/80 hover:text-foreground transition-colors text-sm">
              Documentation
            </a>
            <a href="#more" className="text-foreground/80 hover:text-foreground transition-colors text-sm">
              View More
            </a>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="bg-primary/20 text-primary hover:bg-primary/30">
              See Demo
            </Button>
            <Button className="bg-foreground text-background hover:bg-foreground/90">
              Get started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
