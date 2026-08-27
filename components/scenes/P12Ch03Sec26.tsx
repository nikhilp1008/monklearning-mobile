/**
 * P12Ch02 · Section 26 — "Worked example: a temperature-proof resistor pair"
 * Beats (en [0,11,27,34,47,61,73,82]): 8 beats
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

export default function P12Ch03Sec26({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("JEE Advanced: Temperature-Proof Resistor Pair", "JEE Advanced: Temperature-Proof Resistor Pair")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: ZERO DRIFT CONDITION */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("ZERO NET TEMPERATURE DRIFT CONDITION", "ZERO NET TEMPERATURE DRIFT CONDITION")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Series Pair: Equivalent resistance R_eq = R₁ + R₂.
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Total Thermal Change: ΔR_eq = (R₁ α₁ + R₂ α₂) ΔT.
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Temperature Invariance: For ΔR_eq = 0, R₁ α₁ + R₂ α₂ = 0.
          </T>

          <Draw on={beat >= 3} delay={dl(3, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Ratio Master Formula: R₁ / R₂ = − α₂ / α₁ !
          </T>
        </Fade>

        <Fade on={beat >= 4}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Requires one component to have positive α and the other negative α)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: CALCULATING RATIO */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("CALCULATING METAL TO CARBON RATIO", "CALCULATING METAL TO CARBON RATIO")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 4}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Given Values: α₁ = +4.0×10⁻³ K⁻¹ (Metal), α₂ = −5.0×10⁻⁴ K⁻¹ (Carbon).
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Plug into Ratio: R₁ / R₂ = −(−5.0×10⁻⁴) / (4.0×10⁻³) = 5 / 40.
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Simplify Fraction: R₁ / R₂ = 1 / 8.
          </T>

          <Draw on={beat >= 6} delay={dl(6, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Final Ratio Result: R₁ : R₂ = 1 : 8 !
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Since metal α is 8x larger in magnitude, carbon resistance must be 8x larger)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("ZERO-DRIFT PRECISION RESISTOR VERDICT", "ZERO-DRIFT PRECISION RESISTOR VERDICT")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Metal resistance increase (+1 unit) is perfectly balanced by Carbon resistance decrease (-1 unit).
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Precision lab standard resistors use this exact positive/negative α cancellation principle.
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Result: R₁ : R₂ = 1 : 8. Precision zero-drift resistors use this exact cancellation principle! ✓",
            "★ Result: R₁ : R₂ = 1 : 8. Precision zero-drift resistors use this exact cancellation principle! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
