/**
 * M11 Ch09 · Section 14 — "Worked: Slope & Perpendicularity"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples · two examples, second one JSON-flagged as a speed trap.
 *
 * Numbers verified from JSON:
 *  Ex1: A(-3,2), B(5,-4). m = (-4-2)/(5-(-3)) = -6/8 = -3/4. m<0 => obtuse. ✓
 *  Ex2: known line (0,-3)-(4,5): m2=(5-(-3))/(4-0)=8/4=2. Perp => m1=-1/2.
 *       (1-7)/(k-2) = -1/2 => -6/(k-2)=-1/2 => k-2=12 => k=14. ✓ (m1*m2 = -1/2*2 = -1, genuinely ⊥)
 *       Trap: forgetting the negation (m1=+1/2) is staged, crossed out, then correct -1/2 lands.
 *
 * board_content: item0 (heading) -> always-on title. items1-7 -> beat>=1..7.
 * reveals_english = [0, 6.91, 20.31, 30.29, 39.77, 49.24, 63.91, 82.09].
 *
 * Beats:
 *  1 | Ex1 statement + panel1 axes/A/B dots (build the object)
 *  2 | Ex1 slope formula + panel1 run/rise legs (matching numerator/denominator)
 *  3 | Ex1 red note "obtuse" + panel1 line drawn falling left-to-right (green)
 *  4 | Ex2 statement + panel2 axes/known-line(dots+line)/target-pt(2,7)
 *  5 | m2=2=>m1=-1/2 formula, STAGED speed trap (wrong +1/2 crossed out) + panel2 legs
 *  6 | k=14 (HIGH, chip) + panel2 target point (14,1) + target line drawn (green) — perpendicular reveal
 *  7 | red guardrail note "flip AND negate" + sanity stamp m1·m2=-1 (checkD)
 *
 * Layout plan (single centered text column x540, two side-by-side diagram panels below):
 *  title (always-on)      | T mid script22 red        | x540 y64  box y35.4..75.0
 *  b1 statement            | T mid15                   | x540 y104 box y92.3..108.65 w570
 *  b2 formula               | T mid17 w700               | x540 y140 box y126.74..145.27 w289
 *  b3 red note              | T mid16 w700 red            | x540 y176 box y163.52..180.96 w296
 *  b4 statement             | T mid15                    | x540 y220 box y208.3..224.65 w585
 *  b5a wrong aside          | T mid13 ink                 | x540 y252 box y241.86..256.03 w240.5 + crossD
 *  b5b formula              | T mid16 w700               | x540 y286 box y273.52..290.96 w288
 *  b6 chip (HIGH)           | Chip w300 h44               | x390 y308..352
 *  b7 red note              | T mid16 w700 red            | x540 y392 box y379.52..396.96 w496
 *  panel1 (Ex1) axis box x[205,395] y[425,577], scale19, origin(281,482):
 *    A(-3,2)=(224,444) B(5,-4)=(376,558) foot=(376,444)
 *    line extended (205,429.75)-(395,572.25) [full axis-domain line through A,B, slope -3/4]
 *  panel2 (Ex2) axis box x[676,884] y[428,584], scale13, origin(689,532):
 *    known K1(0,-3)=(689,571) K2(4,5)=(741,467) foot=(741,571)
 *    known line extended (682.5,584)-(760.5,428) [slope 2]
 *    target T1(2,7)=(715,441) T2(14,1)=(871,519) [solved k=14]
 *    target line extended (689,428)-(884,525.5) [slope -1/2] — crosses known line on-screen near (746,457)
 *  Diagrams start y>=425/428, >=27px clear of b7's own text-stack neighbour (b7 sits ABOVE both
 *  panels in the single text column, ends y396.96, gap to panel tops 425/428 is 28/31px).
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
  crossD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, lineD, checkD } from "./math-kit";

/* ---------------- panel 1 (Example 1) ---------------- */
const S1 = 19;
const OX1 = 281;
const OY1 = 482;
function toScreen1(x: number, y: number) {
  return { x: OX1 + S1 * x, y: OY1 - S1 * y };
}
const A1 = toScreen1(-3, 2); // (224,444)
const B1 = toScreen1(5, -4); // (376,558)
const FOOT1 = { x: B1.x, y: A1.y }; // (376,444)
const LINE1_START = toScreen1(-4, 2.75); // (205,429.75) — line y=-0.75x-0.25 at xLeft
const LINE1_END = toScreen1(6, -4.75); // (395,572.25) — at xRight

/* ---------------- panel 2 (Example 2) ---------------- */
const S2 = 13;
const OX2 = 689;
const OY2 = 532;
function toScreen2(x: number, y: number) {
  return { x: OX2 + S2 * x, y: OY2 - S2 * y };
}
const K1 = toScreen2(0, -3); // (689,571)
const K2 = toScreen2(4, 5); // (741,467)
const FOOT2 = { x: K2.x, y: K1.y }; // (741,571)
const T1 = toScreen2(2, 7); // (715,441)
const T2 = toScreen2(14, 1); // (871,519) — uses solved k=14
const KLINE_START = toScreen2(-0.5, -4); // (682.5,584) — known line y=2x-3 at yBottom
const KLINE_END = toScreen2(5.5, 8); // (760.5,428) — at yTop
const TLINE_START = toScreen2(0, 8); // (689,428) — target line y=-x/2+8 at yTop
const TLINE_END = toScreen2(15, 0.5); // (884,525.5) — at xRight

export default function M11Ch09Sec14({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} anchor="middle" script>
          {t("Worked: Slope & Perpendicularity", "Worked: Slope aur Perpendicularity")}
        </T>
      </Fade>

      {/* ===== beat 1 — Example 1 statement + panel1 object (axes, A, B) ===== */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={104} size={15} fill={INK} anchor="middle">
          {t(
            "Example 1: slope of the line through A(-3,2) and B(5,-4); acute or obtuse?",
            "Example 1: A(-3,2) aur B(5,-4) se guzarti line ki slope; acute ya obtuse?"
          )}
        </T>
      </Fade>
      <CartesianAxes on={beat >= 1} delay={dl(1, 0.5)} originX={OX1} originY={OY1} xLeft={205} xRight={395} yTop={425} yBottom={577} showTicks={false} />
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <Circle cx={A1.x} cy={A1.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={210} y={441} size={12} fill={INK} anchor="end" weight={700}>A(-3,2)</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.0)}>
        <Circle cx={B1.x} cy={B1.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.3)}>
        <T x={390} y={561} size={12} fill={INK} anchor="start" weight={700}>B(5,-4)</T>
      </Fade>

      {/* ===== beat 2 — slope formula + panel1 run/rise legs ===== */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={140} size={17} fill={INK} anchor="middle" weight={700}>
          m = (-4-2)/(5-(-3)) = -6/8 = -3/4
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d={lineD(A1.x, A1.y, FOOT1.x, FOOT1.y)} stroke={MUTED} sw={1.6} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={300} y={466} size={11} fill={MUTED} anchor="middle">5-(-3)</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.5)} d={lineD(FOOT1.x, FOOT1.y, B1.x, B1.y)} stroke={MUTED} sw={1.6} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 2.1)}>
        <T x={390} y={501} size={11} fill={MUTED} anchor="start">-4-2</T>
      </Fade>

      {/* ===== beat 3 — red verdict + panel1 line drawn (falls left-to-right, green) ===== */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={540} y={176} size={16} fill={RED} anchor="middle" weight={700}>
          {t("m < 0, so the inclination is obtuse.", "m < 0 hai, isliye inclination obtuse hai.")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0)} d={lineD(LINE1_START.x, LINE1_START.y, LINE1_END.x, LINE1_END.y)} stroke={GREEN} sw={2.4} dur={0.6} />

      {/* ===== beat 4 — Example 2 statement + panel2 known line + target pt (2,7) ===== */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={220} size={15} fill={INK} anchor="middle">
          {t(
            "Example 2: line through (2,7), (k,1) is ⊥ to the line through (0,-3), (4,5).",
            "Example 2: (2,7), (k,1) waali line, (0,-3), (4,5) waali line ke ⊥ hai."
          )}
        </T>
      </Fade>
      <CartesianAxes on={beat >= 4} delay={dl(4, 0.5)} originX={OX2} originY={OY2} xLeft={676} xRight={884} yTop={428} yBottom={584} showTicks={false} />
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <Circle cx={K1.x} cy={K1.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={677} y={558} size={11} fill={INK} anchor="end" weight={700}>(0,-3)</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <Circle cx={K2.x} cy={K2.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.1)}>
        <T x={764} y={450} size={11} fill={INK} anchor="start" weight={700}>(4,5)</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 2.4)} d={lineD(KLINE_START.x, KLINE_START.y, KLINE_END.x, KLINE_END.y)} stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 3.1)}>
        <Circle cx={T1.x} cy={T1.y} r={4} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.4)}>
        <T x={704} y={463} size={11} fill={GREEN} anchor="middle" weight={700}>(2,7)</T>
      </Fade>

      {/* ===== beat 5 — m2=2 => m1=-1/2, STAGED speed trap + panel2 legs ===== */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={252} size={13} fill={INK} anchor="middle">
          {t("m₁ = +1/2 (WRONG - forgot to negate)", "m₁ = +1/2 (GALAT - negate karna bhool gaye)")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.9)} d={crossD(419.75, 241.86, 240.5, 14.17)} stroke={RED} sw={2.2} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={540} y={286} size={16} fill={INK} anchor="middle" weight={700}>
          m₂ = (5-(-3))/(4-0) = 2 ⇒ m₁ = -1/2
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 2.3)} d={lineD(K1.x, K1.y, FOOT2.x, FOOT2.y)} stroke={MUTED} sw={1.4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 2.8)}>
        <T x={715} y={555} size={11} fill={MUTED} anchor="middle">4-0</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 3.1)} d={lineD(FOOT2.x, FOOT2.y, K2.x, K2.y)} stroke={MUTED} sw={1.4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 3.6)}>
        <T x={755} y={519} size={11} fill={MUTED} anchor="start">5-(-3)</T>
      </Fade>

      {/* ===== beat 6 — k=14 (HIGH, chip) + panel2 target point + line landed ===== */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Chip x={390} y={308} w={300} h={44} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={18} script={false}>
          (1-7)/(k-2) = -1/2 ⇒ k = 14
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <Circle cx={T2.x} cy={T2.y} r={4} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={882} y={497} size={11} fill={GREEN} anchor="start" weight={700}>(14,1)</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.3)} d={lineD(TLINE_START.x, TLINE_START.y, TLINE_END.x, TLINE_END.y)} stroke={GREEN} sw={2.4} dur={0.6} />

      {/* ===== beat 7 — guardrail + sanity stamp ===== */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={392} size={16} fill={RED} anchor="middle" weight={700}>
          {t(
            "Flip AND negate - perpendicular slopes have opposite signs.",
            "Flip AND negate - perpendicular slopes ke signs opposite hote hain."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.7)} d={checkD(770, 562, 14)} stroke={GREEN} sw={2.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.1)}>
        <T x={790} y={565} size={12} fill={GREEN} anchor="start" weight={700}>m₁ · m₂ = -1</T>
      </Fade>
    </Scene>
  );
}
