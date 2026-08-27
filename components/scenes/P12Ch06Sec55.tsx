/**
 * P12Ch06 · Section 55 — "CBSE level: a commercial generator spinning at 50 Hz"
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

export default function P12Ch06Sec55({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("CBSE Level: 50 Hz Commercial AC Generator Calculation", "CBSE Level: 50 Hz Commercial AC Generator Calculation")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: STEP 1: ω = 2π(50) = 100π ⇒ ε₀ = N B A ω = 628.3 V */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("STEP 1: ω = 2π(50) = 100π ⇒ ε₀ = N B A ω = 628.3 V", "STEP 1: ω = 2π(50) = 100π ⇒ ε₀ = N B A ω = 628.3 V")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Given Values: Turns N = 100, Area A = 0.1 m², Field B = 0.2 T, f = 50 Hz.
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Angular Frequency: ω = 2π f = 2π (50) = 100π ≈ 314.16 rad/s.
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Formula: Peak EMF ε_0 = N B A ω = 100 × 0.2 × 0.1 × (100π).
          </T>

          <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Calculate Peak EMF: ε_0 = 200π V ≈ 628.3 V!
          </T>
        </Fade>

        <Fade on={beat >= 5}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Standard 50 Hz grid frequency produces 100π rad/s rotation speed)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: STEP 2: I₀ = 31.4 A & AVERAGE POWER ⟨P⟩ = 9.87 kW */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("STEP 2: I₀ = 31.4 A & AVERAGE POWER ⟨P⟩ = 9.87 kW", "STEP 2: I₀ = 31.4 A & AVERAGE POWER ⟨P⟩ = 9.87 kW")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Given Load Resistance: Circuit resistance R = 20 Ω.
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Peak Current: I_0 = ε_0 / R = 628.3 V / 20 Ω = 31.4 A.
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Average Power Formula: ⟨P⟩ = ½ ε_0 I_0 = ½ × 628.3 V × 31.4 A.
          </T>

          <Draw on={beat >= 7} delay={dl(7, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Calculate Power: ⟨P⟩ = 9,865 W ≈ 9.87 kW!
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Equivalent to RMS power ε_rms I_rms = 444.3 V × 22.2 A)
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
            Marking Breakdown: 1. ω = 100π rad/s (1 mark) → 2. Peak EMF ε_0 = 628.3 V (1 mark).
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            3. Peak Current I_0 = 31.4 A (1 mark) → 4. Average Power Output ⟨P⟩ = 9.87 kW (1 mark) = 4 Full Marks!
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ CBSE Solution: Peak EMF ε₀ = 628.3 V, Peak Current I₀ = 31.4 A, and Average Power Output ⟨P⟩ = 9.87 kW! ✓",
            "★ CBSE Solution: Peak EMF ε₀ = 628.3 V, Peak Current I₀ = 31.4 A, and Average Power Output ⟨P⟩ = 9.87 kW! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
