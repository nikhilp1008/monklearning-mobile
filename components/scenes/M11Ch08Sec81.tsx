/**
 * M11 Ch08 · Section 81 — "A factorial telescoper"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=worked_examples.
 *
 * Math check: r/(r+1)! = [(r+1)-1]/(r+1)! = (r+1)/(r+1)! - 1/(r+1)! =
 * 1/r! - 1/(r+1)! (since (r+1)/(r+1)!=1/r!) ✓. Telescoping: S_n=1/1!-
 * 1/(n+1)!=1-1/(n+1)!. As n→∞, 1/(n+1)!→0, so S_∞=1.
 *
 * Beats (en [0, 7.94, 18.18, 32.94, 40.36, 53.5, 62.04]):
 *  0 title (always-on)
 *  1 text: rewrite the numerator
 *  2 formula: the difference form
 *  3 text: difference of reciprocal factorials
 *  4 formula: S_n
 *  5 formula: S_infinity
 *  6 red-margin: look for this shape
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

export default function M11Ch08Sec81({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={21} fill={INK} anchor="middle" script>
          {t("Evaluate Σ r/(r+1)! from r = 1 to n", "Σ r/(r+1)! evaluate karo, r = 1 se n tak")}
        </T>
      </Fade>

      {/* beat 1 — rewrite the numerator */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={100} size={15} fill={INK_LIGHT} anchor="middle" script>
          {t("rewrite the numerator: r = (r+1) - 1", "numerator ko rewrite karo: r = (r+1) - 1")}
        </T>
      </Fade>

      {/* beat 2 — the difference form */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={135} size={15} fill={INK} anchor="middle">
          {"r/(r+1)! = [(r+1)-1]/(r+1)! = 1/r! - 1/(r+1)!"}
        </T>
      </Fade>

      {/* beat 3 — reciprocal factorials */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={168} size={14} fill={INK_LIGHT} anchor="middle" script>
          {t("this is a difference of consecutive reciprocal factorials", "yeh consecutive reciprocal factorials ka difference hai")}
        </T>
      </Fade>

      {/* beat 4 — S_n */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={198} size={17} fill={INK} anchor="middle">
          {"S_n = 1/1! - 1/(n+1)! = 1 - 1/(n+1)!"}
        </T>
      </Fade>

      {/* beat 5 — S_infinity */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={231} size={19} fill={AMBER_DARK} anchor="middle" weight={700}>
          {"S_∞ = 1"}
        </T>
      </Fade>

      {/* beat 6 — red-margin: look for the shape */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 76 256 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={96} y={276} size={15} fill={RED} anchor="start" script>
          {t("look for t_r = f(r) - f(r+1)", "t_r = f(r) - f(r+1) dhoondo")}
        </T>
        <T x={96} y={316} size={15} fill={RED} anchor="start" script>
          {t("with f a factorial expression", "jahan f ek factorial expression ho")}
        </T>
      </Fade>
    </Scene>
  );
}
