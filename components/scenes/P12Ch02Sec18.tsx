/**
 * P12Ch02 · Section 18 — "Dipole torque and potential energy in a uniform field — formulas"
 * Subtopic: Potential Energy & External Fields
 * OPEN CHALKBOARD DESIGN WITH DIPOLE TORQUE DIAGRAM (NO CONTAINER BOXES):
 *  - Electric Dipole p at angle θ to Uniform Field E
 *  - Torque vector τ = p × E  (τ = p E sinθ)
 *  - Potential Energy U(θ) = - p · E = - p E cosθ
 *  - Work to rotate from θ₁ to θ₂: W_ext = p E (cosθ₁ - cosθ₂)
 *  - Stable Equilibrium (θ = 0°, U = -pE) vs Unstable Equilibrium (θ = 180°, U = +pE)
 */

import React from "react";
import { Circle, G, Line, Path } from 'react-native-svg';
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

export default function P12Ch02Sec18({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Rotating dipole angle animation
  const angle = Math.sin(Math.min(Math.PI / 2, currentTime * 0.8)) * 0.4 + 0.5;
  const px = 180 + Math.cos(angle) * 70;
  const py = 180 - Math.sin(angle) * 70;

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Dipole in Uniform Field: Torque τ = pE sinθ & Potential Energy U = −pE cosθ", "Dipole in Uniform Field: Torque τ = pE sinθ & Potential Energy U = −pE cosθ")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: DIPOLE TORQUE IN UNIFORM FIELD */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("DIPOLE p AT ANGLE θ IN UNIFORM FIELD E", "DIPOLE p AT ANGLE θ IN UNIFORM FIELD E")}
          </T>
        </Fade>

        <Fade on={beat >= 1}>
          {/* Uniform Field Lines E pointing Right */}
          <Path d={arrowD(40, 100, 420, 100)} stroke={RED} strokeWidth={2.5} />
          <Path d={arrowD(40, 180, 420, 180)} stroke={RED} strokeWidth={2.5} />
          <Path d={arrowD(40, 260, 420, 260)} stroke={RED} strokeWidth={2.5} />
          <T x={435} y={185} size={14} fill={RED} weight={800} anchor="start">Field E</T>

          {/* Dipole Vector p */}
          <Line x1="180" y1="180" x2={px} y2={py} stroke={GREEN} strokeWidth={4} />
          <Circle cx={px} cy={py} r={7} fill={GREEN} />
          <T x={px + 12} y={py - 8} size={14} fill={GREEN} weight={800} anchor="start">p (Dipole)</T>

          {/* Angle θ arc */}
          <Path d="M 230 180 A 50 50 0 0 0 220 150" stroke={AMBER_DARK} strokeWidth={2} fill="none" />
          <T x={245} y={160} size={13} fill={AMBER_DARK} weight={800}>Angle θ</T>
        </Fade>

        {/* Free Floating Torque Formula */}
        <Fade on={beat >= 3}>
          <T x={230} y={278} anchor="middle" size={16} fill={RED} weight={800}>
            Torque Vector τ = p × E   (Magnitude τ = p E sinθ)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: POTENTIAL ENERGY U(θ) & ROTATIONAL WORK */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("POTENTIAL ENERGY U(θ) & WORK TO ROTATE", "POTENTIAL ENERGY U(θ) & WORK TO ROTATE")}
          </T>
        </Fade>

        {/* Floating Energy Formulas */}
        <Fade on={beat >= 4}>
          <T x={45} y={80} size={15} fill={GREEN} weight={800} anchor="start">
            1. Potential Energy: U(θ) = − p · E = − p E cosθ
          </T>

          <T x={45} y={125} size={15} fill={AMBER_DARK} weight={800} anchor="start">
            2. Work to Rotate θ₁ → θ₂: W_ext = p E (cosθ₁ − cosθ₂)
          </T>

          <T x={45} y={170} size={14} fill={INK} weight={800} anchor="start">
            3. Stable Equilibrium (θ = 0°): τ = 0, U_min = − p E
          </T>

          <T x={45} y={215} size={14} fill={RED} weight={800} anchor="start">
            4. Unstable Equilibrium (θ = 180°): τ = 0, U_max = + p E
          </T>
        </Fade>

        {/* Open Text Explanation */}
        <Fade on={beat >= 6}>
          <T x={45} y={265} anchor="start" size={13} fill={GREEN} weight={800}>
            Work to rotate from stable (0°) to unstable (180°) = 2 p E !
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("DIPOLE STABILITY MATRIX", "DIPOLE STABILITY MATRIX")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Stable: θ = 0° (Aligned with E, U = −pE)   |   Unstable: θ = 180° (Anti-aligned, U = +pE)
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Maximum torque occurs at θ = 90° (τ_max = pE, U = 0 V)!
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Dipole Dynamics Mastered: τ = pE sinθ, U = −pE cosθ, and W(θ₁→θ₂) = pE(cosθ₁ − cosθ₂)! ✓",
            "★ Dipole Dynamics Mastered: τ = pE sinθ, U = −pE cosθ, and W(θ₁→θ₂) = pE(cosθ₁ − cosθ₂)! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
