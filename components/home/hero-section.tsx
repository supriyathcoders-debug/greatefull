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
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
    >
      {/* Full artwork on the right — never crop (object-contain only) */}
      <div
        className="absolute inset-0 z-0 overflow-hidden bg-[#2E0854]"
        aria-hidden="true"
      >
        <img
          src={IMAGES.heroGoldSilhouette}
          alt=""
          className="absolute inset-0 h-full w-full object-contain object-center md:object-right"
        />
        {/* Left-only gradient so HTML text stays readable over solid purple */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2E0854] from-0% via-[#2E0854]/92 via-[38%] to-transparent to-72%" />
      </div>

      <div className="relative z-10 w-full section-shell pt-28 pb-24 lg:pt-32 lg:pb-28">
        <StaggerReveal className="max-w-[640px]">
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
      </div>
    </section>
  );
}
