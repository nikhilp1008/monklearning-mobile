/**
 * P12Ch02 · Section 24 — "Worked example: resistance of a heated wire"
 * Beats (en [0,8,19,26,37,49,56,63]): 8 beats
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

export default function P12Ch03Sec24({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("NEET Speed Trap: A Heated Metal Wire", "NEET Speed Trap: A Heated Metal Wire")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: COMMON NEET TRAP */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("COMMON NEET TRAP: MISREADING ΔR FOR R_T", "COMMON NEET TRAP: MISREADING ΔR FOR R_T")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={RED} weight={800} anchor="start">
            1. Common Student Trap: Calculating ΔR = R₀ α ΔT = 20 Ω and stopping!
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Why Wrong: 20 Ω is only the INCREASE in resistance, not final resistance.
          </T>

          <T x={45} y={170} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            3. Question asks for R_T at 50°C, requiring total R_T = R₀ + ΔR.
          </T>

          <Draw on={beat >= 3} delay={dl(3, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Trap Alert: 20 Ω is always Option A in multiple-choice exams!
          </T>
        </Fade>

        <Fade on={beat >= 4}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Always check whether question asks for total resistance or change in resistance)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: CORRECT CALCULATION */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("CORRECT 1-LINE RATIO CALCULATION", "CORRECT 1-LINE RATIO CALCULATION")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 4}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Identify Given: R₀ = 100 Ω, α = 4.0×10⁻³ °C⁻¹, ΔT = 50°C.
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Product α ΔT = (4×10⁻³)(50) = 0.20 (20% fractional increase).
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Total Resistance: R_T = 100 × (1 + 0.20) = 120 Ω.
          </T>

          <Draw on={beat >= 6} delay={dl(6, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Correct Result: R(50°C) = 120 Ω !
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Sanity Check: Heating metal MUST increase R above initial 100 Ω)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("HEATED WIRE NUMERICAL VERDICT", "HEATED WIRE NUMERICAL VERDICT")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Heating the metal wire by 50°C increases its resistance by 20% from 100 Ω to 120 Ω.
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Always write R_T = R₀(1 + α ΔT) directly to prevent accidentally reporting ΔR as final answer.
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Result: R_T = 120 Ω. Always use R_T = R_0(1 + αΔT) to avoid missing R_0! ✓",
            "★ Result: R_T = 120 Ω. Always use R_T = R_0(1 + αΔT) to avoid missing R_0! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
