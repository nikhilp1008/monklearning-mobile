/**
 * P12Ch06 · Section 43 — "NEET speed trap: the geometric mean, not the sum"
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

export default function P12Ch06Sec43({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("NEET Speed Trap: Mutual Inductance M = √(L₁ L₂) is Geometric Mean!", "NEET Speed Trap: Mutual Inductance M = √(L₁ L₂) is Geometric Mean!")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: TIGHT COUPLING (k = 1): M = √(L₁ L₂) */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("TIGHT COUPLING (k = 1): M = √(L₁ L₂)", "TIGHT COUPLING (k = 1): M = √(L₁ L₂)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Coupling Coefficient: Defined as k = M / √(L₁ L₂), where 0 ≤ k ≤ 1.
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. 100% Flux Linkage: Under tight coupling, k = 1.
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Master Formula: M = k √(L₁ L₂) ⇒ M = √(L₁ L₂).
          </T>

          <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Key Definition: M is the GEOMETRIC MEAN of L₁ and L₂!
          </T>
        </Fade>

        <Fade on={beat >= 5}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Never take arithmetic mean (L₁ + L₂)/2 or simple sum!)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: NUMERICAL TRAP: L₁ = 4 mH, L₂ = 9 mH */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("NUMERICAL TRAP: L₁ = 4 mH, L₂ = 9 mH", "NUMERICAL TRAP: L₁ = 4 mH, L₂ = 9 mH")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Given Self-Inductances: L₁ = 4 mH and L₂ = 9 mH.
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Apply Geometric Mean: M = √(4 × 9) = √36 = 6 mH.
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Trap Option A: (4 + 9)/2 = 6.5 mH (Arithmetic Mean - WRONG!).
          </T>

          <Draw on={beat >= 7} delay={dl(7, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Correct Answer: M = 6 mH (Geometric Mean - CORRECT)!
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Geometric mean is strictly smaller than arithmetic mean for distinct values)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("NEET 5-SECOND SHORTCUT", "NEET 5-SECOND SHORTCUT")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Maximum Upper Bound: Maximum mutual inductance M_max for any two coils is ALWAYS √(L₁ L₂).
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            General Case (k &lt; 1): M = k √(L₁ L₂) &lt; √(L₁ L₂) (for loose or perpendicular coupling).
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ NEET Speed Trap: Maximum mutual inductance M = √(L₁ L₂) is the GEOMETRIC MEAN of self-inductances! ✓",
            "★ NEET Speed Trap: Maximum mutual inductance M = √(L₁ L₂) is the GEOMETRIC MEAN of self-inductances! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
