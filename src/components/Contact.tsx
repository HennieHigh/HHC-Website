import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your executive search needs? Let's start a conversation about how we can help you find exceptional talent.
            </p>
          </div>
          
          {/* Contact Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Let's Discuss Your Needs</h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  With over 20 years of experience in executive search, we're here to help you find the right talent for your organization. Reach out to discuss your specific requirements.
                </p>
              </div>
              
              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-soft rounded-full flex items-center justify-center">
                    <Linkedin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/henriettahigh/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-deep transition-smooth"
                    >
                      Connect with Henrietta High
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-soft rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <a 
                      href="mailto:henrietta@highconsulting.co.uk" 
                      className="text-primary hover:text-primary-deep transition-smooth"
                    >
                      henrietta@highconsulting.co.uk
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-soft rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Location</h4>
                    <p className="text-muted-foreground">UK based with global reach</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-soft rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Response Time</h4>
                    <p className="text-muted-foreground">We respond to all inquiries within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CTA Card */}
            <div className="lg:pl-8">
              <Card className="shadow-elegant">
                <CardHeader className="text-center pb-6">
                  <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl text-foreground">Start the Conversation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-center text-muted-foreground">
                    Whether you're looking for executive talent or considering new opportunities, 
                    we'd love to hear from you.
                  </p>
                  
                  <div className="space-y-4">
                    <Button 
                      variant="hero" 
                      size="lg" 
                      className="w-full"
                      onClick={() => window.open('https://www.linkedin.com/in/henriettahigh/', '_blank')}
                    >
                      Connect on LinkedIn
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full"
                      onClick={() => window.location.href = 'mailto:henrietta@highconsulting.co.uk?subject=Executive Search Inquiry'}
                    >
                      Send Email Inquiry
                    </Button>
                  </div>
                  
                  <div className="border-t border-border pt-6">
                    <div className="text-center space-y-2">
                      <h4 className="font-semibold text-foreground">Confidential Discussions</h4>
                      <p className="text-sm text-muted-foreground">
                        All conversations are handled with the utmost discretion and confidentiality.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;