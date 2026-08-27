/**
 * M11 Ch11 · Section 24 — "Reflection chain: track the signs in order"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples. FLAGGED HIGH-SCRUTINY (octant/projection section).
 *
 * Projection recap (math-kit project3D, same convention as M11Ch11Sec15 reference exemplar):
 * +Y -> right, +Z -> up, +X -> down-left (foreshortened). origin(760,330), scale=26,
 * xForeshorten=0.6, xDir=(-cos30,sin30). Per-unit-x screen terms: dScreenX/dx = -0.5196*scale =
 * -13.51, dScreenY/dx = 0.3*scale = 7.8. Per-unit-y: dScreenX/dy = scale = 26. Per-unit-z:
 * dScreenY/dz = -scale = -26.
 *   screenX = 760 + 26y - 13.51x   screenY = 330 - 26z + 7.8x
 *
 * Hand-verified point positions (chosen scale=26, smaller than Sec15's 40, because this problem's
 * z-coordinates run to ±7 — at scale 40 that overflows the 596 safe-y bound; scale 26 keeps every
 * plotted point comfortably inside the canvas):
 *   O (0,0,0)      -> (760, 330)
 *   P (4,-3,7)     -> screenX=760+26(-3)-13.51(4)=760-78-54.04=627.96  screenY=330-26(7)+7.8(4)=330-182+31.2=179.2   => (628, 179)
 *   Q (-4,-3,7)    -> screenX=760+26(-3)-13.51(-4)=760-78+54.04=736.04 screenY=330-182+7.8(-4)=330-182-31.2=116.8   => (736, 117)
 *   R (-4,3,-7)    -> screenX=760+26(3)-13.51(-4)=760+78+54.04=892.04  screenY=330-26(-7)+7.8(-4)=330+182-31.2=480.8 => (892, 481)
 * All four x,y within safe area (x36-1044, y30-596) with comfortable margin. Directional sanity:
 * Q is P with only x flipped (4->-4): screen moves right+up (x=-4 now *reinforces* +y pull, same
 * "negative x pushes toward upper-right" rule Sec15 documented) — matches (628,179)->(736,117).
 * R is Q with y,z flipped (-3->3, 7->-7): z flip (7->-7) is the dominant term, swinging the point
 * from up (117) to far down (481); y flip (-3->3) also pushes right — matches (736,117)->(892,481).
 *
 * Independent hand-check of the worked example itself (not just trusting the JSON):
 *   Reflection in YZ-plane (x=0) flips only x: P(4,-3,7) -> Q(-4,-3,7). Correct.
 *   Reflection in x-axis flips the two coords perpendicular to it (y,z), keeps x: Q(-4,-3,7) ->
 *   R(-4,3,-7). Correct.
 *   Sign pattern of R = (-,+,-). Cross-checked against the canonical NCERT octant table
 *   (x:+,-,-,+,+,-,-,+ / y:+,+,-,-,+,+,-,- / z:+,+,+,+,-,-,-,- for I..VIII): column 6 reads
 *   (x-,y+,z-) = octant VI. Matches the JSON's own answer.
 *
 * Small orientation tripod (axisLen=2.5, purely a compass — not scaled to reach the data points):
 *   X_TIP = proj(2.5,0,0) = (760-13.51*2.5, 330+7.8*2.5) = (726.2, 349.5)
 *   Y_TIP = proj(0,2.5,0) = (760+26*2.5, 330)            = (825, 330)
 *   Z_TIP = proj(0,0,2.5) = (760, 330-26*2.5)             = (760, 265)
 * YZ-plane wedge (fill only, no stroke, size=2.5 = tripod length — reuses Sec15's "labels may sit
 * on a stroke-less fill" convention): O(760,330)-Y_TIP(825,330)-PYZ(825,265)-Z_TIP(760,265),
 * a clean rectangle since x=0 on this plane (no foreshortening term).
 * X-axis highlight (beat4, length 3.5 both directions, to visually mark "the x-axis" itself):
 *   +3.5: (760-13.51*3.5, 330+7.8*3.5) = (712.7, 357.3)   -3.5: (807.3, 302.7)
 *
 * Arrow trims (start 8px off source dot, end ~10px short of target dot, along the unit vector):
 *   P->Q: dir=(108,-62)/124.5=(0.867,-0.498). start=(628+0.867*8,179-0.498*8)=(634.9,175.0)
 *         end=(736-0.867*10,117+0.498*10)=(727.3,122.0)
 *   Q->R: dir=(156,364)/396.0=(0.394,0.919). start=(736+0.394*8,117+0.919*8)=(739.2,124.4)
 *         end=(892-0.394*10,481-0.919*10)=(888.1,471.8)
 * Checked both shafts against every nearby text box (P/Q/R labels, tripod labels) by hand — no
 * shaft crosses a text box (P's label placed to the LEFT of P specifically to dodge the P->Q
 * shaft, which departs P heading up-right).
 *
 * reveals_english = [0, 10.84, 24.66, 40.53, 52.14, 63.06, 78.08, 91.31, 97.02] (9 values, beats 0-8).
 * reveals_hinglish = [0, 11.43, 25.77, 38.06, 48.64, 58.97, 74.92, 86.7, 92.5].
 *
 * Beats (worked_examples arc: given -> setup rule -> step -> setup rule -> step -> read signs ->
 * boxed answer -> sanity/guardrail):
 *  0(title, always-on) | "Reflection chain: track the signs in order"
 *  1 | given: draw tripod + O, plot P, label P(4,-3,7)
 *  2 | YZ-plane rule: fade wedge, "x flips" caption near X tripod arm
 *  3 | step: arrow P->Q, plot Q, label Q(-4,-3,7)
 *  4 | x-axis rule: highlight x-axis, "y, z flip" caption
 *  5 | step: arrow Q->R, plot R, label R(-4,3,-7)
 *  6 | read signs: ring R's label
 *  7 | boxed answer: arrow + green chip "Octant VI"
 *  8 | guardrail: red bar + 3-line note (order/flip-count discipline)
 *
 * Layout plan (left column x60-360 narration; diagram owns x600-1044):
 *  b0 | title                        | T mid   | x540 y58
 *  b1 | left text 3L                 | T start | x60 y100/123/146
 *  b1 | tripod X/Y/Z + O dot/label   | Draw+T  | O(760,330)->(726,350)/(825,330)/(760,265)
 *  b1 | P dot + label                | Fade+T  | (628,179); label (616,173) anchor end
 *  b2 | left text 1L                 | T start | x60 y190
 *  b2 | YZ wedge fill                | Fade    | (760,330)-(825,330)-(825,265)-(760,265)
 *  b2 | "x flips" caption            | T end   | x700 y366
 *  b3 | arrow P->Q + Q dot/label     | Draw+T  | (634.9,175)->(727.3,122); label (746,108) start
 *  b4 | left text 1L                 | T start | x60 y234
 *  b4 | x-axis highlight             | Draw    | (807.3,302.7)-(712.7,357.3)
 *  b4 | "y, z flip" caption          | T end   | x700 y396
 *  b5 | arrow Q->R + R dot/label     | Draw+T  | (739.2,124.4)->(888.1,471.8); label (902,475) start
 *  b6 | left text 1L                 | T start | x60 y278
 *  b6 | ring R label                 | Draw    | ringD(944.5,471.7,56,19.6)
 *  b7 | arrow + Chip "Octant VI"     | Draw+Chip | (936,506)->(875,522); chip x800 y525 w140 h40
 *  b8 | red bar + 3L guardrail       | Draw+T  | x60 y312-386 / text x76 y332/354/376
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
  Chip,
  arrowD,
  ringD,
  INK,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { project3D } from "./math-kit";

const OX = 760;
const OY = 330;
const SCALE = 26;
const proj = (x: number, y: number, z: number) => project3D(x, y, z, OX, OY, SCALE);

const O = { x: OX, y: OY };
const P = proj(4, -3, 7); // (628, 179.2)
const Q = proj(-4, -3, 7); // (736.04, 116.8)
const R = proj(-4, 3, -7); // (892.04, 480.8)

const X_TIP = proj(2.5, 0, 0); // (726.2, 349.5)
const Y_TIP = proj(0, 2.5, 0); // (825, 330)
const Z_TIP = proj(0, 0, 2.5); // (760, 265)
const PYZ = proj(0, 2.5, 2.5); // (825, 265)
const YZ_PTS = `${O.x},${O.y} ${Y_TIP.x},${Y_TIP.y} ${PYZ.x},${PYZ.y} ${Z_TIP.x},${Z_TIP.y}`;

const XAXIS_POS = proj(3.5, 0, 0); // (712.7, 357.3)
const XAXIS_NEG = proj(-3.5, 0, 0); // (807.3, 302.7)

// arrow trims (8px off source, ~10px short of target, along unit vector)
const PQ_START = { x: 634.9, y: 175.0 };
const PQ_END = { x: 727.3, y: 122.0 };
const QR_START = { x: 739.2, y: 124.4 };
const QR_END = { x: 888.1, y: 471.8 };

// R label box (14px "R(-4, 3, -7)" starting at 902,475) -> ring geometry
const R_LABEL = { x: 902, y: 475 };
const R_RING_CX = 944.5;
const R_RING_CY = 471.7;

export default function M11Ch11Sec24({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={RED} anchor="middle" script>
          {t("Reflection chain: track the signs in order", "Reflection chain: signs ka order track karo")}
        </T>
      </Fade>

      {/* beat 1 — given: P(4,-3,7), tripod + origin, plot P */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={60} y={100} size={14} fill={INK} anchor="start">
          {t("P(4, -3, 7): reflect in YZ-plane", "P(4, -3, 7) ko YZ-plane mein")}
        </T>
        <T x={60} y={123} size={14} fill={INK} anchor="start">
          {t("to get Q, then reflect Q in x-axis", "reflect karke Q milta hai, phir")}
        </T>
        <T x={60} y={146} size={14} fill={INK} anchor="start">
          {t("to get R.", "Q ko x-axis mein reflect karke R.")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d={arrowD(O.x, O.y, X_TIP.x, X_TIP.y)} stroke={INK} sw={2} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d={arrowD(O.x, O.y, Y_TIP.x, Y_TIP.y)} stroke={INK} sw={2} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 0.9)} d={arrowD(O.x, O.y, Z_TIP.x, Z_TIP.y)} stroke={INK} sw={2} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <Circle cx={O.x} cy={O.y} r={4} fill={RED} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.45)}>
        <T x={766} y={350} size={12} fill={RED} anchor="start" weight={700}>O</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={714} y={356} size={12} fill={INK} anchor="end" weight={700}>X</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.55)}>
        <T x={839} y={330} size={12} fill={INK} anchor="start" weight={700}>Y</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={760} y={251} size={12} fill={INK} anchor="middle" weight={700}>Z</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.7)}>
        <Circle cx={P.x} cy={P.y} r={4.5} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.9)}>
        <T x={616} y={173} size={14} fill={INK} anchor="end" weight={700}>
          P(4, -3, 7)
        </T>
      </Fade>

      {/* beat 2 — YZ-plane flips only x */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={60} y={190} size={14} fill={INK} anchor="start">
          {t("Reflection in the YZ-plane flips only x.", "YZ-plane mein reflection sirf x flip karta hai.")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <Polygon points={YZ_PTS} fill={AMBER} fillOpacity={0.18} stroke="none" />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.9)} d={ringD(X_TIP.x, X_TIP.y, 14, 12)} stroke={AMBER_DARK} sw={1.8} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={700} y={366} size={11} fill={AMBER_DARK} anchor="end">
          {t("x flips", "x flip")}
        </T>
      </Fade>

      {/* beat 3 — step: P reflects to Q */}
      <Draw on={beat >= 3} delay={dl(3, 0)} d={arrowD(PQ_START.x, PQ_START.y, PQ_END.x, PQ_END.y)} stroke={AMBER_DARK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <Circle cx={Q.x} cy={Q.y} r={4.5} fill={INK} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={746} y={108} size={14} fill={INK} anchor="start" weight={700}>
          Q(-4, -3, 7)
        </T>
      </Fade>

      {/* beat 4 — x-axis flips y and z */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={60} y={234} size={14} fill={INK} anchor="start">
          {t("Reflection in the x-axis flips y and z.", "x-axis mein reflection y aur z flip karta hai.")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.3)} d={`M ${XAXIS_NEG.x} ${XAXIS_NEG.y} L ${XAXIS_POS.x} ${XAXIS_POS.y}`} stroke={AMBER} sw={3.5} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={700} y={396} size={11} fill={AMBER_DARK} anchor="end">
          {t("y, z flip", "y, z flip")}
        </T>
      </Fade>

      {/* beat 5 — step: Q reflects to R */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={arrowD(QR_START.x, QR_START.y, QR_END.x, QR_END.y)} stroke={AMBER_DARK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <Circle cx={R.x} cy={R.y} r={4.5} fill={INK} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={902} y={475} size={14} fill={INK} anchor="start" weight={700}>
          R(-4, 3, -7)
        </T>
      </Fade>

      {/* beat 6 — read the signs of R */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={60} y={278} size={14} fill={INK} anchor="start">
          {t("Sign pattern of R: (-, +, -).", "R ka sign pattern: (-, +, -).")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.4)} d={ringD(R_RING_CX, R_RING_CY, 56, 19.6)} stroke={AMBER} sw={2.2} dur={0.5} />

      {/* beat 7 — boxed answer: octant VI */}
      <Draw on={beat >= 7} delay={dl(7, 0)} d={arrowD(936, 506, 875, 522)} stroke={GREEN} sw={2.2} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <Chip x={800} y={525} w={140} h={40} fill={GREEN} textFill={CREAM} size={18} script>
          Octant VI
        </Chip>
      </Fade>

      {/* beat 8 — guardrail: order + flip-count discipline */}
      <Draw on={beat >= 8} delay={dl(8, 0)} d="M 60 312 L 60 386" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 0.5)}>
        <T x={76} y={332} size={13} fill={RED} anchor="start" weight={700}>
          {t("Order matters: plane = one flip,", "Order matters: plane ek flip karta hai,")}
        </T>
        <T x={76} y={354} size={13} fill={RED} anchor="start" weight={700}>
          {t("axis = two flips. Sequence them", "axis do flips karta hai.")}
        </T>
        <T x={76} y={376} size={13} fill={RED} anchor="start" weight={700}>
          {t("carefully.", "Sequence carefully karo.")}
        </T>
      </Fade>
    </Scene>
  );
}
