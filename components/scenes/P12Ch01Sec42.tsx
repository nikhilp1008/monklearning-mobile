/**
 * P12Ch01 · Section 42 — "Why We Stop Counting and Start Describing a Density"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Discrete charges (counting e⁻ individually) vs Continuous Charge Distribution (smooth density)
 *  - 1 C of charge contains ~6.25 × 10¹⁸ electrons — impossible to sum individually!
 *  - Macroscopic scale: charge appears continuous (like smooth water vs discrete H₂O molecules)
 *  - Transition from summation Σ to integration ∫
 *
 * Beats (en [0, 6, 18, 30, 44, 56, 66, 80]):
 *  0 Title "why we stop counting & start describing a density" + drawn underline
 *  1 Hook note: shifting from discrete particle summation Σ to smooth calculus integration ∫!
 *  2 Badge 1 & The Scale Problem: 1 C = 6.25 × 10¹⁸ electrons (Summation impossible!)
 *  3 Badge 2 & Macroscopic Model: Charge smoothed out into continuous charge density!
 *  4 Mathematical transition: E_net = Σ k q_i / r_i²  →  E_net = ∫ k dq / r²
 *  5 Analogy: Smooth water flow vs individual H₂O molecules
 *  6 Grand Verdict: Macroscopic charge is continuous ⇒ replace Σ with calculus integral ∫!
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

export default function P12Ch01Sec42({ currentTime, reveals, language }: SceneProps) {
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
            "why we stop counting & start describing a density",
            "discrete se continuous charge density tak ka safar"
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
            "shifting from discrete particle summation Σ to smooth calculus integration ∫!",
            "discrete particle summation Σ se smooth calculus integration ∫ par shift hona!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2: Badge 1 & The Scale Problem ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("THE SCALE PROBLEM: 1 C = 6.25 × 10¹⁸ ELECTRONS", "THE SCALE PROBLEM: 1 C = 6.25 × 10¹⁸ ELECTRONS")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 4}>
        <G transform="translate(60, 185)">
          <Rect x={0} y={10} width={430} height={85} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={215} y={48} anchor="middle" size={20} fill={INK} weight={800}>
            1 C = 6.25 × 10¹⁸ electrons
          </T>
          <T x={215} y={78} anchor="middle" size={13} fill={AMBER_DARK} script>
            {t("Summing 10¹⁸ discrete terms is impossible!", "10¹⁸ terms ko add karna namumkin hai!")}
          </T>
          <Draw on={beat >= 2} delay={dl(2, 1.6)} d="M 100 56 h 230 M 100 60 h 230" stroke={AMBER_DARK} sw={1.5} />
        </G>
      </Fade>

      {/* ── BEAT 4: Badge 2 & Mathematical Transition Σ → ∫ ── */}
      <Badge n={2} cx={540} cy={165} on={beat >= 4} delay={dl(4, 0.4)} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={562} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("MATHEMATICAL TRANSITION: Σ → ∫", "MATHEMATICAL TRANSITION: Σ → ∫")}
        </T>
      </Fade>

      <Fade on={beat >= 4} dim={beat >= 6}>
        <G transform="translate(540, 185)">
          <T x={0} y={25} anchor="start" size={14} fill={INK} weight={700}>
            Discrete Summation: E = Σ (k q_i / r_i²)
          </T>
          <T x={0} y={65} anchor="start" size={20} fill={RED} weight={800}>
            Continuous Integral: E = ∫ (k dq / r²)
          </T>
        </G>
      </Fade>

      {/* ── BEAT 7: Grand Verdict Chip ── */}
      <Fade on={beat >= 7}>
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
            "★ VERDICT: Macroscopic charge is continuous ⇒ replace Σ with calculus integral ∫!",
            "★ VERDICT: Macroscopic charge is continuous ⇒ replace Σ with calculus integral ∫!"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
