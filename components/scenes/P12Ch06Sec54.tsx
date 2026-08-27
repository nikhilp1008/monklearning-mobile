/**
 * P12Ch06 · Section 54 — "Board derivation: magnetic energy density in a solenoid"
 * Subtopic: AC Generator & Energy Density
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

export default function P12Ch06Sec54({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Board Derivation: Solenoid Magnetic Energy Density u_B = B² / (2 μ₀)", "Board Derivation: Solenoid Magnetic Energy Density u_B = B² / (2 μ₀)")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: STEP 1 & 2: SUBSTITUTE L = μ₀ n² A l AND I = B / (μ₀ n) */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("STEP 1 & 2: SUBSTITUTE L = μ₀ n² A l AND I = B / (μ₀ n)", "STEP 1 & 2: SUBSTITUTE L = μ₀ n² A l AND I = B / (μ₀ n)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Inductor Energy: U_B = ½ L I² stored inside solenoid.
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Solenoid Inductance: L = μ_0 n² A l (n = turns per meter).
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Current in terms of B: Since B = μ_0 n I, I = B / (μ_0 n).
          </T>

          <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Substitute: U_B = ½ (μ_0 n² A l) [ B / (μ_0 n) ]²!
          </T>
        </Fade>

        <Fade on={beat >= 5}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Turns density n² cancels out in numerator and denominator)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: STEP 3: DIVIDE BY VOLUME V = A l ⇒ u_B = B² / (2 μ₀) */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("STEP 3: DIVIDE BY VOLUME V = A l ⇒ u_B = B² / (2 μ₀)", "STEP 3: DIVIDE BY VOLUME V = A l ⇒ u_B = B² / (2 μ₀)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Expanded Total Energy: U_B = ½ [ B² / μ_0 ] (A l).
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Solenoid Core Volume: V_core = Area × length = A l.
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Energy Density Definition: u_B = U_B / V_core.
          </T>

          <Draw on={beat >= 7} delay={dl(7, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Universal Density Formula: u_B = B² / (2 μ_0)!
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Energy density depends solely on B and medium permeability μ_0)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("CBSE STEP-BY-STEP MARKING RECAP", "CBSE STEP-BY-STEP MARKING RECAP")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Step 1: Write initial formula U_B = ½ L I² (1 mark).
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Step 2: Substitute L = μ_0 n² A l and I = B / (μ_0 n) and divide by volume A l (2 marks).
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Derived Proof: Energy density in magnetic field u_B = B² / (2 μ₀) is completely independent of solenoid dimensions! ✓",
            "★ Derived Proof: Energy density in magnetic field u_B = B² / (2 μ₀) is completely independent of solenoid dimensions! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
