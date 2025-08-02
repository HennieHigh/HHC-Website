import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Users, Target, TrendingUp, Building, Award } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Executive Search",
      description: "Working as a partner with you to seek out and attract executive and non-executive talent. We work across sectors covering multiple jurisdictions with deep established networks.",
      features: [
        "Board-level appointments",
        "C-suite executive search", 
        "Non-executive director recruitment",
        "Senior management roles",
        "International search capabilities"
      ]
    },
    {
      icon: Target,
      title: "Bespoke Projects",
      description: "Helping you to identify market mapping opportunities, succession planning strategies, and execute complex recruitment projects tailored to your specific needs.",
      features: [
        "Market mapping and intelligence",
        "Succession planning strategies",
        "Custom recruitment solutions",
        "Talent pipeline development",
        "Leadership transition support"
      ]
    },
    {
      icon: Users,
      title: "Succession Planning",
      description: "Strategic succession planning services to ensure business continuity and leadership development for your organization's future.",
      features: [
        "Leadership succession strategies",
        "High-potential identification",
        "Development pathway planning",
        "Knowledge transfer programs",
        "Risk mitigation planning"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive executive search and recruitment solutions tailored to your organization's unique needs
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="shadow-soft hover:shadow-elegant transition-smooth group">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                    <service.icon className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Why Choose Us Section */}
          <div className="bg-primary-soft rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Why Choose Henrietta High Consulting?
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                My approach combines deep industry knowledge with a commitment to excellence
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Repeat Clients</h4>
                <p className="text-muted-foreground">
                  Large number of repeat clients demonstrating consistent satisfaction and trust
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary-foreground" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Proven Results</h4>
                <p className="text-muted-foreground">
                  Consistent delivery of excellent results across diverse industries and markets
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-primary-foreground" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Rising Stars</h4>
                <p className="text-muted-foreground">
                  Ability to identify emerging talent and rising stars in your industry
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <Button 
                variant="default" 
                size="lg" 
                className="px-8 py-3"
                onClick={() => window.location.href = 'mailto:henrietta@highconsulting.co.uk?subject=Executive Search Requirements Discussion'}
              >
                Discuss Your Requirements
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;