export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  title: string;
  company?: string;
  category: string;
  industry?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    category: 'AI Business Consulting',
    industry: 'Legal Services',
    quote:
      "We were running a traditional practice with siloed processes. Grateful Marketing conducted a comprehensive audit of our operations and showed us where AI could streamline case research, document management, and client communication without compromising our ethical obligations. Their strategic recommendations have saved us 8+ hours per week and reduced errors. But what impressed me most was how they positioned AI as a tool to elevate our practice, not replace our expertise.",
    name: 'Richard Thompson',
    title: 'Managing Partner | Law Firm',
    company: 'Law Firm',
  },
  {
    id: 't2',
    category: 'AI Business Consulting',
    industry: 'Insurance & Financial Services',
    quote:
      "Compliance was our biggest concern with AI adoption. Grateful Marketing didn't just recommend tools—they helped us build a strategic framework that accounts for regulatory requirements, data security, and client trust. Their business consulting approach meant we weren't just implementing AI; we were transforming how we serve clients while maintaining the highest standards. That strategic thinking is invaluable in our industry.",
    name: 'Maria Santos',
    title: 'Compliance Director | Financial Services Firm',
    company: 'Financial Services Firm',
  },
  {
    id: 't3',
    category: 'AI Business Consulting',
    industry: 'B2B Consulting & Professional Services',
    quote:
      "We hired Grateful Marketing as a strategic consultant to help us understand how AI could evolve our service delivery model. They conducted deep-dive interviews with our team, analyzed our workflows, and delivered a comprehensive business strategy that showed exactly where AI could create competitive advantage. More importantly, they helped us think about revenue implications, team restructuring, and client value proposition in a changing landscape. Their consulting has positioned us for the next 5 years.",
    name: 'Michael Chang',
    title: 'Operations Director | Management Consulting Firm',
    company: 'Management Consulting Firm',
  },
  {
    id: 't4',
    category: 'AI Business Consulting',
    industry: 'Healthcare & Medical Practice',
    quote:
      "As we scaled to multiple locations, we realized we needed a cohesive strategy for patient experience and operational consistency. Grateful Marketing's consulting work included financial modeling, process mapping, and AI opportunity assessment across all sites. Their insights helped us prioritize which AI implementations would deliver the highest ROI while maintaining the quality of patient care we're known for. They think like a business partner, not just a vendor.",
    name: 'Dr. Amelia Foster',
    title: 'Medical Director | Multi-Location Medical Practice',
    company: 'Multi-Location Medical Practice',
  },
  {
    id: 't5',
    category: 'AI Marketing Strategy & Deployment',
    industry: 'Senior Care & Healthcare Services',
    quote:
      "We needed a comprehensive solution to capture leads 24/7 while maintaining the warm, compassionate tone families expect from senior care facilities. Grateful Marketing deployed a custom voice agent and developed an integrated content strategy—blog posts, email sequences, and social media—all infused with AI assistance. The combination has been transformative. We're capturing leads around the clock, nurturing them through AI-powered content, and our conversion rate has doubled in 6 months.",
    name: 'Margaret Chen',
    title: 'Operations Director | Senior Living Services',
    company: 'Senior Living Services',
  },
  {
    id: 't6',
    category: 'AI Marketing Strategy & Deployment',
    industry: 'Dental Practices',
    quote:
      "Our old website wasn't converting visitors. Grateful Marketing didn't just redesign it—they built an AI-powered content strategy that included patient education blogs, automated email nurture sequences, and patient testimonial videos. They also set up an AI system to respond to online reviews and manage our reputation. The strategy is cohesive, our website traffic is up 45%, and new patient inquiries have increased significantly. They understand marketing AND technology.",
    name: 'Dr. Sarah Mitchell',
    title: 'Practice Owner | Dental Services',
    company: 'Dental Services',
  },
  {
    id: 't7',
    category: 'AI Marketing Strategy & Deployment',
    industry: 'Wellness & Chiropractic',
    quote:
      "Grateful Marketing created an entire AI team of agents to handle different aspects of our client experience—intake calls via voice agent, appointment reminders, post-treatment follow-ups, and feedback collection. But what made it special was how they integrated them into our workflow without overwhelming our staff. Each AI team member has a clear role, personality, and purpose. Our client satisfaction scores are up, our staff workload is down, and everything feels natural and branded to our practice culture.",
    name: 'David Kumar',
    title: 'Chiropractic Practice Owner | Wellness & Physical Health',
    company: 'Chiropractic Practice',
  },
  {
    id: 't8',
    category: 'AI Marketing Strategy & Deployment',
    industry: 'Beauty & Personal Services',
    quote:
      "We needed a modern booking app that would let clients book online and receive appointment reminders. Grateful Marketing developed a custom app and paired it with an AI-powered social media content strategy. Now Instagram, TikTok, and Facebook are populated with AI-generated beauty tips, styling suggestions, and before-and-afters—all branded to our salon's voice. The app increased online bookings by 60%, and our social media engagement is at an all-time high.",
    name: 'Nicole Patel',
    title: 'Salon Owner | Beauty & Personal Services',
    company: 'Salon',
  },
  {
    id: 't9',
    category: 'AI Marketing Strategy & Deployment',
    industry: 'Non-Profit & Community Organizations',
    quote:
      "Donor stewardship takes time we don't have. Grateful Marketing deployed an AI-powered email and content strategy that segments our donor base and personalizes communication—thank-you messages, impact updates, and giving opportunities—all at scale. The technology is invisible to our donors; the communication feels deeply personal. Our donor retention has increased 35%, and we're spending less time on administrative tasks and more time on mission work.",
    name: 'Patricia Lewis',
    title: 'Executive Director | Community Non-Profit',
    company: 'Community Non-Profit',
  },
  {
    id: 't10',
    category: 'AI Marketing Strategy & Deployment',
    industry: 'B2B & SaaS',
    quote:
      "Grateful Marketing implemented a voice agent that qualifies inbound leads, asks discovery questions, and transfers warm leads to our sales team. Simultaneously, they built an AI content marketing system generating whitepapers, case studies, and product comparison guides. The voice agent closes 60% of deals before they even hit our sales team—they only get the hot leads. Our sales cycle is shorter, and our conversion rate has improved dramatically.",
    name: 'Victoria Hayes',
    title: 'VP of Sales | B2B SaaS Company',
    company: 'B2B SaaS Company',
  },
  {
    id: 't11',
    category: 'AI Marketing Strategy & Deployment',
    industry: 'E-Commerce & Retail',
    quote:
      "Our product descriptions were generic and weren't converting. Grateful Marketing implemented an AI system to generate compelling, SEO-optimized product pages and paired it with an AI-powered email marketing strategy that uses purchase behavior and browsing history to recommend products. Conversion rate is up 38%, email open rates are at 32%, and we're capturing more repeat customers.",
    name: 'Lauren Bennett',
    title: 'Customer Experience Manager | E-Commerce Company',
    company: 'E-Commerce Company',
  },
  {
    id: 't12',
    category: 'AI Marketing Strategy & Deployment',
    industry: 'Insurance & Financial Services',
    quote:
      "Insurance onboarding is complex and client anxiety is high. Grateful Marketing designed a voice agent that guides new clients through intake, answers FAQs, and collects documents—all conversationally and compliantly. The website was redesigned to support the voice agent experience, with clear CTAs and educational content. Client satisfaction with the onboarding process has increased 42%, and we're handling double the volume without adding staff.",
    name: 'Thomas Walsh',
    title: 'VP of Operations | Insurance Company',
    company: 'Insurance Company',
  },
  {
    id: 't13',
    category: 'AI Team Training & Empowerment',
    industry: 'Dental Practices',
    quote:
      "Grateful Marketing didn't just drop technology on our team; they conducted a comprehensive training that covered AI fundamentals, how to use the voice agent tools, and how to troubleshoot issues. The half-day intensive was engaging and practical. Our front desk staff, who were initially skeptical, left feeling confident and empowered. Six months later, they're suggesting improvements to the system. That's true team empowerment.",
    name: 'Jessica Torres',
    title: 'Practice Manager | Dental Group',
    company: 'Dental Group',
  },
  {
    id: 't14',
    category: 'AI Team Training & Empowerment',
    industry: 'Wellness & Integrative Health',
    quote:
      "We set up an entire AI team of agents to manage different functions. Grateful Marketing's training sessions ensured every staff member understood which agent to use for what purpose, how to monitor their performance, and how to provide feedback to improve them. Their ability to make complex AI concepts accessible was remarkable. Our team moved from fear to excitement about the technology in just a few sessions.",
    name: 'Amanda Rodriguez',
    title: 'Clinic Director | Integrative Health Center',
    company: 'Integrative Health Center',
  },
  {
    id: 't15',
    category: 'AI Team Training & Empowerment',
    industry: 'Non-Profit & Community Organizations',
    quote:
      "We're a lean team wearing many hats. Grateful Marketing customized their training to our realities—not generic corporate training, but practical, hands-on sessions that showed our staff exactly how AI could make their jobs easier. They even created a small internal guide tailored to our operations. The training was affordable, relevant, and the support afterward made us feel like we had a partner invested in our success.",
    name: 'James Park',
    title: 'Communications Director | Social Impact Organization',
    company: 'Social Impact Organization',
  },
  {
    id: 't16',
    category: 'AI Team Training & Empowerment',
    industry: 'Multi-Location Medical Practice',
    quote:
      "The challenge was ensuring consistent understanding across 5 locations with different staff levels and technical comfort. Grateful Marketing delivered location-specific training sessions, created video guides, and established a support protocol. Every location adopted the AI tools confidently. Six months later, they followed up with advanced training sessions to help teams leverage the technology more strategically. Their commitment to long-term team success is evident.",
    name: 'Susan Walsh',
    title: 'Office Manager | Specialty Health Clinic',
    company: 'Specialty Health Clinic',
  },
  {
    id: 't17',
    category: 'AI Team Training & Empowerment',
    industry: 'Hospitality & Event Management',
    quote:
      "As we added AI systems for event management and client communication, we needed our team to understand the tools and see them as enablers, not replacements. Grateful Marketing's training approach was engaging—they used real event scenarios, case studies, and hands-on practice. Our team moved from adoption to innovation; they're now suggesting new use cases. That's the hallmark of great training.",
    name: 'Christopher Lee',
    title: 'Event Coordinator | Boutique Event Planning',
    company: 'Boutique Event Planning',
  },
  {
    id: 't18',
    category: 'Integrated Solutions',
    industry: 'B2B Consulting & Professional Services',
    quote:
      "Grateful Marketing delivered consulting on where AI fits in our business model, designed a comprehensive marketing strategy with voice agents and content systems, and trained our team to execute flawlessly. The integrated approach meant everything aligned—strategy informed deployment, and training ensured adoption. Our business model evolved, our revenue process improved, and our team felt empowered throughout. That's a true business transformation.",
    name: 'Michael Chang',
    title: 'Operations Director | Management Consulting Firm',
    company: 'Management Consulting Firm',
  },
  {
    id: 't19',
    category: 'Integrated Solutions',
    industry: 'Financial Services',
    quote:
      "Maria and I engaged Grateful Marketing for strategic consulting on how AI could serve our compliance and efficiency goals. They built a deployment strategy that respected our regulatory environment, implemented voice agents and systems that were audit-ready, and trained our team on compliance implications. Every service reinforced the others. We improved efficiency without compromising integrity.",
    name: 'Thomas Walsh',
    title: 'VP of Operations | Insurance Company',
    company: 'Insurance Company',
  },
  {
    id: 't20',
    category: 'AI Voice Agents',
    industry: 'Retail & E-Commerce',
    quote:
      "During peak season, our phones become a wall of noise — order questions, return requests, stock inquiries, all at once. Our team was stretched thin and customers were waiting too long. Grateful Marketing's voice agent changed that overnight. It handles the high-volume, repeatable calls with a warmth that genuinely sounds like our brand, so every customer feels attended to from the first ring. Our human team now steps in only where their judgment and empathy actually matter. Wait times dropped by 70%, and our customer satisfaction scores went up during our busiest quarter ever — which used to be our worst.",
    name: 'Priya Nair',
    title: 'Head of Customer Operations | Specialty Retail & E-Commerce',
    company: 'Specialty Retail & E-Commerce',
  },
  {
    id: 't21',
    category: 'AI Voice Agents',
    industry: 'Primary Care & Allied Health',
    quote:
      "Healthcare administration is already hard on staff. Adding call volume on top of clinical responsibilities was burning people out, and patients were feeling it too — hold times, missed callbacks, intake forms that never got sent. Grateful Marketing designed a voice agent that meets patients where they are: warm, clear, unhurried. It collects intake information, confirms appointments, and answers the questions that don't need a clinician — 24 hours a day, in a tone that never sounds rushed. Our staff finally have the headspace to focus on actual patient care, and our no-show rate has dropped by 40%.",
    name: 'Dr. James Osei',
    title: 'Clinic Director | Family Health Clinic',
    company: 'Family Health Clinic',
  },
  {
    id: 't22',
    category: 'AI Voice Agents',
    industry: 'Real Estate & Property Services',
    quote:
      "In real estate, the difference between winning a client and losing one is often measured in minutes. Buyers and sellers don't wait — and they certainly don't call back. Our old after-hours voicemail was a graveyard for warm leads. Grateful Marketing built us a voice agent that responds to every inquiry the moment it comes in, day or night, weekends included. It asks the right questions, qualifies the opportunity, and has a follow-up brief ready for my agents by the time they start their morning. We've recaptured leads we never would have touched before, and our conversion rate on after-hours inquiries has climbed 55% in four months.",
    name: 'Adrienne Kowalski',
    title: 'Broker of Record | Residential Real Estate Brokerage',
    company: 'Residential Real Estate Brokerage',
  },
];

export default testimonials;
