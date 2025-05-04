
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const ExperienceSection = () => {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="section-title">Professional Experience</h2>
            <p className="text-muted-foreground max-w-xl">
              Over 4 years of experience developing scalable software solutions and data infrastructure
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0" asChild>
            <Link to="/experience">
              View All <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="experience-card">
            <div className="flex items-start gap-4">
              <div className="mt-1 bg-primary/10 p-3 rounded-full">
                <Briefcase size={20} className="text-primary" />
              </div>
              <div className="space-y-2">
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold">Sr. Software Development Engineer</h3>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Securiti</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">Apr 2022 - Present</span>
                  </div>
                </div>
                <ul className="list-disc list-inside text-sm space-y-2 text-muted-foreground">
                  <li>Designed and developed a control plane for the data catalog registration policy</li>
                  <li>Introduced tenant-level concurrency for the graph database migrator job</li>
                  <li>Developed a normalization layer that processed 100,000+ multi-cloud assets</li>
                </ul>
                <div className="pt-2">
                  <div className="text-sm font-medium mb-1">Technologies:</div>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="skill-badge">Go</span>
                    <span className="skill-badge">Vue</span>
                    <span className="skill-badge">Neo4j</span>
                    <span className="skill-badge">ElasticSearch</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="experience-card">
            <div className="flex items-start gap-4">
              <div className="mt-1 bg-primary/10 p-3 rounded-full">
                <Briefcase size={20} className="text-primary" />
              </div>
              <div className="space-y-2">
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold">Software Engineer</h3>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Techlogix</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">Sep 2020 - Apr 2022</span>
                  </div>
                </div>
                <ul className="list-disc list-inside text-sm space-y-2 text-muted-foreground">
                  <li>Developed accounting entries module for digital lending platform</li>
                  <li>Contributed to loan recovery module implementation</li>
                  <li>Integrated platform with core banking systems and mobile interfaces</li>
                </ul>
                <div className="pt-2">
                  <div className="text-sm font-medium mb-1">Technologies:</div>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="skill-badge">.NET</span>
                    <span className="skill-badge">Angular</span>
                    <span className="skill-badge">Ionic</span>
                    <span className="skill-badge">SQL Server</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
