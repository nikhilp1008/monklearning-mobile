/**
 * P12Ch05 · Section 19 — "The resolution triangle and the dip to latitude relation"
 * Subtopic: Earth's Magnetism
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

export default function P12Ch05Sec19({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("The Dip-to-Latitude Relation: tan I = 2 tan λ", "The Dip-to-Latitude Relation: tan I = 2 tan λ")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: THE DIP-TO-LATITUDE FORMULA */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("THE DIP-TO-LATITUDE FORMULA", "THE DIP-TO-LATITUDE FORMULA")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Magnetic Latitude λ: Angle measured from magnetic equator.
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Dip Angle I: Angle made by field B_E with horizontal.
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Components: B_V = (μ_0/4π)(2m sin λ/r³) ; B_H = (μ_0/4π)(m cos λ/r³).
          </T>

          <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Dip-Latitude Relation: tan I = B_V / B_H = 2 tan λ!
          </T>
        </Fade>

        <Fade on={beat >= 5}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Directly links magnetic dip angle to geographic magnetic latitude)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: RESOLUTION TRIANGLE COMPONENTS */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("RESOLUTION TRIANGLE COMPONENTS", "RESOLUTION TRIANGLE COMPONENTS")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Polar Coordinate Map: Colatitude θ = 90° - λ.
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Component Conversion: cos θ = sin λ and sin θ = cos λ.
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. General Field Map: B_r = B_V and B_θ = B_H.
          </T>

          <Draw on={beat >= 7} delay={dl(7, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Ratio Check: B_V / B_H = (2 sin λ) / (cos λ) = 2 tan λ!
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Proves that Earth's field maps perfectly to a central bar magnet)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("EXAM TRAP: DIP IS NOT EQUAL TO LATITUDE", "EXAM TRAP: DIP IS NOT EQUAL TO LATITUDE")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            At Latitude λ = 45°: tan I = 2 tan(45°) = 2 ⇒ Dip angle I = tan⁻¹(2) ≈ 63.4° (NOT 45°!).
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Limiting Values: At equator (λ = 0°), I = 0° ; At poles (λ = 90°), I = 90°.
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Dip-to-latitude relation tan I = 2 tan λ yields I = 63.4° at 45° latitude! ✓",
            "★ Dip-to-latitude relation tan I = 2 tan λ yields I = 63.4° at 45° latitude! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
