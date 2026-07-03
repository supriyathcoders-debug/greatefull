import { IMAGES } from "@/lib/constants";

const PRIMARY = [
  { src: IMAGES.heartCircuitGratitude, alt: "The heart of gratitude" },
  { src: IMAGES.heroHumanSpark, alt: "Growing with AI" },
  { src: IMAGES.innovationAiOpportunity, alt: "The spark of innovation" },
  { src: IMAGES.aiPlatformDataConfidence, alt: "Data-driven confidence" },
  { src: IMAGES.teamCommunityCircle, alt: "The power of community" },
  { src: IMAGES.celebratingWins, alt: "Celebrating wins" },
  { src: IMAGES.clientGrowthTransformation, alt: "Accelerating growth" },
  { src: IMAGES.pillarsGratitude, alt: "Gratitude always" },
] as const;

const SECONDARY = [
  { src: IMAGES.pillarsGratitude, alt: "GRATITUDE pillars" },
  { src: IMAGES.innovationAiOpportunity, alt: "The AI opportunity" },
  { src: IMAGES.footprintsTurningToLight, alt: "The path forward" },
  { src: IMAGES.writingNextChapter, alt: "Writing the next chapter" },
] as const;

export function BrandVisualShowcase() {
  return (
    <section className="py-28 section-shell">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {PRIMARY.map((item) => (
          <img
            key={item.src}
            src={item.src}
            alt={item.alt}
            className="w-full h-auto object-contain border border-border-subtle bg-[#0b0b2b]"
          />
        ))}
      </div>
    </section>
  );
}

export { PRIMARY, SECONDARY };
