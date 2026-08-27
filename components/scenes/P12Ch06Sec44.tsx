/**
 * P12Ch06 · Section 44 — "JEE Main level: coaxial solenoids, switched off"
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

export default function P12Ch06Sec44({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("JEE Main: Switched-Off Coaxial Solenoids Induced Secondary EMF", "JEE Main: Switched-Off Coaxial Solenoids Induced Secondary EMF")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: STEP 1: MUTUAL INDUCTANCE M = μ₀ N₁ N₂ π r_in² / l */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("STEP 1: MUTUAL INDUCTANCE M = μ₀ N₁ N₂ π r_in² / l", "STEP 1: MUTUAL INDUCTANCE M = μ₀ N₁ N₂ π r_in² / l")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Given Solenoid Values: N₁ = 1000, N₂ = 500, r_in = 0.02 m, l = 0.4 m.
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Inner Area: A_in = π (0.02)² = 1.257 × 10⁻³ m².
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Formula: M = (4π×10⁻⁷ × 1000 × 500 × 1.257×10⁻³) / 0.4.
          </T>

          <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Calculate M: M = 1.974 × 10⁻³ H ≈ 1.97 mH!
          </T>
        </Fade>

        <Fade on={beat >= 5}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Flux linkage uses smaller inner radius area A_in)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: STEP 2: INDUCED SECONDARY EMF ε₂ = M (ΔI / Δt) */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("STEP 2: INDUCED SECONDARY EMF ε₂ = M (ΔI / Δt)", "STEP 2: INDUCED SECONDARY EMF ε₂ = M (ΔI / Δt)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Current Change: ΔI = 4.0 A - 0 A = 4.0 A in Δt = 0.02 s.
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Rate of Change: dI/dt = 4.0 / 0.02 = 200 A/s.
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Secondary EMF Formula: ε₂ = M (dI/dt) = (1.974 × 10⁻³ H) × 200.
          </T>

          <Draw on={beat >= 7} delay={dl(7, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Calculate EMF: ε₂ = 0.395 V!
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Lenz's law dictates EMF opposes sudden collapse of primary current)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("JEE MAIN MASTER RECAP", "JEE MAIN MASTER RECAP")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Mutual Inductance: M = 1.97 mH (governed purely by geometric turn ratio and inner area).
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Induced Secondary Voltage: Peak induced voltage ε₂ = 0.395 V during the 0.02 s switch-off interval.
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ JEE Main Result: Coaxial solenoids Mutual Inductance M = 1.97 mH and Secondary EMF ε₂ = 0.395 V! ✓",
            "★ JEE Main Result: Coaxial solenoids Mutual Inductance M = 1.97 mH and Secondary EMF ε₂ = 0.395 V! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
