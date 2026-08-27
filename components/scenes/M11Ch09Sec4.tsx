/**
 * M11 Ch09 · Section 4 — "Proof: area of a triangle, and collinearity"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept (flagged "Proof:" — extra scrutiny). subtopic: Coordinate Foundations.
 *
 * board_content seq1 is the heading — always-on title. Remaining 7 items (seq2..seq8) gate at
 * beat>=1..beat>=7. reveals_english=[0,6.06,15.36,24.75,34.22,40.19,56.58,66.22],
 * reveals_hinglish=[0,4.52,12.63,21.33,30.81,37.97,58.37,66.99] (8 values each).
 *
 * CONCRETE ILLUSTRATIVE TRIANGLE (not given by the JSON — the JSON's formulas are symbolic;
 * this triangle grounds the diagram and is verified by hand below, script-checked):
 *   A(1,1), B(4,5), C(7,2) — lower-left, top, lower-right, all above the x-axis, matching the
 *   raw SVG's rough shape. Traversal A→B→C is CLOCKWISE (cross((B-A),(C-A)) = 3*1-4*6 = -21 < 0),
 *   so side CA is the triangle's lower/outer edge.
 *
 *   Geometric trapezia (the actual regions cut by dropping perpendiculars to the x-axis):
 *     trap(AB), x:1→4, parallel sides y=1 and y=5, width 3  = ½(1+5)(3)  = 9
 *     trap(BC), x:4→7, parallel sides y=5 and y=2, width 3  = ½(5+2)(3)  = 10.5
 *     trap(CA), x:1→7, parallel sides y=2 and y=1, width 6  = ½(2+1)(6)  = 9   (the big outer one)
 *   Triangle area = trap(AB) + trap(BC) − trap(CA) = 9 + 10.5 − 9 = 10.5.
 *
 *   Board formula (seq4), term by term, x1..y3 = A,B,C's coordinates:
 *     t1 = ½(x1-x2)(y1+y2) = ½(1-4)(1+5)   = ½(-3)(6)  = -9    = -trap(AB)
 *     t2 = ½(x2-x3)(y2+y3) = ½(4-7)(5+2)   = ½(-3)(7)  = -10.5 = -trap(BC)
 *     t3 = ½(x3-x1)(y3+y1) = ½(7-1)(2+1)   = ½(6)(3)   = 9     = +trap(CA)
 *   sum = t1+t2+t3 = -9 -10.5 +9 = -10.5, |sum| = 10.5  ✓ matches the trapezia argument exactly
 *   (the messy 3-term sum IS ±(area), sign carrying the orientation — this is the actual algebra,
 *   not a visual coincidence: expanding t1+t2+t3 collapses to exactly ½[x1(y2-y3)+x2(y3-y1)+x3(y1-y2)]).
 *
 *   Shoelace / final formula (seq6): ½|x1(y2-y3)+x2(y3-y1)+x3(y1-y2)|
 *     = ½|1(5-2) + 4(2-1) + 7(1-5)| = ½|3 + 4 - 28| = ½|-21| = 10.5  ✓ matches both of the above.
 *
 *   toScreen(x,y) = {x: OX + x*SCALE, y: OY - y*SCALE}, OX=221, OY=330 (the x-axis line), SCALE=26.
 *     A(1,1)->(247,304)  B(4,5)->(325,200)  C(7,2)->(403,278)  feet at y=330: (247,330)(325,330)(403,330).
 *   (script-verified: trapAB=9, trapBC=10.5, trapCA=9, tri=10.5; t1,t2,t3=-9,-10.5,9 sum=-10.5;
 *    shoelace inside=-21, area=10.5 — all four routes agree.)
 *
 * Beats:
 *  0 (title, always-on) | "Proof: Area of a Triangle"
 *  1 | setup: drop perpendiculars from each vertex to the x-axis -> three trapezia
 *  2 | THE DIAGRAM: x-axis, triangle A(1,1) B(4,5) C(7,2) filled translucent green, vertex labels,
 *    three MUTED perpendicular drops to the axis, foot labels 1/4/7, caption
 *  3 | messy 3-term trapezia-sum formula (symbolic x1..y3), stacked term by term
 *  4 | "expanding collapses this" + short amber arrow pointing down at the coming box
 *  5 | LAND: boxed clean formula Δ = ½|x1(y2-y3)+x2(y3-y1)+x3(y1-y2)| (emphasis high); the
 *    messy beat-3 sum dims (stays in its box, not removed — "accumulates like a real class")
 *  6 | guardrail (red-margin): modulus removes orientation sign, area never negative
 *  7 | closing: Δ=0 ⟹ collinear, with a tiny inset of 3 collinear dots (the degenerate case)
 *
 * Layout plan (boxes estimated per SCENE_AUTHORING.md Step 3 ratios; Anek non-script throughout
 * except the two script asides, chosen so every <T> containing Δ stays non-script per NOTATION):
 *  b0 | title (26,red,script,ALWAYS ON)         | T mid | x540 y62
 *  b1 | setup text (15,ink)                     | T mid | x540 y96  (box ~x251..829 y85..101)
 *  b2 | axis (INK) x190..478 y330 + "x" label    | Draw+T| axisD(190,478,330); label x488 y334
 *  b2 | triangle outline (GREEN, closed path)    | Draw  | (247,304)-(325,200)-(403,278)-Z
 *  b2 | triangle fill (GREEN 0.16 translucent)   | Fade  | polygon same 3 pts
 *  b2 | A/B/C dots (INK) + labels "A (1,1)" etc  | circ+T| A lbl x231 y290 end; B lbl x325 y182 mid;
 *      C lbl x419 y266 start (all outside the fill, up-left/up/up-right of their vertex)
 *  b2 | 3 perpendiculars (MUTED solid)           | Draw  | vertex -> (same x, y330)
 *  b2 | foot labels "1","4","7" (11,muted)       | T mid | x247/325/403 y346
 *  b2 | caption (12,script,green)                | T mid | x300 y396 (box ~x89..511 y380..402)
 *  b3 | messy sum, 3 stacked lines (19,ink,w700, non-script; dims once beat>=5) |
 *      line1 x600 y170 "Δ = 1/2(x1-x2)(y1+y2)"        (box ~x600..800 y155..176)
 *      line2 x618 y204 "+ 1/2(x2-x3)(y2+y3)"           (box ~x618..799 y189..210, baseline gap 34)
 *      line3 x618 y238 "+ 1/2(x3-x1)(y3+y1)"           (box ~x618..799 y223..244, baseline gap 34)
 *  b4 | transition text (14,script,amber_dark)   | T mid | x790 y276 (box ~x574..1006 y258..283)
 *  b4 | short down arrow (amber)                 | Draw  | (790,292)->(790,311), tip 5px off box b5
 *  b5 | box (amber, rounded)                     | Draw  | roundRectD(580,316,440,64,14)
 *  b5 | boxed formula (20,ink,w800, non-script)   | T mid | x800 y354 "Δ = 1/2|x1(y2-y3)+x2(y3-y1)+x3(y1-y2)|"
 *  b6 | red bar                                   | Draw  | x460 y430..482
 *  b6 | guardrail 2-line text (15,red,w700)       | T st  | x478 y450 / y476 (baseline gap 26)
 *  b7 | closing (17,green,w700, non-script)       | T mid | x540 y518 "When Δ = 0, the three points are collinear."
 *  b7 | inset: reference line (MUTED) + 3 INK dots| Draw+c| (460,558)-(620,558), dots at 460/540/620
 *  b7 | inset label (12,green, non-script)        | T mid | x540 y579 "Δ = 0 -> collinear"
 *
 * Column separation: diagram occupies x190..511, algebra column x460..1020 starting well clear
 * (gap >=49px) at every row where both are visible; guardrail/closing sit centered below both,
 * each stacked with >=24px clearance from the group above.
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
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { axisD, lineD, roundRectD } from "./math-kit";

const SCALE = 26;
const OX = 221;
const OY = 330; // the x-axis line

function toScreen(x: number, y: number) {
  return { x: OX + x * SCALE, y: OY - y * SCALE };
}

const A = toScreen(1, 1); // (247, 304)
const B = toScreen(4, 5); // (325, 200)
const C = toScreen(7, 2); // (403, 278)
const AF = { x: A.x, y: OY };
const BF = { x: B.x, y: OY };
const CF = { x: C.x, y: OY };

export default function M11Ch09Sec4({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={26} fill={RED} anchor="middle" script>
          {t("Proof: Area of a Triangle", "Proof: Triangle ka Area")}
        </T>
      </Fade>

      {/* beat 1 — setup */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={96} size={15} fill={INK} anchor="middle">
          {t(
            "Drop perpendiculars from each vertex to the x-axis, forming three trapezia.",
            "Har vertex se x-axis tak perpendicular giro — teen trapezia bante hain."
          )}
        </T>
      </Fade>

      {/* beat 2 — THE DIAGRAM */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d={axisD(190, 478, OY)} stroke={INK} sw={2} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={488} y={334} size={12} fill={MUTED} anchor="start">x</T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.8)}
        d={`M ${A.x} ${A.y} L ${B.x} ${B.y} L ${C.x} ${C.y} Z`}
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <Polygon points={`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}`} fill={GREEN} fillOpacity={0.16} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.9)}>
        <Circle cx={A.x} cy={A.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.3)}>
        <T x={231} y={290} size={13} fill={INK} anchor="end" weight={700}>A (1, 1)</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.6)}>
        <Circle cx={B.x} cy={B.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.0)}>
        <T x={325} y={182} size={13} fill={INK} anchor="middle" weight={700}>B (4, 5)</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.3)}>
        <Circle cx={C.x} cy={C.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.7)}>
        <T x={419} y={266} size={13} fill={INK} anchor="start" weight={700}>C (7, 2)</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 4.0)} d={lineD(A.x, A.y, AF.x, AF.y)} stroke={MUTED} sw={1.6} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 4.5)} d={lineD(B.x, B.y, BF.x, BF.y)} stroke={MUTED} sw={1.6} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 5.0)} d={lineD(C.x, C.y, CF.x, CF.y)} stroke={MUTED} sw={1.6} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 5.4)}>
        <T x={AF.x} y={346} size={11} fill={MUTED} anchor="middle">1</T>
        <T x={BF.x} y={346} size={11} fill={MUTED} anchor="middle">4</T>
        <T x={CF.x} y={346} size={11} fill={MUTED} anchor="middle">7</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.8)}>
        <T x={300} y={396} size={12} fill={GREEN} anchor="middle" script>
          {t(
            "The triangle area is the algebraic sum of three trapezium areas.",
            "Triangle ka area teenon trapeziums ka algebraic sum hai."
          )}
        </T>
      </Fade>

      {/* beat 3 — messy 3-term trapezia sum, term by term (dims once beat 5 lands) */}
      <Fade on={beat >= 3} delay={dl(3, 0)} dim={beat >= 5}>
        <T x={600} y={170} size={19} fill={INK} anchor="start" weight={700}>
          Δ = 1/2(x1-x2)(y1+y2)
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)} dim={beat >= 5}>
        <T x={618} y={204} size={19} fill={INK} anchor="start" weight={700}>
          + 1/2(x2-x3)(y2+y3)
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.8)} dim={beat >= 5}>
        <T x={618} y={238} size={19} fill={INK} anchor="start" weight={700}>
          + 1/2(x3-x1)(y3+y1)
        </T>
      </Fade>

      {/* beat 4 — the collapse, with a short arrow pointing at the coming box */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={790} y={276} size={14} fill={AMBER_DARK} anchor="middle" script>
          {t(
            "Expanding and collecting terms collapses this cleanly.",
            "Expand karke collect karo — clutter cancel ho jaata hai."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.9)} d={arrowD(790, 292, 790, 311)} stroke={AMBER} sw={2.2} dur={0.35} />

      {/* beat 5 — LAND: the clean boxed formula (emphasis high) */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={roundRectD(580, 316, 440, 64, 14)} stroke={AMBER} sw={3} dur={0.8} />
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={800} y={354} size={20} fill={INK} anchor="middle" weight={800}>
          Δ = 1/2|x1(y2-y3)+x2(y3-y1)+x3(y1-y2)|
        </T>
      </Fade>

      {/* beat 6 — guardrail (red-margin) */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d="M 460 430 L 460 482" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={478} y={450} size={15} fill={RED} anchor="start" weight={700}>
          {t("The modulus removes orientation sign —", "Modulus orientation sign hata deta hai —")}
        </T>
        <T x={478} y={476} size={15} fill={RED} anchor="start" weight={700}>
          {t("area is never negative.", "area kabhi negative nahi hota.")}
        </T>
      </Fade>

      {/* beat 7 — closing: Δ=0 ⟹ collinear, with a tiny degenerate-case inset */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={518} size={17} fill={GREEN} anchor="middle" weight={700}>
          {t(
            "When Δ = 0, the three points are collinear.",
            "Jab Δ = 0 ho, teeno points collinear hote hain."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d={lineD(460, 558, 620, 558)} stroke={MUTED} sw={1.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.0)}>
        <Circle cx={460} cy={558} r={3.5} fill={INK} />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <Circle cx={540} cy={558} r={3.5} fill={INK} />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.4)}>
        <Circle cx={620} cy={558} r={3.5} fill={INK} />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.7)}>
        <T x={540} y={579} size={12} fill={GREEN} anchor="middle">
          Δ = 0 → collinear
        </T>
      </Fade>
    </Scene>
  );
}
