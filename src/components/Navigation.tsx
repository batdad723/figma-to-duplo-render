import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold text-foreground">Duplo</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#product" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Product
            </a>
            <a href="#use-cases" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Use Cases
            </a>
            <a href="#library" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Library
            </a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-sm">
              Sign in
            </Button>
            <Button size="sm" className="text-sm">
              Get started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
