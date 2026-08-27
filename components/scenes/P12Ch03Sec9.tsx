/**
 * P12Ch02 · Section 9 — "Resistance, resistivity and conductivity"
 * Beats (en [0,8,13,24,34,47,57,67]): 8 beats
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

export default function P12Ch03Sec9({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Resistance, resistivity and conductivity", "Resistance, resistivity and conductivity")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: MACROSCOPIC RESISTANCE & GEOMETRY */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("MACROSCOPIC RESISTANCE R = ρ L / A", "MACROSCOPIC RESISTANCE R = ρ L / A")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Geometry Dependence: Resistance R = (ρ L) / A (Proportional to length L)
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Cross-Section Area: Inversely proportional to area A.
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. SI Unit & Dimensions: Ohm [Ω] with dimensions [M L² T⁻³ A⁻²].
          </T>

          <Draw on={beat >= 2} delay={dl(2, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Extrinsic Property: R changes when wire is stretched or cut!
          </T>
        </Fade>

        <Fade on={beat >= 3}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Stretching a wire n times increases its resistance n² times!)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: MICROSCOPIC RESISTIVITY & CONDUCTIVITY */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 3} delay={dl(3, 0.2)} />
        <Fade on={beat >= 3} delay={dl(3, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("MICROSCOPIC RESISTIVITY ρ & CONDUCTIVITY σ", "MICROSCOPIC RESISTIVITY ρ & CONDUCTIVITY σ")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 3}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Microscopic Expression: ρ = m / (n e² τ) (Material Intrinsic property)
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Conductivity σ: Inverse of resistivity σ = 1 / ρ = (n e² τ) / m.
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Temp Coeff α: R_T = R_0 [ 1 + α (T − T_0) ].
          </T>

          <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Metals: α &gt; 0 (R rises with T); Semiconductors: α &lt; 0!
          </T>
        </Fade>

        <Fade on={beat >= 6}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Resistivity ρ is independent of shape and depends only on material & T)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("PROPERTY SUMMARY VERDICT", "PROPERTY SUMMARY VERDICT")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Resistance R depends on object shape (L, A); resistivity ρ depends ONLY on material (n, τ) & temperature.
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            For metals α &gt; 0 (ρ increases with T), while for semiconductors α &lt; 0 (ρ decreases with T).
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ R depends on shape (L, A); ρ depends ONLY on material (n, τ) & Temperature! ✓",
            "★ R depends on shape (L, A); ρ depends ONLY on material (n, τ) & Temperature! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
