/**
 * P12Ch06 · Section 46 — "The four pitfalls of inductance, and the parallel worth memorising"
 * Subtopic: Inductance (Self & Mutual)
 */

import React from "react";
import { G } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, ringD,
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

export default function P12Ch06Sec46({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Subtopic Three Pitfalls & Mechanical-Electrical Analogy", "Subtopic Three Pitfalls & Mechanical-Electrical Analogy")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: TRAP 1 & 2: L ∝ N² (QUADRUPLES!) & M ∝ A_inner */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("TRAP 1 & 2: L ∝ N² (QUADRUPLES!) & M ∝ A_inner", "TRAP 1 & 2: L ∝ N² (QUADRUPLES!) & M ∝ A_inner")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Turns Trap: Doubling turns N quadruples L (L ∝ N²), NOT doubles!
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Area Trap: Coaxial solenoids mutual flux uses INNER area A_in.
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Geometric Mean Trap: M_max = √(L₁ L₂), NOT (L₁ + L₂)/2!
          </T>

          <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Reciprocity Rule: Drive current in LARGER loop first (M₁₂ = M₂₁)!
          </T>
        </Fade>

        <Fade on={beat >= 5}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Avoids non-uniform integral calculations)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: MECHANICAL-ELECTRICAL PARALLEL MEMORY MATRIX */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("MECHANICAL-ELECTRICAL PARALLEL MEMORY MATRIX", "MECHANICAL-ELECTRICAL PARALLEL MEMORY MATRIX")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Inertia Parallel: Mass m (mechanical) ↔ Self-Inductance L.
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Motion Parallel: Velocity v ↔ Current I.
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Force/EMF Parallel: Force F = m(dv/dt) ↔ Back EMF ε = -L(dI/dt).
          </T>

          <Draw on={beat >= 7} delay={dl(7, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Energy Parallel: Kinetic ½ m v² ↔ Magnetic Energy ½ L I²!
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Inductor resists current changes just like mass resists velocity changes)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("SUBTOPIC 3 MASTERY SUMMARY", "SUBTOPIC 3 MASTERY SUMMARY")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Core Concepts: Self-Inductance L, Mutual Inductance M, Reciprocity Theorem, Solenoid Derivations, and Stored B-Energy ½ L I².
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Field Energy Density: Magnetic field stores energy density u_B = B² / (2 μ_0) per unit volume.
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Subtopic 3 Complete: Self & Mutual Inductance, Reciprocity, Solenoid Formulas & Stored Energy (Sec 33 – 46)! ✓",
            "★ Subtopic 3 Complete: Self & Mutual Inductance, Reciprocity, Solenoid Formulas & Stored Energy (Sec 33 – 46)! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
