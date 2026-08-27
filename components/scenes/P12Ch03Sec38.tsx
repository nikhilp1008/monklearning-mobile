/**
 * P12Ch02 · Section 38 — "Worked example: the infinite ladder network"
 * Beats (en [0,1,3,4,5,6,7]): 7 beats
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

export default function P12Ch03Sec38({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("JEE Advanced: The Infinite Ladder Network", "JEE Advanced: The Infinite Ladder Network")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: SELF SIMILARITY TRICK */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("SELF-SIMILARITY RECURSIVE TRICK", "SELF-SIMILARITY RECURSIVE TRICK")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Infinite Property: Truncating 1 unit cell leaves ladder unchanged.
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Equivalent Circuit: R in series with parallel combination (R || X).
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Recursive Equation: X = R + [ (R × X) / (R + X) ].
          </T>

          <Draw on={beat >= 3} delay={dl(3, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Key Concept: Self-similarity turns infinite network into 1 equation!
          </T>
        </Fade>

        <Fade on={beat >= 4}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Classic physics trick for infinite repeating structures)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: QUADRATIC DERIVATION */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("QUADRATIC DERIVATION & GOLDEN RATIO", "QUADRATIC DERIVATION & GOLDEN RATIO")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 4}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Clear Denominator: X(R + X) = R(R + X) + R X  =&gt;  X² - R X - R² = 0.
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Quadratic Formula: X = [ R ± √(R² + 4 R²) ] / 2.
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Select Positive Root: X = R [ (1 + √5) / 2 ].
          </T>

          <Draw on={beat >= 6} delay={dl(6, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Golden Ratio Result: X = 1.618 R (Golden Ratio Φ × R) !
          </T>
        </Fade>

        <Fade on={beat >= 6}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Negative root discarded because physical resistance &gt; 0)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 6} delay={dl(6, 0.2)} />
        <Fade on={beat >= 6} delay={dl(6, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("INFINITE LADDER WORKED EXAMPLE VERDICT", "INFINITE LADDER WORKED EXAMPLE VERDICT")}
          </T>
        </Fade>

        <Fade on={beat >= 6}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Equivalent input resistance of an infinite identical resistor ladder is exactly Φ × R ≈ 1.618 R.
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            The golden ratio Φ = (1 + √5) / 2 emerges naturally from the quadratic self-similarity equation.
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 6}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Result: X = 1.618 R (Golden Ratio). Discard negative root since R cannot be negative! ✓",
            "★ Result: X = 1.618 R (Golden Ratio). Discard negative root since R cannot be negative! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
