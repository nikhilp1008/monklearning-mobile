/**
 * P12Ch02 · Section 27 — "Pitfalls and pro-tips for resistivity and temperature"
 * Beats (en [0,9,23,30,43,54,65,81]): 8 beats
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

export default function P12Ch03Sec27({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Pitfalls & Pro-Tips: Temperature & Resistivity", "Pitfalls & Pro-Tips: Temperature & Resistivity")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: KEEP THE 1 IN FORMULA */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("KEEP THE '1' IN R_T = R₀(1 + α ΔT)", "KEEP THE '1' IN R_T = R₀(1 + α ΔT)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. The '1' preserves base resistance R₀ in total calculation.
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Dropping '1' yields only fractional change ΔR = R₀ α ΔT.
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Always double-check whether question asks for total R_T or change ΔR.
          </T>

          <Draw on={beat >= 3} delay={dl(3, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Avoid Trap: ΔR is a speed trap option in competitive exams!
          </T>
        </Fade>

        <Fade on={beat >= 4}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Base reference T₀ is usually 0°C or 20°C)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: SIGNS & MAGNITUDES OF ALPHA */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 3} delay={dl(3, 0.2)} />
        <Fade on={beat >= 3} delay={dl(3, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("SIGNS & MAGNITUDES OF ALPHA (α)", "SIGNS & MAGNITUDES OF ALPHA (α)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 3}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Pure Metals: +α (~4×10⁻³ K⁻¹), resistance rises with T.
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Semiconductors: −α (negative), resistance drops with T.
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Standard Alloys: α ≈ 0 (Manganin/Constantan), R insensitive to T.
          </T>

          <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Ratio Pro-Tip: R_T / R₀ = 1 + α ΔT !
          </T>
        </Fade>

        <Fade on={beat >= 6}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Solves 90% of entrance temperature questions in a single line)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("EXAM PRO-TIPS VERDICT", "EXAM PRO-TIPS VERDICT")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Ratio method R_T / R₀ = 1 + α ΔT avoids keeping track of absolute resistance units until final step.
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Check temperature units: Kelvin step size equals Celsius step size (ΔT in K = ΔT in °C).
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Ratio Method (R_T/R_0 = 1 + α ΔT) avoids tracking absolute values until the end! ✓",
            "★ Ratio Method (R_T/R_0 = 1 + α ΔT) avoids tracking absolute values until the end! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
