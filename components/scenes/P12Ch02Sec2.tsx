/**
 * P12Ch02 · Section 2 — "Potential is a scalar — add with sign, not direction"
 * Subtopic: Electrostatic Potential & Capacitance
 * OPEN CHALKBOARD DESIGN WITH INTERACTIVE VECTOR DIAGRAMS (NO CONTAINER BOXES):
 *  - Interactive SVG Multi-Charge Configuration (+q₁, -q₂, +q₃) around target point P
 *  - Distance vectors r₁, r₂, r₃ and scalar potential contribution breakdown
 *  - Zero card box containers (<Rect fill={CREAM}> removed completely)
 */

import React from "react";
import { Circle, G, Line, Rect } from 'react-native-svg';
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

export default function P12Ch02Sec2({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Dynamic pulsing effect for target point P
  const pulseR = 8 + Math.sin(Math.min(Math.PI, currentTime * 1.5)) * 2;

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Potential is a Scalar: Add algebraically with Signs, Not Vectors", "Potential Scalar Hai: Signs ke sath Add Karein, Vectors nahi")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: MULTI-CHARGE SYSTEM DIAGRAM */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={25} cy={25} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("SYSTEM OF CHARGES AROUND POINT P", "SYSTEM OF CHARGES AROUND POINT P")}
          </T>
        </Fade>

        {/* Target Point P */}
        <Fade on={beat >= 1}>
          <Circle cx={250} cy={160} r={pulseR} fill={RED} />
          <T x={250} y={135} size={16} fill={RED} weight={900}>Point P</T>
        </Fade>

        {/* Charge 1: +q1 */}
        <Fade on={beat >= 2}>
          <Circle cx={80} cy={75} r={20} fill="#ffe4e6" stroke={RED} strokeWidth={2} />
          <T x={80} y={82} size={16} fill={RED} weight={800}>+q₁</T>
          <Line x1="98" y1="87" x2="235" y2="150" stroke={RED} strokeWidth={2} strokeDasharray="5 5" />
          <T x={150} y={110} size={13} fill={RED} weight={700}>r₁</T>
        </Fade>

        {/* Charge 2: -q2 */}
        <Fade on={beat >= 3}>
          <Circle cx={420} cy={85} r={20} fill="#dcfce7" stroke={GREEN} strokeWidth={2} />
          <T x={420} y={92} size={18} fill={GREEN} weight={800}>-q₂</T>
          <Line x1="403" y1="97" x2="265" y2="150" stroke={GREEN} strokeWidth={2} strokeDasharray="5 5" />
          <T x={350} y={115} size={13} fill={GREEN} weight={700}>r₂</T>
        </Fade>

        {/* Charge 3: +q3 */}
        <Fade on={beat >= 4}>
          <Circle cx={140} cy={265} r={20} fill="#ffe4e6" stroke={RED} strokeWidth={2} />
          <T x={140} y={272} size={16} fill={RED} weight={800}>+q₃</T>
          <Line x1="155" y1="250" x2="238" y2="172" stroke={RED} strokeWidth={2} strokeDasharray="5 5" />
          <T x={180} y={220} size={13} fill={RED} weight={700}>r₃</T>
        </Fade>

        {/* Open Text Explanation */}
        <Fade on={beat >= 4}>
          <T x={250} y={310} anchor="middle" size={14} fill={INK} weight={800}>
            Potential V is a SCALAR — no vector resolution into X and Y components!
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: ALGEBRAIC SCALAR SUPERPOSITION */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={25} cy={25} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("SCALAR ALGEBRAIC SUMMATION", "SCALAR ALGEBRAIC SUMMATION")}
          </T>
        </Fade>

        {/* Free Floating Derivation Steps (No Card Boxes) */}
        <Fade on={beat >= 5}>
          <T x={50} y={75} size={16} fill={INK} weight={800} anchor="start">
            Individual Contributions at Point P:
          </T>

          <T x={80} y={115} size={15} fill={RED} weight={800} anchor="start">
            V₁ = + k q₁ / r₁   (Positive Charge → Positive Potential)
          </T>

          <T x={80} y={155} size={15} fill={GREEN} weight={800} anchor="start">
            V₂ = − k q₂ / r₂   (Negative Charge → Negative Potential)
          </T>

          <T x={80} y={195} size={15} fill={RED} weight={800} anchor="start">
            V₃ = + k q₃ / r₃   (Positive Charge → Positive Potential)
          </T>

          <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 50 220 L 450 220" stroke={INK} sw={2} />

          <T x={50} y={260} size={20} fill={GREEN} weight={800} anchor="start">
            V_total = V₁ + V₂ + V₃ = Σ (k q_i / r_i)
          </T>
        </Fade>

        {/* Spacious Open Text Note */}
        <Fade on={beat >= 6}>
          <T x={250} y={310} anchor="middle" size={14} fill={AMBER_DARK} weight={700}>
            Simply add with proper signs (+ / -). Zero potential V = 0 occurs where +V and -V cancel!
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 420)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("DIPOLE MIDPOINT EXAMPLE", "DIPOLE MIDPOINT EXAMPLE")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            {t("• Example: Midpoint of Dipole (+q & -q at distance 2a) → V_mid = k(+q)/a + k(-q)/a = 0 V!", "• Example: Midpoint of Dipole (+q & -q at distance 2a) → V_mid = k(+q)/a + k(-q)/a = 0 V!")}
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            {t("• Electric field E ≠ 0 at midpoint, but Potential V = 0! Potential is scalar addition with sign.", "• Electric field E ≠ 0 at midpoint, but Potential V = 0! Potential is scalar addition with sign.")}
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Superposition Verdict: V_total = Σ (k q_i / r_i) is a pure scalar algebraic sum using charge signs (+ / -)! ✓",
            "★ Superposition Verdict: V_total = Σ (k q_i / r_i) charge signs (+ / -) ke sath pure scalar sum hai! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
