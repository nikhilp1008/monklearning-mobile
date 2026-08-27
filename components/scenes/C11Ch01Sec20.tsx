/**
 * C11 Ch01 · Section 20 — "Worked examples: both rules in one problem"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0,21.68,38.06,55.55,71.94,85.76,103.17,118.19]):
 *  0 Example 3 (JEE Main) given: sheet 2.1×3.46 cm — perimeter & area
 *  1 perimeter sum: 2.1+3.46=5.56 → 5.6 (addition rule, 1 decimal)
 *  2 × 2 (exact!) → perimeter = 11.2 cm
 *  3 area: 2.1×3.46=7.266 → 7.3 cm² (multiplication rule, 2 sig figs)
 *  4 insight: decimals govern the sum, sig figs govern the product
 *  (example 3 fully fades at beat 5, freeing the board for example 4)
 *  5 Example 4 (JEE Advanced) given: 4.5×10⁴ + 2.3×10³ in sci notation
 *  6 align exponents first: 0.23×10⁴, add directly → 4.73×10⁴
 *  7 apply addition rule to coefficients → 4.7×10⁴ + the subtlety
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | given (script14 ink)         | T mid | x540  y90  [fade@b5]
 *  b1 | perimeter sum (14 bold ink)  | T mid | x540  y125 [fade@b5]
 *  b2 | ×2 result (14 bold ink)      | T mid | x540  y155 [fade@b5]
 *  b3 | area result (14 bold ink)    | T mid | x540  y190 [fade@b5]
 *  b4 | insight l1 (script13 green)  | T mid | x540  y225 [fade@b5]
 *  b4 | insight l2 (script13 green)  | T mid | x540  y250 [fade@b5]
 *  b5 | given 2 (script14 ink)       | T mid | x540  y90  (same slot as b0)
 *  b6 | align+add (14 bold ink)      | T mid | x540  y130
 *  b7 | final (14 bold ink)          | T mid | x540  y165
 *  b7 | subtlety (script13 red)      | T mid | x540  y195
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, INK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch01Sec20({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={21} fill={RED} script>
          {t("worked examples: both rules in one problem", "worked examples: dono rules ek problem mein")}
        </T>
      </Fade>

      {/* beat 0 — Example 3 given (JEE Main); fully fades at beat 5 */}
      <Fade on={beat >= 0 && beat < 5} delay={dl(0, 0.4)}>
        <T x={540} y={90} size={14} fill={INK} script>
          {t(
            "Example 3 (JEE Main): sheet 2.1 cm × 3.46 cm — find perimeter & area (correct sig figs)",
            "Example 3 (JEE Main): sheet 2.1 cm × 3.46 cm — perimeter & area (sahi sig figs)"
          )}
        </T>
      </Fade>

      {/* beat 1 — perimeter sum */}
      <Fade on={beat >= 1 && beat < 5} delay={dl(1, 0.4)}>
        <T x={540} y={125} size={14} fill={INK} weight={700} script={false}>
          perimeter sum: 2.1 + 3.46 = 5.56 → 5.6 (1 decimal, from 2.1)
        </T>
      </Fade>

      {/* beat 2 — x2, exact */}
      <Fade on={beat >= 2 && beat < 5} delay={dl(2, 0.4)}>
        <T x={540} y={155} size={14} fill={INK} weight={700} script={false}>
          × 2 (exact!) → perimeter = 11.2 cm
        </T>
      </Fade>

      {/* beat 3 — area */}
      <Fade on={beat >= 3 && beat < 5} delay={dl(3, 0.4)}>
        <T x={540} y={190} size={14} fill={INK} weight={700} script={false}>
          area: 2.1 × 3.46 = 7.266 → 7.3 cm² (2.1 has 2 sf)
        </T>
      </Fade>

      {/* beat 4 — the insight */}
      <Fade on={beat >= 4 && beat < 5} delay={dl(4, 0.4)}>
        <T x={540} y={225} size={13} fill={GREEN} script>
          {t(
            "same measurements, different rule per operation",
            "same measurements, operation ke hisaab se alag rule"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4 && beat < 5} delay={dl(4, 1.2)}>
        <T x={540} y={250} size={13} fill={GREEN} script>
          {t(
            "decimals govern the SUM, sig figs govern the PRODUCT",
            "SUM par decimals ka raaj, PRODUCT par sig figs ka"
          )}
        </T>
      </Fade>

      {/* beat 5 — Example 4 given (JEE Advanced), same slot as beat 0 */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={90} size={14} fill={INK} script>
          {t(
            "Example 4 (JEE Advanced): 4.5×10⁴ + 2.3×10³ — scientific notation, correct sig figs",
            "Example 4 (JEE Advanced): 4.5×10⁴ + 2.3×10³ — sci notation, sahi sig figs"
          )}
        </T>
      </Fade>

      {/* beat 6 — align exponents, add directly */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={130} size={14} fill={INK} weight={700} script={false}>
          2.3 × 10³ = 0.23 × 10⁴ ⇒ 4.5 + 0.23 = 4.73 × 10⁴
        </T>
      </Fade>

      {/* beat 7 — apply the addition rule to the coefficients */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={165} size={14} fill={INK} weight={700} script={false}>
          4.5 (1dp) + 0.23 (2dp) → 4.7 × 10⁴
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.4)}>
        <T x={540} y={195} size={13} fill={RED} script>
          {t(
            "align exponents FIRST — decimal places only compare at the SAME power of ten",
            "pehle exponents align karo — decimal places sirf SAME power par compare hote hain"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
