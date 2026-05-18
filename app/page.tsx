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

export default function Home() {
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

      {/* 1. Hero Section */}
      <section id="hero" className="min-h-[90vh] flex items-center px-[6vw] pt-24 pb-24 relative overflow-hidden">
        {/* Floating Ambient Orbs */}
        <div className="absolute top-[10%] left-[15%] w-72 h-72 bg-brand/10 rounded-full blur-[100px] float" />
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-[#f47c7c]/10 rounded-full blur-[120px] float" style={{ animationDelay: '-4s' }} />

        <div className="relative z-10 max-w-[840px]">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-3 mb-10">
              <span className="w-11 h-px bg-brand flex-shrink-0 animate-pulse"></span>
              <span className="text-[0.68rem] tracking-[0.24em] uppercase text-brand font-normal">North American AI Marketing Consultancy · Est. 2022</span>
            </div>
          </FadeIn>
          
          <h1 className="font-heading text-[clamp(2.8rem,5.5vw,5.5rem)] font-semibold leading-[1.06] mb-8 title-reveal">
            <span style={{ animationDelay: '0.2s' }}>Scale Your Impact with</span><br />
            <span style={{ animationDelay: '0.4s' }}><em className="italic font-light text-gradient">AI-Powered Marketing</em></span><br/>
            <span style={{ animationDelay: '0.6s' }}>You Can Trust.</span>
          </h1>
          
          <FadeIn delay={0.8}>
            <p className="max-w-[560px] text-[1.05rem] font-light leading-[1.86] text-white/70 mb-12">
              Grateful Marketing™ combines cutting-edge artificial intelligence with our proprietary <strong className="text-white font-normal">Gratitude™ methodology</strong>. We help purpose-driven organizations build predictable growth systems—without losing their human touch.
            </p>
          </FadeIn>
          
          <FadeIn delay={1.0} className="flex items-center gap-5 flex-wrap mb-16">
            <a href="https://api.growthhub365.com/widget/booking/UCd9cjMN2XGBd1qvKuyS" className="interactive group relative overflow-hidden inline-block no-underline bg-white !text-[#000000] font-semibold text-[0.77rem] tracking-[0.12em] uppercase px-10 py-4 rounded-full transition-transform hover:scale-105">
              <span className="relative z-10">Book Your Strategy Session</span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand to-[#ff8a8a] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </a>
            <Link href="#services" className="interactive inline-block no-underline bg-transparent text-white font-normal text-[0.77rem] tracking-[0.12em] uppercase px-10 py-4 border border-white/20 rounded-full transition-all hover:border-brand hover:bg-white/5 hover:text-brand">
              See How We Work
            </Link>
          </FadeIn>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10">
            <FadeIn delay={1.2}>
              <div className="pt-2">
                <div className="font-heading text-4xl font-semibold text-gradient leading-none">25+</div>
                <div className="text-[0.66rem] text-white/50 tracking-[0.1em] uppercase mt-2 font-light max-w-[150px]">Years of Strategic Expertise</div>
              </div>
            </FadeIn>
            <FadeIn delay={1.3}>
              <div className="sm:border-l sm:border-white/10 sm:pl-8 pt-2">
                <div className="font-heading text-4xl font-semibold text-gradient leading-none">4</div>
                <div className="text-[0.66rem] text-white/50 tracking-[0.1em] uppercase mt-2 font-light max-w-[150px]">Core Pillars of Growth</div>
              </div>
            </FadeIn>
            <FadeIn delay={1.4}>
              <div className="border-l-0 lg:border-l lg:border-white/10 lg:pl-10 pt-2">
                <div className="font-heading text-4xl font-semibold leading-none text-[#ffe66d] float">🌍</div>
                <div className="text-[0.66rem] text-white/50 tracking-[0.1em] uppercase mt-2 font-light max-w-[180px]">Globally Trademarked Methodology</div>
              </div>
            </FadeIn>
            <FadeIn delay={1.5}>
              <div className="sm:border-l sm:border-white/10 sm:pl-8 lg:pl-10 pt-2">
                <div className="font-heading text-4xl font-semibold text-gradient leading-none">∞</div>
                <div className="text-[0.66rem] text-white/50 tracking-[0.1em] uppercase mt-2 font-light max-w-[150px]">Impact-Driven Results</div>
              </div>
            </FadeIn>
          </div>
        </div>
        
        <span className="absolute right-[4vw] bottom-[10vh] z-10 hidden md:block [writing-mode:vertical-rl] text-[0.6rem] tracking-[0.3em] uppercase text-brand/30 font-light float">Innovating · Creating · Leading</span>
      </section>

      {/* 2. Marquee */}
      <section className="border-y border-white/5 bg-white/[0.02] backdrop-blur-sm py-5 overflow-hidden rotate-[1deg] scale-105 my-10 relative z-20">
        <div className="marquee-container">
          <div className="marquee-content gap-12 px-6 items-center">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-12">
                <span className="text-[0.75rem] tracking-[0.2em] uppercase text-brand/80 font-normal">AI Business Consulting</span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand/40"></span>
                <span className="text-[0.75rem] tracking-[0.2em] uppercase text-brand/80 font-normal">Marketing Strategy & Deployment</span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand/40"></span>
                <span className="text-[0.75rem] tracking-[0.2em] uppercase text-brand/80 font-normal">AI Team Training & Empowerment</span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand/40"></span>
                <span className="text-[0.75rem] tracking-[0.2em] uppercase text-brand/80 font-normal">Gratitude™ Methodology</span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand/40"></span>
                <span className="text-[0.75rem] tracking-[0.2em] uppercase text-brand/80 font-normal">B2B · D2C · Service-Based</span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand/40"></span>
                <span className="text-[0.75rem] tracking-[0.2em] uppercase text-brand/80 font-normal">Certified AI Consultancy</span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand/40"></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Methodology */}
      <section id="methodology" className="py-32 px-[6vw] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-28 items-center">
          <FadeIn direction="left">
            <div className="glass-card relative overflow-hidden glow-effect">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand to-[#ff8a8a]"></div>
              <div className="p-10 pb-6 border-b border-white/5">
                <h3 className="font-heading text-3xl font-semibold">The <em className="italic text-gradient">Gratitude™</em> Framework</h3>
                <p className="text-[0.74rem] text-white/50 tracking-wide mt-2 font-light">Globally trademarked · Proprietary methodology</p>
              </div>
              
              <div className="px-10 py-6 text-[0.9rem] text-white/70 font-light leading-relaxed border-b border-white/5">
                Most agencies guess. We engineer. Our proprietary methodology ensures every AI integration and marketing campaign is built on data, driven by purpose, and designed for measurable ROI.
              </div>

              {[
                { l: 'G', t: 'Goal-Setting & Strategy', d: 'Align every AI initiative to meaningful, measurable business outcomes' },
                { l: 'R', t: 'Research & Insights', d: 'Uncover deep market intelligence powered by AI-driven analysis and data' },
                { l: 'A', t: 'Authentic Connection', d: 'Craft human-first messaging that builds genuine, lasting trust with your audience' },
                { l: 'T', t: 'Technology Integration', d: 'Seamlessly embed powerful AI tools into your existing workflows and culture' },
                { l: 'I', t: 'Iterate & Optimize', d: 'Drive continuous improvement through data-driven cycles and rapid experimentation' },
                { l: 'T', t: 'Team Empowerment', d: 'Train and uplift your people so they can confidently lead in an AI-first world' },
                { l: 'U', t: 'Uplift & Impact', d: 'Achieve sustainable growth that creates a positive impact for all your stakeholders' },
                { l: 'D', t: 'Deliver & Measure', d: 'Experience radical accountability through transparent reporting and real, tangible results' },
                { l: 'E', t: 'Evolve & Grow', d: 'Stay perpetually ahead of the AI curve — because standing still means falling behind' }
              ].map((item, i) => (
                <div key={item.l + item.t} className="flex items-start gap-5 px-10 py-4 border-b border-white/5 last:border-b-0 transition-colors hover:bg-white/5 group">
                  <span className="font-heading text-xl font-bold text-gradient min-w-5 leading-none pt-0.5 group-hover:scale-110 transition-transform">{item.l}</span>
                  <div>
                    <div className="text-sm font-semibold text-white mb-0.5">{item.t}</div>
                    <div className="text-[0.75rem] text-white/50 leading-relaxed font-light">{item.d}</div>
                  </div>
                </div>
              ))}
              
              <div className="px-10 py-5 bg-black/20 flex items-center justify-between">
                <span className="font-heading text-sm text-brand/60 italic">Gratitude™ · All rights reserved</span>
                <span className="text-[0.63rem] tracking-[0.14em] uppercase text-white/40 border border-white/10 px-2.5 py-1 rounded">Global Trademark</span>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="right">
            <div className="inline-flex items-center gap-2.5 text-[0.66rem] tracking-[0.24em] uppercase text-brand font-normal mb-5"><span className="w-7 h-px bg-brand"></span>About Grateful Marketing™</div>
            <h2 className="font-heading text-[clamp(2.1rem,4vw,3.5rem)] font-semibold leading-[1.12] mb-8">
              Where cutting-edge technology <br/><em className="italic text-gradient font-light">meets genuine purpose.</em>
            </h2>
            <div className="space-y-6">
              <p className="text-[1.05rem] text-white/70 leading-[1.9] font-light">Grateful Marketing™ is a <strong className="text-white font-medium">North American AI-powered digital marketing consultancy</strong> founded by Andrea — a strategic leader with over 25 years of experience across technology, business consulting, and digital marketing.</p>
              <p className="text-[1.05rem] text-white/70 leading-[1.9] font-light">We believe the most powerful marketing isn't just smart — it's <strong className="text-white font-medium">grateful</strong>. Grateful to customers. Grateful to communities. Driven by a genuine desire to do good in the world.</p>
              <p className="text-[1.05rem] text-white/70 leading-[1.9] font-light">Our globally trademarked <strong className="text-white font-medium">Gratitude™ methodology</strong> is more than a framework — it's a lens for building sustainable organizations that grow with intention, serve with excellence, and lead with integrity.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. Services */}
      <section id="services" className="py-32 px-[6vw] relative z-10 bg-black/20">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <FadeIn>
          <div className="inline-flex items-center gap-2.5 text-[0.66rem] tracking-[0.24em] uppercase text-brand font-normal mb-5"><span className="w-7 h-px bg-brand"></span>Our Services</div>
          <h2 className="font-heading text-[clamp(2.5rem,4vw,4rem)] font-semibold leading-[1.12] mb-6">Four pillars of <em className="italic text-gradient">AI-powered</em> growth.</h2>
          <p className="text-[1.05rem] text-white/70 leading-[1.88] font-light max-w-[650px] mb-20">Every engagement is designed to meet you exactly where you are. Whether you are just beginning your AI journey or you are ready to scale with full deployment and automation, we have the strategic framework to get you there.</p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FadeIn delay={0.1}>
            <div className="glass-card p-10 h-full relative overflow-hidden transition-all duration-500 hover:bg-white/[0.05] group glow-effect">
              <span className="font-heading text-8xl font-bold text-white/5 absolute -right-4 -top-4 leading-none transition-transform group-hover:scale-110">01</span>
              <div className="text-4xl mb-6 float" style={{ animationDelay: '0s' }}>🧠</div>
              <h3 className="font-heading text-2xl font-semibold leading-tight mb-4 text-white">AI Business Consulting</h3>
              <p className="text-sm text-white/60 leading-[1.82] font-light mb-8 relative z-10">Stop guessing about AI and start leveraging it as your competitive advantage. We audit your current landscape, identify high-value opportunities, and build a clear, actionable AI roadmap tailored to your specific goals and growth stage.</p>
              <div className="mt-auto pt-7 flex flex-wrap gap-2 relative z-10">
                <span className="text-[0.6rem] tracking-[0.1em] uppercase text-white/80 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">AI Readiness Audits</span>
                <span className="text-[0.6rem] tracking-[0.1em] uppercase text-white/80 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">Strategic Roadmaps</span>
                <span className="text-[0.6rem] tracking-[0.1em] uppercase text-white/80 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">ROI Modeling</span>
                <span className="text-[0.6rem] tracking-[0.1em] uppercase text-white/80 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">Change Management</span>
                <span className="text-[0.6rem] tracking-[0.1em] uppercase text-white/80 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">Competitive Analysis</span>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="glass-card p-10 h-full relative overflow-hidden transition-all duration-500 hover:bg-white/[0.05] group glow-effect">
              <span className="font-heading text-8xl font-bold text-white/5 absolute -right-4 -top-4 leading-none transition-transform group-hover:scale-110">02</span>
              <div className="text-4xl mb-6 float" style={{ animationDelay: '1s' }}>🚀</div>
              <h3 className="font-heading text-2xl font-semibold leading-tight mb-4 text-white">AI & Marketing Strategy & Deployment</h3>
              <p className="text-sm text-white/60 leading-[1.82] font-light mb-8 relative z-10">Turn your marketing into a predictable revenue engine. From insight to execution, we design, build, and deploy end-to-end AI-powered marketing systems that attract your ideal customers, convert them consistently, and scale your operations intelligently.</p>
              <div className="mt-auto pt-7 flex flex-wrap gap-2 relative z-10">
                <span className="text-[0.6rem] tracking-[0.1em] uppercase text-white/80 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">Smart Content Systems</span>
                <span className="text-[0.6rem] tracking-[0.1em] uppercase text-white/80 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">Automated Lead Generation</span>
                <span className="text-[0.6rem] tracking-[0.1em] uppercase text-white/80 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">AI Automation</span>
                <span className="text-[0.6rem] tracking-[0.1em] uppercase text-white/80 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">Campaign Management</span>
                <span className="text-[0.6rem] tracking-[0.1em] uppercase text-white/80 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">Seamless CRM Integration</span>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <div className="glass-card p-10 h-full relative overflow-hidden transition-all duration-500 hover:bg-white/[0.05] group glow-effect">
              <span className="font-heading text-8xl font-bold text-white/5 absolute -right-4 -top-4 leading-none transition-transform group-hover:scale-110">03</span>
              <div className="text-4xl mb-6 float" style={{ animationDelay: '2s' }}>🎓</div>
              <h3 className="font-heading text-2xl font-semibold leading-tight mb-4 text-white">AI Team Training & Empowerment</h3>
              <p className="text-sm text-white/60 leading-[1.82] font-light mb-8 relative z-10">Transform your team's hesitation into capability. Your people are your greatest asset. We design and deliver hands-on AI training programs that empower your team to confidently adopt AI tools, think in systems, and drive measurable results.</p>
              <div className="mt-auto pt-7 flex flex-wrap gap-2 relative z-10">
                <span className="text-[0.6rem] tracking-[0.1em] uppercase text-white/80 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">Interactive Workshops</span>
                <span className="text-[0.6rem] tracking-[0.1em] uppercase text-white/80 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">Hands-On Training</span>
                <span className="text-[0.6rem] tracking-[0.1em] uppercase text-white/80 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">AI Tool Adoption Strategies</span>
                <span className="text-[0.6rem] tracking-[0.1em] uppercase text-white/80 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">Ongoing Support</span>
                <span className="text-[0.6rem] tracking-[0.1em] uppercase text-white/80 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">Custom Curricula</span>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <div className="glass-card p-10 h-full relative overflow-hidden transition-all duration-500 hover:bg-white/[0.05] group glow-effect border-brand/30">
              <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent z-0 pointer-events-none" />
              <span className="font-heading text-8xl font-bold text-brand/10 absolute -right-4 -top-4 leading-none transition-transform group-hover:scale-110">04</span>
              <div className="text-4xl mb-6 float relative z-10" style={{ animationDelay: '3s' }}>🎙️</div>
              <h3 className="font-heading text-2xl font-semibold leading-tight mb-4 text-brand relative z-10">AI Voice Agents</h3>
              <p className="text-sm text-white/60 leading-[1.82] font-light mb-8 relative z-10">24/7 voice automation to turn missed calls into booked opportunities. Capture, qualify, and convert your leads instantly around the clock without scaling your headcount.</p>
              <div className="mt-auto pt-4 relative z-10">
                <a href="/ai-voice-agents" className="interactive inline-block text-[0.7rem] uppercase tracking-[0.1em] !text-[#000000] bg-brand px-6 py-2.5 rounded-full transition-transform hover:scale-105 font-medium">Learn More</a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 5. Funnel / Choose Your Next Step */}
      <section id="funnel" className="py-32 px-[6vw] overflow-hidden relative z-10">
        <FadeIn>
          <div className="glass-card max-w-[900px] mx-auto text-center p-16 relative glow-effect border-brand/20">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(232,163,101,0.1)_0%,transparent_70%)] pointer-events-none" />
            <h3 className="font-heading text-[3rem] font-bold text-gradient mb-6 relative z-10">Choose Your Next Step</h3>
            <p className="text-white/70 text-lg font-light mb-10 relative z-10 max-w-2xl mx-auto">Enter the conversion flow that best fits your business stage.</p>
            <div className="flex flex-wrap justify-center gap-5 relative z-10">
              <a href="/ai-revenue-audit" className="interactive inline-block !text-[#000000] bg-white font-semibold text-[0.75rem] tracking-[0.12em] uppercase px-8 py-4 rounded-full transition-transform hover:-translate-y-1">Get Your AI Revenue Audit</a>
              <a href="https://app.growthhub365.com/v2/preview/QAuss4a9CGC8EExSO5WE" className="interactive inline-block text-white border border-white/20 bg-white/5 font-semibold text-[0.75rem] tracking-[0.12em] uppercase px-8 py-4 rounded-full transition-all hover:-translate-y-1 hover:bg-white/10">Get Your AI Employee Demo</a>
              <a href="https://api.growthhub365.com/widget/booking/UCd9cjMN2XGBd1qvKuyS" className="interactive inline-block text-white border border-brand/40 bg-brand/10 font-semibold text-[0.75rem] tracking-[0.12em] uppercase px-8 py-4 rounded-full transition-all hover:-translate-y-1 hover:bg-brand hover:!text-[#000000] hover:border-brand">Book a Strategy Call</a>
            </div>
          </div>
        </FadeIn>
      </section>
      
      {/* 6. Clients / Who We Serve */}
      <section id="clients" className="py-32 px-[6vw] relative z-10">
        <FadeIn>
          <div className="inline-flex items-center gap-2.5 text-[0.66rem] tracking-[0.24em] uppercase text-brand font-normal mb-5"><span className="w-7 h-px bg-brand"></span>Who We Serve</div>
          <h2 className="font-heading text-[clamp(2.5rem,4vw,4rem)] font-semibold leading-[1.12] mb-6">Built for organizations<br /><span className="font-light">ready to lead <em className="italic text-gradient">with trust.</em></span></h2>
          <p className="text-[1.05rem] text-white/70 leading-[1.88] font-light max-w-[650px] mb-20">We partner with purpose-driven organizations across highly regulated and trust-dependent sectors. When compliance, privacy, and authentic connection are non-negotiable, we build the intelligent systems that fuel your lasting growth.</p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { i: '🏢', t: 'B2B & Professional Services', d: 'Attract better clients and close deals more efficiently. We build AI-powered marketing systems that generate leads and nurture your prospects on autopilot.' },
            { i: '🛍️', t: 'D2C Brands', d: 'Cut through the noise and build real relationships. We craft AI-driven strategies that create authentic customer experiences and maximize lifetime value.' },
            { i: '⚖️', t: 'Legal', d: 'Scale your practice without increasing your overhead. We build compliant AI systems that automate intake, nurture leads, and manage client communications while maintaining the highest standards of professional trust.' },
            { i: '📈', t: 'Financial', d: 'Drive consistent growth in a highly regulated environment. We help financial advisors and firms build authority through intelligent content, automated lead scoring, and precision-targeted outreach.' },
            { i: '🛡️', t: 'Insurance', d: 'Turn your reputation into a predictable revenue engine. Our AI-powered systems help you capture leads 24/7, nurture prospect relationships, and stay top-of-mind with your existing client base.' },
            { i: '⚙️', t: 'Service-Based Businesses', d: 'Turn your reputation into revenue. We help local specialists and growing service companies build a consistent online presence and generate steady inbound leads.' }
          ].map((client, i) => (
            <FadeIn key={client.t} delay={i * 0.1}>
              <div className="glass-card p-10 h-full transition-all duration-300 hover:bg-white/5 hover:-translate-y-2 glow-effect">
                <div className="text-4xl mb-6 float" style={{ animationDelay: `${i * 0.5}s` }}>{client.i}</div>
                <h3 className="font-heading text-2xl font-semibold mb-4 text-white">{client.t}</h3>
                <p className="text-sm text-white/60 leading-[1.82] font-light">{client.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 7. Why Grateful Marketing */}
      <section id="why" className="py-32 px-[6vw] bg-black/20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-28 items-start">
          <div>
            <FadeIn>
              <div className="inline-flex items-center gap-2.5 text-[0.66rem] tracking-[0.24em] uppercase text-brand font-normal mb-5"><span className="w-7 h-px bg-brand"></span>Why Grateful Marketing™</div>
              <h2 className="font-heading text-[clamp(2.5rem,4vw,4rem)] font-semibold leading-[1.12] mb-12">The difference is in<br /><span className="font-light">the <em className="italic text-gradient">approach.</em></span></h2>
            </FadeIn>
            <ul className="list-none space-y-2">
              {[
                { n: '01', t: 'Proprietary Gratitude™ System', d: "Our globally trademarked methodology wasn't borrowed from a textbook. It was built over 25+ years of real-world results, grounded in the philosophy that technology and humanity belong together." },
                { n: '02', t: 'Founder-Led, Always', d: "You work directly with Andrea — a certified AI consultant and senior strategist. No junior handoffs, no account managers. Just direct, experienced thinking applied to your business." },
                { n: '03', t: 'AI-First, Human-Centred', d: "We don't just use AI tools — we think in AI systems. Every strategy scales intelligently while keeping authentic human connection at its core." },
                { n: '04', t: 'Regulated Industry Depth', d: "We bring particular expertise to legal, financial, and insurance sectors — where trust, compliance, and precision are absolute requirements." },
                { n: '05', t: 'Results Over Hours', d: "We measure success by your growth, not by time spent. Every engagement is built around tangible outcomes: more leads, better conversions, stronger teams, and measurable ROI." }
              ].map((item, i) => (
                <FadeIn key={item.n} delay={i * 0.1}>
                  <li className="glass-card p-6 flex gap-7 items-start hover:bg-white/5 transition-colors group">
                    <span className="font-heading text-xl text-brand min-w-8 pt-0.5 italic group-hover:scale-125 transition-transform">{item.n}</span>
                    <div>
                      <h4 className="text-[1.05rem] font-semibold mb-2 text-white">{item.t}</h4>
                      <p className="text-[0.9rem] text-white/60 leading-[1.78] font-light">{item.d}</p>
                    </div>
                  </li>
                </FadeIn>
              ))}
            </ul>
          </div>
          <FadeIn direction="right" delay={0.3}>
            <div className="glass-card p-12 relative overflow-hidden glow-effect border-brand/20 mt-10 lg:mt-32">
              <div className="absolute bottom-0 right-0 w-[60%] h-[60%] bg-brand/10 blur-[60px] rounded-full pointer-events-none"></div>
              <span className="font-heading text-8xl text-brand/20 leading-none block mb-2 relative z-10">"</span>
              <p className="font-heading text-2xl italic leading-[1.6] text-white mb-10 relative z-10">
                The future of marketing isn't choosing between artificial intelligence and authentic humanity — it's understanding that the most powerful AI strategies are built on a foundation of genuine gratitude for the people you have the privilege of serving.
              </p>
              <div className="flex items-center gap-5 relative z-10">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand to-brand-secondary flex items-center justify-center text-xl !text-[#000000] shadow-lg shadow-brand/20">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
                </div>
                <div>
                  <div className="text-base font-semibold text-white tracking-wide">Andrea</div>
                  <div className="text-[0.75rem] text-white/50 mt-1 font-light uppercase tracking-widest">Founder & CEO, Grateful Marketing™</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 8. Platform */}
      <section id="platform" className="py-32 px-[6vw] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <FadeIn direction="left">
            <div className="glass-card p-12 relative overflow-hidden glow-effect">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand to-transparent"></div>
              <h3 className="font-heading text-2xl font-semibold mb-8 text-white">What AI-Powered Marketing Delivers for You</h3>
              <ul className="list-none space-y-4">
                {[
                  "Personalized content at scale — Maintain a consistent brand voice across every channel, generated in a fraction of the time.",
                  "Intelligent lead scoring and nurturing — Identify your best prospects and move them through your funnel automatically.",
                  "Predictive campaign optimization — Continuously improve your performance based on real-time data signals.",
                  "AI-powered reputation management — Automate client communication flows that build trust on autopilot.",
                  "Automated reporting dashboards — Gain instant visibility into the metrics that are actually driving your growth.",
                  "North American data residency compliance — Enjoy privacy-first design, specifically tailored for legal, financial, and insurance clients."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 pb-4 border-b border-white/5 last:border-0 last:pb-0 text-[0.95rem] text-white/70 font-light leading-relaxed">
                    <span className="text-brand flex-shrink-0 text-sm mt-1">◆</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          
          <FadeIn direction="right" delay={0.2}>
            <div className="inline-flex items-center gap-2.5 text-[0.66rem] tracking-[0.24em] uppercase text-brand font-normal mb-5"><span className="w-7 h-px bg-brand"></span>The AI Platform</div>
            <h2 className="font-heading text-[clamp(2.5rem,4vw,4rem)] font-semibold leading-[1.12] mb-6">Powerful <em className="italic text-gradient">tools.</em><br /><span className="font-light">Thoughtful deployment.</span></h2>
            <p className="text-[1.05rem] text-white/70 leading-[1.88] font-light max-w-[580px] mb-12">We deploy AI marketing through our proprietary, all-in-one AI platform engineered for results, featuring the North American data residency compliance that legal and financial clients require. All client data is handled with the highest standards of privacy and security.</p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-5 glass-card p-6 hover:bg-white/5 transition-colors group">
                <span className="text-3xl group-hover:scale-110 transition-transform">🤖</span>
                <div>
                  <strong className="block text-[0.95rem] font-semibold text-white mb-1">Proprietary AI Platform</strong>
                  <span className="text-[0.8rem] text-white/50 font-light">AI-powered all-in-one platform · CRM · Automation · Content · Analytics</span>
                </div>
              </div>
              <div className="flex items-center gap-5 glass-card p-6 hover:bg-white/5 transition-colors group">
                <span className="text-3xl group-hover:scale-110 transition-transform">🌎</span>
                <div>
                  <strong className="block text-[0.95rem] font-semibold text-white mb-1">North American Data Residency</strong>
                  <span className="text-[0.8rem] text-white/50 font-light">Secure data storage · Fully compliant · Ideal for legal and financial industries</span>
                </div>
              </div>
              <div className="flex items-center gap-5 glass-card p-6 hover:bg-white/5 transition-colors group">
                <span className="text-3xl group-hover:scale-110 transition-transform">🎓</span>
                <div>
                  <strong className="block text-[0.95rem] font-semibold text-white mb-1">Certified AI Consultancy</strong>
                  <span className="text-[0.8rem] text-white/50 font-light">Certified AI Business Consultant · Trained on the latest tools, strategies, and methodologies</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
