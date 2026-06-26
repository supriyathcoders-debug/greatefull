"use client";

import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { PremiumButton } from "@/components/ui/premium-button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { BOOKING_URL } from "@/lib/constants";
import { HERO, IMAGES } from "@/lib/content/home";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[88vh] flex items-center section-shell pt-28 pb-20 page-backdrop"
    >
      <div className="relative z-10 w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <StaggerReveal>
          <StaggerItem>
            <Eyebrow className="mb-8">{HERO.eyebrow}</Eyebrow>
          </StaggerItem>

          <StaggerItem>
            <h1 className="font-heading text-[clamp(2.6rem,5vw,4.5rem)] font-semibold leading-[1.06] mb-8">
              {HERO.headline}{" "}
              <em className="italic text-brand font-light">{HERO.headlineEm}</em>
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="max-w-[540px] text-base font-light leading-[1.86] text-muted mb-10">
              {HERO.supporting}
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="flex items-center gap-5 flex-wrap">
              <PremiumButton href={BOOKING_URL} external>
                {HERO.ctaPrimary}
              </PremiumButton>
              <PremiumButton href={HERO.ctaSecondaryHref} variant="secondary">
                {HERO.ctaSecondary}
              </PremiumButton>
            </div>
          </StaggerItem>
        </StaggerReveal>

        <StaggerReveal className="hidden lg:block">
          <StaggerItem>
            <div className="relative max-w-[420px] ml-auto border border-brand/20 bg-[#0b0b2b] overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-brand/50" />
              <img
                src={IMAGES.hero}
                alt="Grateful Marketing — human-first AI consultancy"
                className="w-full h-auto object-contain"
              />
            </div>
          </StaggerItem>
        </StaggerReveal>
      </div>
    </section>
  );
}
