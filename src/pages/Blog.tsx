import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, User, ArrowRight, Search } from "lucide-react";

const Blog = () => {
  const featuredPost = {
    title: "The Future of Telemedicine: Trends and Innovations for 2024",
    excerpt: "Explore the latest developments in telemedicine technology and how they're reshaping patient care delivery across the healthcare industry.",
    author: "Dr. Sarah Martinez",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=400&fit=crop"
  };

  const posts = [
    {
      title: "HIPAA Compliance in the Digital Age: Best Practices for Healthcare Providers",
      excerpt: "Understanding the latest HIPAA requirements and how to maintain compliance while leveraging digital health tools.",
      author: "Michael Chen",
      date: "March 12, 2024",
      readTime: "6 min read",
      category: "Compliance",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop"
    },
    {
      title: "Patient Engagement Strategies That Actually Work",
      excerpt: "Proven methods to increase patient participation and improve health outcomes through better engagement.",
      author: "Emily Rodriguez",
      date: "March 10, 2024",
      readTime: "5 min read",
      category: "Patient Care",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=250&fit=crop"
    },
    {
      title: "AI in Healthcare: Transforming Diagnosis and Treatment",
      excerpt: "How artificial intelligence is revolutionizing medical diagnosis, treatment planning, and patient outcomes.",
      author: "Dr. James Wilson",
      date: "March 8, 2024",
      readTime: "7 min read",
      category: "AI & Innovation",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=250&fit=crop"
    },
    {
      title: "Revenue Cycle Management: Optimizing Your Practice's Financial Health",
      excerpt: "Essential strategies for improving billing efficiency, reducing claim denials, and increasing revenue.",
      author: "Lisa Park",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Practice Management",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=250&fit=crop"
    },
    {
      title: "Building Trust in Digital Health: Security and Patient Privacy",
      excerpt: "How healthcare organizations can build patient trust through robust security measures and transparent privacy policies.",
      author: "Dr. Sarah Martinez",
      date: "March 3, 2024",
      readTime: "5 min read",
      category: "Security",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=250&fit=crop"
    },
    {
      title: "The ROI of Electronic Health Records: Measuring Success",
      excerpt: "Key metrics and benchmarks for evaluating the return on investment of your EHR implementation.",
      author: "Michael Chen",
      date: "March 1, 2024",
      readTime: "8 min read",
      category: "EHR",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&fit=crop"
    }
  ];

  const categories = ["All", "Technology", "Patient Care", "Compliance", "AI & Innovation", "Practice Management", "Security", "EHR"];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                Healthcare Insights
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Healthcare Innovation Blog
              </h1>
              <p className="text-xl opacity-90 leading-relaxed mb-8">
                Stay informed with the latest trends, best practices, and innovations 
                in healthcare technology, patient care, and practice management.
              </p>
              
              {/* Search */}
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/70" />
                <Input 
                  className="pl-12 bg-white/20 border-white/30 text-white placeholder-white/70"
                  placeholder="Search articles..."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Featured Article</h2>
            </div>
            
            <Card className="overflow-hidden shadow-floating hover:shadow-medical transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary">{featuredPost.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl lg:text-3xl leading-tight">
                      {featuredPost.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {featuredPost.excerpt}
                    </CardDescription>
                  </CardHeader>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  
                  <Button className="self-start">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Latest Articles</h2>
              <p className="text-muted-foreground">Insights and updates from healthcare experts</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-medical transition-shadow group">
                  <div className="relative h-48">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary">{post.category}</Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-sm leading-relaxed">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="w-3 h-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Stay Updated with Healthcare Innovation
              </h3>
              <p className="text-muted-foreground mb-8">
                Subscribe to our newsletter and get the latest healthcare technology insights 
                delivered directly to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="flex-1"
                />
                <Button>
                  Subscribe
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              
              <p className="text-xs text-muted-foreground mt-4">
                No spam, unsubscribe at any time. Read our{" "}
                <a href="#" className="text-primary hover:underline">Privacy Policy</a>
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;