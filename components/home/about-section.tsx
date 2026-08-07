"use client";

import { BrandImage } from "@/components/ui/brand-image";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { Marquee } from "@/components/ui/marquee";
import { ABOUT, IMAGES } from "@/lib/content/home";

export function AboutSection() {
  return (
    <section id="about" className="py-28 section-shell bg-brand-soft/30">
      <div className="max-w-[1100px] mx-auto">
        {/* Main About Block */}
        <div className="max-w-[800px] mx-auto text-center mb-24">
          <StaggerReveal>
            <StaggerItem>
              <Eyebrow className="mb-5 justify-center">{ABOUT.eyebrow}</Eyebrow>
              <SectionHeading className="mb-8 justify-center text-center">
                {ABOUT.heading}{" "}
                <em className="italic text-brand font-light">{ABOUT.headingEm}</em>
              </SectionHeading>
            </StaggerItem>
            {ABOUT.paragraphs.map((p) => (
              <StaggerItem key={p.slice(0, 30)}>
                <p className="text-[1rem] text-muted leading-[1.9] font-light mb-5">
                  {p}
                </p>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>

        {/* Meet Your Expert Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <StaggerReveal className="order-1">
            <StaggerItem>
              <BrandImage
                src={IMAGES.agencyProfessionalWoman}
                alt="Meet Your Expert — Andrea"
                className="max-w-[480px] mx-auto lg:mr-auto"
              />
            </StaggerItem>
          </StaggerReveal>

          <StaggerReveal className="order-2">
            <StaggerItem>
              <p className="text-[0.75rem] font-semibold tracking-[0.15em] uppercase text-brand mb-4 flex items-center gap-2">
                <span className="w-4 h-px bg-brand" />
                {ABOUT.expertHeading}
              </p>
              <p className="text-[0.95rem] text-foreground/90 font-medium leading-[1.8] mb-4">
                {ABOUT.expertBio}
              </p>
              <p className="text-[0.93rem] text-muted leading-[1.8] font-light mb-4">
                {ABOUT.expertEnterprise}
              </p>
              <p className="text-[0.93rem] text-muted leading-[1.8] font-light italic border-l-2 border-brand/30 pl-4 mt-6">
                {ABOUT.expertCredential}
              </p>
            </StaggerItem>
          </StaggerReveal>
        </div>
      </div>

      {/* Meet Your Expert Image Slider - Full Width */}
      <div className="mt-28 w-full overflow-hidden">
        <StaggerReveal>
          <StaggerItem>
            <Marquee speed={45} className="py-8 [mask-image:none] [-webkit-mask-image:none]">
              {[1, 4].map((num) => (
                <div key={num} className="h-[220px] md:h-[280px] lg:h-[320px] shrink-0 relative mx-6 lg:mx-10 group flex items-center justify-center">
                  <img
                    src={`/${num}.jpeg`}
                    alt={`Grateful Marketing Credential ${num}`}
                    className="h-full w-auto object-contain transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_20px_40px_rgba(200,169,81,0.15)] drop-shadow-xl"
                  />
                </div>
              ))}
            </Marquee>
          </StaggerItem>
        </StaggerReveal>
      </div>
    </section>
  );
}
