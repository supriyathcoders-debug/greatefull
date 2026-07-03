import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background px-[6vw] pt-20 pb-10 border-t border-brand/10 mt-16 relative section-noise">
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent pointer-events-none" aria-hidden="true" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2.2fr_1fr_1fr_1fr] gap-12 pb-14 border-b border-border mb-10">
        <div>
          <Link href="/" className="block mb-4">
            <img 
              src="/logo.png" 
              alt="Grateful Marketing Logo" 
              className="h-12 w-auto object-contain"
            />
          </Link>
          <div className="text-[0.66rem] tracking-[0.2em] uppercase text-brand/60 mb-3">
            Innovating · Creating · Leading
          </div>
          <p className="text-sm text-muted leading-[1.82] font-light max-w-[325px]">
            North American digital marketing consultancy serving legal, financial, insurance, B2B, D2C, and service-based organizations — through the human-first, globally trademarked Gratitude&#8482; methodology.
          </p>
        </div>

        <div>
          <h4 className="text-[0.64rem] tracking-[0.2em] uppercase text-brand mb-5 font-normal">Services</h4>
          <ul className="list-none space-y-2.5">
            <li>
              <Link href="/#services" className="text-[0.79rem] text-muted no-underline font-light transition-colors hover:text-brand">
                AI Business Consulting
              </Link>
            </li>
            <li>
              <Link href="/#services" className="text-[0.79rem] text-muted no-underline font-light transition-colors hover:text-brand">
                Marketing Strategy &amp; Deployment
              </Link>
            </li>
            <li>
              <Link href="/#services" className="text-[0.79rem] text-muted no-underline font-light transition-colors hover:text-brand">
                AI Team Training &amp; Empowerment
              </Link>
            </li>
            <li>
              <Link href="/ai-voice-agents" className="text-[0.79rem] text-muted no-underline font-light transition-colors hover:text-brand">
                AI Voice Agents
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[0.64rem] tracking-[0.2em] uppercase text-brand mb-5 font-normal">Company</h4>
          <ul className="list-none space-y-2.5">
            <li><Link href="/#gratitude" className="text-[0.79rem] text-muted no-underline font-light transition-colors hover:text-brand">GRATITUDE Framework</Link></li>
            <li><Link href="/#about" className="text-[0.79rem] text-muted no-underline font-light transition-colors hover:text-brand">About Andrea</Link></li>
            <li><Link href="/#industries" className="text-[0.79rem] text-muted no-underline font-light transition-colors hover:text-brand">Industries</Link></li>
            <li><Link href="/#platform" className="text-[0.79rem] text-muted no-underline font-light transition-colors hover:text-brand">AI Platform</Link></li>
            <li><Link href="/privacy-policy" className="text-[0.79rem] text-muted no-underline font-light transition-colors hover:text-brand">Privacy Policy</Link></li>
            <li><a href="mailto:client-services@grateful-marketing.com" className="text-[0.79rem] text-muted no-underline font-light transition-colors hover:text-brand">Contact Us</a></li>
          </ul>
        </div>

        <div>
           <h4 className="text-[0.64rem] tracking-[0.2em] uppercase text-brand mb-5 font-normal">Connect</h4>
           <ul className="list-none space-y-2.5">
             <li><a href="mailto:client-services@grateful-marketing.com" className="text-[0.79rem] text-muted no-underline font-light transition-colors hover:text-brand">
               client-services@grateful-marketing.com
             </a></li>
             <li><a href="tel:+12263329712" className="text-[0.79rem] text-muted no-underline font-light transition-colors hover:text-brand">
               +1 (226) 332-9712
             </a></li>
              <li><span className="text-[0.79rem] text-muted font-light">North America</span></li>
              <li><a href="https://www.instagram.com/grateful.marketing/" target="_blank" rel="noopener noreferrer" className="text-[0.79rem] text-muted no-underline font-light transition-colors hover:text-brand">Instagram</a></li>
              <li><a href="https://www.facebook.com/share/1B5yef4BR8/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-[0.79rem] text-muted no-underline font-light transition-colors hover:text-brand">Facebook</a></li>
           </ul>
        </div>
      </div>
      
      <div className="flex items-center justify-between text-[0.68rem] text-foreground/40 flex-wrap gap-2 pt-2">
        <span>&copy; {new Date().getFullYear()} Grateful Marketing&#8482;. All rights reserved. North America.</span>
        <span className="text-brand/50">Gratitude&#8482; is a globally registered trademark of Grateful Marketing&#8482;.</span>
      </div>
    </footer>
  );
}
