/**
 * P12Ch02 · Section 22 — "NEET speed trap: one over r, not one over r squared"
 * Subtopic: Potential Energy & External Fields
 * OPEN CHALKBOARD DESIGN WITH DECAY PROFILE COMPARISON GRAPH (NO CONTAINER BOXES):
 *  - Trap: Confusing 1/r (Potential & Energy) with 1/r² (Field & Force)
 *  - Graph: 1/r curve vs 1/r² curve decay rate comparison
 *  - Decision Matrix for NEET MCQs
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

export default function P12Ch02Sec22({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("NEET Speed Trap: Energy U ∝ 1/r vs Force F ∝ 1/r² (Don't Square r!)", "NEET Speed Trap: Energy U ∝ 1/r vs Force F ∝ 1/r² (Don't Square r!)")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: 1/r VS 1/r² DECAY GRAPH */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("GRAPH: 1/r DECAY vs 1/r² DECAY RATE", "GRAPH: 1/r DECAY vs 1/r² DECAY RATE")}
          </T>
        </Fade>

        <Fade on={beat >= 1}>
          {/* Open Axes */}
          <Line x1="50" y1="240" x2="450" y2="240" stroke={INK} strokeWidth={2} />
          <Line x1="50" y1="240" x2="50" y2="65" stroke={INK} strokeWidth={2} />

          <T x={450} y={258} size={12} fill={INK} anchor="end">Distance r →</T>
          <T x={40} y={60} size={12} fill={INK} anchor="start">Value →</T>

          {/* 1/r Curve (Slower Decay - GREEN) */}
          <Draw on={beat >= 1} delay={dl(1, 0.6)}
            d="M 65 80 Q 120 170, 440 220" stroke={GREEN} sw={3} />
          <T x={310} y={185} size={14} fill={GREEN} weight={800}>U, V ∝ 1/r</T>

          {/* 1/r² Curve (Faster Decay - RED) */}
          <Draw on={beat >= 1} delay={dl(1, 1.2)}
            d="M 65 70 Q 85 220, 440 238" stroke={RED} sw={3} />
          <T x={180} y={222} size={14} fill={RED} weight={800}>F, E ∝ 1/r²</T>
        </Fade>

        {/* Free Floating Rule */}
        <Fade on={beat >= 3}>
          <T x={45} y={268} anchor="start" size={13} fill={RED} weight={800}>
            ★ Energy U & Potential V depend on 1/r (Distance is NOT squared!)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: NEET SPEED TRAP MATRIX */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("NEET MCQ DISTRACTOR MATRIX", "NEET MCQ DISTRACTOR MATRIX")}
          </T>
        </Fade>

        {/* Floating Matrix Features */}
        <Fade on={beat >= 4}>
          <T x={45} y={80} size={15} fill={RED} weight={800} anchor="start">
            • FORCE F = k q₁ q₂ / r²  (Vector, 1/r²)
          </T>

          <T x={45} y={125} size={15} fill={RED} weight={800} anchor="start">
            • FIELD E = k Q / r²  (Vector, 1/r²)
          </T>

          <T x={45} y={170} size={15} fill={GREEN} weight={800} anchor="start">
            • POTENTIAL V = k Q / r  (Scalar, 1/r)
          </T>

          <T x={45} y={215} size={15} fill={GREEN} weight={800} anchor="start">
            • ENERGY U = k q₁ q₂ / r  (Scalar, 1/r)
          </T>
        </Fade>

        {/* Open Text Explanation */}
        <Fade on={beat >= 6}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Common NEET distractor: squaring r in energy formula!)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("EXAM REASONING CHECK", "EXAM REASONING CHECK")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Work = Force × distance → (1/r²) × r = 1/r! Integration reduces power of r by 1!
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Doubling distance r → Force becomes 1/4th, but Potential Energy becomes 1/2!
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Speed Trap Neutralized: Force/Field ∝ 1/r² vs Energy/Potential ∝ 1/r (Never square r for energy)! ✓",
            "★ Speed Trap Neutralized: Force/Field ∝ 1/r² vs Energy/Potential ∝ 1/r (Never square r for energy)! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
