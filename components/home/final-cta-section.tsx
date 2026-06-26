"use client";

import { PremiumButton } from "@/components/ui/premium-button";
import { DiamondDivider } from "@/components/ui/icons";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { BOOKING_URL } from "@/lib/constants";

export function FinalCtaSection() {
  return (
    <section id="consultation" className="py-24 section-shell">
      <StaggerReveal>
        <StaggerItem>
          <div className="max-w-[720px] mx-auto text-center border border-brand/20 bg-brand-soft/25 px-8 py-14 md:px-12 md:py-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(212,175,55,0.06)_0%,transparent_70%)]" />

            <div className="relative">
              <p className="text-[0.65rem] tracking-[0.22em] uppercase text-brand mb-4">
                Ready to Lead with Confidence?
              </p>
              <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.6rem)] font-semibold leading-[1.15] mb-4">
                Book your strategy session with{" "}
                <em className="italic text-brand font-light">Andrea.</em>
              </h2>
              <p className="text-sm text-muted font-light max-w-md mx-auto mb-8 leading-relaxed">
                A confidential conversation — no junior handoffs, no generic
                pitches. Just experienced strategic thinking for your business.
              </p>

              <DiamondDivider className="max-w-[160px] mx-auto mb-8" />

              <div className="flex flex-wrap items-center justify-center gap-4">
                <PremiumButton href={BOOKING_URL} external>
                  Book Your Strategy Session
                </PremiumButton>
                <PremiumButton href="/ai-revenue-audit" variant="secondary">
                  AI Revenue Audit
                </PremiumButton>
              </div>
            </div>
          </div>
        </StaggerItem>
      </StaggerReveal>
    </section>
  );
}
