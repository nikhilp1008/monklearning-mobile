/**
 * P12Ch05 · Section 5 — "Dipole moment, torque, potential energy and work"
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

export default function P12Ch05Sec5({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Dipole Moment, Torque, Potential Energy & Work", "Dipole Moment, Torque, Potential Energy & Work")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: TORQUE ON A MAGNETIC DIPOLE */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("TORQUE ON A MAGNETIC DIPOLE", "TORQUE ON A MAGNETIC DIPOLE")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Vector Torque: τ = m × B (cross product of dipole &amp; field).
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Magnitude: τ = m B sin θ (where θ is angle between m and B).
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Max &amp; Zero Torque: Max τ = mB at θ = 90°; Zero at θ = 0° or 180°.
          </T>

          <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Restoring Effect: Torque tries to align dipole m parallel to B!
          </T>
        </Fade>

        <Fade on={beat >= 5}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Identical formula to electric dipole torque τ = p × E)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: POTENTIAL ENERGY OF A DIPOLE */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("POTENTIAL ENERGY OF A DIPOLE", "POTENTIAL ENERGY OF A DIPOLE")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Energy Equation: U = - m · B = - m B cos θ.
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Stable Equilibrium: Min U = -mB at θ = 0° (m parallel to B).
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Unstable Equilibrium: Max U = +mB at θ = 180° (m anti-parallel).
          </T>

          <Draw on={beat >= 7} delay={dl(7, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Zero Potential Energy: U = 0 at θ = 90° (m perpendicular to B).
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Reference position for zero potential energy is chosen at θ = 90°)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("WORK DONE IN ROTATING DIPOLE", "WORK DONE IN ROTATING DIPOLE")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Work Formula: W = U_2 - U_1 = m B (cos θ_1 - cos θ_2) when rotated from θ_1 to θ_2.
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Special Case: Work to rotate from stable (θ_1 = 0°) to θ_2 is W = m B (1 - cos θ).
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Torque τ = mB sin θ | Potential energy U = −mB cos θ | Work W = mB(cos θ₁ − cos θ₂)! ✓",
            "★ Torque τ = mB sin θ | Potential energy U = −mB cos θ | Work W = mB(cos θ₁ − cos θ₂)! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
