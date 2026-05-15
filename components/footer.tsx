import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#060d14] px-[6vw] pt-20 pb-10 border-t border-brand/20 mt-16">
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
            North American AI-powered digital marketing consultancy serving legal, financial, insurance, B2B, D2C, and service-based businesses through the proprietary Gratitude™ methodology.
          </p>
          {/* GM Icon removed since main logo includes branding */}
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
                Marketing Strategy & Deployment
              </Link>
            </li>
            <li>
              <Link href="/#services" className="text-[0.79rem] text-muted no-underline font-light transition-colors hover:text-brand">
                AI Team Training
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[0.64rem] tracking-[0.2em] uppercase text-brand mb-5 font-normal">Company</h4>
          <ul className="list-none space-y-2.5">
            <li><Link href="/#methodology" className="text-[0.79rem] text-muted no-underline font-light transition-colors hover:text-brand">Our Methodology</Link></li>
            <li><Link href="/#clients" className="text-[0.79rem] text-muted no-underline font-light transition-colors hover:text-brand">Who We Serve</Link></li>
            <li><Link href="/#why" className="text-[0.79rem] text-muted no-underline font-light transition-colors hover:text-brand">Why Grateful Marketing</Link></li>
            <li><Link href="/#platform" className="text-[0.79rem] text-muted no-underline font-light transition-colors hover:text-brand">AI Platform</Link></li>
            <li><Link href="/privacy-policy" className="text-[0.79rem] text-muted no-underline font-light transition-colors hover:text-brand">Privacy Policy</Link></li>
            <li><a href="mailto:hello@gratefulmarketing.com" className="text-[0.79rem] text-muted no-underline font-light transition-colors hover:text-brand">Contact Us</a></li>
          </ul>
        </div>

        <div>
           <h4 className="text-[0.64rem] tracking-[0.2em] uppercase text-brand mb-5 font-normal">Connect</h4>
           <ul className="list-none space-y-2.5">
             <li><a href="#" className="text-[0.79rem] text-muted no-underline font-light transition-colors hover:text-brand">LinkedIn</a></li>
             <li><a href="#" className="text-[0.79rem] text-muted no-underline font-light transition-colors hover:text-brand">Instagram</a></li>
             <li><a href="#" className="text-[0.79rem] text-muted no-underline font-light transition-colors hover:text-brand">Facebook</a></li>
             <li>
               <a href="mailto:hello@gratefulmarketing.com" className="text-[0.79rem] text-muted no-underline font-light transition-colors hover:text-brand">
                 hello@gratefulmarketing.com
               </a>
             </li>
             <li>
               <span className="text-[0.79rem] text-muted font-light">North America 🌎</span>
             </li>
           </ul>
        </div>
      </div>
      
      <div className="flex items-center justify-between text-[0.68rem] text-foreground/40 flex-wrap gap-2 pt-2">
        <span>© {new Date().getFullYear()} Grateful Marketing™. All rights reserved. North America.</span>
        <span className="text-brand/50">Gratitude™ is a globally registered trademark of Grateful Marketing™.</span>
      </div>
    </footer>
  );
}
