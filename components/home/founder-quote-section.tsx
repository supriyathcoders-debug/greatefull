"use client";

import { BrandImage } from "@/components/ui/brand-image";
import { DiamondDivider } from "@/components/ui/icons";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { FOUNDER_QUOTE, IMAGES } from "@/lib/content/home";

import { PremiumButton } from "@/components/ui/premium-button";
export function FounderQuoteSection() {
  return (
    <section id="quote" className="py-24 section-shell">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        <StaggerReveal className="hidden lg:block h-full">
          <StaggerItem className="h-full">
            <BrandImage
              src={IMAGES.founderStrategicReflection}
              alt="Strategic reflection — Andrea, Founder of Grateful Marketing®️"
              className="h-full"
              fillHeight
            />
          </StaggerItem>
        </StaggerReveal>

        <StaggerReveal className="h-full">
          <StaggerItem className="h-full">
            <div className="flex flex-col h-full border border-brand/15 bg-brand-soft/30 px-8 py-14 md:px-12 md:py-16 justify-center">
              <span
                className="font-heading text-6xl text-brand/12 leading-none block mb-4 select-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <blockquote className="font-heading text-[clamp(1.05rem,2vw,1.45rem)] italic leading-[1.7] text-brand/90 mb-8">
                {FOUNDER_QUOTE}
              </blockquote>
              <DiamondDivider className="max-w-[180px] mb-6" />
              <footer>
                <cite className="not-italic">
                  <div className="text-sm font-medium text-foreground">Andrea</div>
                  <div className="text-[0.72rem] text-muted mt-1 font-light">
                    Founder & CEO, Grateful Marketing®️
                  </div>
                </cite>
                <div className="mt-8 pt-8 border-t border-brand/10 flex flex-col items-start gap-4">
                  <p className="text-[0.85rem] text-muted font-light">
                    This is the philosophy behind every strategy call.
                  </p>
                  <PremiumButton href="https://api.growthhub365.com/widget/bookings/ai-audit-calendar-3ttpow-79caa778-4b01-49b0-a035-ace978ef81de-51a69f4d-0a01-4198-b17b-201bdf1d1031-8eef8d1b-02a3-43d9-b33f-7c850af15489" variant="primary">
                    Book a Strategy call &rarr;
                  </PremiumButton>
                </div>
              </footer>
            </div>
          </StaggerItem>
        </StaggerReveal>
      </div>
    </section>
  );
}
