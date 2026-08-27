/**
 * M11 Ch04 · Section 43 — "Euler's formula packages the polar form"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — opens subtopic 5 (Euler Form, De Moivre & Roots).
 *
 * Beats (board_reveal_at_english [0, 7.08, 20.05, 32.85, 45.74, 55.72, 67.33, 80.3]):
 *  0 subtitle: one symbol for cosθ + i sinθ
 *  1 formula e^(iθ)=cosθ+isinθ, z=r·e^(iθ) + diagram starts: axes, unit circle, r-circle, point z on r-circle
 *  2 text: e^(iθ) is the arrow of length 1 — point on the unit circle at same angle
 *  3 formula e^(iθ1)·e^(iθ2)=e^(i(θ1+θ2)) + second unit point at θ1+θ2, arc between them
 *  4 text: multiplication is rotation → multiplication adds exponents (caption)
 *  5 formula conjugate/reciprocal + reflected point r·e^(-iθ) on r-circle (mirrored across Re axis)
 *  6 formula cosθ/sinθ inverse relations (left column text)
 *  7 guardrail (red-margin): JEE extension, beyond NCERT Class 11 scope
 *
 * Layout plan (diagram box matches Sec1: axes c(540,390) x350..760 y250..545):
 *  b0 | subtitle (15,amber_dark,w700)      | T mid  | x540 y90
 *  b1 | formula line (16,ink)              | T mid  | x540 y120
 *  b1 | axes + Re/Im + O dot               | CartesianAxes/T/circle
 *  b1 | r-circle (muted) + unit-circle     | Draw   | circleD r130 / r70
 *  b1 | arrow O→Z1, label "z"              | Draw/T | (540,390)→Z1
 *  b2 | arrow O→U1, label "e^(iθ)"         | Draw/T | (540,390)→U1
 *  b3 | formula line (15,ink)              | T mid  | x540 y152
 *  b3 | arrow O→U2, arc U1..U2, "θ2" label | Draw/T |
 *  b4 | caption (14,amber_dark,script)     | T mid  | x540 y565
 *  b5 | arrow O→Zconj, label               | Draw/T |
 *  b5 | left col line "conjugate: ..."     | T st   | x60 y300
 *  b5 | left col line "reciprocal: ..."    | T st   | x60 y326
 *  b6 | left col line "cosθ = ..."         | T st   | x60 y366
 *  b6 | left col line "sinθ = ..."         | T st   | x60 y392
 *  b7 | red bar + guardrail text           | Draw/T | x60 y420..454 / x76 y440
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
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, pointOnCircle, angleArcD, circleD } from "./math-kit";

const CX = 540;
const CY = 390;
const R_UNIT = 70;
const R_Z = 130;

const deg = (d: number) => (d * Math.PI) / 180;
const THETA1 = deg(40);
const THETA2 = deg(35);
const THETA_SUM = THETA1 + THETA2;

const Z1 = pointOnCircle(CX, CY, R_Z, THETA1);
const Z1_LABEL = pointOnCircle(CX, CY, R_Z + 26, THETA1);
const U1 = pointOnCircle(CX, CY, R_UNIT, THETA1);
const U1_LABEL = pointOnCircle(CX, CY, R_UNIT + 24, THETA1);
const U2 = pointOnCircle(CX, CY, R_UNIT, THETA_SUM);
const U2_LABEL = pointOnCircle(CX, CY, R_UNIT + 26, THETA_SUM);
const ARC_LABEL = pointOnCircle(CX, CY, 46, (THETA1 + THETA_SUM) / 2);
const ZCONJ = pointOnCircle(CX, CY, R_Z, -THETA1);
const ZCONJ_LABEL = pointOnCircle(CX, CY, R_Z + 28, -THETA1);

export default function M11Ch04Sec43({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Euler's Formula Packages the Polar Form", "Euler's Formula Polar Form Ko Pack Karta Hai")}
        </T>
      </Fade>

      {/* beat 0 — subtitle */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={90} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("One symbol for cos θ + i sin θ", "cos θ + i sin θ ke liye ek symbol")}
        </T>
      </Fade>

      {/* beat 1 — the defining formula + diagram begins */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={120} size={16} fill={INK} anchor="middle">
          e^(iθ) = cos θ + i sin θ,&nbsp;&nbsp;&nbsp;&nbsp;z = r·e^(iθ)
        </T>
      </Fade>
      <CartesianAxes on={beat >= 1} delay={dl(1, 0.2)} originX={CX} originY={CY} xLeft={350} xRight={760} yTop={250} yBottom={545} showTicks={false} />
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={745} y={405} size={13} fill={MUTED} anchor="start">Re</T>
        <T x={552} y={258} size={13} fill={MUTED} anchor="start">Im</T>
        <Circle cx={CX} cy={CY} r={3.5} fill={INK} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d={circleD(CX, CY, R_UNIT)} stroke={MUTED} sw={1.4} dur={0.7} />
      <Draw on={beat >= 1} delay={dl(1, 0.9)} d={circleD(CX, CY, R_Z)} stroke={MUTED} sw={1.4} dur={0.8} />
      <Draw on={beat >= 1} delay={dl(1, 1.4)} d={arrowD(CX, CY, Z1.x, Z1.y)} stroke={INK} sw={2.4} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 1.9)}>
        <T x={Z1_LABEL.x} y={Z1_LABEL.y} size={15} fill={INK} anchor="start" weight={700}>z</T>
      </Fade>

      {/* beat 2 — the unit arrow e^(iθ) */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d={arrowD(CX, CY, U1.x, U1.y)} stroke={GREEN} sw={2.2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={U1_LABEL.x} y={U1_LABEL.y} size={13} fill={GREEN} anchor="start" weight={700}>e^(iθ)</T>
      </Fade>

      {/* beat 3 — multiplying two unit numbers adds the angles */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={152} size={15} fill={INK} anchor="middle">
          e^(iθ₁)·e^(iθ₂) = e^(i(θ₁+θ₂))
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.4)} d={arrowD(CX, CY, U2.x, U2.y)} stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 0.9)} d={angleArcD(CX, CY, 46, THETA1, THETA_SUM)} stroke={AMBER_DARK} sw={1.8} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <T x={ARC_LABEL.x} y={ARC_LABEL.y} size={12} fill={AMBER_DARK} anchor="middle" weight={700}>θ₂</T>
        <T x={U2_LABEL.x} y={U2_LABEL.y} size={12} fill={AMBER_DARK} anchor="start" weight={700}>e^(i(θ₁+θ₂))</T>
      </Fade>

      {/* beat 4 — caption */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={565} size={14} fill={AMBER_DARK} anchor="middle" script>
          {t("Multiplication is rotation — now it just adds exponents", "Multiplication rotation hai — ab bas exponents add hote hain")}
        </T>
      </Fade>

      {/* beat 5 — conjugate & reciprocal, shown as the mirrored point */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={arrowD(CX, CY, ZCONJ.x, ZCONJ.y)} stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={ZCONJ_LABEL.x} y={ZCONJ_LABEL.y} size={13} fill={INK} anchor="start" weight={700}>r·e^(-iθ)</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={60} y={300} size={14} fill={INK} anchor="start">conjugate: r·e^(-iθ)</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.3)}>
        <T x={60} y={326} size={14} fill={INK} anchor="start">reciprocal: (1/r)·e^(-iθ)</T>
      </Fade>

      {/* beat 6 — the inverse relations, running Euler backwards */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={60} y={366} size={14} fill={INK} anchor="start">cos θ = (e^(iθ)+e^(-iθ)) / 2</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={60} y={392} size={14} fill={INK} anchor="start">sin θ = (e^(iθ)-e^(-iθ)) / (2i)</T>
      </Fade>

      {/* beat 7 — guardrail: scope note */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d="M 60 420 L 60 454" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={76} y={442} size={15} fill={RED} anchor="start" weight={700}>
          {t("JEE extension — beyond NCERT Class 11 scope.", "JEE extension — NCERT Class 11 se aage.")}
        </T>
      </Fade>
    </Scene>
  );
}
