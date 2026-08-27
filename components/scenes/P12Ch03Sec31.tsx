/**
 * P12Ch02 · Section 31 — "The series and parallel formulas"
 * Beats (en [0,1,2,3,4,5,6,7]): 8 beats
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

export default function P12Ch03Sec31({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("The Series & Parallel Master Formulas", "The Series & Parallel Master Formulas")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: SERIES MASTER FORMULA */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("SERIES MASTER FORMULA & PROOF", "SERIES MASTER FORMULA & PROOF")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Single Loop: Current I is identical through all n resistors.
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Additive Voltages: Total V = V₁ + V₂ + ... + V_n.
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Substitute Ohm's Law: I R_s = I R₁ + I R₂ + ... + I R_n.
          </T>

          <Draw on={beat >= 3} delay={dl(3, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Series Result: R_s = ∑ R_i = R₁ + R₂ + ... + R_n !
          </T>
        </Fade>

        <Fade on={beat >= 4}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Equivalent resistance increases linearly with number of elements)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: PARALLEL MASTER FORMULA */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 3} delay={dl(3, 0.2)} />
        <Fade on={beat >= 3} delay={dl(3, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("PARALLEL MASTER FORMULA & PROOF", "PARALLEL MASTER FORMULA & PROOF")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 3}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Common Potential: Voltage V is identical across all branches.
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Additive Currents: Total I = I₁ + I₂ + ... + I_n.
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Substitute Ohm's Law: V / R_p = V / R₁ + V / R₂ + ... + V / R_n.
          </T>

          <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Parallel Result: 1 / R_p = ∑ (1 / R_i) !
          </T>
        </Fade>

        <Fade on={beat >= 6}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Product-over-sum shortcut for 2 resistors: R_p = R₁ R₂ / (R₁ + R₂))
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("MASTER FORMULA VERDICT", "MASTER FORMULA VERDICT")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Series resistance adds directly; Parallel conductance (reciprocal of resistance) adds directly.
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Common exam trap: Never forget to take the reciprocal (invert) at the very end when calculating R_p.
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Remember: Always invert at the end when solving 1/R_p! ✓",
            "★ Remember: Always invert at the end when solving 1/R_p! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
