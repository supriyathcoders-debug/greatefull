import type { Metadata } from "next";
import Link from "next/link";
import { getOffersInOrder } from "@/lib/content/offers";
import { BOOKING_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Five human-first AI offers from Grateful Marketing™ — in official funnel order.",
};

export default function ServicesPage() {
  const offers = getOffersInOrder();

  return (
    <div className="overflow-x-hidden page-backdrop">
      <section className="section-shell pt-28 pb-16">
        <p className="inline-flex items-center gap-2.5 text-[0.66rem] tracking-[0.24em] uppercase text-brand font-normal mb-5">
          <span className="w-7 h-px bg-brand" aria-hidden="true" />
          Five Offers
        </p>
        <h1 className="font-heading text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1.1] mb-6">
          Human First.{" "}
          <em className="italic text-brand font-light">AI Empowered.</em>
        </h1>
        <p className="max-w-[640px] text-base text-muted font-light leading-[1.86]">
          Each offer maps to a step in your AI journey. Order is intentional — start
          with the growth retainer, then voice, build, team intensive, and licensing.
        </p>
      </section>

      <section className="section-shell pb-28">
        <div className="max-w-[1100px] mx-auto flex flex-col gap-8">
          {offers.map((offer) => (
            <article
              key={offer.id}
              id={offer.id}
              className="card-modern p-8 md:p-10 scroll-mt-28"
            >
              <div className="flex flex-wrap items-baseline gap-3 mb-2">
                <span className="font-heading text-sm text-brand/50">{offer.number}</span>
                <h2 className="font-heading text-[clamp(1.4rem,3vw,2rem)] font-semibold">
                  {offer.title}
                </h2>
              </div>
              <p className="text-[0.72rem] tracking-[0.08em] uppercase text-brand/70 mb-4">
                {offer.subtitle}
              </p>
              <p className="text-sm text-muted font-light leading-[1.85] mb-6 max-w-[720px]">
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
              <Link
                href={offer.href ?? BOOKING_URL}
                className="text-[0.77rem] font-semibold tracking-[0.12em] uppercase text-brand hover:underline"
              >
                {offer.cta} →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
