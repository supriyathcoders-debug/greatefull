"use client";

import { PremiumButton } from "@/components/ui/premium-button";
import { BrandImage } from "@/components/ui/brand-image";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { BOOKING_URL } from "@/lib/constants";
import { IMAGES } from "@/lib/content/home";

const CHECK_ICON = (
  <svg className="w-5 h-5 fill-current text-brand" viewBox="0 0 20 20">
    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
  </svg>
);

const PAIN_POINTS = [
  "Your systems are messy or too manual",
  "You're wasting too much time doing things that don't generate revenue",
  "Sales opportunities keep slipping through the cracks",
  "Scaling feels too overwhelming (and expensive)",
];

const BENEFITS = [
  "Pinpoint the #1 bottleneck slowing your growth",
  "Get clarity on where to focus first for maximum impact",
  "Learn how the right AI-powered systems can save you hours every week",
  "Walk away with a clear, actionable plan to hit your next revenue milestone",
];

const INDUSTRIES = [
  {
    title: "B2B & DTC",
    desc: "Scale your revenue with AI-driven systems that streamline lead generation and optimize customer acquisition.",
  },
  {
    title: "Legal",
    desc: "Build compliant AI systems that automate intake, nurture leads, and manage client communications.",
  },
  {
    title: "Financial & Insurance",
    desc: "Drive consistent growth with intelligent content, automated lead scoring, and precision-targeted outreach.",
  },
];

const TESTIMONIALS = [
  {
    quote: "Within 30 days, my team's admin workload was cut in half — and I booked 3 new clients.",
    author: "Founder, Law Firm",
  },
  {
    quote: "My leads no longer slip away. The system follows up automatically and my calendar stays full.",
    author: "Managing Partner, Law Firm",
  },
  {
    quote: "For the first time in years, I feel like my business is running me instead of me running it.",
    author: "Owner, Insurance Agency",
  },
];

export default function PreBookingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden page-backdrop">
      {/* Hero */}
      <section className="relative min-h-[80dvh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] blob-gold opacity-20" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] blob-purple opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/30" />
        </div>
        <div className="relative z-10 w-full section-shell pt-32 pb-20">
          <StaggerReveal className="max-w-[800px]">
            <StaggerItem>
              <Eyebrow className="mb-8">Book a Strategy Call</Eyebrow>
            </StaggerItem>
            <StaggerItem>
              <h1 className="font-heading text-[clamp(2.4rem,5vw,4.5rem)] font-semibold leading-[1.08] mb-8">
                Unlock Your Next Level
                <br />
                of Growth —
                <br />
                <em className="italic text-brand font-light">In 30 Minutes or Less!</em>
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="max-w-[620px] text-base font-light leading-[1.86] text-muted mb-10">
                Book your complimentary strategy session and discover how to streamline your business, close more deals, and free up hours every week—using a proven blend of strategy, automation, and the right AI tools.
              </p>
            </StaggerItem>
            <StaggerItem>
              <PremiumButton href={BOOKING_URL} external>
                Schedule My Strategy Session
              </PremiumButton>
            </StaggerItem>
          </StaggerReveal>
        </div>
      </section>

      {/* Growth Graph Image */}
      <section className="pb-16 section-shell">
        <ScrollReveal className="max-w-[800px] mx-auto">
          <BrandImage
            src={IMAGES.agencyProfessionalWoman}
            alt="Growth strategy visualization"
            blob
            floating
          />
        </ScrollReveal>
      </section>

      {/* Pain Points */}
      <section className="py-24 section-shell relative section-noise section-divider-top">
        <div className="absolute right-0 top-1/3 w-[300px] h-[300px] blob-purple opacity-15 pointer-events-none" aria-hidden="true" />
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal className="relative">
            <BrandImage
              src={IMAGES.heroHumanSpark}
              alt="Business challenges"
              className="rounded-2xl"
            />
          </ScrollReveal>
          <StaggerReveal>
            <StaggerItem>
              <Eyebrow className="mb-4">The Challenge</Eyebrow>
              <SectionHeading className="mb-6">
                Working harder than ever,
                <br />
                <em className="italic text-brand font-light">but growth feels slower</em>
              </SectionHeading>
            </StaggerItem>
            <StaggerItem>
              <p className="text-muted font-light leading-relaxed mb-8">
                You know there&apos;s so much potential in your business, but the path forward isn&apos;t clear. It doesn&apos;t have to be this way.
              </p>
            </StaggerItem>
            <StaggerItem>
              <ul className="space-y-4">
                {PAIN_POINTS.map((point, i) => (
                  <li key={i} className="flex gap-4 items-start text-foreground">
                    <span className="flex-shrink-0 mt-0.5">{CHECK_ICON}</span>
                    <span className="text-sm font-light leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </StaggerItem>
            <StaggerItem>
              <div className="mt-8">
                <PremiumButton href={BOOKING_URL} external>
                  Schedule My Strategy Session
                </PremiumButton>
              </div>
            </StaggerItem>
          </StaggerReveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-28 section-shell text-center section-divider-bottom">
        <div className="absolute left-0 bottom-0 w-[350px] h-[350px] blob-gold opacity-10 pointer-events-none" aria-hidden="true" />
        <StaggerReveal>
          <StaggerItem>
            <Eyebrow className="mb-4 justify-center">What You&apos;ll Get</Eyebrow>
            <SectionHeading className="mb-16 text-center">
              In this complimentary strategy session,
              <br />
              <em className="italic text-brand font-light">I&apos;ll help you:</em>
            </SectionHeading>
          </StaggerItem>
        </StaggerReveal>
        <div className="max-w-[700px] mx-auto grid grid-cols-1 gap-5">
          {BENEFITS.map((benefit, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="card-glass p-5 text-left flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand/15 border border-brand/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-heading text-lg font-bold text-brand">{i + 1}</span>
                </div>
                <p className="text-sm font-light text-foreground leading-relaxed">{benefit}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="py-28 section-shell relative section-noise">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1.3fr_0.9fr] gap-16 items-center">
          <StaggerReveal className="order-2 lg:order-1">
            <StaggerItem>
              <Eyebrow className="mb-4">25+ Years of Experience</Eyebrow>
              <SectionHeading className="mb-6">
                Systems that run like
                <br />
                <em className="italic text-brand font-light">clockwork.</em>
              </SectionHeading>
            </StaggerItem>
            <StaggerItem>
              <div className="space-y-5 text-muted font-light leading-relaxed text-sm">
                <p>
                  My approach blends proven growth strategy with smart automation and AI tools—so you can scale without sacrificing your time, your energy, or your client experience.
                </p>
                <p>
                  Whether you&apos;re just trying to create consistency or you&apos;re ready to go after your next big revenue leap, this session will show you the most direct path forward.
                </p>
                <p className="text-foreground font-medium">
                  Every month you wait is another month stuck in the same cycle.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {["Lost deals", "Wasted hours", "Burnt-out teams", "Stalled revenue"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-muted font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand/60" />
                    {item}
                  </div>
                ))}
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="mt-8">
                <PremiumButton href={BOOKING_URL} external>
                  Book My Strategy Session
                </PremiumButton>
              </div>
            </StaggerItem>
          </StaggerReveal>
          <ScrollReveal className="order-1 lg:order-2">
            <BrandImage
              src={IMAGES.founderStrategicReflection}
              alt="Andrea — Founder & Strategist"
              blob
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Industries */}
      <section className="py-28 section-shell text-center section-divider-top">
        <StaggerReveal>
          <StaggerItem>
            <Eyebrow className="mb-4 justify-center">Who We Serve</Eyebrow>
            <SectionHeading className="mb-16 text-center">
              Industries We&apos;ve
              <br />
              <em className="italic text-brand font-light">Transformed</em>
            </SectionHeading>
          </StaggerItem>
        </StaggerReveal>
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5">
          {INDUSTRIES.map((industry, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="card-modern p-6 h-full text-center group">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand/20 to-brand/5 border border-brand/15 flex items-center justify-center mx-auto mb-4 group-hover:border-brand/30 transition-colors">
                  <span className="font-heading text-xl font-bold text-brand">{industry.title[0]}</span>
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">{industry.title}</h3>
                <p className="text-[0.72rem] text-muted font-light leading-relaxed">{industry.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 section-shell relative section-noise section-divider-top section-divider-bottom">
        <div className="absolute right-0 top-1/4 w-[300px] h-[300px] blob-purple opacity-15 pointer-events-none" aria-hidden="true" />
        <StaggerReveal>
          <StaggerItem>
            <Eyebrow className="mb-4 justify-center">Client Results</Eyebrow>
            <SectionHeading className="mb-16 text-center">
              What Our Clients
              <br />
              <em className="italic text-brand font-light">Are Saying</em>
            </SectionHeading>
          </StaggerItem>
        </StaggerReveal>
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="card-glass p-5 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-brand" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-foreground font-light leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-[0.72rem] text-muted/80 mt-4 pt-4 border-t border-border-subtle">
                  — {t.author}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 section-shell text-center">
        <StaggerReveal>
          <StaggerItem>
            <Eyebrow className="mb-4 justify-center">Ready to Grow?</Eyebrow>
            <SectionHeading className="mb-8 text-center">
              Don&apos;t Wait Another Month.
              <br />
              <em className="italic text-brand font-light">Book Your Free Strategy Session Today.</em>
            </SectionHeading>
          </StaggerItem>
          <StaggerItem>
            <PremiumButton href={BOOKING_URL} external>
              Book My Strategy Session
            </PremiumButton>
          </StaggerItem>
        </StaggerReveal>
      </section>
    </div>
  );
}
