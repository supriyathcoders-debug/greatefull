/** Decorative layers — visual only, no content */
export function NeuralGrid() {
  return (
    <>
      <div className="neural-grid" aria-hidden="true" />
      <div className="noise-overlay" aria-hidden="true" />
    </>
  );
}

export function HeroGrid() {
  return <div className="hero-grid" aria-hidden="true" />;
}

export function OrbitRing() {
  return (
    <div className="orbit-ring" aria-hidden="true">
      <div className="orbit-ring-inner" />
      <div className="orbit-dot orbit-dot-1" />
      <div className="orbit-dot orbit-dot-2" />
    </div>
  );
}

export function CornerBrackets() {
  return (
    <>
      <span className="corner-bracket corner-tl" aria-hidden="true" />
      <span className="corner-bracket corner-tr" aria-hidden="true" />
      <span className="corner-bracket corner-bl" aria-hidden="true" />
      <span className="corner-bracket corner-br" aria-hidden="true" />
    </>
  );
}

export function SectionAmbient({ className = "" }: { className?: string }) {
  return (
    <div className={`section-ambient ${className}`} aria-hidden="true">
      <div className="section-ambient-orb section-ambient-orb-1" />
      <div className="section-ambient-orb section-ambient-orb-2" />
    </div>
  );
}

export function AiNodes() {
  return (
    <div className="ai-nodes" aria-hidden="true">
      {Array.from({ length: 6 }).map((_, i) => (
        <span key={i} className="ai-node" style={{ animationDelay: `${i * 0.7}s` }} />
      ))}
    </div>
  );
}
