/**
 * P12Ch02 · Section 3 — "Defining current, and why it is a scalar"
 * Beats (en [0,8,14,24,37,50,62,74]): 8 beats
 */

import React from "react";
import { Circle, G, Path } from 'react-native-svg';
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

export default function P12Ch03Sec3({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Defining current, and why it is a scalar", "Defining current, and why it is a scalar")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: CURRENT DEFINITION & JUNCTION LAW */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("CURRENT DEFINITION & JUNCTION LAW", "CURRENT DEFINITION & JUNCTION LAW")}
          </T>
        </Fade>

        {/* Junction Wire Diagram (Open Chalkboard) */}
        <Fade on={beat >= 3}>
          <G transform="translate(0, 10)">
            <Draw on={beat >= 3} delay={dl(3, 0.5)} d="M 45 60 L 180 120" stroke={INK} sw={2.2} />
            <Draw on={beat >= 3} delay={dl(3, 0.5)} d="M 45 180 L 180 120" stroke={INK} sw={2.2} />
            <Draw on={beat >= 3} delay={dl(3, 0.5)} d="M 180 120 L 380 120" stroke={INK} sw={3} />

            {/* Junction dot */}
            <Circle cx={180} cy={120} r={5} fill={RED} />

            {/* Angle theta arc */}
            <Path d="M 110 90 A 70 70 0 0 1 110 150" fill="none" stroke={AMBER_DARK} strokeWidth={1.5} strokeDasharray="3 3" />
            <T x={95} y={125} size={11} fill={AMBER_DARK} weight={700}>Angle θ</T>

            {/* Incoming currents */}
            <T x={45} y={45} size={13} fill={AMBER_DARK} weight={800}>I₁ = 5 A →</T>
            <T x={45} y={195} size={13} fill={AMBER_DARK} weight={800}>I₂ = 3 A →</T>

            {/* Outgoing current */}
            <T x={220} y={105} size={15} fill={GREEN} weight={900}>I_out = 5 + 3 = 8 A</T>
          </G>
        </Fade>

        <Fade on={beat >= 4}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (I_out is completely independent of wire angle θ! Adds as simple scalars.)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: WHY CURRENT IS A SCALAR QUANTITY */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 2} delay={dl(2, 0.2)} />
        <Fade on={beat >= 2} delay={dl(2, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("WHY CURRENT IS A SCALAR QUANTITY", "WHY CURRENT IS A SCALAR QUANTITY")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 2}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Rate of Charge: I = dq / dt  (SI Unit: Ampere, 1 A = 1 C/s)
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Conventional Direction: Points along +q flow (opposite to e⁻ drift).
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Vector Law Violation: Does NOT obey vector addition rules!
          </T>

          <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Scalar vs Vector: Current I is SCALAR! Density J is VECTOR!
          </T>
        </Fade>

        <Fade on={beat >= 6}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Current density vector J = I / A points along electric field E)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("CONCEPTUAL SUMMARY", "CONCEPTUAL SUMMARY")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Although electric current has a specified directional flow, it obeys ordinary algebraic addition.
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Therefore, current I is a scalar quantity, while microscopic current density J = I/A is a vector.
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Current (I) is SCALAR (adds algebraically). Current density (J) is VECTOR! ✓",
            "★ Current (I) is SCALAR (adds algebraically). Current density (J) is VECTOR! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
