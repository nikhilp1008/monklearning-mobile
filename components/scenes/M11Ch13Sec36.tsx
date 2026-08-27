/**
 * M11 Ch13 · Section 36 — "Procedure: correcting a misrecorded observation"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept (procedure) — FLAGGED for extra scrutiny (reverse
 * problem). General method only; the worked numeric example lands in Sec 40.
 * Verify: Σx_correct = Σx_wrong - w + c (removes wrong contribution, adds
 * correct one — valid); Σx²_correct = Σx²_wrong - w² + c² (identical
 * repair, squared terms — valid); omitted-value variant drops the "+c"
 * terms and reduces n by 1 (valid, since one fewer observation exists).
 *
 * Beats (board_reveal_at_english [0, 13.14, 30.04, 47.96, 62.21, 69.8, 88.92]):
 *  0 anchor: heading
 *  1 represent: Step 1 — recover wrong totals, Σx=nx̄, Σx²=n(σ²+x̄²)
 *  2 land (boxed, high emphasis, LEFT): Σx_correct = Σx_wrong - w + c
 *  3 land (boxed, high emphasis, RIGHT): Σx²_correct = Σx²_wrong - w² + c²
 *  4 explain: Step 3 — recompute x̄ and σ from the repaired totals
 *  5 note (red-margin, high emphasis): a wrong value pollutes BOTH totals
 *  6 explain: the omitted-value variant
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  title (script 18, red, always-on)     | T mid | x540 y54
 *  b0 | heading (script 14, amber_dark)  | T mid | x540 y80
 *  b1 | Step 1 (13, ink)                 | T+Row st | x140 y108
 *  b2 | boxed (green, LEFT)              | Draw+T| x120..500 y130..174
 *  b3 | boxed (green, RIGHT)             | Draw+T| x580..960 y130..174
 *  b4 | Step 3 (13, ink)                 | T+Row st | x140 y198
 *  b5 | red bar + note (2 lines, 14)     | Draw+T| x60 y220..258 · text y234/254
 *  b6 | text (13, ink)                   | T mid | x540 y284
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, GREEN, RED,
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

export default function M11Ch13Sec36({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={54} size={17} fill={RED} anchor="middle" script>
          {t("Repair BOTH Totals, Not Just the Mean", "DONO Totals Repair Karo, Sirf Mean Nahi")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={80} size={14} fill={AMBER_DARK} anchor="middle" script>
          {t("Correcting a misrecorded observation", "Ek misrecorded observation correct karna")}
        </T>
      </Fade>

      {/* beat 1 — step 1: recover the wrong totals */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={140} y={108} size={13} fill={INK} anchor="start" weight={700}>{t("Step 1: recover wrong totals — Σx = n·", "Step 1: wrong totals recover karo — Σx = n·")}</T>
      </Fade>
      <XBar on={beat >= 1} delay={dl(1, 0.6)} x={en ? 545 : 590} y={108} size={13} />
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={en ? 557 : 602} y={108} size={13} fill={INK} anchor="start" weight={700}>{" and Σx² = n(σ²+"}</T>
      </Fade>
      <XBar on={beat >= 1} delay={dl(1, 0.6)} x={en ? 712 : 757} y={108} size={13} />
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={en ? 724 : 769} y={108} size={13} fill={INK} anchor="start" weight={700}>{"²)."}</T>
      </Fade>

      {/* beat 2 — land (boxed, high emphasis, LEFT): corrected sum */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d={roundRectD(120, 130, 380, 44)} stroke={GREEN} sw={2.2} dur={0.8} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={310} y={158} size={15} fill={GREEN} anchor="middle" weight={800}>
          {"Σx_correct = Σx_wrong - w + c"}
        </T>
      </Fade>

      {/* beat 3 — land (boxed, high emphasis, RIGHT): corrected sum of squares */}
      <Draw on={beat >= 3} delay={dl(3, 0)} d={roundRectD(580, 130, 380, 44)} stroke={GREEN} sw={2.2} dur={0.8} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={770} y={158} size={15} fill={GREEN} anchor="middle" weight={800}>
          {"Σx²_correct = Σx²_wrong - w² + c²"}
        </T>
      </Fade>

      {/* beat 4 — step 3: recompute from repaired totals */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={140} y={198} size={13} fill={INK} anchor="start" weight={700}>{t("Step 3: recompute", "Step 3: repaired totals se")}</T>
      </Fade>
      <XBar on={beat >= 4} delay={dl(4, 0.5)} x={en ? 262 : 340} y={198} size={13} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={en ? 274 : 352} y={198} size={13} fill={INK} anchor="start" weight={700}>
          {t("and σ from the repaired totals.", "aur σ dobara compute karo.")}
        </T>
      </Fade>

      {/* beat 5 — note: a wrong value pollutes BOTH totals */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M 60 220 L 60 258" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={76} y={234} size={14} fill={RED} anchor="start" weight={700}>
          {t(
            "A wrong value pollutes BOTH Σx (the mean) and Σx² (the variance).",
            "Ek wrong value DONO ko pollute karti hai: Σx (mean) aur Σx² (variance)."
          )}
        </T>
        <T x={76} y={254} size={14} fill={RED} anchor="start" weight={700}>
          {t("Fixing only the mean is the most common half-mark loss.", "Sirf mean fix karna sabse common half-mark loss hai.")}
        </T>
      </Fade>

      {/* beat 6 — explain: the omitted-value variant */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={284} size={13} fill={INK} anchor="middle">
          {t(
            "If omitted (not replaced): drop -w and -w² only, and reduce n by 1.",
            "Agar omit hui (replace nahi): sirf -w aur -w² girao, aur n ko 1 se kam karo."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
