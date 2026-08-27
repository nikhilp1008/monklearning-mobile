/**
 * C11 Ch01 · Section 35 — "Worked examples: isotopes and gas mixtures"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0,24.83,42.67,66.73,86.36,106.07,129.11,152.07,168.28]):
 *  0 Example 3 (JEE Main) given: isotope X, avg 63.55 — %abundance? atoms?
 *  1 setup: 62.93x + 64.93(1-x) = 63.55
 *  2 solve: x = 0.69 → 69%/31%
 *  3 moles from average mass as molar mass: 0.100 mol → 6.022×10²² atoms
 *  4 lighter isotope count: 69% of total
 *  (example 3 fully fades at beat 5, freeing the board for example 4)
 *  5 Example 4 (JEE Advanced) given: CH₄+C₂H₆ mix, avg M=20.0 g/mol
 *  6 16a + 30(1-a) = 20 → a = 5/7
 *  7 total moles + split by mole fraction
 *  8 H atoms: per-molecule count × moles, then × Nₐ
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | given (script12 ink)         | T mid | x540  y88  [fade@b5]
 *  b1 | eq (13 bold ink)             | T mid | x540  y113 [fade@b5]
 *  b2 | ans (13 bold green)          | T mid | x540  y138 [fade@b5]
 *  b3 | l (script12 ink)             | T mid | x540  y163 [fade@b5]
 *  b4 | l (13 bold green)            | T mid | x540  y188 [fade@b5]
 *  b5 | given 2 (script12 ink)       | T mid | x540  y88  (same slot)
 *  b6 | eq (13 bold ink)             | T mid | x540  y118
 *  b7 | l1/l2 (script12/13 ink)      | T mid | x540  y143/168
 *  b8 | l1/l2 (13 bold ink/green)    | T mid | x540  y193/218
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, INK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch01Sec35({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={19} fill={RED} script>
          {t("worked examples: isotopes and gas mixtures", "worked examples: isotopes aur gas mixtures")}
        </T>
      </Fade>

      {/* beat 0 — Example 3 given (JEE Main); fully fades at beat 5 */}
      <Fade on={beat >= 0 && beat < 5} delay={dl(0, 0.4)}>
        <T x={540} y={88} size={12} fill={INK} script>
          {t(
            "Example 3 (JEE Main): isotope X — 62.93 & 64.93 u, avg=63.55. %abundance? atoms of lighter in 6.355g?",
            "Example 3 (JEE Main): isotope X — 62.93 & 64.93 u, avg=63.55. %abundance? lighter ke atoms 6.355g mein?"
          )}
        </T>
      </Fade>

      {/* beat 1 — setup */}
      <Fade on={beat >= 1 && beat < 5} delay={dl(1, 0.4)}>
        <T x={540} y={113} size={13} fill={INK} weight={700} script={false}>
          62.93x + 64.93(1−x) = 63.55
        </T>
      </Fade>

      {/* beat 2 — solve */}
      <Fade on={beat >= 2 && beat < 5} delay={dl(2, 0.4)}>
        <T x={540} y={138} size={13} fill={GREEN} weight={700} script={false}>
          x = 0.69 → lighter=69%, heavier=31%
        </T>
      </Fade>

      {/* beat 3 — moles from average mass */}
      <Fade on={beat >= 3 && beat < 5} delay={dl(3, 0.4)}>
        <T x={540} y={163} size={12} fill={INK} script>
          moles: 6.355 / 63.55 = 0.100 mol → total atoms = 6.022×10²²
        </T>
      </Fade>

      {/* beat 4 — lighter isotope count */}
      <Fade on={beat >= 4 && beat < 5} delay={dl(4, 0.4)}>
        <T x={540} y={188} size={13} fill={GREEN} weight={700} script={false}>
          lighter isotope: 69% × total ≈ 4.16×10²² atoms
        </T>
      </Fade>

      {/* beat 5 — Example 4 given (JEE Advanced), same slot as beat 0 */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={88} size={12} fill={INK} script>
          {t(
            "Example 4 (JEE Advanced): CH₄+C₂H₆ mix, avg M=20.0 g/mol — mole fraction CH₄? H atoms in 5.00g?",
            "Example 4 (JEE Advanced): CH₄+C₂H₆ mix, avg M=20.0 g/mol — CH₄ ka mole fraction? H atoms 5.00g mein?"
          )}
        </T>
      </Fade>

      {/* beat 6 — solve for mole fraction */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={118} size={13} fill={INK} weight={700} script={false}>
          16a + 30(1−a) = 20 → a = 5/7 ≈ 0.714
        </T>
      </Fade>

      {/* beat 7 — total moles + split */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={143} size={12} fill={INK} script>
          total moles: 5/20 = 0.250 mol
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.1)}>
        <T x={540} y={168} size={13} fill={INK} weight={700} script={false}>
          split: CH₄=0.1786 mol, C₂H₆=0.0714 mol
        </T>
      </Fade>

      {/* beat 8 — hydrogen atoms */}
      <Fade on={beat >= 8} delay={dl(8, 0.3)}>
        <T x={540} y={193} size={13} fill={INK} weight={700} script={false}>
          H atoms: 0.1786×4 + 0.0714×6 = 1.143 mol
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.1)}>
        <T x={540} y={218} size={13} fill={GREEN} weight={700} script={false}>
          {t(
            "× Nₐ ≈ 6.88×10²³ atoms — four ideas chained without a wrong turn",
            "× Nₐ ≈ 6.88×10²³ atoms — chaar ideas bina ek bhi galat mod ke"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
