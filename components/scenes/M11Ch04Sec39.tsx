/**
 * M11 Ch04 · Section 39 — "Worked: solving real quadratics with D < 0"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — subtopic 4 (Quadratic Equations with Complex Roots).
 *
 * Beats (board_reveal_at_english [0, 6.74, 18.26, 29.44, 36.19, 46.85, 64.43, 72.03]):
 *  0 heading: real coefficients, negative discriminant
 *  1 quick example: x²+1=0 ⇒ x²=-1 ⇒ x=±i
 *  2 setup: x²+x+1=0, D=1-4=-3<0
 *  3 boxed step: x = (-1±i√3)/2
 *  4 sanity check: these are ω, ω² — cube roots of unity
 *  5 setup: √2x²+x+√2=0, D=1-8=-7
 *  6 boxed step: x = (-1±i√7)/(2√2)
 *  7 guardrail sanity check: both are conjugate pairs, as guaranteed
 *
 * Layout plan (worked notebook, single column x=540, top to bottom):
 *  b0 | heading (15,amber_dark,w700)  | T mid | x540 y90  + underline y104
 *  b1 | text (17,ink,w700)            | T mid | x540 y126 + underline y142
 *  b2 | text (16,ink)                 | T mid | x540 y164 + underline y180
 *  b3 | boxed (18,ink,w700)           | Chip  | x421.5..618.5 y206..248
 *  b4 | text (15,ink)                 | T mid | x540 y290 + underline y306
 *  b5 | text (14,ink)                 | T mid | x540 y336 + underline y350
 *  b6 | boxed (17,ink,w700)           | Chip  | x429.5..650.5 y380..420
 *  b7 | red bar + guardrail (16,red)  | Draw/T| bar x60 y448..482, text x76 y465
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  INK,
  AMBER_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { lineD } from "./math-kit";

export default function M11Ch04Sec39({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Solving Real Quadratics With D < 0", "Real Quadratics Solve Karo, D < 0")}
        </T>
      </Fade>

      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={90} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Real coefficients, negative discriminant", "Real coefficients, negative discriminant")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.5)} d={lineD(400, 104, 680, 104)} stroke={AMBER_DARK} sw={1.6} dur={0.5} />

      {/* beat 1 — the quickest example */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={126} size={17} fill={INK} anchor="middle" weight={700}>
          x² + 1 = 0  ⇒  x² = -1  ⇒  x = ±i
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d={lineD(395, 142, 685, 142)} stroke={INK} sw={1.6} dur={0.5} />

      {/* beat 2 — set up the second example */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={164} size={16} fill={INK} anchor="middle">
          x² + x + 1 = 0:   D = 1 - 4 = -3 &lt; 0
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d={lineD(392, 180, 688, 180)} stroke={INK} sw={1.6} dur={0.5} />

      {/* beat 3 — the boxed step */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <Chip x={421.5} y={206} w={197} h={42} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={18} script={false}>
          x = (-1 ± i√3) / 2
        </Chip>
      </Fade>

      {/* beat 4 — sanity check: cube roots of unity */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={290} size={15} fill={INK} anchor="middle">
          {t(
            "These are the complex cube roots of unity, ω and ω².",
            "Ye complex cube roots of unity hain, ω aur ω²."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.5)} d={lineD(337.5, 306, 742.5, 306)} stroke={INK} sw={1.6} dur={0.6} />

      {/* beat 5 — set up the third example */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={336} size={14} fill={INK} anchor="middle">
          √2x² + x + √2 = 0:   D = 1 - 4(√2)(√2) = 1 - 8 = -7
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.5)} d={lineD(340.5, 350, 739.5, 350)} stroke={INK} sw={1.6} dur={0.6} />

      {/* beat 6 — the boxed step */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Chip x={429.5} y={380} w={221} h={40} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={17} script={false}>
          x = (-1 ± i√7) / (2√2)
        </Chip>
      </Fade>

      {/* beat 7 — guardrail sanity check */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d="M 60 448 L 60 482" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={76} y={465} size={16} fill={RED} anchor="start" weight={700}>
          {t(
            "Both are conjugate pairs — as guaranteed by real coefficients.",
            "Dono conjugate pairs hain — real coefficients ki wajah se guaranteed."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
