/**
 * P12Ch02 · Section 47 — "CBSE level: potential and field of a solid conducting sphere"
 * Subtopic: Conductors & Spherical Capacitors
 * OPEN CHALKBOARD DESIGN WITH E(r) AND V(r) DUAL GRAPH PROFILES (NO CONTAINER BOXES):
 *  - Solid Conducting Sphere of radius R and charge Q
 *  - Electric Field Profile E(r): E = 0 for r < R; E = kQ/R² at surface; E = kQ/r² for r > R
 *  - Potential Profile V(r): V = kQ/R Constant for r ≤ R; V = kQ/r for r > R
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

export default function P12Ch02Sec47({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("CBSE Profile Analysis: Electric Field E(r) & Potential V(r) of Conducting Sphere", "CBSE Profile Analysis: Electric Field E(r) & Potential V(r) of Conducting Sphere")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: ELECTRIC FIELD PROFILE GRAPH E(r) */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("ELECTRIC FIELD PROFILE E(r)", "ELECTRIC FIELD PROFILE E(r)")}
          </T>
        </Fade>

        {/* E(r) Graph */}
        <Fade on={beat >= 1}>
          <Line x1="45" y1="230" x2="440" y2="230" stroke={INK} strokeWidth={1.8} />
          <Line x1="45" y1="230" x2="45" y2="60" stroke={INK} strokeWidth={1.8} />

          <Line x1="165" y1="230" x2="165" y2="60" stroke={MUTED} strokeWidth={1.2} strokeDasharray="4 4" />
          <T x={165} y={248} size={12} fill={INK} weight={800} anchor="middle">r = R</T>

          {/* E = 0 inside */}
          <Line x1="45" y1="230" x2="165" y2="230" stroke={RED} strokeWidth={3} />

          {/* Jump to kQ/R² and 1/r² decay */}
          <Circle cx={165} cy={85} r={4} fill={RED} />
          <Draw on={beat >= 1} delay={dl(1, 0.6)} d="M 165 85 Q 220 180, 420 220" stroke={RED} sw={2.5} />

          <T x={200} y={75} size={12} fill={RED} weight={800}>E_max = kQ/R²</T>
          <T x={330} y={175} size={12} fill={RED} weight={800}>E ∝ 1/r²</T>
        </Fade>

        {/* Free Floating Formula */}
        <Fade on={beat >= 3}>
          <T x={45} y={268} anchor="start" size={13} fill={RED} weight={800}>
            E(r &lt; R) = 0 N/C   |   E(r ≥ R) = k Q / r²
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: POTENTIAL PROFILE GRAPH V(r) */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("ELECTROSTATIC POTENTIAL PROFILE V(r)", "ELECTROSTATIC POTENTIAL PROFILE V(r)")}
          </T>
        </Fade>

        {/* V(r) Graph */}
        <Fade on={beat >= 4}>
          <Line x1="45" y1="230" x2="440" y2="230" stroke={INK} strokeWidth={1.8} />
          <Line x1="45" y1="230" x2="45" y2="60" stroke={INK} strokeWidth={1.8} />

          <Line x1="165" y1="230" x2="165" y2="60" stroke={MUTED} strokeWidth={1.2} strokeDasharray="4 4" />
          <T x={165} y={248} size={12} fill={INK} weight={800} anchor="middle">r = R</T>

          {/* V = constant inside */}
          <Line x1="45" y1="85" x2="165" y2="85" stroke={GREEN} strokeWidth={3} />

          {/* 1/r decay outside */}
          <Draw on={beat >= 4} delay={dl(4, 0.6)} d="M 165 85 Q 240 170, 420 210" stroke={GREEN} sw={2.5} />

          <T x={105} y={72} size={12} fill={GREEN} weight={800} anchor="middle">V = kQ/R (Const)</T>
          <T x={330} y={165} size={12} fill={GREEN} weight={800}>V ∝ 1/r</T>
        </Fade>

        {/* Free Floating Formula */}
        <Fade on={beat >= 6}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            V(r ≤ R) = k Q / R   |   V(r &gt; R) = k Q / r
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("CBSE BOARD EXAM GRAPH RULES", "CBSE BOARD EXAM GRAPH RULES")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            E(r) has a jump discontinuity at r = R (0 to kQ/R²), whereas V(r) is continuous everywhere!
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            At the center r = 0: E = 0 N/C, but V = kQ/R (Non-zero potential)!
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ CBSE Profiles Mastered: E(r) jumps from 0 to kQ/R² at surface, while V(r) remains constant kQ/R inside! ✓",
            "★ CBSE Profiles Mastered: E(r) jumps from 0 to kQ/R² at surface, while V(r) remains constant kQ/R inside! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
