import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TryHackMeBadge from "@/components/TryHackMeBadge";
import CommandCenter from "@/components/CommandCenter";
import Certifications from "@/components/Certifications";
import TechStack from "@/components/TechStack";
import TheLab from "@/components/TheLab";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background grid-pattern scan-line">
      <Navbar />
      <HeroSection />
      <TryHackMeBadge />
      <CommandCenter />
      <Certifications />
      <TechStack />
      <TheLab />
      <Footer />
    </div>
  );
};

export default Index;
