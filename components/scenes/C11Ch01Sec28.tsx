/**
 * C11 Ch01 · Section 28 — "Worked examples: combining volumes and reciprocal"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0,21.68,44.72,57.26,72.37,88.5,113.33,128.43,149.43]):
 *  0 Example 3 (JEE Main) given: hydrocarbon combustion volumes
 *  1 Gay-Lussac + Avogadro: volumes = molecule ratios → write CₓHᵧ
 *  2 balance C: x = 3
 *  3 balance H: y = 8 ⇒ C₃H₈ (propane)
 *  4 sanity check: oxygen atoms balance
 *  (example 3 fully fades at beat 5, freeing the board for example 4)
 *  5 Example 4 (JEE Advanced) given: 3 compounds, % composition
 *  6 strategy: hydrogen is the bridge element, fix 1 g H
 *  7 from CH₄: 1g H:3.00g C · from H₂O: 1g H:8.01g O
 *  8 predicted C:O vs direct CO₂ test → agree, law confirmed
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | given (script13 ink)         | T mid | x540  y90  [fade@b5]
 *  b1 | l1 (script12 ink)            | T mid | x540  y118 [fade@b5]
 *  b2 | l2 (13 bold ink)             | T mid | x540  y143 [fade@b5]
 *  b3 | l3 (13 bold green)           | T mid | x540  y168 [fade@b5]
 *  b4 | l4 (script12 muted)          | T mid | x540  y195 [fade@b5]
 *  b5 | given 2 (script13 ink)       | T mid | x540  y90  (same slot)
 *  b6 | strategy (script12 amber-drk)| T mid | x540  y120
 *  b7 | l1/l2 (13 bold ink)          | T mid | x540  y145/170
 *  b8 | l1 (13 bold ink)             | T mid | x540  y200
 *  b8 | l2 (13 bold green)           | T mid | x540  y225
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch01Sec28({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={19} fill={RED} script>
          {t("worked examples: combining volumes and reciprocal", "worked examples: combining volumes aur reciprocal")}
        </T>
      </Fade>

      {/* beat 0 — Example 3 given (JEE Main); fully fades at beat 5 */}
      <Fade on={beat >= 0 && beat < 5} delay={dl(0, 0.4)}>
        <T x={540} y={90} size={13} fill={INK} script>
          {t(
            "Example 3 (JEE Main): 1 vol hydrocarbon + 5 vol O₂ → 3 vol CO₂ + 4 vol H₂O. Formula?",
            "Example 3 (JEE Main): 1 vol hydrocarbon + 5 vol O₂ → 3 vol CO₂ + 4 vol H₂O. Formula?"
          )}
        </T>
      </Fade>

      {/* beat 1 — Gay-Lussac + Avogadro */}
      <Fade on={beat >= 1 && beat < 5} delay={dl(1, 0.4)}>
        <T x={540} y={118} size={12} fill={INK} script>
          {t(
            "Gay-Lussac + Avogadro: volumes = molecule ratios → write CₓHᵧ",
            "Gay-Lussac + Avogadro: volumes = molecule ratios → CₓHᵧ likho"
          )}
        </T>
      </Fade>

      {/* beat 2 — balance carbon */}
      <Fade on={beat >= 2 && beat < 5} delay={dl(2, 0.4)}>
        <T x={540} y={143} size={13} fill={INK} weight={700} script={false}>
          balance C: 3 CO₂ → x = 3
        </T>
      </Fade>

      {/* beat 3 — balance hydrogen */}
      <Fade on={beat >= 3 && beat < 5} delay={dl(3, 0.4)}>
        <T x={540} y={168} size={13} fill={GREEN} weight={700} script={false}>
          balance H: 4 H₂O × 2 → y = 8 ⇒ C₃H₈ (propane)
        </T>
      </Fade>

      {/* beat 4 — sanity check */}
      <Fade on={beat >= 4 && beat < 5} delay={dl(4, 0.4)}>
        <T x={540} y={195} size={12} fill={MUTED} script>
          check O: 3×2 + 4×1 = 10 = 5 O₂ ✓ ({t("sanity check", "sanity check")})
        </T>
      </Fade>

      {/* beat 5 — Example 4 given (JEE Advanced), same slot as beat 0 */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={90} size={13} fill={INK} script>
          {t(
            "Example 4 (JEE Advanced): CH₄(75%C,25%H), CO₂(27.3%C,72.7%O), H₂O(11.1%H,88.9%O) — reciprocal?",
            "Example 4 (JEE Advanced): CH₄(75%C,25%H), CO₂(27.3%C,72.7%O), H₂O(11.1%H,88.9%O) — reciprocal?"
          )}
        </T>
      </Fade>

      {/* beat 6 — strategy: hydrogen is the bridge */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={120} size={12} fill={AMBER_DARK} script>
          {t(
            "bridge element: H (in both CH₄ and H₂O) — fix 1 g H",
            "bridge element: H (CH₄ aur H₂O dono mein) — 1 g H fix karo"
          )}
        </T>
      </Fade>

      {/* beat 7 — masses combining with 1 g H */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={145} size={13} fill={INK} weight={700} script={false}>
          from CH₄: 75/25 = 3 → 1g H : 3.00g C
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.1)}>
        <T x={540} y={170} size={13} fill={INK} weight={700} script={false}>
          from H₂O: 88.9/11.1 = 8.01 → 1g H : 8.01g O
        </T>
      </Fade>

      {/* beat 8 — predicted vs direct test */}
      <Fade on={beat >= 8} delay={dl(8, 0.3)}>
        <T x={540} y={200} size={13} fill={INK} weight={700} script={false}>
          predicted C:O = 3.00 : 8.01
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.1)}>
        <T x={540} y={225} size={13} fill={GREEN} weight={700} script={false}>
          {t(
            "direct (CO₂): 27.3/72.7 = 3.00:~8.00 → AGREES! reciprocal ✓",
            "direct (CO₂): 27.3/72.7 = 3.00:~8.00 → MATCH! reciprocal ✓"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
