/**
 * P12Ch02 · Section 17 — "Pitfalls and pro-tips for current and drift velocity"
 * Beats (en [0,7,18,27,42,49,62,76]): 8 beats
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

export default function P12Ch03Sec17({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Pitfalls & Pro-Tips: Current & Drift Velocity", "Pitfalls & Pro-Tips: Current & Drift Velocity")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: SCALAR CURRENT VS VECTOR DENSITY */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("SCALAR CURRENT VS VECTOR DENSITY", "SCALAR CURRENT VS VECTOR DENSITY")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Current I is a SCALAR: Charges add algebraically (dot product I = ∫ J · dA).
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Current Density J is a VECTOR: Points in direction of local E field.
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Junction Law: Σ I_in = Σ I_out follows charge conservation.
          </T>

          <Draw on={beat >= 3} delay={dl(3, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Vector Trap: Never treat circuit current I as a vector!
          </T>
        </Fade>

        <Fade on={beat >= 4}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Current has direction but obeys scalar addition rules)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: DRIFT SPEED VS E-FIELD SIGNAL SPEED */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("DRIFT SPEED VS E-FIELD SIGNAL SPEED", "DRIFT SPEED VS E-FIELD SIGNAL SPEED")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Electron Drift Speed v_d: Tiny crawl velocity (~10⁻⁴ m/s or ~0.1 mm/s)
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Signal Propagation Speed: E-field setup travels near speed of light c!
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Instant Bulb On: Field sets all electrons drifting simultaneously!
          </T>

          <Draw on={beat >= 6} delay={dl(6, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Stretch Law: R ∝ L² for constant volume wire!
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Resistivity ρ is a material constant independent of wire geometry)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("EXAM PRO-TIPS VERDICT", "EXAM PRO-TIPS VERDICT")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Always double-check order of magnitude: v_d ~ 10⁻⁴ m/s, relaxation time τ ~ 10⁻¹⁴ s.
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Remember that stretching changes resistance R (R ∝ L²), but resistivity ρ remains constant.
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Sanity Checks: v_d ~ 10⁻⁴ m/s, τ ~ 10⁻¹⁴ s. R changes on stretching, ρ does not! ✓",
            "★ Sanity Checks: v_d ~ 10⁻⁴ m/s, τ ~ 10⁻¹⁴ s. R changes on stretching, ρ does not! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
