/**
 * P12Ch02 · Section 43 — "Formula toolkit: spherical conductors and capacitors"
 * Subtopic: Conductors & Spherical Capacitors
 * OPEN CHALKBOARD DESIGN WITH SPHERICAL CAPACITOR SCHEMATICS (NO CONTAINER BOXES):
 *  - 1. Isolated Spherical Conductor: C = 4π ε₀ R  (Earth C ≈ 711 µF)
 *  - 2. Concentric Spherical Capacitor (Inner radius a, Outer radius b): C = 4π ε₀ (a b / (b - a))
 *  - 3. Concentric Shell Potentials: V_inner = k q₁/a + k q₂/b
 *  - Zero card box containers
 */

import React from "react";
import { Circle, G, Line } from 'react-native-svg';
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

export default function P12Ch02Sec43({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Formula Toolkit: Isolated Spheres C = 4πε₀R & Spherical Capacitors C = 4πε₀(ab/(b−a))", "Formula Toolkit: Isolated Spheres C = 4πε₀R & Spherical Capacitors C = 4πε₀(ab/(b−a))")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: ISOLATED SPHERICAL CONDUCTOR */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("ISOLATED SPHERICAL CONDUCTOR (RADIUS R)", "ISOLATED SPHERICAL CONDUCTOR (RADIUS R)")}
          </T>
        </Fade>

        {/* Sphere Diagram (Open Chalkboard) */}
        <Fade on={beat >= 1}>
          <Circle cx={212} cy={155} r={65} stroke={RED} strokeWidth={1.8} fill="none" />
          <Line x1="212" y1="155" x2="277" y2="155" stroke={INK} strokeWidth={1.8} />
          <T x={245} y={148} size={12} fill={INK} weight={800} anchor="middle">Radius R</T>
          <T x={212} y={185} size={14} fill={RED} weight={900} anchor="middle">Sphere (+Q)</T>
        </Fade>

        {/* Free Floating Formula */}
        <Fade on={beat >= 3}>
          <T x={45} y={268} anchor="start" size={14} fill={GREEN} weight={900}>
            C = 4π ε₀ R   (Earth R = 6400 km → C ≈ 711 µF!)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: CONCENTRIC SPHERICAL CAPACITOR (a, b) */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("CONCENTRIC SPHERICAL CAPACITOR (a, b)", "CONCENTRIC SPHERICAL CAPACITOR (a, b)")}
          </T>
        </Fade>

        {/* Concentric Shells Diagram (Open Chalkboard) */}
        <Fade on={beat >= 4}>
          {/* Inner Shell a */}
          <Circle cx={212} cy={155} r={40} stroke={RED} strokeWidth={1.8} fill="none" />
          <T x={212} y={160} size={13} fill={RED} weight={900} anchor="middle">+Q (a)</T>

          {/* Outer Shell b */}
          <Circle cx={212} cy={155} r={80} stroke={GREEN} strokeWidth={1.8} fill="none" strokeDasharray="5 5" />
          <T x={212} y={55} size={13} fill={GREEN} weight={900} anchor="middle">−Q Outer Shell (b, Grounded)</T>
        </Fade>

        {/* Free Floating Formula */}
        <Fade on={beat >= 5}>
          <T x={45} y={268} anchor="start" size={14} fill={GREEN} weight={900}>
            C = 4π ε₀ [ (a b) / (b − a) ]
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("SPHERICAL SHELL POTENTIAL SUPERPOSITION", "SPHERICAL SHELL POTENTIAL SUPERPOSITION")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Inner Shell Potential: V_inner = k q₁/a + k q₂/b   |   Outer Shell Potential: V_outer = k(q₁ + q₂)/b !
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Potential difference ΔV = V_inner − V_outer = k q₁ (1/a − 1/b) depends ONLY on inner charge q₁!
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Spherical Toolkit Mastered: Isolated Sphere C = 4πε₀R vs Spherical Capacitor C = 4πε₀ ab/(b−a)! ✓",
            "★ Spherical Toolkit Mastered: Isolated Sphere C = 4πε₀R vs Spherical Capacitor C = 4πε₀ ab/(b−a)! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
