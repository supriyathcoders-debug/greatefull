"use client";

import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { WHY_GM } from "@/lib/content/home";

export function WhyGratefulMarketingSection() {
  return (
    <section className="py-28 section-shell">
      <div className="max-w-[1000px] mx-auto">
        <StaggerReveal className="mb-16">
          <StaggerItem>
            <Eyebrow className="mb-5">{WHY_GM.eyebrow}</Eyebrow>
            <SectionHeading className="mb-8">
              {WHY_GM.heading}
            </SectionHeading>
          </StaggerItem>
        </StaggerReveal>

        <StaggerReveal className="flex flex-col border border-border-subtle bg-brand-soft/5 rounded-lg overflow-hidden shadow-sm">
          {WHY_GM.items.map((item, index) => (
            <StaggerItem key={item.title}>
              <article className={`flex flex-col sm:flex-row items-stretch ${index !== WHY_GM.items.length - 1 ? 'border-b border-border-subtle/60' : ''}`}>
                <div className="flex sm:w-20 lg:w-24 flex-shrink-0 items-center justify-center bg-brand-soft/20 border-b sm:border-b-0 sm:border-r border-border-subtle/60 p-4">
                  <span className="font-heading text-xl lg:text-2xl font-bold text-brand">
                    {item.number}
                  </span>
                </div>
                <div className="flex-1 p-5 lg:p-6 flex items-center bg-background/50 hover:bg-brand-soft/5 transition-colors">
                  <p className="text-[0.9rem] lg:text-[0.95rem] text-muted leading-[1.8] font-light">
                    <strong className="text-foreground font-semibold mr-1">{item.title}</strong>
                    {item.description}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
