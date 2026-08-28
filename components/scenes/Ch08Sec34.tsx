/**
 * Ch08 · Section 34 — "CBSE: energy stored in a steel wire"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Note: en beats 2..6 are ~1s each — short delays throughout for English.
 *
 * Pure algebra cascade, single column, no diagram needed.
 *
 * Beats (en [0, 4.18, 24.58, 25.58, 26.58, 27.58, 28.58]):
 *  0 title only
 *  1 given: L=2.0m, A=1.0e-6 m², ΔL=1.0e-3 m, Y=2.0e11 Pa
 *  2 F = YAΔL/L = 100 N
 *  3 U = ½FΔL = 0.05 J
 *  4 Volume=AL=2.0e-6 m³ ⇒ u=U/Vol=2.5e4 J/m³
 *  5 boxed hero check: u=½σε=2.5e4 J/m³ ✓
 *  6 red margin: energy density independent of amount of wire
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 22, red, ALWAYS ON) cx540 bl64
 *  b1 | tick                | Draw | x65..73 y156
 *  b1 | given (16)          | T st | x80..504 bl160
 *  b2 | tick                | Draw | x65..73 y196
 *  b2 | formula (16)        | T st | x80..232 bl200
 *  b3 | tick                | Draw | x65..73 y236
 *  b3 | formula (16)        | T st | x80..224 bl240
 *  b4 | tick                | Draw | x65..73 y276
 *  b4 | formula (15)        | T st | x80..485 bl280
 *  b5 | hero box            | Draw | x60..700 y330..400
 *  b5 | check (18)          | T st | x80..530 bl370
 *  b6 | margin bar          | Draw | x60 y430..458
 *  b6 | note (15)           | T st | x76..~490 bl450
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  AMBER,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch08Sec34({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("CBSE: energy stored in a stretched steel wire", "CBSE: stretched steel wire mein stored energy")}
        </T>
      </Fade>

      {/* beat 1 — the given data */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d="M65 156 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={80} y={160} size={16} fill={INK} weight={600} anchor="start">
          GIVEN: L=2.0m, A=1.0×10⁻⁶ m², ΔL=1.0×10⁻³ m, Y=2.0×10¹¹ Pa
        </T>
      </Fade>

      {/* beat 2 — the force */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M65 196 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={80} y={200} size={16} fill={INK} weight={600} anchor="start">
          F = YAΔL/L = 100 N
        </T>
      </Fade>

      {/* beat 3 — the stored energy */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M65 236 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={80} y={240} size={16} fill={INK} weight={600} anchor="start">
          U = ½FΔL = 0.05 J
        </T>
      </Fade>

      {/* beat 4 — the energy density */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d="M65 276 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={80} y={280} size={15} fill={INK} weight={600} anchor="start">
          Volume = AL = 2.0×10⁻⁶ m³ ⇒ u = U/Vol = 2.5×10⁴ J/m³
        </T>
      </Fade>

      {/* beat 5 — the cross-check */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.2)}
        d="M72 330 h616 q12 0 12 12 v46 q0 12 -12 12 h-616 q-12 0 -12 -12 v-46 q0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={80} y={370} size={18} fill={INK} weight={800} anchor="start">
          check: u = ½σε = ½(10⁸)(5×10⁻⁴) = 2.5×10⁴ J/m³ ✓
        </T>
      </Fade>

      {/* beat 6 — the concept */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M60 430 L60 458" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={450} size={15} fill={RED} script anchor="start">
          {t("energy density doesn't care how much wire you have", "energy density wire ki quantity se independent hai")}
        </T>
      </Fade>
    </Scene>
  );
}
