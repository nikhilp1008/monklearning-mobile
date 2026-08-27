/**
 * M11 Ch07 · Section 20 — "Greatest coefficient, and numerical vs
 * algebraic greatest"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type=worked_examples.
 * 8 board_content items, seq1="Example 3" label — title invented, always-on.
 *
 * Beats (en [0, 13.65, 32.34, 47.62, 68.1, 81.92, 106.75, 127.83]):
 *  0 Example 3 [JEE Main] label — greatest coeff in (1+2x)^6
 *  1 ratio formula ⇒ r ≤ 3.67
 *  2 c4 = 240 computed, boxed (HIGH)
 *  3 red-margin: not the middle term, 2^r shifts the peak
 *  4 Example 4 [JEE Adv] label — (4-3x)^8 at x=1
 *  5 ratio formula ⇒ r ≤ 27/7 ≈ 3.86
 *  6 |T4|=1,548,288 but T4<0 (HIGH)
 *  7 T3, T5 computed ⇒ algebraically greatest = T5, boxed (HIGH)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

export default function M11Ch07Sec20({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={60} size={21} fill={INK} script>
          {t("greatest coefficient, and numerical vs algebraic greatest", "greatest coefficient, aur numerical vs algebraic greatest")}
        </T>
      </Fade>

      {/* beat 0 — Example 3 label */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={150} y={100} size={15} fill={AMBER_DARK} anchor="start">
          Example 3 [JEE Main] — greatest coefficient in (1+2x)⁶
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={150} y={135} size={14} fill={INK} script anchor="start">
          cr = 6Cr·2^r:   c(r+1)/cr = (6-r)/(r+1)·2  ≥  1   ⇒   r ≤ 3.67
        </T>
      </Fade>

      {/* beat 2 — computed, boxed */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={150} y={178} size={17} fill={AMBER_DARK} anchor="start">
          c₄ = ⁶C₄·2⁴ = 15·16 = 240
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.2)} d={roundRectD(135, 156, 340, 40)} stroke={AMBER_DARK} sw={2.4} dur={1} />

      {/* beat 3 — red-margin */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 150 218 v 38" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={170} y={241} size={14} fill={RED} script anchor="start">
          {t("coeff of x⁴, NOT the middle term — 2^r shifts the peak right", "coeff of x⁴, middle term NAHI — 2^r peak ko right shift karta")}
        </T>
      </Fade>

      {/* beat 4 — Example 4 label */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={150} y={285} size={15} fill={AMBER_DARK} anchor="start">
          Example 4 [JEE Adv] — (4-3x)⁸ at x=1
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={150} y={320} size={14} fill={INK} script anchor="start">
          |T(r+1)|/|Tr| = (9-r)/r · 3/4  ≥  1   ⇒   r ≤ 27/7 ≈ 3.86
        </T>
      </Fade>

      {/* beat 6 — |T4| computed, HIGH */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={150} y={356} size={14} fill={AMBER_DARK} anchor="start">
          {t("|T₄| = ⁸C₃·4⁵·3³ = 1,548,288,  but T₄ < 0 (odd power of -3x)", "|T₄| = ⁸C₃·4⁵·3³ = 1,548,288,  par T₄ < 0 (odd power of -3x)")}
        </T>
      </Fade>

      {/* beat 7 — the resolution, boxed */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={150} y={398} size={14} fill={AMBER_DARK} anchor="start">
          T₃ = +1,032,192,  T₅ = +1,451,520  ⇒  algebraically greatest = T₅
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.2)} d={roundRectD(135, 376, 620, 40)} stroke={AMBER_DARK} sw={2.4} dur={1} />
    </Scene>
  );
}
