/**
 * M11 Ch07 · Section 29 — "The any-index series and the must-know expansions"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type=formulas.
 * FLAGGED for extra eye-scrutiny. 8 board_content items, seq1=title.
 * All standard expansions hand-verified against known series identities.
 *
 * Beats (en [0, 11.69, 36.52, 55.81, 75.61, 94.13, 114.61, 130.99]):
 *  0 title
 *  1 the master series (1+x)^n, boxed (HIGH)
 *  2 general term T(r+1)
 *  3 pair 1: (1-x)^-1, (1+x)^-1 (HIGH)
 *  4 pair 2: (1-x)^-2, (1+x)^-2 (HIGH)
 *  5 general (1-x)^-p series
 *  6 small-|x| approximation, boxed (HIGH)
 *  7 red-margin: n rational, r unbounded, pure numbers
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

export default function M11Ch07Sec29({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={58} size={21} fill={INK} script>
          {en ? "series, general term, and the standard four (|x|<1)" : "series, general term, aur standard four (|x|<1)"}
        </T>
      </Fade>

      {/* beat 1 — master series, boxed */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={150} y={105} size={14} fill={AMBER_DARK} anchor="start">
          (1+x)^n = 1 + nx + n(n-1)/2! x² + n(n-1)(n-2)/3! x³ + ⋯
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.2)} d={roundRectD(135, 83, 700, 40)} stroke={AMBER_DARK} sw={2.4} dur={1} />

      {/* beat 2 — general term */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={150} y={160} size={14} fill={INK} script anchor="start">
          T(r+1) = n(n-1)⋯(n-r+1)/r! · x^r,     r = 0, 1, 2, …
        </T>
      </Fade>

      {/* beat 3 — pair 1 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={150} y={205} size={15} fill={AMBER_DARK} anchor="start">
          (1-x)⁻¹ = 1+x+x²+⋯,      (1+x)⁻¹ = 1-x+x²-⋯
        </T>
      </Fade>

      {/* beat 4 — pair 2 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={150} y={248} size={15} fill={AMBER_DARK} anchor="start">
          (1-x)⁻² = 1+2x+3x²+⋯,      (1+x)⁻² = 1-2x+3x²-⋯
        </T>
      </Fade>

      {/* beat 5 — general negative power */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={150} y={292} size={15} fill={INK} script anchor="start">
          (1-x)^(-p) = Σ (p+r-1)Cr x^r      (p ∈ N)
        </T>
      </Fade>

      {/* beat 6 — small-|x| approximation, boxed */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={150} y={337} size={17} fill={AMBER_DARK} script anchor="start">
          small |x|:    (1+x)^n ≈ 1 + nx
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.2)} d={roundRectD(135, 315, 340, 40)} stroke={AMBER_DARK} sw={2.4} dur={1} />

      {/* beat 7 — red-margin */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 150 375 v 38" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={170} y={398} size={15} fill={RED} script anchor="start">
          {en ? "n is any rational index; r is now unbounded — all pure numbers" : "n koi bhi rational index; r ab unbounded — sab pure numbers"}
        </T>
      </Fade>
    </Scene>
  );
}
