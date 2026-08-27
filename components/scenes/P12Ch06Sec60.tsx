/**
 * P12Ch06 · Section 60 — "Maxwell's correction: the displacement current that completes the picture"
 * Subtopic: Advanced EMI, Maxwell & Chapter Synthesis
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

export default function P12Ch06Sec60({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Maxwell's Displacement Current I_d = ε₀ (dΦ_E / dt)", "Maxwell's Displacement Current I_d = ε₀ (dΦ_E / dt)")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: DISPLACEMENT CURRENT FORMULA: I_d = ε₀ (dΦ_E / dt) */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("DISPLACEMENT CURRENT FORMULA: I_d = ε₀ (dΦ_E / dt)", "DISPLACEMENT CURRENT FORMULA: I_d = ε₀ (dΦ_E / dt)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Electric Flux: Φ_E = ∬ E · dA inside capacitor gap.
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Definition of I_d: Displacement current I_d = ε_0 (dΦ_E / dt).
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Parallel Plate Capacitor: Φ_E = E A = (Q / ε_0 A) A = Q / ε_0.
          </T>

          <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Exact Continuity: I_d = ε_0 (d/dt)(Q / ε_0) = dQ / dt = I_c!
          </T>
        </Fade>

        <Fade on={beat >= 5}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Displacement current between plates equals conduction current in wire)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: AMPERE-MAXWELL LAW: ∮ B · dr = μ₀ (I_c + I_d) */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("AMPERE-MAXWELL LAW: ∮ B · dr = μ₀ (I_c + I_d)", "AMPERE-MAXWELL LAW: ∮ B · dr = μ₀ (I_c + I_d)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Original Ampere Law Inconsistency: ∮ B · dr = μ_0 I_c fails for capacitor gap.
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Maxwell's Correction: Add displacement current I_d to conduction current I_c.
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Generalized Equation: ∮ B · dr = μ_0 I_c + μ_0 ε_0 (dΦ_E / dt).
          </T>

          <Draw on={beat >= 7} delay={dl(7, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Perfect Continuity: Total enclosed current I_total = I_c + I_d is constant!
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Where I_c exists, I_d = 0; where I_d exists, I_c = 0)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("ELECTROMAGNETIC SYMMETRY RECAP", "ELECTROMAGNETIC SYMMETRY RECAP")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Dual Production: Changing B creates E (Faraday's Law); Changing E creates B (Displacement Current).
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Light Waves: This mutual induction enables self-propagating electromagnetic light waves in vacuum!
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Maxwell's Displacement Current I_d = ε₀ (dΦ_E/dt) completes Ampere's Law and proves that changing E fields generate B fields! ✓",
            "★ Maxwell's Displacement Current I_d = ε₀ (dΦ_E/dt) completes Ampere's Law and proves that changing E fields generate B fields! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
