/**
 * P12Ch06 · Section 45 — "JEE Advanced level: using reciprocity to dodge a horrid integral"
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

export default function P12Ch06Sec45({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("JEE Advanced: Reciprocity Shortcut for Concentric Square & Circular Loops", "JEE Advanced: Reciprocity Shortcut for Concentric Square & Circular Loops")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: STEP 1: PASS CURRENT I IN LARGE SQUARE LOOP (SIDE L) */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("STEP 1: PASS CURRENT I IN LARGE SQUARE LOOP (SIDE L)", "STEP 1: PASS CURRENT I IN LARGE SQUARE LOOP (SIDE L)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Reciprocity Trick: Drive current I in outer square (side L).
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Biot-Savart at Center: B_side = (μ_0 I / 4π L/2) (2 sin 45°).
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Total Field B: B_center = 4 × [ μ_0 I / (2π L) ] × √2 = 2√2 μ_0 I / (π L).
          </T>

          <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Field Uniformity: Since r ≪ L, B is constant over small circle!
          </T>
        </Fade>

        <Fade on={beat >= 5}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Avoids complex non-uniform field integral of small circular loop)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: STEP 2: Φ₂₁ = B (π r²) ⇒ M = 2√2 μ₀ r² / L */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("STEP 2: Φ₂₁ = B (π r²) ⇒ M = 2√2 μ₀ r² / L", "STEP 2: Φ₂₁ = B (π r²) ⇒ M = 2√2 μ₀ r² / L")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Inner Loop Area: A_inner = π r².
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Flux Linkage: Φ₂₁ = [ 2√2 μ_0 I / (π L) ] × (π r²).
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Simplify Flux: π cancels out ⇒ Φ₂₁ = (2√2 μ_0 r² / L) I.
          </T>

          <Draw on={beat >= 7} delay={dl(7, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Apply Reciprocity M₁₂ = M₂₁: M = 2√2 μ_0 r² / L!
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Horrid integral bypassed in under 30 seconds!)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("JEE ADVANCED RECIPROCITY RULE", "JEE ADVANCED RECIPROCITY RULE")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Master Strategy: Always send current through the larger / outer geometry first where field B is easily calculated at center.
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Universal Principle: M₂₁ = M₁₂ holds universally regardless of complex loop shapes or orientations.
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ JEE Advanced Result: Mutual Inductance M = 2√2 μ₀ r² / L derived effortlessly using Reciprocity! ✓",
            "★ JEE Advanced Result: Mutual Inductance M = 2√2 μ₀ r² / L derived effortlessly using Reciprocity! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
