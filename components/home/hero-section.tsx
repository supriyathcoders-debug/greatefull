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
      className="relative overflow-hidden bg-[#23004c] lg:min-h-[100dvh] lg:flex lg:items-center"
    >
      {/* Desktop — full-bleed background image with text overlay */}
      <div
        className="absolute inset-0 z-0 hidden lg:block overflow-hidden bg-[#23004c]"
        aria-hidden="true"
      >
        <img
          src={IMAGES.heroGoldSilhouette}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[60%_center] xl:object-[68%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#23004c] from-0% via-[#23004c]/92 via-[38%] to-transparent to-72%" />
      </div>

      {/* Mobile — image on top, separate from text */}
      <div className="lg:hidden pt-20">
        <img
          src={IMAGES.heroGoldSilhouette}
          alt="Grateful Marketing — Gratitude Always"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Text — below image on mobile, left overlay on desktop */}
      <div className="relative z-10 w-full section-shell py-10 lg:py-0 lg:pt-32 lg:pb-28">
        <StaggerReveal className="max-w-[640px]">
          <StaggerItem>
            <Eyebrow className="mb-6 lg:mb-8">{HERO.eyebrow}</Eyebrow>
          </StaggerItem>

          <StaggerItem>
            <h1 className="font-heading text-[clamp(2rem,6vw,4.5rem)] font-semibold leading-[1.08] mb-6 lg:mb-8">
              {HERO.headline}{" "}
              <em className="italic text-brand font-light">{HERO.headlineEm}</em>
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="max-w-[540px] text-base font-light leading-[1.86] text-muted mb-8 lg:mb-10">
              {HERO.supporting}
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="flex flex-col gap-4 lg:flex-row lg:flex-wrap lg:items-center lg:gap-5">
              <PremiumButton href={BOOKING_URL} external className="w-full lg:w-auto text-center">
                {HERO.ctaPrimary}
              </PremiumButton>
              <PremiumButton
                href={HERO.ctaSecondaryHref}
                variant="secondary"
                className="w-full lg:w-auto text-center"
              >
                {HERO.ctaSecondary}
              </PremiumButton>
            </div>
          </StaggerItem>
        </StaggerReveal>
      </div>
    </section>
  );
}
