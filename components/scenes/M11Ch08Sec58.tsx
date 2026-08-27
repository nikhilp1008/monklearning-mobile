/**
 * M11 Ch08 · Section 58 — "The AGP formula set and its useful relatives"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=formulas. Recaps Sec57's
 * derivation as a grab-and-go formula set.
 *
 * Beats (en [0, 7.51, 16.73, 30.72, 43.52, 56.23, 70.57, 87.38]):
 *  0 title (always-on)
 *  1 formula: general term
 *  2 formula: S_n
 *  3 formula: S_infinity
 *  4 formula: Σnr^n
 *  5 formula: Σn²r^n
 *  6 red-margin: r=1 case
 *  7 text: differentiation connection
 *
 * Layout plan:
 *  b1 | text bl100 cx540
 *  b2 | text bl130 cx540
 *  b3 | text bl162 cx540
 *  b4 | text bl195 cx540
 *  b5 | text bl225 cx540
 *  b6 | red bar x76 y250..320 · text bl270/310 x96
 *  b7 | text bl355 cx540
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, INK_LIGHT, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec58({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={20} fill={INK} anchor="middle" script>
          {t("General term, both sums, and two must-know relatives", "General term, dono sums, aur do must-know relatives")}
        </T>
      </Fade>

      {/* beat 1 — general term */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={100} size={16} fill={INK} anchor="middle">
          {"t_n = [a+(n-1)d]·r^(n-1)"}
        </T>
      </Fade>

      {/* beat 2 — S_n */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={130} size={12.5} fill={INK} anchor="middle">
          {"S_n = a/(1-r) + dr(1-r^(n-1))/(1-r)² - [a+(n-1)d]r^n/(1-r)   (r≠1)"}
        </T>
      </Fade>

      {/* beat 3 — S_infinity */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={162} size={16} fill={INK} anchor="middle">
          {"S_∞ = a/(1-r) + dr/(1-r)²   (|r|<1)"}
        </T>
      </Fade>

      {/* beat 4 — Σnr^n */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={195} size={16} fill={INK} anchor="middle">
          {"Σ n·r^n = r/(1-r)²"}
        </T>
      </Fade>

      {/* beat 5 — Σn²r^n */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={225} size={16} fill={INK} anchor="middle">
          {"Σ n²·r^n = r(1+r)/(1-r)³"}
        </T>
      </Fade>

      {/* beat 6 — red-margin: r=1 case */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 76 250 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={96} y={270} size={15} fill={RED} anchor="start" script>
          {t("if r=1 the AGP is just an AP —", "agar r=1, AGP sirf ek AP hai —")}
        </T>
        <T x={96} y={310} size={15} fill={RED} anchor="start" script>
          {t("sum it with the AP formula, not this one", "AP formula se sum karo, isse nahi")}
        </T>
      </Fade>

      {/* beat 7 — differentiation connection */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={540} y={355} size={14} fill={INK_LIGHT} anchor="middle" script>
          {t(
            "these relatives also follow from differentiating the GP sum",
            "ye relatives GP sum ko differentiate karke bhi milte hain"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
