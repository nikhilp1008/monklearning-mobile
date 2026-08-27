/**
 * C11 Ch01 · Section 56 — "Worked examples: density, mixing and dilution"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0,20.14,33.28,46.08,70.92,94.98,119.81,142.77]):
 *  0 Example 3 (JEE Main) given: 2.0 molal solution, M=50g/mol, d=1.05g/mL
 *  1 2.0 molal = 2.0mol/1000g solvent → mass(solute) = 100g
 *  2 mass(solution) = 1000+100 = 1100g (include the solute!)
 *  3 density → volume (1.0476L) → M = 1.91 mol/L
 *  (example 3 fully fades at beat 4, freeing the board for example 4)
 *  4 Example 4 (JEE Advanced) given: mix two H₂SO₄ solutions, dilute to 500mL
 *  5 conserve moles: 0.050mol + 0.030mol = 0.080mol total
 *  6 ÷ final volume → 0.16 mol/L; trap: final volume, not the mixed sum
 *  7 normality: basicity=2 → 0.32N; the whole chain in one pass
 *
 * Layout plan:
 *  b0 | given (script12 ink)         | T mid | x540  y88  [fade@b4]
 *  b1 | l (13 bold ink)              | T mid | x540  y113 [fade@b4]
 *  b2 | l (13 bold ink)              | T mid | x540  y138 [fade@b4]
 *  b3 | l1 (13 bold ink)/l2(green)   | T mid | x540  y163/185 [fade@b4]
 *  b4 | given2 (script12 ink)        | T mid | x540  y88  (same slot)
 *  b5 | l (script12 ink)             | T mid | x540  y113
 *  b6 | l1 (13 bold green)/l2(red)  | T mid | x540  y138/160
 *  b7 | l (13 bold green)            | T mid | x540  y185
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, INK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch01Sec56({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={18} fill={RED} script>
          {t("worked examples: density, mixing and dilution", "worked examples: density, mixing aur dilution")}
        </T>
      </Fade>

      {/* beat 0 — Example 3 given (JEE Main); fully fades at beat 4 */}
      <Fade on={beat >= 0 && beat < 4} delay={dl(0, 0.4)}>
        <T x={540} y={88} size={12} fill={INK} script>
          {t(
            "Example 3 (JEE Main): 2.0 molal solution (solute M=50g/mol), density=1.05g/mL. Molarity?",
            "Example 3 (JEE Main): 2.0 molal solution (solute M=50g/mol), density=1.05g/mL. Molarity?"
          )}
        </T>
      </Fade>

      {/* beat 1 — molal to mass of solute */}
      <Fade on={beat >= 1 && beat < 4} delay={dl(1, 0.4)}>
        <T x={540} y={113} size={13} fill={INK} weight={700} script={false}>
          {t(
            "2.0 molal = 2.0mol solute / 1000g solvent → mass(solute) = 2×50 = 100g",
            "2.0 molal = 1000g solvent mein 2.0mol solute → mass(solute) = 2×50 = 100g"
          )}
        </T>
      </Fade>

      {/* beat 2 — mass of solution */}
      <Fade on={beat >= 2 && beat < 4} delay={dl(2, 0.4)}>
        <T x={540} y={138} size={13} fill={INK} weight={700} script={false}>
          {t("mass(solution) = 1000+100 = 1100g (include the solute!)", "mass(solution) = 1000+100 = 1100g (solute bhi shaamil karo!)")}
        </T>
      </Fade>

      {/* beat 3 — density to volume to molarity */}
      <Fade on={beat >= 3 && beat < 4} delay={dl(3, 0.4)}>
        <T x={540} y={163} size={13} fill={INK} weight={700} script={false}>
          density → volume: 1100/1.05 = 1047.6mL = 1.0476L
        </T>
      </Fade>
      <Fade on={beat >= 3 && beat < 4} delay={dl(3, 1.2)}>
        <T x={540} y={185} size={13} fill={GREEN} weight={700} script={false}>
          M = 2.0/1.0476 = 1.91 mol/L
        </T>
      </Fade>

      {/* beat 4 — Example 4 given (JEE Advanced), same slot as beat 0 */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={88} size={12} fill={INK} script>
          {t(
            "Example 4 (JEE Advanced): 100mL 0.50M H₂SO₄ + 150mL 0.20M H₂SO₄ → diluted to 500mL. Final M? N?",
            "Example 4 (JEE Advanced): 100mL 0.50M H₂SO₄ + 150mL 0.20M H₂SO₄ → 500mL tak dilute. Final M? N?"
          )}
        </T>
      </Fade>

      {/* beat 5 — conserve moles */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={113} size={12} fill={INK} script>
          conserve moles: sol1=0.100L×0.50=0.050mol · sol2=0.150L×0.20=0.030mol → total=0.080mol
        </T>
      </Fade>

      {/* beat 6 — divide by final volume + the trap */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={138} size={13} fill={GREEN} weight={700} script={false}>
          ÷ final V=0.500L → M = 0.16 mol/L
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={540} y={160} size={12} fill={RED} script>
          {t(
            "trap: dilution uses the FINAL volume (500mL), NOT the mixed sum (250mL)!",
            "trap: dilution FINAL volume (500mL) use karta, mixed sum (250mL) NAHI!"
          )}
        </T>
      </Fade>

      {/* beat 7 — normality, the full chain */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={185} size={13} fill={GREEN} weight={700} script={false}>
          {t(
            "H₂SO₄ basicity=2 → N = 2×0.16 = 0.32N — mixing+dilution+M→N chain in one pass",
            "H₂SO₄ basicity=2 → N = 2×0.16 = 0.32N — mixing+dilution+M→N ek hi chaal mein"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
