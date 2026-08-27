/**
 * C11 Ch01 · Section 34 — "Worked examples: moles, atoms and atomicity"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0,17.32,25.94,43.01,58.03,79.02,98.22,118.36]):
 *  0 Example 1 (CBSE) given: 13.5 g Al, atomic mass 27 — moles? atoms?
 *  1 moles: 13.5/27 = 0.5 mol
 *  2 atoms: 0.5 × Nₐ = 3.011×10²³ (Al monoatomic)
 *  (example 1 fully fades at beat 3, freeing the board for example 2)
 *  3 Example 2 (NEET) given: which has max atoms — 4g H₂/16g O₂/23g Na/4g He
 *  4 H₂ and O₂ worked: moles of molecules × atomicity
 *  5 Na and He worked (monoatomic); H₂ wins with 4 mol atoms
 *  6 guardrail: the trap is forgetting H₂ is diatomic
 *  7 speed tip: compare fractions, skip full values, Nₐ cancels
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | given (script13 ink)         | T mid | x540  y90  [fade@b3]
 *  b1 | working (13 bold ink)        | T mid | x540  y120 [fade@b3]
 *  b2 | answer (13 bold green)       | T mid | x540  y150 [fade@b3]
 *  b3 | given 2 (script13 ink)       | T mid | x540  y90  (same slot)
 *  b4 | l1/l2 (13 bold ink)          | T mid | x540  y120/145
 *  b5 | l1 (script12 ink)            | T mid | x540  y170
 *  b5 | l2 (13 bold green)           | T mid | x540  y195
 *  b6 | guardrail (script12 red)     | T mid | x540  y225
 *  b7 | l1/l2 (script12 amber/muted) | T mid | x540  y250/275
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch01Sec34({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={20} fill={RED} script>
          {t("worked examples: moles, atoms and atomicity", "worked examples: moles, atoms aur atomicity")}
        </T>
      </Fade>

      {/* beat 0 — Example 1 given (CBSE); fully fades at beat 3 */}
      <Fade on={beat >= 0 && beat < 3} delay={dl(0, 0.4)}>
        <T x={540} y={90} size={13} fill={INK} script>
          {t(
            "Example 1 (CBSE): 13.5 g Al (atomic mass=27) — moles? atoms?",
            "Example 1 (CBSE): 13.5 g Al (atomic mass=27) — moles? atoms?"
          )}
        </T>
      </Fade>

      {/* beat 1 — moles */}
      <Fade on={beat >= 1 && beat < 3} delay={dl(1, 0.4)}>
        <T x={540} y={120} size={13} fill={INK} weight={700} script={false}>
          moles: 13.5 / 27 = 0.5 mol
        </T>
      </Fade>

      {/* beat 2 — atoms */}
      <Fade on={beat >= 2 && beat < 3} delay={dl(2, 0.4)}>
        <T x={540} y={150} size={13} fill={GREEN} weight={700} script={false}>
          atoms: 0.5 × 6.022×10²³ = 3.011×10²³ (Al monoatomic)
        </T>
      </Fade>

      {/* beat 3 — Example 2 given (NEET), same slot as beat 0 */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={90} size={13} fill={INK} script>
          {t(
            "Example 2 (NEET): MAX atoms — 4g H₂, 16g O₂, 23g Na, 4g He?",
            "Example 2 (NEET): MAX atoms — 4g H₂, 16g O₂, 23g Na, 4g He?"
          )}
        </T>
      </Fade>

      {/* beat 4 — H2 and O2 worked */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={120} size={13} fill={INK} weight={700} script={false}>
          H₂: 4/2 = 2 mol molecules × 2 = 4 mol atoms
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={540} y={145} size={13} fill={INK} weight={700} script={false}>
          O₂: 16/32 = 0.5 mol molecules × 2 = 1 mol atoms
        </T>
      </Fade>

      {/* beat 5 — Na and He worked, the winner */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={170} size={12} fill={INK} script>
          Na: 23/23=1 mol (monoatomic) = 1 mol atoms · He: 4/4=1 mol (monoatomic) = 1 mol atoms
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={540} y={195} size={13} fill={GREEN} weight={700} script={false}>
          MAX = H₂ with 4 mol atoms ✓
        </T>
      </Fade>

      {/* beat 6 — guardrail */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={225} size={12} fill={RED} script>
          {t(
            "trap: forgetting H₂ is DIATOMIC undercounts its atoms",
            "trap: H₂ ka DIATOMIC hona bhool jaana atoms ko kam gin leta hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — speed tip */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={250} size={12} fill={AMBER_DARK} script>
          {t(
            "speed tip: write mass/M, ×atomicity, compare FRACTIONS — skip full values",
            "speed tip: mass/M likho, ×atomicity, FRACTIONS compare karo — full values skip"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={540} y={275} size={12} fill={MUTED} script>
          {t("Nₐ cancels out of every comparison — rank 4 options in <15s", "Nₐ har comparison se cancel ho jaata — 4 options <15s mein rank karo")}
        </T>
      </Fade>
    </Scene>
  );
}
