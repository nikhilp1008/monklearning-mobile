/**
 * M11 Ch09 · Section 27 — "Distance is the perpendicular drop"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — opens subtopic 4 (Distance Formulas).
 *
 * Numbers verified (node arithmetic): line 3x + 4y - 12 = 0 (A=3,B=4,C=-12), point
 * P=(5,5). A*Px+B*Py+C = 15+20-12 = 23. A²+B² = 25. Foot Q = P - (23/25)*(3,4)
 *   = (5 - 2.76, 5 - 3.68) = (2.24, 1.32). Check on line: 3(2.24)+4(1.32)-12
 *   = 6.72+5.28-12 = 0 ✓. d = |PQ| = √(2.76² + 3.68²) = √21.16 = 4.6, and the
 *   formula gives |23|/√25 = 23/5 = 4.6 ✓ — matches exactly.
 * Normal check: line direction ∝ (-B,A) = (-4,3); dot with (A,B)=(3,4):
 *   (-4)(3)+(3)(4) = -12+12 = 0 ✓ confirms (A,B) ⊥ the line.
 * Screen mapping: OX=330, OY=480, SCALE=50 px/unit, toScreen(x,y) = (OX+50x, OY-50y).
 *   O=(330,480)  line meets axes at (0,3)->(330,330) and (4,0)->(530,480)
 *   P=(580,230)  Q=(442,414)  M (point on line used for the normal arrow, at
 *   math (1, 2.25)) = (380,367.5); normal direction screen-unit = (0.6,-0.8),
 *   arrow tip = M + 50*(0.6,-0.8) = (410,327.5).
 *   Sanity: Q-P screen = (-138,184), unit (-0.6,0.8) — exactly opposite the
 *   normal-arrow direction (0.6,-0.8), i.e. PQ is parallel to (A,B), which is
 *   exactly the "distance = projection onto the normal" fact beat 2/3 teach.
 *
 * Beats (board_reveal_at_english [0, 6.06, 19.03, 33.71, 44.63, 57.26, 66.65, 77.14],
 * board_reveal_at_hinglish [0, 7.25, 18.94, 33.79, 43.69, 56.15, 65.02, 76.54]):
 *  0 (title, always-on) | "Distance = the Perpendicular Drop"
 *  1 | text: shortest path = perpendicular dropped onto the line
 *      + DIAGRAM setup: axes, O, the line 3x+4y-12=0 (labelled), point P(5,5)
 *  2 | text: vector (A,B) perpendicular to Ax+By+C=0 — normal direction
 *      + normal arrow drawn from a point on the line, labelled "(A, B)"
 *  3 | THE DIAGRAM lands: dashed(MUTED) foot segment PQ, Q on the line, "d" label
 *  4 | formula d = |Ax1+By1+C| / √(A²+B²), landed with our own P/line numbers
 *  5 | text + mini-diagram: parallel lines share one normal -> distance constant
 *  6 | text + mini-diagram: symmetric form "stand at P, face θ, walk r"
 *  7 | guardrail (red-margin, boxed): all three give PERPENDICULAR distance, never a slant
 *
 * Layout plan (all coords in viewBox units):
 *  b0 | title (24,red,script)                | T mid   | x540 y66
 *  b1 | text (16,ink)                         | T mid   | x540 y106
 *  b1 | axes c(330,480) 200..650/180..500     | CartesianAxes (no ticks)
 *  b1 | O dot + label                         | circle+T | (330,480) label x316 y494 end
 *  b1 | line (330,330)->(530,480)             | Draw ink | + label "3x+4y-12=0" x545 y495 start
 *  b1 | P dot + label "P(5, 5)"               | circle+T | (580,230) label x596 y222 start
 *  b2 | text (15,ink)                         | T mid   | x540 y138
 *  b2 | normal arrow (380,367.5)->(410,327.5) | Draw amber_dark | label "(A, B)" x425 y307 start
 *  b3 | dashed(MUTED) PQ (580,230)->(442,414) | Draw
 *  b3 | Q dot (green) + label "Q"             | circle+T | (442,414) label x422 y432 end
 *  b3 | "d" label (green)                     | T | x524 y332 start
 *  b4 | formula (18,ink,w700)                 | T st | x700 y210
 *  b4 | subtext (13,muted)                    | T st | x700 y240
 *  b4 | worked instance (13,green,w700)       | T st | x700 y270
 *  b5 | header (14,ink)                       | T st | x700 y312
 *  b5 | LineA (740,330)->(980,330) ink         | Draw
 *  b5 | LineB (740,370)->(980,370) ink         | Draw
 *  b5 | connector arrow (860,330)->(860,370)   | Draw amber_dark
 *  b5 | "d = constant" (13,green)              | T st | x880 y354
 *  b6 | P' dot (740,458)                       | circle
 *  b6 | baseline ray (740,458)->(840,458) muted| Draw
 *  b6 | angle ray (740,458)->ray_end amber-free | Draw ink (arrowD)
 *  b6 | angle arc r26 0..35deg                 | Draw amber_dark
 *  b6 | θ label (12,amber_dark)                | T st | x779 y449
 *  b6 | r label (12,ink,w700)                  | T st | x822 y404
 *  b6 | P label (12,ink,w700)                  | T end | x718 y482
 *  b6 | caption (13,amber_dark,script)          | T st | x700 y519
 *  b7 | boxed guardrail: rect x260 y556 w560 h36 red stroke/cream fill
 *  b7 | text (15,red,w700)                     | T mid | x540 y579
 */

import React from "react";
import { Circle, Rect } from 'react-native-svg';
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
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, lineD, angleArcD, pointOnCircle } from "./math-kit";

/* main diagram: line 3x + 4y - 12 = 0, point P(5,5), foot Q(2.24,1.32) */
const OX = 330;
const OY = 480;
const SCALE = 50;
function toScreen(x: number, y: number) {
  return { x: OX + x * SCALE, y: OY - y * SCALE };
}

const O = toScreen(0, 0); // (330,480)
const LINE_A = toScreen(0, 3); // (330,330) — y-intercept
const LINE_B = toScreen(4, 0); // (530,480) — x-intercept
const P = toScreen(5, 5); // (580,230)
const Q = toScreen(2.24, 1.32); // (442,414) — verified foot of perpendicular
const M = toScreen(1, 2.25); // (380,367.5) — a point on the line, normal arrow's tail
const NORMAL_END = { x: M.x + 30, y: M.y - 40 }; // M + 50*(0.6,-0.8), unit normal direction

/* mini symmetric-form diagram: P', angle θ, walk r */
const SYM_P = { x: 740, y: 458 };
const THETA = (35 * Math.PI) / 180;
const RAY_LEN = 85;
const ARC_R = 26;
const RAY_END = pointOnCircle(SYM_P.x, SYM_P.y, RAY_LEN, THETA); // ≈ (809.6, 409.3)

export default function M11Ch09Sec27({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={66} size={24} fill={RED} anchor="middle" script>
          {t("Distance = the Perpendicular Drop", "Distance = Perpendicular Drop Hi Hai")}
        </T>
      </Fade>

      {/* beat 1 — shortest path = perpendicular; set the stage: axes, line, P */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={106} size={16} fill={INK} anchor="middle">
          {t(
            "The distance from a point to a line is the shortest path — the perpendicular dropped onto it.",
            "Point se line tak ki distance hamesha shortest path hoti hai — seedha perpendicular gira do."
          )}
        </T>
      </Fade>
      <CartesianAxes on={beat >= 1} delay={dl(1, 0.3)} originX={OX} originY={OY} xLeft={200} xRight={650} yTop={180} yBottom={500} showTicks={false} />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <Circle cx={O.x} cy={O.y} r={3} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <T x={316} y={494} size={11} fill={MUTED} anchor="end">O</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.5)} d={lineD(LINE_A.x, LINE_A.y, LINE_B.x, LINE_B.y)} stroke={INK} sw={2.4} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={545} y={495} size={13} fill={INK} anchor="start">3x + 4y - 12 = 0</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <Circle cx={P.x} cy={P.y} r={4.5} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.9)}>
        <T x={596} y={222} size={13} fill={INK} anchor="start" weight={700}>P(5, 5)</T>
      </Fade>

      {/* beat 2 — the normal vector (A,B) */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={138} size={15} fill={INK} anchor="middle">
          {t(
            "The vector (A, B) points perpendicular to Ax + By + C = 0 — that's its normal direction.",
            "Vector (A, B) hamesha Ax + By + C = 0 ke perpendicular hota hai — yehi uski normal direction hai."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d={arrowD(M.x, M.y, NORMAL_END.x, NORMAL_END.y)} stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={425} y={307} size={12} fill={AMBER_DARK} anchor="start" weight={700}>(A, B)</T>
      </Fade>

      {/* beat 3 — land the diagram: foot Q, dashed(muted) PQ, "d" */}
      <Draw on={beat >= 3} delay={dl(3, 0)} d={lineD(P.x, P.y, Q.x, Q.y)} stroke={MUTED} sw={1.8} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <Circle cx={Q.x} cy={Q.y} r={4.5} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={422} y={432} size={13} fill={GREEN} anchor="end" weight={700}>Q</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.3)}>
        <T x={524} y={332} size={13} fill={GREEN} anchor="start" weight={700}>d</T>
      </Fade>

      {/* beat 4 — land the formula, then check it against our own P and line */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={700} y={210} size={18} fill={INK} anchor="start" weight={700}>
          d = |Ax₁ + By₁ + C| / √(A² + B²)
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={700} y={240} size={13} fill={MUTED} anchor="start">
          {t("For P(5, 5) on our line:", "Hamare P(5, 5) ke liye:")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={700} y={270} size={13} fill={GREEN} anchor="start" weight={700}>
          d = |3(5) + 4(5) - 12| / 5 = |23| / 5 = 4.6
        </T>
      </Fade>

      {/* beat 5 — parallel lines share one normal -> constant distance */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={700} y={312} size={14} fill={INK} anchor="start">
          {t("Parallel lines share one normal:", "Parallel lines ka normal same hota hai:")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.5)} d={lineD(740, 330, 980, 330)} stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 0.9)} d={lineD(740, 370, 980, 370)} stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 1.3)} d={arrowD(860, 330, 860, 370)} stroke={AMBER_DARK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 1.7)}>
        <T x={880} y={354} size={13} fill={GREEN} anchor="start" weight={700}>d = constant</T>
      </Fade>

      {/* beat 6 — symmetric form: stand at P, face θ, walk r */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Circle cx={SYM_P.x} cy={SYM_P.y} r={4} fill={INK} />
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.4)} d={lineD(SYM_P.x, SYM_P.y, SYM_P.x + 100, SYM_P.y)} stroke={MUTED} sw={1.4} dur={0.4} />
      <Draw on={beat >= 6} delay={dl(6, 0.9)} d={arrowD(SYM_P.x, SYM_P.y, RAY_END.x, RAY_END.y)} stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 6} delay={dl(6, 1.4)} d={angleArcD(SYM_P.x, SYM_P.y, ARC_R, 0, THETA)} stroke={AMBER_DARK} sw={1.8} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <T x={779} y={449} size={12} fill={AMBER_DARK} anchor="start" weight={700}>θ</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.1)}>
        <T x={822} y={404} size={12} fill={INK} anchor="start" weight={700}>r</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.4)}>
        <T x={718} y={482} size={12} fill={INK} anchor="end" weight={700}>P</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.8)}>
        <T x={700} y={519} size={13} fill={AMBER_DARK} anchor="start" script>
          {t("Stand at P, face θ, walk r.", "P pe khade ho, θ taraf mooh karke r chalo.")}
        </T>
      </Fade>

      {/* beat 7 — guardrail: always perpendicular, never a slant */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <Rect x={260} y={556} width={560} height={36} rx={10} fill={CREAM} stroke={RED} strokeWidth={2} />
        <T x={540} y={579} size={15} fill={RED} anchor="middle" weight={700}>
          {t(
            "All three tools measure the PERPENDICULAR distance — never a slant.",
            "Teeno tools perpendicular distance napte hain — kabhi slant nahi."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
