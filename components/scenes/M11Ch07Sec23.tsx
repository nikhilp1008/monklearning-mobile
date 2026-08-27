/**
 * M11 Ch07 · Section 23 — "The identity families"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type=formulas.
 * Dense reference sheet — 7 board_content items after title, seq1=title.
 *
 * Beats (en [0, 12.2, 33.28, 54.45, 73.22, 90.12, 108.89, 122.8]):
 *  0 title
 *  1 sum family (HIGH): ΣCr=2^n, Σ(-1)^rCr=0, odd/even split=2^(n-1)
 *  2 index-shift identities
 *  3 weighted sums (HIGH): Σr·Cr, Σr²·Cr (non-script: literal r²)
 *  4 reciprocal sums (HIGH)
 *  5 square/product sums (HIGH, non-script: literal Cr²)
 *  6 Vandermonde's identity
 *  7 red-margin: Cr=nCr, all pure numbers
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch07Sec23({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={58} size={22} fill={INK} script>
          {en ? "the results, grouped by the tool that makes them" : "results, jis tool se bane uske hisaab se grouped"}
        </T>
      </Fade>

      {/* beat 1 — sum family */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={150} y={102} size={14} fill={AMBER_DARK} script anchor="start">
          ΣCr = 2^n,    Σ(-1)^r Cr = 0,    C0+C2+⋯ = C1+C3+⋯ = 2^(n-1)
        </T>
      </Fade>

      {/* beat 2 — index-shift identities */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={150} y={146} size={14} fill={INK} script anchor="start">
          r·Cr = n·C(r-1),      Cr/(r+1) = 1/(n+1) · (n+1)C(r+1)
        </T>
      </Fade>

      {/* beat 3 — weighted sums (non-script: r²) */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={150} y={192} size={15} fill={AMBER_DARK} anchor="start">
          Σ r·Cr = n·2^(n-1),      Σ r²·Cr = n(n+1)·2^(n-2)
        </T>
      </Fade>

      {/* beat 4 — reciprocal sums */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={150} y={240} size={14} fill={AMBER_DARK} script anchor="start">
          Σ Cr/(r+1) = (2^(n+1)-1)/(n+1),      Σ (-1)^r Cr/(r+1) = 1/(n+1)
        </T>
      </Fade>

      {/* beat 5 — square/product sums (non-script: Cr²) */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={150} y={288} size={15} fill={AMBER_DARK} anchor="start">
          Σ Cr² = (2n)Cn,      Σ Cr·C(r+k) = (2n)C(n-k)
        </T>
      </Fade>

      {/* beat 6 — Vandermonde */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={150} y={334} size={15} fill={INK} script anchor="start">
          Vandermonde:   Σk  mCk · nC(p-k)  =  (m+n)Cp
        </T>
      </Fade>

      {/* beat 7 — red-margin */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 150 360 v 38" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={170} y={382} size={15} fill={RED} script anchor="start">
          {en ? "throughout, Cr = nCr — all quantities are pure numbers" : "poore mein, Cr = nCr — sab pure numbers hain"}
        </T>
      </Fade>
    </Scene>
  );
}
