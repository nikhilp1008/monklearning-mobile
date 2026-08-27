/**
 * M11 Ch09 · Section 20 — "Proof: intercept form and normal form"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — subtopic "Equations of a Line". Flagged for extra scrutiny: TWO
 * independent derivations (intercept form, normal form), TWO diagrams, 9 board_content items
 * (one more beat than this chapter's usual 8).
 *
 * board_content[0] (seq1, heading) = always-on title. Items[1..8] (seq2..seq9) gate at
 * beat>=1..8. reveals_english (9 values) = [0, 6.83, 14.93, 25.26, 35.33, 43.69, 59.05, 69.72,
 * 81.92]. Highest `beat >=` used below is 8, matching the 9-item beat index.
 *
 * LAYOUT CHOICE — side-by-side panels, not top/bottom. Both derivations are independent
 * (different illustrative numbers) and the final "notes photo" should show both proofs and
 * both diagrams at once, so a left/right split (column guide centers x=300 / x=780, per
 * SCENE_AUTHORING.md's halves-guide) beats a stacked/settle layout here: Part A (intercept
 * form, beats 1-4) builds in the left column and PARKS there (never dimmed — both are live
 * "landed" results); Part B (normal form, beats 5-8) builds fresh in the right column with
 * zero spatial contact with Part A (measured: Part A's rightmost content maxes at x≈470-548,
 * Part B's leftmost content starts at x≈560+, verified per-string below).
 *
 * PART A — intercept form. Illustrative a=6, b=4 (M11Ch09Sec18 was still a placeholder at
 * authoring time, so these are freshly chosen, not inherited). Verified algebraically:
 *   line: x/6 + y/4 = 1  =>  4x + 6y - 24 = 0  =>  2x + 3y - 12 = 0  =>  2x + 3y = 12.
 *   slope via two-point form: (b-0)/(0-a) = (4-0)/(0-6) = -4/6 = -2/3.
 *   via x/6+y/4=1 rearranged: y = 4 - 2x/3 = -2x/3 + 4, slope -2/3. MATCHES.
 *   A(6,0): 2(6)+3(0)=12 ✓.  B(0,4): 2(0)+3(4)=12 ✓.
 *
 * PART B — normal form. Illustrative p=5, ω=30°=π/6. Verified (node, exact trig, see below):
 *   N = (p cos ω, p sin ω) = (5·0.86603, 5·0.5) = (4.3301, 2.5) [math units].
 *   Screen: N = pointOnCircle(OX,OY, p*SCALE_B, ω) — literally the formula, not hand-placed.
 *   Check N satisfies x cos ω + y sin ω = p: (p cos ω)(cos ω) + (p sin ω)(sin ω)
 *     = p(cos²ω + sin²ω) = p·1 = p = 5 ✓ (computed exactly via node: 5.0).
 *   Displayed rounding: 4.33 × 0.866 + 2.5 × 0.5 = 4.9998 ≈ 5 (board-level rounding, same
 *   precision the task brief itself uses).
 *
 * Beats:
 *  0 (title, always-on) | "Proof: Intercept Form and Normal Form"
 *  1 | Part A header + "two-point form through A(a,0), B(0,b)"
 *  2 | formula: y - 0 = (b-0)/(0-a) (x-a)
 *  3 | landed: x/a + y/b = 1  (boxed chip)
 *  4 | THE DIAGRAM A: axes, filled triangle OAB, A(6,0), B(0,4), green hypotenuse, check "2x+3y=12"
 *  5 | Part B header + "foot N of perpendicular from O = (p cos ω, p sin ω)"
 *  6 | THE DIAGRAM B: x-axis, O, dashed-substitute (MUTED) ON, N marked w/ coords, ω arc+label, p label
 *  7 | text: "line through N ⊥ ON — use cos²ω+sin²ω=1" + draw the green line through N
 *  8 | landed: x cos ω + y sin ω = p (boxed chip) + numeric check caption
 *
 * Layout plan (all text widths measured via 0.50×size×chars (Anek) / 0.55×size×chars (Kalam),
 * longer-language string checked; all boxes verified non-intersecting against every
 * simultaneously-visible beat):
 *  title (always-on, script22, RED)        | T mid | x540 y62  (Kalam top=62-1.3·22=33.4 ≥30 OK)
 *  b1 | hdrA "Part A — Intercept Form"      | T mid,15,AMBER_DARK | x300 y100
 *  b1 | bodyA (14,ink)                      | T mid | x300 y132  (widest hi: 322w, spans139-461)
 *  b2 | formulaA (16,ink,w700)              | T mid | x300 y166  (spans176-424)
 *  b3 | chipA "x/a + y/b = 1"               | Chip 19 | x215 y200 w170 h44 (spans215-385)
 *  b4 | axes O(110,520) x70..430 y290..560  | CartesianAxes noticks
 *  b4 | triangle fill O-A-B (ink@0.07)      | path (no stroke)
 *  b4 | O dot + label                       | circle+T | (110,520) label x98 y536 end,11,MUTED
 *  b4 | x-axis end label "x"                | T | x440 y524 start,11,MUTED
 *  b4 | y-axis end label "y"                | T | x100 y282 end,11,MUTED
 *  b4 | A dot + "A(6, 0)"                   | circle+T | (380,520) label x380 y544 mid,13,ink,w700
 *  b4 | B dot + "B(0, 4)"                   | circle+T | (110,340) label x88 y330 end,13,ink,w700
 *  b4 | hypotenuse A-B (green)              | Draw | (380,520)-(110,340)
 *  b4 | check caption "2x + 3y = 12"        | T mid,14,GREEN,w600 | x300 y582
 *  b5 | hdrB "Part B — Normal Form"         | T mid,15,AMBER_DARK | x780 y100
 *  b5 | bodyB (14,ink)                      | T mid | x780 y132  (widest en: 364w, spans598-962)
 *  b6 | x-axis O(620,460) to x940           | Draw (axisD) | y460
 *  b6 | x-axis end label "x"                | T | x945 y464 start,11,MUTED
 *  b6 | O dot + label                       | circle+T | (620,460) label x606 y450 end,11,MUTED
 *  b6 | ON segment (MUTED, dashed-substitute)| Draw | (620,460)-(814.86,347.5)
 *  b6 | N dot + "N (4.33, 2.5)"             | circle+T | (814.86,347.5) label x828.86 y343 start,13,ink,w700
 *  b6 | "p = 5" label (offset off ON)        | T mid,13,ink,w700 | (710.43,391.63)
 *  b6 | ω arc r=40 (AMBER) + "ω = 30°"       | Draw+T | arc 0..π/6 at O; label mid,13,AMBER_DARK (676,445)
 *  b7 | text (14,ink)                        | T mid | x780 y166 (widest hi: 441w, spans559.5-1000.5 —
 *       clear of Part A's rightmost content at x≈470 by 89.5px)
 *  b7 | green line thru N ⊥ ON               | Draw | (855.36,417.65)-(760.86,253.97)
 *  b8 | chipB "x cos ω + y sin ω = p"        | Chip 19 | x650 y486 w260 h46 (spans650-910)
 *  b8 | check caption                        | T mid,14,GREEN,w600 | x780 y566
 */

import React from "react";
import { Circle, Path } from 'react-native-svg';
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
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, lineD, angleArcD, pointOnCircle, axisD } from "./math-kit";

/* ---------------- Part A geometry (intercept form, a=6, b=4) ---------------- */
const SCALE_A = 45;
const A_VAL = 6;
const B_VAL = 4;
const OA = { x: 110, y: 520 };
const A_PT = { x: OA.x + A_VAL * SCALE_A, y: OA.y }; // (380,520)
const B_PT = { x: OA.x, y: OA.y - B_VAL * SCALE_A }; // (110,340)
const TRIANGLE_D = `M ${OA.x} ${OA.y} L ${A_PT.x} ${A_PT.y} L ${B_PT.x} ${B_PT.y} Z`;

/* ---------------- Part B geometry (normal form, p=5, ω=30°) ---------------- */
const SCALE_B = 45;
const P_VAL = 5;
const OMEGA = Math.PI / 6; // 30°
const OB = { x: 620, y: 460 };
const N_PT = pointOnCircle(OB.x, OB.y, P_VAL * SCALE_B, OMEGA); // (814.86, 347.5) — literally p cosω, p sinω
const P_MID = { x: (OB.x + N_PT.x) / 2, y: (OB.y + N_PT.y) / 2 };
const P_LABEL = pointOnCircle(P_MID.x, P_MID.y, 14, (2 * Math.PI) / 3); // offset perpendicular off ON
const ARC_R = 40;
const ARC_LABEL = pointOnCircle(OB.x, OB.y, ARC_R + 18, Math.PI / 12); // bisector of 0..30deg
// The line through N, perpendicular to ON: direction (-sinω, cosω) in math space.
const LINE_K1 = 1.8;
const LINE_K2 = 2.4;
const LINE_END1 = {
  x: N_PT.x + LINE_K1 * SCALE_B * Math.sin(OMEGA),
  y: N_PT.y + LINE_K1 * SCALE_B * Math.cos(OMEGA),
};
const LINE_END2 = {
  x: N_PT.x - LINE_K2 * SCALE_B * Math.sin(OMEGA),
  y: N_PT.y - LINE_K2 * SCALE_B * Math.cos(OMEGA),
};

export default function M11Ch09Sec20({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Proof: Intercept Form and Normal Form", "Proof: Intercept Form aur Normal Form")}
        </T>
      </Fade>

      {/* ============================ PART A — intercept form ============================ */}

      {/* beat 1 — header + two-point form setup */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={300} y={100} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Part A — Intercept Form", "Part A — Intercept Form")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={300} y={132} size={14} fill={INK} anchor="middle">
          {t(
            "Two-point form through A(a, 0) and B(0, b).",
            "Do-point form, A(a, 0) aur B(0, b) ke through."
          )}
        </T>
      </Fade>

      {/* beat 2 — the slope-form equation */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={300} y={166} size={16} fill={INK} anchor="middle" weight={700}>
          y - 0 = (b - 0)/(0 - a) (x - a)
        </T>
      </Fade>

      {/* beat 3 — landed: x/a + y/b = 1 */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <Chip x={215} y={200} w={170} h={44} fill="#FCF4E0" stroke={GREEN} textFill={INK} size={19}>
          x/a + y/b = 1
        </Chip>
      </Fade>

      {/* beat 4 — THE DIAGRAM: axes, filled triangle OAB, A(6,0), B(0,4), hypotenuse */}
      <CartesianAxes on={beat >= 4} delay={dl(4, 0)} originX={OA.x} originY={OA.y} xLeft={70} xRight={430} yTop={290} yBottom={560} showTicks={false} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <Path d={TRIANGLE_D} fill={INK} opacity={0.07} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <Circle cx={OA.x} cy={OA.y} r={3} fill={INK} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={98} y={536} size={11} fill={MUTED} anchor="end">O</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.0)}>
        <T x={440} y={524} size={11} fill={MUTED} anchor="start">x</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={100} y={282} size={11} fill={MUTED} anchor="end">y</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <Circle cx={A_PT.x} cy={A_PT.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={380} y={544} size={13} fill={INK} anchor="middle" weight={700}>A(6, 0)</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.7)}>
        <Circle cx={B_PT.x} cy={B_PT.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.9)}>
        <T x={88} y={330} size={13} fill={INK} anchor="end" weight={700}>B(0, 4)</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 2.2)} d={lineD(A_PT.x, A_PT.y, B_PT.x, B_PT.y)} stroke={GREEN} sw={2.4} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 2.9)}>
        <T x={300} y={582} size={14} fill={GREEN} anchor="middle" weight={600}>2x + 3y = 12</T>
      </Fade>

      {/* ============================ PART B — normal form ============================ */}

      {/* beat 5 — header + foot-of-perpendicular setup */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={780} y={100} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Part B — Normal Form", "Part B — Normal Form")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={780} y={132} size={14} fill={INK} anchor="middle">
          {t(
            "Foot of perpendicular from O: N = (p cos ω, p sin ω)",
            "O se perpendicular ka foot: N = (p cos ω, p sin ω)"
          )}
        </T>
      </Fade>

      {/* beat 6 — THE DIAGRAM: x-axis, O, ON segment (MUTED), N with coords, ω arc, p label */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d={axisD(580, 940, OB.y)} stroke={INK} sw={2} dur={0.7} />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={945} y={464} size={11} fill={MUTED} anchor="start">x</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <Circle cx={OB.x} cy={OB.y} r={3.5} fill={INK} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={606} y={450} size={11} fill={MUTED} anchor="end">O</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.0)} d={lineD(OB.x, OB.y, N_PT.x, N_PT.y)} stroke={MUTED} sw={2} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <Circle cx={N_PT.x} cy={N_PT.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <T x={828.86} y={343} size={13} fill={INK} anchor="start" weight={700}>N (4.33, 2.5)</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.1)}>
        <T x={P_LABEL.x} y={P_LABEL.y} size={13} fill={INK} anchor="middle" weight={700}>p = 5</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 2.4)} d={angleArcD(OB.x, OB.y, ARC_R, 0, OMEGA)} stroke={AMBER} sw={2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 2.9)}>
        <T x={ARC_LABEL.x} y={ARC_LABEL.y} size={13} fill={AMBER_DARK} anchor="middle" weight={700}>ω = 30°</T>
      </Fade>

      {/* beat 7 — the line through N, perpendicular to ON */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={780} y={166} size={14} fill={INK} anchor="middle">
          {t(
            "Line through N is perpendicular to ON — use cos²ω + sin²ω = 1",
            "N se line, ON ke perpendicular hai — cos²ω + sin²ω = 1 use karo"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d={lineD(LINE_END1.x, LINE_END1.y, LINE_END2.x, LINE_END2.y)} stroke={GREEN} sw={2.4} dur={0.6} />

      {/* beat 8 — landed: x cos ω + y sin ω = p */}
      <Fade on={beat >= 8} delay={dl(8, 0)}>
        <Chip x={650} y={486} w={260} h={46} fill="#FCF4E0" stroke={GREEN} textFill={INK} size={19}>
          x cos ω + y sin ω = p
        </Chip>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 0.6)}>
        <T x={780} y={566} size={14} fill={GREEN} anchor="middle" weight={600}>
          4.33 × 0.866 + 2.5 × 0.5 = 5
        </T>
      </Fade>
    </Scene>
  );
}
