/**
 * P12Ch02 · Section 45 — "Deriving E equals sigma over epsilon zero with a Gaussian pillbox"
 * Subtopic: Conductors & Spherical Capacitors Derivations
 * OPEN CHALKBOARD DESIGN WITH GAUSSIAN PILLBOX SLAB PROOF (NO CONTAINER BOXES):
 *  - Small cylindrical Gaussian pillbox half inside conductor, half outside
 *  - Inside face flux = 0 (since E_inside = 0)
 *  - Cylindrical wall flux = 0 (since E is normal to surface)
 *  - Outside face flux = E A = Q_enclosed / ε₀ = (σ A) / ε₀
 *  - Result: E = σ / ε₀ n^
 */

import React from "react";
import { G, Line, Path, Rect } from 'react-native-svg';
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

export default function P12Ch02Sec45({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Derivation: Surface Field E = σ/ε₀ via Gaussian Pillbox Integration", "Derivation: Surface Field E = σ/ε₀ via Gaussian Pillbox Integration")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: PILLBOX SCHEMATIC */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("GAUSSIAN PILLBOX CROSSING CONDUCTOR SURFACE", "GAUSSIAN PILLBOX CROSSING CONDUCTOR SURFACE")}
          </T>
        </Fade>

        {/* Conductor surface and pillbox (Open Chalkboard) */}
        <Fade on={beat >= 1}>
          {/* Conductor Boundary Line */}
          <Line x1="45" y1="170" x2="380" y2="170" stroke={INK} strokeWidth={3} />
          <T x={395} y={174} size={13} fill={INK} weight={800} anchor="start">Conductor Surface (σ)</T>

          {/* Conductor Interior note */}
          <T x={212} y={215} size={14} fill={AMBER_DARK} weight={900} anchor="middle">Inside Conductor (E = 0)</T>

          {/* Gaussian Pillbox Cylinder */}
          <Rect x="170" y="110" width="80" height="120" stroke={RED} strokeWidth={1.8} strokeDasharray="4 4" fill="none" />
          <T x={210} y={100} size={12} fill={RED} weight={800} anchor="middle">Pillbox Area A</T>

          {/* Emerging Field Vector E */}
          <Path d={arrowD(210, 170, 210, 50)} stroke={RED} strokeWidth={2.5} />
          <T x={225} y={45} size={14} fill={RED} weight={900} anchor="start">E = σ/ε₀</T>
        </Fade>

        {/* Free Floating Formula */}
        <Fade on={beat >= 3}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            Enclosed Charge: Q_enclosed = σ A
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: FLUX INTEGRAL BREAKDOWN */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("FLUX INTEGRAL BREAKDOWN FOR 3 SURFACES", "FLUX INTEGRAL BREAKDOWN FOR 3 SURFACES")}
          </T>
        </Fade>

        {/* Floating Derivation Steps */}
        <Fade on={beat >= 4}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Inside Cap Flux: Φ_inside = 0  (since E_inside = 0)
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Curved Sides Flux: Φ_sides = 0  (since E ⊥ n^)
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Outside Cap Flux: Φ_outside = E A
          </T>

          <Draw on={beat >= 4} delay={dl(4, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. E A = σ A / ε₀  ⇒  E = σ / ε₀  (Q.E.D.)
          </T>
        </Fade>

        {/* Open Text Explanation */}
        <Fade on={beat >= 6}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Valid for ANY arbitrary conductor shape in equilibrium)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("SHEET FIELD VS CONDUCTOR SURFACE FIELD", "SHEET FIELD VS CONDUCTOR SURFACE FIELD")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Single Infinite Non-conducting Sheet: E = σ / 2ε₀   |   Conductor Surface: E = σ / ε₀ !
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Conductor surface field is TWICE as large because field lines only emerge on ONE side (E_inside = 0)!
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Derivation Completed: Surface Field E = σ/ε₀ proven via 3-part Gaussian pillbox flux integration! ✓",
            "★ Derivation Completed: Surface Field E = σ/ε₀ proven via 3-part Gaussian pillbox flux integration! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
