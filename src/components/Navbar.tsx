import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass transition-smooth">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="gradient-primary p-2 rounded-xl glow group-hover:scale-110 transition-smooth">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">CogniWeb</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-smooth font-medium">
              Home
            </Link>
            <Link to="/features" className="text-foreground hover:text-primary transition-smooth font-medium">
              Features
            </Link>
            <Link to="/dashboard" className="text-foreground hover:text-primary transition-smooth font-medium">
              Dashboard
            </Link>
            <Link to="/login">
              <Button variant="outline" className="transition-smooth hover:glow">
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-smooth"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link
              to="/"
              className="block px-4 py-2 rounded-lg hover:bg-muted transition-smooth"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/features"
              className="block px-4 py-2 rounded-lg hover:bg-muted transition-smooth"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              to="/dashboard"
              className="block px-4 py-2 rounded-lg hover:bg-muted transition-smooth"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
            <Link to="/login" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full">
                Login
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
