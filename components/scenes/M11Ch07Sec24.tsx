/**
 * M11 Ch07 · Section 24 — "Four techniques that crack every sum"
 * Canvas 1080×620 · safe x36–1044, y30–596. 8 board_content items, seq1=title
 * (itself names the four techniques).
 *
 * Beats (en [0, 7.42, 32.26, 57.09, 73.3, 96.85, 121.69, 139.01]):
 *  0 title = "Substitute · Differentiate · Integrate · Compare"
 *  1 A) substitution explanation
 *  2 substitution formula, boxed (HIGH)
 *  3 B) differentiation explanation
 *  4 C) integration formula, boxed (HIGH)
 *  5 D) compare-coefficients formula, boxed (HIGH, non-script: Cr²)
 *  6 limits caveat after differentiating
 *  7 red-margin HIGH: match the weight pattern to the operation
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

export default function M11Ch07Sec24({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={58} size={22} fill={INK} script>
          Substitute · Differentiate · Integrate · Compare
        </T>
      </Fade>

      {/* beat 1 — A) substitution */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={150} y={100} size={15} fill={MUTED} script anchor="start">
          {t("A) substitution: x=1 and x=-1 — add to isolate even indices, subtract for odd", "A) substitution: x=1 aur x=-1 — add karo even ke liye, subtract odd ke liye")}
        </T>
      </Fade>

      {/* beat 2 — substitution formula, boxed */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={150} y={143} size={15} fill={AMBER_DARK} script anchor="start">
          n(1+x)^(n-1) = Σ r·Cr·x^(r-1)   →[x=1]→   Σ r·Cr = n·2^(n-1)
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.2)} d={roundRectD(135, 121, 700, 40)} stroke={AMBER_DARK} sw={2.4} dur={1} />

      {/* beat 3 — B) differentiation */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={150} y={195} size={15} fill={MUTED} script anchor="start">
          {t("B) differentiation manufactures the weight r — twice gives r²", "B) differentiation weight r banata — do baar karo toh r²")}
        </T>
      </Fade>

      {/* beat 4 — C) integration formula, boxed */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={150} y={238} size={15} fill={AMBER_DARK} script anchor="start">
          ∫(0 to 1) (1+x)^n dx = (2^(n+1)-1)/(n+1) = Σ Cr/(r+1)
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.2)} d={roundRectD(135, 216, 620, 40)} stroke={AMBER_DARK} sw={2.4} dur={1} />

      {/* beat 5 — D) compare-coefficients formula, boxed (non-script: Cr²) */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={150} y={288} size={16} fill={AMBER_DARK} anchor="start">
          (1+x)^n(1+x)^n = (1+x)^(2n)   ⇒   Σ Cr² = (2n)Cn
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.2)} d={roundRectD(135, 265, 560, 40)} stroke={AMBER_DARK} sw={2.4} dur={1} />

      {/* beat 6 — limits caveat */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={150} y={340} size={14} fill={MUTED} script anchor="start">
          {t("after differentiating, the sum starts at r=1 (r=0 vanishes) — recheck limits", "differentiate karne ke baad, sum r=1 se shuru (r=0 vanish) — limits recheck")}
        </T>
      </Fade>

      {/* beat 7 — red-margin */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 150 372 v 40" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={170} y={396} size={16} fill={RED} script anchor="start">
          {t("match the weight pattern to the operation — that's 90% of it", "weight pattern ko operation se match karo — yehi 90% hai")}
        </T>
      </Fade>
    </Scene>
  );
}
