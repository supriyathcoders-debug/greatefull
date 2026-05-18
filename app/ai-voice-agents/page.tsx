"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// Intersection Observer Hook for Scroll Animations
function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1, ...options });

    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [options]);

  return [ref, isIntersecting] as const;
}

// FadeIn Component for staggered reveals
const FadeIn = ({ children, delay = 0, className = "", direction = "up" }: { children: React.ReactNode, delay?: number, className?: string, direction?: "up" | "left" | "right" }) => {
  const [ref, isVisible] = useIntersectionObserver();
  
  let transformInit = "translateY(40px)";
  if (direction === "left") transformInit = "translateX(-40px)";
  if (direction === "right") transformInit = "translateX(40px)";

  return (
    <div
      ref={ref as any}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0,0)" : transformInit,
        transition: `opacity 1s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 1s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
      className={className}
    >
      {children}
    </div>
  );
};

export default function AIVoiceAgentsPage() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  // Custom Cursor Logic
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const updateCursor = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, .interactive, input, textarea")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateCursor);
    window.addEventListener("mouseover", handleMouseOver);
    
    return () => {
      window.removeEventListener("mousemove", updateCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-brand selection:text-white pt-16">
      <div 
        className={`custom-cursor hidden md:block ${isHovering ? 'hover' : ''}`}
        style={{ left: cursorPos.x, top: cursorPos.y }}
      />
      <div className="cinematic-bg" />

      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center px-[6vw] pt-24 pb-24 relative overflow-hidden text-center z-10">
        {/* Floating Ambient Orbs */}
        <div className="absolute top-[10%] left-[15%] w-72 h-72 bg-brand/10 rounded-full blur-[100px] float" />
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-[#a1c4fd]/10 rounded-full blur-[120px] float" style={{ animationDelay: '-4s' }} />
        
        {/* AI Voice Ring Animation Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
          <svg width="600" height="600" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" stroke="url(#paint0_linear)" strokeWidth="0.5" strokeDasharray="4 4" className="animate-[spin_40s_linear_infinite]" />
            <circle cx="50" cy="50" r="35" stroke="url(#paint1_linear)" strokeWidth="0.5" strokeDasharray="2 6" className="animate-[spin_20s_linear_infinite_reverse]" />
            <circle cx="50" cy="50" r="25" stroke="var(--brand)" strokeWidth="0.5" className="animate-[pulse_4s_ease-in-out_infinite]" />
            <defs>
              <linearGradient id="paint0_linear" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                <stop stopColor="var(--brand)" />
                <stop offset="1" stopColor="var(--brand-secondary)" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="paint1_linear" x1="100" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
                <stop stopColor="var(--brand-tertiary)" />
                <stop offset="1" stopColor="var(--brand)" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative z-10 max-w-[840px] mx-auto">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-3 mb-10 justify-center">
              <span className="w-11 h-px bg-brand flex-shrink-0 animate-pulse"></span>
              <span className="text-[0.68rem] tracking-[0.24em] uppercase text-brand font-normal">AI Voice Agents & Automation</span>
              <span className="w-11 h-px bg-brand flex-shrink-0 animate-pulse"></span>
            </div>
          </FadeIn>
          
          <h1 className="font-heading text-[clamp(2.8rem,5.5vw,6rem)] font-semibold leading-[1.06] mb-8 title-reveal">
            <span style={{ animationDelay: '0.2s' }}>Stress Less.</span><br />
            <span style={{ animationDelay: '0.4s' }}><em className="italic text-gradient font-light">Scale Smarter.</em></span>
          </h1>
          
          <FadeIn delay={0.6}>
            <p className="max-w-[620px] mx-auto text-[1.05rem] font-light leading-[1.86] text-white/70 mb-12">
              We help exhausted executives streamline operations, eliminate wasted time, and scale revenue — without hiring more staff or working longer hours.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.8} className="flex items-center justify-center gap-4 flex-wrap mb-16">
            <a href="/pre-booking" className="interactive group relative overflow-hidden inline-block no-underline bg-white !text-[#000000] font-semibold text-[0.77rem] tracking-[0.12em] uppercase px-10 py-4 rounded-full transition-transform hover:scale-105">
              <span className="relative z-10">Book Free Strategy Session</span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand to-[#ff8a8a] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </a>
          </FadeIn>
          
          <FadeIn delay={1.0}>
            <div className="glass-card p-10 text-left max-w-2xl mx-auto glow-effect border-brand/20 relative">
               <span className="font-heading text-8xl text-brand/20 leading-none absolute -top-6 -left-2">"</span>
               <p className="font-light italic text-white/80 text-[1.05rem] leading-[1.8] mb-6 relative z-10">
                 Within 30 days, we cut time spent on paperwork and follow-up in half and increased our bookings by 40%. The system practically runs itself — it’s like having another team member without the extra overhead.
               </p>
               <div className="text-brand font-medium text-sm tracking-widest uppercase relative z-10">— Operations Director, Healthcare Clinic</div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-32 px-[6vw] relative z-10">
        <FadeIn>
          <div className="inline-flex items-center gap-2.5 text-[0.66rem] tracking-[0.24em] uppercase text-brand font-normal mb-5"><span className="w-7 h-px bg-brand"></span>The Problem</div>
          <h2 className="font-heading text-[clamp(2.5rem,4vw,4rem)] font-semibold leading-[1.12] mb-5">
            Most executives don’t fail because of bad ideas. <br/><em className="italic text-gradient">They fail because of...</em>
          </h2>
          <p className="text-[1.05rem] text-white/70 leading-[1.88] font-light max-w-[600px] mb-16">
            If you’re like most of our clients, you’re working harder than ever — but growth feels slower than it should.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FadeIn delay={0.1}>
            <div className="glass-card p-12 h-full relative overflow-hidden transition-all duration-500 hover:bg-white/5 hover:-translate-y-2 group glow-effect">
              <div className="text-4xl mb-6 float" style={{ animationDelay: '0s' }}>⏳</div>
              <h3 className="font-heading text-2xl font-semibold leading-tight mb-3 text-white">Messy systems that can’t scale</h3>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="glass-card p-12 h-full relative overflow-hidden transition-all duration-500 hover:bg-white/5 hover:-translate-y-2 group glow-effect">
              <div className="text-4xl mb-6 float" style={{ animationDelay: '1s' }}>📉</div>
              <h3 className="font-heading text-2xl font-semibold leading-tight mb-3 text-white">Manual follow-up that lets leads slip away</h3>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="glass-card p-12 h-full relative overflow-hidden transition-all duration-500 hover:bg-white/5 hover:-translate-y-2 group glow-effect">
              <div className="text-4xl mb-6 float" style={{ animationDelay: '2s' }}>⚙️</div>
              <h3 className="font-heading text-2xl font-semibold leading-tight mb-3 text-white">Too much operations, not enough growth</h3>
            </div>
          </FadeIn>
        </div>
        
        <FadeIn delay={0.5}>
          <div className="mt-16 text-[1.1rem] text-white/90 font-light max-w-3xl border-l-[3px] border-brand pl-8 py-2 italic">
            That’s where we come in. We help you build smart systems that run in the background so your business works — even when you’re not.
          </div>
        </FadeIn>
      </section>

      {/* The Solution */}
      <section className="py-32 px-[6vw] bg-black/20 relative z-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <FadeIn>
          <div className="inline-flex items-center gap-2.5 text-[0.66rem] tracking-[0.24em] uppercase text-brand font-normal mb-5"><span className="w-7 h-px bg-brand"></span>The Solution</div>
          <h2 className="font-heading text-[clamp(2.5rem,4vw,4rem)] font-semibold leading-[1.12] mb-16">We Can Help You <em className="italic text-gradient font-light">Even If...</em></h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FadeIn delay={0.1}>
            <div className="glass-card p-10 h-full flex flex-col items-start hover:bg-white/5 transition-colors group">
               <span className="text-brand mb-6 text-xl group-hover:scale-125 transition-transform">◆</span>
               <p className="text-[1.05rem] text-white/70 leading-relaxed font-light">You’re overwhelmed by repetitive admin tasks that eat up your time.</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="glass-card p-10 h-full flex flex-col items-start hover:bg-white/5 transition-colors group">
               <span className="text-brand mb-6 text-xl group-hover:scale-125 transition-transform">◆</span>
               <p className="text-[1.05rem] text-white/70 leading-relaxed font-light">Your leads are slipping through the cracks because follow-up is inconsistent.</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="glass-card p-10 h-full flex flex-col items-start hover:bg-white/5 transition-colors group">
               <span className="text-brand mb-6 text-xl group-hover:scale-125 transition-transform">◆</span>
               <p className="text-[1.05rem] text-white/70 leading-relaxed font-light">You’re stuck working in the business instead of on the business.</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="glass-card p-10 h-full flex flex-col items-start hover:bg-white/5 transition-colors group">
               <span className="text-brand mb-6 text-xl group-hover:scale-125 transition-transform">◆</span>
               <p className="text-[1.05rem] text-white/70 leading-relaxed font-light">You want to grow but can’t imagine adding more hours — or more staff.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Meet Your Expert */}
      <section className="py-32 px-[6vw] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-20 items-center">
          <FadeIn direction="left">
             <div className="inline-flex items-center gap-2.5 text-[0.66rem] tracking-[0.24em] uppercase text-brand font-normal mb-6"><span className="w-7 h-px bg-brand"></span>Meet Your Expert</div>
             <h2 className="font-heading text-[clamp(2.5rem,4vw,4rem)] font-semibold mb-8">Hi, I'm <span className="italic text-gradient">Andrea.</span></h2>
             <div className="space-y-6 text-white/70 font-light leading-[1.8] text-[1.05rem]">
               <p>For over 25 years I’ve helped businesses identify hidden revenue opportunities, eliminate inefficiencies, and create systems that run like clockwork.</p>
               <p>Like many of my clients, I know what it’s like to feel pulled in too many directions. Early in my career, I spent more time chasing leads and juggling low-value tasks than actually serving clients. That’s when I realized — growth at scale doesn’t come from working harder. It comes from building smarter systems.</p>
               <p>Today, I specialize in helping leaders:</p>
               <ul className="list-none space-y-3 mt-4 ml-2">
                 <li className="flex gap-4 items-center"><span className="text-brand text-xs">◆</span> Create simple, repeatable processes that free up their time</li>
                 <li className="flex gap-4 items-center"><span className="text-brand text-xs">◆</span> Put follow-up and scheduling on autopilot</li>
                 <li className="flex gap-4 items-center"><span className="text-brand text-xs">◆</span> Build businesses that scale without burning them out</li>
               </ul>
             </div>
             
             <a href="/pre-booking" className="interactive inline-block mt-12 text-[0.77rem] tracking-[0.15em] uppercase !text-[#000000] font-semibold bg-white px-10 py-4 rounded-full transition-transform hover:scale-105 hover:bg-brand">Let's Connect</a>
          </FadeIn>
          
          <FadeIn direction="right" delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="glass-card p-10 hover:bg-white/5 transition-colors glow-effect">
                 <h4 className="font-heading text-2xl font-medium text-white mb-4">System Setup & Automation</h4>
                 <p className="text-[0.9rem] text-white/60 font-light leading-[1.8]">Put repetitive tasks on autopilot so you and your team can focus on real growth.</p>
               </div>
               <div className="glass-card p-10 hover:bg-white/5 transition-colors glow-effect">
                 <h4 className="font-heading text-2xl font-medium text-white mb-4">Lead Management & Follow-Up</h4>
                 <p className="text-[0.9rem] text-white/60 font-light leading-[1.8]">Never lose another opportunity with automated tracking, reminders, and client touchpoints.</p>
               </div>
               <div className="glass-card p-10 hover:bg-white/5 transition-colors glow-effect">
                 <h4 className="font-heading text-2xl font-medium text-white mb-4">Client Onboarding Flows</h4>
                 <p className="text-[0.9rem] text-white/60 font-light leading-[1.8]">Deliver a smooth, professional first impression that builds trust from day one.</p>
               </div>
               <div className="glass-card p-10 hover:bg-white/5 transition-colors glow-effect">
                 <h4 className="font-heading text-2xl font-medium text-white mb-4">Booking Systems</h4>
                 <p className="text-[0.9rem] text-white/60 font-light leading-[1.8]">Make it effortless for clients to book time with you, no back-and-forth needed.</p>
               </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Scale Smarter CTA */}
      <section className="py-32 px-[6vw] relative z-10 text-center">
        <FadeIn>
          <div className="glass-card max-w-4xl mx-auto p-16 md:p-24 relative overflow-hidden glow-effect border-brand/20">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(232,163,101,0.1)_0%,transparent_70%)] pointer-events-none" />
            <h2 className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-semibold mb-8 relative z-10">
              Ready to <em className="italic text-gradient font-light">scale smarter?</em>
            </h2>
            <p className="text-[1.05rem] text-white/70 leading-relaxed font-light max-w-2xl mx-auto mb-12 relative z-10">
              Book your complimentary strategy call today to see how our certified AI consultants can transform your business.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <a href="/pre-booking" className="interactive inline-block bg-white !text-[#000000] font-semibold text-[0.77rem] tracking-[0.15em] uppercase px-10 py-5 rounded-full transition-transform hover:scale-105">Book My Strategy Call</a>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
