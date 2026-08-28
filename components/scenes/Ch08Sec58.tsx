/**
 * Ch08 · Section 58 — "CBSE: maximum height of a mountain"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Note: en beats 1..2 are ~1s each — short delays throughout for English.
 *
 * Pure algebra cascade, single column, no diagram needed.
 *
 * Beats (en [0, 1.0, 2.0, 3.0, 16.57, 22.88, 32.78]):
 *  0 title only
 *  1 given: σ_max=3.0e8 Pa, ρ=2.5e3 kg/m³, g=10 m/s²
 *  2 formula: h_max = σ_max/ρg
 *  3 formula: = 3.0e8/(2.5e3)(10) = 3.0e8/2.5e4
 *  4 boxed hero: h_max = 1.2e4 m = 12 km
 *  5 red margin: reassuringly close to Earth's tallest mountains
 *  6 text: higher gravity → shorter mountains — why Mars hosts Olympus Mons
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 22, red, ALWAYS ON) cx540 bl64
 *  b1 | tick                | Draw | x65..73 y156
 *  b1 | given (16)          | T st | x80..~470 bl160
 *  b2 | tick                | Draw | x65..73 y196
 *  b2 | formula (16)        | T st | x80..250 bl200
 *  b3 | tick                | Draw | x65..73 y236
 *  b3 | formula (16)        | T st | x80..470 bl240
 *  b4 | hero box            | Draw | x60..420 y280..350
 *  b4 | result (20)         | T st | x80..340 bl322
 *  b5 | margin bar          | Draw | x60 y400..428
 *  b5 | note (15)           | T st | x76..~510 bl420
 *  b6 | tick/text (12)      | T st | x80..500 bl460
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

export default function Ch08Sec58({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("CBSE: maximum height of a mountain", "CBSE: mountain ki maximum height")}
        </T>
      </Fade>

      {/* beat 1 — the given data */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d="M65 156 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={80} y={160} size={16} fill={INK} weight={600} anchor="start">
          GIVEN: σ_max=3.0×10⁸ Pa, ρ=2.5×10³ kg/m³, g=10 m/s²
        </T>
      </Fade>

      {/* beat 2 — the formula */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M65 196 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={80} y={200} size={16} fill={INK} weight={600} anchor="start">
          h_max = σ_max/ρg
        </T>
      </Fade>

      {/* beat 3 — the substitution */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M65 236 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={80} y={240} size={16} fill={INK} weight={600} anchor="start">
          = 3.0×10⁸/(2.5×10³)(10) = 3.0×10⁸/2.5×10⁴
        </T>
      </Fade>

      {/* beat 4 — the boxed result */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.2)}
        d="M72 280 h348 q12 0 12 12 v46 q0 12 -12 12 h-348 q-12 0 -12 -12 v-46 q0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <T x={80} y={322} size={20} fill={INK} weight={800} anchor="start">
          h_max = 1.2×10⁴ m = 12 km
        </T>
      </Fade>

      {/* beat 5 — the reassuring check */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M60 400 L60 428" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={76} y={420} size={15} fill={RED} script anchor="start">
          {t("reassuringly close to Earth's tallest mountains", "Earth ke sabse ooche mountains ke aas-paas — reassuring")}
        </T>
      </Fade>

      {/* beat 6 — the gravity insight */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M65 456 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={80} y={460} size={12} fill={INK} weight={600} anchor="start">
          {t("higher gravity → shorter mountains — why Mars hosts Olympus Mons", "zyada gravity → chote mountains — isliye Mars par Olympus Mons")}
        </T>
      </Fade>
    </Scene>
  );
}
