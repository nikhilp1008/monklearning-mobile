/**
 * P12Ch02 · Section 30 — "When the series and parallel rules do not apply"
 * Beats (en [0,10,17,26,34,47,61,74]): 8 beats
 */

import React from "react";
import { G } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, ringD,
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

export default function P12Ch03Sec30({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("When series and parallel rules DO NOT apply", "When series and parallel rules DO NOT apply")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: STRICT TOPOLOGY CONDITIONS */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("STRICT TOPOLOGY CONDITIONS", "STRICT TOPOLOGY CONDITIONS")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Series Condition: Absolute zero branch/junction between elements.
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Parallel Condition: BOTH terminals connected directly to same pair of nodes.
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Visual Trap: Drawn side-by-side on paper DOES NOT guarantee parallel!
          </T>

          <Draw on={beat >= 3} delay={dl(3, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Rule: Always trace equipotential node connections, not geometry!
          </T>
        </Fade>

        <Fade on={beat >= 4}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (If a third wire taps into the junction between two resistors, series fails)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: IRREDUCIBLE NETWORKS */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("IRREDUCIBLE NETWORKS & ADVANCED METHODS", "IRREDUCIBLE NETWORKS & ADVANCED METHODS")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 4}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Unbalanced Wheatstone Bridge: Resistors neither in series nor parallel.
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Cube &amp; Infinite Ladders: Require symmetry or recursion methods.
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. General Complex Meshes: Require Kirchhoff's Current &amp; Voltage Laws.
          </T>

          <Draw on={beat >= 6} delay={dl(6, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Solution: Use KCL, KVL, or Delta-Wye (Δ-Y) Transformations!
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Never force series/parallel formulas onto non-separable circuits)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("CIRCUIT REDUCTION VERDICT", "CIRCUIT REDUCTION VERDICT")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Recognizing when a circuit CANNOT be simplified with series/parallel rules saves critical time in exams.
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Label every node with potential labels (A, B, C...) before deciding circuit topology.
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Recognising when a circuit CANNOT be simplified with series/parallel is a key skill! ✓",
            "★ Recognising when a circuit CANNOT be simplified with series/parallel is a key skill! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
