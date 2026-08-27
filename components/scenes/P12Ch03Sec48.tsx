/**
 * P12Ch02 · Section 48 — "Worked example: which bulb glows brighter in series"
 * Beats (en [0,1,2,4,5,6,7]): 7 beats
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

export default function P12Ch03Sec48({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("NEET Speed Trap: Which Bulb Glows Brighter in Series?", "NEET Speed Trap: Which Bulb Glows Brighter in Series?")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: RESISTANCE COMPARISON */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("BULB RESISTANCE COMPARISON", "BULB RESISTANCE COMPARISON")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 4}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Given Ratings: 100 W and 40 W bulbs both rated for V = 240 V.
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. 100 W Bulb Resistance: R₁₀₀ = (240)² / 100 = 576 Ω.
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. 40 W Bulb Resistance: R₄₀ = (240)² / 40 = 1440 Ω.
          </T>

          <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Resistance Verdict: R₄₀ (1440 Ω) &gt; R₁₀₀ (576 Ω) !
          </T>
        </Fade>

        <Fade on={beat >= 5}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Lower power rating ALWAYS means higher filament resistance)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: SERIES BRIGHTNESS ANALYSIS */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("SERIES BRIGHTNESS ANALYSIS (P = I² R)", "SERIES BRIGHTNESS ANALYSIS (P = I² R)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Series Constraint: Current I is identical through both bulbs.
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Power Dissipation Rule: P_actual = I² R  =&gt;  P_actual ∝ R.
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Actual Power Ratio: P₄₀ / P₁₀₀ = R₄₀ / R₁₀₀ = 1440 / 576 = 2.5.
          </T>

          <Draw on={beat >= 6} delay={dl(6, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Winner: 40 W bulb dissipates 2.5× MORE power in series!
          </T>
        </Fade>

        <Fade on={beat >= 6}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (In series, the lower-rated bulb glows much brighter)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 6} delay={dl(6, 0.2)} />
        <Fade on={beat >= 6} delay={dl(6, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("NEET SPEED TRAP BRIGHTNESS VERDICT", "NEET SPEED TRAP BRIGHTNESS VERDICT")}
          </T>
        </Fade>

        <Fade on={beat >= 6}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Series connection forces same current I: P = I² R  =&gt;  40 W bulb (R = 1440 Ω) glows BRIGHTER than 100 W (R = 576 Ω).
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Golden Rule: In SERIES, lower rated wattage wins; In PARALLEL, higher rated wattage wins!
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 6}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Result: 40W bulb glows brighter in series! Higher resistance R₄₀ = 1440 Ω wins P = I²R! ✓",
            "★ Result: 40W bulb glows brighter in series! Higher resistance R₄₀ = 1440 Ω wins P = I²R! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
