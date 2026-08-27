/**
 * M11 Ch13 · Section 26 — "Worked example: variance via the shortcut formula"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples.
 *
 * x_i=4,8,12,16,20; f_i=2,5,8,3,2 (N=20). f_i·x_i=8,40,96,48,40 (Σ=232,
 * x̄=11.6 — not whole, exactly when the shortcut shines). f_i·x_i²=32,320,
 * 1152,768,800 (Σ=3072). σ²=3072/20-(11.6)²=153.6-134.56=19.04. σ≈4.36.
 *
 * Beats (board_reveal_at_english [0, 18.77, 30.12, 49.07, 67.24, 89.94, 97.62]):
 *  0 anchor: heading
 *  1 represent: full 4-column table (x_i, f_i, f_i·x_i, f_i·x_i²) + totals
 *  2 represent: x̄ = 232/20 = 11.6 (ring f_i·x_i total)
 *  3 represent: Σf_ix_i² = 32+320+1152+768+800 = 3072 (ring f_i·x_i² total)
 *  4 land (boxed, high emphasis): σ² = 3072/20-(11.6)² = 153.6-134.56 = 19.04
 *  5 land (boxed, high emphasis): σ = √19.04 ≈ 4.36
 *  6 note (red-margin): the shortcut avoided every (x_i-11.6) deviation
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  title (script 19, red, always-on)     | T mid | x540 y56
 *  b0 | heading (script 15, amber_dark)  | T mid | x540 y84
 *  b1 | table header + 5 rows + totals   | T mid | x150..610 y150..284
 *  b2 | ring f_i·x_i total + text        | Draw+T| (370,284) · x650 y164
 *  b3 | ring f_i·x_i² total + text       | Draw+T| (520,284) · x650 y210
 *  b4 | boxed σ² (green)                 | Draw+T| box x140..820 y310..356
 *  b5 | boxed σ (green)                  | Draw+T| box x300..660 y368..406
 *  b6 | red bar + note (14)              | Draw+T| x60 y428..446 · text y442
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
const COL_FX2 = 520;
const ROWS = [
  { y: 164, xi: 4, fi: 2, fx: 8, fx2: 32 },
  { y: 188, xi: 8, fi: 5, fx: 40, fx2: 320 },
  { y: 212, xi: 12, fi: 8, fx: 96, fx2: 1152 },
  { y: 236, xi: 16, fi: 3, fx: 48, fx2: 768 },
  { y: 260, xi: 20, fi: 2, fx: 40, fx2: 800 },
];

export default function M11Ch13Sec26({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={56} size={19} fill={RED} anchor="middle" script>
          {t("Worked Example: Variance via the Shortcut Formula", "Worked Example: Shortcut Formula se Variance")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={84} size={15} fill={AMBER_DARK} anchor="middle" script>
          {t("JEE Main: frequency distribution, one sweep", "JEE Main: frequency distribution, ek sweep")}
        </T>
      </Fade>

      {/* beat 1 — the full worked table */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={COL_XI} y={150} size={12} fill={MUTED} anchor="middle" weight={700}>x_i</T>
        <T x={COL_FI} y={150} size={12} fill={MUTED} anchor="middle" weight={700}>f_i</T>
        <T x={COL_FX} y={150} size={12} fill={MUTED} anchor="middle" weight={700}>f_i·x_i</T>
        <T x={COL_FX2} y={150} size={12} fill={MUTED} anchor="middle" weight={700}>{"f_i·x_i²"}</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.4)} d="M 150 160 L 610 160" stroke={INK} sw={1.6} dur={0.5} />
      {ROWS.map((r, i) => (
        <Fade key={r.y} on={beat >= 1} delay={dl(1, 0.7 + i * 0.25)}>
          <T x={COL_XI} y={r.y} size={13} fill={INK} anchor="middle">{r.xi}</T>
          <T x={COL_FI} y={r.y} size={13} fill={INK} anchor="middle">{r.fi}</T>
          <T x={COL_FX} y={r.y} size={13} fill={INK} anchor="middle">{r.fx}</T>
          <T x={COL_FX2} y={r.y} size={13} fill={INK} anchor="middle">{r.fx2}</T>
        </Fade>
      ))}
      <Draw on={beat >= 1} delay={dl(1, 2.1)} d="M 150 272 L 610 272" stroke={INK} sw={1.6} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <T x={COL_XI} y={284} size={13} fill={INK} anchor="middle" weight={700}>{t("Total", "Total")}</T>
        <T x={COL_FI} y={284} size={13} fill={INK} anchor="middle" weight={700}>20</T>
        <T x={COL_FX} y={284} size={13} fill={INK} anchor="middle" weight={700}>232</T>
        <T x={COL_FX2} y={284} size={13} fill={INK} anchor="middle" weight={700}>3072</T>
      </Fade>

      {/* beat 2 — x̄ = 232/20 = 11.6 */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d={ringD(COL_FX, 284, 24, 14)} stroke={AMBER_DARK} sw={2} dur={0.5} />
      <XBar on={beat >= 2} delay={dl(2, 0.7)} x={650} y={164} size={14} />
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={664} y={164} size={14} fill={INK} anchor="start" weight={700}>
          {" = 232/20 = 11.6"}
        </T>
      </Fade>

      {/* beat 3 — Σf_ix_i² = 3072 */}
      <Draw on={beat >= 3} delay={dl(3, 0)} d={ringD(COL_FX2, 284, 30, 14)} stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={650} y={210} size={13} fill={INK} anchor="start" weight={700}>
          {"Σf_ix_i² = 32+320+1152+768+800 = 3072"}
        </T>
      </Fade>

      {/* beat 4 — land (boxed, high emphasis): variance */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d={roundRectD(140, 310, 680, 46)} stroke={GREEN} sw={2.2} dur={0.8} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={480} y={339} size={16} fill={GREEN} anchor="middle" weight={800}>
          {"σ² = 3072/20 - (11.6)² = 153.6 - 134.56 = 19.04"}
        </T>
      </Fade>

      {/* beat 5 — land (boxed, high emphasis): SD */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={roundRectD(300, 368, 360, 38)} stroke={GREEN} sw={2.2} dur={0.7} />
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={480} y={393} size={16} fill={GREEN} anchor="middle" weight={800}>
          {"σ = √19.04 ≈ 4.36"}
        </T>
      </Fade>

      {/* beat 6 — note: the shortcut avoided every deviation */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 60 428 L 60 446" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={442} size={14} fill={RED} anchor="start" weight={700}>
          {t(
            "The shortcut paid off — we never touched a single (x_i - 11.6) deviation.",
            "Shortcut kaam aaya — ek bhi (x_i - 11.6) deviation touch nahi kiya."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
