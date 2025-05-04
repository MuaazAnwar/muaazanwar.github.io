
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Database, Server, Globe } from "lucide-react";

const SkillsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Skills & Technologies</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Proficient in a diverse range of programming languages, frameworks, and technologies
        </p>

        <Tabs defaultValue="programming" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="programming" className="flex gap-2 items-center">
              <Code size={16} /> Programming
            </TabsTrigger>
            <TabsTrigger value="databases" className="flex gap-2 items-center">
              <Database size={16} /> Databases
            </TabsTrigger>
            <TabsTrigger value="cloud" className="flex gap-2 items-center">
              <Server size={16} /> Cloud & DevOps
            </TabsTrigger>
            <TabsTrigger value="frameworks" className="flex gap-2 items-center">
              <Globe size={16} /> Frameworks
            </TabsTrigger>
          </TabsList>

          <TabsContent value="programming" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  <div className="skill-badge flex justify-center">Golang</div>
                  <div className="skill-badge flex justify-center">C#</div>
                  <div className="skill-badge flex justify-center">Python</div>
                  <div className="skill-badge flex justify-center">JavaScript</div>
                  <div className="skill-badge flex justify-center">Java</div>
                  <div className="skill-badge flex justify-center">TypeScript</div>
                  <div className="skill-badge flex justify-center">.NET</div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="databases" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  <div className="skill-badge flex justify-center">PostgreSQL</div>
                  <div className="skill-badge flex justify-center">Neo4j</div>
                  <div className="skill-badge flex justify-center">Redis</div>
                  <div className="skill-badge flex justify-center">ElasticSearch</div>
                  <div className="skill-badge flex justify-center">Oracle SQL</div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cloud" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  <div className="skill-badge flex justify-center">AWS</div>
                  <div className="skill-badge flex justify-center">Neptune</div>
                  <div className="skill-badge flex justify-center">Docker</div>
                  <div className="skill-badge flex justify-center">Kubernetes</div>
                  <div className="skill-badge flex justify-center">MCP Servers</div>
                  <div className="skill-badge flex justify-center">Prometheus</div>
                  <div className="skill-badge flex justify-center">Claude Code</div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="frameworks" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  <div className="skill-badge flex justify-center">Vue</div>
                  <div className="skill-badge flex justify-center">Angular</div>
                  <div className="skill-badge flex justify-center">Ionic</div>
                  <div className="skill-badge flex justify-center">.NET Framework</div>
                  <div className="skill-badge flex justify-center">Grafana</div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6 text-center">Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="p-4 hover:shadow-md transition-shadow">
              <div className="font-medium">Graph Data Modeling Fundamentals</div>
              <div className="text-sm text-muted-foreground">Neo4j • Jul 2023</div>
            </Card>
            <Card className="p-4 hover:shadow-md transition-shadow">
              <div className="font-medium">Node.js, Express and MongoDB Bootcamp</div>
              <div className="text-sm text-muted-foreground">Udemy • Nov 2021</div>
            </Card>
            <Card className="p-4 hover:shadow-md transition-shadow">
              <div className="font-medium">Artificial Intelligence</div>
              <div className="text-sm text-muted-foreground">PIAIC • Oct 2021</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
