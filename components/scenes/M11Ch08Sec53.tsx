/**
 * M11 Ch08 · Section 53 — "Ordering the means and spotting the GP"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=worked_examples.
 *
 * Math check: distinct positives make the AM-GM-HM inequality strict:
 * A>G>H. From AH=G², G/A=H/G (both equal the common ratio r), and since
 * A>G>H, r=G/A<1 — confirming A,G,H is a strictly DECREASING GP with
 * middle term G, the same G as the original pair's GM.
 *
 * Beats (en [0, 8.7, 15.96, 26.79, 36.35, 46.17, 57.34]):
 *  0 title (always-on)
 *  1 text: distinct ⇒ strict inequality
 *  2 formula: A>G>H
 *  3 text: AH=G² ⇒ A,G,H is a GP
 *  4 formula: common ratio < 1
 *  5 red-margin: decreasing GP, middle term is G
 *  6 text: same G as the original GM
 *
 * Layout plan:
 *  b1 | text bl100 cx540
 *  b2 | text bl132 cx540 (bold)
 *  b3 | text bl165 cx540
 *  b4 | text bl197 cx540
 *  b5 | red bar x76 y222..292 · text bl242/282 x96
 *  b6 | text bl327 cx540
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, INK_LIGHT, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec53({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={INK} anchor="middle" script>
          {t("For two distinct positive numbers, order A, G, H and name the GP", "Do distinct positive numbers ke liye, A, G, H order karo aur GP naam do")}
        </T>
      </Fade>

      {/* beat 1 — distinct means strict */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={100} size={15} fill={INK_LIGHT} anchor="middle" script>
          {t("distinct positives ⇒ the inequality is strict", "distinct positives ⇒ inequality strict hai")}
        </T>
      </Fade>

      {/* beat 2 — A>G>H */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={132} size={18} fill={INK} anchor="middle" weight={700}>
          {"A > G > H"}
        </T>
      </Fade>

      {/* beat 3 — it's a GP */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={165} size={14} fill={INK_LIGHT} anchor="middle" script>
          {t("from AH = G², the triple A, G, H is a GP", "AH = G² se, triple A, G, H ek GP hai")}
        </T>
      </Fade>

      {/* beat 4 — the common ratio */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={197} size={16} fill={INK} anchor="middle">
          {"common ratio = G/A = H/G < 1"}
        </T>
      </Fade>

      {/* beat 5 — red-margin: decreasing GP */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 76 222 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={96} y={242} size={15} fill={RED} anchor="start" script>
          {t("so A, G, H is a DECREASING GP", "toh A, G, H ek DECREASING GP hai")}
        </T>
        <T x={96} y={282} size={15} fill={RED} anchor="start" script>
          {t("whose middle term (GM) is G", "jiska middle term (GM) G hai")}
        </T>
      </Fade>

      {/* beat 6 — same G */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={327} size={15} fill={AMBER_DARK} anchor="middle" weight={700} script>
          {t("that G is the very same GM of the original two numbers", "yehi G, original do numbers ka GM bhi hai")}
        </T>
      </Fade>
    </Scene>
  );
}
