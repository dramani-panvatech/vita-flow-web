import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Video, Calendar, Shield, Clock, Users, Monitor } from "lucide-react";

const Telemedicine = () => {
  const benefits = [
    {
      icon: <Video className="w-6 h-6" />,
      title: "HD Video Consultations",
      description: "Crystal clear video calls with multi-participant support"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "HIPAA Compliant",
      description: "End-to-end encryption ensuring patient data security"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Integrated Scheduling",
      description: "Seamless appointment booking and calendar management"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Screen Sharing",
      description: "Share medical records and images during consultations"
    }
  ];

  const features = [
    "Real-time video and audio",
    "Digital prescription writing",
    "Electronic health record access",
    "Appointment scheduling",
    "Patient intake forms",
    "Waiting room functionality",
    "Multi-device compatibility",
    "Recording capabilities"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                Telemedicine Platform
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Deliver Care Anywhere, Anytime
              </h1>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                Our secure telemedicine platform connects healthcare providers with patients 
                through high-quality video consultations, integrated EHR access, and 
                comprehensive care management tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-primary">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Our Telemedicine Platform?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience the next generation of virtual healthcare delivery with our 
                comprehensive telemedicine solution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-medical transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Complete Telemedicine Solution
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our platform provides everything you need to deliver exceptional virtual 
                  care, from initial patient contact to follow-up care and billing.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button size="lg" className="shadow-medical">
                    Get Started Today
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <Card className="p-8 shadow-floating">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-healthcare-green rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold">Dr. Sarah Johnson</div>
                        <div className="text-sm text-muted-foreground">Cardiology Consultation</div>
                      </div>
                      <Badge className="ml-auto bg-healthcare-green">Live</Badge>
                    </div>
                    
                    <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center">
                      <Video className="w-16 h-16 text-gray-400" />
                    </div>
                    
                    <div className="flex justify-center space-x-4">
                      <Button size="sm" variant="outline">
                        <Video className="w-4 h-4 mr-2" />
                        Video
                      </Button>
                      <Button size="sm" variant="outline">
                        <Monitor className="w-4 h-4 mr-2" />
                        Share
                      </Button>
                      <Button size="sm" variant="destructive">
                        End Call
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-lg text-muted-foreground">
                Choose the plan that best fits your practice needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Starter Plan */}
              <Card className="relative">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">Starter</CardTitle>
                  <div className="text-3xl font-bold text-primary">$99<span className="text-lg text-muted-foreground">/month</span></div>
                  <CardDescription>Perfect for small practices</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Up to 100 patients</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>HD video consultations</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Basic scheduling</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Email support</span>
                    </li>
                  </ul>
                  <Button className="w-full" variant="outline">Get Started</Button>
                </CardContent>
              </Card>

              {/* Professional Plan */}
              <Card className="relative border-primary shadow-medical">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">Most Popular</Badge>
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">Professional</CardTitle>
                  <div className="text-3xl font-bold text-primary">$199<span className="text-lg text-muted-foreground">/month</span></div>
                  <CardDescription>For growing practices</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Up to 500 patients</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>HD video + screen sharing</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Advanced scheduling</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>EHR integration</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Priority support</span>
                    </li>
                  </ul>
                  <Button className="w-full">Get Started</Button>
                </CardContent>
              </Card>

              {/* Enterprise Plan */}
              <Card className="relative">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">Enterprise</CardTitle>
                  <div className="text-3xl font-bold text-primary">Custom</div>
                  <CardDescription>For large organizations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Unlimited patients</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>All features included</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Custom integrations</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Dedicated support</span>
                    </li>
                  </ul>
                  <Button className="w-full" variant="outline">Contact Sales</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Telemedicine;