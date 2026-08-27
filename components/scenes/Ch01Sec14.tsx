/**
 * Ch01 · Section 14 — "Example 4 [JEE Advanced]: the natural unit of length"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 24.8, 41.2, 54.3, 78.7, 101.5, 126.3, 146.5]):
 *  0 tag + question card: c = G = h = 1 → unit of length?
 *  1 STEP 1: L = cˣ Gʸ hᶻ
 *  2 the only assumption — the rest is forced (underline)
 *  3 the picture: three constant cards with their dimensional recipes
 *  4 STEP 2: collect exponents (M · L · T rows)
 *  5 STEP 3: match both sides → z = y, x = −3y, 2y = 1 → the solution
 *  6 STEP 4: assemble → √(Gh/c³) ≈ 4×10⁻³⁵ m
 *  7 the Planck length — bookkeeping only, the modern SI's own logic
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | tag x60..310 y40..78 · card x140..980 y88..148 · question (sans 18) bl 122
 *  b1 | "L = cˣ Gʸ hᶻ" (sans 24)   | T mid | x185..315  bl 190
 *  b2 | underline y204 x185..315 · note (script 14) x360..668 bl 190
 *  b3 | constant cards ×3 (200×80) | Draw  | y220..300  x60 / 290 / 520
 *       symbol sans 20 bl 252 · dim sans 15 bl 284
 *  b3 | note (script 14, muted)    | T st  | x730..961  bl 260
 *  b4 | collect rows (sans 16)     | T st  | x60 st  bl 340 / 368 / 396
 *  b5 | match rows (sans 16)       | T st  | x220 st bl 340 / 368 / 396
 *  b5 | solution (sans 18, amber)  | T st  | x60..270  bl 440
 *  b6 | assemble (sans 20)         | T st  | x60..330  bl 488
 *  b6 | result chip                | Chip  | x360..580 y464..508
 *  b7 | bar x51 y522..586 · payoff (script 16, green) x60..553 bl 540
 *  b7 | line2 (script 15, amber)   | T st  | x60..555  bl 582
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
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const CARDS: [number, string, string][] = [
  [60, "c", "[L T⁻¹]"],
  [290, "G", "[M⁻¹ L³ T⁻²]"],
  [520, "h", "[M L² T⁻¹]"],
];

export default function Ch01Sec14({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the question */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <Chip x={60} y={40} w={250} h={38} fill={INK} textFill={CREAM} size={15}>
          {t("EXAMPLE 4 · JEE ADVANCED", "EXAMPLE 4 · JEE ADVANCED")}
        </Chip>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2)}
        d="M 152 88 h 816 q 12 0 12 12 v 36 q 0 12 -12 12 h -816 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={INK}
        sw={2.2}
        dur={0.9}
      />
      <Fade on={beat >= 0} delay={dl(0, 3.2)}>
        <T x={560} y={122} size={18} fill={INK} weight={700}>
          {t(
            "natural units: set c = G = h = 1  →  derive the unit of length",
            "natural units: c = G = h = 1 maano  →  length ki unit nikaalo"
          )}
        </T>
      </Fade>

      {/* beat 1 — the assumption */}
      <Fade on={beat >= 1} delay={dl(1, 3.5)}>
        <T x={250} y={190} size={24} fill={INK} weight={800}>
          L = cˣ Gʸ hᶻ
        </T>
      </Fade>

      {/* beat 2 — the only assumption */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 1)}
        d="M 185 204 C 225 200, 275 207, 315 202"
        stroke={AMBER}
        sw={2.4}
        dur={0.5}
      />
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={360} y={190} size={14} fill={AMBER_DARK} script anchor="start">
          {t(
            "the only assumption — the rest is forced",
            "bas yahi ek assumption — baaki sab forced"
          )}
        </T>
      </Fade>

      {/* beat 3 — three recipes in, one length out */}
      {CARDS.map(([x, sym, dim], i) => (
        <G key={sym}>
          <Draw
            on={beat >= 3}
            delay={dl(3, 1 + i * 3.5)}
            d={`M ${x + 12} 220 h 176 q 12 0 12 12 v 56 q 0 12 -12 12 h -176 q -12 0 -12 -12 v -56 q 0 -12 12 -12`}
            stroke={INK}
            sw={2.2}
            dur={0.7}
          />
          <Fade on={beat >= 3} delay={dl(3, 1.6 + i * 3.5)}>
            <T x={x + 100} y={252} size={20} fill={INK} weight={800}>
              {sym}
            </T>
          </Fade>
          <Fade on={beat >= 3} delay={dl(3, 2.2 + i * 3.5)}>
            <T x={x + 100} y={284} size={15} fill={AMBER_DARK} weight={700}>
              {dim}
            </T>
          </Fade>
        </G>
      ))}
      <Fade on={beat >= 3} delay={dl(3, 15)}>
        <T x={730} y={260} size={14} fill={MUTED} script anchor="start">
          {t("three recipes in — one length out", "teen recipe andar — ek length bahar")}
        </T>
      </Fade>

      {/* beat 4 — collect the exponents */}
      <Fade on={beat >= 4} delay={dl(4, 3)}>
        <T x={60} y={340} size={16} fill={INK} weight={600} anchor="start">
          M:  −y + z
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8)}>
        <T x={60} y={368} size={16} fill={INK} weight={600} anchor="start">
          L:  x + 3y + 2z
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 13)}>
        <T x={60} y={396} size={16} fill={INK} weight={600} anchor="start">
          T:  −x − 2y − z
        </T>
      </Fade>

      {/* beat 5 — match both sides and solve */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={220} y={340} size={16} fill={INK} weight={600} anchor="start">
          = 0   ⇒   z = y
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 12)}>
        <T x={220} y={368} size={16} fill={INK} weight={600} anchor="start">
          = 1   ⇒   2y = 1
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 7)}>
        <T x={220} y={396} size={16} fill={INK} weight={600} anchor="start">
          = 0   ⇒   x = −3y
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 17)}>
        <T x={60} y={440} size={18} fill={AMBER_DARK} weight={700} anchor="start">
          y = ½ · z = ½ · x = −3/2
        </T>
      </Fade>

      {/* beat 6 — assemble */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={60} y={488} size={20} fill={INK} weight={700} anchor="start">
          L = c⁻³ᐟ² G¹ᐟ² h¹ᐟ² = √(Gh/c³)
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8)}>
        <Chip x={360} y={464} w={220} h={44} fill={INK} textFill={CREAM} size={19} script={false}>
          ≈ 4 × 10⁻³⁵ m
        </Chip>
      </Fade>

      {/* beat 7 — the Planck length */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 1)}
        d="M 51 522 L 51 586"
        stroke={GREEN}
        sw={3.4}
        dur={0.5}
      />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={62} y={540} size={16} fill={GREEN} script anchor="start">
          {t(
            "the PLANCK LENGTH — where gravity meets quantum mechanics",
            "PLANCK LENGTH — jahan gravity aur quantum takraate hain"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 10)}>
        <T x={62} y={582} size={15} fill={AMBER_DARK} script anchor="start">
          {t(
            "no physics — only bookkeeping. the modern SI's own logic.",
            "koi physics nahi — sirf bookkeeping. modern SI ki yahi logic hai."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
