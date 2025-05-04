
import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const EducationSection = () => {
  return (
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">Education</h2>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <Card className="p-6">
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="flex-grow space-y-2">
                <h3 className="text-xl font-semibold">Master of Science in Computer Science</h3>
                <div className="text-muted-foreground">
                  Institute of Business Administration (IBA), Karachi
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>Sep 2021 - Dec 2023</span>
                </div>
                <p className="text-muted-foreground pt-2">
                  Advanced studies in computer science with focus on data systems and software engineering
                </p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="flex-grow space-y-2">
                <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
                <div className="text-muted-foreground">
                  National University of Computer and Emerging Sciences (FAST), Karachi
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>Jun 2016 - Jul 2020</span>
                </div>
                <p className="text-muted-foreground pt-2">
                  Comprehensive computer science education covering programming, algorithms, and software development
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
