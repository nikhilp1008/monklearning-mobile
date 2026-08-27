/**
 * P12Ch01 · Section 32 — "What Is an Electric Dipole?"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Definition: pair of equal & opposite point charges (+q and -q) separated by a small distance 2a
 *  - Net charge of dipole Q_net = (+q) + (-q) = 0
 *  - Net electric field of dipole is NOT zero (charges are at different locations in space!)
 *  - Real-world molecular examples: H₂O, HCl, CO (polar molecules)
 *  - Drawn dipole geometry showing -q and +q separated by 2a with center O
 *
 * Beats (en [0, 6, 18, 32, 42, 54, 68, 80]):
 *  0 Title "what is an electric dipole?" + drawn underline
 *  1 Hook note: understanding nature's microscopic polar structures from H₂O to antennas!
 *  2 Badge 1 & Dipole Definition: Pair of equal & opposite point charges (+q, -q) separated by 2a
 *  3 Drawn Dipole Diagram showing -q, center O, +q, and separation distance 2a
 *  4 Badge 2 & Net Charge paradox: Q_net = 0, but Field E ≠ 0!
 *  5 Molecular examples: Water (H₂O), Hydrochloric Acid (HCl), Carbon Monoxide (CO)
 *  6 Ideal Dipole limit: q → ∞, 2a → 0 such that product p = q(2a) remains finite!
 *  7 Grand Verdict: Q_net = 0, but E ≠ 0 because +q and -q are separated by 2a!
 */

import React from "react";
import { Circle, G, Line, Rect } from 'react-native-svg';
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

export default function P12Ch01Sec32({ currentTime, reveals, language }: SceneProps) {
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
            "what is an electric dipole?",
            "electric dipole kya hota hai?"
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
            "understanding nature's microscopic polar structures from H₂O to antennas!",
            "H₂O se leke antennas tak nature ke microscopic polar structures ko samajhna!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2 & 3: Badge 1 & Drawn Dipole Diagram ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("ELECTRIC DIPOLE GEOMETRY", "ELECTRIC DIPOLE GEOMETRY")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 5}>
        <G transform="translate(60, 185)">
          {/* Axis Line */}
          <Line x1={40} y1={60} x2={260} y2={60} stroke="#94a3b8" strokeWidth={1.8} strokeDasharray="4 4" />

          {/* Negative Charge -q */}
          <Circle cx={60} cy={60} r={16} fill="#e0f2fe" stroke="#0284c7" strokeWidth={1.8} />
          <T x={60} y={66} anchor="middle" size={12} fill="#0284c7" weight={800}>-q</T>

          {/* Center O */}
          <Circle cx={150} cy={60} r={4} fill={INK} />
          <T x={150} y={45} anchor="middle" size={11} fill={INK} weight={700}>O</T>

          {/* Positive Charge +q */}
          <Circle cx={240} cy={60} r={16} fill="#ffe4e6" stroke={RED} strokeWidth={1.8} />
          <T x={240} y={66} anchor="middle" size={12} fill={RED} weight={800}>+q</T>

          {/* Separation 2a labels */}
          <T x={105} y={80} anchor="middle" size={11} fill={MUTED}>a</T>
          <T x={195} y={80} anchor="middle" size={11} fill={MUTED}>a</T>
          <T x={150} y={105} anchor="middle" size={12} fill={AMBER_DARK} weight={700}>Separation distance = 2a</T>
        </G>
      </Fade>

      {/* ── BEAT 4: Badge 2 & Net Charge Paradox Q_net = 0, E ≠ 0 ── */}
      <Badge n={2} cx={540} cy={165} on={beat >= 4} delay={dl(4, 0.4)} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={562} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("THE DIPOLE PARADOX: Q_net = 0, BUT E ≠ 0", "THE DIPOLE PARADOX: Q_net = 0, BUT E ≠ 0")}
        </T>
      </Fade>

      <Fade on={beat >= 4} dim={beat >= 6}>
        <G transform="translate(540, 185)">
          <Rect x={0} y={10} width={450} height={85} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={225} y={44} anchor="middle" size={18} fill={INK} weight={800}>
            Q_net = (+q) + (-q) = 0
          </T>
          <T x={225} y={74} anchor="middle" size={13} fill={AMBER_DARK} script>
            {t("Electric Field E ≠ 0 because +q and -q are separated!", "Electric Field E ≠ 0 kyunki charges 2a door hain!")}
          </T>
        </G>
      </Fade>

      {/* ── BEAT 5: Real Molecular Examples ── */}
      <Fade on={beat >= 5} dim={beat >= 7}>
        <G transform="translate(60, 320)">
          <T x={0} y={20} anchor="start" size={14} weight={700} fill={GREEN}>
            {t("Polar Molecular Examples:", "Polar Molecular Examples:")}
          </T>
          <T x={0} y={55} anchor="start" size={16} fill={GREEN} weight={800}>
            Water (H₂O), Hydrochloric Acid (HCl), Carbon Monoxide (CO)
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
            "★ VERDICT: Q_net = 0, but E ≠ 0 because +q and -q are separated by 2a!",
            "★ VERDICT: Q_net = 0, but E ≠ 0 because +q and -q are separated by 2a!"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
