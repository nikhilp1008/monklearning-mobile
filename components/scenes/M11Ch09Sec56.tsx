/**
 * M11 Ch09 · Section 56 — "Worked examples: foot, and image in y = x"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — subtopic "Reflections / foot of perpendicular". Two
 * independent examples stacked top/bottom (not side-by-side): Example 1 (foot of a
 * perpendicular) is diagram-heavy and sits on top; Example 2 (image in y = x) is a
 * one-line symmetry trick with zero derivation, so it gets no diagram (per Sec14/23's
 * precedent of "diagram earns its place only when there's real geometric work to show" —
 * both examples in Sec14/23 got diagrams because both were genuine two-point-line
 * computations; here Example 2 has nothing to compute, only a rule to state) and sits
 * in the compact bottom band, text-only, closer to Sec48's pure-algebra idiom.
 *
 * Numbers verified (independently re-derived, match board_content exactly):
 *  Example 1 — foot of the perpendicular from P(2,3) to x + y - 1 = 0.
 *   Line: a=1, b=1, c=-1.  a·x1+b·y1+c = 1(2)+1(3)-1 = 2+3-1 = 4. ✓
 *   a²+b² = 1²+1² = 2. ✓
 *   t = -(ax1+by1+c)/(a²+b²) = -4/2 = -2. ✓
 *   Foot Q = (x1+ta, y1+tb) = (2+(-2)(1), 3+(-2)(1)) = (2-2, 3-2) = (0, 1). ✓
 *   Check Q on the line: 0 + 1 - 1 = 0 ✓.
 *   Check PQ ⊥ line: line direction (1,-1) (perp to normal (a,b)=(1,1)).
 *     PQ = Q-P = (-2,-2). PQ · line-direction = (-2)(1)+(-2)(-1) = -2+2 = 0 ✓ — genuinely
 *     perpendicular, not just visually plausible.
 *  Example 2 — image of (4,-1) in the line y = x.
 *   y = x is the special mirror: swap the coordinates directly, no formula needed.
 *   (4,-1) -> (-1,4). ✓
 *
 * Screen mapping — Example 1 diagram, uniform scale (angles/perpendicularity render true):
 *   toScreen1(x,y) = {x: 330+36x, y: 280-36y}.
 *   P(2,3)->(402,172).  Q(0,1)->(330,244).  Given-line endpoints: (-2.5,3.5)->(240,154),
 *   (4.5,-3.5)->(492,406) [both on x+y-1=0 by construction: -2.5+3.5-1=0, 4.5-3.5-1=0].
 *   On-screen perpendicularity check: line vector (492-240,406-154)=(252,252) i.e. slope 1.
 *   PQ vector (330-402,244-172)=(-72,72) i.e. slope -1. Product of screen slopes = -1 —
 *   genuinely perpendicular on screen (uniform scale preserves the right angle). Q also lies
 *   exactly on the drawn segment: at x=330, t=(330-240)/252=0.357, y=154+252*0.357=244 ✓
 *   matches Q's screen y exactly.
 *
 * Beat-index: board_content has 8 items. item[0] (heading) -> always-on title. items[1..7]
 * gate at beat>=1..7. reveals_english=[0.0,6.83,15.36,36.44,45.4,53.16,63.23,69.21].
 * reveals_hinglish=[0.0,6.23,15.87,36.69,44.71,51.11,58.97,64.68].
 *
 * Beats:
 *  0(title, always-on) | "Worked: Foot & Image in y = x"
 *  1 | Ex1 statement + build the object: axes, given line drawn, P plotted
 *  2 | Ex1 formula: ax1+by1+c=4, a²+b²=2, t=-2 (three-line derivation, right column)
 *  3 | Ex1 land: PQ segment + Q plotted (GREEN) + boxed "Q=(2-2,3-2)=(0,1)" (HIGH, GREEN)
 *  4 | Ex2 statement: image of (4,-1) in y=x
 *  5 | RED-MARGIN GUARDRAIL (HIGH): "y=x is a special mirror - just swap the coordinates."
 *      bold red text + red underline
 *  6 | Ex2 land: boxed "(4,-1) -> (-1,4)" (HIGH, GREEN)
 *  7 | closing recap line
 *
 * Layout plan (all coordinates in viewBox units):
 *  title (always-on)                 | T mid script22 red      | x540 y64  box y35.4..75
 *  b1 statement                       | T mid15 ink              | x540 y102 box y90.3..106.65
 *  b1 axes c(330,280) 235..498/148..412 | CartesianAxes (no ticks)
 *  b1 given line (INK)                | Draw | (240,154)->(492,406)
 *  b1 P dot + label "P(2, 3)"         | circle+T start | (402,172) label x416 y158
 *  b2 formula col x770: L1 y190 / L2 y218 / L3 y246 | T mid16 w700 ink, box widths <=240
 *  b3 PQ segment (GREEN)              | Draw | (402,172)->(330,244)
 *  b3 Q dot (GREEN) + label "Q(0, 1)" | circle+T start | (330,244) label x350 y248
 *  b3 chip "Q = (2 - 2, 3 - 2) = (0, 1)" (HIGH, green) | Chip | x635 y274 w270 h40
 *  b4 statement                       | T mid15 ink              | x540 y452 box y440.3..456.65
 *  b5 guardrail text (HIGH, red)      | T mid16 w700 red         | x540 y486 box y473.52..490.96
 *  b5 guardrail underline (red)       | Draw | y502, half-width = halfW(16,text)
 *  b6 chip "(4, -1) -> (-1, 4)" (HIGH, green) | Chip | x435 y524 w210 h42
 *  b7 closing caption                 | T mid13 amber_dark        | x540 y588 box y577.86..592.03
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
  GREEN,
  RED,
  AMBER_DARK,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, lineD } from "./math-kit";

/* ---------------- Example 1 diagram ---------------- */
const S1 = 36;
const OX1 = 330;
const OY1 = 280;
function toScreen1(x: number, y: number) {
  return { x: OX1 + S1 * x, y: OY1 - S1 * y };
}
const P1 = toScreen1(2, 3); // (402, 172)
const Q1 = toScreen1(0, 1); // (330, 244)
const LINE1_START = toScreen1(-2.5, 3.5); // (240, 154) — on x+y-1=0
const LINE1_END = toScreen1(4.5, -3.5); // (492, 406) — on x+y-1=0

const COL_X = 770; // formula column center, right of the diagram

/** Half-width of a centered non-script (Anek) text box, per SCENE_AUTHORING.md's
 * width ≈ 0.50 × size × chars estimate — sizes the guardrail underline to whichever
 * language's string is actually on screen (same helper as Sec48). */
function halfW(size: number, text: string): number {
  return 0.25 * size * text.length;
}

export default function M11Ch09Sec56({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const guardrailText = t(
    "y = x is a special mirror - just swap the coordinates.",
    "y = x ek special mirror hai - bas coordinates swap karo."
  );
  const guardrailHalf = halfW(16, guardrailText);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} anchor="middle" script>
          {t("Worked: Foot & Image in y = x", "Worked: Foot aur Image, y = x mein")}
        </T>
      </Fade>

      {/* ===================== EXAMPLE 1 — foot of the perpendicular ===================== */}

      {/* beat 1 — statement + build the object: axes, given line, P */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={102} size={15} fill={INK} anchor="middle">
          {t(
            "Example 1: foot of the perpendicular from P(2,3) to x + y - 1 = 0.",
            "Example 1: P(2,3) se x + y - 1 = 0 tak perpendicular ka foot."
          )}
        </T>
      </Fade>
      <CartesianAxes on={beat >= 1} delay={dl(1, 0)} originX={OX1} originY={OY1} xLeft={235} xRight={498} yTop={148} yBottom={412} showTicks={false} />
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d={lineD(LINE1_START.x, LINE1_START.y, LINE1_END.x, LINE1_END.y)} stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <Circle cx={P1.x} cy={P1.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={416} y={158} size={13} fill={INK} anchor="start" weight={700}>P(2, 3)</T>
      </Fade>

      {/* beat 2 — formula: ax1+by1+c=4, a²+b²=2, t=-2 (right column, three-step derivation) */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={COL_X} y={190} size={16} fill={INK} anchor="middle" weight={700}>
          ax1 + by1 + c = 2 + 3 - 1 = 4
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={COL_X} y={218} size={16} fill={INK} anchor="middle" weight={700}>
          a² + b² = 1² + 1² = 2
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={COL_X} y={246} size={16} fill={INK} anchor="middle" weight={700}>
          t = -4/2 = -2
        </T>
      </Fade>

      {/* beat 3 — land: PQ segment + Q plotted (GREEN) + boxed foot (HIGH, GREEN) */}
      <Draw on={beat >= 3} delay={dl(3, 0)} d={lineD(P1.x, P1.y, Q1.x, Q1.y)} stroke={GREEN} sw={2.4} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <Circle cx={Q1.x} cy={Q1.y} r={4.5} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.0)}>
        <T x={350} y={248} size={12} fill={GREEN} anchor="start" weight={700}>Q(0, 1)</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <Chip x={635} y={274} w={270} h={40} fill={CREAM} stroke={GREEN} textFill={GREEN} size={17} script={false}>
          Q = (2 - 2, 3 - 2) = (0, 1)
        </Chip>
      </Fade>

      {/* ===================== EXAMPLE 2 — image in y = x ===================== */}

      {/* beat 4 — statement */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={452} size={15} fill={INK} anchor="middle">
          {t(
            "Example 2: image of (4, -1) in the line y = x.",
            "Example 2: (4,-1) ka image, line y = x mein."
          )}
        </T>
      </Fade>

      {/* beat 5 — RED-MARGIN GUARDRAIL (HIGH): bold red text + red underline */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={486} size={16} fill={RED} anchor="middle" weight={700}>
          {guardrailText}
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.6)}
        d={lineD(540 - guardrailHalf, 502, 540 + guardrailHalf, 502)}
        stroke={RED}
        sw={2.4}
        dur={0.4}
      />

      {/* beat 6 — land: boxed swap (HIGH, GREEN) */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Chip x={435} y={524} w={210} h={42} fill={CREAM} stroke={GREEN} textFill={GREEN} size={18} script={false}>
          (4, -1) → (-1, 4)
        </Chip>
      </Fade>

      {/* beat 7 — closing recap */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={588} size={13} fill={AMBER_DARK} anchor="middle">
          {t(
            "Recognise y=x, the x-axis, and the y-axis on sight, and use swap or negate.",
            "y=x, x-axis, aur y-axis ko turant pehchano, aur swap ya negate karo."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
