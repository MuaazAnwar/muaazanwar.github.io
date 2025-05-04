
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Book, GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Education</h1>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            My academic background and educational qualifications.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-6">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <GraduationCap className="h-10 w-10 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Master of Science in Computer Science</h2>
                <p className="text-muted-foreground">Sep 2021 - Dec 2023</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Institute of Business Administration (IBA)</h3>
                  <p className="text-sm text-muted-foreground">Karachi, Pakistan</p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Key Courses:</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="skill-badge">Advanced Algorithms</div>
                    <div className="skill-badge">Machine Learning</div>
                    <div className="skill-badge">Distributed Systems</div>
                    <div className="skill-badge">Database Systems</div>
                    <div className="skill-badge">Cloud Computing</div>
                    <div className="skill-badge">System Architecture</div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Research Focus:</h3>
                  <p className="text-sm text-muted-foreground">
                    Focused on scalable data systems and infrastructure optimization for cloud environments.
                    Conducted research on graph database performance optimization techniques.
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <GraduationCap className="h-10 w-10 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Bachelor of Science in Computer Science</h2>
                <p className="text-muted-foreground">Jun 2016 - Jul 2020</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">National University of Computer and Emerging Sciences (FAST)</h3>
                  <p className="text-sm text-muted-foreground">Karachi, Pakistan</p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Key Courses:</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="skill-badge">Data Structures</div>
                    <div className="skill-badge">Algorithms</div>
                    <div className="skill-badge">Operating Systems</div>
                    <div className="skill-badge">Database Systems</div>
                    <div className="skill-badge">Software Engineering</div>
                    <div className="skill-badge">Computer Networks</div>
                    <div className="skill-badge">Web Development</div>
                    <div className="skill-badge">AI Fundamentals</div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Projects:</h3>
                  <p className="text-sm text-muted-foreground">
                    Developed several academic projects including a distributed file system, 
                    e-commerce platform, and database management system implementations.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Book size={24} className="text-primary" />
            Continued Learning
          </h2>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
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
            <Card className="p-4 hover:shadow-md transition-shadow">
              <div className="font-medium">DevOps Industrial</div>
              <div className="text-sm text-muted-foreground">iTechNets • Jan 2021</div>
            </Card>
            <Card className="p-4 hover:shadow-md transition-shadow">
              <div className="font-medium">Digital Marketing</div>
              <div className="text-sm text-muted-foreground">UIT's Professional Development Course • Sep 2019</div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Education;
