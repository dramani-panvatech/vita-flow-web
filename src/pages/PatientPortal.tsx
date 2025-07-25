import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Lock, 
  Calendar, 
  FileText, 
  CreditCard, 
  MessageSquare, 
  Download,
  Clock,
  CheckCircle,
  AlertCircle
} from "lucide-react";

const PatientPortal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const LoginForm = () => (
    <Card className="max-w-md mx-auto shadow-medical">
      <CardHeader className="text-center">
        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <User className="w-8 h-8 text-primary-foreground" />
        </div>
        <CardTitle className="text-2xl">Patient Portal Login</CardTitle>
        <CardDescription>Access your health information securely</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email or Patient ID</Label>
          <Input id="email" type="email" placeholder="Enter your email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="Enter your password" />
        </div>
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="rounded" />
            <span>Remember me</span>
          </label>
          <a href="#" className="text-primary hover:underline">Forgot password?</a>
        </div>
        <Button className="w-full" onClick={() => setIsLoggedIn(true)}>
          <Lock className="w-4 h-4 mr-2" />
          Sign In
        </Button>
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            New patient? <a href="#" className="text-primary hover:underline">Register here</a>
          </p>
        </div>
      </CardContent>
    </Card>
  );

  const Dashboard = () => (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-primary rounded-lg p-6 text-primary-foreground" data-aos="fade-down">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <User className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Welcome back, Sarah!</h2>
            <p className="opacity-90">Patient ID: HC-2024-001</p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="appointments" className="space-y-6" data-aos="fade-up" data-aos-delay="200">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="appointments">Appointments</TabsTrigger>
          <TabsTrigger value="records">Medical Records</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
        </TabsList>

        <TabsContent value="appointments" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">Your Appointments</h3>
            <Button>
              <Calendar className="w-4 h-4 mr-2" />
              Schedule New
            </Button>
          </div>
          
          <div className="grid gap-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-healthcare-green/10 rounded-lg flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-healthcare-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Cardiology Follow-up</h4>
                      <p className="text-sm text-muted-foreground">Dr. Sarah Johnson</p>
                      <p className="text-sm text-muted-foreground">March 15, 2024 at 2:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-healthcare-green">Confirmed</Badge>
                    <Button variant="outline" size="sm">Join Video Call</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Annual Physical</h4>
                      <p className="text-sm text-muted-foreground">Dr. Michael Chen</p>
                      <p className="text-sm text-muted-foreground">March 22, 2024 at 10:00 AM</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary">Scheduled</Badge>
                    <Button variant="outline" size="sm">Reschedule</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="records" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">Medical Records</h3>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Download All
            </Button>
          </div>

          <div className="grid gap-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Lab Results - Blood Work</h4>
                      <p className="text-sm text-muted-foreground">March 10, 2024</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <CheckCircle className="w-4 h-4 text-healthcare-green" />
                        <span className="text-sm text-healthcare-green">Normal results</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Prescription - Lisinopril</h4>
                      <p className="text-sm text-muted-foreground">March 8, 2024</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <AlertCircle className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm text-yellow-600">Refill needed</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="billing" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">Billing & Payments</h3>
            <Button>
              <CreditCard className="w-4 h-4 mr-2" />
              Make Payment
            </Button>
          </div>

          <div className="grid gap-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-destructive" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Invoice #HC-2024-0315</h4>
                      <p className="text-sm text-muted-foreground">Cardiology Consultation</p>
                      <p className="text-sm text-muted-foreground">Due: March 30, 2024</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-destructive">$125.00</div>
                    <Badge variant="destructive">Overdue</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-healthcare-green/10 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-healthcare-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Invoice #HC-2024-0308</h4>
                      <p className="text-sm text-muted-foreground">Lab Work - Blood Panel</p>
                      <p className="text-sm text-muted-foreground">Paid: March 10, 2024</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-healthcare-green">$85.00</div>
                    <Badge className="bg-healthcare-green">Paid</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="messages" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">Secure Messages</h3>
            <Button>
              <MessageSquare className="w-4 h-4 mr-2" />
              New Message
            </Button>
          </div>

          <div className="grid gap-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">Dr. Sarah Johnson</h4>
                      <span className="text-sm text-muted-foreground">2 hours ago</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Your recent lab results look great! Please continue with your current medication regimen...
                    </p>
                    <Badge variant="secondary">Unread</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">Billing Department</h4>
                      <span className="text-sm text-muted-foreground">1 day ago</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Your insurance claim for the March 8th visit has been processed successfully...
                    </p>
                    <Badge variant="outline">Read</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {!isLoggedIn ? (
            <div className="max-w-6xl mx-auto">
              {/* Header Section */}
              <div className="text-center mb-12" data-aos="fade-up">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Patient Portal
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Access your health information, schedule appointments, communicate with your 
                  healthcare team, and manage your medical records securely online.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Login Form */}
                <div data-aos="fade-right">
                  <LoginForm />
                </div>

                {/* Features */}
                <div className="space-y-6" data-aos="fade-left">
                  <h2 className="text-2xl font-bold text-foreground">What you can do:</h2>
                  <div className="space-y-4">
                    {[
                      {
                        icon: <Calendar className="w-5 h-5" />,
                        title: "Schedule Appointments",
                        description: "Book and manage your appointments online"
                      },
                      {
                        icon: <FileText className="w-5 h-5" />,
                        title: "Access Medical Records",
                        description: "View test results, prescriptions, and medical history"
                      },
                      {
                        icon: <MessageSquare className="w-5 h-5" />,
                        title: "Secure Messaging",
                        description: "Communicate directly with your healthcare team"
                      },
                      {
                        icon: <CreditCard className="w-5 h-5" />,
                        title: "Pay Bills Online",
                        description: "View and pay your medical bills securely"
                      }
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{feature.title}</h3>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-6xl mx-auto">
              <Dashboard />
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PatientPortal;