/**
 * Ch08 · Section 46 — "CBSE: modulus of resilience"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Note: en beats 2..6 are ~1s each — short delays throughout for English.
 *
 * Pure algebra cascade, single column, no diagram needed.
 *
 * Beats (en [0, 6.4, 23.98, 24.98, 25.98, 26.98, 27.98]):
 *  0 title only
 *  1 given: σy=3.0e8 Pa, Y=2.0e11 Pa
 *  2 formula: u_resilience = σy²/2Y
 *  3 formula: u = (3.0e8)²/2(2.0e11) = 9.0e16/4.0e11
 *  4 boxed hero: u_resilience = 2.25e5 J/m³
 *  5 red margin: beyond this energy density, wire yields — safe elastic budget
 *  6 text: needs only σy and Y, nothing about the wire's size
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 22, red, ALWAYS ON) cx540 bl64
 *  b1 | tick                | Draw | x65..73 y156
 *  b1 | given (16)          | T st | x80..368 bl160
 *  b2 | tick                | Draw | x65..73 y196
 *  b2 | formula (16)        | T st | x80..256 bl200
 *  b3 | tick                | Draw | x65..73 y236
 *  b3 | formula (16)        | T st | x80..464 bl240
 *  b4 | hero box            | Draw | x60..460 y280..350
 *  b4 | result (20)         | T st | x80..380 bl322
 *  b5 | margin bar          | Draw | x60 y400..428
 *  b5 | note (15)           | T st | x76..~505 bl420
 *  b6 | tick                | Draw | x65..73 y456
 *  b6 | text (14)           | T st | x80..488 bl460
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

export default function Ch08Sec46({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("CBSE: modulus of resilience", "CBSE: modulus of resilience")}
        </T>
      </Fade>

      {/* beat 1 — the given data */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d="M65 156 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={80} y={160} size={16} fill={INK} weight={600} anchor="start">
          GIVEN: σy=3.0×10⁸ Pa, Y=2.0×10¹¹ Pa
        </T>
      </Fade>

      {/* beat 2 — the formula */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M65 196 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={80} y={200} size={16} fill={INK} weight={600} anchor="start">
          u_resilience = σy²/2Y
        </T>
      </Fade>

      {/* beat 3 — the substitution */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M65 236 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={80} y={240} size={16} fill={INK} weight={600} anchor="start">
          u = (3.0×10⁸)²/2(2.0×10¹¹) = 9.0×10¹⁶/4.0×10¹¹
        </T>
      </Fade>

      {/* beat 4 — the boxed result */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.2)}
        d="M72 280 h388 q12 0 12 12 v46 q0 12 -12 12 h-388 q-12 0 -12 -12 v-46 q0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <T x={80} y={322} size={20} fill={INK} weight={800} anchor="start">
          u_resilience = 2.25×10⁵ J m⁻³
        </T>
      </Fade>

      {/* beat 5 — the meaning: safe elastic budget */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M60 400 L60 428" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={76} y={420} size={15} fill={RED} script anchor="start">
          {t("beyond this, the wire yields — the safe elastic budget", "iske aage wire yield karti — safe elastic budget")}
        </T>
      </Fade>

      {/* beat 6 — what the formula didn't need */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M65 456 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={80} y={460} size={14} fill={INK} weight={600} anchor="start">
          needs only σy and Y — nothing about the wire's size
        </T>
      </Fade>
    </Scene>
  );
}
