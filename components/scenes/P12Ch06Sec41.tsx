/**
 * P12Ch06 · Section 41 — "Board derivation: energy stored in an inductor, and where it lives"
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

export default function P12Ch06Sec41({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Board Derivation: Inductor Energy U_B = (1/2) L I² & Density u_B", "Board Derivation: Inductor Energy U_B = (1/2) L I² & Density u_B")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: WORK INTEGRAL & TOTAL ENERGY */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("STEP 1 & 2: WORK INTEGRAL & TOTAL ENERGY", "STEP 1 & 2: WORK INTEGRAL & TOTAL ENERGY")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Instantaneous Power: P = dw / dt = ε I = (L di/dt) I.
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Work Element: dw = L I di (work done against back emf).
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Integrate Work: U_B = ∫₀^I L i di = L [ i² / 2 ]₀^I.
          </T>

          <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Stored Energy: U_B = (1 / 2) L I²!
          </T>
        </Fade>

        <Fade on={beat >= 5}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Analogous to mechanical kinetic energy E_k = ½ m v²)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: MAGNETIC FIELD ENERGY DENSITY u_B */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("STEP 3: MAGNETIC FIELD ENERGY DENSITY u_B", "STEP 3: MAGNETIC FIELD ENERGY DENSITY u_B")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Solenoid Inductance: L = μ_0 n² A l and Field B = μ_0 n I.
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Current Substitution: I = B / (μ_0 n).
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Total Energy in Volume V: U_B = ½ (μ_0 n² A l) (B / μ_0 n)² = [ B² / (2 μ_0) ] (A l).
          </T>

          <Draw on={beat >= 7} delay={dl(7, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Energy Density: u_B = U_B / (A l) = B² / (2 μ_0)!
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Energy per unit volume stored in the magnetic field B)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("CBSE DERIVATION MARKING RECAP", "CBSE DERIVATION MARKING RECAP")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Step-by-step marking: 1. dw = L I di (1 mark) → 2. U_B = ½ L I² (1 mark) → 3. u_B = B² / (2 μ_0) in solenoid volume (1 mark)!
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Physical Insight: Just as electric field stores u_E = ½ ε_0 E², magnetic field stores u_B = B² / (2 μ_0).
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Derived Proof: Inductor energy U_B = ½ L I² resides in the magnetic field with energy density u_B = B² / (2 μ_0)! ✓",
            "★ Derived Proof: Inductor energy U_B = ½ L I² resides in the magnetic field with energy density u_B = B² / (2 μ_0)! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
