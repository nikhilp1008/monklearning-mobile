/**
 * M11 Ch02 · Section 15 — "Worked: lattice points on a circle, and forced-pair counting"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * FLAGGED — real graph-reading geometry (circle x²+y²=25), extra eye-check.
 * section_type: worked_examples (TOP = Ex3 lattice-point circle, BOTTOM = Ex4 complement counting).
 *
 * Beats (board_reveal_at_english [0, 18.52, 41.81, 57.17, 79.27, 92.93, 114.52, 134.31]):
 *  0 Ex3 given: R={(x,y): x,y∈Z, x²+y²=25}
 *  1 squares available: 0,9,16,25 — attach ALL sign choices
 *  2 boxed roster: R={(0,±5),(±5,0),(±3,±4),(±4,±3)} — 12 pairs
 *  3 THE GRAPH: circle r=5 with the 12 lattice points plotted + Domain=Range caption
 *  4 Ex4 heading: relations on A={1,2,3}, AT LEAST ONE diagonal pair
 *  5 total=2^9=512; count the complement instead
 *  6 boxed: 512 − 2^(9−3) = 512−64 = 448
 *  7 guardrail: k forced pairs freeze k switches: count=2^(n²−k)
 *
 * Layout plan — TOP zone (Ex3, y78..411) + divider + BOTTOM zone (Ex4, y424..565):
 *  b0 | given (15,amber,w700)            | T mid  | x?..?      y81..98  (bl 93)
 *  b1 | squares line (14)                 | T mid  | x?..?      y113..128 (bl 124)
 *  b2 | chip roster (15,green)           | Chip   | x?..?      y144..174
 *  b3 | axes (origin 540,290, r-equiv105)| Draw   | x440..640  y195..385
 *  b3 | circle r=85                       | Draw   | x455..625  y205..375
 *  b3 | 12 lattice dots (green, r4)       | dot    | on the circle, ±3/±4/±5 combos
 *  b3 | caption (14)                      | T mid  | x?..?      y397..411 (bl 407)
 *  --divider-- y=424
 *  b4 | Ex4 heading (15,amber,w800)      | T mid  | x304..776  y435..452 (bl 447)
 *  b5 | complement line (14)              | T mid  | x?..?      y468..483 (bl 479)
 *  b6 | chip "512−64=448" (16,green)     | Chip   | x415..665  y498..530
 *  b7 | margin bar (red)                  | Draw   | x60  y544..574
 *  b7 | guardrail (14, red)               | T st   | x76..?     y550..565 (bl 561)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { circleD, CartesianAxes, IntervalDot } from "./math-kit";

const LATTICE_POINTS = [
  { x: 540, y: 205 },
  { x: 540, y: 375 },
  { x: 625, y: 290 },
  { x: 455, y: 290 },
  { x: 591, y: 222 },
  { x: 591, y: 358 },
  { x: 489, y: 222 },
  { x: 489, y: 358 },
  { x: 608, y: 239 },
  { x: 608, y: 341 },
  { x: 472, y: 239 },
  { x: 472, y: 341 },
];

export default function M11Ch02Sec15({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={24} fill={RED} anchor="middle" script>
          {t("Worked Examples — Circles & Counting", "Solved Examples — Circles & Counting")}
        </T>
      </Fade>

      {/* beat 0 — Example 3 given */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={93} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {"Example 3: R = {(x,y) : x,y∈Z, x²+y²=25}"}
        </T>
      </Fade>

      {/* beat 1 — which squares add to 25 */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={124} size={14} fill={INK} anchor="middle">
          {t(
            "Squares: 0,9,16,25 (25=0+25=9+16) — attach ALL signs",
            "Squares: 0,9,16,25 (25=0+25=9+16) — SAARE signs lagao"
          )}
        </T>
      </Fade>

      {/* beat 2 — the roster form, boxed */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Chip x={330} y={144} w={420} h={30} fill={GREEN} textFill="#FFFEFB" size={15} script={false}>
          {"R={(0,±5),(±5,0),(±3,±4),(±4,±3)} — 12 pairs"}
        </Chip>
      </Fade>

      {/* beat 3 — THE GRAPH: 12 lattice points on the circle x²+y²=25 */}
      <CartesianAxes on={beat >= 3} delay={dl(3, 0)} originX={540} originY={290} xLeft={440} xRight={640} yTop={195} yBottom={385} step={17} />
      <Draw on={beat >= 3} d={circleD(540, 290, 85)} stroke={AMBER_DARK} sw={2} delay={dl(3, 0.4)} />
      {LATTICE_POINTS.map((p, i) => (
        <IntervalDot key={i} on={beat >= 3} delay={dl(3, 0.9 + i * 0.1)} x={p.x} y={p.y} open={false} r={4.5} stroke={GREEN} />
      ))}
      <Fade on={beat >= 3} delay={dl(3, 2.2)}>
        <T x={540} y={407} size={14} fill={INK} anchor="middle">
          {"Domain = Range = {-5,-4,-3,0,3,4,5}"}
        </T>
      </Fade>

      {/* divider */}
      <Draw on={beat >= 4} d="M 100 424 L 980 424" stroke={AMBER_DARK} sw={1} delay={dl(4, 0)} />

      {/* beat 4 — Example 4 heading */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={447} size={15} fill={AMBER_DARK} anchor="middle" weight={800}>
          {t(
            "Example 4: relations on A={1,2,3}, AT LEAST ONE diagonal pair",
            "Example 4: A={1,2,3} pe relations, KAM SE KAM ek diagonal pair"
          )}
        </T>
      </Fade>

      {/* beat 5 — total, and why we count the complement */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={479} size={14} fill={INK} anchor="middle">
          {t(
            'Total=2^9=512. "At least one" → count the COMPLEMENT',
            'Total=2^9=512. "Kam se kam ek" → COMPLEMENT ginto'
          )}
        </T>
      </Fade>

      {/* beat 6 — the answer, boxed */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Chip x={415} y={498} w={250} h={32} fill={GREEN} textFill="#FFFEFB" size={16} script={false}>
          {"512 − 2^(9−3) = 512−64 = 448"}
        </Chip>
      </Fade>

      {/* beat 7 — guardrail: the general forced-pair rule */}
      <Draw on={beat >= 7} d="M 60 544 L 60 574" stroke={RED} sw={3} delay={dl(7, 0)} />
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={76} y={561} size={14} fill={RED} anchor="start">
          {t(
            "k forced pairs freeze k switches: count = 2^(n²−k)",
            "k forced pairs, k switches freeze: count = 2^(n²−k)"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
