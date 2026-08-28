/**
 * Ch08 · Section 59 — "NEET: length-free thermal stress"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Note: hi beats 1..6 are all ~1s apart — short delays throughout Hinglish.
 *
 * Pure algebra cascade, single column, no diagram needed.
 *
 * Beats (en [0, 8.28, 27.73, 39.34, 54.27, 67.16, 77.99]):
 *  0 title only
 *  1 given: steel rod clamped, ΔT=40°C, Y=2.0e11 Pa, α=1.2e-5 /°C
 *  2 trap: hunting for length/area — assuming longer/thinner changes stress
 *  3 boxed hero: σ=YαΔT=(2.0e11)(1.2e-5)(40)=9.6e7 Pa
 *  4 red margin: independent of length — only force=σA would need area
 *  5 text: NEET option changes when length doubles? eliminate on sight
 *  6 text: clamping cancels expansion — stress needs only Y, α, ΔT
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 20, red, ALWAYS ON) cx540 bl64
 *  b1 | tick                | Draw | x65..73 y156
 *  b1 | given (16)          | T st | x80..608 bl160
 *  b2 | tick                | Draw | x65..73 y196
 *  b2 | trap (13)           | T st | x80..561 bl200
 *  b3 | hero box            | Draw | x60..460 y230..300
 *  b3 | formula (17)        | T st | x80..454 bl268
 *  b4 | margin bar          | Draw | x60 y320..348
 *  b4 | note (14)           | T st | x76..~530 bl338
 *  b5 | tick/text (12)      | T st | x80..428 bl372
 *  b6 | tick/text (12)      | T st | x80..416 bl399
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
  MUTED,
  AMBER,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch08Sec59({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={20} fill={RED} script>
          {t("NEET speed trap: thermal stress", "NEET speed trap: thermal stress")}
        </T>
      </Fade>

      {/* beat 1 — the given data */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d="M65 156 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={80} y={160} size={16} fill={INK} weight={600} anchor="start">
          GIVEN: steel rod clamped, ΔT=40°C, Y=2.0×10¹¹ Pa, α=1.2×10⁻⁵ /°C
        </T>
      </Fade>

      {/* beat 2 — the trap */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M65 196 h8" stroke={MUTED} sw={1.4} dur={0.2} />
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={80} y={200} size={13} fill={MUTED} anchor="start">
          {t("trap: hunting for length/area — assuming longer/thinner changes it", "trap: length/area dhoondte — sochte longer/thinner alag deta")}
        </T>
      </Fade>

      {/* beat 3 — the boxed computation */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.2)}
        d="M72 230 h388 q12 0 12 12 v46 q0 12 -12 12 h-388 q-12 0 -12 -12 v-46 q0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={80} y={268} size={17} fill={INK} weight={800} anchor="start">
          σ=YαΔT=(2.0×10¹¹)(1.2×10⁻⁵)(40)=9.6×10⁷ Pa
        </T>
      </Fade>

      {/* beat 4 — no length, only force needs area */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M60 320 L60 348" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={76} y={338} size={14} fill={RED} script anchor="start">
          {t("independent of length — only force=σA would need area", "length se independent — sirf force=σA ko area chahiye")}
        </T>
      </Fade>

      {/* beat 5 — the exam radar */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M65 368 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={80} y={372} size={12} fill={INK} weight={600} anchor="start">
          {t("option changes when length doubles? eliminate on sight", "option length double hone par badle? turant hatao")}
        </T>
      </Fade>

      {/* beat 6 — why: clamping cancels the expansion */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M65 395 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={80} y={399} size={12} fill={INK} weight={600} anchor="start">
          {t("clamping cancels expansion — stress needs only Y, α, ΔT", "clamping expansion cancel karti — stress ko sirf Y, α, ΔT chahiye")}
        </T>
      </Fade>
    </Scene>
  );
}
