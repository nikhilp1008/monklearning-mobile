/**
 * M11 Ch08 · Section 50 — "The means, the identity, and the recovery quadratic"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=formulas. Recaps Sec48/49 as a
 * grab-and-go formula set.
 *
 * Beats (en [0, 7.94, 19.46, 31.91, 42.92, 54.02, 66.56, 83.54]):
 *  0 title (always-on)
 *  1 formula: A, G, H definitions
 *  2 formula: AH=G² ⟺ GP
 *  3 formula: A≥G≥H
 *  4 formula: the recovery quadratic
 *  5 formula: the roots
 *  6 red-margin: reality condition
 *  7 text: n-number generalization
 *
 * Layout plan:
 *  b1 | text bl100 cx540
 *  b2 | text bl132 cx540
 *  b3 | text bl164 cx540
 *  b4 | text bl196 cx540
 *  b5 | text bl228 cx540 (bold)
 *  b6 | red bar x76 y252..322 · text bl272/312 x96
 *  b7 | text bl357 cx540
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, INK_LIGHT, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec50({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={21} fill={INK} anchor="middle" script>
          {t("Everything for two positive reals a, b", "Do positive reals a, b ke liye sab kuch")}
        </T>
      </Fade>

      {/* beat 1 — definitions */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={100} size={16} fill={INK} anchor="middle">
          {"A = (a+b)/2,   G = √ab,   H = 2ab/(a+b)"}
        </T>
      </Fade>

      {/* beat 2 — AH=G² */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={132} size={16} fill={INK} anchor="middle">
          {"AH = G²  ⟺  A, G, H in GP"}
        </T>
      </Fade>

      {/* beat 3 — A≥G≥H */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={164} size={16} fill={INK} anchor="middle">
          {"A ≥ G ≥ H,   equality iff a = b"}
        </T>
      </Fade>

      {/* beat 4 — recovery quadratic */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={196} size={16} fill={INK} anchor="middle">
          {"numbers from means:  x² - 2Ax + G² = 0"}
        </T>
      </Fade>

      {/* beat 5 — the roots */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={228} size={17} fill={AMBER_DARK} anchor="middle" weight={700}>
          {"a, b = A ± √(A²-G²)"}
        </T>
      </Fade>

      {/* beat 6 — red-margin: reality condition */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 76 252 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={96} y={272} size={15} fill={RED} anchor="start" script>
          {t("reality condition: real numbers exist", "reality condition: real numbers exist")}
        </T>
        <T x={96} y={312} size={15} fill={RED} anchor="start" script>
          {t("iff A ≥ G. If A < G, none do.", "iff A ≥ G. Agar A < G, koi nahi.")}
        </T>
      </Fade>

      {/* beat 7 — n-number generalization */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={540} y={357} size={15} fill={INK_LIGHT} anchor="middle" script>
          {t("for n numbers: AM ≥ GM ≥ HM, equality iff all are equal", "n numbers ke liye: AM ≥ GM ≥ HM, equality iff sab equal ho")}
        </T>
      </Fade>
    </Scene>
  );
}
