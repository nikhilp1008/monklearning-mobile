/**
 * M11 Ch11 · Section 15 — "From the flat page to the room"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — opens subtopic 2 (Coordinate Axes, Planes, Octants). First-ever use of
 * project3D/ThreeDAxes in this codebase — reference exemplar for all of secs 15-37.
 *
 * Projection recap (math-kit project3D, verified there): +Y -> right, +Z -> up, +X -> down-left
 * (foreshortened). origin(620,380), scale=40, xForeshorten=0.6, xDir=(-cos30,sin30).
 *   screenX = 620 + 40y - 20.78x   screenY = 380 - 40z + 12x
 * Hand-verified tip positions (axisLen=6): X(6,0,0)->(495,452) down-left; Y(0,6,0)->(860,380)
 * right; Z(0,0,6)->(620,140) up. Negative tips (len 3): X'(-3,0,0)->(682,344); Y'(0,-3,0)->
 * (500,380); Z'(0,0,-3)->(620,500). All 6 land in the expected up/right/down-left/mirror
 * directions per the primitive's own doc note — eye-confirmed against the reference SVG's
 * right-handed layout (X toward viewer, Y right, Z up) before trusting it further.
 * Coordinate-plane wedges (size 2.2 units from O, no stroke — pure translucent fill, so labels
 * may sit on them): XY floor O(620,380)-(574,406)-(662,406)-(708,380); YZ wall O-(708,380)-
 * (708,292)-(620,292); ZX wall O-(620,292)-(574,318)-(574,406). Room-corner mini icon (a second,
 * independent illustration, NOT part of the coordinate system) at corner(900,540), 3 short edges
 * in the same 3 directions, reusing the physical "room" metaphor concretely.
 *
 * reveals_english = [0, 17.24, 33.54, 47.45, 62.29, 76.12, 94.98, 106.23] (8 values, beats 0-7).
 *
 * Beats:
 *  0(title, always-on) | "From 2D to 3D: adding a third direction"
 *  1 | draw X,Y arrows (oblique) + O; "on paper: origin + x,y axes = ordered pair"
 *  2 | draw Z arrow (dramatic) — "lift the pen off the page"
 *  3 | ring O — "three mutually perpendicular axes meet at one origin"
 *  4 | THE DIAGRAM: negative half-axes (muted) + 3 shaded coordinate-plane wedges
 *  5 | room-corner mini icon — "corner of your room is O, edges are the axes"
 *  6 | red guardrail: floor=XY, wall=YZ, wall=ZX
 *  7 | closing: three surfaces, one corner = the three coordinate planes
 *
 * Layout plan (left column x60-300 stacks narration; diagram owns the right ~700px):
 *  b0 | title (26,red,script)         | T mid   | x540 y58
 *  b1 | left text 2L                  | T start | x60 y100/123
 *  b1 | X,Y arrows + O dot/label      | Draw+T  | O(620,380)->X(495,452)/Y(860,380)
 *  b2 | left text 2L                  | T start | x60 y158/181
 *  b2 | Z arrow + label               | Draw+T  | O->Z(620,140)
 *  b3 | left text 2L                  | T start | x60 y216/239
 *  b3 | ring O                        | Draw    | ringD(624,394,26,28)
 *  b4 | X',Y',Z' rays (muted)         | Draw+T  | O->(682,344)/(500,380)/(620,500)
 *  b4 | 3 plane wedges (fill only)    | Fade    | see corners above
 *  b5 | left text 2L                  | T start | x60 y274/297
 *  b5 | room-corner icon + caption    | Draw+T  | corner(900,540) edges+label y584
 *  b6 | red bar + 3L guardrail        | Draw+T  | x60 y318-386 / text x76 y336/358/380
 *  b7 | check + 2L closing            | Draw+T  | (66,415) / x84 y419/441
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
import { project3D, checkD } from "./math-kit";

const OX = 620;
const OY = 380;
const SCALE = 40;
const proj = (x: number, y: number, z: number) => project3D(x, y, z, OX, OY, SCALE);

const O = { x: OX, y: OY };
const X_TIP = proj(6, 0, 0); // (495,452)
const Y_TIP = proj(0, 6, 0); // (860,380)
const Z_TIP = proj(0, 0, 6); // (620,140)
const XN_TIP = proj(-3, 0, 0); // (682,344)
const YN_TIP = proj(0, -3, 0); // (500,380)
const ZN_TIP = proj(0, 0, -3); // (620,500)

// coordinate-plane wedges (2.2 units from O), pure fill, no stroke
const PX = proj(2.2, 0, 0); // (574,406)
const PY = proj(0, 2.2, 0); // (708,380)
const PZ = proj(0, 0, 2.2); // (620,292)
const PXY = proj(2.2, 2.2, 0); // (662,406)
const PYZ = proj(0, 2.2, 2.2); // (708,292)
const PZX = proj(2.2, 0, 2.2); // (574,318)

const XY_PTS = `${O.x},${O.y} ${PX.x},${PX.y} ${PXY.x},${PXY.y} ${PY.x},${PY.y}`;
const YZ_PTS = `${O.x},${O.y} ${PY.x},${PY.y} ${PYZ.x},${PYZ.y} ${PZ.x},${PZ.y}`;
const ZX_PTS = `${O.x},${O.y} ${PZ.x},${PZ.y} ${PZX.x},${PZX.y} ${PX.x},${PX.y}`;

// room-corner mini icon — a second, independent illustration (not the coordinate system)
const RC = { x: 900, y: 540 };
const RC_X = { x: 857, y: 565 };
const RC_Y = { x: 950, y: 540 };
const RC_Z = { x: 900, y: 490 };

export default function M11Ch11Sec15({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={RED} anchor="middle" script>
          {t("From 2D to 3D: adding a third direction", "2D se 3D: teesri direction jodna")}
        </T>
      </Fade>

      {/* beat 1 — on paper: origin + x,y axes */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={60} y={100} size={14} fill={INK} anchor="start">
          {t("On paper: origin + x,y axes fix", "Paper par: origin + x,y axes")}
        </T>
        <T x={60} y={123} size={14} fill={INK} anchor="start">
          {t("any point as an ordered pair.", "kisi bhi point ko ordered pair banate hain.")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0)} d={arrowD(O.x, O.y, X_TIP.x, X_TIP.y)} stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d={arrowD(O.x, O.y, Y_TIP.x, Y_TIP.y)} stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <Circle cx={O.x} cy={O.y} r={4} fill={RED} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={630} y={408} size={13} fill={RED} anchor="start" weight={700}>O</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.7)}>
        <T x={479} y={461} size={15} fill={INK} anchor="end" weight={700}>X</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.9)}>
        <T x={878} y={385} size={15} fill={INK} anchor="start" weight={700}>Y</T>
      </Fade>

      {/* beat 2 — lift the pen: the z axis */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={60} y={158} size={14} fill={INK} anchor="start">
          {t("Lift your pen off the page —", "Apna pen page se upar uthao —")}
        </T>
        <T x={60} y={181} size={14} fill={INK} anchor="start">
          {t("that new upward direction is the z-axis.", "woh nayi upward direction hi z-axis hai.")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0)} d={arrowD(O.x, O.y, Z_TIP.x, Z_TIP.y)} stroke={INK} sw={2.2} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={638} y={145} size={15} fill={INK} anchor="start" weight={700}>Z</T>
      </Fade>

      {/* beat 3 — three mutually perpendicular axes meet at O */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={60} y={216} size={14} fill={INK} anchor="start">
          {t("Three mutually perpendicular axes", "Teen mutually perpendicular axes")}
        </T>
        <T x={60} y={239} size={14} fill={INK} anchor="start">
          {t("meet at one origin, O.", "ek hi origin, O, par milte hain.")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0)} d={ringD(624, 394, 26, 28)} stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 4 — THE DIAGRAM: negative half-axes + 3 shaded coordinate planes */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d={arrowD(O.x, O.y, XN_TIP.x, XN_TIP.y)} stroke={MUTED} sw={1.4} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 0.4)} d={arrowD(O.x, O.y, YN_TIP.x, YN_TIP.y)} stroke={MUTED} sw={1.4} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 0.8)} d={arrowD(O.x, O.y, ZN_TIP.x, ZN_TIP.y)} stroke={MUTED} sw={1.4} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={696} y={340} size={12} fill={MUTED} anchor="start">X&apos;</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.4)}>
        <T x={484} y={380} size={12} fill={MUTED} anchor="end">Y&apos;</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={620} y={518} size={12} fill={MUTED} anchor="middle">Z&apos;</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.0)}>
        <Polygon points={XY_PTS} fill={CREAM} fillOpacity={0.85} stroke="none" />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.3)}>
        <Polygon points={YZ_PTS} fill={AMBER} fillOpacity={0.18} stroke="none" />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.6)}>
        <Polygon points={ZX_PTS} fill={GREEN} fillOpacity={0.14} stroke="none" />
      </Fade>

      {/* beat 5 — the corner of your room */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={60} y={274} size={14} fill={INK} anchor="start">
          {t("The corner of your room is O —", "Aapke room ka corner hi O hai —")}
        </T>
        <T x={60} y={297} size={14} fill={INK} anchor="start">
          {t("its 3 edges are the x, y, z axes.", "iske 3 edges hi x, y, z axes hain.")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0)} d={arrowD(RC.x, RC.y, RC_X.x, RC_X.y)} stroke={MUTED} sw={2} dur={0.35} />
      <Draw on={beat >= 5} delay={dl(5, 0.35)} d={arrowD(RC.x, RC.y, RC_Y.x, RC_Y.y)} stroke={MUTED} sw={2} dur={0.35} />
      <Draw on={beat >= 5} delay={dl(5, 0.7)} d={arrowD(RC.x, RC.y, RC_Z.x, RC_Z.y)} stroke={MUTED} sw={2} dur={0.35} />
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <Circle cx={RC.x} cy={RC.y} r={3} fill={RED} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.35)}>
        <T x={900} y={584} size={12} fill={INK} anchor="middle">
          {t("= your room's corner", "= aapke room ka corner")}
        </T>
      </Fade>

      {/* beat 6 — guardrail: floor / wall / wall */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d="M 60 318 L 60 386" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={76} y={336} size={13} fill={RED} anchor="start" weight={700}>
          {t("Floor = XY-plane", "Floor = XY-plane")}
        </T>
        <T x={76} y={358} size={13} fill={RED} anchor="start" weight={700}>
          {t("One wall = YZ-plane", "Ek wall = YZ-plane")}
        </T>
        <T x={76} y={380} size={13} fill={RED} anchor="start" weight={700}>
          {t("Other wall = ZX-plane", "Doosri wall = ZX-plane")}
        </T>
      </Fade>

      {/* beat 7 — closing: three surfaces, one corner */}
      <Draw on={beat >= 7} delay={dl(7, 0)} d={checkD(66, 415, 14)} stroke={GREEN} sw={2.5} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={84} y={419} size={14} fill={INK} anchor="start">
          {t("Three surfaces, one corner —", "Teen surfaces, ek corner —")}
        </T>
        <T x={84} y={441} size={14} fill={INK} anchor="start">
          {t("the three coordinate planes.", "yehi teen coordinate planes hain.")}
        </T>
      </Fade>
    </Scene>
  );
}
