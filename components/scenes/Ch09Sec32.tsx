/**
 * Ch09 · Section 32 — "Accelerating tank: height gap and spill check" (worked example)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 6.66, 18.35, 23.13, 29.87, 37.97, 47.1, 53.59]):
 *  0 title (always-on)
 *  1 text: tank 2.0 m long, water 1.0 m deep, walls 1.2 m; a=2.0
 *  2 tank + accel arrow + still-level dashed line + tilted surface (pivots at centre)
 *  3 formula tanθ = 2.0/10 = 0.20
 *  4 formula Δh = Ltanθ = 2.0×0.20 = 0.40 m
 *  5 text: water pivots about the centre — add only half
 *  6 formula (green) 1.0 + 0.20 = 1.20 m
 *  7 red-margin note: exactly reaches the wall — on the verge, no spill
 *
 * Layout plan:
 *  b2 | accel arrow "a=2.0"      | Draw+T | (450,175)→(550,175) · bl 160
 *  b2 | tank walls                | Draw   | x300..700  y200..420
 *  b2 | still-level (dashed)      | line   | x300..700  y237
 *  b2 | tilted surface (amber-dk) | line   | (300,200)→(700,273)
 *  b1 | text (14, script)         | T mid  | x540  bl 114
 *  b3 | formula (17, w700)        | T mid  | x540  bl 440
 *  b4 | formula (16, w700)        | T mid  | x540  bl 472
 *  b5 | text (13, script)         | T mid  | x540  bl 500
 *  b6 | formula (18, w800, grn)   | T mid  | x540  bl 532
 *  b7 | margin bar (red)          | Draw   | x460  y552..576
 *  b7 | note (script 14, red)     | T st   | x476.. bl 572
 */

import React from "react";
import { Line } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec32({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={22} fill={RED} script>
          {t("JEE Main: height gap and spill", "JEE Main: height gap and spill")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={14} fill={MUTED} script anchor="middle">
          {t("tank 2.0 m long, water 1.0 m deep, walls 1.2 m; a=2.0", "tank 2.0 m long, water 1.0 m deep, walls 1.2 m; a=2.0")}
        </T>
      </Fade>

      {/* beat 2 — the tilted, pivoting surface */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <Draw on={beat >= 2} d={arrowD(450, 175, 550, 175)} stroke={INK} sw={2.6} dur={0.5} />
        <T x={500} y={160} size={13} fill={INK} anchor="middle">
          a = 2.0
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.9)} d="M 300 200 V 420 H 700 V 200" stroke={INK} sw={2.2} dur={0.9} />
      <Fade on={beat >= 2} delay={dl(2, 1.9)}>
        <Line x1={300} y1={237} x2={700} y2={237} stroke={MUTED} strokeWidth={1.4} strokeDasharray="5 4" />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.4)}>
        <Line x1={300} y1={200} x2={700} y2={273} stroke={AMBER_DARK} strokeWidth={2.4} />
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={440} size={17} fill={INK} weight={700} anchor="middle">
          tan θ = 2.0/10 = 0.20
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={472} size={16} fill={INK} weight={700} anchor="middle">
          Δh = L tan θ = 2.0×0.20 = 0.40 m
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={500} size={13} fill={MUTED} script anchor="middle">
          {t("water pivots about the centre — add only half", "water centre ke around pivot karta — sirf half jodo")}
        </T>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={532} size={18} fill={GREEN} weight={800} anchor="middle">
          1.0 + 0.20 = 1.20 m
        </T>
      </Fade>

      {/* beat 7 */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 460 552 L 460 576" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={476} y={572} size={14} fill={RED} script anchor="start">
          {t("exactly reaches the wall — on the verge, but no spill", "exactly wall tak pahuchta — verge pe, par spill nahi")}
        </T>
      </Fade>
    </Scene>
  );
}
