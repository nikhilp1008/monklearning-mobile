/**
 * Ch08 · Section 48 — "JEE Main: minimum cable diameter"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Note: en beats 1..2 are ~1s apart; hinglish ALL beats are ~1s apart —
 * short delays throughout both languages.
 *
 * Beats (en [0, 1.0, 10.64, 29.42, 44.95, 58.69, 75.58]):
 *  0 title only
 *  1 diagram: ceiling, cable, 2000 kg load, F arrow, caption
 *  2 given: load=2000kg, σy=2.5e8 Pa, safety factor 5, g=10 m/s²
 *  3 formula: F=mg=2.0e4 N, σ_work=σy/5=5.0e7 Pa
 *  4 formula: A=F/σ_work=2.0e4/5.0e7=4.0e-4 m²
 *  5 boxed hero: d=√(4A/π)≈2.3e-2 m = 2.3 cm
 *  6 red margin: safety factor keeps cable comfortably inside elastic region
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 22, red, ALWAYS ON) cx540 bl64
 *  b1 | ceiling+hatch        | Draw | x500..580 y85
 *  b1 | cable                | Draw | x540 y85..170
 *  b1 | load box+label       | Fade | x500..580 y170..215
 *  b1 | F arrow              | Draw | x540 y215..245
 *  b1 | caption (11)         | T mid| x540 bl270
 *  b2 | tick/given (16)      | T st | x80..592 bl300
 *  b3 | tick/formula (16)    | T st | x80..400 bl336
 *  b4 | tick/formula (16)    | T st | x80..408 bl372
 *  b5 | hero box             | Draw | x60..460 y410..480
 *  b5 | result (20)          | T st | x80..380 bl452
 *  b6 | margin bar           | Draw | x60 y510..538
 *  b6 | note (14)            | T st | x76..~540 bl530
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
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch08Sec48({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("JEE Main: minimum diameter of a lift cable", "JEE Main: lift cable ka minimum diameter")}
        </T>
      </Fade>

      {/* beat 1 — the setup */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d="M500 85 h80" stroke={INK} sw={3} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 0.25)} d="M508 85 l-8 -8 M528 85 l-8 -8 M548 85 l-8 -8 M568 85 l-8 -8" stroke={INK} sw={1.4} dur={0.2} />
      <Draw on={beat >= 1} delay={dl(1, 0.4)} d="M540 85 V170" stroke={GREEN} sw={5} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 0.9)} d="M500 170 h80 v45 h-80 Z" stroke={INK} sw={2} dur={0.4} fill="none" />
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <T x={540} y={198} size={12} fill={INK} weight={700}>
          {t("2000 kg", "2000 kg")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.6)} d={arrowD(540, 215, 540, 245)} stroke={RED} sw={2.2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 2.0)}>
        <T x={540} y={270} size={11} fill={INK}>
          {t("working stress capped at one-fifth of the yield strength", "working stress yield ke one-fifth tak capped")}
        </T>
      </Fade>

      {/* beat 2 — the given data */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M65 296 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={80} y={300} size={16} fill={INK} weight={600} anchor="start">
          GIVEN: load=2000kg, σy=2.5×10⁸ Pa, safety factor=5, g=10 m/s²
        </T>
      </Fade>

      {/* beat 3 — force and working stress */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M65 332 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={80} y={336} size={16} fill={INK} weight={600} anchor="start">
          F = mg = 2.0×10⁴ N, σ_work = σy/5 = 5.0×10⁷ Pa
        </T>
      </Fade>

      {/* beat 4 — minimum area */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d="M65 368 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={80} y={372} size={16} fill={INK} weight={600} anchor="start">
          A = F/σ_work = 2.0×10⁴/5.0×10⁷ = 4.0×10⁻⁴ m²
        </T>
      </Fade>

      {/* beat 5 — the boxed result */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.2)}
        d="M72 410 h388 q12 0 12 12 v46 q0 12 -12 12 h-388 q-12 0 -12 -12 v-46 q0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={80} y={452} size={20} fill={INK} weight={800} anchor="start">
          d = √(4A/π) ≈ 2.3×10⁻² m = 2.3 cm
        </T>
      </Fade>

      {/* beat 6 — the design intent */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M60 510 L60 538" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={530} size={14} fill={RED} script anchor="start">
          {t("safety factor keeps the cable comfortably inside its elastic region", "safety factor cable ko elastic region ke andar aaram se rakhta hai")}
        </T>
      </Fade>
    </Scene>
  );
}
