import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-primary block animate-fade-in" style={{ animationDelay: '0.2s' }}>Muaaz Anwar</span>
                <span className="block animate-fade-in" style={{ animationDelay: '0.4s' }}>Senior Software Engineer</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.6s' }}>
                Specialized in building scalable systems and data infrastructure
              </p>
            </div>
            <div className="flex flex-wrap gap-3 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <Button className="gap-2" asChild>
                <Link to="/contact">
                  Contact Me <ArrowRight size={16} />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/experience">View Experience</Link>
              </Button>
            </div>
            <div className="pt-6 animate-fade-in" style={{ animationDelay: '1s' }}>
              <h3 className="text-sm font-medium text-muted-foreground mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                <span className="skill-badge">Go</span>
                <span className="skill-badge">Vue</span>
                <span className="skill-badge">Python</span>
                <span className="skill-badge">PostgreSQL</span>
                <span className="skill-badge">Kubernetes</span>
              </div>
            </div>
          </div>
          <div className="flex-1 relative max-w-md mx-auto md:mx-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center">
              <div className="w-[90%] h-[90%] rounded-full bg-card shadow-lg flex items-center justify-center">
                <div className="text-6xl font-bold text-primary">MA</div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-card rounded-lg shadow-lg p-4 text-sm">
              <div className="font-medium">Currently working at</div>
              <div className="font-bold text-primary">Securiti</div>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-32 text-center animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <h2 className="text-xl md:text-2xl font-medium mb-8">Previously worked with</h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
            <div className="text-xl font-bold">Techlogix</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
