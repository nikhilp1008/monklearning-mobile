/**
 * Ch01 · Section 43 — "Example 3 [JEE Main]: the density of a small steel sphere"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 24.8, 39.3, 59.1, 73.1, 94.0, 112.4, 128.1]):
 *  0 tag + question card
 *  1 step 1: ρ = m/V with V = (π/6)d³
 *  2 tidy → ρ ∝ m¹ · d⁻³ — the two exponents
 *  3 the board: sphere drawn + the empty error-budget axis
 *  4 step 2: 6/π is exact — rides free
 *  5 step 3: δρ/ρ = 1·δm/m + 3·δd/d
 *  6 step 4: 0.2 % and 0.5 %
 *  7 total 1.7 % + the budget bars — the cube dominates
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | tag x60..300 y40..78 · card x140..940 y92..152 · question bl 130
 *  b1 | formulas (sans 18) x60 st bl 190
 *  b2 | line (sans 18) x60 st bl 232 · note (script 13) x520..715 bl 232
 *  b3 | sphere c(150,330) r55 + diameter arrows + d label · data lines bl 412/436 ·
 *       budget label (750, bl 210) · baseline y300 x660..1000
 *  b4 | note (script 14, green) x300 st bl 300
 *  b5 | rule (sans 19) x300 st bl 348 · note (script 12, red) x660 st bl 348
 *  b6 | rows (sans 16) x300 st bl 396 / 428
 *  b7 | total (sans 19) x300 st bl 476 · chip x640..760 y448..492 ·
 *       bars: m x700..740 y288..300 · d x860..900 y210..300 · labels bl 320 ·
 *       cube note (880, bl 194) · moral x62 st bl 545 · bar x51
 */

import React from "react";
import { Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch01Sec43({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the question */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <Chip x={60} y={40} w={240} h={38} fill={INK} textFill={CREAM} size={15}>
          {t("EXAMPLE 3 · JEE MAIN", "EXAMPLE 3 · JEE MAIN")}
        </Chip>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2)}
        d="M 152 92 h 776 q 12 0 12 12 v 36 q 0 12 -12 12 h -776 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={INK}
        sw={2.2}
        dur={0.9}
      />
      <Fade on={beat >= 0} delay={dl(0, 3.2)}>
        <T x={540} y={130} size={17} fill={INK} weight={700}>
          {t(
            "sphere: m = 50.0 ± 0.1 g · d = 2.00 ± 0.01 cm → max % error in density?",
            "sphere: m = 50.0 ± 0.1 g · d = 2.00 ± 0.01 cm → density mein max % error?"
          )}
        </T>
      </Fade>

      {/* beat 1 — the geometry earns its place */}
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <T x={60} y={190} size={18} fill={INK} weight={700} anchor="start">
          ρ = m / V ,   V = (π/6) · d³
        </T>
      </Fade>

      {/* beat 2 — read off the powers */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={60} y={232} size={18} fill={INK} weight={700} anchor="start">
          ρ = 6m / (π d³)  →  ρ ∝ m¹ · d⁻³
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 12)}>
        <T x={520} y={232} size={13} fill={AMBER_DARK} script anchor="start">
          {t("two exponents = the answer waiting", "do exponents = jawab taiyar")}
        </T>
      </Fade>

      {/* beat 3 — sphere + the empty budget */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 1)}
        d="M 95 330 A 55 55 0 1 1 205 330 A 55 55 0 1 1 95 330"
        stroke={AMBER_DARK}
        sw={2.4}
        dur={0.8}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 2.2)}
        d={`${arrowD(150, 330, 98, 330)} ${arrowD(150, 330, 202, 330)}`}
        stroke={INK}
        sw={1.8}
        dur={0.6}
      />
      <Fade on={beat >= 3} delay={dl(3, 3)}>
        <T x={150} y={318} size={14} fill={INK} script>
          d
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <T x={150} y={412} size={13} fill={INK} weight={600}>
          m = 50.0 ± 0.1 g
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6.5)}>
        <T x={150} y={436} size={13} fill={INK} weight={600}>
          d = 2.00 ± 0.01 cm
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 9)}>
        <T x={750} y={210} size={13} fill={MUTED} script>
          {t("error budget — watch which bar wins", "error budget — kaunsa bar jeetega")}
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 10)}
        d="M 660 300 H 1000"
        stroke={MUTED}
        sw={1.6}
        dur={0.6}
      />

      {/* beat 4 — constants ride free */}
      <Fade on={beat >= 4} delay={dl(4, 3)}>
        <T x={300} y={300} size={14} fill={GREEN} script anchor="start">
          {t("6/π is exact — contributes ZERO error, rides along free", "6/π exact hai — ZERO error, muft mein saath chalta hai")}
        </T>
      </Fade>

      {/* beat 5 — the power rule */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={300} y={348} size={19} fill={INK} weight={800} anchor="start">
          δρ/ρ = 1·δm/m + 3·δd/d
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 10)}>
        <T x={680} y={348} size={12} fill={RED} script anchor="start">
          {t("+3 even though d is downstairs", "+3, bhale d neeche hai")}
        </T>
      </Fade>

      {/* beat 6 — substitute */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={300} y={396} size={16} fill={INK} weight={700} anchor="start">
          δm/m = 0.1 / 50.0 = 0.2 %
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8)}>
        <T x={300} y={428} size={16} fill={INK} weight={700} anchor="start">
          δd/d = 0.01 / 2.00 = 0.5 %
        </T>
      </Fade>

      {/* beat 7 — the total, and the budget bars */}
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={300} y={476} size={19} fill={INK} weight={800} anchor="start">
          δρ = 0.2 + 3 × 0.5 = 1.7 %
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <Chip x={640} y={448} w={120} h={44} fill={INK} textFill={CREAM} size={20} script={false}>
          1.7 %
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 10)}>
        <Rect x={700} y={288} width={40} height={12} fill={GREEN} rx={2} />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 11)}>
        <T x={720} y={320} size={12} fill={GREEN} weight={700}>
          m: 0.2 %
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 13)}>
        <Rect x={860} y={210} width={40} height={90} fill={RED} rx={2} opacity={0.85} />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 14)}>
        <T x={880} y={320} size={12} fill={RED} weight={700}>
          d³: 1.5 %
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 16)}>
        <T x={880} y={194} size={12} fill={RED} script>
          {t("the cube did this", "cube ne kiya ye")}
        </T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 19)}
        d="M 51 522 L 51 552"
        stroke={GREEN}
        sw={3.4}
        dur={0.4}
      />
      <Fade on={beat >= 7} delay={dl(7, 20)}>
        <T x={62} y={545} size={15} fill={GREEN} script anchor="start">
          {t(
            "measure the HIGHEST-POWER quantity most carefully",
            "sabse UNCHI power wali quantity sabse dhyaan se napo"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
