/**
 * P12Ch02 · Section 15 — "Worked example: relaxation time and mobility"
 * Beats (en [0,10,24,32,40,52,67,77]): 8 beats
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

export default function P12Ch03Sec15({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("JEE Main Level: Relaxation time & mobility", "JEE Main Level: Relaxation time & mobility")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: RELAXATION TIME COMPUTATION */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("RELAXATION TIME τ COMPUTATION", "RELAXATION TIME τ COMPUTATION")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Master Relation: ρ = m / (n e² τ)  ⇒  τ = m / (n e² ρ)
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Given Constants: m = 9.1×10⁻³¹ kg, n = 8.5×10²⁸ m⁻³.
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Material Values: e² = 2.56×10⁻³⁸ C², ρ = 1.7×10⁻⁸ Ω·m.
          </T>

          <Draw on={beat >= 3} delay={dl(3, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Resulting τ ≈ 2.47 × 10⁻¹⁴ s ≈ 25 femtoseconds!
          </T>
        </Fade>

        <Fade on={beat >= 4}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Electrons collide with lattice ions once every ~25 femtoseconds)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: MOBILITY COMPUTATION */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("ELECTRON MOBILITY μ COMPUTATION", "ELECTRON MOBILITY μ COMPUTATION")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Mobility Formula: μ = |v_d| / E = (e τ) / m
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Substitute τ: μ = (1.6×10⁻¹⁹ × 2.47×10⁻¹⁴) / (9.1×10⁻³¹)
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Calculate: μ ≈ 4.34 × 10⁻³ m² / (V·s).
          </T>

          <Draw on={beat >= 6} delay={dl(6, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Alternate check: μ = 1 / (n e ρ) = 4.34 × 10⁻³ m²/(V·s)!
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Identical mobility value derived via microscopic drift and resistivity)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("ORDER OF MAGNITUDE VERDICT", "ORDER OF MAGNITUDE VERDICT")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            In copper, relaxation time τ ~ 10⁻¹⁴ s (femtosecond scale) and mobility μ ~ 4×10⁻³ m²/(V·s).
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Extremely frequent lattice collisions limit electron drift velocity while enabling high conductivity.
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Order-of-magnitude check: τ ~ 10⁻¹⁴ s, μ ~ 4×10⁻³ m²/(V·s). Passes for copper! ✓",
            "★ Order-of-magnitude check: τ ~ 10⁻¹⁴ s, μ ~ 4×10⁻³ m²/(V·s). Passes for copper! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
