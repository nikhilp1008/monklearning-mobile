/**
 * M11 Ch09 · Section 1 — "Geometry becomes arithmetic"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — opens subtopic 1 (Coordinate Foundations). Reference exemplar for Ch09.
 *
 * board_content seq1 is a heading ("Geometry → Arithmetic on the Plane") — treated as the
 * always-on title (PROGRESS-math7 convention). Remaining 7 items (seq2..seq8) gate at
 * beat>=1..beat>=7. reveals_english = [0, 9.9, 17.41, 26.54, 37.38, 49.92, 56.15, 65.71] (8 values).
 *
 * Illustrative points (not given in JSON — this is the chapter's conceptual opener, no numbers
 * yet): "two towns" A(2,2), B(7,5) in math units, scale 40px/unit, origin(280,430).
 *   toScreen(x,y) = {x: 280+40x, y: 430-40y}
 *   A(2,2) -> (360,350)   B(7,5) -> (560,230)   foot=(B.x,A.y)=(560,350)
 *   P = A + (B-A)/3 = (426.67, 310) — the "1/3 of the way" point for beat5.
 *
 * Beats:
 *  0(title, always-on) | "Geometry → Arithmetic on the Plane"
 *  1 | coordinate plane turns geometry into arithmetic
 *  2 | distance between two towns = subtraction + square root
 *  3 | THE DIAGRAM: axes, two points, dashed right-triangle legs, hypotenuse
 *  4 | guardrail (red-margin): collinear points enclose ZERO area
 *  5 | mark P at 1/3 along AB — the section-formula teaser
 *  6 | three tool chips: Distance / Section Point / Triangle Area
 *  7 | closing line: master these, rest is bookkeeping
 *
 * Layout plan:
 *  b0 | title (26,red,script)             | T mid | x540 y62
 *  b1 | text (16,ink)                     | T mid | x540 y96
 *  b2 | text (15,ink)                     | T mid | x540 y126
 *  b3 | axes c(280,430) 180..600/190..470 | CartesianAxes (no ticks)
 *  b3 | O dot + label                     | circle+T | (280,430) label x268 y440 end
 *  b3 | A dot + label "A(x1, y1)"         | circle+T | (360,350) label x346 y336 end
 *  b3 | B dot + label "B(x2, y2)"         | circle+T | (560,230) label x574 y222 start
 *  b3 | leg1 (horiz, muted)               | Draw | (360,350)->(560,350)
 *  b3 | leg2 (vert, muted)                | Draw | (560,350)->(560,230)
 *  b3 | leg labels "x2-x1" "y2-y1"        | T | (460,368) mid / (572,290) start
 *  b3 | hypotenuse (green)                | Draw | (360,350)->(560,230)
 *  b4 | red bar x700 y200..254            | Draw
 *  b4 | 2-line guardrail text             | T st | x716 y222 / y246
 *  b5 | P dot (amber) + label "P (1/3)"   | circle+T | (426.67,310) label x440 y304 start
 *  b6 | 3 chips: Distance/Section Point/Triangle Area | Chip | cx210/540/870 y510..546
 *  b7 | closing caption (14,amber_dark,script) | T mid | x540 y580
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
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, lineD } from "./math-kit";

const OX = 280;
const OY = 430;
const SCALE = 40;
function toScreen(x: number, y: number) {
  return { x: OX + x * SCALE, y: OY - y * SCALE };
}

const A = toScreen(2, 2); // (360,350)
const B = toScreen(7, 5); // (560,230)
const FOOT = { x: B.x, y: A.y }; // (560,350)
const P = { x: A.x + (B.x - A.x) / 3, y: A.y + (B.y - A.y) / 3 }; // (426.67,310)

export default function M11Ch09Sec1({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={26} fill={RED} anchor="middle" script>
          {t("Geometry → Arithmetic on the Plane", "Coordinate Plane Par, Geometry → Arithmetic")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={96} size={16} fill={INK} anchor="middle">
          {t(
            "The coordinate plane turns every geometry question into a calculation.",
            "Coordinate plane har geometry sawaal ko ek calculation bana deta hai."
          )}
        </T>
      </Fade>

      {/* beat 2 */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={126} size={15} fill={INK} anchor="middle">
          {t(
            "Distance between two towns becomes a subtraction and a square root.",
            "Do towns ke beech distance bas ek subtraction aur square root ban jaata hai."
          )}
        </T>
      </Fade>

      {/* beat 3 — THE DIAGRAM: axes, two points, right-triangle legs, hypotenuse */}
      <CartesianAxes on={beat >= 3} delay={dl(3, 0)} originX={OX} originY={OY} xLeft={180} xRight={600} yTop={190} yBottom={470} showTicks={false} />
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <Circle cx={OX} cy={OY} r={3} fill={INK} />
        <T x={268} y={440} size={11} fill={MUTED} anchor="end">O</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <Circle cx={A.x} cy={A.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={346} y={336} size={13} fill={INK} anchor="end" weight={700}>A(x1, y1)</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <Circle cx={B.x} cy={B.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <T x={574} y={222} size={13} fill={INK} anchor="start" weight={700}>B(x2, y2)</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.7)} d={lineD(A.x, A.y, FOOT.x, FOOT.y)} stroke={MUTED} sw={1.6} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 2.3)} d={lineD(FOOT.x, FOOT.y, B.x, B.y)} stroke={MUTED} sw={1.6} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 2.9)}>
        <T x={460} y={368} size={12} fill={MUTED} anchor="middle">x2 - x1</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.1)}>
        <T x={572} y={290} size={12} fill={MUTED} anchor="start">y2 - y1</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 3.4)} d={lineD(A.x, A.y, B.x, B.y)} stroke={GREEN} sw={2.4} dur={0.6} />

      {/* beat 4 — guardrail: collinear points enclose ZERO area */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d="M 700 200 L 700 254" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={716} y={222} size={15} fill={RED} anchor="start" weight={700}>
          {t("Collinear points enclose ZERO area —", "Collinear points ka area ZERO hota hai —")}
        </T>
        <T x={716} y={246} size={15} fill={RED} anchor="start" weight={700}>
          {t("a feature, not a failure.", "yeh feature hai, kami nahi.")}
        </T>
      </Fade>

      {/* beat 5 — P at 1/3 along AB, the section-formula teaser */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Circle cx={P.x} cy={P.y} r={4.5} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={440} y={304} size={12} fill={AMBER_DARK} anchor="start" weight={700}>P (1/3)</T>
      </Fade>

      {/* beat 6 — three core tools */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Chip x={160} y={510} w={100} h={36} fill="#FCF4E0" stroke={INK} textFill={INK} size={16}>
          {t("Distance", "Distance")}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <Chip x={467} y={510} w={146} h={36} fill="#FCF4E0" stroke={INK} textFill={INK} size={16}>
          {t("Section Point", "Section Point")}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <Chip x={797} y={510} w={146} h={36} fill="#FCF4E0" stroke={INK} textFill={INK} size={16}>
          {t("Triangle Area", "Triangle Area")}
        </Chip>
      </Fade>

      {/* beat 7 — closing */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={580} size={14} fill={AMBER_DARK} anchor="middle" script>
          {t("Master these — the rest is bookkeeping.", "Inhe practice karo — baaki sab bookkeeping hai.")}
        </T>
      </Fade>
    </Scene>
  );
}
