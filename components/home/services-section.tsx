"use client";

import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { PremiumButton } from "@/components/ui/premium-button";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { SERVICES } from "@/lib/content/home";

export function ServicesSection() {
  return (
    <section id="services" className="py-24 section-shell">
      <StaggerReveal className="mb-12">
        <StaggerItem>
          <Eyebrow className="mb-4">Our Services</Eyebrow>
          <SectionHeading className="mb-4">
            Four pillars of{" "}
            <em className="italic text-brand font-light">human-first</em> growth.
          </SectionHeading>
          <p className="text-sm text-muted leading-[1.85] font-light max-w-[520px]">
            Every engagement meets you exactly where you are — from your first
            AI steps to full deployment and automation.
          </p>
        </StaggerItem>
      </StaggerReveal>

      <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {SERVICES.map((service) => (
          <StaggerItem key={service.title}>
            <article className="p-7 border border-border-subtle relative overflow-hidden transition-all duration-500 hover:border-brand/30 hover:bg-brand/5 group bg-background/50 flex flex-col h-full min-h-[280px]">
              <div className="absolute top-0 left-0 w-0 h-px bg-brand transition-all duration-500 group-hover:w-full" />
              <span className="font-heading text-5xl font-bold text-brand/5 absolute right-4 top-2 leading-none select-none">
                {service.number}
              </span>
              <h3 className="font-heading text-lg font-semibold leading-tight mb-2 pr-10">
                {service.title}
              </h3>
              <p className="text-[0.82rem] text-muted leading-[1.8] font-light mb-5 flex-1">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {service.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-[0.6rem] tracking-[0.08em] uppercase text-brand/80 border border-brand/30 px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {service.href && (
                <div className="mt-4">
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
