/**
 * M11 Ch04 · Section 19 — "Worked (JEE Advanced): conjugate identities & product moduli"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples (JEE Advanced) — two problems, each given → set up
 * → step by step → answer boxed.
 *
 * Beats (board_reveal_at_english [0, 6.14, 14.51, 36.27, 51.8, 67.5, 84.65, 93.95]):
 *  0 heading: "advanced: z² = (conj z)², and a big product"
 *  1 given: if z² = (z̄)², then z is purely real or purely imaginary
 *  2 step: z² = (x²-y²)+2ixy, (z̄)² = (x²-y²)-2ixy
 *  3 step: equating forces 2xy=-2xy, so xy=0 — x=0 or y=0
 *  4 given (problem 2): the product (2+i)(2+2i)⋯(2+ni) = x+iy
 *  5 step: take modulus factor by factor — √5·√8·√13⋯√(4+n²) = |x+iy| = √(x²+y²)
 *  6 answer (boxed, high emphasis): 5·8·13⋯(4+n²) = x²+y²
 *  7 sanity check: moduli tamed a scary product
 *
 * Layout plan:
 *  b0 | heading (16,amber_dark,w700)      | T mid  | x540  y92
 *  b1 | given, embedded bar (16,ink)      | T/Bar  | x319..785 y136 (Overline #1)
 *  b2 | expansion, embedded bar (16,ink)  | T/Bar  | x280..690 y180 (Overline #2)
 *  b3 | step text (15,ink)                | T mid  | x540  y222
 *  b4 | given (15,ink)                    | T mid  | x540  y258
 *  b5 | step formula (15,ink)             | T mid  | x540  y296
 *  b6 | boxed answer (18,ink,w700)        | Draw+T | box x330..750 y335..381
 *  b7 | sanity check (15,ink)             | T mid  | x540  y415
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, Overline } from "./math-kit";

/** T + Overline pair — see M11Ch04Sec13.tsx for the full contract. */
function Bar({
  on,
  delay = 0,
  x,
  y,
  size,
  anchor = "start",
  fill = INK,
  weight = 700,
  text = "z",
  barWidth,
}: {
  on: boolean;
  delay?: number;
  x: number;
  y: number;
  size: number;
  anchor?: "start" | "middle" | "end";
  fill?: string;
  weight?: number;
  text?: string;
  barWidth?: number;
}) {
  const w = barWidth ?? size * 0.6;
  return (
    <>
      <Fade on={on} delay={delay}>
        <T x={x} y={y} size={size} fill={fill} anchor={anchor} weight={weight}>
          {text}
        </T>
      </Fade>
      <Overline on={on} delay={delay + 0.15} x={x} y={y} size={size} textWidth={w} anchor={anchor} stroke={fill} />
    </>
  );
}

export default function M11Ch04Sec19({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={21} fill={RED} anchor="middle" script>
          {t("Worked (JEE Advanced): Conjugate & Product Moduli", "Solved (JEE Advanced): Conjugate & Product Moduli")}
        </T>
      </Fade>

      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={92} size={16} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Advanced: z² = (conj z)², and a big product", "Advanced: z² = (conj z)², aur ek bada product")}
        </T>
      </Fade>

      {/* beat 1 — given, first problem (bar sits between two language-neutral
          formula fragments; the translated clause trails last, so differing
          English/Hinglish lengths never shift anything positioned earlier) */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={319} y={136} size={16} fill={INK} anchor="start" weight={700}>z² = (</T>
      </Fade>
      <Bar on={beat >= 1} delay={dl(1, 0.5)} x={367} y={136} size={16} barWidth={9.6} />
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={385} y={136} size={16} fill={INK} anchor="start" weight={700}>)²  ⇒ </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={451} y={136} size={16} fill={INK} anchor="start" weight={700}>
          {t("z is purely real or purely imaginary.", "z purely real ya purely imaginary hai.")}
        </T>
      </Fade>

      {/* beat 2 — expand both sides */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={280} y={180} size={16} fill={INK} anchor="start" weight={700}>z² = (x²-y²)+2ixy,  (</T>
      </Fade>
      <Bar on={beat >= 2} delay={dl(2, 0.6)} x={496} y={180} size={16} barWidth={9.6} />
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={514} y={180} size={16} fill={INK} anchor="start" weight={700}>)² = (x²-y²)-2ixy</T>
      </Fade>

      {/* beat 3 — the deduction */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={222} size={15} fill={INK} anchor="middle">
          {t(
            "Equating forces 2xy = -2xy, so xy = 0: x = 0 or y = 0.",
            "Equate karne se 2xy = -2xy milta hai, to xy = 0: x=0 ya y=0."
          )}
        </T>
      </Fade>

      {/* beat 4 — given, second problem */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={258} size={15} fill={INK} anchor="middle">
          {t("Now the product (2+i)(2+2i)⋯(2+ni) = x + iy.", "Ab product (2+i)(2+2i)⋯(2+ni) = x + iy.")}
        </T>
      </Fade>

      {/* beat 5 — take modulus factor by factor */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={296} size={15} fill={INK} anchor="middle" weight={700}>
          √5 · √8 · √13 ⋯ √(4+n²) = |x+iy| = √(x²+y²)
        </T>
      </Fade>

      {/* beat 6 — boxed answer */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d={roundRectD(330, 335, 420, 46)} stroke={GREEN} sw={2} dur={0.7} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={540} y={364} size={18} fill={INK} anchor="middle" weight={700}>
          5·8·13⋯(4+n²) = x² + y²
        </T>
      </Fade>

      {/* beat 7 — sanity check */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={415} size={15} fill={INK} anchor="middle">
          {t("Moduli tamed a scary product.", "Moduli ne scary product ko tame kar diya.")}
        </T>
      </Fade>
    </Scene>
  );
}
