/**
 * M11 Ch07 · Section 31 — "Expanding a negative power, and a coefficient
 * by combination"
 * Canvas 1080×620 · safe x36–1044, y30–596. FLAGGED for extra eye-scrutiny.
 * section_type=worked_examples. 8 board_content items, seq1="Example 1"
 * label — title invented, always-on.
 *
 * Beats (en [0, 8.88, 33.71, 55.9, 65.97, 86.28, 105.99, 121.44]):
 *  0 Example 1 [Foundation] label — first four terms of (1+x)^-2
 *  1 term-by-term falling-factorial expansion
 *  2 simplified: 1-2x+3x²-4x³+..., |x|<1, boxed (HIGH)
 *  3 Example 2 [JEE Main] label — coeff of x^4 in (1-2x)^-3
 *  4 use the general (1-y)^(-p) series with p=3, y=2x
 *  5 coeff of y^4 = 6C4 = 15, y^4=(2x)^4=16x^4
 *  6 coeff of x^4 = 15*16 = 240, boxed (HIGH)
 *  7 red-margin HIGH: two traps
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

export default function M11Ch07Sec31({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={60} size={21} fill={INK} script>
          {t("expanding a negative power, and a coefficient by combination", "negative power expand karna, aur combination se coefficient")}
        </T>
      </Fade>

      {/* beat 0 — Example 1 label */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={150} y={100} size={15} fill={AMBER_DARK} anchor="start">
          Example 1 [Foundation] — first four terms of (1+x)⁻²
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={150} y={138} size={14} fill={INK} anchor="start">
          (1+x)⁻² = 1+(-2)x + (-2)(-3)/2! x² + (-2)(-3)(-4)/3! x³ + ⋯
        </T>
      </Fade>

      {/* beat 2 — simplified, boxed */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={150} y={182} size={17} fill={AMBER_DARK} anchor="start">
          = 1 - 2x + 3x² - 4x³ + ⋯,     |x| &lt; 1
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.2)} d={roundRectD(135, 160, 420, 40)} stroke={AMBER_DARK} sw={2.4} dur={1} />

      {/* beat 3 — Example 2 label */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={150} y={248} size={15} fill={AMBER_DARK} anchor="start">
          Example 2 [JEE Main] — coeff of x⁴ in (1-2x)⁻³
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={150} y={283} size={15} fill={INK} script anchor="start">
          {t("use (1-y)^(-p) = Σ(p+r-1)Cr y^r with p=3, y=2x", "use karo (1-y)^(-p) = Σ(p+r-1)Cr y^r, p=3, y=2x")}
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={150} y={318} size={15} fill={INK} anchor="start">
          coeff of y⁴ = (3+4-1)C4 = 6C4 = 15,     y⁴ = (2x)⁴ = 16x⁴
        </T>
      </Fade>

      {/* beat 6 — final, boxed */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={150} y={362} size={17} fill={AMBER_DARK} anchor="start">
          coeff of x⁴ = 15·16 = 240
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.2)} d={roundRectD(135, 340, 320, 40)} stroke={AMBER_DARK} sw={2.4} dur={1} />

      {/* beat 7 — red-margin: two traps */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 150 400 v 56" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={170} y={422} size={14} fill={RED} script anchor="start">
          {t("trap: writing '(-3 choose 4)' — undefined for negative n", "trap: '(-3 choose 4)' likhna — negative n ke liye undefined")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.4)}>
        <T x={170} y={446} size={14} fill={RED} script anchor="start">
          {t("or dropping the 2⁴ factor from y=2x", "ya y=2x ka 2⁴ factor bhool jaana")}
        </T>
      </Fade>
    </Scene>
  );
}
