import Svg, { G, Path, Text as SvgText } from 'react-native-svg';

import { curveD } from '@/components/scenes/math-kit';

/**
 * DIAGRAMS DRAWN BY HAND, for the handwritten note.
 *
 * The reference's 8.4 page has a stress-strain curve sketched in ink — axes
 * with arrowheads, a curve through five lettered points, a caption underneath —
 * and it is the single most convincing thing on that page. A note can be
 * mistaken for a nicely typeset document right up until it contains a drawing,
 * because nobody typesets a sketch.
 *
 * THE GEOMETRY IS NOT NEW. `curveD` threads a smooth Catmull-Rom through
 * ordered points and is already proven across the scene library; everything
 * here is a layer on top of it that makes a correct line look like a drawn one.
 * Three things do that:
 *
 *   WOBBLE. A straight edge is subdivided and each sample nudged off its true
 *   position, then curved back through the nudged points. A hand cannot hold a
 *   line, and the eye reads that immediately — a perfectly straight axis is the
 *   one stroke that gives the whole page away.
 *
 *   TWO PASSES. A ballpoint lays down uneven ink, so each stroke is drawn
 *   twice: once solid, once faintly at a sub-pixel offset. That is what stops
 *   the line reading as a 1px vector rule.
 *
 *   OVERSHOOT. Axes run slightly past the origin, the way a hand does not stop
 *   exactly where the other line begins.
 *
 * THE WOBBLE IS DETERMINISTIC, and that matters more than it sounds. Seeded on
 * the stroke's own index through a stateless hash, so the same diagram is drawn
 * identically on every render. A sketch that re-wobbled whenever React
 * re-rendered would be the most obviously WRONG thing on the page — paper does
 * not move.
 */

/** Ink and pen, matching the note page's own. */
const INK = '#2A3550';
const PEN = 'PatrickHand_400Regular';

/**
 * Stateless hash → 0..1. The classic GLSL one-liner, used here because a
 * diagram needs the same jitter every time and a seeded generator with state
 * would drift as strokes are added or reordered.
 */
function rnd(seed: number): number {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

/** −amp..+amp, stable for a given seed. */
function wobbleAt(seed: number, amp: number): number {
  return (rnd(seed) - 0.5) * 2 * amp;
}

/**
 * A straight run, drawn as a hand would: subdivided, each interior sample
 * pushed off the true line, then curved back through them. The ends are left
 * exactly where they were asked for, so strokes still meet where they should.
 */
function handLineD(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  seed: number,
  amp = 1.1,
  steps = 6
): string {
  const pts: { x: number; y: number }[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const edge = i === 0 || i === steps;
    pts.push({
      x: x1 + (x2 - x1) * t + (edge ? 0 : wobbleAt(seed + i, amp)),
      y: y1 + (y2 - y1) * t + (edge ? 0 : wobbleAt(seed + i + 71, amp)),
    });
  }
  return curveD(pts);
}

/** The same treatment for a curve that is already a curve. */
function handCurveD(
  points: { x: number; y: number }[],
  seed: number,
  amp = 0.9
): string {
  return curveD(
    points.map((p, i) => ({
      x: p.x + (i === 0 ? 0 : wobbleAt(seed + i, amp)),
      y: p.y + (i === 0 ? 0 : wobbleAt(seed + i + 131, amp)),
    }))
  );
}

/**
 * One stroke, twice: solid, then a faint offset pass. Uneven ink rather than a
 * vector rule, and the cheapest half of what makes this read as drawn.
 */
function Stroke({ d, width = 1.4 }: { d: string; width?: number }) {
  return (
    <>
      <Path d={d} stroke={INK} strokeWidth={width} fill="none" strokeLinecap="round" />
      <Path
        d={d}
        stroke={INK}
        strokeWidth={width * 0.7}
        fill="none"
        strokeLinecap="round"
        opacity={0.33}
        translateX={0.5}
        translateY={0.4}
      />
    </>
  );
}

/** An arrowhead whose two barbs are not quite the same length. */
function headD(x: number, y: number, angle: number, seed: number): string {
  const a = 9 + wobbleAt(seed, 1.2);
  const b = 9 + wobbleAt(seed + 17, 1.2);
  return (
    `M ${x - a * Math.cos(angle - 0.42)} ${y - a * Math.sin(angle - 0.42)} L ${x} ${y} ` +
    `L ${x - b * Math.cos(angle + 0.42)} ${y - b * Math.sin(angle + 0.42)}`
  );
}

/**
 * THE STRESS-STRAIN CURVE, from the reference's own 8.4 page.
 *
 * O to A is the proportional region and is drawn straight — three collinear
 * samples keep the Catmull-Rom from bowing it — then B is the yield point, C
 * the dip past it, D the ultimate strength and E the fracture. The letters are
 * what the table beneath the diagram refers to, so they are part of the
 * content, not decoration.
 */
export function StressStrainCurve({ width = 320 }: { width?: number }) {
  /**
   * Short and wide, which is the shape the reference draws and the shape the
   * curve wants: the interesting part is one band across the top, so a tall
   * frame just prints empty paper under it. The first pass was 190 deep and a
   * third of it was nothing.
   */
  const W = 320;
  const H = 156;
  /** Where the axes cross. */
  const ox = 34;
  const oy = 130;
  /** The y-axis tip, with room above it for its own label. */
  const top = 26;

  const curve = [
    { x: ox, y: oy },
    { x: 74, y: 102 },
    { x: 112, y: 74 }, // A — end of the proportional region
    { x: 134, y: 60 },
    { x: 152, y: 50 }, // B — yield point
    { x: 172, y: 62 }, // C — the dip past yield
    { x: 200, y: 48 },
    { x: 232, y: 38 }, // D — ultimate tensile strength
    { x: 254, y: 48 },
    { x: 272, y: 70 }, // E — fracture
  ];

  const marks: { t: string; x: number; y: number }[] = [
    { t: 'A', x: 103, y: 66 },
    { t: 'B', x: 152, y: 40 },
    { t: 'C', x: 174, y: 78 },
    { t: 'D', x: 233, y: 28 },
    { t: 'E', x: 281, y: 74 },
  ];

  return (
    <Svg width={width} height={(width / W) * H} viewBox={`0 0 ${W} ${H}`} fill="none">
      {/* Axes, each overshooting the corner a little — a hand does not stop
          exactly where the other line begins. */}
      <Stroke d={handLineD(ox - 5, oy + 5, ox, top, 3, 1.3)} />
      <Stroke d={headD(ox, top, -Math.PI / 2, 41)} />
      <Stroke d={handLineD(ox - 5, oy, 300, oy, 11, 1.3)} />
      <Stroke d={headD(300, oy, 0, 53)} />

      <Stroke d={handCurveD(curve, 23, 1.1)} width={1.5} />

      <G>
        <SvgText x={ox + 6} y={top - 10} fill={INK} fontSize={11} fontFamily={PEN}>
          Stress
        </SvgText>
        <SvgText x={296} y={oy + 16} fill={INK} fontSize={11} fontFamily={PEN} textAnchor="end">
          Strain
        </SvgText>
        <SvgText x={ox - 12} y={oy + 13} fill={INK} fontSize={11} fontFamily={PEN}>
          O
        </SvgText>
        {marks.map((m) => (
          <SvgText
            key={m.t}
            x={m.x}
            y={m.y}
            fill={INK}
            fontSize={11.5}
            fontFamily={PEN}
            textAnchor="middle">
            {m.t}
          </SvgText>
        ))}
      </G>
    </Svg>
  );
}
