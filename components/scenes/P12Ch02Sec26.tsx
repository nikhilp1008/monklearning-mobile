/**
 * P12Ch02 · Section 26 — "Capacitance — the water tank of charge storage"
 * Subtopic: Capacitance, Dielectrics & Stored Energy
 * OPEN CHALKBOARD DESIGN WITH WATER TANK ANALOGY & CAPACITOR PLATES (NO CONTAINER BOXES):
 *  - Parallel Plate Capacitor (+Q on top plate, -Q on bottom plate, field lines E)
 *  - Water Tank Analogy (Water Volume = Charge Q, Water Height = Potential V, Base Area = Capacitance C)
 *  - Fundamental Formula: C = Q / V  [Farad = Coulomb / Volt]
 *  - Zero card box containers
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

export default function P12Ch02Sec26({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Live water level / charge animation
  const waterH = 40 + Math.sin(Math.min(Math.PI / 2, currentTime * 0.8)) * 15;

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Capacitance C = Q / V — The Electrical Tank for Storing Charge", "Capacitance C = Q / V — The Electrical Tank for Storing Charge")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: WATER TANK ANALOGY DIAGRAM */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("THE WATER TANK ANALOGY FOR CAPACITANCE", "THE WATER TANK ANALOGY FOR CAPACITANCE")}
          </T>
        </Fade>

        {/* Water Tank SVG Drawing */}
        <Fade on={beat >= 1}>
          {/* Tank Outer Walls */}
          <Line x1="100" y1="80" x2="100" y2="230" stroke={INK} strokeWidth={3} />
          <Line x1="340" y1="80" x2="340" y2="230" stroke={INK} strokeWidth={3} />
          <Line x1="100" y1="230" x2="340" y2="230" stroke={INK} strokeWidth={3} />

          {/* Water Fill */}
          <Rect x="102" y={230 - waterH} width="236" height={waterH} fill="#0284c7" opacity={0.4} />

          {/* Labels */}
          <T x={220} y={230 - waterH - 10} size={13} fill="#0284c7" weight={800} anchor="middle">Water Level = Potential (V)</T>
          <T x={220} y={230 - waterH / 2 + 4} size={13} fill="#0369a1" weight={900} anchor="middle">Volume = Charge (Q)</T>
          <T x={220} y={248} size={13} fill={RED} weight={800} anchor="middle">Base Area = Capacitance (C)</T>
        </Fade>

        {/* Free Floating Formula */}
        <Fade on={beat >= 3}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            Larger base area C holds MORE charge Q for the SAME voltage V!
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: PARALLEL PLATE CAPACITOR */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("PARALLEL PLATE CAPACITOR SCHEMATIC", "PARALLEL PLATE CAPACITOR SCHEMATIC")}
          </T>
        </Fade>

        {/* Parallel Plates Drawing */}
        <Fade on={beat >= 4}>
          {/* Top Plate (+Q) */}
          <Line x1="80" y1="90" x2="380" y2="90" stroke={RED} strokeWidth={4} />
          <T x={395} y={94} size={14} fill={RED} weight={900} anchor="start">+Q Plate</T>

          {/* Bottom Plate (-Q) */}
          <Line x1="80" y1="210" x2="380" y2="210" stroke={GREEN} strokeWidth={4} />
          <T x={395} y={214} size={14} fill={GREEN} weight={900} anchor="start">−Q Plate</T>

          {/* Uniform Electric Field Lines E */}
          {[110, 170, 230, 290, 350].map((x) => (
            <Path key={x} d={arrowD(x, 95, x, 205)} stroke={AMBER_DARK} strokeWidth={2} />
          ))}
          <T x={395} y={154} size={13} fill={AMBER_DARK} weight={900} anchor="start">Field E</T>

          {/* Distance d & Voltage V */}
          <Line x1="60" y1="90" x2="60" y2="210" stroke={INK} strokeWidth={2} strokeDasharray="4 4" />
          <T x={45} y={154} size={13} fill={INK} weight={800} anchor="end">Gap d</T>
        </Fade>

        {/* Free Floating Formula */}
        <Fade on={beat >= 5}>
          <T x={45} y={268} anchor="start" size={14} fill={GREEN} weight={800}>
            C = Q / V   [1 Farad = 1 Coulomb / Volt]
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("SI UNITS & PRACTICAL SCALE", "SI UNITS & PRACTICAL SCALE")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            1 Farad is HUGE! Practical laboratory capacitors use µF (10⁻⁶ F), nF (10⁻⁹ F), or pF (10⁻¹² F).
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Capacitance depends ONLY on physical geometry (shape, area, spacing) and medium!
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Capacitance Fundamentals Mastered: C = Q / V (Measured in Farads = C / V) stores electrical energy in field E! ✓",
            "★ Capacitance Fundamentals Mastered: C = Q / V (Measured in Farads = C / V) stores electrical energy in field E! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
