/**
 * M11 Ch08 · Section 77 — "The telescoping toolkit"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=formulas. Recaps Sec75/76 as a
 * grab-and-go formula set.
 *
 * Math check: Σ1/(r(r+1)(r+2)) via the Sec76 partial fraction telescopes
 * to (1/2)[1/2 - 1/((n+1)(n+2))] = [(n+1)(n+2)-2]/[4(n+1)(n+2)] =
 * n(n+3)/[4(n+1)(n+2)] ✓ (since (n+1)(n+2)-2=n²+3n=n(n+3)).
 * Σ1/((2r-1)(2r+1)): 1/((2r-1)(2r+1))=(1/2)[1/(2r-1)-1/(2r+1)]
 * telescopes to (1/2)[1-1/(2n+1)]=n/(2n+1) ✓. General k-term product
 * formula is consistent with Sec76's k=2 case n(n+1)(n+2)/3. Σ1/(√r+
 * √(r+1))=Σ[√(r+1)-√r] telescopes to √(n+1)-1 ✓.
 *
 * Beats (en [0, 8.28, 20.31, 29.27, 38.14, 47.53, 62.72, 77.48]):
 *  0 title (always-on)
 *  1 formula: the principle
 *  2 formula: basic partial fraction
 *  3 formula: product-of-3
 *  4 formula: odd-number-step
 *  5 formula: general k-term product
 *  6 formula: factorial + surd, combined
 *  7 red-margin: track the constant multiplier
 *
 * Layout plan:
 *  b1 | text bl95 cx540
 *  b2 | text bl122 cx540
 *  b3 | text bl149 cx540
 *  b4 | text bl176 cx540
 *  b5 | text bl203 cx540
 *  b6 | text bl233 cx540
 *  b7 | red bar x76 y258..328 · text bl278/318 x96
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec77({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={21} fill={INK} anchor="middle" script>
          {t("The principle and the standard results", "Principle aur standard results")}
        </T>
      </Fade>

      {/* beat 1 — the principle */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={95} size={15} fill={INK} anchor="middle">
          {"t_r = V_r - V_(r+1)  ⇒  Σt_r = V_1 - V_(n+1)"}
        </T>
      </Fade>

      {/* beat 2 — basic partial fraction */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={122} size={16} fill={INK} anchor="middle">
          {"Σ 1/(r(r+1)) = n/(n+1)"}
        </T>
      </Fade>

      {/* beat 3 — product of 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={149} size={15} fill={INK} anchor="middle">
          {"Σ 1/(r(r+1)(r+2)) = n(n+3)/[4(n+1)(n+2)]"}
        </T>
      </Fade>

      {/* beat 4 — odd-number step */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={176} size={16} fill={INK} anchor="middle">
          {"Σ 1/((2r-1)(2r+1)) = n/(2n+1)"}
        </T>
      </Fade>

      {/* beat 5 — general k-term product */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={203} size={14} fill={INK} anchor="middle">
          {"Σ r(r+1)⋯(r+k-1) = n(n+1)⋯(n+k)/(k+1)"}
        </T>
      </Fade>

      {/* beat 6 — factorial + surd */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={233} size={14} fill={INK} anchor="middle">
          {"Σ r·r! = (n+1)!-1,   Σ 1/(√r+√(r+1)) = √(n+1)-1"}
        </T>
      </Fade>

      {/* beat 7 — red-margin: track the multiplier */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 76 258 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={96} y={278} size={15} fill={RED} anchor="start" script>
          {t("track the constant multiplier (1/2, 1/k) —", "constant multiplier (1/2, 1/k) track karo —")}
        </T>
        <T x={96} y={318} size={15} fill={RED} anchor="start" script>
          {t("dropping it is a classic slip", "isse chhodna ek classic slip hai")}
        </T>
      </Fade>
    </Scene>
  );
}
