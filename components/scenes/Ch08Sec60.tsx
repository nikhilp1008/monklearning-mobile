/**
 * Ch08 · Section 60 — "JEE Main: cantilever depression"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Note: en beats 1..4 are ~1s each; hi beats 5..6 are ~1s apart —
 * short delays there.
 *
 * Beats (en [0, 1.0, 2.0, 3.0, 4.0, 26.7, 34.89]):
 *  0 title only
 *  1 diagram: cantilever wall+beam+load, L span, b×d dims, δ
 *  2 given: L=1.0m, b=4.0cm, d=6.0cm, load=200N, Y=2.0e11 Pa
 *  3 formula: Ig=bd³/12=(0.040)(0.060)³/12=7.2e-7 m⁴
 *  4 formula: δ=WL³/3YIg=200/3(2.0e11)(7.2e-7)=200/4.32e5
 *  5 boxed hero: δ≈4.6e-4 m = 0.46 mm
 *  6 red margin: swap b&d → depression rises by (6/4)²=2.25 — why beams stand tall
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 19, red, ALWAYS ON) cx540 bl64
 *  b1 | wall+hatch           | Fade/Draw | x150..172 y100..190
 *  b1 | beam+dims            | Fade/T| x172..620 y130..185 · x396 bl145
 *  b1 | load arrow+label     | Draw/T| x620 y185..215 · x635 bl205
 *  b1 | L span+label         | Draw/T| x172..620 y235 · x396 bl250
 *  b1 | caption (11)         | T mid| x540 bl270
 *  b2 | tick/given (14)      | T st | x80..500 bl300
 *  b3 | tick/formula (14)    | T st | x80..367 bl330
 *  b4 | tick/formula (14)    | T st | x80..437 bl360
 *  b5 | hero box             | Draw | x60..380 y385..450
 *  b5 | result (18)          | T st | x80..287 bl422
 *  b6 | margin bar           | Draw | x60 y470..498
 *  b6 | note (14)            | T st | x76..~592 bl488
 */

import React from "react";
import { Path, Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  INK,
  AMBER,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch08Sec60({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={19} fill={RED} script>
          {t("JEE Main: depression of a cantilever", "JEE Main: cantilever ka depression")}
        </T>
      </Fade>

      {/* beat 1 — the cantilever */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <Rect x={150} y={100} width={22} height={90} fill={INK} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.4)} d="M150 108 l-8 -8 M150 130 l-8 -8 M150 152 l-8 -8 M150 174 l-8 -8" stroke={INK} sw={1.2} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <Path d="M172 130 Q400 130 620 165 L620 185 Q400 150 172 150 Z" fill={AMBER} fillOpacity={0.18} stroke={INK} strokeWidth={1.4} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <T x={396} y={145} size={10} fill={INK}>
          {t("b=4.0cm, d=6.0cm", "b=4.0cm, d=6.0cm")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.5)} d={arrowD(620, 185, 620, 218)} stroke={RED} sw={2.2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 1.9)}>
        <T x={635} y={208} size={11} fill={RED} anchor="start">
          200 N
        </T>
        <T x={638} y={175} size={12} fill={GREEN}>
          δ
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.3)} d={arrowD(172, 235, 620, 235) + " M620 235" + arrowD(620, 235, 172, 235).slice(1)} stroke={INK} sw={1.4} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 2.7)}>
        <T x={396} y={252} size={10} fill={INK}>
          {t("L = 1.0 m", "L = 1.0 m")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.0)}>
        <T x={540} y={272} size={11} fill={INK}>
          {t("depth cubed dominates: turn the beam on its side and it sags far more", "depth cubed hi hawi: beam ko side par ghumao, zyada sagta")}
        </T>
      </Fade>

      {/* beat 2 — the given data */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M65 296 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={80} y={300} size={14} fill={INK} weight={600} anchor="start">
          GIVEN: L=1.0m, b=4.0cm, d=6.0cm, load=200N, Y=2.0×10¹¹ Pa
        </T>
      </Fade>

      {/* beat 3 — the geometrical moment */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M65 326 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={80} y={330} size={14} fill={INK} weight={600} anchor="start">
          Ig=bd³/12=(0.040)(0.060)³/12=7.2×10⁻⁷ m⁴
        </T>
      </Fade>

      {/* beat 4 — the depression setup */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d="M65 356 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={80} y={360} size={14} fill={INK} weight={600} anchor="start">
          δ=WL³/3YIg=200/3(2.0×10¹¹)(7.2×10⁻⁷)=200/4.32×10⁵
        </T>
      </Fade>

      {/* beat 5 — the boxed result */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.2)}
        d="M72 385 h308 q12 0 12 12 v41 q0 12 -12 12 h-308 q-12 0 -12 -12 v-41 q0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={80} y={422} size={18} fill={INK} weight={800} anchor="start">
          δ≈4.6×10⁻⁴ m = 0.46 mm
        </T>
      </Fade>

      {/* beat 6 — swap breadth and depth */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M60 470 L60 498" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={488} size={14} fill={RED} script anchor="start">
          {t("swap b and d → depression rises (6/4)²=2.25× — why beams stand tall", "b aur d swap → depression (6/4)²=2.25× badhta — beams tall kyun")}
        </T>
      </Fade>
    </Scene>
  );
}
