/**
 * P12Ch05 · Section 14 — "Advanced: the dipole field at a general angle"
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

export default function P12Ch05Sec14({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Advanced: Magnetic Field at General Angle θ", "Advanced: Magnetic Field at General Angle θ")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: MAGNITUDE AT GENERAL ANGLE θ */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("MAGNITUDE AT GENERAL ANGLE θ", "MAGNITUDE AT GENERAL ANGLE θ")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Resolve Dipole: m_radial = m cos θ ; m_transverse = m sin θ.
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Field Components: B_r = (μ_0/4π)(2m cos θ/r³) ; B_θ = (μ_0/4π)(m sin θ/r³).
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Resultant: B = √(B_r² + B_θ²) = (μ_0 m / 4π r³) √(4 cos² θ + sin² θ).
          </T>

          <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. General Formula: B = (μ_0 m / 4π r³) √(1 + 3 cos² θ)!
          </T>
        </Fade>

        <Fade on={beat >= 5}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Valid at any point (r, θ) in the far-field region of a short dipole)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: FIELD DIRECTION ANGLE α WITH RADIAL VECTOR */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("FIELD DIRECTION ANGLE α WITH RADIAL VECTOR", "FIELD DIRECTION ANGLE α WITH RADIAL VECTOR")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Tangent of Angle α: tan α = B_θ / B_r.
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Ratio Simplification: tan α = [m sin θ] / [2 m cos θ] = (1/2) tan θ.
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Angle Relation: tan α = (1 / 2) tan θ gives direction with vector r.
          </T>

          <Draw on={beat >= 7} delay={dl(7, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Total Angle with Axis: φ = θ + α (angle with dipole axis)!
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (At θ = 0°: α = 0° ⇒ φ = 0°; At θ = 90°: α = 90° ⇒ φ = 180°)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("SPECIAL LIMIT CHECKS", "SPECIAL LIMIT CHECKS")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Axial Check (θ = 0°): cos θ = 1 ⇒ B = (μ_0 / 4π) (2m / r³) (Axial formula recovered!).
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Equatorial Check (θ = 90°): cos θ = 0 ⇒ B = (μ_0 / 4π) (m / r³) (Equatorial formula recovered!).
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ General dipole field B = (μ0/4π)(m/r³)√(1 + 3 cos² θ) with tan α = (1/2) tan θ! ✓",
            "★ General dipole field B = (μ0/4π)(m/r³)√(1 + 3 cos² θ) with tan α = (1/2) tan θ! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
