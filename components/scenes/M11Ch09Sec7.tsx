/**
 * M11 Ch09 · Section 7 — "Worked example: section point, then distance"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — ONE diagram built progressively as the two chained tools
 * (section formula, then distance) are used in sequence.
 * board_content has 8 items: seq1 heading -> always-on title. seq2..seq8 gate at beat>=1..7.
 * reveals_english = [0, 4.27, 20.31, 29.27, 43.09, 51.37, 58.03, 69.03]
 * reveals_hinglish = [0, 4.18, 16.98, 23.89, 35.58, 44.54, 49.92, 61.61]
 *
 * Numbers verified independently (python):
 *  m:n = 2:1 (AP:PB), A(-1,3), B(5,-9).
 *  Px = (2*5+1*(-1))/3 = (10-1)/3 = 9/3 = 3
 *  Py = (2*(-9)+1*3)/3 = (-18+3)/3 = -15/3 = -5   -> P = (3,-5)
 *  Cross-check: A + (2/3)(B-A) = (-1,3) + (2/3)(6,-12) = (-1+4, 3-8) = (3,-5) ✓ matches.
 *  OP = √(3² + (-5)²) = √(9+25) = √34 ≈ 5.83.
 *
 * Screen mapping — toScreen(x,y) = {x: 480+28x, y: 295-28y} (isotropic, single shared frame):
 *  O=(480,295)  A(-1,3)->(452,211)  B(5,-9)->(620,547)  P(3,-5)->(564,435)
 *  Cross-check P is 2/3 along A->B on screen: A+(2/3)(B-A) = (452,211)+(2/3)(168,336)
 *    = (452+112,211+224) = (564,435) — matches P exactly, and closer to B, as AP:PB=2:1 demands.
 *  Frame: originX=480 originY=295 xLeft=300 xRight=780 yTop=184 yBottom=575.
 *
 * Beats:
 *  0(title, always-on) | "Worked: Section Point, then Distance"
 *  1 | given+setup: statement, axes, A/B plotted+labeled, segment AB drawn
 *  2 | method: internal section formula, m:n = 2:1 (text)
 *  3 | work: P = ((2·5+1·(-1))/3, (2·(-9)+1·3)/3) = (9/3, -15/3) (text)
 *  4 | answer boxed: P dot (green) + chip "P = (3, -5)" — lands 2/3 along AB, nearer B
 *  5 | O introduced: dot + label, "Now, distance from O(0,0)." (right margin)
 *  6 | work+land: "OP = √(3²+(-5)²) = √(9+25)" (right margin) + OP segment draws (green) + chip "OP = √34"
 *  7 | sanity check (checkD) + guardrail: "Chain the tools: section point first, then distance."
 *
 * Layout plan:
 *  b0 | title (26,red,script)                | T mid | x540 y62
 *  b1 | statement (14,ink)                    | T mid | x540 y96
 *  b1 | axes c(480,295) 300..780/184..575     | CartesianAxes (no ticks)
 *  b1 | A dot + label "A(-1,3)"               | circle+T | (452,211) label x440 y199 end
 *  b1 | B dot + label "B(5,-9)"               | circle+T | (620,547) label x628 y563 start
 *  b1 | segment A-B (ink)                     | Draw | (452,211)->(620,547)
 *  b2 | method (14,ink)                       | T mid | x540 y130
 *  b3 | work1 (15,ink)                        | T mid | x540 y164
 *  b4 | P dot (green) + chip "P=(3,-5)"       | circle+Chip | (564,435) chip x572 y395 w150 h34
 *  b5 | O dot + label                         | circle+T | (480,295) label x468 y307 end
 *  b5 | distance text (14,ink)                | T mid | x920 y260
 *  b6 | work2 (14,ink)                        | T mid | x920 y292
 *  b6 | OP segment (green)                    | Draw | (480,295)->(564,435)
 *  b6 | OP chip "OP = √34" (green)            | Chip | x860 y310 w120 h34
 *  b7 | checkD sanity stamp (green)           | Draw | (350,480,16)
 *  b7 | red bar x800 y376..424                | Draw
 *  b7 | 2-line guardrail text                 | T mid | x920 y390 / y412
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
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, lineD, checkD } from "./math-kit";

const OX = 480;
const OY = 295;
const SCALE = 28;
function toScreen(x: number, y: number) {
  return { x: OX + x * SCALE, y: OY - y * SCALE };
}
const A = toScreen(-1, 3); // (452,211)
const B = toScreen(5, -9); // (620,547)
const P = toScreen(3, -5); // (564,435)

export default function M11Ch09Sec7({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={26} fill={RED} anchor="middle" script>
          {t("Worked: Section Point, then Distance", "Worked: Section Point, phir Distance")}
        </T>
      </Fade>

      {/* beat 1 — given + setup: plot A, B, draw the segment */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={96} size={14} fill={INK} anchor="middle">
          {t(
            "P divides A(-1,3) to B(5,-9) with AP:PB = 2:1. Find P, then OP.",
            "P, A(-1,3) se B(5,-9) tak AP:PB = 2:1 mein baantta hai. P nikaalo, phir OP."
          )}
        </T>
      </Fade>
      <CartesianAxes on={beat >= 1} delay={dl(1, 0.3)} originX={OX} originY={OY} xLeft={300} xRight={780} yTop={184} yBottom={575} showTicks={false} />
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <Circle cx={A.x} cy={A.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={440} y={199} size={12} fill={INK} anchor="end" weight={700}>A(-1,3)</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <Circle cx={B.x} cy={B.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={628} y={563} size={12} fill={INK} anchor="start" weight={700}>B(5,-9)</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.7)} d={lineD(A.x, A.y, B.x, B.y)} stroke={INK} sw={2} dur={0.6} />

      {/* beat 2 — method: internal section formula, m:n = 2:1 */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={130} size={14} fill={INK} anchor="middle">
          {t(
            "Use the internal section formula with m:n = 2:1.",
            "Internal section formula lo, m:n = 2:1."
          )}
        </T>
      </Fade>

      {/* beat 3 — work: the substitution */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={164} size={15} fill={INK} anchor="middle">
          P = ((2(5)+1(-1))/3, (2(-9)+1(3))/3) = (9/3, -15/3)
        </T>
      </Fade>

      {/* beat 4 — answer boxed: P lands 2/3 along AB, nearer B */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <Circle cx={P.x} cy={P.y} r={4.5} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <Chip x={572} y={395} w={150} h={34} fill="#FCF4E0" stroke={GREEN} textFill={GREEN} size={18}>
          P = (3, -5)
        </Chip>
      </Fade>

      {/* beat 5 — O introduced, transition to distance */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Circle cx={OX} cy={OY} r={3.5} fill={INK} />
        <T x={468} y={307} size={11} fill={MUTED} anchor="end">O</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={920} y={260} size={14} fill={INK} anchor="middle">
          {t("Now, distance from O(0,0).", "Ab, origin O(0,0) se distance.")}
        </T>
      </Fade>

      {/* beat 6 — work + land: OP segment draws, chip lands */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={920} y={292} size={14} fill={INK} anchor="middle">
          OP = √(3² + (-5)²) = √(9 + 25)
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.5)} d={lineD(OX, OY, P.x, P.y)} stroke={GREEN} sw={2.4} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <Chip x={860} y={310} w={120} h={34} fill="#FCF4E0" stroke={GREEN} textFill={GREEN} size={18}>
          OP = √34
        </Chip>
      </Fade>

      {/* beat 7 — sanity check + guardrail: chain the tools */}
      <Draw on={beat >= 7} delay={dl(7, 0)} d={checkD(350, 480, 16)} stroke={GREEN} sw={2.6} dur={0.4} />
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 800 376 L 800 424" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={920} y={390} size={13} fill={RED} anchor="middle" weight={700}>
          {t("Chain the tools:", "Tools chain karo:")}
        </T>
        <T x={920} y={412} size={13} fill={RED} anchor="middle" weight={700}>
          {t("section point, then distance.", "pehle point, phir distance.")}
        </T>
      </Fade>
    </Scene>
  );
}
