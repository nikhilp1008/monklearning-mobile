/**
 * P12Ch01 · Section 37 — "Energy, Stability, and Non-Uniform Fields"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Potential energy of dipole in field E: U = -p E cos θ = -p̄ · Ē
 *  - Stable equilibrium (θ = 0°): U_min = -p E, τ = 0
 *  - Unstable equilibrium (θ = 180°): U_max = +p E, τ = 0
 *  - Non-uniform fields: Net force F_net ≠ 0 (dipole experiences both translation AND rotation!)
 *
 * Beats (en [0, 6, 16, 26, 40, 52, 64, 74, 88, 98]):
 *  0 Title "energy, stability & non-uniform fields" + drawn underline
 *  1 Hook note: analyzing dipole potential energy landscape and non-uniform field forces!
 *  2 Potential Energy Formula: U = -p E cos θ = -p̄ · Ē
 *  3 Badge 1 & Stable Equilibrium (θ = 0°): U_min = -p E
 *  4 Badge 2 & Unstable Equilibrium (θ = 180°): U_max = +p E
 *  5 Work done in rotating dipole from θ₁ to θ₂: W = p E (cos θ₁ - cos θ₂)
 *  6 Non-uniform field behavior: F_net ≠ 0 (dipole moves towards stronger field region!)
 *  7 Comb picking up paper bits: induced dipole in non-uniform field!
 *  8 Grand Verdict: U = -p̄ · Ē  |  Stable at θ=0° (U=-pE), Unstable at θ=180° (U=+pE)!
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

export default function P12Ch01Sec37({ currentTime, reveals, language }: SceneProps) {
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
            "energy, stability & non-uniform fields",
            "energy, stability & non-uniform fields"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2.5)}
        d="M 260 70 C 440 66, 640 74, 820 69"
        stroke={RED}
        sw={2.4}
        dur={0.7}
      />

      {/* ── BEAT 1: Hook Note ── */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={110} size={15} fill={MUTED} script anchor="start">
          {t(
            "analyzing dipole potential energy landscape and non-uniform field forces!",
            "dipole potential energy landscape aur non-uniform field forces!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2: Potential Energy Formula ── */}
      <Fade on={beat >= 2} dim={beat >= 5}>
        <G transform="translate(60, 160)">
          <Rect x={0} y={10} width={430} height={85} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={215} y={48} anchor="middle" size={24} fill={INK} weight={800}>
            U = -p E cos θ = -p̄ · Ē
          </T>
          <T x={215} y={78} anchor="middle" size={13} fill={AMBER_DARK} script>
            {t("Dipole potential energy in electric field", "Electric field me dipole ki potential energy")}
          </T>
        </G>
      </Fade>

      {/* ── BEAT 3: Badge 1 & Stable Equilibrium ── */}
      <Badge n={1} cx={540} cy={165} on={beat >= 3} delay={dl(3, 0.4)} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={562} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("STABLE EQUILIBRIUM (θ = 0°)", "STABLE EQUILIBRIUM (θ = 0°)")}
        </T>
      </Fade>

      <Fade on={beat >= 3} dim={beat >= 6}>
        <G transform="translate(540, 185)">
          <T x={0} y={25} anchor="start" size={18} fill={GREEN} weight={800}>
            U_min = -p E  (Minimum energy!)
          </T>
        </G>
      </Fade>

      {/* ── BEAT 4: Badge 2 & Unstable Equilibrium ── */}
      <Badge n={2} cx={52} cy={290} on={beat >= 4} delay={dl(4, 0.4)} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={74} y={295} size={14} fill={RED} weight={700} anchor="start">
          {t("UNSTABLE EQUILIBRIUM (θ = 180°)", "UNSTABLE EQUILIBRIUM (θ = 180°)")}
        </T>
      </Fade>

      <Fade on={beat >= 4} dim={beat >= 6}>
        <G transform="translate(60, 310)">
          <T x={0} y={25} anchor="start" size={18} fill={RED} weight={800}>
            U_max = +p E  (Maximum energy!)
          </T>
        </G>
      </Fade>

      {/* ── BEAT 8: Grand Verdict Chip ── */}
      <Fade on={beat >= 8}>
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
            "★ VERDICT: U = -p̄ · Ē  |  Stable at θ=0° (U=-pE), Unstable at θ=180° (U=+pE)!",
            "★ VERDICT: U = -p̄ · Ē  |  Stable at θ=0° (U=-pE), Unstable at θ=180° (U=+pE)!"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
