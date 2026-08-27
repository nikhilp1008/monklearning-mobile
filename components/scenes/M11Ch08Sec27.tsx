/**
 * M11 Ch08 · Section 27 — "Geometric mean, inserting GMs, and AM–GM"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=formulas.
 *
 * Notation: capital Pi (product, JSON's \prod_{k=1}^n G_k) is missing from
 * both board fonts (glyph-audited) and appears only this once in the
 * chapter — written as explicit dot-multiplication instead.
 *
 * Beats (en [0, 7.34, 19.88, 26.62, 39, 55.04, 74.58, 91.14]):
 *  0 title (always-on)
 *  1 formula: a,b,c in GP ⟺ b²=ac ⟺ b=±√(ac)
 *  2 text: single GM is √(ab)
 *  3 formula: r for n inserted GMs
 *  4 formula: product of the n GMs
 *  5 boxed: general AM-GM inequality
 *  6 red-margin: GM sign, need ac>0
 *  7 closer: logs turn GP into AP
 *
 * Layout plan:
 *  b1 | text bl100 cx540
 *  b2 | text bl132 cx540
 *  b3 | text bl165 cx540
 *  b4 | text bl198 cx540
 *  b5 | chip x250 y222 w580 h44 (text bl~249)
 *  b6 | red bar x76 y292..362 · text bl312/352 x96
 *  b7 | text bl405 cx540
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, Chip, T, INK, INK_LIGHT, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec27({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={22} fill={INK} anchor="middle" script>
          {t("The geometric mean and the mean inequalities", "Geometric mean aur mean inequalities")}
        </T>
      </Fade>

      {/* beat 1 — the GP-mean condition */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={100} size={16} fill={INK} anchor="middle">
          {"a, b, c in GP ⟺ b² = ac ⟺ b = ±√(ac)"}
        </T>
      </Fade>

      {/* beat 2 — single GM */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={132} size={14} fill={INK_LIGHT} anchor="middle" script>
          {t("for two positive numbers, the single GM is √(ab)", "do positive numbers ke liye, single GM √(ab) hai")}
        </T>
      </Fade>

      {/* beat 3 — r for n inserted GMs */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={165} size={15} fill={INK} anchor="middle">
          {"n GMs between a, b:   r = (b/a)^(1/(n+1))"}
        </T>
      </Fade>

      {/* beat 4 — product of the n GMs */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={198} size={15} fill={INK} anchor="middle">
          {"G_1 · G_2 · ... · G_n = (√(ab))^n = (single GM)^n"}
        </T>
      </Fade>

      {/* beat 5 — boxed general AM-GM inequality */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <Chip x={250} y={222} w={580} h={44} fill={CREAM} stroke={INK} textFill={INK} size={16}>
          {"(a_1+...+a_n)/n ≥ (a_1 a_2 ⋯ a_n)^(1/n)"}
        </Chip>
      </Fade>

      {/* beat 6 — red-margin: GM sign */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 76 292 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={96} y={312} size={15} fill={RED} anchor="start" script>
          {t("GM sign: pick whichever ± keeps", "GM sign: jo ± genuine GP rakhe")}
        </T>
        <T x={96} y={352} size={15} fill={RED} anchor="start" script>
          {t("a genuine GP; need ac > 0", "wahi choose karo; ac > 0 chahiye")}
        </T>
      </Fade>

      {/* beat 7 — closer: logs turn GP into AP */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={540} y={405} size={14} fill={INK} anchor="middle" script>
          {t(
            "logs turn a GP into an AP: a,b,c in GP ⟺ log a, log b, log c in AP",
            "logs GP ko AP bana dete hain: a,b,c GP mein ⟺ log a, log b, log c AP mein"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
