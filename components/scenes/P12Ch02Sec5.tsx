/**
 * P12Ch02 · Section 5 — "Dipole potential and the field–potential relation"
 * Subtopic: Electrostatic Potential & Equipotentials
 * OPEN CHALKBOARD DESIGN WITH RICH SVG DIPOLES & GRADIENT FIELD ARROWS (NO CONTAINER BOXES):
 *  - Electric Dipole (+q, -q at 2a separation) at angle θ to observation vector r
 *  - Dipole Potential Formula V(r, θ) = (k p cosθ) / r²
 *  - Field-Potential Gradient Relation E = - dV/dr (Field points in direction of steepest potential drop)
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

export default function P12Ch02Sec5({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Rotating dipole angle animation
  const rotAngle = Math.sin(Math.min(Math.PI / 2, currentTime * 0.8)) * 0.25;
  const dx = Math.cos(rotAngle) * 55;
  const dy = Math.sin(rotAngle) * 55;

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Electric Dipole Potential V = (kp cosθ)/r² & Gradient E = −dV/dr", "Electric Dipole Potential V = (kp cosθ)/r² & Gradient E = −dV/dr")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: DIPOLE VECTOR & OBSERVATION POINT P */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={25} cy={22} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={26} size={15} fill={RED} weight={800} anchor="start">
            {t("ELECTRIC DIPOLE AT ANGLE θ", "ELECTRIC DIPOLE AT ANGLE θ")}
          </T>
        </Fade>

        {/* Dipole Charges +q and -q */}
        <Fade on={beat >= 1}>
          {/* Dipole axis line */}
          <Line x1={180 - dx} y1={220 - dy} x2={180 + dx} y2={220 + dy} stroke={INK} strokeWidth={3} />

          {/* -q Charge */}
          <Circle cx={180 - dx} cy={220 - dy} r={17} fill="#dcfce7" stroke={GREEN} strokeWidth={2} />
          <T x={180 - dx} y={225 - dy} size={15} fill={GREEN} weight={800}>-q</T>

          {/* +q Charge */}
          <Circle cx={180 + dx} cy={220 + dy} r={17} fill="#ffe4e6" stroke={RED} strokeWidth={2} />
          <T x={180 + dx} y={225 + dy} size={15} fill={RED} weight={800}>+q</T>

          {/* Dipole moment vector p */}
          <Path d={arrowD(180 - dx, 260 - dy, 180 + dx + 20, 260 + dy)} stroke={AMBER_DARK} strokeWidth={2.5} />
          <T x={180 + dx + 45} y={265 + dy} size={13} fill={AMBER_DARK} weight={800}>p = 2aq</T>

          {/* Position vector r to Point P */}
          <Line x1="180" y1="220" x2="380" y2="75" stroke={RED} strokeWidth={2.5} strokeDasharray="5 5" />
          <Circle cx={380} cy={75} r={6} fill={RED} />
          <T x={395} y={72} size={14} fill={RED} weight={800}>Point P (r, θ)</T>
          <T x={290} y={135} size={13} fill={RED} weight={700}>r</T>
        </Fade>

        {/* Free Floating Formula (Spacious, No Box) */}
        <Fade on={beat >= 2}>
          <T x={220} y={305} anchor="middle" size={17} fill={GREEN} weight={800}>
            V(r, θ) = (1 / 4πε₀) (p cosθ / r²)   [Decays as 1/r² !]
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: FIELD-POTENTIAL GRADIENT RELATION E = - dV/dr */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={25} cy={22} on={beat >= 3} delay={dl(3, 0.2)} />
        <Fade on={beat >= 3} delay={dl(3, 0.5)}>
          <T x={45} y={26} size={15} fill={RED} weight={800} anchor="start">
            {t("FIELD-POTENTIAL GRADIENT: E = − dV/dr", "FIELD-POTENTIAL GRADIENT: E = − dV/dr")}
          </T>
        </Fade>

        {/* Steepest Drop Visual Diagram */}
        <Fade on={beat >= 3}>
          {/* Equipotential Lines V1 = 100V, V2 = 80V, V3 = 60V */}
          <Line x1="60" y1="75" x2="420" y2="75" stroke={AMBER_DARK} strokeWidth={2.5} strokeDasharray="6 4" />
          <T x={435} y={80} size={13} fill={AMBER_DARK} weight={800} anchor="start">V₁ = 100V</T>

          <Line x1="60" y1="165" x2="420" y2="165" stroke={GREEN} strokeWidth={2.5} strokeDasharray="6 4" />
          <T x={435} y={170} size={13} fill={GREEN} weight={800} anchor="start">V₂ = 80V</T>

          <Line x1="60" y1="255" x2="420" y2="255" stroke={RED} strokeWidth={2.5} strokeDasharray="6 4" />
          <T x={435} y={260} size={13} fill={RED} weight={800} anchor="start">V₃ = 60V</T>

          {/* Electric Field E vector pointing DOWNWARD towards decreasing potential */}
          <Path d={arrowD(150, 75, 150, 250)} stroke={RED} strokeWidth={3.5} />
          <T x={170} y={120} size={14} fill={RED} weight={900} anchor="start">E = − dV/dr (Steepest Drop)</T>
        </Fade>

        {/* Free Floating Formula (Spacious, No Box) */}
        <Fade on={beat >= 5}>
          <T x={240} y={305} anchor="middle" size={17} fill={RED} weight={800}>
            E = − dV / dr   or   E_vector = − ∇ V
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("SPECIAL CASES & POTENTIAL DECISION MATRIX", "SPECIAL CASES & POTENTIAL DECISION MATRIX")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} fill={GREEN} weight={800} anchor="start">
            {t("• Axial Line (θ = 0°): V = kp/r²   |   • Equatorial Line (θ = 90°): V = 0 V (Zero Potential Line!)", "• Axial Line (θ = 0°): V = kp/r²   |   • Equatorial Line (θ = 90°): V = 0 V (Zero Potential Line!)")}
          </T>
          <T x={45} y={72} size={13} fill={INK} weight={700} anchor="start">
            {t("• Point charge V ∝ 1/r (spherical decay); Dipole V ∝ 1/r² (faster quadrupole-like angular decay)!", "• Point charge V ∝ 1/r (spherical decay); Dipole V ∝ 1/r² (faster quadrupole-like angular decay)!")}
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Dipole Verdict: V(r, θ) = (kp cosθ)/r² and Electric Field points in direction of steepest potential drop E = −dV/dr! ✓",
            "★ Dipole Verdict: V(r, θ) = (kp cosθ)/r² and Electric Field points in direction of steepest potential drop E = −dV/dr! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
