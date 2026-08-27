/**
 * M11 Ch09 · Section 29 — "Proof: parallel lines and the symmetric form"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept (Proof) — subtopic 4 (Distance Formulas). TWO short independent
 * derivations sharing one 8-beat section. Sibling to Sec28 ("Proof: distance of a point
 * from a line"), whose landed result d = |Ax1+By1+C|/√(A²+B²) Part A reuses directly.
 *
 * Numbers verified (illustrative, not given in JSON — chosen per task brief, node-checked):
 * PART A — lines 3x+4y-12=0 and 3x+4y-27=0 ⇒ A=3,B=4,C1=-12,C2=-27.
 *   Point on first line: (-C1/A, 0) = (4,0). Check: 3(4)+4(0)-12 = 0 ✓.
 *   Distance to second line via Sec28's own formula: |3(4)+4(0)-27|/√(3²+4²)
 *     = |12-27|/5 = 15/5 = 3.
 *   Shortcut: d = |C1-C2|/√(A²+B²) = |(-12)-(-27)|/5 = 15/5 = 3. MATCHES ✓.
 *   Foot of the perpendicular F = M + d·(A,B)/√(A²+B²) = (4,0) + 3·(0.6,0.8)
 *     = (5.8, 2.4). Check on line2: 3(5.8)+4(2.4)-27 = 17.4+9.6-27 = 0 ✓.
 *     |MF| = √(1.8²+2.4²) = √9 = 3 ✓ (matches d, and MF is truly ⊥ to both
 *     lines since line-direction·MF-direction = (0.8,0.6)·(0.6,-0.8) = 0).
 * PART B — P=(2,2), θ=60°=π/3, r=4 (clean r, per brief).
 *   Q = (2+4cos60°, 2+4sin60°) = (2+2, 2+3.4641) = (4, 5.464).
 *   |PQ| = √((4-2)²+(5.464-2)²) = √(4+12) = √16 = 4 = r. MATCHES ✓ — confirms
 *   (cos θ, sin θ) being a unit vector genuinely makes r the true distance.
 *
 * Screen mapping — PART A (uniform scale so slope & perpendicularity render true):
 *   toScreenA(x,y) = {x: 364+24x, y: 400-24y}.  M(4,0)->(460,400).  F(5.8,2.4)->(503.2,342.4).
 *   Line segments drawn over math-domain x∈[2,7.5] on each line (both endpoints verified
 *   on their own line by substitution). |MF| on screen = 3·24 = 72px exactly.
 * Screen mapping — PART B: P placed directly at screen (420,440); Q = pointOnCircle(P, 4·45, π/3)
 *   = (510, 284.1) (scale 45px/unit, uniform, so the drawn angle is genuinely 60°).
 *
 * Beat-index: board_content has 8 items. item[0] heading -> always-on title. items[1..7]
 * gate at beat>=1..7. reveals_english = [0, 8.62, 18.86, 32.17, 45.31, 58.2, 67.33, 75.26].
 *
 * Beats:
 *  0(title, always-on) | "Proof: Parallel Lines & the Symmetric Form"
 *  1 | PART A intro: parallel lines are everywhere equidistant + draw both lines
 *  2 | method: pick (-C1/A,0) on the first + mark M, label both line equations
 *  3 | land: d = |C1-C2|/√(A²+B²)  + mark F, draw MF, label "d = 15/5 = 3" + verify chip
 *  4 | guardrail (red-margin): only valid once A,B identical — normalize first
 *      + underline the shared "3x+4y" in both line labels (visual guardrail)
 *  5 | PIVOT — ERASE Part A entirely, build Part B fresh in the same region:
 *      caption + reference ray + P + angle arc + PQ segment "r=4" + Q + (cosθ,sinθ) note
 *  6 | formula: x = x1 + r cosθ,   y = y1 + r sinθ
 *  7 | land: because (cosθ,sinθ) is a unit step, r is the true distance + verify chip
 *
 * Layout plan (title y62; text/caption y102; PartA-only text y136; formula y172;
 * PartB-only text y206; diagram band y264–466; verdict chip band y508–548):
 *  b0 | title (22,red,script)                  | T mid | x540 y62
 *  b1 | text (16,ink)                           | T mid | x540 y102
 *  b1 | line1 (INK)                             | Draw | L1A(412,364)->L1B(544,463)
 *  b1 | line2 (INK)                             | Draw | L2A(412,274)->L2B(544,373)
 *  b2 | text (15,ink)                           | T mid | x540 y136
 *  b2 | line2 label "3x+4y-27=0"                | T end | x402 y262
 *  b2 | line1 label "3x+4y-12=0"                | T start| x560 y486
 *  b2 | M dot + label "(4, 0)"                  | circle+T end | (460,400) label x444 y426
 *  b3 | formula (17,ink)                        | T mid | x540 y172
 *  b3 | F dot (amber_dark)                      | circle | (503.2,342.4)
 *  b3 | MF segment (amber_dark)                 | Draw | (460,400)->(503.2,342.4)
 *  b3 | "d = 15/5 = 3" label                    | T start | x499 y384
 *  b3 | verify chip (green)                     | Chip | x425 y508 w230 h40
 *  b4 | red bar x780 y306..352                  | Draw
 *  b4 | 2-line guardrail text                   | T start | x796 y320 / y344
 *  b4 | underline under "3x+4y" (both labels)    | Draw (red) | (300,266)-(342,266) / (560,490)-(602,490)
 *  b5 | caption (16,ink)                        | T mid | x540 y102 (Part A's b1 vacated)
 *  b5 | reference ray (muted)                   | Draw | P(420,440)->(480,440)
 *  b5 | P dot + label "P(2, 2)"                 | circle+T end | (420,440) label x395 y462
 *  b5 | angle arc r36 0->60° (amber_dark)        | Draw | P
 *  b5 | "θ = 60°" label                         | T start | x465 y414
 *  b5 | PQ segment (amber_dark)                 | Draw | P(420,440)->Q(510,284.1)
 *  b5 | "r = 4" label                           | T start | x486 y374
 *  b5 | Q dot + label "Q(4, 5.46)"               | circle+T start | (510,284.1) label x524 y274
 *  b5 | "(cos60°, sin60°)" annotation (muted)     | T start | x524 y300
 *  b6 | formula "x=x1+r cosθ," / "y=y1+r sinθ"   | T end/start | x515/x555 y172
 *  b7 | text (14,ink)                           | T mid | x540 y206
 *  b7 | verify chip (green)                     | Chip | x395 y508 w290 h40
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
  Scene,
} from '@/components/scenes/kit';
import { lineD, angleArcD, pointOnCircle } from "./math-kit";

/* ---------------- Part A: parallel-lines geometry ---------------- */
const SCALE_A = 24;
const OX_A = 364;
const OY_A = 400;
function toScreenA(x: number, y: number) {
  return { x: OX_A + SCALE_A * x, y: OY_A - SCALE_A * y };
}
const M = toScreenA(4, 0); // (460, 400)
const F = toScreenA(5.8, 2.4); // (503.2, 342.4)
const L1A = toScreenA(2, 1.5); // (412, 364)
const L1B = toScreenA(7.5, -2.625); // (544, 463)
const L2A = toScreenA(2, 5.25); // (412, 274)
const L2B = toScreenA(7.5, 1.125); // (544, 373)

/* ---------------- Part B: symmetric-form geometry ---------------- */
const SCALE_B = 45;
const P = { x: 420, y: 440 };
const THETA = Math.PI / 3; // 60°
const R_PX = 4 * SCALE_B; // 180
const Q = pointOnCircle(P.x, P.y, R_PX, THETA); // (510, 284.1)
const REF_END = pointOnCircle(P.x, P.y, 60, 0); // (480, 440)
const ARC_R = 36;

export default function M11Ch09Sec29({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const aOn = beat >= 1 && beat < 5; // Part A lives on beats 1-4, then vacates
  const bOn = beat >= 5; // Part B takes over the same region from beat 5

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Proof: Parallel Lines & the Symmetric Form", "Parallel Lines aur Symmetric Form ka Proof")}
        </T>
      </Fade>

      {/* ============================= PART A ============================= */}

      {/* beat 1 — intro: parallel lines are everywhere equidistant + draw both lines */}
      <Fade on={aOn} delay={dl(1, 0)}>
        <T x={540} y={102} size={16} fill={INK} anchor="middle">
          {t(
            "Parallel lines Ax+By+C1=0 and Ax+By+C2=0 are everywhere the same distance apart.",
            "Parallel lines Ax+By+C1=0 aur Ax+By+C2=0 hamesha same distance par hoti hain."
          )}
        </T>
      </Fade>
      <Draw on={aOn} delay={dl(1, 0.6)} d={lineD(L1A.x, L1A.y, L1B.x, L1B.y)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={aOn} delay={dl(1, 1.3)} d={lineD(L2A.x, L2A.y, L2B.x, L2B.y)} stroke={INK} sw={2.2} dur={0.6} />

      {/* beat 2 — method: pick (-C1/A, 0) on the first line + label both equations */}
      <Fade on={aOn && beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={136} size={15} fill={INK} anchor="middle">
          {t(
            "Pick the point (-C1/A, 0) on the first line, then measure to the second.",
            "Pehli line par point (-C1/A, 0) chuno, phir dusri tak measure karo."
          )}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 0.6)}>
        <T x={402} y={262} size={12} fill={INK} anchor="end" weight={700}>3x + 4y - 27 = 0</T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 1.0)}>
        <T x={560} y={486} size={12} fill={INK} anchor="start" weight={700}>3x + 4y - 12 = 0</T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 1.6)}>
        <Circle cx={M.x} cy={M.y} r={4.5} fill={INK} />
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 1.9)}>
        <T x={444} y={426} size={12} fill={INK} anchor="end" weight={700}>(4, 0)</T>
      </Fade>

      {/* beat 3 — land: d = |C1-C2|/√(A²+B²), mark the foot, verify concretely */}
      <Fade on={aOn && beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={172} size={17} fill={INK} anchor="middle">d = |C1 - C2| / √(A² + B²)</T>
      </Fade>
      <Fade on={aOn && beat >= 3} delay={dl(3, 0.6)}>
        <Circle cx={F.x} cy={F.y} r={4.5} fill={AMBER_DARK} />
      </Fade>
      <Draw on={aOn && beat >= 3} delay={dl(3, 0.9)} d={lineD(M.x, M.y, F.x, F.y)} stroke={AMBER_DARK} sw={2.4} dur={0.5} />
      <Fade on={aOn && beat >= 3} delay={dl(3, 1.5)}>
        <T x={499} y={384} size={13} fill={AMBER_DARK} anchor="start" weight={700}>d = 15/5 = 3</T>
      </Fade>
      <Fade on={aOn && beat >= 3} delay={dl(3, 2.0)}>
        <Chip x={425} y={508} w={230} h={40} fill={CREAM} stroke={GREEN} textFill={INK} size={15} script={false}>
          d = |(-12)-(-27)| / 5 = 3
        </Chip>
      </Fade>

      {/* beat 4 — guardrail: only valid once both lines show identical A, B */}
      <Draw on={aOn && beat >= 4} delay={dl(4, 0)} d="M 780 306 L 780 352" stroke={RED} sw={4} dur={0.4} />
      <Fade on={aOn && beat >= 4} delay={dl(4, 0.5)}>
        <T x={796} y={320} size={13} fill={RED} anchor="start" weight={700}>
          {t("Valid only once both lines", "Lines ka A, B same na ho")}
        </T>
        <T x={796} y={344} size={13} fill={RED} anchor="start" weight={700}>
          {t("share A, B — normalize first.", "to pehle normalize karo.")}
        </T>
      </Fade>
      <Draw on={aOn && beat >= 4} delay={dl(4, 1.1)} d={lineD(300, 266, 342, 266)} stroke={RED} sw={2.5} dur={0.3} />
      <Draw on={aOn && beat >= 4} delay={dl(4, 1.4)} d={lineD(560, 490, 602, 490)} stroke={RED} sw={2.5} dur={0.3} />

      {/* ============================= PART B ============================= */}
      {/* beat 5 — pivot: fresh caption + build P, ray, angle, PQ, Q in the vacated region */}
      <Fade on={bOn} delay={dl(5, 0)}>
        <T x={540} y={102} size={16} fill={INK} anchor="middle">
          {t(
            "Start at P, face inclination θ, and step signed distance r.",
            "P se shuru karo, inclination θ ki taraf mudo, aur signed distance r chalo."
          )}
        </T>
      </Fade>
      <Draw on={bOn} delay={dl(5, 0.6)} d={lineD(P.x, P.y, REF_END.x, REF_END.y)} stroke={MUTED} sw={1.6} dur={0.4} />
      <Fade on={bOn} delay={dl(5, 1.0)}>
        <Circle cx={P.x} cy={P.y} r={4.5} fill={INK} />
      </Fade>
      <Fade on={bOn} delay={dl(5, 1.3)}>
        <T x={395} y={462} size={12} fill={INK} anchor="end" weight={700}>P(2, 2)</T>
      </Fade>
      <Draw on={bOn} delay={dl(5, 1.7)} d={angleArcD(P.x, P.y, ARC_R, 0, THETA)} stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Fade on={bOn} delay={dl(5, 2.3)}>
        <T x={465} y={414} size={13} fill={AMBER_DARK} anchor="start" weight={700}>θ = 60°</T>
      </Fade>
      <Draw on={bOn} delay={dl(5, 2.7)} d={lineD(P.x, P.y, Q.x, Q.y)} stroke={AMBER_DARK} sw={2.4} dur={0.5} />
      <Fade on={bOn} delay={dl(5, 3.3)}>
        <T x={486} y={374} size={13} fill={AMBER_DARK} anchor="start" weight={700}>r = 4</T>
      </Fade>
      <Fade on={bOn} delay={dl(5, 3.6)}>
        <Circle cx={Q.x} cy={Q.y} r={4.5} fill={INK} />
      </Fade>
      <Fade on={bOn} delay={dl(5, 3.9)}>
        <T x={524} y={274} size={12} fill={INK} anchor="start" weight={700}>Q(4, 5.46)</T>
      </Fade>
      <Fade on={bOn} delay={dl(5, 4.3)}>
        <T x={524} y={300} size={11} fill={MUTED} anchor="start">(cos60°, sin60°)</T>
      </Fade>

      {/* beat 6 — formula: x = x1 + r cosθ,   y = y1 + r sinθ (real gap for \quad) */}
      <Fade on={bOn && beat >= 6} delay={dl(6, 0)}>
        <T x={515} y={172} size={17} fill={INK} anchor="end">x = x1 + r cosθ,</T>
        <T x={555} y={172} size={17} fill={INK} anchor="start">y = y1 + r sinθ</T>
      </Fade>

      {/* beat 7 — land: unit step ⇒ r is the true distance, verify concretely */}
      <Fade on={bOn && beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={206} size={14} fill={INK} anchor="middle">
          {t(
            "Because (cosθ, sinθ) is a unit step, r is the true distance.",
            "Kyunki (cosθ, sinθ) ek unit step hai, r hi asli distance hai."
          )}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 7} delay={dl(7, 0.6)}>
        <Chip x={395} y={508} w={290} h={40} fill={CREAM} stroke={GREEN} textFill={INK} size={14} script={false}>
          |PQ| = √(2² + 3.464²) = √16 = 4 = r
        </Chip>
      </Fade>
    </Scene>
  );
}
