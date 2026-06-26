"use client";

import { Eyebrow } from "@/components/ui/eyebrow";
import { PremiumButton } from "@/components/ui/premium-button";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { SERVICES } from "@/lib/content/home";

export function ServicesSection() {
  return (
    <section id="services" className="py-28 section-shell">
      <StaggerReveal className="mb-14">
        <StaggerItem>
          <Eyebrow className="mb-5">{SERVICES.eyebrow}</Eyebrow>
          <h2 className="font-heading text-[clamp(2.1rem,4vw,3.5rem)] font-semibold leading-[1.12] mb-5">
            {SERVICES.heading}{" "}
            <em className="italic text-brand font-light">{SERVICES.headingEm}</em>{" "}
            {SERVICES.headingSuffix}
          </h2>
          <p className="text-base text-muted leading-[1.88] font-light max-w-[580px]">
            {SERVICES.intro}
          </p>
        </StaggerItem>
      </StaggerReveal>

      <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {SERVICES.items.map((service) => (
          <StaggerItem key={service.title}>
            <article className="p-8 border border-border-subtle bg-brand-soft/30 hover:border-brand/25 transition-colors h-full flex flex-col">
              <span className="font-heading text-sm text-brand/50 mb-3">
                {service.number}
              </span>
              <h3 className="font-heading text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted leading-[1.82] font-light flex-1">
                {service.description}
              </p>
              {service.href && (
                <div className="mt-6">
                  <PremiumButton href={service.href} variant="ghost">
                    Learn More
                  </PremiumButton>
                </div>
              )}
            </article>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </section>
  );
}
