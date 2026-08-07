import { Section } from "@/components/ui/section";
import { BOOKING_URL } from "@/lib/constants";
import Script from "next/script";

export default function BookADemoPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <Section
        eyebrow="Schedule"
        title="Book a Demo"
        description="The purpose of the meeting is to get to know each other and each other’s business. We can then go through a live demo of The AI Voice Agent."
        className="max-w-4xl mx-auto"
      >
        <div className="mt-12 w-full mx-auto bg-surface border border-border-subtle rounded-2xl overflow-hidden min-h-[700px]">
          <iframe 
            src={BOOKING_URL} 
            className="w-full h-[700px] border-none bg-transparent"
            title="Book a Demo Calendar"
          />
          {/* Include HighLevel script to ensure the widget loads properly if needed, although the direct booking URL typically works inside an iframe without it. */}
          <Script src="https://api.growthhub365.com/js/form_embed.js" strategy="lazyOnload" />
        </div>
      </Section>
    </div>
  );
}
