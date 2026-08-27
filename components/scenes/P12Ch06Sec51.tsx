/**
 * P12Ch06 · Section 51 — "AC generator: peak emf, instantaneous emf, and power"
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

export default function P12Ch06Sec51({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("AC Generator Power Relations: P(t) = ε₀ I₀ sin²(ωt) & ⟨P⟩ = (1/2) ε₀ I₀", "AC Generator Power Relations: P(t) = ε₀ I₀ sin²(ωt) & ⟨P⟩ = (1/2) ε₀ I₀")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: INSTANTANEOUS EMF & CURRENT FORMULAS */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("INSTANTANEOUS EMF & CURRENT FORMULAS", "INSTANTANEOUS EMF & CURRENT FORMULAS")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Instantaneous Voltage: ε(t) = ε_0 sin(ωt).
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Instantaneous Current: I(t) = ε(t) / R = I_0 sin(ωt).
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Peak Quantities: Peak EMF ε_0 = N B A ω and Peak Current I_0 = ε_0 / R.
          </T>

          <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. In-Phase Behavior: Voltage and current reach peaks simultaneously!
          </T>
        </Fade>

        <Fade on={beat >= 5}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Pure resistive load circuit has zero phase difference)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: AVERAGE POWER OVER FULL CYCLE: ⟨P⟩ = (1/2) ε₀ I₀ */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("AVERAGE POWER OVER FULL CYCLE: ⟨P⟩ = (1/2) ε₀ I₀", "AVERAGE POWER OVER FULL CYCLE: ⟨P⟩ = (1/2) ε₀ I₀")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Instantaneous Power: P(t) = ε(t) × I(t) = ε_0 I_0 sin²(ωt).
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Cycle Integration: ⟨sin²(ωt)⟩ = ½.
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Average Power: ⟨P⟩ = ε_0 I_0 × ½ = ½ ε_0 I_0.
          </T>

          <Draw on={beat >= 7} delay={dl(7, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. RMS Relation: ⟨P⟩ = (ε_0 / √2) (I_0 / √2) = ε_rms I_rms!
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (RMS values represent equivalent DC heating power)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("PEAK VS AVERAGE POWER RECAP", "PEAK VS AVERAGE POWER RECAP")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Peak Power: P_peak = ε_0 I_0 = ε_0² / R (maximum instantaneous dissipation).
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Average Power: ⟨P⟩ = ½ P_peak = ε_rms I_rms = ε_rms² / R (average work per cycle).
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Instantaneous Power P(t) = ε₀ I₀ sin²(ωt) and Average Power ⟨P⟩ = ½ ε₀ I₀ = ε_rms I_rms! ✓",
            "★ Instantaneous Power P(t) = ε₀ I₀ sin²(ωt) and Average Power ⟨P⟩ = ½ ε₀ I₀ = ε_rms I_rms! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
