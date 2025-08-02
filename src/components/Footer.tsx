import { Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">HH</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Henrietta High</h3>
                  <p className="text-sm opacity-80">Consulting Limited</p>
                </div>
              </div>
              <p className="text-sm opacity-80 max-w-md">
                Executive search and recruitment excellence since 2003. 
                Connecting exceptional talent with leading organizations globally.
              </p>
            </div>
            
            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Services</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Executive Search</li>
                <li>Succession Planning</li>
                <li>Bespoke Projects</li>
                <li>Market Mapping</li>
                <li>Organisational Consulting</li>
              </ul>
            </div>
            
            {/* Connect */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Connect With Me</h4>
              <div className="space-y-3">
                <a 
                  href="https://www.linkedin.com/in/henriettahigh/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm opacity-80 hover:opacity-100 transition-smooth"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn Profile</span>
                </a>
                <p className="text-sm opacity-80">
                  Website: highconsulting.co.uk
                </p>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-background/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm opacity-80">
                © {currentYear} Henrietta High Consulting Limited. All rights reserved.
              </p>
              <p className="text-sm opacity-80">
                Established 2003 • 20+ Years of Excellence
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;