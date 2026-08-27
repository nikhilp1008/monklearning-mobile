/**
 * P12Ch02 · Section 11 — "Microscopic derivation of Ohm's law"
 * Beats (en [0,12,21,29,39,47,61,73]): 8 beats
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

export default function P12Ch03Sec11({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Microscopic derivation of Ohm's law", "Microscopic derivation of Ohm's law")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: DRIFT VELOCITY SUBSTITUTION */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("STEP 1: DRIFT VELOCITY SUBSTITUTION", "STEP 1: DRIFT VELOCITY SUBSTITUTION")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Master Relation: I = n e A v_d (Macroscopic current formula)
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Substitute Drift Velocity: v_d = (e E τ) / m.
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Combine Terms: I = n e A (e E τ / m) = (n e² A τ / m) E.
          </T>

          <Draw on={beat >= 3} delay={dl(3, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Electric Field Link: E = V / L for uniform wire!
          </T>
        </Fade>

        <Fade on={beat >= 4}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Connects microscopic E field to macroscopic terminal voltage V)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: REARRANGING FOR OHM'S LAW */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("STEP 2: REARRANGING FOR OHM'S LAW", "STEP 2: REARRANGING FOR OHM'S LAW")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Voltage Expression: I = (n e² A τ / m L) V
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Solve for Potential: V = I [ (m / n e² τ) (L / A) ]
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Identify Resistance: R = (m L) / (n e² τ A) = ρ (L / A).
          </T>

          <Draw on={beat >= 6} delay={dl(6, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Microscopic Resistivity: ρ = m / (n e² τ) !
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Proves V ∝ I at constant temperature where n and τ remain fixed)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("DERIVATION COMPLETE VERDICT", "DERIVATION COMPLETE VERDICT")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Ohm's law V = IR is not a fundamental axiom, but a microscopic result of free electron collision dynamics.
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            The resistance R = (mL)/(ne²τA) directly reveals why R increases with wire length L and decreases with area A.
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Derived! R = (mL)/(ne²τA) and ρ = m/(ne²τ). Ohm's law emerges from electron dynamics! ✓",
            "★ Derived! R = (mL)/(ne²τA) and ρ = m/(ne²τ). Ohm's law emerges from electron dynamics! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
