/**
 * M11 Ch11 · Section 19 — "Procedures: octant ID and foot of perpendicular"
 * Canvas 1080x620 - safe x36-1044, y30-596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept. HIGH-SCRUTINY (octant/projection). Reuses M11Ch11Sec15's project3D/
 * ThreeDAxes convention and exact origin/scale so all 3D scenes in this chapter read consistently.
 *
 * Projection recap (math-kit project3D, verified there): +Y -> right, +Z -> up, +X -> down-left
 * (foreshortened, toward viewer); negative coordinates reverse each. origin(620,380), scale=40,
 * xForeshorten=0.6:  screenX = 620 + 40y - 20.78x   screenY = 380 - 40z + 12x
 *
 * Hand-verified + cross-checked with a standalone node script (identical formula) before trusting
 * layout — every value below matches the script's output exactly:
 *   Axes (axisLen=6, reused verbatim from Sec15): X(6,0,0)->(495.3,452) down-left; Y(0,6,0)->
 *   (860,380) right; Z(0,0,6)->(620,140) up. Negative half-axes (len 3): X'(-3,0,0)->(682.4,344);
 *   Y'(0,-3,0)->(500,380); Z'(0,0,-3)->(620,500). Floor wedge (2.2 units, fill only): PX(2.2,0,0)
 *   ->(574.3,406.4); PY(0,2.2,0)->(708,380); PXY(2.2,2.2,0)->(662.3,406.4).
 *
 *   PROCEDURE A (octant ID) — Q(-2,3,4): signs (-,+,+) -> canonical table row II (x-,y+,z+) ->
 *   Octant II. proj(-2,3,4) = (781.6,196): up + right of O(620,380) — matches the doc's own note
 *   that octant II sits "further up-right" than I since x's negative sign *reinforces* the +y/+z
 *   pull instead of opposing it (positive x pulls down-left, so negative x removes that drag).
 *   Q2(-0.4,0.6,0.8) = exactly 0.2*Q (same ray from O, same signs, 1/5 the magnitude) -> proj =
 *   (652.3,343.2), between O and Q on the SAME straight line (verified: O, Q2, Q are collinear by
 *   construction since Q2 is a scalar multiple of Q) — the diagram literally shows "same direction,
 *   different distance = same octant."
 *
 *   PROCEDURE B (foot of perpendicular) — P(4,3,5), all-positive (octant I), matches the JSON's own
 *   reference diagram (P up top, drop to floor, then to x-axis):
 *     proj(4,3,5) = (656.9,228)                    P itself
 *     M = foot on XY-plane, zero z -> (4,3,0): proj = (656.9,428). Same screenX as P (x,y unchanged)
 *       -> P-M is a PURE VERTICAL screen segment (z only ever moves screenY) — confirms the "drop
 *       straight down to the floor" visual is geometrically exact, not just suggestive.
 *     L = foot on x-axis from M, zero y too -> (4,0,0): proj = (536.9,428). Same screenY as M (z=0
 *       for both, x unchanged) -> M-L is a PURE HORIZONTAL screen segment ("slide along the floor").
 *       L necessarily lies ON the drawn X-axis line (since (4,0,0) is mathematically on the x-axis) —
 *       cross-checked: parametrizing O->X_TIP at x=536.9 gives y=428.0, exactly L's y. Confirms the
 *       drop lands exactly where it should.
 *     Ny = foot on y-axis (0,3,0): proj = (740,380) — lies exactly on the horizontal Y-axis line
 *       (screenY=380 for any (0,y,0), matches Y_TIP's y=380). Nz = foot on z-axis (0,0,5): proj =
 *       (620,180) — lies exactly on the vertical Z-axis line (screenX=620 for any (0,0,z), matches
 *       Z_TIP's x=620). Both land exactly on their respective drawn axes, as they must.
 *
 * reveals_english (9 values, beats 0-8) = [0, 9.81, 20.14, 34.3, 45.82, 60.84, 76.89, 90.37, 102.06]
 * reveals_hinglish (9 values) = [0, 8.53, 19.03, 30.29, 42.5, 55.47, 71.08, 84.05, 94.89]
 * board_content seq1-9 map 1:1 to reveals[0..8] (confirmed monotonic internal reveal_at too).
 *
 * Beats:
 *  0(title, always-on) | "Two core procedures: locate and project"
 *  1 | draw axes+O+floor wedge; Procedure A: plot Q(-2,3,4), sign-strip + table -> Octant II
 *  2 | plot Q2 (same ray, 1/5 magnitude) + ring — "magnitude is a decoy, only sign speaks"
 *  3 | ERASE Q/Q2/chip (opacity 0, vacates space). Procedure B: plot P(4,3,5)
 *  4 | formula text: onto XY -> (x,y,0), amber underline (no new diagram point yet)
 *  5 | formula text: onto YZ -> (0,y,z), onto ZX -> (x,0,z), amber underline
 *  6 | THE diagram beat: draw P->M (lose z, floor), then M->L (lose y, x-axis) — two sequential
 *      one-hand actions matching the JSON's own diagram caption exactly
 *  7 | axis-foot procedure text + green checkmark on L (L is already the x-axis-foot example)
 *  8 | complete the picture: Ny, Nz feet + muted drop lines from P; formula for all 3 axes
 *
 * Layout plan (left column x60-420 stacks narration at 58px row spacing; diagram owns x430-1044):
 *  b0 | title (26,red,script)      | T mid   | x540 y58
 *  b1 | text 2L                    | T start | x60 y100/123
 *  b1 | axes+O+wedge               | Draw/Fade| O(620,380) tips per header
 *  b1 | Q dot+label+chip           | Fade+T  | dot(781.6,196) label(791.6,191) chip(791.6,222)
 *  b2 | text 2L                    | T start | x60 y158/181
 *  b2 | Q2 dot+ring+label          | Fade+Draw| dot(652.3,343.2) ring rx16,ry14 label(670,350)
 *  b3 | text 2L                    | T start | x60 y216/239
 *  b3 | P dot+label                | Fade+T  | dot(656.9,228) label(666.9,224)
 *  b4 | text 2L + underline        | T+Draw  | x60 y274/297, line x60-300 y305
 *  b5 | text 2L + underline        | T+Draw  | x60 y332/355, line x60-300 y363
 *  b6 | text 2L                    | T start | x60 y390/413
 *  b6 | P-M line, M dot+label      | Draw+T  | (656.9,228)-(656.9,428) label(668,410)
 *  b6 | M-L line, L dot+label      | Draw+T  | (656.9,428)-(536.9,428) label(546.9,412)
 *  b7 | text 2L + check on L       | T+Draw  | x60 y448/471, checkD(600,420,14)
 *  b8 | text 2L                    | T start | x60 y506/529
 *  b8 | Ny/Nz dots+labels+lines    | Draw+T  | Ny(740,380) label(750,376); Nz(620,180) label(630,176)
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
  ringD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { project3D, checkD } from "./math-kit";

const OX = 620;
const OY = 380;
const SCALE = 40;
const proj = (x: number, y: number, z: number) => project3D(x, y, z, OX, OY, SCALE);

const O = { x: OX, y: OY };
const X_TIP = proj(6, 0, 0); // (495.3,452)
const Y_TIP = proj(0, 6, 0); // (860,380)
const Z_TIP = proj(0, 0, 6); // (620,140)
const XN_TIP = proj(-3, 0, 0); // (682.4,344)
const YN_TIP = proj(0, -3, 0); // (500,380)
const ZN_TIP = proj(0, 0, -3); // (620,500)

const PX = proj(2.2, 0, 0);
const PY = proj(0, 2.2, 0);
const PXY = proj(2.2, 2.2, 0);
const XY_PTS = `${O.x},${O.y} ${PX.x},${PX.y} ${PXY.x},${PXY.y} ${PY.x},${PY.y}`;

// Procedure A — octant ID
const Q = proj(-2, 3, 4); // (781.6,196)
const Q2 = proj(-0.4, 0.6, 0.8); // (652.3,343.2) — same ray as Q, 1/5 magnitude

// Procedure B — foot of perpendicular
const P = proj(4, 3, 5); // (656.9,228)
const M = proj(4, 3, 0); // (656.9,428) foot on XY-plane
const L = proj(4, 0, 0); // (536.9,428) foot on x-axis
const Ny = proj(0, 3, 0); // (740,380) foot on y-axis
const Nz = proj(0, 0, 5); // (620,180) foot on z-axis

export default function M11Ch11Sec19({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={RED} anchor="middle" script>
          {t("Two core procedures: locate and project", "Do procedures: locate aur project")}
        </T>
      </Fade>

      {/* beat 1 — axes + Procedure A: octant of Q */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={60} y={100} size={14} fill={INK} anchor="start">
          {t("Procedure A — octant of a point:", "Procedure A — point ka octant:")}
        </T>
        <T x={60} y={123} size={14} fill={INK} anchor="start">
          {t("keep the signs, read the table.", "signs pakdo, table padho.")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0)} d={arrowD(O.x, O.y, X_TIP.x, X_TIP.y)} stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d={arrowD(O.x, O.y, Y_TIP.x, Y_TIP.y)} stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d={arrowD(O.x, O.y, Z_TIP.x, Z_TIP.y)} stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 0.9)} d={arrowD(O.x, O.y, XN_TIP.x, XN_TIP.y)} stroke={MUTED} sw={1.4} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 1.1)} d={arrowD(O.x, O.y, YN_TIP.x, YN_TIP.y)} stroke={MUTED} sw={1.4} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 1.3)} d={arrowD(O.x, O.y, ZN_TIP.x, ZN_TIP.y)} stroke={MUTED} sw={1.4} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <Circle cx={O.x} cy={O.y} r={4} fill={RED} />
        <T x={630} y={408} size={13} fill={RED} anchor="start" weight={700}>O</T>
        <T x={479} y={461} size={14} fill={INK} anchor="end" weight={700}>X</T>
        <T x={878} y={385} size={14} fill={INK} anchor="start" weight={700}>Y</T>
        <T x={638} y={145} size={14} fill={INK} anchor="start" weight={700}>Z</T>
        <Polygon points={XY_PTS} fill={CREAM} fillOpacity={0.85} stroke="none" />
      </Fade>
      <Draw on={beat >= 1 && beat < 3} delay={dl(1, 2.0)} d={`M ${O.x} ${O.y} L ${Q.x} ${Q.y}`} stroke={MUTED} sw={1.4} dur={0.6} />
      <Fade on={beat >= 1 && beat < 3} delay={dl(1, 2.6)}>
        <Circle cx={Q.x} cy={Q.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1 && beat < 3} delay={dl(1, 2.9)}>
        <T x={791.6} y={191} size={13} fill={INK} anchor="start" weight={700}>
          Q(-2, 3, 4)
        </T>
      </Fade>
      <Fade on={beat >= 1 && beat < 3} delay={dl(1, 3.2)}>
        <T x={791.6} y={222} size={13} fill={INK} anchor="start" weight={700}>(-, +, +)</T>
        <T x={856.1} y={222} size={13} fill={GREEN} anchor="start" weight={700}>
          {t("-> Octant II", "-> Octant II")}
        </T>
      </Fade>

      {/* beat 2 — magnitude is a decoy: Q2 on the same ray, 1/5 the size */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={60} y={158} size={14} fill={INK} anchor="start">
          {t("Magnitude is a decoy —", "Magnitude ek decoy hai —")}
        </T>
        <T x={60} y={181} size={14} fill={INK} anchor="start">
          {t("only the sign decides the octant.", "sirf sign octant decide karta hai.")}
        </T>
      </Fade>
      <Fade on={beat >= 2 && beat < 3} delay={dl(2, 0.3)}>
        <Circle cx={Q2.x} cy={Q2.y} r={3.5} fill={AMBER} />
      </Fade>
      <Draw on={beat >= 2 && beat < 3} delay={dl(2, 0.6)} d={ringD(Q2.x, Q2.y, 16, 14)} stroke={AMBER} sw={2} dur={0.5} />
      <Fade on={beat >= 2 && beat < 3} delay={dl(2, 1.2)}>
        <T x={670} y={350} size={11} fill={AMBER_DARK} anchor="start">
          {t("smaller — same octant", "chhota — same octant")}
        </T>
      </Fade>

      {/* beat 3 — ERASE Procedure A group, start Procedure B: plot P */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={60} y={216} size={14} fill={INK} anchor="start">
          {t("Procedure B — foot on a plane:", "Procedure B — plane par foot:")}
        </T>
        <T x={60} y={239} size={14} fill={INK} anchor="start">
          {t("zero the coordinate it kills.", "wo coordinate zero karo jo plane maarta hai.")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <Circle cx={P.x} cy={P.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={666.9} y={224} size={12} fill={INK} anchor="start" weight={700}>P(4, 3, 5)</T>
      </Fade>

      {/* beat 4 — formula: onto XY */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={60} y={274} size={14} fill={INK} anchor="start">
          {t("Onto XY: kill z —", "XY par: z maaro —")}
        </T>
        <T x={60} y={297} size={14} fill={INK} anchor="start">
          (x, y, z) {"->"} (x, y, 0)
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.7)} d="M 60 305 L 300 305" stroke={AMBER} sw={2} dur={0.4} />

      {/* beat 5 — formula: onto YZ / ZX */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={60} y={332} size={14} fill={INK} anchor="start">
          {t("Onto YZ: (0, y, z)", "YZ par: (0, y, z)")}
        </T>
        <T x={60} y={355} size={14} fill={INK} anchor="start">
          {t("Onto ZX: (x, 0, z)", "ZX par: (x, 0, z)")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.7)} d="M 60 363 L 300 363" stroke={AMBER} sw={2} dur={0.4} />

      {/* beat 6 — THE diagram: drop P->M (lose z), then M->L (lose y) */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={60} y={390} size={14} fill={INK} anchor="start">
          {t("Drop to the floor (lose z),", "Floor tak giro (z gaya),")}
        </T>
        <T x={60} y={413} size={14} fill={INK} anchor="start">
          {t("then to the x-axis (lose y).", "phir x-axis tak (y gaya).")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d={`M ${P.x} ${P.y} L ${M.x} ${M.y}`} stroke={RED} sw={1.6} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <Circle cx={M.x} cy={M.y} r={4} fill={RED} />
        <T x={668} y={410} size={12} fill={RED} anchor="start" weight={700}>M(4, 3, 0)</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.5)} d={`M ${M.x} ${M.y} L ${L.x} ${L.y}`} stroke={AMBER_DARK} sw={1.6} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 2.1)}>
        <Circle cx={L.x} cy={L.y} r={4} fill={AMBER_DARK} />
        <T x={546.9} y={412} size={12} fill={AMBER_DARK} anchor="start" weight={700}>L(4, 0, 0)</T>
      </Fade>

      {/* beat 7 — foot on an axis: L is already the worked example */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={60} y={448} size={14} fill={INK} anchor="start">
          {t("Foot on an axis: keep that", "Axis par foot: uska hi")}
        </T>
        <T x={60} y={471} size={14} fill={INK} anchor="start">
          {t("axis's coordinate, zero the rest.", "coordinate rakho, baaki zero.")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d={checkD(600, 420, 14)} stroke={GREEN} sw={2.5} dur={0.4} />

      {/* beat 8 — complete: feet on y-axis and z-axis */}
      <Fade on={beat >= 8} delay={dl(8, 0)}>
        <T x={60} y={506} size={14} fill={INK} anchor="start">
          {t("x-axis: (x,0,0)   y-axis: (0,y,0)", "x-axis: (x,0,0)   y-axis: (0,y,0)")}
        </T>
        <T x={60} y={529} size={14} fill={INK} anchor="start">
          {t("z-axis: (0,0,z) — keep one, kill two.", "z-axis: (0,0,z) — ek rakho, do maaro.")}
        </T>
      </Fade>
      <Draw on={beat >= 8} delay={dl(8, 0.4)} d={`M ${P.x} ${P.y} L ${Ny.x} ${Ny.y}`} stroke={MUTED} sw={1.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 0.9)}>
        <Circle cx={Ny.x} cy={Ny.y} r={3.5} fill={GREEN} />
        <T x={750} y={376} size={12} fill={GREEN} anchor="start" weight={700}>(0, 3, 0)</T>
      </Fade>
      <Draw on={beat >= 8} delay={dl(8, 1.3)} d={`M ${P.x} ${P.y} L ${Nz.x} ${Nz.y}`} stroke={MUTED} sw={1.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 1.8)}>
        <Circle cx={Nz.x} cy={Nz.y} r={3.5} fill={GREEN} />
        <T x={630} y={176} size={12} fill={GREEN} anchor="start" weight={700}>(0, 0, 5)</T>
      </Fade>
    </Scene>
  );
}
