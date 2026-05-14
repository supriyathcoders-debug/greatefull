import Link from "next/link";

export default function Home() {
  return (
    <div className="overflow-x-hidden pt-16">
      <section id="hero" className="min-h-screen flex items-center px-[6vw] pt-24 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_65%_50%_at_78%_42%,rgba(200,169,81,0.075)_0%,transparent_65%),radial-gradient(ellipse_40%_55%_at_4%_88%,rgba(200,169,81,0.04)_0%,transparent_58%),linear-gradient(162deg,#0b1825_0%,#091420_55%,#070d14_100%)]"></div>
        <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(200,169,81,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(200,169,81,0.03)_1px,transparent_1px)] bg-[size:72px_72px]"></div>
        <div className="absolute right-[20vw] top-0 bottom-0 w-px z-0 bg-[linear-gradient(180deg,transparent_0%,rgba(200,169,81,0.12)_25%,rgba(200,169,81,0.12)_75%,transparent_100%)]"></div>
        <span className="absolute right-[4vw] top-1/2 text-[16vw] leading-none opacity-[0.022] select-none pointer-events-none z-0 animate-[float-icon_9s_ease-in-out_infinite] text-brand" style={{ transform: "translateY(-50%)" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
        </span>
        
        <div className="relative z-10 max-w-[840px]">
          <div className="inline-flex items-center gap-3 mb-10 animate-[fade-up_0.8s_0.1s_cubic-bezier(0.16,1,0.3,1)_both]">
            <span className="w-11 h-px bg-brand flex-shrink-0"></span>
            <span className="text-[0.68rem] tracking-[0.24em] uppercase text-brand font-normal">North American AI Marketing Consultancy · Est. 2022</span>
          </div>
          
          <h1 className="font-heading text-[clamp(2.8rem,5.5vw,5.5rem)] font-semibold leading-[1.06] mb-8 animate-[fade-up_0.8s_0.25s_cubic-bezier(0.16,1,0.3,1)_both]">
            Scale Your Impact with <em className="italic text-brand font-light">AI-Powered Marketing</em> You Can Trust.
          </h1>
          
          <p className="max-w-[560px] text-base font-light leading-[1.86] text-muted mb-12 animate-[fade-up_0.8s_0.4s_cubic-bezier(0.16,1,0.3,1)_both]">
            Grateful Marketing™ combines cutting-edge artificial intelligence with our proprietary <strong className="text-foreground font-normal">Gratitude™ methodology</strong>. We help purpose-driven organizations build predictable growth systems—without losing their human touch.
          </p>
          
          <div className="flex items-center gap-5 flex-wrap mb-16 animate-[fade-up_0.8s_0.55s_cubic-bezier(0.16,1,0.3,1)_both]">
            <a href="https://api.growthhub365.com/widget/booking/UCd9cjMN2XGBd1qvKuyS" className="inline-block no-underline bg-brand text-background font-semibold text-[0.77rem] tracking-[0.12em] uppercase px-10 py-4 border-2 border-brand transition-all relative overflow-hidden hover:brightness-110">Book Your Strategy Session</a>
            <Link href="#services" className="inline-block no-underline bg-transparent text-foreground font-normal text-[0.77rem] tracking-[0.12em] uppercase px-10 py-4 border border-foreground/20 transition-all hover:border-brand hover:text-brand">See How We Work</Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 animate-[fade-up_0.8s_0.7s_cubic-bezier(0.16,1,0.3,1)_both]">
            <div className="pt-2">
              <div className="font-heading text-4xl font-semibold text-brand leading-none">25+</div>
              <div className="text-[0.66rem] text-muted tracking-[0.1em] uppercase mt-2 font-light max-w-[150px]">Years of Strategic Expertise</div>
            </div>
            <div className="sm:border-l sm:border-border sm:pl-8 pt-2">
              <div className="font-heading text-4xl font-semibold text-brand leading-none">4</div>
              <div className="text-[0.66rem] text-muted tracking-[0.1em] uppercase mt-2 font-light max-w-[150px]">Core Pillars of Growth</div>
            </div>
            <div className="border-l-0 lg:border-l lg:border-border lg:pl-10 pt-2">
              <div className="font-heading text-4xl font-semibold text-brand leading-none text-yellow-500">🌍</div>
              <div className="text-[0.66rem] text-muted tracking-[0.1em] uppercase mt-2 font-light max-w-[180px]">Globally Trademarked Methodology</div>
            </div>
            <div className="sm:border-l sm:border-border sm:pl-8 lg:pl-10 pt-2">
              <div className="font-heading text-4xl font-semibold text-brand leading-none">∞</div>
              <div className="text-[0.66rem] text-muted tracking-[0.1em] uppercase mt-2 font-light max-w-[150px]">Impact-Driven Results</div>
            </div>
          </div>
        </div>
        
        <span className="absolute right-[4vw] bottom-[10vh] z-10 hidden md:block [writing-mode:vertical-rl] text-[0.6rem] tracking-[0.3em] uppercase text-brand/30 font-light animate-[fade-up_1.5s_1.2s_ease_both]">Innovating · Creating · Leading</span>
      </section>

      <div className="border-t border-b border-border bg-brand/5 py-4 overflow-hidden">
        <div className="flex w-max animate-[marquee-scroll_38s_linear_infinite] hover:[animation-play-state:paused]">
          {[1, 2].map((i) => (
            <div key={i} className="flex">
              <div className="flex items-center gap-4 px-9 whitespace-nowrap text-[0.68rem] tracking-[0.2em] uppercase text-brand font-normal"><span className="w-[3px] h-[3px] rounded-full bg-brand opacity-40"></span>AI Business Consulting</div>
              <div className="flex items-center gap-4 px-9 whitespace-nowrap text-[0.68rem] tracking-[0.2em] uppercase text-brand font-normal"><span className="w-[3px] h-[3px] rounded-full bg-brand opacity-40"></span>Marketing Strategy & Deployment</div>
              <div className="flex items-center gap-4 px-9 whitespace-nowrap text-[0.68rem] tracking-[0.2em] uppercase text-brand font-normal"><span className="w-[3px] h-[3px] rounded-full bg-brand opacity-40"></span>AI Team Training & Empowerment</div>
              <div className="flex items-center gap-4 px-9 whitespace-nowrap text-[0.68rem] tracking-[0.2em] uppercase text-brand font-normal"><span className="w-[3px] h-[3px] rounded-full bg-brand opacity-40"></span>Gratitude™ Methodology</div>
              <div className="flex items-center gap-4 px-9 whitespace-nowrap text-[0.68rem] tracking-[0.2em] uppercase text-brand font-normal"><span className="w-[3px] h-[3px] rounded-full bg-brand opacity-40"></span>B2B · D2C · Service-Based · Non-Profit</div>
              <div className="flex items-center gap-4 px-9 whitespace-nowrap text-[0.68rem] tracking-[0.2em] uppercase text-brand font-normal"><span className="w-[3px] h-[3px] rounded-full bg-brand opacity-40"></span>Legal · Financial · Insurance</div>
              <div className="flex items-center gap-4 px-9 whitespace-nowrap text-[0.68rem] tracking-[0.2em] uppercase text-brand font-normal"><span className="w-[3px] h-[3px] rounded-full bg-brand opacity-40"></span>Certified AI Consultancy · North America</div>
            </div>
          ))}
        </div>
      </div>

      <section id="methodology" className="py-28 px-[6vw]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-28 items-center">
          <div className="bg-brand-soft border border-border relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand to-brand-light"></div>
            <div className="p-10 pb-6 border-b border-border-subtle">
              <h3 className="font-heading text-2xl font-semibold">The <em className="italic text-brand">Gratitude™</em> Framework</h3>
              <p className="text-[0.74rem] text-muted tracking-wide mt-1 font-light">Globally trademarked · Proprietary methodology</p>
            </div>
            
            <div className="px-10 py-5 text-[0.8rem] text-muted font-light leading-relaxed border-b border-border-subtle">
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
            ].map(item => (
              <div key={item.l + item.t} className="flex items-start gap-5 px-10 py-4 border-b border-border-subtle last:border-b-0 transition-colors hover:bg-brand/5">
                <span className="font-heading text-xl font-bold text-brand min-w-5 leading-none pt-0.5">{item.l}</span>
                <div>
                  <div className="text-sm font-semibold text-foreground mb-0.5">{item.t}</div>
                  <div className="text-[0.75rem] text-muted leading-relaxed font-light">{item.d}</div>
                </div>
              </div>
            ))}
            
            <div className="px-10 py-5 bg-brand/5 border-t border-border-subtle flex items-center justify-between">
              <span className="font-heading text-sm text-brand/60 italic">Gratitude™ · All rights reserved</span>
              <span className="text-[0.63rem] tracking-[0.14em] uppercase text-muted border border-border px-2.5 py-1">Global Trademark</span>
            </div>
          </div>
          
          <div>
            <div className="inline-flex items-center gap-2.5 text-[0.66rem] tracking-[0.24em] uppercase text-brand font-normal mb-5"><span className="w-7 h-px bg-brand"></span>About Grateful Marketing™</div>
            <h2 className="font-heading text-[clamp(2.1rem,4vw,3.5rem)] font-semibold leading-[1.12] mb-5">Where cutting-edge technology <em className="italic text-brand font-light">meets genuine purpose.</em></h2>
            <div className="space-y-5">
              <p className="text-[0.93rem] text-muted leading-[1.9] font-light">Grateful Marketing™ is a <strong className="text-foreground font-medium">North American AI-powered digital marketing consultancy</strong> founded by Andrea — a strategic leader with over 25 years of experience across technology, business consulting, and digital marketing.</p>
              <p className="text-[0.93rem] text-muted leading-[1.9] font-light">We believe the most powerful marketing isn't just smart — it's <strong className="text-foreground font-medium">grateful</strong>. Grateful to customers. Grateful to communities. Driven by a genuine desire to do good in the world.</p>
              <p className="text-[0.93rem] text-muted leading-[1.9] font-light">Our globally trademarked <strong className="text-foreground font-medium">Gratitude™ methodology</strong> is more than a framework — it's a lens for building sustainable organizations that grow with intention, serve with excellence, and lead with integrity.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-28 px-[6vw] bg-brand-soft">
        <div className="inline-flex items-center gap-2.5 text-[0.66rem] tracking-[0.24em] uppercase text-brand font-normal mb-5"><span className="w-7 h-px bg-brand"></span>Our Services</div>
        <h2 className="font-heading text-[clamp(2.1rem,4vw,3.5rem)] font-semibold leading-[1.12] mb-5">Four pillars of <em className="italic text-brand">AI-powered</em> growth.</h2>
        <p className="text-base text-muted leading-[1.88] font-light max-w-[580px] mb-16">Every engagement is designed to meet you exactly where you are. Whether you are just beginning your AI journey or you are ready to scale with full deployment and automation, we have the strategic framework to get you there.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-px">
          <div className="p-10 border border-border-subtle relative overflow-hidden transition-colors hover:bg-brand/10 group bg-background flex flex-col h-full">
            <div className="absolute top-0 left-0 w-0 h-0.5 bg-brand transition-all duration-500 group-hover:w-full"></div>
            <span className="font-heading text-7xl font-bold text-brand/5 absolute right-5 top-3 leading-none">01</span>
            <div className="text-3xl mb-5">🧠</div>
            <h3 className="font-heading text-xl font-semibold leading-tight mb-3">AI Business Consulting</h3>
            <p className="text-sm text-muted leading-[1.82] font-light mb-7">Stop guessing about AI and start leveraging it as your competitive advantage. We audit your current landscape, identify high-value opportunities, and build a clear, actionable AI roadmap tailored to your specific goals and growth stage.</p>
            <div className="mt-auto pt-7 flex flex-wrap gap-1.5">
              <span className="text-[0.63rem] tracking-[0.1em] uppercase text-brand border border-brand/40 px-2.5 py-1">AI Readiness Audits</span>
              <span className="text-[0.63rem] tracking-[0.1em] uppercase text-brand border border-brand/40 px-2.5 py-1">Strategic Roadmaps</span>
              <span className="text-[0.63rem] tracking-[0.1em] uppercase text-brand border border-brand/40 px-2.5 py-1">ROI Modeling</span>
              <span className="text-[0.63rem] tracking-[0.1em] uppercase text-brand border border-brand/40 px-2.5 py-1">Change Management</span>
              <span className="text-[0.63rem] tracking-[0.1em] uppercase text-brand border border-brand/40 px-2.5 py-1">Competitive Analysis</span>
            </div>
          </div>
          
          <div className="p-10 border border-border-subtle relative overflow-hidden transition-colors hover:bg-brand/10 group bg-background flex flex-col h-full">
            <div className="absolute top-0 left-0 w-0 h-0.5 bg-brand transition-all duration-500 group-hover:w-full"></div>
            <span className="font-heading text-7xl font-bold text-brand/5 absolute right-5 top-3 leading-none">02</span>
            <div className="text-3xl mb-5">🚀</div>
            <h3 className="font-heading text-xl font-semibold leading-tight mb-3">AI & Marketing Strategy & Deployment</h3>
            <p className="text-sm text-muted leading-[1.82] font-light mb-7">Turn your marketing into a predictable revenue engine. From insight to execution, we design, build, and deploy end-to-end AI-powered marketing systems that attract your ideal customers, convert them consistently, and scale your operations intelligently.</p>
            <div className="mt-auto pt-7 flex flex-wrap gap-1.5">
              <span className="text-[0.63rem] tracking-[0.1em] uppercase text-brand border border-brand/40 px-2.5 py-1">Smart Content Systems</span>
              <span className="text-[0.63rem] tracking-[0.1em] uppercase text-brand border border-brand/40 px-2.5 py-1">Automated Lead Generation</span>
              <span className="text-[0.63rem] tracking-[0.1em] uppercase text-brand border border-brand/40 px-2.5 py-1">AI Automation</span>
              <span className="text-[0.63rem] tracking-[0.1em] uppercase text-brand border border-brand/40 px-2.5 py-1">Campaign Management</span>
              <span className="text-[0.63rem] tracking-[0.1em] uppercase text-brand border border-brand/40 px-2.5 py-1">Seamless CRM Integration</span>
            </div>
          </div>
          
          <div className="p-10 border border-border-subtle relative overflow-hidden transition-colors hover:bg-brand/10 group bg-background flex flex-col h-full">
            <div className="absolute top-0 left-0 w-0 h-0.5 bg-brand transition-all duration-500 group-hover:w-full"></div>
            <span className="font-heading text-7xl font-bold text-brand/5 absolute right-5 top-3 leading-none">03</span>
            <div className="text-3xl mb-5">🎓</div>
            <h3 className="font-heading text-xl font-semibold leading-tight mb-3">AI Team Training & Empowerment</h3>
            <p className="text-sm text-muted leading-[1.82] font-light mb-7">Transform your team's hesitation into capability. Your people are your greatest asset. We design and deliver hands-on AI training programs that empower your team to confidently adopt AI tools, think in systems, and drive measurable results.</p>
            <div className="mt-auto pt-7 flex flex-wrap gap-1.5">
              <span className="text-[0.63rem] tracking-[0.1em] uppercase text-brand border border-brand/40 px-2.5 py-1">Interactive Workshops</span>
              <span className="text-[0.63rem] tracking-[0.1em] uppercase text-brand border border-brand/40 px-2.5 py-1">Hands-On Training</span>
              <span className="text-[0.63rem] tracking-[0.1em] uppercase text-brand border border-brand/40 px-2.5 py-1">AI Tool Adoption Strategies</span>
              <span className="text-[0.63rem] tracking-[0.1em] uppercase text-brand border border-brand/40 px-2.5 py-1">Ongoing Support</span>
              <span className="text-[0.63rem] tracking-[0.1em] uppercase text-brand border border-brand/40 px-2.5 py-1">Custom Curricula</span>
            </div>
          </div>
          
          <div className="p-10 border border-border-subtle relative overflow-hidden transition-colors hover:bg-brand/10 group bg-background flex flex-col h-full">
            <div className="absolute top-0 left-0 w-0 h-0.5 bg-brand transition-all duration-500 group-hover:w-full"></div>
            <span className="font-heading text-7xl font-bold text-brand/5 absolute right-5 top-3 leading-none">04</span>
            <div className="text-3xl mb-5">🎙️</div>
            <h3 className="font-heading text-xl font-semibold leading-tight mb-3">AI Voice Agents</h3>
            <p className="text-sm text-muted leading-[1.82] font-light mb-7">24/7 voice automation to turn missed calls into booked opportunities. Capture, qualify, and convert your leads instantly around the clock without scaling your headcount.</p>
            <div className="mt-auto pt-4">
              <a href="/ai-voice-agents" className="inline-block text-[0.7rem] uppercase tracking-[0.1em] text-brand border border-brand/40 px-5 py-2 transition-colors hover:bg-brand hover:text-background">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      <section id="funnel" className="py-28 px-[6vw] overflow-hidden">
        <div className="max-w-[840px] mx-auto text-center border p-12 border-brand/20 bg-brand-soft relative shadow-[0_0_30px_rgba(200,169,81,0.05)]">
            <h3 className="font-heading text-[2.5rem] font-bold text-brand mb-6">Choose Your Next Step</h3>
            <p className="text-muted mb-8">Enter the conversion flow that best fits your business stage.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/ai-revenue-audit" className="inline-block text-background bg-brand font-semibold text-[0.77rem] tracking-[0.12em] uppercase px-8 py-3 transition-transform hover:-translate-y-1">Get Your AI Revenue Audit</a>
              <a href="https://app.growthhub365.com/v2/preview/QAuss4a9CGC8EExSO5WE" className="inline-block text-brand border border-brand font-semibold text-[0.77rem] tracking-[0.12em] uppercase px-8 py-3 transition-transform hover:-translate-y-1">Get Your AI Employee Demo</a>
              <a href="https://api.growthhub365.com/widget/booking/UCd9cjMN2XGBd1qvKuyS" className="inline-block text-brand border border-brand font-semibold text-[0.77rem] tracking-[0.12em] uppercase px-8 py-3 transition-transform hover:-translate-y-1">Book a Strategy Call</a>
            </div>
        </div>
      </section>
      
      <section id="clients" className="py-28 px-[6vw]">
        <div className="inline-flex items-center gap-2.5 text-[0.66rem] tracking-[0.24em] uppercase text-brand font-normal mb-5"><span className="w-7 h-px bg-brand"></span>Who We Serve</div>
        <h2 className="font-heading text-[clamp(2.1rem,4vw,3.5rem)] font-semibold leading-[1.12] mb-5">Built for organizations<br /><span className="font-light">ready to lead <em className="italic text-brand">with trust.</em></span></h2>
        <p className="text-base text-muted leading-[1.88] font-light max-w-[580px] mb-16">We partner with purpose-driven organizations across highly regulated and trust-dependent sectors. When compliance, privacy, and authentic connection are non-negotiable, we build the intelligent systems that fuel your lasting growth.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border-subtle mb-16">
          <div className="bg-brand-soft p-10 transition-colors hover:bg-brand/10">
            <div className="text-3xl mb-5">🏢</div>
            <h3 className="font-heading text-xl font-semibold mb-3">B2B & Professional Services</h3>
            <p className="text-sm text-muted leading-[1.82] font-light">Attract better clients and close deals more efficiently. We build AI-powered marketing systems that generate leads and nurture your prospects on autopilot.</p>
          </div>
          <div className="bg-brand-soft p-10 transition-colors hover:bg-brand/10">
            <div className="text-3xl mb-5">🛍️</div>
            <h3 className="font-heading text-xl font-semibold mb-3">D2C Brands</h3>
            <p className="text-sm text-muted leading-[1.82] font-light">Cut through the noise and build real relationships. We craft AI-driven strategies that create authentic customer experiences and maximize lifetime value.</p>
          </div>
          <div className="bg-brand-soft p-10 transition-colors hover:bg-brand/10">
            <div className="text-3xl mb-5">⚖️</div>
            <h3 className="font-heading text-xl font-semibold mb-3">Legal</h3>
            <p className="text-sm text-muted leading-[1.82] font-light">Scale your practice without increasing your overhead. We build compliant AI systems that automate intake, nurture leads, and manage client communications while maintaining the highest standards of professional trust.</p>
          </div>
          <div className="bg-brand-soft p-10 transition-colors hover:bg-brand/10">
            <div className="text-3xl mb-5">📈</div>
            <h3 className="font-heading text-xl font-semibold mb-3">Financial</h3>
            <p className="text-sm text-muted leading-[1.82] font-light">Drive consistent growth in a highly regulated environment. We help financial advisors and firms build authority through intelligent content, automated lead scoring, and precision-targeted outreach.</p>
          </div>
          <div className="bg-brand-soft p-10 transition-colors hover:bg-brand/10">
            <div className="text-3xl mb-5">🛡️</div>
            <h3 className="font-heading text-xl font-semibold mb-3">Insurance</h3>
            <p className="text-sm text-muted leading-[1.82] font-light">Turn your reputation into a predictable revenue engine. Our AI-powered systems help you capture leads 24/7, nurture prospect relationships, and stay top-of-mind with your existing client base.</p>
          </div>
          <div className="bg-brand-soft p-10 transition-colors hover:bg-brand/10">
            <div className="text-3xl mb-5">⚙️</div>
            <h3 className="font-heading text-xl font-semibold mb-3">Service-Based Businesses</h3>
            <p className="text-sm text-muted leading-[1.82] font-light">Turn your reputation into revenue. We help local specialists and growing service companies build a consistent online presence and generate steady inbound leads.</p>
          </div>
        </div>
      </section>

      <section id="why" className="py-28 px-[6vw] bg-brand-soft">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-28 items-start">
          <div>
            <div className="inline-flex items-center gap-2.5 text-[0.66rem] tracking-[0.24em] uppercase text-brand font-normal mb-5"><span className="w-7 h-px bg-brand"></span>Why Grateful Marketing™</div>
            <h2 className="font-heading text-[clamp(2.1rem,4vw,3.5rem)] font-semibold leading-[1.12] mb-12">The difference is in<br /><span className="font-light">the <em className="italic text-brand">approach.</em></span></h2>
            <ul className="list-none">
              {[
                { n: '01', t: 'Proprietary Gratitude™ System', d: "Our globally trademarked methodology wasn't borrowed from a textbook. It was built over 25+ years of real-world results, grounded in the philosophy that technology and humanity belong together." },
                { n: '02', t: 'Founder-Led, Always', d: "You work directly with Andrea — a certified AI consultant and senior strategist. No junior handoffs, no account managers. Just direct, experienced thinking applied to your business." },
                { n: '03', t: 'AI-First, Human-Centred', d: "We don't just use AI tools — we think in AI systems. Every strategy scales intelligently while keeping authentic human connection at its core." },
                { n: '04', t: 'Regulated Industry Depth', d: "We bring particular expertise to legal, financial, and insurance sectors — where trust, compliance, and precision are absolute requirements." },
                { n: '05', t: 'Results Over Hours', d: "We measure success by your growth, not by time spent. Every engagement is built around tangible outcomes: more leads, better conversions, stronger teams, and measurable ROI." }
              ].map(item => (
                <li key={item.n} className="flex gap-7 py-7 border-b border-border-subtle first:pt-0">
                  <span className="font-heading text-sm text-brand min-w-8 pt-0.5 italic">{item.n}</span>
                  <div>
                    <h4 className="text-[0.93rem] font-medium mb-1">{item.t}</h4>
                    <p className="text-sm text-muted leading-[1.78] font-light">{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="bg-brand-soft border border-border p-12 mb-6 relative overflow-hidden bg-[#0c1826]">
              <div className="absolute bottom-0 right-0 w-[42%] h-0.5 bg-gradient-to-r from-transparent to-brand"></div>
              <span className="font-heading text-8xl text-brand/10 leading-none block mb-6">"</span>
              <p className="font-heading text-xl italic leading-relaxed text-brand mb-8">The future of marketing isn't choosing between artificial intelligence and authentic humanity — it's understanding that the most powerful AI strategies are built on a foundation of genuine gratitude for the people you have the privilege of serving.</p>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 flex-shrink-0 bg-gradient-to-br from-brand to-brand flex items-center justify-center text-xl text-background">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
                </div>
                <div>
                  <div className="text-sm font-medium">Andrea</div>
                  <div className="text-[0.72rem] text-muted mt-0.5 font-light">Founder & CEO, Grateful Marketing™</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="platform" className="py-28 px-[6vw]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="bg-brand-soft border border-border p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand to-transparent"></div>
            <h3 className="font-heading text-lg font-semibold mb-6 text-brand">What AI-Powered Marketing Delivers for You</h3>
            <ul className="list-none space-y-0">
              <li className="flex items-start gap-3 py-3 border-b border-border-subtle text-sm text-muted font-light leading-relaxed"><span className="text-brand flex-shrink-0 text-[0.7rem] pt-0.5">◆</span>Personalized content at scale — Maintain a consistent brand voice across every channel, generated in a fraction of the time.</li>
              <li className="flex items-start gap-3 py-3 border-b border-border-subtle text-sm text-muted font-light leading-relaxed"><span className="text-brand flex-shrink-0 text-[0.7rem] pt-0.5">◆</span>Intelligent lead scoring and nurturing — Identify your best prospects and move them through your funnel automatically.</li>
              <li className="flex items-start gap-3 py-3 border-b border-border-subtle text-sm text-muted font-light leading-relaxed"><span className="text-brand flex-shrink-0 text-[0.7rem] pt-0.5">◆</span>Predictive campaign optimization — Continuously improve your performance based on real-time data signals.</li>
              <li className="flex items-start gap-3 py-3 border-b border-border-subtle text-sm text-muted font-light leading-relaxed"><span className="text-brand flex-shrink-0 text-[0.7rem] pt-0.5">◆</span>AI-powered reputation management — Automate client communication flows that build trust on autopilot.</li>
              <li className="flex items-start gap-3 py-3 border-b border-border-subtle text-sm text-muted font-light leading-relaxed"><span className="text-brand flex-shrink-0 text-[0.7rem] pt-0.5">◆</span>Automated reporting dashboards — Gain instant visibility into the metrics that are actually driving your growth.</li>
              <li className="flex items-start gap-3 py-3 border-b border-border-subtle text-sm text-muted font-light leading-relaxed"><span className="text-brand flex-shrink-0 text-[0.7rem] pt-0.5">◆</span>North American data residency compliance — Enjoy privacy-first design, specifically tailored for legal, financial, and insurance clients.</li>
            </ul>
          </div>
          <div>
            <div className="inline-flex items-center gap-2.5 text-[0.66rem] tracking-[0.24em] uppercase text-brand font-normal mb-5"><span className="w-7 h-px bg-brand"></span>The AI Platform</div>
            <h2 className="font-heading text-[clamp(2.1rem,4vw,3.5rem)] font-semibold leading-[1.12] mb-5">Powerful <em className="italic text-brand">tools.</em><br /><span className="font-light">Thoughtful deployment.</span></h2>
            <p className="text-base text-muted leading-[1.88] font-light max-w-[580px] mb-10">We deploy AI marketing through our proprietary, all-in-one AI platform engineered for results, featuring the North American data residency compliance that legal and financial clients require. All client data is handled with the highest standards of privacy and security.</p>
            <div className="space-y-3">
              <div className="flex items-center gap-4 bg-brand-soft border border-border p-5"><span className="text-2xl">🤖</span><div><strong className="block text-sm font-medium mb-0.5">Proprietary AI Platform</strong><span className="text-[0.73rem] text-muted font-light">AI-powered all-in-one platform · CRM · Automation · Content · Analytics</span></div></div>
              <div className="flex items-center gap-4 bg-brand-soft border border-border p-5"><span className="text-2xl">🌎</span><div><strong className="block text-sm font-medium mb-0.5">North American Data Residency</strong><span className="text-[0.73rem] text-muted font-light">Secure data storage · Fully compliant · Ideal for legal and financial industries</span></div></div>
              <div className="flex items-center gap-4 bg-brand-soft border border-border p-5"><span className="text-2xl">🎓</span><div><strong className="block text-sm font-medium mb-0.5">Certified AI Consultancy</strong><span className="text-[0.73rem] text-muted font-light">Certified AI Business Consultant · Trained on the latest tools, strategies, and methodologies</span></div></div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
