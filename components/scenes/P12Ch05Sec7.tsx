/**
 * P12Ch05 · Section 7 — "Derivation: the axial field from an equivalent solenoid"
 * Subtopic: Bar Magnet, Magnetic Field Lines and Dipole Moment
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

export default function P12Ch05Sec7({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Derivation: Axial Field from an Equivalent Solenoid", "Derivation: Axial Field from an Equivalent Solenoid")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: STEP 1: FIELD FROM CIRCULAR ELEMENT dz */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("STEP 1: FIELD FROM CIRCULAR ELEMENT dz", "STEP 1: FIELD FROM CIRCULAR ELEMENT dz")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Elementary Ring dz: Contains n dz turns carrying current I.
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Ring B-Field: dB = [μ_0 n dz I a²] / [2 ((x - z)² + a²)^(3/2)].
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Far-Field Limit: For x ≫ a and x ≫ z, denominator simplifies to 2 x³.
          </T>

          <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Simplified Element: dB ≈ [μ_0 n I a² dz] / [2 x³]!
          </T>
        </Fade>

        <Fade on={beat >= 5}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Position z of element dz ranges from -l to +l along solenoid axis)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: STEP 2: INTEGRATE OVER SOLENOID LENGTH */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("STEP 2: INTEGRATE OVER SOLENOID LENGTH", "STEP 2: INTEGRATE OVER SOLENOID LENGTH")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Integration Bounds: B = ∫ dB from z = -l to z = +l.
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Integrated Sum: B = [μ_0 n I a² (2l)] / [2 x³].
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Dipole Moment Swap: Total turns N = n · 2l; Moment m = N I (π a²).
          </T>

          <Draw on={beat >= 7} delay={dl(7, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Final Result: B_axial = (μ_0 / 4π) · (2 m / x³)!
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Identical to the axial field of a bar magnet of dipole moment m)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("FINAL DERIVED CONCLUSION", "FINAL DERIVED CONCLUSION")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Integration mathematically proves that a finite solenoid is physically identical to a bar magnet!
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Use m = N I A for solenoid calculations and B_axial = (μ_0 / 4π) (2m / x³) for far axial fields.
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Integration yields B_axial = (μ0/4π)(2m/x³), proving a solenoid is a bar magnet! ✓",
            "★ Integration yields B_axial = (μ0/4π)(2m/x³), proving a solenoid is a bar magnet! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
