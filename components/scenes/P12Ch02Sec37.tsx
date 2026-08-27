/**
 * P12Ch02 · Section 37 — "JEE Advanced: composite dielectric, two stacked slabs"
 * Subtopic: Capacitance, Dielectrics & Stored Energy
 * OPEN CHALKBOARD DESIGN WITH COMPOSITE DIELECTRIC SCHEMATIC (NO CONTAINER BOXES):
 *  - Case 1: Series Slabs (thicknesses t₁, t₂ stacked vertically) -> 1/C_eq = t₁/(ε₀A K₁) + t₂/(ε₀A K₂)
 *  - Case 2: Parallel Slabs (areas A₁, A₂ side-by-side) -> C_eq = ε₀A₁K₁/d + ε₀A₂K₂/d
 *  - General Integral formula for non-uniform dielectric K(x)
 *  - Zero card box containers
 */

import React from "react";
import { G, Line, Rect } from 'react-native-svg';
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

export default function P12Ch02Sec37({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("JEE Advanced: Composite Dielectric Slabs (Series Stacked vs Parallel Split)", "JEE Advanced: Composite Dielectric Slabs (Series Stacked vs Parallel Split)")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: STACKED SLABS IN SERIES (t1, t2) */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("STACKED SLABS IN SERIES (THICKNESS t₁, t₂)", "STACKED SLABS IN SERIES (THICKNESS t₁, t₂)")}
          </T>
        </Fade>

        {/* Stacked Slab Diagram */}
        <Fade on={beat >= 1}>
          <Line x1="45" y1="80" x2="380" y2="80" stroke={RED} strokeWidth={4} />
          <Line x1="45" y1="230" x2="380" y2="230" stroke={GREEN} strokeWidth={4} />

          {/* Slab 1 (K1, t1) */}
          <Rect x="55" y="85" width="315" height="65" fill="none" stroke={AMBER_DARK} strokeWidth={1.8} strokeDasharray="6 4" />
          <T x={212} y={122} size={14} fill={AMBER_DARK} weight={900} anchor="middle">Slab 1 (K₁, t₁)</T>

          {/* Slab 2 (K2, t2) */}
          <Rect x="55" y="155" width="315" height="70" fill="none" stroke="#0284c7" strokeWidth={1.8} strokeDasharray="6 4" />
          <T x={212} y={195} size={14} fill="#0369a1" weight={900} anchor="middle">Slab 2 (K₂, t₂)</T>
        </Fade>

        {/* Free Floating Series Formula */}
        <Fade on={beat >= 3}>
          <T x={45} y={268} anchor="start" size={14} fill={GREEN} weight={900}>
            C_eq = ε₀ A / [ (t₁ / K₁) + (t₂ / K₂) ]
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: SIDE-BY-SIDE SLABS IN PARALLEL (A1, A2) */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("SIDE-BY-SIDE SLABS IN PARALLEL (AREA A₁, A₂)", "SIDE-BY-SIDE SLABS IN PARALLEL (AREA A₁, A₂)")}
          </T>
        </Fade>

        {/* Side-by-Side Slab Diagram */}
        <Fade on={beat >= 4}>
          <Line x1="45" y1="80" x2="380" y2="80" stroke={RED} strokeWidth={4} />
          <Line x1="45" y1="230" x2="380" y2="230" stroke={GREEN} strokeWidth={4} />

          {/* Slab 1 (K1, A1) */}
          <Rect x="55" y="85" width="150" height="140" fill="none" stroke={AMBER_DARK} strokeWidth={1.8} strokeDasharray="6 4" />
          <T x={130} y={160} size={14} fill={AMBER_DARK} weight={900} anchor="middle">Slab 1 (K₁, A₁)</T>

          {/* Slab 2 (K2, A2) */}
          <Rect x="220" y="85" width="150" height="140" fill="none" stroke="#0284c7" strokeWidth={1.8} strokeDasharray="6 4" />
          <T x={295} y={160} size={14} fill="#0369a1" weight={900} anchor="middle">Slab 2 (K₂, A₂)</T>
        </Fade>

        {/* Free Floating Parallel Formula */}
        <Fade on={beat >= 5}>
          <T x={45} y={268} anchor="start" size={14} fill={GREEN} weight={900}>
            C_eq = (ε₀ / d) [ A₁ K₁ + A₂ K₂ ]
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("JEE ADVANCED NON-UNIFORM K(x) INTEGRATION", "JEE ADVANCED NON-UNIFORM K(x) INTEGRATION")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            For continuously varying K(x): 1/C_eq = (1/ε₀A) ∫₀^d dx / K(x) !
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Split perpendicular to E field lines = Series; Split parallel to E field lines = Parallel!
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Composite Dielectric Mastered: Series Stacked C_eq = ε₀A / Σ(t_i/K_i) vs Parallel Split C_eq = (ε₀/d) Σ(A_i K_i)! ✓",
            "★ Composite Dielectric Mastered: Series Stacked C_eq = ε₀A / Σ(t_i/K_i) vs Parallel Split C_eq = (ε₀/d) Σ(A_i K_i)! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
