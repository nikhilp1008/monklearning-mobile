/**
 * M11 Ch04 · Section 29 — "Worked: all four quadrants at once"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — subtopic 3 (The Argand Plane and Polar Representation).
 *
 * Beats (board_reveal_at_english [0, 6.74, 16.21, 28.84, 44.54, 59.05, 68.95, 80.13]):
 *  0 heading: one example, every quadrant
 *  1 text: find modulus + principal argument of ±1 ± i√3
 *  2 formula: r=√(1+3)=2, α=arctan(√3)=π/3 — axes + guide circle r=2 drawn
 *  3 QI point 1+i√3 (arg π/3) + QII point -1+i√3 (arg 2π/3), each with its
 *    own argument arc (nested radii so the two don't overlap)
 *  4 QIII point -1-i√3 (arg -2π/3) + QIV point 1-i√3 (arg -π/3), mirrored below
 *  5 text: all four share r=2, α=π/3 — only the quadrant differs
 *  6 guardrail (red-margin): quadrants III & IV give negative arguments
 *  7 text: this one problem drills every row of the quadrant table
 *
 * Layout plan (single unifying diagram c(540,335) r125 — the four points form a
 * rectangle inscribed in the r=2 guide circle, symmetric about both axes):
 *  b0 | subtitle (15,amber_dark,w700)   | T mid | x540 y90
 *  b1 | text line (15,ink)              | T mid | x540 y122
 *  b2 | formula line (15,ink)           | T mid | x540 y154
 *  b2 | axes c(540,335) x340..740 y170..460 | CartesianAxes (no ticks)
 *  b2 | Re/Im labels                    | T st  | (745,351) (552,178)
 *  b2 | O dot                           | circle| (540,335) r3.5
 *  b3 | QI arrow+pt+label+arc(r50)      | Draw/T| θ=π/3
 *  b3 | QII arrow+pt+label+arc(r65)     | Draw/T| θ=2π/3
 *  b4 | QIV arrow+pt+label+arc(r50)     | Draw/T| θ=-π/3
 *  b4 | QIII arrow+pt+label+arc(r65)    | Draw/T| θ=-2π/3
 *  b5 | summary text                    | T mid | x540 y490
 *  b6 | red bar + guardrail text        | Draw/T| x60 y506..540 / x76 y528
 *  b7 | closing caption (script)        | T mid | x540 y575
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
  INK,
  MUTED,
  AMBER_DARK,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, pointOnCircle, angleArcD, circleD } from "./math-kit";

const CX = 540;
const CY = 335;
const R = 125;

const deg = (d: number) => (d * Math.PI) / 180;

const QI = pointOnCircle(CX, CY, R, deg(60));
const QII = pointOnCircle(CX, CY, R, deg(120));
const QIII = pointOnCircle(CX, CY, R, deg(240));
const QIV = pointOnCircle(CX, CY, R, deg(300));

const ARC_QI_LABEL = pointOnCircle(CX, CY, 70, deg(30));
const ARC_QII_LABEL = pointOnCircle(CX, CY, 85, deg(100)); // biased away from QI's 60° ray
const ARC_QIII_LABEL = pointOnCircle(CX, CY, 85, deg(-100));
const ARC_QIV_LABEL = pointOnCircle(CX, CY, 70, deg(-30));

export default function M11Ch04Sec29({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Worked: All Four Quadrants at Once", "Worked: Chaaron Quadrants Ek Saath")}
        </T>
      </Fade>

      {/* beat 0 — subtitle */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={90} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("One example, every quadrant", "Ek example, sab quadrants")}
        </T>
      </Fade>

      {/* beat 1 — the task */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={122} size={15} fill={INK} anchor="middle">
          {t(
            "Find modulus and principal argument of each of ±1 ± i√3.",
            "±1 ± i√3 ka modulus aur principal argument nikaalo."
          )}
        </T>
      </Fade>

      {/* beat 2 — r=2, α=π/3, axes + guide circle */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={154} size={15} fill={INK} anchor="middle">r = √(1 + 3) = 2,   α = arctan(√3) = π/3</T>
      </Fade>
      <CartesianAxes on={beat >= 2} delay={dl(2, 0.4)} originX={CX} originY={CY} xLeft={340} xRight={740} yTop={170} yBottom={460} showTicks={false} />
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={745} y={351} size={13} fill={MUTED} anchor="start">Re</T>
        <T x={552} y={178} size={13} fill={MUTED} anchor="start">Im</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <Circle cx={CX} cy={CY} r={3.5} fill={INK} />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1)} d={circleD(CX, CY, R)} stroke={MUTED} sw={1.4} dur={0.8} />

      {/* beat 3 — QI and QII */}
      <Draw on={beat >= 3} delay={dl(3, 0)} d={arrowD(CX, CY, QI.x, QI.y)} stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={QI.x + 14} y={QI.y - 10} size={14} fill={INK} anchor="start" weight={700}>1 + i√3</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.7)} d={angleArcD(CX, CY, 50, 0, deg(60))} stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 1.1)}>
        <T x={ARC_QI_LABEL.x} y={ARC_QI_LABEL.y} size={13} fill={AMBER_DARK} anchor="middle" weight={700}>π/3</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.4)} d={arrowD(CX, CY, QII.x, QII.y)} stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={QII.x - 14} y={QII.y - 10} size={14} fill={INK} anchor="end" weight={700}>-1 + i√3</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 2.1)} d={angleArcD(CX, CY, 65, 0, deg(120))} stroke={AMBER_DARK} sw={2} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 2.6)}>
        <T x={ARC_QII_LABEL.x} y={ARC_QII_LABEL.y} size={13} fill={AMBER_DARK} anchor="middle" weight={700}>2π/3</T>
      </Fade>

      {/* beat 4 — QIV and QIII (mirrored below the real axis) */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d={arrowD(CX, CY, QIV.x, QIV.y)} stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={QIV.x + 14} y={QIV.y + 16} size={14} fill={INK} anchor="start" weight={700}>1 - i√3</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.7)} d={angleArcD(CX, CY, 50, 0, deg(-60))} stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={ARC_QIV_LABEL.x} y={ARC_QIV_LABEL.y} size={13} fill={AMBER_DARK} anchor="middle" weight={700}>-π/3</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.4)} d={arrowD(CX, CY, QIII.x, QIII.y)} stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <T x={QIII.x - 14} y={QIII.y + 16} size={14} fill={INK} anchor="end" weight={700}>-1 - i√3</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 2.1)} d={angleArcD(CX, CY, 65, 0, deg(-120))} stroke={AMBER_DARK} sw={2} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 2.6)}>
        <T x={ARC_QIII_LABEL.x} y={ARC_QIII_LABEL.y} size={13} fill={AMBER_DARK} anchor="middle" weight={700}>-2π/3</T>
      </Fade>

      {/* beat 5 — summary */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={490} size={15} fill={INK} anchor="middle">
          {t(
            "All four share r = 2 and α = π/3 — only the quadrant differs.",
            "Chaaron ka r = 2 aur α = π/3 same hai — sirf quadrant badalta hai."
          )}
        </T>
      </Fade>

      {/* beat 6 — guardrail */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 60 506 L 60 540" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={528} size={16} fill={RED} anchor="start" weight={700}>
          {t("Quadrants III & IV give negative arguments.", "Quadrant III aur IV negative arguments dete hain.")}
        </T>
      </Fade>

      {/* beat 7 — closing */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={575} size={14} fill={AMBER_DARK} anchor="middle" script>
          {t(
            "One example drills every row of the quadrant table",
            "Ek hi example poore quadrant table ki har row drill karta hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
