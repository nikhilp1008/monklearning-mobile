/**
 * Ch06 · Section 36 — "Worked example: balancing a metre stick [CBSE]"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 16.73, 27.14, 40.53, 51.97, 66.39, 75.61, 85.25]; hi b1..b3 are
 * 1 s → short staggers there):
 *  0 title + subline
 *  1 figure: stick, centre pivot, 0.6 kg block left at 0.20 m, dashed 0.3 kg right
 *    at d₂ = ? (label swaps to 0.40 m at b5)
 *  2 green own-weight-no-torque note
 *  3 givens (right)
 *  4 moments equation
 *  5 green d₂ result box + label swap on figure
 *  6 amber g-cancels note
 *  7 answer line + underline
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | stick (180,220)→(620,220) sw4 · pivot apex(400,224) base 382/418 y252 ·
 *       m1 string x280 → block x263..297 y260..290 · "0.6 kg" cx280 bl 310 ·
 *       m2 string x560 dashed block x546..574 y260..288 · "0.3 kg" cx560 bl 308 ·
 *       d1 dash (280,205)→(400,205) "0.20 m" cx340 bl 192 · d2 dash (400,205)→(560,205)
 *       "d₂ = ?" cx480 bl 192 (b1..4) / "d₂ = 0.40 m" green (b5+)
 *  b2 | script12 st x680 bl 150 / bl 176
 *  b3 | sans14 st x680 bl 230 / bl 260
 *  b4 | sans15 st x80 bl 380
 *  b5 | green box x560..920 y355..415 · cx740 bl 392
 *  b6 | script12 st x80 bl 440
 *  b7 | script13 st x80 bl 490 · underline y510 x80..560
 */

import React from "react";
import { Path } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch06Sec36({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the balance */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t(
            "balancing a metre stick [CBSE board]",
            "metre stick ka balance [CBSE board]"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 9)}>
        <T x={540} y={92} size={12} fill={MUTED} script>
          {t(
            "centre-pivoted stick · 0.6 kg at 0.20 m — where must 0.3 kg hang?",
            "centre par pivoted stick · 0.20 m par 0.6 kg — 0.3 kg kahan latke?"
          )}
        </T>
      </Fade>

      {/* beat 1 — the setup */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M 180 220 H 620" stroke={INK} sw={4} dur={0.5} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.4)}
        d="M 400 224 L 382 252 h 36 z"
        stroke={INK}
        sw={2.2}
        dur={0.4}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.6)}
        d="M 280 220 V 260 M 263 260 h 34 v 30 h -34 z"
        stroke={INK}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={280} y={310} size={13} fill={INK} weight={700}>
          0.6 kg
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <Path
          d="M 560 220 V 260 M 546 260 h 28 v 28 h -28 z"
          fill="none"
          stroke={AMBER}
          strokeWidth={2}
          strokeDasharray="6 5"
        />
        <Path
          d="M 280 205 H 400 M 400 205 H 560"
          fill="none"
          stroke={MUTED}
          strokeWidth={1.3}
          strokeDasharray="5 4"
        />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={560} y={308} size={13} fill={AMBER_DARK} weight={700}>
          0.3 kg
        </T>
        <T x={340} y={192} size={12} fill={MUTED} weight={700}>
          0.20 m
        </T>
      </Fade>
      <Fade on={beat >= 1 && beat < 5} delay={dl(1, 1)}>
        <T x={480} y={192} size={12} fill={AMBER_DARK} weight={700}>
          d₂ = ?
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4)}>
        <T x={480} y={192} size={12} fill={GREEN_DARK} weight={700}>
          d₂ = 0.40 m
        </T>
      </Fade>

      {/* beat 2 — the stick's own weight */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={680} y={150} size={12} fill={GREEN_DARK} script anchor="start">
          {t("uniform + pivoted at centre ⇒", "uniform + centre par pivoted ⇒")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={680} y={176} size={12} fill={GREEN_DARK} script anchor="start">
          {t(
            "its own weight: NO torque — ignore it",
            "apna weight: koi torque NAHI — chhod do"
          )}
        </T>
      </Fade>

      {/* beat 3 — givens */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={680} y={230} size={14} fill={INK} anchor="start" weight={700}>
          m₁ = 0.6 kg , d₁ = 0.20 m
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={680} y={260} size={14} fill={INK} anchor="start" weight={700}>
          m₂ = 0.3 kg , d₂ = ?
        </T>
      </Fade>

      {/* beat 4 — moments */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={80} y={380} size={15} fill={INK} anchor="start" weight={700}>
          m₁d₁ = m₂d₂  ⇒  (0.6)(0.20) = (0.3) d₂
        </T>
      </Fade>

      {/* beat 5 — solve */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.8)}
        d="M 572 355 h 336 q 12 0 12 12 v 36 q 0 12 -12 12 h -336 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={740} y={392} size={18} fill={INK} weight={700}>
          d₂ = 0.12 / 0.3 = 0.40 m
        </T>
      </Fade>

      {/* beat 6 — g cancels */}
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={80} y={440} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "g sits on both sides and cancels — work directly with mass × distance",
            "g dono taraf baith kar cancel — seedha mass × distance se kaam karo"
          )}
        </T>
      </Fade>

      {/* beat 7 — the answer, and the intuition */}
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={80} y={490} size={13} fill={GREEN_DARK} script anchor="start">
          {t(
            "0.3 kg hangs 40 cm out — lighter mass, larger distance, exactly as balance demands ✓",
            "0.3 kg 40 cm door latkegi — halki mass, badi distance, jaisa balance maangta hai ✓"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 4.5)} d="M 80 510 h 560" stroke={GREEN} sw={2.2} dur={0.6} />
    </Scene>
  );
}
