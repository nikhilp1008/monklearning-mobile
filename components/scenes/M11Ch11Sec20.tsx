/**
 * M11 Ch11 · Section 20 — "Procedure C: reflections in a plane, axis, or origin"
 * Canvas 1080x620 - safe x36-1044, y30-596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept. HIGH-SCRUTINY (octant/projection). Same project3D convention, origin(620,380),
 * scale=40 as Sec15/Sec19 (screenX = 620 + 40y - 20.78x, screenY = 380 - 40z + 12x; +Y right, +Z up,
 * +X down-left/foreshortened, negatives reverse).
 *
 * ONE running point P(3,2,3), all-positive so it sits cleanly in octant I, reflected three ways —
 * one worked example per formula beat, matching the "count the flips" procedure exactly. All values
 * cross-checked against a standalone node script running the identical formula before trusting them:
 *   P(3,2,3)              -> proj = (637.6, 296.0)
 *   P1 = reflect in XY-plane, flip z only -> (3,2,-3)   -> proj = (637.6, 536.0)
 *     Same screenX as P (x,y unchanged) -> P-P1 is a PURE VERTICAL segment, exactly like Sec19's
 *     z-only drop — confirms a single-coordinate flip reads as a straight vertical mirror-line.
 *   P2 = reflect in x-axis, flip y AND z -> (3,-2,-3)    -> proj = (477.6, 536.0)
 *   P3 = reflect in origin, flip x,y,z -> (-3,-2,-3)     -> proj = (602.4, 464.0)
 *     Sanity check unique to a full sign flip: since project3D is linear in (x,y,z), negating every
 *     coordinate must negate the screen offset from O exactly, so P3's screen position must be the
 *     exact point-reflection of P's through O(620,380). Verified: 2*620-637.6=602.4 (matches P3.x
 *     exactly), 2*380-296.0=464.0 (matches P3.y exactly). This also means the P-P3 connecting line
 *     passes exactly through O — confirmed algebraically (midpoint of P and P3 in 3D is (0,0,0), and
 *     the midpoint of their two screen points is (620,380) = O) — a direct, verified visualization of
 *     "reflection through the origin = full point-inversion through the corner."
 * Axes reused verbatim from Sec15/Sec19 (axisLen=6): X(6,0,0)->(495.3,452); Y(0,6,0)->(860,380);
 * Z(0,0,6)->(620,140). Floor wedge (2.2 units): PX->(574.3,406.4), PY->(708,380), PXY->(662.3,406.4).
 *
 * reveals_english (9 values, beats 0-8) = [0, 10.15, 24.58, 40.19, 52.14, 63.74, 76.89, 86.02, 97.96]
 * reveals_hinglish (9 values) = [0, 9.73, 23.72, 37.72, 48.13, 58.37, 70.83, 80.81, 91.05]
 * board_content seq1-9 map 1:1 to reveals[0..8].
 *
 * Beats:
 *  0(title, always-on) | "Procedure C — reflections: count before you flip"
 *  1 | draw axes+O+floor wedge; plot P(3,2,3) — "mirror in a plane flips ONE coordinate"
 *  2 | draw P->P1 (pure vertical), P1(3,2,-3) — the XY-plane reflection, z flips (RED callout)
 *  3 | formula text only (YZ/ZX reflections), amber underline — no new diagram point
 *  4 | amber highlight retrace of the X-axis — "mirror in an axis" (the axis IS the mirror line)
 *  5 | draw P->P2, P2(3,-2,-3) — the x-axis reflection, y AND z flip (RED callout, 2 flips)
 *  6 | amber ring around O — "mirror in the origin" (O IS the mirror point)
 *  7 | draw P->P3 (passes exactly through O), P3(-3,-2,-3) — full inversion, all 3 flip
 *  8 | red guardrail bar + "plane 1, axis 2, origin 3 — count first, then flip"
 *
 * Layout plan (left column x60-420 stacks narration at 58px row spacing; diagram owns x430-1044):
 *  b0 | title (26,red,script)   | T mid   | x540 y58
 *  b1 | text 2L                 | T start | x60 y100/123
 *  b1 | axes+O+wedge+P          | Draw/Fade| O(620,380); P dot(637.6,296) label(647.6,291)
 *  b2 | text 2L                 | T start | x60 y158/181
 *  b2 | P-P1 line, P1 dot+label+callout | Draw+T | (637.6,296)-(637.6,536); label(647.6,531) callout(647.6,560)
 *  b3 | text 2L + underline     | T+Draw  | x60 y216/239, line x60-300 y248
 *  b4 | text 2L + axis retrace  | T+Draw  | x60 y274/297, amber overlay O->X_TIP
 *  b5 | text 2L                 | T start | x60 y332/355
 *  b5 | P-P2 line, P2 dot+label+callout | Draw+T | (637.6,296)-(477.6,536); label(467.6,531,end) callout(467.6,560,end)
 *  b6 | text 2L + O ring         | T+Draw  | x60 y390/413, ringD(624,394,26,28)
 *  b7 | text 2L                 | T start | x60 y448/471
 *  b7 | P-P3 line, P3 dot+label+callout | Draw+T | (637.6,296)-(602.4,464) thru O; label(612.4,459) callout(612.4,480)
 *  b8 | red bar + text 2L        | Draw+T  | bar x60 y494-538, text x76 y506/529
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
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { project3D } from "./math-kit";

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

// running point + its three reflections
const P = proj(3, 2, 3); // (637.6,296)
const P1 = proj(3, 2, -3); // (637.6,536) — reflect in XY-plane, z flips
const P2 = proj(3, -2, -3); // (477.6,536) — reflect in x-axis, y & z flip
const P3 = proj(-3, -2, -3); // (602.4,464) — reflect in origin, all 3 flip; passes exactly through O

export default function M11Ch11Sec20({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={RED} anchor="middle" script>
          {t("Procedure C: reflections — count before you flip", "Procedure C: reflections — pehle ginop, phir flip")}
        </T>
      </Fade>

      {/* beat 1 — axes + P; mirror in a plane flips ONE coordinate */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={60} y={100} size={14} fill={INK} anchor="start">
          {t("Mirror in a plane ->", "Plane mein mirror ->")}
        </T>
        <T x={60} y={123} size={14} fill={INK} anchor="start">
          {t("flip the one perpendicular coordinate.", "sirf ek perpendicular coordinate flip.")}
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
      <Fade on={beat >= 1} delay={dl(1, 2.0)}>
        <Circle cx={P.x} cy={P.y} r={4} fill={INK} />
        <T x={647.6} y={291} size={12} fill={INK} anchor="start" weight={700}>P(3, 2, 3)</T>
      </Fade>

      {/* beat 2 — reflect in XY-plane: z flips */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={60} y={158} size={14} fill={INK} anchor="start">
          {t("In XY-plane:", "XY-plane mein:")}
        </T>
        <T x={60} y={181} size={14} fill={INK} anchor="start">
          (x, y, z) {"->"} (x, y, -z)
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d={`M ${P.x} ${P.y} L ${P1.x} ${P1.y}`} stroke={MUTED} sw={1.6} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <Circle cx={P1.x} cy={P1.y} r={4} fill={GREEN} />
        <T x={647.6} y={531} size={12} fill={GREEN} anchor="start" weight={700}>P1(3, 2, -3)</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={647.6} y={560} size={11} fill={RED} anchor="start">
          {t("z: +3 -> -3", "z: +3 -> -3")}
        </T>
      </Fade>

      {/* beat 3 — formula: YZ / ZX reflections (text only) */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={60} y={216} size={14} fill={INK} anchor="start">
          {t("In YZ: (-x, y, z)", "YZ mein: (-x, y, z)")}
        </T>
        <T x={60} y={239} size={14} fill={INK} anchor="start">
          {t("In ZX: (x, -y, z)", "ZX mein: (x, -y, z)")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.7)} d="M 60 248 L 300 248" stroke={AMBER} sw={2} dur={0.4} />

      {/* beat 4 — mirror in an axis: the axis itself is the mirror line */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={60} y={274} size={14} fill={INK} anchor="start">
          {t("Mirror in an axis ->", "Axis mein mirror ->")}
        </T>
        <T x={60} y={297} size={14} fill={INK} anchor="start">
          {t("flip the two perpendicular coordinates.", "do perpendicular coordinates flip.")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.6)} d={arrowD(O.x, O.y, X_TIP.x, X_TIP.y)} stroke={AMBER} sw={3} dur={0.5} />

      {/* beat 5 — reflect in x-axis: y AND z flip */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={60} y={332} size={14} fill={INK} anchor="start">
          {t("In x-axis:", "x-axis mein:")}
        </T>
        <T x={60} y={355} size={14} fill={INK} anchor="start">
          (x, y, z) {"->"} (x, -y, -z)
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.7)} d={`M ${P.x} ${P.y} L ${P2.x} ${P2.y}`} stroke={MUTED} sw={1.6} dur={0.7} />
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <Circle cx={P2.x} cy={P2.y} r={4} fill={GREEN} />
        <T x={467.6} y={531} size={12} fill={GREEN} anchor="end" weight={700}>P2(3, -2, -3)</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.9)}>
        <T x={467.6} y={560} size={11} fill={RED} anchor="end">
          {t("y,z: +2,+3 -> -2,-3", "y,z: +2,+3 -> -2,-3")}
        </T>
      </Fade>

      {/* beat 6 — mirror in the origin: O itself is the mirror point */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={60} y={390} size={14} fill={INK} anchor="start">
          {t("Mirror in the origin ->", "Origin mein mirror ->")}
        </T>
        <T x={60} y={413} size={14} fill={INK} anchor="start">
          {t("flip all three coordinates.", "teeno coordinates flip.")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.6)} d={ringD(624, 394, 26, 28)} stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 7 — reflect in origin: full inversion, all 3 flip, line passes exactly through O */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={60} y={448} size={14} fill={INK} anchor="start">
          (x, y, z) {"->"} (-x, -y, -z)
        </T>
        <T x={60} y={471} size={14} fill={INK} anchor="start">
          {t("full point-inversion.", "poora point-inversion.")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d={`M ${P.x} ${P.y} L ${P3.x} ${P3.y}`} stroke={MUTED} sw={1.6} dur={0.7} />
      <Fade on={beat >= 7} delay={dl(7, 1.4)}>
        <Circle cx={P3.x} cy={P3.y} r={4} fill={GREEN} />
        <T x={612.4} y={459} size={12} fill={GREEN} anchor="start" weight={700}>P3(-3, -2, -3)</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.8)}>
        <T x={612.4} y={480} size={11} fill={RED} anchor="start">
          {t("all 3 signs flip", "teeno signs flip")}
        </T>
      </Fade>

      {/* beat 8 — guardrail: count first, then flip */}
      <Draw on={beat >= 8} delay={dl(8, 0)} d="M 60 494 L 60 538" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 0.5)}>
        <T x={76} y={506} size={14} fill={RED} anchor="start" weight={700}>
          {t("Flip count: plane 1, axis 2,", "Flip count: plane 1, axis 2,")}
        </T>
        <T x={76} y={529} size={14} fill={RED} anchor="start" weight={700}>
          {t("origin 3. Count first, then flip.", "origin 3. Pehle ginop, phir flip.")}
        </T>
      </Fade>
    </Scene>
  );
}
