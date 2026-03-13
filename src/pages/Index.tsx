import { siteConfig } from "@/config/siteConfig";
import HeroSection from "@/components/HeroSection";
import LinksSection from "@/components/LinksSection";
/* import AboutSection from "@/components/AboutSection"; */
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import SpaceSection from "@/components/SpaceSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background max-w-screen-sm mx-auto relative">
      {/* Decorative side borders on desktop */}
      <div className="hidden md:block fixed inset-y-0 left-0 right-0 pointer-events-none z-50">
        <div className="max-w-screen-sm mx-auto h-full border-x border-border/50" />
      </div>

      <HeroSection />
      <LinksSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <SpaceSection />
      <Footer />
    </div>
  );
};

export default Index;
