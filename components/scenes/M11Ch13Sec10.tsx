/**
 * M11 Ch13 · Section 10 — "Worked example: the divisor trap (goals per match)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — JSON-flagged "speed trap": stage and cross the
 * tempting wrong divisor (÷5) before landing the correct one (÷N=25).
 *
 * Goals table: x_i=0..4, f_i=4,6,8,5,2 (N=25). f_i·x_i=0,6,16,15,8 (Σ=45,
 * x̄=45/25=1.8). f_i|x_i-1.8|=7.2,4.8,1.6,6.0,4.4 (Σ=24.0). M.D.=24/25=0.96.
 *
 * Beats (board_reveal_at_english [0, 13.74, 27.05, 43.35, 62.04, 80.21, 89.51]):
 *  0 anchor: heading
 *  1 represent: full 4-column table (x_i, f_i, f_i·x_i, f_i|x_i-1.8|) + totals
 *  2 represent: N = 4+6+8+5+2 = 25 (ring f_i total)
 *  3 represent: x̄ = 45/25 = 1.8 (ring f_i·x_i total)
 *  4 represent: Σf_i|x_i-1.8| = 24.0 (ring f_d total)
 *  5 land (boxed, high emphasis): M.D. = 24/25 = 0.96 goals
 *  6 speed trap (red-margin, high emphasis): ÷5=4.8 is WRONG; divide by N=25
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  title (script 20, red, always-on)     | T mid | x540 y58
 *  b0 | heading (script 15, amber_dark)  | T mid | x540 y90
 *  b1 | table header + 5 rows + totals   | T mid | x150..610 y140..284
 *  b2 | ring f_i total + text            | Draw+T| (270,284) · x650 y164
 *  b3 | ring f_i·x_i total + text        | Draw+T| (370,284) · x650 y208
 *  b4 | ring f_d total + text            | Draw+T| (520,284) · x650 y252
 *  b5 | boxed M.D. (green)               | Draw+T| box x630..1020 y308..352
 *  b6 | red bar + trap text + chips      | Draw+T+Chip | x60 y382..400 · chips y408..440
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, AMBER_DARK, GREEN, RED, CREAM, ringD,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, Overline } from "./math-kit";

function XBar({
  on,
  delay = 0,
  x,
  y,
  size,
  anchor = "start",
  fill = INK,
  weight = 700,
}: {
  on: boolean;
  delay?: number;
  x: number;
  y: number;
  size: number;
  anchor?: "start" | "middle" | "end";
  fill?: string;
  weight?: number;
}) {
  const w = size * 0.6;
  return (
    <>
      <Fade on={on} delay={delay}>
        <T x={x} y={y} size={size} fill={fill} anchor={anchor} weight={weight}>
          x
        </T>
      </Fade>
      <Overline on={on} delay={delay} x={x} y={y} size={size} textWidth={w} anchor={anchor} stroke={fill} />
    </>
  );
}

const COL_XI = 190;
const COL_FI = 270;
const COL_FX = 370;
const COL_FD = 520;
const ROWS = [
  { y: 164, xi: 0, fi: 4, fx: 0, fd: "7.2" },
  { y: 188, xi: 1, fi: 6, fx: 6, fd: "4.8" },
  { y: 212, xi: 2, fi: 8, fx: 16, fd: "1.6" },
  { y: 236, xi: 3, fi: 5, fx: 15, fd: "6.0" },
  { y: 260, xi: 4, fi: 2, fx: 8, fd: "4.4" },
];

export default function M11Ch13Sec10({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={56} size={20} fill={RED} anchor="middle" script>
          {t("Worked Example: The Divisor Trap", "Worked Example: Divisor ka Trap")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={88} size={15} fill={AMBER_DARK} anchor="middle" script>
          {t("JEE Main level: M.D. from a frequency table (goals per match)", "JEE Main level: frequency table se M.D. (goals per match)")}
        </T>
      </Fade>

      {/* beat 1 — the full worked table */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={COL_XI} y={140} size={12} fill={MUTED} anchor="middle" weight={700}>x_i</T>
        <T x={COL_FI} y={140} size={12} fill={MUTED} anchor="middle" weight={700}>f_i</T>
        <T x={COL_FX} y={140} size={12} fill={MUTED} anchor="middle" weight={700}>f_i·x_i</T>
        <T x={COL_FD} y={140} size={12} fill={MUTED} anchor="middle" weight={700}>{"f_i|x_i-1.8|"}</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.4)} d="M 150 150 L 610 150" stroke={INK} sw={1.6} dur={0.5} />
      {ROWS.map((r, i) => (
        <Fade key={r.y} on={beat >= 1} delay={dl(1, 0.7 + i * 0.25)}>
          <T x={COL_XI} y={r.y} size={13} fill={INK} anchor="middle">{r.xi}</T>
          <T x={COL_FI} y={r.y} size={13} fill={INK} anchor="middle">{r.fi}</T>
          <T x={COL_FX} y={r.y} size={13} fill={INK} anchor="middle">{r.fx}</T>
          <T x={COL_FD} y={r.y} size={13} fill={INK} anchor="middle">{r.fd}</T>
        </Fade>
      ))}
      <Draw on={beat >= 1} delay={dl(1, 2.1)} d="M 150 272 L 610 272" stroke={INK} sw={1.6} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <T x={COL_XI} y={284} size={13} fill={INK} anchor="middle" weight={700}>{t("Total", "Total")}</T>
        <T x={COL_FI} y={284} size={13} fill={INK} anchor="middle" weight={700}>25</T>
        <T x={COL_FX} y={284} size={13} fill={INK} anchor="middle" weight={700}>45</T>
        <T x={COL_FD} y={284} size={13} fill={INK} anchor="middle" weight={700}>24.0</T>
      </Fade>

      {/* beat 2 — N = Σf_i = 25 */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d={ringD(COL_FI, 284, 22, 14)} stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={650} y={164} size={14} fill={INK} anchor="start" weight={700}>
          {"N = 4+6+8+5+2 = 25"}
        </T>
      </Fade>

      {/* beat 3 — x̄ = 45/25 = 1.8 */}
      <Draw on={beat >= 3} delay={dl(3, 0)} d={ringD(COL_FX, 284, 22, 14)} stroke={AMBER_DARK} sw={2} dur={0.5} />
      <XBar on={beat >= 3} delay={dl(3, 0.7)} x={650} y={208} size={14} />
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={664} y={208} size={14} fill={INK} anchor="start" weight={700}>
          {" = 45/25 = 1.8"}
        </T>
      </Fade>

      {/* beat 4 — Σf_i|x_i-1.8| = 24.0 */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d={ringD(COL_FD, 284, 26, 14)} stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <T x={650} y={252} size={14} fill={INK} anchor="start" weight={700}>
          {"Σf_i|x_i-1.8| = 24.0"}
        </T>
      </Fade>

      {/* beat 5 — land (boxed, high emphasis): the correct M.D. */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={roundRectD(630, 308, 390, 44)} stroke={GREEN} sw={2.2} dur={0.8} />
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={825} y={335} size={17} fill={GREEN} anchor="middle" weight={800}>
          {"M.D. = 24/25 = 0.96 goals"}
        </T>
      </Fade>

      {/* beat 6 — speed trap: NOT divided by 5 rows */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 60 382 L 60 400" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={396} size={15} fill={RED} anchor="start" weight={800}>
          {t("TRAP: divide by N = 25, NOT by the 5 rows!", "TRAP: N = 25 se divide karo, 5 rows se NAHI!")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.4)}>
        <Chip x={220} y={410} w={240} h={32} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {"24 ÷ 5 = 4.8  ✗"}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <Chip x={580} y={410} w={280} h={32} fill={GREEN} textFill="#fff" size={14} script={false}>
          {"24 ÷ 25 = 0.96  ✓"}
        </Chip>
      </Fade>
    </Scene>
  );
}
