/**
 * M11 Ch08 · Section 72 — "Sum of squares of an AP's terms"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=worked_examples.
 *
 * Math check: S_n=cn² is An²+Bn with A=c,B=0 (an AP, per Sec12's test).
 * a_n=S_n-S_(n-1)=c[n²-(n-1)²]=c(2n-1). Σa_n²=c²Σ(2n-1)²=c²Σ(4n²-4n+1)
 * = c²[4·N(N+1)(2N+1)/6 - 4·N(N+1)/2 + N]. Expanding: (2/3)N(N+1)(2N+1)
 * -2N(N+1)+N = (4N³+6N²+2N)/3 - 2N²-N = (4N³+6N²+2N-6N²-3N)/3 =
 * (4N³-N)/3 = N(4N²-1)/3 ✓ matches.
 *
 * Beats (en [0, 16.81, 26.97, 43.01, 56.83, 69.03, 77.99]):
 *  0 title (always-on)
 *  1 text: S_n=cn² confirms it's an AP
 *  2 formula: a_n
 *  3 formula: Σa_n² set up
 *  4 formula: substituted
 *  5 formula: simplified
 *  6 red-margin: recover a_n from S_n
 *
 * Layout plan:
 *  b1 | text bl100 cx540
 *  b2 | text bl132 cx540
 *  b3 | text bl165 cx540
 *  b4 | text bl195 cx540
 *  b5 | text bl228 cx540 (bold)
 *  b6 | red bar x76 y253..323 · text bl273/313 x96
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, INK_LIGHT, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec72({ currentTime, reveals, language }: SceneProps) {
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
            "If S_n = cn² for an AP, find the sum of the squares of its terms",
            "Agar AP ke liye S_n = cn², terms ke squares ka sum nikalo"
          )}
        </T>
      </Fade>

      {/* beat 1 — confirms it's an AP */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={100} size={14} fill={INK_LIGHT} anchor="middle" script>
          {t("S_n = cn² is An²+Bn with B=0, so it's an AP", "S_n = cn², An²+Bn hai B=0 ke saath, toh yeh AP hai")}
        </T>
      </Fade>

      {/* beat 2 — a_n */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={132} size={16} fill={INK} anchor="middle">
          {"a_n = S_n - S_(n-1) = c(2n-1)"}
        </T>
      </Fade>

      {/* beat 3 — set up the sum */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={165} size={15} fill={INK} anchor="middle">
          {"Σ a_n² = c²Σ(2n-1)² = c²Σ(4n²-4n+1)"}
        </T>
      </Fade>

      {/* beat 4 — substituted */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={195} size={13.5} fill={INK} anchor="middle">
          {"= c²[4·N(N+1)(2N+1)/6 - 4·N(N+1)/2 + N]"}
        </T>
      </Fade>

      {/* beat 5 — simplified */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={228} size={18} fill={AMBER_DARK} anchor="middle" weight={700}>
          {"Σ a_n² = N(4N²-1)c²/3"}
        </T>
      </Fade>

      {/* beat 6 — red-margin: the recovery technique */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 76 253 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={96} y={273} size={15} fill={RED} anchor="start" script>
          {t("recover a_n from S_n via", "S_n se a_n recover karo")}
        </T>
        <T x={96} y={313} size={15} fill={RED} anchor="start">
          {"a_n = S_n - S_(n-1), then square and sum"}
        </T>
      </Fade>
    </Scene>
  );
}
