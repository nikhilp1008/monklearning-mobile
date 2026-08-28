/**
 * Ch08 · Section 61 — "JEE Advanced: torque and the r-to-the-fourth law"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Note: en beats 1..3 are ~1s each; hi beats 4..6 are ~1s apart —
 * short delays there.
 *
 * Beats (en [0, 1.0, 2.0, 3.0, 19.21, 37.3, 47.63]):
 *  0 title only
 *  1 diagram: small shaft (radius r) vs big shaft (2r) — C → 16C
 *  2 given: r=2.0cm, L=1.0m, η=4.0e10 Pa, θ=0.50 rad
 *  3 formula: C=πηr⁴θ/2L, r⁴=(0.020)⁴=1.6e-7 m⁴
 *  4 boxed hero: C=π(4.0e10)(1.6e-7)(0.50)/2≈5.0e3 N·m
 *  5 text: part (b): double r → C∝r⁴ → torque ×2⁴=16
 *  6 red margin: shaft only 2× thick is 16× harder to twist — why axles are fat
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 19, red, ALWAYS ON) cx540 bl64
 *  b1 | small shaft+labels    | Draw/Fade/T| x100..160 y75..155
 *  b1 | arrow                 | T    | x230 bl123
 *  b1 | big shaft+labels      | Draw/Fade/T| x300..380 y65..175
 *  b1 | caption (11)          | T mid| x540 bl230
 *  b2 | tick/given (14)       | T st | x80..~500 bl260
 *  b3 | tick/formula (14)     | T st | x80..332 bl290
 *  b4 | hero box              | Draw | x60..460 y315..380
 *  b4 | result (16)           | T st | x80..432 bl352
 *  b5 | tick/text (12)        | T st | x80..350 bl405
 *  b6 | margin bar            | Draw | x60 y428..456
 *  b6 | note (13)             | T st | x76..~526 bl446
 */

import React from "react";
import { Ellipse } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch08Sec61({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={19} fill={RED} script>
          {t("JEE Advanced: torque to twist a shaft", "JEE Advanced: shaft twist karne ka torque")}
        </T>
      </Fade>

      {/* beat 1 — small shaft versus a shaft twice as fat */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d="M100 95 H160 M100 135 H160" stroke={INK} sw={1.6} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <Ellipse cx={100} cy={115} rx={8} ry={20} fill="none" stroke={INK} strokeWidth={1.4} strokeDasharray="3 2" />
        <Ellipse cx={160} cy={115} rx={8} ry={20} fill={AMBER_DARK} fillOpacity={0.5} stroke={INK} strokeWidth={1.4} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={130} y={85} size={11} fill={INK} weight={700}>
          C
        </T>
        <T x={130} y={150} size={10} fill={INK}>
          {t("radius r", "radius r")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.0)}>
        <T x={225} y={123} size={22} fill={AMBER}>
          →
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.3)} d="M300 75 H380 M300 155 H380" stroke={INK} sw={1.6} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <Ellipse cx={300} cy={115} rx={13} ry={32} fill="none" stroke={INK} strokeWidth={1.4} strokeDasharray="3 2" />
        <Ellipse cx={380} cy={115} rx={13} ry={32} fill={GREEN} fillOpacity={0.5} stroke={INK} strokeWidth={1.4} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.9)}>
        <T x={340} y={62} size={11} fill={GREEN} weight={700}>
          16 C
        </T>
        <T x={340} y={172} size={10} fill={INK}>
          {t("radius 2r", "radius 2r")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={540} y={230} size={11} fill={INK}>
          {t("double the radius, sixteen times the torque", "radius double, torque solah guna")}
        </T>
      </Fade>

      {/* beat 2 — the given data */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M65 256 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={80} y={260} size={14} fill={INK} weight={600} anchor="start">
          GIVEN: r=2.0cm, L=1.0m, η=4.0×10¹⁰ Pa, θ=0.50 rad
        </T>
      </Fade>

      {/* beat 3 — the formula and r⁴ */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M65 286 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={80} y={290} size={14} fill={INK} weight={600} anchor="start">
          C=πηr⁴θ/2L, r⁴=(0.020)⁴=1.6×10⁻⁷ m⁴
        </T>
      </Fade>

      {/* beat 4 — the boxed torque */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.2)}
        d="M72 315 h388 q12 0 12 12 v41 q0 12 -12 12 h-388 q-12 0 -12 -12 v-41 q0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <T x={80} y={352} size={16} fill={INK} weight={800} anchor="start">
          C=π(4.0×10¹⁰)(1.6×10⁻⁷)(0.50)/2≈5.0×10³ N·m
        </T>
      </Fade>

      {/* beat 5 — part b: double the radius */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M65 401 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={80} y={405} size={12} fill={INK} weight={600} anchor="start">
          {t("part (b): double r → C∝r⁴ → torque ×2⁴=16", "part (b): r double → C∝r⁴ → torque ×2⁴=16")}
        </T>
      </Fade>

      {/* beat 6 — why axles are fat */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M60 428 L60 456" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={446} size={13} fill={RED} script anchor="start">
          {t("only 2× thicker is 16× harder to twist — why axles are as fat as they can be", "sirf 2× mota, twist karna 16× mushkil — isliye axles jitne fat ho sakte")}
        </T>
      </Fade>
    </Scene>
  );
}
