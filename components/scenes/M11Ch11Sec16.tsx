/**
 * M11 Ch11 · Section 16 — "Coordinates as signed perpendicular distances"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — first section of subtopic "Coordinate Axes, Planes, and Octants"'s
 * core content (Sec15 was the subtopic-opening 2D->3D intro). FLAGGED HIGH-SCRUTINY per task brief
 * (octant/projection risk) — every projected point hand-verified below before trusting the layout.
 *
 * Projection recap (math-kit project3D, same convention Sec15 verified): +Y -> right, +Z -> up,
 * +X -> down-left (foreshortened). origin(620,380), scale=40, xForeshorten=0.6.
 *   screenX = 620 + 40y - 20.7846x     screenY = 380 - 40z + 12x
 * (20.7846 = 40*0.6*cos30°, 12 = 40*0.6*sin30°.)
 *
 * Axes (axisLen=5.3, all positive-only — this section's illustrative point is deliberately the
 * simplest all-positive case, negative half-axes were already covered in Sec15):
 *   X_TIP = proj(5.3,0,0) = (620-110.16, 380+63.6)   = (509.8, 443.6)  down-left  ✓(+X rule)
 *   Y_TIP = proj(0,5.3,0) = (620+212, 380)           = (832, 380)     right      ✓(+Y rule)
 *   Z_TIP = proj(0,0,5.3) = (620, 380-212)           = (620, 168)     up         ✓(+Z rule)
 *
 * Illustrative point P = (x,y,z) = (2,4,3) — all positive, simplest case, chosen with 3 distinct
 * values so the x/y/z drops are visually distinguishable (not JSON-given; this section's own
 * board_content is generic/symbolic, so a concrete-but-unlabelled point is authored to host it).
 *   P = proj(2,4,3) = (620+160-20.7846*2, 380-120+12*2) = (620+160-41.57, 380-120+24)
 *     = (738.43, 284)
 * Foot of perpendicular to each coordinate PLANE (drop the coordinate named after that plane to 0):
 *   F_x = foot on YZ-plane (x->0) = proj(0,4,3) = (620+160, 380-120)        = (780, 260)
 *   F_y = foot on ZX-plane (y->0) = proj(2,0,3) = (620-41.57, 380-120+24)   = (578.43, 284)
 *   F_z = foot on XY-plane (z->0) = proj(2,4,0) = (620+160-41.57, 380+24)  = (738.43, 404)
 * Hand-verified direction of each drop (P -> foot), against the projection rule:
 *   P->F_x: Δ=(+41.57,-24) = up-right.  x drops 2->0 (a DECREASE in x); rule says +X is
 *     down-left, so a decrease in x must go the opposite way, up-right. ✓ matches.
 *   P->F_y: Δ=(-160,0) = straight left. y drops 4->0 (decrease in y); +Y is right, so a
 *     decrease in y goes left, and since only y changes the move is purely horizontal. ✓
 *   P->F_z: Δ=(0,+120) = straight down. z drops 3->0 (decrease in z); +Z is up, so a decrease
 *     in z goes down, and since only z changes the move is purely vertical. ✓
 * All three drops land exactly on their named plane (F_x has x=0, F_y has y=0, F_z has z=0) —
 * confirms these are genuine perpendiculars to the coordinate PLANES (parallel to the one axis
 * not lying in that plane), not to the axes themselves, matching the section's own point.
 *
 * Coordinate-plane wedges, each sized exactly to P's own two relevant coordinates so the drop's
 * foot lands precisely at the wedge's far corner (verified: an affine/oblique projection of a
 * rectangle preserves this — the foot's (x,z)/(x,y)/(y,z) pair IS the rectangle's far corner):
 *   XY (floor, z=0): O(620,380) - proj(2,0,0)=(578.43,404) - F_z(738.43,404) - proj(0,4,0)=(780,380)
 *   YZ (wall, x=0):  O(620,380) - proj(0,4,0)=(780,380) - F_x(780,260) - proj(0,0,3)=(620,260)
 *   ZX (wall, y=0):  O(620,380) - proj(0,0,3)=(620,260) - F_y(578.43,284) - proj(2,0,0)=(578.43,404)
 *
 * reveals_english = [0, 12.03, 21.76, 31.57, 45.91, 61.18, 76.29, 89.0] (8 values, beats 0-7).
 * reveals_hinglish = [0, 10.07, 21.33, 29.7, 40.11, 53.5, 72.7, 85.16].
 *
 * Beats (mirrors board_content seq 1-8 exactly):
 *  0(title, always-on) | "What each coordinate really means"
 *  1 | THE STAGE: draw X,Y,Z axes + O, label them, fade in the 3 coordinate-plane wedges —
 *      "to locate P: how far right, how far in, how far up?"
 *  2 | plot P, label P(x, y, z) — "those three signed numbers are the coordinates"
 *  3 | drop ONE illustrative perpendicular (P->F_z, the "height above the floor") + label z —
 *      "a coordinate is the signed perpendicular distance from a plane"
 *  4 | THE FORMULA: x=dist(P,YZ) / y=dist(P,ZX) / z=dist(P,XY), built term by term, each term
 *      paired with its diagram drop (x-drop, then y-drop; z was already drawn in beat 3)
 *  5 | red guardrail: distance is |x|,|y|,|z| — never negative
 *  6 | check + "(+,+,+) octant" tag on P — the sign only records which side
 *  7 | ring O — "on the floor z=0; on an axis two coords are 0; origin all three zero"
 *
 * Layout plan (left column x60-300ish stacks narration/formula; diagram owns the right ~700px,
 * leftmost diagram element X-label at x≈486.5 — gutter ≥180px clear at every beat):
 *  b0 | title (26,red,script)            | T mid    | x540 y58
 *  b1 | left text 2L                     | T start  | x60 y100/123
 *  b1 | X,Y,Z arrows + O dot/label       | Draw+T   | O(620,380)->tips above
 *  b1 | X/Y/Z axis labels                | T        | (494,455)e / (840,385)s / (628,158)mid
 *  b1 | 3 plane wedges (fill only)       | Fade     | see corners above
 *  b2 | left text 2L                     | T start  | x60 y158/181
 *  b2 | P dot (red) + label P(x,y,z)     | Fade+T   | (738.43,284) label (754,288)s
 *  b3 | left text 2L (AMBER_DARK,high)   | T start  | x60 y216/240
 *  b3 | P->F_z drop (muted) + foot + "z" | Draw+T   | (738.43,284)->(738.43,404); label(746,418)s
 *  b4 | formula 3L (AMBER_DARK)          | T start  | x60 y280/304/328
 *  b4 | P->F_x drop + foot + "x"         | Draw+T   | (738.43,284)->(780,260); label(788,256)s
 *  b4 | P->F_y drop + foot + "y"         | Draw+T   | (738.43,284)->(578.43,284); label(571,288)e
 *  b5 | red bar + 2L guardrail           | Draw+T   | bar x60 y352-404 / text x76 y370/391
 *  b6 | check + 2L text                  | Draw+T   | icon(66,420) / text x84 y424/447
 *  b6 | "(+,+,+) octant" tag near P      | T start  | (754,322)
 *  b7 | ring O + 2L closing text         | Draw+T   | ringD(626,389,24,25) / x60 y482/505
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
const X_TIP = proj(5.3, 0, 0); // (509.8,443.6)
const Y_TIP = proj(0, 5.3, 0); // (832,380)
const Z_TIP = proj(0, 0, 5.3); // (620,168)

const P = proj(2, 4, 3); // (738.43,284)
const F_X = proj(0, 4, 3); // (780,260) foot on YZ-plane
const F_Y = proj(2, 0, 3); // (578.43,284) foot on ZX-plane
const F_Z = proj(2, 4, 0); // (738.43,404) foot on XY-plane

// coordinate-plane wedges, sized exactly to P's own coordinates (pure fill, no stroke)
const PX2 = proj(2, 0, 0); // (578.43,404)
const PY4 = proj(0, 4, 0); // (780,380)
const PZ3 = proj(0, 0, 3); // (620,260)

const XY_PTS = `${O.x},${O.y} ${PX2.x},${PX2.y} ${F_Z.x},${F_Z.y} ${PY4.x},${PY4.y}`;
const YZ_PTS = `${O.x},${O.y} ${PY4.x},${PY4.y} ${F_X.x},${F_X.y} ${PZ3.x},${PZ3.y}`;
const ZX_PTS = `${O.x},${O.y} ${PZ3.x},${PZ3.y} ${F_Y.x},${F_Y.y} ${PX2.x},${PX2.y}`;

export default function M11Ch11Sec16({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={RED} anchor="middle" script>
          {t("What each coordinate really means", "Har coordinate ka asli matlab")}
        </T>
      </Fade>

      {/* beat 1 — the stage: axes, origin, plane wedges */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={60} y={100} size={14} fill={INK} anchor="start">
          {t("To locate a point P, ask three", "Point P dhoondhne ke liye teen")}
        </T>
        <T x={60} y={123} size={14} fill={INK} anchor="start">
          {t("questions: how far right, in, up?", "sawaal: kitna right, in, up?")}
        </T>
      </Fade>
      {/* wedges are painted first (background layer) so the axes/O/labels stay crisp on top,
          even though they visually fade in LATER (delay 2.7-3.3) than those elements */}
      <Fade on={beat >= 1} delay={dl(1, 2.7)}>
        <Polygon points={XY_PTS} fill={CREAM} fillOpacity={0.85} stroke="none" />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.0)}>
        <Polygon points={YZ_PTS} fill={AMBER} fillOpacity={0.18} stroke="none" />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.3)}>
        <Polygon points={ZX_PTS} fill={GREEN} fillOpacity={0.14} stroke="none" />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0)} d={arrowD(O.x, O.y, X_TIP.x, X_TIP.y)} stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d={arrowD(O.x, O.y, Y_TIP.x, Y_TIP.y)} stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 1.0)} d={arrowD(O.x, O.y, Z_TIP.x, Z_TIP.y)} stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <Circle cx={O.x} cy={O.y} r={4} fill={RED} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={630} y={398} size={13} fill={RED} anchor="start" weight={700}>O</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.0)}>
        <T x={494} y={455} size={15} fill={INK} anchor="end" weight={700}>X</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={840} y={385} size={15} fill={INK} anchor="start" weight={700}>Y</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <T x={628} y={158} size={15} fill={INK} anchor="middle" weight={700}>Z</T>
      </Fade>

      {/* beat 2 — plot P, the coordinate triple */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={60} y={158} size={14} fill={INK} anchor="start">
          {t("Bundle those three signed", "In teenon signed numbers ko")}
        </T>
        <T x={60} y={181} size={14} fill={INK} anchor="start">
          {t("numbers: the coordinates (x, y, z).", "jodo: coordinates (x, y, z) milte hain.")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Circle cx={P.x} cy={P.y} r={4} fill={RED} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={754} y={288} size={13} fill={RED} anchor="start" weight={700}>P(x, y, z)</T>
      </Fade>

      {/* beat 3 — the definition, shown with ONE drop first: P down to the floor (z) */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={60} y={216} size={15} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("A coordinate = the signed", "Coordinate = signed")}
        </T>
        <T x={60} y={240} size={15} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("perpendicular distance from a plane.", "perpendicular distance, plane se.")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.5)} d={`M ${P.x} ${P.y} L ${F_Z.x} ${F_Z.y}`} stroke={MUTED} sw={1.6} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 1.1)}>
        <Circle cx={F_Z.x} cy={F_Z.y} r={3} fill={MUTED} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.3)}>
        <T x={746} y={418} size={13} fill={AMBER_DARK} anchor="start" weight={700}>z</T>
      </Fade>

      {/* beat 4 — the formula, term by term, each paired with its drop (x then y; z already drawn) */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={60} y={280} size={15} fill={AMBER_DARK} anchor="start" weight={700}>x = dist(P, YZ)</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.5)} d={`M ${P.x} ${P.y} L ${F_X.x} ${F_X.y}`} stroke={MUTED} sw={1.6} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <Circle cx={F_X.x} cy={F_X.y} r={3} fill={MUTED} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={788} y={256} size={13} fill={AMBER_DARK} anchor="start" weight={700}>x</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.7)}>
        <T x={60} y={304} size={15} fill={AMBER_DARK} anchor="start" weight={700}>y = dist(P, ZX)</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 2.1)} d={`M ${P.x} ${P.y} L ${F_Y.x} ${F_Y.y}`} stroke={MUTED} sw={1.6} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 2.7)}>
        <Circle cx={F_Y.x} cy={F_Y.y} r={3} fill={MUTED} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.9)}>
        <T x={571} y={288} size={13} fill={AMBER_DARK} anchor="end" weight={700}>y</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.3)}>
        <T x={60} y={328} size={15} fill={AMBER_DARK} anchor="start" weight={700}>z = dist(P, XY)</T>
      </Fade>

      {/* beat 5 — guardrail: distance is |x|,|y|,|z|, never negative */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d="M 60 352 L 60 404" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={76} y={370} size={13} fill={RED} anchor="start" weight={700}>
          {t("Distance from a plane is |x|, |y|,", "Plane se distance hai |x|, |y|,")}
        </T>
        <T x={76} y={391} size={13} fill={RED} anchor="start" weight={700}>
          {t("or |z| — never negative.", "ya |z| — kabhi negative nahi.")}
        </T>
      </Fade>

      {/* beat 6 — sign only records which side */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d={checkD(66, 420, 14)} stroke={GREEN} sw={2.5} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={84} y={424} size={14} fill={INK} anchor="start">
          {t("The sign only records which side", "Sign sirf batata hai ki tum")}
        </T>
        <T x={84} y={447} size={14} fill={INK} anchor="start">
          {t("of the plane you're standing on.", "plane ke kis side par ho.")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={754} y={322} size={12} fill={GREEN} anchor="start" weight={700}>(+,+,+) octant</T>
      </Fade>

      {/* beat 7 — closing: floor / axis / origin special cases, ring O */}
      <Draw on={beat >= 7} delay={dl(7, 0)} d={ringD(626, 389, 24, 25)} stroke={AMBER_DARK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={60} y={482} size={14} fill={INK} anchor="start">
          {t("On the floor, z = 0; on an axis,", "Floor par z = 0; kisi axis par,")}
        </T>
        <T x={60} y={505} size={14} fill={INK} anchor="start">
          {t("two coords are 0; at O, all three.", "do coordinates 0; O par, teenon 0.")}
        </T>
      </Fade>
    </Scene>
  );
}
