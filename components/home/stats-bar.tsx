"use client";

import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { STATS } from "@/lib/content/home";

export function StatsBar() {
  return (
    <section className="py-12 section-shell bg-brand-soft/20 relative section-divider-top section-noise">
      <div className="max-w-[1100px] mx-auto">
        <StaggerReveal className="flex flex-col md:flex-row flex-wrap justify-around gap-10 md:gap-4 text-center md:text-left">
          {STATS.items.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="font-heading text-[clamp(1.75rem,3vw,2.75rem)] font-bold text-brand leading-none mb-2">
                  {stat.number}
                </div>
                <div className="text-[0.72rem] text-muted leading-relaxed font-light max-w-[160px]">
                  {stat.label}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
