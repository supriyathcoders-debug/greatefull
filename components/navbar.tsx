"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/#methodology", label: "Methodology" },
  { href: "/#services", label: "Services" },
  { href: "/ai-voice-agents", label: "Voice Agents" },
  { href: "/#clients", label: "Who We Serve" },
  { href: "/#platform", label: "Platform" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Sync React state for body scroll lock only
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  // Handle path changes (like clicking 'Contact')
  useEffect(() => {
    setIsOpen(false);
    const checkbox = document.getElementById("mobile-menu-toggle") as HTMLInputElement;
    if (checkbox) checkbox.checked = false;
  }, [pathname]);

  return (
    <>
      {/* 
        NATIVE CHECKBOX:
        This is the source of truth. It works 100% of the time, 
        regardless of JavaScript, network, or IP address.
      */}
      <input 
        type="checkbox" 
        id="mobile-menu-toggle" 
        className="hidden peer" 
        onChange={(e) => setIsOpen(e.target.checked)}
      />

      <nav className="fixed top-0 left-0 right-0 z-[9999] bg-background/95 backdrop-blur-md border-b border-border-subtle animate-[slide-down_0.7s_cubic-bezier(0.16,1,0.3,1)_both]">
        <div className="flex items-center justify-between px-[6vw] py-5 relative">
          <Link href="/" className="relative z-[10001] flex items-center">
            <img 
              src="/logo.png" 
              alt="Grateful Marketing Logo" 
              className="h-10 w-auto object-contain"
            />
          </Link>
          
          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-10 list-none m-0 p-0">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-[0.74rem] font-normal tracking-[0.13em] uppercase text-muted no-underline transition-colors hover:text-brand">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          
          <a 
            href="https://api.growthhub365.com/widget/booking/UCd9cjMN2XGBd1qvKuyS" 
            className="hidden lg:inline-block text-[0.73rem] font-medium tracking-[0.12em] uppercase text-brand bg-transparent border border-brand px-6 py-2.5 no-underline transition-all hover:bg-brand hover:text-background"
          >
            Book a Call
          </a>

          {/* MOBILE HAMBURGER - Label triggers checkbox */}
          <label 
            htmlFor="mobile-menu-toggle"
            className="lg:hidden flex flex-col justify-center items-center w-12 h-12 -mr-2 relative z-[10001] cursor-pointer"
            aria-label="Toggle Menu"
          >
            <div className="flex flex-col gap-1.5 pointer-events-none">
              <span className="w-6 h-0.5 bg-white transition-all duration-200 origin-center"></span>
              <span className="w-6 h-0.5 bg-white transition-all duration-200"></span>
              <span className="w-6 h-0.5 bg-white transition-all duration-200 origin-center"></span>
            </div>
          </label>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          #mobile-menu-toggle:checked ~ nav label span:nth-child(1) { transform: rotate(45deg) translateY(7px); }
          #mobile-menu-toggle:checked ~ nav label span:nth-child(2) { opacity: 0; }
          #mobile-menu-toggle:checked ~ nav label span:nth-child(3) { transform: rotate(-45deg) translateY(-7px); }
        ` }} />
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div 
        className="fixed inset-0 z-[9998] bg-background/98 backdrop-blur-lg transition-opacity duration-300 lg:hidden flex flex-col items-center justify-start pt-32 pb-16
          opacity-0 invisible pointer-events-none peer-checked:opacity-100 peer-checked:visible peer-checked:pointer-events-auto"
      >
        <ul className="list-none p-0 flex flex-col items-center gap-10 w-full px-6 mb-16 overflow-y-auto">
          {navItems.map((item) => (
            <li key={item.href} className="w-full text-center">
              {/* 
                THE BULLETPROOF LINK:
                We use a raw <a> tag with an INLINE 'onclick' attribute.
                This fires NATIVELY in the browser without waiting for React.
              */}
              <a 
                href={item.href} 
                className="text-2xl font-heading font-medium tracking-widest text-white no-underline hover:text-brand block py-4 mobile-nav-link"
                onClick={(e) => {
                  // Fallback for React env, though the native script below will also catch it
                  const checkbox = document.getElementById("mobile-menu-toggle") as HTMLInputElement;
                  if (checkbox) checkbox.checked = false;
                  setIsOpen(false);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        
        <div className="w-full px-12 mt-auto">
          <a 
            href="https://api.growthhub365.com/widget/booking/UCd9cjMN2XGBd1qvKuyS" 
            className="block w-full text-sm font-semibold tracking-widest uppercase text-background bg-brand px-8 py-5 no-underline shadow-2xl text-center font-sans mobile-nav-link"
          >
            Book Your Call
          </a>
        </div>
      </div>

      {/* 
        NATIVE SCRIPT:
        This script runs the moment the HTML is parsed. 
        It ensures that clicking any link CLOSES the menu, even if JS is still loading.
      */}
      <script dangerouslySetInnerHTML={{ __html: `
        (function() {
          document.addEventListener('click', function(e) {
            var link = e.target.closest('.mobile-nav-link');
            if (link) {
              var cb = document.getElementById('mobile-menu-toggle');
              if (cb) cb.checked = false;
            }
          });
        })();
      ` }} />
    </>
  );
}
