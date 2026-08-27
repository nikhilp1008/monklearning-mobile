/**
 * P12Ch01 · Section 8 — "Worked Examples: Counting Electrons and Speed-Trap Sharing"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Problem 1: Step-by-step calculation of electrons in 1 Coulomb (n = Q/e = 6.25 × 10¹⁸ e⁻)
 *  - Problem 2: Sequential 3-sphere contact speed-trap problem (A touches B → q/2 each, then B touches C → q/4 each)
 *
 * Beats (en [0, 6, 16, 28, 38, 44, 54, 66, 78, 90]):
 *  0 Title "worked examples: electron count & speed-trap sharing" + drawn underline
 *  1 Hook note: mastering two most frequent exam numerical patterns
 *  2 Badge 1 & Problem 1: n = Q / e = 1 / (1.6 × 10⁻¹⁹) = 6.25 × 10¹⁸ electrons
 *  3 Badge 2 & Problem 2: 3 identical spheres A (+q), B (0), C (0) sequential sharing
 *  4 Step A: Sphere A (+q) touches neutral B → q_A = q_B = q / 2
 *  5 Step B: Sphere B (q/2) touches neutral C → q_B = q_C = q / 4
 *  6 Final state: q_A = q/2, q_B = q/4, q_C = q/4
 *  7 Speed-trap warning: track intermediate charge before second touch!
 *  8 Grand Verdict: 1 C = 6.25 × 10¹⁸ e⁻ | Sequential contacts step-by-step!
 */

import React from "react";
import { Circle, G, Rect } from 'react-native-svg';
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

export default function P12Ch01Sec8({ currentTime, reveals, language }: SceneProps) {
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
            "worked examples: electron count & speed-trap sharing",
            "worked examples: electron count aur speed-trap sharing"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2.5)}
        d="M 300 70 C 440 66, 640 74, 780 69"
        stroke={RED}
        sw={2.4}
        dur={0.7}
      />

      {/* ── BEAT 1: Hook Note ── */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={110} size={15} fill={MUTED} script anchor="start">
          {t(
            "mastering the two most frequent exam numerical patterns!",
            "sabse frequent exam numerical patterns ko master karna!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2: Badge 1 & Problem 1 (Counting Electrons in 1 C) ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("PROBLEM 1: Electrons in 1 Coulomb", "PROBLEM 1: 1 Coulomb mein Electrons")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 8}>
        <G transform="translate(60, 185)">
          <Rect x={0} y={10} width={430} height={100} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={215} y={40} anchor="middle" size={16} fill={INK} weight={700}>
            n = Q / e = 1 C / (1.6 × 10⁻¹⁹ C)
          </T>
          <T x={215} y={78} anchor="middle" size={22} fill={RED} weight={800}>
            n = 6.25 × 10¹⁸ e⁻
          </T>
          <Draw on={beat >= 2} delay={dl(2, 1.8)} d={ringD(215, 74, 180, 16)} stroke={AMBER_DARK} sw={1.8} />
        </G>
      </Fade>

      {/* ── BEAT 3: Badge 2 & Problem 2 Setup (NEET Speed-Trap Sharing) ── */}
      <Badge n={2} cx={540} cy={165} on={beat >= 3} delay={dl(3, 0.4)} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={562} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("PROBLEM 2: Sequential Contact Speed-Trap", "PROBLEM 2: Sequential Contact Speed-Trap")}
        </T>
      </Fade>

      <Fade on={beat >= 3} dim={beat >= 8}>
        <G transform="translate(540, 185)">
          <T x={0} y={20} anchor="start" size={13} fill={MUTED}>
            {t("3 identical metal spheres: A (+q), B (0), C (0)", "3 identical metal spheres: A (+q), B (0), C (0)")}
          </T>

          {/* Initial Spheres */}
          <Circle cx={50} cy={55} r={16} fill="#ffe4e6" stroke={RED} strokeWidth={1.8} />
          <T x={50} y={60} anchor="middle" size={11} fill={RED} weight={800}>A:+q</T>

          <Circle cx={140} cy={55} r={16} fill="#f1f5f9" stroke="#64748b" strokeWidth={1.8} />
          <T x={140} y={60} anchor="middle" size={11} fill={INK} weight={800}>B:0</T>

          <Circle cx={230} cy={55} r={16} fill="#f1f5f9" stroke="#64748b" strokeWidth={1.8} />
          <T x={230} y={60} anchor="middle" size={11} fill={INK} weight={800}>C:0</T>
        </G>
      </Fade>

      {/* ── BEAT 4: Step A (A touches B) ── */}
      <Fade on={beat >= 4} dim={beat >= 8}>
        <G transform="translate(60, 310)">
          <T x={0} y={16} anchor="start" size={13} weight={700} fill="#0369a1">
            {t("Step A: A touches B → q_A = q_B = q / 2", "Step A: A touches B → q_A = q_B = q / 2")}
          </T>
          <Circle cx={40} cy={50} r={16} fill="#fef3c7" stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={40} y={55} anchor="middle" size={11} fill={AMBER_DARK} weight={800}>A:q/2</T>

          <Circle cx={80} cy={50} r={16} fill="#fef3c7" stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={80} y={55} anchor="middle" size={11} fill={AMBER_DARK} weight={800}>B:q/2</T>
        </G>
      </Fade>

      {/* ── BEAT 5 & 6: Step B (B touches C) & Final State ── */}
      <Fade on={beat >= 5} dim={beat >= 8}>
        <G transform="translate(540, 310)">
          <T x={0} y={16} anchor="start" size={13} weight={700} fill={GREEN}>
            {t("Step B: B (q/2) touches C (0) → q_B = q_C = q / 4 !", "Step B: B (q/2) touches C (0) → q_B = q_C = q / 4 !")}
          </T>
          <Circle cx={40} cy={50} r={16} fill="#dcfce7" stroke={GREEN} strokeWidth={1.8} />
          <T x={40} y={55} anchor="middle" size={11} fill={GREEN} weight={800}>B:q/4</T>

          <Circle cx={80} cy={50} r={16} fill="#dcfce7" stroke={GREEN} strokeWidth={1.8} />
          <T x={80} y={55} anchor="middle" size={11} fill={GREEN} weight={800}>C:q/4</T>

          <T x={140} y={55} anchor="start" size={14} weight={800} fill={GREEN}>
            {t("Final: q_A = q/2, q_B = q/4, q_C = q/4", "Final: q_A = q/2, q_B = q/4, q_C = q/4")}
          </T>
        </G>
      </Fade>

      {/* ── BEAT 7: Speed-Trap Warning ── */}
      <Fade on={beat >= 7} dim={beat >= 8}>
        <G transform="translate(60, 440)">
          <T x={480} y={20} anchor="middle" size={13.5} script={true} fill={RED}>
            {t(
              "Speed-Trap: Never assume C gets q/2! Always use intermediate B charge (q/2) for second touch!",
              "Speed-Trap: C ko q/2 mat maniye! Hamesha intermediate B charge (q/2) use karein!"
            )}
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
            "★ VERDICT: 1 C = 6.25 × 10¹⁸ e⁻ | Follow sequential contacts step-by-step!",
            "★ VERDICT: 1 C = 6.25 × 10¹⁸ e⁻ | Follow sequential contacts step-by-step!"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
