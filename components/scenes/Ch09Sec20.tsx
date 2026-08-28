/**
 * Ch09 · Section 20 — "Cube floating at an oil-water interface" (worked example)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 1.0, 11.84, 15.59, 26.6, 34.96, 46.06, 54.93]):
 *  0 title (always-on)
 *  1 text: cube ρ=900 floats between oil (800) and water (1000)
 *  2 container drawn: oil above, water below, interface line, labels
 *  3 cube appears straddling the interface + text: each liquid buoys its part
 *  4 formula ρ_b = ρ_w f + ρ_o (1−f)
 *  5 formula 900 = 1000f + 800(1−f) = 800 + 200f
 *  6 formula (green) f = 0.5
 *  7 red-margin note: cube density is the average — a 50-50 split
 *
 * Layout plan:
 *  b1 | text (14, script)      | T mid  | x540  bl 114
 *  b2 | container walls         | Draw   | x300..600  y150..450
 *  b2 | interface line          | line   | x300..600  y300
 *  b2 | "oil (ρ=800)" (12)      | T st   | x610  bl 224
 *  b2 | "water (ρ=1000)" (12)   | T st   | x610  bl 380
 *  b3 | cube (cream)            | rect   | x400..500  y250..350
 *  b3 | text (13, script)       | T mid  | x450  bl 462
 *  b4 | formula (15, w700)      | T st   | x610  bl 420
 *  b5 | formula (15, w700)      | T st   | x610  bl 452
 *  b6 | formula (18, w800, grn) | T st   | x610  bl 488
 *  b7 | margin bar (red)        | Draw   | x590  y510..534
 *  b7 | note (script 13, red)   | T st   | x606..~946 bl 528
 */

import React from "react";
import { Line, Rect, TSpan } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec20({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={24} fill={RED} script>
          {t("JEE Main: cube at an interface", "JEE Main: cube at an interface")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={14} fill={MUTED} script anchor="middle">
          {t("cube ρ=900 floats between oil (800) and water (1000)", "cube ρ=900 oil (800) aur water (1000) ke beech float karta")}
        </T>
      </Fade>

      {/* beat 2 — the two-liquid container */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d="M 300 150 V 450 H 600 V 150" stroke={INK} sw={2.2} dur={0.9} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <Line x1={300} y1={300} x2={600} y2={300} stroke={INK} strokeWidth={1.8} strokeDasharray="6 4" />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={610} y={224} size={12} fill={MUTED} anchor="start">
          {t("oil (ρ=800)", "oil (ρ=800)")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={610} y={380} size={12} fill={MUTED} anchor="start">
          {t("water (ρ=1000)", "water (ρ=1000)")}
        </T>
      </Fade>

      {/* beat 3 — the cube, split evenly */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Rect x={400} y={250} width={100} height={100} fill={CREAM} stroke={INK} strokeWidth={2} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={450} y={462} size={13} fill={MUTED} script anchor="middle">
          {t("each liquid buoys its own part", "har liquid apna part buoy karta")}
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={610} y={420} size={15} fill={INK} weight={700} anchor="start">
          ρ<TSpan fontSize={10} dy={4}>b</TSpan>
          <TSpan dy={-4}> = ρ</TSpan>
          <TSpan fontSize={10} dy={4}>w</TSpan>
          <TSpan dy={-4}> f + ρ</TSpan>
          <TSpan fontSize={10} dy={4}>o</TSpan>
          <TSpan dy={-4}> (1 − f)</TSpan>
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={610} y={452} size={15} fill={INK} weight={700} anchor="start">
          900 = 1000f + 800(1−f) = 800 + 200f
        </T>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={610} y={488} size={18} fill={GREEN} weight={800} anchor="start">
          f = 0.5
        </T>
      </Fade>

      {/* beat 7 */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 590 510 L 590 534" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={606} y={528} size={13} fill={RED} script anchor="start">
          {t("the cube density is the average — a 50-50 split", "cube density hi average hai — 50-50 split")}
        </T>
      </Fade>
    </Scene>
  );
}
