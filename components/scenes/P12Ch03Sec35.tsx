/**
 * P12Ch02 · Section 35 — "Worked example: three resistors, series and parallel"
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

export default function P12Ch03Sec35({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("CBSE Level: Three Resistors Two Ways (2 Ω, 3 Ω, 6 Ω)", "CBSE Level: Three Resistors Two Ways (2 Ω, 3 Ω, 6 Ω)")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: SERIES CALCULATION */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("SERIES CALCULATION (2 Ω + 3 Ω + 6 Ω)", "SERIES CALCULATION (2 Ω + 3 Ω + 6 Ω)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Series Formula: R_s = R₁ + R₂ + R₃.
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Plug Values: R_s = 2 Ω + 3 Ω + 6 Ω.
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Sum: R_s = 11 Ω.
          </T>

          <Draw on={beat >= 3} delay={dl(3, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Sanity Check: 11 Ω &gt; 6 Ω (Greater than largest resistor)!
          </T>
        </Fade>

        <Fade on={beat >= 4}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Series configuration maximizes overall circuit opposition)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: PARALLEL CALCULATION */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("PARALLEL CALCULATION (2 Ω || 3 Ω || 6 Ω)", "PARALLEL CALCULATION (2 Ω || 3 Ω || 6 Ω)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 4}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Parallel Formula: 1 / R_p = 1/2 + 1/3 + 1/6.
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Common Denominator (6): 1 / R_p = (3 + 2 + 1) / 6 = 6 / 6 = 1.
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Take Reciprocal: R_p = 1 / 1 = 1 Ω.
          </T>

          <Draw on={beat >= 6} delay={dl(6, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Sanity Check: 1 Ω &lt; 2 Ω (Less than smallest resistor)!
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Parallel configuration minimizes overall circuit opposition)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("THREE-RESISTOR WORKED EXAMPLE VERDICT", "THREE-RESISTOR WORKED EXAMPLE VERDICT")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Series combination yields 11 Ω; Parallel combination yields 1 Ω.
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Notice how parallel combination of (2 Ω, 3 Ω, 6 Ω) yields exact integer 1 Ω (classic CBSE problem design).
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Result: R_s = 11 Ω and R_p = 1 Ω. Beautiful exact integer solutions! ✓",
            "★ Result: R_s = 11 Ω and R_p = 1 Ω. Beautiful exact integer solutions! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
