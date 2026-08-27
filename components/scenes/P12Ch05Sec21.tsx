/**
 * P12Ch05 · Section 21 — "Derivation: where the factor of two in the dip relation comes from"
 * Subtopic: Earth's Magnetism
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

export default function P12Ch05Sec21({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Derivation: Origin of Factor 2 in tan I = 2 tan λ", "Derivation: Origin of Factor 2 in tan I = 2 tan λ")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: STEP 1: DIPOLE FIELD COMPONENTS AT LATITUDE λ */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("STEP 1: DIPOLE FIELD COMPONENTS AT LATITUDE λ", "STEP 1: DIPOLE FIELD COMPONENTS AT LATITUDE λ")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Radial Vector B_r: B_V = (μ_0 / 4π) (2m sin λ / r³) (vertical).
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Transverse Vector B_θ: B_H = (μ_0 / 4π) (m cos λ / r³) (horizontal).
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Dip Definition: tan I = B_V / B_H = B_r / B_θ.
          </T>

          <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Ratio Setup: tan I = [(μ_0/4π)(2m sin λ/r³)] / [(μ_0/4π)(m cos λ/r³)]!
          </T>
        </Fade>

        <Fade on={beat >= 5}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Radial field has factor 2 because it acts along dipole magnetic axis)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: STEP 2: TAKE THE RATIO B_V / B_H */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("STEP 2: TAKE THE RATIO B_V / B_H", "STEP 2: TAKE THE RATIO B_V / B_H")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Cancel Constants: Permeability factor (μ_0 / 4π) cancels.
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Cancel Geometry: Dipole moment m and distance r³ cancel.
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Remaining Terms: Ratio simplifies to (2 sin λ) / (cos λ).
          </T>

          <Draw on={beat >= 7} delay={dl(7, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Trig Identity: (sin λ / cos λ) = tan λ!
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Factor 2 survives because axial field is twice equatorial field)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("FINAL DERIVED DIP RELATION", "FINAL DERIVED DIP RELATION")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Result: tan I = 2 (sin λ / cos λ) = 2 tan λ.
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Physical Meaning: Dip angle I grows much faster than latitude λ due to dipole field geometry.
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Factor 2 in tan I = 2 tan λ comes directly from the 2:1 ratio of dipole radial:transverse fields! ✓",
            "★ Factor 2 in tan I = 2 tan λ comes directly from the 2:1 ratio of dipole radial:transverse fields! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
