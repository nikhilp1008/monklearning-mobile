/**
 * Ch08 · Section 36 — "JEE Main: strain, lateral strain and volume change"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Note: en beats 1..4 are ~1s each — short delays throughout for English.
 *
 * Small rod-under-tension icon, then a pure algebra cascade below.
 *
 * Beats (en [0, 1.0, 2.0, 3.0, 4.0, 20.98, 39.33]):
 *  0 title only
 *  1 diagram: rod under tensile stress σ
 *  2 given: Y=1.2×10¹¹ Pa, ν=0.30, σ=1.2×10⁸ Pa
 *  3 ε = σ/Y = 1.0×10⁻³
 *  4 lateral strain = −νε = −3.0×10⁻⁴
 *  5 boxed hero: ΔV/V = (1−2ν)ε = 4.0×10⁻⁴
 *  6 red margin: volume increases since ν<0.5, ~0.04%
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 22, red, ALWAYS ON) cx540 bl64
 *  b1 | rod                 | Draw | x250..430 y170..200
 *  b1 | arrows               | Draw | x220..460 y185
 *  b2 | given (13)          | T mid| x340 bl230
 *  b3 | tick                | Draw | x65..73 y266
 *  b3 | formula (16)        | T st | x80..392 bl270
 *  b4 | tick                | Draw | x65..73 y306
 *  b4 | formula (16)        | T st | x80..520 bl310
 *  b5 | hero box            | Draw | x60..820 y345..410
 *  b5 | formula (18)        | T st | x80..494 bl385
 *  b6 | margin bar          | Draw | x60 y440..468
 *  b6 | note (15)           | T st | x76..~480 bl460
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
  AMBER,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch08Sec36({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={20} fill={RED} script>
          {t("JEE Main: strain, lateral strain and volume change", "JEE Main: strain, lateral strain aur volume change")}
        </T>
      </Fade>

      {/* beat 1 — rod under tensile stress */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M250 170 h180 v30 h-180 z" stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 0.8)} d={arrowD(250, 185, 220, 185)} stroke={INK} sw={2.2} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 1.1)} d={arrowD(430, 185, 460, 185)} stroke={INK} sw={2.2} dur={0.3} />

      {/* beat 2 — the given data */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={340} y={230} size={13} fill={INK} weight={600}>
          Y=1.2×10¹¹ Pa, ν=0.30, σ=1.2×10⁸ Pa
        </T>
      </Fade>

      {/* beat 3 — the longitudinal strain */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M65 266 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={80} y={270} size={16} fill={INK} weight={600} anchor="start">
          ε = σ/Y = 1.2×10⁸/1.2×10¹¹ = 1.0×10⁻³
        </T>
      </Fade>

      {/* beat 4 — the lateral strain */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d="M65 306 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={80} y={310} size={16} fill={INK} weight={600} anchor="start">
          lateral strain = −νε = −(0.30)(1.0×10⁻³) = −3.0×10⁻⁴
        </T>
      </Fade>

      {/* beat 5 — the volume change */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.2)}
        d="M72 345 h736 q12 0 12 12 v41 q0 12 -12 12 h-736 q-12 0 -12 -12 v-41 q0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={80} y={385} size={18} fill={INK} weight={800} anchor="start">
          ΔV/V = (1−2ν)ε = (0.40)(1.0×10⁻³) = 4.0×10⁻⁴
        </T>
      </Fade>

      {/* beat 6 — volume grows */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M60 440 L60 468" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={460} size={15} fill={RED} script anchor="start">
          {t("volume grows since ν<0.5 — about 0.04%", "volume badhta hai ν<0.5 se — lagbhag 0.04%")}
        </T>
      </Fade>
    </Scene>
  );
}
