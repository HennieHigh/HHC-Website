import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

const Navigation = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/src/assets/hh-logo.png" 
              alt="Henrietta High Consulting Ltd" 
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-foreground">Henrietta High</h1>
              <p className="text-sm text-muted-foreground">Consulting Limited</p>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-foreground hover:text-primary transition-smooth">
              About
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-smooth">
              Services
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth">
              Contact
            </a>
          </div>
          
          {/* CTA */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://www.linkedin.com/in/henriettahigh/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 hover:bg-accent rounded-full transition-smooth"
            >
              <Linkedin className="h-5 w-5 text-primary" />
            </a>
            <Button 
              variant="default" 
              size="sm"
              onClick={() => window.location.href = 'mailto:henrietta@highconsulting.co.uk?subject=Executive Search Inquiry'}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;