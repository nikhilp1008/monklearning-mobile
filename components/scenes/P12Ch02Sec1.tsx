/**
 * P12Ch02 · Section 1 — "Electrostatic potential — the electrical altitude"
 * Canvas 1080×620 · Safe region x36–1044, y30–596.
 * OPEN CHALKBOARD DESIGN (ZERO CONTAINER BOXES):
 *  - Fully open, spacious layout with wide breathing room
 *  - SVG Vector Diagrams: Potential Mountain Contour & V(r) ∝ 1/r Hyperbolic Curve
 *  - Free-floating typography with drawn accent underlines
 */

import React from "react";
import { Circle, G, Line, Path } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip,
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

export default function P12Ch02Sec1({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Charge motion along potential hill (plays once and stays)
  const flowPos = Math.min(1, currentTime * 0.4);
  const qx = 60 + flowPos * 340;
  const qy = 260 - Math.sin(flowPos * Math.PI) * 110;

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Electrostatic Potential: Electrical Altitude V = W_ext / q₀ = kQ/r", "Electrostatic Potential: Electrical Altitude V = W_ext / q₀ = kQ/r")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: OPEN MOUNTAIN CONTOUR DIAGRAM */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={25} cy={22} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={26} size={15} fill={RED} weight={800} anchor="start">
            {t("ELECTRICAL ALTITUDE ANALOGY", "ELECTRICAL ALTITUDE ANALOGY")}
          </T>
        </Fade>

        {/* Mountain Contour Path standing open on canvas */}
        <Fade on={beat >= 1}>
          {/* Ground Reference Line */}
          <Line x1="20" y1="260" x2="460" y2="260" stroke={MUTED} strokeWidth={2} strokeDasharray="5 5" />
          <T x={450} y={280} size={12} fill={MUTED} anchor="end">Infinity Reference V(∞) = 0 V</T>

          {/* Potential Hill Contour V(r) */}
          <Path d="M 20 260 C 120 260, 200 240, 260 120 C 290 60, 330 60, 360 120 C 420 240, 440 260, 460 260 Z"
            fill={AMBER_DARK} opacity={0.15} />
          <Draw on={beat >= 1} delay={dl(1, 0.6)}
            d="M 20 260 C 120 260, 200 240, 260 120 C 290 60, 330 60, 360 120 C 420 240, 440 260, 460 260"
            stroke={AMBER_DARK} sw={3.5} />

          {/* Source Charge +Q at Peak */}
          <Circle cx={310} cy={80} r={18} fill={RED} />
          <T x={310} y={86} size={15} fill="#ffffff" weight={900}>+Q</T>
          <T x={310} y={55} size={13} fill={RED} weight={800}>Peak (High V)</T>

          {/* Test Charge +q0 Rolling Downhill */}
          <Circle cx={qx} cy={qy} r={12} fill={GREEN} />
          <T x={qx} y={qy + 4} size={12} fill="#ffffff" weight={900}>+q₀</T>
          <T x={qx} y={qy - 16} size={12} fill={GREEN} weight={800}>Downhill Drift</T>
        </Fade>

        {/* Section Subtitle Note below mountain */}
        <Fade on={beat >= 1}>
          <T x={240} y={305} anchor="middle" size={13} fill={INK} weight={800}>
            Positive charges (+q₀) flow spontaneously downhill (High V → Low V)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: OPEN V(r) ∝ 1/r DECAY GRAPH */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={25} cy={22} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={26} size={15} fill={RED} weight={800} anchor="start">
            {t("POINT CHARGE POTENTIAL DECAY GRAPH", "POINT CHARGE POTENTIAL DECAY GRAPH")}
          </T>
        </Fade>

        <Fade on={beat >= 5}>
          {/* Open Axes */}
          <Line x1="50" y1="260" x2="470" y2="260" stroke={INK} strokeWidth={2.5} />
          <Line x1="50" y1="260" x2="50" y2="60" stroke={INK} strokeWidth={2.5} />

          <T x={470} y={282} size={13} fill={INK} weight={700} anchor="end">Distance (r) →</T>
          <T x={40} y={55} size={13} fill={INK} weight={700} anchor="start">Potential V(r) →</T>

          {/* Hyperbolic 1/r Curve */}
          <Draw on={beat >= 5} delay={dl(5, 0.6)}
            d="M 65 75 Q 95 200, 450 250" stroke={GREEN} sw={4} />

          <Circle cx={120} cy={170} r={6} fill={GREEN} />
          <T x={135} y={163} size={14} fill={GREEN} weight={800}>V(r) ∝ 1/r</T>

          <Circle cx={290} cy={230} r={6} fill={AMBER_DARK} />
          <T x={305} y={223} size={13} fill={AMBER_DARK} weight={700}>V → 0 as r → ∞</T>
        </Fade>

        {/* Section Subtitle Formula below graph */}
        <Fade on={beat >= 5}>
          <T x={250} y={305} anchor="middle" size={17} fill={GREEN} weight={800}>
            V(r) = (1 / 4πε₀) (Q / r)
          </T>
        </Fade>
      </G>

      {/* BOTTOM SECTION: SPACIOUS UNCONTAINED FORMULA MATRIX */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("KEY FORMULATION & SI UNITS", "KEY FORMULATION & SI UNITS")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} fill={GREEN} weight={800} anchor="start">
            {t("• 1 Volt = 1 Joule / Coulomb (1 V = 1 J/C)   |   • Scalar Quantity   |   • Reference V(∞) = 0 V", "• 1 Volt = 1 Joule / Coulomb (1 V = 1 J/C)   |   • Scalar Quantity   |   • Reference V(∞) = 0 V")}
          </T>
          <T x={45} y={72} size={13} fill={AMBER_DARK} weight={700} anchor="start">
            {t("• Work Done in moving test charge: W_ext = q₀ (V_final − V_initial)", "• Work Done in moving test charge: W_ext = q₀ (V_final − V_initial)")}
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Electrostatic Potential V = W_ext / q₀ = kQ/r represents Electrical Altitude measured in Volts! ✓",
            "★ Electrostatic Potential V = W_ext / q₀ = kQ/r represents Electrical Altitude measured in Volts! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
