/**
 * P12Ch06 · Section 53 — "Board derivation: the sinusoidal EMF of an AC generator"
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

export default function P12Ch06Sec53({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Board Derivation: AC Generator Sinusoidal EMF ε(t) = NBAω sin(ωt)", "Board Derivation: AC Generator Sinusoidal EMF ε(t) = NBAω sin(ωt)")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: STEP 1 & 2: FLUX N Φ_B(t) & FARADAY DIFFERENTIATION */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("STEP 1 & 2: FLUX N Φ_B(t) & FARADAY DIFFERENTIATION", "STEP 1 & 2: FLUX N Φ_B(t) & FARADAY DIFFERENTIATION")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Armature Orientation: Coil rotates at angular velocity ω (θ = ωt).
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Total Linked Flux: N Φ_B(t) = N (B · A) = N B A cos(ωt).
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Faraday-Lenz Derivative: ε(t) = -d/dt [ N B A cos(ωt) ].
          </T>

          <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Chain Rule: d/dt [cos(ωt)] = -ω sin(ωt).
          </T>
        </Fade>

        <Fade on={beat >= 5}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Minus sign from Lenz's law combines with calculus minus sign)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: STEP 3 & 4: ε(t) = N B A ω sin(ωt) = ε₀ sin(ωt) */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("STEP 3 & 4: ε(t) = N B A ω sin(ωt) = ε₀ sin(ωt)", "STEP 3 & 4: ε(t) = N B A ω sin(ωt) = ε₀ sin(ωt)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Exact Derivative Result: ε(t) = N B A ω sin(ωt).
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Peak EMF Definition: Let ε_0 = N B A ω = N B A (2πf).
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Final Equation: ε(t) = ε_0 sin(ωt).
          </T>

          <Draw on={beat >= 7} delay={dl(7, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Sinusoidal AC Output: Alternating EMF with frequency f!
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Peak EMF ε_0 is proportional to N, B, A, and spin frequency f)
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
            Step 1: Write flux equation Φ = B A cos(ωt) (1 mark).
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Step 2: Differentiate via Faraday's Law ε = -N (dΦ/dt) → ε = N B A ω sin(ωt) = ε_0 sin(ωt) (2 marks).
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Derived Proof: AC Generator EMF ε(t) = NBAω sin(ωt) with Peak amplitude ε₀ = NBAω! ✓",
            "★ Derived Proof: AC Generator EMF ε(t) = NBAω sin(ωt) with Peak amplitude ε₀ = NBAω! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
