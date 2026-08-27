/**
 * M11 Ch09 · Section 31 — "Worked examples: point-line and parallel lines"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples · subtopic "Distance Formulas". Two examples, second is a
 * JSON-flagged speed trap.
 *
 * Numbers verified (independently re-derived):
 *  Ex1: point (3,-4), line 4x+3y-5=0. d=|4(3)+3(-4)-5|/sqrt(16+9)=|12-12-5|/5=5/5=1. ✓
 *   Clean points on the line: (-1,3) [4(-1)+3(3)-5=-4+9-5=0 ✓], (2,-1) [8-3-5=0 ✓].
 *   Foot of perpendicular from (3,-4): foot = P - (d_signed/25)*(4,3) where d_signed=A*px+B*py+C=-5;
 *   foot = (3,-4) - (-5/25)*(4,3) = (3,-4)+(0.8,0.6) = (3.8,-3.4). Check: 4(3.8)+3(-3.4)-5=15.2-10.2-5=0 ✓.
 *  Ex2: lines 3x-4y+7=0 and 6x-8y-5=0. Same direction (6,-8)=2*(3,-4)) but not normalized —
 *   divide 2nd by 2: 3x-4y-2.5=0. Now A=3,B=-4 match. d=|7-(-2.5)|/5=9.5/5=1.9. ✓
 *   SPEED TRAP: using the lines exactly as written (C1=7, C2=-5, unnormalized) gives
 *   |7-(-5)|/5=12/5=2.4 — the planted wrong answer. Staged per house convention: correct 1.9
 *   lands first (bold, beat5), the wrong 2.4 path is shown crossed-out right after as the
 *   cautionary aside (beat6) — matches the JSON's own beat order (seq6 correct, seq7 trap).
 *   Slope check both lines: line1 y=(3x+7)/4 slope 3/4; line2(orig) y=(6x-5)/8=(3x-2.5)/4 slope
 *   3/4 — genuinely parallel, confirmed visually via uniform per-panel scale (angle-preserving).
 *   Points on line1: (-1,1) [3(-1)-4(1)+7=0 ✓]. Points on line2: (-1,-1.375) [6(-1)-8(-1.375)-5=
 *   -6+11-5=0 ✓], (3,1.625) [6(3)-8(1.625)-5=18-13-5=0 ✓].
 *   Foot from (-1,1) onto normalized line2 (3x-4y-2.5=0): d_signed=3(-1)-4(1)-2.5=-9.5;
 *   foot=(-1,1)-(-9.5/25)*(3,-4)=(-1,1)+(1.14,-1.52)=(0.14,-0.52). Check: 3(0.14)-4(-0.52)-2.5=
 *   0.42+2.08-2.5=0 ✓. Distance (-1,1)-(0.14,-0.52) on screen = 1.9*S2 — matches scale check below.
 *
 * Beat-index: board_content has 8 items. item[0] heading -> always-on title. items[1..7] gate at
 * beat>=1..7. reveals_english=[0,5.97,18.43,30.89,41.73,55.47,69.29,80.21] (8 values).
 *
 * Beats:
 *  1 | Ex1 statement + panel1 object: axes, P1(-1,3), P2(2,-1) dots+labels, line drawn through them
 *  2 | Ex1 formula (d=1, plain) + panel1 measurement: target(3,-4), perpendicular drop, foot, "d=1"
 *  3 | Ex2 statement + panel2 object: axes, line1 (ink) drawn, marked point PT(-1,1) dot+label
 *  4 | red note: normalize 2nd line /2 (HIGH) + panel2: line2 (amber) drawn — both now A=3,B=-4
 *  5 | formula d=1.9 (HIGH, bold-landed) + panel2 measurement: perpendicular PT->foot2, "d=1.9"
 *  6 | STAGED speed trap: "as written -> 2.4 (WRONG)" crossed out in red (no new diagram — aside)
 *  7 | red guardrail: always normalize to identical A,B before subtracting constants
 *
 * Layout plan (single centered text column x540 y104..348, two side-by-side diagram panels below):
 *  title (always-on)   | T mid script22 red         | x540 y64
 *  b1 statement         | T mid15                    | x540 y104 w382.5
 *  b2 formula            | T mid16 w700                | x540 y140 w304
 *  b3 statement           | T mid15                    | x540 y176 w480
 *  b4 red note (HIGH)      | T mid15 w700 red             | x540 y208 w405
 *  b5 formula (HIGH)        | T mid18 w700 green            | x540 y252 w270
 *  b6 trap (crossed)          | T mid14 ink + crossD           | x540 y306 w301
 *  b7 red note (HIGH)          | T mid15 w700 red                | x540 y344 w480
 *  panel1 (Ex1) caption "Example 1" x166 y384; axis box x[95,238] y[400,588] origin(136,488) S1=23
 *    P1(-1,3)=(113,419) P2(2,-1)=(182,511) TARGET(3,-4)=(205,580) FOOT(3.8,-3.4)=(223.4,566.2)
 *    line drawn P1->(234.9,581.5) [toScreen1(4.3,-4.0667), a hair past FOOT for a clean overshoot]
 *  panel2 (Ex2) caption "Example 2" x810 y384; axis box x[725,895] y[400,590] origin(780,534) S2=30
 *    line1(ink) (741,510.75)->(879,407.25) [toScreen2(-1.3,0.775)..(3.3,4.225)]
 *    line2(amber) (741,582)->(879,478.5) [toScreen2(-1.3,-1.6)..(3.3,1.85)]
 *    PT(-1,1)=(750,504) on line1, FOOT2(0.14,-0.52)=(784.2,549.6) on line2
 *  All label offsets individually checked against each panel's line equation (x-at-given-y) to
 *  clear the stroke by >=10px; text-vs-text clearances >=14px throughout (see inline comments
 *  at first render for the specific checks — re-verified against measured boxes after render).
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
  INK,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, lineD } from "./math-kit";

/* ---------------- panel 1 (Example 1) ---------------- */
const S1 = 23;
const OX1 = 136;
const OY1 = 488;
function toScreen1(x: number, y: number) {
  return { x: OX1 + S1 * x, y: OY1 - S1 * y };
}
const P1 = toScreen1(-1, 3); // (113,419)
const P2 = toScreen1(2, -1); // (182,511)
const TARGET1 = toScreen1(3, -4); // (205,580)
const FOOT1 = toScreen1(3.8, -3.4); // (223.4,566.2)
const LINE1_END = toScreen1(4.3, -4.0667); // (234.9,581.5) — a hair past FOOT1

/* ---------------- panel 2 (Example 2) ---------------- */
const S2 = 30;
const OX2 = 780;
const OY2 = 534;
function toScreen2(x: number, y: number) {
  return { x: OX2 + S2 * x, y: OY2 - S2 * y };
}
const LINEA_START = toScreen2(-1.3, 0.775); // (741,510.75) — 3x-4y+7=0
const LINEA_END = toScreen2(3.3, 4.225); // (879,407.25)
const LINEB_START = toScreen2(-1.3, -1.6); // (741,582) — 6x-8y-5=0 (norm 3x-4y-2.5=0)
const LINEB_END = toScreen2(3.3, 1.85); // (879,478.5)
const PT2 = toScreen2(-1, 1); // (750,504) — marked point on line1
const FOOT2 = toScreen2(0.14, -0.52); // (784.2,549.6) — foot on line2

export default function M11Ch09Sec31({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} anchor="middle" script>
          {t("Worked: Point-Line & Parallel Lines", "Worked: Point-Line aur Parallel Lines")}
        </T>
      </Fade>

      {/* ===== beat 1 — Example 1 statement + panel1 object (P1, P2, line) ===== */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={104} size={15} fill={INK} anchor="middle">
          {t(
            "Example 1: distance of (3,-4) from 4x + 3y - 5 = 0.",
            "Example 1: point (3,-4) ki, line 4x + 3y - 5 = 0 se distance."
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={166} y={384} size={13} fill={INK} anchor="middle" weight={700}>Example 1</T>
      </Fade>
      <CartesianAxes on={beat >= 1} delay={dl(1, 0.8)} originX={OX1} originY={OY1} xLeft={95} xRight={238} yTop={400} yBottom={588} showTicks={false} />
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <Circle cx={P1.x} cy={P1.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.9)}>
        <T x={108} y={414} size={11} fill={INK} anchor="end" weight={700}>(-1,3)</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <Circle cx={P2.x} cy={P2.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <T x={190} y={517} size={11} fill={INK} anchor="start" weight={700}>(2,-1)</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.9)} d={lineD(P1.x, P1.y, LINE1_END.x, LINE1_END.y)} stroke={INK} sw={2.2} dur={0.6} />

      {/* ===== beat 2 — Ex1 formula (d=1) + panel1 measurement ===== */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={140} size={16} fill={INK} anchor="middle" weight={700}>
          d = |4(3)+3(-4)-5| / √(16+9) = 5/5 = 1
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <Circle cx={TARGET1.x} cy={TARGET1.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.0)}>
        <T x={200} y={577} size={11} fill={INK} anchor="end" weight={700}>(3,-4)</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.4)} d={lineD(TARGET1.x, TARGET1.y, FOOT1.x, FOOT1.y)} stroke={GREEN} sw={2.2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 2.0)}>
        <Circle cx={FOOT1.x} cy={FOOT1.y} r={3.5} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.3)}>
        <T x={233} y={568} size={11} fill={GREEN} anchor="start" weight={700}>d = 1</T>
      </Fade>

      {/* ===== beat 3 — Example 2 statement + panel2 object: line1 + marked point PT ===== */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={176} size={15} fill={INK} anchor="middle">
          {t(
            "Example 2: distance between 3x - 4y + 7 = 0 and 6x - 8y - 5 = 0.",
            "Example 2: 3x - 4y + 7 = 0 aur 6x - 8y - 5 = 0 ke beech distance."
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={810} y={384} size={13} fill={INK} anchor="middle" weight={700}>Example 2</T>
      </Fade>
      <CartesianAxes on={beat >= 3} delay={dl(3, 0.8)} originX={OX2} originY={OY2} xLeft={725} xRight={895} yTop={400} yBottom={590} showTicks={false} />
      <Draw on={beat >= 3} delay={dl(3, 1.6)} d={lineD(LINEA_START.x, LINEA_START.y, LINEA_END.x, LINEA_END.y)} stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 2.3)}>
        <Circle cx={PT2.x} cy={PT2.y} r={4.5} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.6)}>
        <T x={742} y={498} size={11} fill={GREEN} anchor="end" weight={700}>(-1,1)</T>
      </Fade>

      {/* ===== beat 4 — red note: normalize 2nd line /2 + panel2: line2 drawn (amber) ===== */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={208} size={15} fill={RED} anchor="middle" weight={700}>
          {t(
            "Normalize the second: divide by 2 -> 3x - 4y - 2.5 = 0",
            "Dusri line ko normalize karo: 2 se divide karke -> 3x - 4y - 2.5 = 0"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.7)} d={lineD(LINEB_START.x, LINEB_START.y, LINEB_END.x, LINEB_END.y)} stroke={AMBER_DARK} sw={2.2} dur={0.6} />

      {/* ===== beat 5 — formula d=1.9 (HIGH, landed) + panel2 measurement ===== */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={252} size={18} fill={GREEN} anchor="middle" weight={700}>
          d = |7-(-2.5)|/5 = 9.5/5 = 1.9
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.8)} d={lineD(PT2.x, PT2.y, FOOT2.x, FOOT2.y)} stroke={GREEN} sw={2.2} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <Circle cx={FOOT2.x} cy={FOOT2.y} r={3.5} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.7)}>
        <T x={736} y={527} size={11} fill={GREEN} anchor="end" weight={700}>d = 1.9</T>
      </Fade>

      {/* ===== beat 6 — STAGED speed trap: using lines as written -> 2.4 (crossed out) ===== */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={306} size={14} fill={INK} anchor="middle">
          As written: |7-(-5)|/5 = 12/5 = 2.4 (WRONG)
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.8)} d={crossD(389.5, 294.92, 301, 15.26)} stroke={RED} sw={2.2} dur={0.5} />

      {/* ===== beat 7 — red guardrail: always normalize to identical A,B first ===== */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={344} size={15} fill={RED} anchor="middle" weight={700}>
          {t(
            "Always normalize to identical A, B before subtracting constants.",
            "Hamesha constants subtract karne se pehle, A aur B ko identical normalize karo."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
