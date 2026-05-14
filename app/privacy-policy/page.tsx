import { Section } from "@/components/ui/section";

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <Section 
        eyebrow="Privacy"
        title="Privacy Policy"
        description="Effective Date: [INSERT DATE] | Last Updated: [INSERT DATE]"
        className="max-w-4xl mx-auto"
      >
        <div className="prose prose-invert max-w-none mt-8 text-muted font-light leading-relaxed prose-headings:text-foreground prose-a:text-brand prose-a:no-underline hover:prose-a:text-brand-light prose-h1:text-2xl prose-h1:font-semibold prose-h1:font-heading prose-h1:mt-10 prose-h1:mb-4 prose-h2:text-xl prose-h2:font-semibold prose-h2:font-heading prose-h2:mt-8 prose-h2:mb-4">
          
          <h1 id="1-introduction">1. Introduction</h1>
          <p>
            Grateful Marketing™ (“we,” “us,” “our,” or “Grateful Marketing”) is a Canadian AI-powered digital marketing consultancy serving legal, financial, insurance, B2B, D2C, and service-based businesses. We are deeply committed to protecting the privacy and personal information of our clients, website visitors, email subscribers, and prospects.
          </p>
          <p>
            This Privacy Policy explains how we collect, use, disclose, store, and protect personal information. It also outlines your rights and choices regarding your personal information.
          </p>
          <p>This policy applies to information collected through:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Our website and any subdomains we operate</li>
            <li>Our consulting, strategy, and training engagements with clients</li>
            <li>Email marketing, newsletters, and business communications</li>
            <li>AI-powered tools and platforms we use to deliver services (including but not limited to Growth Hub 365 and our internal AI agent team)</li>
            <li>Business development activities, proposals, and discovery conversations</li>
          </ul>
          <p>
            By using our website or engaging our services, you acknowledge that you have read and understood this Privacy Policy.
          </p>

          <h1 id="2-who-we-are">2. Who We Are</h1>
          <p>
            Grateful Marketing is the data controller (GDPR) and organization accountable (PIPEDA) for the personal information described in this policy.
          </p>
          <p className="bg-brand-soft p-6 border border-border mt-4 mb-4">
            [INSERT: Legal business name, registered business address, jurisdiction of incorporation]
          </p>
          <p><strong>Contact for privacy matters:</strong></p>
          <p className="bg-brand-soft p-6 border border-border mt-4 mb-4">
            [INSERT: Privacy Officer name, email, phone number, and mailing address]
          </p>
          <p>
            For residents of the European Union or United Kingdom, we can be reached at the contact details above. If you require a local representative under Article 27 GDPR, please contact us to request current representative details.
          </p>

          <h1 id="3-information-we-collect">3. Information We Collect</h1>
          <p>
            We collect personal information that you provide directly to us, information collected automatically through technology, and information received from third parties.
          </p>

          <h2 id="3-1-information-you-provide-directly">3.1 Information You Provide Directly</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Contact information:</strong> name, business name, job title, email address, phone number, mailing address.</li>
            <li><strong>Client engagement information:</strong> business goals, marketing challenges, brand assets, strategic priorities, team structure, and any other information shared during consulting engagements.</li>
            <li><strong>Account and billing information:</strong> billing contact, payment details (processed via secure third-party processors — we do not store full payment card numbers), purchase orders, and tax identifiers where required.</li>
            <li><strong>Communications:</strong> emails, meeting notes, proposal responses, feedback, survey responses, and any correspondence with our team.</li>
            <li><strong>Marketing preferences:</strong> newsletter subscriptions, event registrations, and content download information.</li>
          </ul>

          <h2 id="3-2-information-collected-automatically">3.2 Information Collected Automatically</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Website usage data:</strong> pages visited, time spent, referring URLs, browser type, device type, operating system, and approximate geographic location (derived from IP address).</li>
            <li><strong>Cookies and similar technologies:</strong> see Section 8 for full details on cookies and tracking technologies.</li>
            <li><strong>Log data:</strong> IP address, access times, error logs, and technical diagnostic information.</li>
          </ul>

          <h2 id="3-3-information-from-third-parties">3.3 Information from Third Parties</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Professional networks:</strong> publicly available information from LinkedIn and other professional sources used for legitimate business development.</li>
            <li><strong>Service providers:</strong> information from our analytics, email, CRM, and AI platform providers.</li>
            <li><strong>Referrals:</strong> contact information provided by mutual connections or existing clients who refer you to us.</li>
          </ul>

          <h2 id="3-4-sensitive-personal-information">3.4 Sensitive Personal Information</h2>
          <p>
            We do not knowingly collect sensitive categories of personal information (such as health data, biometric data, racial or ethnic origin, religious beliefs, or sexual orientation) as part of our services. Clients should not share sensitive personal information with us unless specifically required for an engagement and governed by a separate written agreement.
          </p>


          <h1 id="4-how-we-use-your-information">4. How We Use Your Information</h1>
          <p>
            We use personal information for the following purposes, each supported by a lawful basis under applicable privacy laws:
          </p>

          <h2 id="4-1-to-deliver-our-services">4.1 To Deliver Our Services</h2>
          <ul className="list-disc pl-6 space-y-2 mb-2">
            <li>Provide AI business consulting, AI and marketing strategy and deployment, and AI team training and empowerment services</li>
            <li>Develop proposals, statements of work, and service agreements</li>
            <li>Conduct discovery calls, workshops, and ongoing engagement activities</li>
            <li>Configure, deploy, and support AI tools and platforms on your behalf</li>
          </ul>
          <p className="italic mb-6">Lawful basis: Contract performance (GDPR Art. 6(1)(b)); consent and reasonable purposes (PIPEDA).</p>

          <h2 id="4-2-to-communicate-with-you">4.2 To Communicate With You</h2>
          <ul className="list-disc pl-6 space-y-2 mb-2">
            <li>Respond to inquiries and provide customer support</li>
            <li>Send service updates, appointment confirmations, and administrative notices</li>
            <li>Share educational content, newsletters, and event invitations (where you have opted in)</li>
          </ul>
          <p className="italic mb-6">Lawful basis: Legitimate interests (GDPR Art. 6(1)(f)); consent for marketing communications (GDPR Art. 6(1)(a); CASL for Canadian recipients).</p>

          <h2 id="4-3-to-operate-and-improve-our-business">4.3 To Operate and Improve Our Business</h2>
          <ul className="list-disc pl-6 space-y-2 mb-2">
            <li>Analyze website performance and user behavior</li>
            <li>Improve our services, content, and methodology (including the Gratitude™ methodology)</li>
            <li>Conduct market research and competitive analysis</li>
            <li>Train and refine our internal AI agents using properly anonymized or authorized data</li>
          </ul>
          <p className="italic mb-6">Lawful basis: Legitimate interests (GDPR Art. 6(1)(f)); reasonable purposes (PIPEDA).</p>

          <h2 id="4-4-to-meet-legal-and-compliance-obligations">4.4 To Meet Legal and Compliance Obligations</h2>
          <ul className="list-disc pl-6 space-y-2 mb-2">
            <li>Comply with applicable laws, regulations, tax requirements, and legal process</li>
            <li>Protect our rights, property, and safety, and those of our clients and third parties</li>
            <li>Detect and prevent fraud, security incidents, and unauthorized activity</li>
          </ul>
          <p className="italic mb-6">Lawful basis: Legal obligation (GDPR Art. 6(1)(c)); legitimate interests (GDPR Art. 6(1)(f)).</p>

          <h1 id="5-use-of-ai-systems-and-automated-processing">5. Use of AI Systems and Automated Processing</h1>
          <p>
            As an AI-powered consultancy, we use artificial intelligence tools to deliver services. We believe in transparency about how AI interacts with your information.
          </p>

          <h2 id="5-1-how-we-use-ai">5.1 How We Use AI</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>AI agents assist our team with research, drafting, analysis, and client workflow automation</li>
            <li>AI platforms may process client-provided content to generate strategies, marketing assets, or training materials</li>
            <li>Client-facing AI solutions (such as answering and booking systems) may process inquiries from your customers on your behalf</li>
          </ul>

          <h2 id="5-2-safeguards">5.2 Safeguards</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>We select AI vendors that offer enterprise-grade data protection, including data processing agreements and, where possible, no-training guarantees on client data</li>
            <li>We do not use client-confidential information to train public or third-party AI models without explicit written consent</li>
            <li>We maintain human oversight of AI-generated outputs before they are delivered to clients or published</li>
          </ul>

          <h2 id="5-3-automated-decision-making">5.3 Automated Decision-Making</h2>
          <p>
            We do not make decisions producing legal or similarly significant effects about you based solely on automated processing. Where AI is used to support decisions (for example, lead scoring or content recommendations), a human reviews and approves material outcomes.
          </p>

          <h1 id="6-how-we-share-your-information">6. How We Share Your Information</h1>
          <p>
            We do not sell personal information. We share personal information only in the circumstances described below, and only with parties bound by appropriate confidentiality and data protection obligations.
          </p>

          <h2 id="6-1-service-providers-and-processors">6.1 Service Providers and Processors</h2>
          <p>We use carefully selected service providers to help us operate our business, including:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Cloud hosting and infrastructure providers</li>
            <li>Customer relationship management (CRM) platforms</li>
            <li>Email marketing and automation platforms</li>
            <li>Analytics providers</li>
            <li>AI and machine-learning platform providers</li>
            <li>Payment processors</li>
            <li>Professional advisors (accountants, lawyers, insurers)</li>
          </ul>

          <h2 id="6-2-collaborators">6.2 Collaborators</h2>
          <p>
            We work with trusted collaborators (including our collaborator Lotus and other contracted specialists) who support the delivery of services. All collaborators are bound by written confidentiality and data handling obligations.
          </p>

          <h2 id="6-3-legal-disclosures">6.3 Legal Disclosures</h2>
          <p>
            We may disclose personal information when required to comply with a lawful request from a government authority, court order, subpoena, or applicable law, or to enforce our terms of service or protect our rights.
          </p>

          <h2 id="6-4-business-transfers">6.4 Business Transfers</h2>
          <p>
            If Grateful Marketing is involved in a merger, acquisition, financing, or sale of assets, personal information may be transferred as part of that transaction, subject to the continued protections of this Privacy Policy or an equivalent successor policy.
          </p>

          <h2 id="6-5-with-your-consent">6.5 With Your Consent</h2>
          <p>
            We will share personal information for any other purpose disclosed to you at the time of collection, or with your explicit consent.
          </p>

          <h1 id="7-international-data-transfers">7. International Data Transfers</h1>
          <p>
            Grateful Marketing is based in Canada. Personal information we collect may be processed, stored, or accessed in Canada, the United States, and other jurisdictions where our service providers operate.
          </p>
          <p>
            For transfers out of the European Union, United Kingdom, or Switzerland, we rely on appropriate safeguards such as:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>The European Commission’s adequacy decision for Canada (commercial organizations)</li>
            <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
            <li>UK International Data Transfer Addendum where applicable</li>
            <li>Other lawful transfer mechanisms as required</li>
          </ul>
          <p>
            For Canadian clients, certain service providers may store or process personal information outside of Canada. In accordance with PIPEDA, we remain accountable for personal information transferred to service providers and require them to maintain equivalent levels of protection.
          </p>
          <p className="bg-brand-soft p-6 border border-border mt-4 mb-4">
            [Server hosting note: Once Growth Hub 365’s Canadian server hosting is confirmed, this section will be updated to reflect Canadian data residency for regulated and data-sovereignty-sensitive clients.]
          </p>

          <h1 id="8-cookies-and-tracking-technologies">8. Cookies and Tracking Technologies</h1>
          <p>
            Our website uses cookies and similar technologies to enhance your experience, analyze traffic, and support our marketing efforts.
          </p>

          <h2 id="8-1-types-of-cookies-we-use">8.1 Types of Cookies We Use</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Strictly necessary cookies:</strong> required for the website to function properly (these cannot be disabled).</li>
            <li><strong>Performance and analytics cookies:</strong> help us understand how visitors use our website (for example, Google Analytics).</li>
            <li><strong>Functional cookies:</strong> remember your preferences and improve usability.</li>
            <li><strong>Marketing and advertising cookies:</strong> deliver relevant content and measure campaign effectiveness.</li>
          </ul>

          <h2 id="8-2-your-cookie-choices">8.2 Your Cookie Choices</h2>
          <p>
            You can control cookies through your browser settings and, where applicable, through a cookie preference center displayed on our website. For users in the EU, UK, and other consent-required jurisdictions, non-essential cookies are only set after you provide consent.
          </p>
          <p>
            For U.S. residents where applicable, we honor recognized opt-out preference signals such as the Global Privacy Control (GPC).
          </p>

          <h1 id="9-data-retention">9. Data Retention</h1>
          <p>
            We retain personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
          </p>
          <p><strong>General retention guidelines:</strong></p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Client engagement records:</strong> for the duration of the engagement plus seven (7) years for tax, legal, and contractual purposes.</li>
            <li><strong>Prospect and lead information:</strong> up to three (3) years from the last meaningful interaction, unless you opt out sooner.</li>
            <li><strong>Newsletter and marketing subscribers:</strong> until you unsubscribe, plus suppression list retention as required by law.</li>
            <li><strong>Website analytics:</strong> typically up to twenty-six (26) months, in accordance with analytics provider defaults.</li>
            <li><strong>Financial and billing records:</strong> as required by Canadian tax law, generally seven (7) years.</li>
          </ul>
          <p>
            When personal information is no longer required, we securely delete, anonymize, or destroy it.
          </p>

          <h1 id="10-your-privacy-rights">10. Your Privacy Rights</h1>
          <p>
            You have rights regarding your personal information. These rights vary depending on where you live.
          </p>

          <h2 id="10-1-rights-available-to-all-individuals">10.1 Rights Available to All Individuals</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Access:</strong> request a copy of the personal information we hold about you.</li>
            <li><strong>Correction:</strong> request that inaccurate or incomplete information be corrected.</li>
            <li><strong>Deletion:</strong> request that we delete your personal information, subject to legal retention requirements.</li>
            <li><strong>Withdraw consent:</strong> withdraw consent for processing based on consent (this does not affect prior lawful processing).</li>
            <li><strong>Opt out of marketing:</strong> unsubscribe from marketing emails at any time using the link in our communications.</li>
          </ul>

          <h2 id="10-2-canadian-residents">10.2 Canadian Residents (PIPEDA and Provincial Laws)</h2>
          <p>Under PIPEDA and applicable provincial privacy laws (including Quebec’s Law 25, Alberta’s PIPA, and British Columbia’s PIPA), you have the right to:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Know the purposes for which your personal information is collected, used, and disclosed</li>
            <li>Access your personal information and request corrections</li>
            <li>Challenge our compliance with privacy laws</li>
            <li>For Quebec residents: data portability and the right to request de-indexing</li>
          </ul>
          <p>
            If you are not satisfied with our response, you may contact the Office of the Privacy Commissioner of Canada or your provincial privacy commissioner.
          </p>

          <h2 id="10-3-united-states-residents">10.3 United States Residents</h2>
          <p>Depending on your state of residence (including California, Virginia, Colorado, Connecticut, Utah, Texas, and others with comprehensive privacy laws), you may have the right to:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Know what personal information we collect, use, disclose, and “sell” or “share” (as defined by your state’s law)</li>
            <li>Access, correct, or delete your personal information</li>
            <li>Opt out of the sale or sharing of personal information and targeted advertising</li>
            <li>Limit the use of sensitive personal information</li>
            <li>Non-discrimination for exercising your privacy rights</li>
            <li>Appeal a denial of your request</li>
          </ul>
          <p>
            <strong>California residents:</strong> we do not sell personal information for monetary consideration. Under the California Consumer Privacy Act (CCPA/CPRA), certain sharing for cross-context behavioral advertising may qualify as “sharing” — you may opt out via our website preference center or by contacting us.
          </p>
          <p>
            To exercise your rights, contact us using the information in Section 14. We will verify your identity before fulfilling requests.
          </p>

          <h2 id="10-4-european-union-residents">10.4 European Union, United Kingdom, and Switzerland Residents</h2>
          <p>Under the GDPR, UK GDPR, and the Swiss Federal Act on Data Protection, you have the right to:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Access your personal data (Art. 15)</li>
            <li>Rectification of inaccurate data (Art. 16)</li>
            <li>Erasure / “right to be forgotten” (Art. 17)</li>
            <li>Restriction of processing (Art. 18)</li>
            <li>Data portability (Art. 20)</li>
            <li>Object to processing based on legitimate interests or direct marketing (Art. 21)</li>
            <li>Not be subject to decisions based solely on automated processing (Art. 22)</li>
            <li>Lodge a complaint with your local supervisory authority</li>
          </ul>

          <h2 id="10-5-how-to-exercise-your-rights">10.5 How to Exercise Your Rights</h2>
          <p>
            To exercise any of these rights, contact us using the information in Section 14. We will respond within the timeframes required by applicable law — typically 30 days (PIPEDA and most U.S. state laws) or one month (GDPR), with possible extensions for complex requests.
          </p>
          <p>
            We may need to verify your identity before processing your request. We will not discriminate against you for exercising any of your privacy rights.
          </p>

          <h1 id="11-how-we-protect-your-information">11. How We Protect Your Information</h1>
          <p>
            We implement technical, administrative, and physical safeguards appropriate to the sensitivity of the personal information we handle. These include:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Encryption of data in transit (TLS/SSL) and at rest where feasible</li>
            <li>Access controls, role-based permissions, and multi-factor authentication for internal systems</li>
            <li>Regular review of third-party vendors and data processing agreements</li>
            <li>Secure storage of client assets and confidential information</li>
            <li>Employee and collaborator training on privacy and data protection</li>
            <li>Incident response procedures and breach notification protocols</li>
          </ul>
          <p>
            No method of transmission or storage is 100% secure. If we become aware of a personal information breach that creates a real risk of significant harm, we will notify affected individuals and the appropriate regulators in accordance with applicable law (including the PIPEDA Breach of Security Safeguards Regulations and GDPR Articles 33–34).
          </p>

          <h1 id="12-childrens-privacy">12. Children’s Privacy</h1>
          <p>
            Our services are directed to businesses, non-profits, and professionals. We do not knowingly collect personal information from individuals under the age of 16 (or under the applicable age of consent in your jurisdiction). If you believe we have collected information from a minor, please contact us and we will promptly delete it.
          </p>

          <h1 id="13-third-party-websites">13. Third-Party Websites and Services</h1>
          <p>
            Our website and communications may contain links to third-party websites, platforms, or services that we do not control. This Privacy Policy does not apply to those third parties. We encourage you to review the privacy policies of any third-party sites or services before providing personal information.
          </p>

          <h1 id="14-how-to-contact-us">14. How to Contact Us</h1>
          <p>
            We welcome your questions, comments, and concerns about this Privacy Policy or our privacy practices.
          </p>
          <div className="bg-brand-soft p-6 border border-border mt-4 mb-8 space-y-2">
            <p className="font-semibold text-foreground m-0">Grateful Marketing — Privacy Officer</p>
            <p className="m-0">[INSERT: Privacy Officer name]</p>
            <p className="m-0">[INSERT: Email address — e.g., privacy@gratefulmarketing.com]</p>
            <p className="m-0">[INSERT: Mailing address]</p>
            <p className="m-0">[INSERT: Phone number]</p>
          </div>
          
          <h2 id="regulatory-authorities">Regulatory Authorities</h2>
          <p>If you are not satisfied with our response, you may contact the appropriate privacy regulator:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Canada:</strong> Office of the Privacy Commissioner of Canada — www.priv.gc.ca</li>
            <li><strong>Quebec:</strong> Commission d’accès à l’information du Québec</li>
            <li><strong>Alberta / British Columbia:</strong> respective Office of the Information and Privacy Commissioner</li>
            <li><strong>United States:</strong> your state attorney general or state privacy agency (California Privacy Protection Agency for CA residents)</li>
            <li><strong>European Union:</strong> your national supervisory authority (list available at edpb.europa.eu)</li>
            <li><strong>United Kingdom:</strong> Information Commissioner’s Office (ICO) — ico.org.uk</li>
          </ul>

          <h1 id="15-changes-to-this-privacy-policy">15. Changes to This Privacy Policy</h1>
          <p>
            We may update this Privacy Policy from time to time to reflect changes to our practices, our services, or applicable laws. When we make material changes, we will update the “Last Updated” date at the top of this policy and, where appropriate, notify you directly (for example, by email or through a notice on our website).
          </p>
          <p>
            We encourage you to review this policy periodically to stay informed about how we protect your personal information.
          </p>
          
          <p className="text-xl font-heading font-semibold text-brand italic mt-12 text-center">
            Thank you for trusting Grateful Marketing™.<br/>Your privacy is part of our gratitude. <span className="text-brand font-bold">GM</span>
          </p>

        </div>
      </Section>
    </div>
  );
}
