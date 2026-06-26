import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const mono = Outfit({
  variable: "--font-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: {
//     default: "Grateful Marketing™ | AI Automation Agency",
//     template: "%s | Grateful Marketing™",
//   },
//   description:
//     "Premium AI automation agency helping service businesses capture, qualify, and convert more leads with AI revenue systems.",
// };
export const metadata: Metadata = {
  title: {
    default: "Grateful Marketing™ | Human-First AI Consultancy",
    template: "%s | Grateful Marketing™",
  },

  description:
    "Premium human-first AI consultancy. Built around your people, powered by AI. GRATITUDE™ methodology, AI business consulting, marketing strategy, team training, and voice agents for North American enterprises.",

  openGraph: {
    title: "Grateful Marketing™ | Human-First AI Consultancy",
    description:
      "Built around your people. Powered by AI. Premium AI marketing consultancy serving legal, financial, insurance, B2B, and service-based businesses.",
  },
  verification: {
    google: "7r5toPumjGEoNgJWa-8BgoZ_kQOMwgkO3jgxC2DX8jQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${cormorant.variable} ${playfair.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteShell>{children}</SiteShell>
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="69e7beafc4832102b4d30526"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
