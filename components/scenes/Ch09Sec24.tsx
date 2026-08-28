/**
 * Ch09 · Section 24 — "Horizontal acceleration tilts the surface"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 5.38, 14.85, 25.26, 29.95, 30.95, 31.95, 32.95]):
 *  0 title (always-on)
 *  1 text: the water lags and piles at the rear
 *  2 tank + tilted surface + reference line + accel arrow + Δh bracket + θ
 *  3 formula tanθ = a/g
 *  4 text: steeper acceleration ⇒ steeper tilt
 *  5 red-margin note: at a=g the surface tilts a full 45°
 *  6 formula Δh = L tanθ = aL/g
 *  7 red-margin note: the liquid rises at the rear, opposite the motion
 *
 * Layout plan:
 *  b2 | accel arrow "a"          | Draw+T | (450,210)→(550,210) · "a" x500 bl 195
 *  b2 | tank walls                | Draw   | x300..700  y240..380
 *  b2 | tilted surface (amber-dk) | line   | (300,265)→(700,315)
 *  b2 | reference (dashed)        | line   | x300..700  y290
 *  b2 | Δh bracket + label        | Draw+T | x290  y265..290 · label x275 bl 280
 *  b2 | "θ" (12, muted)           | T mid  | x500  bl 280
 *  b1 | text (14, script)         | T mid  | x540  bl 114
 *  b3 | formula (18, w700)        | T mid  | x540  bl 410
 *  b4 | text (14, script)         | T mid  | x540  bl 448
 *  b5 | margin bar (red)          | Draw   | x460  y468..492
 *  b5 | note (script 14, red)     | T st   | x476.. bl 488
 *  b6 | formula (17, w700)        | T mid  | x540  bl 525
 *  b7 | margin bar (red)          | Draw   | x460  y544..568
 *  b7 | note (script 14, red)     | T st   | x476.. bl 564
 */

import React from "react";
import { Line } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, INK, MUTED, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec24({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={22} fill={RED} script>
          {t("horizontal acceleration tilts the surface", "horizontal acceleration surface ko tilt karta")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={14} fill={MUTED} script anchor="middle">
          {t("the water lags and piles at the rear", "water lag jaata aur rear mein pile hota")}
        </T>
      </Fade>

      {/* beat 2 — the tilted tank */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <Draw on={beat >= 2} d={arrowD(450, 210, 550, 210)} stroke={INK} sw={2.6} dur={0.5} />
        <T x={500} y={195} size={14} fill={INK} anchor="middle">
          a
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.9)} d="M 300 240 V 380 H 700 V 240" stroke={INK} sw={2.2} dur={0.9} />
      <Fade on={beat >= 2} delay={dl(2, 1.9)}>
        <Line x1={300} y1={290} x2={700} y2={290} stroke={MUTED} strokeWidth={1.4} strokeDasharray="5 4" />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.4)}>
        <Line x1={300} y1={265} x2={700} y2={315} stroke={AMBER_DARK} strokeWidth={2.2} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <Draw on={beat >= 2} d="M 285 265 H 290 M 285 290 H 290 M 288 265 V 290" stroke={INK} sw={1.3} dur={0.4} />
        <T x={275} y={280} size={12} fill={INK} anchor="end">
          Δh
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.5)}>
        <T x={500} y={280} size={12} fill={MUTED} anchor="middle">
          θ
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={410} size={18} fill={INK} weight={700} anchor="middle">
          tan θ = a / g
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={448} size={14} fill={MUTED} script anchor="middle">
          {t("steeper acceleration ⇒ steeper tilt", "steeper acceleration ⇒ steeper tilt")}
        </T>
      </Fade>

      {/* beat 5 */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 460 468 L 460 492" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={476} y={488} size={14} fill={RED} script anchor="start">
          {t("at a = g the surface tilts a full 45°", "a = g pe surface pura 45° tilt karta")}
        </T>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={525} size={17} fill={INK} weight={700} anchor="middle">
          Δh = L tan θ = aL / g
        </T>
      </Fade>

      {/* beat 7 */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 460 544 L 460 568" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={476} y={564} size={14} fill={RED} script anchor="start">
          {t("the liquid rises at the rear, opposite the motion", "liquid rear mein rises hota, motion ke opposite")}
        </T>
      </Fade>
    </Scene>
  );
}
