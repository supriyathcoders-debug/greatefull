"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

type CinematicShowcaseProps = {
  src: string;
  alt: string;
  href: string;
};

export function CinematicShowcase({ src, alt, href }: CinematicShowcaseProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current || !bgRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewH = window.innerHeight;
      if (rect.bottom < 0 || rect.top > viewH) return;
      const progress = (viewH - rect.top) / (viewH + rect.height);
      const y = (progress - 0.5) * 60;
      const scale = 1.06 + progress * 0.04;
      bgRef.current.style.transform = `scale(${scale}) translateY(${y}px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="cinematic-showcase">
      <div ref={bgRef} className="cinematic-showcase-bg">
        <Image src={src} alt={alt} fill priority={false} sizes="100vw" className="object-cover object-[55%_center]" />
      </div>
      <div className="cinematic-showcase-fade-top" aria-hidden="true" />
      <div className="cinematic-showcase-fade-bottom" aria-hidden="true" />
      <div className="cinematic-showcase-vignette" aria-hidden="true" />
      <div className="cinematic-showcase-scanlines" aria-hidden="true" />
      <div className="cinematic-showcase-shimmer" aria-hidden="true" />

      <Link
        href={href}
        className="cinematic-showcase-hit interactive"
        aria-label="Explore AI Voice Agents"
      >
        <span className="cinematic-showcase-cta">
          <span className="cinematic-showcase-cta-ring" />
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </span>
      </Link>
    </section>
  );
}

export function HeroBackgroundImage({
  src,
  alt,
  objectPosition = "object-[60%_center]",
  opacity = 0.45,
}: {
  src: string;
  alt: string;
  objectPosition?: string;
  opacity?: number;
}) {
  return (
    <div className="hero-bg-image" aria-hidden="true">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className={`object-cover ${objectPosition}`}
        style={{ opacity }}
      />
      <div className="hero-bg-image-mask" />
      <div className="hero-bg-image-glow" />
    </div>
  );
}

export function SectionBackgroundImage({
  src,
  objectPosition = "object-center",
  variant = "dark",
  imageOpacity,
}: {
  src: string;
  objectPosition?: string;
  variant?: "dark" | "light";
  imageOpacity?: number;
}) {
  const bgRef = useRef<HTMLDivElement>(null);
  const opacity = imageOpacity ?? (variant === "light" ? 0.62 : 0.4);

  useEffect(() => {
    const onScroll = () => {
      if (!bgRef.current) return;
      const section = bgRef.current.closest("section");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const viewH = window.innerHeight;
      if (rect.bottom < 0 || rect.top > viewH) return;
      const progress = (viewH - rect.top) / (viewH + rect.height);
      bgRef.current.style.transform = `scale(1.06) translateY(${(progress - 0.5) * 24}px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="section-bg-image" aria-hidden="true">
      <div ref={bgRef} className="section-bg-image-inner">
        <Image
          src={src}
          alt=""
          fill
          sizes="100vw"
          className={`object-cover ${objectPosition}`}
          style={{ opacity }}
        />
      </div>
      <div className={`section-bg-image-overlay ${variant === "light" ? "section-bg-image-overlay-light" : ""}`} />
      <div className="section-bg-image-glow" />
    </div>
  );
}
