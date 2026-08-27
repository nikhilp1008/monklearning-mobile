/**
 * M11 Ch08 · Section 79 — "A partial-fraction telescoper with a step of 3"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=worked_examples.
 *
 * Math check: general term 1/((3r-2)(3r+1)). 1/(3r-2)-1/(3r+1) =
 * [(3r+1)-(3r-2)]/[(3r-2)(3r+1)] = 3/[(3r-2)(3r+1)], so (1/3) of that
 * equals 1/[(3r-2)(3r+1)] ✓. Telescoping: S_n=(1/3)[1-1/(3n+1)] =
 * (1/3)·3n/(3n+1) = n/(3n+1) ✓.
 *
 * Beats (en [0, 9.05, 25.26, 36.61, 45.23, 54.53, 60.16]):
 *  0 title (always-on)
 *  1 text: general term, step of 3
 *  2 formula: the partial fraction
 *  3 text: bracket telescopes, 1/3 rides along
 *  4 formula: S_n before simplifying
 *  5 formula: S_n, simplified
 *  6 red-margin: keep the 1/3
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

export default function M11Ch08Sec79({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={INK} anchor="middle" script>
          {t("Sum 1/(1·4) + 1/(4·7) + 1/(7·10) + … to n terms", "1/(1·4) + 1/(4·7) + 1/(7·10) + … ka n terms tak sum")}
        </T>
      </Fade>

      {/* beat 1 — step of 3 */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={100} size={15} fill={INK_LIGHT} anchor="middle" script>
          {t("the factors step by 3: general term is 1/((3r-2)(3r+1))", "factors 3 se step karte hain: general term 1/((3r-2)(3r+1))")}
        </T>
      </Fade>

      {/* beat 2 — the partial fraction */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={135} size={16} fill={INK} anchor="middle">
          {"1/((3r-2)(3r+1)) = (1/3)[1/(3r-2) - 1/(3r+1)]"}
        </T>
      </Fade>

      {/* beat 3 — the bracket telescopes */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={168} size={14} fill={INK_LIGHT} anchor="middle" script>
          {t("the bracket telescopes; the 1/3 rides along outside", "bracket telescope hota hai; 1/3 bahar sawari karta hai")}
        </T>
      </Fade>

      {/* beat 4 — S_n before simplifying */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={198} size={16} fill={INK} anchor="middle">
          {"S_n = (1/3)[1 - 1/(3n+1)]"}
        </T>
      </Fade>

      {/* beat 5 — S_n simplified */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={231} size={18} fill={AMBER_DARK} anchor="middle" weight={700}>
          {"S_n = n/(3n+1)"}
        </T>
      </Fade>

      {/* beat 6 — red-margin: keep the 1/3 */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 76 256 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={96} y={276} size={15} fill={RED} anchor="start" script>
          {t("keep the 1/3 from the split —", "split se 1/3 rakho —")}
        </T>
        <T x={96} y={316} size={15} fill={RED} anchor="start" script>
          {t("losing it is the multiplier trap", "isse khona multiplier trap hai")}
        </T>
      </Fade>
    </Scene>
  );
}
