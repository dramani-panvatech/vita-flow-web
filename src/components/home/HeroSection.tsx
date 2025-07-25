import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Play } from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4" data-aos="fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                AI Powered{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Healthcare
                </span>{" "}
                Solutions
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Connecting people, process & technology to transform healthcare delivery. 
                Experience seamless EHR integration, advanced telemedicine, and patient 
                engagement tools designed for the future of healthcare.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="200">
              <Button size="lg" className="shadow-medical">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="shadow-soft">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border" data-aos="fade-up" data-aos-delay="400">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Healthcare Providers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">1M+</div>
                <div className="text-sm text-muted-foreground">Patients Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">System Uptime</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative" data-aos="fade-left" data-aos-delay="300">
            <div className="relative overflow-hidden rounded-2xl shadow-floating">
              <img
                src={heroImage}
                alt="Healthcare professionals using digital technology"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-medical">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-healthcare-green rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">System Online</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-4 shadow-medical">
              <div className="text-center">
                <div className="text-lg font-bold text-primary">24/7</div>
                <div className="text-xs text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;