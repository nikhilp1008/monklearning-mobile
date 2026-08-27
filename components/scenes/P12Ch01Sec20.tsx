/**
 * P12Ch01 · Section 20 — "Worked Examples: A Board Numerical and the Dielectric Speed Trap"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Board numerical: 2 point charges q₁ = +2 μC and q₂ = -6 μC separated by r = 30 cm in air
 *  - Find force F_air: F = 9×10⁹ × 2×10⁻⁶ × 6×10⁻⁶ / (0.3)² = 1.2 N (Attractive)
 *  - Dielectric speed trap: immersed in water (K = 80). Find F_water.
 *  - F_water = F_air / 80 = 1.2 N / 80 = 0.015 N = 15 mN!
 *
 * Beats (en [0, 6, 16, 30, 44, 56, 62, 76, 90, 102]):
 *  0 Title "worked examples: board numerical & dielectric speed trap" + drawn underline
 *  1 Hook note: solving a classic CBSE board problem step-by-step!
 *  2 Badge 1 & Problem setup: q₁ = +2 μC, q₂ = -6 μC, r = 30 cm in air
 *  3 Step 1: Force in air F_air = 9×10⁹ × (2×10⁻⁶)(6×10⁻⁶) / (0.3)² = 1.2 N
 *  4 Badge 2 & Dielectric Speed Trap: immersed in water (K = 80)
 *  5 Step 2: Force in water F_water = F_air / 80 = 1.2 / 80 = 15 mN!
 *  6 Distance conversion tip: 30 cm → 0.3 m before squaring
 *  7 Speed-trap warning: DO NOT re-calculate from scratch! Just divide F_air by K!
 *  8 Attraction vs Repulsion sign rule: opposite signs = ATTRACTIVE
 *  9 Grand Verdict: F_air = 1.2 N (Attractive) ⇒ F_water = F_air / 80 = 15 mN!
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
  arrowD,
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

export default function P12Ch01Sec20({ currentTime, reveals, language }: SceneProps) {
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
            "worked examples: board numerical & dielectric speed trap",
            "worked examples: board numerical & dielectric speed trap"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2.5)}
        d="M 240 70 C 440 66, 640 74, 840 69"
        stroke={RED}
        sw={2.4}
        dur={0.7}
      />

      {/* ── BEAT 1: Hook Note ── */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={110} size={15} fill={MUTED} script anchor="start">
          {t(
            "solving a classic CBSE board problem step-by-step!",
            "classic CBSE board problem ko step-by-step solve karna!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2: Badge 1 & Problem Setup ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("BOARD NUMERICAL SETUP", "BOARD NUMERICAL SETUP")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 6}>
        <G transform="translate(60, 185)">
          <T x={0} y={20} anchor="start" size={13} fill={INK}>
            {t(
              "q₁ = +2 μC, q₂ = -6 μC separated by r = 30 cm = 0.3 m in air.",
              "q₁ = +2 μC, q₂ = -6 μC distance r = 30 cm = 0.3 m in air."
            )}
          </T>
        </G>
      </Fade>

      {/* ── BEAT 3: Step 1 Force in Air ── */}
      <Fade on={beat >= 3} dim={beat >= 6}>
        <G transform="translate(60, 235)">
          <T x={0} y={20} anchor="start" size={14} weight={700} fill={AMBER_DARK}>
            {t("STEP 1: Force in Air F_air", "STEP 1: Force in Air F_air")}
          </T>
          <T x={0} y={50} anchor="start" size={18} fill={INK} weight={800}>
            F_air = (9 × 10⁹) × (2 × 10⁻⁶) × (6 × 10⁻⁶) / (0.3)² = 1.2 N
          </T>
          <T x={0} y={75} anchor="start" size={13} fill={GREEN} weight={700}>
            Direction: ATTRACTIVE (opposite charges!)
          </T>
        </G>
      </Fade>

      {/* ── BEAT 4: Badge 2 & Dielectric Speed Trap ── */}
      <Badge n={2} cx={540} cy={165} on={beat >= 4} delay={dl(4, 0.4)} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={562} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("STEP 2: Dielectric Speed Trap (Water K = 80)", "STEP 2: Dielectric Speed Trap (Water K = 80)")}
        </T>
      </Fade>

      <Fade on={beat >= 4} dim={beat >= 7}>
        <G transform="translate(540, 185)">
          <Rect x={0} y={10} width={450} height={90} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={225} y={48} anchor="middle" size={22} fill={INK} weight={800}>
            F_water = F_air / 80 = 1.2 N / 80
          </T>
          <T x={225} y={80} anchor="middle" size={24} fill={RED} weight={800}>
            F_water = 15 mN (0.015 N)
          </T>
          <Draw on={beat >= 4} delay={dl(4, 1.6)} d="M 120 56 h 210 M 120 60 h 210" stroke={AMBER_DARK} sw={1.5} />
        </G>
      </Fade>

      {/* ── BEAT 7: Pro-Tip Warning ── */}
      <Fade on={beat >= 7} dim={beat >= 9}>
        <G transform="translate(540, 315)">
          <T x={0} y={20} anchor="start" size={13.5} weight={700} fill={GREEN}>
            {t("SPEED TRAP PRO-TIP:", "SPEED TRAP PRO-TIP:")}
          </T>
          <T x={0} y={50} anchor="start" size={13} fill={INK}>
            {t(
              "Do NOT calculate F_water from scratch using 4πε! Just divide F_air by K!",
              "4πε se scratch se calculate NAHI karein! Direct F_air ko K se divide karein!"
            )}
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
            "★ VERDICT: F_air = 1.2 N (Attractive) ⇒ F_water = F_air / 80 = 15 mN!",
            "★ VERDICT: F_air = 1.2 N (Attractive) ⇒ F_water = F_air / 80 = 15 mN!"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
