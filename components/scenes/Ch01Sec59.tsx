/**
 * Ch01 · Section 59 — "Example 4 [JEE Advanced]: the cube, and the cost of one zero"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 20.7, 38.2, 60.8, 81.8, 106.6, 126.9, 140.6]):
 *  0 title
 *  1 two identical cubes drawn · labels 2.5 cm / 2.50 cm · "only the writing differs"
 *  2 bridge chip: no ± given → implied uncertainty · left ⇒ ±0.1 · sig figs ARE the error
 *  3 left working: 0.1/2.5 = 4% · ΔV/V = 3×4% = 12%
 *  4 left result: 15.625 → 16 cm³ (2 sf) · V = 16 ± 2 · systems agree note
 *  5 right: ⇒ ±0.01 · 0.01/2.50 = 0.4%
 *  6 right: ΔV/V = 1.2% · compare chip 12% → 1.2%, tenfold from one zero
 *  7 verdict: not one atom moved — 10× stronger claim · a zero is a promise
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  cubes | front x260..340 / x700..780 y100..180 (+3D 18,−14) · labels 18 bl 235 cx300/740
 *  b1 | muted 13 cx540 bl 150
 *  b2 | chip x330..750 y260..296 · "⇒ ± 0.1 cm" 16 cx300 bl 330 · amber script cx540 bl 330
 *  b3 | 17 cx300 bl 380 / 415
 *  b4 | 17 cx300 bl 455 · green 18 cx300 bl 490 · muted 13 st x460 bl 504
 *  b5 | "⇒ ± 0.01 cm" cx740 bl 330 · 17 cx740 bl 380
 *  b6 | 17 cx740 bl 415 · chip x620..1000 y440..476
 *  b7 | green 15 mid bl 548 · amber 13 mid bl 578
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  INK,
  INK_LIGHT,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch01Sec59({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const cube = (x: number) =>
    `M ${x} 100 h 80 v 80 h -80 z M ${x} 100 l 18 -14 h 80 l -18 14 M ${x + 80} 100 l 18 -14 v 80 l -18 14`;

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={24} fill={INK} script>
          {t(
            "JEE Advanced — the cube, and the cost of one zero",
            "JEE Advanced — ghan, aur ek zero ki keemat"
          )}
        </T>
      </Fade>

      {/* beat 1 — two identical cubes */}
      <Draw on={beat >= 1} delay={dl(1, 1)} d={cube(260)} stroke={INK} sw={2.2} dur={1} />
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <T x={300} y={235} size={18} fill={INK} weight={700}>2.5 cm</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 4)} d={cube(700)} stroke={INK} sw={2.2} dur={1} />
      <Fade on={beat >= 1} delay={dl(1, 5.5)}>
        <T x={740} y={235} size={18} fill={INK} weight={700}>2.50 cm</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 9)}>
        <T x={540} y={150} size={13} fill={MUTED} script>
          {t(
            "identical — only the writing differs",
            "ek jaise — sirf likhavat alag hai"
          )}
        </T>
      </Fade>

      {/* beat 2 — the bridge */}
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <Chip x={330} y={260} w={420} h={36} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={15}>
          {t(
            "no ± given → IMPLIED uncertainty",
            "koi ± nahi diya → IMPLIED uncertainty"
          )}
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 10)}>
        <T x={300} y={330} size={16} fill={AMBER_DARK} weight={600}>⇒ ± 0.1 cm</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 16)}>
        <T x={540} y={330} size={14} fill={AMBER_DARK} script>
          {t(
            "sig figs ARE the error statement",
            "sig figs HI error ka bayan hain"
          )}
        </T>
      </Fade>

      {/* beat 3 — left working */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={300} y={380} size={17} fill={INK} weight={600}>Δa/a = 0.1/2.5 = 4%</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 12)}>
        <T x={300} y={415} size={17} fill={INK} weight={600}>ΔV/V = 3 × 4% = 12%</T>
      </Fade>

      {/* beat 4 — left result */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={300} y={455} size={17} fill={INK} weight={600}>2.5³ = 15.625 → 16 cm³</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 10)}>
        <T x={300} y={490} size={18} fill={GREEN} weight={700}>V = 16 ± 2 cm³</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 17)}>
        <T x={460} y={504} size={13} fill={MUTED} script anchor="start">
          {t(
            "both systems tell the same story",
            "dono systems ek hi kahani sunate"
          )}
        </T>
      </Fade>

      {/* beat 5 — right side, the extra zero */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={740} y={330} size={16} fill={AMBER_DARK} weight={600}>⇒ ± 0.01 cm</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 12)}>
        <T x={740} y={380} size={17} fill={INK} weight={600}>0.01/2.50 = 0.4%</T>
      </Fade>

      {/* beat 6 — tenfold */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={740} y={415} size={17} fill={INK} weight={600}>ΔV/V = 3 × 0.4% = 1.2%</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8)}>
        <Chip x={620} y={440} w={380} h={36} fill={CREAM} stroke={GREEN} textFill={GREEN} size={15}>
          {t(
            "12% → 1.2% — tenfold, from one zero",
            "12% → 1.2% — das guna, ek zero se"
          )}
        </Chip>
      </Fade>

      {/* beat 7 — the promise, measured */}
      <Fade on={beat >= 7} delay={dl(7, 3)}>
        <T x={540} y={548} size={15} fill={GREEN} script>
          {t(
            "same cube, not one atom moved — a 10× stronger claim",
            "wahi ghan, ek parmaanu nahi hila — 10× mazboot daava"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 12)}>
        <T x={540} y={578} size={13} fill={AMBER_DARK} script>
          {t(
            "a trailing zero is a promise — and you just measured it in percent",
            "aakhri zero ek waada hai — aur abhi tumne use percent mein naap liya"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
