/**
 * M11 Ch11 · Section 27 — "Distance in space: Pythagoras used twice"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — opens subtopic 3 (Distance and Section Formulas in 3D), genuinely 3D
 * from the start (unlike the flat "Applications" subtopic 1). Uses project3D/ThreeDAxes system
 * from Sec15 (this chapter's 3D reference exemplar).
 *
 * Projection: origin(760,380), scale=45, xForeshorten=0.6 (project3D, math-kit, verified there):
 *   screenX = 760 + 45y - 23.383x   screenY = 380 - 45z + 13.5x   (factorX=0.5196152, factorY=0.3)
 * Illustrative box (not given in JSON — this section states the formula symbolically, no numeric
 * example): P = local (0,0,0) placed AT the projection origin, Q = P + (dx,dy,dz) with dx=4 (depth,
 * +X foreshortened), dy=4 (width, +Y right), dz=4 (height, +Z up). M = foot of the perpendicular
 * from Q down to P's floor level = local (4,4,0) — this is the right-angle vertex of triangle PMQ.
 * Hand-verified projected points (proj = project3D(x,y,z,760,380,45)):
 *   P = proj(0,0,0) = (760, 380)
 *   A = proj(4,0,0) = (760 - 45*0.5196152*4, 380 + 45*0.3*4) = (666.47, 434)   [floor corner]
 *   B = proj(0,4,0) = (760 + 45*4, 380) = (940, 380)                          [floor corner]
 *   M = proj(4,4,0) = (666.47+180... ) = (760+180-93.53, 380+54) = (846.47, 434)  [floor, under Q]
 *   Q = proj(4,4,4) = (846.47, 434 - 45*4) = (846.47, 254)                    [opposite corner]
 *   C = proj(0,0,4) = (760, 380-180) = (760, 200)                            [top, above P]
 *   D = proj(4,0,4) = (666.47, 434-180) = (666.47, 254)                      [top corner]
 *   E = proj(0,4,4) = (940, 380-180) = (940, 200)                            [top corner]
 * All 8 corners land in x[666.47,940] y[200,434] — comfortably inside the safe area, well clear
 * of the left-column text (x60-330) and the small 2D recap diagram (x800-972, y50-182, gap ≥18px
 * to the box's top y=200). Triangle P-M-Q is right-angled at M (MQ ⟂ the floor plane, PM lies in
 * it): PM = floor leg = √(dx²+dy²) [Pythagoras #1, the already-known 2D case], MQ = height leg =
 * dz, PQ = space diagonal = √(PM²+MQ²) = √(dx²+dy²+dz²) [Pythagoras #2] — verified algebraically:
 * √(4²+4²) then combined with 4² via Pythagoras again = the general 3-term formula, exactly the
 * "applied twice" claim. No numeric final answer is stated on the board (JSON's own formula beat
 * is symbolic, Δx/Δy/Δz — a worked numeric example isn't part of this section).
 * Small 2D recap diagram (beat 1, the flat case "you already know"): P0=(800,160), Pr=(960,160)
 * [right-angle corner], P1=(960,95). Legs P0-Pr (Δx) and Pr-P1 (Δy), hypotenuse P0-P1.
 * z-hint arrow (beat 2): (960,95) -> (960,50), labeled "z" — visualizes "lift into the third
 * direction" right where the flat diagram left off.
 *
 * reveals_english = [0, 15.7, 31.66, 44.89, 54.36, 66.99, 86.61, 94.2] (8 values, beats 0-7).
 * reveals_hinglish = [0, 14.59, 28.59, 39.59, 49.24, 61.44, 77.06, 86.95].
 *
 * Beats:
 *  0(title, always-on) | "Distance in 3D: Pythagoras, applied twice"
 *  1 | left text: "on paper, gap = √(Δx²+Δy²)" + draw small flat right-triangle (recap)
 *  2 | left text: "space adds a third perpendicular direction" + z-hint arrow from the recap
 *  3 | THE DIAGRAM: 3D box wireframe (P,Q opposite corners) + floor fill + caption
 *  4 | left text: "walk the floor, then rise by Δz" + draw floor leg PM, height leg MQ, M marked
 *  5 | left column: 3-line derivation (floor leg² = ...; distance² = floor leg² + Δz²; combined)
 *    + draw hypotenuse PQ (green) as the formula lands
 *  6 | checkmark + closing text: "that single picture is the entire formula"
 *  7 | red guardrail: longest rod = space diagonal; red retrace of PQ on the diagram
 *
 * Layout plan (left column x60 narrates + derives; diagram owns the right ~x660-1010):
 *  b0 | title (26,red,script)            | T mid   | x540 y58
 *  b1 | left text 2L                     | T start | x60 y100/123
 *  b1 | recap triangle P0-Pr-P1 + Δx/Δy  | Draw+T  | (800,160)-(960,160)-(960,95)
 *  b2 | left text 2L                     | T start | x60 y158/181
 *  b2 | z-hint arrow + label             | Draw+T  | (960,95)->(960,50), "z" (972,55)
 *  b3 | box wireframe (floor/top/verts)  | Draw    | corners listed above
 *  b3 | floor fill (cream, no stroke)    | Fade    | polygon P-A-M-B
 *  b3 | P dot+label, Q dot+label         | Fade+T  | P(760,380) label(740,378) end
 *                                                     Q(846.47,254) label(846.47,236) mid
 *  b3 | caption 2L                        | T mid   | x803 y478/500
 *  b4 | left text 2L                     | T start | x60 y216/239
 *  b4 | floor leg PM (amber) + M dot/lbl | Draw+T  | P->M, M label (866,448) start
 *  b4 | height leg MQ (amber_dark)       | Draw    | M->Q
 *  b5 | 3-line derivation (amber/amber_dark/green) | T start | x60 y280/308/336
 *  b5 | hypotenuse PQ (green)            | Draw    | P->Q
 *  b6 | checkmark + 2L closing           | Draw+T  | (66,376) / x84 y380/403
 *  b7 | red bar + 2L guardrail           | Draw+T  | x60 y442-496 / x76 y460/483
 *  b7 | red retrace of PQ                | Draw    | P->Q (over the green line)
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
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { project3D, lineD, checkD } from "./math-kit";

const OX = 760;
const OY = 380;
const SCALE = 45;
const proj = (x: number, y: number, z: number) => project3D(x, y, z, OX, OY, SCALE);

const P = proj(0, 0, 0); // (760,380)
const A = proj(4, 0, 0); // (666.47,434)
const B = proj(0, 4, 0); // (940,380)
const M = proj(4, 4, 0); // (846.47,434)
const Q = proj(4, 4, 4); // (846.47,254)
const C = proj(0, 0, 4); // (760,200)
const D = proj(4, 0, 4); // (666.47,254)
const E = proj(0, 4, 4); // (940,200)

const floorD = `M ${P.x} ${P.y} L ${A.x} ${A.y} L ${M.x} ${M.y} L ${B.x} ${B.y} Z`;
const topD = `M ${C.x} ${C.y} L ${D.x} ${D.y} L ${Q.x} ${Q.y} L ${E.x} ${E.y} Z`;
const vertD = `M ${P.x} ${P.y} L ${C.x} ${C.y} M ${A.x} ${A.y} L ${D.x} ${D.y} M ${M.x} ${M.y} L ${Q.x} ${Q.y} M ${B.x} ${B.y} L ${E.x} ${E.y}`;
const floorFillPts = `${P.x},${P.y} ${A.x},${A.y} ${M.x},${M.y} ${B.x},${B.y}`;

// small 2D recap diagram (the flat, already-known case)
const P0 = { x: 800, y: 160 };
const PR = { x: 960, y: 160 };
const P1 = { x: 960, y: 95 };

export default function M11Ch11Sec27({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={RED} anchor="middle" script>
          {t("Distance in 3D: Pythagoras, applied twice", "3D mein Distance: Pythagoras, do baar")}
        </T>
      </Fade>

      {/* beat 1 — the flat, already-known case */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={60} y={100} size={14} fill={INK} anchor="start">
          {t("On paper, the gap is √(Δx²+Δy²) —", "Flat paper par gap hai √(Δx²+Δy²) —")}
        </T>
        <T x={60} y={123} size={14} fill={INK} anchor="start">
          {t("a right-triangle hypotenuse.", "ek right-triangle ka hypotenuse.")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0)} d={lineD(P0.x, P0.y, PR.x, PR.y)} stroke={INK} sw={1.6} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d={lineD(PR.x, PR.y, P1.x, P1.y)} stroke={INK} sw={1.6} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 1.0)} d={lineD(P0.x, P0.y, P1.x, P1.y)} stroke={AMBER} sw={2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <Circle cx={P0.x} cy={P0.y} r={3} fill={INK} />
        <Circle cx={P1.x} cy={P1.y} r={3} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={880} y={182} size={12} fill={MUTED} anchor="middle">{"Δx"}</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.0)}>
        <T x={972} y={131} size={12} fill={MUTED} anchor="start">{"Δy"}</T>
      </Fade>

      {/* beat 2 — space adds a third perpendicular direction */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={60} y={158} size={14} fill={INK} anchor="start">
          {t("Space adds a third perpendicular", "Space ek teesri perpendicular")}
        </T>
        <T x={60} y={181} size={14} fill={INK} anchor="start">
          {t("direction — apply Pythagoras once more.", "direction jodta hai — Pythagoras dobara.")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0)} d={arrowD(P1.x, P1.y, 960, 50)} stroke={MUTED} sw={1.8} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={972} y={55} size={12} fill={MUTED} anchor="start" weight={700}>z</T>
      </Fade>

      {/* beat 3 — THE DIAGRAM: the 3D box, P and Q at opposite corners */}
      <Draw on={beat >= 3} delay={dl(3, 0)} d={floorD} stroke={INK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 0.6)} d={topD} stroke={INK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 1.2)} d={vertD} stroke={INK} sw={1.8} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <Polygon points={floorFillPts} fill={CREAM} fillOpacity={0.7} stroke="none" />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.0)}>
        <Circle cx={P.x} cy={P.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.15)}>
        <T x={740} y={378} size={13} fill={INK} anchor="end" weight={700}>P</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.3)}>
        <Circle cx={Q.x} cy={Q.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.45)}>
        <T x={846.47} y={236} size={13} fill={INK} anchor="middle" weight={700}>Q</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.7)}>
        <T x={803} y={478} size={13} fill={MUTED} anchor="middle">
          {t("Space diagonal = hypotenuse of", "Space diagonal = hypotenuse hai")}
        </T>
        <T x={803} y={500} size={13} fill={MUTED} anchor="middle">
          {t("(floor leg, height leg)", "(floor leg, height leg) ka")}
        </T>
      </Fade>

      {/* beat 4 — walk the floor, then rise by delta z */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={60} y={216} size={14} fill={INK} anchor="start">
          {t("Walk across the floor first,", "Pehle floor paar chalo,")}
        </T>
        <T x={60} y={239} size={14} fill={INK} anchor="start">
          {t("then rise straight up by Δz.", "phir seedha Δz upar utho.")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0)} d={lineD(P.x, P.y, M.x, M.y)} stroke={AMBER} sw={2.6} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <Circle cx={M.x} cy={M.y} r={3} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.75)}>
        <T x={866} y={448} size={12} fill={MUTED} anchor="start">M</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.1)} d={lineD(M.x, M.y, Q.x, Q.y)} stroke={AMBER_DARK} sw={2.6} dur={0.5} />

      {/* beat 5 — the derivation: two Pythagoras steps, then the combined formula */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={60} y={280} size={15} fill={AMBER} anchor="start" weight={700}>
          floor leg{"²"} = ({"Δx"}){"²"} + ({"Δy"}){"²"}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={60} y={308} size={15} fill={AMBER_DARK} anchor="start" weight={700}>
          distance{"²"} = floor leg{"²"} + ({"Δz"}){"²"}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.0)}>
        <T x={60} y={336} size={15} fill={GREEN} anchor="start" weight={700}>
          distance{"²"} = ({"Δx"}){"²"}+({"Δy"}){"²"}+({"Δz"}){"²"}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.3)} d={lineD(P.x, P.y, Q.x, Q.y)} stroke={GREEN} sw={3} dur={0.6} />

      {/* beat 6 — that single picture is the entire formula */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d={checkD(66, 376, 14)} stroke={GREEN} sw={2.5} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={84} y={380} size={14} fill={INK} anchor="start">
          {t("That single picture is the entire", "Yehi ek picture poora 3D")}
        </T>
        <T x={84} y={403} size={14} fill={INK} anchor="start">
          {t("3D distance formula.", "distance formula hai.")}
        </T>
      </Fade>

      {/* beat 7 — guardrail: the longest rod that fits a room is its space-diagonal */}
      <Draw on={beat >= 7} delay={dl(7, 0)} d="M 60 442 L 60 496" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={76} y={460} size={13} fill={RED} anchor="start" weight={700}>
          {t("It's why the longest rod that fits", "Isiliye room mein fit hone wala")}
        </T>
        <T x={76} y={483} size={13} fill={RED} anchor="start" weight={700}>
          {t("a room lies along its diagonal.", "sabse lamba rod diagonal hota hai.")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.9)} d={lineD(P.x, P.y, Q.x, Q.y)} stroke={RED} sw={5} dur={0.5} />
    </Scene>
  );
}
