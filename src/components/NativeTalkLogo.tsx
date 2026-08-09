/**
 * NativeTalk brand mark — inline SVG.
 * Faithful reconstruction of the horizontal lock-up:
 *   [US flag, skewed italic] / slash / NATIVE (navy) stacked over TALK (gold)
 *
 * Usage:
 *   <NativeTalkLogo className="h-9" />   — scales via height, width auto
 *   <NativeTalkLogo className="h-9" light />  — cream wordmark (for use on navy bg)
 */

const FLAG_NAVY   = "#3C3B6E";   // US canton blue
const FLAG_RED    = "#B22234";   // US flag red
const FLAG_WHITE  = "#FAFAFA";   // US flag white
const BRAND_NAVY  = "#1B3275";   // NATIVE text
const BRAND_GOLD  = "#C5A028";   // TALK text
const BRAND_LIGHT = "#F4EDD8";   // cream variant of NATIVE text (on navy bg)

// Stripe positions (13 stripes, total height 108px, each ≈ 8.31px)
const STRIPE_H = 108 / 13;
const WHITE_STRIPES = [1, 3, 5, 7, 9, 11]; // 0-indexed stripes that are white

// Stars: 5 rows alternating 6/5 (simplified to 4/3 grid for clarity at small sizes)
const STARS_4: [number, number][] = [
  [8.5, 9], [21, 9], [33.5, 9], [46, 9],
  [8.5, 23], [21, 23], [33.5, 23], [46, 23],
  [8.5, 37], [21, 37], [33.5, 37], [46, 37],
];
const STARS_3: [number, number][] = [
  [14.75, 16], [27.25, 16], [39.75, 16],
  [14.75, 30], [27.25, 30], [39.75, 30],
];

interface Props {
  className?: string;
  /** Use cream NATIVE text — intended for placement on navy/dark backgrounds */
  light?: boolean;
}

export function NativeTalkLogo({ className = "h-10", light = false }: Props) {
  const nativeColor = light ? BRAND_LIGHT : BRAND_NAVY;

  return (
    <svg
      viewBox="0 0 530 170"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ width: "auto" }}
      aria-label="NativeTalk"
      role="img"
    >
      {/* ── Flag (skewed to match italic lean of wordmark) ── */}
      <g transform="skewX(-7) translate(6, 14)">
        {/* Red base */}
        <rect width="152" height="108" fill={FLAG_RED} rx="2" />
        {/* White stripes */}
        {WHITE_STRIPES.map((i) => (
          <rect
            key={i}
            y={i * STRIPE_H}
            width="152"
            height={STRIPE_H}
            fill={FLAG_WHITE}
          />
        ))}
        {/* Navy canton */}
        <rect width="62" height={STRIPE_H * 7} fill={FLAG_NAVY} rx="1" />
        {/* Stars — alternating rows of 4 and 3 (clean at small render sizes) */}
        {STARS_4.map(([cx, cy], i) => (
          <circle key={`a${i}`} cx={cx} cy={cy} r="2.8" fill={FLAG_WHITE} />
        ))}
        {STARS_3.map(([cx, cy], i) => (
          <circle key={`b${i}`} cx={cx} cy={cy} r="2.8" fill={FLAG_WHITE} />
        ))}
      </g>

      {/* ── Diagonal slash divider ── */}
      <line
        x1="182" y1="4"
        x2="202" y2="166"
        stroke={BRAND_NAVY}
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* ── Diamond accent at slash mid-point ── */}
      <polygon
        points="190,82 195,77 200,82 195,87"
        fill={BRAND_NAVY}
      />

      {/* ── NATIVE ── */}
      <text
        x="212"
        y="89"
        fontFamily="'Bricolage Grotesque', 'Arial Black', 'Impact', sans-serif"
        fontSize="83"
        fontWeight="800"
        fontStyle="italic"
        fill={nativeColor}
        letterSpacing="-3"
      >
        NATIVE
      </text>

      {/* ── TALK ── */}
      <text
        x="212"
        y="162"
        fontFamily="'Bricolage Grotesque', 'Arial Black', 'Impact', sans-serif"
        fontSize="83"
        fontWeight="800"
        fontStyle="italic"
        fill={BRAND_GOLD}
        letterSpacing="-3"
      >
        TALK
      </text>
    </svg>
  );
}
