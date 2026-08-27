/**
 * C11 Ch01 · Section 42 — "Worked examples: combustion and hydrates"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0,24.83,42.67,55.3,79.28,104.11,119.98,144.48,169.31]):
 *  0 Example 3 (JEE Main) given: combustion of 0.60g organic (C,H,O), M=60
 *  1 C mass and H mass from CO₂ and H₂O
 *  2 O by difference
 *  3 moles and the ratio
 *  4 empirical formula, n, molecular formula = acetic acid
 *  (example 3 fully fades at beat 5, freeing the board for example 4)
 *  5 Example 4 (JEE Advanced) given: hydrate loses 51.2% mass as water
 *  6 the equation: 18x/(120+18x) = 0.512
 *  7 solve for x, round to whole number, name the salt
 *  8 verify the answer
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | given (script12 ink)         | T mid | x540  y88  [fade@b5]
 *  b1 | l (13 bold ink)              | T mid | x540  y113 [fade@b5]
 *  b2 | l (13 bold ink)              | T mid | x540  y138 [fade@b5]
 *  b3 | l (script12 ink)             | T mid | x540  y163 [fade@b5]
 *  b4 | l1/l2 (13 bold ink/green)    | T mid | x540  y188/213
 *  b5 | given 2 (script12 ink)       | T mid | x540  y88  (same slot)
 *  b6 | eq (14 bold ink)             | T mid | x540  y118
 *  b7 | l1/l2 (script12/13 red/green)| T mid | x540  y143/168
 *  b8 | check (script12 muted)       | T mid | x540  y193
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch01Sec42({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={20} fill={RED} script>
          {t("worked examples: combustion and hydrates", "worked examples: combustion aur hydrates")}
        </T>
      </Fade>

      {/* beat 0 — Example 3 given (JEE Main); fully fades at beat 5 */}
      <Fade on={beat >= 0 && beat < 5} delay={dl(0, 0.4)}>
        <T x={540} y={88} size={12} fill={INK} script>
          {t(
            "Example 3 (JEE Main): 0.60g organic (C,H,O) → 0.88g CO₂+0.36g H₂O, M=60. Formula?",
            "Example 3 (JEE Main): 0.60g organic (C,H,O) → 0.88g CO₂+0.36g H₂O, M=60. Formula?"
          )}
        </T>
      </Fade>

      {/* beat 1 — C and H masses */}
      <Fade on={beat >= 1 && beat < 5} delay={dl(1, 0.4)}>
        <T x={540} y={113} size={13} fill={INK} weight={700} script={false}>
          C: 12/44×0.88 = 0.24g · H: 2/18×0.36 = 0.04g
        </T>
      </Fade>

      {/* beat 2 — O by difference */}
      <Fade on={beat >= 2 && beat < 5} delay={dl(2, 0.4)}>
        <T x={540} y={138} size={13} fill={INK} weight={700} script={false}>
          O ({t("by diff", "diff se")}): 0.60 − 0.24 − 0.04 = 0.32g
        </T>
      </Fade>

      {/* beat 3 — moles and ratio */}
      <Fade on={beat >= 3 && beat < 5} delay={dl(3, 0.4)}>
        <T x={540} y={163} size={12} fill={INK} script>
          moles: C=0.02, H=0.04, O=0.02 → ratio 1:2:1
        </T>
      </Fade>

      {/* beat 4 — empirical/molecular formula */}
      <Fade on={beat >= 4 && beat < 5} delay={dl(4, 0.4)}>
        <T x={540} y={188} size={13} fill={INK} weight={700} script={false}>
          empirical = CH₂O (EFM=30), n = 60/30 = 2
        </T>
      </Fade>
      <Fade on={beat >= 4 && beat < 5} delay={dl(4, 1.2)}>
        <T x={540} y={213} size={13} fill={GREEN} weight={700} script={false}>
          {t("molecular = C₂H₄O₂ — acetic acid!", "molecular = C₂H₄O₂ — acetic acid!")}
        </T>
      </Fade>

      {/* beat 5 — Example 4 given (JEE Advanced), same slot as beat 0 */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={88} size={12} fill={INK} script>
          {t(
            "Example 4 (JEE Advanced): MgSO₄·xH₂O loses 51.2% mass as water — find x",
            "Example 4 (JEE Advanced): MgSO₄·xH₂O apna 51.2% mass paani ke roop mein khota — x nikalo"
          )}
        </T>
      </Fade>

      {/* beat 6 — the equation */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={118} size={14} fill={INK} weight={700} script={false}>
          18x / (120 + 18x) = 0.512
        </T>
      </Fade>

      {/* beat 7 — solve, round, name */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={143} size={12} fill={RED} script>
          {t(
            "solve: x = 6.99 ≈ 7 (must be a whole number!)",
            "solve karo: x = 6.99 ≈ 7 (whole number hona chahiye!)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.1)}>
        <T x={540} y={168} size={13} fill={GREEN} weight={700} script={false}>
          MgSO₄·7H₂O — {t("Epsom salt", "Epsom salt")}
        </T>
      </Fade>

      {/* beat 8 — verify */}
      <Fade on={beat >= 8} delay={dl(8, 0.4)}>
        <T x={540} y={193} size={12} fill={MUTED} script>
          check: 7×18=126, total=246, 126/246=0.512 ✓
        </T>
      </Fade>
    </Scene>
  );
}
