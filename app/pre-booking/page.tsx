export default function PreBookingPage() {
  const formUrl = "https://api.growthhub365.com/widget/booking/UCd9cjMN2XGBd1qvKuyS";
  const calendarUrl = "https://api.growthhub365.com/widget/booking/UCd9cjMN2XGBd1qvKuyS";

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#00daae]/30 overflow-x-hidden font-['Poppins',_sans-serif]">
      
      {/* SECTION 1: HERO (FYTfAt2HlU) */}
      <section className="py-20 px-[6vw] text-center relative overflow-hidden" style={{ background: 'linear-gradient(0deg, #272943 0%, #010101 100%)' }}>
        <div className="max-w-[1170px] mx-auto space-y-8 relative z-10">
          <div className="space-y-4">
            <h1 className="text-[40px] sm:text-[70px] font-bold text-white tracking-tight leading-[1.3] uppercase">
              Unlock Your Next Level <br /> of Growth — <br />
              <span className="text-white">in 30 Minutes or Less!</span>
            </h1>
          </div>
          
          <p className="max-w-3xl mx-auto text-[20px] sm:text-[30px] font-normal text-white/90 leading-relaxed">
            Book your complimentary strategy session and discover how to streamline your business, close more deals, and free up hours every week—using a proven blend of strategy, automation, and the right AI tools.
          </p>

          <div className="pt-6 flex justify-center">
            <img 
              src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/zUZd380lxhqjQgVX8jRh/media/47981b93-3931-445b-bf43-5777f8a88470.png" 
              alt="Growth Graph" 
              className="h-[250px] sm:h-[400px] w-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: THE PROBLEM (mna8hMK2gU) */}
      <section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative min-h-[400px] lg:min-h-[700px] bg-slate-100 overflow-hidden">
             <div 
               className="absolute inset-0 w-full h-full bg-cover bg-center"
               style={{ 
                 backgroundImage: 'url(https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/zUZd380lxhqjQgVX8jRh/media/d7f8f960-e0e4-469d-aeb7-b0fae472de4f.jpeg)',
                 objectPosition: '60%'
               }}
             />
          </div>
          
          <div className="py-20 px-[8vw] lg:px-[6vw] flex flex-col justify-center space-y-6">
            <h2 className="text-[32px] font-bold text-slate-900 leading-[1.3]">
              If you’re like most [consultant target audience], you’re working harder than ever — <br /><br />but growth feels slower than it should.
            </h2>
            
            <p className="text-[18px] font-medium text-slate-800">You know there’s so much potential in your business, but:</p>
            
            <ul className="space-y-4">
              {[
                "Your systems are messy or too manual",
                "You’re wasting too much time doing things that don’t generate revenue",
                "Sales opportunities keep slipping through the cracks",
                "Scaling feels too overwhelming (and expensive)"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start text-[18px] text-slate-700">
                  <span className="text-[#00daaeff] flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-[18px] font-medium text-slate-800 pt-4">It doesn’t have to be this way.</p>
            
            <div className="pt-4">
              <a 
                href={formUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#00daae] text-white font-bold text-[20px] px-10 py-5 rounded-[75px] transition-all hover:brightness-105 uppercase tracking-wide shadow-lg text-center"
              >
                SCHEDULE MY STRATEGY SESSION
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE PROMISE (oY4pZy33NI) */}
      <section className="py-24 px-[6vw] relative overflow-hidden" style={{ background: 'linear-gradient(0deg, #272943 0%, #010101 100%)' }}>
        <div className="max-w-[1170px] mx-auto text-center space-y-16">
          <h2 className="text-[30px] sm:text-[40px] font-bold text-white leading-tight">
            In this complimentary strategy <br className="hidden sm:block" /> session, I’ll help you:
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-6 text-left">
              {[
                { t: "Pinpoint the #1 bottleneck slowing your growth", h: "#1 bottleneck" },
                { t: "Get clarity on where to focus first for maximum impact", h: "where to focus first" },
                { t: "Learn how the right AI-powered systems can save you hours every week", h: "save you hours every week" },
                { t: "Walk away with a clear, actionable plan to hit your next revenue milestone—without adding more stress or overhead", h: "clear, actionable plan" }
              ].map((item, i) => {
                const parts = item.t.split(item.h);
                return (
                  <li key={i} className="flex gap-5 items-start text-[20px] font-normal text-white/90 leading-normal">
                    <span className="text-[#00daae] flex-shrink-0 mt-1.5">
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg>
                    </span>
                    <span>
                      {parts[0]}<span className="text-[#00daae] font-bold">{item.h}</span>{parts[1]}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 4: MEET ANDREA (M5qaYBtMh9) */}
      <section className="py-24 px-[6vw] bg-white">
        <div className="max-w-[1170px] mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
          <div className="space-y-8 flex flex-col justify-center order-2 lg:order-1">
             <div className="space-y-4 text-[22px] sm:text-[26px] font-semibold text-slate-900 leading-[1.4]">
               <p>For over 25+ years, I’ve helped business owners identify hidden revenue opportunities, eliminate inefficiencies, and create systems that run like</p>
               <h2 className="text-[48px] sm:text-[60px] font-bold uppercase tracking-wider mt-2">clockwork.</h2>
             </div>

             <div className="space-y-6 text-[18px] text-slate-600 font-normal leading-relaxed">
               <p>My approach blends proven growth strategy with smart automation and AI tools—so you can scale without sacrificing your time, your energy, or your client experience.</p>
               <p>Whether you’re just trying to create consistency or you’re ready to go after your next big revenue leap, this session will show you the most direct path forward.</p>
               <p className="font-bold text-slate-900">Every month you wait is another month stuck in the same cycle—and the cost of doing nothing is higher than you think:</p>
             </div>

             <ul className="space-y-3">
               {["Lost deals", "Wasted hours", "Burnt-out teams", "Stalled revenue"].map((item, i) => (
                 <li key={i} className="flex gap-3 items-center text-[18px] text-slate-800">
                    <span className="w-2 h-2 rounded-full bg-[#00daae]"></span>
                    {item}
                 </li>
               ))}
             </ul>

             <div className="pt-4">
                <a 
                  href={formUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#00daae] text-white font-bold text-[20px] px-12 py-5 rounded-[50px] transition-all hover:brightness-105 uppercase tracking-wide shadow-lg text-center"
                >
                  BOOK MY STRATEGY SESSION
                </a>
             </div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl order-1 lg:order-2">
            <img 
              src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/zUZd380lxhqjQgVX8jRh/media/ac4e8ce0-f746-448c-91c7-5d98643f4214.jpeg" 
              alt="Andrea Strategy" 
              className="w-full h-[500px] lg:h-[700px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION 6: INDUSTRIES SERVED (WzwhrL7GFv) */}
      <section className="py-24 px-[6vw] bg-white border-t border-slate-100">
        <div className="max-w-[1170px] mx-auto">
          <h2 className="text-[40px] font-bold text-slate-900 text-center mb-20 tracking-tight font-sans uppercase">INDUSTRIES SERVED</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { 
                t: "B2B and DTC Companies", 
                d: "Scale your revenue with precision. We implement AI-driven systems that streamline lead generation for B2B and optimize customer acquisition for DTC brands, ensuring your growth is both predictable and profitable.", 
                icon: (
                  <svg className="w-24 h-24 text-[#00daae]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/><path d="M16 11h.01"/><path d="M16 15h.01"/><path d="M16 19h.01"/><path d="M12 11h.01"/><path d="M12 15h.01"/><path d="M12 19h.01"/><path d="M8 11h.01"/><path d="M8 15h.01"/><path d="M8 19h.01"/>
                  </svg>
                )
              },
              { 
                t: "Legal", 
                d: "Scale your practice without increasing your overhead. We build compliant AI systems that automate intake, nurture leads, and manage client communications while maintaining the highest standards of professional trust.", 
                icon: (
                  <svg className="w-24 h-24 text-[#00daae]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>
                  </svg>
                )
              },
              { 
                t: "Financial & Insurance", 
                d: "Drive consistent growth in highly regulated environments. We help advisors and firms build authority through intelligent content, automated lead scoring, and precision-targeted outreach.", 
                icon: (
                  <svg className="w-24 h-24 text-[#00daae]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="M12 8v4"/><path d="M12 16h.01"/><circle cx="12" cy="12" r="10"/>
                  </svg>
                )
              }
            ].map((industry, i) => (
              <div key={i} className="flex flex-col items-center space-y-6">
                <div className="h-[120px] flex items-center justify-center">
                  {industry.icon}
                </div>
                <div className="space-y-4">
                  <h3 className="text-[24px] font-bold text-slate-900 leading-tight uppercase font-sans">{industry.t}</h3>
                  <p className="text-slate-600 leading-relaxed font-normal text-[16px]">{industry.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: TESTIMONIALS (JWhm8Vo_op) */}
      <section className="py-24 px-[6vw]" style={{ background: 'linear-gradient(0deg, #272843 0%, #1e1f2f 100%)' }}>
        <div className="max-w-[1170px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
           {[
             { q: "Within 30 days, my team’s admin workload was cut in half — and I booked 3 new clients.", n: "Founder, Law Firm" },
             { q: "My leads no longer slip away. The system follows up automatically and my calendar stays full.", n: "Managing Partner, Law Firm" },
             { q: "For the first time in years, I feel like my business is running me instead of me running it.", n: "Owner, Insurance Agency" }
           ].map((t, i) => (
             <div key={i} className="space-y-6">
               <p className="text-[18px] font-medium text-white leading-relaxed">“{t.q}”</p>
               <div className="space-y-3">
                 <p className="text-[18px] text-white/80">— {t.n}</p>
                 <div className="flex justify-center gap-1">
                   <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/zUZd380lxhqjQgVX8jRh/media/243281f7-8b05-406e-bf46-75bdcf6cfa52.png" alt="5 Stars" className="w-[100px] h-auto" />
                 </div>
               </div>
             </div>
           ))}
        </div>
      </section>

    </div>
  );
}
