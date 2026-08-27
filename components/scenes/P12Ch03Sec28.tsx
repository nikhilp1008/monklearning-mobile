/**
 * P12Ch02 · Section 28 — "The two patterns every network is built from"
 * Beats (en [0,6,16,26,39,53,61,74]): 8 beats
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

export default function P12Ch03Sec28({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("The two patterns every network is built from", "The two patterns every network is built from")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: SERIES COMBINATION */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("SERIES COMBINATION (COMMON CURRENT)", "SERIES COMBINATION (COMMON CURRENT)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Single Path: Same current I flows through all resistors in series.
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Voltage Division: Total voltage V = V₁ + V₂ + V₃ = I(R₁ + R₂ + R₃).
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Equivalent Resistance: R_eq = R₁ + R₂ + R₃.
          </T>

          <Draw on={beat >= 3} delay={dl(3, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Rule: R_eq is strictly GREATER than the largest individual resistor!
          </T>
        </Fade>

        <Fade on={beat >= 4}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Series connection increases total electrical opposition)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: PARALLEL COMBINATION */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("PARALLEL COMBINATION (COMMON VOLTAGE)", "PARALLEL COMBINATION (COMMON VOLTAGE)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 4}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Multiple Branches: Same potential difference V across each resistor.
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Current Addition: Total current I = I₁ + I₂ + I₃ = V(1/R₁ + 1/R₂ + 1/R₃).
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Equivalent Conductance: 1/R_eq = 1/R₁ + 1/R₂ + 1/R₃.
          </T>

          <Draw on={beat >= 6} delay={dl(6, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Rule: R_eq is strictly SMALLER than the smallest individual resistor!
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (2-Resistor Product-Over-Sum: R_eq = R₁ R₂ / (R₁ + R₂))
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("NETWORK COMBINATION VERDICT", "NETWORK COMBINATION VERDICT")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Series adds resistance (V divides, I same); Parallel provides alternate paths (I divides, V same).
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Every complex resistor network decomposes into combinations of these 2 fundamental building blocks.
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Series adds resistance; Parallel eases flow! Master these 2 fundamental building blocks! ✓",
            "★ Series adds resistance; Parallel eases flow! Master these 2 fundamental building blocks! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
