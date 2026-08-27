/**
 * P12Ch02 · Section 57 — "Deriving the equivalent capacitance for series and parallel"
 * Subtopic: Series & Parallel Combinations Derivations
 * OPEN CHALKBOARD DESIGN WITH DERIVATION PROOFS (NO CONTAINER BOXES):
 *  - Parallel Derivation: Total Charge Q = Q₁ + Q₂  =>  C_eq V = C₁ V + C₂ V  =>  C_eq = C₁ + C₂
 *  - Series Derivation: Total Voltage V = V₁ + V₂  =>  Q/C_eq = Q/C₁ + Q/C₂  =>  1/C_eq = 1/C₁ + 1/C₂
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

export default function P12Ch02Sec57({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Derivation: Rigorous Proof of Series & Parallel Equivalent Capacitance Formulae", "Derivation: Rigorous Proof of Series & Parallel Equivalent Capacitance Formulae")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: PARALLEL COMBINATION PROOF */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("PARALLEL PROOF (Q_total = Q₁ + Q₂)", "PARALLEL PROOF (Q_total = Q₁ + Q₂)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={INK} weight={800} anchor="start">
            1. Total Charge: Q = Q₁ + Q₂
          </T>

          <T x={45} y={125} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            2. Substitute Q_i = C_i V: C_eq V = C₁ V + C₂ V
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Divide by V: C_eq = C₁ + C₂  (Q.E.D.)
          </T>
        </Fade>

        {/* Free Floating Formula */}
        <Fade on={beat >= 3}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Parallel plates combine effective area: A_eff = A₁ + A₂)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: SERIES COMBINATION PROOF */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("SERIES PROOF (V_total = V₁ + V₂)", "SERIES PROOF (V_total = V₁ + V₂)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 4}>
          <T x={45} y={80} size={14} fill={INK} weight={800} anchor="start">
            1. Total Voltage: V = V₁ + V₂
          </T>

          <T x={45} y={125} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            2. Substitute V_i = Q / C_i: Q / C_eq = Q / C₁ + Q / C₂
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Divide by Q: 1 / C_eq = 1 / C₁ + 1 / C₂  (Q.E.D.)
          </T>
        </Fade>

        {/* Open Text Explanation */}
        <Fade on={beat >= 6}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Series plates combine effective spacing: d_eff = d₁ + d₂)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("PHYSICAL INTERPRETATION OF PROOF", "PHYSICAL INTERPRETATION OF PROOF")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Parallel plates act like a single larger plate of area (A₁ + A₂), boosting capacitance!
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Series plates act like a single capacitor with wider spacing (d₁ + d₂), reducing capacitance!
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Proof Completed: C_eq = C₁+C₂ (Area Addition) and 1/C_eq = 1/C₁+1/C₂ (Gap Addition) proven! ✓",
            "★ Proof Completed: C_eq = C₁+C₂ (Area Addition) and 1/C_eq = 1/C₁+1/C₂ (Gap Addition) proven! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
