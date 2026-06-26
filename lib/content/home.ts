import { IMAGES } from "@/lib/constants";

export { IMAGES };

/**
 * Content from client redesign brief.
 * Structure: Hero → GRATITUDE → About → Services → Testimonials →
 * Industries → Founder Quote → AI Platform → Final CTA
 */

export const HERO = {
  eyebrow: "North American AI Marketing Consultancy",
  headline: "Built around your people.",
  headlineEm: "Powered by AI.",
  supporting:
    "Grateful Marketing™ is a premium human-first AI consultancy. We combine the proprietary GRATITUDE™ methodology with thoughtful AI integration — helping purpose-driven organizations build predictable growth without losing the human touch at the centre of every strategy.",
  ctaPrimary: "Book Your Strategy Session",
  ctaSecondary: "See How We Work",
  ctaSecondaryHref: "#gratitude",
} as const;

export const GRATITUDE = {
  eyebrow: "The GRATITUDE™ Framework",
  intro:
    "Our globally trademarked GRATITUDE™ methodology ensures every AI integration and marketing campaign is built on data, driven by purpose, and designed for measurable ROI.",
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
  eyebrow: "Meet the Founder",
  heading: "Andrea — founder-led consultancy,",
  headingEm: "built on trust.",
  paragraphs: [
    "Grateful Marketing™ is a North American human-first AI consultancy founded by Andrea — a certified AI consultant and strategic leader with over 25 years of experience across technology, business consulting, and digital marketing.",
    "We believe the most powerful marketing isn't just smart — it's grateful. Grateful to customers. Grateful to communities. Driven by a genuine desire to do good in the world.",
    "When you work with Grateful Marketing, you work directly with Andrea — no junior handoffs, no account managers. Just experienced, founder-led thinking applied to your business.",
  ],
} as const;

/** Client-specified service names (exact) */
export const SERVICES = {
  eyebrow: "Our Services",
  heading: "Four pillars of",
  headingEm: "human-first",
  headingSuffix: "growth.",
  intro:
    "Every engagement is designed to meet you exactly where you are. Whether you are just beginning your AI journey or you are ready to scale with full deployment and automation, we have the strategic framework to get you there.",
  items: [
    {
      number: "01",
      title: "AI Business Consulting",
      description:
        "Stop guessing about AI and start leveraging it as your competitive advantage. We audit your current landscape, identify high-value opportunities, and build a clear, actionable AI roadmap tailored to your specific goals and growth stage.",
      href: null,
    },
    {
      number: "02",
      title: "Marketing Strategy & Deployment",
      description:
        "Turn your marketing into a predictable revenue engine. From insight to execution, we design, build, and deploy end-to-end AI-powered marketing systems that attract your ideal customers, convert them consistently, and scale your operations intelligently.",
      href: null,
    },
    {
      number: "03",
      title: "AI Team Training & Empowerment",
      description:
        "Transform your team's hesitation into capability. Your people are your greatest asset. We design and deliver hands-on AI training programs that empower your team to confidently adopt AI tools, think in systems, and drive measurable results.",
      href: null,
    },
    {
      number: "04",
      title: "AI Voice Agents",
      description:
        "24/7 voice automation to turn missed calls into booked opportunities. Capture, qualify, and convert your leads instantly around the clock without scaling your headcount.",
      href: "/ai-voice-agents",
    },
  ],
} as const;

/** Client-specified industries (exact) */
export const INDUSTRIES = {
  eyebrow: "Industries We Serve",
  heading: "Built for organizations",
  headingEm: "ready to lead with trust.",
  intro:
    "We partner with purpose-driven organizations across highly regulated and trust-dependent sectors. When compliance, privacy, and authentic connection are non-negotiable, we build the intelligent systems that fuel your lasting growth.",
  items: [
    {
      title: "B2B & Professional Services",
      description:
        "Attract better clients and close deals more efficiently. We build AI-powered marketing systems that generate leads and nurture your prospects on autopilot.",
      icon: "building",
    },
    {
      title: "Legal",
      description:
        "Scale your practice without increasing your overhead. We build compliant AI systems that automate intake, nurture leads, and manage client communications while maintaining the highest standards of professional trust.",
      icon: "scale",
    },
    {
      title: "Financial",
      description:
        "Drive consistent growth in a highly regulated environment. We help financial advisors and firms build authority through intelligent content, automated lead scoring, and precision-targeted outreach.",
      icon: "chart",
    },
    {
      title: "Insurance",
      description:
        "Turn your reputation into a predictable revenue engine. Our AI-powered systems help you capture leads 24/7, nurture prospect relationships, and stay top-of-mind with your existing client base.",
      icon: "shield",
    },
    {
      title: "Service-Based Businesses",
      description:
        "Turn your reputation into revenue. We help local specialists and growing service companies build a consistent online presence and generate steady inbound leads.",
      icon: "wrench",
    },
  ],
} as const;

export const FOUNDER_QUOTE =
  "The future of marketing isn't choosing between artificial intelligence and authentic humanity — it's understanding that the most powerful AI strategies are built on a foundation of genuine gratitude for the people you have the privilege of serving.";

/** Client-specified platform features (exact titles) */
export const PLATFORM = {
  eyebrow: "The AI Platform",
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
      title: "Proprietary Platform",
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
  heading: "Ready to lead with confidence?",
  body: "Book your strategy session with Andrea — a confidential, founder-led conversation about what human-first AI can do for your organization.",
  ctaPrimary: "Book Your Strategy Session",
} as const;
