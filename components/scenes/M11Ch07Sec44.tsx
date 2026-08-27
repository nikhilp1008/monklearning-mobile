/**
 * M11 Ch07 · Section 44 — "A coefficient by cases, and by the
 * geometric-series bridge"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type=worked_examples.
 * 8 board_content items, seq1="Example 3" label — title invented, always-on.
 *
 * Beats (en [0, 10.58, 35.41, 57, 81.83, 94.46, 115.11, 132.44]):
 *  0 Example 3 [JEE Main] label — coeff of x^4 in (1+x+x^2)^3
 *  1 need n1+n2+n3=3, n2+2n3=4: (0,2,1) or (1,0,2)
 *  2 sum the two cases = 6, boxed (HIGH)
 *  3 red-margin: check via full palindromic expansion
 *  4 Example 4 [JEE Adv] label — coeff of x^7 in (1+x+x^2+...)^3
 *  5 geometric series bridge: (1-x)^-1 cubed = (1-x)^-3
 *  6 [x^r](1-x)^-3 formula, r=7 -> 36, boxed (HIGH)
 *  7 red-margin: agrees with stars-and-bars
 *
 * Math hand-verified: (0,2,1)&(1,0,2) are the only solutions;
 * 3!/(0!2!1!)+3!/(1!0!2!)=3+3=6; full expansion 1+3x+6x^2+7x^3+6x^4+
 * 3x^5+x^6 confirms; C(9,2)=36 matches stars-and-bars C(7+3-1,3-1).
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

export default function M11Ch07Sec44({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={60} size={19} fill={INK} script>
          {t("a coefficient by cases, and by the geometric-series bridge", "cases se coefficient, aur geometric-series bridge se")}
        </T>
      </Fade>

      {/* beat 0 — Example 3 label */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={150} y={100} size={15} fill={AMBER_DARK} anchor="start">
          Example 3 [JEE Main] — coeff of x⁴ in (1+x+x²)³
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={150} y={135} size={15} fill={INK} script anchor="start">
          {t("need n1+n2+n3=3 with x-power n2+2n3=4: (0,2,1) or (1,0,2)", "chahiye n1+n2+n3=3, x-power n2+2n3=4: (0,2,1) ya (1,0,2)")}
        </T>
      </Fade>

      {/* beat 2 — boxed */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={150} y={178} size={16} fill={AMBER_DARK} script anchor="start">
          3!/(0!2!1!) + 3!/(1!0!2!) = 3+3 = 6
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.2)} d={roundRectD(135, 156, 420, 40)} stroke={AMBER_DARK} sw={2.4} dur={1} />

      {/* beat 3 — red-margin check */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 150 222 v 40" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={170} y={246} size={13} fill={RED} anchor="start">
          {t("check: (1+x+x²)³=1+3x+6x²+7x³+6x⁴+3x⁵+x⁶ — palindromic, coeff of x⁴=6", "check: (1+x+x²)³=1+3x+6x²+7x³+6x⁴+3x⁵+x⁶ — palindromic, x⁴=6")}
        </T>
      </Fade>

      {/* beat 4 — Example 4 label */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={150} y={290} size={15} fill={AMBER_DARK} script anchor="start">
          {t("Example 4 [JEE Adv] — coeff of x⁷ in (1+x+x²+⋯)³", "Example 4 [JEE Adv] — coeff of x⁷ in (1+x+x²+⋯)³")}
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={150} y={325} size={15} fill={INK} script anchor="start">
          1+x+x²+⋯ = (1-x)⁻¹    ⇒    (1+x+x²+⋯)³ = (1-x)⁻³
        </T>
      </Fade>

      {/* beat 6 — boxed final */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={150} y={368} size={16} fill={AMBER_DARK} script anchor="start">
          [x^r](1-x)⁻³ = (r+2)C2    →[r=7]→    ⁹C₂ = 36
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.2)} d={roundRectD(135, 346, 550, 40)} stroke={AMBER_DARK} sw={2.4} dur={1} />

      {/* beat 7 — red-margin */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 150 406 v 40" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={170} y={430} size={14} fill={RED} script anchor="start">
          {t("also = solutions of n1+n2+n3=7 — multinomial and stars-and-bars agree", "yeh bhi = n1+n2+n3=7 ke solutions — dono method match karte")}
        </T>
      </Fade>
    </Scene>
  );
}
