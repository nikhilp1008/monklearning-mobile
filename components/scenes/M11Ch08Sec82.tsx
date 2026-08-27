/**
 * M11 Ch08 · Section 82 — "A surd telescoper, evaluated at n = 99"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=worked_examples.
 *
 * Math check: 1/(√r+√(r+1)) rationalised by (√(r+1)-√r): denominator
 * becomes (√(r+1))²-(√r)²=(r+1)-r=1, leaving √(r+1)-√r ✓. Telescoping
 * r=1..n: S_n=√(n+1)-√1=√(n+1)-1. S_99=√100-1=10-1=9 ✓.
 *
 * Beats (en [0, 7, 15.79, 30.63, 38.66, 47.7, 57.6]):
 *  0 title (always-on)
 *  1 text: rationalise to unlock the difference-form
 *  2 formula: the rationalisation set up
 *  3 formula: simplified
 *  4 formula: S_n
 *  5 formula: S_99
 *  6 red-margin: rationalising turns awkward fractions into a telescoper
 *
 * Layout plan:
 *  b1 | text bl100 cx540
 *  b2 | text bl132 cx540
 *  b3 | text bl162 cx540
 *  b4 | text bl192 cx540
 *  b5 | text bl225 cx540 (bold)
 *  b6 | red bar x76 y250..320 · text bl270/310 x96
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, INK_LIGHT, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec82({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={20} fill={INK} anchor="middle" script>
          {t("Sum Σ 1/(√r + √(r+1)), then evaluate for n = 99", "Σ 1/(√r + √(r+1)) sum karo, phir n = 99 ke liye evaluate")}
        </T>
      </Fade>

      {/* beat 1 — rationalise */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={100} size={15} fill={INK_LIGHT} anchor="middle" script>
          {t("rationalise the denominator to unlock the difference-form", "denominator ko rationalise karo, difference-form unlock karne ke liye")}
        </T>
      </Fade>

      {/* beat 2 — the rationalisation */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={132} size={14} fill={INK} anchor="middle">
          {"1/(√r+√(r+1)) = (√(r+1)-√r)/((√(r+1))²-(√r)²)"}
        </T>
      </Fade>

      {/* beat 3 — simplified */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={162} size={17} fill={INK} anchor="middle">
          {"= √(r+1) - √r"}
        </T>
      </Fade>

      {/* beat 4 — S_n */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={192} size={17} fill={INK} anchor="middle">
          {"S_n = √(n+1) - 1"}
        </T>
      </Fade>

      {/* beat 5 — S_99 */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={225} size={19} fill={AMBER_DARK} anchor="middle" weight={700}>
          {"S_99 = √100 - 1 = 9"}
        </T>
      </Fade>

      {/* beat 6 — red-margin: rationalising unlocks it */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 76 250 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={96} y={270} size={15} fill={RED} anchor="start" script>
          {t("rationalising turns a sum of awkward", "rationalise karna awkward fractions ke")}
        </T>
        <T x={96} y={310} size={15} fill={RED} anchor="start" script>
          {t("fractions into a clean telescoper", "sum ko ek clean telescoper bana deta hai")}
        </T>
      </Fade>
    </Scene>
  );
}
