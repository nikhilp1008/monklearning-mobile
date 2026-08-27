/**
 * M11 Ch02 · Section 3 — "Boundary rules: empty sets, infinity, and when A × B = B × A"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 *
 * Beats (board_reveal_at_english [0, 10.15, 29.01, 44.2, 60.59, 78.76, 93.27]):
 *  0 title (always-on) · 1 formula A×B=∅ ⟺ A=∅ or B=∅
 *  2 shelf analogy: one empty shelf → zero pairs possible (LEFT)
 *  3 infinity persists: R×R has uncountably many points (RIGHT, mini axes + scatter)
 *  4 hidden assumption: elements must be distinct — strip duplicates before counting
 *  5 formula A×B=B×A ⟺ A=B (non-empty sets)
 *  6 guardrail: subset is NOT enough — A={1},B={1,2} gives unequal products
 *
 * Layout plan — boxes are estimated render boxes, longer language counts:
 *  b0 | title (script 28, red)         | T mid  | x300..780  y34..84  (bl 70)
 *  b1 | "A×B=∅" (26,amber) "⟺" "A=∅ or B=∅" (22) | T st | x348..705 y104..137 (bl 125)
 *  b2 | shelf A rect (dashed empty)     | Draw   | x60..220  y185..235
 *  b2 | "∅" (26, muted)                 | T mid  | x128..152  y210..228 (bl 219)
 *  b2 | "Shelf A" label (14)            | T mid  | x105..175  y248..262 (bl 255)
 *  b2 | shelf B rect (solid)            | Draw   | x280..440  y185..235
 *  b2 | "x","y" chips inside (18)       | T mid  | x321..339 / x381..399  y205..223
 *  b2 | "Shelf B" label (14)            | T mid  | x325..395  y248..262 (bl 255)
 *  b2 | cross between shelves           | Draw   | x231..269  y192..228
 *  b2 | "0 pairs possible" (14, red)    | T mid  | x190..310  y268..282 (bl 275)
 *  b3 | "R × R" label (15, amber)       | T mid  | x808..862  y160..176 (bl 172)
 *  b3 | mini axes (originX835,originY280)| Draw  | x705..995  y190..280
 *  b3 | 8 scattered dots (green, r3)    | dot    | within x705..995 y190..280
 *  b3 | caption (13, muted)             | T mid  | x750..920  y292..305 (bl 298)
 *  b4 | "{1, 2," (20)                   | T st   | x200..270  y324..344 (bl 345)
 *  b4 | duplicate "2" (20, red)          | T st   | x282..292  y324..344 (bl 345) · crossed
 *  b4 | ", 3}" (20)                     | T st   | x300..340  y324..344 (bl 345)
 *  b4 | arrow                           | Draw   | x360..420 y332..338
 *  b4 | "{1, 2, 3}" (20, green)         | T st   | x440..530  y324..344 (bl 345)
 *  b4 | caption (14, muted)             | T st   | x200..470  y373..381 (bl 377)
 *  b5 | "A×B=B×A" (24,amber) "⟺" "A=B" (24,green) "(non-empty sets)" (14,muted)
 *                                       | T st   | x347..732  y411..438 (bl 430)
 *  b6 | margin bar (red)                | Draw   | x60  y485..572
 *  b6 | header "Subset is NOT enough:"  | T st   | x76..263   y487..505 (bl 500)
 *  b6 | "A={1}, B={1,2}" (16)           | T st   | x76..196   y516..533 (bl 532)
 *  b6 | counterexample (15, red)        | T st   | x76..376   y552..569 (bl 564)
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  crossD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, CartesianAxes, IntervalDot } from "./math-kit";

const DOTS = [
  { x: 760, y: 220 },
  { x: 790, y: 200 },
  { x: 820, y: 245 },
  { x: 860, y: 210 },
  { x: 900, y: 235 },
  { x: 930, y: 195 },
  { x: 960, y: 255 },
  { x: 950, y: 215 },
];

export default function M11Ch02Sec3({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={70} size={28} fill={RED} anchor="middle" script>
          {t("Boundary rules — nail these before computing", "Boundary rules — pehle ye fix karo")}
        </T>
      </Fade>

      {/* beat 1 — A×B = ∅ ⟺ A=∅ or B=∅ */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={348} y={125} size={26} fill={AMBER_DARK} anchor="start" weight={800}>
          A × B = ∅
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={485} y={125} size={26} fill={INK} anchor="start" weight={800}>
          ⇔
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <T x={518} y={125} size={22} fill={INK} anchor="start" weight={700}>
          A = ∅  or  B = ∅
        </T>
      </Fade>

      {/* beat 2 — shelf analogy: one empty shelf → zero pairs */}
      <Draw on={beat >= 2} d={roundRectD(60, 185, 160, 50, 10)} stroke={MUTED} sw={2} delay={dl(2, 0)} />
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={140} y={219} size={26} fill={MUTED} anchor="middle">
          ∅
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={140} y={255} size={14} fill={MUTED} anchor="middle">
          {t("Shelf A (empty)", "Shelf A (khaali)")}
        </T>
      </Fade>
      <Draw on={beat >= 2} d={roundRectD(280, 185, 160, 50, 10)} stroke={INK} sw={2} delay={dl(2, 0.9)} />
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={330} y={216} size={18} fill={INK} anchor="middle" weight={700}>
          x
        </T>
        <T x={390} y={216} size={18} fill={INK} anchor="middle" weight={700}>
          y
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={360} y={255} size={14} fill={INK} anchor="middle">
          {t("Shelf B (has parts)", "Shelf B (bhara hua)")}
        </T>
      </Fade>
      <Draw on={beat >= 2} d={crossD(235, 195, 30, 30)} stroke={RED} sw={2.4} delay={dl(2, 1.7)} />
      <Fade on={beat >= 2} delay={dl(2, 2.1)}>
        <T x={250} y={275} size={14} fill={RED} anchor="middle" weight={700}>
          {t("0 pairs possible", "0 pairs possible")}
        </T>
      </Fade>

      {/* beat 3 — infinity persists: R×R is uncountable */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={835} y={172} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          R × R
        </T>
      </Fade>
      <CartesianAxes on={beat >= 3} delay={dl(3, 0.3)} originX={835} originY={280} xLeft={705} xRight={995} yTop={190} yBottom={280} step={40} />
      {DOTS.map((d, i) => (
        <IntervalDot key={i} on={beat >= 3} delay={dl(3, 0.9 + i * 0.12)} x={d.x} y={d.y} open={false} r={3} stroke={GREEN} />
      ))}
      <Fade on={beat >= 3} delay={dl(3, 2.1)}>
        <T x={835} y={298} size={13} fill={MUTED} anchor="middle">
          {t("uncountably many points", "ginti se bahar points")}
        </T>
      </Fade>

      {/* beat 4 — hidden assumption: elements must be distinct */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={200} y={345} size={20} fill={INK} anchor="start" weight={700}>
          {"{1, 2, "}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.35)}>
        <T x={282} y={345} size={20} fill={RED} anchor="start" weight={800}>
          2
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.35)}>
        <T x={300} y={345} size={20} fill={INK} anchor="start" weight={700}>
          {", 3}"}
        </T>
      </Fade>
      <Draw on={beat >= 4} d={crossD(280, 328, 16, 16)} stroke={RED} sw={2} delay={dl(4, 0.75)} />
      <Draw on={beat >= 4} d={arrowD(360, 335, 420, 335)} stroke={INK} sw={2} delay={dl(4, 1.15)} />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={440} y={345} size={20} fill={GREEN_DARK} anchor="start" weight={800}>
          {"{1, 2, 3}"}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.1)}>
        <T x={200} y={377} size={14} fill={MUTED} anchor="start">
          {t("distinct elements → clean count", "alag-alag elements → sahi count")}
        </T>
      </Fade>

      {/* beat 5 — A×B = B×A ⟺ A = B (non-empty) */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={347} y={430} size={24} fill={AMBER_DARK} anchor="start" weight={800}>
          A × B = B × A
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={518} y={430} size={24} fill={INK} anchor="start" weight={800}>
          ⇔
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <T x={545} y={430} size={24} fill={GREEN_DARK} anchor="start" weight={800}>
          A = B
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={620} y={430} size={14} fill={MUTED} anchor="start">
          {t("(non-empty sets)", "(non-empty sets)")}
        </T>
      </Fade>

      {/* beat 6 — guardrail: subset is NOT enough */}
      <Draw on={beat >= 6} d={`M 60 485 L 60 572`} stroke={RED} sw={3} delay={dl(6, 0)} />
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={76} y={500} size={17} fill={RED} anchor="start" weight={700}>
          {t("Subset is NOT enough:", "Subset kaafi NAHI hai:")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={76} y={532} size={16} fill={INK} anchor="start">
          A = {"{1}"}, B = {"{1, 2}"}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.4)}>
        <T x={76} y={564} size={15} fill={RED} anchor="start">
          {t(
            "(1,2) ∈ A×B but (2,1) ∉ A×B — sets differ",
            "(1,2) ∈ A×B par (2,1) ∉ A×B — sets alag hain"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
