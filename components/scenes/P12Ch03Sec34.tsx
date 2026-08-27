/**
 * P12Ch02 · Section 34 — "Derivation: parallel combination and current divider"
 * Beats (en [0,1,3,4,5,6,7]): 7 beats
 */

import React from "react";
import { G } from 'react-native-svg';
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

export default function P12Ch03Sec34({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Board Derivation: Parallel Formula & Current Divider", "Board Derivation: Parallel Formula & Current Divider")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: NODE POTENTIAL EQUIVALENCE */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("NODE POTENTIAL EQUIVALENCE (SAME V)", "NODE POTENTIAL EQUIVALENCE (SAME V)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Parallel Topology: Terminals connected directly across nodes A &amp; B.
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Uniform Potential: Voltage drop V_AB = V is identical for all branches.
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Ohm's Law in Branch i: Branch current I_i = V / R_i.
          </T>

          <Draw on={beat >= 3} delay={dl(3, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Key Rule: Parallel branches share identical potential drop V!
          </T>
        </Fade>

        <Fade on={beat >= 4}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Voltage across each parallel resistor equals battery EMF if ideal)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: KIRCHHOFF CURRENT DERIVATION */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("KIRCHHOFF CURRENT DERIVATION", "KIRCHHOFF CURRENT DERIVATION")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 4}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Node Current Sum: Total entering current I = I₁ + I₂ + I₃.
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Substitute Currents: I = V / R₁ + V / R₂ + V / R₃ = V (1/R₁ + 1/R₂ + 1/R₃).
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Compare to Equivalent: I = V / R_p  =&gt;  1 / R_p = 1/R₁ + 1/R₂ + 1/R₃.
          </T>

          <Draw on={beat >= 6} delay={dl(6, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Current Divider Result: I₁ = I × [ R₂ / (R₁ + R₂) ] !
          </T>
        </Fade>

        <Fade on={beat >= 6}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Directly derived from combining parallel R_p formula and Ohm's Law)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 6} delay={dl(6, 0.2)} />
        <Fade on={beat >= 6} delay={dl(6, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("PARALLEL DERIVATION VERDICT", "PARALLEL DERIVATION VERDICT")}
          </T>
        </Fade>

        <Fade on={beat >= 6}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Parallel formula 1/R_p = ∑ (1/R_i) is a direct consequence of Kirchhoff's Current Law (KCL).
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Current divider formula I₁ = I [ R₂ / (R₁ + R₂) ] works for any 2-branch parallel network.
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 6}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Derived! Current divider I₁ = I [ R₂ / (R₁ + R₂) ] naturally comes from Ohm's Law! ✓",
            "★ Derived! Current divider I₁ = I [ R₂ / (R₁ + R₂) ] naturally comes from Ohm's Law! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
