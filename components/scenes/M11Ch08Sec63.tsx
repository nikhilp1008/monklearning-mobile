/**
 * M11 Ch08 · Section 63 — "n²/2ⁿ: applying the AGP idea twice"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=worked_examples. Title's
 * superscript-n (2ⁿ) translated to plain caret (2^n) throughout.
 *
 * Math check: Σn(n-1)r^n = 2r²/(1-r)³ (from differentiating 1/(1-r)
 * twice and multiplying by r²), Σn·r^n = r/(1-r)² (standard AGP
 * relative, Sec58). At r=1/2: Σn(n-1)(1/2)^n = 2(1/4)/(1/8) =
 * (1/2)/(1/8) = 4 ✓. Σn(1/2)^n = (1/2)/(1/4) = 2 ✓. Sum = 4+2 = 6 ✓.
 *
 * Beats (en [0, 16.55, 30.04, 49.92, 57.94, 64.6, 73.39]):
 *  0 title (always-on)
 *  1 text: split n²=n(n-1)+n
 *  2 formula: the two standard sums
 *  3 formula: first evaluated at r=1/2
 *  4 formula: second evaluated at r=1/2
 *  5 formula: the total
 *  6 red-margin: AGP machinery sums polynomial x geometric
 *
 * Layout plan:
 *  b1 | text bl100 cx540
 *  b2 | text bl132 cx540
 *  b3 | text bl165 cx540
 *  b4 | text bl195 cx540
 *  b5 | text bl228 cx540 (bold)
 *  b6 | red bar x76 y253..323 · text bl273/313 x96
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, INK_LIGHT, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec63({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={21} fill={INK} anchor="middle" script>
          {t("Evaluate Σ n²/2^n from n = 1 to ∞", "Σ n²/2^n ko n=1 se ∞ tak evaluate karo")}
        </T>
      </Fade>

      {/* beat 1 — split the trick */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={100} size={15} fill={INK_LIGHT} anchor="middle" script>
          {t("split n² = n(n-1) + n to reuse two standard sums", "n² = n(n-1) + n split karo, do standard sums reuse karne ke liye")}
        </T>
      </Fade>

      {/* beat 2 — the two standard sums */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={132} size={15} fill={INK} anchor="middle">
          {"Σ n(n-1)r^n = 2r²/(1-r)³,   Σ n·r^n = r/(1-r)²"}
        </T>
      </Fade>

      {/* beat 3 — first evaluated */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={165} size={16} fill={INK} anchor="middle">
          {"Σ n(n-1)(1/2)^n = 2(1/4)/(1/8) = 4"}
        </T>
      </Fade>

      {/* beat 4 — second evaluated */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={195} size={16} fill={INK} anchor="middle">
          {"Σ n(1/2)^n = (1/2)/(1/4) = 2"}
        </T>
      </Fade>

      {/* beat 5 — the total */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={228} size={18} fill={AMBER_DARK} anchor="middle" weight={700}>
          {"Σ n²/2^n = 4 + 2 = 6"}
        </T>
      </Fade>

      {/* beat 6 — red-margin: the general technique */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 76 253 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={96} y={273} size={15} fill={RED} anchor="start" script>
          {t("the AGP machinery, iterated, sums", "AGP machinery, iterate karke,")}
        </T>
        <T x={96} y={313} size={15} fill={RED} anchor="start" script>
          {t("'polynomial × geometric' series", "'polynomial × geometric' series sum karti hai")}
        </T>
      </Fade>
    </Scene>
  );
}
