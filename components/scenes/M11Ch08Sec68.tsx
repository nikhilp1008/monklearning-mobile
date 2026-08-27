/**
 * M11 Ch08 · Section 68 — "Summing 2·4 + 4·6 + 6·8 + …"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=worked_examples.
 *
 * Math check: t_r=(2r)(2r+2)=4r²+4r. S_n=4Σr²+4Σr=4·n(n+1)(2n+1)/6 +
 * 4·n(n+1)/2 = 2n(n+1)(2n+1)/3 + 2n(n+1). Factor 2n(n+1): = 2n(n+1)
 * [(2n+1)/3+1] = 2n(n+1)(2n+4)/3 = 4n(n+1)(n+2)/3 ✓.
 *
 * Beats (en [0, 13.23, 27.82, 37.38, 49.41, 57, 67.16]):
 *  0 title (always-on)
 *  1 formula: t_r
 *  2 formula: S_n as sum of standard sums
 *  3 formula: substituted
 *  4 text: factor out 2n(n+1)
 *  5 formula: S_n, factored
 *  6 red-margin: expand first, then standard sums
 *
 * Layout plan:
 *  b1 | text bl100 cx540
 *  b2 | text bl135 cx540
 *  b3 | text bl170 cx540
 *  b4 | text bl200 cx540
 *  b5 | text bl233 cx540 (bold)
 *  b6 | red bar x76 y258..328 · text bl278/318 x96
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, INK_LIGHT, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec68({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={20} fill={INK} anchor="middle" script>
          {t("Find the sum to n terms of 2·4 + 4·6 + 6·8 + …", "2·4 + 4·6 + 6·8 + … ka n terms tak sum nikalo")}
        </T>
      </Fade>

      {/* beat 1 — t_r */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={100} size={17} fill={INK} anchor="middle">
          {"t_r = (2r)(2r+2) = 4r² + 4r"}
        </T>
      </Fade>

      {/* beat 2 — split into standard sums */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={135} size={17} fill={INK} anchor="middle">
          {"S_n = 4Σr² + 4Σr"}
        </T>
      </Fade>

      {/* beat 3 — substitute */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={170} size={16} fill={INK} anchor="middle">
          {"= 4·n(n+1)(2n+1)/6 + 4·n(n+1)/2"}
        </T>
      </Fade>

      {/* beat 4 — factor */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={200} size={14} fill={INK_LIGHT} anchor="middle" script>
          {t("factor out 2n(n+1) and combine the bracket", "2n(n+1) factor karo aur bracket combine karo")}
        </T>
      </Fade>

      {/* beat 5 — the result */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={233} size={18} fill={AMBER_DARK} anchor="middle" weight={700}>
          {"S_n = 4n(n+1)(n+2)/3"}
        </T>
      </Fade>

      {/* beat 6 — red-margin: expand first */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 76 258 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={96} y={278} size={15} fill={RED} anchor="start" script>
          {t("expand the product to a polynomial", "product ko polynomial mein expand karo")}
        </T>
        <T x={96} y={318} size={15} fill={RED} anchor="start" script>
          {t("FIRST — then the standard sums apply", "PEHLE — phir standard sums apply karo")}
        </T>
      </Fade>
    </Scene>
  );
}
