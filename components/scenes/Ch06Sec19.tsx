/**
 * Ch06 · Section 19 — "Worked example: triangle area and a perpendicular [JEE Main]"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 9.87, 19.86, 34.28, 42.39, 53.48, 63.72] — b0 is 1 s):
 *  0 title (instant)
 *  1 figure: axes, P(3,1)→(365,375), Q(1,4)→(255,210), dashed third side,
 *    ⊙ at centroid (273,340), bottom ⊙ label
 *  2 sides + zero-z note
 *  3 only-k cross line
 *  4 triangle fill + area line
 *  5 unit vector line
 *  6 green sense line
 *  7 green answer box
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | x (150,430)→(480,430) "x"(488,436) · y (200,470)→(200,180) "y"(200,168) ·
 *       P label st(373,370) · Q label cx260 bl 200 · ⊙ r9 (273,340) ·
 *       label script12 cx300 bl 500
 *  b2 | sans16 st x540 bl 140 · script12 st x540 bl 168
 *  b3 | sans16 st x540 bl 220
 *  b4 | fill triangle amber .18 · sans16 st x540 bl 270
 *  b5 | sans16 st x540 bl 320
 *  b6 | script13 st x540 bl 370
 *  b7 | green box x540..1000 y400..470 · cx770 bl 442
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
  arrowD,
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

export default function Ch06Sec19({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the blend */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "triangle area + a perpendicular [JEE Main]",
            "triangle ka area + ek perpendicular [JEE Main]"
          )}
        </T>
      </Fade>

      {/* beat 1 — flat sides, product sticks up */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 1)}
        d={`${arrowD(150, 430, 480, 430)} ${arrowD(200, 470, 200, 180)}`}
        stroke={INK}
        sw={2}
        dur={1}
      />
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={488} y={436} size={14} fill={INK} anchor="start" weight={700}>
          x
        </T>
        <T x={200} y={168} size={14} fill={INK} weight={700}>
          y
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3)} d={arrowD(200, 430, 365, 375)} stroke={INK} sw={2.8} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 3.8)}>
        <T x={373} y={370} size={15} fill={INK} anchor="start" weight={700}>
          P
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 4.6)} d={arrowD(200, 430, 255, 210)} stroke={INK} sw={2.8} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 5.4)}>
        <T x={260} y={200} size={15} fill={INK} weight={700}>
          Q
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6.2)}>
        <Path
          d="M 365 375 L 255 210"
          fill="none"
          stroke={MUTED}
          strokeWidth={1.8}
          strokeDasharray="7 6"
        />
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 7)}
        d="M 264 340 a 9 9 0 1 0 18 0 a 9 9 0 1 0 -18 0 M 270.5 340 a 2.5 2.5 0 1 0 5 0 a 2.5 2.5 0 1 0 -5 0"
        stroke={GREEN}
        fill={GREEN}
        sw={2}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={300} y={500} size={12} fill={GREEN_DARK} script>
          {t(
            "⊙ = P × Q — straight out of the page (z)",
            "⊙ = P × Q — seedha page se bahar (z)"
          )}
        </T>
      </Fade>

      {/* beat 2 — the sides */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={540} y={140} size={16} fill={INK} anchor="start" weight={700}>
          P = 3i + j ,   Q = i + 4j
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={540} y={168} size={12} fill={MUTED} script anchor="start">
          {t("both have zero z-component", "dono ka z-component zero")}
        </T>
      </Fade>

      {/* beat 3 — only k survives */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={540} y={220} size={16} fill={INK} anchor="start" weight={700}>
          P × Q = k[(3)(4) − (1)(1)] = 11k
        </T>
      </Fade>

      {/* beat 4 — half the parallelogram */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <Path
          d="M 200 430 L 365 375 L 255 210 z"
          fill={AMBER}
          opacity={0.18}
          stroke="none"
        />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.5)}>
        <T x={540} y={270} size={16} fill={INK} anchor="start" weight={700}>
          {t("area = ½ |P × Q| = ½(11) = 5.5 sq units", "area = ½ |P × Q| = ½(11) = 5.5 sq units")}
        </T>
      </Fade>

      {/* beat 5 — the unit vector */}
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={540} y={320} size={16} fill={INK} anchor="start" weight={700}>
          n = (P × Q)/|P × Q| = 11k/11 = k
        </T>
      </Fade>

      {/* beat 6 — of course it's k */}
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={540} y={370} size={13} fill={GREEN_DARK} script anchor="start">
          {t(
            "makes sense: sides in the xy-plane ⇒ ⊥ along z ✓",
            "sense banta hai: sides xy-plane mein ⇒ ⊥ z ke saath ✓"
          )}
        </T>
      </Fade>

      {/* beat 7 — two skills, one product */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.8)}
        d="M 552 400 h 436 q 12 0 12 12 v 46 q 0 12 -12 12 h -436 q -12 0 -12 -12 v -46 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={770} y={442} size={18} fill={INK} weight={700}>
          {t("area = 5.5 sq units  ·  n = k", "area = 5.5 sq units  ·  n = k")}
        </T>
      </Fade>
    </Scene>
  );
}
