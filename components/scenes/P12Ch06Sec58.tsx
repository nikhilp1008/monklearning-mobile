/**
 * P12Ch06 · Section 58 — "The four pitfalls of generators and field energy"
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

export default function P12Ch06Sec58({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Subtopic Four Pitfalls & Generator Formula Summary", "Subtopic Four Pitfalls & Generator Formula Summary")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: TRAP 1 & 2: ALWAYS USE ω = 2πf & AVERAGE POWER FACTOR 1/2 */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("TRAP 1 & 2: ALWAYS USE ω = 2πf & AVERAGE POWER FACTOR 1/2", "TRAP 1 & 2: ALWAYS USE ω = 2πf & AVERAGE POWER FACTOR 1/2")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Frequency Trap: Convert f (Hz / rpm) to ω = 2πf before computing ε_0.
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Power Factor Trap: Average power ⟨P⟩ = ½ ε_0 I_0, NOT ε_0 I_0!
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Meter Reading Trap: AC meters read RMS ε_rms = ε_0 / √2.
          </T>

          <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Retarding Torque: Requires average torque ⟨τ⟩ = ⟨P⟩ / ω.
          </T>
        </Fade>

        <Fade on={beat >= 5}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Always check whether problem asks for peak, RMS, or average)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: TRAP 3 & 4: u_B = B² / (2 μ₀) VS u_E = (1/2) ε₀ E² */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("TRAP 3 & 4: u_B = B² / (2 μ₀) VS u_E = (1/2) ε₀ E²", "TRAP 3 & 4: u_B = B² / (2 μ₀) VS u_E = (1/2) ε₀ E²")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Magnetic Density: u_B = B² / (2 μ_0) has μ_0 in DENOMINATOR.
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Electric Density: u_E = ½ ε_0 E² has ε_0 in NUMERATOR.
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. EM Wave Equality: Average ⟨u_B⟩ = ⟨u_E⟩ = ¼ ε_0 E_0².
          </T>

          <Draw on={beat >= 7} delay={dl(7, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Total Density: ⟨u_total⟩ = ⟨u_B⟩ + ⟨u_E⟩ = ½ ε_0 E_0²!
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Be careful with constants placement μ_0 vs ε_0 in density formulas)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("SUBTOPIC 4 MASTERY SUMMARY", "SUBTOPIC 4 MASTERY SUMMARY")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Core Formulas: ε(t) = NBAω sin(ωt), ε_0 = NBAω, ε_rms = ε_0 / √2, ⟨P⟩ = ½ ε_0 I_0, and u_B = B² / (2 μ_0).
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Conservation of Energy: Mechanical torque work matches electrical energy output ⟨P_mech⟩ = ⟨τ⟩ ω = ⟨P_elec⟩.
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Subtopic 4 Complete: AC Generators, Sinusoidal EMF, Retarding Torque & Energy Density (Sec 47 – 58)! ✓",
            "★ Subtopic 4 Complete: AC Generators, Sinusoidal EMF, Retarding Torque & Energy Density (Sec 47 – 58)! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
