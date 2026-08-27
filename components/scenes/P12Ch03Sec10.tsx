/**
 * P12Ch02 · Section 10 — "Board derivation, step one: drift velocity"
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

export default function P12Ch03Sec10({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Board derivation: step one — drift velocity", "Board derivation: step one — drift velocity")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: FORCE & ACCELERATION DERIVATION */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("STEP 1: FORCE & ACCELERATION DERIVATION", "STEP 1: FORCE & ACCELERATION DERIVATION")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Electric Force: F = −e E (Opposite to field direction)
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Newton's 2nd Law: Acceleration a = F / m = −(e E) / m.
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Velocity Profile: v_i = u_i + a t_i between successive collisions.
          </T>

          <Draw on={beat >= 3} delay={dl(3, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Thermal Average: ⟨u_i⟩ = 0 due to random motion!
          </T>
        </Fade>

        <Fade on={beat >= 4}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Random thermal velocity cancels out to zero across 10²⁸ electrons/m³)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: ENSEMBLE AVERAGING OVER τ */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("STEP 2: ENSEMBLE AVERAGING OVER RELAXATION TIME", "STEP 2: ENSEMBLE AVERAGING OVER RELAXATION TIME")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Average Velocity: v_d = ⟨v_i⟩ = ⟨u_i⟩ + a ⟨t_i⟩
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Substitute Averages: v_d = 0 + a τ = a τ (where ⟨t_i⟩ = relaxation time τ)
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Substitute Acceleration: v_d = −(e E / m) τ.
          </T>

          <Draw on={beat >= 6} delay={dl(6, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Drift Magnitude: |v_d| = (e E τ) / m !
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (This fundamental relation directly leads to microscopic Ohm's law J = σE)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("DERIVATION SUMMARY VERDICT", "DERIVATION SUMMARY VERDICT")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Electrons accelerate between collisions for an average time τ before momentum is randomized by ion collisions.
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            The resulting steady average drift speed |v_d| = (e E τ) / m underpins all electrical conduction.
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Derived Result: v_d = (e E τ) / m. This is the foundation of Ohm's Law! ✓",
            "★ Derived Result: v_d = (e E τ) / m. This is the foundation of Ohm's Law! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
