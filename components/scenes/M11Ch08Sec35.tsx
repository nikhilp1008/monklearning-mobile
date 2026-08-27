/**
 * M11 Ch08 · Section 35 — "Each term equals the sum of the next two"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=worked_examples.
 *
 * Math check: a=ar+ar² (a≠0) ⇒ 1=r+r² ⇒ r²+r-1=0 ⇒ r=(-1±√5)/2. All
 * terms positive ⇒ r>0 (a negative r would force alternating signs) ⇒
 * reject r=(-1-√5)/2<0, keep r=(√5-1)/2≈0.618 = 1/φ (reciprocal of the
 * golden ratio φ=(1+√5)/2, since φ·(φ-1)=1 ⇒ 1/φ=φ-1=(√5-1)/2) ✓.
 *
 * Beats (en [0, 11.69, 20.57, 32.85, 40.96, 48.47, 62.89]):
 *  0 title (always-on)
 *  1 text: write the condition on one term
 *  2 formula: a=ar+ar² ⇒ 1=r+r²
 *  3 formula: r²+r-1=0
 *  4 formula: quadratic formula
 *  5 red-margin: reject negative root
 *  6 closer: golden ratio
 *
 * Layout plan:
 *  b1 | text bl100 cx540
 *  b2 | text bl135 cx540
 *  b3 | text bl170 cx540
 *  b4 | text bl205 cx540
 *  b5 | red bar x76 y230..300 · text bl250/290 x96
 *  b6 | text bl335 cx540
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, INK_LIGHT, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec35({ currentTime, reveals, language }: SceneProps) {
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
            "In a GP of positive terms, each term = sum of the next two. Find r.",
            "Positive-terms GP mein, har term = agle do ka sum. r nikalo."
          )}
        </T>
      </Fade>

      {/* beat 1 — setup */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={100} size={15} fill={INK_LIGHT} anchor="middle" script>
          {t("write the condition on a single representative term", "ek representative term pe condition likho")}
        </T>
      </Fade>

      {/* beat 2 — the equation */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={135} size={16} fill={INK} anchor="middle">
          {"a = ar + ar²  ⇒  1 = r + r²"}
        </T>
      </Fade>

      {/* beat 3 — standard form */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={170} size={17} fill={INK} anchor="middle">
          {"r² + r - 1 = 0"}
        </T>
      </Fade>

      {/* beat 4 — quadratic formula */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={205} size={17} fill={INK} anchor="middle">
          {"r = (-1 ± √5)/2"}
        </T>
      </Fade>

      {/* beat 5 — red-margin: reject the negative root */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 76 230 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={96} y={250} size={15} fill={RED} anchor="start" script>
          {t("positive terms reject the negative root,", "positive terms negative root reject karte hain,")}
        </T>
        <T x={96} y={290} size={15} fill={RED} anchor="start">
          {"leaving r = (√5-1)/2"}
        </T>
      </Fade>

      {/* beat 6 — closer: golden ratio */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={335} size={15} fill={INK} anchor="middle" script>
          {t("this is the reciprocal of the golden ratio", "yeh golden ratio ka reciprocal hai")}
        </T>
      </Fade>
    </Scene>
  );
}
