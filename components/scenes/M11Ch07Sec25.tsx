/**
 * M11 Ch07 · Section 25 — "Isolating even coefficients, and a
 * differentiation sum"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type=worked_examples.
 * 8 board_content items, seq1="Example 1" label — title invented, always-on.
 *
 * Beats (en [0, 14, 28.25, 47.02, 64.26, 76.8, 95.15, 111.71]):
 *  0 Example 1 [CBSE] label — show C0+C2+C4+... = 2^(n-1)
 *  1 x=1 and x=-1 substitutions
 *  2 add the two ⇒ C0+C2+... = 2^(n-1), boxed (HIGH)
 *  3 red-margin: subtract instead gives the odd half too
 *  4 Example 2 [JEE Main] label — C1+2C2+...+nCn for (1+x)^10
 *  5 weights 1,2,3,... are the differentiation signature
 *  6 formula ⇒ n=10 ⇒ 5120 (HIGH)
 *  7 red-margin HIGH: don't compute term by term, recognise the pattern
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

export default function M11Ch07Sec25({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={60} size={21} fill={INK} script>
          {t("isolating even coefficients, and a differentiation sum", "even coefficients isolate karna, aur ek differentiation sum")}
        </T>
      </Fade>

      {/* beat 0 — Example 1 label */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={150} y={100} size={15} fill={AMBER_DARK} script anchor="start">
          Example 1 [CBSE] — show C0+C2+C4+⋯ = 2^(n-1)
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={150} y={135} size={15} fill={INK} script anchor="start">
          x=1:  ΣCr = 2^n;      x=-1:  C0-C1+C2-⋯ = 0
        </T>
      </Fade>

      {/* beat 2 — add, boxed */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={150} y={178} size={16} fill={AMBER_DARK} script anchor="start">
          add:  2(C0+C2+⋯) = 2^n   ⇒   C0+C2+⋯ = 2^(n-1)
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.2)} d={roundRectD(135, 156, 550, 40)} stroke={AMBER_DARK} sw={2.4} dur={1} />

      {/* beat 3 — red-margin */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 150 222 v 40" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={170} y={246} size={15} fill={RED} script anchor="start">
          {t("subtracting instead gives C1+C3+⋯ = 2^(n-1) too — halves equal", "subtract karo toh C1+C3+⋯ = 2^(n-1) bhi — halves equal")}
        </T>
      </Fade>

      {/* beat 4 — Example 2 label */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={150} y={295} size={15} fill={AMBER_DARK} anchor="start">
          Example 2 [JEE Main] — C1+2C2+⋯+nCn for (1+x)¹⁰
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={150} y={330} size={15} fill={INK} script anchor="start">
          {t("weights 1, 2, 3, … are the differentiation signature", "weights 1, 2, 3, … differentiation ki pehchaan hain")}
        </T>
      </Fade>

      {/* beat 6 — computed, HIGH */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={150} y={370} size={16} fill={AMBER_DARK} anchor="start">
          Σ r·Cr = n·2^(n-1)   →[n=10]→   10·2⁹ = 5120
        </T>
      </Fade>

      {/* beat 7 — red-margin */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 150 405 v 40" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={170} y={429} size={15} fill={RED} script anchor="start">
          {t("trap: computing each rCr — see the index-weights, reach for n·2^(n-1)", "trap: har rCr compute karna — weights dekho, n·2^(n-1) use karo")}
        </T>
      </Fade>
    </Scene>
  );
}
