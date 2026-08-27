/**
 * P12Ch02 · Section 47 — "Worked example: resistance and current of a rated bulb"
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

export default function P12Ch03Sec47({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("CBSE Level: Resistance & Current of a Rated Bulb (60W, 240V)", "CBSE Level: Resistance & Current of a Rated Bulb (60W, 240V)")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: RESISTANCE CALCULATION */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 2} delay={dl(2, 0.2)} />
        <Fade on={beat >= 2} delay={dl(2, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("OPERATING RESISTANCE CALCULATION", "OPERATING RESISTANCE CALCULATION")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 2}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Given Appliance Rating: Power P = 60 W, Voltage V = 240 V.
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Apply Power Formula: P = V² / R  =&gt;  R = V² / P.
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Substitute Values: R = (240)² / 60 = 57,600 / 60.
          </T>

          <Draw on={beat >= 4} delay={dl(4, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Hot Filament Resistance: R = 960 Ω !
          </T>
        </Fade>

        <Fade on={beat >= 4}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Operating resistance at normal white-hot glowing temperature)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: CURRENT & VERIFICATION */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("OPERATING CURRENT & VERIFICATION", "OPERATING CURRENT & VERIFICATION")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 4}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Calculate Rated Current: I = P / V = 60 W / 240 V = 0.25 A.
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Verification via Ohm's Law: I = V / R = 240 / 960 = 0.25 A.
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Power Check via I² R: P = (0.25)² × 960 = 0.0625 × 960 = 60 W.
          </T>

          <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Rated Current: I = 0.25 A (Cross-checked via I² R)!
          </T>
        </Fade>

        <Fade on={beat >= 5}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (All three power formulas yield identical 60 W output)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("RATED BULB WORKED EXAMPLE VERDICT", "RATED BULB WORKED EXAMPLE VERDICT")}
          </T>
        </Fade>

        <Fade on={beat >= 5}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            For a 60 W, 240 V bulb: Operating resistance is R = V² / P = 960 Ω; Operating current is I = 0.25 A.
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Check: Power P = I² R = (0.25)² × 960 = 60 W, confirming 100% mathematical consistency.
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 6}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Result: R = 960 Ω, I = 0.25 A. Cross-checked and 100% consistent! ✓",
            "★ Result: R = 960 Ω, I = 0.25 A. Cross-checked and 100% consistent! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
