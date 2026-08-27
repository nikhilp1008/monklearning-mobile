/**
 * M11 Ch13 · Section 13 — "Worked example: M.D. about the mean of a continuous distribution"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples.
 *
 * Daily wages, 40 workers, 5 classes. Mid-points x_i=150,250,350,450,550;
 * f_i=6,10,14,8,2 (N=40). f_i·x_i=900,2500,4900,3600,1100 (Σ=13000, x̄=325).
 * f_i|x_i-325|=1050,750,350,1000,450 (Σ=3600). M.D.=3600/40=90.
 *
 * Beats (board_reveal_at_english [0, 13.31, 32.0, 46.93, 61.35, 74.15, 84.22]):
 *  0 anchor: heading
 *  1 represent: full 4-column table (x_i, f_i, f_i·x_i, f_i|x_i-x̄|) + totals
 *  2 represent: x̄ = 13000/40 = 325 (ring f_i·x_i total)
 *  3 represent: Σf_i|x_i-x̄| = 1050+750+350+1000+450 = 3600 (ring f_d total)
 *  4 land (boxed, high emphasis): M.D.(x̄) = 3600/40 = 90
 *  5 explain: the mid-points used (each = lower+upper over 2)
 *  6 note (red-margin): divisor is N=40, not the 5 wage classes
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  title (script 19, red, always-on)     | T mid | x540 y56
 *  b0 | heading (script 15, amber_dark)  | T mid | x540 y88
 *  b1 | table header + 5 rows + totals   | T mid | x150..610 y140..284
 *  b2 | ring f_i·x_i total + text        | Draw+T| (370,284) · x650 y164
 *  b3 | ring f_d total + text            | Draw+T| (520,284) · x650 y210
 *  b4 | boxed M.D. (green)               | Draw+T| box x630..1020 y308..352
 *  b5 | mid-points recap (13, ink)       | T mid | x540 y380
 *  b6 | red bar + trap text (14)         | Draw+T| x60 y408..426 · text y422
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, GREEN, RED, ringD,
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
  { y: 164, xi: 150, fi: 6, fx: 900, fd: 1050 },
  { y: 188, xi: 250, fi: 10, fx: 2500, fd: 750 },
  { y: 212, xi: 350, fi: 14, fx: 4900, fd: 350 },
  { y: 236, xi: 450, fi: 8, fx: 3600, fd: 1000 },
  { y: 260, xi: 550, fi: 2, fx: 1100, fd: 450 },
];

export default function M11Ch13Sec13({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={56} size={19} fill={RED} anchor="middle" script>
          {t("Worked Example: M.D. of a Continuous Distribution", "Worked Example: Continuous Distribution ka M.D.")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={88} size={15} fill={AMBER_DARK} anchor="middle" script>
          {t("CBSE level: daily wages of 40 workers", "CBSE level: 40 workers ki daily wages")}
        </T>
      </Fade>

      {/* beat 1 — the full worked table */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={COL_XI} y={140} size={12} fill={MUTED} anchor="middle" weight={700}>x_i</T>
        <T x={COL_FI} y={140} size={12} fill={MUTED} anchor="middle" weight={700}>f_i</T>
        <T x={COL_FX} y={140} size={12} fill={MUTED} anchor="middle" weight={700}>f_i·x_i</T>
        <T x={COL_FD} y={140} size={12} fill={MUTED} anchor="middle" weight={700}>{"f_i|x_i-x_bar|"}</T>
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
        <T x={COL_FI} y={284} size={13} fill={INK} anchor="middle" weight={700}>40</T>
        <T x={COL_FX} y={284} size={13} fill={INK} anchor="middle" weight={700}>13000</T>
        <T x={COL_FD} y={284} size={13} fill={INK} anchor="middle" weight={700}>3600</T>
      </Fade>

      {/* beat 2 — x̄ = 13000/40 = 325 */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d={ringD(COL_FX, 284, 26, 14)} stroke={AMBER_DARK} sw={2} dur={0.5} />
      <XBar on={beat >= 2} delay={dl(2, 0.7)} x={650} y={164} size={14} />
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={664} y={164} size={14} fill={INK} anchor="start" weight={700}>
          {" = 13000/40 = 325"}
        </T>
      </Fade>

      {/* beat 3 — Σf_i|x_i-x̄| = 1050+750+350+1000+450 = 3600 */}
      <Draw on={beat >= 3} delay={dl(3, 0)} d={ringD(COL_FD, 284, 26, 14)} stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={650} y={210} size={13} fill={INK} anchor="start" weight={700}>
          {"Σf_i|x_i-x_bar| = 1050+750+350+1000+450 = 3600"}
        </T>
      </Fade>

      {/* beat 4 — land (boxed, high emphasis): M.D. */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d={roundRectD(630, 308, 390, 44)} stroke={GREEN} sw={2.2} dur={0.8} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={735} y={335} size={17} fill={GREEN} anchor="start" weight={800}>{"M.D."}</T>
      </Fade>
      <XBar on={beat >= 4} delay={dl(4, 1)} x={775} y={335} size={17} fill={GREEN} weight={800} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={789} y={335} size={17} fill={GREEN} anchor="start" weight={800}>{" = 3600/40 = 90"}</T>
      </Fade>

      {/* beat 5 — explain: the mid-points used */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={380} size={13} fill={INK} anchor="middle">
          {t(
            "Mid-points used: 150, 250, 350, 450, 550 (each = lower+upper over 2).",
            "Mid-points use kiye: 150, 250, 350, 450, 550 (har ek = lower+upper /2)."
          )}
        </T>
      </Fade>

      {/* beat 6 — note: divisor is N, not the class count */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 60 408 L 60 426" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={422} size={14} fill={RED} anchor="start" weight={700}>
          {t(
            "Divisor is N = 40 (total workers), NOT the 5 wage classes.",
            "Divisor N = 40 hai (total workers), 5 wage classes NAHI."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
