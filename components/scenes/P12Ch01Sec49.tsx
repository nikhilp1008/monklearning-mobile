/**
 * P12Ch01 · Section 49 — "Worked Example: Axial Field of a Charged Disc"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Problem setup: Disc of radius R = 0.1 m with surface charge density σ = 2 × 10⁻⁶ C/m².
 *  - Part 1: Calculate axial field at distance x = 0.1 m (x = R).
 *  - Formula: E = (σ / 2ε₀) [ 1 - x / √(R² + x²) ]
 *  - At x = R: 1 - 1/√2 = 1 - 0.707 = 0.293
 *  - E(R) = (2×10⁻⁶ / (2 × 8.854×10⁻¹²)) × (0.293) = 1.13 × 10⁵ × 0.293 = 3.31 × 10⁴ N/C = 33.1 kN/C!
 *  - Part 2: Compare with infinite sheet field E_sheet = σ / 2ε₀ = 1.13 × 10⁵ N/C = 113 kN/C.
 *
 * Beats (en [0, 6, 18, 30, 42, 54, 66, 78, 90]):
 *  0 Title "worked example: axial field of a charged disc" + drawn underline
 *  1 Hook note: computing disc field numerical values and comparing with infinite sheet limit!
 *  2 Badge 1 & Step 1 (Field at x = R = 0.1 m): E = (σ / 2ε₀) [ 1 - 1/√2 ] = 33.1 kN/C
 *  3 Step 1 numerical evaluation details
 *  4 Badge 2 & Step 2 (Infinite Sheet Limit Comparison): E_sheet = σ / 2ε₀ = 113 kN/C
 *  5 Percentage check: Field at x = R is ~29.3% of the infinite sheet field value!
 *  6 Grand Verdict: E(x=R) = 33.1 kN/C (29.3% of infinite sheet field 113 kN/C)!
 */

import React from "react";
import { G, Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  ringD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

function Badge({ n, cx, cy, on, delay }: { n: number; cx: number; cy: number; on: boolean; delay: number }) {
  return (
    <G>
      <Draw
        on={on}
        delay={delay}
        d={`M ${cx - 13} ${cy} A 13 13 0 1 1 ${cx + 13} ${cy} A 13 13 0 1 1 ${cx - 13} ${cy}`}
        stroke={RED}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={on} delay={delay + 0.3}>
        <T x={cx} y={cy + 5} size={14} fill={RED} weight={800}>
          {n}
        </T>
      </Fade>
    </G>
  );
}

export default function P12Ch01Sec49({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ── BEAT 0: Title ── */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={58} size={24} fill={RED} script>
          {t(
            "worked example: axial field of a charged disc",
            "worked example: charged disc ki axis par electric field"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2.5)}
        d="M 220 70 C 440 66, 640 74, 860 69"
        stroke={RED}
        sw={2.4}
        dur={0.7}
      />

      {/* ── BEAT 1: Hook Note ── */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={110} size={15} fill={MUTED} script anchor="start">
          {t(
            "computing disc field numerical values and comparing with infinite sheet limit!",
            "disc field numerical values nikaalna aur infinite sheet limit se compare karna!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2: Badge 1 & Step 1 (Field at x = R = 0.1 m) ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("STEP 1: Field at Distance x = R = 0.1 m", "STEP 1: Distance x = R = 0.1 m par Field")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 4}>
        <G transform="translate(60, 185)">
          <Rect x={0} y={10} width={430} height={85} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={215} y={48} anchor="middle" size={20} fill={INK} weight={800}>
            E = (113 kN/C) × (1 - 1/√2) = 33.1 kN/C
          </T>
          <T x={215} y={78} anchor="middle" size={13} fill={AMBER_DARK} script>
            {t("1 - 1/√2 ≈ 0.293 factor reduction at x = R", "x = R par 1 - 1/√2 ≈ 0.293 factor reduction")}
          </T>
          <Draw on={beat >= 2} delay={dl(2, 1.6)} d="M 100 56 h 230 M 100 60 h 230" stroke={AMBER_DARK} sw={1.5} />
        </G>
      </Fade>

      {/* ── BEAT 4: Badge 2 & Step 2 (Infinite Sheet Limit) ── */}
      <Badge n={2} cx={540} cy={165} on={beat >= 4} delay={dl(4, 0.4)} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={562} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("STEP 2: Infinite Sheet Limit (R → ∞)", "STEP 2: Infinite Sheet Limit (R → ∞)")}
        </T>
      </Fade>

      <Fade on={beat >= 4} dim={beat >= 6}>
        <G transform="translate(540, 185)">
          <T x={0} y={25} anchor="start" size={18} fill={RED} weight={800}>
            E_sheet = σ / 2ε₀ = 113 kN/C
          </T>
          <T x={0} y={65} anchor="start" size={13.5} fill={INK} weight={700}>
            Field at x = R is 29.3% of infinite sheet maximum!
          </T>
        </G>
      </Fade>

      {/* ── BEAT 6: Grand Verdict Chip ── */}
      <Fade on={beat >= 6}>
        <Chip
          x={100}
          y={536}
          w={880}
          h={44}
          fill={GREEN}
          textFill="#ffffff"
          size={18}
        >
          {t(
            "★ VERDICT: E(x=R) = 33.1 kN/C (29.3% of infinite sheet field 113 kN/C)!",
            "★ VERDICT: E(x=R) = 33.1 kN/C (29.3% of infinite sheet field 113 kN/C)!"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
