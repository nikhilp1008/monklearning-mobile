/**
 * M11 Ch08 · Section 69 — "Method of differences on 3 + 7 + 13 + 21 + …"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=worked_examples.
 *
 * Math check: t_n=n²+n+1, t_4=16+4+1=21 ✓. S_n=Σn²+Σn+Σ1 =
 * [n(n+1)(2n+1)+3n(n+1)+6n]/6 = n[(2n²+3n+1)+(3n+3)+6]/6 =
 * n(2n²+6n+10)/6 = n(n²+3n+5)/3. Verify S_3=3(9+9+5)/3=3(23)/3=23=
 * 3+7+13 ✓.
 *
 * Beats (en [0, 12.2, 25.86, 39.59, 49.07, 61.27, 70.14]):
 *  0 title (always-on)
 *  1 text: first differences form an AP
 *  2 formula: t_n, checked
 *  3 formula: S_n as three standard sums
 *  4 formula: substituted
 *  5 formula: S_n, simplified
 *  6 red-margin: verification
 *
 * Layout plan:
 *  b1 | text bl100 cx540
 *  b2 | text bl135 cx540
 *  b3 | text bl168 cx540
 *  b4 | text bl198 cx540
 *  b5 | text bl231 cx540 (bold)
 *  b6 | red bar x76 y256..326 · text bl276/316 x96
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, INK_LIGHT, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec69({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={20} fill={INK} anchor="middle" script>
          {t("Find S_n for 3 + 7 + 13 + 21 + 31 + …", "3 + 7 + 13 + 21 + 31 + … ke liye S_n nikalo")}
        </T>
      </Fade>

      {/* beat 1 — differences form an AP */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={100} size={15} fill={INK_LIGHT} anchor="middle" script>
          {t("first differences 4, 6, 8, 10 form an AP ⇒ t_n is quadratic", "first differences 4, 6, 8, 10 AP hain ⇒ t_n quadratic hai")}
        </T>
      </Fade>

      {/* beat 2 — t_n, checked */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={135} size={16} fill={INK} anchor="middle">
          {"t_n = n²+n+1   (check: t_4 = 16+4+1 = 21)"}
        </T>
      </Fade>

      {/* beat 3 — three standard sums */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={168} size={16} fill={INK} anchor="middle">
          {"S_n = Σn² + Σn + Σ1"}
        </T>
      </Fade>

      {/* beat 4 — substitute */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={198} size={15} fill={INK} anchor="middle">
          {"= n(n+1)(2n+1)/6 + n(n+1)/2 + n"}
        </T>
      </Fade>

      {/* beat 5 — simplified */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={231} size={18} fill={AMBER_DARK} anchor="middle" weight={700}>
          {"S_n = n(n²+3n+5)/3"}
        </T>
      </Fade>

      {/* beat 6 — red-margin: verify */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 76 256 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={96} y={276} size={15} fill={RED} anchor="start" script>
          {t("verify: S_3 = 3+7+13 = 23", "verify: S_3 = 3+7+13 = 23")}
        </T>
        <T x={96} y={316} size={15} fill={RED} anchor="start">
          {"= 3(9+9+5)/3"}
        </T>
      </Fade>
    </Scene>
  );
}
