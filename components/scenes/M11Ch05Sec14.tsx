/**
 * M11 Ch05 · Section 14 — "Why one test point decides an entire side"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md.
 *
 * Beats (en [0,11.78,23.72,31.4,44.8,55.13,70.06,81.83], hi
 * [0,11.35,24.23,31.06,42.5,52.82,66.39,79.1]):
 *  0 heading — axes drawn (registers × pens), ticks + labels
 *  1 text: register ₹40, pen ₹20, budget ₹120 (context caption)
 *  2 formula (high): 40x+20y≤120 ⇒ (÷20) ⇒ 2x+y≤6
 *  3 text: sample valid pairs — (3,0) and (2,1) plotted
 *  4 text: fill a triangular patch — line + region shaded (HalfPlaneShade)
 *  5 text: same sign throughout each side — outside point (3,3) fails
 *  6 note (red-margin, high): test ONE point (origin) — reports for the side
 *  7 diagram: region labeled 2x+y≤6, intercept (0,6) added
 *
 * Layout plan:
 *  b0 | axes (no auto ticks)      | Draw   | origin(140,500) x100..700 y180..500
 *  b0 | ticks+numerals 1,2,3/2,4,6| Draw+T | x-axis y515 · y-axis x125
 *  b0 | "registers"/"pens" labels | T      | x705,495 / x108,170
 *  b1 | context caption (15,ink)  | T mid  | bl 118
 *  b2 | formula (18,ink,w700)     | T mid  | bl 155
 *  b3 | (3,0) dot+label, (2,1)    | circle/T | (530,500)/(400,450)
 *  b4 | line + green half-shade   | Draw/Fade| (140,200)-(530,500)
 *  b5 | outside point (3,3) ✗     | circle/T | (530,350)
 *  b6 | origin test (0,0) ✓       | circle/T | (140,500)
 *  b6 | guardrail caption (16,red)| T mid  | bl 560
 *  b7 | (0,6) dot + region label  | circle/T | (140,200) · x300,y420
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, GREEN_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, HalfPlaneShade, tickD, checkD } from "./math-kit";

const ORIGIN_X = 140;
const ORIGIN_Y = 500;
const XSTEP = 130; // px per register
const YSTEP = 50; // px per pen

export default function M11Ch05Sec14({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={24} fill={RED} script>
          {t("one test point speaks for the whole side", "ek test point poori side ke liye bolta hai")}
        </T>
      </Fade>

      {/* beat 0 — the axes: registers × pens */}
      <CartesianAxes on={beat >= 0} delay={dl(0, 0.3)} originX={ORIGIN_X} originY={ORIGIN_Y} xLeft={100} xRight={700} yTop={180} yBottom={500} showTicks={false} />
      <Draw
        on={beat >= 0}
        delay={dl(0, 1.0)}
        d={[1, 2, 3].map((v) => tickD(ORIGIN_X + v * XSTEP, ORIGIN_Y, 6)).join(" ")}
        stroke={INK}
        sw={1.4}
        dur={0.5}
      />
      <Draw
        on={beat >= 0}
        delay={dl(0, 1.4)}
        d={[2, 4, 6].map((v) => tickD(ORIGIN_X, ORIGIN_Y - v * YSTEP, 6)).join(" ")}
        stroke={INK}
        sw={1.4}
        dur={0.5}
      />
      {[1, 2, 3].map((v) => (
        <Fade key={v} on={beat >= 0} delay={dl(0, 1.9)}>
          <T x={ORIGIN_X + v * XSTEP} y={515} size={12} fill={MUTED}>
            {v}
          </T>
        </Fade>
      ))}
      {[2, 4, 6].map((v) => (
        <Fade key={v} on={beat >= 0} delay={dl(0, 2.1)}>
          <T x={ORIGIN_X - 14} y={ORIGIN_Y - v * YSTEP + 4} size={12} fill={MUTED} anchor="end">
            {v}
          </T>
        </Fade>
      ))}
      <Fade on={beat >= 0} delay={dl(0, 2.5)}>
        <T x={705} y={495} size={15} fill={INK} anchor="start">
          {t("registers", "registers")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 2.8)}>
        <T x={108} y={168} size={14} fill={INK} anchor="start">
          {t("pens", "pens")}
        </T>
      </Fade>

      {/* beat 1 — the context */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={118} size={15} fill={INK} script>
          {t("register ₹40 · pen ₹20 · budget ₹120", "register ₹40 · pen ₹20 · budget ₹120")}
        </T>
      </Fade>

      {/* beat 2 — the inequality, simplified */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={155} size={18} fill={INK} weight={700}>
          40x + 20y ≤ 120 ⇒ (÷20) ⇒ 2x + y ≤ 6
        </T>
      </Fade>

      {/* beat 3 — sample valid pairs */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Circle cx={ORIGIN_X + 3 * XSTEP} cy={ORIGIN_Y} r={5} fill={INK} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={ORIGIN_X + 3 * XSTEP + 10} y={ORIGIN_Y - 6} size={12} fill={MUTED} anchor="start">
          {t("(3,0) — 3 registers", "(3,0) — 3 registers")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.3)}>
        <Circle cx={ORIGIN_X + 2 * XSTEP} cy={ORIGIN_Y - YSTEP} r={5} fill={INK} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.7)}>
        <T x={ORIGIN_X + 2 * XSTEP + 10} y={ORIGIN_Y - YSTEP - 8} size={12} fill={MUTED} anchor="start">
          {t("(2,1) — 2 reg + 1 pen", "(2,1) — 2 reg + 1 pen")}
        </T>
      </Fade>

      {/* beat 4 — the boundary line and the filled region */}
      <Draw on={beat >= 4} delay={dl(4, 0.3)} d={`M ${ORIGIN_X} 200 L ${ORIGIN_X + 3 * XSTEP} ${ORIGIN_Y}`} stroke={INK} sw={2.4} dur={0.9} />
      <HalfPlaneShade
        on={beat >= 4}
        delay={dl(4, 1.3)}
        x1={ORIGIN_X}
        y1={200}
        x2={ORIGIN_X + 3 * XSTEP}
        y2={ORIGIN_Y}
        testX={ORIGIN_X}
        testY={ORIGIN_Y}
        boxX={100}
        boxY={180}
        boxW={600}
        boxH={320}
        fill={GREEN}
        opacity={0.18}
      />

      {/* beat 5 — same sign throughout each side */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Circle cx={ORIGIN_X + 3 * XSTEP} cy={ORIGIN_Y - 3 * YSTEP} r={5} fill={RED} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={ORIGIN_X + 3 * XSTEP + 10} y={ORIGIN_Y - 3 * YSTEP - 6} size={12} fill={RED} anchor="start">
          2(3)+3 = 9 &gt; 6 (over budget)
        </T>
      </Fade>

      {/* beat 6 — the one-point trick, tested at the origin */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Circle cx={ORIGIN_X} cy={ORIGIN_Y} r={6} fill={GREEN} stroke={INK} strokeWidth={1.5} />
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.7)} d={checkD(ORIGIN_X + 22, ORIGIN_Y - 18, 14)} stroke={GREEN} sw={2.6} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={540} y={560} size={16} fill={RED} script>
          {t(
            "test ONE point (usually the origin) — it speaks for the whole half-plane",
            "sirf EK point test karo (usually origin) — poore half-plane ke liye bolta hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — finish the picture */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Circle cx={ORIGIN_X} cy={200} r={5} fill={INK} />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={ORIGIN_X + 10} y={197} size={12} fill={MUTED} anchor="start">
          (0,6)
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.0)}>
        <T x={300} y={420} size={16} fill={GREEN_DARK} weight={700} anchor="start">
          2x + y ≤ 6
        </T>
      </Fade>
    </Scene>
  );
}
