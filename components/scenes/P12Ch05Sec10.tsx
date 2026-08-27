/**
 * P12Ch05 · Section 10 — "Derivation: force on a dipole in a non uniform field"
 * Subtopic: Bar Magnet, Magnetic Field Lines and Dipole Moment
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

export default function P12Ch05Sec10({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Derivation: Force on a Dipole in a Non-Uniform Field", "Derivation: Force on a Dipole in a Non-Uniform Field")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: STEP 1: UNEQUAL POLE FORCES IN GRADIENT B */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("STEP 1: UNEQUAL POLE FORCES IN GRADIENT B", "STEP 1: UNEQUAL POLE FORCES IN GRADIENT B")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. North Pole Position: Experiences B_1 at x + Δx ⇒ F_N = +q_m B(x + Δx).
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. South Pole Position: Experiences B_2 at x ⇒ F_S = -q_m B(x).
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Force Imbalance: F_net = q_m [B(x + Δx) - B(x)] = q_m (dB / dx) Δx.
          </T>

          <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Net Force: Non-zero force causes linear acceleration!
          </T>
        </Fade>

        <Fade on={beat >= 5}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Unlike uniform field where F_net = 0, non-uniform B causes translation)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: STEP 2: NET TRANSLATIONAL FORCE FORMULA */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("STEP 2: NET TRANSLATIONAL FORCE FORMULA", "STEP 2: NET TRANSLATIONAL FORCE FORMULA")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Dipole Substitution: Group (q_m Δx) as magnetic dipole moment m.
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. 1D Force Expression: F = m (dB / dx) for dipole along field B.
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Attraction Direction: Parallel dipole (m || B) is pulled to STRONGER B.
          </T>

          <Draw on={beat >= 7} delay={dl(7, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Repulsion Direction: Anti-parallel dipole (m || -B) is repelled!
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (This is why unmagnetized iron is always attracted to any magnet pole)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("GENERAL GRADIENT VECTOR FORMULA", "GENERAL GRADIENT VECTOR FORMULA")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Vector Gradient: F = ∇ (m · B) where ∇ is the spatial gradient operator.
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Physical Meaning: Force drives dipoles toward regions that minimize potential energy U = -m · B.
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Net translational force F = m (dB/dx) pulls parallel dipoles into stronger magnetic fields! ✓",
            "★ Net translational force F = m (dB/dx) pulls parallel dipoles into stronger magnetic fields! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
