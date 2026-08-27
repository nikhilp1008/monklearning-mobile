/**
 * P12Ch02 · Section 23 — "JEE Main: released charge, conservation of energy"
 * Subtopic: Potential Energy & External Fields
 * OPEN CHALKBOARD DESIGN WITH ACCELERATING CHARGE TRAJECTORY (NO CONTAINER BOXES):
 *  - Fixed charge +q₁ at origin
 *  - Charge +q₂ (mass m) released from rest at distance r₁
 *  - Accelerates outward to distance r₂ under Coulomb repulsion
 *  - Conservation of energy: 0 + k q₁ q₂ / r₁ = ½ m v² + k q₁ q₂ / r₂
 *  - Velocity formula: v = √[ (2 k q₁ q₂ / m) (1/r₁ - 1/r₂) ]
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

export default function P12Ch02Sec23({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Accelerated charge motion from r1 to r2
  const animR = Math.min(1, currentTime * 0.36);
  const q2X = 180 + animR * 200;

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("JEE Main: Released Charge Speed via Energy Conservation v = √[(2k q₁ q₂ / m)(1/r₁ − 1/r₂)]", "JEE Main: Released Charge Speed via Energy Conservation v = √[(2k q₁ q₂ / m)(1/r₁ − 1/r₂)]")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: PHYSICAL CHARGE MOTION DIAGRAM */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("CHARGE RELEASED FROM REST (r₁ → r₂)", "CHARGE RELEASED FROM REST (r₁ → r₂)")}
          </T>
        </Fade>

        <Fade on={beat >= 1}>
          {/* Fixed charge +q1 */}
          <Circle cx={80} cy={165} r={22} fill="#ffe4e6" stroke={RED} strokeWidth={2.5} />
          <T x={80} y={172} size={16} fill={RED} weight={900}>+q₁</T>
          <T x={80} y={128} size={13} fill={RED} weight={800}>Fixed Origin</T>

          {/* Motion axis */}
          <Line x1="102" y1="165" x2="450" y2="165" stroke={INK} strokeWidth={2} />

          {/* Initial position r1 */}
          <Line x1="180" y1="150" x2="180" y2="180" stroke={AMBER_DARK} strokeWidth={2.5} />
          <T x={180} y={135} size={13} fill={AMBER_DARK} weight={800}>r₁ (v = 0)</T>

          {/* Final position r2 */}
          <Line x1="380" y1="150" x2="380" y2="180" stroke={GREEN} strokeWidth={2.5} />
          <T x={380} y={135} size={13} fill={GREEN} weight={800}>r₂ (Speed v)</T>

          {/* Accelerating charge +q2 */}
          <Circle cx={q2X} cy={165} r={11} fill={GREEN} />
          <T x={q2X} y={169} size={11} fill="#ffffff" weight={900}>+q₂</T>

          {/* Velocity arrow */}
          <Path d={arrowD(q2X, 165, q2X + 45, 165)} stroke={GREEN} strokeWidth={3} />
          <T x={q2X + 25} y={148} size={12} fill={GREEN} weight={900}>v(x)</T>
        </Fade>

        {/* Free Floating Formula */}
        <Fade on={beat >= 3}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            Electrostatic Repulsion converts ΔU into Kinetic Energy K = ½ m v²!
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: ENERGY CONSERVATION EQUATION STEPS */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("ENERGY CONSERVATION PROOF", "ENERGY CONSERVATION PROOF")}
          </T>
        </Fade>

        {/* Floating Derivation Steps */}
        <Fade on={beat >= 4}>
          <T x={45} y={80} size={15} fill={INK} weight={800} anchor="start">
            1. E_initial = 0 + k q₁ q₂ / r₁
          </T>

          <T x={45} y={125} size={15} fill={AMBER_DARK} weight={800} anchor="start">
            2. E_final = ½ m v² + k q₁ q₂ / r₂
          </T>

          <T x={45} y={170} size={15} fill={GREEN} weight={800} anchor="start">
            3. ½ m v² = k q₁ q₂ ( 1/r₁ − 1/r₂ )
          </T>

          <Draw on={beat >= 4} delay={dl(4, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={800} anchor="start">
            4. v = √ [ (2 k q₁ q₂ / m) ( 1/r₁ − 1/r₂ ) ]
          </T>
        </Fade>

        {/* Open Text Explanation */}
        <Fade on={beat >= 6}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (If released to ∞: v_escape = √ (2 k q₁ q₂ / m r₁) )
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("JEE MAIN EXAM TRICK", "JEE MAIN EXAM TRICK")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            If BOTH charges are free to move: Use Reduced Mass µ = m₁ m₂ / (m₁ + m₂)!
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Relative separation velocity v_rel = √ [ (2 k q₁ q₂ / µ) (1/r₁ − 1/r₂) ]!
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ JEE Main Formula Mastered: Speed v = √[(2k q₁ q₂ / m)(1/r₁ − 1/r₂)] via Conservation of Energy! ✓",
            "★ JEE Main Formula Mastered: Speed v = √[(2k q₁ q₂ / m)(1/r₁ − 1/r₂)] via Conservation of Energy! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
