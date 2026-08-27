/**
 * P12Ch06 · Section 42 — "CBSE level: the self-inductance of an air-cored solenoid"
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

export default function P12Ch06Sec42({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("CBSE Level: Air-Cored Solenoid Inductance & Stored Energy", "CBSE Level: Air-Cored Solenoid Inductance & Stored Energy")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: STEP 1: CALCULATE SELF-INDUCTANCE L = μ₀ N² A / l */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("STEP 1: CALCULATE SELF-INDUCTANCE L = μ₀ N² A / l", "STEP 1: CALCULATE SELF-INDUCTANCE L = μ₀ N² A / l")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Given Parameters: Turns N = 500, length l = 0.5 m, radius r = 0.02 m.
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Cross-sectional Area: A = π r² = π (0.02)² = 1.257 × 10⁻³ m².
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Formula: L = μ_0 N² A / l = (4π×10⁻⁷ × 500² × 1.257×10⁻³) / 0.5.
          </T>

          <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Calculate L: L = 7.89 × 10⁻⁴ H ≈ 0.79 mH!
          </T>
        </Fade>

        <Fade on={beat >= 5}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Self-inductance depends only on geometric dimensions and permeability)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: STEP 2: CALCULATE STORED ENERGY U_B = (1/2) L I² */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("STEP 2: CALCULATE STORED ENERGY U_B = (1/2) L I²", "STEP 2: CALCULATE STORED ENERGY U_B = (1/2) L I²")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Given Current: Current I = 4.0 A flowing through solenoid.
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Stored Energy Formula: U_B = ½ L I².
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Substitute Values: U_B = ½ × (0.789 × 10⁻³ H) × (4)².
          </T>

          <Draw on={beat >= 7} delay={dl(7, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Calculate Energy: U_B = 6.32 × 10⁻³ J = 6.32 mJ!
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Energy increases quadratically with current I)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("CBSE STEP-BY-STEP MARKING RECAP", "CBSE STEP-BY-STEP MARKING RECAP")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Marking Scheme: Formula &amp; L = 0.79 mH (2 marks) + Stored Energy U_B = 6.32 mJ (1 mark) = 3 Full Marks!
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Units Check: Inductance L in Henry (H / mH) and Energy U_B in Joules (J / mJ).
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ CBSE Solution: Solenoid Self-Inductance L = 0.79 mH and Stored Energy U_B = 6.32 mJ! ✓",
            "★ CBSE Solution: Solenoid Self-Inductance L = 0.79 mH and Stored Energy U_B = 6.32 mJ! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
