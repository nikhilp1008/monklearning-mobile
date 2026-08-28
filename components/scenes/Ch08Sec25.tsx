/**
 * Ch08 · Section 25 — "JEE Advanced: relating the four constants"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Note: hi beats 1..5 are ~1s each — short delays throughout for Hindi.
 *
 * Pure algebra cascade, single column, no diagram needed.
 *
 * Beats (en [0, 6.74, 22.61, 42.92, 56.49, 67.75, 83.37, 94.63]):
 *  0 title only
 *  1 given: Y=1.2×10¹¹ Pa, ν=0.25
 *  2 B = Y/3(1-2ν) = 8.0×10¹⁰ Pa
 *  3 η = Y/2(1+ν) = 4.8×10¹⁰ Pa
 *  4 verify: 9/Y = 1/B + 3/η ?
 *  5 RHS: 1/B+3/η = 7.5×10⁻¹¹
 *  6 boxed hero LHS: 9/Y = 7.5×10⁻¹¹ ✓
 *  7 red margin: two routes agree, confirms 2 constants
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 22, red, ALWAYS ON) cx540 bl64
 *  b1 | tick                | Draw | x65..73 y156
 *  b1 | given (17)          | T st | x80..352 bl160 (y147..165)
 *  b2 | tick                | Draw | x65..73 y206
 *  b2 | formula (16)        | T st | x80..432 bl210 (y198..215)
 *  b3 | tick                | Draw | x65..73 y246
 *  b3 | formula (16)        | T st | x80..408 bl250 (y238..255)
 *  b4 | tick                | Draw | x65..73 y296
 *  b4 | verify (16)         | T st | x80..291 bl300 (y279..308)
 *  b5 | tick                | Draw | x65..73 y336
 *  b5 | formula (15)        | T st | x80..395 bl340 (y328..345)
 *  b6 | hero box            | Draw | x60..620 y365..445
 *  b6 | result (20)         | T st | x80..~440 bl400 (y384..408)
 *  b7 | margin bar          | Draw | x60 y475..503
 *  b7 | note (15)           | T st | x76..447 bl495 (y475..502)
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
  GREEN,
  AMBER,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch08Sec25({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("JEE Advanced: from Y and ν to B and η", "JEE Advanced: Y aur ν se B aur η")}
        </T>
      </Fade>

      {/* beat 1 — given */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d="M65 156 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={80} y={160} size={17} fill={INK} weight={600} anchor="start">
          GIVEN: Y = 1.2×10¹¹ Pa, ν = 0.25
        </T>
      </Fade>

      {/* beat 2 — bulk modulus */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M65 206 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={80} y={210} size={16} fill={INK} weight={600} anchor="start">
          B = Y/3(1−2ν) = 1.2×10¹¹/1.5 = 8.0×10¹⁰ Pa
        </T>
      </Fade>

      {/* beat 3 — shear modulus */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M65 246 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={80} y={250} size={16} fill={INK} weight={600} anchor="start">
          η = Y/2(1+ν) = 1.2×10¹¹/2.5 = 4.8×10¹⁰ Pa
        </T>
      </Fade>

      {/* beat 4 — verify with the third relation */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d="M65 296 h8" stroke={GREEN} sw={1.4} dur={0.2} />
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={80} y={300} size={16} fill={GREEN} script anchor="start">
          {t("verify: 9/Y = 1/B + 3/η ?", "verify: 9/Y = 1/B + 3/η ?")}
        </T>
      </Fade>

      {/* beat 5 — the right-hand side */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M65 336 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={80} y={340} size={15} fill={INK} weight={600} anchor="start">
          1/B + 3/η = (1.25+6.25)×10⁻¹¹ = 7.5×10⁻¹¹
        </T>
      </Fade>

      {/* beat 6 — the left-hand side, and the match */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.2)}
        d="M60 365 h560 q12 0 12 12 v56 q0 12 -12 12 h-560 q-12 0 -12 -12 v-56 q0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={80} y={400} size={20} fill={INK} weight={800} anchor="start">
          9/Y = 9/1.2×10¹¹ = 7.5×10⁻¹¹ ✓
        </T>
      </Fade>

      {/* beat 7 — the agreement */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M60 475 L60 503" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={76} y={495} size={15} fill={RED} script anchor="start">
          {t("two routes agree — confirms just 2 constants", "do routes match — sirf 2 constants confirm")}
        </T>
      </Fade>
    </Scene>
  );
}
