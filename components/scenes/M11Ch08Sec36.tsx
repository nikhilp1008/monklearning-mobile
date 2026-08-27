/**
 * M11 Ch08 · Section 36 — "The chessboard grains, in closed form"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=worked_examples. Closes the loop
 * on Sec23's chessboard opener with the closed-form total.
 *
 * Math check: a=1, r=2, n=64. S_64=a(r^n-1)/(r-1)=1(2^64-1)/1=2^64-1.
 * 2^64=18,446,744,073,709,551,616 ⇒ S_64≈1.8446×10^19 ✓.
 *
 * Beats (en [0, 13.91, 21.42, 32.09, 45.48, 56.75, 70.74]):
 *  0 title (always-on)
 *  1 text: a=1, r=2, n=64
 *  2 formula: the sequence
 *  3 formula: S_64 formula, substituted
 *  4 formula: S_64 = 2^64-1 ≈ 1.8×10^19
 *  5 red-margin: why r>1 growth detonates
 *  6 closer: more grains than all wheat on Earth
 *
 * Layout plan:
 *  b1 | text bl100 cx540
 *  b2 | text bl135 cx540
 *  b3 | text bl170 cx540
 *  b4 | text bl205 cx540 (bold)
 *  b5 | red bar x76 y230..300 · text bl250/290 x96
 *  b6 | text bl335 cx540
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, INK_LIGHT, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec36({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={20} fill={INK} anchor="middle" script>
          {t("1 grain on square 1, doubling to square 64. Total grains?", "Square 1 pe 1 grain, square 64 tak doubling. Total grains?")}
        </T>
      </Fade>

      {/* beat 1 — a, r, n */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={100} size={15} fill={INK_LIGHT} anchor="middle" script>
          {t("the counts form a GP: a = 1, r = 2, n = 64", "counts ek GP banate hain: a = 1, r = 2, n = 64")}
        </T>
      </Fade>

      {/* beat 2 — the sequence */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={135} size={16} fill={INK} anchor="middle">
          {"1, 2, 4, ..., 2⁶³"}
        </T>
      </Fade>

      {/* beat 3 — substitute into S_n */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={170} size={15} fill={INK} anchor="middle">
          {"S₆₄ = a(r^n-1)/(r-1) = 1·(2⁶⁴-1)/(2-1)"}
        </T>
      </Fade>

      {/* beat 4 — closed form */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={205} size={18} fill={AMBER_DARK} anchor="middle" weight={700}>
          {"S₆₄ = 2⁶⁴ - 1 ≈ 1.8×10¹⁹"}
        </T>
      </Fade>

      {/* beat 5 — red-margin: why growth detonates */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 76 230 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={96} y={250} size={15} fill={RED} anchor="start" script>
          {t("a concrete demonstration of why", "ek concrete demonstration ki")}
        </T>
        <T x={96} y={290} size={15} fill={RED} anchor="start" script>
          {t("r > 1 growth 'detonates'", "r > 1 growth kyun 'detonate' hoti hai")}
        </T>
      </Fade>

      {/* beat 6 — closer */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={335} size={15} fill={INK} anchor="middle" script>
          {t(
            "more grains than all the wheat ever grown on Earth",
            "Earth pe kabhi uga saare wheat se bhi zyada grains"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
