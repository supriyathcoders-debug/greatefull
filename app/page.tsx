import { HeroSection } from "@/components/home/hero-section";
import { GratitudeFrameworkSection } from "@/components/home/gratitude-framework-section";
import { AboutSection } from "@/components/home/about-section";
import { BrandVisualShowcase } from "@/components/home/brand-visual-showcase";
import { ServicesSection } from "@/components/home/services-section";
import TestimonialsSection from "@/components/testimonials-section";
import { IndustriesSection } from "@/components/home/industries-section";
import { FounderQuoteSection } from "@/components/home/founder-quote-section";
import { AiPlatformSection } from "@/components/home/ai-platform-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";

export default function Home() {
  return (
    <div className="overflow-x-hidden pt-16">
      <HeroSection />
      <GratitudeFrameworkSection />
      <AboutSection />
      <BrandVisualShowcase />
      <ServicesSection />
      <TestimonialsSection />
      <IndustriesSection />
      <FounderQuoteSection />
      <AiPlatformSection />
      <FinalCtaSection />
    </div>
  );
}
