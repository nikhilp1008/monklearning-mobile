/**
 * M11 Ch09 · Section 18 — "Six costumes for one line"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — OPENS Subtopic 3 (Equations of a Line). 8 board_content items:
 * item[0]=heading (always-on title), items[1..7] gate at beat>=1..7.
 * reveals_english [0, 7.68, 13.99, 26.54, 39.77, 51.8, 60.59, 70.74] (8 values).
 * reveals_hinglish [0, 6.74, 12.37, 23.13, 35.58, 47.45, 57.0, 67.07] (8 values).
 *
 * Beats:
 *  0(title, always-on) | "Six Costumes for One Line"
 *  1 | text: a line is the simplest curve, yet wears six different forms
 *  2 | text: each form answers a different clue (point+dir / two points / intercepts / distance)
 *  3 | THE DIAGRAM: one line labelled four ways at once — intercepts A,B / point P / perpendicular
 *      ON with foot N and angle ω
 *  4 | land (green card, right margin): all six are dialects of Ax+By+C=0, concretely 2x+3y-12=0
 *  5 | guardrail (red card, right margin): slope-intercept/point-slope can't do a vertical line
 *  6 | guardrail (red card, right margin): intercept form breaks at origin / parallel-to-axis
 *  7 | closing: the skill is translating between forms, not memorising six
 *
 * Chosen illustrative line: x/6 + y/4 = 1, i.e. 2x + 3y - 12 = 0 (A_coef=2,B_coef=3,C_coef=-12).
 * HAND-VERIFIED (also re-checked by node script before authoring):
 *   x-intercept A(6,0), y-intercept B(0,4).
 *   P(3,2) on line: 2(3)+3(2)-12 = 6+6-12 = 0 ✓ (P is in fact the midpoint of A,B — a property of
 *   intercept form: (a/2,b/2) always satisfies x/a+y/b=1).
 *   norm = √(2²+3²) = √13 ≈ 3.6056.
 *   p = |C|/norm = 12/√13 ≈ 3.328.
 *   cosω = 2/√13 ≈ 0.5547, sinω = 3/√13 ≈ 0.8321, ω = atan2(3,2) ≈ 0.9828 rad ≈ 56.31°.
 *   Foot N = (-A·C/norm², -B·C/norm²) = (24/13, 36/13) ≈ (1.8462, 2.7692).
 *   Check N on line: 2(1.8462)+3(2.7692)-12 ≈ 0 ✓. |ON| = p ✓ (verified in px below).
 *
 * toScreen(x,y) = {x: 250+60x, y: 460-60y}  (OX=250, OY=460, SCALE=60)
 *   O=(250,460)  A(6,0)->(610,460)  B(0,4)->(250,220)  P(3,2)->(430,340)
 *   N(24/13,36/13)->(360.77,293.85)   |O-N|px = 199.69 = p·SCALE (3.328·60=199.69) ✓
 * Line AB screen equation: 2x - 3y + 160 = 0 (verified both A,B satisfy it).
 *
 * Layout plan:
 *  b0 | title (23,red,script)                 | T mid | x540 y62
 *  b1 | text (16,ink)                          | T mid | x540 y96
 *  b2 | text 2-line (14,ink)                   | T mid | x540 y122 / y146
 *  b3 | axes O(250,460) x205..665 y165..485    | CartesianAxes (no ticks)
 *  b3 | line A-B (green)                       | Draw | (610,460)-(250,220)
 *  b3 | A dot+label "A(6, 0)"                  | circle+T | (610,460) label x610 y482 mid
 *  b3 | B dot+label "B(0, 4)"                  | circle+T | (250,220) label x234 y225 end
 *  b3 | P dot+label "P(3, 2)"                  | circle+T | (430,340) label x448 y324 start
 *  b3 | ON segment (MUTED, dashed-substitute)  | Draw | (250,460)-(360.77,293.85)
 *  b3 | N dot+label "N"                        | circle+T | (360.77,293.85) label x372 y277 start
 *  b3 | "p" label (amber_dark)                 | T mid | x290 y367
 *  b3 | O dot+label "O"                        | circle+T | (250,460) label x234 y482 end
 *  b3 | angle arc ω (amber_dark, r38, 0..56.3°)| Draw | angleArcD(250,460,38,0,OMEGA)
 *  b3 | "ω" label (amber_dark)                 | T mid | x297 y435
 *  b4 | green card 3-line   | Draw+T | box x700..1020 y170..265, lines y200/222/244
 *  b5 | red card 3-line     | Draw+T | box x700..1020 y289..384, lines y321/343/365
 *  b6 | red card 3-line     | Draw+T | box x700..1020 y408..503, lines y440/462/484
 *  b7 | closing (15,amber_dark,script) | T mid | x540 y560
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
  MUTED,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, lineD, angleArcD, roundRectD } from "./math-kit";

/* verified line geometry — see header comment */
const A_COEF = 2;
const B_COEF = 3;
const C_COEF = -12;
const NORM = Math.sqrt(A_COEF * A_COEF + B_COEF * B_COEF); // √13
const OMEGA = Math.atan2(B_COEF, A_COEF); // ≈0.9828 rad ≈56.31°
const N_MATH = {
  x: (-A_COEF * C_COEF) / (NORM * NORM), // 24/13
  y: (-B_COEF * C_COEF) / (NORM * NORM), // 36/13
};

const OX = 250;
const OY = 460;
const SCALE = 60;
function toScreen(x: number, y: number) {
  return { x: OX + x * SCALE, y: OY - y * SCALE };
}

const O = { x: OX, y: OY };
const Apt = toScreen(6, 0); // (610,460)
const Bpt = toScreen(0, 4); // (250,220)
const Ppt = toScreen(3, 2); // (430,340)
const Npt = toScreen(N_MATH.x, N_MATH.y); // (360.77,293.85)
const ARC_R = 38;

/** Right-margin callout card: box draws first, then its lines fade in — matches
 * Sec17's Card convention (thing first, name second). */
function Callout({
  on,
  delay,
  x,
  y,
  w,
  h,
  stroke,
  cx,
  lines,
  textFill,
  size = 13,
}: {
  on: boolean;
  delay: number;
  x: number;
  y: number;
  w: number;
  h: number;
  stroke: string;
  cx: number;
  lines: [string, number][];
  textFill: string;
  size?: number;
}) {
  return (
    <>
      <Draw on={on} delay={delay} d={roundRectD(x, y, w, h)} stroke={stroke} sw={2} dur={0.6} />
      <Fade on={on} delay={delay + 0.7}>
        {lines.map(([txt, ty], i) => (
          <T key={i} x={cx} y={ty} size={size} fill={textFill} anchor="middle" weight={700}>
            {txt}
          </T>
        ))}
      </Fade>
    </>
  );
}

export default function M11Ch09Sec18({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={23} fill={RED} anchor="middle" script>
          {t("Six Costumes for One Line", "Ek Line, Chhah Costumes")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={96} size={16} fill={INK} anchor="middle">
          {t(
            "A line is the simplest curve, yet it can wear six different forms.",
            "Line sabse simple curve hai, phir bhi chhah alag forms mein aa sakti hai."
          )}
        </T>
      </Fade>

      {/* beat 2 — two-line clue sentence */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={122} size={14} fill={INK} anchor="middle">
          {t(
            "Each form answers a different clue: a point and a direction,",
            "Har form ek alag clue ka jawaab deta hai: point-direction,"
          )}
        </T>
        <T x={540} y={146} size={14} fill={INK} anchor="middle">
          {t(
            "two points, the intercepts, or the distance from the origin.",
            "do points, intercepts, ya origin se distance."
          )}
        </T>
      </Fade>

      {/* beat 3 — THE DIAGRAM: one line, four descriptions at once */}
      <CartesianAxes on={beat >= 3} delay={dl(3, 0)} originX={OX} originY={OY} xLeft={205} xRight={665} yTop={165} yBottom={485} showTicks={false} />

      <Draw on={beat >= 3} delay={dl(3, 1.1)} d={lineD(Bpt.x, Bpt.y, Apt.x, Apt.y)} stroke={GREEN} sw={2.6} dur={0.6} />

      <Fade on={beat >= 3} delay={dl(3, 1.9)}>
        <Circle cx={Apt.x} cy={Apt.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.1)}>
        <T x={610} y={482} size={13} fill={INK} anchor="middle" weight={700}>A(6, 0)</T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 2.4)}>
        <Circle cx={Bpt.x} cy={Bpt.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.6)}>
        <T x={234} y={225} size={13} fill={INK} anchor="end" weight={700}>B(0, 4)</T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 2.9)}>
        <Circle cx={Ppt.x} cy={Ppt.y} r={4.5} fill={INK} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.1)}>
        <T x={448} y={324} size={13} fill={INK} anchor="start" weight={700}>P(3, 2)</T>
      </Fade>

      {/* perpendicular ON — dashed-substitute MUTED (Draw's dasharray slot is used for reveal) */}
      <Draw on={beat >= 3} delay={dl(3, 3.5)} d={lineD(O.x, O.y, Npt.x, Npt.y)} stroke={MUTED} sw={1.8} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 4.1)}>
        <Circle cx={Npt.x} cy={Npt.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.3)}>
        <T x={372} y={277} size={12} fill={INK} anchor="start" weight={700}>N</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.5)}>
        <T x={290} y={367} size={14} fill={AMBER_DARK} anchor="middle" weight={700}>p</T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 4.9)}>
        <Circle cx={O.x} cy={O.y} r={3.5} fill={INK} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5.1)}>
        <T x={234} y={482} size={12} fill={MUTED} anchor="end">O</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 5.4)} d={angleArcD(O.x, O.y, ARC_R, 0, OMEGA)} stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 6.0)}>
        <T x={297} y={435} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>ω</T>
      </Fade>

      {/* beat 4 — land: all six are dialects of the general form (right margin) */}
      <Callout
        on={beat >= 4}
        delay={dl(4, 0)}
        x={700}
        y={170}
        w={320}
        h={95}
        stroke={GREEN}
        cx={860}
        textFill={GREEN_DARK}
        lines={[
          [t("All six are dialects of one sentence:", "Chhah hi asal mein ek sentence ke"), 200],
          [t("the general form Ax + By + C = 0.", "dialects hain: Ax + By + C = 0."), 222],
          [t("Here: 2x + 3y - 12 = 0.", "Yahaan: 2x + 3y - 12 = 0."), 244],
        ]}
      />

      {/* beat 5 — guardrail: vertical line breaks slope-intercept / point-slope */}
      <Callout
        on={beat >= 5}
        delay={dl(5, 0)}
        x={700}
        y={289}
        w={320}
        h={95}
        stroke={RED}
        cx={860}
        textFill={RED}
        lines={[
          [t("Slope-intercept and point-slope", "Slope-intercept aur point-slope"), 321],
          [t("can't describe a vertical line -", "vertical line describe nahi"), 343],
          [t("slope is undefined there.", "kar sakte - slope undefined hai."), 365],
        ]}
      />

      {/* beat 6 — guardrail: intercept form breaks at origin / parallel-to-axis */}
      <Callout
        on={beat >= 6}
        delay={dl(6, 0)}
        x={700}
        y={408}
        w={320}
        h={95}
        stroke={RED}
        cx={860}
        textFill={RED}
        lines={[
          [t("Intercept form breaks for a line", "Intercept form tab tootta hai jab"), 440],
          [t("through the origin or parallel", "line origin se guzre ya kisi axis"), 462],
          [t("to an axis.", "ke parallel ho."), 484],
        ]}
      />

      {/* beat 7 — closing */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={560} size={15} fill={AMBER_DARK} anchor="middle" script>
          {t(
            "The real exam skill is translating fluently between forms, not memorising six.",
            "Asli exam skill hai forms ke beech fluently translate karna, chhah ratna nahi."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
