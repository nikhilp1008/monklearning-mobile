/**
 * M11 Ch08 · Section 57 — "Summing an AGP: multiply by r and subtract"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=concept. FLAGGED — real
 * derivation, extra eye-check (task brief).
 *
 * Math check: S_n-rS_n: the a-term stays a; each interior term
 * [(a+kd)-(a+(k-1)d)]r^k = d·r^k for k=1..n-1; the last term -[a+(n-1)d]r^n
 * survives unmatched. So (1-r)S_n = a + d(r+r²+...+r^(n-1)) -
 * [a+(n-1)d]r^n. The bracket is a GP sum (first term r, ratio r, n-1
 * terms) = r(1-r^(n-1))/(1-r). Dividing through by (1-r) gives
 * S_n = a/(1-r) + dr(1-r^(n-1))/(1-r)² - [a+(n-1)d]r^n/(1-r). As n→∞
 * with |r|<1, r^(n-1)→0 and r^n→0, leaving S_∞=a/(1-r)+dr/(1-r)².
 *
 * Beats (en [0, 10.75, 22.78, 32.51, 47.96, 63.4, 80.47, 100.95]):
 *  0 title (always-on)
 *  1 formula: S_n
 *  2 formula: rS_n
 *  3 text: subtract, clean d·r^k columns
 *  4 formula: (1-r)S_n
 *  5 formula: S_n, full form
 *  6 formula: S_infinity
 *  7 red-margin: re-derive, don't memorise
 *
 * Layout plan:
 *  b1 | text bl95 cx540
 *  b2 | text bl125 cx540
 *  b3 | text bl155 cx540
 *  b4 | text bl185 cx540
 *  b5 | text bl218 cx540
 *  b6 | text bl253 cx540 (bold)
 *  b7 | red bar x76 y278..348 · text bl298/338 x96
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, INK_LIGHT, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec57({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={21} fill={INK} anchor="middle" script>
          {t("The one technique that IS this subtopic", "Ek hi technique jo yeh subtopic HAI")}
        </T>
      </Fade>

      {/* beat 1 — S_n */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={95} size={14} fill={INK} anchor="middle">
          {"S_n = a + (a+d)r + (a+2d)r² + ... + [a+(n-1)d]r^(n-1)"}
        </T>
      </Fade>

      {/* beat 2 — rS_n, shifted */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={125} size={14} fill={INK} anchor="middle">
          {"rS_n = ar + (a+d)r² + ... + [a+(n-1)d]r^n"}
        </T>
      </Fade>

      {/* beat 3 — subtract insight */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={155} size={14} fill={INK_LIGHT} anchor="middle" script>
          {t("subtract: every middle column leaves a clean d·r^k", "subtract karo: har middle column ek clean d·r^k chhod deta hai")}
        </T>
      </Fade>

      {/* beat 4 — (1-r)S_n */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={185} size={13} fill={INK} anchor="middle">
          {"(1-r)S_n = a + d(r+r²+...+r^(n-1)) - [a+(n-1)d]r^n"}
        </T>
      </Fade>

      {/* beat 5 — S_n, full form */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={218} size={12.5} fill={INK} anchor="middle">
          {"S_n = a/(1-r) + dr(1-r^(n-1))/(1-r)² - [a+(n-1)d]r^n/(1-r)"}
        </T>
      </Fade>

      {/* beat 6 — S_infinity */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={253} size={16} fill={AMBER_DARK} anchor="middle" weight={700}>
          {"S_∞ = a/(1-r) + dr/(1-r)²,   |r| < 1"}
        </T>
      </Fade>

      {/* beat 7 — red-margin: re-derive, don't memorise */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 76 278 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={96} y={298} size={15} fill={RED} anchor="start" script>
          {t("don't memorise the messy S_n —", "messy S_n yaad mat karo —")}
        </T>
        <T x={96} y={338} size={15} fill={RED} anchor="start" script>
          {t("re-derive with the subtraction every time", "har baar subtraction se re-derive karo")}
        </T>
      </Fade>
    </Scene>
  );
}
