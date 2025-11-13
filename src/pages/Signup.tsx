import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Brain, Mail, Lock, User } from "lucide-react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-primary/10 to-transparent -z-10" />
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-secondary/20 to-transparent rounded-full blur-3xl -z-10" />
      
      <Card className="glass-strong p-8 w-full max-w-md glow">
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center space-x-2 mb-8">
          <div className="gradient-primary p-3 rounded-xl glow">
            <Brain className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold gradient-text">CogniWeb</span>
        </Link>
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Create Account</h1>
          <p className="text-muted-foreground">Start your AI-powered learning journey</p>
        </div>
        
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              Full Name
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                className="pl-10 glass border-glass-border focus:glow transition-smooth"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email Address
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="pl-10 glass border-glass-border focus:glow transition-smooth"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium">
              Password
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="pl-10 glass border-glass-border focus:glow transition-smooth"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="confirm-password" className="text-sm font-medium">
              Confirm Password
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                id="confirm-password"
                type="password"
                placeholder="••••••••"
                className="pl-10 glass border-glass-border focus:glow transition-smooth"
              />
            </div>
          </div>
          
          <div className="text-sm">
            <label className="flex items-start gap-2 cursor-pointer">
              <input type="checkbox" className="mt-0.5 rounded border-border" />
              <span className="text-muted-foreground">
                I agree to the{" "}
                <a href="#" className="text-primary hover:text-secondary transition-smooth">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-primary hover:text-secondary transition-smooth">
                  Privacy Policy
                </a>
              </span>
            </label>
          </div>
          
          <Button className="w-full gradient-primary glow group" size="lg">
            Create Account
            <Brain className="ml-2 h-5 w-5 group-hover:scale-110 transition-smooth" />
          </Button>
        </form>
        
        <div className="mt-6 text-center text-sm">
          <span className="text-muted-foreground">Already have an account? </span>
          <Link to="/login" className="text-primary hover:text-secondary font-medium transition-smooth">
            Sign in
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Signup;
