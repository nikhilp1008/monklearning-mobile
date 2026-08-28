/**
 * Ch14 · Section 5 — "Worked example: a sitar string"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.26, 29.59, 38.27, 44.19, 58.39, 67.07, 72.98]):
 *  0 hook badge: board favourite, 2–3 marks
 *  1 the picture: string (T, μ) + frequency f + the question
 *  2 given ledger: μ=0.04 · T=36 · f=50
 *  3 STEP 1 header + formula v=√(T/μ) (no f needed)
 *  4 STEP 1 compute → v = 30 m/s
 *  5 STEP 2 header + formula λ=v/f (f enters now)
 *  6 STEP 2 compute → λ = 0.6 m
 *  7 takeaway: string sets speed; frequency carves wavelength
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | badge chip (12.5)             | Chip  | x90..310  y100..132
 *  b0 | underline                     | Draw  | x100..300 y140
 *  b1 | pegs ×2 + string              | Draw  | x150/930 y135..165 · line y150
 *  b1 | T arrows ×2                   | Draw  | x110..150 / 930..970 y150
 *  b1 | "T = 36 N" (14)               | T mid | x540 bl178            y167..183
 *  b1 | "μ = 0.04 kg/m" (14)          | T mid | x540 bl198            y187..203
 *  b1 | f squiggle                    | Draw  | x500..540 y110..120
 *  b1 | "f = 50 Hz" (13,amber-d)      | T st  | x560 bl112            y102..115
 *  b1 | question chip (h32)          | Chip  | x360..720 y215..247
 *  b2 | given ledger chip (h36)       | Chip  | x290..790 y278..314
 *  b2 | underline                     | Draw  | x400..680 y322
 *  b3 | STEP 1 header (15,amber-d)    | T st  | x60 bl330             y318..333
 *  b3 | underline                     | Draw  | x60..280 y338
 *  b3 | "v = √(T/μ)" (18)             | T st  | x60 bl362             y348..368
 *  b4 | check                        | Draw  | x300 y396..405
 *  b4 | "= √(36/0.04) = √900" (15)    | T st  | x60 bl392             y381..397
 *  b4 | answer chip (h38)             | Chip  | x60..240  y405..443
 *  b5 | STEP 2 header (15,amber-d)    | T st  | x560 bl330            y318..333
 *  b5 | underline                     | Draw  | x560..800 y338
 *  b5 | "λ = v/f" (18)                | T st  | x560 bl362            y348..368
 *  b6 | check                        | Draw  | x800 y396..405
 *  b6 | "= 30/50" (15)                | T st  | x560 bl392            y381..397
 *  b6 | answer chip (h38)             | Chip  | x560..740 y405..443
 *  b7 | takeaway (15)                 | T mid | x540 bl505            y491..508
 *  b7 | recap chips ×2 (h40)          | Chip  | x350..510 / 570..730 y530..570
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

export default function Ch14Sec5({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={68} size={26} fill={RED} script>
          {t("worked example: a sitar string", "worked example: sitar string")}
        </T>
      </Fade>

      {/* beat 0 — hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <Chip x={90} y={100} w={220} h={32} fill={CREAM} stroke={AMBER} textFill={INK} size={12.5}>
          {t("★ board favourite · 2–3 marks", "★ board favourite · 2-3 marks")}
        </Chip>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.9)} d="M 100 140 L 300 140" stroke={AMBER} sw={1.8} dur={0.3} />

      {/* beat 1 — the picture */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M 150 135 L 150 165" stroke={INK} sw={3} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 0.4)} d="M 930 135 L 930 165" stroke={INK} sw={3} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 0.7)} d="M 150 150 L 930 150" stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 1} delay={dl(1, 1.5)} d={arrowD(150, 150, 110, 150)} stroke={AMBER_DARK} sw={2.2} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 1.7)} d={arrowD(930, 150, 970, 150)} stroke={AMBER_DARK} sw={2.2} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={540} y={178} size={14} fill={INK}>
          T = 36 N
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <T x={540} y={198} size={14} fill={INK}>
          μ = 0.04 kg/m
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.1)} d="M 500 120 Q 510 106 520 120 Q 530 134 540 120" stroke={AMBER} sw={2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 3.6)}>
        <T x={560} y={112} size={13} fill={AMBER_DARK} anchor="start">
          f = 50 Hz
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.2)}>
        <Chip x={360} y={215} w={360} h={32} fill="#fff" stroke={INK} textFill={INK} size={14} script={false}>
          {t("find: v = ? and λ = ?", "find karo: v = ? aur λ = ?")}
        </Chip>
      </Fade>

      {/* beat 2 — given ledger */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Chip x={290} y={278} w={500} h={36} fill={CREAM} stroke={AMBER} textFill={INK} size={14} script={false}>
          GIVEN: μ = 0.04 kg/m · T = 36 N · f = 50 Hz
        </Chip>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.0)} d="M 400 322 L 680 322" stroke={MUTED} sw={1.4} dur={0.4} />

      {/* beat 3 — STEP 1: header + formula */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={60} y={330} size={15} fill={AMBER_DARK} weight={800} anchor="start">
          {t("STEP 1 — speed (no f needed)", "STEP 1 — speed (f ki zaroorat nahi)")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.9)} d="M 60 338 L 280 338" stroke={AMBER} sw={1.8} dur={0.3} />
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <T x={60} y={362} size={18} fill={INK} anchor="start">
          v = √(T/μ)
        </T>
      </Fade>

      {/* beat 4 — STEP 1: compute */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={60} y={392} size={15} fill={INK} anchor="start">
          = √(36/0.04) = √900
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.2)} d="M 296 401 l 4 4 l 8 -9" stroke={GREEN} sw={2.2} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <Chip x={60} y={405} w={180} h={38} fill={GREEN} textFill="#fff" size={17} script={false}>
          v = 30 m/s
        </Chip>
      </Fade>

      {/* beat 5 — STEP 2: header + formula */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={560} y={330} size={15} fill={AMBER_DARK} weight={800} anchor="start">
          {t("STEP 2 — wavelength (f enters now)", "STEP 2 — wavelength (ab f aati hai)")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.9)} d="M 560 338 L 800 338" stroke={AMBER} sw={1.8} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <T x={560} y={362} size={18} fill={INK} anchor="start">
          λ = v/f
        </T>
      </Fade>

      {/* beat 6 — STEP 2: compute */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={560} y={392} size={15} fill={INK} anchor="start">
          = 30/50
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.0)} d="M 796 401 l 4 4 l 8 -9" stroke={GREEN} sw={2.2} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 1.4)}>
        <Chip x={560} y={405} w={180} h={38} fill={GREEN} textFill="#fff" size={17} script={false}>
          λ = 0.6 m
        </Chip>
      </Fade>

      {/* beat 7 — takeaway */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={505} size={15} fill={INK} script>
          {t(
            "string alone sets the speed; frequency carves the wavelength",
            "akeli string speed tay karti; frequency wavelength kaatti hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <Chip x={350} y={530} w={160} h={40} fill={GREEN} textFill="#fff" size={16} script={false}>
          v = 30 m/s
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <Chip x={570} y={530} w={160} h={40} fill={GREEN} textFill="#fff" size={16} script={false}>
          λ = 0.6 m
        </Chip>
      </Fade>
    </Scene>
  );
}
