import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, MessageSquare, TrendingUp, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent -z-10" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl -z-10" />
        
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">AI-Powered Intelligence</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Transform Your <span className="gradient-text">Learning</span> Experience
              </h1>
              
              <p className="text-lg text-muted-foreground">
                CogniWeb combines cutting-edge AI with intuitive design to help you learn faster, 
                understand deeper, and visualize insights like never before.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/dashboard">
                  <Button size="lg" className="gradient-primary glow group">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
                  </Button>
                </Link>
                <Link to="/features">
                  <Button size="lg" variant="outline">
                    Explore Features
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Right Illustration */}
            <div className="relative">
              <div className="glass-strong p-8 rounded-3xl glow">
                <div className="space-y-4">
                  {/* AI Chat Simulation */}
                  <div className="flex items-start gap-3 animate-pulse">
                    <div className="gradient-primary p-2 rounded-lg">
                      <Brain className="h-5 w-5 text-white" />
                    </div>
                    <div className="glass p-3 rounded-2xl rounded-tl-none flex-1">
                      <p className="text-sm">How can I help you learn today?</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 justify-end">
                    <div className="bg-primary/10 p-3 rounded-2xl rounded-tr-none">
                      <p className="text-sm">Explain quantum computing</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="gradient-primary p-2 rounded-lg">
                      <Brain className="h-5 w-5 text-white" />
                    </div>
                    <div className="glass p-3 rounded-2xl rounded-tl-none flex-1">
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Quantum Computing Overview</p>
                        <div className="h-2 bg-gradient-to-r from-primary to-secondary rounded-full w-3/4" />
                        <div className="h-2 bg-muted rounded-full w-1/2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 glass p-4 rounded-2xl shadow-lg animate-bounce">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div className="absolute -bottom-4 -left-4 glass p-4 rounded-2xl shadow-lg animate-pulse">
                <Sparkles className="h-6 w-6 text-secondary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powered by <span className="gradient-text">Advanced AI</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the future of learning with our intelligent platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="glass p-6 hover:glow transition-smooth cursor-pointer group">
              <div className="gradient-primary p-3 rounded-2xl w-fit mb-4 group-hover:scale-110 transition-smooth">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-time AI Chat</h3>
              <p className="text-muted-foreground">
                Engage in natural conversations with our AI assistant for instant learning support
              </p>
            </Card>
            
            <Card className="glass p-6 hover:glow transition-smooth cursor-pointer group">
              <div className="bg-gradient-to-br from-secondary to-primary p-3 rounded-2xl w-fit mb-4 group-hover:scale-110 transition-smooth">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Adaptive Learning</h3>
              <p className="text-muted-foreground">
                Personalized learning paths that adapt to your pace and style
              </p>
            </Card>
            
            <Card className="glass p-6 hover:glow transition-smooth cursor-pointer group">
              <div className="gradient-primary p-3 rounded-2xl w-fit mb-4 group-hover:scale-110 transition-smooth">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Analytics Dashboard</h3>
              <p className="text-muted-foreground">
                Visualize your progress with beautiful charts and insights
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
