/**
 * P12Ch01 · Section 64 — "Complete Formula Toolkit for the Chapter"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Master formula toolkit covering all major laws of Chapter 1
 *  - 1. Charge Quantisation: Q = ±n e
 *  - 2. Coulomb's Law: F = k q₁ q₂ / r²
 *  - 3. Electric Field: E = F / q₀  ⇒  Point charge: E = k q / r²
 *  - 4. Dipole Moment: p = q (2a)  |  Torque: τ̄ = p̄ × Ē  |  PE: U = -p̄ · Ē
 *  - 5. Dipole Fields: E_axial = 2 k p / r³  |  E_eq = k p / r³
 *  - 6. Continuous Densities: dq = λ dx, σ dA, ρ dV
 *  - 7. Electric Flux & Gauss: Φ = E A cos θ  |  ∮ Ē · dĀ = Q_enc / ε₀
 *  - 8. Gauss Applications: Wire E = 2kλ/r  |  Sheet E = σ/2ε₀  |  Shell E_in = 0
 *
 * Beats (en [0, 8, 20, 32, 44, 56, 68, 80, 92, 104]):
 *  0 Title "complete formula toolkit for chapter 1" + drawn underline
 *  1 Hook note: complete reference formula sheet for board exams and entrance tests!
 *  2 Quantisation & Coulomb: Q = n e  |  F = k q₁ q₂ / r²
 *  3 Electric Field: E = F / q₀  |  Point Charge E = k q / r²
 *  4 Dipole Toolkit: p = q(2a)  |  τ = p E sin θ  |  U = -p E cos θ
 *  5 Dipole Fields: E_axial = 2kp/r³  |  E_eq = kp/r³
 *  6 Densities & Flux: dq = λdx, σdA, ρdV  |  Φ = E A cos θ
 *  7 Gauss Applications: Wire 2kλ/r  |  Sheet σ/2ε₀  |  Shell E_in=0
 *  8 Grand Verdict: Complete Chapter 1 Formula Toolkit Mastered!
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

export default function P12Ch01Sec64({ currentTime, reveals, language }: SceneProps) {
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
            "complete formula toolkit for chapter 1",
            "chapter 1 ka complete formula toolkit"
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
            "complete reference formula sheet for board exams and entrance tests!",
            "board exams aur entrance tests ke liye complete formula sheet!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2 & 3: Quantisation & Field ── */}
      <Fade on={beat >= 2} dim={beat >= 6}>
        <G transform="translate(60, 160)">
          <T x={0} y={20} anchor="start" size={14} weight={700} fill={RED}>
            1. Quantisation & Coulomb:
          </T>
          <T x={0} y={50} anchor="start" size={18} fill={INK} weight={800}>
            Q = n e  |  F = k q₁ q₂ / r²
          </T>
        </G>
      </Fade>

      <Fade on={beat >= 3} dim={beat >= 6}>
        <G transform="translate(540, 160)">
          <T x={0} y={20} anchor="start" size={14} weight={700} fill={RED}>
            2. Electric Field Definition:
          </T>
          <T x={0} y={50} anchor="start" size={18} fill={INK} weight={800}>
            E = F / q₀  |  Point Charge E = k q / r²
          </T>
        </G>
      </Fade>

      {/* ── BEAT 4 & 5: Dipole Toolkit & Dipole Fields ── */}
      <Fade on={beat >= 4} dim={beat >= 7}>
        <G transform="translate(60, 270)">
          <T x={0} y={20} anchor="start" size={14} weight={700} fill={GREEN}>
            3. Dipole Moment & Torque:
          </T>
          <T x={0} y={50} anchor="start" size={18} fill={INK} weight={800}>
            p = q (2a)  |  τ = p E sin θ  |  U = -p E cos θ
          </T>
        </G>
      </Fade>

      <Fade on={beat >= 5} dim={beat >= 7}>
        <G transform="translate(540, 270)">
          <T x={0} y={20} anchor="start" size={14} weight={700} fill={GREEN}>
            4. Dipole Fields:
          </T>
          <T x={0} y={50} anchor="start" size={18} fill={GREEN} weight={800}>
            E_axial = 2 k p / r³  |  E_eq = k p / r³
          </T>
        </G>
      </Fade>

      {/* ── BEAT 6 & 7: Densities & Gauss ── */}
      <Fade on={beat >= 6} dim={beat >= 8}>
        <G transform="translate(60, 380)">
          <T x={0} y={20} anchor="start" size={14} weight={700} fill={AMBER_DARK}>
            5. Flux & Gauss's Law:
          </T>
          <T x={0} y={50} anchor="start" size={18} fill={INK} weight={800}>
            Φ = E A cos θ  |  ∮ Ē · dĀ = Q_enc / ε₀
          </T>
        </G>
      </Fade>

      <Fade on={beat >= 7} dim={beat >= 8}>
        <G transform="translate(540, 380)">
          <T x={0} y={20} anchor="start" size={14} weight={700} fill={AMBER_DARK}>
            6. Gauss Applications:
          </T>
          <T x={0} y={50} anchor="start" size={18} fill={INK} weight={800}>
            Wire 2kλ/r  |  Sheet σ/2ε₀  |  Shell E_in=0
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
            "★ VERDICT: Complete Chapter 1 Formula Toolkit Mastered!",
            "★ VERDICT: Complete Chapter 1 Formula Toolkit Mastered!"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
