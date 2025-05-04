
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <ExperienceSection />
        </div>
        <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <SkillsSection />
        </div>
        <div className="animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <EducationSection />
        </div>
        <div className="animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
