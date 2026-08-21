export interface CaseStudy {
  id: string;
  category: string; // The primary discipline for filtering
  client: string;
  industry: string;
  services: string; // e.g. "Digital Marketing Management · Project Management"
  challenge: string;
  approach: string[];
  impact: string;
  capabilities: string;
}

/**
 * Filter categories for the case studies section
 */
export const CASE_STUDY_CATEGORIES = [
  "Digital Marketing Management",
  "Marketing Management",
  "Project Management",
  "AI Strategy & Deployment",
] as const;

export type CaseStudyCategory = (typeof CASE_STUDY_CATEGORIES)[number];

export const caseStudies: CaseStudy[] = [
  {
    id: "cs-cnib",
    category: "Digital Marketing Management",
    client: "CNIB",
    industry: "Non-Profit & Accessibility",
    services: "Digital Marketing Management · Marketing Management",
    challenge:
      "CNIB needed a digital presence — social channels and website alike — that was managed consistently, accurately, and accessibly. They also needed to build an accessibility training program.",
    approach: [
      "This portfolio combines direct digital marketing management with broader marketing management responsibility:",
      "Developed an accessibility training program to teach business about accessibility, on the Internet and other channels, according to AODA.",
      "Managed CMS website content and page updates directly, ensuring digital properties stayed accurate and accessible.",
      "Adapted web and social media messaging for accessibility, healthcare, and inclusion-focused audiences, keeping communications aligned with organizational guidelines.",
    ],
    impact:
      "A digital marketing management relationship built on consistency — accessible, accurate content delivered on schedule, with governance that never lapsed.",
    capabilities:
      "Social platform management, CMS/website management, editorial calendar & analytics ownership, accessibility-conscious marketing management.",
  },
  {
    id: "cs-healthcare-clinic",
    category: "AI Strategy & Deployment",
    client: "Healthcare Clinic",
    industry: "Healthcare / Service-Based Business",
    services: "Voice AI Deployment",
    challenge:
      "Front-desk staff were buried in paperwork and follow-up calls, and after-hours inquiries were going straight to voicemail — costing the clinic new patient bookings.",
    approach: [
      "Deployed an AI Voice Agent to answer calls 24/7, confirm appointments, and handle routine follow-up — freeing the front-desk team to focus on patients in the room.",
    ],
    impact:
      "Cut time spent on paperwork and follow-up in half and increased bookings by 40% within 30 days.",
    capabilities: "24/7 call handling, appointment confirmation, automated follow-up.",
  },
  {
    id: "cs-cibc",
    category: "Marketing Management",
    client: "CIBC",
    industry: "Financial Services",
    services: "Marketing Management · Digital Marketing Management · Project Management",
    challenge:
      "CIBC needed marketing management and digital execution that could move at enterprise pace while meeting the scrutiny financial services communications require.",
    approach: [
      "The mandate combined marketing management, hands-on digital channel oversight, and project management across a regulated stakeholder environment:",
      "Led a research initiative, across teams.",
      "Applied project management rigor to coordinate campaign scopes and internal review cycles across finance-sector stakeholder groups.",
      "Presented marketing campaign strategy for a special digital project launch and performance to senior stakeholders, building consensus on marketing management priorities and investment.",
    ],
    impact:
      "A reference point for the marketing management and project discipline Grateful Marketing®️ brings to any client operating in a regulated or high-scrutiny industry.",
    capabilities:
      "Integrated marketing management, digital channel oversight, review-cycle project management, financial-services stakeholder communication.",
  },

  {
    id: "cs-telus",
    category: "Project Management", // Kept original category, although the text says "Marketing Management · Project Management".
    client: "Telus",
    industry: "Telecommunications",
    services: "Marketing Management · Project Management",
    challenge:
      "Telus needed marketing management that could scale to a large, matrixed organization — with the project management rigor to keep scope, timelines, and stakeholder review on track.",
    approach: [
      "The engagement centered on end-to-end marketing management, underpinned by structured project coordination:",
      "Applied project management discipline to coordinate campaign scopes, timelines, and internal review cycles across a large stakeholder base.",
      "Trained team on digital marketing “best practises” and co-led launch of new microsites, including testing UX, accessibility.",
      "Presented SEO/SEM campaign strategy, performance, and recommendations directly to senior stakeholders, driving consensus on marketing management priorities.",
    ],
    impact:
      "Reinforced a capability that carries through every Grateful Marketing®️ engagement today: translating marketing management recommendations into terms senior stakeholders can act on with confidence.",
    capabilities:
      "Enterprise marketing management, scope/timeline project management, executive stakeholder alignment.",
  },
  {
    id: "cs-roche",
    category: "Marketing Management",
    client: "Roche",
    industry: "Healthcare & Pharmaceutical",
    services: "Marketing Management · Project Management",
    challenge:
      "Roche needed marketing management that could hold up inside a highly regulated, multi-stakeholder environment — where campaign scope, budget, and timeline all had to move in lockstep with internal compliance review.",
    approach: [
      "The engagement paired marketing management with disciplined project management, built around the review cycles healthcare marketing requires:",
      "Owned integrated marketing management — scope, budget, and delivery timelines — across paid digital, social, affiliate, print, and content channels.",
      "Applied project management discipline to coordinate campaign scopes, timelines, and internal review cycles across multiple stakeholder groups.",
      "Adapted messaging and content workflows to meet the accuracy and sensitivity standards required for healthcare audiences.",
    ],
    impact:
      "Demonstrated the ability to hold marketing management and project governance steady inside one of the most compliance-sensitive environments in enterprise marketing.",
    capabilities:
      "Integrated campaign scope & budget ownership, review-cycle project management, healthcare-compliant marketing management.",
  },
  {
    id: "cs-ai",
    category: "AI Strategy & Deployment",
    client: "From Early Adopter to AI-Built Practice",
    industry: "AI Strategy & Deployment",
    services: "Capability Spotlight",
    challenge:
      "Where It Is Today Early adoption has grown into a full AI strategy and deployment practice at Grateful Marketing®️:",
    approach: [
      "Holds the International Certified AI Business Consultant designation, alongside AI Consultant and AI Agents training certifications.",
      "Uses AI daily — Claude and ChatGPT — for research, content development, and campaign analysis across every client deliverable.",
      "Built and operates a full AI team and advisory committee, spanning strategy, sales, client success, marketing, and delivery functions, run on the Gratitude methodology.",
      "Trains client teams directly on AI adoption and workflow integration as part of engagement delivery.",
    ],
    impact:
      "The Offer this experience now underpins Grateful Marketing®️'s AI service lines including the AI Growth Retainer, The AI Voice Agent, The AI Agent, The AI Team Intensive for Sales and Marketing, and The AI Content Engine — helping clients move from AI curiosity to AI-empowered delivery.",
    capabilities:
      "AI-assisted content & workflow design, AI team/agent architecture, prompt engineering, client AI training & change management.",
  },
  {
    id: "cs-additional",
    category: "Digital Marketing Management",
    client: "Additional Notable Engagements",
    industry: "Various",
    services: "Digital Marketing Management",
    challenge:
      "Alongside enterprise marketing and project management work, the portfolio includes hands-on digital marketing management for consumer, animal-health, beauty, and cultural-institution clients — proof the same discipline scales down to fast-moving, platform-native campaigns.",
    approach: [
      "Merial (Animal Health) — Managed social media channels and content calendars for a veterinary/animal-health brand and social media launch, adapting digital marketing management to pet-owner audiences.",
      "LaCoupe (Beauty) — Planned and published social content and managed community engagement for a beauty-sector client, keeping brand voice consistent across fast-turnaround content cycles.",
      "Body Worlds 2 — Ontario Science Centre — Managed the marketing including digital marketing, partnership marketing, PR, advertising for a major cultural-institution exhibit, adapting messaging for a broad public audience. The exhibition had half a million visitors, in less then 6 months.",
      "CDA — Managed social channels for major special events, and content calendars, monitoring community engagement and reporting performance to stakeholders.",
      "Community Spotlight: Habitat for Humanity — As a volunteer Marketing Advisor, provided informal marketing guidance sitting on the Marketing Board and also helped to build homes for the homeless — pro bono, reflecting Grateful Marketing®️’s purpose-driven roots.",
    ],
    impact: "",
    capabilities: "Community engagement, pro-bono marketing advisory.",
  }
];

export default caseStudies;
