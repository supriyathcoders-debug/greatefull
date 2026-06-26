"use client";

import { motion } from "framer-motion";
import { PremiumButton } from "@/components/ui/premium-button";
import { AnimatedBrandImage } from "@/components/ui/animated-brand-image";
import { Eyebrow } from "@/components/ui/eyebrow";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { BOOKING_URL } from "@/lib/constants";
import { IMAGES, TRUST_STATS } from "@/lib/content/home";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center section-shell pt-28 pb-20 overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_65%_50%_at_78%_42%,rgba(212,175,55,0.06)_0%,transparent_65%)]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 z-0 hero-grid opacity-60" aria-hidden="true" />

      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center max-w-[1200px] mx-auto">
        <StaggerReveal>
          <StaggerItem>
            <Eyebrow className="mb-6">
              North American AI Marketing Consultancy
            </Eyebrow>
          </StaggerItem>

          <StaggerItem>
            <h1 className="font-heading text-[clamp(2.4rem,4.5vw,4.2rem)] font-semibold leading-[1.08] mb-6">
              Built around your people.{" "}
              <span className="text-gold-gradient italic font-light">
                Powered by AI.
              </span>
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="max-w-[500px] text-[0.95rem] font-light leading-[1.85] text-muted mb-8">
              Grateful Marketing™ is a premium human-first AI consultancy. We
              combine the proprietary{" "}
              <strong className="text-foreground font-normal">
                GRATITUDE™ methodology
              </strong>{" "}
              with thoughtful AI integration — so your team leads with
              confidence and growth becomes predictable.
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="flex items-center gap-4 flex-wrap mb-12">
              <PremiumButton href={BOOKING_URL} external>
                Book Your Strategy Session
              </PremiumButton>
              <PremiumButton href="#gratitude" variant="secondary">
                See How We Work
              </PremiumButton>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {TRUST_STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className={i > 0 ? "border-l border-border pl-5" : ""}
                >
                  <div className="font-heading text-2xl lg:text-3xl font-semibold text-brand leading-none">
                    {stat.value}
                  </div>
                  <div className="text-[0.6rem] text-muted tracking-[0.1em] uppercase mt-1.5 font-light">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </StaggerItem>
        </StaggerReveal>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center lg:justify-end"
        >
          <AnimatedBrandImage
            src={IMAGES.hero}
            alt="Empowered strategy — human-first AI consulting"
            size="lg"
            animate="float"
          />
        </motion.div>
      </div>
    </section>
  );
}
