import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ValuesSection from "@/components/ValuesSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <main className="flex-1 flex flex-col w-full max-w-[1200px] mx-auto">
          <HeroSection />
          <AboutSection />
          <ValuesSection />
          <ServicesSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
