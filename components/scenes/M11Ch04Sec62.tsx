/**
 * M11 Ch04 · Section 62 — "Worked (JEE Advanced): find a square's vertex by rotation"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples (JEE Advanced) — subtopic 6 (Geometry of Complex Numbers).
 *
 * Numbers verified from JSON + node script: A=1+2i, B=3+i, square ABCD anticlockwise.
 * zA-zB = (1+2i)-(3+i) = -2+i. zC-zB = (-2+i)(-i) = 2i-i² = 1+2i. zC = (3+i)+(1+2i) = 4+3i.
 * Fourth vertex (sanity check, own derivation, D = A+(C-B)): D = 2+4i — verified: all
 * four sides length √5, consecutive sides perpendicular (dot=0), cross(AB,BC)=5>0 (CCW).
 * Screen mapping (scale=95, centre (720,380), plane centred at Re=Im=2.5):
 *   A=(577.5,427.5) B=(767.5,522.5) C=(862.5,332.5) D=(672.5,237.5).
 * Angle at B between BA (θ=153.43°) and BC (θ=63.43°): verified 90° apart (node),
 * arc drawn there, NOT at the origin.
 *
 * Beats (board_reveal_at_english [0, 5.55, 16.9, 32.68, 45.65, 54.7, 66.73, 78.42]):
 *  0 subtitle: "Rotation theorem builds the vertex"
 *  1 problem: square ABCD (anticlockwise), A=1+2i, B=3+i. Find C. Plot A,B + side AB.
 *  2 reasoning: rotate BA about B by -90° to reach BC — angle arc AT B (pivot)
 *  3 formula: zC-zB = (zA-zB)·e^(-iπ/2) = (zA-zB)(-i)
 *  4 formula: zA-zB = (1+2i)-(3+i) = -2+i
 *  5 formula: zC-zB = (-2+i)(-i) = 2i-i² = 1+2i
 *  6 land (boxed): zC = (3+i)+(1+2i) = 4+3i — plot C, draw side BC (green)
 *  7 guardrail (red-margin) + sanity check: plot D, close the square (muted)
 *
 * Layout plan (left column x60 formula derivation, diagram right, scale=95 cx=720 cy=380):
 *  b0 | subtitle (15,amber_dark,w700)  | T mid | x540 y92
 *  b1 | problem (16,ink)               | T mid | x540 y126
 *  b1 | A dot+label "A = 1 + 2i" end   | circle+T | (577.5,427.5) label x539.6 y444
 *  b1 | B dot+label "B = 3 + i" mid    | circle+T | (767.5,522.5) label x780.1 y564
 *  b1 | side A-B                      | Draw | (577.5,427.5)→(767.5,522.5)
 *  b2 | reasoning (15,ink)            | T mid | x540 y160
 *  b2 | angle arc AT B r=42 153.4°→63.4° | Draw | centre (767.5,522.5)
 *  b2 | "-90°" label                  | T mid | x747.3 y466
 *  b3 | formula1 (15,ink) st          | T st  | x60 y230
 *  b4 | formula2 (15,ink) st          | T st  | x60 y272
 *  b5 | formula3 (15,ink) st          | T st  | x60 y314
 *  b6 | formula4 chip (green, boxed)  | Chip  | x60..380 y356..394
 *  b6 | C dot(green)+label "C=4+3i" start | circle+T | (862.5,332.5) label x900.4 y324
 *  b6 | side B-C (green)              | Draw | (767.5,522.5)→(862.5,332.5)
 *  b7 | guardrail (15,red,w700)       | T mid | x540 y570
 *  b7 | D dot(muted)+label "D=2+4i"   | circle+T | (672.5,237.5) label x659.9 y198
 *  b7 | sides C-D, D-A (muted)        | Draw | close the square
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
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { pointOnCircle, angleArcD, lineD } from "./math-kit";

const A = { x: 577.5, y: 427.5 };
const B = { x: 767.5, y: 522.5 };
const C = { x: 862.5, y: 332.5 };
const D = { x: 672.5, y: 237.5 };

// angle arc at pivot B between ray B->A (153.43°) and ray B->C (63.43°) — verified 90° apart
const THETA_BA = (153.43494882292202 * Math.PI) / 180;
const THETA_BC = (63.43494882292201 * Math.PI) / 180;
const ARC_LABEL = pointOnCircle(B.x, B.y, 64, (THETA_BA + THETA_BC) / 2);

export default function M11Ch04Sec62({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Find a Square's Vertex by Rotation", "Rotation se Square ka Vertex Nikaalna")}
        </T>
      </Fade>

      {/* beat 0 — subtitle */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={92} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Rotation theorem builds the vertex", "Rotation theorem se vertex banta hai")}
        </T>
      </Fade>

      {/* beat 1 — problem: plot A, B + side AB */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={126} size={16} fill={INK} anchor="middle">
          {t(
            "Square ABCD (anticlockwise): A = 1 + 2i, B = 3 + i. Find C.",
            "Square ABCD (anticlockwise): A = 1 + 2i, B = 3 + i. C nikaalo."
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <Circle cx={A.x} cy={A.y} r={4.5} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={539.6} y={444} size={13} fill={INK} anchor="end" weight={700}>A = 1 + 2i</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <Circle cx={B.x} cy={B.y} r={4.5} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={780.1} y={564} size={13} fill={INK} anchor="middle" weight={700}>B = 3 + i</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.7)} d={lineD(A.x, A.y, B.x, B.y)} stroke={INK} sw={2.2} dur={0.5} />

      {/* beat 2 — reasoning: rotate BA about B by -90° (angle arc AT the pivot B) */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={160} size={15} fill={INK} anchor="middle">
          {t("Rotate BA about B by -90° to reach BC.", "BA ko B ke baare mein -90° rotate karo, BC milega.")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d={angleArcD(B.x, B.y, 42, THETA_BA, THETA_BC)} stroke={AMBER_DARK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={ARC_LABEL.x} y={ARC_LABEL.y + 4} size={12} fill={AMBER_DARK} anchor="middle" weight={700}>-90°</T>
      </Fade>

      {/* beat 3 — formula: zC - zB = (zA - zB)·e^(-iπ/2) = (zA - zB)(-i) */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={60} y={230} size={15} fill={INK} anchor="start">
          zC - zB = (zA - zB) · e^(-iπ/2) = (zA - zB)(-i)
        </T>
      </Fade>

      {/* beat 4 — formula: zA - zB = -2 + i */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={60} y={272} size={15} fill={INK} anchor="start">
          zA - zB = (1 + 2i) - (3 + i) = -2 + i
        </T>
      </Fade>

      {/* beat 5 — formula: zC - zB = (-2+i)(-i) = 1 + 2i */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={60} y={314} size={15} fill={INK} anchor="start">
          zC - zB = (-2 + i)(-i) = 2i - i² = 1 + 2i
        </T>
      </Fade>

      {/* beat 6 — land: zC = 4 + 3i (boxed), plot C, draw side BC */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Chip x={60} y={356} w={320} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={15} script={false}>
          zC = (3 + i) + (1 + 2i) = 4 + 3i
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <Circle cx={C.x} cy={C.y} r={4.5} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={900.4} y={324} size={13} fill={GREEN} anchor="start" weight={700}>C = 4 + 3i</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.2)} d={lineD(B.x, B.y, C.x, C.y)} stroke={GREEN} sw={2.4} dur={0.5} />

      {/* beat 7 — guardrail + sanity check: complete the square with D */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={570} size={15} fill={RED} anchor="middle" weight={700}>
          {t("Turn direction comes from the labelling.", "Turn ki direction labelling se aati hai.")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <Circle cx={D.x} cy={D.y} r={4} fill={MUTED} />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <T x={659.9} y={198} size={12} fill={MUTED} anchor="middle">D = 2 + 4i</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.2)} d={lineD(C.x, C.y, D.x, D.y)} stroke={MUTED} sw={1.8} dur={0.4} />
      <Draw on={beat >= 7} delay={dl(7, 1.6)} d={lineD(D.x, D.y, A.x, A.y)} stroke={MUTED} sw={1.8} dur={0.4} />
    </Scene>
  );
}
