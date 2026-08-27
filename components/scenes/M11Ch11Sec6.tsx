/**
 * M11 Ch11 · Section 6 — "Procedure: two ways to test collinearity"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept, subtopic "Applications: Centroid, Collinearity & Locus".
 *
 * CORRECTION (post-authoring, matches the now-rebuilt M11Ch11Sec1/Sec15): this subtopic is
 * genuinely 3D throughout, not 2D — confirmed by reading raw Supabase board_content for every
 * section in the subtopic. Rebuilt with project3D/ThreeDAxes. Kept the same x,y values as the
 * original 2D draft (A,B,C's x,y and the k=1/2 ratio are untouched) and added a genuine z to each
 * point, chosen so the SAME k=1/2 ratio also reproduces z2 — i.e. (B-A) is truly parallel to
 * (C-A) in 3D, not just in the xy-projection.
 *
 * HAND-VERIFIED ARITHMETIC (illustrative collinear triple, chosen fresh — not given in JSON):
 *   A=(1,2,2)  B=(3,5,4)  C=(7,11,8)
 *   Parallel check: B-A=(2,3,2), C-A=(6,9,6)=3*(2,3,2) -> exactly parallel, genuinely collinear in 3D.
 *   Method A (distance, now with z under the root):
 *     AB = sqrt((3-1)^2+(5-2)^2+(4-2)^2) = sqrt(4+9+4)  = sqrt(17)
 *     BC = sqrt((7-3)^2+(11-5)^2+(8-4)^2)= sqrt(16+36+16)= sqrt(68) = 2*sqrt(17)
 *     AC = sqrt((7-1)^2+(11-2)^2+(8-2)^2)= sqrt(36+81+36)= sqrt(153)= 3*sqrt(17)  (153=9*17)
 *     AB + BC = sqrt17 + 2*sqrt17 = 3*sqrt17 = AC  exactly -> B lies between A, C.
 *   Method B (section ratio): B divides AC in k:1. Solve from x alone (unchanged from the 2D
 *   draft, since x1,x2,x3 didn't change):
 *     (k*x3 + x1)/(k+1) = x2  =>  (k*7 + 1)/(k+1) = 3  =>  7k+1 = 3k+3  =>  4k = 2  =>  k = 1/2.
 *   Verify with y (unchanged): (0.5*11 + 2)/1.5 = 7.5/1.5 = 5 = y2 (B's y). ✓
 *   Verify with z (NEW): (0.5*z3 + z1)/1.5 = (0.5*8 + 2)/1.5 = (4+2)/1.5 = 6/1.5 = 4 = z2 (B's z). ✓
 *   All three coordinates agree on k=1/2 -> genuinely collinear, ratio 1:2, matching
 *   AB:BC = sqrt17 : 2sqrt17 = 1:2 from Method A exactly.
 *
 * Projection (math-kit project3D, same convention as Sec1/Sec5/Sec15): +Y right, +Z up, +X
 * down-left (foreshortened). OX=160 OY=440 SCALE=30, proj=(x,y,z)=>project3D(x,y,z,OX,OY,SCALE).
 *   screenX = 160 + 30y - 15.588x   screenY = 440 - 30z + 9x
 *   A(1,2,2)->(204,389)   B(3,5,4)->(263,347)   C(7,11,8)->(381,263)
 * Light ThreeDAxes (axisLen=4, MUTED): X(98,476) down-left, Y(280,440) right, Z(160,320) up — all
 * clear of the triangle and of the coordinate caption above (y96, box bottom ~100).
 *
 * reveals_english  = [0, 11.09, 25.69, 35.93, 48.21, 61.7, 73.05, 88.23] (8 beats, 0-7).
 * reveals_hinglish = [0, 9.39, 23.98, 34.22, 45.82, 59.05, 69.29, 83.71].
 *
 * Layout plan (boxes in screen px):
 *  b0 title (always-on)                | T script RED mid    | x540 y58
 *  b1 coordinate-list caption          | T mid INK13          | x250 y96 (over the diagram, clear
 *                                                                of both the title and the x460+ column)
 *  b1 light 3D axes (muted)            | ThreeDAxes            | o(160,440) len4
 *  b1 A/B/C dots + letters             | circle+T              | A(204,407)mid B(254,334)end C(381,247)mid
 *  b1 AB, BC segments (ink)            | Draw                   | A-B, B-C
 *  b1 AB, BC distance labels           | T start INK12          | (242,380) "AB=v17" | (331,317) "BC=2v17"
 *  b1 right col: Method A heading      | T start INK            | x460 y110 / y140
 *  b2 check: AB+BC = AC (right col)    | T start INK15          | x460 y178
 *  b2 verdict + checkD (Method A)      | Draw + T GREEN15       | check(470,204); text x490 y210
 *  b3 Method B heading (right col)     | T start INK            | x460 y246 / y276
 *  b3 "k","1" ratio labels on diagram  | T end AMBER_DARK13     | (225,356) "k" | (313,293) "1"
 *  b4a solve-for-k label               | T start INK14          | x460 y312
 *  b4b general formula                 | T start AMBER_DARK16   | x460 y346
 *  b4c substituted numbers             | T start INK16          | x460 y380
 *  b4d solved k=1/2                    | T start AMBER_DARK17   | x460 y416
 *  b5 verify-y-AND-z heading           | T start AMBER_DARK14   | x460 y450
 *  b5 numeric y-check + checkD         | T start INK15 + Draw   | x460 y482; check(730,478)
 *  b5 numeric z-check + checkD (NEW)   | T start INK15 + Draw   | x460 y514; check(708,510)
 *  b6 red bar + 2-line guardrail       | Draw RED + T RED14     | bar x460 y536-588; txt x478 y556/580
 *  b7 verdict chip (under diagram)     | Chip GREEN              | x90 y494 w345 h36
 *  b7 ratio-match note                 | T start INK12           | x90 y552
 *  b7 ring on B (confirmed divider)    | Draw GREEN               | ringD(256,337,25,26)
 *
 * Clearance spot-checks done by hand: coordinate caption re-centered at x250 (over the diagram)
 * instead of x540 specifically because a centered caption's box reached into the x460+ column's
 * x-range and nearly collided with beat1's heading — moving it off the column's x-range removed
 * the conflict outright rather than fighting it with more vertical padding. Column re-spaced so
 * every consecutive baseline gap clears >=14px by hand; verify-scene.mjs (text-vs-text + overflow)
 * and a FORCE_SHOTS eye pass (text-vs-stroke, ring targeting) are the final authorities.
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
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  ringD,
  Scene,
} from '@/components/scenes/kit';
import { project3D, ThreeDAxes, lineD, checkD } from "./math-kit";

const OX = 160;
const OY = 440;
const SCALE = 30;
const proj = (x: number, y: number, z: number) => project3D(x, y, z, OX, OY, SCALE);

const A = proj(1, 2, 2); // (204,389)
const B = proj(3, 5, 4); // (263,347)
const C = proj(7, 11, 8); // (381,263)

export default function M11Ch11Sec6({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={RED} anchor="middle" script>
          {t("Testing collinearity: two methods", "Collinearity test: do tareeke")}
        </T>
      </Fade>

      {/* beat 1 — plot A, B, C in 3D; draw AB, BC; introduce Method A */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={250} y={96} size={13} fill={INK} anchor="middle">
          A(1,2,2)   B(3,5,4)   C(7,11,8)
        </T>
      </Fade>
      <ThreeDAxes on={beat >= 1} delay={dl(1, 0)} originX={OX} originY={OY} scale={SCALE} axisLen={4} stroke={MUTED} />
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <Circle cx={A.x} cy={A.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={204} y={407} size={13} fill={INK} anchor="middle" weight={700}>A</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <Circle cx={B.x} cy={B.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <T x={254} y={334} size={13} fill={INK} anchor="end" weight={700}>B</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <Circle cx={C.x} cy={C.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={381} y={247} size={13} fill={INK} anchor="middle" weight={700}>C</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.0)} d={lineD(A.x, A.y, B.x, B.y)} stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <T x={242} y={380} size={12} fill={INK} anchor="start" weight={700}>AB = √17</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.9)} d={lineD(B.x, B.y, C.x, C.y)} stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 3.4)}>
        <T x={331} y={317} size={12} fill={INK} anchor="start" weight={700}>BC = 2√17</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.8)}>
        <T x={460} y={110} size={15} fill={INK} anchor="start" weight={700}>
          {t("Method A (distance):", "Method A (distance):")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.2)}>
        <T x={460} y={140} size={14} fill={INK} anchor="start">
          {t("collinear iff largest of AB, BC, CA = sum of other two", "collinear iff AB,BC,CA mein sabse bada = baaki do ka sum")}
        </T>
      </Fade>

      {/* beat 2 — the check: AB + BC = AC */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={460} y={178} size={15} fill={INK} anchor="start">
          Check: AB + BC = √17 + 2√17 = 3√17
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.0)} d={checkD(470, 204, 14)} stroke={GREEN} sw={2.5} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 2.3)}>
        <T x={490} y={210} size={15} fill={GREEN} anchor="start" weight={700}>
          {t("= AC → B lies between A, C (collinear)", "= AC → B, A aur C ke beech hai (collinear)")}
        </T>
      </Fade>

      {/* beat 3 — Method B setup: B divides AC in ratio k:1 */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={460} y={246} size={15} fill={INK} anchor="start" weight={700}>
          {t("Method B (section-ratio):", "Method B (section-ratio):")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={460} y={276} size={14} fill={INK} anchor="start">
          {t("B divides AC in ratio k:1 - solve k from x alone", "B, AC ko ratio k:1 mein baantta hai - x se hi k solve karo")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={225} y={356} size={13} fill={AMBER_DARK} anchor="end" weight={700}>k</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.9)}>
        <T x={313} y={293} size={13} fill={AMBER_DARK} anchor="end" weight={700}>1</T>
      </Fade>

      {/* beat 4 — solve k from the x-coordinate, term by term */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={460} y={312} size={14} fill={INK} anchor="start">
          {t("Solve for k (x-coordinate only):", "k solve karo (sirf x-coordinate se):")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.5)}>
        <T x={460} y={346} size={16} fill={AMBER_DARK} anchor="start" weight={700}>
          (k·x3+x1)/(k+1) = x2
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6.0)}>
        <T x={460} y={380} size={16} fill={INK} anchor="start" weight={700}>
          (k·7+1)/(k+1) = 3
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 9.5)}>
        <T x={460} y={416} size={17} fill={AMBER_DARK} anchor="start" weight={700}>
          7k+1 = 3k+3  ⇒  4k = 2  ⇒  k = 1/2
        </T>
      </Fade>

      {/* beat 5 — the non-optional step: verify the same k on BOTH y and z */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={460} y={450} size={14} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Verify: does k=1/2 also give y2 AND z2?", "Verify: kya k=1/2 se y2 AUR z2 bhi milta hai?")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.0)}>
        <T x={460} y={482} size={15} fill={INK} anchor="start">
          (0.5·11+2)/1.5 = 7.5/1.5 = 5 = y2
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 2.3)} d={checkD(730, 478, 13)} stroke={GREEN} sw={2.3} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 3.3)}>
        <T x={460} y={514} size={15} fill={INK} anchor="start">
          (0.5·8+2)/1.5 = 6/1.5 = 4 = z2
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 3.6)} d={checkD(708, 510, 13)} stroke={GREEN} sw={2.3} dur={0.4} />

      {/* beat 6 — guardrail: a single matching coordinate is not proof */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d="M 460 536 L 460 588" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={478} y={556} size={14} fill={RED} anchor="start" weight={700}>
          {t("A single coordinate can match by coincidence -", "Ek single coordinate coincidence se match ho sakta -")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.0)}>
        <T x={478} y={580} size={14} fill={RED} anchor="start" weight={700}>
          {t("checking only x alone is a false positive.", "sirf x check karna ek false positive hai.")}
        </T>
      </Fade>

      {/* beat 7 — land the verdict: collinear, ratio for free */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <Chip x={90} y={494} w={345} h={36} fill="#FFFEFB" stroke={GREEN} textFill={GREEN} size={14} script={false}>
          {t("Collinear - B divides AC in ratio 1:2", "Collinear - B, AC ko 1:2 mein baantta hai")}
        </Chip>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.4)} d={ringD(256, 337, 25, 26)} stroke={GREEN} sw={2} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.0)}>
        <T x={90} y={552} size={12} fill={INK} anchor="start">
          {t("(matches AB:BC = √17:2√17 = 1:2 from Method A)", "(Method A ke AB:BC = √17:2√17 = 1:2 se match)")}
        </T>
      </Fade>
    </Scene>
  );
}
