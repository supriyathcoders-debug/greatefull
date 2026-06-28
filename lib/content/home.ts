import { IMAGES } from "@/lib/constants";

export { IMAGES };

/**
 * Content from client Website Visual Map.
 * Structure: Hero → GRATITUDE → About → Services → Testimonials →
 * Who We Serve → Founder Quote → AI Platform → Final CTA
 */

export const HERO = {
  eyebrow: "North American AI Marketing Consultancy · Est. 2022",
  headline: "Built around your people.",
  headlineEm: "Powered by AI.",
  supporting:
    "Grateful Marketing™ helps purpose-driven organizations build predictable, profitable growth — without ever losing the human touch your customers trust. Our globally trademarked Gratitude™ methodology keeps people at the center while AI does the heavy lifting behind the scenes.",
  ctaPrimary: "Book Your Strategy Session",
  ctaSecondary: "See How We Work",
  ctaSecondaryHref: "#gratitude",
} as const;

export const GRATITUDE = {
  eyebrow: "Our Methodology",
  heading: "The Gratitude™ Framework",
  subhead: "Globally trademarked · Built for people, scaled by AI",
  intro:
    "Most agencies start with the technology. We start with you — your people, your customers, your purpose. Then we bring AI in to amplify what already makes you worth choosing. Every letter of GRATITUDE keeps a human at the center and a measurable result at the finish line.",
} as const;

/** Client-specified pillar names (exact) */
export const GRATITUDE_PILLARS = [
  {
    letter: "G",
    title: "Goal Setting",
    description:
      "Align every initiative to meaningful, measurable outcomes your team can rally behind.",
    icon: "target",
  },
  {
    letter: "R",
    title: "Research",
    description:
      "Uncover deep market intelligence powered by data-driven analysis and human insight.",
    icon: "search",
  },
  {
    letter: "A",
    title: "Authentic Connection",
    description:
      "Craft human-first messaging that builds genuine, lasting trust with your audience.",
    icon: "heart",
  },
  {
    letter: "T",
    title: "Technology Integration",
    description:
      "Seamlessly embed powerful AI tools into your existing workflows and culture.",
    icon: "cpu",
  },
  {
    letter: "I",
    title: "Iterate & Optimize",
    description:
      "Drive continuous improvement through rapid experimentation and data-led refinement.",
    icon: "refresh",
  },
  {
    letter: "T",
    title: "Team Empowerment",
    description:
      "Train and uplift your people so they lead confidently in an AI-enabled world.",
    icon: "users",
  },
  {
    letter: "U",
    title: "Uplift & Impact",
    description:
      "Achieve sustainable growth that creates positive impact for all stakeholders.",
    icon: "trending",
  },
  {
    letter: "D",
    title: "Deliver & Measure",
    description:
      "Experience radical accountability through transparent reporting and tangible results.",
    icon: "chart",
  },
  {
    letter: "E",
    title: "Evolve & Grow",
    description:
      "Stay ahead of the curve — because standing still means falling behind.",
    icon: "sprout",
  },
] as const;

export const ABOUT = {
  eyebrow: "About Grateful Marketing™",
  heading: "Where genuine purpose meets",
  headingEm: "cutting-edge technology.",
  paragraphs: [
    "Grateful Marketing™ is a North American digital marketing consultancy founded by Andrea — a strategic leader with 25+ years across technology, business consulting, and marketing.",
    "We believe the most powerful marketing isn't just smart — it's grateful. Grateful to customers. Grateful to communities. Driven by a genuine desire to do good in the world.",
    "When you work with Grateful Marketing, you work directly with Andrea — no junior handoffs, no account managers. Just experienced, founder-led thinking applied to your business.",
  ],
} as const;

/** Client-specified service names (exact) */
export const SERVICES = {
  eyebrow: "Our Services",
  heading: "Four pillars of",
  headingEm: "purpose-driven",
  headingSuffix: "growth.",
  intro:
    "Human First. AI Second. Always. Every engagement starts with your people — your team, your customers, your goals. Whether you're taking your first step into AI or ready to scale what's already working, we bring the strategy. You keep the soul of your business.",
  items: [
    {
      number: "01",
      title: "AI Business Consulting",
      description:
        "Your people deserve a strategy built around them — not around the technology. We sit with your team, learn how you actually work, and build a clear AI roadmap that serves your goals and protects what makes you worth choosing.",
      image: IMAGES.heroHumanSpark,
      imageAlt: "The spark of innovation — AI business consulting",
      href: null,
    },
    {
      number: "02",
      title: "Marketing Strategy & Deployment",
      description:
        "Your customers want to feel understood — not marketed to. We design and deploy end-to-end marketing systems that attract the right people, earn their trust, and convert consistently, with AI doing the heavy lifting so your voice stays unmistakably yours.",
      image: IMAGES.bridgeMotifStrategy,
      imageAlt: "The path forward — marketing strategy and deployment",
      href: null,
    },
    {
      number: "03",
      title: "AI Team Training & Empowerment",
      description:
        "Your people aren't the obstacle — they're the whole point. We designed our training around them first: their worries, their roles, their potential. By the end, they don't just use AI confidently. They lead with it.",
      image: IMAGES.cuppedHandsSpark,
      imageAlt: "Cupped hands holding the spark — AI team training",
      href: null,
    },
    {
      number: "04",
      title: "AI Voice Agents",
      description:
        "Every missed call is a real person who needed you and didn't reach you. Our voice agents answer every inquiry with genuine warmth — day, night, and weekends — so no one ever feels ignored, and your team focuses on the conversations that truly need a human.",
      image: IMAGES.clientGrowthTransformation,
      imageAlt: "Accelerating growth — AI voice agents",
      href: "/ai-voice-agents",
    },
  ],
} as const;

/** Client-specified industries (exact) */
export const INDUSTRIES = {
  eyebrow: "Who We Serve",
  heading: "Built for organizations",
  headingEm: "ready to lead with trust.",
  intro:
    "Human First. AI Second. Always. We partner with purpose-driven organizations across highly regulated and trust-dependent sectors — building intelligent systems that keep people at the center.",
  items: [
    {
      title: "B2B & Professional Services",
      description:
        "Your best clients chose you because of trust — not a campaign. We build systems around the relationships that drive real revenue, with AI working quietly behind the scenes.",
      icon: "building",
    },
    {
      title: "D2C Brands",
      description:
        "Your customers chose you because you felt real. We make sure growth never changes that — personalizing at scale while keeping your voice unmistakably yours.",
      icon: "sprout",
    },
    {
      title: "Legal",
      description:
        "Clients come to you in their most vulnerable moments. We build compliant systems that honour that trust, so your team stays focused on what only a lawyer can do.",
      icon: "scale",
    },
    {
      title: "Financial",
      description:
        "Your clients aren't buying a product — they're placing their future in your hands. We help you build genuine authority and earn long-term trust, within every regulatory boundary.",
      icon: "chart",
    },
    {
      title: "Insurance",
      description:
        "Your clients stay because they feel genuinely looked after. We make sure every new prospect feels the same way — from the very first call to every renewal.",
      icon: "shield",
    },
    {
      title: "Service-Based Businesses",
      description:
        "Your work is excellent — your clients know it. We make sure the next right client can find you, and keep the phone ringing without adding more to your plate.",
      icon: "wrench",
    },
  ],
} as const;

export const TESTIMONIALS = {
  eyebrow: "Testimonials",
  heading: "Trusted by leaders who refuse to choose between",
  headingEm: "growth and integrity.",
} as const;

export const FOUNDER_QUOTE =
  "The future of marketing was never a choice between artificial intelligence and authentic humanity. The most powerful AI strategies are built on a foundation of genuine gratitude for the people you have the privilege of serving.";

/** Client-specified platform features (exact titles) */
export const PLATFORM = {
  eyebrow: "The Platform",
  heading: "Powerful",
  headingEm: "tools.",
  headingSuffix: "Thoughtful deployment.",
  intro:
    "We deploy AI marketing through our proprietary, all-in-one AI platform engineered for results, featuring the North American data residency compliance that legal and financial clients require. All client data is handled with the highest standards of privacy and security.",
  features: [
    {
      title: "North American Data Residency",
      description:
        "Secure data storage · Fully compliant · Ideal for legal and financial industries",
      icon: "globe",
    },
    {
      title: "Proprietary All-in-One Platform",
      description:
        "AI-powered all-in-one platform · CRM · Automation · Content · Analytics",
      icon: "platform",
    },
    {
      title: "Certified AI Consultancy",
      description:
        "Certified AI Business Consultant · Trained on the latest tools, strategies, and methodologies",
      icon: "certificate",
    },
  ],
} as const;

export const FINAL_CTA = {
  tagline: "Innovating · Creating · Leading™",
  body: "North American digital marketing consultancy helping purpose-driven organizations build predictable, profitable growth — without ever losing the human touch.",
  ctaPrimary: "Book Your Strategy Session",
} as const;
