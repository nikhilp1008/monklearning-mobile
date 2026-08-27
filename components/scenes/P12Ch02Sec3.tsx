/**
 * P12Ch02 · Section 3 — "Equipotential surfaces — walking the contour lines"
 * Subtopic: Electrostatic Potential & Capacitance
 * OPEN CHALKBOARD DESIGN WITH RICH SVG EQUIPOTENTIAL DIAGRAMS (NO CONTAINER BOXES):
 *  - Concentric Equipotential Spheres (V₁ = 100V, V₂ = 75V, V₃ = 50V) around source charge +Q
 *  - Radial Electric Field Vectors E ⊥ Equipotential Surfaces (90° perpendicularity symbols)
 *  - Path of charge moving on surface showing Zero Work W_AB = 0
 *  - Parallel Planes for uniform electric field E
 *  - Zero card box containers (<Rect fill={CREAM}> removed completely)
 */

import React from "react";
import { Circle, G, Line, Path, Rect } from 'react-native-svg';
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

export default function P12Ch02Sec3({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Motion along equipotential circle
  const orbitAngle = Math.min(Math.PI * 1.5, currentTime * 0.8);
  const rOrbit = 80;
  const qx = 220 + rOrbit * Math.cos(orbitAngle);
  const qy = 160 - rOrbit * Math.sin(orbitAngle);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Equipotential Surfaces: Walking Constant Potential Contour Lines", "Equipotential Surfaces: Constant Potential Contour Lines")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: CONCENTRIC EQUIPOTENTIAL SPHERES & ZERO WORK */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={25} cy={22} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={26} size={15} fill={RED} weight={800} anchor="start">
            {t("POINT CHARGE EQUIPOTENTIAL SPHERES", "POINT CHARGE EQUIPOTENTIAL SPHERES")}
          </T>
        </Fade>

        <Fade on={beat >= 1}>
          {/* Central Charge +Q */}
          <Circle cx={220} cy={160} r={16} fill={RED} />
          <T x={220} y={165} size={14} fill="#ffffff" weight={900}>+Q</T>

          {/* Concentric Spheres V1, V2, V3 */}
          <Circle cx={220} cy={170} r={40} stroke={AMBER_DARK} strokeWidth={2} fill="none" strokeDasharray="4 4" />
          <T x={220} y={122} size={11} fill={AMBER_DARK} weight={800}>V₁ = 100V</T>

          <Circle cx={220} cy={170} r={75} stroke={GREEN} strokeWidth={2.5} fill="none" strokeDasharray="5 5" />
          <T x={220} y={87} size={11} fill={GREEN} weight={800}>V₂ = 75V (Equipotential)</T>

          <Circle cx={220} cy={170} r={110} stroke={RED} strokeWidth={2} fill="none" strokeDasharray="4 4" />
          <T x={220} y={52} size={11} fill={RED} weight={800}>V₃ = 50V</T>

          {/* Radial E-Field Vectors Perpendicular to Surfaces (Diagonal & Horizontal) */}
          <Path d={arrowD(100, 170, 45, 170)} stroke={RED} strokeWidth={2} />
          <Path d={arrowD(340, 170, 395, 170)} stroke={RED} strokeWidth={2} />
          <Path d={arrowD(275, 115, 315, 75)} stroke={RED} strokeWidth={2} />
          <Path d={arrowD(275, 225, 315, 265)} stroke={RED} strokeWidth={2} />

          {/* Moving Charge on Equipotential V2 */}
          <Circle cx={qx} cy={qy} r={9} fill={GREEN} />
          <T x={qx} y={qy - 12} size={11} fill={GREEN} weight={800}>+q₀ (W = 0)</T>
        </Fade>

        {/* Free Floating Formula (Spacious, No Box) */}
        <Fade on={beat >= 2}>
          <T x={220} y={310} anchor="middle" size={14} fill={GREEN} weight={800}>
            W_AB = q₀ (V_B − V_A) = 0   (Zero work along equipotential path!)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: UNIFORM FIELD PARALLEL PLANES & E ⊥ SURFACE */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={25} cy={22} on={beat >= 3} delay={dl(3, 0.2)} />
        <Fade on={beat >= 3} delay={dl(3, 0.5)}>
          <T x={45} y={26} size={15} fill={RED} weight={800} anchor="start">
            {t("UNIFORM FIELD: E ⊥ PARALLEL PLANES", "UNIFORM FIELD: E ⊥ PARALLEL PLANES")}
          </T>
        </Fade>

        <Fade on={beat >= 3}>
          {/* Parallel Equipotential Planes */}
          <Line x1="80" y1="65" x2="80" y2="275" stroke={AMBER_DARK} strokeWidth={3} strokeDasharray="6 4" />
          <T x={80} y={50} size={12} fill={AMBER_DARK} weight={800} anchor="middle">V = 60V</T>

          <Line x1="220" y1="65" x2="220" y2="275" stroke={GREEN} strokeWidth={3} strokeDasharray="6 4" />
          <T x={220} y={50} size={12} fill={GREEN} weight={800} anchor="middle">V = 40V</T>

          <Line x1="360" y1="65" x2="360" y2="275" stroke={RED} strokeWidth={3} strokeDasharray="6 4" />
          <T x={360} y={50} size={12} fill={RED} weight={800} anchor="middle">V = 20V</T>

          {/* Electric Field E Vector Arrows pointing Right (perpendicular ⊥) */}
          <Path d={arrowD(40, 115, 420, 115)} stroke={RED} strokeWidth={3} />
          <Path d={arrowD(40, 220, 420, 220)} stroke={RED} strokeWidth={3} />
          <T x={435} y={120} size={13} fill={RED} weight={800} anchor="start">E Vector</T>

          {/* 90° Perpendicular Symbols */}
          <Path d="M 220 125 L 230 125 L 230 115" stroke="#000000" strokeWidth={1.5} fill="none" />
          <T x={240} y={135} size={12} fill={INK} weight={800}>90° (E ⊥ Surface)</T>
        </Fade>

        {/* Free Floating Rule (Spacious, No Box) */}
        <Fade on={beat >= 5}>
          <T x={240} y={310} anchor="middle" size={14} fill={RED} weight={800}>
            Equipotential surfaces NEVER intersect! (Otherwise E would have 2 directions!)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS CORE RULES */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 6} delay={dl(6, 0.2)} />
        <Fade on={beat >= 6} delay={dl(6, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("THE 4 CORE EQUIPOTENTIAL RULES", "THE 4 CORE EQUIPOTENTIAL RULES")}
          </T>
        </Fade>

        <Fade on={beat >= 6}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            {t("1. W = 0 on surface   |   2. E is ALWAYS ⊥ to surface   |   3. Points towards decreasing V   |   4. Never intersect!", "1. W = 0 on surface   |   2. E is ALWAYS ⊥ to surface   |   3. Points towards decreasing V   |   4. Never intersect!")}
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 6}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Equipotential Verdict: Work W = 0 along surface, Electric field E ⊥ Surface, pointing towards decreasing V! ✓",
            "★ Equipotential Verdict: Work W = 0 along surface, Electric field E ⊥ Surface, pointing towards decreasing V! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
