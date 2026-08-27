/**
 * P12Ch02 · Section 56 — "Formula toolkit: charge redistribution and energy loss"
 * Subtopic: Series & Parallel Combinations & Charge Sharing
 * OPEN CHALKBOARD DESIGN WITH CHARGE SHARING MASTER FORMULA TOOLKIT (NO CONTAINER BOXES):
 *  - 1. Like Polarity (+ to +, - to -):
 *      V_com = (C₁ V₁ + C₂ V₂) / (C₁ + C₂)
 *      ΔU = ½ [ C₁ C₂ / (C₁ + C₂) ] (V₁ - V₂)²
 *  - 2. Opposite Polarity (+ to -, - to +):
 *      V_com = |C₁ V₁ - C₂ V₂| / (C₁ + C₂)
 *      ΔU = ½ [ C₁ C₂ / (C₁ + C₂) ] (V₁ + V₂)²
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

export default function P12Ch02Sec56({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Formula Toolkit: Charge Sharing & Polarity-Dependent Heat Loss ΔU", "Formula Toolkit: Charge Sharing & Polarity-Dependent Heat Loss ΔU")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: SAME POLARITY CONNECTION (+ TO +) */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("SAME POLARITY CONNECTION (+ TO +, − TO −)", "SAME POLARITY CONNECTION (+ TO +, − TO −)")}
          </T>
        </Fade>

        {/* Floating Formulas */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={GREEN} weight={800} anchor="start">
            1. V_com = (C₁ V₁ + C₂ V₂) / (C₁ + C₂)
          </T>

          <T x={45} y={125} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            2. Heat Loss ΔU = ½ [ (C₁ C₂) / (C₁ + C₂) ] (V₁ − V₂)²
          </T>
        </Fade>

        {/* Free Floating Rule */}
        <Fade on={beat >= 3}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Charges add constructively Q_total = Q₁ + Q₂)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: OPPOSITE POLARITY CONNECTION (+ TO −) */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("OPPOSITE POLARITY CONNECTION (+ TO −)", "OPPOSITE POLARITY CONNECTION (+ TO −)")}
          </T>
        </Fade>

        {/* Floating Formulas */}
        <Fade on={beat >= 4}>
          <T x={45} y={80} size={14} fill={RED} weight={800} anchor="start">
            1. V_com = |C₁ V₁ − C₂ V₂| / (C₁ + C₂)
          </T>

          <T x={45} y={125} size={14} fill={RED} weight={800} anchor="start">
            2. Heat Loss ΔU = ½ [ (C₁ C₂) / (C₁ + C₂) ] (V₁ + V₂)²
          </T>
        </Fade>

        {/* Open Text Explanation */}
        <Fade on={beat >= 6}>
          <T x={45} y={268} anchor="start" size={13} fill={RED} weight={800}>
            (Opposite charges neutralize — higher energy loss (V₁ + V₂)²)
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
            Notice: If V₁ = V₂, ΔU = 0 for same polarity connection (no charge flow happens)!
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Heat loss ΔU is completely independent of wire resistance R (resistance only controls decay rate)!
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Redistribution Toolkit Mastered: Same polarity ΔU ∝ (V₁−V₂)² vs Opposite polarity ΔU ∝ (V₁+V₂)²! ✓",
            "★ Redistribution Toolkit Mastered: Same polarity ΔU ∝ (V₁−V₂)² vs Opposite polarity ΔU ∝ (V₁+V₂)²! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
