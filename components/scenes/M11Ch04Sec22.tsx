/**
 * M11 Ch04 · Section 22 — "The argument, and its principal value"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept.
 *
 * No JSON "diagram" item this section — built from the text: a point z at
 * θ0 = 5π/6 (150°, Q2) shows a principal-argument arc, and a small inset
 * number line renders the boundary rule literally: OPEN dot at -π (excluded),
 * CLOSED dot at π (included) — the exact (-π, π] the JSON states.
 *
 * Beats (board_reveal_at_english [0, 9.3, 17.41, 28.42, 39.94, 50.09, 68.44, 78.08]):
 *  0 subtitle: argument, the angle made unique
 *  1 formula: tanθ = y/x
 *  2 text: many-valued — θ and θ+2nπ point the same way
 *  3 THE DIAGRAM: axes, point z at θ0=5π/6, principal arc + inset range line
 *  4 guardrail (red-margin): arg(0) undefined — ring around the origin
 *  5 text: calculator's tan⁻¹(y/x) only reaches (-π/2, π/2) — quadrant trap
 *  6 guardrail (red-margin): outside (-π, π] is not the principal argument
 *  7 text: reduce a stray angle by ±2π until it lands in range
 *
 * Layout plan (origin CX=540 CY=380; axes xLeft330..xRight820 yTop240..yBottom540):
 *  b0 | subtitle (15,amber,w700)   | T mid | x540 y88
 *  b1 | "tanθ=y/x" (16,ink)        | T mid | x540 y118
 *  b2 | many-valued text (15,ink)  | T mid | x540 y148
 *  b3 | axes (no ticks)            | CartesianAxes | x330..820 y240..540
 *  b3 | Re/Im labels               | T st  | (805,395) (552,248)
 *  b3 | O dot, arrow O->z          | Draw  | (540,380)->(384,290)
 *  b3 | "z" label                  | T end | (370,278)
 *  b3 | arc 0->5π/6 (green) + label | Draw/T| r60, label r85 mid 1.309
 *  b3 | range note (13,ink)        | T st  | x410 y525
 *  b3 | inset number line, dots    | Draw  | y555 x410..670
 *  b4 | ring @ O                   | Draw  | rx17.5 ry15.5
 *  b4 | guardrail text (14,red)    | T st  | x610 y440/462
 *  b5 | muted arc -π/2..π/2        | Draw  | r110 (max reach x650)
 *  b5 | "calculator's range" label | T st  | (665,362) — clear of arc's x<=650
 *  b6 | red bar + text             | Draw/T| x60 y168..202, (76,190)
 *  b7 | caption (14,amber_dark)    | T st  | (650,300)
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
  arrowD,
  ringD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, pointOnCircle, angleArcD, lineD, IntervalDot } from "./math-kit";

const CX = 540;
const CY = 380;
const THETA0 = 2.61799; // 5π/6, 150°, Q2
const R = 180;
const P = pointOnCircle(CX, CY, R, THETA0);
const ARC_LABEL = pointOnCircle(CX, CY, 85, THETA0 / 2);

export default function M11Ch04Sec22({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("The Argument, and Its Principal Value", "Argument, aur Uska Principal Value")}
        </T>
      </Fade>

      {/* beat 0 — subtitle */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={88} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("The argument: the angle, made unique", "Argument: angle, unique banaya hua")}
        </T>
      </Fade>

      {/* beat 1 — formula */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={118} size={16} fill={INK} anchor="middle">
          tanθ = y/x
        </T>
      </Fade>

      {/* beat 2 — many-valued */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={148} size={15} fill={INK} anchor="middle">
          {t(
            "The argument is many-valued: if θ works, so does θ + 2nπ.",
            "Argument many-valued hai: agar θ chalta hai, θ + 2nπ bhi chalega."
          )}
        </T>
      </Fade>

      {/* beat 3 — THE DIAGRAM: axes, point z, principal arc, inset range line */}
      <CartesianAxes on={beat >= 3} delay={dl(3, 0)} originX={CX} originY={CY} xLeft={330} xRight={820} yTop={240} yBottom={540} showTicks={false} />
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={805} y={395} size={13} fill={MUTED} anchor="start">Re</T>
        <T x={552} y={248} size={13} fill={MUTED} anchor="start">Im</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.35)}>
        <Circle cx={CX} cy={CY} r={3.5} fill={INK} />
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.55)} d={arrowD(CX, CY, P.x, P.y)} stroke={INK} sw={2.4} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 1.05)}>
        <T x={P.x - 12} y={P.y - 10} size={14} fill={INK} anchor="end" weight={700}>z</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.35)} d={angleArcD(CX, CY, 60, 0, THETA0)} stroke={GREEN} sw={2.2} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 1.95)}>
        <T x={ARC_LABEL.x} y={ARC_LABEL.y} size={13} fill={GREEN} anchor="middle" weight={700}>
          θ = 5π/6
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.3)}>
        <T x={410} y={525} size={13} fill={INK} anchor="start">
          {t("principal range:", "principal range:")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 2.55)} d={lineD(410, 555, 670, 555)} stroke={INK} sw={1.4} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 2.75)} d={lineD(430, 555, 650, 555)} stroke={GREEN} sw={4} dur={0.4} />
      <IntervalDot on={beat >= 3} delay={dl(3, 3.1)} x={430} y={555} open r={5} stroke={INK} />
      <IntervalDot on={beat >= 3} delay={dl(3, 3.3)} x={650} y={555} open={false} r={5} stroke={INK} />
      <Fade on={beat >= 3} delay={dl(3, 3.5)}>
        <T x={430} y={575} size={12} fill={INK} anchor="middle">-π</T>
        <T x={650} y={575} size={12} fill={INK} anchor="middle">π</T>
        <T x={540} y={575} size={11} fill={MUTED} anchor="middle">0</T>
      </Fade>

      {/* beat 4 — guardrail: arg(0) undefined */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d={ringD(CX, CY, 17.5, 15.5)} stroke={RED} sw={2} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <T x={610} y={440} size={14} fill={RED} anchor="start" weight={700}>
          {t("arg(0) is undefined —", "arg(0) undefined hai —")}
        </T>
        <T x={610} y={462} size={14} fill={RED} anchor="start" weight={700}>
          {t("the origin has no direction.", "origin ki koi direction nahi.")}
        </T>
      </Fade>

      {/* beat 5 — calculator range trap */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={angleArcD(CX, CY, 110, -Math.PI / 2, Math.PI / 2)} stroke={MUTED} sw={1.6} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={665} y={362} size={12} fill={MUTED} anchor="start">
          {t("calculator's tan⁻¹ range", "calculator ka tan⁻¹ range")}
        </T>
      </Fade>

      {/* beat 6 — guardrail: outside (-π,π] is not principal */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d="M 60 168 L 60 202" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={76} y={190} size={16} fill={RED} anchor="start" weight={700}>
          {t("A value outside (-π, π] is not the principal argument.", "(-π, π] ke bahar wala value principal argument nahi hai.")}
        </T>
      </Fade>

      {/* beat 7 — reduce by ±2π */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={650} y={300} size={14} fill={AMBER_DARK} anchor="start">
          {t("Reduce a stray angle by ±2π to land in range.", "Bahar wale angle ko ±2π se range mein le aao.")}
        </T>
      </Fade>
    </Scene>
  );
}
