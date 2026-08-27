/**
 * M11 Ch08 · Section 76 — "Five telescopers built from scratch"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=concept. FLAGGED — real
 * derivation, extra eye-check (task brief).
 *
 * Math check (all five telescopers verified by hand):
 *  (1) 1/(r(r+1))=1/r-1/(r+1) telescopes: Σ=1-1/(n+1)=n/(n+1).
 *  (2) 1/(r(r+1))-1/((r+1)(r+2)) = [(r+2)-r]/[r(r+1)(r+2)] = 2/[r(r+1)
 *      (r+2)], so half of that is 1/[r(r+1)(r+2)] ✓.
 *  (3) V_r=r(r+1)(r+2): V_r-V_(r-1)=r(r+1)(r+2)-(r-1)r(r+1)=r(r+1)
 *      [(r+2)-(r-1)]=3r(r+1) ✓.
 *  (4) Σr(r+1)=[V_n-V_0]/3=n(n+1)(n+2)/3 (V_0=0) ✓.
 *  (5) (r+1)!-r!=r!·[(r+1)-1]=r·r! ✓; telescoping sum=(n+1)!-1!=(n+1)!-1.
 *  (6) rationalising 1/(√r+√(r+1)) by (√(r+1)-√r): denominator becomes
 *      (r+1)-r=1, leaving √(r+1)-√r ✓.
 *
 * Beats (en [0, 6.66, 22.53, 39.94, 57.94, 71.34, 84.14, 98.13]):
 *  0 title (always-on)
 *  1 telescoper 1: basic partial fraction sum
 *  2 telescoper 2: product-of-3 partial fraction
 *  3 telescoper 3 setup: the V_n method
 *  4 telescoper 3 result
 *  5 telescoper 4: factorials
 *  6 telescoper 5: surds
 *  7 red-margin: the same shape every time
 *
 * Layout plan:
 *  b1 | text bl95 cx540
 *  b2 | text bl125 cx540
 *  b3 | text bl155 cx540
 *  b4 | text bl188 cx540
 *  b5 | text bl218 cx540
 *  b6 | text bl250 cx540
 *  b7 | red bar x76 y275..345 · text bl295/335 x96
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, INK_LIGHT, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec76({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={INK} anchor="middle" script>
          {t("Partial fractions, the V_n method, factorials, and surds", "Partial fractions, V_n method, factorials, aur surds")}
        </T>
      </Fade>

      {/* beat 1 — telescoper 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={95} size={15} fill={INK} anchor="middle">
          {"Σ 1/(r(r+1)) = 1 - 1/(n+1) = n/(n+1)"}
        </T>
      </Fade>

      {/* beat 2 — telescoper 2 */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={125} size={14} fill={INK} anchor="middle">
          {"1/(r(r+1)(r+2)) = (1/2)[1/(r(r+1)) - 1/((r+1)(r+2))]"}
        </T>
      </Fade>

      {/* beat 3 — telescoper 3 setup: V_n method */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={155} size={14} fill={INK_LIGHT} anchor="middle" script>
          {t("V_n method: V_r=r(r+1)(r+2), V_r-V_(r-1) = 3r(r+1)", "V_n method: V_r=r(r+1)(r+2), V_r-V_(r-1) = 3r(r+1)")}
        </T>
      </Fade>

      {/* beat 4 — telescoper 3 result */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={188} size={16} fill={INK} anchor="middle">
          {"Σ r(r+1) = (1/3)n(n+1)(n+2)"}
        </T>
      </Fade>

      {/* beat 5 — telescoper 4: factorials */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={218} size={16} fill={INK} anchor="middle">
          {"r·r! = (r+1)!-r!  ⇒  Σ r·r! = (n+1)!-1"}
        </T>
      </Fade>

      {/* beat 6 — telescoper 5: surds */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={250} size={16} fill={INK} anchor="middle">
          {"1/(√r+√(r+1)) = √(r+1) - √r"}
        </T>
      </Fade>

      {/* beat 7 — red-margin: the same shape */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 76 275 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={96} y={295} size={15} fill={RED} anchor="start" script>
          {t("every derivation is the same shape:", "har derivation ka shape same hai:")}
        </T>
        <T x={96} y={335} size={15} fill={RED} anchor="start" script>
          {t("force a difference, then only ends survive", "difference force karo, phir sirf ends bachte hain")}
        </T>
      </Fade>
    </Scene>
  );
}
