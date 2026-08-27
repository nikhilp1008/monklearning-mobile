/**
 * M11 Ch09 · Section 48 — "Worked examples: both bisectors and the origin's bisector"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples · subtopic "Angle Bisectors". 9 board_content beats (one more
 * than the usual 8). No diagram/svg needed — pure algebra (bisector formulas). Two independent
 * examples, ERASE-AND-REUSE pivot in a single centered column (same idiom as Sec29's Part A/Part B
 * pivot) rather than side-by-side panels, because this section is dense text/formula, not
 * geometry — a single reused column keeps every line legible instead of shrinking two columns.
 *
 * Numbers verified (independently re-derived, all match the given board_content):
 *  Example 1 — bisectors of 3x - 4y + 7 = 0 and 5x + 12y - 2 = 0.
 *   sqrt(3²+4²) = sqrt(25) = 5.  sqrt(5²+12²) = sqrt(169) = 13.
 *   Bisector equation: (3x-4y+7)/5 = ±(5x+12y-2)/13.
 *   '+' sign: 13(3x-4y+7) = 5(5x+12y-2) -> 39x-52y+91 = 25x+60y-10 -> 14x-112y+101 = 0. ✓
 *   '-' sign: 13(3x-4y+7) = -5(5x+12y-2) -> 39x-52y+91 = -25x-60y+10 -> 64x+8y+81 = 0. ✓
 *  Example 2 — origin's bisector of 4x + 3y - 6 = 0 and 5x + 12y + 9 = 0.
 *   First line's constant c=-6 is negative -> rewrite as -4x - 3y + 6 = 0 (c=+6, positive).
 *   Second line already has c=+9 (positive) — untouched.
 *   sqrt(4²+3²)=5.  sqrt(5²+12²)=13.
 *   Origin's side = '+' sign: 13(-4x-3y+6) = 5(5x+12y+9) -> -52x-39y+78 = 25x+60y+45
 *     -> -77x-99y+33 = 0 -> divide by -11 -> 7x+9y-3 = 0. ✓ exact match.
 *
 * Beat-index: board_content has 9 items. item[0] (heading) -> always-on title. items[1..8]
 * gate at beat>=1..8. reveals_english=[0,6.49,16.81,29.78,39.85,50.01,63.66,76.8,89.0] (9 values).
 * reveals_hinglish=[0,5.72,16.3,32.26,44.54,53.93,65.54,79.19,90.03].
 *
 * Beats:
 *  0(title, always-on) | "Worked: Both Bisectors & the Origin's"
 *  1 | Ex1 statement (given lines) + underline (drawn action: teacher underlines the given data)
 *  2 | Ex1 ± bisector equation set up + connecting arrow from statement
 *  3 | Ex1 '+' sign result + connecting arrow from the ± equation
 *  4 | Ex1 '-' sign result — HIGH emphasis, GREEN landed chip (final answer of Ex1)
 *      -> at beat 5 Example 1 fully vacates (opacity 0), Example 2 reuses the same rows
 *  5 | Ex2 statement (origin's bisector, given lines) + underline
 *  6 | RED-MARGIN GUARDRAIL (HIGH): make constants positive, rewrite first line + red underline
 *  7 | Ex2 ± bisector equation (already the '+' / origin's side) + connecting arrow from guardrail
 *  8 | Ex2 landed result — HIGH emphasis, GREEN boxed final answer
 *
 * Layout plan (single centered column, x=540, reused for both examples — erase/reuse pivot):
 *  title (always-on)                  | T mid script24 red      | x540 y64  box y32.8..76
 *  R1  statement (Ex1 b1 / Ex2 b5)    | T mid16 ink              | x540 y120 box y107.5..125
 *  underline under R1                 | Draw ink                 | y132, half-width = 0.25*16*len(text)
 *  arrow R1->R2 (Ex1 b2 only)         | Draw arrowD ink          | x540 y142->164
 *  R2  Ex1 ± formula (b2)             | T mid19 w700 ink         | x540 y190 box y175.2..195.9 (28 chars, halfW 133 -> x407..673)
 *  R2  Ex2 guardrail (b6, HIGH)       | T mid16 w700 red         | x540 y190 box y177.5..195.0
 *  red underline under guardrail      | Draw red                 | y200, half-width = 0.25*16*len(text)
 *  arrow R2->R3 (Ex1 b3)              | Draw arrowD ink          | x540 y206->226
 *  arrow guardrail->R3 (Ex2 b7)       | Draw arrowD ink          | x540 y210->225
 *  R3  Ex1 '+' result (b3)            | T mid17 w700 ink         | x540 y250 box y236.7..255.3 (30 chars, halfW 127.5 -> x412.5..667.5)
 *  R3  Ex2 ± formula (b7)             | T mid19 w700 ink         | x540 y250 box y235.2..255.9 (29 chars, halfW 137.75 -> x402..678)
 *  Chip Ex1 '-' result (b4, HIGH)     | Chip green/cream size20  | x392 y310 w296 h48 (27 chars, textW 270)
 *  Chip Ex2 landed result (b8, HIGH)  | Chip green/cream size20  | x452 y310 w176 h48 (15 chars, textW 150)
 *  All rows share the same y-band across examples (erase-and-reuse): ex1On = beat>=1 && beat<5
 *  vacates Example 1 fully (opacity 0, not dimmed) so Example 2's b5-b8 content can safely reuse
 *  the identical (x,y) positions with zero overlap risk (verifier's `shown()` excludes opacity<=0.05).
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
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { lineD } from "./math-kit";

const TITLE_Y = 64;
const R1_Y = 120;
const UNDERLINE1_Y = 132;
const ARROW2_Y1 = 142;
const ARROW2_Y2 = 164;
const R2_Y = 190;
const GUARDRAIL_UNDERLINE_Y = 200;
const ARROW3_Y1 = 206;
const ARROW3_Y2 = 226;
const ARROW7_Y1 = 210;
const ARROW7_Y2 = 225;
const R3_Y = 250;
const CHIP_TOP = 310;
const CHIP_H = 48;

/** Half-width of a centered non-script (Anek) text box, per SCENE_AUTHORING.md's
 * width ≈ 0.50 × size × chars estimate — used to size decorative underlines to
 * whichever language's string is actually on screen. */
function halfW(size: number, text: string): number {
  return 0.25 * size * text.length;
}

export default function M11Ch09Sec48({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const ex1On = beat >= 1 && beat < 5; // Example 1 lives on beats 1-4, then vacates
  const ex2On = beat >= 5; // Example 2 takes over the same rows from beat 5

  const r1Text = t(
    "Example 1: bisectors of 3x - 4y + 7 = 0 and 5x + 12y - 2 = 0.",
    "Example 1: 3x - 4y + 7 = 0 aur 5x + 12y - 2 = 0 ke bisectors."
  );
  const r5Text = t(
    "Example 2: origin's bisector of 4x + 3y - 6 = 0 and 5x + 12y + 9 = 0.",
    "Example 2: 4x + 3y - 6 = 0 aur 5x + 12y + 9 = 0 ka origin wala bisector."
  );
  const r6Text = t(
    "Make constants positive: rewrite the first as -4x - 3y + 6 = 0.",
    "Constants ko positive banao: pehli ko -4x - 3y + 6 = 0 likho."
  );

  const r1Half = halfW(16, r1Text);
  const r5Half = halfW(16, r5Text);
  const r6Half = halfW(16, r6Text);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={TITLE_Y} size={24} fill={RED} anchor="middle" script>
          {t("Worked: Both Bisectors & the Origin's", "Worked: Dono Bisectors aur Origin Wala Bisector")}
        </T>
      </Fade>

      {/* ===================== EXAMPLE 1 (beats 1-4) ===================== */}

      {/* beat 1 — statement (given lines) + underline */}
      <Fade on={ex1On} delay={dl(1, 0)}>
        <T x={540} y={R1_Y} size={16} fill={INK} anchor="middle">
          {r1Text}
        </T>
      </Fade>
      <Draw
        on={ex1On}
        delay={dl(1, 0.5)}
        d={lineD(540 - r1Half, UNDERLINE1_Y, 540 + r1Half, UNDERLINE1_Y)}
        stroke={INK}
        sw={2}
        dur={0.5}
      />

      {/* beat 2 — ± bisector equation, arrow from the statement */}
      <Draw on={ex1On && beat >= 2} delay={dl(2, 0)} d={arrowD(540, ARROW2_Y1, 540, ARROW2_Y2)} stroke={INK} sw={2.2} dur={0.4} />
      <Fade on={ex1On && beat >= 2} delay={dl(2, 0.5)}>
        <T x={540} y={R2_Y} size={19} fill={INK} anchor="middle" weight={700}>
          (3x-4y+7)/5 = ±(5x+12y-2)/13
        </T>
      </Fade>

      {/* beat 3 — '+' sign result, arrow from the ± equation */}
      <Draw on={ex1On && beat >= 3} delay={dl(3, 0)} d={arrowD(540, ARROW3_Y1, 540, ARROW3_Y2)} stroke={INK} sw={2.2} dur={0.4} />
      <Fade on={ex1On && beat >= 3} delay={dl(3, 0.5)}>
        <T x={540} y={R3_Y} size={17} fill={INK} anchor="middle" weight={700}>
          '+' sign: 14x - 112y + 101 = 0
        </T>
      </Fade>

      {/* beat 4 — '-' sign result, HIGH emphasis, GREEN landed chip */}
      <Fade on={ex1On && beat >= 4} delay={dl(4, 0)}>
        <Chip x={392} y={CHIP_TOP} w={296} h={CHIP_H} fill={CREAM} stroke={GREEN} textFill={GREEN} size={20} script={false}>
          '-' sign: 64x + 8y + 81 = 0
        </Chip>
      </Fade>

      {/* ===================== EXAMPLE 2 (beats 5-8, reuses the same rows) ===================== */}

      {/* beat 5 — statement (origin's bisector, given lines) + underline */}
      <Fade on={ex2On} delay={dl(5, 0)}>
        <T x={540} y={R1_Y} size={16} fill={INK} anchor="middle">
          {r5Text}
        </T>
      </Fade>
      <Draw
        on={ex2On}
        delay={dl(5, 0.5)}
        d={lineD(540 - r5Half, UNDERLINE1_Y, 540 + r5Half, UNDERLINE1_Y)}
        stroke={INK}
        sw={2}
        dur={0.5}
      />

      {/* beat 6 — RED-MARGIN GUARDRAIL (HIGH): make constants positive + red underline */}
      <Fade on={ex2On && beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={R2_Y} size={16} fill={RED} anchor="middle" weight={700}>
          {r6Text}
        </T>
      </Fade>
      <Draw
        on={ex2On && beat >= 6}
        delay={dl(6, 0.6)}
        d={lineD(540 - r6Half, GUARDRAIL_UNDERLINE_Y, 540 + r6Half, GUARDRAIL_UNDERLINE_Y)}
        stroke={RED}
        sw={2.4}
        dur={0.4}
      />

      {/* beat 7 — ± bisector equation (origin's / '+' side), arrow from the guardrail */}
      <Draw on={ex2On && beat >= 7} delay={dl(7, 0)} d={arrowD(540, ARROW7_Y1, 540, ARROW7_Y2)} stroke={INK} sw={2.2} dur={0.4} />
      <Fade on={ex2On && beat >= 7} delay={dl(7, 0.5)}>
        <T x={540} y={R3_Y} size={19} fill={INK} anchor="middle" weight={700}>
          (-4x-3y+6)/5 = +(5x+12y+9)/13
        </T>
      </Fade>

      {/* beat 8 — landed result, HIGH emphasis, GREEN boxed final answer */}
      <Fade on={ex2On && beat >= 8} delay={dl(8, 0)}>
        <Chip x={452} y={CHIP_TOP} w={176} h={CHIP_H} fill={CREAM} stroke={GREEN} textFill={GREEN} size={20} script={false}>
          7x + 9y - 3 = 0
        </Chip>
      </Fade>
    </Scene>
  );
}
