/**
 * Ch06 · Section 67 — "Worked example: minimum friction to roll [JEE Advanced]"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,15.19,16.19,17.19,18.19,19.19,20.19,21.19] — b1..b6 fast in EN;
 * hi [0,15.79,24.92,33.45,51.63,59.73,70.23,80.47] — b7 fast in HI →
 * b1..b7 kept ≤0.9 s; b0 has room in both):
 *  0 title + subline
 *  1 figure: sphere on incline, friction arrow up the slope
 *  2 two equations: force along slope + torque about centre
 *  3 f = Mgsinθ/(1+MR²/I)
 *  4 sphere: f = (2/7)Mgsinθ
 *  5 no slip: f ≤ μMgcosθ
 *  6 green box: μ_min = (2/7)tanθ
 *  7 steeper slope → more friction needed, beyond it it slips
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | base (110,260)→(380,260) · hyp (110,260)→(280,150) ·
 *       sphere c(150,235) r22 dotted · friction arrow (140,252)→(115,222) "f" st(102,218)
 *  b2 | script13 st x springs 80 bl springs 300
 *  b3 | sans14 st x springs 80 bl springs 330
 *  b4 | sans15 st x springs 80 bl springs 360
 *  b5 | sans14 st x springs 80 bl springs 390
 *  b6 | green box x springs 560..960 y springs 415..460 cx760 bl springs 445
 *  b7 | script13 cx540 bl springs 495
 */

import React from "react";
import { TSpan } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, INK, MUTED, AMBER_DARK, GREEN, GREEN_DARK, CREAM,
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

export default function Ch06Sec67({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the capstone: friction itself */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={19} fill={INK} script>
          {t(
            "minimum friction to roll [JEE Advanced]",
            "roll karne ke liye minimum friction [JEE Advanced]"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 5)}>
        <T x={540} y={88} size={12} fill={MUTED} script>
          {t(
            "solid sphere on an incline — find f, then μ_min",
            "incline par solid sphere — f nikaalo, phir μ_min"
          )}
        </T>
      </Fade>

      {/* beat 1 — friction acting up the slope */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d="M 110 260 H 380" stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 0.25)} d="M 110 260 L 280 150" stroke={INK} sw={2.2} dur={0.5} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.4)}
        d="M 128 235 a 22 22 0 1 0 44 0 a 22 22 0 1 0 -44 0"
        stroke={INK}
        sw={2.2}
        dur={0.4}
      />
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d={DOTS} stroke={INK} fill={INK} sw={1.4} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 0.65)} d={arrowD(140, 252, 115, 222)} stroke={AMBER_DARK} sw={2.4} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={102} y={218} size={12} fill={AMBER_DARK} anchor="end" weight={700}>
          f
        </T>
      </Fade>

      {/* beat 2 — two equations */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={80} y={300} size={13} fill={INK} script anchor="start">
          {t(
            "two equations: force along the slope + torque about the centre",
            "do equations: slope ke saath force + centre ke baare mein torque"
          )}
        </T>
      </Fade>

      {/* beat 3 — the friction formula */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={80} y={330} size={14} fill={INK} anchor="start" weight={700}>
          f = Mgsinθ/(1+MR²/I)
        </T>
      </Fade>

      {/* beat 4 — the sphere's friction */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={80} y={360} size={15} fill={INK} anchor="start" weight={700}>
          {t("sphere: ", "sphere: ")}f = (2/7)Mgsinθ
        </T>
      </Fade>

      {/* beat 5 — the no-slip condition */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={80} y={390} size={14} fill={INK} anchor="start" weight={700}>
          {t("no slip: ", "no slip: ")}f ≤ μMgcosθ
        </T>
      </Fade>

      {/* beat 6 — the minimum coefficient */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.1)}
        d="M 560 415 h 400 q 12 0 12 12 v 21 q 0 12 -12 12 h -400 q -12 0 -12 -12 v -21 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={760} y={445} size={17} fill={INK} weight={700}>
          μ
          <TSpan dy={5} fontSize={11}>
            min
          </TSpan>
          <TSpan dy={-5}> = (2/7)tanθ</TSpan>
        </T>
      </Fade>

      {/* beat 7 — the intuitive physics */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={495} size={13} fill={GREEN_DARK} script>
          {t(
            "steeper slope → more friction needed — beyond it, it slips instead",
            "steeper slope → zyada friction chahiye — usse aage, slip karta hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
