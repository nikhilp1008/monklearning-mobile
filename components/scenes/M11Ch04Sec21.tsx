/**
 * M11 Ch04 · Section 21 — "The Argand plane: distance and direction"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — opens subtopic 3 (The Argand Plane and Polar Representation).
 *
 * Worked example chosen from the JSON's own generic z=x+iy / P(x,y) description:
 * a concrete 3-4-5 point z = 4 + 3i (r=5, θ=arctan(3/4)≈36.87°=0.6435 rad, Q1) —
 * board scale 40px/unit → pixel offset (160,120) from origin, radius 200px.
 *
 * Beats (board_reveal_at_english [0, 7.94, 18.6, 27.14, 35.5, 48.13, 56.75, 71.59]):
 *  0 subtitle: complex numbers as points and arrows
 *  1 text: z=x+iy is the point (x,y), or the arrow from origin to it
 *  2 text: horizontal axis real, vertical axis imaginary
 *  3 THE DIAGRAM: axes, point z=4+3i plotted, arrow O->z, right-triangle legs
 *    (green x-leg along Re axis, drop leg up to z), angle arc θ at origin
 *  4 explain: modulus |z|=r -> distance; argument arg z=θ -> direction (two chips)
 *  5 formula: label the legs "x = r cosθ" (green) and "y = r sinθ" (on-diagram)
 *  6 text: same point, two descriptions — Cartesian vs polar (bottom caption)
 *  7 guardrail (red-margin): multiplying by i (r=1, θ=90°) is a pure quarter-turn
 *
 * Layout plan (origin CX=540 CY=380; axes xLeft330..xRight820 yTop240..yBottom540):
 *  b0 | subtitle (15,amber,w700)      | T mid | x540  y88
 *  b1 | "z=x+iy..." (16,ink)          | T mid | x540  y118
 *  b2 | "horizontal axis..." (15,ink) | T mid | x540  y148
 *  b3 | axes (no ticks)               | CartesianAxes | x330..820 y240..540
 *  b3 | Re/Im labels                  | T st  | (805,395) (552,248)
 *  b3 | O dot                         | circle| (540,380) r3.5
 *  b3 | arrow O->z                    | Draw  | (540,380)->(700,260)
 *  b3 | z label                       | T st  | (712,246)
 *  b3 | green leg O->foot (=x)        | Draw  | (540,380)->(700,380)
 *  b3 | drop leg foot->z (=y)         | Draw  | (700,380)->(700,260)
 *  b3 | angle arc + θ label           | Draw/T| r50, label r75 mid .32175
 *  b4 | chip "|z|=r -> distance"      | Chip  | x355..525 y445..483
 *  b4 | chip "argz=θ -> direction"    | Chip  | x550..735 y445..483
 *  b5 | "x = r cosθ" (green)          | T mid | (620,402)
 *  b5 | "y = r sinθ" (ink)            | T st  | (714,320)
 *  b6 | caption (14,amber_dark,script)| T mid | x540 y566
 *  b7 | red bar                       | Draw  | x60 y168..202
 *  b7 | guardrail text (16,red,w700)  | T st  | x76 y190
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
  arrowD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, pointOnCircle, angleArcD, lineD } from "./math-kit";

const CX = 540;
const CY = 380;
const R = 200;
const THETA = 0.6435; // arctan(3/4), 3-4-5 triangle, Q1
const Z = pointOnCircle(CX, CY, R, THETA);
const FOOT = { x: Z.x, y: CY };
const ARC_LABEL = pointOnCircle(CX, CY, 75, THETA / 2);

export default function M11Ch04Sec21({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("The Argand Plane: Distance and Direction", "Argand Plane: Distance aur Direction")}
        </T>
      </Fade>

      {/* beat 0 — subtitle */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={88} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Complex numbers as points and arrows", "Complex numbers — points aur arrows ki tarah")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={118} size={16} fill={INK} anchor="middle">
          {t(
            "z = x + iy is the point (x, y) — or the arrow from the origin to it.",
            "z = x + iy point (x, y) hai — ya origin se us tak jaata arrow."
          )}
        </T>
      </Fade>

      {/* beat 2 */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={148} size={15} fill={INK} anchor="middle">
          {t(
            "The horizontal axis is real, the vertical axis is imaginary.",
            "Horizontal axis real hai, vertical axis imaginary."
          )}
        </T>
      </Fade>

      {/* beat 3 — THE DIAGRAM: axes, point z, right-triangle legs, angle arc */}
      <CartesianAxes on={beat >= 3} delay={dl(3, 0)} originX={CX} originY={CY} xLeft={330} xRight={820} yTop={240} yBottom={540} showTicks={false} />
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={805} y={395} size={13} fill={MUTED} anchor="start">Re</T>
        <T x={552} y={248} size={13} fill={MUTED} anchor="start">Im</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.35)}>
        <Circle cx={CX} cy={CY} r={3.5} fill={INK} />
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.6)} d={arrowD(CX, CY, Z.x, Z.y)} stroke={INK} sw={2.4} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 1.1)}>
        <T x={Z.x + 12} y={Z.y - 14} size={14} fill={INK} anchor="start" weight={700}>
          z = 4 + 3i
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.5)} d={lineD(CX, CY, FOOT.x, FOOT.y)} stroke={GREEN} sw={2.6} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 1.9)} d={lineD(FOOT.x, FOOT.y, Z.x, Z.y)} stroke={MUTED} sw={1.6} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 2.3)} d={angleArcD(CX, CY, 50, 0, THETA)} stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 2.8)}>
        <T x={ARC_LABEL.x} y={ARC_LABEL.y} size={13} fill={AMBER_DARK} anchor="middle" weight={700}>
          θ
        </T>
      </Fade>

      {/* beat 4 — explain: modulus = distance, argument = direction */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <Chip x={355} y={445} w={170} h={38} fill="#FCF4E0" stroke={INK} textFill={INK} size={14} script={false}>
          {t("|z| = r → distance", "|z| = r → kitna door")}
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <Chip x={550} y={445} w={190} h={38} fill="#FCF4E0" stroke={AMBER_DARK} textFill={INK} size={14} script={false}>
          {t("arg z = θ → direction", "arg z = θ → kis taraf")}
        </Chip>
      </Fade>

      {/* beat 5 — formula: label the legs on the diagram */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={620} y={402} size={13} fill={GREEN} anchor="middle" weight={700}>
          x = r cosθ
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={714} y={320} size={13} fill={INK} anchor="start" weight={700}>
          y = r sinθ
        </T>
      </Fade>

      {/* beat 6 — caption: two descriptions of the same point */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={566} size={14} fill={AMBER_DARK} anchor="middle" script>
          {t(
            "Same point, two descriptions — Cartesian 'x east, y north', or polar 'r at angle θ'.",
            "Ek hi point, do descriptions — Cartesian 'x east, y north', ya polar 'r angle θ par'."
          )}
        </T>
      </Fade>

      {/* beat 7 — guardrail: i is a pure quarter-turn */}
      <Draw on={beat >= 7} delay={dl(7, 0)} d="M 60 168 L 60 202" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={76} y={190} size={16} fill={RED} anchor="start" weight={700}>
          {t("Multiplying by i (r=1, θ=90°) is a pure quarter-turn.", "i se multiply (r=1, θ=90°) ek pure quarter-turn hai.")}
        </T>
      </Fade>
    </Scene>
  );
}
