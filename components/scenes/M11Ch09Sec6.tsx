/**
 * M11 Ch09 · Section 6 — "Worked examples: centroid and collinearity"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — two independent examples, board split left (Ex1) / right (Ex2).
 * board_content has 8 items: seq1 heading -> always-on title. seq2..seq8 gate at beat>=1..7.
 * reveals_english = [0, 4.1, 15.02, 28.33, 33.96, 47.79, 60.93, 70.74]
 * reveals_hinglish = [0, 3.84, 15.53, 28.42, 33.88, 48.73, 60.84, 70.14]
 *
 * Numbers verified independently (python):
 *  Ex1 centroid: A(2,-3),B(-4,5),C(8,1) -> Gx=(2-4+8)/3=6/3=2, Gy=(-3+5+1)/3=3/3=1 -> G=(2,1).
 *  Ex2 collinearity: 2Δ = 1(-2-16)+3(16-4)+(-3)(4-(-2)) = 1(-18)+3(12)+(-3)(6) = -18+36-18 = 0 -> collinear.
 *  Line through (1,4),(3,-2): slope=(-2-4)/(3-1)=-3; check (-3,16): -3*(-3)+7=16 ✓ (y=-3x+7).
 *
 * Screen mapping — Example 1 (left column), toScreen1(x,y) = {x: 230+24x, y: 364-24y}:
 *  O=(230,364)  A(2,-3)->(278,436)  B(-4,5)->(134,244)  C(8,1)->(422,340)  G(2,1)->(278,340)
 *  Frame: originX=230 originY=364 xLeft=70 xRight=490 yTop=205 yBottom=465.
 *
 * Screen mapping — Example 2 (right column), anisotropic toScreen2(x,y) = {x: 795+45x, y: 407-11y}
 * (affine per-axis scaling — preserves collinearity, only choice is compressing the y-heavy span 18
 * into the available band height; verified on-screen: slope(P1,P2)=0.7333=slope(P1,P3)=0.7333 ✓):
 *  O=(795,407)  P1(1,4)->(840,363)  P2(3,-2)->(930,429)  P3(-3,16)->(660,231)
 *  Frame: originX=795 originY=407 xLeft=610 xRight=970 yTop=195 yBottom=465.
 *
 * Beats:
 *  0(title, always-on) | "Worked: Centroid & Collinearity"
 *  1 | Ex1 given+setup: statement, axes, A/B/C plotted, triangle edges drawn
 *  2 | Ex1 work: G = ((2-4+8)/3, (-3+5+1)/3) = (6/3, 3/3)
 *  3 | Ex1 answer boxed: G = (2,1), dot + chip, G visibly inside triangle
 *  4 | Ex2 given+setup: statement, axes, 3 points plotted (no line yet)
 *  5 | Ex2 work: 2Δ = |1(-2-16) + 3(16-4) + (-3)(4-(-2))|
 *  6 | Ex2 work+reveal: = |-18+36-18| = 0, connecting line draws (green) through all 3 points
 *  7 | Ex2 sanity check / guardrail: "Area zero ⇒ collinear — one line beats three slope computations."
 *
 * Layout plan:
 *  b0 | title (26,red,script)                 | T mid | x540 y62
 *  b1 | divider                                | Draw  | x540 y90..560 (muted, vertical)
 *  b1 | Ex1 statement (13,ink)                 | T mid | x290 y104
 *  b1 | axes c(230,364) 70..490/205..465       | CartesianAxes (no ticks)
 *  b1 | O dot + label                          | circle+T | (230,364) label x218 y376 end
 *  b1 | A dot + label "A(2,-3)"                | circle+T | (278,436) label x286 y452 start
 *  b1 | B dot + label "B(-4,5)"                | circle+T | (134,244) label x142 y236 start
 *  b1 | C dot + label "C(8,1)"                 | circle+T | (422,340) label x430 y332 start
 *  b1 | edges A-B, B-C, C-A (ink)               | Draw x3
 *  b2 | Ex1 formula1 (14,ink)                  | T mid | x290 y136
 *  b3 | G dot (green) + chip "G = (2, 1)"      | circle+Chip | (278,340) chip x225 y156 w130 h34
 *  b4 | Ex2 statement (13,ink)                 | T mid | x790 y104
 *  b4 | axes c(795,407) 610..970/195..465      | CartesianAxes (no ticks)
 *  b4 | O2 dot + label                          | circle+T | (795,407) label x783 y419 end
 *  b4 | P1 dot + label "(1,4)"                  | circle+T | (840,363) label x848 y357 start
 *  b4 | P2 dot + label "(3,-2)"                 | circle+T | (930,429) label x938 y433 start
 *  b4 | P3 dot + label "(-3,16)"                | circle+T | (660,231) label x652 y225 end
 *  b5 | Ex2 formula1 (14,ink)                  | T mid | x790 y136
 *  b6 | Ex2 formula2 (14,green,w700)            | T mid | x790 y168
 *  b6 | connecting line P3->P2 (green)          | Draw | (660,231)->(930,429)
 *  b7 | checkD near line (green)                | Draw | (895,345,14)
 *  b7 | red bar x600 y486..536                  | Draw
 *  b7 | 2-line guardrail text                   | T st | x616 y505 / y529
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
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, lineD, checkD } from "./math-kit";

// Example 1 (left) — isotropic scale
const OX1 = 230;
const OY1 = 364;
const SCALE1 = 24;
function toScreen1(x: number, y: number) {
  return { x: OX1 + x * SCALE1, y: OY1 - y * SCALE1 };
}
const A = toScreen1(2, -3); // (278,436)
const B = toScreen1(-4, 5); // (134,244)
const C = toScreen1(8, 1); // (422,340)
const G = toScreen1(2, 1); // (278,340)

// Example 2 (right) — anisotropic scale (affine, preserves collinearity)
const OX2 = 795;
const OY2 = 407;
const SCALEX2 = 45;
const SCALEY2 = 11;
function toScreen2(x: number, y: number) {
  return { x: OX2 + x * SCALEX2, y: OY2 - y * SCALEY2 };
}
const P1 = toScreen2(1, 4); // (840,363)
const P2 = toScreen2(3, -2); // (930,429)
const P3 = toScreen2(-3, 16); // (660,231)

export default function M11Ch09Sec6({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={26} fill={RED} anchor="middle" script>
          {t("Worked: Centroid & Collinearity", "Worked: Centroid aur Collinearity")}
        </T>
      </Fade>

      {/* divider between the two examples */}
      <Draw on={beat >= 1} delay={dl(1, 0)} d={lineD(540, 90, 540, 560)} stroke={MUTED} sw={1.4} dur={0.5} />

      {/* beat 1 — Example 1 given + setup */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <T x={290} y={104} size={13} fill={INK} anchor="middle">
          {t(
            "Example 1: centroid of A(2,-3), B(-4,5), C(8,1).",
            "Example 1: triangle A(2,-3), B(-4,5), C(8,1) ka centroid."
          )}
        </T>
      </Fade>
      <CartesianAxes on={beat >= 1} delay={dl(1, 0.4)} originX={OX1} originY={OY1} xLeft={70} xRight={490} yTop={205} yBottom={465} showTicks={false} />
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <Circle cx={OX1} cy={OY1} r={3} fill={INK} />
        <T x={218} y={376} size={11} fill={MUTED} anchor="end">O</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <Circle cx={A.x} cy={A.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <T x={286} y={452} size={12} fill={INK} anchor="start" weight={700}>A(2,-3)</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <Circle cx={B.x} cy={B.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={142} y={236} size={12} fill={INK} anchor="start" weight={700}>B(-4,5)</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.1)}>
        <Circle cx={C.x} cy={C.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.3)}>
        <T x={430} y={332} size={12} fill={INK} anchor="start" weight={700}>C(8,1)</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.6)} d={lineD(A.x, A.y, B.x, B.y)} stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 3.1)} d={lineD(B.x, B.y, C.x, C.y)} stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 3.6)} d={lineD(C.x, C.y, A.x, A.y)} stroke={INK} sw={2} dur={0.5} />

      {/* beat 2 — Example 1 work: average coordinate by coordinate */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={290} y={136} size={14} fill={INK} anchor="middle">
          G = ((2-4+8)/3, (-3+5+1)/3) = (6/3, 3/3)
        </T>
      </Fade>

      {/* beat 3 — Example 1 answer boxed: G lands inside the triangle */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <Circle cx={G.x} cy={G.y} r={4.5} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <Chip x={225} y={156} w={130} h={34} fill="#FCF4E0" stroke={GREEN} textFill={GREEN} size={18}>
          G = (2, 1)
        </Chip>
      </Fade>

      {/* beat 4 — Example 2 given + setup: plot the 3 points (no line yet) */}
      <Fade on={beat >= 4} delay={dl(4, 0.1)}>
        <T x={790} y={104} size={13} fill={INK} anchor="middle">
          {t(
            "Example 2: are (1,4), (3,-2), (-3,16) collinear? Use area = 0.",
            "Example 2: kya (1,4), (3,-2), (-3,16) collinear hain? Area = 0 use karo."
          )}
        </T>
      </Fade>
      <CartesianAxes on={beat >= 4} delay={dl(4, 0.4)} originX={OX2} originY={OY2} xLeft={610} xRight={970} yTop={195} yBottom={465} showTicks={false} />
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <Circle cx={OX2} cy={OY2} r={3} fill={INK} />
        <T x={783} y={419} size={11} fill={MUTED} anchor="end">O</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <Circle cx={P1.x} cy={P1.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={848} y={357} size={12} fill={INK} anchor="start" weight={700}>(1,4)</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <Circle cx={P2.x} cy={P2.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <T x={938} y={433} size={12} fill={INK} anchor="start" weight={700}>(3,-2)</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.1)}>
        <Circle cx={P3.x} cy={P3.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.3)}>
        <T x={652} y={225} size={12} fill={INK} anchor="end" weight={700}>(-3,16)</T>
      </Fade>

      {/* beat 5 — Example 2 work: area determinant */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={790} y={136} size={14} fill={INK} anchor="middle">
          2Δ = |1(-2-16) + 3(16-4) + (-3)(4-(-2))|
        </T>
      </Fade>

      {/* beat 6 — Example 2 work: result 0, and the visual proof (the line) appears */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={790} y={168} size={14} fill={GREEN} anchor="middle" weight={700}>
          = |-18 + 36 - 18| = 0
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.5)} d={lineD(P3.x, P3.y, P2.x, P2.y)} stroke={GREEN} sw={2.4} dur={0.7} />

      {/* beat 7 — sanity check + guardrail note */}
      <Draw on={beat >= 7} delay={dl(7, 0)} d={checkD(895, 345, 16)} stroke={GREEN} sw={2.6} dur={0.4} />
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 600 486 L 600 536" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={616} y={505} size={14} fill={RED} anchor="start" weight={700}>
          {t("Area zero ⇒ collinear —", "Area zero ⇒ collinear —")}
        </T>
        <T x={616} y={529} size={14} fill={RED} anchor="start" weight={700}>
          {t("one line beats three slope computations.", "teen slopes se behtar ek line.")}
        </T>
      </Fade>
    </Scene>
  );
}
