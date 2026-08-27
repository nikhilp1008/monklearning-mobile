/**
 * M11 Ch09 · Section 11 — "Proof: slope = rise over run, and perpendicularity"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept (Proof). board_content has 8 items: item[0] (heading) is the
 * always-on title; items[1..7] (seq2..seq8) gate at beat>=1..7.
 * reveals_english = [0, 7.08, 20.39, 35.07, 48.9, 62.29, 75.01, 88.06] (8 values).
 *
 * Numbers verified from JSON (hand-checked, see /tmp verify script during authoring):
 *   Illustrative points (not given by the JSON — chosen so P is lower-left, Q is
 *   upper-right, a rising line, matching the raw SVG's rough layout):
 *   P = (1,1), Q = (5,4) in math units.  run = Qx-Px = 4, rise = Qy-Py = 3,
 *   slope = rise/run = 0.75, theta = atan(0.75) = 36.8699° (a clean 3-4-5 triangle).
 *   N = (Qx, Py) = (5,1) — the right-angle vertex.
 *   Screen mapping toScreen(x,y) = {x: OX+SCALE*x, y: OY-SCALE*y}, OX=170, OY=480, SCALE=60:
 *     P -> (230,420)   Q -> (470,240)   N -> (Q.x, P.y) = (470,420).
 *   Verified: N.y === P.y (PN horizontal) and N.x === Q.x (NQ vertical).
 *   Right angle at N confirmed by dot product: vector N->P = (-240,0), N->Q = (0,-180),
 *   dot = (-240*0)+(0*-180) = 0 -> perpendicular, right angle genuinely sits at N.
 *   theta is computed at runtime as Math.atan2(RISE,RUN) (not hardcoded) so the arc/label
 *   stay exactly consistent with P/Q/N — evaluates to the same 36.8699° verified above.
 *   Perpendicular-slope algebra (symbolic, carried by beats 6-7, no second diagram — the
 *   task brief marks a second illustrative perpendicular line as optional/skippable):
 *     m1 = tan(theta1). theta2 = theta1+90 deg => m2 = tan(theta1+90) = -cot(theta1) = -1/m1
 *     => m1*m2 = -1.
 *
 * Beats:
 *  0 (title, always-on)      | "Proof: Slope = Rise over Run"
 *  1 | text  seq2   | setup: build right triangle QPN through P,Q with PN horizontal
 *  2 | THE DIAGRAM seq3 | axis -> P -> Q -> line PQ -> N (legs+marker) -> run label ->
 *                          rise label -> theta arc, staggered "one hand"
 *  3 | formula seq4 (HIGH) | tan theta = QN/PN = (y2-y1)/(x2-x1), built term by term,
 *                             lands in a right-hand "working column" beside the diagram
 *  4 | text  seq5   | degenerate case: x1=x2 => run=0 => undefined slope
 *  5 | text  seq6   | perpendicularity setup: theta2 = theta1 + 90 deg
 *  6 | formula seq7 | m2 = tan(theta1+90) = -cot(theta1) = -1/m1
 *  7 | formula seq8 (HIGH, boxed) | m1 . m2 = -1 — the landed result
 *
 * Layout plan (screen coords):
 *  title                                   | T mid script  | x540 y64  size24 RED
 *  b1 setup line                           | T mid         | x540 y100 size16 INK
 *  --- diagram (left/centre, x110..570, y170..488) ---
 *  b2 axis (x-axis only, no y-axis/ticks — matches raw SVG) | Draw | axisD(110,540,480)
 *  b2 "x" axis label                       | T start        | x555 y484 size12 MUTED
 *  b2 P dot + label "P(x1, y1)"            | circle+T end   | (230,420) label x214 y410
 *  b2 Q dot + label "Q(x2, y2)"            | circle+T start | (470,240) label x486 y232
 *  b2 line PQ (green)                      | Draw           | (230,420)->(470,240)
 *  b2 leg PN (muted, horizontal)           | Draw           | (230,420)->(470,420)
 *  b2 leg NQ (muted, vertical)             | Draw           | (470,420)->(470,240)
 *  b2 right-angle square marker at N       | rect           | x458 y408 w12 h12
 *  b2 N label                              | T end          | x452 y444 size12 MUTED
 *  b2 run label "run = x2 - x1"            | T mid          | x350 y444 size12 MUTED
 *  b2 rise label "rise = y2 - y1"          | T start        | x486 y334 size12 MUTED
 *  b2 theta arc (amber) at P, 0 -> theta   | Draw           | angleArcD(230,420,32,0,THETA)
 *  b2 theta label "θ"                      | T mid          | ~(277,404) size14 AMBER_DARK
 *  --- right-hand working column (x620..1044) ---
 *  b3 formula (3 lines, amber, HIGH)       | T start x620   | y170 / y206 / y242 size18
 *  b4 degenerate-case text (2 lines)       | T start x620   | y280 / y310 size14 INK
 *  b5 perpendicularity setup (1 line)      | T start x620   | y344 size15 INK
 *  b6 formula m2=... (2 lines)             | T start x620   | y380 / y414 size17 INK
 *  b7 boxed landed result m1.m2=-1         | Chip           | x615 y455 w170 h50 GREEN
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
import { axisD, lineD, angleArcD, pointOnCircle } from "./math-kit";

const OX = 170;
const OY = 480;
const SCALE = 60;
function toScreen(x: number, y: number) {
  return { x: OX + x * SCALE, y: OY - y * SCALE };
}

const P = toScreen(1, 1); // (230,420)
const Q = toScreen(5, 4); // (470,240)
const N = { x: Q.x, y: P.y }; // (470,420) — right-angle vertex, verified in header comment

const RUN = Q.x - P.x; // 240
const RISE = P.y - Q.y; // 180
const THETA = Math.atan2(RISE, RUN); // radians, ≈36.87°, computed not hardcoded
const ARC_R = 32;
const THETA_LABEL = pointOnCircle(P.x, P.y, 50, THETA / 2);

export default function M11Ch09Sec11({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} anchor="middle" script>
          {t("Proof: Slope = Rise over Run", "Proof: Slope = Rise Upar Run")}
        </T>
      </Fade>

      {/* beat 1 — setup line */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={100} size={16} fill={INK} anchor="middle">
          {t(
            "Through P(x1, y1), Q(x2, y2) build a right triangle QPN with PN horizontal.",
            "P(x1, y1), Q(x2, y2) se ek right triangle QPN banao jisme PN horizontal hai."
          )}
        </T>
      </Fade>

      {/* beat 2 — THE DIAGRAM: axis -> P -> Q -> line -> N -> right-angle marker -> run -> rise -> theta arc */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d={axisD(110, 540, 480)} stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={555} y={484} size={12} fill={MUTED} anchor="start">x</T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <Circle cx={P.x} cy={P.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.85)}>
        <T x={214} y={410} size={13} fill={INK} anchor="end" weight={700}>P(x1, y1)</T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <Circle cx={Q.x} cy={Q.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.35)}>
        <T x={486} y={232} size={13} fill={INK} anchor="start" weight={700}>Q(x2, y2)</T>
      </Fade>

      <Draw on={beat >= 2} delay={dl(2, 1.7)} d={lineD(P.x, P.y, Q.x, Q.y)} stroke={GREEN} sw={2.4} dur={0.6} />

      <Draw on={beat >= 2} delay={dl(2, 2.5)} d={lineD(P.x, P.y, N.x, N.y)} stroke={MUTED} sw={1.6} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 3.1)} d={lineD(N.x, N.y, Q.x, Q.y)} stroke={MUTED} sw={1.6} dur={0.5} />

      <Fade on={beat >= 2} delay={dl(2, 3.75)}>
        <Rect x={N.x - 12} y={N.y - 12} width={12} height={12} fill="none" stroke={MUTED} strokeWidth={1.4} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.95)}>
        <T x={452} y={444} size={12} fill={MUTED} anchor="end">N</T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 4.15)}>
        <T x={350} y={444} size={12} fill={MUTED} anchor="middle">run = x2 - x1</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.35)}>
        <T x={486} y={334} size={12} fill={MUTED} anchor="start">rise = y2 - y1</T>
      </Fade>

      <Draw on={beat >= 2} delay={dl(2, 4.6)} d={angleArcD(P.x, P.y, ARC_R, 0, THETA)} stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 5.15)}>
        <T x={THETA_LABEL.x} y={THETA_LABEL.y} size={14} fill={AMBER_DARK} anchor="middle">θ</T>
      </Fade>

      {/* beat 3 — formula, built term by term, in the right-hand working column (HIGH emphasis) */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={620} y={170} size={18} fill={AMBER_DARK} anchor="start" weight={700}>tan θ</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={620} y={206} size={18} fill={AMBER_DARK} anchor="start" weight={700}>= QN / PN</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.0)}>
        <T x={620} y={242} size={18} fill={AMBER_DARK} anchor="start" weight={700}>= (y2 - y1) / (x2 - x1)</T>
      </Fade>

      {/* beat 4 — degenerate case: x1=x2 => run=0 => undefined */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={620} y={280} size={14} fill={INK} anchor="start">
          {t("If x1 = x2 the run is 0,", "Agar x1 = x2 ho, toh run 0 ho jaata hai,")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={620} y={310} size={14} fill={INK} anchor="start">
          {t(
            "the triangle degenerates, and slope is undefined.",
            "triangle degenerate hota hai, slope undefined hota hai."
          )}
        </T>
      </Fade>

      {/* beat 5 — perpendicularity setup */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={620} y={344} size={15} fill={INK} anchor="start">
          {t(
            "For perpendicular lines, take θ2 = θ1 + 90°.",
            "Perpendicular lines ke liye, θ2 = θ1 + 90° lo."
          )}
        </T>
      </Fade>

      {/* beat 6 — m2 = tan(theta1+90) = -cot theta1 = -1/m1 */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={620} y={380} size={17} fill={INK} anchor="start" weight={700}>m2 = tan(θ1 + 90°)</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={620} y={414} size={17} fill={INK} anchor="start" weight={700}>= -cot θ1 = -1/m1</T>
      </Fade>

      {/* beat 7 — landed result, boxed (HIGH emphasis) */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <Chip x={615} y={455} w={170} h={50} fill="#FCF4E0" stroke={GREEN} textFill={GREEN_DARK} size={20} script={false}>
          m1 · m2 = -1
        </Chip>
      </Fade>
    </Scene>
  );
}
