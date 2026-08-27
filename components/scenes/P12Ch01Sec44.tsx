/**
 * P12Ch01 · Section 44 — "The Universal Recipe: Chop, Write, Cancel, Integrate"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Step 1: CHOP the distribution into tiny charge element dq
 *  - Step 2: WRITE electric field dE = k dq / r² produced by dq
 *  - Step 3: CANCEL symmetric perpendicular components by geometric symmetry
 *  - Step 4: INTEGRATE surviving components over complete object limits
 *
 * Beats (en [0, 6, 16, 30, 42, 52, 62, 72, 84]):
 *  0 Title "the universal 4-step recipe for continuous charge fields" + drawn underline
 *  1 Hook note: master algorithm for deriving electric fields of rods, rings, discs, and arcs!
 *  2 Badge 1 & Step 1: CHOP into element dq (dq = λdx, σdA, or ρdV)
 *  3 Badge 2 & Step 2: WRITE element field dE = k dq / r²
 *  4 Badge 3 & Step 3: CANCEL symmetric perpendicular components
 *  5 Badge 4 & Step 4: INTEGRATE surviving components: E_net = ∫ dE_surviving
 *  6 Grand Verdict: 4-Step Recipe: Chop dq → Write dE → Cancel symmetry → Integrate ∫!
 */

import React from "react";
import { G } from 'react-native-svg';
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

export default function P12Ch01Sec44({ currentTime, reveals, language }: SceneProps) {
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
            "the universal 4-step recipe for continuous charge fields",
            "continuous charge integration ka universal 4-step recipe"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2.5)}
        d="M 180 70 C 440 66, 640 74, 900 69"
        stroke={RED}
        sw={2.4}
        dur={0.7}
      />

      {/* ── BEAT 1: Hook Note ── */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={110} size={15} fill={MUTED} script anchor="start">
          {t(
            "master algorithm for deriving electric fields of rods, rings, discs, and arcs!",
            "rods, rings, discs, aur arcs ke electric fields nikaalne ka master algorithm!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2: Badge 1 & Step 1 (CHOP) ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("STEP 1: CHOP into element dq", "STEP 1: Element dq me CHOP karein")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 6}>
        <G transform="translate(60, 185)">
          <T x={0} y={20} anchor="start" size={13.5} fill={INK}>
            dq = λ dx (1D), σ dA (2D), or ρ dV (3D)
          </T>
        </G>
      </Fade>

      {/* ── BEAT 3: Badge 2 & Step 2 (WRITE) ── */}
      <Badge n={2} cx={540} cy={165} on={beat >= 3} delay={dl(3, 0.4)} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={562} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("STEP 2: WRITE element field dE", "STEP 2: Element field dE WRITE karein")}
        </T>
      </Fade>

      <Fade on={beat >= 3} dim={beat >= 6}>
        <G transform="translate(540, 185)">
          <T x={0} y={20} anchor="start" size={16} fill={RED} weight={800}>
            dE = k dq / r²
          </T>
        </G>
      </Fade>

      {/* ── BEAT 4: Badge 3 & Step 3 (CANCEL) ── */}
      <Badge n={3} cx={52} cy={290} on={beat >= 4} delay={dl(4, 0.4)} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={74} y={295} size={14} fill={RED} weight={700} anchor="start">
          {t("STEP 3: CANCEL symmetric components", "STEP 3: Symmetric components CANCEL karein")}
        </T>
      </Fade>

      <Fade on={beat >= 4} dim={beat >= 6}>
        <G transform="translate(60, 310)">
          <T x={0} y={20} anchor="start" size={13.5} fill={AMBER_DARK}>
            Perpendicular components cancel by symmetry!
          </T>
        </G>
      </Fade>

      {/* ── BEAT 5: Badge 4 & Step 4 (INTEGRATE) ── */}
      <Badge n={4} cx={540} cy={290} on={beat >= 5} delay={dl(5, 0.4)} />
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={562} y={295} size={14} fill={RED} weight={700} anchor="start">
          {t("STEP 4: INTEGRATE surviving components", "STEP 4: Surviving components INTEGRATE karein")}
        </T>
      </Fade>

      <Fade on={beat >= 5} dim={beat >= 6}>
        <G transform="translate(540, 310)">
          <T x={0} y={20} anchor="start" size={18} fill={GREEN} weight={800}>
            E_net = ∫ dE_surviving
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
            "★ VERDICT: 4-Step Recipe: Chop dq → Write dE → Cancel symmetry → Integrate ∫!",
            "★ VERDICT: 4-Step Recipe: Chop dq → Write dE → Cancel symmetry → Integrate ∫!"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
