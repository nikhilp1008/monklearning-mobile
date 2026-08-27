/**
 * M11 Ch09 · Section 58 — "Worked example: reflected ray (advanced)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples (Advanced). board_content has 8 items: seq1 heading -> always-on
 * title. seq2..seq8 gate at beat>=1..7. reveals_english=[0,8.87,20.74,30.21,36.01,45.74,61.61,70.91],
 * reveals_hinglish=[0,8.96,23.38,32.34,38.23,47.36,59.73,71.34] (confirmed against Supabase
 * lesson_sections row directly, matching the dispatch brief exactly).
 *
 * Arithmetic (independently reproduced, matches the dispatch brief's hand-verification exactly):
 *  Incident ray x-2y+5=0, mirror 3x-4y+4=0. From incident ray x=2y-5; substitute into mirror:
 *    3(2y-5)-4y+4=0 -> 6y-15-4y+4=0 -> 2y-11=0 -> y=11/2, x=2(11/2)-5=11-5=6. I=(6,11/2).
 *  A(-5,0) is genuinely on the incident ray: -5-2(0)+5=0 ✓.
 *  Reflect A in mirror (a=3,b=-4,c=4): aAx+bAy+c = 3(-5)+(-4)(0)+4 = -15+0+4 = -11 (board text
 *    "-15+4=-11" just omits the zero b·Ay term — confirmed correct). a²+b²=9+16=25.
 *    step = -2(aAx+bAy+c)/(a²+b²) = -2(-11)/25 = 22/25.
 *    A' = (Ax+step·a, Ay+step·b) = (-5+(22/25)*3, 0+(22/25)*(-4)) = (-5+66/25, -88/25)
 *       = (-125/25+66/25, -88/25) = (-59/25, -88/25).
 *  Foot of perpendicular (= midpoint of A,A', used for the diagram's construction line):
 *    ((-5+-59/25)/2, (0+-88/25)/2) = ((-125/25-59/25)/2, -44/25) = (-184/50, -44/25)
 *       = (-3.68, -1.76). Check on mirror: 3(-3.68)-4(-1.76)+4 = -11.04+7.04+4 = 0 ✓.
 *  Reflected ray through I=(6,11/2) and A'=(-59/25,-88/25): 41x-38y-37=0 passes through BOTH —
 *    at I: 41(6)-38(11/2)-37 = 246-209-37 = 0 ✓ (38*11/2 = 19*11 = 209).
 *    at A': 41(-59/25)-38(-88/25)-37 = (-2419+3344)/25-37 = 925/25-37 = 37-37 = 0 ✓.
 *
 * DIAGRAM screen-space verification (not just algebraic): toScreen is an affine map
 * (x,y) -> (OX+S*x, OY-S*y), and affine maps preserve collinearity exactly. Since I and A'
 * both satisfy 41x-38y-37=0 exactly (shown above with exact fractions, not decimals), their
 * screen images are exactly collinear with any third point computed from the same line
 * equation — so the drawn GREEN segment (built from two points solved from 41x-38y-37=0)
 * genuinely passes through both plotted dots, not just "close by construction". Cross-checked
 * numerically too: screen slope from I(996,182) to A'(695.04,506.72) is
 * (506.72-182)/(695.04-996) = 324.72/-300.96 = -1.07895, and the extended endpoint at math
 * (-3.5,-4.75) [which itself satisfies 41x-38y-37=0: 41(-3.5)-38(-4.75)-37 = -143.5+180.5-37=0]
 * gives screen (654,551); slope I->ext = (551-182)/(654-996) = 369/-342 = -1.07895 — identical,
 * confirming all three plotted points sit on one straight screen line. (Same "genuinely
 * verified on screen" rigor as Sec27's perpendicularity dot-product check.)
 *  Also: foot is the exact midpoint of A and A' in math space, so toScreen(foot) must equal
 *  the screen-midpoint of toScreen(A) and toScreen(A') — checked: midpoint of A-screen(600,380)
 *  and A'-screen(695.04,506.72) = (647.52,443.36) = FOOT-screen, computed independently from
 *  foot's own math coordinates. Exact match confirms the single dashed A-to-A' construction
 *  line legitimately passes through the foot marker sitting on the mirror.
 *
 * Screen mapping: OX=780, OY=380, SCALE=36 px/unit. toScreen(x,y) = (OX+36x, OY-36y).
 *   O(0,0)->(780,380)  I(6,5.5)->(996,182)  A(-5,0)->(600,380)
 *   FOOT(-3.68,-1.76)->(647.52,443.36)  A'(-2.36,-3.52)->(695.04,506.72)
 *   incident ray drawn segment: toScreen(-5.5,-0.25)=(582,389) -> I(996,182) [ray travels to I]
 *   mirror drawn segment: toScreen(-6,-3.5)=(564,506) -> toScreen(7,6.25)=(1032,155)
 *   reflected ray drawn segment: I(996,182) -> toScreen(-3.5,-4.75)=(654,551) [passes through A']
 *
 * Row-band deviation (documented per spec Step 3, matching Sec42's precedent): this is a
 * genuinely dense multi-step derivation (solve a system, reflect a point, find a line through
 * two points), so instead of the default single "main demo" band it's split into a
 * derivation-left / diagram-right layout for the whole body:
 *  30-80    title (always-on)
 *  92-108   problem statement (full width, above both columns)
 *  125-570  RIGHT: diagram column, x560-1035 — axes, incident ray, mirror, I, A, construction
 *           line to A', final reflected ray
 *  150-462  LEFT: derivation column, x60 start-anchored, width to ~520 — text/formula stack
 *
 * Beats:
 *  0(title, always-on) | "Worked: Reflected Ray (Advanced)"
 *  1 | problem statement (full width) + THE OBJECT: axes, O, incident ray (labelled), mirror
 *      (labelled, amber — the "structure" doing the reflecting)
 *  2 | text: incidence point I found by solving the two lines together + point I appears
 *      (unlabeled dot first — build before state)
 *  3 | formula I=(6,11/2) (left) + "I" label lands on the diagram
 *  4 | text: take A(-5,0) on the incident ray, reflect it in the mirror + point A appears
 *      (sits exactly on the already-drawn incident-ray line — visual self-check)
 *  5 | formula: aAx+bAy+c=-15+4=-11, step=22/25 (left) + dashed construction line A->foot
 *      draws, foot marker lands on the mirror
 *  6 | formula A'=(-59/25,-88/25) (left) + dashed construction continues foot->A', A' dot+label
 *  7 | LAND (HIGH emphasis, GREEN): boxed "41x - 38y - 37 = 0" through I and A' (left) +
 *      green reflected-ray line draws through both plotted points on the diagram, both ringed
 *
 * Layout plan (all coords viewBox units):
 *  b0 | title (24,red,script)                    | T mid   | x540 y58
 *  b1 | problem statement (15,ink)                | T mid   | x540 y104
 *  b1 | axes o(780,380) 560..1035/125..570        | CartesianAxes (no ticks)
 *  b1 | O dot + label                              | circle+T | (780,380) label x766 y394 end
 *  b1 | incident ray (582,389)->(996,182) ink      | Draw | label x840 y240 end "x - 2y + 5 = 0"
 *  b1 | mirror (564,506)->(1032,155) amber_dark    | Draw | label x568 y528 start "3x - 4y + 4 = 0"
 *  b2 | left text (15,ink)                         | T mid  | x290 y150 (start-anchored col x60)
 *  b2 | I dot (amber_dark, unlabeled)               | circle | (996,182)
 *  b3 | left formula "I = (6, 11/2)" (19,amber_dark,w700) | T st | x60 y190
 *  b3 | "I" label lands                             | T st | x1005 y150 (amber_dark)
 *  b4 | left text 2-line (15,ink)                   | T st | x60 y232 / y258
 *  b4 | A dot (ink) + label "A(-5,0)"                | circle+T | (600,380) label x590 y360 end
 *  b5 | left formula (16,ink)                        | T st | x60 y302
 *  b5 | dashed A->foot (muted)                       | Fade path | (600,380)->(647.52,443.36)
 *  b5 | foot dot (muted, small)                      | circle | (647.52,443.36)
 *  b6 | left formula "A' = (-59/25, -88/25)" (19,amber_dark,w700) | T st | x60 y346
 *  b6 | dashed foot->A' (muted)                      | Fade path | (647.52,443.36)->(695.04,506.72)
 *  b6 | A' dot (amber_dark) + label "A'"              | circle+T | (695.04,506.72) label x716 y500 start
 *  b7 | left lead text (15,ink)                       | T st | x60 y396
 *  b7 | boxed chip "41x - 38y - 37 = 0" (20,green)     | Chip | x60 y420 w220 h42
 *  b7 | green reflected ray I->beyond A'               | Draw | (996,182)->(654,551)
 *  b7 | green rings around I and A'                    | Draw ringD | (996,182) / (695.04,506.72)
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
  ringD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, lineD } from "./math-kit";

const OX = 780;
const OY = 380;
const SCALE = 36;
function toScreen(x: number, y: number) {
  return { x: OX + x * SCALE, y: OY - y * SCALE };
}

const O = toScreen(0, 0); // (780, 380)
const I = toScreen(6, 5.5); // (996, 182)
const A = toScreen(-5, 0); // (600, 380)
const FOOT = toScreen(-3.68, -1.76); // (647.52, 443.36)
const APRIME = toScreen(-2.36, -3.52); // (695.04, 506.72)

const INC_START = toScreen(-5.5, -0.25); // (582, 389)
const MIR_START = toScreen(-6, -3.5); // (564, 506)
const MIR_END = toScreen(7, 6.25); // (1032, 155)
const REFLECT_END = toScreen(-3.5, -4.75); // (654, 551)

export default function M11Ch09Sec58({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={24} fill={RED} anchor="middle" script>
          {t("Worked: Reflected Ray (Advanced)", "Worked: Reflected Ray (Advanced)")}
        </T>
      </Fade>

      {/* beat 1 — problem statement + THE OBJECT: axes, incident ray, mirror */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={104} size={15} fill={INK} anchor="middle">
          {t(
            "A ray along x - 2y + 5 = 0 strikes the mirror 3x - 4y + 4 = 0. Find the reflected ray.",
            "Ray x - 2y + 5 = 0 ke saath chalti hai, mirror 3x - 4y + 4 = 0 se takraati hai. Reflected ray dhoondo."
          )}
        </T>
      </Fade>
      <CartesianAxes on={beat >= 1} delay={dl(1, 0)} originX={OX} originY={OY} xLeft={560} xRight={1035} yTop={125} yBottom={570} showTicks={false} />
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Circle cx={O.x} cy={O.y} r={3} fill={INK} />
        <T x={766} y={394} size={11} fill={MUTED} anchor="end">O</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d={lineD(INC_START.x, INC_START.y, I.x, I.y)} stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <T x={840} y={240} size={11} fill={INK} anchor="end">x - 2y + 5 = 0</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.7)} d={lineD(MIR_START.x, MIR_START.y, MIR_END.x, MIR_END.y)} stroke={AMBER_DARK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <T x={568} y={528} size={11} fill={AMBER_DARK} anchor="start">3x - 4y + 4 = 0</T>
      </Fade>

      {/* beat 2 — incidence point found by solving the two lines together (object before label) */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={290} y={150} size={15} fill={INK} anchor="middle">
          {t(
            "Incidence point I: solve the two lines together.",
            "Incidence point I: dono lines ko saath solve karo."
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <Circle cx={I.x} cy={I.y} r={4.5} fill={AMBER_DARK} />
      </Fade>

      {/* beat 3 — I = (6, 11/2) lands, label appears on the diagram */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={60} y={190} size={19} fill={AMBER_DARK} anchor="start" weight={700}>I = (6, 11/2)</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={1005} y={150} size={13} fill={AMBER_DARK} anchor="start" weight={700}>I</T>
      </Fade>

      {/* beat 4 — take A(-5,0) on the incident ray, reflect it in the mirror */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={60} y={232} size={15} fill={INK} anchor="start">
          {t("Take A(-5,0) on the incident ray -", "Incident ray par A(-5,0) lo -")}
        </T>
        <T x={60} y={258} size={15} fill={INK} anchor="start">
          {t("reflect it in the mirror.", "mirror mein reflect karo.")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <Circle cx={A.x} cy={A.y} r={4.5} fill={INK} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={590} y={360} size={12} fill={INK} anchor="end" weight={700}>A(-5,0)</T>
      </Fade>

      {/* beat 5 — aAx+bAy+c = -15+4 = -11, step = 22/25; construction line A -> foot */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={60} y={302} size={16} fill={INK} anchor="start">
          a·Ax + b·Ay + c = -15 + 4 = -11,   step = 22/25
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <Path d={lineD(A.x, A.y, FOOT.x, FOOT.y)} stroke={MUTED} strokeWidth={1.8} strokeDasharray="6 5" fill="none" />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <Circle cx={FOOT.x} cy={FOOT.y} r={3.5} fill={MUTED} />
      </Fade>

      {/* beat 6 — A' = (-59/25, -88/25) lands; construction line foot -> A' */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={60} y={346} size={19} fill={AMBER_DARK} anchor="start" weight={700}>A' = (-59/25, -88/25)</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <Path d={lineD(FOOT.x, FOOT.y, APRIME.x, APRIME.y)} stroke={MUTED} strokeWidth={1.8} strokeDasharray="6 5" fill="none" />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.0)}>
        <Circle cx={APRIME.x} cy={APRIME.y} r={4.5} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.4)}>
        <T x={716} y={500} size={12} fill={AMBER_DARK} anchor="start" weight={700}>A'</T>
      </Fade>

      {/* beat 7 — LAND: reflected ray through I and A', boxed, green */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={60} y={396} size={15} fill={INK} anchor="start">
          {t("Reflected ray through I and A':", "Reflected ray, I aur A' se hoke:")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <Chip x={60} y={420} w={220} h={42} fill={CREAM} stroke={GREEN} textFill={INK} size={20} script={false}>
          41x - 38y - 37 = 0
        </Chip>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.4)} d={lineD(I.x, I.y, REFLECT_END.x, REFLECT_END.y)} stroke={GREEN} sw={3} dur={0.6} />
      <Draw on={beat >= 7} delay={dl(7, 1.2)} d={ringD(I.x, I.y, 13, 11)} stroke={GREEN} sw={2} dur={0.4} />
      <Draw on={beat >= 7} delay={dl(7, 1.6)} d={ringD(APRIME.x, APRIME.y, 11, 9)} stroke={GREEN} sw={2} dur={0.4} />
    </Scene>
  );
}
