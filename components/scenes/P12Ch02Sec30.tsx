/**
 * P12Ch02 · Section 30 — "Formula toolkit: capacitance and the parallel plate"
 * Subtopic: Capacitance, Dielectrics & Stored Energy
 * OPEN CHALKBOARD DESIGN WITH MASTER PARALLEL PLATE FORMULAS (NO CONTAINER BOXES):
 *  - 1. Vacuum Capacitor: C₀ = ε₀ A / d
 *  - 2. Full Dielectric Slab: C = K C₀ = K ε₀ A / d
 *  - 3. Partial Dielectric Slab (thickness t < d): C = ε₀ A / (d - t + t/K)
 *  - 4. Field & Charge Density: E = σ / ε₀ = Q / (ε₀ A)
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

export default function P12Ch02Sec30({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Formula Toolkit: Parallel Plate Capacitance & Partial Dielectric Slabs", "Formula Toolkit: Parallel Plate Capacitance & Partial Dielectric Slabs")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: VACUUM & FULL DIELECTRIC FORMULAS */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("VACUUM & FULL DIELECTRIC FORMULAS", "VACUUM & FULL DIELECTRIC FORMULAS")}
          </T>
        </Fade>

        {/* Floating Formulas */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={15} fill={INK} weight={800} anchor="start">
            1. Air/Vacuum Capacitor: C₀ = ε₀ A / d
          </T>

          <T x={45} y={125} size={15} fill={AMBER_DARK} weight={800} anchor="start">
            2. Fully Filled Medium (Constant K): C = K C₀ = K (ε₀ A / d)
          </T>

          <T x={45} y={170} size={15} fill={GREEN} weight={800} anchor="start">
            3. Plate Field E = σ / ε₀ = Q / (ε₀ A)
          </T>
        </Fade>

        {/* Free Floating Rule */}
        <Fade on={beat >= 3}>
          <T x={45} y={268} anchor="start" size={13} fill={RED} weight={800}>
            Electric Field E inside air gap is UNIFORM (E = V / d)!
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: PARTIAL DIELECTRIC SLAB (THICKNESS t < d) */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("PARTIAL DIELECTRIC SLAB FORMULA (t < d)", "PARTIAL DIELECTRIC SLAB FORMULA (t < d)")}
          </T>
        </Fade>

        {/* Floating Partial Slab Formulas */}
        <Fade on={beat >= 4}>
          <T x={45} y={80} size={15} fill={RED} weight={800} anchor="start">
            4. Partial Slab (Thickness t):
          </T>

          <T x={65} y={125} size={17} fill={GREEN} weight={900} anchor="start">
            C = ε₀ A / [ d − t + (t / K) ]
          </T>

          <T x={45} y={170} size={15} fill={AMBER_DARK} weight={800} anchor="start">
            5. Conducting Slab (K → ∞): C = ε₀ A / (d − t)
          </T>
        </Fade>

        {/* Open Text Explanation */}
        <Fade on={beat >= 6}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Conducting slab of thickness t reduces plate gap to d − t)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("PARALLEL PLATE TOOLKIT SUMMARY", "PARALLEL PLATE TOOLKIT SUMMARY")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Full Slab (t = d) → C = K C₀   |   Conducting Slab (K = ∞) → C = ε₀ A / (d − t)!
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Permittivity of free space ε₀ = 8.854 × 10⁻¹² F/m!
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Parallel Plate Toolkit Mastered: C = ε₀A / [d − t + (t/K)] for any partial dielectric slab of thickness t! ✓",
            "★ Parallel Plate Toolkit Mastered: C = ε₀A / [d − t + (t/K)] for any partial dielectric slab of thickness t! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
