/**
 * P12Ch02 · Section 37 — "Worked example: reduction with current division"
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

export default function P12Ch03Sec37({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("JEE Main: Network Reduction & Current Division", "JEE Main: Network Reduction & Current Division")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: NETWORK REDUCTION */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("NETWORK REDUCTION (2 Ω + (6 Ω || 3 Ω))", "NETWORK REDUCTION (2 Ω + (6 Ω || 3 Ω))")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Parallel Reduction: R_p = (6 × 3) / (6 + 3) = 18 / 9 = 2 Ω.
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Total Resistance: R_eq = R_series + R_p = 2 Ω + 2 Ω = 4 Ω.
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Main Battery Current: I_total = V / R_eq = 12 V / 4 Ω = 3 A.
          </T>

          <Draw on={beat >= 3} delay={dl(3, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Result 1: Total circuit current supplied by battery = 3 A !
          </T>
        </Fade>

        <Fade on={beat >= 4}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Always collapse parallel loops before calculating main current)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: CURRENT DIVISION */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("CURRENT DIVISION IN PARALLEL BRANCHES", "CURRENT DIVISION IN PARALLEL BRANCHES")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 4}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Current Divider: Put OPPOSITE resistance (6 Ω) on top.
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Branch Current I_3Ω: I_3Ω = I_total × [ 6 / (6 + 3) ] = 3 A × (6 / 9) = 2 A.
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Complement Branch I_6Ω: I_6Ω = 3 A × [ 3 / (6 + 3) ] = 1 A.
          </T>

          <Draw on={beat >= 6} delay={dl(6, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Result 2: Branch current through 3 Ω resistor = 2 A !
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (KCL verification: I_3Ω + I_6Ω = 2 A + 1 A = 3 A)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("NETWORK REDUCTION WORKED EXAMPLE VERDICT", "NETWORK REDUCTION WORKED EXAMPLE VERDICT")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Total battery current is 3 A, which splits into 2 A through 3 Ω resistor and 1 A through 6 Ω resistor.
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Notice 3 Ω resistor carries TWICE the current of 6 Ω resistor (inversely proportional to resistance).
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Result: Total I = 3 A, Branch Current I_3Ω = 2 A. Double-checked via Kirchhoff! ✓",
            "★ Result: Total I = 3 A, Branch Current I_3Ω = 2 A. Double-checked via Kirchhoff! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
