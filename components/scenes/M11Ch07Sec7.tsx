/**
 * M11 Ch07 · Section 7 — "Coefficients in products, and the consecutive-ratio trick"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type = worked_examples (two examples).
 * 9 board_content items map 1:1 to reveal indices 0..8 (seq1 = "Example 3"
 * label, not a general title — title below is invented, always-on).
 *
 * Beats (en [0, 14.17, 27.05, 44.55, 69.38, 82.69, 97.29, 118.28, 137.82]):
 *  0 Example 3 [JEE Main] label — coeff of x³ in (1+x)(1-2x)⁵
 *  1 split the product: (1+x)(1-2x)⁵ = (1-2x)⁵ + x·(1-2x)⁵
 *  2 so coeff of x³ = [coeff x³] + [coeff x²] in (1-2x)⁵
 *  3 general term, both needed coefficients computed: -80, 40
 *  4 landed answer -40, boxed (HIGH)
 *  5 Example 4 [JEE Adv] label — 3 consecutive coeffs in ratio 1:3:5
 *  6 the two consecutive-ratio formulas (symbolic, stays script)
 *  7 solved: n=4r-1, 8r+5=3n ⇒ r=2, n=7 (HIGH)
 *  8 red-margin verify: 7C1:7C2:7C3 = 7:21:35 = 1:3:5, checkmark
 *
 * Layout plan:
 *  b0 | label NON-SCRIPT15 x150 bl100
 *  b1 | line NON-SCRIPT17 x150 bl135
 *  b2 | line NON-SCRIPT16 x150 bl170
 *  b3 | line NON-SCRIPT16 x150 bl208
 *  b4 | line NON-SCRIPT19 x150 bl248 (boxed x135..555 y226..266)
 *  b5 | label script15 x150 bl320
 *  b6 | line script15 x150 bl358
 *  b7 | line script17 x150 bl396
 *  b8 | red bar x120 y430..470 · text NON-SCRIPT15 x140 bl455 · checkD x640 y451
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, checkD } from "./math-kit";

export default function M11Ch07Sec7({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={60} size={21} fill={INK} script>
          {t("coefficients in products, and the consecutive-ratio trick", "products mein coefficients, consecutive-ratio trick")}
        </T>
      </Fade>

      {/* beat 0 — Example 3 label */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={150} y={100} size={15} fill={AMBER_DARK} anchor="start">
          Example 3 [JEE Main] — coeff of x³ in (1+x)(1-2x)⁵
        </T>
      </Fade>

      {/* beat 1 — split the product */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={150} y={135} size={17} fill={INK} anchor="start">
          (1+x)(1-2x)⁵ = (1-2x)⁵ + x·(1-2x)⁵
        </T>
      </Fade>

      {/* beat 2 — coefficient split */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={150} y={170} size={16} fill={MUTED} anchor="start">
          {t("coeff of x³ = (coeff of x³) + (coeff of x²) in (1-2x)⁵", "coeff of x³ = (coeff of x³) + (coeff of x²), (1-2x)⁵ mein")}
        </T>
      </Fade>

      {/* beat 3 — general term, compute both */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={150} y={208} size={16} fill={INK} anchor="start">
          T(r+1) = 5Cr(-2)^r x^r  ⇒  5C3(-2)³ = -80,  5C2(-2)² = 40
        </T>
      </Fade>

      {/* beat 4 — landed answer, boxed */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={150} y={248} size={19} fill={AMBER_DARK} anchor="start">
          coeff of x³ = -80 + 40 = -40
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.2)} d={roundRectD(135, 226, 420, 40)} stroke={AMBER_DARK} sw={2.4} dur={1} />

      {/* beat 5 — Example 4 label */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={150} y={320} size={15} fill={AMBER_DARK} script anchor="start">
          {t("Example 4 [JEE Adv] — 3 consecutive coeffs in ratio 1:3:5", "Example 4 [JEE Adv] — 3 lagataar coeffs, ratio 1:3:5")}
        </T>
      </Fade>

      {/* beat 6 — the two ratio formulas */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={150} y={358} size={15} fill={INK} script anchor="start">
          nC(r-1)/nCr = r/(n-r+1),      nCr/nC(r+1) = (r+1)/(n-r)
        </T>
      </Fade>

      {/* beat 7 — solved */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={150} y={396} size={17} fill={AMBER_DARK} script anchor="start">
          ⇒ n = 4r-1,  8r+5 = 3n  ⇒  r = 2, n = 7
        </T>
      </Fade>

      {/* beat 8 — red-margin verify */}
      <Draw on={beat >= 8} delay={dl(8, 0.2)} d="M 120 430 v 40" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 0.8)}>
        <T x={140} y={455} size={15} fill={RED} anchor="start">
          verify: ⁷C₁:⁷C₂:⁷C₃ = 7:21:35 = 1:3:5
        </T>
      </Fade>
      <Draw on={beat >= 8} delay={dl(8, 1.8)} d={checkD(645, 451, 18)} stroke={AMBER_DARK} sw={2.4} dur={0.5} />
    </Scene>
  );
}
