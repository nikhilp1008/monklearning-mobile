/**
 * P12Ch02 · Section 65 — "Chapter 2 Synthesis Part 2 — Advanced multi-concept problem walkthrough"
 * Subtopic: Synthesis & Exam Readiness
 * OPEN CHALKBOARD DESIGN WITH MULTI-CONCEPT WALKTHROUGH (NO CONTAINER BOXES):
 *  - Problem: Air capacitor C₀ charged to V₀ (Q₀ = C₀V₀, U₀ = ½C₀V₀²). Battery DISCONNECTED.
 *  - Dielectric slab K = 3 inserted to fill HALF plate length (Parallel split area A/2!).
 *  - Step 1: New Capacitance C_new = C₀/2 + K C₀/2 = 2 C₀
 *  - Step 2: New Voltage V_new = Q₀ / (2 C₀) = V₀ / 2
 *  - Step 3: New Energy U_new = Q₀² / (4 C₀) = U₀ / 2
 *  - Step 4: Mechanical Work W_field = U₀ - U_new = ½ U₀ !
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

export default function P12Ch02Sec65({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Chapter 2 Synthesis Part 2: Multi-Concept Advanced Masterclass Walkthrough", "Chapter 2 Synthesis Part 2: Multi-Concept Advanced Masterclass Walkthrough")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: PHYSICAL PROBLEM DIAGRAM */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("HALF-FILLED DIELECTRIC SLAB (K = 3, DISCONNECTED)", "HALF-FILLED DIELECTRIC SLAB (K = 3, DISCONNECTED)")}
          </T>
        </Fade>

        {/* Capacitor Diagram (Open Chalkboard) */}
        <Fade on={beat >= 1}>
          <Line x1="45" y1="90" x2="380" y2="90" stroke={RED} strokeWidth={3} />
          <Line x1="45" y1="210" x2="380" y2="210" stroke={GREEN} strokeWidth={3} />

          {/* Left half: Air (A/2) */}
          <Rect x="45" y="95" width="160" height="110" fill="none" stroke={INK} strokeDasharray="4 4" />
          <T x={125} y={155} size={13} fill={INK} weight={800} anchor="middle">Air (A/2)</T>

          {/* Right half: Dielectric K=3 (A/2) */}
          <Rect x="215" y="95" width="165" height="110" fill="none" stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={297} y={155} size={13} fill={AMBER_DARK} weight={900} anchor="middle">Slab K = 3 (A/2)</T>
        </Fade>

        {/* Free Floating Formula */}
        <Fade on={beat >= 3}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Parallel Split: C_new = (ε₀/d) (A/2) + K (ε₀/d) (A/2) = ½ C₀ (1 + K))
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: MULTI-STEP SOLUTION ACCOUNTING */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("STEP-BY-STEP MATHEMATICAL SOLUTION", "STEP-BY-STEP MATHEMATICAL SOLUTION")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 4}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. C_new = ½ C₀ (1 + 3) = 2 C₀
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. V_new = Q₀ / (2 C₀) = V₀ / 2
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. U_new = Q₀² / (2 × 2 C₀) = U₀ / 2
          </T>

          <Draw on={beat >= 4} delay={dl(4, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. W_suction = U₀ − U_new = ½ U₀
          </T>
        </Fade>

        {/* Open Text Explanation */}
        <Fade on={beat >= 6}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (50% of initial stored energy is spent by the field pulling the slab in)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("JEE ADVANCED STRATEGY RECAP", "JEE ADVANCED STRATEGY RECAP")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Step 1: Identify battery state (Disconnected → Q is fixed)! Step 2: Split geometry into parallel C₁ & C₂!
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Step 3: Compute C_new, then V_new = Q/C_new, then U_new = Q²/(2 C_new)!
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Synthesis Part 2 Mastered: Multi-concept problem solved (C_new = 2C₀, V_new = V₀/2, U_new = U₀/2, W = U₀/2)! ✓",
            "★ Synthesis Part 2 Mastered: Multi-concept problem solved (C_new = 2C₀, V_new = V₀/2, U_new = U₀/2, W = U₀/2)! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
