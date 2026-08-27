/**
 * P12Ch02 · Section 9 — "Worked example: potential and work near a small charged sphere"
 * Subtopic: Electrostatic Potential & Equipotentials
 * OPEN CHALKBOARD DESIGN WITH SPHERE WORKED EXAMPLE (NO CONTAINER BOXES):
 *  - Small charged sphere Q = +10 µC
 *  - Point A (r_A = 0.1 m) and Point B (r_B = 0.2 m)
 *  - Step 1: Calculate V_A and V_B
 *  - Step 2: Calculate Work W_ext = q₀ (V_B - V_A)
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

export default function P12Ch02Sec9({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Moving test charge from A to B (clamped)
  const animAB = Math.min(1, currentTime * 0.32);
  const qx = 180 + animAB * 160;

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Worked Example: Potential & Work Near Charged Sphere (Q = 10 µC)", "Worked Example: Potential & Work Near Charged Sphere (Q = 10 µC)")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: PHYSICAL SETUP DIAGRAM */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={25} cy={22} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={26} size={15} fill={RED} weight={800} anchor="start">
            {t("PHYSICAL SETUP: CHARGED SPHERE & POINTS A, B", "PHYSICAL SETUP: CHARGED SPHERE & POINTS A, B")}
          </T>
        </Fade>

        <Fade on={beat >= 1}>
          {/* Charged Sphere Q */}
          <Circle cx={80} cy={165} r={28} fill="#ffe4e6" stroke={RED} strokeWidth={2.5} />
          <T x={80} y={171} size={15} fill={RED} weight={900}>+10 µC</T>
          <T x={80} y={125} size={12} fill={RED} weight={700}>Sphere (Q)</T>

          {/* Radial axis */}
          <Line x1="108" y1="165" x2="440" y2="165" stroke={INK} strokeWidth={2} />

          {/* Point A at r_A = 0.1 m */}
          <Circle cx={180} cy={165} r={7} fill={AMBER_DARK} />
          <T x={180} y={145} size={13} fill={AMBER_DARK} weight={800}>A (0.1 m)</T>

          {/* Point B at r_B = 0.2 m */}
          <Circle cx={340} cy={165} r={7} fill={GREEN} />
          <T x={340} y={145} size={13} fill={GREEN} weight={800}>B (0.2 m)</T>

          {/* Moving test charge q0 = +20 nC */}
          <Circle cx={qx} cy={165} r={9} fill={GREEN} />
          <T x={qx} y={188} size={11} fill={GREEN} weight={800}>+20 nC</T>

          {/* Arrow showing path A -> B */}
          <Path d={arrowD(195, 205, 325, 205)} stroke={GREEN} strokeWidth={2.5} />
          <T x={260} y={225} size={12} fill={GREEN} weight={800}>Displacement A → B</T>
        </Fade>

        {/* Free Floating Problem Statement (Spacious, No Box) */}
        <Fade on={beat >= 2}>
          <T x={220} y={305} anchor="middle" size={14} fill={INK} weight={800}>
            Calculate V_A, V_B, and external work W_ext to move q₀ = +20 nC from A to B!
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: STEP-BY-STEP NUMERICAL SOLUTION */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={25} cy={22} on={beat >= 3} delay={dl(3, 0.2)} />
        <Fade on={beat >= 3} delay={dl(3, 0.5)}>
          <T x={45} y={26} size={15} fill={RED} weight={800} anchor="start">
            {t("STEP-BY-STEP NUMERICAL SOLUTION", "STEP-BY-STEP NUMERICAL SOLUTION")}
          </T>
        </Fade>

        {/* Floating Solution Steps (No Card Boxes) */}
        <Fade on={beat >= 3}>
          <T x={45} y={75} size={15} fill={AMBER_DARK} weight={800} anchor="start">
            1. V_A = (9×10⁹ × 10⁻⁵) / 0.1 = 9.0 × 10⁵ V  (900 kV)
          </T>

          <T x={45} y={125} size={15} fill={GREEN} weight={800} anchor="start">
            2. V_B = (9×10⁹ × 10⁻⁵) / 0.2 = 4.5 × 10⁵ V  (450 kV)
          </T>

          <T x={45} y={175} size={15} fill={RED} weight={800} anchor="start">
            3. ΔV = V_B − V_A = 4.5×10⁵ − 9.0×10⁵ = −4.5 × 10⁵ V
          </T>

          <Draw on={beat >= 3} delay={dl(3, 1.2)} d="M 45 200 L 450 200" stroke={INK} sw={2} />

          <T x={45} y={240} size={18} fill={GREEN} weight={800} anchor="start">
            4. W_ext = q₀ ΔV = (20×10⁻⁹) (−4.5×10⁵) = −9.0 mJ
          </T>
        </Fade>

        {/* Open Text Explanation */}
        <Fade on={beat >= 5}>
          <T x={240} y={285} anchor="middle" size={13} fill={GREEN} weight={800}>
            Negative work means field repels charge outwards — system releases potential energy!
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("KEY TAKEAWAYS FOR NUMERICAL PROBLEMS", "KEY TAKEAWAYS FOR NUMERICAL PROBLEMS")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            {t("Always calculate ΔV = V_final − V_initial (Order matters for work sign W_ext = q ΔV)!", "Always calculate ΔV = V_final − V_initial (Order matters for work sign W_ext = q ΔV)!")}
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            {t("Work done by electrostatic field W_field = − W_ext = +9.0 mJ!", "Work done by electrostatic field W_field = − W_ext = +9.0 mJ!")}
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Solution Mastered: V_A = 900 kV, V_B = 450 kV, and W_ext = −9.0 mJ (Energy Released)! ✓",
            "★ Solution Mastered: V_A = 900 kV, V_B = 450 kV, and W_ext = −9.0 mJ (Energy Released)! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
