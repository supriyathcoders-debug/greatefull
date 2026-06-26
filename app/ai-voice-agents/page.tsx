"use client";

import { motion } from "framer-motion";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { BrandImage } from "@/components/ui/brand-image";
import { PremiumButton } from "@/components/ui/premium-button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { BOOKING_URL, IMAGES } from "@/lib/constants";

export default function AIVoiceAgentsPage() {
  return (
    <div className="overflow-x-hidden pt-16">
      {/* Hero — split layout, navy/gold brand */}
      <section className="relative min-h-[85vh] flex items-center section-shell pt-28 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_65%_50%_at_78%_42%,rgba(212,175,55,0.07)_0%,transparent_65%),radial-gradient(ellipse_40%_55%_at_4%_88%,rgba(100,80,180,0.06)_0%,transparent_58%)]"
          aria-hidden="true"
        />
        <div className="absolute inset-0 z-0 hero-grid" aria-hidden="true" />

        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Eyebrow className="mb-8">AI Voice Agents & Automation</Eyebrow>
            <h1 className="font-heading text-[clamp(2.4rem,5vw,4.5rem)] font-semibold leading-[1.06] mb-8">
              Human-first service.{" "}
              <span className="text-gold-gradient italic font-light">
                AI-powered availability.
              </span>
            </h1>
            <p className="max-w-[540px] text-base font-light leading-[1.86] text-muted mb-10">
              Turn missed calls into booked opportunities. Our AI voice agents
              capture, qualify, and convert leads 24/7 — while your team focuses
              on the relationships that matter most.
            </p>
            <div className="flex flex-wrap gap-5 mb-12">
              <PremiumButton href={BOOKING_URL} external>
                Book Free Strategy Session
              </PremiumButton>
              <PremiumButton href="/#services" variant="secondary">
                All Services
              </PremiumButton>
            </div>
            <blockquote className="border border-brand/20 bg-brand-soft/60 p-6 max-w-lg">
              <p className="font-light italic text-muted text-sm leading-relaxed mb-4">
                &ldquo;Within 30 days, we cut time spent on follow-up in half
                and increased bookings by 40%. The system practically runs
                itself.&rdquo;
              </p>
              <footer className="text-brand text-xs tracking-[0.1em] uppercase">
                — Operations Director, Healthcare Clinic
              </footer>
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <BrandImage
              src={IMAGES.voiceAgentsHero}
              alt="AI voice agents — 24/7 lead capture and appointment booking"
            />
          </motion.div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-28 section-shell">
        <ScrollReveal>
          <Eyebrow className="mb-5">The Problem</Eyebrow>
          <SectionHeading className="mb-5">
            Most executives don&apos;t fail because of bad ideas.{" "}
            <em className="italic text-brand font-light">They fail because of...</em>
          </SectionHeading>
          <p className="text-base text-muted leading-[1.88] font-light max-w-[600px] mb-12">
            If you&apos;re working harder than ever but growth feels slower than
            it should, the bottleneck is often operational — not strategic.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border-subtle mb-12">
          {[
            {
              title: "Messy systems that can't scale",
              desc: "Manual processes break down as volume increases.",
            },
            {
              title: "Manual follow-up that lets leads slip",
              desc: "Inconsistent outreach means lost revenue every week.",
            },
            {
              title: "Too much operations, not enough growth",
              desc: "Your best people are stuck in admin instead of strategy.",
            },
          ].map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <article className="bg-background p-10 group relative overflow-hidden h-full border border-border-subtle hover:bg-brand/5 transition-colors">
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-brand transition-all duration-500 group-hover:w-full" />
                <h3 className="font-heading text-xl font-semibold leading-tight mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted font-light leading-relaxed">
                  {item.desc}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.1}>
          <BrandImage
            src={IMAGES.aiPartnership}
            alt="The AI partnership — trusted automation built on human connection"
          />
        </ScrollReveal>
      </section>

      {/* Solution */}
      <section className="py-28 section-shell bg-brand-soft/40">
        <ScrollReveal>
          <Eyebrow className="mb-5">The Solution</Eyebrow>
          <SectionHeading className="mb-12">
            We can help you{" "}
            <em className="italic text-brand font-light">even if...</em>
          </SectionHeading>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border-subtle">
          {[
            "You're overwhelmed by repetitive admin tasks that eat up your time.",
            "Your leads are slipping through the cracks because follow-up is inconsistent.",
            "You're stuck working in the business instead of on the business.",
            "You want to grow but can't imagine adding more hours — or more staff.",
          ].map((text, i) => (
            <ScrollReveal key={text} delay={i * 0.07}>
              <article className="bg-background p-10 flex flex-col items-start hover:bg-brand/5 transition h-full border border-border-subtle">
                <span className="text-brand mb-4 text-sm">◆</span>
                <p className="text-[0.93rem] text-muted leading-relaxed font-light">
                  {text}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Andrea + services */}
      <section className="py-28 section-shell">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-[1300px] mx-auto">
          <ScrollReveal>
            <BrandImage
              src={IMAGES.founderReflection}
              alt="Andrea — certified AI consultant and founder of Grateful Marketing"
              className="mb-8"
            />
            <Eyebrow className="mb-5">Meet Your Expert</Eyebrow>
            <h2 className="font-heading text-4xl font-semibold mb-6">
              Hi, I&apos;m <span className="italic text-brand">Andrea.</span>
            </h2>
            <div className="space-y-4 text-muted font-light leading-[1.8]">
              <p>
                For over 25 years I&apos;ve helped businesses identify hidden
                revenue opportunities, eliminate inefficiencies, and create
                systems that run like clockwork.
              </p>
              <p>
                Today, I specialize in helping leaders create repeatable
                processes, put follow-up on autopilot, and build businesses that
                scale without burning out.
              </p>
            </div>
            <div className="mt-8">
              <PremiumButton href={BOOKING_URL} external variant="ghost">
                Let&apos;s Connect
              </PremiumButton>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border-subtle">
            {[
              {
                title: "System Setup & Automation",
                desc: "Put repetitive tasks on autopilot so your team can focus on real growth.",
              },
              {
                title: "Lead Management & Follow-Up",
                desc: "Never lose another opportunity with automated tracking and touchpoints.",
              },
              {
                title: "Client Onboarding Flows",
                desc: "Deliver a smooth, professional first impression from day one.",
              },
              {
                title: "AI Voice Agents",
                desc: "24/7 voice automation that captures and converts leads around the clock.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.07}>
                <article className="bg-brand-soft/60 p-8 h-full border border-border-subtle hover:bg-brand/10 transition-colors">
                  <h4 className="font-heading text-lg font-medium text-brand mb-2">
                    {item.title}
                  </h4>
                  <p className="text-[0.8rem] text-muted font-light leading-relaxed">
                    {item.desc}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 section-shell bg-brand-soft/30">
        <ScrollReveal>
          <div className="max-w-[800px] mx-auto text-center">
            <SectionHeading className="mb-6">
              Ready to scale{" "}
              <em className="italic text-brand font-light">smarter?</em>
            </SectionHeading>
            <p className="text-base text-muted leading-relaxed font-light mb-10">
              Book your complimentary strategy call to see how our certified AI
              consultants can transform your business with human-first voice
              automation.
            </p>
            <PremiumButton href={BOOKING_URL} external>
              Book My Strategy Call
            </PremiumButton>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
