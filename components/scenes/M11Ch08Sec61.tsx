/**
 * M11 Ch08 · Section 61 — "Reading off a and d from numerators"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=worked_examples.
 *
 * Math check: numerators 3,5,7,9 ⇒ a=3,d=2. Denominators 1,2,4,8 ⇒
 * r=1/2. S_∞=3/(1-1/2) + 2(1/2)/(1-1/2)² = 6 + (1)/(1/4) = 6+4=10 ✓.
 *
 * Beats (en [0, 8.36, 21.5, 32.6, 44.12, 61.61, 65.71]):
 *  0 title (always-on)
 *  1 text: numerators form an AP
 *  2 text: denominators form a GP
 *  3 formula: the S_infinity formula
 *  4 formula: both terms evaluated
 *  5 formula: the sum
 *  6 red-margin: separate numerator from denominator
 *
 * Layout plan:
 *  b1 | text bl100 cx540
 *  b2 | text bl130 cx540
 *  b3 | text bl163 cx540
 *  b4 | text bl196 cx540
 *  b5 | text bl231 cx540 (bold)
 *  b6 | red bar x76 y256..326 · text bl276/316 x96
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec61({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={20} fill={INK} anchor="middle" script>
          {t("Sum to infinity: 3/1 + 5/2 + 7/4 + 9/8 + …", "Sum to infinity: 3/1 + 5/2 + 7/4 + 9/8 + …")}
        </T>
      </Fade>

      {/* beat 1 — numerators are an AP */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={100} size={15} fill={INK} anchor="middle">
          {"numerators 3, 5, 7, 9 form an AP (a=3, d=2)"}
        </T>
      </Fade>

      {/* beat 2 — denominators are a GP */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={130} size={15} fill={INK} anchor="middle">
          {"denominators 1, 2, 4, 8 form a GP with r = 1/2"}
        </T>
      </Fade>

      {/* beat 3 — the formula */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={163} size={16} fill={INK} anchor="middle">
          {"S_∞ = a/(1-r) + dr/(1-r)²"}
        </T>
      </Fade>

      {/* beat 4 — evaluate */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={196} size={16} fill={INK} anchor="middle">
          {"3/(1-1/2) = 6,   (2·1/2)/(1-1/2)² = 1/(1/4) = 4"}
        </T>
      </Fade>

      {/* beat 5 — the sum */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={231} size={18} fill={AMBER_DARK} anchor="middle" weight={700}>
          {"S_∞ = 6 + 4 = 10"}
        </T>
      </Fade>

      {/* beat 6 — red-margin: separate the two */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 76 256 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={96} y={276} size={15} fill={RED} anchor="start" script>
          {t("separate numerator (AP) from", "numerator (AP) ko denominator")}
        </T>
        <T x={96} y={316} size={15} fill={RED} anchor="start" script>
          {t("denominator (GP) to read a, d, r", "(GP) se alag karo, a, d, r padhne ke liye")}
        </T>
      </Fade>
    </Scene>
  );
}
