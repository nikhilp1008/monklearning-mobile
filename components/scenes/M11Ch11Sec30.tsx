/**
 * M11 Ch11 · Section 30 — "Derivation: the distance formula"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept, subtopic "Distance and Section Formulas in 3D". FLAGGED HIGH-SCRUTINY —
 * capstone derivation, genuinely 3D. Box method: box in P,Q with axis-parallel edges, Pythagoras
 * twice (floor triangle PNA at N, then vertical triangle PAQ at A) -> PQ = space diagonal.
 *
 * PROJECTION (math-kit project3D, +Y right, +Z up, +X down-left foreshortened, same convention as
 * Sec5/Sec6/Sec15). OX=300 OY=540 SCALE=42, proj=(x,y,z)=>project3D(x,y,z,OX,OY,SCALE).
 *   xForeshorten coeffs: screenX = 300 + 42y - 21.824x   screenY = 540 - 42z + 12.6x
 *   (42*0.6*cos30=21.824, 42*0.6*sin30=12.6 — same derivation as Sec15's 40-scale constants.)
 *
 * BOX CONSTRUCTION (abstract points, generic P=(x1,y1,z1), Q=(x2,y2,z2); the diagram uses a fixed
 * illustrative offset — chosen fresh for clean projection, NOT shown as numbers on the board, only
 * letters P/N/A/Q and symbolic edge labels since the whole point is a general derivation):
 *   P=(1,2,3)  N=P+(3,0,0)=(4,2,3) [x-step, PN=|x2-x1|]  A=N+(0,4,0)=(4,6,3) [y-step, NA=|y2-y1|]
 *   Q=A+(0,0,5)=(4,6,8) [z-step, AQ=|z2-z1|]. M=P+(0,4,0)=(1,6,3) (4th floor corner, P-N-A-M
 *   parallelogram = the z=3 "floor" face of the box, fill-only). O=(0,0,0) for light orientation axes.
 *
 * HAND-VERIFIED PROJECTIONS (screenX = 300+42y-21.824x, screenY = 540-42z+12.6x):
 *   P(1,2,3): x=300+84-21.824=362.18  y=540-126+37.8... wait z=3: -42*3=-126, +12.6*1=12.6 =>
 *     y=540-126+12.6=426.6.  P=(362,427).
 *   N(4,2,3): x=300+84-21.824*4=300+84-87.30=296.70  y=540-126+12.6*4=540-126+50.4=464.4.
 *     N=(297,464).
 *   A(4,6,3): x=300+42*6-87.30=300+252-87.30=464.70  y=540-126+50.4=464.4 (same z,x as N).
 *     A=(465,464).  [same screenY as N, confirms A is horizontally right of N — y-step is pure
 *     horizontal in this projection, x/z unchanged from N to A]
 *   Q(4,6,8): x=464.70 (same x,y as A)  y=540-42*8+50.4=540-336+50.4=254.4.  Q=(465,254).
 *     [same screenX as A, confirms Q sits directly above A — z-step is pure vertical]
 *   M(1,6,3): x=300+252-21.824=530.18  y=540-126+12.6=426.6 (same z,x as P).  M=(530,427).
 *     [same screenY as P — confirms P-N-A-M is a true parallelogram: NP and AM are both the
 *     x-step vector, PM and NA are both the y-step vector]
 *   O(0,0,0): x=300 y=540. Axis tips (axisLen=2.5, via ThreeDAxes): X(2.5,0,0)->(245,572) down-left,
 *     Y(0,2.5,0)->(405,540) right, Z(0,0,2.5)->(300,435) up. All inside safe area (X-tip 572<596,
 *     24px margin) and clear of the box's own points before trusting it.
 *   Box bounding region: x 245(X-tip)–530(M), y 254(Q)–572(X-tip) — comfortably inside safe area,
 *     leaving x~540-1044 free for the right-column algebra.
 *
 * PQ (the space diagonal, AMBER, the object being derived) runs P(362,427)->Q(465,254). PA (helper
 * diagonal, hypotenuse of the floor triangle, AMBER_DARK thin) runs P(362,427)->A(465,464). Both
 * checked: PQ's x-range [362,465] never reaches N's x=297, so PQ does not pass near N; PA and PQ
 * share only endpoint P, diverge immediately (A is far below Q).
 *
 * Label clearances (eye-verified by hand, since only text-vs-text is auto-checked): N's letter
 * label placed at (280,440) anchor=end — deliberately NOT under/at N (297,464) to avoid the
 * z-axis shaft (a vertical line at x=300 from y435 to y540) passing behind the glyph; a bare "N"
 * centered at x=297 would have sat directly on that shaft. A's label at (485,455) anchor=start
 * clears both its own halo ring (r=8, right edge x=473) and the NA edge (which terminates at
 * A, x<=465).
 *
 * reveals_english  = [0, 11.43, 31.23, 44.54, 61.35, 72.19, 88.49, 100.44, 114.17] (9 beats, 0-8).
 * reveals_hinglish = [0, 11.35, 27.05, 40.28, 55.21, 66.39, 79.7, 89.86, 96.68].
 *
 * Beats (from board_content seq1-9):
 *  0 title (always-on)                        | "Deriving the distance formula (box method)"
 *  1 setup: axes, plot P & Q, draw PQ          | "Box in P,Q, edges parallel to axes; PQ = diagonal"
 *  2 THE DIAGRAM: N, A, box edges, floor fill  | "Right triangles PAQ (at A) and PNA (at N)"
 *  3 halo A + text                             | "Split off the height: triangle PAQ right-angled at A"
 *  4 formula PQ² = PA² + AQ²
 *  5 halo N + text                             | "Resolve the horizontal leg: triangle PNA right-angled at N"
 *  6 formula PA² = PN² + NA²
 *  7 PN/NA/AQ definitions (3 lines) then combine (PQ²=PN²+NA²+AQ²) then substitute coordinates —
 *    5 staged sub-reveals within one beat (delays 0/1.4/2.8/4.3/5.7s — fits inside the tighter
 *    Hinglish beat7 window of 6.82s with margin; English's 13.73s window leaves even more air)
 *  8 landed result, boxed: PQ = √((x2-x1)²+(y2-y1)²+(z2-z1)²)
 *
 * Layout plan (screen px):
 *  b1 left caption 2L (x246 start)      | T INK13         | y100 / y123
 *  b1 light 3D axes (muted)             | ThreeDAxes       | o(300,540) len2.5
 *  b1 P dot(INK r4)+label               | circle+T13       | (362,427); label (348,414) end
 *  b1 Q dot(INK r4)+label               | circle+T13       | (465,254); label (465,238) mid
 *  b1 PQ diagonal (AMBER)               | Draw sw2.5       | P->Q
 *  b2 floor fill P-N-A-M (no stroke)    | polygon fill     | AMBER 0.16 opacity
 *  b2 PN,NA,AQ edges (INK sw2)          | Draw              | P->N, N->A, A->Q
 *  b2 N dot(MUTED r3.5)+label           | circle+T13        | (297,464); label (280,440) end
 *  b2 A dot(MUTED r3.5)+label           | circle+T13        | (465,464); label (485,455) start
 *  b2 PA diagonal (AMBER_DARK thin)     | Draw sw1.6        | P->A
 *  b2 diagram caption                   | T INK12 mid       | (381,515)
 *  b3 halo ring A (AMBER_DARK r8)       | circle stroke     | (465,464)
 *  b3 right-col text 2L                 | T INK14 start     | x540 y130/155
 *  b4 formula                           | T AMBER_DARK17    | x540 y196
 *  b5 halo ring N (AMBER_DARK r8)       | circle stroke     | (297,464)
 *  b5 right-col text 2L                 | T INK14 start     | x540 y236/261
 *  b6 formula                           | T AMBER_DARK17    | x540 y302
 *  b7 5 staged lines                    | T AMBER_DARK16    | x540 y340/368/396/430/464
 *  b8 boxed final (roundRectD frame)    | Draw+T AMBER_DARK | frame x515 y500 w505 h74; text (540,543)
 *
 * Clearance spot-checks: right column x-start moved to 540 (not 520/530) specifically so the M
 * corner of the floor fill (x=530) sits clear of the column by 10px — moot for the checker (fill
 * has no stroke, labels may sit on it per the Sec15 precedent) but kept clean for the eye anyway.
 * All right-column consecutive baseline gaps computed >=22px (size14) / >=28px (size16-17) by
 * hand, meeting the base spec's 1.6x-size stacked-line minimum. verify-scene.mjs (text-vs-text +
 * overflow) and a FORCE_SHOTS eye pass (text-vs-stroke: the N-label-vs-z-axis fix above, halo
 * rings, diagonal targeting) are the final authorities.
 */

import React from "react";
import { Circle, Polygon } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { project3D, ThreeDAxes, lineD, roundRectD } from "./math-kit";

const OX = 300;
const OY = 540;
const SCALE = 42;
const proj = (x: number, y: number, z: number) => project3D(x, y, z, OX, OY, SCALE);

const P = proj(1, 2, 3); // (362,427)
const N = proj(4, 2, 3); // (297,464) P + x-step
const A = proj(4, 6, 3); // (465,464) N + y-step
const Q = proj(4, 6, 8); // (465,254) A + z-step
const M = proj(1, 6, 3); // (530,427) P + y-step (4th floor corner)

const FLOOR_PTS = `${P.x},${P.y} ${N.x},${N.y} ${A.x},${A.y} ${M.x},${M.y}`;

export default function M11Ch11Sec30({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={RED} anchor="middle" script>
          {t("Deriving the distance formula (box method)", "Distance formula derive karna (box method se)")}
        </T>
      </Fade>

      {/* beat 1 — setup: box in P and Q, edges parallel to the axes, PQ = space diagonal */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={246} y={100} size={13} fill={INK} anchor="start">
          {t("Box P, Q — edges parallel to the axes.", "Box P, Q — edges axes ke parallel.")}
        </T>
        <T x={246} y={123} size={13} fill={INK} anchor="start">
          {t("PQ is the space diagonal.", "PQ hai space diagonal.")}
        </T>
      </Fade>
      <ThreeDAxes on={beat >= 1} delay={dl(1, 0)} originX={OX} originY={OY} scale={SCALE} axisLen={2.5} stroke={MUTED} />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <Circle cx={P.x} cy={P.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <T x={348} y={414} size={13} fill={INK} anchor="end" weight={700}>P</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <Circle cx={Q.x} cy={Q.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.7)}>
        <T x={465} y={238} size={13} fill={INK} anchor="middle" weight={700}>Q</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.1)} d={lineD(P.x, P.y, Q.x, Q.y)} stroke={AMBER} sw={2.5} dur={0.6} />

      {/* beat 2 — THE DIAGRAM: box in N, A; floor fill; the two right triangles' edges */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Polygon points={FLOOR_PTS} fill={AMBER} fillOpacity={0.16} stroke="none" />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d={lineD(P.x, P.y, N.x, N.y)} stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <Circle cx={N.x} cy={N.y} r={3.5} fill={MUTED} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <T x={280} y={440} size={13} fill={INK} anchor="end" weight={700}>N</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.5)} d={lineD(N.x, N.y, A.x, A.y)} stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 1.9)}>
        <Circle cx={A.x} cy={A.y} r={3.5} fill={MUTED} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.1)}>
        <T x={485} y={455} size={13} fill={INK} anchor="start" weight={700}>A</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.5)} d={lineD(A.x, A.y, Q.x, Q.y)} stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 3.0)} d={lineD(P.x, P.y, A.x, A.y)} stroke={AMBER_DARK} sw={1.6} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 3.4)}>
        <T x={381} y={515} size={12} fill={INK} anchor="middle">
          {t("Right triangles PAQ (at A) and PNA (at N)", "Right triangles PAQ (A par) aur PNA (N par)")}
        </T>
      </Fade>

      {/* beat 3 — split off the height: triangle PAQ is right-angled at A */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <Circle cx={A.x} cy={A.y} r={8} fill="none" stroke={AMBER_DARK} strokeWidth={2} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={130} size={14} fill={INK} anchor="start">
          {t("Split off the height:", "Height alag karo:")}
        </T>
        <T x={540} y={155} size={14} fill={INK} anchor="start">
          {t("triangle PAQ is right-angled at A.", "triangle PAQ, A par right-angled hai.")}
        </T>
      </Fade>

      {/* beat 4 — Pythagoras in triangle PAQ */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={196} size={17} fill={AMBER_DARK} anchor="start" weight={700}>
          PQ² = PA² + AQ²
        </T>
      </Fade>

      {/* beat 5 — resolve the horizontal leg: triangle PNA is right-angled at N */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Circle cx={N.x} cy={N.y} r={8} fill="none" stroke={AMBER_DARK} strokeWidth={2} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={236} size={14} fill={INK} anchor="start">
          {t("Resolve the horizontal leg:", "Horizontal leg PA resolve karo:")}
        </T>
        <T x={540} y={261} size={14} fill={INK} anchor="start">
          {t("triangle PNA is right-angled at N.", "triangle PNA, N par right-angled hai.")}
        </T>
      </Fade>

      {/* beat 6 — Pythagoras in triangle PNA */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={302} size={17} fill={AMBER_DARK} anchor="start" weight={700}>
          PA² = PN² + NA²
        </T>
      </Fade>

      {/* beat 7 — every edge is an axis gap; substitute, term by term */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={340} size={16} fill={AMBER_DARK} anchor="start" weight={700}>
          PN = |x2 - x1|
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.4)}>
        <T x={540} y={368} size={16} fill={AMBER_DARK} anchor="start" weight={700}>
          NA = |y2 - y1|
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.8)}>
        <T x={540} y={396} size={16} fill={AMBER_DARK} anchor="start" weight={700}>
          AQ = |z2 - z1|
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.3)}>
        <T x={540} y={430} size={16} fill={AMBER_DARK} anchor="start" weight={700}>
          PQ² = PN² + NA² + AQ²
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5.7)}>
        <T x={540} y={464} size={16} fill={AMBER_DARK} anchor="start" weight={700}>
          = (x2-x1)² + (y2-y1)² + (z2-z1)²
        </T>
      </Fade>

      {/* beat 8 — land the result, boxed */}
      <Draw on={beat >= 8} delay={dl(8, 0.2)} d={roundRectD(515, 500, 505, 74)} stroke={AMBER_DARK} sw={1.8} dur={0.6} />
      <Fade on={beat >= 8} delay={dl(8, 0.6)}>
        <T x={540} y={543} size={18} fill={AMBER_DARK} anchor="start" weight={700}>
          PQ = √((x2-x1)² + (y2-y1)² + (z2-z1)²)
        </T>
      </Fade>
    </Scene>
  );
}
