import { IMAGES } from "@/lib/constants";

export { IMAGES };

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

export const SERVICES = [
  {
    number: "01",
    title: "AI Business Consulting",
    description:
      "Stop guessing about AI and start leveraging it as your competitive advantage. We audit your landscape, identify high-value opportunities, and build a clear, actionable roadmap tailored to your goals.",
    tags: [
      "AI Readiness Audits",
      "Strategic Roadmaps",
      "ROI Modeling",
      "Change Management",
    ],
    href: null,
  },
  {
    number: "02",
    title: "Marketing Strategy & Deployment",
    description:
      "Turn marketing into a predictable revenue engine. We design, build, and deploy end-to-end AI-powered systems that attract ideal customers and scale intelligently.",
    tags: [
      "Smart Content Systems",
      "Lead Generation",
      "AI Automation",
      "CRM Integration",
    ],
    href: null,
  },
  {
    number: "03",
    title: "AI Team Training & Empowerment",
    description:
      "Transform hesitation into capability. We deliver hands-on AI training that empowers your team to adopt tools confidently, think in systems, and drive measurable results.",
    tags: [
      "Interactive Workshops",
      "Hands-On Training",
      "Tool Adoption",
      "Custom Curricula",
    ],
    href: null,
  },
  {
    number: "04",
    title: "AI Voice Agents",
    description:
      "24/7 voice automation that turns missed calls into booked opportunities. Capture, qualify, and convert leads around the clock without scaling headcount.",
    tags: ["24/7 Coverage", "Lead Qualification", "Appointment Booking"],
    href: "/ai-voice-agents",
  },
] as const;

export const INDUSTRIES = [
  {
    title: "B2B & Professional Services",
    description:
      "Attract better clients and close deals more efficiently with AI-powered systems that generate and nurture leads on autopilot.",
    icon: "building",
  },
  {
    title: "Legal",
    description:
      "Build compliant AI systems that automate intake, nurture leads, and manage client communications while maintaining professional trust.",
    icon: "scale",
  },
  {
    title: "Financial",
    description:
      "Drive consistent growth in regulated environments through intelligent content, automated lead scoring, and precision outreach.",
    icon: "chart",
  },
  {
    title: "Insurance",
    description:
      "Turn reputation into a predictable revenue engine with AI systems that capture leads 24/7 and nurture prospect relationships.",
    icon: "shield",
  },
  {
    title: "Service-Based Businesses",
    description:
      "Build a consistent online presence and generate steady inbound leads that convert your expertise into revenue.",
    icon: "wrench",
  },
] as const;

export const PLATFORM_FEATURES = [
  {
    title: "North American Data Residency",
    description:
      "Secure data storage with privacy-first design — ideal for legal, financial, and insurance clients.",
    icon: "globe",
  },
  {
    title: "Proprietary Platform",
    description:
      "All-in-one AI platform · CRM · Automation · Content · Analytics — engineered for results.",
    icon: "platform",
  },
  {
    title: "Certified AI Consultancy",
    description:
      "Certified AI Business Consultant trained on the latest tools, strategies, and methodologies.",
    icon: "certificate",
  },
] as const;

export const FOUNDER_QUOTE =
  "The future of marketing isn't choosing between artificial intelligence and authentic humanity — it's understanding that the most powerful AI strategies are built on a foundation of genuine gratitude for the people you have the privilege of serving.";

export const TRUST_STATS = [
  { value: "25+", label: "Years of Strategic Expertise" },
  { value: "9", label: "Pillars of the GRATITUDE Framework" },
  { value: "™", label: "Globally Trademarked Methodology" },
  { value: "∞", label: "Impact-Driven Results" },
] as const;
