/**
 * P12Ch02 · Section 25 — "Worked example: finding alpha from two readings"
 * Beats (en [0,10,18,28,34,45,54,67]): 8 beats
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

export default function P12Ch03Sec25({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("JEE Main Level: Finding Alpha from Two Readings", "JEE Main Level: Finding Alpha from Two Readings")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: SETTING UP RATIO */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("SETTING UP TWO-POINT RESISTANCE RATIO", "SETTING UP TWO-POINT RESISTANCE RATIO")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Given Data: R₁ = 50 Ω at 20°C, R₂ = 60 Ω at 120°C.
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Temperature Rise: ΔT = T₂ − T₁ = 120°C − 20°C = 100°C.
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Ratio Relation: R₂ / R₁ = 1 + α ΔT = 1 + 100 α.
          </T>

          <Draw on={beat >= 3} delay={dl(3, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Numerical Ratio: 60 / 50 = 1.20 = 1 + 100 α!
          </T>
        </Fade>

        <Fade on={beat >= 4}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Taking reference temperature as initial reading T₁ = 20°C)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: SOLVING FOR ALPHA */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("SOLVING FOR ALPHA & SANITY CHECK", "SOLVING FOR ALPHA & SANITY CHECK")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 4}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Fractional Increase: α ΔT = 1.20 − 1.00 = 0.20.
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Solve for α: α = 0.20 / 100°C = 2.0 × 10⁻³ °C⁻¹.
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Order of Magnitude: 2.0×10⁻³ °C⁻¹ matches pure metals.
          </T>

          <Draw on={beat >= 6} delay={dl(6, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Result: α = 2.0 × 10⁻³ °C⁻¹ !
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Positive α confirms resistance increases with temperature)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("TWO-READING NUMERICAL VERDICT", "TWO-READING NUMERICAL VERDICT")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            A 100°C temperature rise caused a 20% increase in resistance from 50 Ω to 60 Ω.
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            The temperature coefficient α = 2.0×10⁻³ °C⁻¹ is calculated directly using the R₂/R₁ ratio method.
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Result: α = 2.0×10⁻³ °C⁻¹. Straightforward 1-step solving with ratio R₂/R₁! ✓",
            "★ Result: α = 2.0×10⁻³ °C⁻¹. Straightforward 1-step solving with ratio R₂/R₁! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
