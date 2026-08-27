/**
 * P12Ch02 · Section 34 — "CBSE level: capacitance and charge of an air capacitor"
 * Subtopic: Capacitance, Dielectrics & Stored Energy
 * OPEN CHALKBOARD DESIGN WITH CBSE WORKED NUMERICAL (NO CONTAINER BOXES):
 *  - Area A = 90 cm² (9×10⁻³ m²), spacing d = 2.5 mm (2.5×10⁻³ m), V = 400 V
 *  - Step 1: Calculate C₀ = ε₀ A / d = 31.9 pF
 *  - Step 2: Calculate Charge Q₀ = C₀ V = 12.75 nC
 *  - Step 3: Calculate Stored Energy U₀ = ½ C₀ V² = 2.55 µJ
 *  - Zero card box containers
 */

import React from "react";
import { G, Line } from 'react-native-svg';
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

export default function P12Ch02Sec34({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("CBSE Worked Problem: Air Capacitor (A = 90 cm², d = 2.5 mm, V = 400 V)", "CBSE Worked Problem: Air Capacitor (A = 90 cm², d = 2.5 mm, V = 400 V)")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: PHYSICAL SETUP DIAGRAM */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("PARALLEL PLATE AIR CAPACITOR SETUP", "PARALLEL PLATE AIR CAPACITOR SETUP")}
          </T>
        </Fade>

        {/* Capacitor Diagram */}
        <Fade on={beat >= 1}>
          <Line x1="45" y1="80" x2="380" y2="80" stroke={RED} strokeWidth={4} />
          <T x={395} y={84} size={13} fill={RED} weight={800} anchor="start">Area A = 90 cm²</T>

          <Line x1="45" y1="200" x2="380" y2="200" stroke={GREEN} strokeWidth={4} />
          <T x={395} y={204} size={13} fill={GREEN} weight={800} anchor="start">Gap d = 2.5 mm</T>

          {/* Battery 400V connection */}
          <Line x1="215" y1="80" x2="215" y2="40" stroke={INK} strokeWidth={1.8} />
          <Line x1="215" y1="200" x2="215" y2="238" stroke={INK} strokeWidth={1.8} />
          <T x={215} y={252} size={13} fill={AMBER_DARK} weight={900} anchor="middle">DC Battery V = 400 V</T>
        </Fade>

        {/* Free Floating Question */}
        <Fade on={beat >= 2}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            Calculate Capacitance C₀, Charge Q₀, and Stored Energy U₀!
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: NUMERICAL CALCULATION STEPS */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 3} delay={dl(3, 0.2)} />
        <Fade on={beat >= 3} delay={dl(3, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("STEP-BY-STEP CALCULATION", "STEP-BY-STEP CALCULATION")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 3}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. C₀ = (8.854×10⁻¹² × 9×10⁻³) / (2.5×10⁻³) = 31.9 pF
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Q₀ = C₀ V = 31.9×10⁻¹² × 400 = 12.75 nC
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. U₀ = ½ C₀ V² = ½ (31.9×10⁻¹²) (400)² = 2.55 µJ
          </T>

          <Draw on={beat >= 3} delay={dl(3, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. C₀ = 31.9 pF, Q₀ = 12.75 nC, U₀ = 2.55 µJ
          </T>
        </Fade>

        {/* Open Text Explanation */}
        <Fade on={beat >= 6}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Always convert cm² to m²: 90 cm² = 9 × 10⁻³ m²)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("CBSE BOARD MARKS CHECKLIST", "CBSE BOARD MARKS CHECKLIST")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Always state final answers with correct prefix units (pF = 10⁻¹² F, nC = 10⁻⁹ C, µJ = 10⁻⁶ J)!
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Electric field E = V/d = 400 / 2.5×10⁻³ = 1.6 × 10⁵ V/m!
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ CBSE Problem Mastered: C₀ = 31.9 pF, Charge Q₀ = 12.75 nC, and Stored Energy U₀ = 2.55 µJ! ✓",
            "★ CBSE Problem Mastered: C₀ = 31.9 pF, Charge Q₀ = 12.75 nC, and Stored Energy U₀ = 2.55 µJ! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
