/**
 * P12Ch02 · Section 46 — "Derivation: the maximum power transfer theorem"
 * Beats (en [0,1,2,3,4,5,7,8]): 8 beats
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

export default function P12Ch03Sec46({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Board Derivation: Maximum Power Transfer Theorem", "Board Derivation: Maximum Power Transfer Theorem")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: POWER FUNCTION SETUP */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("POWER FUNCTION SETUP (P(R) = I² R)", "POWER FUNCTION SETUP (P(R) = I² R)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Total Circuit Resistance: R_total = R + r.
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Circuit Current: I = E / (R + r).
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Load Power Equation: P(R) = I² R = E² R (R + r)⁻².
          </T>

          <Draw on={beat >= 3} delay={dl(3, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Objective Function: Maximize load power P with respect to R!
          </T>
        </Fade>

        <Fade on={beat >= 4}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Note that internal resistance r is fixed by battery chemistry)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: DIFFERENTIATION */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 3} delay={dl(3, 0.2)} />
        <Fade on={beat >= 3} delay={dl(3, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("QUOTIENT RULE DIFFERENTIATION (dP/dR = 0)", "QUOTIENT RULE DIFFERENTIATION (dP/dR = 0)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 3}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Apply Derivative: dP/dR = E² [ (R+r)² - 2 R (R+r) ] / (R+r)⁴.
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Simplify Numerator: (R + r) - 2 R = r - R = 0.
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Critical Point: r - R = 0  =&gt;  R = r.
          </T>

          <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Rigorous Proof: Maximum power occurs ONLY at R = r !
          </T>
        </Fade>

        <Fade on={beat >= 5}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Second derivative d²P/dR² is negative at R = r, confirming maximum)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("MAXIMUM POWER THEOREM BOARD DERIVATION VERDICT", "MAXIMUM POWER THEOREM BOARD DERIVATION VERDICT")}
          </T>
        </Fade>

        <Fade on={beat >= 5}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Differentiating P(R) = E² R / (R + r)² gives dP/dR = E² (r - R) / (R + r)³ = 0, proving R = r.
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Substituting R = r into P(R) yields peak load power P_max = E² / (4 r) at efficiency η = 50%.
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 5}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Derived! Maximum power transfer occurs at R = r with P_max = E²/(4r) and η = 50%! ✓",
            "★ Derived! Maximum power transfer occurs at R = r with P_max = E²/(4r) and η = 50%! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
