/**
 * P12Ch01 · Section 15 — "Coulomb Force versus Gravity, and Why Matter Seems Inert"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Comparison between Electrostatic Force and Gravitational Force between 2 protons
 *  - F_e / F_g ≈ 10³⁶ for two protons! (10³⁹ for two electrons!)
 *  - Why bulk matter seems electrically inert: exact cancellation of positive nuclear charge and negative electron cloud
 *
 * Beats (en [0, 6, 20, 28, 40, 54, 66, 80]):
 *  0 Title "coulomb force vs. gravity & bulk matter neutrality" + drawn underline
 *  1 Hook note: why is gravity dominant in orbits when electrostatic force is 10³⁶ times stronger?
 *  2 Badge 1 & Force ratio between 2 protons: F_e / F_g ≈ 10³⁶ !
 *  3 Force ratio between 2 electrons: F_e / F_g ≈ 10³⁹ !
 *  4 Badge 2 & Neutrality of Bulk Matter: exact cancellation of (+) nuclei and (-) electron clouds
 *  5 Attraction vs Repulsion contrast: Gravity ONLY attracts, Electrostatic BOTH attracts and repels
 *  6 Why celestial bodies are governed by gravity: net charge = 0!
 *  7 Grand Verdict: F_e / F_g ≈ 10³⁶ | Bulk matter neutral → Gravity rules orbits!
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

export default function P12Ch01Sec15({ currentTime, reveals, language }: SceneProps) {
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
            "coulomb force vs. gravity & bulk matter neutrality",
            "coulomb force vs. gravity & bulk matter neutrality"
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
            "why is gravity dominant in orbits when electrostatic force is 10³⁶ times stronger?",
            "gravity orbits mein dominant kyun hai jab electrostatic force 10³⁶ guna strong hai?"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2: Badge 1 & Proton Force Ratio ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("PROTON-PROTON FORCE RATIO", "PROTON-PROTON FORCE RATIO")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 6}>
        <G transform="translate(60, 185)">
          <Rect x={0} y={10} width={430} height={85} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={215} y={48} anchor="middle" size={24} fill={INK} weight={800}>
            F_e / F_g ≈ 10³⁶
          </T>
          <T x={215} y={78} anchor="middle" size={13} fill={AMBER_DARK} script>
            {t("Between 2 protons — electrostatic force completely dominates!", "2 protons ke बीच — electrostatic force bilkul dominate karta hai!")}
          </T>
          <Draw on={beat >= 2} delay={dl(2, 1.6)} d="M 130 56 h 170 M 130 60 h 170" stroke={AMBER_DARK} sw={1.5} />
        </G>
      </Fade>

      {/* ── BEAT 3: Electron Force Ratio ── */}
      <Fade on={beat >= 3} dim={beat >= 6}>
        <G transform="translate(540, 185)">
          <T x={0} y={35} anchor="start" size={14} weight={700} fill={RED}>
            Between 2 electrons:
          </T>
          <T x={0} y={70} anchor="start" size={22} fill={RED} weight={800}>
            F_e / F_g ≈ 10³⁹ !
          </T>
        </G>
      </Fade>

      {/* ── BEAT 4: Badge 2 & Bulk Matter Neutrality ── */}
      <Badge n={2} cx={52} cy={300} on={beat >= 4} delay={dl(4, 0.4)} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={74} y={305} size={14} fill={RED} weight={700} anchor="start">
          {t("NEUTRALITY OF BULK MATTER", "NEUTRALITY OF BULK MATTER")}
        </T>
      </Fade>

      <Fade on={beat >= 4} dim={beat >= 6}>
        <G transform="translate(60, 325)">
          <T x={0} y={20} anchor="start" size={13.5} fill={INK}>
            {t(
              "Bulk matter contains equal (+) nuclear protons and (-) orbital electrons",
              "Bulk matter mein equal (+) protons aur (-) electrons hote hain"
            )}
          </T>
          <T x={0} y={48} anchor="start" size={13.5} fill={GREEN} weight={800}>
            Net charge Q_net = 0 → Electrostatic forces cancel out completely!
          </T>
        </G>
      </Fade>

      {/* ── BEAT 5 & 6: Gravity vs Electrostatic Contrast ── */}
      <Fade on={beat >= 5} dim={beat >= 7}>
        <G transform="translate(540, 325)">
          <T x={0} y={20} anchor="start" size={13} fill={AMBER_DARK} weight={700}>
            Gravity: ONLY attracts (masses always positive)
          </T>
          <T x={0} y={50} anchor="start" size={13} fill={RED} weight={700}>
            Electrostatic: BOTH attracts and repels (+ and -)
          </T>
          <T x={0} y={80} anchor="start" size={13} script={true} fill={MUTED}>
            That is why planets and stars are governed by gravity!
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
            "★ VERDICT: F_e / F_g ≈ 10³⁶ | Bulk matter neutral → Gravity rules orbits!",
            "★ VERDICT: F_e / F_g ≈ 10³⁶ | Bulk matter neutral → Gravity rules orbits!"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
