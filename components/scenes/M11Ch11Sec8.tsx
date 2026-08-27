/**
 * M11 Ch11 · Section 8 — "Worked example: centroid, forward and reverse"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — (a) forward: three given vertices -> centroid. (b) reverse:
 * two vertices + centroid -> the missing third vertex, via "sum of vertices = 3G".
 *
 * SCOPE NOTE (same flag as Sec7, same subtopic "Applications: Centroid, Collinearity & Locus"):
 * the task brief described secs 1-12 as 2D-only, but this section's Supabase board_content is
 * unambiguously 3D (every point is (x,y,z), the centroid formula sums three coordinates). Built
 * as 3D per the JSON (authoritative), reusing math-kit's project3D/ThreeDAxes (first used at
 * Sec15) — flagged for reconciliation with the "2D only" framing once Sec2-6/10-14 exist.
 *
 * HAND-VERIFIED ARITHMETIC (independent of the JSON, both parts check out exactly):
 *  (a) A(2,-1,4), B(6,3,-2), C(1,4,5). x:(2+6+1)/3=9/3=3. y:(-1+3+4)/3=6/3=2. z:(4-2+5)/3=7/3.
 *      G=(3,2,7/3). Matches JSON exactly.
 *  (b) Given A(2,-1,4), B(6,3,-2), G=(3,2,7/3); sum of vertices=3G=(9,6,7).
 *      x: 9-2-6=1. y: 6-(-1)-3=6+1-3=4. z: 7-4-(-2)=7-4+2=5. Third vertex=(1,4,5) = the
 *      original C from part (a) — forward and reverse are consistent. Matches JSON exactly.
 *      No data bugs found; both formula beats (seq3, seq6) reproduce verbatim.
 *
 * reveals_english = [0, 8.53, 15.62, 38.83, 50.18, 63.32, 88.06, 99.41] (8 values, beats 0-7).
 * board_content: seq1 heading->title. seq2 "(a) given"->beat1. seq3 "(a) formula+answer"->beat2.
 * seq4 "(b) given"->beat3. seq5 "sum=3G"->beat4. seq6 "(b) formula, coordinate by coordinate"
 * ->beat5. seq7 "third vertex = (1,4,5), consistent"->beat6. seq8 red-margin guardrail->beat7.
 *
 * PROJECTION (project3D, OX=680 OY=330 SCALE=32 — verified against math-kit's doc formula
 * screenX=OX+32y-16.627x, screenY=OY-32z+9.6x):
 *   A(2,-1,4)  -> (614.75,221.2)  ~(615,221)   B(6,3,-2) -> (676.24,451.6) ~(676,452)
 *   C(1,4,5)   -> (791.37,179.6)  ~(791,180)   G(3,2,7/3)-> (694.12,284.13)~(694,284)
 * All 4 land inside a compact 615-791 x / 180-452 y patch — comfortably right-of-center,
 * leaving x36-580 for the left-column narration/computation and a small orientation-axes
 * triad at (900,520) scale18 axisLen1.8 (tips (883,530)/(932,520)/(900,488), MUTED, well
 * clear of the point cloud — same "small separate reference icon" device as Sec15's room
 * corner, not meant to be read to scale against the plotted points).
 * Point labels placed radially outward from the triangle's own centroid G=(694,284) so none
 * sit on an edge: A anchor=end (601,207) up-left, B anchor=middle (676,474) below, C
 * anchor=start (803,170) up-right.
 *
 * THE ERASE/REVEAL DEVICE (part b's "missing vertex"): C's dot+label+the two edges touching
 * it (BC, CA) are drawn on beat1, gated fully OFF (on=false, vacating their box) at beat>=3
 * when part (b) poses C as unknown; a red hollow "?" marker takes the same visual slot from
 * beat3-5; then an independent second copy of C's dot+label+edges (own Fade groups, own
 * delays) fades back in at beat>=6 — the reveal moment — landing exactly where the erased
 * version was, with a green sanity-check mark beside it. This is "erase fully then reuse the
 * space" per spec Step 3, not dim-and-overlay (mutually exclusive on-windows checked: C-shown
 * beat in [1,3), "?" beat in [3,6), C-revealed beat >=6 — never two visible at once).
 *
 * Layout plan — left column (x50, narration/computation) | right region (diagram):
 *  title (always-on)      | T mid script sz24 red | x540 y58
 *  b1 | 2-line given       | T start sz14          | x50 y100/123
 *  b1 | axes triad+labels, edges AB/BC/CA, A/B/C dots+labels | Draw+Fade | as above
 *  b2 | 3-line computation | T start sz13          | x50 y157/179/201
 *  b2 | G dot+label+ring   | Fade+Draw              | (694,284)
 *  b3 | 2-line given       | T start sz14           | x50 y233/256
 *  b3 | erase C, red "?" marker | Fade off / Fade on | (791,180)
 *  b4 | boxed "sum=3G"     | Chip sz14 w200 h34     | x50 y289..323
 *  b5 | 3-line computation | T start sz13           | x50 y351/373/395
 *  b6 | 1-line + checkD    | Draw+T start sz14      | x50 y423 / x78 y427
 *  b6 | C reveal + green check on diagram | Fade+Draw | (791,180)
 *  b7 | red bar + 2-line guardrail | Draw+T start sz13 | x50 y459..519 / x66 y481/507
 * Vertical gaps all >=24px between different-idea blocks (title->b1 26, b1L2->b2L1 24.86,
 * b2L3->b3L1 27.7, b3L2->b4chip 24.34, b4chip->b5L1 23.7 rounded up in code to clear 24,
 * b5L3->b6 23.9->rounded, b6->b7bar 27.66) — final content bottom ~519, 77px clear of y596.
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
  CREAM,
  AMBER,
  ringD,
  Scene,
} from '@/components/scenes/kit';
import { project3D, ThreeDAxes, lineD, checkD } from "./math-kit";

const OX = 680;
const OY = 330;
const SCALE = 32;
const proj = (x: number, y: number, z: number) => project3D(x, y, z, OX, OY, SCALE);

const A = proj(2, -1, 4); // (615,221)
const B = proj(6, 3, -2); // (676,452)
const C = proj(1, 4, 5); // (791,180)
const G = proj(3, 2, 7 / 3); // (694,284)

export default function M11Ch11Sec8({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const cShown = beat >= 1 && beat < 3; // C known, part (a)
  const cUnknown = beat >= 3 && beat < 6; // C hidden, part (b) poses it as "?"
  const cRevealed = beat >= 6; // C solved back in, part (b)'s answer

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={24} fill={RED} anchor="middle" script>
          {t("Worked example: centroid, forward and reverse", "Worked example: centroid, forward aur reverse")}
        </T>
      </Fade>

      {/* beat 1 — (a) given: plot the triangle in 3D */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={50} y={100} size={14} fill={INK} anchor="start">
          {t("(a) Given the triangle", "(a) Triangle diya hai")}
        </T>
        <T x={50} y={123} size={14} fill={INK} anchor="start">
          A(2,-1,4), B(6,3,-2), C(1,4,5).
        </T>
      </Fade>
      <ThreeDAxes on={beat >= 1} delay={dl(1, 0)} originX={900} originY={520} scale={18} axisLen={1.8} stroke={MUTED} />
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={878} y={540} size={11} fill={MUTED} anchor="end">x</T>
        <T x={936} y={524} size={11} fill={MUTED} anchor="start">y</T>
        <T x={900} y={480} size={11} fill={MUTED} anchor="middle">z</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.0)} d={lineD(A.x, A.y, B.x, B.y)} stroke={INK} sw={2} dur={0.4} />
      <Draw on={cShown} delay={dl(1, 1.4)} d={lineD(B.x, B.y, C.x, C.y)} stroke={INK} sw={2} dur={0.4} />
      <Draw on={cShown} delay={dl(1, 1.8)} d={lineD(C.x, C.y, A.x, A.y)} stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 2.3)}>
        <Circle cx={A.x} cy={A.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <T x={601} y={207} size={13} fill={INK} anchor="end" weight={700}>A(2,-1,4)</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.8)}>
        <Circle cx={B.x} cy={B.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.0)}>
        <T x={676} y={474} size={13} fill={INK} anchor="middle" weight={700}>B(6,3,-2)</T>
      </Fade>
      <Fade on={cShown} delay={dl(1, 3.3)}>
        <Circle cx={C.x} cy={C.y} r={4} fill={INK} />
      </Fade>
      <Fade on={cShown} delay={dl(1, 3.5)}>
        <T x={803} y={170} size={13} fill={INK} anchor="start" weight={700}>C(1,4,5)</T>
      </Fade>

      {/* beat 2 — (a) compute the centroid, coordinate by coordinate */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={50} y={157} size={13} fill={INK} anchor="start">x = (2+6+1)/3 = 3</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={50} y={179} size={13} fill={INK} anchor="start">y = (-1+3+4)/3 = 2</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={50} y={201} size={13} fill={INK} anchor="start">z = (4-2+5)/3 = 7/3</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.4)}>
        <Circle cx={G.x} cy={G.y} r={5} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.6)}>
        <T x={706} y={276} size={13} fill={AMBER_DARK} anchor="start" weight={700}>G(3,2,7/3)</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 3.0)} d={ringD(720, 280, 42, 20)} stroke={AMBER_DARK} sw={2} dur={0.6} />

      {/* beat 3 — (b) given: two vertices + G, third vertex unknown */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={50} y={233} size={14} fill={INK} anchor="start">
          {t("(b) Two vertices and G =", "(b) Do vertices aur G =")}
        </T>
        <T x={50} y={256} size={14} fill={INK} anchor="start">
          {t("(3,2,7/3) are known. Find C.", "(3,2,7/3) pata hai. C nikaalo.")}
        </T>
      </Fade>
      <Fade on={cUnknown} delay={dl(3, 0.5)}>
        <Circle cx={C.x} cy={C.y} r={6} fill="none" stroke={RED} strokeWidth={2} />
        <T x={803} y={170} size={15} fill={RED} anchor="start" weight={700}>C = ?</T>
      </Fade>

      {/* beat 4 — the reverse trick: sum of vertices = 3G */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <Chip x={50} y={289} w={200} h={34} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={14} script={false}>
          Sum of vertices = 3 × G
        </Chip>
      </Fade>

      {/* beat 5 — solve coordinate by coordinate */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={50} y={351} size={13} fill={INK} anchor="start">x = 3(3) - 2 - 6 = 1</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={50} y={373} size={13} fill={INK} anchor="start">y = 3(2) - (-1) - 3 = 4</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={50} y={395} size={13} fill={INK} anchor="start">z = 3(7/3) - 4 - (-2) = 5</T>
      </Fade>

      {/* beat 6 — the reveal: third vertex = (1,4,5), consistent with part (a) */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d={checkD(58, 423, 13)} stroke={GREEN} sw={2.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={78} y={427} size={14} fill={INK} anchor="start">
          {t("Same as C from part (a)!", "Part (a) wale C jaisa hi!")}
        </T>
      </Fade>
      <Fade on={cRevealed} delay={dl(6, 0.3)}>
        <Circle cx={C.x} cy={C.y} r={4} fill={GREEN} />
      </Fade>
      <Fade on={cRevealed} delay={dl(6, 0.5)}>
        <T x={803} y={170} size={13} fill={GREEN} anchor="start" weight={700}>C(1,4,5)</T>
      </Fade>
      <Draw on={cRevealed} delay={dl(6, 0.9)} d={lineD(B.x, B.y, C.x, C.y)} stroke={GREEN} sw={2} dur={0.4} />
      <Draw on={cRevealed} delay={dl(6, 1.2)} d={lineD(C.x, C.y, A.x, A.y)} stroke={GREEN} sw={2} dur={0.4} />
      <Draw on={cRevealed} delay={dl(6, 1.6)} d={checkD(825, 165, 13)} stroke={GREEN} sw={2.4} dur={0.4} />

      {/* beat 7 — guardrail: don't forget the factor of 3 */}
      <Draw on={beat >= 7} delay={dl(7, 0)} d="M 50 459 L 50 519" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={66} y={481} size={13} fill={RED} anchor="start" weight={700}>
          {t("Reverse problem: sum = 3 × centroid —", "Reverse problem: sum = 3 × centroid —")}
        </T>
        <T x={66} y={507} size={13} fill={RED} anchor="start" weight={700}>
          {t("don't forget the factor of 3!", "factor of 3 bhoolna mat!")}
        </T>
      </Fade>
    </Scene>
  );
}
