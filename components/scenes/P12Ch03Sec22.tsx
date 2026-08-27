/**
 * P12Ch02 · Section 22 — "Resistivity ranges and the resistor colour code"
 * Beats (en [0,8,16,24,37,46,52,66]): 8 beats
 */

import React from "react";
import { G, Rect } from 'react-native-svg';
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

export default function P12Ch03Sec22({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Resistivity ranges and resistor colour code", "Resistivity ranges and resistor colour code")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: MATERIAL RESISTIVITY RANGES */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("MATERIAL RESISTIVITY RANGES", "MATERIAL RESISTIVITY RANGES")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={GREEN} weight={800} anchor="start">
            1. Conductors (Metals): Low ρ ~ 10⁻⁸ to 10⁻⁶ Ω·m (Copper, Silver)
          </T>

          <T x={45} y={125} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            2. Semiconductors: Medium ρ ~ 10⁻⁵ to 10² Ω·m (Silicon, Germanium)
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Insulators: High ρ ~ 10⁸ to 10¹⁶ Ω·m (Glass, Rubber)
          </T>

          <Draw on={beat >= 3} delay={dl(3, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Wide Spectrum: 24 orders of magnitude variation across materials!
          </T>
        </Fade>

        <Fade on={beat >= 4}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Carbon resistors are manufactured to precise resistance values)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: 4-BAND RESISTOR COLOUR CODE */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("4-BAND CARBON RESISTOR COLOUR CODE", "4-BAND CARBON RESISTOR COLOUR CODE")}
          </T>
        </Fade>

        {/* Resistor Open Diagram */}
        <Fade on={beat >= 4}>
          <G transform="translate(45, 45)">
            <Draw on={beat >= 4} delay={dl(4, 0.4)} d="M 0 35 L 50 35 M 370 35 L 420 35" stroke={INK} sw={3} />
            <Rect x={50} y={10} width={320} height={50} rx={10} fill="#fef3c7" stroke={INK} strokeWidth={2} />
            <Rect x={100} y={10} width={16} height={50} fill="#92400e" />
            <Rect x={150} y={10} width={16} height={50} fill="#000000" />
            <Rect x={200} y={10} width={16} height={50} fill="#ef4444" />
            <Rect x={300} y={10} width={16} height={50} fill="#eab308" />
          </G>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={135} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Band 1 &amp; 2: First two significant digits of resistance.
          </T>

          <T x={45} y={175} size={14} fill={GREEN} weight={800} anchor="start">
            2. Band 3: Decimal multiplier 10ᵐ.
          </T>

          <Draw on={beat >= 6} delay={dl(6, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            3. Formula: R = (Digit 1 Digit 2) × 10ᵐ ± Tolerance!
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Tolerance: Gold = ±5%, Silver = ±10%, No band = ±20%)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("MNEMONIC & READING RULE VERDICT", "MNEMONIC & READING RULE VERDICT")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Mnemonic: "B B ROY of Great Britain had a Very Good Wife" (Black 0, Brown 1, Red 2, Orange 3, Yellow 4, Green 5, Blue 6, Violet 7, Grey 8, White 9).
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Always position the tolerance band (Gold/Silver) on the RIGHT before reading the colour bands left-to-right.
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Keep tolerance band on RIGHT before reading bands left to right! ✓",
            "★ Keep tolerance band on RIGHT before reading bands left to right! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
