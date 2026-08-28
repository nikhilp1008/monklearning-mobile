/**
 * Ch08 · Section 22 — "CBSE: volume change of a copper cube"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Note: hi beats 1..6 are ~1s each — short delays throughout for Hindi.
 *
 * Cube diagram (left) + GIVEN/formula cascade (right).
 *
 * Beats (en [0, 5.29, 14.25, 34.39, 42.58, 60.93, 71.42]):
 *  0 title only
 *  1 diagram: cube squeezed by ΔP on all 4 sides
 *  2 GIVEN: edge=10cm→V=1.0e-3 m³, ΔP=7.0e7 Pa, B=1.4e11 Pa
 *  3 formula: ΔV = −ΔP·V/B
 *  4 substitution: ΔV = −(7.0e7)(1.0e-3)/1.4e11 = −7.0e4/1.4e11
 *  5 boxed hero: ΔV = −5.0×10⁻⁷ m³ = −0.50 cm³
 *  6 red margin: minus = decrease; copper nearly incompressible
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 22, red, ALWAYS ON) cx540 bl64
 *  b1 | square              | Draw | x140..230 y180..270
 *  b1 | 4 arrows            | Draw | around square
 *  b1 | "edge=10cm" (12)    | T mid| x185 bl320 (y311..324)
 *  b1 | "ΔP=7.0e7 Pa" (12)  | T mid| x185 bl340 (y331..344)
 *  b2 | tick                | Draw | x405..413 y151
 *  b2 | GIVEN line1 (15)    | T st | x420..668 bl155 (y138..158)
 *  b2 | GIVEN line2 (15)    | T st | x420..638 bl180 (y163..183)
 *  b3 | tick                | Draw | x405..413 y221
 *  b3 | formula (18)        | T st | x420..555 bl225 (y211..231)
 *  b4 | tick                | Draw | x405..413 y256
 *  b4 | sub1 (14)           | T st | x420..679 bl260 (y249..264)
 *  b4 | sub2 (14)           | T st | x420..567 bl282 (y271..286)
 *  b5 | hero box            | Draw | x420..900 y310..380
 *  b5 | result (20)         | T st | x440..730 bl350 (y334..356)
 *  b6 | margin bar          | Draw | x60 y410..438
 *  b6 | note (15)           | T st | x76..489 bl430 (y410..437)
 */

import React from "react";
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
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch08Sec22({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("CBSE: volume change of a copper cube", "CBSE: copper cube ka volume change")}
        </T>
      </Fade>

      {/* beat 1 — a cube squeezed on every side */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M140 180 h90 v90 h-90 z" stroke={INK} sw={2.4} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 0.8)} d={arrowD(185, 140, 185, 178)} stroke={RED} sw={2.2} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 1.1)} d={arrowD(185, 295, 185, 272)} stroke={RED} sw={2.2} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 1.4)} d={arrowD(95, 225, 138, 225)} stroke={RED} sw={2.2} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 1.7)} d={arrowD(275, 225, 232, 225)} stroke={RED} sw={2.2} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 2.1)}>
        <T x={185} y={320} size={12} fill={MUTED}>
          {t("edge = 10 cm", "edge = 10 cm")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.3)}>
        <T x={185} y={340} size={12} fill={RED}>
          ΔP = 7.0×10⁷ Pa
        </T>
      </Fade>

      {/* beat 2 — the given data */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M405 151 h8" stroke={MUTED} sw={1.4} dur={0.2} />
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={420} y={155} size={15} fill={INK} weight={600} anchor="start">
          {t("GIVEN: edge=10cm → V=1.0×10⁻³ m³", "GIVEN: edge=10cm → V=1.0×10⁻³ m³")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={420} y={180} size={15} fill={INK} weight={600} anchor="start">
          ΔP=7.0×10⁷ Pa, B=1.4×10¹¹ Pa
        </T>
      </Fade>

      {/* beat 3 — the working formula */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M405 221 h8" stroke={MUTED} sw={1.4} dur={0.2} />
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={420} y={225} size={18} fill={INK} weight={700} anchor="start">
          ΔV = −ΔP·V / B
        </T>
      </Fade>

      {/* beat 4 — substitute the numbers */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d="M405 256 h8" stroke={MUTED} sw={1.4} dur={0.2} />
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={420} y={260} size={14} fill={INK} weight={600} anchor="start">
          ΔV = −(7.0×10⁷)(1.0×10⁻³) / 1.4×10¹¹
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <T x={420} y={282} size={14} fill={INK} weight={600} anchor="start">
          = −7.0×10⁴ / 1.4×10¹¹
        </T>
      </Fade>

      {/* beat 5 — the hero result */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.2)}
        d="M432 310 h456 q12 0 12 12 v46 q0 12 -12 12 h-456 q-12 0 -12 -12 v-46 q0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={440} y={350} size={20} fill={INK} weight={800} anchor="start">
          ΔV = −5.0×10⁻⁷ m³ = −0.50 cm³
        </T>
      </Fade>

      {/* beat 6 — the sign and the scale */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M60 410 L60 438" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={430} size={15} fill={RED} script anchor="start">
          {t("minus = decrease; copper is nearly incompressible", "minus = decrease; copper lagbhag incompressible")}
        </T>
      </Fade>
    </Scene>
  );
}
