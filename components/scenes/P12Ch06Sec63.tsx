/**
 * P12Ch06 · Section 63 — "Integrated problem: AC generator driving an inductive load"
 * Subtopic: Advanced EMI, Maxwell & Chapter Synthesis
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

export default function P12Ch06Sec63({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Integrated Problem: AC Generator Driving Inductive Load (Wattless Current)", "Integrated Problem: AC Generator Driving Inductive Load (Wattless Current)")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: STEP 1: CURRENT I(t) = I₀ sin(ωt − 90°) LAGS VOLTAGE BY 90° */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("STEP 1: CURRENT I(t) = I₀ sin(ωt − 90°) LAGS VOLTAGE BY 90°", "STEP 1: CURRENT I(t) = I₀ sin(ωt − 90°) LAGS VOLTAGE BY 90°")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Generator EMF: ε(t) = ε_0 sin(ωt) across pure inductor L.
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Inductor Differential: L (dI/dt) = ε_0 sin(ωt).
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Integrate: I(t) = - (ε_0 / ωL) cos(ωt) = I_0 sin(ωt - π/2).
          </T>

          <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Inductive Reactance: X_L = ω L (in Ω), Peak I_0 = ε_0 / X_L!
          </T>
        </Fade>

        <Fade on={beat >= 5}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Current lags voltage by exactly 90° or π/2 radians)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: STEP 2: AVERAGE POWER ⟨P⟩ = 0 (WATTLESS CURRENT!) */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("STEP 2: AVERAGE POWER ⟨P⟩ = 0 (WATTLESS CURRENT!)", "STEP 2: AVERAGE POWER ⟨P⟩ = 0 (WATTLESS CURRENT!)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Instantaneous Power: P(t) = ε(t) I(t) = ε_0 I_0 sin(ωt) [-cos(ωt)].
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Double Angle Form: P(t) = - ½ ε_0 I_0 sin(2ωt).
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Average Power Integration: ⟨sin(2ωt)⟩ = 0 over full cycle.
          </T>

          <Draw on={beat >= 7} delay={dl(7, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Zero Power Dissipation: ⟨P⟩ = 0 (Wattless Current)!
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Energy oscillates back and forth between generator and magnetic field)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("BRIDGE TO CHAPTER 7 (ALTERNATING CURRENT)", "BRIDGE TO CHAPTER 7 (ALTERNATING CURRENT)")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Bridge to AC Circuits: Inductive reactance X_L = ω L acts as frequency-dependent Opposition to AC.
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Wattless Current: Ideal inductors store magnetic energy during quarter cycle and return it in the next quarter cycle!
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Pure Inductive AC Load: Current lags voltage by 90° (I₀ = ε₀ / ωL) resulting in ZERO net average power ⟨P⟩ = 0 (Wattless Current)! ✓",
            "★ Pure Inductive AC Load: Current lags voltage by 90° (I₀ = ε₀ / ωL) resulting in ZERO net average power ⟨P⟩ = 0 (Wattless Current)! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
