/**
 * M11 Ch10 · Section 22 — "Foci (±c,0), string length 2a"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — Subtopic 4 (The Ellipse), sec 22 of 27. FLAGGED
 * derivation section (task brief) — extra scrutiny on the algebra.
 *
 * board_content seq1 heading -> always-on title. seq2..seq9 (8 items) gate at
 * beat>=1..beat>=8. reveals_english = [0, 13.74, 27.82, 44.12, 56.92, 68.27,
 * 82.43, 96.51, 112.3]; reveals_hinglish = [0, 11.43, 23.47, 37.97, 50.69,
 * 61.1, 73.64, 85.93, 98.9].
 *
 * The middle algebra (isolate a root, square, simplify, square again) is
 * genuinely tedious two-square-root clearing — the source JSON itself
 * compresses it into ONE narration beat (seq4) rather than showing every
 * sub-step, so this scene respects that pacing (one text beat) rather than
 * inventing extra beats the audio doesn't support.
 *
 * Hand-verified the FULL algebra beat-by-beat (not just the two JSON
 * checkpoints): √((x+c)²+y²) = 2a − √((x−c)²+y²) → square →
 * (x+c)²+y² = 4a² − 4a√((x−c)²+y²) + (x−c)²+y² → the (x±c)² terms combine
 * via difference of squares to 4cx → 4cx = 4a² − 4a√(...) →
 * a√((x−c)²+y²) = a²−cx → square again → a²(x−c)²+a²y² = a⁴−2a²cx+c²x² →
 * expand and cancel the −2a²cx terms → a²x²+a²c²+a²y² = a⁴+c²x² →
 * x²(a²−c²)+a²y² = a²(a²−c²) → divide by a²(a²−c²) → x²/a²+y²/(a²−c²)=1 ✓
 * matches seq5 exactly.
 *
 * LEFT (x60-460): one persistent setup diagram (axes, foci at (±c,0),
 * generic P(x,y)). RIGHT (x520-1020): the algebra stack -> boxed b²=a²−c²
 * result (HIGH) -> axis meaning -> eccentricity -> guardrail (HIGH).
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, lineD } from "./math-kit";

const OX = 200, OY = 300;
const CPX = 60, APX = 100, BPX = 80; // a²=c²+b²: 100²=60²+80² ✓
const F1 = { x: OX - CPX, y: OY };
const F2 = { x: OX + CPX, y: OY };
const ANG = (55 * Math.PI) / 180;
const P = { x: OX + APX * Math.cos(ANG), y: OY - BPX * Math.sin(ANG) };

export default function M11Ch10Sec22({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Foci (±c, 0), string length 2a", "Foci (±c, 0), string length 2a")}
        </T>
      </Fade>

      {/* beat 1 — setup diagram */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={104} size={14} fill={INK} anchor="middle">
          {t("For P(x,y): PF₁ + PF₂ = 2a, with a > c > 0.", "P(x,y) ke liye: PF₁ + PF₂ = 2a, jahan a > c > 0.")}
        </T>
      </Fade>
      <CartesianAxes on={beat >= 1} delay={dl(1, 0.4)} originX={OX} originY={OY} xLeft={80} xRight={340} yTop={200} yBottom={380} showTicks={false} />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <Circle cx={F1.x} cy={F1.y} r={3.5} fill={INK} />
        <T x={F1.x} y={318} size={10} fill={MUTED} anchor="middle">(−c, 0)</T>
        <Circle cx={F2.x} cy={F2.y} r={3.5} fill={INK} />
        <T x={F2.x} y={318} size={10} fill={MUTED} anchor="middle">(c, 0)</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <Circle cx={P.x} cy={P.y} r={3.5} fill={INK} />
        <T x={P.x + 8} y={P.y - 4} size={10} fill={INK} anchor="start">P(x, y)</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.5)} d={lineD(P.x, P.y, F1.x, F1.y)} stroke={AMBER_DARK} sw={1.8} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 1.9)} d={lineD(P.x, P.y, F2.x, F2.y)} stroke={AMBER_DARK} sw={1.8} dur={0.4} />

      {/* beat 2 — distance equation */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={770} y={120} size={14} fill={INK} anchor="middle">√((x+c)² + y²) + √((x−c)² + y²) = 2a</T>
      </Fade>

      {/* beat 3 — the mechanical middle step */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={770} y={150} size={13} fill={INK} anchor="middle">
          {t("Isolate one root, square, simplify, then square again.", "Ek root isolate karo, square karo, simplify, phir dobara square.")}
        </T>
      </Fade>

      {/* beat 4 — intermediate result */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={770} y={180} size={15} fill={INK} anchor="middle">x²/a² + y²/(a² − c²) = 1</T>
      </Fade>

      {/* beat 5 — boxed standard form (HIGH) */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Chip x={570} y={206} w={400} h={48} fill="#FCF4E0" stroke={AMBER_DARK} textFill={AMBER_DARK} size={16} script={false}>
          b² = a² − c²  ⇒  x²/a² + y²/b² = 1
        </Chip>
      </Fade>

      {/* beat 6 — axis meaning */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={770} y={280} size={14} fill={INK} anchor="middle">
          {t("a = semi-major axis, b = semi-minor axis, a > b", "a = semi-major axis, b = semi-minor axis, a > b")}
        </T>
      </Fade>

      {/* beat 7 — eccentricity */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={770} y={308} size={15} fill={INK} anchor="middle">c = ae,  e = c/a,  0 &lt; e &lt; 1</T>
      </Fade>

      {/* beat 8 — guardrail (HIGH) */}
      <Fade on={beat >= 8} delay={dl(8, 0)}>
        <T x={770} y={340} size={13} fill={RED} anchor="middle" weight={700}>
          {t("b² = a² − c² is the master link:", "b² = a² − c² master link hai:")}
        </T>
        <T x={770} y={364} size={13} fill={RED} anchor="middle" weight={700}>
          {t("it ties axis lengths to focal distance.", "ye axis lengths ko focal distance se jodta hai.")}
        </T>
      </Fade>
    </Scene>
  );
}
