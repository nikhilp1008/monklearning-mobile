/**
 * M11 Ch11 · Section 5 — "Derivation: the centroid formula"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept, subtopic "Applications: Centroid, Collinearity & Locus".
 *
 * CORRECTION (post-authoring, matches the now-rebuilt M11Ch11Sec1/Sec15): this subtopic is
 * genuinely 3D throughout, not 2D — confirmed by reading raw Supabase board_content for every
 * section in the subtopic. Rebuilt using project3D/ThreeDAxes (same system as Sec1/Sec15)
 * instead of the original flat CartesianAxes version. The illustrative triangle keeps the SAME
 * x,y values as the original 2D draft (so the already-verified x_G derivation is untouched) with
 * a genuine z added to each vertex — centroid/section-formula math is coordinate-independent, so
 * the 2D numbers generalize cleanly; z_G is freshly derived below, not copied from anywhere.
 *
 * HAND-VERIFIED ARITHMETIC (illustrative triangle, chosen fresh — not given in JSON):
 *   A=(6,9,3)  B=(-3,0,-3)  C=(9,0,3)
 *   D = midpoint BC = ((-3+9)/2, (0+0)/2, (-3+3)/2) = (3,0,0)
 *   Section formula, ratio 2:1, A(x1,y1,z1) then D:
 *     x_G = [2*Dx + 1*Ax]/3 = [2*3 + 6]/3  = 12/3 = 4
 *     y_G = [2*Dy + 1*Ay]/3 = [2*0 + 9]/3  = 9/3  = 3
 *     z_G = [2*Dz + 1*Az]/3 = [2*0 + 3]/3  = 3/3  = 1
 *   G = (4,3,1). Cross-check by plain average: ((6-3+9)/3,(9+0+0)/3,(3-3+3)/3) = (4,3,1) ✓.
 *   G divides AD 2:1 from A geometrically too: A+(2/3)(D-A) = (6,9,3)+(2/3)(-3,-9,-3)
 *     = (6-2, 9-6, 3-2) = (4,3,1) ✓ matches.
 *   Concurrency check (guardrail, beat 7): E = midpoint AC = ((6+9)/2,(9+0)/2,(3+3)/2) = (7.5,4.5,3).
 *     G via B,E 2:1: (2*(7.5,4.5,3)+(-3,0,-3))/3 = ((15-3)/3,(9+0)/3,(6-3)/3) = (4,3,1) ✓.
 *   F = midpoint AB = ((6-3)/2,(9+0)/2,(3-3)/2) = (1.5,4.5,0).
 *     G via C,F 2:1: (2*(1.5,4.5,0)+(9,0,3))/3 = ((3+9)/3,(9+0)/3,(0+3)/3) = (4,3,1) ✓.
 *   All three medians concur at G(4,3,1) — matches the guardrail's claim exactly, in genuine 3D.
 *
 * Projection (math-kit project3D, same convention as Sec1/Sec15): +Y right, +Z up, +X
 * down-left (foreshortened). OX=420 OY=340 SCALE=38, proj=(x,y,z)=>project3D(x,y,z,OX,OY,SCALE).
 *   screenX = 420 + 38y - 19.745x   screenY = 340 - 38z + 11.4x
 *   A(6,9,3)->(644,294)   B(-3,0,-3)->(479,420)   C(9,0,3)->(242,329)
 *   D(3,0,0)->(361,374)   G(4,3,1)->(455,348)
 *   E(7.5,4.5,3)->(443,312) [midpoint AC]   F(1.5,4.5,0)->(561,357) [midpoint AB]
 * Light ThreeDAxes (axisLen=5.5, MUTED) for orientation only, same treatment as Sec1: tips at
 * X(311,403) down-left, Y(629,340) right, Z(420,131) up — Z tip cleared 31px below the y96
 * coordinate caption's box bottom (~100) before trusting it.
 *
 * reveals_english = [0, 9.81, 20.22, 29.95, 47.27, 72.11, 79.45, 87.3] (8 beats, 0-7).
 * reveals_hinglish = [0, 8.36, 18.01, 26.11, 41.81, 63.49, 71.0, 78.93].
 *
 * Layout plan (boxes in screen px):
 *  b0 title (always-on)                 | T script RED mid    | x540 y58
 *  b1 coordinate-list caption           | T mid INK13          | x540 y96
 *  b1 light 3D axes (muted)             | ThreeDAxes            | o(420,340) len5.5
 *  b1 triangle AB,BC,CA (ink)           | Draw                   | A-B-C-A
 *  b1 A/B/C dots + bare letters         | circle+T               | A(644,278) B(479,438) C(222,333)
 *  b1 D dot(muted)+letter               | circle+T               | (390,416)
 *  b1 median AD (amber)                 | Draw                   | A->D
 *  b2 "D = midpoint of BC:" label       | T start INK14          | x660 y130
 *  b2 D formula (3D, symbolic)          | T start AMBER_DARK16   | x660 y160
 *  b2 D numeric substitution            | T start INK15          | x660 y192
 *  b3 G dot (bare, no label yet)        | circle AMBER_DARK      | (455,348)
 *  b3 "2" near AG midpoint              | T mid AMBER_DARK14     | (555,340)
 *  b3 "1" near GD midpoint              | T mid AMBER_DARK14     | (413,382)
 *  b4a setup label                      | T start INK14          | x660 y230
 *  b4b raw substituted formula          | T start AMBER_DARK16   | x660 y262
 *  b4c cancel step                      | T start AMBER_DARK16   | x660 y294
 *  b4d final symbolic collapse (x)      | T start AMBER_DARK17   | x660 y328
 *  b4e numeric check (x) + checkD       | T start INK15 + Draw   | x660 y360, check(878,356)
 *  b5 "By identical work on y and z:"   | T start INK14          | x660 y396
 *  b5 y_G numeric check + checkD        | T start INK15 + Draw   | x660 y426, check(818,422)
 *  b5 z_G numeric check + checkD        | T start INK15 + Draw   | x660 y454, check(818,450)
 *  b5 G's full coordinate label + ring  | T start AMBER_DARK13   | (469,352); ring(486,349,50,19)
 *  b6 boxed 3-line final (frame)        | Draw roundRectD + T×3  | frame x650 y486 w210 h80
 *  b7 medians BE, CF (amber)            | Draw                   | B->E, C->F
 *  b7 red bar + 2-line guardrail        | Draw RED + T RED14     | bar x250 y470-522, txt x268 y490/514
 *
 * Clearance spot-checks done by hand: D's letter label pushed to (390,416) after checking it
 * clears the BC stroke (line value ~y386 at that x, label top ~406, gap ~17px) and the "1" ratio
 * label above it (gap ~14px). Right-column stack re-spaced so consecutive baseline gaps clear
 * >=14px in the general case (worked through by hand while drafting); verify-scene.mjs (text-vs-
 * text + overflow) and a FORCE_SHOTS eye pass (text-vs-stroke, arrow/ring targeting) are the final
 * authorities and were iterated against.
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
  Scene,
} from '@/components/scenes/kit';
import { project3D, ThreeDAxes, lineD, checkD, roundRectD } from "./math-kit";

const OX = 420;
const OY = 340;
const SCALE = 38;
const proj = (x: number, y: number, z: number) => project3D(x, y, z, OX, OY, SCALE);

const A = proj(6, 9, 3); // (644,294)
const B = proj(-3, 0, -3); // (479,420)
const C = proj(9, 0, 3); // (242,329)
const D = proj(3, 0, 0); // (361,374) midpoint BC
const G = proj(4, 3, 1); // (455,348) centroid
const E = proj(7.5, 4.5, 3); // (443,312) midpoint AC
const F = proj(1.5, 4.5, 0); // (561,357) midpoint AB

export default function M11Ch11Sec5({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={RED} anchor="middle" script>
          {t("Deriving the centroid (via the section formula)", "Centroid derive karna (section formula se)")}
        </T>
      </Fade>

      {/* beat 1 — set up the 3D triangle, take the median A -> D */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={96} size={13} fill={INK} anchor="middle">
          A(6,9,3)   B(-3,0,-3)   C(9,0,3)
        </T>
      </Fade>
      <ThreeDAxes on={beat >= 1} delay={dl(1, 0)} originX={OX} originY={OY} scale={SCALE} axisLen={5.5} stroke={MUTED} />
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d={lineD(A.x, A.y, B.x, B.y)} stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 0.8)} d={lineD(B.x, B.y, C.x, C.y)} stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 1.1)} d={lineD(C.x, C.y, A.x, A.y)} stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <Circle cx={A.x} cy={A.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.7)}>
        <T x={644} y={278} size={14} fill={INK} anchor="middle" weight={700}>A</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.9)}>
        <Circle cx={B.x} cy={B.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.1)}>
        <T x={479} y={438} size={14} fill={INK} anchor="middle" weight={700}>B</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.3)}>
        <Circle cx={C.x} cy={C.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <T x={222} y={333} size={14} fill={INK} anchor="end" weight={700}>C</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.8)}>
        <Circle cx={D.x} cy={D.y} r={3} fill={MUTED} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.0)}>
        <T x={390} y={416} size={12} fill={MUTED} anchor="start">D</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.4)} d={lineD(A.x, A.y, D.x, D.y)} stroke={AMBER} sw={2} dur={0.5} />

      {/* beat 2 — D = midpoint of BC, in 3D */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={660} y={130} size={14} fill={INK} anchor="start">
          {t("D = midpoint of BC:", "D = BC ka midpoint:")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={660} y={160} size={16} fill={AMBER_DARK} anchor="start" weight={700}>
          D = ( (x2+x3)/2, (y2+y3)/2, (z2+z3)/2 )
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.0)}>
        <T x={660} y={192} size={15} fill={INK} anchor="start">
          = ((-3+9)/2, (0+0)/2, (-3+3)/2) = (3,0,0)
        </T>
      </Fade>

      {/* beat 3 — G divides AD internally, AG:GD = 2:1 (represent the object before the algebra) */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <Circle cx={G.x} cy={G.y} r={5} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={555} y={340} size={14} fill={AMBER_DARK} anchor="middle" weight={700}>2</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={413} y={382} size={14} fill={AMBER_DARK} anchor="middle" weight={700}>1</T>
      </Fade>

      {/* beat 4 — derive x_G live, term by term, then land the numeric check */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={660} y={230} size={14} fill={INK} anchor="start">
          {t("Section formula, ratio 2:1 (A then D):", "Section formula, ratio 2:1 (A phir D):")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.5)}>
        <T x={660} y={262} size={16} fill={AMBER_DARK} anchor="start" weight={700}>
          x_G = [2·((x2+x3)/2)+1·x1]/(2+1)
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6.0)}>
        <T x={660} y={294} size={16} fill={AMBER_DARK} anchor="start" weight={700}>
          = [(x2+x3)+x1]/3
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 9.5)}>
        <T x={660} y={328} size={17} fill={AMBER_DARK} anchor="start" weight={700}>
          = (x1+x2+x3)/3
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 13.0)}>
        <T x={660} y={360} size={15} fill={INK} anchor="start">
          Check: (6-3+9)/3 = 12/3 = 4
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 13.3)} d={checkD(878, 356, 14)} stroke={GREEN} sw={2.5} dur={0.4} />

      {/* beat 5 — identical algebra for y AND z, each an actual worked computation; land G */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={660} y={396} size={14} fill={INK} anchor="start">
          {t("By identical work on y and z:", "y aur z ke liye same kaam se:")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={660} y={426} size={15} fill={INK} anchor="start">
          y_G = (2·0+9)/3 = 3
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.8)} d={checkD(818, 422, 13)} stroke={GREEN} sw={2.3} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 2.7)}>
        <T x={660} y={454} size={15} fill={INK} anchor="start">
          z_G = (2·0+3)/3 = 1
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 3.0)} d={checkD(818, 450, 13)} stroke={GREEN} sw={2.3} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 3.9)}>
        <T x={469} y={352} size={13} fill={AMBER_DARK} anchor="start" weight={700}>G(4,3,1)</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 4.2)} d={ringD(486, 349, 50, 19)} stroke={AMBER_DARK} sw={2} dur={0.5} />

      {/* beat 6 — land the result: three per-axis formulas, framed */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d={roundRectD(650, 486, 210, 80)} stroke={AMBER_DARK} sw={1.8} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={668} y={508} size={15} fill={AMBER_DARK} anchor="start" weight={700}>x_G = (x1+x2+x3)/3</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={668} y={532} size={15} fill={AMBER_DARK} anchor="start" weight={700}>y_G = (y1+y2+y3)/3</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={668} y={556} size={15} fill={AMBER_DARK} anchor="start" weight={700}>z_G = (z1+z2+z3)/3</T>
      </Fade>

      {/* beat 7 — guardrail: medians from B, C land on the same G (concurrency) */}
      <Draw on={beat >= 7} delay={dl(7, 0)} d={lineD(B.x, B.y, E.x, E.y)} stroke={AMBER} sw={2} dur={0.5} />
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d={lineD(C.x, C.y, F.x, F.y)} stroke={AMBER} sw={2} dur={0.5} />
      <Draw on={beat >= 7} delay={dl(7, 1.4)} d="M 250 470 L 250 522" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.8)}>
        <T x={268} y={490} size={14} fill={RED} anchor="start" weight={700}>
          {t("Medians from B and C give the same G -", "B aur C se medians bhi wahi G dete hain -")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.2)}>
        <T x={268} y={514} size={14} fill={RED} anchor="start" weight={700}>
          {t("proof that all three medians are concurrent.", "saboot ki teeno medians concurrent hain.")}
        </T>
      </Fade>
    </Scene>
  );
}
