/**
 * P12Ch02 · Section 21 — "The temperature law and the coefficient alpha"
 * Beats (en [0,8,16,24,36,48,60,72]): 8 beats
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

export default function P12Ch03Sec21({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("The temperature law and the coefficient alpha", "The temperature law and the coefficient alpha")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: TEMPERATURE DEPENDENCE FORMULA */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("TEMPERATURE DEPENDENCE FORMULA", "TEMPERATURE DEPENDENCE FORMULA")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Linear Approximation: R_T = R_0 [1 + α (T − T_0)]
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Resistivity Analogy: ρ_T = ρ_0 [1 + α (T − T_0)]
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Reference Point: T_0 is standard reference (usually 0°C or 20°C).
          </T>

          <Draw on={beat >= 3} delay={dl(3, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Fractional Change: ΔR / R_0 = α ΔT
          </T>
        </Fade>

        <Fade on={beat >= 4}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Valid for small temperature ranges ΔT where α remains constant)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: ALPHA COEFFICIENT DEFINITION & UNITS */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("ALPHA (α) COEFFICIENT DEFINITION & UNITS", "ALPHA (α) COEFFICIENT DEFINITION & UNITS")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Formal Definition: α = (R_T − R_0) / [R_0 (T − T_0)]
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. SI Unit: K⁻¹ or °C⁻¹ (Fractional change per degree rise).
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Typical Values: Metals α ~ 4×10⁻³ K⁻¹; Alloys α ~ 10⁻⁵ K⁻¹.
          </T>

          <Draw on={beat >= 6} delay={dl(6, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Ratio Shortcut: R_T / R_0 = 1 + α ΔT !
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Allows direct 1-line ratio calculations in JEE/NEET questions)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("MATERIAL COEFFICIENT SUMMARY", "MATERIAL COEFFICIENT SUMMARY")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            For pure metals, α &gt; 0 (resistance increases linearly with temperature rise).
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            For semiconductors, α &lt; 0 (resistance drops exponentially). For alloys like Manganin/Nichrome, α ≈ 0.
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Ratio Shortcut: R_T / R_0 = 1 + α ΔT. Useful for quick 1-line numerical solving! ✓",
            "★ Ratio Shortcut: R_T / R_0 = 1 + α ΔT. Useful for quick 1-line numerical solving! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
