/**
 * M11 Ch13 · Section 5 — "Procedure: mean deviation of ungrouped data"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept (procedure).
 *
 * Beats (board_reveal_at_english [0, 10.07, 21.33, 32.43, 48.73, 63.4, 79.96]):
 *  0 anchor: heading "M.D. of ungrouped data, step by step"
 *  1 represent (LEFT col): "About the MEAN" header, Step 1: find the mean
 *  2 represent: formula x̄ = (1/n) Σ x_i
 *  3 represent: Steps 2-4 stacked (form |x_i-x̄|, add, divide by n)
 *  4 land (boxed, high emphasis): MD(x̄) = (1/n) Σ|x_i - x̄|
 *  5 note (red-margin, RIGHT col): about the median — same steps, Step 1 swaps
 *  6 land (RIGHT col, boxed green): why bother — smallest, most honest M.D.
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  title (script 22, red, always-on)     | T mid | x540 y58
 *  b0 | heading (script 17, amber_dark)  | T mid | x540 y92
 *  b1 | "About the MEAN" (16,amber_dark) | T st  | x100 y130
 *  b1 | "Step 1: find the mean..." (14)  | T st  | x100 y164
 *  b2 | formula x̄=(1/n)Σx_i (18)         | Row   | x140 y198
 *  b3 | steps 2/3/4 (13, ink)            | T st  | x100 y228/250/272
 *  b4 | boxed formula (18, high)         | Draw+Row | box x100..560 y300..346
 *  b5 | "About the MEDIAN" (16)          | T st  | x580 y150
 *  b5 | red bar + 2-line note (14)       | Draw+T| x580 y168..210
 *  b6 | "Why bother?" + boxed payoff     | T+Draw| x580 y240 · box y255..300
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
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, Overline } from "./math-kit";

/** "x" with a drawn overline (mean) — matches Sec3's XBar. */
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

/** Lays out a left-to-right formula row mixing plain text chunks and x̄ glyphs. */
function FormulaRow({
  on,
  delay = 0,
  x,
  y,
  size,
  parts,
  fill = INK,
  weight = 700,
}: {
  on: boolean;
  delay?: number;
  x: number;
  y: number;
  size: number;
  parts: (string | "xbar")[];
  fill?: string;
  weight?: number;
}) {
  let cursor = x;
  const gap = size * 0.12;
  return (
    <>
      {parts.map((p, i) => {
        if (p === "xbar") {
          const w = size * 0.6;
          const el = (
            <XBar key={i} on={on} delay={delay} x={cursor} y={y} size={size} anchor="start" fill={fill} weight={weight} />
          );
          cursor += w + gap;
          return el;
        }
        const w = size * 0.52 * p.length;
        const el = (
          <Fade key={i} on={on} delay={delay}>
            <T x={cursor} y={y} size={size} fill={fill} anchor="start" weight={weight}>
              {p}
            </T>
          </Fade>
        );
        cursor += w + gap;
        return el;
      })}
    </>
  );
}

export default function M11Ch13Sec5({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={22} fill={RED} anchor="middle" script>
          {t("Procedure: Mean Deviation of Ungrouped Data", "Procedure: Ungrouped Data ka Mean Deviation")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={92} size={17} fill={AMBER_DARK} anchor="middle" script>
          {t("M.D. of ungrouped data, step by step", "Ungrouped data ka M.D., step by step")}
        </T>
      </Fade>

      {/* beat 1 — LEFT: about the mean, step 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={100} y={130} size={16} fill={AMBER_DARK} anchor="start" weight={800}>
          {t("About the MEAN", "MEAN ke baare mein")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={100} y={164} size={14} fill={INK} anchor="start">
          {t(
            "Step 1: find the mean — the anchor everything is measured from.",
            "Step 1: mean nikaalo — jisse har cheez measure hoti hai."
          )}
        </T>
      </Fade>

      {/* beat 2 — formula: x̄ = (1/n) Σ x_i */}
      <FormulaRow on={beat >= 2} delay={dl(2, 0.2)} x={140} y={198} size={18} parts={["xbar", " = (1/n) Σ x_i"]} />

      {/* beat 3 — steps 2, 3, 4 */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={100} y={228} size={13} fill={INK} anchor="start">
          {t("Step 2: form |x_i - x_bar| for each x_i.", "Step 2: har x_i ke liye |x_i - x_bar| banao.")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={100} y={250} size={13} fill={INK} anchor="start">
          {t("Step 3: add them all up.", "Step 3: sabko jod do.")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <T x={100} y={272} size={13} fill={INK} anchor="start">
          {t("Step 4: divide by n.", "Step 4: n se divide karo.")}
        </T>
      </Fade>

      {/* beat 4 — land (boxed, high emphasis): the M.D. formula */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d={roundRectD(100, 300, 460, 46)} stroke={GREEN} sw={2.2} dur={0.8} />
      <FormulaRow
        on={beat >= 4}
        delay={dl(4, 1)}
        x={140}
        y={329}
        size={18}
        parts={["MD(", "xbar", ") = (1/n) Σ|x_i - ", "xbar", "|"]}
      />

      {/* beat 5 — RIGHT: about the median (red-margin note) */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={580} y={150} size={16} fill={AMBER_DARK} anchor="start" weight={800}>
          {t("About the MEDIAN", "MEDIAN ke baare mein")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.6)} d="M 580 168 L 580 210" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <T x={596} y={182} size={14} fill={RED} anchor="start" weight={700}>
          {t("Same steps, but Step 1 finds", "Same steps, bas Step 1 mein")}
        </T>
        <T x={596} y={206} size={14} fill={RED} anchor="start" weight={700}>
          {t("the median instead (sort, take the middle).", "median milta hai (sort karo, middle lo).")}
        </T>
      </Fade>

      {/* beat 6 — RIGHT: why bother (boxed payoff) */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={580} y={240} size={15} fill={INK} anchor="start" weight={700}>
          {t("Why bother?", "Itni mehnat kyun?")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.6)} d={roundRectD(580, 255, 370, 46)} stroke={GREEN} sw={2} dur={0.7} />
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={765} y={283} size={14} fill={INK} anchor="middle" script>
          {t("→ smallest, most honest M.D. possible.", "→ sabse chhota, sabse honest M.D.")}
        </T>
      </Fade>
    </Scene>
  );
}
