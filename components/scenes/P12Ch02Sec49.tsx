/**
 * P12Ch02 · Section 49 — "JEE Main: potentials of two concentric shells"
 * Subtopic: Conductors & Spherical Capacitors
 * OPEN CHALKBOARD DESIGN WITH CONCENTRIC SHELLS DIAGRAM (NO CONTAINER BOXES):
 *  - Shell A (radius a, charge q₁), Shell B (radius b, charge q₂)
 *  - Superposition: V_A = k q₁/a + k q₂/b;  V_B = k (q₁ + q₂)/b
 *  - Potential Difference: ΔV = V_A - V_B = k q₁ (1/a - 1/b)  [INDEPENDENT of q₂!]
 *  - Charge transfer: Connecting wire causes 100% of charge q₁ to flow to outer shell B!
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

export default function P12Ch02Sec49({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("JEE Main: Concentric Shell Potentials & Independent Difference ΔV = kq₁(1/a − 1/b)", "JEE Main: Concentric Shell Potentials & Independent Difference ΔV = kq₁(1/a − 1/b)")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: CONCENTRIC SHELLS DIAGRAM */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("CONCENTRIC CONDUCTING SHELLS (A, B)", "CONCENTRIC CONDUCTING SHELLS (A, B)")}
          </T>
        </Fade>

        {/* Concentric Shells (Open Chalkboard) */}
        <Fade on={beat >= 1}>
          {/* Inner Shell A */}
          <Circle cx={212} cy={155} r={40} stroke={RED} strokeWidth={1.8} fill="none" />
          <T x={212} y={160} size={13} fill={RED} weight={900} anchor="middle">Shell A (a, q₁)</T>

          {/* Outer Shell B */}
          <Circle cx={212} cy={155} r={80} stroke={GREEN} strokeWidth={1.8} fill="none" />
          <T x={212} y={60} size={13} fill={GREEN} weight={900} anchor="middle">Shell B (b, q₂)</T>

          {/* Connecting Switch Wire */}
          <Line x1="212" y1="115" x2="212" y2="75" stroke={AMBER_DARK} strokeWidth={1.8} strokeDasharray="3 3" />
          <T x={225} y={98} size={12} fill={AMBER_DARK} weight={800} anchor="start">Switch S</T>
        </Fade>

        {/* Free Floating Formula */}
        <Fade on={beat >= 3}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            V_A = k q₁/a + k q₂/b   |   V_B = k (q₁ + q₂)/b
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: POTENTIAL DIFFERENCE & CHARGE FLOW */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("INDEPENDENT ΔV & CHARGE FLOW PROOF", "INDEPENDENT ΔV & CHARGE FLOW PROOF")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 4}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. ΔV = V_A − V_B = k q₁ ( 1/a − 1/b )
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Notice: ΔV is 100% INDEPENDENT of outer charge q₂!
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Since a &lt; b, V_A &gt; V_B for positive q₁!
          </T>

          <Draw on={beat >= 4} delay={dl(4, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Closing Switch S → 100% of q₁ flows to Outer Shell B!
          </T>
        </Fade>

        {/* Open Text Explanation */}
        <Fade on={beat >= 6}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Fundamental principle behind Van de Graaff generator)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("JEE MAIN CONCENTRIC SHELL RECAP", "JEE MAIN CONCENTRIC SHELL RECAP")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Inner charge q₁ ALWAYS creates a higher potential on inner shell A than outer shell B (V_A &gt; V_B)!
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Connecting a wire forces all charge from inner shell to outer shell until V_A = V_B!
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ JEE Main Mastered: ΔV = kq₁(1/a − 1/b) independent of q₂; connecting wire empties inner shell completely! ✓",
            "★ JEE Main Mastered: ΔV = kq₁(1/a − 1/b) independent of q₂; connecting wire empties inner shell completely! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
