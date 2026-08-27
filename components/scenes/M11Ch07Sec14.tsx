/**
 * M11 Ch07 · Section 14 — "The middle term, and matching coefficients
 * across two expansions"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type=worked_examples.
 * 7 board_content items, seq1="Example 3" label — title invented, always-on.
 *
 * Beats (en [0, 10.84, 23.64, 48.47, 64.43, 88.06, 109.48]):
 *  0 Example 3 [JEE Main] label — middle term of (3x/2-1/3x)⁶
 *  1 n=6 even ⇒ one middle term T4 (r=3)
 *  2 T4 computed = -5/2, boxed (HIGH)
 *  3 Example 4 [JEE Adv] label — match coeff of x⁷ and x⁻⁷
 *  4 first expansion: r=5, coeff = 11C5 a⁶b⁻⁵
 *  5 second expansion: k=6, coeff = 11C6 a⁵b⁻⁶
 *  6 combine: 11C5=11C6 ⇒ ab=1, boxed (HIGH)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

export default function M11Ch07Sec14({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={60} size={20} fill={INK} script>
          {t("the middle term, and matching coefficients across two expansions", "middle term, aur do expansions ke coefficients match karna")}
        </T>
      </Fade>

      {/* beat 0 — Example 3 label */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={150} y={100} size={15} fill={AMBER_DARK} anchor="start">
          Example 3 [JEE Main] — middle term of (3x/2 - 1/(3x))⁶
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={150} y={135} size={16} fill={INK} anchor="start">
          {t("n=6 even ⇒ one middle term T₄ (r=3)", "n=6 even ⇒ ek middle term T₄ (r=3)")}
        </T>
      </Fade>

      {/* beat 2 — T4 computed, boxed */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={150} y={178} size={14} fill={AMBER_DARK} anchor="start">
          T₄ = ⁶C₃(3x/2)³(-1/(3x))³ = 20·27x³/8·(-1/27x³) = -5/2
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.2)} d={roundRectD(135, 156, 550, 40)} stroke={AMBER_DARK} sw={2.4} dur={1} />

      {/* beat 3 — Example 4 label */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={150} y={250} size={15} fill={AMBER_DARK} anchor="start">
          Example 4 [JEE Adv] — match coeff of x⁷ and x⁻⁷
        </T>
      </Fade>

      {/* beat 4 — first expansion */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={150} y={288} size={14} fill={INK} anchor="start">
          (ax²+1/(bx))¹¹:  x⁷ ⇒ r=5,  coeff = ¹¹C₅ a⁶b⁻⁵
        </T>
      </Fade>

      {/* beat 5 — second expansion */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={150} y={318} size={14} fill={INK} anchor="start">
          (ax-1/(bx²))¹¹:  x⁻⁷ ⇒ k=6,  coeff = ¹¹C₆ a⁵b⁻⁶
        </T>
      </Fade>

      {/* beat 6 — combine, boxed */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={150} y={362} size={17} fill={AMBER_DARK} anchor="start">
          ¹¹C₅ = ¹¹C₆  ⇒  a⁶b⁻⁵ = a⁵b⁻⁶  ⇒  ab = 1
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.2)} d={roundRectD(135, 340, 440, 40)} stroke={AMBER_DARK} sw={2.4} dur={1} />
    </Scene>
  );
}
