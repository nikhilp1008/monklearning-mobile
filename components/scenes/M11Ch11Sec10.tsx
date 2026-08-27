/**
 * M11 Ch11 · Section 10 — "Worked example: parallelogram, and is it a rectangle?"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples.
 *
 * DATA NOTE: the task brief describes secs 1-12 as a pure-2D "Applications" unit, but this
 * section's Supabase board_content is unambiguously 3D — A(1,0,2), B(4,2,3), C(5,7,2), D(2,5,1)
 * (three coordinates each) and 3D vectors/dot-products throughout. Supabase JSON is the
 * authoritative source per the brief, so this scene uses the chapter's existing project3D/
 * ThreeDAxes oblique-projection system (introduced Sec15) rather than forcing a 2D reading.
 *
 * Hand-verified arithmetic (independent of the narration's claims):
 *   AB = B-A = (3,2,1). DC = C-D = (5-2,7-5,2-1) = (3,2,1). AB=DC ✓.
 *   AD = D-A = (1,5,-1). BC = C-B = (5-4,7-2,2-3) = (1,5,-1). AD=BC ✓.
 *   => opposite sides equal & parallel => ABCD IS a parallelogram.
 *   AC = C-A = (4,7,0), |AC|^2 = 16+49+0 = 65.
 *   BD = D-B = (-2,3,-2), |BD|^2 = 4+9+4 = 17.
 *   65 != 17 => diagonals unequal => NOT a rectangle.
 *   AB·AD = 3(1)+2(5)+1(-1) = 3+10-1 = 12 != 0 => adjacent sides not perpendicular (confirms).
 * All figures match the JSON's own claims exactly — verified independently, not just copied.
 *
 * Projection: project3D(x,y,z,OX,OY,SCALE), OX=130,OY=460,SCALE=46 (math-kit convention:
 * +Y right, +Z up, +X down-left foreshortened). screenX = 130+46y-23.899x, screenY = 460-46z+13.8x.
 *   A(1,0,2)->(106,382)  B(4,2,3)->(126,377)  C(5,7,2)->(333,437)  D(2,5,1)->(312,442)
 *   origin O->(130,460). Axis tips (axisLen=3): X->(58,501) Y->(268,460) Z->(130,322).
 * Oblique/cavalier projection is affine, so it preserves the parallelogram property exactly
 * (parallel sides stay parallel, midpoints of AC/BD coincide on screen too) — the diagram is a
 * true, not merely illustrative, picture of the proof. The shape is a thin sliver on screen
 * (AB screen-length ~20px vs AD ~230px) because AB's vector has a heavily-foreshortened x-heavy
 * component while AD's is mostly the undistorted y-direction — a real, expected artifact of this
 * specific data under oblique projection, not a bug.
 *
 * reveals_english = [0, 11.86, 22.36, 46.34, 62.12, 71.42, 84.22, 99.33, 107.43] (9 values, beats 0-8).
 *
 * Beats:
 *  0(title, always-on) | "Worked example: parallelogram, or rectangle?"
 *  1 | GIVEN + SET UP: state the 4 points; draw axes, plot A,B,C,D as dots+labels
 *  2 | step: AB=(3,2,1), DC=(3,2,1) => AB=DC — draw arrows A->B, D->C (amber) on diagram
 *  3 | step: AD=(1,5,-1), BC=(1,5,-1) => AD=BC — draw arrows A->D, B->C (amber_dark)
 *  4 | LAND: checkmark + "ABCD IS a parallelogram" (green)
 *  5 | rectangle test question; draw both diagonals AC, BD dashed (muted) on diagram
 *  6 | |AC|^2=65, |BD|^2=17
 *  7 | BOXED ANSWER: "65 != 17" (red) -> "NOT a rectangle" (green chip)
 *  8 | red-margin sanity check: AB·AD=12!=0 confirms not perpendicular
 *
 * Layout plan (left diagram x36-490, right algebra column x556-1044):
 *  b1 | given 2 lines (14,ink,mid)        | T mid   | x540 y92/114
 *  b1 | ThreeDAxes O(130,460) len3        | Draw    | X(58,501) Y(268,460) Z(130,322)
 *  b1 | axis labels X/Y/Z (12,muted)      | T       | (50,516)/(280,452)/(130,306)
 *  b1 | O dot+label                       | circle+T| (130,460) label(145,472)
 *  b1 | A,B,C,D dots + single-letter labels| circle+T| A(106,382)l(85,370) B(126,377)l(126,360)
 *       C(333,437)l(352,443) D(312,442)l(312,463)
 *  b2 | AB=(3,2,1) / DC=C-D=(3,2,1) / =>AB=DC | T start | x560 y136/160/188
 *  b2 | arrow A->B, D->C (amber)          | Draw    | on diagram
 *  b3 | AD=(1,5,-1) / BC=C-B=(1,5,-1) / =>AD=BC | T start | x560 y224/248/276
 *  b3 | arrow A->D, B->C (amber_dark)      | Draw    | on diagram
 *  b4 | check + "ABCD IS a parallelogram." | Draw+T  | check(568,313,13) text x590 y317
 *  b5 | "Rectangle test: are AC,BD equal?" | T start | x560 y346
 *  b5 | diagonals A-C, B-D dashed muted    | Draw    | on diagram
 *  b6 | |AC|^2=... =65 / |BD|^2=...=17     | T start | x560 y380/404
 *  b7 | "65 != 17" (18,red,bold)           | T start | x560 y438
 *  b7 | chip "NOT a rectangle" (green)     | Chip    | x560 y458 w220 h32
 *  b8 | red bar + 2L sanity check          | Draw+T  | bar x556 y505-572; text x572 y526/550
 *       (right column, below the b7 chip — NOT the left margin, which the diagram's O/Y/D
 *       labels occupy at x100-320,y450-475; moved here after verify-scene caught the overlap)
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
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { project3D, ThreeDAxes, checkD } from "./math-kit";

const OX = 130;
const OY = 460;
const SCALE = 46;
const proj = (x: number, y: number, z: number) => project3D(x, y, z, OX, OY, SCALE);

const A = proj(1, 0, 2); // (106,382)
const B = proj(4, 2, 3); // (126,377)
const C = proj(5, 7, 2); // (333,437)
const D = proj(2, 5, 1); // (312,442)
const O = { x: OX, y: OY };

export default function M11Ch11Sec10({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={RED} anchor="middle" script>
          {t("Worked Example: Parallelogram, or Rectangle?", "Worked Example: Parallelogram, Ya Rectangle?")}
        </T>
      </Fade>

      {/* beat 1 — GIVEN + SET UP */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={92} size={14} fill={INK} anchor="middle">
          {t("Given: A(1,0,2), B(4,2,3), C(5,7,2), D(2,5,1).", "Diya hai: A(1,0,2), B(4,2,3), C(5,7,2), D(2,5,1).")}
        </T>
        <T x={540} y={114} size={14} fill={INK} anchor="middle">
          {t(
            "Show ABCD is a parallelogram — then test: is it a rectangle?",
            "Dikhao ABCD parallelogram hai — phir test: kya ye rectangle hai?"
          )}
        </T>
      </Fade>
      <ThreeDAxes on={beat >= 1} delay={dl(1, 0.5)} originX={OX} originY={OY} scale={SCALE} axisLen={3} stroke={MUTED} />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={50} y={516} size={12} fill={MUTED} anchor="middle">X</T>
        <T x={280} y={452} size={12} fill={MUTED} anchor="start">Y</T>
        <T x={130} y={306} size={12} fill={MUTED} anchor="middle">Z</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <Circle cx={O.x} cy={O.y} r={3} fill={MUTED} />
        <T x={145} y={472} size={11} fill={MUTED} anchor="start">O</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <Circle cx={A.x} cy={A.y} r={4} fill={INK} />
        <T x={85} y={370} size={12} fill={INK} anchor="end" weight={700}>A</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <Circle cx={B.x} cy={B.y} r={4} fill={INK} />
        <T x={126} y={360} size={12} fill={INK} anchor="middle" weight={700}>B</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.1)}>
        <Circle cx={C.x} cy={C.y} r={4} fill={INK} />
        <T x={352} y={443} size={12} fill={INK} anchor="start" weight={700}>C</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <Circle cx={D.x} cy={D.y} r={4} fill={INK} />
        <T x={312} y={463} size={12} fill={INK} anchor="middle" weight={700}>D</T>
      </Fade>

      {/* beat 2 — AB = DC */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d={arrowD(A.x, A.y, B.x, B.y)} stroke={AMBER} sw={2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={560} y={136} size={14} fill={INK} anchor="start">AB = (3, 2, 1)</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.1)} d={arrowD(D.x, D.y, C.x, C.y)} stroke={AMBER} sw={2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={560} y={160} size={14} fill={INK} anchor="start">DC = C − D = (3, 2, 1)</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.3)}>
        <T x={560} y={188} size={17} fill={AMBER_DARK} anchor="start" weight={700}>⇒ AB = DC</T>
      </Fade>

      {/* beat 3 — AD = BC */}
      <Draw on={beat >= 3} delay={dl(3, 0)} d={arrowD(A.x, A.y, D.x, D.y)} stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={560} y={224} size={14} fill={INK} anchor="start">AD = (1, 5, −1)</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.2)} d={arrowD(B.x, B.y, C.x, C.y)} stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={560} y={248} size={14} fill={INK} anchor="start">BC = C − B = (1, 5, −1)</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.5)}>
        <T x={560} y={276} size={17} fill={AMBER_DARK} anchor="start" weight={700}>⇒ AD = BC</T>
      </Fade>

      {/* beat 4 — LAND: parallelogram confirmed */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d={checkD(568, 313, 13)} stroke={GREEN} sw={2.5} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={590} y={317} size={15} fill={GREEN} anchor="start" weight={700}>
          {t("ABCD IS a parallelogram.", "ABCD ek parallelogram hai.")}
        </T>
      </Fade>

      {/* beat 5 — rectangle test: draw diagonals */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={560} y={346} size={14} fill={INK} anchor="start">
          {t("Rectangle test: are AC, BD equal?", "Rectangle test: kya AC, BD barabar hain?")}
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.6)}
        d={`M ${A.x} ${A.y} L ${C.x} ${C.y}`}
        stroke={MUTED}
        sw={1.6}
        dur={0.4}
      />
      <Draw
        on={beat >= 5}
        delay={dl(5, 1.1)}
        d={`M ${B.x} ${B.y} L ${D.x} ${D.y}`}
        stroke={MUTED}
        sw={1.6}
        dur={0.4}
      />

      {/* beat 6 — squared diagonal lengths */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={560} y={380} size={14} fill={INK} anchor="start">|AC|² = 4² + 7² + 0² = 65</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={560} y={404} size={14} fill={INK} anchor="start">|BD|² = (−2)² + 3² + (−2)² = 17</T>
      </Fade>

      {/* beat 7 — BOXED ANSWER */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={560} y={438} size={18} fill={RED} anchor="start" weight={700}>65 ≠ 17</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <Chip x={560} y={458} w={220} h={32} fill={GREEN} textFill="#FFFEFB" size={14} script={false}>
          {t("NOT a rectangle", "Rectangle NAHI hai")}
        </Chip>
      </Fade>

      {/* beat 8 — red-margin sanity check via dot product (right column, below the chip —
          NOT the left margin: the diagram's O/Y/D labels occupy x100-320,y450-475) */}
      <Draw on={beat >= 8} delay={dl(8, 0)} d="M 556 505 L 556 572" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 0.5)}>
        <T x={572} y={526} size={14} fill={RED} anchor="start" weight={700}>
          {t("Sanity check: AB · AD = 12 ≠ 0.", "Sanity check: AB · AD = 12 ≠ 0.")}
        </T>
        <T x={572} y={550} size={13} fill={RED} anchor="start">
          {t(
            "Nonzero ⇒ adjacent sides aren't perpendicular either.",
            "Nonzero ⇒ adjacent sides perpendicular bhi nahi hain."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
