/**
 * P12Ch02 · Section 42 — "Why a battery cannot deliver unlimited power"
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

export default function P12Ch03Sec42({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Maximum Power Transfer Theorem & Battery Limits", "Maximum Power Transfer Theorem & Battery Limits")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: LOAD POWER FORMULA */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("LOAD POWER FORMULA DERIVATION", "LOAD POWER FORMULA DERIVATION")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Total Circuit Current: I = E / (R + r).
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Power Dissipated in Load: P_load = I² R = [ E / (R + r) ]² × R.
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Load Power Function: P(R) = E² R / (R + r)².
          </T>

          <Draw on={beat >= 3} delay={dl(3, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Asymptotic Limits: P -&gt; 0 when R -&gt; 0 or R -&gt; ∞!
          </T>
        </Fade>

        <Fade on={beat >= 4}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (There exists a single peak power value between 0 and ∞)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: MATCHING CONDITION */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("MAX POWER MATCHING CONDITION (R = r)", "MAX POWER MATCHING CONDITION (R = r)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 4}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Calculus Optimization: Set dP/dR = 0  =&gt;  R + r - 2 R = 0.
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Impedance Matching: Load resistance R MUST equal internal resistance r.
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Peak Power Value: P_max = E² (r) / (2 r)² = E² / (4 r).
          </T>

          <Draw on={beat >= 6} delay={dl(6, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Maximum Power Theorem: P_max = E² / (4 r) at R = r !
          </T>
        </Fade>

        <Fade on={beat >= 6}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (At R = r, exactly 50% power is delivered to load, 50% wasted in battery)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 6} delay={dl(6, 0.2)} />
        <Fade on={beat >= 6} delay={dl(6, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("MAXIMUM POWER TRANSFER THEOREM VERDICT", "MAXIMUM POWER TRANSFER THEOREM VERDICT")}
          </T>
        </Fade>

        <Fade on={beat >= 6}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Maximum power delivered to external load is P_max = E² / (4 r), achieved when load resistance R = r.
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Trade-off notice: Max power transfer operates at 50% efficiency (used in radio/audio transmitters, avoided in power grids).
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 6}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Result: P_max = E²/(4r) occurs at R = r. Deliberately inefficient (50%)! ✓",
            "★ Result: P_max = E²/(4r) occurs at R = r. Deliberately inefficient (50%)! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
