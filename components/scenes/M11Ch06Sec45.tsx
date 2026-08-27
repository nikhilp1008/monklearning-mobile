/**
 * M11 Ch06 · Section 45 — "Rapid-recall revision sheet for Permutations &
 * Combinations". THE LAST SECTION OF THE ENTIRE 45-SECTION CHAPTER — a
 * `cheat_sheet` closing the tiny "Formula Recap" subtopic (section 2 of 2;
 * Sec44's formula-grid is section 1). Per SCENE_AUTHORING_MATHS.md's
 * formula_recap/cheat_sheet guidance this is "a grid of boxed formulas,
 * revealed in the same order as the chapter taught them — a notes-page
 * moment, not new teaching" — but per the brief this particular sheet leans
 * toward RECOGNITION HEURISTICS (trigger → action) rather than raw formula
 * boxes, since Sec44 already covers the formulas themselves. Like Sec44,
 * NOTHING here erases: every row lands on its own beat (`on={beat >= k}`,
 * no upper bound) and stays visible through the final frame, so the settled
 * board is a complete, screenshot-able one-page rapid-recall checklist for
 * the whole chapter. Canvas 1080×620 · safe x36–1044, y30–596. Spec:
 * SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 *
 * NOTATION: nCr/nPr expressions here are SYMBOLIC (n, r, k are variables) →
 * plain inline text "nCr"/"nPr"/"(n+r-1)Cr", no attempted super/subscript
 * positioning of the composite, per the maths spec's \binom rule. "nʳ" uses
 * a real Unicode superscript digit (native to Anek, proven safe throughout
 * this chapter). RED = the 4 JSON-flagged `red-margin` guardrail rows
 * (1,3,6,9); INK = the other 5 plain-recall rows; AMBER = the title's
 * underline flourish only; GREEN = the closing "you've reviewed it all"
 * checkmark stamp beside the very last row (a chapter-completion mark, not a
 * comment on row 9's own red guardrail meaning — same closing-green-note
 * convention Sec9/Sec18 used to end their own tip sequences on a positive
 * beat).
 *
 * DEVIATION FROM BRIEF (documented, not silent): the brief gives only the
 * English wording for the 9 rows; the Hinglish lines are this file's own
 * authored translations (same casual Latin-script Hinglish house voice used
 * throughout the chapter, e.g. Sec44's banner, Sec9/18's chips) since no
 * Hinglish source text was supplied for a cheat-sheet section like this one.
 * Row 7's single long English sentence ("Equal unlabelled groups → divide by
 * (number of groups)!. Lower bounds → pre-give the minimum.") is wrapped
 * onto its two natural clauses as TWO lines within one beat/row (exact
 * wording preserved, only line-broken) per the brief's own wrap allowance —
 * every other row fits on one line at size 16 with comfortable margin
 * (widest is Hinglish row 5 at ≈776px estimated vs. a 944px budget).
 *
 * Beats (board_reveal_at_english [0,9.9,21.76,33.88,48.21,59.14,74.67,83.54,
 * 94.04,103.42], hinglish [0,9.56,21.67,33.71,45.82,57.77,74.07,82.26,92.76,
 * 101.8]) — 1 heading + 9 recall-trigger rows, EVERY row gated
 * `on={beat >= k}` with NO upper bound (cumulative cheat sheet, nothing
 * erases — the one exception to the base spec's "dim/erase superseded
 * content" rule, exactly like Sec44):
 *  0 heading (= title, always-on) + amber underline flourish
 *  1 row1  (RED, guardrail) — AND→multiply / OR(mutually exclusive)→add
 *  2 row2  (plain)          — repetition→nʳ vs no-repetition→falling product/nPr
 *  3 row3  (RED, guardrail) — order matters→Permutation vs just a group→Combination
 *  4 row4  (plain)          — repeats among objects→divide out; circle (n-1)!; flip ÷2
 *  5 row5  (plain)          — nCr=nC(n-r); constraints→include/exclude or Total−complement
 *  6 row6  (RED, guardrail) — identical items, distinct boxes→stars & bars (n+r-1)Cr
 *  7 row7  (plain, 2 lines) — equal unlabelled groups→÷(groups)!; lower bounds→pre-give minimum
 *  8 row8  (plain)          — shapes=choosing vertices; divisor=exponent per prime
 *  9 row9  (RED, guardrail) — "at least one"→Total−none; "none correct"→derangement/incl-excl
 *     + closing GREEN checkmark stamp beside row 9 (chapter-completion flourish)
 *
 * Layout plan (single column, marker + text; boxes = estimated render boxes,
 * longer language counts — see estimate table in the deviation note above):
 *  always | title (script 22, red)                         | T mid  | x~360..720 y~37..77
 *  b0 | title underline flourish (amber)                    | Draw  | x460..620 y88
 *  Shared row geometry — marker circle cx=64 r=14, text starts x=100
 *  (anchor start, ONE discipline for all 9 rows); RED rows additionally get
 *  a red-bordered pill drawn around the text (padding 14px sides / 7px top-
 *  bottom) sized from that row's own estimated text width:
 *   row1 y=122 (RED, pill)      | marker x50..78 y~100..144 | text/pill x86..~550 y~95..145
 *   row2 y=174 (plain)          | marker x50..78 y~152..196 | text x100..~660 y~154..183
 *   row3 y=226 (RED, pill)      | marker x50..78 y~204..248 | text/pill x86..~630 y~199..249
 *   row4 y=278 (plain)          | marker x50..78 y~256..300 | text x100..~800 y~258..287
 *   row5 y=330 (plain)          | marker x50..78 y~308..352 | text x100..~850 y~310..339
 *   row6 y=382 (RED, pill)      | marker x50..78 y~360..404 | text/pill x86..~660 y~355..405
 *   row7 y=434/468 (plain, 2L)  | marker x50..78 y~412..490 | line1 x100..~570 y~414..443,
 *                                                              line2 x100..~430 y~448..477
 *   row8 y=520 (plain)          | marker x50..78 y~498..542 | text x100..~640 y~500..529
 *   row9 y=572 (RED, pill)      | marker x50..78 y~550..594 | text/pill x86..~840 y~547..597*
 *   (*pill bottom ≈584, well inside y≤596; see below)
 *   + closing checkmark: green ring r14 + drawn check, placed just right of
 *     row9's pill (dynamic x per language) at y≈markerCy row9, x well under 1044.
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  RED,
  AMBER,
  GREEN,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, circleD, checkD, lineD } from "./math-kit";

const TEXT_X = 100;
const MARKER_CX = 64;
const MARKER_R = 14;

/** One recall-trigger row: numbered marker circle, then (for guardrail rows)
 * a red-bordered pill drawn around the line(s), then the trigger→action text
 * itself — all staggered within the row's own beat window (Step 5's "one
 * beat, several staggered elements" pattern, `dl` already curried to the
 * row's beat by the caller, same convention as Sec44's FormulaCell). */
function RecallRow({
  on,
  dl,
  linesY,
  num,
  isRed,
  lines,
  size = 16,
}: {
  on: boolean;
  dl: (d: number) => number;
  linesY: number[];
  num: number;
  isRed: boolean;
  lines: string[];
  size?: number;
}) {
  const color = isRed ? RED : INK;
  const weight = isRed ? 700 : 600;
  const markerCy =
    linesY.length === 1
      ? linesY[0] - 4
      : (linesY[0] + linesY[linesY.length - 1]) / 2 - 4;
  const maxWidth = Math.max(...lines.map((l) => 0.5 * size * l.length));
  const pillX1 = TEXT_X - 14;
  const pillX2 = TEXT_X + maxWidth + 14;
  const pillY1 = linesY[0] - 0.78 * size - 7;
  const pillY2 = linesY[linesY.length - 1] + 0.31 * size + 7;

  return (
    <>
      {/* marker: numbered circle */}
      <Draw
        on={on}
        delay={dl(0)}
        d={circleD(MARKER_CX, markerCy, MARKER_R)}
        stroke={color}
        sw={1.8}
        dur={0.5}
      />
      <Fade on={on} delay={dl(0.25)}>
        <T x={MARKER_CX} y={markerCy + 0.26 * 13} size={13} fill={color} weight={800}>
          {num}
        </T>
      </Fade>
      {/* guardrail rows: red-bordered pill around the text */}
      {isRed && (
        <Draw
          on={on}
          delay={dl(0.35)}
          d={roundRectD(pillX1, pillY1, pillX2 - pillX1, pillY2 - pillY1, 15)}
          stroke={RED}
          sw={1.8}
          dur={0.6}
        />
      )}
      {lines.map((ln, i) => (
        <Fade key={i} on={on} delay={dl((isRed ? 0.65 : 0.4) + i * 0.2)}>
          <T x={TEXT_X} y={linesY[i]} size={size} fill={color} weight={weight} anchor="start">
            {ln}
          </T>
        </Fade>
      ))}
    </>
  );
}

export default function M11Ch06Sec45({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // row baselines (see layout-plan header)
  const Y1 = 122;
  const Y2 = 174;
  const Y3 = 226;
  const Y4 = 278;
  const Y5 = 330;
  const Y6 = 382;
  const Y7A = 434;
  const Y7B = 468;
  const Y8 = 520;
  const Y9 = 572;

  // row 9 text (needed up front to place the closing checkmark dynamically)
  const row9Text = t(
    "'At least one' → Total − none. 'None correct' → derangement → inclusion-exclusion.",
    "'Kam se kam ek' → Total − none. 'Koi bhi sahi nahi' → derangement → inclusion-exclusion."
  );
  const row9Width = 0.5 * 16 * row9Text.length;
  const row9PillX2 = TEXT_X + row9Width + 14;
  const checkX = row9PillX2 + 26;
  const checkY = Y9 - 4;

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={66} size={22} fill={RED} script>
          {t("Spot the trigger, fire the formula", "Trigger dekho, formula chalao")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.4)} d={lineD(460, 88, 620, 88)} stroke={AMBER} sw={2} dur={0.5} />

      {/* row 1 — RED guardrail: AND → multiply; OR → add */}
      <RecallRow
        on={beat >= 1}
        dl={(d) => dl(1, d)}
        linesY={[Y1]}
        num={1}
        isRed
        lines={[t(
          "AND → multiply; OR (mutually exclusive) → add.",
          "AND dikhe → multiply karo; OR (mutually exclusive) dikhe → add karo."
        )]}
      />

      {/* row 2 — plain: repetition fork */}
      <RecallRow
        on={beat >= 2}
        dl={(d) => dl(2, d)}
        linesY={[Y2]}
        num={2}
        isRed={false}
        lines={[t(
          "Repetition → powers (nʳ); no repetition → falling product / nPr.",
          "Repetition ho → powers (nʳ); repetition na ho → falling product / nPr."
        )]}
      />

      {/* row 3 — RED guardrail: order matters → Permutation, else Combination */}
      <RecallRow
        on={beat >= 3}
        dl={(d) => dl(3, d)}
        linesY={[Y3]}
        num={3}
        isRed
        lines={[t(
          "Order matters → Permutation. Just a group → Combination.",
          "Order matter kare → Permutation. Sirf group chahiye → Combination."
        )]}
      />

      {/* row 4 — plain: alike objects, circular, flip */}
      <RecallRow
        on={beat >= 4}
        dl={(d) => dl(4, d)}
        linesY={[Y4]}
        num={4}
        isRed={false}
        lines={[t(
          "Repeats among objects? Divide them out. Circle loses one: (n-1)!; a flip loses half.",
          "Objects mein repeat hain? Unhe divide karo. Circle mein ek kam: (n-1)!; flip mein aadha."
        )]}
      />

      {/* row 5 — plain: choose = reject; constraints */}
      <RecallRow
        on={beat >= 5}
        dl={(d) => dl(5, d)}
        linesY={[Y5]}
        num={5}
        isRed={false}
        lines={[t(
          "Choose = reject: nCr = nC(n-r). Constraints: include / exclude, or Total − complement.",
          "Choose = reject: nCr = nC(n-r). Constraint ho toh include/exclude karo, warna Total − complement."
        )]}
      />

      {/* row 6 — RED guardrail: identical items, distinct boxes → stars & bars */}
      <RecallRow
        on={beat >= 6}
        dl={(d) => dl(6, d)}
        linesY={[Y6]}
        num={6}
        isRed
        lines={[t(
          "Identical items into distinct boxes → stars & bars, (n+r-1)Cr.",
          "Identical items, distinct boxes mein → stars & bars, (n+r-1)Cr."
        )]}
      />

      {/* row 7 — plain, 2 lines: equal unlabelled groups; lower bounds */}
      <RecallRow
        on={beat >= 7}
        dl={(d) => dl(7, d)}
        linesY={[Y7A, Y7B]}
        num={7}
        isRed={false}
        lines={[
          t(
            "Equal unlabelled groups → divide by (number of groups)!.",
            "Equal unlabelled groups ho toh (groups ki sankhya)! se divide karo."
          ),
          t(
            "Lower bounds → pre-give the minimum.",
            "Lower bounds ho toh pehle hi minimum de do."
          ),
        ]}
      />

      {/* row 8 — plain: shapes / divisors */}
      <RecallRow
        on={beat >= 8}
        dl={(d) => dl(8, d)}
        linesY={[Y8]}
        num={8}
        isRed={false}
        lines={[t(
          "Shapes = choosing vertices. Divisor = pick an exponent per prime.",
          "Shapes = vertices choose karna. Divisor = har prime ka exponent pick karna."
        )]}
      />

      {/* row 9 — RED guardrail: at least one / none correct */}
      <RecallRow
        on={beat >= 9}
        dl={(d) => dl(9, d)}
        linesY={[Y9]}
        num={9}
        isRed
        lines={[row9Text]}
      />

      {/* closing flourish — a chapter-completion checkmark stamp beside the
          very last row (not a comment on row 9's own guardrail meaning) */}
      <Fade on={beat >= 9} delay={dl(9, 1.1)}>
        <Circle cx={checkX} cy={checkY} r={14} stroke={GREEN} strokeWidth={2} fill="none" />
      </Fade>
      <Draw
        on={beat >= 9}
        delay={dl(9, 1.35)}
        d={checkD(checkX, checkY, 16)}
        stroke={GREEN}
        sw={2.6}
        dur={0.4}
      />
    </Scene>
  );
}
