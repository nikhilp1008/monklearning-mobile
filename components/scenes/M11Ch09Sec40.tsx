/**
 * M11 Ch09 · Section 40 — "Worked examples: intersection and concurrency"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — subtopic "Point of Intersection, Concurrency and Family of Lines".
 *
 * Numbers verified from JSON (independently re-derived):
 *  Example 1: line1 2x+3y-8=0, line2 x-y+1=0. From line2, x=y-1. Sub into line1:
 *    2(y-1)+3y-8=0 -> 5y-10=0 -> y=2, x=1. Check: 2(1)+3(2)-8=0 OK; 1-2+1=0 OK.
 *    Diagram points (for the illustration, not part of the algebra shown): line1
 *    also passes through (4,0) [2*4+3*0-8=0 OK]; line2 also through (-1,0)
 *    [-1-0+1=0 OK]. Drawn segments extend a bit past those (still exactly on
 *    each line, only for visual length so the two lines read as an "X" crossing,
 *    not two rays meeting at a corner): line1 (-2,4)->(7,-2)
 *    [2(-2)+3(4)-8=0 OK, 2(7)+3(-2)-8=0 OK]; line2 (-2,-1)->(4,5)
 *    [(-2)-(-1)+1=0 OK, 4-5+1=0 OK].
 *  Example 2: det |1 1 -2; 2 -1 -1; 4 -1 -5|, expand along the top row:
 *    1*[(-1)(-5)-(-1)(-1)] - 1*[(2)(-5)-(-1)(4)] + (-2)*[(2)(-1)-(-1)(4)]
 *    = 1*(5-1) - 1*(-10+4) + (-2)*(-2+4) = 4 - (-6) + (-4) = 6. Matches JSON's
 *    own "4-(-6)-4=6" exactly. det=6≠0 -> the three lines are NOT concurrent.
 *
 * board_content has 8 items; item[0] (heading) is the always-on title. Items
 * seq2..seq8 gate at beat>=1..beat>=7 (reveals arrays have 8 entries, matching).
 *
 * TWO-COLUMN layout (Example 1 left / Example 2 right — two worked examples
 * live side by side like a two-problem notes page; the columns never compete
 * for the same board space, so nothing needs to be dimmed or erased):
 *  title (always on)                                | T script mid | x540 y62
 *  b1 | Ex.1 problem line1                           | T mid | x270 y96
 *  b1 | Ex.1 problem line2 (equations)                | T mid | x270 y120
 *  b2 | algebra step (single line)                    | T mid | x270 y158
 *  b3 | axes c(200,363) 110..440 / 185..445            | CartesianAxes (no ticks)
 *  b3 | O dot + label                                 | circle+T | (200,363) label x186 y378 end
 *  b3 | line1 Draw (ink)  (136,235)->(424,427)          | Draw
 *  b3 | line2 Draw (amber_dark) (136,395)->(328,203)    | Draw
 *  b3 | "L1"/"L2" tags                                  | T end | x122 y222 / x122 y410
 *  b3 | intersection dot (green) (232,299)               | circle
 *  b3 | "(1, 2)" label                                   | T mid | x232 y335
 *  b3 | chip "(x, y) = (1, 2)"                            | Chip | x190 y460 w160 h34
 *  b4 | Ex.2 problem line1/2/3                            | T mid | x780 y96/118/140
 *  b5 | determinant bars x695 & x865, y200..360             | Draw x2
 *  b5 | 9 grid values, cols 725/780/835, rows 235/280/325   | T x9
 *  b5 | "=" then "6"                                        | T x2 | x888 / x912  y286
 *  b6 | red bar x610 y390..430                                | Draw
 *  b6 | guardrail line1/line2                                 | T start | x626 y407 / y429
 *  b6 | ring around "6"                                        | Draw (ringD)
 *  b7 | "+  −  +" over the top row                              | T x3 | x725/780/835 y207
 *  b7 | caption (script, amber_dark)                             | T mid | x780 y470
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
  Chip,
  ringD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, lineD } from "./math-kit";

// --- Example 1 diagram screen mapping ---
const OX = 200;
const OY = 363;
const SCALE = 32;
function toScreen(x: number, y: number) {
  return { x: OX + x * SCALE, y: OY - y * SCALE };
}
const L1_A = toScreen(-2, 4); // (136,235)
const L1_B = toScreen(7, -2); // (424,427)
const L2_A = toScreen(-2, -1); // (136,395)
const L2_B = toScreen(4, 5); // (328,203)
const IXN = toScreen(1, 2); // (232,299)

// --- Example 2 determinant grid geometry ---
const GX = 780; // grid center x
const COL = [725, 780, 835];
const ROW = [235, 280, 325];
const BAR_L = 695;
const BAR_R = 865;
const BAR_TOP = 200;
const BAR_BOT = 360;
const MATRIX = [
  [1, 1, -2],
  [2, -1, -1],
  [4, -1, -5],
];

export default function M11Ch09Sec40({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={24} fill={RED} anchor="middle" script>
          {t("Worked: Intersection & Concurrency", "Worked: Intersection aur Concurrency")}
        </T>
      </Fade>

      {/* ================= LEFT COLUMN — Example 1 ================= */}

      {/* beat 1 — problem statement */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={270} y={96} size={15} fill={INK} anchor="middle">
          {t("Example 1: intersection of", "Example 1: intersection nikaalo —")}
        </T>
        <T x={270} y={120} size={15} fill={INK} anchor="middle">
          2x + 3y - 8 = 0 {t("and", "aur")} x - y + 1 = 0
        </T>
      </Fade>

      {/* beat 2 — algebra step (formula, language-agnostic) */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={270} y={158} size={14} fill={INK} anchor="middle">
          x = y - 1  ⇒  2(y-1) + 3y - 8 = 0  ⇒  5y = 10
        </T>
      </Fade>

      {/* beat 3 — THE DIAGRAM: axes, two lines, intersection point, boxed answer */}
      <CartesianAxes on={beat >= 3} delay={dl(3, 0)} originX={OX} originY={OY} xLeft={110} xRight={440} yTop={185} yBottom={445} showTicks={false} />
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Circle cx={OX} cy={OY} r={3} fill={INK} />
        <T x={186} y={378} size={11} fill={MUTED} anchor="end">O</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.6)} d={lineD(L1_A.x, L1_A.y, L1_B.x, L1_B.y)} stroke={INK} sw={2.2} dur={0.7} />
      <Fade on={beat >= 3} delay={dl(3, 1.3)}>
        <T x={122} y={222} size={11} fill={INK} anchor="end" weight={700}>L1</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.6)} d={lineD(L2_A.x, L2_A.y, L2_B.x, L2_B.y)} stroke={AMBER_DARK} sw={2.2} dur={0.7} />
      <Fade on={beat >= 3} delay={dl(3, 2.3)}>
        <T x={122} y={410} size={11} fill={AMBER_DARK} anchor="end" weight={700}>L2</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.7)}>
        <Circle cx={IXN.x} cy={IXN.y} r={5} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.1)}>
        <T x={232} y={335} size={13} fill={GREEN} anchor="middle" weight={700}>(1, 2)</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.6)}>
        <Chip x={190} y={460} w={160} h={34} fill="#FCF4E0" stroke={GREEN} textFill={GREEN} size={17} script={false}>
          (x, y) = (1, 2)
        </Chip>
      </Fade>

      {/* ================= RIGHT COLUMN — Example 2 ================= */}

      {/* beat 4 — problem statement */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={780} y={96} size={14} fill={INK} anchor="middle">
          {t("Example 2: are the three lines", "Example 2: kya teen lines")}
        </T>
        <T x={780} y={118} size={14} fill={INK} anchor="middle">
          x + y - 2 = 0,  2x - y - 1 = 0,
        </T>
        <T x={780} y={140} size={14} fill={INK} anchor="middle">
          4x - y - 5 = 0  {t("concurrent?", "concurrent hain?")}
        </T>
      </Fade>

      {/* beat 5 — THE DETERMINANT GRID */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={lineD(BAR_L, BAR_TOP, BAR_L, BAR_BOT)} stroke={INK} sw={2.4} dur={0.5} />
      <Draw on={beat >= 5} delay={dl(5, 0.3)} d={lineD(BAR_R, BAR_TOP, BAR_R, BAR_BOT)} stroke={INK} sw={2.4} dur={0.5} />
      {MATRIX.map((row, r) => (
        <Fade key={r} on={beat >= 5} delay={dl(5, 0.7 + r * 0.35)}>
          {row.map((val, c) => (
            <T key={c} x={COL[c]} y={ROW[r] + 6} size={19} fill={INK} anchor="middle" weight={700}>
              {val}
            </T>
          ))}
        </Fade>
      ))}
      <Fade on={beat >= 5} delay={dl(5, 1.9)}>
        <T x={888} y={286} size={22} fill={INK} anchor="start" weight={700}>=</T>
        <T x={912} y={286} size={22} fill={AMBER_DARK} anchor="start" weight={700}>6</T>
      </Fade>

      {/* beat 6 — guardrail: determinant ≠ 0, NOT concurrent */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d={lineD(610, 390, 610, 430)} stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={626} y={407} size={15} fill={RED} anchor="start" weight={700}>
          {t("Determinant is 6 ≠ 0 —", "Determinant hai 6 ≠ 0 —")}
        </T>
        <T x={626} y={429} size={15} fill={RED} anchor="start" weight={700}>
          {t("the lines are NOT concurrent.", "teenon lines concurrent NAHI hain.")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.1)} d={ringD(917, 280, 20, 24)} stroke={RED} sw={2.2} dur={0.6} />

      {/* beat 7 — anchor the +, −, + sign pattern across the top row */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={725} y={207} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>+</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={780} y={207} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>−</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={835} y={207} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>+</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.1)}>
        <T x={780} y={470} size={14} fill={AMBER_DARK} anchor="middle" script>
          {t("Anchor +, −, + across the top row.", "Top row mein +, −, + pattern anchor karo.")}
        </T>
      </Fade>
    </Scene>
  );
}
