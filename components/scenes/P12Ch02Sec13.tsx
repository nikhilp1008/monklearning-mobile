/**
 * P12Ch02 · Section 13 — "Pitfalls: V and E ask different questions"
 * Subtopic: Electrostatic Potential & Equipotentials
 * OPEN CHALKBOARD DESIGN WITH PITFALLS MATRIX & VECTOR VS SCALAR COMPARISON (NO CONTAINER BOXES):
 *  - Pitfall 1: Vector Addition (Field E) vs Algebraic Sum with Sign (Potential V)
 *  - Pitfall 2: Confusing Field Magnitude with Potential Value (Slope vs Altitude)
 *  - Pitfall 3: Reference Level Misconceptions (V(∞) = 0 vs E(∞) = 0)
 *  - Subtopic 1 Summary & Checklist
 */

import React from "react";
import { G, Line } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

function Badge({ n, cx, cy, on, delay }: { n: number; cx: number; cy: number; on: boolean; delay: number }) {
  return (
    <G>
      <Draw on={on} delay={delay}
        d={`M ${cx - 13} ${cy} A 13 13 0 1 1 ${cx + 13} ${cy} A 13 13 0 1 1 ${cx - 13} ${cy}`}
        stroke={RED} sw={2.2} dur={0.4} />
      <Fade on={on} delay={delay + 0.3}>
        <T x={cx} y={cy + 5} size={14} fill={RED} weight={800}>{n}</T>
      </Fade>
    </G>
  );
}

export default function P12Ch02Sec13({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Subtopic 1 Pitfalls & Master Checklist: Electric Field E vs Potential V", "Subtopic 1 Pitfalls & Master Checklist: Electric Field E vs Potential V")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: FIELD E VS POTENTIAL V MATRIX */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={25} cy={25} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("ELECTRIC FIELD E (VECTOR)", "ELECTRIC FIELD E (VECTOR)")}
          </T>
        </Fade>

        {/* Floating Field Features (No Card Boxes) */}
        <Fade on={beat >= 1}>
          <T x={40} y={80} size={15} fill={INK} weight={800} anchor="start">
            • VECTOR Quantity: Has magnitude & direction (i^, j^, k^)
          </T>

          <T x={40} y={130} size={15} fill={INK} weight={800} anchor="start">
            • Point Charge: E(r) = k Q / r²  (Decays as 1/r²)
          </T>

          <T x={40} y={180} size={15} fill={INK} weight={800} anchor="start">
            • Dipole: E_axial = 2kp/r³, E_equatorial = kp/r³  (Decays as 1/r³)
          </T>

          <T x={40} y={230} size={15} fill={RED} weight={800} anchor="start">
            • Superposition: VECTOR Addition with components & angles!
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: POTENTIAL V MATRIX */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={25} cy={25} on={beat >= 2} delay={dl(2, 0.2)} />
        <Fade on={beat >= 2} delay={dl(2, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("ELECTROSTATIC POTENTIAL V (SCALAR)", "ELECTROSTATIC POTENTIAL V (SCALAR)")}
          </T>
        </Fade>

        {/* Floating Potential Features (No Card Boxes) */}
        <Fade on={beat >= 2}>
          <T x={40} y={80} size={15} fill={GREEN} weight={800} anchor="start">
            • SCALAR Quantity: Single number with Volt units (J/C)
          </T>

          <T x={40} y={130} size={15} fill={GREEN} weight={800} anchor="start">
            • Point Charge: V(r) = k Q / r  (Decays as 1/r)
          </T>

          <T x={40} y={180} size={15} fill={GREEN} weight={800} anchor="start">
            • Dipole: V(r, θ) = (k p cosθ) / r²  (Decays as 1/r²)
          </T>

          <T x={40} y={230} size={15} fill={GREEN} weight={800} anchor="start">
            • Superposition: PURE ALGEBRAIC Sum with charge signs (+ / -)!
          </T>
        </Fade>
      </G>

      {/* MIDDLE BRIDGE: E = - dV/dr RELATION */}
      <G transform="translate(40, 340)">
        <Fade on={beat >= 4}>
          <Line x1="20" y1="10" x2="1000" y2="10" stroke={INK} strokeWidth={2} />
          <T x={510} y={45} anchor="middle" size={18} fill={AMBER_DARK} weight={800}>
            BRIDGE RELATION: Electric Field E is the Negative Slope/Gradient of Potential! E = − dV/dr = − ∇V
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: SUBTOPIC 1 COMPLETION CHECKLIST */}
      <G transform="translate(40, 420)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("SUBTOPIC 1 MASTER CHECKLIST (SECTIONS 1 – 13)", "SUBTOPIC 1 MASTER CHECKLIST (SECTIONS 1 – 13)")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={52} size={14} anchor="start" fill={GREEN} weight={800}>
            ✓ V = W_ext/q₀ = kQ/r   ✓ Equipotentials E ⊥ Surface   ✓ Dipole V = kp cosθ/r²   ✓ Ring V = kQ/√(R²+x²)   ✓ E = −∇V!
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Subtopic 1 Complete (Sec 1–13): Electrostatic Potential & Equipotential Surface Foundations 100% Mastered! ✓",
            "★ Subtopic 1 Complete (Sec 1–13): Electrostatic Potential & Equipotential Surface Foundations 100% Mastered! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
