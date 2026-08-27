/**
 * M11 Ch08 · Section 46 — "A reciprocate-and-manipulate HP proof"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=worked_examples — a genuine
 * proof, math hand-verified below even though not in the flagged list.
 *
 * Math check: a,b,c in HP ⇒ 1/a,1/b,1/c in AP. Multiplying an AP by the
 * nonzero constant (a+b+c) keeps it an AP: (a+b+c)/a,(a+b+c)/b,(a+b+c)/c
 * in AP. Subtracting the constant 1 from each term also preserves AP:
 * (a+b+c)/a - 1 = (b+c)/a, similarly for the others, so (b+c)/a,(c+a)/b,
 * (a+b)/c in AP. By the chapter's own definition (a_n in HP ⟺ 1/a_n in
 * AP), the reciprocals a/(b+c),b/(c+a),c/(a+b) are therefore in HP. ∎
 *
 * Beats (en [0, 21.85, 32.6, 44.46, 53.33, 69.38, 91.05]):
 *  0 title (always-on)
 *  1 text: start from the definition
 *  2 formula: reciprocals in AP
 *  3 text: multiply by (a+b+c)
 *  4 formula: the scaled AP
 *  5 formula: subtract 1
 *  6 red-margin: reciprocate, QED
 *
 * Layout plan:
 *  b1 | text bl100 cx540
 *  b2 | text bl135 cx540
 *  b3 | text bl170 cx540
 *  b4 | text bl205 cx540
 *  b5 | text bl240 cx540
 *  b6 | red bar x76 y265..335 · text bl285/325 x96
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, INK_LIGHT, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec46({ currentTime, reveals, language }: SceneProps) {
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
            "If a, b, c are in HP, prove a/(b+c), b/(c+a), c/(a+b) are in HP",
            "Agar a, b, c HP mein hain, prove karo a/(b+c), b/(c+a), c/(a+b) HP mein hain"
          )}
        </T>
      </Fade>

      {/* beat 1 — start from the definition */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={100} size={15} fill={INK_LIGHT} anchor="middle" script>
          {t("start from the definition: reciprocals are in AP", "definition se shuru karo: reciprocals AP mein hain")}
        </T>
      </Fade>

      {/* beat 2 — reciprocals in AP */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={135} size={17} fill={INK} anchor="middle">
          {"1/a, 1/b, 1/c in AP"}
        </T>
      </Fade>

      {/* beat 3 — multiply by the constant */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={170} size={14} fill={INK_LIGHT} anchor="middle" script>
          {t("multiply through by the constant (a+b+c) — still an AP", "constant (a+b+c) se multiply karo — abhi bhi AP hai")}
        </T>
      </Fade>

      {/* beat 4 — the scaled AP */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={205} size={15} fill={INK} anchor="middle">
          {"(a+b+c)/a, (a+b+c)/b, (a+b+c)/c in AP"}
        </T>
      </Fade>

      {/* beat 5 — subtract 1 */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={240} size={15} fill={INK} anchor="middle">
          {"(b+c)/a, (c+a)/b, (a+b)/c in AP  (subtract 1)"}
        </T>
      </Fade>

      {/* beat 6 — red-margin: reciprocate, QED */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 76 265 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={96} y={285} size={15} fill={RED} anchor="start" script>
          {t("reciprocate that AP ⇒ a/(b+c), b/(c+a),", "us AP ko reciprocate karo ⇒ a/(b+c), b/(c+a),")}
        </T>
        <T x={96} y={325} size={15} fill={RED} anchor="start">
          {"c/(a+b) are in HP.  ∎"}
        </T>
      </Fade>
    </Scene>
  );
}
