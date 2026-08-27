/**
 * P12Ch02 · Section 55 — "Formula toolkit: series and parallel combinations"
 * Subtopic: Series & Parallel Combinations & Charge Sharing
 * OPEN CHALKBOARD DESIGN WITH MASTER CIRCUIT DIVISION FORMULAS (NO CONTAINER BOXES):
 *  - Series: 1/C_eq = Σ(1/C_i)  |  n identical C_eq = C/n  |  Voltage Division: V₁ = V C₂/(C₁+C₂)
 *  - Parallel: C_eq = Σ C_i  |  n identical C_eq = n C  |  Charge Division: Q₁ = Q C₁/(C₁+C₂)
 *  - Zero card box containers
 */

import React from "react";
import { G } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
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

export default function P12Ch02Sec55({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Formula Toolkit: Series Voltage Division & Parallel Charge Division Rules", "Formula Toolkit: Series Voltage Division & Parallel Charge Division Rules")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: SERIES VOLTAGE DIVISION TOOLKIT */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("SERIES TOOLKIT & VOLTAGE DIVISION", "SERIES TOOLKIT & VOLTAGE DIVISION")}
          </T>
        </Fade>

        {/* Floating Formulas */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={INK} weight={800} anchor="start">
            1. Equivalent: C_eq = (C₁ C₂) / (C₁ + C₂)
          </T>

          <T x={45} y={125} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            2. n Identical in Series: C_eq = C / n
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Voltage Division: V₁ = V [ C₂ / (C₁ + C₂) ]
          </T>

          <T x={45} y={215} size={14} fill={GREEN} weight={800} anchor="start">
            4. Voltage Division: V₂ = V [ C₁ / (C₁ + C₂) ]
          </T>
        </Fade>

        {/* Free Floating Rule */}
        <Fade on={beat >= 3}>
          <T x={45} y={268} anchor="start" size={13} fill={RED} weight={800}>
            (Smaller capacitor takes LARGER share of total voltage)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: PARALLEL CHARGE DIVISION TOOLKIT */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("PARALLEL TOOLKIT & CHARGE DIVISION", "PARALLEL TOOLKIT & CHARGE DIVISION")}
          </T>
        </Fade>

        {/* Floating Formulas */}
        <Fade on={beat >= 4}>
          <T x={45} y={80} size={14} fill={INK} weight={800} anchor="start">
            1. Equivalent: C_eq = C₁ + C₂
          </T>

          <T x={45} y={125} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            2. n Identical in Parallel: C_eq = n C
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Charge Division: Q₁ = Q [ C₁ / (C₁ + C₂) ]
          </T>

          <T x={45} y={215} size={14} fill={GREEN} weight={800} anchor="start">
            4. Charge Division: Q₂ = Q [ C₂ / (C₁ + C₂) ]
          </T>
        </Fade>

        {/* Open Text Explanation */}
        <Fade on={beat >= 6}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Larger capacitor draws LARGER share of total charge Q)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("RATIO COMPARISON RULE", "RATIO COMPARISON RULE")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Series: V₁ / V₂ = C₂ / C₁ (Inverse Ratio)   |   Parallel: Q₁ / Q₂ = C₁ / C₂ (Direct Ratio)!
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Ratio of n identical capacitors in parallel vs series C_parallel / C_series = n²!
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Combinations Toolkit Mastered: Series V inverse ratio V₁/V₂=C₂/C₁ vs Parallel Q direct ratio Q₁/Q₂=C₁/C₂! ✓",
            "★ Combinations Toolkit Mastered: Series V inverse ratio V₁/V₂=C₂/C₁ vs Parallel Q direct ratio Q₁/Q₂=C₁/C₂! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
