/**
 * M11 Ch11 · Section 3 — "Locus: sculpting space with a rule"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — subtopic "Applications: Centroid, Collinearity & Locus".
 *
 * CORRECTED CONTENT FRAMING: this section's own board_content is explicitly, unavoidably
 * about 3D loci (a "flat plane", a "sphere", an "ellipsoid") — coordinator-confirmed
 * correction; uses project3D/ThreeDAxes (Sec15's machinery) for genuine 3D grounding rather
 * than a plain 2D scheme. Per the coordinator's guidance this is a concept-level overview,
 * not a rigorous 3D-surface renderer: the plane's two fixed points are real project3D-plotted
 * 3D points (below), while the sphere/ellipsoid are drawn as representative sketches in the
 * house's own hand-authored-diagram convention (seq5's raw SVG: circle + dashed "equator"
 * ellipse in perspective) — a sphere's silhouette from any angle is a circle, so this is not
 * a simplification of the maths, just of the rendering. A small persistent axes badge
 * (bottom-left corner, same short-arrow convention Sec15 uses for its "room corner" icon)
 * keeps every beat visibly grounded in 3D space.
 *
 * Projection (math-kit project3D, same convention as Sec15): OX=620 OY=380 SCALE=45.
 * Plane's two fixed points, A(1,1,1) B(5,4,3) [arbitrary, JSON gives no coords]:
 *   A=proj(1,1,1)=(620+45-23.38, 380-45+13.5)=(641.6,348.5)->(642,349)
 *   B=proj(5,4,3)=(620+180-116.9, 380-135+67.5)=(683.1,312.5)->(683,313)
 * Perpendicular-bisector plane sketched as a tilted parallelogram centred at M=midpoint(A,B)
 * =(662,331), width vector u = perp(AB-direction)*90 = (59,68), depth/tilt vector v=(24,10)
 * (representative sketch, not a true 3D-derived plane orientation, per coordinator's note):
 *   C1=M-u-v=(579,253) C2=M+u-v=(697,389) C3=M+u+v=(745,409) C4=M-u+v=(627,273)
 *
 * Layout strategy: ONE caption slot (x540,y110ish, mutually exclusive per beat via
 * on={beat===k}) + ONE demo-band diagram slot (y270-470) that is built beat-by-beat and then
 * ERASED (fully gated off, not dimmed) when the next locus family member needs the same
 * space — matches base spec Step 6's "if the board is full, a real teacher erases" rule,
 * since 3 successive full-width surfaces (plane/sphere/ellipsoid) cannot coexist in one band.
 *
 * Geometry verification (hand-computed):
 *  - Ellipsoid (beat 6): ellipse cx=500,cy=380,rx=130,ry=55. c=sqrt(rx^2-ry^2)=sqrt(16900-3025)
 *    =sqrt(13875)=117.8 -> foci F1=(382.2,380) F2=(617.8,380).
 *    P at angle 60 deg: P=(500+130*cos60, 380-55*sin60)=(565,332.4).
 *    PF1=sqrt(182.8^2+47.6^2)=sqrt(33415.8+2266.8)=sqrt(35682.6)=188.9
 *    PF2=sqrt(52.8^2+47.6^2)=sqrt(2787.8+2266.8)=sqrt(5054.6)=71.1
 *    PF1+PF2=260.0 = 2*rx=260 exactly -> confirms ellipse property (constant sum), verified
 *    at a non-symmetric point (not just the top vertex, where it would be trivially true).
 *
 * reveals_english = [0, 11.52, 25.69, 40.19, 49.41, 61.87, 74.84, 87.98] (8 values, beats 0-7).
 * reveals_hinglish = [0, 9.64, 23.98, 38.74, 47.02, 55.89, 68.01, 80.73].
 *
 * Beats:
 *  0(title, always-on) | "Locus: shaping surfaces from a rule"
 *  1 | ANCHOR: a locus = points obeying a rule (circle + 4 marked points, in demo band)
 *  2 | plane: 2 fixed points A,B + tilted parallelogram (perpendicular-bisector plane)
 *  3 | sphere setup: center C + radius line (erase plane)
 *  4 | sphere complete: outline + dashed equator ellipse + C(a,b,c) label + caption(JSON diagram)
 *  5 | goat/peg analogy: peg tick at C + grazing footprint dots around the circle
 *  6 | ellipsoid: ellipse + F1,F2 foci + point P + PF1,PF2 lines (erase sphere)
 *  7 | LAND+GUARDRAIL (red-margin, final): 3-row recap (plane/sphere/ellipsoid) in a red frame
 *
 * Layout plan (all coords screen px; caption slot always x540 y98-126):
 *  b1 | caption (2 lines)              | T mid  | x540 y98/122
 *  b1 | locus-curve icon (erased b2)   | Draw+circ | c(540,370) r70, 4 dots via pointOnCircle
 *  b1 | "each dot obeys the same rule" | T mid  | x540 y465
 *  b1 | mini 3D-axes badge (persists)  | Draw+T | RC(110,540) x/y/z tips, caption y580
 *  b2 | caption                        | T mid  | x540 y110
 *  b2 | A,B dots+labels, AB line       | circ+Draw | A(642,349) B(683,313) — project3D-plotted
 *  b2 | plane parallelogram (fill+out) | Draw   | C1(579,253) C2(697,389) C3(745,409) C4(627,273)
 *  b2 | "equidistant plane" label      | T start| x548 y398
 *  b3 | caption                        | T mid  | x540 y110
 *  b3 | C dot (red) + radius line + r  | circ+Draw+T | C(500,380) -> (590,380)
 *  b4 | caption                        | T mid  | x540 y110
 *  b4 | circle outline + dashed equator + C(a,b,c) label | Draw+ellipse+T
 *  b5 | caption                        | T mid  | x540 y110
 *  b5 | peg tick at C + 6 footprints   | Draw+circ | around circle r90
 *  b6 | caption                        | T mid  | x540 y110
 *  b6 | ellipse + F1/F2 + P + lines + sum label | Draw+circ+T
 *  b7 | caption "The locus family:"    | T mid  | x540 y110
 *  b7 | 3-row recap + red frame        | Draw+circ+T | frame x300 y282 w480 h193
 */

import React from "react";
import { Circle, Ellipse, Path } from 'react-native-svg';
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
  RED,
  arrowD,
  Scene,
} from '@/components/scenes/kit';
import { lineD, pointOnCircle, circleD, roundRectD } from "./math-kit";

// plane's two fixed points — genuine project3D plot (see header comment)
const PLANE_A = { x: 642, y: 349 };
const PLANE_B = { x: 683, y: 313 };

// mini 3D-axes badge (persistent context, same hand-drawn convention as Sec15's
// "room corner" icon — not itself calling project3D, same as that precedent)
const RC = { x: 110, y: 540 };
const RC_X = { x: 72, y: 562 };
const RC_Y = { x: 158, y: 540 };
const RC_Z = { x: 110, y: 492 };

export default function M11Ch11Sec3({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // beat 1 — locus-as-curve icon
  const curveDots = [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2].map((a) =>
    pointOnCircle(540, 370, 70, a)
  );

  // beat 5 — grazing footprints around the sphere
  const footAngles = [Math.PI / 6, Math.PI / 2, (5 * Math.PI) / 6, (7 * Math.PI) / 6, (3 * Math.PI) / 2, (11 * Math.PI) / 6];
  const footprints = footAngles.map((a) => pointOnCircle(500, 380, 90, a));

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={RED} anchor="middle" script>
          {t("Locus: shaping surfaces from a rule", "Locus: rule se surface banana")}
        </T>
      </Fade>

      {/* ===== caption slot — mutually exclusive per beat ===== */}
      <Fade on={beat === 1} delay={dl(1, 0)}>
        <T x={540} y={98} size={15} fill={INK} anchor="middle">
          {t("A locus is every point obeying one rule.", "Locus matlab har point jo ek rule maane.")}
        </T>
        <T x={540} y={122} size={15} fill={INK} anchor="middle">
          {t("In 3D, distance rules carve out surfaces.", "3D mein, distance rules surfaces banate hain.")}
        </T>
      </Fade>
      <Fade on={beat === 2} delay={dl(2, 0)}>
        <T x={540} y={110} size={15} fill={INK} anchor="middle">
          {t("Equidistant from two fixed points → a flat plane.", "Do fixed points se equidistant → ek flat plane.")}
        </T>
      </Fade>
      <Fade on={beat === 3} delay={dl(3, 0)}>
        <T x={540} y={110} size={15} fill={INK} anchor="middle">
          {t("Fixed distance from one fixed point → a sphere.", "Ek fixed point se fixed distance → ek sphere.")}
        </T>
      </Fade>
      <Fade on={beat === 4} delay={dl(4, 0)}>
        <T x={540} y={110} size={15} fill={INK} anchor="middle">
          {t("Every point on the surface is distance r from C.", "Surface ka har point C se distance r par hai.")}
        </T>
      </Fade>
      <Fade on={beat === 5} delay={dl(5, 0)}>
        <T x={540} y={110} size={15} fill={INK} anchor="middle">
          {t("Like a goat on a rope — grazing traces a sphere.", "Jaise rassi par bandhi bakri — grazing se sphere banta hai.")}
        </T>
      </Fade>
      <Fade on={beat === 6} delay={dl(6, 0)}>
        <T x={540} y={110} size={15} fill={INK} anchor="middle">
          {t("Constant sum of distances from two points → an ellipsoid.", "Do points se distances ka constant sum → ek ellipsoid.")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={110} size={15} fill={INK} anchor="middle" weight={700}>
          {t("The locus family:", "Locus ka poora parivaar:")}
        </T>
      </Fade>

      {/* ===== beat 1 — locus-as-curve icon (erased at beat 2) ===== */}
      <Draw on={beat === 1} delay={dl(1, 0.6)} d={circleD(540, 370, 70)} stroke={INK} sw={2} dur={0.7} />
      {curveDots.map((p, i) => (
        <Fade key={i} on={beat === 1} delay={dl(1, 1.4 + i * 0.15)}>
          <Circle cx={p.x} cy={p.y} r={4} fill={AMBER_DARK} />
        </Fade>
      ))}
      <Fade on={beat === 1} delay={dl(1, 2.1)}>
        <T x={540} y={465} size={13} fill={INK} anchor="middle">
          {t("each dot obeys the same rule", "har dot wahi rule maanta hai")}
        </T>
      </Fade>

      {/* ===== mini 3D-axes badge — persistent context from beat 1 onward ===== */}
      <Draw on={beat >= 1} delay={dl(1, 2.4)} d={arrowD(RC.x, RC.y, RC_X.x, RC_X.y)} stroke={MUTED} sw={1.6} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 2.65)} d={arrowD(RC.x, RC.y, RC_Y.x, RC_Y.y)} stroke={MUTED} sw={1.6} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 2.9)} d={arrowD(RC.x, RC.y, RC_Z.x, RC_Z.y)} stroke={MUTED} sw={1.6} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 3.2)}>
        <Circle cx={RC.x} cy={RC.y} r={3} fill={MUTED} />
        <T x={58} y={572} size={10} fill={MUTED} anchor="middle">x</T>
        <T x={168} y={538} size={10} fill={MUTED} anchor="start">y</T>
        <T x={110} y={482} size={10} fill={MUTED} anchor="middle">z</T>
        <T x={110} y={580} size={11} fill={MUTED} anchor="middle">
          {t("(in 3D space)", "(3D space mein)")}
        </T>
      </Fade>

      {/* ===== beat 2 — plane (erased at beat 3) ===== */}
      <Fade on={beat === 2} delay={dl(2, 0)}>
        <Circle cx={PLANE_A.x} cy={PLANE_A.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat === 2} delay={dl(2, 0.2)}>
        <T x={627} y={363} size={13} fill={INK} anchor="end" weight={700}>A</T>
      </Fade>
      <Fade on={beat === 2} delay={dl(2, 0.5)}>
        <Circle cx={PLANE_B.x} cy={PLANE_B.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat === 2} delay={dl(2, 0.7)}>
        <T x={698} y={299} size={13} fill={INK} anchor="start" weight={700}>B</T>
      </Fade>
      <Draw
        on={beat === 2}
        delay={dl(2, 1.0)}
        d={lineD(PLANE_A.x, PLANE_A.y, PLANE_B.x, PLANE_B.y)}
        stroke={INK}
        sw={2}
        dur={0.5}
      />
      <Fade on={beat === 2} delay={dl(2, 1.8)}>
        <Path d="M 579 253 L 697 389 L 745 409 L 627 273 Z" fill="#EEA31F26" stroke="none" />
      </Fade>
      <Draw
        on={beat === 2}
        delay={dl(2, 2.0)}
        d="M 579 253 L 697 389 L 745 409 L 627 273 Z"
        stroke={AMBER_DARK}
        sw={2}
        dur={0.6}
      />
      <Fade on={beat === 2} delay={dl(2, 2.8)}>
        <T x={758} y={345} size={12} fill={AMBER_DARK} anchor="start">
          {t("equidistant plane", "equidistant plane")}
        </T>
      </Fade>

      {/* ===== beat 3 — sphere setup: center + radius (erased at beat 6) ===== */}
      <Fade on={beat >= 3 && beat <= 5} delay={dl(3, 0)}>
        <Circle cx={500} cy={380} r={5} fill={RED} />
      </Fade>
      <Draw on={beat >= 3 && beat <= 5} delay={dl(3, 0.4)} d={lineD(500, 380, 590, 380)} stroke={AMBER} sw={2.2} dur={0.5} />
      <Fade on={beat >= 3 && beat <= 5} delay={dl(3, 0.9)}>
        <T x={545} y={372} size={13} fill={AMBER_DARK} anchor="middle" weight={700}>r</T>
      </Fade>

      {/* ===== beat 4 — sphere complete: outline + equator + label ===== */}
      <Draw on={beat >= 4 && beat <= 5} delay={dl(4, 0)} d={circleD(500, 380, 90)} stroke={INK} sw={2} dur={0.8} />
      <Fade on={beat >= 4 && beat <= 5} delay={dl(4, 0.9)}>
        <Ellipse cx={500} cy={380} rx={90} ry={28} fill="none" stroke={INK} strokeWidth={1.3} strokeDasharray="5 4" />
      </Fade>
      <Fade on={beat >= 4 && beat <= 5} delay={dl(4, 1.3)}>
        <T x={515} y={400} size={13} fill={RED} anchor="start" weight={700}>C(a,b,c)</T>
      </Fade>

      {/* ===== beat 5 — goat/peg analogy: footprints round the sphere ===== */}
      <Draw on={beat === 5} delay={dl(5, 0)} d="M 500 372 L 500 388" stroke={MUTED} sw={2.5} dur={0.3} />
      {footprints.map((p, i) => (
        <Fade key={i} on={beat === 5} delay={dl(5, 0.5 + i * 0.15)}>
          <Circle cx={p.x} cy={p.y} r={3} fill={MUTED} />
        </Fade>
      ))}

      {/* ===== beat 6 — ellipsoid (erased at beat 7) ===== */}
      <Draw on={beat === 6} delay={dl(6, 0)} d={"M 370 380 A 130 55 0 1 0 630 380 A 130 55 0 1 0 370 380 Z"} stroke={INK} sw={2} dur={0.8} />
      <Fade on={beat === 6} delay={dl(6, 0.9)}>
        <Circle cx={382.2} cy={380} r={4} fill={RED} />
      </Fade>
      <Fade on={beat === 6} delay={dl(6, 1.1)}>
        <T x={382} y={398} size={12} fill={RED} anchor="middle" weight={700}>F1</T>
      </Fade>
      <Fade on={beat === 6} delay={dl(6, 1.3)}>
        <Circle cx={617.8} cy={380} r={4} fill={RED} />
      </Fade>
      <Fade on={beat === 6} delay={dl(6, 1.5)}>
        <T x={618} y={398} size={12} fill={RED} anchor="middle" weight={700}>F2</T>
      </Fade>
      <Fade on={beat === 6} delay={dl(6, 1.9)}>
        <Circle cx={565} cy={332.4} r={4} fill={INK} />
      </Fade>
      <Fade on={beat === 6} delay={dl(6, 2.1)}>
        <T x={578} y={322} size={13} fill={INK} anchor="start" weight={700}>P</T>
      </Fade>
      <Draw on={beat === 6} delay={dl(6, 2.4)} d={lineD(565, 332.4, 382.2, 380)} stroke={AMBER} sw={2} dur={0.5} />
      <Draw on={beat === 6} delay={dl(6, 2.9)} d={lineD(565, 332.4, 617.8, 380)} stroke={AMBER} sw={2} dur={0.5} />
      <Fade on={beat === 6} delay={dl(6, 3.5)}>
        <T x={500} y={460} size={13} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("PF1 + PF2 = same for every P", "PF1 + PF2 = har P ke liye same")}
        </T>
      </Fade>

      {/* ===== beat 7 — LAND + GUARDRAIL: 3-row recap in a red frame ===== */}
      <Draw on={beat >= 7} delay={dl(7, 0)} d={roundRectD(300, 282, 480, 193, 14)} stroke={RED} sw={2.5} dur={0.7} />
      {/* row 1 — plane */}
      <Draw on={beat >= 7} delay={dl(7, 0.9)} d="M 335 300 L 385 295 L 390 320 L 340 325 Z" stroke={INK} sw={1.8} dur={0.4} />
      <Draw on={beat >= 7} delay={dl(7, 1.3)} d={arrowD(405, 310, 448, 310)} stroke={INK} sw={2} dur={0.3} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={460} y={315} size={15} fill={INK} anchor="start">
          {t("Two points → plane", "Do points → plane")}
        </T>
      </Fade>
      {/* row 2 — sphere */}
      <Draw on={beat >= 7} delay={dl(7, 2.0)} d={circleD(360, 380, 18)} stroke={INK} sw={1.8} dur={0.4} />
      <Draw on={beat >= 7} delay={dl(7, 2.4)} d={arrowD(388, 380, 428, 380)} stroke={INK} sw={2} dur={0.3} />
      <Fade on={beat >= 7} delay={dl(7, 2.7)}>
        <T x={440} y={385} size={15} fill={INK} anchor="start">
          {t("One point → sphere", "Ek point → sphere")}
        </T>
      </Fade>
      {/* row 3 — ellipsoid */}
      <Fade on={beat >= 7} delay={dl(7, 3.1)}>
        <Ellipse cx={360} cy={450} rx={22} ry={13} fill="none" stroke={INK} strokeWidth={1.8} />
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 3.4)} d={arrowD(392, 450, 432, 450)} stroke={INK} sw={2} dur={0.3} />
      <Fade on={beat >= 7} delay={dl(7, 3.7)}>
        <T x={444} y={455} size={15} fill={INK} anchor="start">
          {t("Constant sum → ellipsoid", "Constant sum → ellipsoid")}
        </T>
      </Fade>
    </Scene>
  );
}
