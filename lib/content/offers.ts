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
  "ai-ready-team-intensive",
  "gratitude-licensing",
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
  "ai-ready-team-intensive": {
    id: "ai-ready-team-intensive",
    number: "01",
    title: "The AI-Ready Team Intensive",
    subtitle: "Workshop · Half-Day, Full-Day & Two-Day Formats",
    description:
      "Most AI training teaches software. The AI-Ready Team Intensive teaches transformation — the kind that sticks, spreads through your organization, and shows up in your results within weeks. In one powerful day with Andrea Gureckas, your team moves from AI-hesitant to AI-confident.",
    tags: [
      "Pre-Workshop Audit",
      "Live AI Agent Builds",
      "Custom AI Playbook",
      "30-Day Implementation Support",
    ],
    cta: "Book Your Strategy Call",
    image: IMAGES.teamCommunityCircle,
    imageAlt: "The power of community — AI team training",
    href: "/pre-booking",
  },
  "ai-voice-agent": {
    id: "ai-voice-agent",
    number: "02",
    title: "The AI Voice Agent",
    subtitle: "24/7 Call Answering · Speed-to-Lead · Calendar Booking",
    description:
      "Every unanswered call is a customer calling your competitor next. Your AI Voice Agent answers every call, every time — nights, weekends, holidays — trained on your website and FAQs, sounding like your team, and booking meetings directly to your calendar.",
    tags: [
      "24/7/365 Coverage",
      "Human-Sounding Voice",
      "FAQ-Trained",
      "Calendar Booking",
    ],
    cta: "Book a Free Voice Agent Demo",
    image: IMAGES.clientGrowthTransformation,
    imageAlt: "Accelerating growth — AI voice agents",
    href: "/ai-voice-agents",
  },
  "ai-agent-build": {
    id: "ai-agent-build",
    number: "03",
    title: "The AI Agent Build",
    subtitle: "Custom AI Employees · Foundation, Growth & Enterprise Tiers",
    description:
      "We design, build, and deploy a custom team of AI Agents — department-structured AI Employees configured around your real workflows, using the same architecture that runs Grateful Marketing™ itself. Not a chatbot. A workforce, built once and handed to your team to run.",
    tags: [
      "Department-Mapped Agents",
      "Trained on Your Business",
      "Gratitude™ Methodology",
      "30-Day Post-Launch Support",
    ],
    cta: "Book Your AI Workforce Blueprint",
    image: IMAGES.innovationAiOpportunity,
    imageAlt: "The AI opportunity — custom AI agent build",
    href: "/pre-booking",
  },
  "ai-growth-retainer": {
    id: "ai-growth-retainer",
    number: "04",
    title: "The AI Growth Retainer",
    subtitle: "Ongoing Monthly Partnership · Foundation, Growth & Transformation",
    description:
      "AI strategy without implementation is just a PowerPoint. The AI Growth Retainer is our premium ongoing partnership — Andrea and her team audit your operations, build your AI infrastructure, deploy your tools, and train your people until your team owns it.",
    tags: [
      "Monthly Strategy Sessions",
      "Workflow Audits",
      "AI Agent Development",
      "Performance Dashboard",
    ],
    cta: "Book Your AI Opportunity Audit",
    image: IMAGES.bridgeMotifStrategy,
    imageAlt: "The path forward — AI growth retainer",
    href: "/ai-revenue-audit",
  },
  "gratitude-licensing": {
    id: "gratitude-licensing",
    number: "05",
    title: "The Gratitude™ Licensing Program",
    subtitle: "License a Globally Trademarked AI Methodology",
    description:
      "You don't have to build your AI framework from scratch. Qualified consultants, coaches, and L&D professionals can license the globally trademarked Gratitude™ Methodology — full curriculum, certification, community, and co-marketing referrals from Grateful Marketing™.",
    tags: [
      "Full Licensing Rights",
      "Complete Curriculum",
      "Practitioner Certification",
      "Licensee Community",
    ],
    cta: "Apply for Licensing",
    image: IMAGES.pillarsGratitude,
    imageAlt: "Gratitude always — licensing program",
    href: "/contact",
  },
};

/** Always returns offers in website display order (01 → 05). */
export function getOffersInOrder(): Offer[] {
  return OFFER_ORDER.map((id, index) => ({
    ...OFFERS_BY_ID[id],
    number: String(index + 1).padStart(2, "0"),
  }));
}

/**
 * Legacy testimonial categories in `lib/testimonials.ts`, grouped by offer.
 * Order follows OFFER_ORDER (01 → 05).
 */
export const OFFER_TESTIMONIAL_CATEGORIES: Record<OfferId, readonly string[]> = {
  "ai-ready-team-intensive": ["AI Team Training & Empowerment"],
  "ai-voice-agent": ["AI Voice Agents"],
  "ai-agent-build": ["Integrated Solutions"],
  "ai-growth-retainer": [
    "AI Marketing Strategy & Deployment",
    "AI Business Consulting",
  ],
  "gratitude-licensing": [],
};

export type OfferFilterTab = {
  offerId: OfferId;
  number: string;
  label: string;
  categories: readonly string[];
};

/** Testimonial filter tabs — one per offer that has stories, in document order. */
export function getOfferFilterTabs(): OfferFilterTab[] {
  return getOffersInOrder()
    .map((offer) => ({
      offerId: offer.id,
      number: offer.number,
      label: offer.title.replace(/^The /, ""),
      categories: OFFER_TESTIMONIAL_CATEGORIES[offer.id],
    }))
    .filter((tab) => tab.categories.length > 0);
}

/** Sort key for testimonials when showing “All” — matches offer funnel order. */
export function getTestimonialOfferIndex(category: string): number {
  const idx = OFFER_ORDER.findIndex((id) =>
    OFFER_TESTIMONIAL_CATEGORIES[id].includes(category),
  );
  return idx === -1 ? OFFER_ORDER.length : idx;
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
