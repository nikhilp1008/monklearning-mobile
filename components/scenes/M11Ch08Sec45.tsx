/**
 * M11 Ch08 · Section 45 — "Recovering numbers from AM and HM"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=worked_examples.
 *
 * Math check: G²=AH=9×4=36 ⇒ G=6. a+b=2A=18, ab=G²=36. x²-18x+36=0,
 * discriminant=324-144=180... wait: x²-(sum)x+(product)=0 with sum=18,
 * product=36 gives x²-18x+36=0, disc=18²-4(36)=324-144=180=(2√45)²;
 * quadratic formula x=(18±√180)/2=9±√45=9±3√5 (√180=√(36·5)=6√5, /2=3√5).
 * Matches JSON's x=9±√(81-36)=9±√45=9±3√5 (equivalent form, dividing
 * inside the root by 4 first: (18/2)±√((18/2)²-36)=9±√(81-36)) ✓.
 *
 * Beats (en [0, 10.84, 19.46, 32.77, 46.51, 57, 67.33]):
 *  0 title (always-on)
 *  1 text: use AH=G² first
 *  2 formula: G=6
 *  3 formula: sum and product
 *  4 formula: the quadratic
 *  5 formula: the roots
 *  6 red-margin: pins the numbers without solving HM directly
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

export default function M11Ch08Sec45({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={20} fill={INK} anchor="middle" script>
          {t("The AM of two numbers is 9 and their HM is 4. Find the numbers.", "Do numbers ka AM 9 hai aur HM 4. Numbers nikalo.")}
        </T>
      </Fade>

      {/* beat 1 — use AH=G² */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={100} size={15} fill={INK_LIGHT} anchor="middle" script>
          {t("use AH = G² to get the geometric mean first", "pehle geometric mean nikalne ke liye AH = G² use karo")}
        </T>
      </Fade>

      {/* beat 2 — G */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={135} size={17} fill={INK} anchor="middle">
          {"G² = AH = 9 × 4 = 36  ⇒  G = 6"}
        </T>
      </Fade>

      {/* beat 3 — sum and product */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={170} size={17} fill={INK} anchor="middle">
          {"a + b = 2A = 18,   ab = G² = 36"}
        </T>
      </Fade>

      {/* beat 4 — the quadratic */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={205} size={17} fill={INK} anchor="middle">
          {"x² - 18x + 36 = 0"}
        </T>
      </Fade>

      {/* beat 5 — the roots */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={240} size={17} fill={AMBER_DARK} anchor="middle" weight={700}>
          {"x = 9 ± √(81-36) = 9 ± 3√5"}
        </T>
      </Fade>

      {/* beat 6 — red-margin: the means triad */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 76 265 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={96} y={285} size={15} fill={RED} anchor="start" script>
          {t("the means triad pins the numbers", "means triad numbers ko pin kar deta hai")}
        </T>
        <T x={96} y={325} size={15} fill={RED} anchor="start" script>
          {t("without ever solving the HM equation directly", "bina kabhi HM equation directly solve kiye")}
        </T>
      </Fade>
    </Scene>
  );
}
