/**
 * M11 Ch11 · Section 2 — "Collinearity: when the triangle collapses"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — subtopic "Applications: Centroid, Collinearity & Locus".
 *
 * CORRECTED CONTENT FRAMING: this section's own board_content tests collinearity via
 * "the SAME k for x, y, AND z" — genuinely 3D (coordinator-confirmed correction; matches
 * Sec15's project3D/ThreeDAxes machinery, reused here rather than a plain 2D CartesianAxes).
 *
 * Projection (math-kit project3D): OX=620 OY=380 SCALE=45. screenX = 620+45y-23.38x,
 * screenY = 380-45z+13.5x (+Y right, +Z up, +X down-left foreshortened — same convention as
 * Sec15). Points chosen so B divides AC in ratio AB:BC = 2:1 (k=2) with integer coords:
 *   A(1,0,1) C(4,3,4)  =>  B = A + (2/3)(C-A) = (1+2, 0+2, 1+2) = (3,2,3)
 * Verify k=2 on EVERY coordinate (the section's whole point): x:(3-1)/(4-3)=2/1=2
 *   y:(2-0)/(3-2)=2/1=2   z:(3-1)/(4-3)=2/1=2  -> same k=2 for x,y,z. OK
 * Projected: A=proj(1,0,1)=(620+0-23.38, 380-45+13.5)=(596.6,348.5)->(597,349)
 *   B=proj(3,2,3)=(620+90-70.14, 380-135+40.5)=(639.9,285.5)->(640,286)
 *   C=proj(4,3,4)=(620+135-93.52, 380-180+54)=(661.5,254)->(661,254)
 * Screen-ratio check (projection is linear/affine, collinearity + ratio survive it):
 *   AB=(43,-63) len=sqrt(1849+3969)=sqrt(5818)=76.3 ; BC=(21,-32) len=sqrt(441+1024)=sqrt(1465)=38.3
 *   AB/BC=76.3/38.3=1.99~2 OK (small rounding from integer screen coords)
 * False-positive point for beat 5, B' — same x,y as B but z nudged 3->2.2 (fails ONLY z):
 *   x:(3-1)/(4-3)=2 y:(2-0)/(3-2)=2 still match, but z:(2.2-1)/(4-2.2)=1.2/1.8=0.667 != 2 ->
 *   NOT collinear even though 2 of 3 coordinate ratios passed. Matches seq6's warning exactly.
 *   B'=proj(3,2,2.2): screenX same as B (x,y unchanged, screenX independent of z) = 640;
 *   screenY=380-45*2.2+13.5*3=380-99+40.5=321.5->322. B'=(640,322).
 *
 * reveals_english = [0, 6.57, 16.55, 32.68, 51.97, 68.1, 77.82, 87.72] (8 values, beats 0-7).
 * reveals_hinglish = [0, 7.08, 17.58, 31.4, 49.83, 64.6, 74.15, 83.11].
 *
 * Beats (left column x60-300 narrates, right side x420-1010 holds the 3D diagram — same
 * split as Sec15):
 *  0(title, always-on) | "Collinearity: three points, one line"
 *  1 | ANCHOR+REPRESENT: axes (X,Y,Z + O) then A,B,C plotted + line A-C. Left text row1.
 *  2 | DISTANCE LENS: small measuring ticks at A,B,C. Left text: AB+BC=AC
 *  3 | SECTION LENS: AB,BC segments re-drawn in amber (highlight pass). Left text: ratio+"x,y,z"
 *  4 | GUARDRAIL (red-margin, JSON's own note): ring B (the "milestone") + red callout
 *  5 | speed-trap style warning: B' plotted off the line, crossed out
 *  6 | sanity flag: small crossed-out triangle icon, "Area = 0" (left column)
 *  7 | LAND: green checkmark + 2-line closing statement (left column)
 *
 * Layout plan (all coords screen px):
 *  b1 | ThreeDAxes (axisLen 6, scale45) | Draw x3 | O(620,380)
 *  b1 | O dot+label; X/Y/Z labels        | circ+T  | O label(605,396) X(468,475) Y(905,385) Z(632,105)
 *  b1 | A,B,C dots+labels + line A-C     | circ+T+Draw | A(597,349) B(640,286) C(661,254)
 *  b1 | left text 2L                     | T start | x60 y100/123
 *  b2 | 3 measuring ticks at A,B,C       | Draw    | perp offset 6px each
 *  b2 | left text 2L (equation)          | T start | x60 y158/181
 *  b3 | AB, BC redrawn amber (highlight) | Draw    | A-B amber_dark, B-C amber
 *  b3 | left text 2L (ratio + x,y,z)     | T start | x60 y216/239
 *  b4 | ring around B (dot+label)        | Draw    | ringD(648,281,16,10)
 *  b4 | red bar + 2L guardrail           | Draw+T  | x60 y282-328 / text x76 y297/320
 *  b5 | B' dot + cross-out + label       | circ+Draw+T | (640,322) crossD(632,314,16,16) label(665,326)
 *  b5 | left text 2L                     | T start | x60 y358/381
 *  b6 | small triangle icon + X + label  | Draw+T  | tri(75-125,405-450) crossD(75,405,50,45) label(140,432)
 *  b7 | checkmark + 2L closing           | Draw+T  | (66,495) / x84 y499/521
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
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  ringD,
  crossD,
  Scene,
} from '@/components/scenes/kit';
import { lineD, checkD, project3D, ThreeDAxes } from "./math-kit";

const OX = 620;
const OY = 380;
const SCALE = 45;
const proj = (x: number, y: number, z: number) => project3D(x, y, z, OX, OY, SCALE);

const O = { x: OX, y: OY };
const X_TIP = proj(6, 0, 0); // (479.7,461)
const Y_TIP = proj(0, 6, 0); // (890,380)
const Z_TIP = proj(0, 0, 6); // (620,110)

const A = { x: 597, y: 349 }; // proj(1,0,1)
const B = { x: 640, y: 286 }; // proj(3,2,3)
const C = { x: 661, y: 254 }; // proj(4,3,4)
const BP = { x: 640, y: 322 }; // proj(3,2,2.2) — false positive point

export default function M11Ch11Sec2({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={RED} anchor="middle" script>
          {t("Collinearity: three points, one line", "Collinearity: teen points, ek line")}
        </T>
      </Fade>

      {/* beat 1 — anchor + represent: axes, then A/B/C plotted */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={60} y={100} size={14} fill={INK} anchor="start">
          {t("Collinear = on one line —", "Collinear = ek hi line par —")}
        </T>
        <T x={60} y={123} size={14} fill={INK} anchor="start">
          {t("no triangle forms, even in 3D.", "3D mein bhi triangle nahi banta.")}
        </T>
      </Fade>
      <ThreeDAxes on={beat >= 1} delay={dl(1, 0)} originX={OX} originY={OY} scale={SCALE} axisLen={6} stroke={INK} />
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <Circle cx={O.x} cy={O.y} r={4} fill={RED} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={605} y={396} size={13} fill={RED} anchor="end" weight={700}>O</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.0)}>
        <T x={468} y={475} size={15} fill={INK} anchor="end" weight={700}>X</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.15)}>
        <T x={905} y={385} size={15} fill={INK} anchor="start" weight={700}>Y</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <T x={632} y={105} size={15} fill={INK} anchor="start" weight={700}>Z</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.6)} d={lineD(A.x, A.y, C.x, C.y)} stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <Circle cx={A.x} cy={A.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <T x={582} y={364} size={13} fill={INK} anchor="end" weight={700}>A</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <Circle cx={B.x} cy={B.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.8)}>
        <T x={654} y={280} size={13} fill={INK} anchor="start" weight={700}>B</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.0)}>
        <Circle cx={C.x} cy={C.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.2)}>
        <T x={680} y={244} size={13} fill={INK} anchor="start" weight={700}>C</T>
      </Fade>

      {/* beat 2 — distance lens: measuring ticks + equation */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={60} y={158} size={14} fill={INK} anchor="start">
          {t("Distance lens:", "Distance wala tarika:")}
        </T>
        <T x={60} y={181} size={14} fill={AMBER_DARK} anchor="start" weight={700}>
          AB + BC = AC
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0)} d="M 592 345.6 L 602 352.4" stroke={MUTED} sw={2} dur={0.25} />
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d="M 635 282.6 L 645 289.4" stroke={MUTED} sw={2} dur={0.25} />
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d="M 656 250.6 L 666 257.4" stroke={MUTED} sw={2} dur={0.25} />

      {/* beat 3 — section lens: highlight AB, BC + ratio/coordinate claim */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={60} y={216} size={14} fill={INK} anchor="start">
          {t("Section lens: AB:BC = 2:1 —", "Section wala tarika: AB:BC = 2:1 —")}
        </T>
        <T x={60} y={239} size={14} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("same k for x, y, AND z", "wahi k — x, y, AUR z ke liye")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0)} d={lineD(A.x, A.y, B.x, B.y)} stroke={AMBER_DARK} sw={3} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 0.5)} d={lineD(B.x, B.y, C.x, C.y)} stroke={AMBER} sw={3} dur={0.3} />

      {/* beat 4 — guardrail (JSON red-margin note): ring B + callout */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d={ringD(648, 281, 16, 10)} stroke={RED} sw={2} dur={0.5} />
      <Draw on={beat >= 4} delay={dl(4, 0.7)} d="M 60 282 L 60 328" stroke={RED} sw={4} dur={0.35} />
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={76} y={297} size={13} fill={RED} anchor="start" weight={700}>
          {t("Like 3 milestones on a road —", "Jaise road ke 3 milestones —")}
        </T>
        <T x={76} y={320} size={13} fill={RED} anchor="start" weight={700}>
          {t("the middle keeps ONE fixed ratio.", "beech wala EK fixed ratio rakhta hai.")}
        </T>
      </Fade>

      {/* beat 5 — false positive: B' off the line, one coordinate fails */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={60} y={358} size={14} fill={INK} anchor="start">
          {t("If even ONE ratio disagrees,", "Agar EK bhi ratio match nahi karta,")}
        </T>
        <T x={60} y={381} size={14} fill={INK} anchor="start">
          {t("the point is off the line.", "point line se bahar hai.")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <Circle cx={BP.x} cy={BP.y} r={5} fill="#FCF4E0" stroke={RED} strokeWidth={2} />
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.9)} d={crossD(632, 314, 16, 16)} stroke={RED} sw={2} dur={0.35} />
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <T x={665} y={326} size={12} fill={RED} anchor="start" weight={700}>
          {t("B′: fails on z", "B′: z par fail")}
        </T>
      </Fade>

      {/* beat 6 — sanity flag: crossed-out triangle, Area = 0 */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0)}
        d="M 75 450 L 125 450 L 100 405 Z"
        stroke={INK}
        sw={1.5}
        dur={0.5}
      />
      <Draw on={beat >= 6} delay={dl(6, 0.7)} d={crossD(75, 405, 50, 45)} stroke={RED} sw={2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={140} y={432} size={13} fill={GREEN} anchor="start" weight={700}>
          {t("Area = 0 — sanity check", "Area = 0 — check karo")}
        </T>
      </Fade>

      {/* beat 7 — land the result */}
      <Draw on={beat >= 7} delay={dl(7, 0)} d={checkD(66, 495, 14)} stroke={GREEN} sw={2.5} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={84} y={499} size={14} fill={INK} anchor="start">
          {t("Collinearity = one ratio,", "Collinearity = ek hi ratio,")}
        </T>
        <T x={84} y={521} size={14} fill={INK} anchor="start">
          {t("same for x, y, AND z.", "x, y, AUR z sabke liye same.")}
        </T>
      </Fade>
    </Scene>
  );
}
