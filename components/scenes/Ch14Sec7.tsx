/**
 * Ch14 · Section 7 — "Worked example: decode a wave equation"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9.3, 23.61, 32.91, 43.28, 58.31, 67.97, 78.7]):
 *  0 hook badge: JEE Main bread & butter
 *  1 the equation + a mini snapshot graph (A, λ marked)
 *  2 pattern-match against the standard form y = A sin(ωt − kx)
 *  3 part (a): A = 0.05 m, f = ω/2π = 4 Hz
 *  4 part (a): λ = 2π/k = 0.5 m, v = ω/k = 2 m/s
 *  5 part (b): max particle speed = Aω ≈ 1.26 m/s
 *  6 part (c): tension T = μv² = 2 N
 *  7 verdict: 1.26 < 2 — particle speed ≠ wave speed
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | badge chip (13)               | Chip  | x90..350  y100..130
 *  b0 | underline                     | Draw  | x100..340 y136
 *  b1 | equation chip (h40,s18)       | Chip  | x190..890 y136..176
 *  b1 | snapshot curve                | Draw  | x340..540 y192..218
 *  b1 | amplitude arrow + "A" (11)    | Draw+T| x350 y192..205
 *  b1 | wavelength arrow + "λ" (11)   | Draw+T| x340..540 y235
 *  b2 | standard form (15,muted)      | T st  | x60 bl300             y288..305
 *  b3 | "A = 0.05 m" chip (h34)       | Chip  | x60..210  y320..354
 *  b3 | "f = ω/2π = 4 Hz" chip (h34)  | Chip  | x230..450 y320..354
 *  b4 | "λ = 2π/k = 0.5 m" chip(h34)  | Chip  | x60..280  y365..399
 *  b4 | "v = ω/k = 2 m/s" chip (h34)  | Chip  | x300..500 y365..399
 *  b5 | "(b) max particle speed" (15) | T st  | x560 bl300            y288..305
 *  b5 | compute line (15)             | T st  | x560 bl330            y318..335
 *  b6 | "(c) tension" (15)            | T st  | x560 bl375            y363..380
 *  b6 | compute line (15)             | T st  | x560 bl405            y393..410
 *  b7 | verdict chip (h50,s16)        | Chip  | x220..860 y505..555
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch14Sec7({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={68} size={25} fill={RED} script>
          {t("worked example: decode a wave equation", "worked example: wave equation decode karo")}
        </T>
      </Fade>

      {/* beat 0 — hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <Chip x={90} y={100} w={260} h={30} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13}>
          {t("★ JEE Main bread & butter", "★ JEE Main ki bread & butter")}
        </Chip>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.9)} d="M 100 136 L 340 136" stroke={AMBER_DARK} sw={1.8} dur={0.3} />

      {/* beat 1 — the equation + snapshot graph */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={190} y={136} w={700} h={40} fill="#fff" stroke={AMBER} textFill={INK} size={18} script={false}>
          y = 0.05 sin(8πt − 4πx)  (SI units)
        </Chip>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.1)}
        d="M 340 205 C 365 192, 385 192, 410 205 C 435 218, 455 218, 480 205 C 505 192, 525 192, 540 205"
        stroke={INK}
        sw={2.2}
        dur={0.7}
      />
      <Draw on={beat >= 1} delay={dl(1, 2.0)} d={arrowD(350, 205, 350, 192)} stroke={AMBER_DARK} sw={1.8} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <T x={362} y={198} size={11} fill={AMBER_DARK} anchor="start">
          A
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.8)} d={arrowD(410, 235, 480, 235)} stroke={AMBER} sw={1.8} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 3.3)}>
        <T x={445} y={250} size={11} fill={AMBER}>
          λ
        </T>
      </Fade>

      {/* beat 2 — pattern match */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={60} y={300} size={15} fill={MUTED} anchor="start">
          {t("match: y = A sin(ωt − kx)", "match: y = A sin(ωt − kx)")}
        </T>
      </Fade>

      {/* beat 3 — part (a): A, f */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <Chip x={60} y={320} w={150} h={34} fill="#fff" stroke={GREEN} textFill={INK} size={14} script={false}>
          A = 0.05 m
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.0)}>
        <Chip x={230} y={320} w={220} h={34} fill="#fff" stroke={GREEN} textFill={INK} size={14} script={false}>
          f = ω/2π = 4 Hz
        </Chip>
      </Fade>

      {/* beat 4 — part (a): λ, v */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <Chip x={60} y={365} w={220} h={34} fill="#fff" stroke={GREEN} textFill={INK} size={14} script={false}>
          λ = 2π/k = 0.5 m
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.0)}>
        <Chip x={300} y={365} w={200} h={34} fill="#fff" stroke={GREEN} textFill={INK} size={14} script={false}>
          v = ω/k = 2 m/s
        </Chip>
      </Fade>

      {/* beat 5 — part (b): max particle speed */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={560} y={300} size={15} fill={AMBER_DARK} weight={800} anchor="start">
          {t("(b) max particle speed", "(b) max particle speed")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={560} y={330} size={15} fill={INK} anchor="start">
          v_p,max = Aω = 0.05×8π ≈ 1.26 m/s
        </T>
      </Fade>

      {/* beat 6 — part (c): tension */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={560} y={375} size={15} fill={AMBER_DARK} weight={800} anchor="start">
          {t("(c) tension", "(c) tension")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={560} y={405} size={15} fill={INK} anchor="start">
          T = μv² = 0.5×2² = 2 N
        </T>
      </Fade>

      {/* beat 7 — verdict */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <Chip x={220} y={505} w={640} h={50} fill="#fff" stroke={RED} textFill={RED} size={16} script={false}>
          {t(
            "v_particle,max (1.26) < v_wave (2) — different animals!",
            "v_particle,max (1.26) < v_wave (2) — alag jaanwar hain!"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
