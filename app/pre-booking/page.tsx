"use client";

import { useEffect, useRef, useState } from "react";

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

export default function PreBookingPage() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  const formUrl = "https://api.growthhub365.com/widget/booking/UCd9cjMN2XGBd1qvKuyS";

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
    <div className="relative min-h-screen selection:bg-brand selection:text-white pt-16 overflow-x-hidden">
      <div 
        className={`custom-cursor hidden md:block ${isHovering ? 'hover' : ''}`}
        style={{ left: cursorPos.x, top: cursorPos.y }}
      />
      <div className="cinematic-bg" />

      {/* SECTION 1: HERO */}
      <section className="py-24 px-[6vw] text-center relative overflow-hidden z-10 min-h-[90vh] flex flex-col justify-center">
        {/* Floating Ambient Orbs */}
        <div className="absolute top-[5%] left-[20%] w-72 h-72 bg-brand/10 rounded-full blur-[100px] float" />
        <div className="absolute bottom-[10%] right-[15%] w-96 h-96 bg-[#a1c4fd]/10 rounded-full blur-[120px] float" style={{ animationDelay: '-4s' }} />

        <div className="max-w-[1170px] mx-auto space-y-10 relative z-10">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-3 justify-center mb-6">
              <span className="w-11 h-px bg-brand flex-shrink-0"></span>
              <span className="text-[0.68rem] tracking-[0.24em] uppercase text-brand font-normal">Strategy Session</span>
              <span className="w-11 h-px bg-brand flex-shrink-0"></span>
            </div>
            <h1 className="font-heading text-[clamp(2.5rem,5.5vw,5.5rem)] font-bold text-white leading-[1.1] mb-6 title-reveal">
              <span style={{ animationDelay: '0.2s' }}>Unlock Your Next Level</span> <br />
              <span style={{ animationDelay: '0.4s' }}>of Growth — </span><br />
              <span style={{ animationDelay: '0.6s' }}><em className="italic text-gradient font-light">in 30 Minutes or Less!</em></span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.8}>
            <p className="max-w-3xl mx-auto text-[1.15rem] font-light text-white/80 leading-[1.8]">
              Book your complimentary strategy session and discover how to streamline your business, close more deals, and free up hours every week—using a proven blend of strategy, automation, and the right AI tools.
            </p>
          </FadeIn>

          <FadeIn delay={1.0} className="pt-10 flex justify-center">
            <div className="relative group perspective-1000">
              <div className="absolute inset-0 bg-brand/20 blur-3xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
              <img 
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/zUZd380lxhqjQgVX8jRh/media/47981b93-3931-445b-bf43-5777f8a88470.png" 
                alt="Growth Graph" 
                className="relative h-[250px] sm:h-[400px] w-auto object-contain float drop-shadow-2xl hover:scale-105 transition-transform duration-700"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 2: THE PROBLEM */}
      <section className="relative z-10 py-32 px-[6vw]">
        <div className="absolute inset-0 bg-white/5 skew-y-[-2deg] origin-top-left -z-10"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-[1400px] mx-auto">
          <FadeIn direction="left" className="relative min-h-[400px] lg:min-h-[600px] rounded-3xl overflow-hidden glass-card p-2 group">
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none"></div>
             <div 
               className="w-full h-full bg-cover bg-center rounded-2xl transition-transform duration-1000 group-hover:scale-105"
               style={{ 
                 backgroundImage: 'url(https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/zUZd380lxhqjQgVX8jRh/media/d7f8f960-e0e4-469d-aeb7-b0fae472de4f.jpeg)',
                 objectPosition: '60%'
               }}
             />
          </FadeIn>
          
          <FadeIn direction="right" delay={0.2} className="flex flex-col justify-center space-y-8">
            <div className="inline-flex items-center gap-2.5 text-[0.66rem] tracking-[0.24em] uppercase text-brand font-normal"><span className="w-7 h-px bg-brand"></span>The Reality</div>
            <h2 className="font-heading text-[clamp(2.5rem,3.5vw,3.5rem)] font-bold text-white leading-[1.15]">
              If you’re like most [consultant target audience], you’re working harder than ever — <br /><br /><em className="italic text-gradient font-light">but growth feels slower than it should.</em>
            </h2>
            
            <p className="text-[1.1rem] font-light text-white/80">You know there’s so much potential in your business, but:</p>
            
            <ul className="space-y-4 pt-2">
              {[
                "Your systems are messy or too manual",
                "You’re wasting too much time doing things that don’t generate revenue",
                "Sales opportunities keep slipping through the cracks",
                "Scaling feels too overwhelming (and expensive)"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start text-[1.05rem] text-white/70 font-light">
                  <span className="text-brand flex-shrink-0 mt-1">◆</span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-[1.1rem] font-medium text-white italic pt-4">It doesn’t have to be this way.</p>
            
            <div className="pt-6">
              <a 
                href={formUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="interactive inline-block bg-white !text-[#000000] font-semibold text-[0.77rem] tracking-[0.15em] uppercase px-10 py-5 rounded-full transition-transform hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
              >
                SCHEDULE MY STRATEGY SESSION
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 3: THE PROMISE */}
      <section className="py-32 px-[6vw] relative overflow-hidden z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(232,163,101,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-[1170px] mx-auto space-y-20 relative z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2.5 text-[0.66rem] tracking-[0.24em] uppercase text-brand font-normal justify-center w-full mb-6"><span className="w-7 h-px bg-brand"></span>The Promise<span className="w-7 h-px bg-brand"></span></div>
            <h2 className="font-heading text-[clamp(2.5rem,4vw,4rem)] text-center font-bold text-white leading-tight">
              In this complimentary strategy <br className="hidden sm:block" /> <em className="italic text-gradient font-light">session, I’ll help you:</em>
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { t: "Pinpoint the #1 bottleneck slowing your growth", h: "#1 bottleneck" },
              { t: "Get clarity on where to focus first for maximum impact", h: "where to focus first" },
              { t: "Learn how the right AI-powered systems can save you hours every week", h: "save you hours every week" },
              { t: "Walk away with a clear, actionable plan to hit your next revenue milestone—without adding more stress or overhead", h: "clear, actionable plan" }
            ].map((item, i) => {
              const parts = item.t.split(item.h);
              return (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="glass-card p-10 h-full glow-effect hover:-translate-y-2 transition-transform duration-500 group">
                    <div className="text-brand text-2xl mb-6 opacity-50 group-hover:opacity-100 transition-opacity">0{i + 1}</div>
                    <p className="text-[1.1rem] font-light text-white/80 leading-[1.8]">
                      {parts[0]}<span className="text-white font-medium italic">{item.h}</span>{parts[1]}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: MEET ANDREA */}
      <section className="py-32 px-[6vw] relative z-10">
        <div className="max-w-[1170px] mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-20 items-center">
          <FadeIn direction="left" className="space-y-8 order-2 lg:order-1">
             <div className="inline-flex items-center gap-2.5 text-[0.66rem] tracking-[0.24em] uppercase text-brand font-normal mb-2"><span className="w-7 h-px bg-brand"></span>Your Guide</div>
             <div className="space-y-4 text-[1.5rem] font-light text-white leading-[1.5]">
               <p>For over 25+ years, I’ve helped business owners identify hidden revenue opportunities, eliminate inefficiencies, and create systems that run like</p>
               <h2 className="font-heading text-[clamp(3rem,5vw,5rem)] font-bold uppercase tracking-wider mt-4 text-gradient">clockwork.</h2>
             </div>

             <div className="space-y-6 text-[1.1rem] text-white/70 font-light leading-relaxed">
               <p>My approach blends proven growth strategy with smart automation and AI tools—so you can scale without sacrificing your time, your energy, or your client experience.</p>
               <p>Whether you’re just trying to create consistency or you’re ready to go after your next big revenue leap, this session will show you the most direct path forward.</p>
               <p className="font-medium text-white pt-4">Every month you wait is another month stuck in the same cycle—and the cost of doing nothing is higher than you think:</p>
             </div>

             <div className="grid grid-cols-2 gap-4 pt-4">
               {["Lost deals", "Wasted hours", "Burnt-out teams", "Stalled revenue"].map((item, i) => (
                 <div key={i} className="glass-card p-4 flex items-center gap-3">
                    <span className="text-brand">◆</span>
                    <span className="text-white/80 text-[0.95rem] tracking-wide">{item}</span>
                 </div>
               ))}
             </div>

             <div className="pt-8">
                <a 
                  href={formUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive inline-block bg-white !text-[#000000] font-semibold text-[0.77rem] tracking-[0.15em] uppercase px-10 py-5 rounded-full transition-transform hover:scale-105 hover:bg-brand"
                >
                  BOOK MY STRATEGY SESSION
                </a>
             </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2} className="relative group overflow-hidden rounded-[2rem] order-1 lg:order-2 glass-card p-2 glow-effect">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none rounded-[1.8rem]"></div>
            <img 
              src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/zUZd380lxhqjQgVX8jRh/media/ac4e8ce0-f746-448c-91c7-5d98643f4214.jpeg" 
              alt="Andrea Strategy" 
              className="w-full h-[500px] lg:h-[700px] object-cover rounded-[1.8rem] filter grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
            />
          </FadeIn>
        </div>
      </section>

      {/* SECTION 6: INDUSTRIES SERVED */}
      <section className="py-32 px-[6vw] relative z-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(200,169,81,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(200,169,81,0.03)_1px,transparent_1px)] bg-[size:72px_72px] -z-10"></div>
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <div className="inline-flex items-center gap-2.5 text-[0.66rem] tracking-[0.24em] uppercase text-brand font-normal justify-center w-full mb-6"><span className="w-7 h-px bg-brand"></span>Specialties<span className="w-7 h-px bg-brand"></span></div>
            <h2 className="font-heading text-[clamp(2.5rem,4vw,4rem)] font-bold text-white text-center mb-24 tracking-tight uppercase">INDUSTRIES <em className="italic text-gradient font-light lowercase">served</em></h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { 
                t: "B2B and DTC Companies", 
                d: "Scale your revenue with precision. We implement AI-driven systems that streamline lead generation for B2B and optimize customer acquisition for DTC brands, ensuring your growth is both predictable and profitable.", 
                icon: (
                  <svg className="w-16 h-16 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/><path d="M16 11h.01"/><path d="M16 15h.01"/><path d="M16 19h.01"/><path d="M12 11h.01"/><path d="M12 15h.01"/><path d="M12 19h.01"/><path d="M8 11h.01"/><path d="M8 15h.01"/><path d="M8 19h.01"/>
                  </svg>
                )
              },
              { 
                t: "Legal", 
                d: "Scale your practice without increasing your overhead. We build compliant AI systems that automate intake, nurture leads, and manage client communications while maintaining the highest standards of professional trust.", 
                icon: (
                  <svg className="w-16 h-16 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>
                  </svg>
                )
              },
              { 
                t: "Financial & Insurance", 
                d: "Drive consistent growth in highly regulated environments. We help advisors and firms build authority through intelligent content, automated lead scoring, and precision-targeted outreach.", 
                icon: (
                  <svg className="w-16 h-16 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="M12 8v4"/><path d="M12 16h.01"/><circle cx="12" cy="12" r="10"/>
                  </svg>
                )
              }
            ].map((industry, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="glass-card p-12 h-full flex flex-col items-center space-y-8 glow-effect group hover:-translate-y-2 transition-transform duration-500">
                  <div className="h-24 w-24 rounded-full bg-brand/5 border border-brand/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 group-hover:bg-brand/10">
                    {industry.icon}
                  </div>
                  <div className="space-y-6">
                    <h3 className="font-heading text-[1.8rem] font-bold text-white leading-tight">{industry.t}</h3>
                    <p className="text-white/60 leading-[1.8] font-light text-[1.05rem]">{industry.d}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: TESTIMONIALS */}
      <section className="py-32 px-[6vw] relative z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand/5 -z-10 pointer-events-none"></div>
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <div className="inline-flex items-center gap-2.5 text-[0.66rem] tracking-[0.24em] uppercase text-brand font-normal justify-center w-full mb-16"><span className="w-7 h-px bg-brand"></span>Success Stories<span className="w-7 h-px bg-brand"></span></div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
             {[
               { q: "Within 30 days, my team’s admin workload was cut in half — and I booked 3 new clients.", n: "Founder, Law Firm" },
               { q: "My leads no longer slip away. The system follows up automatically and my calendar stays full.", n: "Managing Partner, Law Firm" },
               { q: "For the first time in years, I feel like my business is running me instead of me running it.", n: "Owner, Insurance Agency" }
             ].map((t, i) => (
               <FadeIn key={i} delay={i * 0.1}>
                 <div className="glass-card p-12 h-full flex flex-col justify-between space-y-10 glow-effect relative">
                   <div className="absolute top-6 left-6 text-6xl text-brand/20 font-heading leading-none">"</div>
                   <p className="text-[1.15rem] font-light italic text-white/90 leading-[1.8] relative z-10 pt-4">“{t.q}”</p>
                   <div className="space-y-4 relative z-10">
                     <p className="text-[0.8rem] tracking-[0.1em] uppercase text-brand font-semibold">— {t.n}</p>
                     <div className="flex justify-center gap-1 opacity-80 mix-blend-screen">
                       <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/zUZd380lxhqjQgVX8jRh/media/243281f7-8b05-406e-bf46-75bdcf6cfa52.png" alt="5 Stars" className="w-[80px] h-auto" />
                     </div>
                   </div>
                 </div>
               </FadeIn>
             ))}
          </div>
        </div>
      </section>

    </div>
  );
}
