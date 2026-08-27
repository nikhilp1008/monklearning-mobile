/**
 * P12Ch01 · Section 38 — "Dipole Formulas at a Glance"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Master compilation of all dipole formulas for quick exam recall
 *  - p = q(2a)  [SI: C·m, -q → +q]
 *  - E_axial = 2 k p / r³  (Parallel to p)
 *  - E_eq = k p / r³  (Anti-parallel to p)
 *  - Ratio: E_axial / E_eq = 2
 *  - Torque: τ̄ = p̄ × Ē (τ = p E sin θ)
 *  - Potential Energy: U = -p̄ · Ē (-p E cos θ)
 *  - Work to rotate: W = p E (cos θ₁ - cos θ₂)
 *
 * Beats (en [0, 6, 14, 24, 38, 52, 64, 76, 88, 96]):
 *  0 Title "dipole formulas at a glance" + drawn underline
 *  1 Hook note: ultimate formula cheat-sheet for electric dipoles in board & competitive exams!
 *  2 Dipole moment: p = q(2a) [C·m]
 *  3 Axial field: E_axial = 2 k p / r³ (+p̂)
 *  4 Equatorial field: E_eq = k p / r³ (-p̂)
 *  5 2:1 Ratio: E_axial / E_eq = 2
 *  6 Torque: τ̄ = p̄ × Ē
 *  7 Potential Energy: U = -p̄ · Ē
 *  8 Work to rotate: W = p E (cos θ₁ - cos θ₂)
 *  9 Grand Verdict: Master All 6 Dipole Formulas: p, E_axial, E_eq, 2:1 Ratio, τ, U!
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

export default function P12Ch01Sec38({ currentTime, reveals, language }: SceneProps) {
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
            "dipole formulas at a glance",
            "dipole formulas at a glance"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2.5)}
        d="M 320 70 C 440 66, 640 74, 760 69"
        stroke={RED}
        sw={2.4}
        dur={0.7}
      />

      {/* ── BEAT 1: Hook Note ── */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={110} size={15} fill={MUTED} script anchor="start">
          {t(
            "ultimate formula cheat-sheet for electric dipoles in board & competitive exams!",
            "board & competitive exams ke liye electric dipoles ka formula cheat-sheet!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2 & 3: Dipole Moment & Axial Field ── */}
      <Fade on={beat >= 2} dim={beat >= 6}>
        <G transform="translate(60, 160)">
          <T x={0} y={20} anchor="start" size={14} weight={700} fill={RED}>
            1. Dipole Moment:
          </T>
          <T x={0} y={50} anchor="start" size={20} fill={INK} weight={800}>
            p = q (2a)  [-q → +q, C·m]
          </T>
        </G>
      </Fade>

      <Fade on={beat >= 3} dim={beat >= 6}>
        <G transform="translate(540, 160)">
          <T x={0} y={20} anchor="start" size={14} weight={700} fill={RED}>
            {t("2. Axial Field (r >> a):", "2. Axial Field (r >> a):")}
          </T>
          <T x={0} y={50} anchor="start" size={20} fill={INK} weight={800}>
            E_axial = 2 k p / r³  (Parallel to p̄)
          </T>
        </G>
      </Fade>

      {/* ── BEAT 4 & 5: Equatorial Field & 2:1 Ratio ── */}
      <Fade on={beat >= 4} dim={beat >= 7}>
        <G transform="translate(60, 270)">
          <T x={0} y={20} anchor="start" size={14} weight={700} fill={GREEN}>
            {t("3. Equatorial Field (r >> a):", "3. Equatorial Field (r >> a):")}
          </T>
          <T x={0} y={50} anchor="start" size={20} fill={INK} weight={800}>
            E_eq = k p / r³  (Anti-parallel to p̄)
          </T>
        </G>
      </Fade>

      <Fade on={beat >= 5} dim={beat >= 7}>
        <G transform="translate(540, 270)">
          <T x={0} y={20} anchor="start" size={14} weight={700} fill={GREEN}>
            4. Axial-to-Equatorial Ratio:
          </T>
          <T x={0} y={50} anchor="start" size={20} fill={GREEN} weight={800}>
            E_axial / E_eq = 2  (at same r)
          </T>
        </G>
      </Fade>

      {/* ── BEAT 6 & 7: Torque & Potential Energy ── */}
      <Fade on={beat >= 6} dim={beat >= 9}>
        <G transform="translate(60, 380)">
          <T x={0} y={20} anchor="start" size={14} weight={700} fill={AMBER_DARK}>
            5. Torque in Uniform E:
          </T>
          <T x={0} y={50} anchor="start" size={20} fill={INK} weight={800}>
            τ̄ = p̄ × Ē  (τ = p E sin θ)
          </T>
        </G>
      </Fade>

      <Fade on={beat >= 7} dim={beat >= 9}>
        <G transform="translate(540, 380)">
          <T x={0} y={20} anchor="start" size={14} weight={700} fill={AMBER_DARK}>
            6. Potential Energy:
          </T>
          <T x={0} y={50} anchor="start" size={20} fill={INK} weight={800}>
            U = -p̄ · Ē  (U = -p E cos θ)
          </T>
        </G>
      </Fade>

      {/* ── BEAT 9: Grand Verdict Chip ── */}
      <Fade on={beat >= 9}>
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
            "★ VERDICT: Master All 6 Dipole Formulas: p, E_axial, E_eq, 2:1 Ratio, τ, U!",
            "★ VERDICT: Master All 6 Dipole Formulas: p, E_axial, E_eq, 2:1 Ratio, τ, U!"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
