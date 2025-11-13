import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { 
  Brain, 
  MessageSquare, 
  TrendingUp, 
  Sparkles, 
  Zap, 
  Shield,
  Database,
  Layers
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Real-time AI Chat",
      description: "Engage in natural, intelligent conversations with our advanced AI assistant. Get instant answers, explanations, and guidance on any topic.",
      color: "from-primary to-secondary",
    },
    {
      icon: Brain,
      title: "Adaptive Learning",
      description: "Our AI adapts to your learning style, pace, and preferences. Experience personalized learning paths tailored just for you.",
      color: "from-secondary to-primary",
    },
    {
      icon: TrendingUp,
      title: "Analytics Dashboard",
      description: "Track your progress with beautiful visualizations. Understand your learning patterns and optimize your study strategy.",
      color: "from-primary via-secondary to-accent",
    },
    {
      icon: Sparkles,
      title: "Smart Insights",
      description: "Discover connections and patterns in your learning. Our AI highlights key concepts and suggests relevant topics to explore.",
      color: "from-accent to-primary",
    },
    {
      icon: Zap,
      title: "Instant Processing",
      description: "Lightning-fast responses and real-time content generation. No waiting, just seamless learning experiences.",
      color: "from-secondary to-accent",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your data is encrypted and protected. We prioritize your privacy while delivering exceptional learning experiences.",
      color: "from-primary to-accent",
    },
    {
      icon: Database,
      title: "Knowledge Base",
      description: "Access a vast repository of curated content and AI-generated insights. Build your personal knowledge library.",
      color: "from-accent to-secondary",
    },
    {
      icon: Layers,
      title: "Multi-Modal Learning",
      description: "Learn through text, visualizations, and interactive content. Multiple formats for comprehensive understanding.",
      color: "from-secondary via-primary to-accent",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Comprehensive Features</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Everything You Need to <span className="gradient-text">Excel</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            CogniWeb combines powerful AI capabilities with intuitive design to create 
            the ultimate learning platform. Explore our comprehensive feature set.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index}
                  className="glass p-6 hover:glow transition-smooth cursor-pointer group"
                >
                  <div className={`bg-gradient-to-br ${feature.color} p-3 rounded-2xl w-fit mb-4 group-hover:scale-110 transition-smooth`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Backend Architecture Visual */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-muted/20 to-transparent">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Architecture</span> Overview
            </h2>
            <p className="text-muted-foreground">
              Built on modern, scalable technology
            </p>
          </div>
          
          <div className="glass-strong p-8 rounded-3xl">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Frontend */}
              <div className="text-center">
                <div className="glass p-6 rounded-2xl mb-4">
                  <Layers className="h-12 w-12 mx-auto text-primary mb-3" />
                  <h3 className="font-semibold text-lg">Frontend</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    React + Vite + Tailwind CSS
                  </p>
                </div>
              </div>
              
              {/* API Layer */}
              <div className="text-center">
                <div className="glass p-6 rounded-2xl mb-4">
                  <Zap className="h-12 w-12 mx-auto text-secondary mb-3" />
                  <h3 className="font-semibold text-lg">API Layer</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    RESTful APIs + Real-time Updates
                  </p>
                </div>
              </div>
              
              {/* Backend */}
              <div className="text-center">
                <div className="glass p-6 rounded-2xl mb-4">
                  <Database className="h-12 w-12 mx-auto text-accent mb-3" />
                  <h3 className="font-semibold text-lg">Backend</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Cloud Database + Storage
                  </p>
                </div>
              </div>
            </div>
            
            {/* Connection Lines */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
              <div className="h-1 w-20 bg-gradient-to-r from-secondary to-accent rounded-full" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
