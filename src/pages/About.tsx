import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Award, 
  Shield, 
  Target, 
  Heart, 
  Lightbulb,
  ArrowRight
} from "lucide-react";

const About = () => {
  const stats = [
    { number: "500+", label: "Healthcare Providers", icon: <Users className="w-6 h-6" /> },
    { number: "1M+", label: "Patients Served", icon: <Heart className="w-6 h-6" /> },
    { number: "99.9%", label: "System Uptime", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Award className="w-6 h-6" /> }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Patient-Centered Care",
      description: "We put patients at the heart of everything we do, ensuring their needs and experiences drive our innovation."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Privacy",
      description: "HIPAA compliance and enterprise-grade security protect sensitive health information at all times."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "We continuously evolve our platform with cutting-edge technology to improve healthcare delivery."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our platform, from user experience to clinical outcomes."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Martinez",
      role: "Chief Medical Officer",
      bio: "25+ years in healthcare technology and clinical practice"
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer", 
      bio: "Former healthcare IT executive with expertise in AI and telemedicine"
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Patient Experience",
      bio: "Healthcare UX specialist focused on patient-centered design"
    },
    {
      name: "Dr. James Wilson",
      role: "Chief Innovation Officer",
      bio: "Leading healthcare digital transformation initiatives"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                About HealthClick
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Transforming Healthcare Through Technology
              </h1>
              <p className="text-xl opacity-90 leading-relaxed">
                We're on a mission to make healthcare more accessible, efficient, and patient-centered 
                through innovative digital solutions that connect providers and patients seamlessly.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center hover:shadow-medical transition-shadow" data-aos="fade-up" data-aos-delay={index * 100}>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary">
                      {stat.icon}
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div data-aos="fade-right">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  At HealthClick, we believe that technology should enhance the human connection 
                  between healthcare providers and their patients, not replace it. Our mission is 
                  to create digital tools that empower healthcare professionals to deliver 
                  exceptional care while making it easier for patients to access and manage 
                  their health.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Founded in 2020 by a team of healthcare professionals and technology experts, 
                  we've grown to serve over 500 healthcare providers and 1 million patients 
                  across the country. Our platform combines the latest in AI technology, 
                  telemedicine, and electronic health records to create a comprehensive 
                  healthcare ecosystem.
                </p>
                <Button size="lg" className="shadow-medical">
                  Learn More About Our Platform
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
              
              <div className="relative" data-aos="fade-left">
                <Card className="p-8 shadow-floating">
                  <h3 className="text-xl font-bold text-foreground mb-6">What drives us:</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-foreground">Improving patient outcomes through better care coordination</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-foreground">Reducing administrative burden on healthcare providers</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-foreground">Making healthcare more accessible to underserved communities</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-foreground">Ensuring patient data security and privacy</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These principles guide every decision we make and every feature we build
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="p-8 hover:shadow-medical transition-shadow" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Leadership Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Meet the experienced healthcare and technology leaders driving our mission forward
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-medical transition-shadow" data-aos="fade-up" data-aos-delay={index * 100}>
                  <CardContent className="p-6">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                    <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-white text-center" data-aos="fade-up">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Join Our Healthcare Revolution?
              </h3>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Whether you're a healthcare provider looking to enhance patient care or a 
                patient seeking better access to your health information, we're here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-primary">
                  Schedule a Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Contact Our Team
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;