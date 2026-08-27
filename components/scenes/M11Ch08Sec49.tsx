/**
 * M11 Ch08 · Section 49 — "Proving the chain and recovering the numbers"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=concept. FLAGGED — real
 * derivation, extra eye-check (task brief).
 *
 * Math check (all four short proofs verified by hand):
 *  (1) AH=(a+b)/2 · 2ab/(a+b) — the (a+b) cancels — =ab=G² ⇒ A/G=G/H.
 *  (2) (√a-√b)²≥0 ⇒ a-2√(ab)+b≥0 ⇒ (a+b)/2≥√(ab), i.e. A≥G.
 *  (3) From (1), H=G²/A. Since A≥G>0, dividing G² by a larger-or-equal
 *      positive number gives H=G²/A≤G²/G=G, i.e. G≥H.
 *  (4) a+b=2A, ab=G² ⇒ a,b are roots of x²-2Ax+G²=0 (Vieta) ⇒
 *      x=A±√(A²-G²). Real ⟺ A²≥G² ⟺ A≥G (both positive) — the
 *      discriminant condition IS exactly the AM≥GM inequality.
 *
 * Beats (en [0, 6.83, 25.69, 35.33, 54.19, 77.48, 89.26, 104.96]):
 *  0 title (always-on)
 *  1 formula: AH=ab=G²
 *  2 text: A/G=G/H, means form a GP
 *  3 formula: A≥G proof
 *  4 formula: G≥H proof
 *  5 text: recover the numbers, set up Vieta
 *  6 formula: the quadratic and its roots
 *  7 red-margin: discriminant IS the mean inequality
 *
 * Layout plan:
 *  b1 | text bl95 cx540
 *  b2 | text bl125 cx540
 *  b3 | text bl155 cx540
 *  b4 | text bl185 cx540
 *  b5 | text bl215 cx540
 *  b6 | text bl250 cx540 (bold)
 *  b7 | red bar x76 y275..345 · text bl295/335 x96
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, INK_LIGHT, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec49({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={21} fill={INK} anchor="middle" script>
          {t("Four short proofs that hold the unit together", "Chaar chote proofs jo unit ko jode rakhte hain")}
        </T>
      </Fade>

      {/* beat 1 — AH = G² */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={95} size={15} fill={INK} anchor="middle">
          {"AH = (a+b)/2 · 2ab/(a+b) = ab = G²"}
        </T>
      </Fade>

      {/* beat 2 — means form a GP */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={125} size={14} fill={INK_LIGHT} anchor="middle" script>
          {t("so A/G = G/H — the means form a GP", "toh A/G = G/H — means ek GP banate hain")}
        </T>
      </Fade>

      {/* beat 3 — A ≥ G proof */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={155} size={15} fill={INK} anchor="middle">
          {"(√a-√b)² ≥ 0  ⇒  (a+b)/2 ≥ √ab   (A≥G)"}
        </T>
      </Fade>

      {/* beat 4 — G ≥ H proof */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={185} size={15} fill={INK} anchor="middle">
          {"H = G²/A ≤ G²/G = G   (G≥H)"}
        </T>
      </Fade>

      {/* beat 5 — set up recovery */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={215} size={14} fill={INK_LIGHT} anchor="middle" script>
          {t("recover the numbers: a+b=2A and ab=G², so by Vieta:", "numbers recover karo: a+b=2A aur ab=G², Vieta se:")}
        </T>
      </Fade>

      {/* beat 6 — the quadratic and roots */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={250} size={16} fill={AMBER_DARK} anchor="middle" weight={700}>
          {"x² - 2Ax + G² = 0  ⇒  a,b = A ± √(A²-G²)"}
        </T>
      </Fade>

      {/* beat 7 — red-margin: discriminant IS the inequality */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 76 275 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={96} y={295} size={15} fill={RED} anchor="start" script>
          {t("real (and positive) iff A ≥ G —", "real (aur positive) iff A ≥ G —")}
        </T>
        <T x={96} y={335} size={15} fill={RED} anchor="start" script>
          {t("the discriminant IS the mean inequality", "discriminant hi mean inequality hai")}
        </T>
      </Fade>
    </Scene>
  );
}
