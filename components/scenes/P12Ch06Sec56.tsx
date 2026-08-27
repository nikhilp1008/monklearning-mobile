/**
 * P12Ch06 · Section 56 — "NEET speed trap: peak emf versus RMS emf, and phase angle"
 * Subtopic: AC Generator & Energy Density
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

export default function P12Ch06Sec56({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("NEET Speed Trap: Peak Voltage ε₀ vs RMS Voltage ε_rms", "NEET Speed Trap: Peak Voltage ε₀ vs RMS Voltage ε_rms")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: AC METERS ALWAYS READ RMS VALUES (ε_rms = ε₀ / √2) */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("AC METERS ALWAYS READ RMS VALUES (ε_rms = ε₀ / √2)", "AC METERS ALWAYS READ RMS VALUES (ε_rms = ε₀ / √2)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Voltmeter Reading: AC voltmeters measure RMS voltage ε_rms.
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Household AC Example: Nominal 220 V supply is the RMS voltage ε_rms.
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Peak Voltage Calculation: Peak amplitude ε_0 = √2 × 220 V ≈ 311 V!
          </T>

          <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Trap Option A: 220 V is NOT the peak amplitude!
          </T>
        </Fade>

        <Fade on={beat >= 5}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Insulation must withstand peak voltage 311 V, not 220 V)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: INITIAL PHASE ANGLE TRAP: θ₀ WITH NORMAL VECTOR */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("INITIAL PHASE ANGLE TRAP: θ₀ WITH NORMAL VECTOR", "INITIAL PHASE ANGLE TRAP: θ₀ WITH NORMAL VECTOR")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Angle Definition: Flux uses angle θ between normal n and B.
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Given Coil Plane Angle: If angle with coil plane is α, θ = 90° - α.
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Substitute Initial Angle: ε(t) = ε_0 sin(ωt + 90° - α).
          </T>

          <Draw on={beat >= 7} delay={dl(7, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Cosine Output: ε(t) = ε_0 cos(ωt - α)!
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Always check whether given angle is measured from coil plane or normal)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("NEET 5-SECOND SHORTCUT", "NEET 5-SECOND SHORTCUT")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Meter Reading Rule: When a question specifies "reading of AC meter", ALWAYS use RMS value ε_rms = ε_0 / √2.
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Peak Power Shortcut: Peak power P_peak = 2 × Average Power ⟨P⟩.
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ NEET Speed Trap: AC Voltmeter reads RMS ε_rms = ε₀ / √2, and peak voltage amplitude is ε₀ = √2 ε_rms! ✓",
            "★ NEET Speed Trap: AC Voltmeter reads RMS ε_rms = ε₀ / √2, and peak voltage amplitude is ε₀ = √2 ε_rms! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
