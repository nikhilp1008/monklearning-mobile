/**
 * P12Ch01 · Section 65 — "Chapter Cheat Sheet: Quick Recall"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Final chapter summary and high-frequency exam recall points
 *  - 1. Charge: Quantised (Q = ne), Conserved, Invariant under motion.
 *  - 2. Coulomb Force: Inverse square (1/r²), central vector force, medium dielectric K divides force.
 *  - 3. Electric Field: Force per unit positive test charge, lines never intersect and never form closed loops.
 *  - 4. Electric Dipole: Vector p̄ points -q to +q, axial field is TWICE equatorial field (2:1 ratio).
 *  - 5. Continuous Charge: λ (1D), σ (2D), ρ (3D). Ring max field at x = R / √2.
 *  - 6. Gauss's Law: ∮ Ē · dĀ = Q_enc / ε₀, independent of surface shape/size. Inside shell field is ZERO.
 *
 * Beats (en [0, 8, 22, 34, 46, 58, 72, 84, 96, 104]):
 *  0 Title "chapter 1 cheat sheet: quick recall" + drawn underline
 *  1 Hook note: final quick recall highlights for instant revision!
 *  2 Core Charge Laws: Quantised Q=ne, Conserved, Invariant
 *  3 Coulomb Force: Inverse square 1/r², Medium divides by K
 *  4 Electric Field Lines: Never intersect, continuous curves - to +
 *  5 Dipole Key Fact: p̄ (-q → +q), Axial E_ax = 2 E_eq (2:1 ratio)
 *  6 Continuous & Gauss: Ring max at R/√2  |  Gauss ∮ Ē·dĀ = Q_enc/ε₀  |  Shell E_in = 0
 *  7 Grand Verdict: Class 12 Physics Chapter 1: Electric Charges & Fields 100% Complete!
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

export default function P12Ch01Sec65({ currentTime, reveals, language }: SceneProps) {
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
            "chapter 1 cheat sheet: quick recall",
            "chapter 1 cheat sheet: quick recall"
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
            "final quick recall highlights for instant revision!",
            "instant revision ke liye final quick recall highlights!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2 & 3: Charge & Force ── */}
      <Fade on={beat >= 2} dim={beat >= 6}>
        <G transform="translate(60, 160)">
          <T x={0} y={20} anchor="start" size={14} weight={700} fill={RED}>
            1. Core Charge Rules:
          </T>
          <T x={0} y={50} anchor="start" size={18} fill={INK} weight={800}>
            Quantised (Q=ne), Conserved, Invariant
          </T>
        </G>
      </Fade>

      <Fade on={beat >= 3} dim={beat >= 6}>
        <G transform="translate(540, 160)">
          <T x={0} y={20} anchor="start" size={14} weight={700} fill={RED}>
            2. Coulomb Force:
          </T>
          <T x={0} y={50} anchor="start" size={18} fill={INK} weight={800}>
            Inverse-square (1/r²), Medium reduces force ÷ K
          </T>
        </G>
      </Fade>

      {/* ── BEAT 4 & 5: Field Lines & Dipole ── */}
      <Fade on={beat >= 4} dim={beat >= 7}>
        <G transform="translate(60, 270)">
          <T x={0} y={20} anchor="start" size={14} weight={700} fill={GREEN}>
            3. Field Lines:
          </T>
          <T x={0} y={50} anchor="start" size={18} fill={INK} weight={800}>
            Never intersect, continuous (+ to -)
          </T>
        </G>
      </Fade>

      <Fade on={beat >= 5} dim={beat >= 7}>
        <G transform="translate(540, 270)">
          <T x={0} y={20} anchor="start" size={14} weight={700} fill={GREEN}>
            4. Electric Dipole:
          </T>
          <T x={0} y={50} anchor="start" size={18} fill={GREEN} weight={800}>
            p̄ (-q → +q), E_axial = 2 E_eq (2:1 Ratio!)
          </T>
        </G>
      </Fade>

      {/* ── BEAT 6: Gauss's Law ── */}
      <Fade on={beat >= 6} dim={beat >= 8}>
        <G transform="translate(60, 380)">
          <T x={0} y={20} anchor="start" size={14} weight={700} fill={AMBER_DARK}>
            5. Gauss & Shielding:
          </T>
          <T x={0} y={50} anchor="start" size={18} fill={INK} weight={800}>
            Φ = Q_enc / ε₀  |  Inside shell E = 0!
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
            "★ VERDICT: Class 12 Physics Chapter 1: Electric Charges & Fields 100% Complete!",
            "★ VERDICT: Class 12 Physics Chapter 1: Electric Charges & Fields 100% Complete!"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
