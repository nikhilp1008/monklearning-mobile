/**
 * M11 Ch09 · Section 16 — "Worked: A Line at 45° (Advanced)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples (Advanced) — subtopic 2 (Slope of a Line and Angles).
 *
 * Numbers verified from JSON: given line 3x - y + 5 = 0 -> y = 3x + 5, slope m2 = 3.
 * Signed-tangent eqn (m-3)/(1+3m) = ±1.
 *  Case +1: m - 3 = 1 + 3m -> -2m = 4 -> m = -2. Check: -2-3=-5; 1+3(-2)=1-6=-5. -5=-5 OK.
 *  Case -1: m - 3 = -(1+3m) -> m-3=-1-3m -> 4m=2 -> m=1/2. Check: 0.5-3=-2.5; -(1+3(0.5))=-(2.5)=-2.5 OK.
 *  Vertical check: given line's inclination = atan(3) = 71.565deg (atan2(3,1) in code below).
 *  90 - 71.565 = 18.435deg =/= 45deg -> no vertical solution. Matches JSON's "71.57"/"18.43".
 *
 * Diagram: all three lines (given m=3, case+1 m=-2, case-1 m=1/2) drawn through the given
 * line's own y-intercept P=(0,5) [3(0)-5+5=0, a genuinely clean point on the given line], each
 * as a fixed 72px half-length ray computed from its own "upward" direction so the three visual
 * segments are equal length (screen scale is uniform x/y so angles read true). Verified in-code:
 * (case+1 ray angle) - (given ray angle) = 45deg exactly, (given ray angle) - (case-1 ray angle)
 * = 45deg exactly -> the two solutions sit visibly on OPPOSITE sides of the given line.
 *
 * Beats (board_reveal_at_english [0, 8.7, 25.94, 39.94, 49.58, 59.99, 69.72, 90.28], 8 values;
 * item[0]=heading is the always-on title, items[1..7] gate at beat>=1..7):
 *  1 | given line + slope m2=3           | text + axes/given-line draw
 *  2 | the +-1 subtlety (either side)    | text + mark P, ring it
 *  3 | (m-3)/(1+3m) = +-1                | formula + underline
 *  4 | Case +1 -> m = -2                 | side box (left) + draw green line + 45 deg arc
 *  5 | Case -1 -> m = 1/2                | side box (right) + draw amber line + 45 deg arc
 *  6 | vertical check -> no solution     | red vertical test line + guardrail text
 *  7 | boxed final answer                | chip "m=-2 or m=1/2" + checkmark
 *
 * Layout plan (OX=430,OY=433,SCALE=30; P=toScreen(0,5)=(430,283); axes frame
 * xLeft330..xRight570 / yTop195..yBottom463, showTicks=false):
 *  title (always-on, script, RED)        | T mid | x540 y62
 *  b1 | text (16,ink)                    | T mid | x540 y96
 *  b1 | CartesianAxes + O dot/label      | -     | frame above
 *  b1 | given line (ink) + "m2=3" label  | Draw+T | GIVEN.lower..GIVEN.upper
 *  b2 | text (15,ink)                    | T mid | x540 y124
 *  b2 | P dot + ring                     | Fade+Draw | P
 *  b3 | formula (19,ink,w700) + underline| T mid + Draw | x540 y156 / bar y172
 *  b4 | side box "Case +1" (left)        | T start | x60 y270/300
 *  b4 | green line + "m=-2" + 45deg arc  | Draw+T | CASE1.lower..upper
 *  b5 | side box "Case -1" (right)       | T end | x1020 y270/300
 *  b5 | amber line + "m=1/2" + 45deg arc | Draw+T | CASE2.lower..upper
 *  b6 | red vertical test line thru P    | Draw | (430,233)-(430,333)
 *  b6 | guardrail text (14,red,w700)     | T mid | x540 y490/512
 *  b7 | boxed answer chip + checkmark    | Chip+Draw | x410..670 y532..584
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
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, lineD, angleArcD, pointOnCircle, checkD } from "./math-kit";

const OX = 430;
const OY = 433;
const SCALE = 30;
function toScreen(x: number, y: number) {
  return { x: OX + x * SCALE, y: OY - y * SCALE };
}

const O = toScreen(0, 0);
const P = toScreen(0, 5); // y-intercept of 3x - y + 5 = 0 — a clean shared point

/** Angle (standard math radians, CCW from +x) of a line's slope-m ray chosen so it points
 * "upward" (math Δy > 0) — this is what lets three different-slope lines fan out above P with
 * directly comparable, verifiable angles. */
function upwardAngle(m: number): number {
  const sign = m >= 0 ? 1 : -1;
  return Math.atan2(m * sign, sign);
}

function rayEndpoints(m: number, L: number) {
  const theta = upwardAngle(m);
  const ux = Math.cos(theta);
  const uy = Math.sin(theta);
  return {
    theta,
    upper: { x: P.x + ux * L, y: P.y - uy * L },
    lower: { x: P.x - ux * L, y: P.y + uy * L },
  };
}

const GIVEN = rayEndpoints(3, 72);
const CASE1 = rayEndpoints(-2, 72); // Case +1: m = -2
const CASE2 = rayEndpoints(0.5, 72); // Case -1: m = 1/2

const ARC_R = 40;
const ARC1_MID = (GIVEN.theta + CASE1.theta) / 2;
const ARC2_MID = (CASE2.theta + GIVEN.theta) / 2;
const ARC1_LABEL = pointOnCircle(P.x, P.y, ARC_R + 18, ARC1_MID);
const ARC2_LABEL = pointOnCircle(P.x, P.y, ARC_R + 18, ARC2_MID);

export default function M11Ch09Sec16({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={21} fill={RED} anchor="middle" script>
          {t("Worked: A Line at 45° (Advanced)", "Worked: 45° Wali Line (Advanced)")}
        </T>
      </Fade>

      {/* beat 1 — given line + slope m2 = 3, drawn on Cartesian axes */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={96} size={16} fill={INK} anchor="middle">
          {t(
            "Line ℓ makes 45° with 3x - y + 5 = 0, whose slope is m₂ = 3.",
            "Line ℓ, 3x - y + 5 = 0 se 45° banati hai — iski slope m₂ = 3 hai."
          )}
        </T>
      </Fade>
      <CartesianAxes on={beat >= 1} delay={dl(1, 0.3)} originX={OX} originY={OY} xLeft={330} xRight={570} yTop={195} yBottom={463} showTicks={false} />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <Circle cx={O.x} cy={O.y} r={3} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <T x={414} y={424} size={11} fill={MUTED} anchor="end">O</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.4)} d={lineD(GIVEN.lower.x, GIVEN.lower.y, GIVEN.upper.x, GIVEN.upper.y)} stroke={INK} sw={2.4} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={GIVEN.lower.x - 9} y={GIVEN.lower.y - 11} size={12} fill={INK} anchor="end" weight={700}>m₂ = 3</T>
      </Fade>

      {/* beat 2 — either side subtlety: mark the shared point, ring it */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={124} size={15} fill={INK} anchor="middle">
          {t(
            "'45° with a line' works either side — set the signed tangent to ±1.",
            "Kisi line ke saath '45°' dono taraf ban sakta hai — signed tangent ko ±1 rakho."
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <Circle cx={P.x} cy={P.y} r={4.5} fill={AMBER_DARK} />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.1)} d={`M ${P.x - 22} ${P.y} C ${P.x - 22} ${P.y - 27}, ${P.x + 20} ${P.y - 29}, ${P.x + 22} ${P.y - 2} C ${P.x + 23} ${P.y + 26}, ${P.x - 18} ${P.y + 30}, ${P.x - 22.5} ${P.y + 3}`} stroke={AMBER} sw={2} dur={0.6} />

      {/* beat 3 — the general signed-tangent formula */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={156} size={19} fill={INK} anchor="middle" weight={700}>
          (m - 3)/(1 + 3m) = ±1
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.7)} d={lineD(430, 172, 650, 172)} stroke={AMBER} sw={2.2} dur={0.5} />

      {/* beat 4 — Case +1: m = -2 (green line, 45° above the given line) */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={60} y={270} size={14} fill={INK} anchor="start" weight={600}>Case +1: m - 3 = 1 + 3m</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={60} y={300} size={18} fill={GREEN} anchor="start" weight={700}>⇒ m = -2</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.0)} d={lineD(CASE1.lower.x, CASE1.lower.y, CASE1.upper.x, CASE1.upper.y)} stroke={GREEN} sw={2.4} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 1.7)}>
        <T x={CASE1.lower.x + 10} y={CASE1.lower.y + 5} size={12} fill={GREEN} anchor="start" weight={700}>m = -2</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 2.0)} d={angleArcD(P.x, P.y, ARC_R, GIVEN.theta, CASE1.theta)} stroke={GREEN} sw={2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 2.5)}>
        <T x={ARC1_LABEL.x} y={ARC1_LABEL.y} size={13} fill={GREEN} anchor="middle" weight={700}>45°</T>
      </Fade>

      {/* beat 5 — Case -1: m = 1/2 (amber line, 45° below the given line) */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={1020} y={270} size={14} fill={INK} anchor="end" weight={600}>Case -1: m - 3 = -(1 + 3m)</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={1020} y={300} size={18} fill={AMBER_DARK} anchor="end" weight={700}>⇒ m = 1/2</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.0)} d={lineD(CASE2.lower.x, CASE2.lower.y, CASE2.upper.x, CASE2.upper.y)} stroke={AMBER_DARK} sw={2.4} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 1.7)}>
        <T x={CASE2.lower.x - 8} y={CASE2.lower.y + 7} size={12} fill={AMBER_DARK} anchor="end" weight={700}>m = 1/2</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 2.0)} d={angleArcD(P.x, P.y, ARC_R, CASE2.theta, GIVEN.theta)} stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 2.5)}>
        <T x={ARC2_LABEL.x} y={ARC2_LABEL.y} size={13} fill={AMBER_DARK} anchor="middle" weight={700}>45°</T>
      </Fade>

      {/* beat 6 — vertical check: a vertical line through P fails, no solution */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d={lineD(P.x, P.y - 50, P.x, P.y + 50)} stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={540} y={490} size={14} fill={RED} anchor="middle" weight={700}>
          {t("Vertical check: 90° vs 71.57°", "Vertical check: 90° vs 71.57°")}
        </T>
        <T x={540} y={512} size={14} fill={RED} anchor="middle" weight={700}>
          {t("gives 18.43° ≠ 45° — no solution.", "se 18.43° milta hai, 45° nahi — no solution.")}
        </T>
      </Fade>

      {/* beat 7 — boxed final answer + sanity checkmark */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <Chip x={410} y={532} w={260} h={52} fill={CREAM} stroke={GREEN} textFill={INK} size={19}>
          m = -2  or  m = 1/2
        </Chip>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d={checkD(695, 558, 20)} stroke={GREEN} sw={3} dur={0.4} />
    </Scene>
  );
}
