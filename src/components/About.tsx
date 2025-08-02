import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Globe, Target } from "lucide-react";

const About = () => {

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Henrietta High Consulting
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Established in 2003, I bring more than 20 years of executive search and selection 
              experience, gained from working in established search firms and as an independent search provider.
            </p>
          </div>
          
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column - Photo and Introduction */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <div className="inline-block relative">
                  <div className="relative">
                    <img 
                      src="/lovable-uploads/cbe8617c-5c84-4dfd-a51a-17c70045a0ac.png"
                      alt="Henrietta High - Founder & Director" 
                      className="w-64 h-64 object-cover rounded-2xl shadow-elegant mx-auto lg:mx-0"
                    />
                    <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center shadow-elegant">
                      <CheckCircle className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Henrietta High</h3>
                  <p className="text-lg text-primary font-semibold mb-4">Founder & Director</p>
                  <p className="text-muted-foreground leading-relaxed">
                    With over 20 years of executive search experience, Henrietta brings unrivalled expertise 
                    in senior talent acquisition, working as a trusted partner with organizations globally.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right Column - Key Points */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-soft rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Proven Experience</h3>
                  <p className="text-muted-foreground">
                    With a successful track record of working with organisations in the UK and globally, 
                    I have large number of repeat clients whose continued satisfaction is driven by 
                    consistent delivery of excellent results.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-soft rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Global Reach</h3>
                  <p className="text-muted-foreground">
                    I work across multiple sectors covering various jurisdictions with deep established 
                    networks, and the ability to identify new talent and rising stars in your industry.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-soft rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Unrivalled Expertise</h3>
                  <p className="text-muted-foreground">
                    I bring unrivalled expertise in senior talent acquisition, working as a true partner 
                    with clients to deliver exceptional results in executive search and selection.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Statistics Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="shadow-soft hover:shadow-elegant transition-smooth">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">20+</h3>
                <p className="text-muted-foreground font-medium">Years of Excellence</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Since 2003, consistently delivering exceptional executive search results
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft hover:shadow-elegant transition-smooth">
              <CardContent className="p-8 text-center">
                <h3 className="text-3xl font-bold text-primary mb-2">Global</h3>
                <p className="text-muted-foreground font-medium">International Reach</p>
                <p className="text-sm text-muted-foreground mt-2">
                  UK and worldwide executive search capabilities
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft hover:shadow-elegant transition-smooth">
              <CardContent className="p-8 text-center">
                <h3 className="text-3xl font-bold text-primary mb-2">Multi-Sector</h3>
                <p className="text-muted-foreground font-medium">Industry Expertise</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Deep networks across diverse industry sectors
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-primary-soft px-6 py-3 rounded-full">
              <span className="text-primary font-semibold">Ready to discuss your executive search needs?</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;