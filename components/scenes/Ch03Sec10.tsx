/**
 * Ch03 · Section 10 — "JEE Main: net displacement, verified two ways"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 15.4, 28.1, 50.9, 60.5, 81.2, 106.0, 130.8, 143.5, 168.4]):
 *  0 heading
 *  1 problem line
 *  2 diagram: 6 east, 8 at 60°, resultant
 *  3 METHOD 1 header (E=+x, N=+y)
 *  4 leg components
 *  5 add axis-by-axis → √148 ≈ 12.2 m
 *  6 direction: α ≈ 34.7° N of E + sanity
 *  7 METHOD 2 header
 *  8 parallelogram: √148 again
 *  9 verdict: components scale, parallelogram = 2-vector shortcut
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b2 | S(120,300) dot, "start" end x108 bl 305 · leg1 →(252,300) "6 m" cx195 bl 322 ·
 *       leg2 →(340,147.6) "8 m" st (310,228) · ext dash (252,300)→(320,300) ·
 *       60° arc r24 lbl st x284 bl 286 · R (120,300)→(340,147.6) "R" (220,210) ·
 *       α arc r30 lbl (150,320) · caption cx270 bl 350 s11
 *  R col x520..1044:
 *  b3 | header st x530 bl 130 · underline M530 138 h430
 *  b4 | st x550 bl 164 s13 · st x550 bl 190 s13
 *  b5 | st x550 bl 222 s13 · st x550 bl 250 s14
 *  b6 | st x550 bl 282 s13 · green st x550 bl 306 s11
 *  b7 | header st x530 bl 344 · underline M530 352 h430
 *  b8 | st x550 bl 380 s14 · green st x550 bl 404 s11
 *  b9 | bar M66 440 v56 · lines st x84 bl 460 / 484 / 508 s12
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  INK,
  INK_LIGHT,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch03Sec10({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={20} fill={INK} script>
          {t(
            "JEE MAIN — net displacement, two independent roads",
            "JEE MAIN — net displacement, do alag raaste"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 1 — the problem */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "walk 6 m east, then 8 m at 60° north of east — find R, verify it TWICE",
            "6 m east chalo, phir 8 m par 60° north-of-east — R nikaalo, DO baar verify karo"
          )}
        </T>
      </Fade>

      {/* beat 2 — draw it first */}
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <Circle cx={120} cy={300} r={4.5} fill={INK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={108} y={305} size={11} fill={INK_LIGHT} script anchor="end">
          {t("start", "shuru")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.6)} d={arrowD(120, 300, 252, 300)} stroke={INK} sw={2.6} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 2.5)}>
        <T x={195} y={322} size={13} fill={INK} weight={700}>6 m</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 3.4)} d="M 252 300 H 320" stroke={MUTED} sw={1.3} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 4)} d={arrowD(252, 300, 340, 147.6)} stroke={INK} sw={2.6} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 4.9)}>
        <T x={310} y={228} size={13} fill={INK} weight={700} anchor="start">8 m</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 5.8)} d="M 276 300 A 24 24 0 0 0 264 279.2" stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 6.4)}>
        <T x={284} y={286} size={12} fill={AMBER_DARK} weight={700} anchor="start">60°</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 7.6)} d={arrowD(120, 300, 340, 147.6)} stroke={GREEN} sw={3} dur={0.9} />
      <Fade on={beat >= 2} delay={dl(2, 8.6)}>
        <T x={220} y={210} size={15} fill={GREEN} weight={800}>R</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 9.6)} d="M 150 300 A 30 30 0 0 0 144.7 282.9" stroke={GREEN} sw={1.8} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 10.2)}>
        <T x={150} y={320} size={12} fill={GREEN} weight={700}>α</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 12)}>
        <T x={270} y={350} size={11} fill={AMBER_DARK} script>
          {t(
            "leg 1 is due east → angle between the legs = the given 60°",
            "leg 1 seedha east hai → legs ke beech ka angle wahi 60° hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — method 1 header */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={530} y={130} size={13} fill={INK} script anchor="start">
          {t("METHOD 1 — COMPONENTS (east = +x, north = +y)", "METHOD 1 — COMPONENTS (east = +x, north = +y)")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.8)} d="M 530 138 h 430" stroke={AMBER} sw={1.8} dur={0.5} />

      {/* beat 4 — break each leg */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={550} y={164} size={13} fill={INK} weight={700} anchor="start">
          {t("leg 1:  (6, 0)   — nothing along y", "leg 1:  (6, 0)   — y mein kuchh nahi")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8)}>
        <T x={550} y={190} size={13} fill={INK} weight={700} anchor="start">
          leg 2:  (8 cos60°, 8 sin60°) = (4, 4√3)
        </T>
      </Fade>

      {/* beat 5 — add axis by axis */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={550} y={222} size={13} fill={INK} weight={700} anchor="start">
          R = (6+4, 0+4√3) = (10, 4√3)
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 10)}>
        <T x={550} y={250} size={14} fill={INK} weight={800} anchor="start">
          |R| = √(100 + 48) = √148 ≈ 12.2 m
        </T>
      </Fade>

      {/* beat 6 — the direction, always */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={550} y={282} size={13} fill={INK} weight={700} anchor="start">
          tan α = 4√3 ⁄ 10 → α ≈ 34.7° N of E
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 12)}>
        <T x={550} y={306} size={11} fill={GREEN} script anchor="start">
          {t(
            "sanity: between the east leg (0°) and the 60° leg ✓",
            "sanity: east leg (0°) aur 60° leg ke beech baithta hai ✓"
          )}
        </T>
      </Fade>

      {/* beat 7 — method 2 header */}
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={530} y={344} size={13} fill={INK} script anchor="start">
          {t(
            "METHOD 2 — PARALLELOGRAM (independent check)",
            "METHOD 2 — PARALLELOGRAM (azaad check)"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.8)} d="M 530 352 h 430" stroke={AMBER} sw={1.8} dur={0.5} />

      {/* beat 8 — no components at all */}
      <Fade on={beat >= 8} delay={dl(8, 1)}>
        <T x={550} y={380} size={14} fill={INK} weight={800} anchor="start">
          R = √(36 + 64 + 96·cos60°) = √148 ✓
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 10)}>
        <T x={550} y={404} size={11} fill={GREEN} script anchor="start">
          {t(
            "≈ 12.2 m — identical, and no component was ever computed",
            "≈ 12.2 m — bilkul wahi, aur ek bhi component nahi nikala"
          )}
        </T>
      </Fade>

      {/* beat 9 — which method when */}
      <Draw on={beat >= 9} delay={dl(9, 0.8)} d="M 66 440 v 56" stroke={AMBER_DARK} sw={3.4} dur={0.4} />
      <Fade on={beat >= 9} delay={dl(9, 1.6)}>
        <T x={84} y={460} size={12} fill={INK} script anchor="start">
          {t(
            "exactly two vectors → the parallelogram one-liner is faster",
            "sirf do vectors → parallelogram one-liner tez hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 8)}>
        <T x={84} y={484} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "three or more → it collapses; components don't care how many",
            "teen ya zyada → woh toot jata hai; components ko ginti se fark nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 14)}>
        <T x={84} y={508} size={12} fill={GREEN} script anchor="start">
          {t(
            "default = components · parallelogram = the 2-vector shortcut",
            "default = components · parallelogram = 2-vector shortcut"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
