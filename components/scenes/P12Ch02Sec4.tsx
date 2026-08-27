/**
 * P12Ch02 · Section 4 — "Formula toolkit: potential and superposition"
 * Subtopic: Electrostatic Potential & Capacitance
 * OPEN CHALKBOARD DESIGN WITH RICH SVG INTERACTIVE DIAGRAMS (NO CONTAINER BOXES):
 *  - 2-Charge System Potential Energy U = k q₁ q₂ / r
 *  - 3-Charge Triangle System (q₁, q₂, q₃) with Pair Distance Lines (r₁₂, r₂₃, r₁₃)
 *  - Electron Acceleration in 1V Potential Field (1 eV = 1.6 × 10⁻¹⁹ J)
 *  - Zero card box containers (<Rect fill={CREAM}> removed completely)
 */

import React from "react";
import { Circle, G, Line, Path, Rect } from 'react-native-svg';
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

export default function P12Ch02Sec4({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Electron acceleration trajectory animation
  const eVPos = Math.min(1, currentTime * 0.48);
  const ex = 80 + eVPos * 300;

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Formula Toolkit: Potential Energy Superposition & 1 eV Unit", "Formula Toolkit: Potential Energy Superposition & 1 eV Unit")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: 2-CHARGE & 3-CHARGE SYSTEM DIAGRAMS */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={25} cy={22} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={26} size={15} fill={RED} weight={800} anchor="start">
            {t("SYSTEM POTENTIAL ENERGY U_total", "SYSTEM POTENTIAL ENERGY U_total")}
          </T>
        </Fade>

        {/* 3-Charge Triangle Configuration */}
        <Fade on={beat >= 2}>
          {/* Charge 1: q1 */}
          <Circle cx={220} cy={75} r={18} fill="#ffe4e6" stroke={RED} strokeWidth={2} />
          <T x={220} y={81} size={15} fill={RED} weight={800}>+q₁</T>

          {/* Charge 2: q2 */}
          <Circle cx={75} cy={225} r={18} fill="#dcfce7" stroke={GREEN} strokeWidth={2} />
          <T x={75} y={231} size={16} fill={GREEN} weight={800}>-q₂</T>

          {/* Charge 3: q3 */}
          <Circle cx={365} cy={225} r={18} fill="#ffe4e6" stroke={RED} strokeWidth={2} />
          <T x={365} y={231} size={15} fill={RED} weight={800}>+q₃</T>

          {/* Distance Lines r12, r23, r13 */}
          <Line x1="205" y1="90" x2="90" y2="210" stroke={AMBER_DARK} strokeWidth={2} strokeDasharray="5 5" />
          <T x={130} y={145} size={12} fill={AMBER_DARK} weight={800}>r₁₂</T>

          <Line x1="95" y1="225" x2="345" y2="225" stroke={GREEN} strokeWidth={2} strokeDasharray="5 5" />
          <T x={220} y={245} size={12} fill={GREEN} weight={800}>r₂₃</T>

          <Line x1="235" y1="90" x2="350" y2="210" stroke={RED} strokeWidth={2} strokeDasharray="5 5" />
          <T x={310} y={145} size={12} fill={RED} weight={800}>r₁₃</T>
        </Fade>

        {/* Free Floating System Formula (Spacious, No Box) */}
        <Fade on={beat >= 4}>
          <T x={220} y={305} anchor="middle" size={15} fill={GREEN} weight={800}>
            U_total = k [ (q₁q₂ / r₁₂) + (q₂q₃ / r₂₃) + (q₁q₃ / r₁₃) ]
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: WORK-ENERGY THEOREM & ELECTRON-VOLT CONVERSION */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={25} cy={22} on={beat >= 3} delay={dl(3, 0.2)} />
        <Fade on={beat >= 3} delay={dl(3, 0.5)}>
          <T x={45} y={26} size={15} fill={RED} weight={800} anchor="start">
            {t("WORK-ENERGY THEOREM & ELECTRON-VOLT (eV)", "WORK-ENERGY THEOREM & ELECTRON-VOLT (eV)")}
          </T>
        </Fade>

        {/* Electron Accelerating Across 1V Plates */}
        <Fade on={beat >= 5}>
          <Line x1="60" y1="75" x2="60" y2="225" stroke={RED} strokeWidth={3} />
          <T x={60} y={60} size={12} fill={RED} weight={800} anchor="middle">Plate A (0V)</T>

          <Line x1="420" y1="75" x2="420" y2="225" stroke={GREEN} strokeWidth={3} />
          <T x={420} y={60} size={12} fill={GREEN} weight={800} anchor="middle">Plate B (1V)</T>

          {/* E-field Arrows */}
          <Path d={arrowD(80, 110, 400, 110)} stroke={MUTED} strokeWidth={1.5} />
          <Path d={arrowD(80, 190, 400, 190)} stroke={MUTED} strokeWidth={1.5} />

          {/* Accelerating Electron */}
          <Circle cx={ex} cy={150} r={10} fill={GREEN} />
          <T x={ex} y={154} size={11} fill="#ffffff" weight={900}>e⁻</T>
          <T x={ex} y={130} size={12} fill={GREEN} weight={800}>K.E. = 1 eV</T>
        </Fade>

        {/* Free Floating Formulas (Spacious, Clean Stack) */}
        <Fade on={beat >= 5}>
          <T x={240} y={280} anchor="middle" size={15} fill={INK} weight={800}>
            W_ext = ΔU = q ΔV = q (V_B − V_A)
          </T>
          <T x={240} y={308} anchor="middle" size={16} fill={GREEN} weight={800}>
            1 eV = 1.6 × 10⁻¹⁹ Joules
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("CBSE BOARD SPEED TRAP WARNING", "CBSE BOARD SPEED TRAP WARNING")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={AMBER_DARK} weight={800}>
            {t("Always include proper charge sign (+ / -) in W = q (V_final − V_initial)!", "Always include proper charge sign (+ / -) in W = q (V_final − V_initial)!")}
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            {t("For electrons (q = -e), moving to higher potential (V_B > V_A) decreases potential energy ΔU < 0!", "For electrons (q = -e), moving to higher potential (V_B > V_A) decreases potential energy ΔU < 0!")}
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Toolkit Mastered: U = k q₁ q₂ / r  |  U_total = Σ k q_i q_j / r_ij  |  1 eV = 1.6 × 10⁻¹⁹ J! ✓",
            "★ Toolkit Mastered: U = k q₁ q₂ / r  |  U_total = Σ k q_i q_j / r_ij  |  1 eV = 1.6 × 10⁻¹⁹ J! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
