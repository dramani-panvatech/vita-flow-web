import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Monitor, FileText, Users, BarChart3 } from "lucide-react";
import telemedicineIcon from "@/assets/telemedicine-icon.jpg";
import ehrIcon from "@/assets/ehr-icon.jpg";
import patientPortalIcon from "@/assets/patient-portal-icon.jpg";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Monitor className="w-8 h-8 text-primary" />,
      image: telemedicineIcon,
      title: "Telemedicine Platform",
      description: "Secure video consultations with integrated scheduling, patient records access, and real-time collaboration tools for comprehensive virtual care.",
      features: ["HD Video Calls", "Screen Sharing", "Digital Prescriptions", "Appointment Scheduling"]
    },
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      image: ehrIcon,
      title: "Intelligent EHR/EMR",
      description: "Easy-to-use web-based electronic health record system that saves physicians time, improves staff efficiency, and ensures compliance.",
      features: ["Cloud-Based Storage", "AI-Powered Insights", "HIPAA Compliant", "Real-time Updates"]
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      image: patientPortalIcon,
      title: "Patient Portal",
      description: "Empower patients with secure access to their health information, appointment scheduling, and direct communication with healthcare providers.",
      features: ["Medical Records Access", "Secure Messaging", "Bill Payment", "Appointment Booking"]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      image: null,
      title: "Revenue Cycle Management",
      description: "Optimize your practice's financial performance with streamlined billing, automated workflows, and comprehensive analytics.",
      features: ["Automated Billing", "Insurance Claims", "Financial Analytics", "Payment Processing"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From telemedicine to revenue management, our integrated platform provides 
            everything you need to deliver exceptional patient care and grow your practice.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-medical transition-all duration-300 border-border" data-aos="fade-up" data-aos-delay={index * 100}>
              <CardHeader className="space-y-4">
                <div className="flex items-center space-x-4">
                  {feature.image ? (
                    <div className="w-16 h-16 rounded-lg overflow-hidden shadow-soft">
                      <img src={feature.image} alt={feature.title} className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center">
                      {feature.icon}
                    </div>
                  )}
                  <div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {feature.title}
                    </CardTitle>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  {feature.features.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="600">
          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Healthcare Practice?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Join thousands of healthcare providers who trust our platform to deliver 
              exceptional patient care and streamline their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-primary">
                Schedule Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;