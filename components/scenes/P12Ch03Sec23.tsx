/**
 * P12Ch02 · Section 23 — "Worked example: reading a four-band resistor"
 * Beats (en [0,8,16,24,37,46,52,66]): 8 beats
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

export default function P12Ch03Sec23({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("CBSE Level: Reading a Four-Band Resistor", "CBSE Level: Reading a Four-Band Resistor")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: DECODING COLOUR BANDS */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("DECODING 4-BAND RESISTOR COLOURS", "DECODING 4-BAND RESISTOR COLOURS")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Band 1 (Brown): 1st significant digit = 1.
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Band 2 (Black): 2nd significant digit = 0.
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Band 3 (Red): Multiplier = 10² = 100.
          </T>

          <Draw on={beat >= 3} delay={dl(3, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Band 4 (Gold): Tolerance = ± 5%!
          </T>
        </Fade>

        <Fade on={beat >= 4}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Given sequence: Brown, Black, Red, Gold)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: RESISTANCE COMPUTATION */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("RESISTANCE & TOLERANCE COMPUTATION", "RESISTANCE & TOLERANCE COMPUTATION")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 4}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Nominal Resistance: R = (10) × 10² = 1000 Ω = 1.0 kΩ.
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Tolerance Value: ΔR = 5% of 1000 Ω = ± 50 Ω.
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Expected Resistance Range: 950 Ω ≤ R ≤ 1050 Ω.
          </T>

          <Draw on={beat >= 6} delay={dl(6, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Final Rating: 1.0 kΩ ± 5% (950 Ω to 1050 Ω)!
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Any measured value between 950 Ω and 1050 Ω passes quality inspection)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("RESISTOR READING VERDICT", "RESISTOR READING VERDICT")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            First two bands give digits (10), 3rd band gives multiplier 10², resulting in 1000 Ω (1 kΩ).
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Gold 4th band specifies ±5% tolerance (±50 Ω deviation from nominal value).
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Result: R = 1 kΩ ± 5% (Range: 950 Ω – 1050 Ω). Perfect 4-band read! ✓",
            "★ Result: R = 1 kΩ ± 5% (Range: 950 Ω – 1050 Ω). Perfect 4-band read! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
