/**
 * P12Ch02 · Section 50 — "Worked example: maximum power transfer with numbers"
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

export default function P12Ch03Sec50({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("JEE Advanced: Matching Load for Max Power Transfer", "JEE Advanced: Matching Load for Max Power Transfer")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: MATCHING R & P_MAX */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 3} delay={dl(3, 0.2)} />
        <Fade on={beat >= 3} delay={dl(3, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("MATCHING LOAD & MAXIMUM POWER", "MATCHING LOAD & MAXIMUM POWER")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 3}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Given Source: EMF E = 12 V, internal resistance r = 2 Ω.
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Impedance Match Condition: Load resistance R = r = 2 Ω.
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Max Power Formula: P_max = E² / (4 r) = (12)² / (4 × 2).
          </T>

          <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Maximum Load Power: P_max = 144 / 8 = 18 W !
          </T>
        </Fade>

        <Fade on={beat >= 5}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Peak power delivered to load occurs exactly at R = 2 Ω)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: TOTAL POWER & EFFICIENCY */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("TOTAL POWER & EFFICIENCY ANALYSIS", "TOTAL POWER & EFFICIENCY ANALYSIS")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Operating Current: I = E / (R + r) = 12 / (2 + 2) = 3 A.
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Total Power Generated: P_total = E × I = 12 V × 3 A = 36 W.
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Internal Power Loss: P_internal = I² r = (3)² × 2 = 18 W.
          </T>

          <Draw on={beat >= 6} delay={dl(6, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Transfer Efficiency: η = P_max / P_total = 18/36 = 50% !
          </T>
        </Fade>

        <Fade on={beat >= 6}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (50% power delivered to load, 50% dissipated inside battery)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 6} delay={dl(6, 0.2)} />
        <Fade on={beat >= 6} delay={dl(6, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("MAX POWER TRANSFER WORKED NUMERICAL VERDICT", "MAX POWER TRANSFER WORKED NUMERICAL VERDICT")}
          </T>
        </Fade>

        <Fade on={beat >= 6}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Matching R = r = 2 Ω yields maximum load power P_max = E² / (4 r) = 18 W.
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Total battery output power is 36 W, confirming exact 50% energy transfer efficiency.
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 6}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Result: Load R = 2 Ω, P_max = 18 W, Efficiency η = 50%! Perfect 3-part solution! ✓",
            "★ Result: Load R = 2 Ω, P_max = 18 W, Efficiency η = 50%! Perfect 3-part solution! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
