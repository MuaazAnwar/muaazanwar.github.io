
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Code, 
  Database, 
  Server, 
  Globe, 
  Award 
} from "lucide-react";

const Skills = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Skills & Expertise</h1>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            A comprehensive overview of my technical skills, tools, and technologies I work with.
          </p>

          <Tabs defaultValue="programming" className="mb-12">
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
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Primary Languages</CardTitle>
                  </CardHeader>
                  <CardContent className="grid grid-cols-2 gap-4">
                    <div className="p-4 border rounded-md flex flex-col items-center">
                      <div className="text-4xl font-bold text-primary mb-2">Go</div>
                      <div className="text-sm text-muted-foreground text-center">
                        Primary language for backend services
                      </div>
                    </div>
                    <div className="p-4 border rounded-md flex flex-col items-center">
                      <div className="text-4xl font-bold text-primary mb-2">C#</div>
                      <div className="text-sm text-muted-foreground text-center">
                        Enterprise application development
                      </div>
                    </div>
                    <div className="p-4 border rounded-md flex flex-col items-center">
                      <div className="text-4xl font-bold text-primary mb-2">Python</div>
                      <div className="text-sm text-muted-foreground text-center">
                        Data processing and automation
                      </div>
                    </div>
                    <div className="p-4 border rounded-md flex flex-col items-center">
                      <div className="text-4xl font-bold text-primary mb-2">JS/TS</div>
                      <div className="text-sm text-muted-foreground text-center">
                        Frontend development
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Other Languages & Tools</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="skill-badge flex justify-center">Java</div>
                      <div className="skill-badge flex justify-center">.NET</div>
                      <div className="skill-badge flex justify-center">Rego</div>
                      <div className="skill-badge flex justify-center">SQL</div>
                      <div className="skill-badge flex justify-center">TypeScript</div>
                      <div className="skill-badge flex justify-center">Shell</div>
                      <div className="skill-badge flex justify-center">REST APIs</div>
                      <div className="skill-badge flex justify-center">GraphQL</div>
                      <div className="skill-badge flex justify-center">gRPC</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="databases" className="mt-6">
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Relational Databases</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="skill-badge flex justify-center">PostgreSQL</div>
                      <div className="skill-badge flex justify-center">MySQL</div>
                      <div className="skill-badge flex justify-center">Oracle SQL</div>
                      <div className="skill-badge flex justify-center">SQL Server</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>NoSQL Databases</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="skill-badge flex justify-center">MongoDB</div>
                      <div className="skill-badge flex justify-center">Redis</div>
                      <div className="skill-badge flex justify-center">DynamoDB</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Specialized Databases</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="skill-badge flex justify-center">Neo4j</div>
                      <div className="skill-badge flex justify-center">ElasticSearch</div>
                      <div className="skill-badge flex justify-center">Neptune</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="cloud" className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Cloud Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="skill-badge flex justify-center">AWS</div>
                      <div className="skill-badge flex justify-center">S3</div>
                      <div className="skill-badge flex justify-center">SQS</div>
                      <div className="skill-badge flex justify-center">CloudWatch</div>
                      <div className="skill-badge flex justify-center">EC2</div>
                      <div className="skill-badge flex justify-center">Lambda</div>
                      <div className="skill-badge flex justify-center">Neptune</div>
                      <div className="skill-badge flex justify-center">RDS</div>
                      <div className="skill-badge flex justify-center">Kinesis</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>DevOps & Infrastructure</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="skill-badge flex justify-center">Docker</div>
                      <div className="skill-badge flex justify-center">Kubernetes</div>
                      <div className="skill-badge flex justify-center">Jenkins</div>
                      <div className="skill-badge flex justify-center">Grafana</div>
                      <div className="skill-badge flex justify-center">Prometheus</div>
                      <div className="skill-badge flex justify-center">Terraform</div>
                      <div className="skill-badge flex justify-center">Git</div>
                      <div className="skill-badge flex justify-center">CI/CD</div>
                      <div className="skill-badge flex justify-center">ElastAlert</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="frameworks" className="mt-6">
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Backend Frameworks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="skill-badge flex justify-center">.NET Framework</div>
                      <div className="skill-badge flex justify-center">Express.js</div>
                      <div className="skill-badge flex justify-center">Django</div>
                      <div className="skill-badge flex justify-center">Spring Boot</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Frontend Frameworks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="skill-badge flex justify-center">Vue</div>
                      <div className="skill-badge flex justify-center">Angular</div>
                      <div className="skill-badge flex justify-center">React</div>
                      <div className="skill-badge flex justify-center">Ionic</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Tools & Utils</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="skill-badge flex justify-center">Machinery Queue</div>
                      <div className="skill-badge flex justify-center">Workflow Engine</div>
                      <div className="skill-badge flex justify-center">Claude Code</div>
                      <div className="skill-badge flex justify-center">MCP Servers</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Award size={24} className="text-primary" />
            Certifications
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Graph Data Modeling Fundamentals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">Neo4j • Jul 2023</p>
                <p className="text-sm">
                  Advanced graph database modeling techniques and best practices for Neo4j implementations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Node.js, Express and MongoDB Bootcamp</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">Udemy • Nov 2021</p>
                <p className="text-sm">
                  Building scalable web applications using Node.js, Express.js and MongoDB.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Artificial Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">PIAIC • Oct 2021</p>
                <p className="text-sm">
                  Machine learning fundamentals and applied AI techniques.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>DevOps Industrial</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">iTechNets • Jan 2021</p>
                <p className="text-sm">
                  DevOps tools and practices for modern software development.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Digital Marketing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">UIT's Professional Development Course • Sep 2019</p>
                <p className="text-sm">
                  Fundamentals of digital marketing strategies and implementation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Skills;
