/**
 * P12Ch02 · Section 19 — "Deriving the potential energy of a two-charge system"
 * Subtopic: Potential Energy & External Fields
 * OPEN CHALKBOARD DESIGN WITH TWO-CHARGE INTEGRAL PROOF (NO CONTAINER BOXES):
 *  - Bringing q₂ from ∞ to distance r₁₂ from q₁
 *  - Coulomb force F_E = k q₁ q₂ / x²
 *  - Calculus integration: U = W_ext = - ∫_∞^r₁₂ F_E dx = k q₁ q₂ / r₁₂
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

export default function P12Ch02Sec19({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Moving charge q2 from infinity towards q1
  const animPos = Math.min(1, currentTime * 0.28);
  const q2X = 440 - animPos * 200;

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Derivation: Two-Charge System Potential Energy U = kq₁q₂/r₁₂", "Derivation: Two-Charge System Potential Energy U = kq₁q₂/r₁₂")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: INTEGRATION AXIS & FORCE VECTORS */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("BRINGING q₂ FROM ∞ TO DISTANCE r₁₂ FROM q₁", "BRINGING q₂ FROM ∞ TO DISTANCE r₁₂ FROM q₁")}
          </T>
        </Fade>

        <Fade on={beat >= 1}>
          {/* Station Charge q1 */}
          <Circle cx={80} cy={180} r={22} fill="#ffe4e6" stroke={RED} strokeWidth={2.5} />
          <T x={80} y={187} size={18} fill={RED} weight={900}>+q₁</T>

          {/* Integration axis */}
          <Line x1="102" y1="180" x2="460" y2="180" stroke={INK} strokeWidth={2.5} />

          {/* Target distance r12 */}
          <Line x1="240" y1="150" x2="240" y2="210" stroke={GREEN} strokeWidth={2} strokeDasharray="4 4" />
          <T x={240} y={135} size={14} fill={GREEN} weight={800}>Final Position (r₁₂)</T>

          {/* Moving charge q2 */}
          <Circle cx={q2X} cy={180} r={12} fill={GREEN} />
          <T x={q2X} y={185} size={13} fill="#ffffff" weight={900}>+q₂</T>

          {/* Force Vectors F_E and F_ext */}
          <Path d={arrowD(q2X, 180, q2X + 45, 180)} stroke={RED} strokeWidth={2.5} />
          <T x={q2X + 25} y={162} size={12} fill={RED} weight={800}>F_E</T>

          <Path d={arrowD(q2X, 180, q2X - 45, 180)} stroke={GREEN} strokeWidth={2.5} />
          <T x={q2X - 35} y={162} size={12} fill={GREEN} weight={800}>F_ext</T>
        </Fade>

        {/* Free Floating Differential Work */}
        <Fade on={beat >= 3}>
          <T x={240} y={278} anchor="middle" size={16} fill={INK} weight={800}>
            dW = F_ext · dx = − F_E dx = − (k q₁ q₂ / x²) dx
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: CALCULUS PROOF STEPS */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("STEP-BY-STEP INTEGRAL DERIVATION", "STEP-BY-STEP INTEGRAL DERIVATION")}
          </T>
        </Fade>

        {/* Floating Calculus Equations */}
        <Fade on={beat >= 4}>
          <T x={45} y={80} size={15} fill={INK} weight={800} anchor="start">
            1. Total Work W = ∫_∞^r₁₂ dW = − ∫_∞^r₁₂ (k q₁ q₂ / x²) dx
          </T>

          <T x={45} y={125} size={15} fill={AMBER_DARK} weight={800} anchor="start">
            2. Integrate: W = − k q₁ q₂ [ − 1 / x ]_∞^r₁₂
          </T>

          <T x={45} y={170} size={15} fill={GREEN} weight={800} anchor="start">
            3. Apply Limits: W = k q₁ q₂ ( 1/r₁₂ − 1/∞ ) = k q₁ q₂ / r₁₂
          </T>

          <Draw on={beat >= 4} delay={dl(4, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={17} fill={RED} weight={800} anchor="start">
            4. U = W_ext = k q₁ q₂ / r₁₂  (Q.E.D.)
          </T>
        </Fade>

        {/* Open Text Explanation */}
        <Fade on={beat >= 6}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            Valid for both positive & negative charges — include proper signs (+ / −)!
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("DERIVATION VERDICT & SYSTEM RECAP", "DERIVATION VERDICT & SYSTEM RECAP")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Electrostatic potential energy is stored in the electric field surrounding the pair!
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Reference zero at infinite separation: U(∞) = 0 J!
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Proof Completed: Potential energy of two point charges U = k q₁ q₂ / r₁₂ via calculus integration! ✓",
            "★ Proof Completed: Potential energy of two point charges U = k q₁ q₂ / r₁₂ via calculus integration! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
