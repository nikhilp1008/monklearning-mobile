/**
 * P12Ch02 · Section 59 — "CBSE level: three capacitors in series and parallel"
 * Subtopic: Series & Parallel Combinations & Charge Sharing
 * OPEN CHALKBOARD DESIGN WITH CBSE WORKED NUMERICAL (NO CONTAINER BOXES):
 *  - C₁ = 2 µF, C₂ = 3 µF, C₃ = 6 µF
 *  - Step 1: Series 1/C_s = 1/2 + 1/3 + 1/6 = 6/6 = 1  =>  C_s = 1 µF
 *  - Step 2: Parallel C_p = 2 + 3 + 6 = 11 µF
 *  - Step 3: Ratio C_p / C_s = 11 / 1 = 11 !
 *  - Zero card box containers
 */

import React from "react";
import { G } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
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

export default function P12Ch02Sec59({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("CBSE Worked Problem: Three Capacitors (2 µF, 3 µF, 6 µF) Series & Parallel Ratio", "CBSE Worked Problem: Three Capacitors (2 µF, 3 µF, 6 µF) Series & Parallel Ratio")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: CIRCUIT DIAGRAM & VALUES */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("THREE CAPACITOR VALUES: 2 µF, 3 µF, 6 µF", "THREE CAPACITOR VALUES: 2 µF, 3 µF, 6 µF")}
          </T>
        </Fade>

        {/* Values Diagram */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={16} fill={RED} weight={900} anchor="start">C₁ = 2 µF</T>
          <T x={45} y={125} size={16} fill={AMBER_DARK} weight={900} anchor="start">C₂ = 3 µF</T>
          <T x={45} y={170} size={16} fill={GREEN} weight={900} anchor="start">C₃ = 6 µF</T>
        </Fade>

        {/* Free Floating Question */}
        <Fade on={beat >= 2}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            Find C_series, C_parallel, and their ratio C_p / C_s !
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: NUMERICAL CALCULATION STEPS */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 3} delay={dl(3, 0.2)} />
        <Fade on={beat >= 3} delay={dl(3, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("STEP-BY-STEP CALCULATION", "STEP-BY-STEP CALCULATION")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 3}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Series: 1/C_s = 1/2 + 1/3 + 1/6 = (3+2+1)/6 = 6/6 = 1
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. C_series = 1 µF
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Parallel: C_p = 2 + 3 + 6 = 11 µF
          </T>

          <Draw on={beat >= 3} delay={dl(3, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Ratio C_parallel / C_series = 11 / 1 = 11
          </T>
        </Fade>

        {/* Open Text Explanation */}
        <Fade on={beat >= 6}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Notice how 2 µF, 3 µF, 6 µF combine into a clean integer 1 µF in series)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("CBSE BOARD MARKS CHECKLIST", "CBSE BOARD MARKS CHECKLIST")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Always show LCM steps explicitly when adding fractions in series combinations!
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Never forget to invert 1/C_s at the end to get final C_s!
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ CBSE Problem Mastered: C_series = 1 µF, C_parallel = 11 µF, and Ratio C_p/C_s = 11! ✓",
            "★ CBSE Problem Mastered: C_series = 1 µF, C_parallel = 11 µF, and Ratio C_p/C_s = 11! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
