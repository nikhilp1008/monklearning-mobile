/**
 * M11 Ch11 · Section 36 — "Advanced: the perpendicular bisector plane"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples. Closes "Distance and Section Formulas in 3D" alongside Sec37.
 * Pattern follows M11Ch11Sec22/Sec24/Sec35 (left column narration+algebra, right column
 * project3D diagram): proj = (x,y,z) => project3D(x,y,z,OX,OY,SCALE).
 *
 * *** FLAGGED SOURCE DATA BUG (do not silently fix — using the JSON's arrays exactly per brief) ***
 * board_reveal_at_english[7] = 98.99, but duration_sec_english = 94.58 (reveal EXCEEDS total
 * audio length). board_reveal_at_hinglish[7] = 99.07 vs duration_sec_hinglish = 87.24 (same bug,
 * worse overshoot). Both arrays are also non-monotonic at the tail (index 7 > index 8: en
 * 98.99 > 94.08; hi 99.07 > 86.74). Net effect on useBeat (strictly-greater, first-failure-breaks
 * loop): beat 7's own content never becomes the *sole* active beat during real playback — once
 * currentTime clears reveals[6], beat sticks at 6 for the rest of playback (since it can never
 * exceed the impossible reveals[7]), so beats 7 and 8 do not fire during normal audio playback in
 * either language. Implemented faithfully per the brief's "use exactly these reveals" instruction;
 * flagging here and in the final report rather than silently renumbering the source data.
 *
 * Problem: A(1,2,3), B(3,2,-1). Find every point P equidistant from A and B; name the surface.
 * Independently hand-solved (not just trusting the JSON's claimed answer):
 *   PA² = (x-1)²+(y-2)²+(z-3)²   PB² = (x-3)²+(y-2)²+(z+1)²
 *   (y-2)² is IDENTICAL on both sides -> cancels before even expanding.
 *   (x-1)²+(z-3)² = (x-3)²+(z+1)²
 *   x²-2x+1+z²-6z+9 = x²-6x+9+z²+2z+1  ->  -2x-6z+10 = -6x+2z+10  [MATCHES JSON seq6 exactly]
 *   4x-8z=0  =>  x-2z=0                                            [MATCHES JSON seq7 exactly]
 *   Sanity: midpoint M(2,2,1): 2-2(1)=0, ON the plane (expected — a bisector plane always
 *   contains the midpoint). Direction AB = B-A = (2,0,-4) = 2*(1,0,-2), and (1,0,-2) is exactly
 *   the plane x-2z=0's normal vector -> AB ⊥ plane. Confirms "perpendicular bisector plane."
 *
 * Projection (math-kit project3D, xForeshorten=0.6): OX=800, OY=300, SCALE=40.
 *   screenX = 800 + 40y - 20.7846x   screenY = 300 - 40z + 12x
 * Hand-verified points (all safe-area-checked, x in [36,1044], y in [30,596]):
 *   O = (800, 300)
 *   A(1,2,3)  -> screenX=800+80-20.78=859.22   screenY=300-120+12=192.00   -> (859.22, 192.00)
 *   B(3,2,-1) -> screenX=800+80-62.35=817.65   screenY=300+40+36=376.00   -> (817.65, 376.00)
 *   P sample (2,3,1), a point ON the derived plane (2-2(1)=0 checked above):
 *             -> screenX=800+120-41.57=878.43  screenY=300-40+24=284.00   -> (878.43, 284.00)
 *   X_TIP=proj(4.5,0,0) -> (706.47, 354.00)     down-left, past the plane patch's x=4 extent
 *   Z_TIP=proj(0,0,3.5) -> (800.00, 160.00)     straight up, past A's z=3
 *   ZN_TIP=proj(0,0,-1.5)->(800.00, 360.00)     straight down, past B's z=-1
 *   Y_TIP=proj(0,5,0)   -> (1000.00, 300.00)    straight right, past the plane patch's y=4 extent
 *   Plane patch corners (a parallelogram lying IN x-2z=0, spanned by in-plane directions
 *   (0,1,0) and (2,0,1) from a point on the plane; each corner independently checked x-2z=0):
 *     C1=(4,4,2)->(876.86,268.00)  C2=(0,4,0)->(960.00,300.00)
 *     C3=(0,0,0)->(800.00,300.00)=O  C4=(4,0,2)->(716.86,268.00)
 *   Cycle order C1-C2-C3-C4 traces a simple (non-self-intersecting) quadrilateral (adjacent
 *   corners share the varying-parameter axis each edge represents).
 * All within safe area; diagram's leftmost feature (X_TIP x=706.47) sits well clear of the left
 * narration column (max text-right-edge ~403), gutter ~300px, never crossed.
 *
 * reveals_english  = [0, 8.19, 19.63, 34.9, 52.99, 72.02, 86.02, 98.99, 94.08] (9 values, beats 0-8).
 * reveals_hinglish = [0, 9.47, 19.63, 35.33, 54.1, 71.68, 85.16, 99.07, 86.74].
 *
 * Beats (worked_examples arc: given -> setup the object -> equation -> step by step -> boxed
 * answer -> sanity/guardrail):
 *  0 (title, always-on) | "Advanced: the perpendicular bisector plane"
 *  1 | given: draw axes (X+,Z+,Z-,Y+) + O; plot A, B with labels
 *  2 | setup: "Take P(x,y,z) with PA²=PB²." + a DASHED/muted placeholder P (unknown location,
 *      tagged "P ?") + muted construction lines P->A, P->B tagged PA/PB
 *  3 | formula 1 (substituted): "(x-1)²+(y-2)²+(z-3)²=(x-3)²+(y-2)²+(z+1)²" + underline
 *  4 | text: "(y-2)² cancels; every squared term cancels." (amber, structural insight)
 *  5 | formula 2 (surviving linear terms): "-2x-6z+10=-6x+2z+10" + underline
 *  6 | formula 3 (solved): "4x-8z=0 ⇒ x-2z=0" + ring around "x-2z=0"
 *  7 | payoff: green Chip "Plane: x - 2z = 0"; diagram erases the dashed placeholder P/lines,
 *      shades the plane patch (green), and upgrades P to a solid green dot + checkmark
 *  8 | red-margin guardrail: equidistant from two POINTS -> a single plane (the bisector)
 *
 * Layout plan (left column x60, text right edge <=403; diagram x706-1044):
 *  b0 | title                              | T mid    | x540 y58
 *  b1 | given 3L                           | T start  | x60 y100/123/146
 *  b1 | X,Z+,Z-,Y arrows + O dot/label     | Draw+T   | O(800,300)
 *  b1 | axis labels X/Z/Z'/Y               | T        | (688,368)/(800,144)/(818,364)/(1006,304)
 *  b1 | A dot + label                     | Fade+T   | (859.22,192.00); label start (868,182)
 *  b1 | B dot + label                     | Fade+T   | (817.65,376.00); label start (826,398)
 *  b2 | setup 1L                          | T start  | x60 y186
 *  b2 | dashed P dot + "P ?" label        | Fade+T   | (878.43,284.00); label start (886,280)
 *  b2 | construction lines P->A, P->B     | Draw     | muted, + tiny "PA"/"PB" tags
 *  b3 | formula1 + underline              | T+Draw   | x60 y228, underline y244
 *  b4 | insight 2L                        | T start  | x60 y266/289
 *  b5 | formula2 + underline              | T+Draw   | x60 y332, underline y348
 *  b6 | formula3 (2-seg) + ring on suffix | T+Draw   | x60 y388; ring cx210 cy384.24 rx54 ry20.72
 *  b7 | Chip "Plane: x - 2z = 0"          | Chip     | x60 y440 w210 h42
 *  b7 | diagram: erase dashed P/lines, shade plane patch, upgrade P to green dot + check
 *  b8 | red bar + 2L guardrail            | Draw+T   | x60 y510-570 / text x76 y530/553
 *
 * Vertical budget: title bottom~70.5 -> b1(100-150.34) -> b2(174.3-190.65) -> b3(216.08-244
 * underline) -> b4(255.08-293.34) -> b5(319.52-348 underline) -> b6(359.52-411.18 ring bottom)
 * -> b7 chip(440-482) -> b8 bar(510-570, text bottom~557) <= safe 596. Group gaps checked >=
 * the spec's minimums throughout.
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
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { project3D, lineD, checkD } from "./math-kit";

const OX = 800;
const OY = 300;
const SCALE = 40;
const proj = (x: number, y: number, z: number) => project3D(x, y, z, OX, OY, SCALE);

const O = { x: OX, y: OY };
const A = proj(1, 2, 3); // (859.22, 192.00)
const B = proj(3, 2, -1); // (817.65, 376.00)
const P = proj(2, 3, 1); // (878.43, 284.00) — a sample point ON the derived plane

const X_TIP = proj(4.5, 0, 0); // (706.47, 354.00)
const Z_TIP = proj(0, 0, 3.5); // (800.00, 160.00)
const ZN_TIP = proj(0, 0, -1.5); // (800.00, 360.00)
const Y_TIP = proj(0, 5, 0); // (1000.00, 300.00)

// plane patch (x - 2z = 0), corners hand-verified in the header comment
const C1 = proj(4, 4, 2); // (876.86, 268.00)
const C2 = proj(0, 4, 0); // (960.00, 300.00)
const C3 = proj(0, 0, 0); // (800.00, 300.00) = O
const C4 = proj(4, 0, 2); // (716.86, 268.00)
const PLANE_PTS = `${C1.x},${C1.y} ${C2.x},${C2.y} ${C3.x},${C3.y} ${C4.x},${C4.y}`;

export default function M11Ch11Sec36({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);
  const dashedP = beat >= 2 && beat < 7;
  const finalP = beat >= 7;

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={25} fill={RED} anchor="middle" script>
          {t("Advanced: the perpendicular bisector plane", "Advanced: perpendicular bisector plane")}
        </T>
      </Fade>

      {/* beat 1 — given: axes + O, plot A and B */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={60} y={100} size={14} fill={INK} anchor="start">
          {t("Find all points equidistant", "Wo saare points dhoondo jo")}
        </T>
        <T x={60} y={123} size={14} fill={INK} anchor="start">
          {t("from A(1, 2, 3) and B(3, 2, -1);", "A(1, 2, 3) aur B(3, 2, -1) se")}
        </T>
        <T x={60} y={146} size={14} fill={INK} anchor="start">
          {t("describe the surface.", "equidistant hain; surface batao.")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0)} d={arrowD(O.x, O.y, X_TIP.x, X_TIP.y)} stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d={arrowD(O.x, O.y, Z_TIP.x, Z_TIP.y)} stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d={arrowD(O.x, O.y, ZN_TIP.x, ZN_TIP.y)} stroke={MUTED} sw={1.4} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 0.9)} d={arrowD(O.x, O.y, Y_TIP.x, Y_TIP.y)} stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <Circle cx={O.x} cy={O.y} r={4} fill={RED} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.35)}>
        <T x={816} y={326} size={12} fill={RED} anchor="start" weight={700}>O</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={688} y={368} size={14} fill={INK} anchor="end" weight={700}>X</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={800} y={144} size={14} fill={INK} anchor="middle" weight={700}>Z</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.7)}>
        <T x={818} y={364} size={12} fill={MUTED} anchor="start">Z&apos;</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={1006} y={304} size={14} fill={INK} anchor="start" weight={700}>Y</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.0)}>
        <Circle cx={A.x} cy={A.y} r={4.5} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={868} y={182} size={14} fill={INK} anchor="start" weight={700}>
          A(1, 2, 3)
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <Circle cx={B.x} cy={B.y} r={4.5} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <T x={826} y={398} size={14} fill={INK} anchor="start" weight={700}>
          B(3, 2, -1)
        </T>
      </Fade>

      {/* beat 2 — setup: take a general point P, impose PA² = PB² */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={60} y={186} size={15} fill={INK} anchor="start" weight={700}>
          {t("Take P(x, y, z) with PA² = PB².", "P(x, y, z) lo jahan PA² = PB² ho.")}
        </T>
      </Fade>
      <Fade on={dashedP} delay={dl(2, 0.6)}>
        <Circle cx={P.x} cy={P.y} r={4} fill={CREAM} stroke={MUTED} strokeWidth={1.6} />
      </Fade>
      <Fade on={dashedP} delay={dl(2, 0.9)}>
        <T x={886} y={280} size={13} fill={AMBER_DARK} anchor="start" weight={700}>
          P ?
        </T>
      </Fade>
      <Draw on={dashedP} delay={dl(2, 1.3)} d={lineD(P.x, P.y, A.x, A.y)} stroke={MUTED} sw={1.4} dur={0.5} />
      <Draw on={dashedP} delay={dl(2, 1.7)} d={lineD(P.x, P.y, B.x, B.y)} stroke={MUTED} sw={1.4} dur={0.5} />
      <Fade on={dashedP} delay={dl(2, 2.1)}>
        <T x={858} y={232} size={11} fill={MUTED} anchor="end">PA</T>
      </Fade>
      <Fade on={dashedP} delay={dl(2, 2.3)}>
        <T x={854} y={338} size={11} fill={MUTED} anchor="start">PB</T>
      </Fade>

      {/* beat 3 — formula: substitute the coordinates */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={60} y={228} size={14} fill={INK} anchor="start" weight={700}>
          (x-1)² + (y-2)² + (z-3)² = (x-3)² + (y-2)² + (z+1)²
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.8)} d={lineD(60, 244, 402, 244)} stroke={AMBER_DARK} sw={1.6} dur={0.5} />

      {/* beat 4 — insight: the (y-2)² terms, then every squared term, cancels */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={60} y={266} size={14} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("The (y-2)² terms cancel;", "(y-2)² terms cancel ho jaate;")}
        </T>
        <T x={60} y={289} size={14} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("all squared terms cancel.", "saare squared terms cancel ho jaate.")}
        </T>
      </Fade>

      {/* beat 5 — formula: what survives is linear */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={60} y={332} size={16} fill={INK} anchor="start" weight={700}>
          -2x - 6z + 10 = -6x + 2z + 10
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.8)} d={lineD(60, 348, 292, 348)} stroke={AMBER_DARK} sw={1.6} dur={0.4} />

      {/* beat 6 — formula: simplify to the plane equation */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={60} y={388} size={16} fill={INK} anchor="start" weight={700}>
          4x - 8z = 0 ⇒{" "}
        </T>
        <T x={170} y={388} size={16} fill={INK} anchor="start" weight={700}>
          x - 2z = 0
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.0)} d={ringD(210, 384.24, 54, 20.72)} stroke={AMBER} sw={2.2} dur={0.5} />

      {/* beat 7 — payoff: boxed plane equation; diagram lands on the real plane */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <Chip x={60} y={440} w={210} h={42} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={18} script={false}>
          Plane: x - 2z = 0
        </Chip>
      </Fade>
      <Fade on={finalP} delay={dl(7, 0.5)}>
        <Polygon points={PLANE_PTS} fill={GREEN} fillOpacity={0.18} stroke="none" />
      </Fade>
      <Fade on={finalP} delay={dl(7, 1.1)}>
        <Circle cx={P.x} cy={P.y} r={5} fill={GREEN} stroke={INK} strokeWidth={1} />
      </Fade>
      <Draw on={finalP} delay={dl(7, 1.3)} d={checkD(906, 274, 12)} stroke={GREEN} sw={2.4} dur={0.35} />
      <Fade on={finalP} delay={dl(7, 1.5)}>
        <T x={886} y={280} size={13} fill={GREEN_DARK} anchor="start" weight={700}>
          P
        </T>
      </Fade>

      {/* beat 8 — guardrail: two points -> a single plane */}
      <Draw on={beat >= 8} delay={dl(8, 0)} d="M 60 510 L 60 570" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 0.5)}>
        <T x={76} y={530} size={13} fill={RED} anchor="start" weight={700}>
          {t("Equidistant from two POINTS →", "Do POINTS se equidistant →")}
        </T>
        <T x={76} y={553} size={13} fill={RED} anchor="start" weight={700}>
          {t("a single plane (the bisector).", "ek hi plane (bisector) milta hai.")}
        </T>
      </Fade>
    </Scene>
  );
}
