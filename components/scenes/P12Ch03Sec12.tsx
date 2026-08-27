/**
 * P12Ch02 · Section 12 — "CBSE level: calculating resistance and current density"
 * Beats (en [0,8,18,29,41,53,65,77]): 8 beats
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

export default function P12Ch03Sec12({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("CBSE Level: Resistance & Current Density Numerical", "CBSE Level: Resistance & Current Density Numerical")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: MACROSCOPIC METHOD */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("MACROSCOPIC SOLUTION METHOD (V/R)", "MACROSCOPIC SOLUTION METHOD (V/R)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Area: A = π r² = 3.14 × (10⁻³)² = 3.14 × 10⁻⁶ m²
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Resistance R = (ρ L) / A = (1.7×10⁻⁸ × 2) / 3.14×10⁻⁶ = 0.0108 Ω.
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Current: I = V / R = 3.4 / 0.0108 ≈ 315 A.
          </T>

          <Draw on={beat >= 3} delay={dl(3, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Macroscopic J = I / A = 315 / 3.14×10⁻⁶ = 1.0 × 10⁸ A/m²
          </T>
        </Fade>

        <Fade on={beat >= 4}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Given: L = 2 m, r = 1 mm, ρ = 1.7×10⁻⁸ Ω·m, V = 3.4 V)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: MICROSCOPIC METHOD */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("MICROSCOPIC VERIFICATION METHOD (E/ρ)", "MICROSCOPIC VERIFICATION METHOD (E/ρ)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Electric Field: E = V / L = 3.4 V / 2 m = 1.7 V/m
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Ohm's Vector Form: J = σ E = E / ρ
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Substitute: J = 1.7 / (1.7 × 10⁻⁸) = 1.0 × 10⁸ A/m².
          </T>

          <Draw on={beat >= 6} delay={dl(6, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Verdict: Exact 100% Match with Macroscopic result!
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Direct J calculation via E/ρ avoids intermediate R & I rounding)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("NUMERICAL DUAL-METHOD VERDICT", "NUMERICAL DUAL-METHOD VERDICT")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Calculating J via total current (J = I/A = 1.0×10⁸ A/m²) matches local field method (J = E/ρ = 1.0×10⁸ A/m²).
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Both macroscopic V=IR and microscopic J=σE frameworks give flawless consistency.
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Both macroscopic (V/R) and microscopic (E/ρ) methods give identical J! ✓",
            "★ Both macroscopic (V/R) and microscopic (E/ρ) methods give identical J! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
