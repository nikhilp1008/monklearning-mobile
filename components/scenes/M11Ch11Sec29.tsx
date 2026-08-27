/**
 * M11 Ch11 · Section 29 — "Edge cases: midpoint, m = n, and non-negative distance"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — closes the "Distance and Section Formulas in 3D" subtopic's concept
 * run (worked examples follow at Sec30+). Genuinely 3D throughout (project3D/ThreeDAxes system).
 *
 * Projection: origin(620,260), scale=30, project3D (verified in math-kit / Sec15):
 *   screenX = 620 + 30y - 15.589x   screenY = 260 - 30z + 9x
 * Illustrative line PQ (not given in JSON — chosen for a clean integer midpoint): P=(0,4,-2),
 * Q=(6,0,4). M = (P+Q)/2 = (3,2,1), clean.
 * Hand-verified projected points (proj = project3D(x,y,z,620,260,30)):
 *   P = proj(0,4,-2) = (620+120-0, 260+60-0)          = (740, 320)
 *   Q = proj(6,0,4)  = (620+0-93.53, 260-120+54)       = (526.47, 194)
 *   M = proj(3,2,1)  = (620+60-46.77, 260-30+27)       = (633.23, 257)
 * M matches the screen midpoint of P,Q exactly ((740+526.47)/2,(320+194)/2)=(633.24,257) —
 * confirms project3D is affine (colinear 3D points stay colinear on screen), as it must.
 * Beat-1 transient contrast points (on={beat===1} only, vacate before beat 2's tick marks reuse
 * that space): R_gen = P+0.3(Q-P) = (1.8,2.8,-0.2), ON the line — proj = (675.94, 282.2).
 * R'' = same (x,y) as R_gen but z=2 (off the 3D line) — proj = (675.94, 216.2), 66px above
 * R_gen on screen, visibly off the drawn segment (verified: at x=675.94 the P-Q line's own y is
 * 282.2, matching R_gen exactly and 66px from R'').
 * Infinity ray (beat 4): extends from Q further in the Q-P direction (unit (-0.8613,-0.5083)) by
 * 140px: end = Q + 140*(-0.8613,-0.5083) = (405.89, 122.84) — clear of the title (bottom~71) by
 * 52px and of the left column (max x~290) by >115px.
 * Midpoint tick marks (beat 2, standard "equal segments" notation): short perpendicular hatches
 * (unit perpendicular (0.5083,-0.8613)) at mid(P,M)=(686.6,288.5) and mid(M,Q)=(579.85,225.5).
 *
 * reveals_english = [0, 8.36, 20.57, 31.91, 47.62, 66.3, 80.47, 96.0] (8 values, beats 0-7).
 * reveals_hinglish = [0, 8.11, 19.97, 29.95, 44.12, 60.07, 71.68, 85.85].
 *
 * Beats:
 *  0(title, always-on) | "Edge cases that examiners exploit"
 *  1 | left text + draw PQ, P/Q labeled; transient valid-vs-invalid point contrast
 *  2 | left text + mark M (midpoint), tick marks on PM/MQ, "1"/"1" ratio labels
 *  3 | left text + right formula zone: external formula, set m=n, denominator -> 0, undefined
 *  4 | red-margin bar+text + infinity ray from Q, labeled "∞"
 *  5 | left text + right recap: checkmark, "m:(-n) is external"
 *  6 | left text (high emph) + right: Δx negative but (Δx)² positive, both ringed
 *  7 | left text + right: reverse-direction check gives the same squared value
 *
 * Layout plan (left column x60 narrates; diagram+formula zone owns x500-1030):
 *  b0 | title (26,red,script)              | T mid   | x540 y58
 *  b1 | left text 2L                       | T start | x60 y100/123
 *  b1 | PQ line + P/Q dots+labels           | Draw+T  | P(740,320) label(750,325) start
 *                                                       Q(526.47,194) label(535.62,178.5) start
 *  b1 | transient R_gen (check) / R'' (X)   | Draw+T  | R_gen(675.94,282.2) check(676,296)
 *                                                       label(676,324); R''(675.94,216.2)
 *                                                       cross(670,210,12,12) label(676,190)
 *  b2 | left text 2L                       | T start | x60 y158/181
 *  b2 | M dot + label, 2 tick marks, "1"/"1"| Draw+T  | M(633.23,257) label(633.23,275)
 *                                                       ticks at (686.6,288.5)/(579.85,225.5)
 *                                                       "1" labels (699.8,266.1)/(593.05,203.1)
 *  b3 | left text 2L                       | T start | x60 y216/239
 *  b3 | formula zone: 3 lines + crossD      | T+Draw  | x520 y360/388/414
 *  b4 | red bar + 2L note                  | Draw+T  | x60 y270-322 / x76 y290/313
 *  b4 | infinity ray + "∞" label            | Draw+T  | Q->(405.89,122.84), label(390,118)
 *  b5 | left text 2L                       | T start | x60 y357/380
 *  b5 | right recap: check + 1 line         | Draw+T  | check(508,454) text(528,454)
 *  b6 | left text 2L                       | T start | x60 y419/442
 *  b6 | right: Δx line + (Δx)² line, rings  | T+Draw  | x520 y494/520, rings (618,491)/(639,517)
 *  b7 | left text 2L                       | T start | x60 y477/500
 *  b7 | right: reverse check + 1 line       | Draw+T  | check(508,560) text(528,560)
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
  crossD,
  ringD,
  INK,
  MUTED,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { project3D, lineD, checkD } from "./math-kit";

const OX = 620;
const OY = 260;
const SCALE = 30;
const proj = (x: number, y: number, z: number) => project3D(x, y, z, OX, OY, SCALE);

const P = proj(0, 4, -2); // (740,320)
const Q = proj(6, 0, 4); // (526.47,194)
const M = proj(3, 2, 1); // (633.23,257)
const R_GEN = proj(1.8, 2.8, -0.2); // (675.94,282.2) — on the line
const R_OFF = { x: R_GEN.x, y: 216.2 }; // same x,y footprint, different z -> off the line
const INF_END = { x: 405.89, y: 122.84 };

export default function M11Ch11Sec29({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={RED} anchor="middle" script>
          {t("Edge cases that examiners exploit", "Edge cases jo examiners exploit karte hain")}
        </T>
      </Fade>

      {/* beat 1 — the section formula only gives a point ON line PQ */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={60} y={100} size={14} fill={INK} anchor="start">
          {t("The section formula only ever", "Section formula hamesha sirf")}
        </T>
        <T x={60} y={123} size={14} fill={INK} anchor="start">
          {t("gives a point ON line PQ.", "line PQ par ek point deta hai.")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0)} d={lineD(P.x, P.y, Q.x, Q.y)} stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <Circle cx={P.x} cy={P.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.75)}>
        <T x={750} y={325} size={13} fill={INK} anchor="start" weight={700}>P</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.95)}>
        <Circle cx={Q.x} cy={Q.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <T x={535.62} y={178.5} size={13} fill={INK} anchor="start" weight={700}>Q</T>
      </Fade>
      {/* transient: a valid point (on the line) vs an invalid one (off it) */}
      <Fade on={beat === 1} delay={dl(1, 1.4)}>
        <Circle cx={R_GEN.x} cy={R_GEN.y} r={4} fill={GREEN} />
      </Fade>
      <Draw on={beat === 1} delay={dl(1, 1.6)} d={checkD(676, 296, 12)} stroke={GREEN} sw={2.2} dur={0.3} />
      <Fade on={beat === 1} delay={dl(1, 1.9)}>
        <T x={676} y={324} size={11} fill={GREEN} anchor="middle">
          {t("on PQ", "PQ par")}
        </T>
      </Fade>
      <Fade on={beat === 1} delay={dl(1, 2.1)}>
        <Circle cx={R_OFF.x} cy={R_OFF.y} r={4} fill={RED} />
      </Fade>
      <Draw on={beat === 1} delay={dl(1, 2.3)} d={crossD(670, 210, 12, 12)} stroke={RED} sw={2.2} dur={0.3} />
      <Fade on={beat === 1} delay={dl(1, 2.6)}>
        <T x={676} y={190} size={11} fill={RED} anchor="middle">
          {t("off PQ", "PQ se bahar")}
        </T>
      </Fade>

      {/* beat 2 — midpoint is the 1:1 internal case */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={60} y={158} size={14} fill={INK} anchor="start">
          {t("Midpoint is simply the 1:1", "Midpoint bas 1:1 internal")}
        </T>
        <T x={60} y={181} size={14} fill={INK} anchor="start">
          {t("internal case — M = (P+Q)/2.", "case hai — M = (P+Q)/2.")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <Circle cx={M.x} cy={M.y} r={5} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.65)}>
        <T x={633.23} y={275} size={13} fill={GREEN} anchor="middle" weight={700}>M</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.9)} d={lineD(682.53, 295.39, 690.67, 281.61)} stroke={GREEN} sw={2.5} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 1.2)} d={lineD(575.78, 232.39, 583.92, 218.61)} stroke={GREEN} sw={2.5} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={699.8} y={266.1} size={13} fill={GREEN} anchor="middle" weight={700}>1</T>
        <T x={593.05} y={203.1} size={13} fill={GREEN} anchor="middle" weight={700}>1</T>
      </Fade>

      {/* beat 3 — external division breaks when m = n */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={60} y={216} size={14} fill={INK} anchor="start">
          {t("External division breaks when m=n:", "External division tootta hai jab m=n:")}
        </T>
        <T x={60} y={239} size={14} fill={INK} anchor="start">
          {t("the denominator m-n becomes 0.", "denominator m-n zero ho jaata hai.")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={520} y={360} size={14} fill={INK} anchor="start">
          {t("External: R = (mQ-nP)/(m-n)", "External: R = (mQ-nP)/(m-n)")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={520} y={388} size={14} fill={RED} anchor="start" weight={700}>
          {t("Set m = n: denominator = 0", "Set m = n: denominator = 0")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.0)} d={crossD(516, 373, 204, 23)} stroke={RED} sw={2} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={520} y={414} size={14} fill={RED} anchor="start" weight={700}>
          {t("-> undefined, no such point.", "-> undefined, aisa point nahi.")}
        </T>
      </Fade>

      {/* beat 4 — equal external parts push R to infinity */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d="M 60 270 L 60 322" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={76} y={290} size={13} fill={RED} anchor="start" weight={700}>
          {t("Equal external parts push R to", "Equal external parts R ko infinity")}
        </T>
        <T x={76} y={313} size={13} fill={RED} anchor="start" weight={700}>
          {t("infinity — like parallel lines.", "tak dhakel dete hain — parallel lines jaisa.")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.0)} d={lineD(Q.x, Q.y, INF_END.x, INF_END.y)} stroke={RED} sw={2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={390} y={118} size={18} fill={RED} anchor="middle" weight={700}>{"∞"}</T>
      </Fade>

      {/* beat 5 — negative ratio is external division in disguise (recap) */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={60} y={357} size={14} fill={INK} anchor="start">
          {t("A negative ratio m:(-n) is", "Negative ratio m:(-n) hi")}
        </T>
        <T x={60} y={380} size={14} fill={INK} anchor="start">
          {t("external division in disguise.", "external division ka bhes hai.")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0)} d={checkD(508, 454, 12)} stroke={GREEN} sw={2.2} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 0.35)}>
        <T x={528} y={454} size={13} fill={GREEN} anchor="start" weight={700}>
          {t("m:(-n)  is external — same rule.", "m:(-n)  external hi hai — same rule.")}
        </T>
      </Fade>

      {/* beat 6 — distance is always >= 0 */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={60} y={419} size={14} fill={INK} anchor="start">
          {t("Distance is always ≥ 0 —", "Distance hamesha ≥ 0 hoti hai —")}
        </T>
        <T x={60} y={442} size={14} fill={INK} anchor="start">
          {t("even if Δx, Δy, Δz go negative.", "chahe Δx, Δy, Δz negative ho.")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={520} y={494} size={14} fill={RED} anchor="start" weight={700}>{"Δx = 3 - 7 = -4"}</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.9)} d={ringD(618, 491, 14, 12)} stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 1.3)}>
        <T x={520} y={520} size={14} fill={GREEN} anchor="start" weight={700}>{"(Δx)² = (-4)² = 16"}</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.8)} d={ringD(639, 517, 14, 12)} stroke={GREEN} sw={1.8} dur={0.4} />

      {/* beat 7 — squares erase the signs, direction never affects distance */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={60} y={477} size={14} fill={INK} anchor="start">
          {t("Squares erase the signs —", "Squares signs mita dete hain —")}
        </T>
        <T x={60} y={500} size={14} fill={INK} anchor="start">
          {t("direction never changes distance.", "direction se distance nahi badalta.")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0)} d={checkD(508, 560, 12)} stroke={GREEN} sw={2.2} dur={0.3} />
      <Fade on={beat >= 7} delay={dl(7, 0.35)}>
        <T x={528} y={560} size={13} fill={MUTED} anchor="start">
          {t("reverse: 7 - 3 = 4 -> 4² = 16 too", "ulta: 7 - 3 = 4 -> 4² = 16 bhi")}
        </T>
      </Fade>
    </Scene>
  );
}
