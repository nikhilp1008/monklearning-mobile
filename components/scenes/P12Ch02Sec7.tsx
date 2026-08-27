/**
 * P12Ch02 · Section 7 — "Deriving E equals minus dV by dr from equipotential surfaces"
 * Subtopic: Electrostatic Potential Derivations
 * OPEN CHALKBOARD DESIGN WITH TWO ADJACENT EQUIPOTENTIAL PLANES (NO CONTAINER BOXES):
 *  - Two parallel equipotential surfaces A and B separated by perpendicular distance dr
 *  - Potential V on surface A, V + dV on surface B
 *  - Work done in moving charge q₀ by dr: dW = q₀ dV = - q₀ E dr
 *  - Derivation E = - dV/dr (Electric field is magnitude of potential gradient)
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

export default function P12Ch02Sec7({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Moving charge animation between planes (clamped)
  const animDr = Math.min(1, currentTime * 0.48);
  const qy = 85 + animDr * 130;

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Derivation: Field-Potential Relation E = − dV/dr from Equipotentials", "Derivation: Field-Potential Relation E = − dV/dr from Equipotentials")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: TWO ADJACENT EQUIPOTENTIAL SURFACES */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={25} cy={22} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={26} size={15} fill={RED} weight={800} anchor="start">
            {t("SURFACES A AND B SEPARATED BY dr", "SURFACES A AND B SEPARATED BY dr")}
          </T>
        </Fade>

        <Fade on={beat >= 1}>
          {/* Surface B (higher potential V + dV) */}
          <Line x1="60" y1="75" x2="420" y2="75" stroke={AMBER_DARK} strokeWidth={3} />
          <T x={435} y={80} size={13} fill={AMBER_DARK} weight={800} anchor="start">Surface B (V + dV)</T>

          {/* Surface A (potential V) */}
          <Line x1="60" y1="230" x2="420" y2="230" stroke={GREEN} strokeWidth={3} />
          <T x={435} y={235} size={13} fill={GREEN} weight={800} anchor="start">Surface A (V)</T>

          {/* Perpendicular displacement dr line */}
          <Line x1="140" y1="75" x2="140" y2="230" stroke={INK} strokeWidth={2} strokeDasharray="4 4" />
          <T x={120} y={155} size={13} fill={INK} weight={800} anchor="end">dr (⊥ distance)</T>

          {/* Electric Field Vector E pointing downwards */}
          <Path d={arrowD(300, 75, 300, 225)} stroke={RED} strokeWidth={3.5} />
          <T x={315} y={155} size={15} fill={RED} weight={900}>E (Vector)</T>

          {/* Moving charge +q0 */}
          <Circle cx={140} cy={qy} r={9} fill={GREEN} />
          <T x={140} y={qy - 12} size={11} fill={GREEN} weight={800}>+q₀</T>
        </Fade>

        {/* Free Floating Work Equation (Spacious, No Box) */}
        <Fade on={beat >= 3}>
          <T x={220} y={305} anchor="middle" size={16} fill={INK} weight={800}>
            Work done by field: dW = F_E · dr = q₀ E dr
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: CALCULUS PROOF & TWO CONCLUSION RULES */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={25} cy={22} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={26} size={15} fill={RED} weight={800} anchor="start">
            {t("CALCULUS PROOF OF E = − dV/dr", "CALCULUS PROOF OF E = − dV/dr")}
          </T>
        </Fade>

        {/* Floating Derivation Steps (No Card Boxes) */}
        <Fade on={beat >= 4}>
          <T x={45} y={75} size={15} fill={INK} weight={800} anchor="start">
            1. Potential Difference: V_A − V_B = V − (V + dV) = − dV
          </T>

          <T x={45} y={125} size={15} fill={AMBER_DARK} weight={800} anchor="start">
            2. Work per unit charge: W / q₀ = E dr
          </T>

          <T x={45} y={175} size={15} fill={GREEN} weight={800} anchor="start">
            3. Equate Work to − dV: q₀ E dr = − q₀ dV
          </T>

          <Draw on={beat >= 4} delay={dl(4, 1.2)} d="M 45 200 L 450 200" stroke={INK} sw={2} />

          <T x={45} y={240} size={19} fill={RED} weight={800} anchor="start">
            4. E = − dV / dr  (Negative Gradient!)
          </T>
        </Fade>

        {/* Open Text Explanation */}
        <Fade on={beat >= 6}>
          <T x={240} y={285} anchor="middle" size={13} fill={GREEN} weight={800}>
            Electric field E equals magnitude of potential drop per unit perpendicular distance!
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("TWO CRITICAL CONSEQUENCES FOR EXAMS", "TWO CRITICAL CONSEQUENCES FOR EXAMS")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            {t("1. E points in direction where potential decreases steepest!", "1. E points in direction where potential decreases steepest!")}
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            {t("2. E magnitude is given by change in potential per unit displacement normal to equipotential!", "2. E magnitude is given by change in potential per unit displacement normal to equipotential!")}
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Proof Completed: E = − dV/dr (Electric field is negative radial gradient of potential)! ✓",
            "★ Proof Completed: E = − dV/dr (Electric field is negative radial gradient of potential)! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
