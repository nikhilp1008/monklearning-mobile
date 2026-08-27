/**
 * M11 Ch08 · Section 59 — "Sum to n terms of 1 + 2x + 3x² + …"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=worked_examples.
 *
 * Math check: S_n=1+2x+...+nx^(n-1). xS_n=x+2x²+...+nx^n. S_n-xS_n=
 * 1+x+x²+...+x^(n-1) - nx^n = (1-x^n)/(1-x) - nx^n (the interior is a
 * plain GP sum). So (1-x)S_n=(1-x^n)/(1-x)-nx^n ⇒ S_n=(1-x^n)/(1-x)² -
 * nx^n/(1-x) ✓.
 *
 * Beats (en [0, 10.33, 24.75, 35.07, 44.97, 64.34, 75.78]):
 *  0 title (always-on)
 *  1 text: a=1,d=1,r=x
 *  2 formula: S_n
 *  3 formula: xS_n
 *  4 formula: (1-x)S_n
 *  5 formula: S_n, solved
 *  6 red-margin: the interior GP survives
 *
 * Layout plan:
 *  b1 | text bl100 cx540
 *  b2 | text bl135 cx540
 *  b3 | text bl170 cx540
 *  b4 | text bl205 cx540
 *  b5 | text bl240 cx540 (bold)
 *  b6 | red bar x76 y265..335 · text bl285/325 x96
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, INK_LIGHT, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec59({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={20} fill={INK} anchor="middle" script>
          {t("Sum to n terms: 1 + 2x + 3x² + 4x³ + … (x ≠ 1)", "n terms tak sum: 1 + 2x + 3x² + 4x³ + … (x ≠ 1)")}
        </T>
      </Fade>

      {/* beat 1 — identify a, d, r */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={100} size={15} fill={INK_LIGHT} anchor="middle" script>
          {t("here a=1, d=1, r=x. Use multiply-by-x.", "yahan a=1, d=1, r=x. multiply-by-x use karo.")}
        </T>
      </Fade>

      {/* beat 2 — S_n */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={135} size={16} fill={INK} anchor="middle">
          {"S_n = 1 + 2x + 3x² + ... + nx^(n-1)"}
        </T>
      </Fade>

      {/* beat 3 — xS_n */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={170} size={16} fill={INK} anchor="middle">
          {"xS_n = x + 2x² + ... + nx^n"}
        </T>
      </Fade>

      {/* beat 4 — subtract */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={205} size={16} fill={INK} anchor="middle">
          {"(1-x)S_n = (1-x^n)/(1-x) - nx^n"}
        </T>
      </Fade>

      {/* beat 5 — solved */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={240} size={17} fill={AMBER_DARK} anchor="middle" weight={700}>
          {"S_n = (1-x^n)/(1-x)² - nx^n/(1-x)"}
        </T>
      </Fade>

      {/* beat 6 — red-margin: the interior GP */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 76 265 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={96} y={285} size={15} fill={RED} anchor="start" script>
          {t("the interior GP 1+x+...+x^(n-1)", "interior GP 1+x+...+x^(n-1)")}
        </T>
        <T x={96} y={325} size={15} fill={RED} anchor="start" script>
          {t("is what survives the subtraction", "hi subtraction ke baad bachta hai")}
        </T>
      </Fade>
    </Scene>
  );
}
