// Animated voice-level waveform motif.
// GPU-only (scaleY via CSS), freezes under prefers-reduced-motion (index.css).

const BARS = [0.5, 0.85, 0.35, 1, 0.6, 0.9, 0.45, 0.75, 0.3];

interface VoiceWaveProps {
  className?: string;
  /**
   * Tailwind background-color class for the bars.
   * Defaults to bg-gold (for use on navy surfaces).
   * Pass "bg-flame" for red on cream surfaces.
   */
  colorClass?: string;
}

export function VoiceWave({
  className = "",
  colorClass = "bg-gold",
}: VoiceWaveProps) {
  return (
    <div
      className={`flex items-end gap-[3px] ${className}`}
      aria-hidden="true"
    >
      {BARS.map((peak, i) => (
        <span
          key={i}
          className={`voicebar w-[3px] rounded-full ${colorClass}`}
          style={{
            height: "100%",
            transform: `scaleY(${peak})`,
            animationDelay: `${i * 0.09}s`,
            animationDuration: `${0.9 + (i % 4) * 0.12}s`,
          }}
        />
      ))}
    </div>
  );
}
