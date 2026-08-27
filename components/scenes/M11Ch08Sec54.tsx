/**
 * M11 Ch08 · Section 54 — "The numbers and their ratio from A and G"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=worked_examples.
 *
 * Math check: a,b=A±√(A²-G²). Writing k=G/A, √(A²-G²)=A√(1-k²), so
 * a/b=[1+√(1-k²)]/[1-√(1-k²)] depends only on k=G/A, not A,G separately
 * ✓. If a:b=m:n then A=(a+b)/2 ∝(m+n) and G=√(ab) ∝√(mn), so
 * A:G=(m+n):2√(mn) ✓ (a standard Advanced-level identity).
 *
 * Beats (en [0, 11.26, 24.23, 34.99, 47.62, 66.56, 78.76]):
 *  0 title (always-on)
 *  1 formula: a,b = A ± √(A²-G²)
 *  2 text: from the recovery quadratic
 *  3 formula: a/b
 *  4 text: depends only on A/G
 *  5 red-margin: reality condition again
 *  6 text: the Advanced form A:G=(m+n):2√(mn)
 *
 * Layout plan:
 *  b1 | text bl100 cx540
 *  b2 | text bl132 cx540
 *  b3 | text bl165 cx540
 *  b4 | text bl197 cx540
 *  b5 | red bar x76 y222..292 · text bl242/282 x96
 *  b6 | text bl327 cx540
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, INK_LIGHT, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec54({ currentTime, reveals, language }: SceneProps) {
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
            "Two positives have AM = A and GM = G. Express them and find their ratio.",
            "Do positives ka AM = A aur GM = G hai. Unhe express karo aur ratio nikalo."
          )}
        </T>
      </Fade>

      {/* beat 1 — the numbers */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={100} size={17} fill={INK} anchor="middle">
          {"a, b = A ± √(A²-G²)"}
        </T>
      </Fade>

      {/* beat 2 — from the recovery quadratic */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={132} size={14} fill={INK_LIGHT} anchor="middle" script>
          {t("this comes straight from the recovery quadratic", "yeh seedha recovery quadratic se aata hai")}
        </T>
      </Fade>

      {/* beat 3 — the ratio */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={165} size={15} fill={INK} anchor="middle">
          {"a/b = (A+√(A²-G²)) / (A-√(A²-G²))"}
        </T>
      </Fade>

      {/* beat 4 — depends only on A/G */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={197} size={14} fill={INK_LIGHT} anchor="middle" script>
          {t("the ratio depends only on A/G, not A and G separately", "ratio sirf A/G pe depend karta hai, A aur G alag se nahi")}
        </T>
      </Fade>

      {/* beat 5 — red-margin: reality condition again */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 76 222 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={96} y={242} size={15} fill={RED} anchor="start" script>
          {t("the numbers are real iff A ≥ G —", "numbers real hain iff A ≥ G —")}
        </T>
        <T x={96} y={282} size={15} fill={RED} anchor="start" script>
          {t("the same reality condition again", "wahi reality condition phir se")}
        </T>
      </Fade>

      {/* beat 6 — the Advanced form */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={327} size={15} fill={INK} anchor="middle">
          {"a common Advanced form: A:G = (m+n) : 2√(mn)"}
        </T>
      </Fade>
    </Scene>
  );
}
