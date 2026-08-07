"use client";

import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { OUTCOMES } from "@/lib/content/home";

export function OutcomesSection() {
  return (
    <section className="py-28 section-shell bg-brand-soft/20">
      <div className="max-w-[1000px] mx-auto">
        <StaggerReveal className="text-center mb-16">
          <StaggerItem>
            <Eyebrow className="mb-4">{OUTCOMES.eyebrow}</Eyebrow>
            <SectionHeading className="mb-4">
              {OUTCOMES.subhead}
            </SectionHeading>
          </StaggerItem>
        </StaggerReveal>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {OUTCOMES.items.map((outcome, index) => (
            <StaggerItem key={index}>
              <article className="p-8 border border-border-subtle bg-background hover:border-brand/20 transition-colors h-full flex flex-col justify-center">
                <p className="text-[0.95rem] text-muted leading-[1.8] font-light">
                  <strong className="text-foreground font-semibold">{outcome.title}</strong>{" "}
                  {outcome.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
