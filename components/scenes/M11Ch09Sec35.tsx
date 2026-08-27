/**
 * M11 Ch09 · Section 35 — "Where lines meet, and concurrency"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — opens subtopic 5 (Point of Intersection, Concurrency, Family of Lines).
 *
 * board_content has 8 items. seq1 (heading "Where Lines Meet") is the always-on title.
 * seq2..seq8 gate at beat>=1..7 (useBeat crosses reveals[1..7]).
 * reveals_english = [0, 6.83, 14.08, 26.45, 36.35, 45.48, 56.49, 69.96] (8 values).
 * reveals_hinglish = [0, 6.49, 12.8, 23.81, 32.34, 39.77, 48.21, 60.07] (8 values).
 *
 * Numbers verified (node, see chat): L1: x+y-4=0, L2: x-y=0, L3: 2x-y-2=0.
 *   L1(2,2)=0 ✓  L2(2,2)=0 ✓  L3(2,2)=0 ✓ — all three pass through J=(2,2).
 *   Elimination: L1+L2 → 2x-4=0 → x=2, then L2 → y=x=2.
 * toScreen(x,y) = {x: 456+42x, y: 444-42y}  (OX=456, OY=444, SCALE=42)
 *   O(0,0)->(456,444)  J(2,2)->(540,360)
 *   L1 drawn (-1,5)->(5,-1) => (414,234)->(666,486)   [fits box exactly, slope -1]
 *   L2 drawn (-1,-1)->(5,5) => (414,486)->(666,234)   [fits box exactly, slope +1]
 *   L3 drawn (0.7,-0.6)->(3.3,4.6) => (485.4,469.2)->(594.6,250.8)  [clipped inside box, slope +2]
 *   line-tag anchors: L1@(4,0)->(624,444)  L2@(4,4)->(624,276)  L3@(1.2,0.4)->(506.4,427.2)
 *
 * Beats:
 *  0(title, always-on) | "Where Lines Meet"
 *  1 | text: two non-parallel roads cross at exactly one junction  + draw empty axes
 *  2 | text: finding it = solving the two equations together      + draw L1 (green)
 *  3 | (JSON diagram slot) draw L2 (ink), mark J, elimination derivation in left margin
 *  4 | text: three lines through one point = concurrent            + draw L3 (amber), ring J,
 *      label "concurrent point"
 *  5 | foreshadow chip (right margin): a determinant does it in one shot (no matrix here)
 *  6 | guardrail (red-margin, right): a1b2-a2b1 ≠ 0 for a unique intersection
 *  7 | closing: parallel lines never meet; coincident lines meet everywhere
 *
 * Layout plan:
 *  b0  | title (26,red,script)                    | T mid | x540 y62
 *  b1  | text (16,ink)                             | T mid | x540 y96
 *  b1  | axes c(456,444) 390..690/210..510          | CartesianAxes (no ticks)
 *  b1  | O dot + label                              | circle+T | (456,444) label x444 y456 end
 *  b2  | text (15,ink)                              | T mid | x540 y126
 *  b2  | L1 draw (green)                             | Draw | (414,234)->(666,486)
 *  b2  | L1 tag "L1"                                 | T | (634,450) start size12 green
 *  b3  | L2 draw (ink)                                | Draw | (414,486)->(666,234)
 *  b3  | L2 tag "L2"                                  | T | (634,270) start size12 ink
 *  b3  | J dot (ink) + coord label "(2, 2)"           | circle+T | (540,360) label x552 y352 start
 *  b3  | left-margin derivation (4 lines + boxed answer) | T×4 + Chip | x90.. y296..392
 *  b4  | text (15,ink)                              | T mid | x540 y156
 *  b4  | L3 draw (amber_dark)                         | Draw | (485.4,469.2)->(594.6,250.8)
 *  b4  | L3 tag "L3"                                  | T | (516,421) start size12 amber_dark
 *  b4  | ring around J (amber_dark)                    | Draw ringD | cx540 cy360
 *  b4  | "concurrent point" label                      | T | (572,382) start size12 script amber_dark
 *  b5  | foreshadow chip (right margin)                | Chip | x710 y196 w240 h36
 *  b6  | red bar + 2-line guardrail (right margin)      | Draw+T | bar x710 y260..326, text x726 y282/308
 *  b7  | closing caption (14,amber_dark,script)         | T mid | x540 y576
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
  ringD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, lineD } from "./math-kit";

const OX = 456;
const OY = 444;
const SCALE = 42;
function toScreen(x: number, y: number) {
  return { x: OX + x * SCALE, y: OY - y * SCALE };
}

const O = toScreen(0, 0); // (456,444)
const J = toScreen(2, 2); // (540,360) — the shared junction of all three lines

const L1_A = toScreen(-1, 5); // (414,234)
const L1_B = toScreen(5, -1); // (666,486)
const L2_A = toScreen(-1, -1); // (414,486)
const L2_B = toScreen(5, 5); // (666,234)
const L3_A = toScreen(0.7, -0.6); // (485.4,469.2)
const L3_B = toScreen(3.3, 4.6); // (594.6,250.8)

const L1_TAG = toScreen(4, 0); // (624,444)
const L2_TAG = toScreen(4, 4); // (624,276)
const L3_TAG = toScreen(1.2, 0.4); // (506.4,427.2)

export default function M11Ch09Sec35({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={26} fill={RED} anchor="middle" script>
          {t("Where Lines Meet", "Jahan Lines Milti Hain")}
        </T>
      </Fade>

      {/* beat 1 — two non-parallel roads cross at exactly one junction; draw the empty stage */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={96} size={16} fill={INK} anchor="middle">
          {t(
            "Two non-parallel roads cross at exactly one junction.",
            "Do non-parallel roads exactly ek junction par cross karte hain."
          )}
        </T>
      </Fade>
      <CartesianAxes on={beat >= 1} delay={dl(1, 0.4)} originX={OX} originY={OY} xLeft={390} xRight={690} yTop={210} yBottom={510} showTicks={false} />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <Circle cx={O.x} cy={O.y} r={3} fill={INK} />
        <T x={444} y={456} size={11} fill={MUTED} anchor="end">O</T>
      </Fade>

      {/* beat 2 — finding it = solving the two equations together; draw L1 */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={126} size={15} fill={INK} anchor="middle">
          {t(
            "Finding it is just solving the two line equations together.",
            "Use dhoondhna matlab dono line equations ko saath solve karna."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d={lineD(L1_A.x, L1_A.y, L1_B.x, L1_B.y)} stroke={GREEN} sw={2.4} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <T x={L1_TAG.x} y={L1_TAG.y} size={12} fill={GREEN} anchor="start" weight={700}>L1</T>
      </Fade>

      {/* beat 3 — (JSON diagram slot) draw L2, mark junction J, show the elimination */}
      <Draw on={beat >= 3} delay={dl(3, 0)} d={lineD(L2_A.x, L2_A.y, L2_B.x, L2_B.y)} stroke={INK} sw={2.4} dur={0.7} />
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={L2_TAG.x} y={L2_TAG.y} size={12} fill={INK} anchor="start" weight={700}>L2</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <Circle cx={J.x} cy={J.y} r={5} fill={INK} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={552} y={352} size={12} fill={INK} anchor="start" weight={700}>(2, 2)</T>
      </Fade>
      {/* left-margin derivation: add the two equations */}
      <Fade on={beat >= 3} delay={dl(3, 1.9)}>
        <T x={90} y={296} size={16} fill={INK} anchor="start">L1: x + y - 4 = 0</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.3)}>
        <T x={90} y={326} size={16} fill={INK} anchor="start">L2: x - y = 0</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 2.7)} d={lineD(90, 338, 260, 338)} stroke={MUTED} sw={1.6} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 3.0)}>
        <T x={266} y={342} size={12} fill={MUTED} anchor="start">(add)</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.3)}>
        <T x={90} y={366} size={16} fill={INK} anchor="start">2x - 4 = 0</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.7)}>
        <Chip x={80} y={378} w={172} h={34} fill="#FCF4E0" stroke={GREEN} textFill={GREEN} size={16} script={false}>
          x = 2, y = 2
        </Chip>
      </Fade>

      {/* beat 4 — three lines through one point = concurrent; draw L3, ring J */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={156} size={15} fill={INK} anchor="middle">
          {t(
            "Three lines through one point: concurrent.",
            "Ek point se teen lines: concurrent."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.5)} d={lineD(L3_A.x, L3_A.y, L3_B.x, L3_B.y)} stroke={AMBER_DARK} sw={2.4} dur={0.7} />
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={L3_TAG.x} y={L3_TAG.y} size={12} fill={AMBER_DARK} anchor="start" weight={700}>L3</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.7)} d={ringD(J.x, J.y, 19, 17)} stroke={AMBER_DARK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 2.4)}>
        <T x={572} y={382} size={12} fill={AMBER_DARK} anchor="start" script weight={700}>
          concurrent point
        </T>
      </Fade>

      {/* beat 5 — foreshadow: a determinant does it in one shot (no matrix on this board) */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Chip x={710} y={196} w={240} h={36} fill="#FCF4E0" stroke={AMBER_DARK} textFill={AMBER_DARK} size={14} script>
          {t("One determinant. One shot.", "Ek determinant. Ek hi shot.")}
        </Chip>
      </Fade>

      {/* beat 6 — guardrail (red-margin): unique intersection needs non-parallel lines */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d="M 710 260 L 710 326" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={726} y={282} size={15} fill={RED} anchor="start" weight={700}>
          {t("Unique intersection needs", "Unique intersection ke liye")}
        </T>
        <T x={726} y={308} size={15} fill={RED} anchor="start" weight={700}>
          {t("non-parallel lines: a₁b₂ - a₂b₁ ≠ 0", "non-parallel: a₁b₂ - a₂b₁ ≠ 0")}
        </T>
      </Fade>

      {/* beat 7 — closing: parallel never meet, coincident meet everywhere */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={576} size={14} fill={AMBER_DARK} anchor="middle" script>
          {t(
            "Parallel lines never meet; coincident lines meet everywhere.",
            "Parallel lines kabhi nahi milti; coincident lines har jagah milti hain."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
