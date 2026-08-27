/**
 * M11 Ch08 · Section 34 — "AM–GM optimisation: multiply two inequalities"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=worked_examples.
 *
 * Math check: AM-GM on a,b,c: (a+b+c)/3≥(abc)^(1/3) ⇒ a+b+c≥3(abc)^(1/3).
 * AM-GM on 1/a,1/b,1/c: (1/a+1/b+1/c)/3≥(abc)^(-1/3) ⇒ 1/a+1/b+1/c≥
 * 3(abc)^(-1/3). Both sides positive, so multiplying preserves direction:
 * product ≥ 9(abc)^(1/3)(abc)^(-1/3)=9(abc)^0=9 ✓. Equality iff both
 * AM-GMs are equalities simultaneously, i.e. a=b=c.
 *
 * Beats (en [0, 17.24, 25.17, 33.79, 48.73, 62.04, 72.11]):
 *  0 title (always-on)
 *  1 text: apply AM-GM to each triple
 *  2 formula: a+b+c ≥ 3(abc)^(1/3)
 *  3 formula: 1/a+1/b+1/c ≥ 3(abc)^(-1/3)
 *  4 formula: multiply -> ≥ 9
 *  5 red-margin: high-yield move
 *  6 closer: equality iff a=b=c
 *
 * Layout plan:
 *  b1 | text bl100 cx540
 *  b2 | text bl135 cx540
 *  b3 | text bl170 cx540
 *  b4 | text bl210 cx540
 *  b5 | red bar x76 y240..310 · text bl260/300 x96
 *  b6 | text bl345 cx540
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, INK_LIGHT, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec34({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={INK} anchor="middle" script>
          {t(
            "For positive a, b, c prove (a+b+c)(1/a+1/b+1/c) ≥ 9",
            "Positive a, b, c ke liye prove karo (a+b+c)(1/a+1/b+1/c) ≥ 9"
          )}
        </T>
      </Fade>

      {/* beat 1 — apply AM-GM to each triple */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={100} size={15} fill={INK_LIGHT} anchor="middle" script>
          {t("apply AM ≥ GM to each triple separately", "har triple pe AM ≥ GM alag se lagao")}
        </T>
      </Fade>

      {/* beat 2 — first AM-GM */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={135} size={16} fill={INK} anchor="middle">
          {"a + b + c ≥ 3(abc)^(1/3)"}
        </T>
      </Fade>

      {/* beat 3 — second AM-GM */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={170} size={16} fill={INK} anchor="middle">
          {"1/a + 1/b + 1/c ≥ 3(abc)^(-1/3)"}
        </T>
      </Fade>

      {/* beat 4 — multiply the two */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={210} size={15} fill={INK} anchor="middle">
          {"(a+b+c)(1/a+1/b+1/c) ≥ 9(abc)^(1/3)(abc)^(-1/3) = 9"}
        </T>
      </Fade>

      {/* beat 5 — red-margin: high-yield move */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 76 240 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={96} y={260} size={15} fill={RED} anchor="start" script>
          {t("multiplying two AM-GMs is one of", "do AM-GMs multiply karna ek")}
        </T>
        <T x={96} y={300} size={15} fill={RED} anchor="start" script>
          {t("the highest-yield Advanced moves", "highest-yield Advanced move hai")}
        </T>
      </Fade>

      {/* beat 6 — closer */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={345} size={15} fill={INK} anchor="middle" script>
          {t("equality holds iff a = b = c", "equality tabhi jab a = b = c")}
        </T>
      </Fade>
    </Scene>
  );
}
