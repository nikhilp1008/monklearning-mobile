/**
 * M11 Ch11 · Section 1 — "The centroid: a triangle's balance point"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — opens subtopic 1 (Applications: Centroid, Collinearity & Locus).
 *
 * CORRECTION (post-authoring): this subtopic is NOT 2D. board_content's own narration says
 * "add the x coordinates and divide by three, and likewise for y and z" and "balancing in three
 * dimensions is really three separate one-dimensional balancing acts, one per axis" — genuinely
 * 3D from the start. Rebuilt using project3D/ThreeDAxes (same system as Sec15) instead of the
 * original flat CartesianAxes version. Reference exemplar for the rest of subtopic 1 (secs 2-14).
 *
 * Illustrative triangle (not given in JSON — conceptual opener), chosen so G lands on a clean
 * integer point: A(1,5,3), B(-3,-1,-3), C(5,-1,3). origin(460,380), scale=38, project3D formula
 * (xForeshorten=0.6): screenX = 460 + 38y - 19.746x ; screenY = 380 - 38z + 11.4x.
 *   A -> (630,277)  B -> (481,460)  C -> (323,323)
 *   G = avg = ((1-3+5)/3,(5-1-1)/3,(3-3+3)/3) = (1,1,1) -> (478,353)
 *   D = midpoint BC = (1,-1,0) -> (402,391)  [median AD]
 *   E = midpoint AC = (3,2,3) -> (477,300)   [median BE]
 *   F = midpoint AB = (-1,2,0) -> (556,369)  [median CF]
 * Verified all 3 medians concur at G=(1,1,1): AD: A+2/3(D-A) = (1,5,3)+2/3(0,-6,-3) = (1,1,1) ✓.
 * BE: B+2/3(E-B) = (-3,-1,-3)+2/3(6,3,6) = (1,1,1) ✓. CF: C+2/3(F-C) = (5,-1,3)+2/3(-6,3,-3)
 * = (1,1,1) ✓. So AG:GD = BG:GE = CG:GF = 2:1, in genuine 3D, as the section claims.
 * Light ThreeDAxes (axisLen=6, MUTED) for orientation only — full octant teaching is Sec15+, this
 * is just a preview glimpse: X(342,448) down-left, Y(688,380) right, Z(460,152) up. axisLen kept
 * short (Z tip at y152) so the shaft clears the intro text band (bottom ~y127) with margin.
 *
 * reveals_english = [0, 10.24, 24.23, 35.07, 46.25, 60.07, 73.47, 88.66] (8 values, beats 0-7).
 *
 * Beats:
 *  0(title, always-on) | "The centroid: where a triangle balances"
 *  1 | intro: cut a triangle from card, balance on a fingertip = centroid G
 *  2 | THE DIAGRAM: light 3D axes, triangle ABC in 3D, midpoint D, all 3 medians, G marked
 *  3 | ring G — "where the three medians meet"
 *  4 | inline "2" / "1" labels on median AD — the 2:1 ratio
 *  5 | right-column: 3 separate per-axis formulas — x_G, y_G, z_G
 *  6 | checkmark + caption: each axis's own equation (independence, made concrete by beat 5)
 *  7 | guardrail (red): G always exists, always unique, independent of side lengths
 *
 * Layout plan:
 *  b0 | title (26,red,script)              | T mid  | x540 y58
 *  b1 | 2-line intro (15,ink)               | T mid  | x540 y98 / y122
 *  b2 | light axes o(460,380) len7 (muted)  | ThreeDAxes
 *  b2 | triangle sides AB,BC,CA (ink)       | Draw   | A(630,277) B(481,460) C(323,323)
 *  b2 | A/B/C dots + letter labels          | circle+T | above A, below B, left of C
 *  b2 | D dot (muted) + label               | circle+T | (402,391) label (412,425)
 *  b2 | medians AD,BE,CF (amber)            | Draw   | A->D, B->E, C->F
 *  b2 | G dot (amber_dark) + label          | circle+T | (478,353) label (492,347)
 *  b3 | ring around G+label                 | Draw   | ringD(485,350,28,24)
 *  b4 | "2" at AG midpoint, "1" at GD mid   | T start | (568,308) / (412,362)
 *  b5 | right col label + 3 per-axis eqns   | T start | x780 y190/220/248/276
 *  b6 | checkmark + independence caption    | Draw+T | (785,320) / (808,324)
 *  b7 | red bar + 2-line guardrail          | Draw+T | x780 y410-462 / (796,430) (796,452)
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
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  ringD,
  Scene,
} from '@/components/scenes/kit';
import { project3D, ThreeDAxes, lineD, checkD } from "./math-kit";

const OX = 460;
const OY = 380;
const SCALE = 38;
const proj = (x: number, y: number, z: number) => project3D(x, y, z, OX, OY, SCALE);

const A = proj(1, 5, 3); // (630,277)
const B = proj(-3, -1, -3); // (481,460)
const C = proj(5, -1, 3); // (323,323)
const G = proj(1, 1, 1); // (478,353)
const D = proj(1, -1, 0); // (402,391) midpoint BC
const E = proj(3, 2, 3); // (477,300) midpoint AC
const F = proj(-1, 2, 0); // (556,369) midpoint AB

export default function M11Ch11Sec1({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={RED} anchor="middle" script>
          {t("The centroid: where a triangle balances", "Centroid: jahaan triangle balance karta hai")}
        </T>
      </Fade>

      {/* beat 1 — intro */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={98} size={15} fill={INK} anchor="middle">
          {t(
            "Cut a triangle from card and balance it on a fingertip —",
            "Card se ek triangle kaato aur usse ek ungli par balance karo —"
          )}
        </T>
        <T x={540} y={122} size={15} fill={INK} anchor="middle">
          {t("the point where it balances is the centroid, G.", "jahaan woh balance hota hai, wahi centroid hai, G.")}
        </T>
      </Fade>

      {/* beat 2 — THE DIAGRAM: light 3D axes, triangle, medians, G */}
      <ThreeDAxes on={beat >= 2} delay={dl(2, 0)} originX={OX} originY={OY} scale={SCALE} axisLen={6} stroke={MUTED} />
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d={lineD(A.x, A.y, B.x, B.y)} stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 0.9)} d={lineD(B.x, B.y, C.x, C.y)} stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 1.3)} d={lineD(C.x, C.y, A.x, A.y)} stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <Circle cx={A.x} cy={A.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.0)}>
        <T x={630} y={260} size={14} fill={INK} anchor="middle" weight={700}>A</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.3)}>
        <Circle cx={B.x} cy={B.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.5)}>
        <T x={481} y={478} size={14} fill={INK} anchor="middle" weight={700}>B</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.8)}>
        <Circle cx={C.x} cy={C.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.0)}>
        <T x={305} y={328} size={14} fill={INK} anchor="end" weight={700}>C</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.4)}>
        <Circle cx={D.x} cy={D.y} r={3} fill={MUTED} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.6)}>
        <T x={412} y={425} size={12} fill={MUTED} anchor="start">D</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 4.0)} d={lineD(A.x, A.y, D.x, D.y)} stroke={AMBER} sw={2} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 4.6)} d={lineD(B.x, B.y, E.x, E.y)} stroke={AMBER} sw={2} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 5.2)} d={lineD(C.x, C.y, F.x, F.y)} stroke={AMBER} sw={2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 5.9)}>
        <Circle cx={G.x} cy={G.y} r={5} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6.1)}>
        <T x={492} y={347} size={13} fill={AMBER_DARK} anchor="start" weight={700}>G</T>
      </Fade>

      {/* beat 3 — ring G: "where the three medians meet" */}
      <Draw on={beat >= 3} delay={dl(3, 0)} d={ringD(485, 350, 28, 24)} stroke={AMBER_DARK} sw={2.2} dur={0.6} />

      {/* beat 4 — the 2:1 ratio, marked directly on median AD */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={568} y={308} size={13} fill={AMBER_DARK} anchor="start" weight={700}>2</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.35)}>
        <T x={412} y={362} size={13} fill={AMBER_DARK} anchor="start" weight={700}>1</T>
      </Fade>

      {/* beat 5 — right column: three separate per-axis formulas (the "3 acts" made concrete) */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={780} y={190} size={14} fill={INK} anchor="start">
          {t("Coordinate by coordinate:", "Coordinate by coordinate:")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={780} y={220} size={15} fill={AMBER_DARK} anchor="start" weight={700}>x_G = (x1+x2+x3)/3</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={780} y={248} size={15} fill={AMBER_DARK} anchor="start" weight={700}>y_G = (y1+y2+y3)/3</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={780} y={276} size={15} fill={AMBER_DARK} anchor="start" weight={700}>z_G = (z1+z2+z3)/3</T>
      </Fade>

      {/* beat 6 — independence: each axis gets its own equation, no mixing */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d={checkD(785, 320, 14)} stroke={GREEN} sw={2.5} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={808} y={324} size={14} fill={INK} anchor="start">
          {t("Each axis, its own equation.", "Har axis, apni equation.")}
        </T>
      </Fade>

      {/* beat 7 — guardrail: always exists, always unique, side-length independent */}
      <Draw on={beat >= 7} delay={dl(7, 0)} d="M 780 410 L 780 462" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={796} y={430} size={13} fill={RED} anchor="start" weight={700}>
          {t("G always exists, always unique —", "G hamesha exist, hamesha unique —")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={796} y={452} size={13} fill={RED} anchor="start" weight={700}>
          {t("independent of side lengths.", "side lengths pe depend nahi karta.")}
        </T>
      </Fade>
    </Scene>
  );
}
