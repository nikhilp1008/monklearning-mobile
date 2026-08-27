/**
 * M11 Ch07 · Section 18 — "Why the middle coefficient wins, and the
 * ratio algorithm"
 * Canvas 1080×620 · safe x36–1044, y30–596. 7 board_content items, seq1=title.
 *
 * Beats (en [0, 8.53, 31.32, 55.55, 74.41, 96.77, 119.64]):
 *  0 title
 *  1 proof formula, boxed (HIGH): nCr/nC(r-1) = (n-r+1)/r > 1 iff r<(n+1)/2
 *  2 so coefficients rise then fall, peak at middle
 *  3 NGT step 1: write the ratio
 *  4 NGT steps 2-3: solve, greatest = T⌊k⌋+1, tie if integer
 *  5 red-margin HIGH, step 4: (a-b)^n negative-term edge case
 *  6 red-margin: one ratio crossing 1 = the turning point
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

export default function M11Ch07Sec18({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={58} size={23} fill={INK} script>
          {t("proof of the peak, and the step-by-step method", "peak ka proof, aur step-by-step method")}
        </T>
      </Fade>

      {/* beat 1 — proof formula, boxed */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={150} y={105} size={17} fill={AMBER_DARK} script anchor="start">
          nCr / nC(r-1) = (n-r+1)/r &gt; 1   ⟺   r &lt; (n+1)/2
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.2)} d={roundRectD(135, 83, 620, 40)} stroke={AMBER_DARK} sw={2.4} dur={1} />

      {/* beat 2 */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={150} y={155} size={15} fill={MUTED} script anchor="start">
          {t("coefficients rise while r < (n+1)/2, fall after — peak at the middle", "coefficients badhte jab r < (n+1)/2, phir ghatate — peak middle mein")}
        </T>
      </Fade>

      {/* beat 3 — NGT step 1 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={150} y={205} size={16} fill={INK} script anchor="start">
          {t("step 1: write |T(r+1)/Tr| = (n-r+1)/r · |b/a|", "step 1: likho |T(r+1)/Tr| = (n-r+1)/r · |b/a|")}
        </T>
      </Fade>

      {/* beat 4 — NGT steps 2-3 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={150} y={238} size={16} fill={INK} script anchor="start">
          {t("step 2: solve ≥ 1 → r ≤ k.   step 3: greatest = T⌊k⌋+1; integer k ⇒ tie", "step 2: ≥1 solve karo → r ≤ k.   step 3: greatest = T⌊k⌋+1; k integer ⇒ tie")}
        </T>
      </Fade>

      {/* beat 5 — red-margin HIGH, step 4 */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 150 275 v 56" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={170} y={296} size={14} fill={RED} script anchor="start">
          {t("step 4: for (a-b)^n, if that term is negative", "step 4: (a-b)^n mein agar woh term negative hai")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={170} y={319} size={14} fill={RED} script anchor="start">
          {t("and ALGEBRAIC greatest is asked — compare positive neighbours", "aur ALGEBRAIC greatest poocha hai — positive neighbours compare karo")}
        </T>
      </Fade>

      {/* beat 6 — red-margin: turning point insight */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 150 355 v 38" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={170} y={378} size={15} fill={RED} script anchor="start">
          {t("one ratio crossing 1 = the unique turning point of rise-then-fall", "ek ratio ka 1 cross karna = rise-then-fall ka unique turning point")}
        </T>
      </Fade>
    </Scene>
  );
}
