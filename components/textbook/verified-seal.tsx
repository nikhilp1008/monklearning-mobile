import Svg, { Circle, Path } from 'react-native-svg';

/**
 * THE "VERIFIED BY TEACHERS" SEAL (Nikhil, 9 Nov 2026).
 *
 * A rosette, the shape of a stamp of approval, not a plain round tick: twelve
 * soft points in the gold the book covers print with, a thin inner ring as on
 * a pressed seal, and an ink tick drawn with the app's own line weight.
 */
const GOLD = '#E9A23B';
const GOLD_DEEP = '#C9832B';

function rosette(cx: number, cy: number, outer: number, inner: number, points: number) {
  let d = '';
  const n = points * 2;
  for (let i = 0; i <= n * 4; i++) {
    const t = (i / (n * 4)) * Math.PI * 2 - Math.PI / 2;
    // A smooth wave between the inner and outer radius: rounded points.
    const r = inner + (outer - inner) * (0.5 + 0.5 * Math.cos(t * points));
    d += `${i ? 'L' : 'M'}${(cx + Math.cos(t) * r).toFixed(3)} ${(cy + Math.sin(t) * r).toFixed(3)}`;
  }
  return `${d}Z`;
}

const SEAL = rosette(12, 12, 11.5, 10, 12);

export function VerifiedSeal({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size}>
      <Path d={SEAL} fill={GOLD} />
      <Circle cx={12} cy={12} r={8.2} fill="none" stroke={GOLD_DEEP} strokeWidth={0.8} opacity={0.6} />
      <Path d="M8 12.4l2.7 2.7L16.2 9.4" fill="none" stroke="#1C1A16" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}
