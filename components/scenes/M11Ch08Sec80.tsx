/**
 * M11 Ch08 · Section 80 — "The Vₙ method on a product of three"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=worked_examples. Title's
 * subscript-n (Vₙ) translated to plain underscore (V_n).
 *
 * Math check: general k-term product formula (Sec77) with k=3:
 * Σr(r+1)(r+2)=n(n+1)(n+2)(n+3)/4. Check n=1: 1·2·3=6, RHS=1·2·3·4/4=
 * 24/4=6 ✓.
 *
 * Beats (en [0, 7.17, 16.64, 29.87, 39.85, 49.49, 66.22]):
 *  0 title (always-on)
 *  1 text: use the V_n method
 *  2 formula: the general k-term formula
 *  3 text: here k=3
 *  4 formula: the result
 *  5 formula: n=1 check
 *  6 red-margin: the divisor rule
 *
 * Layout plan:
 *  b1 | text bl100 cx540
 *  b2 | text bl132 cx540
 *  b3 | text bl165 cx540
 *  b4 | text bl198 cx540 (bold)
 *  b5 | text bl228 cx540
 *  b6 | red bar x76 y253..323 · text bl273/313 x96
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, INK_LIGHT, AMBER_DARK, GREEN_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec80({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={21} fill={INK} anchor="middle" script>
          {t("Find Σ r(r+1)(r+2) from r = 1 to n", "Σ r(r+1)(r+2) nikalo, r = 1 se n tak")}
        </T>
      </Fade>

      {/* beat 1 — use V_n method */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={100} size={15} fill={INK_LIGHT} anchor="middle" script>
          {t("a product of 3 consecutive integers — use the V_n method", "3 consecutive integers ka product — V_n method use karo")}
        </T>
      </Fade>

      {/* beat 2 — the general formula */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={132} size={15} fill={INK} anchor="middle">
          {"Σ r(r+1)⋯(r+k-1) = n(n+1)⋯(n+k)/(k+1)"}
        </T>
      </Fade>

      {/* beat 3 — here k=3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={165} size={14} fill={INK_LIGHT} anchor="middle" script>
          {t("here k=3: append one more factor, divide by k+1=4", "yahan k=3: ek aur factor append karo, k+1=4 se divide karo")}
        </T>
      </Fade>

      {/* beat 4 — the result */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={198} size={18} fill={AMBER_DARK} anchor="middle" weight={700}>
          {"Σ r(r+1)(r+2) = n(n+1)(n+2)(n+3)/4"}
        </T>
      </Fade>

      {/* beat 5 — n=1 check */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={228} size={15} fill={GREEN_DARK} anchor="middle">
          {"n=1: 1·2·3 = 6 = (1·2·3·4)/4"}
        </T>
      </Fade>

      {/* beat 6 — red-margin: the divisor rule */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 76 253 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={96} y={273} size={15} fill={RED} anchor="start" script>
          {t("divide by (number of factors + 1) —", "(factors ki sankhya + 1) se divide karo —")}
        </T>
        <T x={96} y={313} size={15} fill={RED} anchor="start" script>
          {t("the V_n-method-divisor rule", "V_n-method-divisor rule")}
        </T>
      </Fade>
    </Scene>
  );
}
