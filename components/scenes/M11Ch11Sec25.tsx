/**
 * M11 Ch11 · Section 25 — "Advanced: locus equidistant from two planes"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples. FLAGGED HIGH-SCRUTINY (octant/projection section).
 *
 * Independent hand-check of the maths (not just trusting the JSON): distance from a point
 * (x,y,z) to the XY-plane (z=0) is |z|; distance to the YZ-plane (x=0) is |x|. Equidistant =>
 * |x|=|z| => x²=z² => x²-z²=0 => (x-z)(x+z)=0 => x=z or x=-z. y is free (never appears), so each
 * solution is a full plane containing the entire y-axis — a PAIR of planes, not one. Confirmed
 * correct; the JSON's own working is right and the "keep the modulus" guardrail is the genuine
 * risk (squaring is fine, but dropping the ± / only keeping x=z silently loses half the locus).
 *
 * 3D cluster projection (math-kit project3D, same convention as M11Ch11Sec15 reference exemplar):
 * +Y -> right, +Z -> up, +X -> down-left (foreshortened). origin(760,205), scale=30.
 * Per-unit-x: dScreenX/dx = -0.5196*scale = -15.588, dScreenY/dx = 0.3*scale = 9.
 * Per-unit-y: dScreenX/dy = scale = 30. Per-unit-z: dScreenY/dz = -scale = -30.
 *   screenX = 760 + 30y - 15.588x   screenY = 205 - 30z + 9x
 * This section only needs the two GIVEN planes (XY, YZ) as reference wedges, not large data
 * points, so scale=30 (vs Sec24's cramped 26) gives a roomier, cleaner tripod.
 *
 * Hand-verified tripod (axisLen=2.8, orientation compass) + wedge corners (size=2.4):
 *   O                       = (760, 205)
 *   X_TIP = proj(2.8,0,0)   = (760-15.588*2.8, 205+9*2.8)   = (716.35, 230.2)
 *   Y_TIP = proj(0,2.8,0)   = (760+30*2.8, 205)              = (844, 205)
 *   Z_TIP = proj(0,0,2.8)   = (760, 205-30*2.8)              = (760, 121)
 *   PX = proj(2.4,0,0)      = (760-15.588*2.4, 205+9*2.4)   = (722.6, 226.6)
 *   PY = proj(0,2.4,0)      = (760+30*2.4, 205)              = (832, 205)
 *   PZ = proj(0,0,2.4)      = (760, 205-30*2.4)              = (760, 133)
 *   PXY = proj(2.4,2.4,0)   = (760+72-37.41, 205+21.6)       = (794.6, 226.6)
 *   PYZ = proj(0,2.4,2.4)   = (760+72, 205-72)                = (832, 133)
 * XY wedge (floor, fill only, no stroke — Sec15's "labels may sit on a stroke-less fill"
 * convention): O-PX-PXY-PY. YZ wedge (wall): O-PY-PYZ-PZ, a clean rectangle since x=0 on this
 * plane cancels the foreshortening term. All coordinates comfortably inside the safe area
 * (x36-1044, y30-596); Z_TIP(760,121) sits well clear of the title band (title box bottom ~71).
 *
 * Cross-section inset (beat 7, "looking down the y-axis" — reproduces the JSON's own reference
 * diagram in-house-style, plain lineD, placed in the LEFT column's empty lower region so it never
 * competes with the right-column algebra): center Oi=(200,475).
 *   x-axis: (140,475)-(260,475)   z-axis: (200,415)-(200,535)
 *   diagonal x=z  (bottom-left to top-right, GREEN):  (150,525)-(250,425)
 *   diagonal x=-z (top-left to bottom-right, AMBER_DARK): (150,425)-(250,525)
 * As x increases (right) the x=z diagonal's z also increases (up) — correct slope for x=z in a
 * standard x-right/z-up 2D view; x=-z is its mirror. All points inside x140-260, y415-535, deep
 * inside the safe area and >60px clear of the guardrail bar above it (bar bottom ~340).
 *
 * reveals_english = [0, 9.64, 21.08, 36.44, 45.91, 59.99, 68.44, 84.82, 97.71] (9 values, beats 0-8).
 * reveals_hinglish = [0, 8.28, 18.35, 32.09, 41.56, 55.21, 62.89, 76.89, 91.48].
 *
 * Beats (worked_examples arc: given -> setup distances -> condition -> derive -> insight ->
 * state the two planes -> visualize -> guardrail):
 *  0(title, always-on) | "Advanced: locus equidistant from two planes"
 *  1 | given: draw tripod + O (left text: find points equidistant from XY- and YZ-planes)
 *  2 | setup: highlight Z-arm ("=|z|" to XY), highlight X-arm ("=|x|" to YZ), fade both wedges
 *  3 | condition: "|x| = |z|" (underlined)
 *  4 | derive: 3-line build x²=z² -> x²-z²=0 -> (x-z)(x+z)=0, underlined
 *  5 | insight: arrow + amber chip "2 planes, not 1" (left text: PAIR of planes, not one)
 *  6 | land: "x = z   and   x = -z" (underlined, green)
 *  7 | visualize: cross-section inset, axes + 2 diagonals + labels + caption
 *  8 | guardrail: red bar + 3-line note (keep the modulus)
 *
 * Layout plan (left column x60-360 narration + inset; right column x600-1044 diagram + algebra):
 *  b0 | title                          | T mid    | x540 y58
 *  b1 | left text 2L                   | T start  | x60 y100/123
 *  b1 | tripod X/Y/Z + O dot/label     | Draw+T   | O(760,205)->(716,230)/(844,205)/(760,121)
 *  b2 | left text 2L                   | T start  | x60 y167/190
 *  b2 | Z-arm highlight + "=|z|" cap   | Draw+T   | (760,205)-(760,121); cap (766,113)
 *  b2 | X-arm highlight + "=|x|" cap   | Draw+T   | (760,205)-(716.35,230.2); cap (700,266) end
 *  b2 | XY,YZ wedge fill               | Fade     | see corners above
 *  b3 | "|x| = |z|" + underline        | T+Draw   | x760 y310 mid size22; underline y322
 *  b4 | 3-line derivation + underline  | T+Draw   | x615 y356/382/408; underline y417
 *  b5 | left text 1L                   | T start  | x60 y234
 *  b5 | arrow + Chip "2 planes, not 1" | Draw+Chip| (772,406)->(865,400); chip x870 y390 w150 h34
 *  b6 | "x = z  and  x = -z" + underl. | T+Draw   | x730 y458 mid size20; underline y470
 *  b7 | inset axes+diagonals+labels    | Draw+T   | see cross-section block above
 *  b8 | red bar + 3L guardrail         | Draw+T   | x60 y266-340 / text x76 y286/308/330
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
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { project3D, lineD } from "./math-kit";

const OX = 760;
const OY = 205;
const SCALE = 30;
const proj = (x: number, y: number, z: number) => project3D(x, y, z, OX, OY, SCALE);

const O = { x: OX, y: OY };
const X_TIP = proj(2.8, 0, 0); // (716.35, 230.2)
const Y_TIP = proj(0, 2.8, 0); // (844, 205)
const Z_TIP = proj(0, 0, 2.8); // (760, 121)

const PX = proj(2.4, 0, 0); // (722.6, 226.6)
const PY = proj(0, 2.4, 0); // (832, 205)
const PZ = proj(0, 0, 2.4); // (760, 133)
const PXY = proj(2.4, 2.4, 0); // (794.6, 226.6)
const PYZ = proj(0, 2.4, 2.4); // (832, 133)

const XY_PTS = `${O.x},${O.y} ${PX.x},${PX.y} ${PXY.x},${PXY.y} ${PY.x},${PY.y}`;
const YZ_PTS = `${O.x},${O.y} ${PY.x},${PY.y} ${PYZ.x},${PYZ.y} ${PZ.x},${PZ.y}`;

// cross-section inset ("looking down the y-axis")
const INS = { x: 200, y: 475 };
const INS_X1 = { x: 140, y: 475 };
const INS_X2 = { x: 260, y: 475 };
const INS_Z1 = { x: 200, y: 415 };
const INS_Z2 = { x: 200, y: 535 };
const DIAG_XZ_A = { x: 150, y: 525 }; // x=z, bottom-left
const DIAG_XZ_B = { x: 250, y: 425 }; // x=z, top-right
const DIAG_XNZ_A = { x: 150, y: 425 }; // x=-z, top-left
const DIAG_XNZ_B = { x: 250, y: 525 }; // x=-z, bottom-right

export default function M11Ch11Sec25({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={RED} anchor="middle" script>
          {t("Advanced: locus equidistant from two planes", "Advanced: do planes se equidistant locus")}
        </T>
      </Fade>

      {/* beat 1 — given: draw tripod + origin */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={60} y={100} size={14} fill={INK} anchor="start">
          {t("Find all points equidistant from", "XY-plane aur YZ-plane se equidistant")}
        </T>
        <T x={60} y={123} size={14} fill={INK} anchor="start">
          {t("the XY-plane and the YZ-plane.", "sab points dhoondo.")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d={arrowD(O.x, O.y, X_TIP.x, X_TIP.y)} stroke={INK} sw={2} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d={arrowD(O.x, O.y, Y_TIP.x, Y_TIP.y)} stroke={INK} sw={2} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 0.9)} d={arrowD(O.x, O.y, Z_TIP.x, Z_TIP.y)} stroke={INK} sw={2} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <Circle cx={O.x} cy={O.y} r={4} fill={RED} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.45)}>
        <T x={772} y={196} size={12} fill={RED} anchor="start" weight={700}>O</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={704} y={237} size={12} fill={INK} anchor="end" weight={700}>X</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.55)}>
        <T x={858} y={205} size={12} fill={INK} anchor="start" weight={700}>Y</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={760} y={107} size={12} fill={INK} anchor="middle" weight={700}>Z</T>
      </Fade>

      {/* beat 2 — setup: distance to each plane is measured along the perpendicular axis */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={60} y={167} size={14} fill={INK} anchor="start">
          {t("Distance from XY-plane is |z|;", "XY-plane se distance hai |z|;")}
        </T>
        <T x={60} y={190} size={14} fill={INK} anchor="start">
          {t("distance from YZ-plane is |x|.", "YZ-plane se distance hai |x|.")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d={lineD(O.x, O.y, Z_TIP.x, Z_TIP.y)} stroke={AMBER} sw={3.5} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={766} y={113} size={11} fill={AMBER_DARK} anchor="start">dist = |z|</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.1)} d={lineD(O.x, O.y, X_TIP.x, X_TIP.y)} stroke={AMBER} sw={3.5} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={700} y={266} size={11} fill={AMBER_DARK} anchor="end">dist = |x|</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.9)}>
        <Polygon points={XY_PTS} fill={CREAM} fillOpacity={0.85} stroke="none" />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.1)}>
        <Polygon points={YZ_PTS} fill={AMBER} fillOpacity={0.18} stroke="none" />
      </Fade>

      {/* beat 3 — condition: |x| = |z| */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={760} y={310} size={22} fill={INK} anchor="middle" weight={700}>
          |x| = |z|
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.5)} d="M 710 322 L 810 322" stroke={INK} sw={1.8} dur={0.4} />

      {/* beat 4 — derive: square both sides, factor */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={615} y={356} size={16} fill={INK} anchor="start" weight={700}>x² = z²</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={615} y={382} size={16} fill={INK} anchor="start" weight={700}>x² − z² = 0</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={615} y={408} size={16} fill={INK} anchor="start" weight={700}>(x − z)(x + z) = 0</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.6)} d="M 615 417 L 759 417" stroke={INK} sw={1.8} dur={0.4} />

      {/* beat 5 — insight: this is a PAIR of planes */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={60} y={234} size={14} fill={INK} anchor="start">
          {t("So the locus is a PAIR of planes, not one.", "Toh locus ek JODI planes hai, ek nahi.")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0)} d={arrowD(772, 406, 865, 400)} stroke={AMBER} sw={2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <Chip x={870} y={390} w={150} h={34} fill={AMBER} textFill={INK} size={14} script>
          {t("2 planes, not 1", "2 planes, 1 nahi")}
        </Chip>
      </Fade>

      {/* beat 6 — land: the two plane equations */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={730} y={458} size={20} fill={GREEN} anchor="middle" weight={700}>
          x = z    and    x = −z
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.5)} d="M 645 470 L 815 470" stroke={GREEN} sw={2} dur={0.4} />

      {/* beat 7 — visualize: looking down the y-axis */}
      <Draw on={beat >= 7} delay={dl(7, 0)} d={lineD(INS_X1.x, INS_X1.y, INS_X2.x, INS_X2.y)} stroke={INK} sw={1.6} dur={0.3} />
      <Draw on={beat >= 7} delay={dl(7, 0.35)} d={lineD(INS_Z1.x, INS_Z1.y, INS_Z2.x, INS_Z2.y)} stroke={INK} sw={1.6} dur={0.3} />
      <Fade on={beat >= 7} delay={dl(7, 0.75)}>
        <Circle cx={INS.x} cy={INS.y} r={3} fill={RED} />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <T x={266} y={479} size={12} fill={INK} anchor="start" weight={700}>x</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.0)}>
        <T x={200} y={405} size={12} fill={INK} anchor="middle" weight={700}>z</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.3)} d={lineD(DIAG_XZ_A.x, DIAG_XZ_A.y, DIAG_XZ_B.x, DIAG_XZ_B.y)} stroke={GREEN} sw={2.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.9)}>
        <T x={256} y={420} size={12} fill={GREEN} anchor="start" weight={700}>x = z</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 2.2)} d={lineD(DIAG_XNZ_A.x, DIAG_XNZ_A.y, DIAG_XNZ_B.x, DIAG_XNZ_B.y)} stroke={AMBER_DARK} sw={2.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 2.8)}>
        <T x={256} y={530} size={12} fill={AMBER_DARK} anchor="start" weight={700}>x = −z</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3.1)}>
        <T x={200} y={560} size={11} fill={MUTED} anchor="middle">
          {t("(looking down the y-axis)", "(y-axis ke neeche se dekho)")}
        </T>
      </Fade>

      {/* beat 8 — guardrail: keep the modulus */}
      <Draw on={beat >= 8} delay={dl(8, 0)} d="M 60 266 L 60 340" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 0.5)}>
        <T x={76} y={286} size={13} fill={RED} anchor="start" weight={700}>
          {t("Keep the modulus! Solving x=z", "Modulus zaroori hai! Sirf x=z")}
        </T>
        <T x={76} y={308} size={13} fill={RED} anchor="start" weight={700}>
          {t("alone throws away half the", "solve karne se aadha locus")}
        </T>
        <T x={76} y={330} size={13} fill={RED} anchor="start" weight={700}>
          {t("locus.", "chala jaata hai.")}
        </T>
      </Fade>
    </Scene>
  );
}
