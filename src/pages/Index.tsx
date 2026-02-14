import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import MarqueeSection from "@/components/home/MarqueeSection";
import FoundersSection from "@/components/home/FoundersSection";
import AboutSection from "@/components/home/AboutSection";
import StatsSection from "@/components/home/StatsSection";
import ProgramHighlights from "@/components/home/ProgramHighlights";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <MarqueeSection />
      <FoundersSection />
      <AboutSection />
      <StatsSection />
      <ProgramHighlights />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
