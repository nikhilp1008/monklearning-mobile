/**
 * P12Ch02 · Section 4 — "The free-electron model and its limits"
 * Beats (en [0,10,15,25,35,47,56,67]): 8 beats
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

export default function P12Ch03Sec4({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("The free-electron model and its limits", "The free-electron model and its limits")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: ELECTRON GAS MODEL & DERIVATION */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("FREE-ELECTRON GAS MODEL (DRUDE-LORENTZ)", "FREE-ELECTRON GAS MODEL (DRUDE-LORENTZ)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={INK} weight={800} anchor="start">
            1. Free Electrons: Valence e⁻ move freely like ideal gas molecules.
          </T>

          <T x={45} y={125} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            2. Relaxation Time τ: Average time between collisions (τ ≈ 10⁻¹⁴ s).
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Mean Free Path λ: Average distance between collisions λ = v_th × τ ≈ 1 nm.
          </T>

          <Draw on={beat >= 2} delay={dl(2, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Drift Velocity Formula: v_d = (e E τ) / m !
          </T>
        </Fade>

        <Fade on={beat >= 4}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Drift acceleration a = eE/m is interrupted by collisions every τ seconds)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: CLASSICAL MODEL LIMITATIONS */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("CLASSICAL MODEL LIMITATIONS", "CLASSICAL MODEL LIMITATIONS")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={RED} weight={800} anchor="start">
            1. Ignores Quantum Mechanics: Treats electrons as classical billiard balls.
          </T>

          <T x={45} y={125} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            2. Specific Heat Anomaly: Predicts wrong electronic heat capacity.
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Semiconductor Failure: Fails for temperature coefficient of semiconductors!
          </T>

          <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Modern Solution: Requires Quantum Band Theory!
          </T>
        </Fade>

        <Fade on={beat >= 6}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Drude model successfully yields Ohm's Law J = σE, despite quantum flaws)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("MODEL SUMMARY VERDICT", "MODEL SUMMARY VERDICT")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            The classical free-electron model provides a physical foundation for Ohm's law via v_d = (eEτ)/m.
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Quantum band theory is required to explain semiconductors, insulators, and low-temperature behavior.
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Classical model explains Ohm's law, but quantum band theory is needed for semiconductors! ✓",
            "★ Classical model explains Ohm's law, but quantum band theory is needed for semiconductors! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
