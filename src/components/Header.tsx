import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-primary">Muaaz Anwar</Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 items-center">
            <Link to="/" className="nav-link active">Home</Link>
            <Link to="/experience" className="nav-link">Experience</Link>
            <Link to="/skills" className="nav-link">Skills</Link>
            <Link to="/education" className="nav-link">Education</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            {/* <Button variant="outline" className="ml-2">Resume</Button> */}
          </nav>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col gap-2 animate-fade-in">
            <Link to="/" className="nav-link active">Home</Link>
            <Link to="/experience" className="nav-link">Experience</Link>
            <Link to="/skills" className="nav-link">Skills</Link>
            <Link to="/education" className="nav-link">Education</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            {/* <Button variant="outline" className="mt-2 w-full">Resume</Button> */}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
