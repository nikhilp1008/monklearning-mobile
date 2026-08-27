/**
 * P12Ch02 · Section 39 — "Pitfalls and pro-tips for combining resistors"
 * Beats (en [0,1,2,3,4,5,6,7]): 8 beats
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

export default function P12Ch03Sec39({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Pitfalls & Pro-Tips: Combining Resistors", "Pitfalls & Pro-Tips: Combining Resistors")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: RECIPROCAL & TOPOLOGY TRAPS */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("RECIPROCAL & TOPOLOGY TRAPS", "RECIPROCAL & TOPOLOGY TRAPS")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Reciprocal Trap: 1/R_p = 5/6 =&gt; R_p = 6/5 = 1.2 Ω (NOT 5/6!).
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Shared Nodes: Parallel needs BOTH nodes shared, not side-by-side.
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Series Trap: Series requires NO intermediate node branches.
          </T>

          <Draw on={beat >= 3} delay={dl(3, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Rule 1: Always check node connections before topology!
          </T>
        </Fade>

        <Fade on={beat >= 4}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Most exam mark losses come from omitting final reciprocal step)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: CURRENT DIVIDER TRAPS */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 3} delay={dl(3, 0.2)} />
        <Fade on={beat >= 3} delay={dl(3, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("CURRENT DIVIDER & BRIDGING TRAPS", "CURRENT DIVIDER & BRIDGING TRAPS")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 3}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Wrong Numerator: I₁ uses OPPOSITE R₂: I₁ = I [ R₂ / (R₁ + R₂) ].
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Bridge Networks: Wheatstone bridge cannot use simple sum.
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Conservation: Branch currents MUST sum up to total current I.
          </T>

          <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Rule 2: Verify current sum I_total = ∑ I_branch at nodes!
          </T>
        </Fade>

        <Fade on={beat >= 6}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Current divider formula ONLY applies to 2 parallel branches)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("RESISTOR COMBINATION PRO-TIPS VERDICT", "RESISTOR COMBINATION PRO-TIPS VERDICT")}
          </T>
        </Fade>

        <Fade on={beat >= 5}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            2-Resistor parallel shortcut R_p = (R₁ R₂) / (R₁ + R₂) eliminates reciprocal errors completely.
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Sanity check: Parallel R_p MUST be strictly smaller than the smallest individual resistor.
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Always end network problems with a current-sum check (I_total = I₁ + I₂)! ✓",
            "★ Always end network problems with a current-sum check (I_total = I₁ + I₂)! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
