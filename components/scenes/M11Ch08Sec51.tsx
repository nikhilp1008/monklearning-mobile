/**
 * M11 Ch08 · Section 51 — "Recovering the numbers from AM and GM"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=worked_examples.
 *
 * Math check: A=10,G=8. a+b=2A=20, ab=G²=64. x²-20x+64=0, factor
 * (x-4)(x-16)=0 (4×16=64, 4+16=20) ⇒ a=4,b=16. Check: 10±√(100-64)=
 * 10±√36=10±6=16 or 4 ✓. A=10>G=8 so real roots exist automatically.
 *
 * Beats (en [0, 16.38, 29.53, 39.17, 50.69, 60.42, 71.72]):
 *  0 title (always-on)
 *  1 formula: sum and product
 *  2 formula: the quadratic
 *  3 formula: factored
 *  4 text: equivalently via the root formula
 *  5 red-margin: A>G so real roots, automatic
 *  6 boxed answer
 *
 * Layout plan:
 *  b1 | text bl100 cx540
 *  b2 | text bl135 cx540
 *  b3 | text bl170 cx540 (bold)
 *  b4 | text bl205 cx540
 *  b5 | red bar x76 y230..300 · text bl250/290 x96
 *  b6 | chip x400 y320 w280 h44 (text bl~347)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, Chip, T, INK, INK_LIGHT, AMBER_DARK, RED, GREEN_DARK, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec51({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={INK} anchor="middle" script>
          {t("The AM of two positive numbers is 10 and their GM is 8. Find them.", "Do positive numbers ka AM 10 hai aur GM 8. Unhe nikalo.")}
        </T>
      </Fade>

      {/* beat 1 — sum and product */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={100} size={17} fill={INK} anchor="middle">
          {"a + b = 2A = 20,   ab = G² = 64"}
        </T>
      </Fade>

      {/* beat 2 — the quadratic */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={135} size={17} fill={INK} anchor="middle">
          {"x² - 20x + 64 = 0"}
        </T>
      </Fade>

      {/* beat 3 — factored */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={170} size={17} fill={AMBER_DARK} anchor="middle" weight={700}>
          {"(x-4)(x-16) = 0  ⇒  a = 4, b = 16"}
        </T>
      </Fade>

      {/* beat 4 — equivalently */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={205} size={14} fill={INK_LIGHT} anchor="middle" script>
          {t("equivalently: a, b = 10 ± √(100-64) = 10 ± 6", "equivalently: a, b = 10 ± √(100-64) = 10 ± 6")}
        </T>
      </Fade>

      {/* beat 5 — red-margin: automatic check */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 76 230 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={96} y={250} size={15} fill={RED} anchor="start" script>
          {t("A = 10 > G = 8, so real roots exist —", "A = 10 > G = 8, toh real roots exist —")}
        </T>
        <T x={96} y={290} size={15} fill={RED} anchor="start" script>
          {t("the check is automatic", "check automatic hai")}
        </T>
      </Fade>

      {/* beat 6 — boxed answer */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Chip x={400} y={320} w={280} h={44} fill={CREAM} stroke={GREEN_DARK} textFill={GREEN_DARK} size={17}>
          {t("the numbers are 4 and 16", "numbers hain 4 aur 16")}
        </Chip>
      </Fade>
    </Scene>
  );
}
