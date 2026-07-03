import { IMAGES } from "@/lib/constants";

export { IMAGES };

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

export const STATS = {
  items: [
    { number: "25+", label: "Years partnering with real businesses" },
    { number: "∞", label: "People served with intention" },
    { number: "5", label: "Pillars of Gratitude™" },
    { number: "™", label: "Globally trademarked methodology" },
  ],
} as const;

export const PROBLEM = {
  eyebrow: "The Problem We Solve",
  heading: "The World Has Plenty of AI.",
  headingEm: "It's Starving for Humanity.",
  intro:
    "Something quietly broke in the marketing world — and most organizations can feel it, even if they haven't named it yet. The tools got smarter. The dashboards got bigger. The content got faster. And somehow — despite all of it — most organizations feel more disconnected from their audience than ever before.",
  pullQuote:
    "When everyone sounds like AI, the rarest thing a brand can offer is a human voice.",
  subheading: "It's Not a Technology Problem. It's a Human One.",
  subIntro:
    "Every week, we talk to leaders across B2B, DTC, and Non-Profit who are running into the same wall — just from different directions.",
  personas: [
    {
      title: "The B2B Leader",
      description:
        "Buried under a stack of AI tools their team doesn't know how to use, a CRM that doesn't reflect their real pipeline, and a content strategy that feels like shouting into a void. They know AI is important. They just don't have a guide they trust.",
    },
    {
      title: "The DTC Founder",
      description:
        "Built something real — a product they believe in, a community that genuinely cares. But somewhere along the way, their brand started sounding like everyone else's. Polished. Generic. Algorithm-optimized. Human-optional. And the numbers are starting to show it.",
    },
    {
      title: "The Non-Profit Leader",
      description:
        "Carries a mission that deserves to move people — and a marketing budget that doesn't. They need AI to extend their capacity. But every agency they've tried has been too expensive, too generic, or too focused on what the technology can do rather than who the organization is here to serve.",
    },
  ],
  insight:
    "Your audience doesn't want to feel marketed to. They want to feel understood. No automation platform manufactures genuine trust. That is a human job — and it requires a human-first strategy.",
  cracksHeading: "Where Most Strategies Break Down.",
  cracksIntro:
    "These are the five cracks we find in almost every organization we work with — regardless of size, sector, or how sophisticated their current setup is.",
  cracks: [
    {
      number: "01",
      title: "Your brand voice has gone missing.",
      description:
        "AI-generated content and templated campaigns have gradually replaced the authentic voice that made your audience choose you in the first place. You're producing more content than ever — and connecting less than ever.",
    },
    {
      number: "02",
      title: "Your team is afraid of AI.",
      description:
        "Not because they aren't capable. Because nobody has taken the time to translate it into something that makes sense for their actual work. The result: a widening gap between what AI could do for you and what it's actually doing.",
    },
    {
      number: "03",
      title: "Your technology is working against your people.",
      description:
        "Tools were bought. Systems were integrated. And now your team spends more time managing the stack than doing the work that matters. AI should reduce friction — not create new categories of it.",
    },
    {
      number: "04",
      title: "You're measuring the wrong things.",
      description:
        "Impressions. Followers. Opens and clicks. Vanity metrics that fill reports and don't fill pipelines. Without real measurement you can't know what's working, what to fix, or where to invest next.",
    },
    {
      number: "05",
      title: "You haven't told your story yet.",
      description:
        "The most differentiating thing about your organization — the reason your best clients chose you — isn't in your marketing yet. It's waiting to be surfaced, shaped, and sent into the world.",
    },
  ],
  outcomesHeading: "This Is What a Human-First Strategy Delivers.",
  outcomes: [
    "A brand voice that always sounds like you. Consistent across every channel, created in a fraction of the time — so your team is freed for the work only people can do.",
    "The right prospects, found and nurtured automatically. So your time goes to real relationships, not chasing cold leads who were never the right fit.",
    "A team that leads AI — instead of being led by it. Confident, capable, and genuinely empowered to use the tools that used to intimidate them.",
    "Campaigns that keep getting smarter. Continuously improving on real data, so your results compound while you sleep.",
    "Marketing your audience can actually feel. Because they can tell the difference between content made for them and content made for the algorithm.",
  ],
  ctaLabel: "If any of this felt familiar — that feeling is the beginning of something.",
} as const;

export const GRATITUDE = {
  eyebrow: "Our Methodology",
  heading: "The Gratitude™ Framework",
  subhead: "Globally trademarked · Built for people, scaled by AI",
  intro:
    "Most agencies start with the technology. We start with you — your people, your customers, your purpose. Then we bring AI in to amplify what already makes you worth choosing. Every letter of GRATITUDE keeps a human at the center and a measurable result at the finish line.",
  personalStory:
    "Andrea's embrace of AI didn't come from a boardroom. It came from necessity. After surviving two motor vehicle accidents that forced her to rebuild from the ground up, she discovered that the combination of human resilience and smart technology wasn't just possible — it was the only way forward. That's the origin of Grateful Marketing™: not a clever business idea, but a lived philosophy. If she could rebuild her own life with gratitude as the compass, she could help organizations do the same.",
} as const;

export const GRATITUDE_PILLARS = [
  {
    letter: "G",
    title: "Goal-Setting & Strategy",
    description:
      "We start with what matters to you, then align every initiative to meaningful, measurable outcomes — so technology always serves the goal, never the other way around.",
    icon: "target",
  },
  {
    letter: "R",
    title: "Research & Insights",
    description:
      "We listen first and analyze deeply, using AI to surface the market intelligence that helps you understand your people better than anyone else does.",
    icon: "search",
  },
  {
    letter: "A",
    title: "Authentic Connection",
    description:
      "We craft human-first messaging that builds genuine, lasting trust — because no algorithm can fake the feeling of being truly understood.",
    icon: "heart",
  },
  {
    letter: "T",
    title: "Technology Integration",
    description:
      "We embed AI into your workflows quietly and seamlessly, so your team feels supported, not replaced.",
    icon: "cpu",
  },
  {
    letter: "I",
    title: "Iterate & Optimize",
    description:
      "We improve in steady, data-informed cycles — learning fast, adjusting often, and keeping you ahead.",
    icon: "refresh",
  },
  {
    letter: "T",
    title: "Team Empowerment",
    description:
      "We train and uplift your people so they lead with confidence in an AI-powered world. Your team gets stronger, not smaller.",
    icon: "users",
  },
  {
    letter: "U",
    title: "Uplift & Impact",
    description:
      "We build growth that creates real, positive impact for your customers, your community, and your bottom line.",
    icon: "trending",
  },
  {
    letter: "D",
    title: "Deliver & Measure",
    description:
      "We hold ourselves to radical accountability: transparent reporting, honest numbers, tangible results.",
    icon: "chart",
  },
  {
    letter: "E",
    title: "Evolve & Grow",
    description:
      "We keep you perpetually ahead of the curve — so your humanity stays constant while your capabilities keep expanding.",
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
    "That belief led to our globally trademarked Gratitude™ methodology: not just a framework, but a lens for building organizations that grow with intention, serve with excellence, and lead with integrity. AI makes it scalable. People make it matter.",
  ],
  expertHeading: "Meet Your Expert — Andrea",
  expertBio:
    "Andrea is the Founder & CEO of Grateful Marketing™ — a strategist, certified AI business consultant, and speaker with 25+ years across technology, business consulting, and digital marketing.",
  expertEnterprise:
    "She has worked with enterprise organizations including Roche, CNIB, Telus, CIBC, and leading marketing agencies — bringing the same human-first lens to every engagement, regardless of scale.",
  expertCredential:
    "Her International Certified AI Business Consultant credential, combined with decades of real-world results, means you're not getting someone who read about AI. You're getting someone who builds with it — every day.",
} as const;

export const SERVICES = {
  eyebrow: "Our Services",
  heading: "Five pillars.",
  headingEm: "Four services.",
  headingSuffix: "One human-first philosophy.",
  intro:
    "The 5 Pillars of Gratitude™ — Time, Gratitude, Innovation, Productivity, and Potential — are the foundation everything is built on. Our four core services are how we deliver them. Every engagement starts with your people: your team, your customers, your goals. We bring the strategy. You keep the soul of your business.",
  items: [
    {
      number: "01",
      title: "AI Business Consulting",
      description:
        "Your people deserve a strategy built around them — not around the technology. We sit with your team, learn how you actually work, and build a clear AI roadmap that serves your goals and protects what makes you worth choosing.",
      tags: ["AI Readiness Audits", "Strategic Roadmaps", "ROI Modeling", "Change Management", "Competitive Analysis"],
      image: IMAGES.heroHumanSpark,
      imageAlt: "The spark of innovation — AI business consulting",
      href: null,
    },
    {
      number: "02",
      title: "Marketing Strategy & Deployment",
      description:
        "Your customers want to feel understood — not marketed to. We design and deploy end-to-end marketing systems that attract the right people, earn their trust, and convert consistently, with AI doing the heavy lifting so your voice stays unmistakably yours.",
      tags: ["Smart Content Systems", "Automated Lead Generation", "AI Automation", "Campaign Management", "Seamless CRM Integration"],
      image: IMAGES.bridgeMotifStrategy,
      imageAlt: "The path forward — marketing strategy and deployment",
      href: null,
    },
    {
      number: "03",
      title: "AI Team Training & Empowerment",
      description:
        "Your people aren't the obstacle — they're the whole point. We designed our training around them first: their worries, their roles, their potential. By the end, they don't just use AI confidently. They lead with it.",
      tags: ["Interactive Workshops", "Hands-On Training", "AI Tool Adoption", "Ongoing Support", "Custom Curricula"],
      image: IMAGES.cuppedHandsSpark,
      imageAlt: "Cupped hands holding the spark — AI team training",
      href: null,
    },
    {
      number: "04",
      title: "AI Voice Agents",
      description:
        "Every missed call is a real person who needed you and didn't reach you. Our voice agents answer every inquiry with genuine warmth — day, night, and weekends — so no one ever feels ignored, and your team focuses on the conversations that truly need a human.",
      tags: ["24/7 Availability", "Lead Qualification", "Intelligent Routing", "Warm Handoffs"],
      image: IMAGES.clientGrowthTransformation,
      imageAlt: "Accelerating growth — AI voice agents",
      href: "/ai-voice-agents",
    },
  ],
} as const;

export const INDUSTRIES = {
  eyebrow: "Who We Serve",
  heading: "Built for organizations",
  headingEm: "ready to lead with trust.",
  intro:
    "We partner with purpose-driven organizations in the sectors where trust isn't optional — where the people you serve deserve genuine care, not just clever systems. We build marketing that honours that standard and AI that quietly supports it.",
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

export const WHY_GM = {
  eyebrow: "Why Grateful Marketing™",
  heading: "The difference is in the approach.",
  points: [
    {
      number: "01",
      title: "Human-First, AI-Powered",
      description:
        "We don't lead with the technology — we lead with you. Every strategy keeps authentic human connection at its core, then uses AI to scale it intelligently. Technology and humanity belong together, and we build like we believe it.",
    },
    {
      number: "02",
      title: "Founder-Led, Always",
      description:
        "You work directly with Andrea — a certified AI consultant and senior strategist. No junior handoffs, no account managers. Just direct, experienced thinking applied to your business.",
    },
    {
      number: "03",
      title: "Proprietary Gratitude™ System",
      description:
        "Our globally trademarked methodology wasn't borrowed from a textbook. It was built over 25+ years of real-world results, grounded in the belief that the best growth serves people first.",
    },
    {
      number: "04",
      title: "Regulated Industry Depth",
      description:
        "We bring particular expertise to legal, financial, and insurance sectors — where trust, compliance, and precision aren't features, they're requirements.",
    },
    {
      number: "05",
      title: "Results Over Hours",
      description:
        "We measure success by your growth, not by time spent. Every engagement is built around tangible outcomes: more of the right leads, better conversions, stronger teams, measurable ROI.",
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

export const OUTCOMES = {
  eyebrow: "Outcomes",
  subhead: "What this means for you and your team.",
  items: [
    "A brand voice that always sounds like you — consistent across every channel, created in a fraction of the time, so your team is freed for the work only people can do.",
    "The right prospects, found and nurtured automatically — so your time goes to real relationships, not chasing cold leads.",
    "Campaigns that keep getting smarter — continuously improving on real data, so your results compound while you sleep.",
    "Reputation cared for, around the clock — automated, on-brand communication that builds trust even when you're off the clock.",
    "Clarity at a glance — instant visibility into the metrics that actually drive your growth.",
    "Privacy your clients can count on — North American data residency and privacy-first design, built for the trust legal, financial, and insurance clients require.",
  ],
} as const;

export const PLATFORM = {
  eyebrow: "The Platform",
  heading: "Powerful",
  headingEm: "tools.",
  headingSuffix: "Thoughtful deployment.",
  intro:
    "We deliver through a proprietary, all-in-one platform engineered for results — with the North American data residency that trust-dependent industries require. Every client's data is handled with the highest standards of privacy and security, because earning trust is the whole point.",
  features: [
    {
      title: "North American Data Residency",
      description:
        "Secure storage · Fully compliant · Built for legal, financial, and insurance industries",
      icon: "globe",
    },
    {
      title: "Proprietary All-in-One Platform",
      description:
        "CRM · Automation · Content · Analytics — unified, so nothing falls through the cracks",
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
  body: "North American digital marketing consultancy serving legal, financial, insurance, B2B, D2C, and service-based organizations — through the human-first, globally trademarked Gratitude™ methodology.",
  ctaPrimary: "Book Your Strategy Session",
} as const;
