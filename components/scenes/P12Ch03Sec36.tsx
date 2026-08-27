/**
 * P12Ch02 · Section 36 — "Worked example: maximum and minimum from four resistors"
 * Beats (en [0,1,2,3,4,5,6,7]): 8 beats
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

export default function P12Ch03Sec36({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("NEET Speed Trap: Max & Min from Four Resistors (12 Ω)", "NEET Speed Trap: Max & Min from Four Resistors (12 Ω)")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: PURE SERIES MAXIMUM */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("PURE SERIES COMBINATION (MAXIMUM R)", "PURE SERIES COMBINATION (MAXIMUM R)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Series Configuration: Connect all n=4 resistors end-to-end.
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Apply Series Rule: R_max = n × R = 4 × 12 Ω.
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Multiplication: R_max = 48 Ω.
          </T>

          <Draw on={beat >= 3} delay={dl(3, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Maximum Rule: Pure series ALWAYS yields upper bound!
          </T>
        </Fade>

        <Fade on={beat >= 4}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (No combination of 4 resistors can exceed 48 Ω)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: PURE PARALLEL MINIMUM */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("PURE PARALLEL COMBINATION (MINIMUM R)", "PURE PARALLEL COMBINATION (MINIMUM R)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 4}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Parallel Configuration: Connect all n=4 resistors across same nodes.
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Apply Parallel Rule: R_min = R / n = 12 Ω / 4.
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Division: R_min = 3 Ω.
          </T>

          <Draw on={beat >= 6} delay={dl(6, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Minimum Rule: Pure parallel ALWAYS yields lower bound!
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (No combination of 4 resistors can drop below 3 Ω)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("FOUR-RESISTOR EXTREMES VERDICT", "FOUR-RESISTOR EXTREMES VERDICT")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Extreme values: R_max = 48 Ω (Pure Series) and R_min = 3 Ω (Pure Parallel).
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Check ratio shortcut: R_max / R_min = 48 / 3 = 16 = 4² = n² (Confirms both calculations in 1 second).
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Result: R_max = 48 Ω, R_min = 3 Ω. Extremes are ALWAYS pure series and pure parallel! ✓",
            "★ Result: R_max = 48 Ω, R_min = 3 Ω. Extremes are ALWAYS pure series and pure parallel! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
