"use client";

import { DiamondDivider } from "@/components/ui/icons";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { FOUNDER_QUOTE } from "@/lib/content/home";

export function FounderQuoteSection() {
  return (
    <section id="quote" className="py-28 section-shell">
      <StaggerReveal>
        <StaggerItem>
          <div className="max-w-[780px] mx-auto text-center border border-brand/15 bg-brand-soft/30 px-8 py-14 md:px-14 md:py-16">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />

            <span
              className="font-heading text-5xl text-brand/12 leading-none block mb-4 select-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <blockquote className="font-heading text-[clamp(1.1rem,2.2vw,1.45rem)] italic leading-[1.7] text-brand/85 mb-8">
              {FOUNDER_QUOTE}
            </blockquote>

            <DiamondDivider className="max-w-[180px] mx-auto mb-6" />

            <footer>
              <cite className="not-italic">
                <div className="text-sm font-medium text-foreground">Andrea</div>
                <div className="text-[0.68rem] text-muted mt-1 font-light tracking-[0.1em] uppercase">
                  Founder & CEO, Grateful Marketing™
                </div>
              </cite>
            </footer>
          </div>
        </StaggerItem>
      </StaggerReveal>
    </section>
  );
}
