import { HeroSection } from "@/components/home/hero-section";
import { StatsBar } from "@/components/home/stats-bar";
import { ProblemWeSolveSection } from "@/components/home/problem-we-solve-section";
import { GratitudeFrameworkSection } from "@/components/home/gratitude-framework-section";
import { AboutSection } from "@/components/home/about-section";
import { ServicesSection } from "@/components/home/services-section";
import TestimonialsSection from "@/components/testimonials-section";
import { IndustriesSection } from "@/components/home/industries-section";
import { FounderQuoteSection } from "@/components/home/founder-quote-section";
import { AiPlatformSection } from "@/components/home/ai-platform-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";

/** Client brief: 9 sections in this exact order */
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <StatsBar />
      <ProblemWeSolveSection />
      <GratitudeFrameworkSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <IndustriesSection />
      <FounderQuoteSection />
      <AiPlatformSection />
      <FinalCtaSection />
    </div>
  );
}
