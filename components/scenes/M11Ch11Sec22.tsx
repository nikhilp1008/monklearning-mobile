/**
 * M11 Ch11 · Section 22 — "Worked example: octant, foot, and distance"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples. FLAGGED HIGH-SCRUTINY (octant/projection section).
 * Follows M11Ch11Sec15's project3D pattern: proj=(x,y,z)=>project3D(x,y,z,OX,OY,SCALE).
 *
 * Problem: P(5, -4, 9). (a) octant (b) foot on ZX-plane (c) distance from XY-plane.
 * Independently hand-verified (not just trusting the JSON's claimed answer):
 *   (a) signs of (5,-4,9) = (+,-,+). Canonical table column IV = (x+,y-,z+). MATCH -> octant IV.
 *   (b) ZX-plane is y=0 (contains the x,z axes) -> foot = (5,0,9).
 *   (c) XY-plane is z=0 -> distance = |z| = |9| = 9.
 *
 * Projection: OX=680,OY=480,SCALE=34, project3D formula (xForeshorten=0.6):
 *   screenX = 680 + 34y - 17.667x   screenY = 480 - 34z + 10.2x
 * Hand-verified points (all safe-area-checked, x in[36,1044] y in[30,596]):
 *   O=(680,480)
 *   P = proj(5,-4,9)  = 680-136-88.33=455.67, 480-306+51=225.00        -> (455.67, 225.00)  up-left of O
 *     (sanity: z+ dominates the vertical pull -34*9=-306 vs x's +10.2*5=+51 -> net up. y- and x+ both
 *      pull screenX left -> net left. "up-left" matches the sign-contribution rule verified in Sec15's
 *      header note, extended here: octant IV (x+,y-,z+) sits up-left, vs octant I (x+,y+,z+) up-right.)
 *   F = proj(5,0,9)   = 680+0-88.33=591.67, same z,x as P -> 225.00     -> (591.67, 225.00) (same
 *     screenY as P since only y changed — dropping y is a pure HORIZONTAL move on this projection,
 *     a nice property of the formula: y has no screenY term.)
 *   P0= proj(5,-4,0)  = same x,y as P -> 455.67, 480-0+51=531.00        -> (455.67, 531.00) (same
 *     screenX as P since only z changed — dropping to z=0 is a pure VERTICAL move, since z has no
 *     screenX term. This is why the two construction lines are exactly horizontal / exactly vertical.)
 *   X_TIP = proj(6,0,0)  = 680-105.99, 480+61.2   -> (574.0, 541.2)
 *   Z_TIP = proj(0,0,9.5)= 680, 480-323           -> (680.0, 157.0)   (9.5, just past P's z=9)
 *   Y_TIP = proj(0,2,0)  = 680+68, 480            -> (748.0, 480.0)
 *   YN_TIP= proj(0,-5,0) = 680-170, 480           -> (510.0, 480.0)
 *   X3    = proj(3,0,0)  = 680-52.998, 480+30.6   -> (627.0, 510.6)   (ZX-wall / XY-floor shared corner)
 *   Z4    = proj(0,0,4)  = 680, 480-136           -> (680.0, 344.0)   (ZX-wall corner)
 *   X3Z4  = proj(3,0,4)  = 627.0, 480-136+30.6    -> (627.0, 374.6)   (ZX-wall corner)
 *   X3Yn5 = proj(3,-5,0) = 680-170-52.998, 510.6  -> (457.0, 510.6)   (XY-floor corner)
 * All within safe area; P/F/P0 sit clear of the left text column (kept to x<=410, diagram starts ~455).
 *
 * reveals_english = [0, 12.29, 25.26, 38.74, 48.73, 60.59, 70.66, 82.27, 93.02] (9 values, beats 0-8).
 * reveals_hinglish = [0, 10.92, 25.09, 38.4, 47.28, 58.12, 66.22, 76.38, 86.54].
 *
 * Beats:
 *  0 (title, always-on) | "Worked example: octant, foot, and distance"
 *  1 | given statement + SETUP: draw axes (X+,Z+,Y+,Y-), O, plot P labeled
 *  2 | (a) sign pattern text, ring drawn around "(+, -, +)"
 *  3 | (+,-,+) => octant IV: ring around P + "Octant IV" chip
 *  4 | (b) ZX-plane rule (y=0) + shade the ZX-wall wedge (amber)
 *  5 | foot = (5,0,9): horizontal construction line P->F, F dot, "Foot = (5, 0, 9)" chip
 *  6 | (c) distance rule (|z|) + shade the XY-floor wedge (green)
 *  7 | |z|=9: vertical construction line P->P0, tick, P0 dot, "Distance = 9" chip
 *  8 | red-margin guardrail note: quote the rule before substituting
 *
 * Left column (narration/steps) x60-410. Right diagram x450-1044. Gutter ~45px, never crossed.
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
import { project3D, lineD } from "./math-kit";

const OX = 680;
const OY = 480;
const SCALE = 34;
const proj = (x: number, y: number, z: number) => project3D(x, y, z, OX, OY, SCALE);

const O = { x: OX, y: OY };
const P = proj(5, -4, 9); // (455.67, 225.00)
const F = proj(5, 0, 9); // (591.67, 225.00)
const P0 = proj(5, -4, 0); // (455.67, 531.00)
const X_TIP = proj(6, 0, 0); // (574.0, 541.2)
const Z_TIP = proj(0, 0, 9.5); // (680.0, 157.0)
const Y_TIP = proj(0, 2, 0); // (748.0, 480.0)
const YN_TIP = proj(0, -5, 0); // (510.0, 480.0)

// ZX-wall wedge (y=0 plane), size x:0-3, z:0-4 — parallelogram O, X3, X3Z4, Z4
const X3 = proj(3, 0, 0); // (627.0, 510.6)
const Z4 = proj(0, 0, 4); // (680.0, 344.0)
const X3Z4 = proj(3, 0, 4); // (627.0, 374.6)
const ZX_WALL_PTS = `${O.x},${O.y} ${X3.x},${X3.y} ${X3Z4.x},${X3Z4.y} ${Z4.x},${Z4.y}`;

// XY-floor wedge (z=0 plane), size x:0-3, y:0..-5 — parallelogram O, X3, X3Yn5, Yn5
const X3Yn5 = proj(3, -5, 0); // (457.0, 510.6)
const XY_FLOOR_PTS = `${O.x},${O.y} ${X3.x},${X3.y} ${X3Yn5.x},${X3Yn5.y} ${YN_TIP.x},${YN_TIP.y}`;

// left-column "(a)" line: prefix width differs slightly per language (238px en / 245px hi at
// size14) — fix the ring/suffix start past the longer one so it never crowds the prefix.
const SUFFIX_X = 312;

export default function M11Ch11Sec22({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={RED} anchor="middle" script>
          {t("Worked example: octant, foot, and distance", "Worked example: octant, foot, aur distance")}
        </T>
      </Fade>

      {/* beat 1 — given statement + setup: axes, O, plot P */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={60} y={100} size={15} fill={INK} anchor="start">
          {t(
            "Point P(5, -4, 9): find its octant, its foot on the ZX-plane, and its distance from the XY-plane.",
            "Point P(5, -4, 9): iska octant, ZX-plane par foot, aur XY-plane se distance nikaalo."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d={arrowD(O.x, O.y, X_TIP.x, X_TIP.y)} stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 0.8)} d={arrowD(O.x, O.y, Z_TIP.x, Z_TIP.y)} stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 1.3)} d={arrowD(O.x, O.y, Y_TIP.x, Y_TIP.y)} stroke={INK} sw={2} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 1.6)} d={arrowD(O.x, O.y, YN_TIP.x, YN_TIP.y)} stroke={INK} sw={2} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 1.95)}>
        <Circle cx={O.x} cy={O.y} r={4} fill={RED} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.1)}>
        <T x={690} y={500} size={13} fill={RED} anchor="start" weight={700}>O</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.3)}>
        <T x={557} y={552} size={14} fill={INK} anchor="middle" weight={700}>X</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <T x={763} y={484} size={14} fill={INK} anchor="start" weight={700}>Y</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.7)}>
        <T x={680} y={142} size={14} fill={INK} anchor="middle" weight={700}>Z</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.0)}>
        <Circle cx={P.x} cy={P.y} r={5} fill={AMBER} stroke={INK} strokeWidth={1} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.3)}>
        <T x={468} y={270} size={14} fill={INK} anchor="start" weight={700}>
          P(5, -4, 9)
        </T>
      </Fade>

      {/* beat 2 — (a) sign pattern, ring the extracted signs */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={60} y={150} size={14} fill={INK} anchor="start">
          {t("(a) Sign pattern of (5, -4, 9) is ", "(a) (5, -4, 9) ka sign pattern hai ")}
        </T>
        <T x={SUFFIX_X} y={150} size={14} fill={INK} anchor="start">
          (+, -, +)
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.7)} d={ringD(344, 147, 46, 20)} stroke={AMBER} sw={2} dur={0.5} />

      {/* beat 3 — (+,-,+) => octant IV: ring P, stamp the chip */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={60} y={200} size={14} fill={GREEN_DARK} anchor="start" weight={700}>
          (+, -, +) ⇒ octant IV
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.3)} d={ringD(P.x, P.y, 22, 24)} stroke={AMBER} sw={2.2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 1.0)}>
        <Chip x={480} y={150} w={130} h={32} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={18} script={false}>
          Octant IV
        </Chip>
      </Fade>

      {/* beat 4 — (b) ZX-plane rule (y=0), shade the ZX-wall */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={60} y={240} size={14} fill={INK} anchor="start">
          {t("(b) The ZX-plane is y = 0, so", "(b) ZX-plane: y = 0, isliye")}
        </T>
        <T x={60} y={263} size={14} fill={INK} anchor="start">
          {t("projecting kills the y-coordinate.", "project se y-coordinate mit jaata hai.")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <Polygon points={ZX_WALL_PTS} fill={AMBER} fillOpacity={0.18} stroke="none" />
      </Fade>

      {/* beat 5 — foot on ZX = (5, 0, 9): horizontal drop, F dot, chip */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={60} y={300} size={14} fill={GREEN_DARK} anchor="start" weight={700}>
          Foot on ZX = (5, 0, 9)
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.5)} d={lineD(P.x, P.y, F.x, F.y)} stroke={MUTED} sw={1.6} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <Circle cx={F.x} cy={F.y} r={4} fill={GREEN} stroke={INK} strokeWidth={1} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.3)}>
        <Chip x={700} y={205} w={180} h={34} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={18} script={false}>
          Foot = (5, 0, 9)
        </Chip>
      </Fade>

      {/* beat 6 — (c) distance rule (|z|), shade the XY-floor */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={60} y={340} size={14} fill={INK} anchor="start">
          {t("(c) Distance from the XY-plane is |z|.", "(c) XY-plane se distance hai |z|.")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <Polygon points={XY_FLOOR_PTS} fill={GREEN} fillOpacity={0.14} stroke="none" />
      </Fade>

      {/* beat 7 — |z|=9: vertical drop, P0 dot + tick, chip */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={60} y={378} size={14} fill={GREEN_DARK} anchor="start" weight={700}>
          |z| = |9| = 9 units
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d={lineD(P.x, P.y, P0.x, P0.y)} stroke={MUTED} sw={1.6} dur={0.6} />
      <Draw
        on={beat >= 7}
        delay={dl(7, 1.2)}
        d={lineD(P0.x - 13, P0.y, P0.x + 13, P0.y)}
        stroke={MUTED}
        sw={1.6}
        dur={0.2}
      />
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <Circle cx={P0.x} cy={P0.y} r={4} fill={GREEN} stroke={INK} strokeWidth={1} />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.7)}>
        <Chip x={470} y={364} w={140} h={32} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={18} script={false}>
          Distance = 9
        </Chip>
      </Fade>

      {/* beat 8 — red-margin guardrail: quote the rule before substituting */}
      <Draw on={beat >= 8} delay={dl(8, 0)} d="M 60 405 L 60 490" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 0.5)}>
        <T x={76} y={430} size={13} fill={RED} anchor="start" weight={700}>
          {t("Quote the rule ('ZX ⇒ y = 0')", "Substitute se pehle rule bolo")}
        </T>
        <T x={76} y={453} size={13} fill={RED} anchor="start" weight={700}>
          {t("before substituting -", "('ZX ⇒ y = 0') -")}
        </T>
        <T x={76} y={476} size={13} fill={RED} anchor="start" weight={700}>
          {t("it earns method marks.", "isse method marks milte hain.")}
        </T>
      </Fade>
    </Scene>
  );
}
