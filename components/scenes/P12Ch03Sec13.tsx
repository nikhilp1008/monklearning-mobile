/**
 * P12Ch02 · Section 13 — "Worked example: drift speed in a copper wire"
 * Beats (en [0,8,18,32,41,58,65,77]): 8 beats
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

export default function P12Ch03Sec13({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Worked Example: Drift speed in a copper wire", "Worked Example: Drift speed in a copper wire")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: PROBLEM SETUP */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("PROBLEM SETUP & GIVEN PARAMETERS", "PROBLEM SETUP & GIVEN PARAMETERS")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Master Relation: I = n e A v_d  ⇒  v_d = I / (n e A)
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Given Values: Current I = 3.0 A, n = 8.5×10²⁸ m⁻³.
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Elementary Charge: e = 1.6 × 10⁻¹⁹ C.
          </T>

          <Draw on={beat >= 4} delay={dl(4, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. SI Conversion: Area A = 1.5 mm² = 1.5 × 10⁻⁶ m²!
          </T>
        </Fade>

        <Fade on={beat >= 4}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Always convert mm² to m² before plugging into microscopic formulas)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: CALCULATION & DRIFT SPEED */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("DRIFT VELOCITY COMPUTATION", "DRIFT VELOCITY COMPUTATION")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Denominator: (8.5×10²⁸)(1.6×10⁻¹⁹)(1.5×10⁻⁶) = 2.04 × 10⁴
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Velocity Fraction: v_d = 3.0 / (2.04 × 10⁴) = 1.47 × 10⁻⁴ m/s
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Millimeter Conversion: v_d ≈ 0.147 mm/s ≈ 0.15 mm/s.
          </T>

          <Draw on={beat >= 6} delay={dl(6, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Result: Slow Snail-like drift of ~0.15 mm per second!
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Despite snail drift speed, electric field signal travels near speed of light c)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("PHYSICAL INSIGHT VERDICT", "PHYSICAL INSIGHT VERDICT")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Free electrons drift at a tiny fraction of a millimeter per second (v_d ≈ 0.15 mm/s).
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            The high current (3 A) is achieved because electron density n = 8.5×10²⁸ m⁻³ is enormous.
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Result: v_d ≈ 0.15 mm/s. Electrons crawl, but carrying a huge 3 Amperes! ✓",
            "★ Result: v_d ≈ 0.15 mm/s. Electrons crawl, but carrying a huge 3 Amperes! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
