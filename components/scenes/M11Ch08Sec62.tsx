/**
 * M11 Ch08 · Section 62 — "An AGP with common difference 2"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=worked_examples.
 *
 * Math check: coefficients 1,3,5,7 ⇒ a=1,d=2,r=x, last coefficient
 * a+(n-1)d=1+2(n-1)=2n-1. (1-x)S_n=1+2(x+x²+...+x^(n-1))-(2n-1)x^n
 * (interior GP sum = 2x(1-x^(n-1))/(1-x)) ⇒ S_n=1/(1-x)+2x(1-x^(n-1))/
 * (1-x)² - (2n-1)x^n/(1-x). Same method as Sec59, just d=2.
 *
 * Beats (en [0, 10.92, 24.49, 42.5, 53.5, 69.29, 87.98]):
 *  0 title (always-on)
 *  1 text: a=1, d=2, r=x
 *  2 formula: (1-x)S_n
 *  3 formula: interior GP evaluated
 *  4 formula: S_n, solved
 *  5 red-margin: last coefficient is 2n-1
 *  6 closer: same method, d=2
 *
 * Layout plan:
 *  b1 | text bl100 cx540
 *  b2 | text bl135 cx540
 *  b3 | text bl168 cx540
 *  b4 | text bl201 cx540 (bold)
 *  b5 | red bar x76 y226..296 · text bl246/286 x96
 *  b6 | text bl321 cx540
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, INK_LIGHT, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec62({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={20} fill={INK} anchor="middle" script>
          {t("Sum to n terms: 1 + 3x + 5x² + 7x³ + … (x ≠ 1)", "n terms tak sum: 1 + 3x + 5x² + 7x³ + … (x ≠ 1)")}
        </T>
      </Fade>

      {/* beat 1 — identify a, d, r */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={100} size={15} fill={INK_LIGHT} anchor="middle" script>
          {t("coefficients 1, 3, 5, 7 give a=1, d=2; r=x", "coefficients 1, 3, 5, 7 se a=1, d=2; r=x")}
        </T>
      </Fade>

      {/* beat 2 — (1-x)S_n */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={135} size={15} fill={INK} anchor="middle">
          {"(1-x)S_n = 1 + 2(x+x²+...+x^(n-1)) - (2n-1)x^n"}
        </T>
      </Fade>

      {/* beat 3 — interior GP evaluated */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={168} size={15} fill={INK} anchor="middle">
          {"= 1 + 2x(1-x^(n-1))/(1-x) - (2n-1)x^n"}
        </T>
      </Fade>

      {/* beat 4 — S_n solved */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={201} size={14} fill={AMBER_DARK} anchor="middle" weight={700}>
          {"S_n = 1/(1-x) + 2x(1-x^(n-1))/(1-x)² - (2n-1)x^n/(1-x)"}
        </T>
      </Fade>

      {/* beat 5 — red-margin: the last coefficient */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 76 226 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={96} y={246} size={15} fill={RED} anchor="start" script>
          {t("the last coefficient is", "aakhri coefficient hai")}
        </T>
        <T x={96} y={286} size={15} fill={RED} anchor="start">
          {"a+(n-1)d = 1+2(n-1) = 2n-1"}
        </T>
      </Fade>

      {/* beat 6 — closer */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={321} size={14} fill={INK_LIGHT} anchor="middle" script>
          {t("same method, just d=2 instead of d=1", "same method, bas d=2 hai, d=1 nahi")}
        </T>
      </Fade>
    </Scene>
  );
}
