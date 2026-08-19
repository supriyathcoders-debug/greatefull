import { IMAGES } from "@/lib/constants";
import { SERVICE_ITEMS } from "@/lib/content/offers";

export { IMAGES };

export const HERO = {
  eyebrow: "North American AI Marketing Consultancy · Est. 2022",
  headline: "Here's the",
  headlineEm: "Problem.",
  supporting: "Leads go unanswered. Teams drown in repetitive tasks. Growth stalls because there’s no real AI strategy — just guesswork. Grateful Marketing™ fixes this for Direct to Consumer Businesses, Business to Business Companies, Service-Based Businesses, and Non-Profits — with AI Voice Agents that capture every lead, an AI Growth Retainer that pairs strategy with execution, AI Employees  and AI Marketing Content Engines that handle the busywork — so your team can focus on what actually grows the business.",
  ctaPrimary: "Let's have a conversation",
  ctaSecondary: "See How We Work",
  ctaSecondaryHref: "#about",
} as const;

export const STATS = {
  items: [
    { number: "25+", label: "Years partnering with real businesses" },
    { number: "50+", label: "Brands and Businesses served" },
    { number: "∞", label: "People served with intention" },
    { number: "™", label: "Gratitude™ trademarked methodology" },
  ],
} as const;

export const PROBLEM = {
  eyebrow: "The Problem We Solve",
  mainHeading: "The World Has Plenty of AI. It's Starving for Humanity.",
  mainDescription: "Something quietly broke in the marketing world — and most organizations can feel it, even if they haven't named it yet.\n\nThe tools got smarter. The dashboards got bigger. The content got faster. And somehow — despite of all of it — most organizations feel more disconnected from their audience than ever before.",

  pullQuote:
    "When everyone sounds like AI, the rarest thing a brand can offer is a human voice.",
  subheading: "It's Not a Technology Problem. It's a Human One.",
  subIntro:
    "Every week, we talk to leaders across Business to Business, Direct to Consumer and Non-Profit Businesses — who are running into the same wall — just from different directions.",
  personas: [
    {
      title: "The Business to Business Leader",
      description:
        "Buried under a stack of AI tools their team doesn't know how to use, a CRM that doesn't reflect their real pipeline, and a content strategy that feels like shouting into a void. They know AI is important. They just don't have a guide they trust.",
      howWeHelp: "The Grateful Growth Retainer gives your team a clear AI roadmap and hands-on strategic guidance — no more guessing which tool to try next. Our AI Voice Agent covers your sales and customer service lines around the clock, so qualified leads get an instant response instead of a missed call. And our AI Agent/Employee takes over the repetitive work in sales, operations, and marketing, freeing your team to focus on closing deals and building the pipeline.",
    },
    {
      title: "The Direct to Consumer Business",
      description:
        "Built something real — a product they believe in, a community that genuinely cares. But somewhere along the way, their brand started sounding like everyone else's. Polished. Generic. Algorithm-optimized. Human-optional. And the numbers are starting to show it.",
      howWeHelp: "The Grateful Growth Retainer helps you use AI to sharpen your brand voice instead of diluting it, with strategic guidance on where AI belongs in your funnel — and where it doesn't. Our AI Voice Agent keeps customer conversations warm and responsive at any hour, and our AI Agent/Employee handles the repetitive operational work behind the scenes, so your team can spend its time on the creative and community work that made your brand distinct in the first place.",
    },
    {
      title: "The Non-Profit Leader",
      description:
        "Carries a mission that deserves to move people — and a marketing budget that doesn't. They need AI to extend their capacity. But every agency they've tried has been too expensive, too generic, or too focused on what the technology can do rather than who the organization is here to serve.",
      howWeHelp: "We build an AI Employee and Agent trained on your brand voice and mission, so your outreach stays consistent across sales, operations, and marketing without adding headcount. Our AI Team Training Intensive then gets your staff comfortable putting these tools to work themselves, so the capacity you gain today keeps compounding long after the engagement ends.",
    },
    {
      title: "The Service-Based Business",
      description:
        "Runs a business where excellent customer service and fast lead response are critical. If a call is missed, then the customer will be lost to the competition.",
      howWeHelp: "We install an AI Voice Agent that picks up every call, day or night, so a busy afternoon or an after-hours emergency never means a lost customer. Your team responds to real leads and real clients — the AI handles the phone.",
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
  ctaLabel: "If any of this felt familiar — that feeling is the beginning of something. The organizations who fix it first are the ones your competitors will be trying to catch up to a year from now.",
} as const;

export const GRATITUDE = {
  eyebrow: "Our Methodology",
  heading: "The Gratitude™ Framework",
  subhead: "Gratitude™ trademarked · Built for people, scaled by AI",
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

export const WHY_GM = {
  eyebrow: "Why Grateful Marketing™",
  heading: "The difference is in the approach.",
  items: [
    {
      number: "01",
      title: "Human-First, AI-Second",
      description: "— We don't lead with the technology — we lead with you. Every strategy keeps authentic human connection at its core, then uses AI to scale it intelligently. Technology and humanity belong together, and we build like we believe it."
    },
    {
      number: "02",
      title: "Founder-Led, Always",
      description: "— You work directly with Andrea — a certified AI consultant and senior strategist. No junior handoffs, no account managers. Just direct, experienced thinking applied to your business."
    },
    {
      number: "03",
      title: "Proprietary Gratitude™ System",
      description: "— Our Gratitude™ trademarked methodology wasn't borrowed from a textbook. It was built over 25+ years of real-world results, grounded in the belief that the best growth serves people first."
    },
    {
      number: "04",
      title: "Regulated Industry Depth",
      description: "— We bring particular expertise to legal, healthcare, financial, and insurance sectors — where trust, compliance, and precision aren't features, they're requirements."
    },
    {
      number: "05",
      title: "Results Over Hours",
      description: "— We measure success by your growth, not by time spent. Every engagement is built around tangible outcomes: more of the right leads, better conversions, stronger teams, measurable ROI."
    }
  ]
} as const;

export const ABOUT = {
  eyebrow: "About Grateful Marketing™",
  heading: "Where genuine purpose meets",
  headingEm: "cutting-edge technology.",
  paragraphs: [
    "Grateful Marketing™ is a digital marketing consultancy founded by Andrea, a 25+ year marketing and AI strategist, helping organizations to apply AI to drive innovation, efficiency and growth.",
    "We believe the most powerful marketing isn't just smart — it's grateful. Grateful to customers. Grateful to communities. Driven by a genuine desire to do good in the world.",
    "That belief led to our Gratitude™ trademarked methodology: not just a framework, but a lens for building organizations that grow with intention, serve with excellence, and lead with integrity. AI makes it scalable. People make it matter.",
  ],
  expertHeading: "Meet Your Expert — Andrea",
  expertBio:
    "Andrea is the Founder and CEO of Grateful Marketing™ - A Strategist and Internationally Recognized AI Business Consultant, with 25+ years of experience, across technology, business consulting, and digital marketing.",
  expertEnterprise:
    "She has worked with enterprise organizations including Roche, CNIB, Telus, CIBC, and leading marketing agencies — bringing the same human-first lens to every engagement, regardless of scale.",
  expertCredential:
    "Andrea has earned her BCOMM degree - Bachelor of Commerce - Marketing Management, from Ryerson University and her certification as an Internationally Recognized AI Business Consultant and AI Agent Builder. This, combined with decades of real-world results, means you’re not getting someone who just read about AI. You are getting someone who builds with it - every day.",
} as const;

export const SERVICES = {
  eyebrow: "Our Services",
  heading: "Five offers.",
  headingEm: "One human-first",
  headingSuffix: "philosophy.",
  intro: "Human First. AI Second. Each offer maps to a step in your AI journey — from ongoing AI and Marketing growth partnerships, to AI voice coverage, a full AI workforce, AI team training/readiness, and AI content engines/development. Every engagement starts with your people: your customers, your goals. We bring the strategy. You keep the soul of your business.",
  items: SERVICE_ITEMS,
} as const;

export const INDUSTRIES = {
  eyebrow: "Who We Serve",
  heading: "Built for organizations",
  headingEm: "ready to lead with trust.",
  intro:
    "We partner with purpose-driven organizations in the sectors where trust isn't optional — where the people you serve deserve genuine care, not just clever systems. We build marketing that honours that standard and AI that quietly supports it.",
  items: [
    {
      title: "Service-Based Businesses",
      description:
        "Medispas, dental practices, insurance agencies, plumbers, electricians, and other local experts. Your work is excellent — your clients know it. We make sure the next right client can find you, and keep your phone ringing without adding more to your plate. We do this by setting up Voice AI Agents, that answer calls 24/7, 365 days a year. No more missed customer calls getting lost to the competition — saving you time and money.",
      icon: "wrench",
    },
    {
      title: "Business to Business and Direct to Consumer Companies",
      description:
        "Whether your buyer is a business or a person, they chose you because of trust — not a campaign. We build systems around relationships that drive real revenue, with AI working quietly in the background. We help you with AI Strategy, to maximize your marketing and business growth and also build AI Voice Agents and AI Agents/Employees — maximizing your sales and marketing efforts, and saving you time and money.",
      icon: "building",
    },
    {
      title: "Non-Profits",
      description:
        "Your mission deserves to move people, and your budget deserves to stretch further. We bring AI to extend your capacity — without ever making your outreach feel less human, We train AI Agents on your brand tone, personality, and guidelines — so you have consistent, effective marketing that gets results, and is on brand, while saving you time and money.",
      icon: "sprout",
    },



  ],
} as const;


export const CASE_STUDIES = {
  eyebrow: "Client Case Studies",
  heading: "Real results from",
  headingEm: "real partnerships.",
} as const;

export const FOUNDER_QUOTE =
  "The future of marketing was never a choice between artificial intelligence and authentic humanity. The most powerful AI strategies are built on a foundation of genuine gratitude for the people you have the privilege of serving.";

export const OUTCOMES = {
  eyebrow: "Outcomes",
  subhead: "What this means for you and your team.",
  items: [
    {
      title: "A brand voice that always sounds like you",
      description: "— Hours given back every week — the content, follow-up, and admin work that used to eat your afternoons, now handled automatically.",
    },
    {
      title: "The right prospects, found and nurtured automatically",
      description: "— Faster answers, every time — clients and prospects get a response in minutes, not days.",
    },
    {
      title: "Campaigns that keep getting smarter",
      description: "— One team, working as one — your AI tools and your people pulling in the same direction, instead of fighting each other.",
    },
    {
      title: "Reputation cared for, around the clock",
      description: "— automated, on-brand communication that builds trust even when you're off the clock.",
    },
    {
      title: "Clarity at a glance",
      description: "— instant visibility into the metrics that actually drive your growth.",
    },
    {
      title: "Privacy your clients can count on",
      description: "— North American data residency and privacy-first design, built for the trust that healthcare, legal, financial, and insurance clients require.",
    },
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
        "Secure storage · Fully compliant · Built for healthcare, legal, financial, and insurance industries",
      icon: "globe",
    },
    {
      title: "Proprietary All-in-One Platform",
      description:
        "CRM · Automation · Content · Analytics — unified, so nothing falls through the cracks",
      icon: "platform",
    },
    {
      title: "Internationally Recognized AI Business Consultancy",
      description:
        "Internationally Recognized AI Business Consultant and AI Agent Builder - trained on the latest tools, strategies and methodologies.",
      icon: "certificate",
    },
  ],
} as const;

export const FINAL_CTA = {
  heading: "Your people are ready. Let's make sure your marketing is too.",
  subheading: "One real conversation is where every one of these outcomes starts.",
  buttonPrimary: "Get your AI Revenue Audit",
  buttonSecondary: "Let's have a conversation",
  tagline: "Innovating · Creating · Leading",
  body: "North American digital marketing consultancy serving legal, financial, insurance, Business-to-Business, Direct-to-Customer and service-based organizations — through the human-first, Gratitude™ trademarked methodology.",
  ctaPrimary: "Let's have a conversation",
} as const;
