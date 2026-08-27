/**
 * M11 Ch08 · Section 29 — "Three numbers in GP from product and pairwise sum"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=worked_examples.
 *
 * Math check: (a/r)(a)(ar)=a³=216 ⇒ a=6. Pairwise sum (a/r)(a)+(a)(ar)+
 * (a/r)(ar)=a²(1/r+r+1)=156 ⇒ with a²=36: 1/r+r+1=13/3 ⇒ 1/r+r=10/3 ⇒
 * (×3r) 3r²-10r+3=0, discriminant=100-36=64=8² ⇒ r=(10±8)/6=3 or 1/3.
 * r=3: 2,6,18. r=1/3: 18,6,2 (same set, reversed) ✓.
 *
 * Beats (en [0, 14.34, 22.87, 36.52, 55.3, 68.44, 77.4]):
 *  0 title (always-on)
 *  1 text: take terms symmetrically
 *  2 formula: a³=216 ⇒ a=6
 *  3 formula: pairwise sum ⇒ 1/r+r=10/3
 *  4 formula: quadratic in r, factored
 *  5 red-margin: r=3 or 1/3, same set
 *  6 boxed answer
 *
 * Layout plan:
 *  b1 | text bl100 cx540
 *  b2 | text bl135 cx540
 *  b3 | text bl170 cx540
 *  b4 | text bl205 cx540
 *  b5 | red bar x76 y230..300 · text bl250/290 x96
 *  b6 | chip x380 y320 w280 h44 (text bl~347)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, Chip, T, INK, INK_LIGHT, RED, GREEN_DARK, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec29({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={18} fill={INK} anchor="middle" script>
          {t(
            "Product of 3 GP terms is 216; sum of pairwise products is 156. Find them.",
            "3 GP terms ka product 216 hai; pairwise products ka sum 156. Unhe nikalo."
          )}
        </T>
      </Fade>

      {/* beat 1 — take terms symmetrically */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={100} size={15} fill={INK_LIGHT} anchor="middle" script>
          {t("take the terms symmetrically as a/r, a, ar", "terms symmetrically lo: a/r, a, ar")}
        </T>
      </Fade>

      {/* beat 2 — solve for a */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={135} size={16} fill={INK} anchor="middle">
          {"(a/r)(a)(ar) = a³ = 216  ⇒  a = 6"}
        </T>
      </Fade>

      {/* beat 3 — pairwise products */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={170} size={16} fill={INK} anchor="middle">
          {"a²(1/r + r + 1) = 156  ⇒  1/r + r = 10/3"}
        </T>
      </Fade>

      {/* beat 4 — quadratic in r */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={205} size={16} fill={INK} anchor="middle">
          {"3r² - 10r + 3 = 0  ⇒  (3r-1)(r-3) = 0"}
        </T>
      </Fade>

      {/* beat 5 — red-margin: same set, reversed */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 76 230 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={96} y={250} size={15} fill={RED} anchor="start" script>
          {t("r = 3 or r = 1/3 give the SAME set,", "r = 3 ya r = 1/3, SAME set dete hain,")}
        </T>
        <T x={96} y={290} size={15} fill={RED} anchor="start" script>
          {t("just reversed", "bas reversed")}
        </T>
      </Fade>

      {/* beat 6 — boxed answer */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Chip x={380} y={320} w={280} h={44} fill={CREAM} stroke={GREEN_DARK} textFill={GREEN_DARK} size={18}>
          {t("the numbers are 2, 6, 18", "numbers hain 2, 6, 18")}
        </Chip>
      </Fade>
    </Scene>
  );
}
