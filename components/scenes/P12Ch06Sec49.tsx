/**
 * P12Ch06 · Section 49 — "Energy in magnetic fields: the hidden reservoir"
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

export default function P12Ch06Sec49({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Magnetic Field Energy Reservoir: u_B = B² / (2 μ₀)", "Magnetic Field Energy Reservoir: u_B = B² / (2 μ₀)")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: FIELD ENERGY DENSITY: u_B = B² / (2 μ₀) */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("FIELD ENERGY DENSITY: u_B = B² / (2 μ₀)", "FIELD ENERGY DENSITY: u_B = B² / (2 μ₀)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Energy per Volume: u_B = U_B / Volume [units: Joules / m³].
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Solenoid Proof: U_B = ½ L I² = ½ (μ_0 n² A l) (B / μ_0 n)².
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Energy Density: u_B = B² / (2 μ_0).
          </T>

          <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Field Storage: Energy resides in vacuum space containing B field!
          </T>
        </Fade>

        <Fade on={beat >= 5}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Analogous to electric field energy density u_E = ½ ε_0 E²)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: EM WAVE EQUIPARTITION: ⟨u_E⟩ = ⟨u_B⟩ */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("EM WAVE EQUIPARTITION: ⟨u_E⟩ = ⟨u_B⟩", "EM WAVE EQUIPARTITION: ⟨u_E⟩ = ⟨u_B⟩")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. EM Wave Fields: B_0 = E_0 / c, where c = 1 / √(μ_0 ε_0).
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Substitute B_0: u_B = B_0² / (2 μ_0) = (E_0 / c)² / (2 μ_0).
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Simplify: u_B = E_0² (μ_0 ε_0) / (2 μ_0) = ½ ε_0 E_0² = u_E!
          </T>

          <Draw on={beat >= 7} delay={dl(7, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Total Average Density: ⟨u_total⟩ = ½ ε_0 E_0² = B_0² / (2 μ_0)!
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Electric and magnetic energy densities are 50-50 equal in EM waves)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("FIELD RESERVOIR RECAP", "FIELD RESERVOIR RECAP")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Field Energy Transport: Energy propagates through space as coupled electric and magnetic fields.
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Universal Field Storage: Electrostatic fields store ½ ε_0 E² while Magnetostatic fields store B² / (2 μ_0).
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Magnetic Energy Density u_B = B² / (2 μ₀) represents local field energy storage per unit volume! ✓",
            "★ Magnetic Energy Density u_B = B² / (2 μ₀) represents local field energy storage per unit volume! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
