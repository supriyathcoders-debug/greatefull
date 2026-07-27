import { IMAGES } from "@/lib/constants";

/**
 * Grateful Marketing™ — Five Offers (website display order)
 *
 * DO NOT REORDER `OFFER_ORDER`. All pages derive display sequence from it.
 *
 * 01 → AI Growth Retainer
 * 02 → AI Voice Agent
 * 03 → AI Agent Build
 * 04 → AI-Ready Team Intensive
 * 05 → Gratitude™ Licensing Program
 */
export const OFFER_ORDER = [
  "ai-growth-retainer",
  "ai-voice-agent",
  "ai-agent-build",
  "ai-training-intensive",
  "ai-content-development",
] as const;

export type OfferId = (typeof OFFER_ORDER)[number];

type Offer = {
  id: OfferId;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: readonly string[];
  cta: string;
  image: string;
  imageAlt: string;
  href: string;
};

const OFFERS_BY_ID: Record<OfferId, Offer> = {
  "ai-growth-retainer": {
    id: "ai-growth-retainer",
    number: "01",
    title: "Grateful Growth AI Retainer",
    subtitle: "Offer: Ongoing AI Growth Partner for Marketing & Sales",
    description:
      "• One-time AI Growth Diagnostic to map out high‑ROI use cases and quick wins.\n• Monthly strategic advisory on campaigns, funnels, and automation.\n• Light implementation oversight and governance (policies, workflows, prompts).",
    tags: ["Diagnostic", "Strategic Advisory", "Governance"],
    cta: "Let's have a conversation",
    image: IMAGES.bridgeMotifStrategy,
    imageAlt: "The path forward — AI growth retainer",
    href: "/ai-revenue-audit",
  },
  "ai-voice-agent": {
    id: "ai-voice-agent",
    number: "02",
    title: "AI Voice Agents",
    subtitle: "Offer: AI Receptionist & Lead Intake System",
    description:
      "• Handles inbound calls 24/7 for FAQs, booking, and lead capture.\n• Custom scripts aligned with brand voice and escalation to humans.\n• Built‑in consent and data‑handling practices aligned with Canadian privacy rules.",
    tags: ["24/7 Calls", "Custom Scripts", "Privacy Compliant"],
    cta: "Let's have a conversation",
    image: IMAGES.clientGrowthTransformation,
    imageAlt: "Accelerating growth — AI voice agents",
    href: "/ai-voice-agents",
  },
  "ai-agent-build": {
    id: "ai-agent-build",
    number: "03",
    title: 'AI Agents / "AI Employees"',
    subtitle: "Offer: AI Marketing Pod (Pre‑Built AI Roles)",
    description:
      "• AI Campaign Analyst for performance summaries and optimization suggestions.\n• AI Content Operations Assistant to manage calendars, briefs, and drafts.\n• AI CRM Assistant for follow‑up messages and basic data updates, under human approval.",
    tags: ["Campaign Analyst", "Content Ops", "CRM Assistant"],
    cta: "Let's have a conversation",
    image: IMAGES.innovationAiOpportunity,
    imageAlt: "The AI opportunity — custom AI agent build",
    href: "/pre-booking",
  },
  "ai-training-intensive": {
    id: "ai-training-intensive",
    number: "04",
    title: "AI Training Intensive",
    subtitle: "Offer: AI for Marketers & Sales Intensive (1–2 Days)",
    description:
      "• Practical training on using AI for content, campaigns, and lead gen.\n• Live build‑along of prompts and simple agents tailored to the client’s tools.\n• Module on responsible AI and Canadian data/privacy basics.",
    tags: ["Practical Training", "Live Build-along", "Responsible AI"],
    cta: "Let's have a conversation",
    image: IMAGES.teamCommunityCircle,
    imageAlt: "The power of community — AI team training",
    href: "/pre-booking",
  },
  "ai-content-development": {
    id: "ai-content-development",
    number: "05",
    title: "AI Content Development & Systems",
    subtitle: "Offer: AI Content Engine Setup & Monthly Content Ops",
    description:
      "• Design and implement an AI‑assisted workflow for blogs, social, email, and landing pages.\n• Brand voice guidelines and prompt library, plus human editorial review.\n• Ongoing content production and performance tracking linked to marketing goals.",
    tags: ["AI-assisted Workflow", "Brand Voice", "Performance Tracking"],
    cta: "Let's have a conversation",
    image: IMAGES.pillarsGratitude,
    imageAlt: "AI Content Engine",
    href: "/pre-booking",
  },
};

/** Always returns offers in website display order (01 → 05). */
export function getOffersInOrder(): Offer[] {
  return OFFER_ORDER.map((id, index) => ({
    ...OFFERS_BY_ID[id],
    number: String(index + 1).padStart(2, "0"),
  }));
}

export const OFFERS = getOffersInOrder();

/** Homepage services cards (derived from official order). */
export const SERVICE_ITEMS = OFFERS.map(
  ({ number, title, description, tags, image, imageAlt, href }) => ({
    number,
    title,
    description,
    tags,
    image,
    imageAlt,
    href,
  }),
);
