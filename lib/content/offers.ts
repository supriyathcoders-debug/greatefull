import { IMAGES, REVENUE_AUDIT_URL, BOOKING_URL } from "@/lib/constants";

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
  result?: string;
  promise?: string;
  limitedAvailability?: string;
  riskReversal?: string;
  bonus?: string;
};

const OFFERS_BY_ID: Record<OfferId, Offer> = {
  "ai-growth-retainer": {
    id: "ai-growth-retainer",
    number: "01",
    title: "The Grateful Growth AI and Marketing Retainer",
    subtitle: "Your Ongoing AI Growth Partner for Marketing & Sales",
    description:
      "Stop guessing where AI fits into your business. The Grateful Growth AI Retainer gives you a dedicated strategic partner who identifies the highest-ROI opportunities, keeps your campaigns and funnels performing, and makes sure every automation you deploy is safe, smart, and on-brand.\n\n• AI Growth Diagnostic — We map your business end-to-end to uncover high-ROI AI use cases and quick wins you can act on immediately, so you invest in what moves revenue, not what's trendy.\n\n• Monthly Strategic Advisory — Ongoing guidance on campaigns, funnels, and automation keeps your growth engine sharp and adapting, so you're never left second-guessing your next move.\n\n• Implementation Oversight & Governance — We help set the policies, workflows, and prompts that keep your AI tools consistent and compliant, so you scale with confidence instead of chaos.",
    tags: ["Diagnostic", "Strategic Advisory", "Governance"],
    cta: "Let's have a conversation",
    image: IMAGES.bridgeMotifStrategy,
    imageAlt: "The path forward — AI growth retainer",
    href: BOOKING_URL,
    result: "a growth partner in your corner month after month — helping you move faster, spend smarter, and stay ahead without adding headcount.",
    promise: "Walk away from your AI Growth Diagnostic with a clear, prioritized roadmap of high-ROI use cases — or we'll keep working with you at no extra cost until you do.",
    limitedAvailability: "We take on a small number of Retainer clients at a time so every partner gets real strategic attention — 3 spots open this quarter.",
    riskReversal: "No long-term lock-in. Cancel your monthly advisory with 30 days' notice, no penalties, no hard feelings.",
    bonus: "Sign on this month and receive a complimentary AI Policy & Governance Starter Kit (a $750 value) to keep your team compliant from day one.",
  },
  "ai-voice-agent": {
    id: "ai-voice-agent",
    number: "02",
    title: "The AI Voice Agent",
    subtitle: "Your 24/7 AI Receptionist & Lead Intake System",
    description:
      "Every missed call is a missed opportunity. Our AI Voice Agents make sure your business never misses another lead — answering, qualifying, and booking around the clock, in your brand's own voice.\n\n• 24/7 Inbound Call Handling — Answers FAQs, books appointments, and captures leads any time of day, so you capture revenue while you sleep.\n\n• Custom, Brand-Aligned Scripts — Built to sound like you, with smart escalation to a real person when it matters, so customers get a seamless experience from first contact.\n\n• Built-In Privacy Compliance — Consent and data-handling practices aligned with Canadian privacy law, so you get peace of mind alongside performance.",
    tags: ["24/7 Inbound Calls", "Custom Scripts", "Privacy Compliant"],
    cta: "Let's have a conversation",
    image: IMAGES.clientGrowthTransformation,
    imageAlt: "Accelerating growth — AI voice agents",
    href: BOOKING_URL,
    result: "a receptionist that never sleeps, never misses a call, and never lets a lead slip through the cracks.",
    promise: "Your AI Voice Agent will be live and booking real appointments within 14 days of onboarding — guaranteed.",
    limitedAvailability: "We onboard a limited number of Voice Agent builds each month to ensure white-glove setup and script tuning — 4 build slots open this month.",
    riskReversal: "Try it for 30 days. If it's not capturing leads the way we promised, we'll refine the scripts and setup at no charge until it does.",
    bonus: "Founding clients this quarter get a free After-Hours Booking Flow add-on (a $500 value), so you capture leads even when your office is closed.",
  },
  "ai-agent-build": {
    id: "ai-agent-build",
    number: "03",
    title: 'The AI Agent/Employee',
    subtitle: "Your AI Marketing Pod — Pre-Built AI Roles, Ready to Work",
    description:
      "Why hire for every gap when you can deploy an AI teammate instead? Our pre-built AI agents plug into Sales, Operations, and Marketing to handle the work that eats your team's time.\n\n• Role-Ready AI Agents — Pre-built to support Sales, Operations, and Marketing functions, so you get expert-level output without the hiring timeline or overhead.\n\n• Task-Specific Specialists — From proposal writing and script writing to social content development and feedback coaching, each agent is built for a defined job, so your team gets consistent, high-quality output on demand.\n\n• Built to Scale With You — Add or customize agents as your needs grow, so your team's capacity expands without expanding your payroll.",
    tags: ["Role-Ready AI Agents", "Task-Specific Specialists", "Built to Scale"],
    cta: "Let's have a conversation",
    image: IMAGES.innovationAiOpportunity,
    imageAlt: "The AI opportunity — custom AI agent build",
    href: BOOKING_URL,
    result: "an always-on extension of your team — doing the repeatable work so your people can focus on the work only they can do.",
    promise: "Your first AI Employee will be trained, tested, and producing usable work within 3 weeks — or we keep refining it until it delivers.",
    limitedAvailability: "Custom agent builds are capped each month to protect build quality — current opening: 2 pods this quarter.",
    riskReversal: "Not seeing the time savings we promised in the first 30 days? We'll retrain or reconfigure your agent at no additional cost.",
    bonus: "Book your Marketing Pod this month and get a free Feedback Coach agent add-on (a $600 value) to help your team keep improving output over time.",
  },
  "ai-training-intensive": {
    id: "ai-training-intensive",
    number: "04",
    title: "The AI Training Intensive",
    subtitle: "AI for Marketers & Sales Intensive (1–2 Days)",
    description:
      "Give your team the AI skills that actually move the needle — fast. This hands-on intensive turns AI curiosity into real, usable capability your team can apply the next day.\n\n• Practical, Applied Training — Hands-on instruction in using AI for content, campaigns, and lead generation, so your team leaves with skills they'll actually use, not just theory.\n\n• Live Build-Along — Build real prompts and simple agents tailored to your existing tools during the session, so you walk away with working assets, not just notes.\n\n• Responsible AI Module — Covers Canadian data and privacy basics, so your team adopts AI the right way from day one.",
    tags: ["Practical Training", "Live Build-along", "Responsible AI"],
    cta: "Let's have a conversation",
    image: IMAGES.teamCommunityCircle,
    imageAlt: "The power of community — AI team training",
    href: BOOKING_URL,
    result: "a team that's confident, capable, and already producing with AI before the training even ends.",
    promise: "Your team will leave with at least 5 working prompts and one functioning AI agent tailored to your tools — built live, in the room.",
    limitedAvailability: "We run this intensive for a small number of teams per quarter to keep it hands-on — only 2 sessions remaining this quarter.",
    riskReversal: "If your team doesn't leave with usable, working AI assets, we'll run a complimentary follow-up session to get you there.",
    bonus: "Register within 2 weeks and receive a 30-day post-training Slack support line (a $400 value) so your team has backup as they put it into practice.",
  },
  "ai-content-development": {
    id: "ai-content-development",
    number: "05",
    title: "The AI Content Development & Systems",
    subtitle: "AI Content Engine Setup & Monthly Content Ops",
    description:
      "Consistent content shouldn't require a bigger team. We build the AI-powered engine that keeps your blog, social, email, and landing pages full of on-brand content — with a human editor making sure it's always publish-ready.\n\n• Custom AI Content Workflow — Designed and implemented for blogs, social, email, and landing pages, so content production stops being a bottleneck.\n\n• Brand Voice Guidelines & Prompt Library — Paired with human editorial review, so every piece sounds like you and is ready to publish with confidence.\n\n• Ongoing Production & Performance Tracking — Content output tied directly to your marketing goals, so you always know what's working and why.",
    tags: ["Custom AI Workflow", "Brand Voice Guidelines", "Performance Tracking"],
    cta: "Let's have a conversation",
    image: IMAGES.pillarsGratitude,
    imageAlt: "AI Content Engine",
    href: BOOKING_URL,
    result: "a content system that runs like clockwork — freeing your time while keeping your pipeline full of high-quality, on-brand content.",
    promise: "Your AI Content Engine will be live and producing your first batch of on-brand content within 21 days of kickoff.",
    limitedAvailability: "We onboard a limited number of Content Ops clients each month to protect editorial quality — 3 spots open now.",
    riskReversal: "If the first month's content doesn't match your brand voice, we'll revise it free of charge until it does.",
    bonus: "Start this month and receive a complimentary Content Calendar Template & Prompt Library (a $350 value) to jumpstart your first 30 days.",
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
  ({ number, title, description, tags, image, imageAlt, href, result, promise, limitedAvailability, riskReversal, bonus }) => ({
    number,
    title,
    description,
    tags,
    image,
    imageAlt,
    href,
    result,
    promise,
    limitedAvailability,
    riskReversal,
    bonus
  }),
);
