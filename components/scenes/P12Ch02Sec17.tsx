/**
 * P12Ch02 · Section 17 — "Formula toolkit: potential energy of charge systems"
 * Subtopic: Potential Energy & External Fields
 * OPEN CHALKBOARD DESIGN WITH FORMULA MATRIX (NO CONTAINER BOXES):
 *  - 1. Two-charge isolated system: U = k q₁ q₂ / r
 *  - 2. Three-charge system: U = k (q₁q₂/r₁₂ + q₂q₃/r₂₃ + q₁q₃/r₁₃)
 *  - 3. Two charges in external field V(r): U = q₁ V(r₁) + q₂ V(r₂) + k q₁ q₂ / r₁₂
 *  - Zero card box containers
 */

import React from "react";
import { G } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
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

export default function P12Ch02Sec17({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Formula Toolkit: Potential Energy of Isolated & External Field Charge Systems", "Formula Toolkit: Potential Energy of Isolated & External Field Charge Systems")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: ISOLATED N-CHARGE SYSTEMS */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("ISOLATED SYSTEMS (NO EXTERNAL FIELD)", "ISOLATED SYSTEMS (NO EXTERNAL FIELD)")}
          </T>
        </Fade>

        {/* Floating Formulas (No Card Boxes) */}
        <Fade on={beat >= 1}>
          <T x={45} y={85} size={15} fill={INK} weight={800} anchor="start">
            1. Two Charges: U = k q₁ q₂ / r₁₂
          </T>

          <T x={45} y={130} size={15} fill={AMBER_DARK} weight={800} anchor="start">
            2. Three Charges: U = k ( q₁q₂/r₁₂ + q₂q₃/r₂₃ + q₁q₃/r₁₃ )
          </T>

          <T x={45} y={175} size={15} fill={GREEN} weight={800} anchor="start">
            3. N-Charge General: U = ½ Σ (k q_i q_j / r_ij)
          </T>
        </Fade>

        {/* Free Floating Rule */}
        <Fade on={beat >= 3}>
          <T x={45} y={240} anchor="start" size={14} fill={RED} weight={800}>
            Pair count for N charges = N(N − 1) / 2
          </T>
          <T x={45} y={265} anchor="start" size={13} fill={MUTED} weight={700}>
            (Count every unique interaction pair once)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: CHARGES IN EXTERNAL POTENTIAL V(r) */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("CHARGES IN EXTERNAL FIELD V(r)", "CHARGES IN EXTERNAL FIELD V(r)")}
          </T>
        </Fade>

        {/* Floating External Field Formulas */}
        <Fade on={beat >= 4}>
          <T x={45} y={85} size={15} fill={RED} weight={800} anchor="start">
            1. Single Charge q in V(r): U = q V(r)
          </T>

          <T x={45} y={130} size={15} fill={GREEN} weight={800} anchor="start">
            2. Two Charges in V(r):
          </T>

          <T x={45} y={170} size={16} fill={GREEN} weight={900} anchor="start">
            U_total = q₁ V(r₁) + q₂ V(r₂) + k q₁ q₂ / r₁₂
          </T>
        </Fade>

        {/* Open Text Explanation */}
        <Fade on={beat >= 6}>
          <T x={45} y={240} anchor="start" size={14} fill={GREEN} weight={800}>
            Includes BOTH interaction with external field
          </T>
          <T x={45} y={265} anchor="start" size={13} fill={GREEN} weight={800}>
            AND mutual charge-charge interaction!
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("SYSTEM POTENTIAL ENERGY MASTER RULE", "SYSTEM POTENTIAL ENERGY MASTER RULE")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Always count: 1. External Field Energy (q V) + 2. Pairwise Mutual Energies (k q_i q_j / r_ij)!
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Never double-count pairs! Use N(N-1)/2 formula to check total term count.
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Toolkit Mastered: U_ext = q₁V(r₁) + q₂V(r₂) + k q₁ q₂ / r₁₂ (External field + Mutual interaction)! ✓",
            "★ Toolkit Mastered: U_ext = q₁V(r₁) + q₂V(r₂) + k q₁ q₂ / r₁₂ (External field + Mutual interaction)! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
