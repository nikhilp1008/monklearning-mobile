/**
 * P12Ch02 · Section 42 — "Formula toolkit: conductors in equilibrium"
 * Subtopic: Conductors & Spherical Capacitors
 * OPEN CHALKBOARD DESIGN WITH 5 CONDUCTOR RULES MASTER MATRIX (NO CONTAINER BOXES):
 *  - 1. E_inside = 0
 *  - 2. ρ_inside = 0 (charge on outer surface only)
 *  - 3. V_inside = V_surface = Constant
 *  - 4. E_surface = (σ / ε₀) n^
 *  - 5. Action of points: Surface charge density σ ∝ 1/R (Corona discharge at sharp tips)
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

export default function P12Ch02Sec42({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Formula Toolkit: The 5 Golden Rules of Conductors in Equilibrium", "Formula Toolkit: The 5 Golden Rules of Conductors in Equilibrium")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: RULES 1 TO 3 */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("INTERNAL FIELD & POTENTIAL RULES", "INTERNAL FIELD & POTENTIAL RULES")}
          </T>
        </Fade>

        {/* Floating Rules */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={RED} weight={800} anchor="start">
            1. E_inside = 0 N/C  (Zero electrostatic field inside)
          </T>

          <T x={45} y={125} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            2. ρ_inside = 0  (All excess charge on outer boundary)
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. V_inside = V_surface = Constant  (Equipotential Blob)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: RULES 4 & 5 (SURFACE FIELD & ACTION OF POINTS) */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("SURFACE FIELD & CORONA DISCHARGE", "SURFACE FIELD & CORONA DISCHARGE")}
          </T>
        </Fade>

        {/* Floating Rules */}
        <Fade on={beat >= 4}>
          <T x={45} y={80} size={14} fill={RED} weight={800} anchor="start">
            4. Surface Field E = (σ / ε₀) n^  (Always ⊥ to surface)
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            5. Action of Points: σ ∝ 1 / R_curvature
          </T>

          <T x={65} y={160} size={13} fill={AMBER_DARK} weight={800} anchor="start">
            Sharp tips have highest charge density σ & max field E!
          </T>
        </Fade>

        {/* Open Text Explanation */}
        <Fade on={beat >= 6}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Corona discharge occurs when E at sharp points &gt; 3×10⁶ V/m)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("SUMMARY OF CONDUCTOR PROPERTIES", "SUMMARY OF CONDUCTOR PROPERTIES")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Spherical Conductor: σ = Q / (4π R²) is uniform   |   Irregular Conductor: σ is non-uniform!
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Electrostatic shielding prevents external electric fields from affecting internal cavity!
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Conductor Toolkit Mastered: E_in = 0, ρ_in = 0, V = Const, E_surf = σ/ε₀, and σ ∝ 1/R (Action of Points)! ✓",
            "★ Conductor Toolkit Mastered: E_in = 0, ρ_in = 0, V = Const, E_surf = σ/ε₀, and σ ∝ 1/R (Action of Points)! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
