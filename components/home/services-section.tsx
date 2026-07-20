"use client";

import { Eyebrow } from "@/components/ui/eyebrow";
import { PremiumButton } from "@/components/ui/premium-button";
import { Marquee } from "@/components/ui/marquee";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { getOffersInOrder } from "@/lib/content/offers";
import { SERVICES } from "@/lib/content/home";

const PILLAR_MARQUEE_ITEMS = [
  { name: "Time", icon: "⏱", desc: "Respect every second" },
  { name: "Gratitude", icon: "🙏", desc: "Lead with appreciation" },
  { name: "Innovation", icon: "💡", desc: "Reimagine what's possible" },
  { name: "Productivity", icon: "⚡", desc: "Do more with less" },
  { name: "Potential", icon: "🚀", desc: "Unlock what's next" },
] as const;

const MARQUEE_PILLARS = [
  ...PILLAR_MARQUEE_ITEMS,
  ...PILLAR_MARQUEE_ITEMS,
  ...PILLAR_MARQUEE_ITEMS,
];

function PillarMarqueeCard({
  name,
  icon,
  desc,
}: (typeof PILLAR_MARQUEE_ITEMS)[number]) {
  return (
    <div className="w-[190px] shrink-0 rounded-2xl border border-brand/15 bg-gradient-to-b from-surface/80 to-surface/40 p-5 text-center transition-colors hover:border-brand/35">
      <div className="mb-2 text-2xl">{icon}</div>
      <div className="mb-1 font-heading text-[0.75rem] font-semibold text-brand">
        {name}
      </div>
      <div className="text-[0.62rem] font-light leading-relaxed text-muted/70">
        {desc}
      </div>
    </div>
  );
}

export function ServicesSection() {
  const offers = getOffersInOrder();

  return (
    <section id="services" className="py-28 section-shell relative section-noise">
      <div className="max-w-[1200px] mx-auto">
        <div className="absolute right-1/4 top-0 w-[400px] h-[400px] blob-purple opacity-20 pointer-events-none" aria-hidden="true" />

        <StaggerReveal className="mb-16 max-w-[720px]">
          <StaggerItem>
            <Eyebrow className="mb-5">{SERVICES.eyebrow}</Eyebrow>
            <h2 className="font-heading text-[clamp(2.2rem,4.5vw,3.8rem)] font-semibold leading-[1.1] mb-4 text-foreground">
              {SERVICES.heading}{" "}
              <em className="italic text-brand font-light">{SERVICES.headingEm}</em>{" "}
              {SERVICES.headingSuffix}
            </h2>
            <p className="text-[0.95rem] text-muted leading-[1.88] font-light max-w-[620px]">
              {SERVICES.intro}
            </p>
          </StaggerItem>
        </StaggerReveal>

        <StaggerReveal className="mb-6 max-w-[720px]">
          <StaggerItem>
            <p className="text-[0.8rem] font-light text-muted">
              The 5 Pillars of Gratitude&#8482; — Approved Reference Visual
            </p>
          </StaggerItem>
        </StaggerReveal>

        <div className="relative left-1/2 mb-16 w-screen max-w-none -translate-x-1/2">
          <div className="border-y border-brand/10 bg-brand-soft/25 py-5 section-noise">
            <Marquee speed={38}>
              {MARQUEE_PILLARS.map((pillar, index) => (
                <PillarMarqueeCard key={`${pillar.name}-${index}`} {...pillar} />
              ))}
            </Marquee>
          </div>
        </div>

        {/* All five offers — fixed document order 01 → 05 (no carousel) */}
        <StaggerReveal className="flex flex-col gap-7">
          {offers.map((offer) => (
            <StaggerItem key={offer.id}>
              <article
                id={offer.id}
                className="card-modern group flex flex-col overflow-hidden relative scroll-mt-28 lg:flex-row"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                <div className="w-full lg:w-[42%] shrink-0 bg-surface/30">
                  <div className="relative w-full aspect-[3/2]">
                    <img
                      src={offer.image}
                      alt={offer.imageAlt}
                      className="absolute inset-0 w-full h-full object-contain p-3 lg:p-4"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <span className="font-heading text-[0.82rem] text-brand/50 mb-1 font-medium tracking-wider">
                    Offer {offer.number}
                  </span>
                  <h3 className="font-heading text-[1.3rem] font-semibold mb-1 text-foreground leading-tight group-hover:text-brand transition-colors duration-300">
                    {offer.title}
                  </h3>
                  <p className="text-[0.68rem] tracking-[0.06em] uppercase text-brand/60 mb-4">
                    {offer.subtitle}
                  </p>
                  <p className="text-[0.88rem] text-muted leading-[1.85] font-light mb-4 flex-1">
                    {offer.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {offer.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[0.62rem] tracking-[0.06em] uppercase text-brand/60 bg-brand-soft/30 px-3 py-1.5 font-medium rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <PremiumButton href={offer.href} variant="ghost">
                      {offer.cta}
                    </PremiumButton>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
