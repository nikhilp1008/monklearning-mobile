/**
 * M11 Ch08 · Section 20 — "Natural-number constraint pins the difference"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=worked_examples.
 *
 * Math check: S_7/S_11 = [7(2a+6d)]/[11(2a+10d)] = 7(a+3d)/11(a+5d) = 6/11
 * ⇒ 7(a+3d)=6(a+5d) ⇒ a=9d. a_7=a+6d=15d. 130<15d<140 ⇒ 8.67<d<9.33 ⇒
 * only integer is d=9, giving a_7=135 (checks: 130<135<140) ✓.
 *
 * Beats (en [0, 13.57, 25.77, 41.81, 53.93, 67.84, 81.07]):
 *  0 title (always-on)
 *  1 formula: the ratio
 *  2 formula: a = 9d
 *  3 formula: a_7 = 15d
 *  4 formula: the inequality
 *  5 red-margin: natural ⇒ integer ⇒ d=9
 *  6 boxed answer
 *
 * Layout plan:
 *  b1 | text bl100 cx540
 *  b2 | text bl135 cx540
 *  b3 | text bl170 cx540
 *  b4 | text bl205 cx540
 *  b5 | red bar x76 y230..300 · text bl250/290 x96
 *  b6 | chip x440 y320 w200 h44 (text bl~347)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, Chip, T, INK, RED, GREEN_DARK, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec20({ currentTime, reveals, language }: SceneProps) {
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
            "S₇ : S₁₁ = 6 : 11, terms natural, 130 < a₇ < 140. Find d.",
            "S₇ : S₁₁ = 6 : 11, terms natural, 130 < a₇ < 140. d nikalo."
          )}
        </T>
      </Fade>

      {/* beat 1 — the ratio */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={100} size={16} fill={INK} anchor="middle">
          {"S_7/S_11 = 7(a+3d)/11(a+5d) = 6/11"}
        </T>
      </Fade>

      {/* beat 2 — cross-multiply */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={135} size={16} fill={INK} anchor="middle">
          {"7(a+3d) = 6(a+5d)  ⇒  a = 9d"}
        </T>
      </Fade>

      {/* beat 3 — a_7 */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={170} size={16} fill={INK} anchor="middle">
          {"a_7 = a + 6d = 15d"}
        </T>
      </Fade>

      {/* beat 4 — the inequality */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={205} size={16} fill={INK} anchor="middle">
          {"130 < 15d < 140  ⇒  8.67 < d < 9.33"}
        </T>
      </Fade>

      {/* beat 5 — red-margin: natural ⇒ integer */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 76 230 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={96} y={250} size={15} fill={RED} anchor="start" script>
          {t("terms are natural ⇒ d is an integer", "terms natural hain ⇒ d integer hai")}
        </T>
        <T x={96} y={290} size={15} fill={RED} anchor="start" script>
          {t("⇒ d = 9 is forced", "⇒ d = 9 forced ho jaata hai")}
        </T>
      </Fade>

      {/* beat 6 — boxed answer */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Chip x={440} y={320} w={200} h={44} fill={CREAM} stroke={GREEN_DARK} textFill={GREEN_DARK} size={18}>
          {"d = 9"}
        </Chip>
      </Fade>
    </Scene>
  );
}
