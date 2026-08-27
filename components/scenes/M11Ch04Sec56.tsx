/**
 * M11 Ch04 · Section 56 — "Lines, collinearity, and the perpendicular bisector"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — subtopic 6 (Geometry of Complex Numbers).
 *
 * CRITICAL geometry note (per authoring brief): |z-z1|=|z-z2| is the perpendicular
 * BISECTOR — a straight LINE, never a circle. This scene draws it as an actual
 * second line (GREEN), perpendicular to segment z1z2 through its midpoint M, with
 * a drawn right-angle tick at M proving the perpendicularity geometrically rather
 * than asserting it. No circle appears anywhere in this file.
 *
 * Beats (board_reveal_at_english [0, 10.07, 24.66, 32.17, 44.89, 57.77, 69.97, 81.83]):
 *  0 heading: straight-line conditions in z
 *  1 DIAGRAM STARTS: z1, z2, the line through them (extended both ways)
 *  2 point z on that line + formula chip: ratio = its own conjugate -> real
 *  3 general line equation card (with drawn Overline bars): a-bar z + a z-bar + b = 0
 *  4 point z3 also on the line (collinear) + collinearity chip
 *  5 THE perpendicular bisector: new line through midpoint M, right-angle tick,
 *    "perp. bisector" label, + formula chip |z-z1|=|z-z2|
 *  6 text: equidistant from both -> perp bisector
 *  7 red-margin: translate words to a z-equation
 *
 * Geometry (fixed board coords):
 *  z1=(300,450)  z2=(620,320)   segment length 345.4, unit u1=(0.9268,-0.3765)
 *  z (generic point on line) = z1 + 0.6*(z2-z1) = (492,372)
 *  z3 (collinear point, beyond z2) = z2 + 0.4*(z2-z1) = (748,268)
 *  line drawn from Lstart=z1-60*u1=(244.4,472.6) to Lend=z3+30*u1=(775.8,256.7)
 *  M = midpoint(z1,z2) = (460,385);  u2 (perp to u1) = (0.3765,0.9268)
 *  perp bisector drawn from Pb=M-160*u2=(399.8,236.7) to Pa=M+160*u2=(520.2,533.3)
 *  right-angle tick at M using u1,u2 (12px legs) confirms the 90° crossing.
 *
 * Layout plan:
 *  b0 | heading (16,amber_dark,w700)     | T mid | x540 y100
 *  b1 | z1,z2 dots+labels, line          | Draw/circle/T
 *  b2 | z dot+label, chip "ratio=conj"   | circle/T, Chip x705..1005 y205..243
 *  b3 | general-line-eqn card: one T run "a z + a z + b = 0" + 2 Overlines
 *    | positioned above char-index 0 and 8 (est. 9px/char) | x700..1030 y270..320, caption y342
 *  b4 | z3 dot+label, chip "collinear"   | circle/T, Chip x705..1005 y372..410
 *  b5 | perp bisector line + tick + label, chip "|z-z1|=|z-z2|" | Draw, Chip y434..472
 *  b6 | text "equidistant -> perp bisector"| T st | col y510
 *  b7 | red bar + guardrail text          | Draw/T| col y542..576
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
  Chip,
  INK,
  AMBER_DARK,
  GREEN,
  RED,
  MUTED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { lineD, Overline } from "./math-kit";

const Z1 = { x: 300, y: 450 };
const Z2 = { x: 620, y: 320 };
const U1 = { x: 0.9268, y: -0.3765 }; // unit vector z1->z2
const U2 = { x: 0.3765, y: 0.9268 }; // perpendicular unit vector

const Z = { x: 492, y: 372 }; // generic point on the line (60% from z1 to z2)
const Z3 = { x: 748, y: 268 }; // collinear point, beyond z2

const L_START = { x: 244.4, y: 472.6 };
const L_END = { x: 775.8, y: 256.7 };

const M = { x: 460, y: 385 };
const P_A = { x: 520.2, y: 533.3 }; // bisector end toward lower-right
const P_B = { x: 399.8, y: 236.7 }; // bisector end toward upper-left

// small right-angle tick at M (legs along u1, u2)
const TICK_A = { x: M.x + 12 * U1.x, y: M.y + 12 * U1.y };
const TICK_C = { x: TICK_A.x + 12 * U2.x, y: TICK_A.y + 12 * U2.y };
const TICK_B = { x: M.x + 12 * U2.x, y: M.y + 12 * U2.y };
const TICK_D = `M ${TICK_A.x} ${TICK_A.y} L ${TICK_C.x} ${TICK_C.y} L ${TICK_B.x} ${TICK_B.y}`;

const COL_X = 705;
const COL_W = 300;

export default function M11Ch04Sec56({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={60} size={22} fill={RED} anchor="middle" script>
          {t("Lines & the Perpendicular Bisector", "Lines aur Perpendicular Bisector")}
        </T>
      </Fade>

      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={100} size={16} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Straight-line conditions in z", "z mein straight-line conditions")}
        </T>
      </Fade>

      {/* beat 1 — THE DIAGRAM begins: z1, z2, the line through them */}
      <Draw on={beat >= 1} delay={dl(1, 0)} d={lineD(L_START.x, L_START.y, L_END.x, L_END.y)} stroke={INK} sw={2.2} dur={0.8} />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <Circle cx={Z1.x} cy={Z1.y} r={4.5} fill={INK} />
        <T x={282} y={474} size={14} fill={INK} anchor="end" weight={700}>z₁</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <Circle cx={Z2.x} cy={Z2.y} r={4.5} fill={INK} />
        <T x={638} y={296} size={14} fill={INK} anchor="start" weight={700}>z₂</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.7)}>
        <T x={540} y={136} size={15} fill={INK} anchor="middle">
          {t(
            "z lies on the line through z₁, z₂ iff (z-z₁)/(z₂-z₁) is real.",
            "z line z₁,z₂ se guzarti par hai jab (z-z₁)/(z₂-z₁) real ho."
          )}
        </T>
      </Fade>

      {/* beat 2 — a point z on the line + the conjugate restatement */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Circle cx={Z.x} cy={Z.y} r={4} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.35)}>
        <T x={508} y={350} size={13} fill={AMBER_DARK} anchor="start" weight={700}>z</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <Chip x={COL_X} y={205} w={COL_W} h={38} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={14} script={false}>
          ratio = conjugate(ratio) ⇒ real
        </Chip>
      </Fade>

      {/* beat 3 — general line equation: a-bar z + a z-bar + b = 0 (drawn overlines) */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <Rect x={700} y={270} width={330} height={50} rx={14} fill={CREAM} stroke={AMBER_DARK} strokeWidth={2} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        {/* single text run "a z + a z + b = 0" — bars drawn separately above the
            1st 'a' (index0) and 2nd 'z' (index8) so no adjacent text boxes are
            needed (avoids the text-text clearance rule entirely). char width
            estimate 0.5*18=9px, run starts at x=788.5 so it centers in the card. */}
        <T x={788.5} y={308} size={18} fill={INK} anchor="start" weight={700}>a z + a z + b = 0</T>
        <Overline on={beat >= 3} delay={dl(3, 0.7)} x={793} y={308} size={18} textWidth={9} anchor="middle" />
        <Overline on={beat >= 3} delay={dl(3, 0.7)} x={865} y={308} size={18} textWidth={9} anchor="middle" />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={865} y={342} size={12} fill={MUTED} anchor="middle">
          {t("(a is complex, b is real)", "(a complex hai, b real hai)")}
        </T>
      </Fade>

      {/* beat 4 — z3 also on the line: collinearity */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <Circle cx={Z3.x} cy={Z3.y} r={4.5} fill={INK} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.35)}>
        <T x={748} y={248} size={14} fill={INK} anchor="middle" weight={700}>z₃</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <Chip x={COL_X} y={372} w={COL_W} h={38} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13} script={false}>
          z₁,z₂,z₃ collinear ⇔ (z₃-z₁)/(z₂-z₁)∈R
        </Chip>
      </Fade>

      {/* beat 5 — THE perpendicular bisector: a distinct LINE, not a circle */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={lineD(P_B.x, P_B.y, P_A.x, P_A.y)} stroke={GREEN} sw={2.4} dur={0.7} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <Circle cx={M.x} cy={M.y} r={3.5} fill={INK} />
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.1)} d={TICK_D} stroke={INK} sw={1.6} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={376} y={219} size={13} fill={GREEN} anchor="end" weight={700}>
          {t("perp. bisector", "perp. bisector")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.1)}>
        <Chip x={COL_X} y={434} w={COL_W} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={14} script={false}>
          |z-z₁| = |z-z₂|  ⇒  perp. bisector
        </Chip>
      </Fade>

      {/* beat 6 — equidistant reads straight off as the bisector */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={COL_X} y={510} size={14} fill={INK} anchor="start">
          {t("Equidistant from both ⇒ perp bisector", "Dono se equidistant ⇒ perp bisector")}
        </T>
      </Fade>

      {/* beat 7 — red-margin: the whole skill */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d={`M ${COL_X} 542 L ${COL_X} 576`} stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={COL_X + 16} y={564} size={15} fill={RED} anchor="start" weight={700}>
          {t("Translate words → a z-equation", "Shabdon ko → z-equation mein badlo")}
        </T>
      </Fade>
    </Scene>
  );
}
