/**
 * M11 Ch07 · Section 35 — "Base-splitting and the conjugate identities"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type=formulas.
 * 8 board_content items, seq1=title.
 *
 * Beats (en [0, 11.61, 30.55, 45.91, 64.6, 80.04, 104.87, 124.59]):
 *  0 title
 *  1 (K±1)^n expansion formula (HIGH)
 *  2 modulo K/K², only lowest-power terms survive
 *  3 (1+K)^n ≡ 1+nK (mod K²), boxed (HIGH)
 *  4 divisibility identities: a^n-1, a^n-b^n
 *  5 conjugate setup: I+f and f' (HIGH)
 *  6 product identity, boxed (HIGH)
 *  7 red-margin: glossary
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

export default function M11Ch07Sec35({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={58} size={22} fill={INK} script>
          {en ? "the identities that power every application" : "identities jo har application chalate hain"}
        </T>
      </Fade>

      {/* beat 1 — expansion formula */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={150} y={102} size={15} fill={AMBER_DARK} script anchor="start">
          (K±1)^n = Σ nCr K^r (±1)^(n-r)
        </T>
      </Fade>

      {/* beat 2 */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={150} y={142} size={15} fill={INK} script anchor="start">
          {en ? "modulo K (or K²), only the lowest-power terms in K survive" : "modulo K (ya K²), sirf K ki lowest-power terms bachte"}
        </T>
      </Fade>

      {/* beat 3 — boxed */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={150} y={186} size={17} fill={AMBER_DARK} script anchor="start">
          (1+K)^n ≡ 1+nK   (mod K²)
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.2)} d={roundRectD(135, 164, 340, 40)} stroke={AMBER_DARK} sw={2.4} dur={1} />

      {/* beat 4 — divisibility identities */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={150} y={238} size={15} fill={INK} script anchor="start">
          a^n - 1 divisible by (a-1);      a^n - b^n divisible by (a-b)
        </T>
      </Fade>

      {/* beat 5 — conjugate setup */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={150} y={280} size={15} fill={AMBER_DARK} script anchor="start">
          (p+√q)^n = I+f,    f' = (p-√q)^n ∈ (0,1),    f' = 1-f
        </T>
      </Fade>

      {/* beat 6 — product identity, boxed */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={150} y={324} size={16} fill={AMBER_DARK} anchor="start">
          (I+f)f' = (p+√q)^n(p-√q)^n = (p²-q)^n
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.2)} d={roundRectD(135, 302, 500, 40)} stroke={AMBER_DARK} sw={2.4} dur={1} />

      {/* beat 7 — red-margin glossary */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 150 362 v 38" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={170} y={385} size={14} fill={RED} script anchor="start">
          {en
            ? "n ∈ N; K,a,b,p,q integers; I = integer part, f = fractional part — pure numbers"
            : "n ∈ N; K,a,b,p,q integers; I = integer part, f = fractional part — pure numbers"}
        </T>
      </Fade>
    </Scene>
  );
}
