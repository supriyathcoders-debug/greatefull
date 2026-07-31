import { HeroSection } from "@/components/home/hero-section";
import { StatsBar } from "@/components/home/stats-bar";
import { IndustriesSection } from "@/components/home/industries-section";
import { ProblemWeSolveSection } from "@/components/home/problem-we-solve-section";
import { GratitudeFrameworkSection } from "@/components/home/gratitude-framework-section";
import { AboutSection } from "@/components/home/about-section";
import { WhyGratefulMarketingSection } from "@/components/home/why-grateful-marketing-section";
import { FounderQuoteSection } from "@/components/home/founder-quote-section";
import { ServicesSection } from "@/components/home/services-section";
import { CaseStudiesSection } from "@/components/case-studies-section";
import { OutcomesSection } from "@/components/home/outcomes-section";
import { AiPlatformSection } from "@/components/home/ai-platform-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";

/** Client brief: 9 sections in this exact order (updated by later instructions) */
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <StatsBar />
      <IndustriesSection />
      <ProblemWeSolveSection />
      <GratitudeFrameworkSection />
      <AboutSection />
      <ServicesSection />
      <WhyGratefulMarketingSection />
      <FounderQuoteSection />
      <OutcomesSection />
      <AiPlatformSection />
      <CaseStudiesSection />
      <FinalCtaSection />
    </div>
  );
}
