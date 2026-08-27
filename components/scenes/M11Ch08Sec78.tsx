/**
 * M11 Ch08 · Section 78 — "The basic telescoper and its infinite limit"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=worked_examples.
 *
 * Math check: 1/(r(r+1))=1/r-1/(r+1). Expanding r=1..n and cancelling
 * interior terms: S_n=1-1/(n+1)=n/(n+1). As n→∞, 1/(n+1)→0 so S_n→1.
 *
 * Beats (en [0, 9.9, 20.22, 31.91, 42.84, 56.66, 64.68]):
 *  0 title (always-on)
 *  1 formula: the partial fraction
 *  2 formula: the expansion
 *  3 text: every interior term cancels
 *  4 formula: S_n
 *  5 formula: the limit
 *  6 red-margin: the closed-form total
 *
 * Layout plan:
 *  b1 | text bl100 cx540
 *  b2 | text bl135 cx540
 *  b3 | text bl168 cx540
 *  b4 | text bl198 cx540
 *  b5 | text bl231 cx540 (bold)
 *  b6 | red bar x76 y256..312 · text bl282 x96
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, INK_LIGHT, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec78({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={INK} anchor="middle" script>
          {t("Find Σ 1/[r(r+1)] to n terms, and its value as n → ∞", "Σ 1/[r(r+1)] ko n terms tak nikalo, aur n → ∞ pe value")}
        </T>
      </Fade>

      {/* beat 1 — the partial fraction */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={100} size={17} fill={INK} anchor="middle">
          {"1/(r(r+1)) = 1/r - 1/(r+1)"}
        </T>
      </Fade>

      {/* beat 2 — the expansion */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={135} size={15} fill={INK} anchor="middle">
          {"(1-1/2) + (1/2-1/3) + ⋯ + (1/n-1/(n+1))"}
        </T>
      </Fade>

      {/* beat 3 — every interior term cancels */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={168} size={14} fill={INK_LIGHT} anchor="middle" script>
          {t("every interior term appears once with + and once with -", "har interior term ek baar + ke saath, ek baar - ke saath")}
        </T>
      </Fade>

      {/* beat 4 — S_n */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={198} size={17} fill={INK} anchor="middle">
          {"S_n = 1 - 1/(n+1) = n/(n+1)"}
        </T>
      </Fade>

      {/* beat 5 — the limit */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={231} size={18} fill={AMBER_DARK} anchor="middle" weight={700}>
          {"lim (n→∞) S_n = 1"}
        </T>
      </Fade>

      {/* beat 6 — red-margin: the exact total */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 76 256 v 56" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={96} y={282} size={15} fill={RED} anchor="start" script>
          {t("so 1/(1·2) + 1/(2·3) + ⋯ = 1 exactly", "toh 1/(1·2) + 1/(2·3) + ⋯ = 1 exactly")}
        </T>
      </Fade>
    </Scene>
  );
}
