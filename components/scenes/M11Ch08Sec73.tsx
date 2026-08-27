/**
 * M11 Ch08 · Section 73 — "Cubes over odd sums collapse to a quadratic"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=worked_examples.
 *
 * Math check: numerator Σr³=[r(r+1)/2]², denominator 1+3+...+(2r-1)=r²
 * (sum of first r odd numbers, well-known). t_r=[r(r+1)/2]²/r² =
 * [r²(r+1)²/4]/r² = (r+1)²/4 ✓. S_n=(1/4)Σ(r+1)²=(1/4)Σ(r²+2r+1) =
 * (1/4)[n(n+1)(2n+1)/6+n(n+1)+n]. Common denom 6: n[(n+1)(2n+1)+6(n+1)
 * +6]/6 = n[2n²+3n+1+6n+6+6]/6 = n(2n²+9n+13)/6, so S_n=(1/4)·that =
 * n(2n²+9n+13)/24 ✓.
 *
 * Beats (en [0, 13.99, 32.85, 43.26, 56.58, 68.78, 79.36]):
 *  0 title (always-on)
 *  1 text: numerator/denominator identities
 *  2 formula: t_r simplifies
 *  3 formula: S_n set up
 *  4 formula: substituted
 *  5 formula: S_n, closed form
 *  6 red-margin: both sums collapse to a quadratic first
 *
 * Layout plan:
 *  b1 | text bl100 cx540 (2 lines? kept 1)
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

export default function M11Ch08Sec73({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={16} fill={INK} anchor="middle" script>
          {t(
            "Find S_n for (1³)/1 + (1³+2³)/(1+3) + (1³+2³+3³)/(1+3+5) + …",
            "S_n nikalo: (1³)/1 + (1³+2³)/(1+3) + (1³+2³+3³)/(1+3+5) + …"
          )}
        </T>
      </Fade>

      {/* beat 1 — the two identities */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={100} size={13.5} fill={INK_LIGHT} anchor="middle" script>
          {t(
            "numerator = Σr³ = [r(r+1)/2]²; denominator = 1+3+...+(2r-1) = r²",
            "numerator = Σr³ = [r(r+1)/2]²; denominator = 1+3+...+(2r-1) = r²"
          )}
        </T>
      </Fade>

      {/* beat 2 — t_r simplifies */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={135} size={16} fill={INK} anchor="middle">
          {"t_r = [r(r+1)/2]²/r² = (r+1)²/4"}
        </T>
      </Fade>

      {/* beat 3 — S_n set up */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={168} size={16} fill={INK} anchor="middle">
          {"S_n = (1/4)Σ(r+1)² = (1/4)Σ(r²+2r+1)"}
        </T>
      </Fade>

      {/* beat 4 — substituted */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={198} size={13.5} fill={INK} anchor="middle">
          {"= (1/4)[n(n+1)(2n+1)/6 + n(n+1) + n]"}
        </T>
      </Fade>

      {/* beat 5 — closed form */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={231} size={18} fill={AMBER_DARK} anchor="middle" weight={700}>
          {"S_n = n(2n²+9n+13)/24"}
        </T>
      </Fade>

      {/* beat 6 — red-margin: collapse first */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 76 256 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={96} y={276} size={15} fill={RED} anchor="start" script>
          {t("both standard sums collapse the term", "dono standard sums term ko")}
        </T>
        <T x={96} y={316} size={15} fill={RED} anchor="start" script>
          {t("to a clean quadratic before summing", "clean quadratic mein collapse karte hain, summing se pehle")}
        </T>
      </Fade>
    </Scene>
  );
}
