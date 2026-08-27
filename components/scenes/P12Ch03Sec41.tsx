/**
 * P12Ch02 · Section 41 — "The three faces of power and how to choose one"
 * Beats (en [0,1,3,4,6,7]): 6 beats
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

export default function P12Ch03Sec41({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("The Three Faces of Power & Formula Selection", "The Three Faces of Power & Formula Selection")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: SERIES CHOICE */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("SERIES FORMULA CHOICE (SAME CURRENT I)", "SERIES FORMULA CHOICE (SAME CURRENT I)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Fixed Parameter: Current I is identical through all series elements.
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Select Formula: Use P = I² R (since I is constant).
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Proportionality: Power dissipation is directly proportional to R (P ∝ R).
          </T>

          <Draw on={beat >= 3} delay={dl(3, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Series Rule: Bigger resistor dissipates MORE power in series!
          </T>
        </Fade>

        <Fade on={beat >= 3}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Example: 100 Ω bulb glows brighter than 40 Ω bulb in series)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: PARALLEL CHOICE */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 3} delay={dl(3, 0.2)} />
        <Fade on={beat >= 3} delay={dl(3, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("PARALLEL FORMULA CHOICE (SAME VOLTAGE V)", "PARALLEL FORMULA CHOICE (SAME VOLTAGE V)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 3}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Fixed Parameter: Potential V is identical across all parallel branches.
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Select Formula: Use P = V² / R (since V is constant).
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Inverted Proportionality: Power dissipation is inversely proportional to R.
          </T>

          <Draw on={beat >= 4} delay={dl(4, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Parallel Rule: Smaller resistor dissipates MORE power in parallel!
          </T>
        </Fade>

        <Fade on={beat >= 4}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Example: 100 W domestic bulb has SMALLER filament resistance than 40 W)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("POWER FORMULA SELECTION VERDICT", "POWER FORMULA SELECTION VERDICT")}
          </T>
        </Fade>

        <Fade on={beat >= 4}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Never pick a power formula at random! Identify the constant variable first.
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Series circuits keep current I constant (P = I² R); Parallel circuits keep voltage V constant (P = V² / R).
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 5}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Always check what is shared: Series uses P = I²R; Parallel uses P = V²/R! ✓",
            "★ Always check what is shared: Series uses P = I²R; Parallel uses P = V²/R! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
