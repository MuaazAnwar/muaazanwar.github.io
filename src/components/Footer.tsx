import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-primary">Muaaz Anwar</h2>
            <p className="text-muted-foreground mt-2">Senior Software Development Engineer</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-16">
            <div>
              <h3 className="font-semibold mb-3">Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
                <li><Link to="/experience" className="text-muted-foreground hover:text-primary transition-colors">Experience</Link></li>
                <li><Link to="/skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">More</h3>
              <ul className="space-y-2">
                <li><Link to="/education" className="text-muted-foreground hover:text-primary transition-colors">Education</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
                {/* <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Resume</a></li> */}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Social</h3>
              <div className="flex gap-3">
                <a href="https://github.com/MuaazAnwar" className="p-2 bg-background rounded-full hover:bg-primary/10 transition-colors" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/muaaz-anwar" className="p-2 bg-background rounded-full hover:bg-primary/10 transition-colors" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="p-2 bg-background rounded-full hover:bg-primary/10 transition-colors" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Muaaz Anwar. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
