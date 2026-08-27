/**
 * P12Ch02 · Section 20 — "Deriving the potential energy of a dipole in a uniform field"
 * Subtopic: Potential Energy & External Fields
 * OPEN CHALKBOARD DESIGN WITH DIPOLE ROTATIONAL INTEGRAL PROOF (NO CONTAINER BOXES):
 *  - Dipole rotated by dθ against restoring torque τ = p E sinθ
 *  - Reference state: θ = 90° (π/2) where U(90°) = 0
 *  - Integration: U(θ) = ∫_90°^θ p E sinθ dθ = - p E cosθ = - p · E
 *  - Zero card box containers
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

export default function P12Ch02Sec20({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Derivation: Dipole Potential Energy U(θ) = −pE cosθ = −p · E", "Derivation: Dipole Potential Energy U(θ) = −pE cosθ = −p · E")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: ROTATIONAL TORQUE GEOMETRY */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("ROTATING DIPOLE AGAINST RESTORING TORQUE", "ROTATING DIPOLE AGAINST RESTORING TORQUE")}
          </T>
        </Fade>

        <Fade on={beat >= 1}>
          {/* Uniform E field lines */}
          <Path d={arrowD(40, 90, 420, 90)} stroke={RED} strokeWidth={2.5} />
          <Path d={arrowD(40, 170, 420, 170)} stroke={RED} strokeWidth={2.5} />
          <Path d={arrowD(40, 230, 420, 230)} stroke={RED} strokeWidth={2.5} />
          <T x={435} y={175} size={14} fill={RED} weight={800} anchor="start">Field E</T>

          {/* Reference position (90°) */}
          <Line x1="220" y1="170" x2="220" y2="80" stroke={MUTED} strokeWidth={2} strokeDasharray="4 4" />
          <T x={220} y={70} size={12} fill={MUTED} weight={800} anchor="middle">Ref θ = 90° (U = 0)</T>

          {/* Rotated Dipole Vector p */}
          <Line x1="220" y1="170" x2="310" y2="100" stroke={GREEN} strokeWidth={4} />
          <Circle cx={310} cy={100} r={7} fill={GREEN} />
          <T x={325} y={105} size={14} fill={GREEN} weight={800} anchor="start">p (Dipole)</T>

          {/* Rotational Torque Arrow τ */}
          <Path d="M 260 170 A 40 40 0 0 0 248 145" stroke={AMBER_DARK} strokeWidth={2.5} fill="none" />
          <T x={268} y={150} size={13} fill={AMBER_DARK} weight={800}>dθ</T>
        </Fade>

        {/* Free Floating Differential Work */}
        <Fade on={beat >= 3}>
          <T x={230} y={280} anchor="middle" size={16} fill={INK} weight={800}>
            dW = τ_ext dθ = p E sinθ dθ  (Work against torque!)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: CALCULUS PROOF STEPS */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("STEP-BY-STEP INTEGRATION FROM 90° TO θ", "STEP-BY-STEP INTEGRATION FROM 90° TO θ")}
          </T>
        </Fade>

        {/* Floating Calculus Equations */}
        <Fade on={beat >= 4}>
          <T x={45} y={80} size={15} fill={INK} weight={800} anchor="start">
            1. U(θ) = ∫ (p E sinθ) dθ from 90° to θ
          </T>

          <T x={45} y={125} size={15} fill={AMBER_DARK} weight={800} anchor="start">
            2. Integrate: U(θ) = p E [ − cosθ ] evaluated from 90° to θ
          </T>

          <T x={45} y={170} size={15} fill={GREEN} weight={800} anchor="start">
            3. Apply Limits: U(θ) = − p E ( cosθ − cos 90° ) = − p E cosθ
          </T>

          <Draw on={beat >= 4} delay={dl(4, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={17} fill={RED} weight={800} anchor="start">
            4. U(θ) = − p · E  (Vector Dot Product!)
          </T>
        </Fade>

        {/* Open Text Explanation */}
        <Fade on={beat >= 6}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Reference U = 0 chosen at θ = 90° where torque is maximum)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("WORK REQUIRED FOR ORIENTATION CHANGE", "WORK REQUIRED FOR ORIENTATION CHANGE")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Work done in turning dipole from θ₁ to θ₂: W_ext = U(θ₂) − U(θ₁) = p E (cosθ₁ − cosθ₂)!
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            To rotate from 0° (stable) to 180° (unstable): W_ext = pE(1 - (-1)) = +2 pE!
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Dipole Derivation Mastered: U(θ) = −pE cosθ = −p · E derived via angular torque integration! ✓",
            "★ Dipole Derivation Mastered: U(θ) = −pE cosθ = −p · E derived via angular torque integration! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
