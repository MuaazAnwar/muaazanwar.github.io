
import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Experience = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 animate-fade-in">Professional Experience</h1>
          <p className="text-muted-foreground mb-12 max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            My professional journey as a software engineer, focusing on building scalable systems and data infrastructure.
          </p>

          <div className="space-y-12">
            {/* Securiti Experience */}
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Briefcase className="text-primary" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Securiti</h2>
                  <p className="text-muted-foreground">Apr 2022 - Present</p>
                </div>
              </div>

              <div className="space-y-6 pl-4 border-l border-border">
                <Card className="p-6 hover:border-primary transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-2">Sr. Software Development Engineer: Policy & DSPM</h3>
                  <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                    <li>Designed and developed a control plane for the data catalog registration policy, responsible to pull and prepare a data file for registration layer in a chunked fashion, making it capable of handling up to 1 million entities.</li>
                    <li>Introduced tenant-level concurrency for the graph database migrator job, reducing job time by 70%, and configured ElastAlert, Grafana dashboards using k8s Prometheus metrics for real-time monitoring and alerting.</li>
                    <li>Developed a normalization layer that processed 100,000+ multi-cloud assets in parallel for a single task, by standardizing their properties and relationships, and dynamically ingesting them into databases based on tenant subscriptions.</li>
                    <li>Integrated an open-source AWS scanning tool into the system architecture for the asset discovery feature, enabling scans of up to 65,000 assets per account.</li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-border">
                    <h4 className="font-medium mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="skill-badge">Go</span>
                      <span className="skill-badge">Vue</span>
                      <span className="skill-badge">Python</span>
                      <span className="skill-badge">PostgreSQL</span>
                      <span className="skill-badge">Neo4j</span>
                      <span className="skill-badge">Elasticsearch</span>
                      <span className="skill-badge">Redis</span>
                      <span className="skill-badge">Kubernetes</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:border-primary transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-2">Software Development Engineer: Policy</h3>
                  <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                    <li>Enhanced the Kafka masking policy by integrating new masking functions and added support of Glue and Confluent schema registry.</li>
                    <li>Expanded support of data discovery scans to include new conditions, settings, and asset types.</li>
                    <li>Revamped the data risk configuration by working as full stack to enable users to customize weightage for various risk parameters and define their own.</li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-border">
                    <h4 className="font-medium mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="skill-badge">AWS SQS</span>
                      <span className="skill-badge">AWS Neptune</span>
                      <span className="skill-badge">AWS S3</span>
                      <span className="skill-badge">Machinery Queue</span>
                      <span className="skill-badge">Prometheus</span>
                      <span className="skill-badge">Grafana</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Techlogix Experience */}
            <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Briefcase className="text-primary" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Techlogix</h2>
                  <p className="text-muted-foreground">Sep 2020 - Apr 2022</p>
                </div>
              </div>

              <div className="space-y-6 pl-4 border-l border-border">
                <Card className="p-6 hover:border-primary transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-2">Software Engineer: Digital Lending Platform</h3>
                  <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                    <li>Developed accounting entries module, that automated posting of aggregated entries to the bank's core system during diverse events.</li>
                    <li>Contributed to the implementation of a loan recovery module that recovers, blocks, and sets penalty amounts.</li>
                    <li>Integrated the Digital Lending Platform with various core banking systems.</li>
                    <li>Implemented mobile interfaces for a new hybrid application.</li>
                    <li>Added interface for various reports and overhauled the file upload mechanism in the web portal.</li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-border">
                    <h4 className="font-medium mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="skill-badge">.NET Framework</span>
                      <span className="skill-badge">C#</span>
                      <span className="skill-badge">Angular</span>
                      <span className="skill-badge">Ionic 5</span>
                      <span className="skill-badge">SQL Server</span>
                      <span className="skill-badge">Oracle Database</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Experience;
