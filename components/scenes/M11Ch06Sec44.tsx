/**
 * M11 Ch06 · Section 44 — "Complete formula toolkit for Permutations &
 * Combinations". Second-to-last section of the ENTIRE 45-section chapter —
 * a `formula_recap` consolidating every formula taught across all 5
 * subtopics onto one board. Own tiny closing subtopic "Formula Recap"
 * (section 1 of 2; Sec45 "Cheat Sheet" follows). Per
 * SCENE_AUTHORING_MATHS.md's formula_recap/cheat_sheet guidance, this is
 * "a grid of boxed formulas, revealed in the same order as the chapter
 * taught them" — a notes-page moment, NOT new teaching, and (unlike Sec29 /
 * Sec38's dense recaps) NOTHING here erases: every one of the 7 formula-
 * group cells lands on its own beat and stays visible through the final
 * frame, so the settled board is a complete, screenshot-able one-page
 * reference for the whole chapter. Canvas 1080×620 · safe x36–1044,
 * y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 *
 * NOTATION: all nCr/nPr expressions here are SYMBOLIC (n, r, k, m, p, g are
 * variables) → plain inline text "nCr", "(n+r-1)C(r)", no attempted
 * super/subscript positioning of the composite, per the maths spec's
 * \binom rule. Exponents (nʳ, 2ⁿ, 2ᵈ, kⁿ, 10ⁿ) and subscripts (m₁, xᵢ, Dₙ,
 * Eₚ, pᵏ) use real Unicode super/subscript characters — all already proven
 * safe elsewhere in this chapter (Sec4/Sec27/Sec29/Sec37/Sec38). "∏"
 * (product) is avoided per Sec38's precedent — products are written as
 * concrete adjacent factors + "⋯" instead. GREEN = every landed formula
 * (house convention, same as Sec29/Sec38); INK = cell labels/box outlines;
 * AMBER/AMBER_DARK = the two HIGH-emphasis cells (Combinations, Advanced /
 * Number Theory) get a bolder amber box + label + slightly larger type;
 * RED = the closing guardrail banner only.
 *
 * Beats (board_reveal_at_english [0,10.84,30.12,45.91,59.9,75.61,92.42,
 * 111.27,121.69], hinglish [0,9.81,24.32,38.83,52.22,66.39,81.83,97.19,
 * 107.35]) — 1 heading + 7 formula-group cells + 1 closing guardrail, EVERY
 * one gated `on={beat >= k}` with NO upper bound (no erasing this section):
 *  0 heading (= title, always-on) + amber underline flourish
 *  1 (row1,col1) Counting Basics — AND/OR rules, n!, repetition nʳ
 *  2 (row1,col2) Permutations — nPr, nPn/nP0, alike, circular/flip
 *  3 (row1,col3, HIGH) Combinations — nCr closed form, symmetry, Pascal
 *  4 (row2,col1) Selections — subsets 2ⁿ, mixed-alike, stars&bars, Σxᵢ=n
 *  5 (row2,col2) Grouping & Distribution — n!/(m₁!m₂!⋯), kⁿ boxes
 *  6 (row2,col3) Geometry — lines/triangles, diagonals, rectangles, divisors
 *  7 (row3, wide col2+col3, HIGH) Advanced/Number Theory — digit-sum,
 *    derangements Dₙ, Legendre Eₚ(n!)
 *  8 closing guardrail banner (red, full width) — "recall only" note
 *
 * Layout plan (3×3-ish grid; boxes = estimated render boxes, longer
 * language counts — formulas are byte-identical between languages so only
 * the two labels/banner sentence differ):
 *  always | title (script 22, red)                    | T mid | x~395..685 y35..75
 *  b0 | title underline flourish (amber)                | Draw | x460..620 y82
 *  col x-ranges: col1 x60..360 (cx210), col2 x390..690 (cx540),
 *    col3 x720..1020 (cx870); row1 y104..232, row2 y250..378 (h128 each,
 *    18px gap); row3 (wide, col2+col3) x270..810 y396..520 (h124); banner
 *    x64..1016 y538..592 (h54) — all 18px gaps, all within safe y≤596.
 *  b1 | box (ink) + "COUNTING" label + 4 lines (sz12, gap22)   | x60..360  y104..232
 *  b2 | box (ink) + "PERMUTATIONS" label + 4 lines (sz12,g22)  | x390..690 y104..232
 *  b3 | box (AMBER) + "COMBINATIONS" label + 3 lines (sz13,g28)| x720..1020 y104..232
 *  b4 | box (ink) + "SELECTIONS" label + 5 lines (sz11,g17)    | x60..360  y250..378
 *  b5 | box (ink) + "GROUPING & DISTRIBUTION" + 3 lines(sz13)  | x390..690 y250..378
 *  b6 | box (ink) + "GEOMETRY" label + 4 lines (sz12,g22)      | x720..1020 y250..378
 *  b7 | box (AMBER, wide) + "ADVANCED / NUMBER THEORY" label   | x270..810 y396..520
 *     | + 3 lines (sz15, g28)
 *  b8 | banner box (red) + centered sentence (sz16, red)       | x64..1016 y538..592
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
  GREEN,
  RED,
  AMBER,
  AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, lineD } from "./math-kit";

type CellLine = { text: string; size: number };

/** One grid cell: box draws, label fades, then formula lines fade in
 * staggered — all in the cell's own beat window (Step 5's "one beat, several
 * staggered elements" pattern). `dl` is the caller's beat-bound delayFor
 * closure so the settle rule (Step 6) still applies per-cell. */
function FormulaCell({
  on,
  dl,
  x,
  y,
  w,
  h,
  label,
  lines,
  lineGap,
  firstLineOffset = 26,
  stroke = INK,
  labelFill = INK,
  boxSw = 1.6,
}: {
  on: boolean;
  dl: (d: number) => number;
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  lines: CellLine[];
  lineGap: number;
  firstLineOffset?: number;
  stroke?: string;
  labelFill?: string;
  boxSw?: number;
}) {
  const cx = x + w / 2;
  const labelY = y + 22;
  const firstY = labelY + firstLineOffset;
  return (
    <>
      <Draw on={on} delay={dl(0)} d={roundRectD(x, y, w, h, 14)} stroke={stroke} sw={boxSw} dur={0.7} />
      <Fade on={on} delay={dl(0.45)}>
        <T x={cx} y={labelY} size={13} fill={labelFill} weight={800}>
          {label}
        </T>
      </Fade>
      {lines.map((ln, i) => (
        <Fade key={i} on={on} delay={dl(0.85 + i * 0.32)}>
          <T x={cx} y={firstY + i * lineGap} size={ln.size} fill={GREEN} weight={600}>
            {ln.text}
          </T>
        </Fade>
      ))}
    </>
  );
}

export default function M11Ch06Sec44({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // grid geometry (see header layout plan)
  const COL_X = [60, 390, 720];
  const CELL_W = 300;
  const ROW1_Y = 104;
  const ROW2_Y = 250;
  const ROW_H = 128;
  const ROW3_X = 270;
  const ROW3_Y = 396;
  const ROW3_W = 540;
  const ROW3_H = 124;
  const BANNER_X = 64;
  const BANNER_Y = 538;
  const BANNER_W = 952;
  const BANNER_H = 54;

  const bannerText = t(
    "Recall only — jump back to the section itself to re-learn any derivation.",
    "Sirf recall ke liye — dobara seekhna ho toh us section mein wapas jao."
  );

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("Every formula, one page", "Har formula, ek hi page")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.4)} d={lineD(460, 82, 620, 82)} stroke={AMBER} sw={2} dur={0.5} />

      {/* beat 1 — row1,col1 — Counting Basics */}
      <FormulaCell
        on={beat >= 1}
        dl={(d) => dl(1, d)}
        x={COL_X[0]}
        y={ROW1_Y}
        w={CELL_W}
        h={ROW_H}
        label="COUNTING"
        lineGap={22}
        lines={[
          { text: "AND: m₁×⋯×mₖ    OR: m+n", size: 12 },
          { text: "n! = n(n-1)⋯1  (0!=1)", size: 12 },
          { text: "n! = n·(n-1)!", size: 12 },
          { text: "with repetition: nʳ", size: 12 },
        ]}
      />

      {/* beat 2 — row1,col2 — Permutations */}
      <FormulaCell
        on={beat >= 2}
        dl={(d) => dl(2, d)}
        x={COL_X[1]}
        y={ROW1_Y}
        w={CELL_W}
        h={ROW_H}
        label="PERMUTATIONS"
        lineGap={22}
        lines={[
          { text: "nPr = n!/(n-r)!", size: 12 },
          { text: "nPn = n!,  nP0 = 1", size: 12 },
          { text: "alike: n!/(p!q!⋯)", size: 12 },
          { text: "circular: (n-1)!  flip: (n-1)!/2", size: 12 },
        ]}
      />

      {/* beat 3 — row1,col3 — Combinations (HIGH) */}
      <FormulaCell
        on={beat >= 3}
        dl={(d) => dl(3, d)}
        x={COL_X[2]}
        y={ROW1_Y}
        w={CELL_W}
        h={ROW_H}
        label="COMBINATIONS"
        lineGap={28}
        firstLineOffset={30}
        stroke={AMBER}
        labelFill={AMBER_DARK}
        boxSw={2}
        lines={[
          { text: "nCr = n!/(r!(n-r)!) = nPr/r!", size: 13 },
          { text: "nCr = nC(n-r)", size: 13 },
          { text: "nCr + nC(r-1) = (n+1)Cr", size: 13 },
        ]}
      />

      {/* beat 4 — row2,col1 — Selections */}
      <FormulaCell
        on={beat >= 4}
        dl={(d) => dl(4, d)}
        x={COL_X[0]}
        y={ROW2_Y}
        w={CELL_W}
        h={ROW_H}
        label="SELECTIONS"
        lineGap={17}
        firstLineOffset={22}
        lines={[
          { text: "subsets: 2ⁿ (2ⁿ-1 if ≥1)", size: 11 },
          { text: "alike groups: (p+1)(q+1)⋯2ᵈ", size: 11 },
          { text: "repetition select: (n+r-1)Cr", size: 11 },
          { text: "x₁+⋯+xₖ=n, xᵢ≥0: (n+k-1)C(k-1)", size: 11 },
          { text: "x₁+⋯+xₖ=n, xᵢ>0: (n-1)C(k-1)", size: 11 },
        ]}
      />

      {/* beat 5 — row2,col2 — Grouping & Distribution */}
      <FormulaCell
        on={beat >= 5}
        dl={(d) => dl(5, d)}
        x={COL_X[1]}
        y={ROW2_Y}
        w={CELL_W}
        h={ROW_H}
        label="GROUPING & DISTRIBUTION"
        lineGap={28}
        firstLineOffset={30}
        lines={[
          { text: "divide: n!/(m₁!m₂!⋯)", size: 13 },
          { text: "÷g! for g equal unlabelled groups", size: 12 },
          { text: "n distinct→k distinct boxes: kⁿ", size: 12 },
        ]}
      />

      {/* beat 6 — row2,col3 — Geometry */}
      <FormulaCell
        on={beat >= 6}
        dl={(d) => dl(6, d)}
        x={COL_X[2]}
        y={ROW2_Y}
        w={CELL_W}
        h={ROW_H}
        label="GEOMETRY"
        lineGap={22}
        lines={[
          { text: "lines nC2, triangles nC3", size: 12 },
          { text: "diagonals: n(n-3)/2", size: 12 },
          { text: "rectangles: aC2·bC2", size: 12 },
          { text: "divisors: (a₁+1)(a₂+1)⋯", size: 12 },
        ]}
      />

      {/* beat 7 — row3, wide (col2+col3) — Advanced / Number Theory (HIGH) */}
      <FormulaCell
        on={beat >= 7}
        dl={(d) => dl(7, d)}
        x={ROW3_X}
        y={ROW3_Y}
        w={ROW3_W}
        h={ROW3_H}
        label="ADVANCED / NUMBER THEORY"
        lineGap={28}
        firstLineOffset={30}
        stroke={AMBER}
        labelFill={AMBER_DARK}
        boxSw={2}
        lines={[
          { text: "sum of numbers = (Σd)(n-1)!(10ⁿ-1)/9", size: 15 },
          { text: "Dₙ = n!Σ(-1)ⁱ/i!", size: 15 },
          { text: "Eₚ(n!) = Σₖ⌊n/pᵏ⌋", size: 15 },
        ]}
      />

      {/* beat 8 — closing guardrail banner (red, full width, never erased) */}
      <Draw
        on={beat >= 8}
        delay={dl(8, 0)}
        d={roundRectD(BANNER_X, BANNER_Y, BANNER_W, BANNER_H, 14)}
        stroke={RED}
        sw={2.2}
        dur={0.7}
      />
      <Fade on={beat >= 8} delay={dl(8, 0.6)}>
        <T x={540} y={BANNER_Y + BANNER_H / 2 + 6} size={16} fill={RED} weight={700}>
          {bannerText}
        </T>
      </Fade>
    </Scene>
  );
}
