/**
 * P12Ch06 · Section 50 — "Five checks to perform on generator problems"
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

export default function P12Ch06Sec50({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Five Essential Verification Checks for Generator Problems", "Five Essential Verification Checks for Generator Problems")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: CHECKS 1 - 3: FREQUENCY ω = 2πf, ANGLE θ & RMS VALUE */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("CHECKS 1 - 3: FREQUENCY ω = 2πf, ANGLE θ & RMS VALUE", "CHECKS 1 - 3: FREQUENCY ω = 2πf, ANGLE θ & RMS VALUE")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Frequency Check: Convert f (Hz / rpm) to rad/s via ω = 2πf.
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Angle Check: Angle θ is between normal vector n and field B.
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. RMS Voltage Check: ε_rms = ε_0 / √2 = 0.707 ε_0.
          </T>

          <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Zero Point Swap: When flux is max, EMF is zero!
          </T>
        </Fade>

        <Fade on={beat >= 5}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Never mix up peak voltage ε_0 with RMS voltage ε_rms)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: CHECKS 4 - 5: TURNS MULTIPLIER N & AVERAGE POWER */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("CHECKS 4 - 5: TURNS MULTIPLIER N & AVERAGE POWER", "CHECKS 4 - 5: TURNS MULTIPLIER N & AVERAGE POWER")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Turn Count N: Multiply single loop EMF by N turns: ε_0 = N B A ω.
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Instantaneous Power: P(t) = ε(t)² / R = (ε_0² / R) sin²(ωt).
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Average Power: ⟨P⟩ = (ε_0² / R) ⟨sin²(ωt)⟩ = ε_0² / (2 R).
          </T>

          <Draw on={beat >= 7} delay={dl(7, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Power Equivalence: ⟨P⟩ = ε_rms² / R = P_peak / 2!
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Average AC power dissipated in resistor is exactly half peak power)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("GENERATOR VERIFICATION CHECKLIST", "GENERATOR VERIFICATION CHECKLIST")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Exam Checklist: 1. ω = 2πf → 2. ε_0 = N B A ω → 3. ε_rms = ε_0 / √2 → 4. Angle θ relative to normal → 5. Average power factor ½.
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Common Mistake: Forgetting to divide peak power by 2 when asked for average power over a cycle.
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Generator 5-Check: ω = 2πf, ε₀ = NBAω, ε_rms = ε₀/√2, normal angle θ, and average power ⟨P⟩ = ε₀² / (2R)! ✓",
            "★ Generator 5-Check: ω = 2πf, ε₀ = NBAω, ε_rms = ε₀/√2, normal angle θ, and average power ⟨P⟩ = ε₀² / (2R)! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
