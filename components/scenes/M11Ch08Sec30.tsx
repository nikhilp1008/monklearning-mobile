/**
 * M11 Ch08 · Section 30 — "A recurring decimal is a convergent GP"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=worked_examples.
 *
 * Notation: the JSON's 0.3̄ (repeating-decimal overbar) uses a combining
 * mark — forbidden (true tofu, per the base notation rules). Written out
 * as "0.3333... (recurring)" instead.
 *
 * Math check: 3/10+3/100+3/1000+... is a GP with a=3/10, r=1/10, |r|<1.
 * S_∞=a/(1-r)=(3/10)/(9/10)=3/9=1/3 ✓ (0.333...=1/3, well-known).
 *
 * Beats (en [0, 12.2, 20.91, 33.62, 45.31, 53.67, 66.3]):
 *  0 title (always-on)
 *  1 text: write as an infinite GP
 *  2 formula: the place-value series
 *  3 formula: a, r
 *  4 formula: S_infinity
 *  5 red-margin: the convergence check licenses the formula
 *  6 closer
 *
 * Layout plan:
 *  b1 | text bl100 cx540
 *  b2 | text bl135 cx540
 *  b3 | text bl170 cx540
 *  b4 | text bl205 cx540
 *  b5 | red bar x76 y230..300 · text bl250/290 x96
 *  b6 | text bl335 cx540
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, INK_LIGHT, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec30({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={22} fill={INK} anchor="middle" script>
          {t("Express 0.3333... (recurring) as a fraction", "0.3333... (recurring) ko fraction mein likho")}
        </T>
      </Fade>

      {/* beat 1 — the setup */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={100} size={15} fill={INK_LIGHT} anchor="middle" script>
          {t("write it as an infinite GP of place-value pieces", "isse place-value pieces ki infinite GP likho")}
        </T>
      </Fade>

      {/* beat 2 — the series */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={135} size={17} fill={INK} anchor="middle">
          {"3/10 + 3/100 + 3/1000 + ⋯"}
        </T>
      </Fade>

      {/* beat 3 — a, r */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={170} size={16} fill={INK} anchor="middle">
          {"a = 3/10,   r = 1/10   (|r| < 1)"}
        </T>
      </Fade>

      {/* beat 4 — S_infinity */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={205} size={17} fill={INK} anchor="middle">
          {"S_∞ = a/(1-r) = (3/10)/(9/10) = 1/3"}
        </T>
      </Fade>

      {/* beat 5 — red-margin: the check licenses the formula */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 76 230 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={96} y={250} size={15} fill={RED} anchor="start" script>
          {t("the convergence check |r|=1/10<1", "convergence check |r|=1/10<1")}
        </T>
        <T x={96} y={290} size={15} fill={RED} anchor="start" script>
          {t("is what LICENSES the formula", "yahi formula ko LICENSE karta hai")}
        </T>
      </Fade>

      {/* beat 6 — closer */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={335} size={15} fill={INK_LIGHT} anchor="middle" script>
          {t(
            "every recurring decimal is secretly a convergent GP",
            "har recurring decimal secretly ek convergent GP hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
