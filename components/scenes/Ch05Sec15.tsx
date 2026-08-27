/**
 * Ch05 · Section 15 — "JEE Main: a force that changes with position" (worked example)
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 13.3, 37.1, 60.3, 76.3, 88.8, 107.1, 124.6, 133.1] · dur 134.1 —
 *        b8 lasts ~1s in en → en-tiny delays;
 *        hi [0, 14.0, 33.5, 50.9, 66.0, 79.9, 95.7, 115.0, 123.7] · dur 148.6):
 *  0 title + subtitle
 *  1 setup chip: m=2, F=3x²+2x, v at x=4?
 *  2 F-x graph: rising curve 0→56 N + green hatch area
 *  3 step 1: F S cos θ dead → W = ∫₀⁴ F dx
 *  4 antiderivative x³ + x²
 *  5 evaluate → 80 J (= shaded area)
 *  6 theorem: 80 = ½·2·v² → v² = 80
 *  7 v = 4√5 ≈ 8.94 m/s chip
 *  8 why-JEE band: both standard tools dead, theorem walks past
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl82
 *  b1 | chip x80..680 y110..148 · note cx380 bl174
 *  b2 | y-axis (140,210)-(140,420) · x-axis (120,400)-(520,400)
 *     | curve M140,400 L220,385 L300,351 L380,300 L460,230
 *     | "56 N" st x480 bl225 · "4 m" (460,424) · "0" (140,424) · hatch x180..420
 *  b3 | red st x560 bl230 · chip x560..900 y245..283
 *  b4 | st x560 bl330 · b5 | bl372 · green cx770 bl400
 *  b6 | st x560 bl440 / bl470 · b7 | chip x560..820 y485..523
 *  b8 | bar x66 y525..583 · lines st x84 bl545 / bl571
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
  arrowD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch05Sec15({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("JEE Main: a Force That Grows With x", "JEE Main: Force Jo x ke Saath Badhta Hai")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 5)}>
        <T x={540} y={82} size={13} fill={MUTED} script>
          {t(
            "variable-force integration stitched to the work-energy theorem",
            "variable-force integration, work-energy theorem se sila hua"
          )}
        </T>
      </Fade>

      {/* beat 1 — setup */}
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <Chip x={80} y={110} w={600} h={38} fill={CREAM} stroke={INK} textFill={INK} size={13.5} script={false}>
          {t(
            "m = 2 kg, at rest at origin · F = 3x² + 2x N · v at x = 4 m ?",
            "m = 2 kg, origin par aaram se · F = 3x² + 2x N · x = 4 m par v ?"
          )}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 12)}>
        <T x={380} y={174} size={13} fill={MUTED} script>
          {t(
            "the force grows as the particle moves",
            "particle ke chalne ke saath force badhta jaata hai"
          )}
        </T>
      </Fade>

      {/* beat 2 — the graph */}
      <Draw on={beat >= 2} delay={dl(2, 1)} d={arrowD(140, 420, 140, 210)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 2} delay={dl(2, 1.4)} d={arrowD(120, 400, 520, 400)} stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <T x={128} y={205} size={14} fill={INK} anchor="end" weight={700}>
          F
        </T>
        <T x={532} y={405} size={14} fill={INK} anchor="start" weight={700}>
          x
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 3.2)}
        d="M 140 400 L 220 385 L 300 351 L 380 300 L 460 230"
        stroke={INK}
        sw={2.8}
        dur={1.2}
      />
      <Fade on={beat >= 2} delay={dl(2, 5)}>
        <T x={480} y={225} size={13} fill={INK} anchor="start" weight={700}>
          56 N
        </T>
        <T x={460} y={424} size={13} fill={INK} weight={700}>
          4 m
        </T>
        <T x={140} y={424} size={13} fill={INK} weight={700}>
          0
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 8)}
        d="M 180 400 V 395 M 220 400 V 386 M 260 400 V 371 M 300 400 V 352 M 340 400 V 328 M 380 400 V 301 M 420 400 V 267"
        stroke={GREEN}
        sw={1.4}
        dur={0.8}
      />

      {/* beat 3 — step 1: integrate */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={560} y={230} size={13} fill={RED} script anchor="start">
          {t(
            "F not constant → F S cos θ ✗ — its condition failed",
            "F constant nahi → F S cos θ ✗ — condition fail"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6)}>
        <Chip x={560} y={245} w={340} h={38} fill={CREAM} stroke={INK} textFill={INK} size={16} script={false}>
          W = ∫₀⁴ F dx
        </Chip>
      </Fade>

      {/* beat 4 — the antiderivative */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={560} y={330} size={15} fill={INK} anchor="start" weight={700}>
          ∫ (3x² + 2x) dx = x³ + x²
        </T>
      </Fade>

      {/* beat 5 — evaluate */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={560} y={372} size={15} fill={INK} anchor="start" weight={800}>
          [x³ + x²]₀⁴ = 64 + 16 = 80 J
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 10)}>
        <T x={770} y={400} size={13} fill={GREEN} script>
          {t("the same shaded area — two routes", "wahi shaded area — do raaste")}
        </T>
      </Fade>

      {/* beat 6 — hand it to the theorem */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={560} y={440} size={15} fill={INK} anchor="start" weight={700}>
          W = ΔK · Ki = 0 → 80 = ½ · 2 · v²
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 10)}>
        <T x={560} y={470} size={15} fill={INK} anchor="start" weight={800}>
          v² = 80
        </T>
      </Fade>

      {/* beat 7 — the speed */}
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <Chip x={560} y={485} w={260} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={14.5} script={false}>
          v = √80 = 4√5 ≈ 8.94 m/s
        </Chip>
      </Fade>

      {/* beat 8 — why this is JEE Main (en: ~1s beat) */}
      <Draw on={beat >= 8} delay={dl(8, en ? 0.2 : 0.5)} d="M 66 525 v 58" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, en ? 0.4 : 2)}>
        <T x={84} y={545} size={13} fill={RED} script anchor="start">
          {t(
            "why JEE Main? F S cos θ dead (F varies) · kinematics dead (a varies)",
            "JEE Main kyun? F S cos θ mara (F badalta) · kinematics mari (a badalta)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, en ? 0.7 : 10)}>
        <T x={84} y={571} size={13} fill={GREEN} script anchor="start">
          {t(
            "the theorem walks past both — it only ever wanted the TOTAL work",
            "theorem dono ke bagal se nikal jaata hai — use sirf TOTAL work chahiye tha"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
