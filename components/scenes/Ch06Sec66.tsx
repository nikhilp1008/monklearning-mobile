/**
 * Ch06 · Section 66 — "Worked example: solid sphere on a thirty-degree incline [JEE Main]"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,13.82,14.82,15.82,16.82,17.82,18.82,36.23] — b1..b5 fast in EN;
 * hi [0,15.53,24.58,33.54,43.69,56.58,65.54,66.54] — b6,b7 fast in HI →
 * b1..b7 kept ≤0.9 s; b0 has room in both):
 *  0 title + subline
 *  1 figure: sphere on a 30° incline
 *  2 given: I/MR²=2/5, θ=30°, g=10
 *  3 a = gsinθ/(1+2/5) = 5/7 gsinθ
 *  4 green box: a = 5/7(10)(0.5) = 25/7 ≈ 3.57 m/s²
 *  5 compare: frictionless block slides at gsinθ = 5 m/s²
 *  6 why: part of the drive spins the sphere up
 *  7 answer restated: ≈3.57 m/s², less than sliding
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | base (110,260)→(380,260) · hyp (110,260)→(280,150) · θ arc "30°"(140,245) ·
 *       sphere c(150,235) r22 dotted
 *  b2 | sans14 st x springs 80 bl springs 300
 *  b3 | sans15 st x springs 80 bl springs 330
 *  b4 | green box x springs 560..960 y springs 355..405 cx760 bl springs 385
 *  b5 | script13 st x springs 80 bl springs 435
 *  b6 | script12 st x springs 80 bl springs 465
 *  b7 | script13 cx540 bl springs 500
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, GREEN, GREEN_DARK, CREAM,
  Scene,
} from '@/components/scenes/kit';

const DOTS = [
  [142, 227],
  [158, 224],
  [148, 240],
  [162, 238],
  [140, 244],
]
  .map(([x, y]) => `M ${x - 2.5} ${y} a 2.5 2.5 0 1 0 5 0 a 2.5 2.5 0 1 0 -5 0`)
  .join(" ");

export default function Ch06Sec66({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the numerical, straight from the formula */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={19} fill={INK} script>
          {t(
            "solid sphere on a 30° incline [JEE Main]",
            "30° incline par solid sphere [JEE Main]"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4)}>
        <T x={540} y={88} size={12} fill={MUTED} script>
          {t(
            "rolls without slipping — find a, g = 10 m/s²",
            "bina slip roll karta — a nikaalo, g = 10 m/s²"
          )}
        </T>
      </Fade>

      {/* beat 1 — the geometry */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d="M 110 260 H 380" stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 0.25)} d="M 110 260 L 280 150" stroke={INK} sw={2.2} dur={0.5} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.4)}
        d="M 155 260 A 45 45 0 0 0 141 227"
        stroke={AMBER_DARK}
        sw={1.6}
        dur={0.3}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={140} y={245} size={12} fill={AMBER_DARK} weight={700}>
          30°
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.6)}
        d="M 128 235 a 22 22 0 1 0 44 0 a 22 22 0 1 0 -44 0"
        stroke={INK}
        sw={2.2}
        dur={0.4}
      />
      <Draw on={beat >= 1} delay={dl(1, 0.75)} d={DOTS} stroke={INK} fill={INK} sw={1.4} dur={0.3} />

      {/* beat 2 — the givens */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={80} y={300} size={14} fill={INK} anchor="start" weight={700}>
          {t(
            "given: I/MR² = 2/5, θ = 30°, g = 10 m/s²",
            "diya: I/MR² = 2/5, θ = 30°, g = 10 m/s²"
          )}
        </T>
      </Fade>

      {/* beat 3 — substitute */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={80} y={330} size={15} fill={INK} anchor="start" weight={700}>
          a = gsinθ/(1+2/5) = (5/7)gsinθ
        </T>
      </Fade>

      {/* beat 4 — the number */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.1)}
        d="M 560 355 h 400 q 12 0 12 12 v 26 q 0 12 -12 12 h -400 q -12 0 -12 -12 v -26 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={760} y={385} size={16} fill={INK} weight={700}>
          a = (5/7)(10)(0.5) ≈ 3.57 m/s²
        </T>
      </Fade>

      {/* beat 5 — the frictionless comparison */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={80} y={435} size={13} fill={INK} script anchor="start">
          {t(
            "compare: a frictionless block slides at gsinθ = 5 m/s²",
            "compare: frictionless block gsinθ = 5 m/s² par slide karta"
          )}
        </T>
      </Fade>

      {/* beat 6 — why it's slower */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={80} y={465} size={12} fill={GREEN_DARK} script anchor="start">
          {t(
            "part of the drive is diverted into spinning it up",
            "drive ka ek hissa ise spin up karne mein mudta hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — the answer */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={500} size={13} fill={GREEN_DARK} script>
          {t(
            "≈ 3.57 m/s² down the slope — comfortably less than sliding",
            "≈ 3.57 m/s² slope se neeche — sliding se aaraam se kam"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
