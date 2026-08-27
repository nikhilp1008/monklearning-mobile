/**
 * M11 Ch08 · Section 42 — "Finding the 10th term from two given terms"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=worked_examples.
 *
 * Math check: reciprocal AP a'_3=7, a'_7=15. d=(15-7)/(7-3)=8/4=2.
 * a'_1=a'_3-2d=7-4=3 ⇒ a'_10=a'_1+9d=3+18=21. 10th HP term=1/21 ✓.
 *
 * Beats (en [0, 11.95, 22.53, 29.27, 41.39, 52.05, 64.85]):
 *  0 title (always-on)
 *  1 text: reciprocate
 *  2 formula: a'_3=7, a'_7=15
 *  3 formula: d=2
 *  4 formula: a'_1=3 ⇒ a'_10=21
 *  5 red-margin: flip back at the very end
 *  6 boxed answer
 *
 * Layout plan:
 *  b1 | text bl100 cx540
 *  b2 | text bl135 cx540
 *  b3 | text bl170 cx540
 *  b4 | text bl205 cx540
 *  b5 | red bar x76 y230..300 · text bl250/290 x96
 *  b6 | chip x400 y320 w280 h44 (text bl~347)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, Chip, T, INK, INK_LIGHT, RED, GREEN_DARK, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec42({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={INK} anchor="middle" script>
          {t("3rd term of an HP is 1/7, 7th term is 1/15. Find the 10th term.", "HP ka 3rd term 1/7 hai, 7th term 1/15. 10th term nikalo.")}
        </T>
      </Fade>

      {/* beat 1 — reciprocate */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={100} size={15} fill={INK_LIGHT} anchor="middle" script>
          {t("reciprocate: the reciprocals form an AP", "reciprocate karo: reciprocals ek AP banate hain")}
        </T>
      </Fade>

      {/* beat 2 — the AP terms */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={135} size={17} fill={INK} anchor="middle">
          {"a'_3 = 7,   a'_7 = 15"}
        </T>
      </Fade>

      {/* beat 3 — d */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={170} size={17} fill={INK} anchor="middle">
          {"d = (15-7)/(7-3) = 8/4 = 2"}
        </T>
      </Fade>

      {/* beat 4 — a'_1 and a'_10 */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={205} size={17} fill={INK} anchor="middle">
          {"a'_1 = 7 - 2(2) = 3  ⇒  a'_10 = 3 + 9(2) = 21"}
        </T>
      </Fade>

      {/* beat 5 — red-margin: flip back */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 76 230 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={96} y={250} size={15} fill={RED} anchor="start" script>
          {t("flip back at the very end:", "bilkul aakhir mein flip back karo:")}
        </T>
        <T x={96} y={290} size={15} fill={RED} anchor="start">
          {"the 10th HP term is 1/21"}
        </T>
      </Fade>

      {/* beat 6 — boxed answer */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Chip x={400} y={320} w={280} h={44} fill={CREAM} stroke={GREEN_DARK} textFill={GREEN_DARK} size={18}>
          {"10th term = 1/21"}
        </Chip>
      </Fade>
    </Scene>
  );
}
