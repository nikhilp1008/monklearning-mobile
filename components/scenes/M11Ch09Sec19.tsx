/**
 * M11 Ch09 · Section 19 — "Proof: point-slope form and its descendants"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept (Proof, flagged for extra scrutiny). board_content has 8 items:
 * item[0] (heading) is the always-on title; items[1..7] (seq2..seq8) gate at beat>=1..7.
 * reveals_english = [0, 8.62, 17.24, 25.94, 34.56, 48.04, 58.62, 71.08] (8 values).
 * reveals_hinglish = [0, 7.08, 18.43, 27.05, 34.22, 45.06, 55.89, 65.02] (8 values).
 *
 * Numbers verified from JSON (hand-checked, then computed at runtime, not hardcoded):
 *   Fixed point  (x1,y1) = (1,1).  Arbitrary point (x,y) = (x2,y2) = (3,5) — genuinely ON
 *   the line: m = (y2-y1)/(x2-x1) = (5-1)/(3-1) = 4/2 = 2.
 *   Point-slope check: y - y1 = m(x-x1) => 5-1 =? 2*(3-1) => 4 = 4 ✓.
 *   Slope-intercept specialization: (x1,y1) -> (0,c). Using the SAME line (m=2 through
 *   (1,1)): c = y1 - m*x1 = 1 - 2*1 = -1, so the line crosses the y-axis at (0,-1).
 *   Verify: y - 1 = 2(x-1) => y = 2x-1; at x=0, y=-1 ✓; at x=3, y=5 ✓ (matches (x2,y2)).
 *   All of RUN, RISE, M, C_INT below are computed from X1,Y1,X2,Y2 (not hardcoded), so the
 *   board labels are guaranteed consistent with the chosen points.
 *   Screen mapping toScreen(x,y) = {x: OX+SCALE*x, y: OY-SCALE*y}, OX=230, OY=470, SCALE=55:
 *     O=(230,470)  P=(1,1)->(285,415)  Q=(3,5)->(395,195)  N=(Q.x,P.y)=(395,415)
 *     C=(0,-1)->(230,525). Line drawn from C through P,Q to a short overshoot past Q
 *     (3.15,5.3)->(403.25,178.5) — verified collinear: at P.x=285, line y=525-2*(285-230)=415 ✓;
 *     at Q.x=395, line y=525-2*(395-230)=195 ✓ (screen-space slope = -2, since +1 math-x = -55px
 *     screen-x... recompute: dy/dx screen = (178.5-525)/(403.25-230) = -346.5/173.25 = -2.0 ✓).
 *
 * Beats:
 *  0 (title, always-on)   | "Proof: Point-Slope Form"
 *  1 | text seq2 + DIAGRAM part A | setup line; axes draw, O marked, fixed point (1,1) marked
 *  2 | text seq3 + DIAGRAM part B | slope-must-equal-m line; arbitrary point (3,5) marked,
 *                                    line drawn through both, run/rise legs + computed check
 *  3 | formula seq4 (normal)      | (y-y1)/(x-x1) = m — built in two stages, working column
 *  4 | formula seq5 (HIGH, boxed) | y-y1 = m(x-x1) — landed result, boxed, + numeric check
 *  5 | text seq6 + diagram annot  | two-point-form setup; reuse (3,5) also as (x2,y2)
 *  6 | formula seq7               | y-y1 = (y2-y1)/(x2-x1)(x-x1) — two-point form + numeric
 *  7 | text seq8 + diagram annot  | (x1,y1)->(0,c); mark y-intercept (0,-1) on SAME diagram;
 *                                    land y=mx+c -> y=2x-1
 *
 * Layout plan (screen coords):
 *  title                                    | T mid script  | x540 y64  size24 RED
 *  b1 setup line                            | T mid          | x540 y100 size16 INK
 *  b2 setup line                            | T mid          | x540 y128 size15 INK
 *  --- diagram (x160..541, y155..555) ---
 *  b1 axes (full x/y, no ticks)             | CartesianAxes  | origin(230,470) 160..500/155..555
 *  b1 O dot + label                         | circle+T end   | (230,470) label x216 y490
 *  b1 P dot + label "(1, 1)"                | circle+T end   | (285,415) label x285 y390
 *  b2 Q dot + label "(3, 5)"                | circle+T start | (395,195) label x411 y189
 *  b2 line C->past Q (green)                | Draw           | (230,525)->(403.25,178.5)
 *  b2 leg PN (muted, horizontal)            | Draw           | (285,415)->(395,415)
 *  b2 leg NQ (muted, vertical)              | Draw           | (395,415)->(395,195)
 *  b2 right-angle marker at N               | rect           | x383 y403 w12 h12
 *  b2 run label "run = 3 - 1 = 2"           | T mid          | x340 y439 size12 MUTED
 *  b2 rise label "rise = 5 - 1 = 4"         | T start        | x411 y309 size12 MUTED
 *  b2 slope-check "slope = 4/2 = 2 = m"     | T start        | x411 y445 size13 GREEN_DARK
 *  --- right-hand working column (x665..1044) ---
 *  b3 formula 2-stage (amber)               | T start x670   | y170 / y202 size18
 *  b4 boxed landed result (HIGH)            | Chip           | x665 y228 w230 h50 GREEN
 *  b4 numeric check + checkD                | T+Draw         | x670 y304 size13 / checkD x908 y302
 *  b5 caption (2 lines) + Q second label    | T start x670   | y340 / y364 ; diagram x411 y218
 *  b6 formula (2 lines: symbolic + numeric) | T start x670   | y400 size15 / y426 size13
 *  b7 caption + final landed line + C mark  | T start x670   | y458 / y488 ; diagram (230,525)
 */

import React from "react";
import { Circle, Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, lineD, checkD } from "./math-kit";

const OX = 230;
const OY = 470;
const SCALE = 55;
function toScreen(x: number, y: number) {
  return { x: OX + x * SCALE, y: OY - y * SCALE };
}

const X1 = 1;
const Y1 = 1;
const X2 = 3;
const Y2 = 5;
const RUN = X2 - X1; // 2
const RISE = Y2 - Y1; // 4
const M = RISE / RUN; // 2, computed not hardcoded
const C_INT = Y1 - M * X1; // -1, computed not hardcoded

const O = { x: OX, y: OY };
const P = toScreen(X1, Y1); // (285,415)
const Q = toScreen(X2, Y2); // (395,195)
const N = { x: Q.x, y: P.y }; // (395,415)
const CPT = toScreen(0, C_INT); // (230,525) — y-intercept point
const LINE_END = toScreen(X2 + 0.15, M * (X2 + 0.15) + C_INT); // short overshoot past Q, on the same line

export default function M11Ch09Sec19({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} anchor="middle" script>
          {t("Proof: Point-Slope Form", "Proof: Point-Slope Form")}
        </T>
      </Fade>

      {/* beat 1 — setup text + diagram part A: axes, O, fixed point (x1,y1) */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={100} size={16} fill={INK} anchor="middle">
          {t(
            `Take any point (x, y) on a line of slope m through fixed point (${X1}, ${Y1}).`,
            `Slope m wali line par fixed point (${X1}, ${Y1}) se koi bhi point (x, y) lo.`
          )}
        </T>
      </Fade>

      <CartesianAxes on={beat >= 1} delay={dl(1, 0.3)} originX={OX} originY={OY} xLeft={160} xRight={500} yTop={155} yBottom={555} showTicks={false} />
      <Fade on={beat >= 1} delay={dl(1, 1.0)}>
        <Circle cx={O.x} cy={O.y} r={3} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={216} y={490} size={11} fill={MUTED} anchor="end">O</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <Circle cx={P.x} cy={P.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.75)}>
        <T x={285} y={390} size={13} fill={INK} anchor="end" weight={700}>{`(${X1}, ${Y1})`}</T>
      </Fade>

      {/* beat 2 — setup text + diagram part B: arbitrary point, line, legs, computed slope */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={128} size={15} fill={INK} anchor="middle">
          {t(
            "The slope from those two points must equal the line's own slope m.",
            "In do points se nikli slope, line ki apni slope m ke barabar honi chahiye."
          )}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <Circle cx={Q.x} cy={Q.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={411} y={189} size={13} fill={INK} anchor="start" weight={700}>{`(${X2}, ${Y2})`}</T>
      </Fade>

      <Draw on={beat >= 2} delay={dl(2, 1.1)} d={lineD(CPT.x, CPT.y, LINE_END.x, LINE_END.y)} stroke={GREEN} sw={2.4} dur={0.7} />

      <Draw on={beat >= 2} delay={dl(2, 2.0)} d={lineD(P.x, P.y, N.x, N.y)} stroke={MUTED} sw={1.6} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 2.5)} d={lineD(N.x, N.y, Q.x, Q.y)} stroke={MUTED} sw={1.6} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 3.0)}>
        <Rect x={N.x - 12} y={N.y - 12} width={12} height={12} fill="none" stroke={MUTED} strokeWidth={1.4} />
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 3.2)}>
        <T x={340} y={439} size={12} fill={MUTED} anchor="middle">{`run = ${X2} - ${X1} = ${RUN}`}</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.4)}>
        <T x={411} y={309} size={12} fill={MUTED} anchor="start">{`rise = ${Y2} - ${Y1} = ${RISE}`}</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.8)}>
        <T x={411} y={445} size={13} fill={GREEN_DARK} anchor="start" weight={700}>{`slope = ${RISE}/${RUN} = ${M} = m`}</T>
      </Fade>

      {/* beat 3 — formula, built in two stages, working column (normal emphasis) */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={670} y={170} size={18} fill={AMBER_DARK} anchor="start" weight={700}>{`(y - ${Y1}) / (x - ${X1})`}</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={670} y={202} size={18} fill={AMBER_DARK} anchor="start" weight={700}>= m</T>
      </Fade>

      {/* beat 4 — landed result, boxed (HIGH emphasis) + numeric verification */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <Chip x={665} y={228} w={230} h={50} fill="#FCF4E0" stroke={GREEN} textFill={GREEN_DARK} size={20} script={false}>
          {`y - ${Y1} = m(x - ${X1})`}
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={670} y={304} size={13} fill={INK} anchor="start">
          {`check: ${Y2} - ${Y1} = ${M}(${X2} - ${X1})  →  ${RISE} = ${M * RUN}`}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.9)} d={checkD(908, 302, 16)} stroke={GREEN} sw={2.4} dur={0.4} />

      {/* beat 5 — two-point-form setup: reuse (x,y) as (x2,y2) */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={670} y={340} size={14} fill={INK} anchor="start">
          {t(
            "Put a second point (x2, y2) in place of m —",
            "m ki jagah ek second point (x2, y2) rakho —"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={670} y={364} size={14} fill={INK} anchor="start">
          {t("that's the two-point form.", "yehi two-point form ban jaata hai.")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.0)}>
        <T x={411} y={218} size={12} fill={MUTED} anchor="start">(x2, y2)</T>
      </Fade>

      {/* beat 6 — two-point form, symbolic then numeric substitution */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={670} y={400} size={15} fill={INK} anchor="start" weight={700}>
          {`y - y1 = (y2 - y1)/(x2 - x1) (x - x1)`}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={670} y={426} size={13} fill={MUTED} anchor="start">
          {`y - ${Y1} = (${Y2} - ${Y1})/(${X2} - ${X1}) (x - ${X1}) = ${M}(x - ${X1})`}
        </T>
      </Fade>

      {/* beat 7 — slope-intercept specialization: (x1,y1) -> (0,c); mark on SAME diagram */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <Circle cx={CPT.x} cy={CPT.y} r={4.5} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={244} y={530} size={13} fill={AMBER_DARK} anchor="start" weight={700}>{`(0, ${C_INT})`}</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={670} y={458} size={14} fill={INK} anchor="start">
          {t(`Set (x1, y1) = (0, c):`, `(x1, y1) ko (0, c) set karo:`)}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.1)}>
        <T x={670} y={488} size={18} fill={GREEN_DARK} anchor="start" weight={700}>
          {`y = mx + c  →  y = ${M}x ${C_INT >= 0 ? "+" : "-"} ${Math.abs(C_INT)}`}
        </T>
      </Fade>
    </Scene>
  );
}
