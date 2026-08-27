/**
 * M11 Ch10 · Section 29 — "Foci (±c,0), constant difference 2a, with c > a"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — Subtopic 5 (The Hyperbola), sec 29 of 34. FLAGGED
 * derivation section (task brief) — extra scrutiny on the algebra.
 *
 * board_content seq1 heading -> always-on title. seq2..seq9 (8 items) gate at
 * beat>=1..beat>=8. reveals_english = [0, 16.73, 24.83, 42.07, 53.67, 64.51,
 * 86.27, 97.11, 115.29]; reveals_hinglish = [0, 14.42, 20.65, 34.65, 47.79,
 * 61.01, 79.87, 91.82, 108.46].
 *
 * The JSON's own framing (seq4/seq9): this is the SAME algebra as Sec22's
 * ellipse derivation, just with c>a instead of a>c, which flips one sign.
 * Hand-verified the full chain independently (not just trusting the JSON's
 * two checkpoints): √((x+c)²+y²) − √((x−c)²+y²) = 2a → isolate → square →
 * (x+c)²−(x−c)²=4cx combines via difference of squares (same identity as
 * the ellipse) → 4cx = 4a² + 4a√((x−c)²+y²) → cx−a² = a√((x−c)²+y²) →
 * square again → c²x²−2a²cx+a⁴ = a²x²−2a²cx+a²c²+a²y² → the −2a²cx terms
 * cancel on both sides → x²(c²−a²) − a²y² = a²(c²−a²) → divide by a²(c²−a²)
 * → x²/a² − y²/(c²−a²) = 1. Substituting b²=c²−a² gives x²/a²−y²/b²=1
 * directly — confirms the JSON's intermediate form x²/a²+y²/(a²−c²)=1 is
 * the SAME equation (a²−c² is just −(c²−a²), so +y²/(a²−c²) ≡ −y²/(c²−a²)),
 * not a different result.
 *
 * LEFT (x60-460): persistent setup diagram (axes, foci at (±c,0), generic
 * P). RIGHT (x520-1020): the algebra stack -> boxed x²/a²−y²/b²=1 (HIGH) ->
 * c²=a²+b², e>1 -> guardrail (HIGH) on the sign flip.
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, lineD } from "./math-kit";

const OX = 200, OY = 300;
const CPX = 90;
const F1 = { x: OX - CPX, y: OY };
const F2 = { x: OX + CPX, y: OY };
const P = { x: 280, y: 240 };

export default function M11Ch10Sec29({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={62} size={20} fill={RED} anchor="middle" script>
          {t("Foci (±c, 0), constant difference 2a, with c > a", "Foci (±c, 0), constant difference 2a, jahan c > a")}
        </T>
      </Fade>

      {/* beat 1 — setup diagram */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={104} size={14} fill={INK} anchor="middle">
          {t("For P(x,y): |PF₁ − PF₂| = 2a.", "P(x,y) ke liye: |PF₁ − PF₂| = 2a.")}
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
        <T x={770} y={120} size={14} fill={INK} anchor="middle">√((x+c)² + y²) − √((x−c)² + y²) = ±2a</T>
      </Fade>

      {/* beat 3 — same routine as the ellipse */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={770} y={150} size={13} fill={INK} anchor="middle">
          {t(
            "Isolate a root, square, simplify, then square again (as for the ellipse).",
            "Ek root isolate karo, square karo, simplify, phir dobara square (ellipse jaisa hi)."
          )}
        </T>
      </Fade>

      {/* beat 4 — intermediate result (same form as ellipse) */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={770} y={180} size={15} fill={INK} anchor="middle">x²/a² + y²/(a² − c²) = 1</T>
      </Fade>

      {/* beat 5 — the sign flip */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={770} y={208} size={13} fill={INK} anchor="middle">
          {t("Now c > a, so a² − c² < 0. Write b² = c² − a² > 0.", "Ab c > a hai, toh a² − c² < 0. b² = c² − a² > 0 likho.")}
        </T>
      </Fade>

      {/* beat 6 — boxed standard form (HIGH) */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Chip x={620} y={230} w={300} h={48} fill="#FCF4E0" stroke={AMBER_DARK} textFill={AMBER_DARK} size={17} script={false}>
          x²/a² − y²/b² = 1
        </Chip>
      </Fade>

      {/* beat 7 — focal relation */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={770} y={302} size={15} fill={INK} anchor="middle">c² = a² + b²,  e = c/a &gt; 1</T>
      </Fade>

      {/* beat 8 — guardrail (HIGH) */}
      <Fade on={beat >= 8} delay={dl(8, 0)}>
        <T x={770} y={334} size={13} fill={RED} anchor="middle" weight={700}>
          {t("Same algebra as the ellipse, but c>a flips a sign:", "Ellipse jaisa hi algebra, par c>a ek sign flip karta hai:")}
        </T>
        <T x={770} y={358} size={13} fill={RED} anchor="middle" weight={700}>
          {t("PLUS becomes MINUS.", "PLUS, MINUS ban jaata hai.")}
        </T>
      </Fade>
    </Scene>
  );
}
