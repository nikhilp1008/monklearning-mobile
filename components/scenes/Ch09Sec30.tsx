/**
 * Ch09 · Section 30 — "Diesel tanker: the surface tilt angle" (worked example)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 7.51, 15.96, 21.59, 27.9, 28.9, 29.9]):
 *  0 title (always-on)
 *  1 text: tanker accelerates at 3.0 m/s²; find the surface tilt angle
 *  2 tanker body + tilted surface + accel arrow + rear/front labels
 *  3 formula tanθ = a/g = 3.0/10 = 0.30
 *  4 formula (green) θ = tan⁻¹(0.30) ≈ 16.7°
 *  5 red-margin note: the surface rises toward the rear of the tanker
 *  6 text: the diesel lags behind the acceleration
 *
 * Layout plan:
 *  b2 | accel arrow "a"          | Draw+T | (450,195)→(550,195) · bl 180
 *  b2 | tanker walls               | Draw   | x280..720  y220..360
 *  b2 | tilted surface (amber-dk)  | line   | (280,245)→(720,300)
 *  b2 | "rear" (12) end             | T end  | x260  bl 239
 *  b2 | "front" (12) start          | T st   | x740  bl 299
 *  b1 | text (14, script)           | T mid  | x540  bl 114
 *  b3 | formula (18, w700)          | T mid  | x540  bl 400
 *  b4 | formula (20, w800, grn)     | T mid  | x540  bl 436
 *  b5 | margin bar (red)            | Draw   | x460  y460..484
 *  b5 | note (script 14, red)       | T st   | x476.. bl 480
 *  b6 | text (14, script)           | T mid  | x540  bl 515
 */

import React from "react";
import { Line } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec30({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={24} fill={RED} script>
          {t("CBSE: diesel tanker tilt", "CBSE: diesel tanker tilt")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={14} fill={MUTED} script anchor="middle">
          {t("tanker accelerates at 3.0 m/s² — find the tilt angle", "tanker 3.0 m/s² se accelerate karta — tilt angle nikalo")}
        </T>
      </Fade>

      {/* beat 2 — the tanker and its tilted surface */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <Draw on={beat >= 2} d={arrowD(450, 195, 550, 195)} stroke={INK} sw={2.6} dur={0.5} />
        <T x={500} y={180} size={14} fill={INK} anchor="middle">
          a
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.9)} d="M 280 220 V 360 H 720 V 220" stroke={INK} sw={2.2} dur={0.9} />
      <Fade on={beat >= 2} delay={dl(2, 1.9)}>
        <Line x1={280} y1={245} x2={720} y2={300} stroke={AMBER_DARK} strokeWidth={2.2} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.5)}>
        <T x={260} y={239} size={12} fill={MUTED} anchor="end">
          {t("rear", "rear")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.9)}>
        <T x={740} y={299} size={12} fill={MUTED} anchor="start">
          {t("front", "front")}
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={400} size={18} fill={INK} weight={700} anchor="middle">
          tan θ = a/g = 3.0/10 = 0.30
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={436} size={20} fill={GREEN} weight={800} anchor="middle">
          θ = tan⁻¹(0.30) ≈ 16.7°
        </T>
      </Fade>

      {/* beat 5 */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 460 460 L 460 484" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={476} y={480} size={14} fill={RED} script anchor="start">
          {t("the surface rises toward the rear of the tanker", "surface tanker ke rear ki taraf rises hota")}
        </T>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={515} size={14} fill={MUTED} script anchor="middle">
          {t("the diesel lags behind the acceleration", "diesel acceleration ke peeche lag jaata")}
        </T>
      </Fade>
    </Scene>
  );
}
