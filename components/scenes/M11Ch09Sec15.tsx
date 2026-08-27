/**
 * M11 Ch09 · Section 15 — "Worked: Collinearity, then Angle"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — two tools chained (collinearity fixes a, then the angle formula).
 *
 * Numbers verified from JSON:
 *  P(1,1), Q(4,7), R(a,a+5). slope(PQ) = (7-1)/(4-1) = 2. Collinear => slope(PR) = 2:
 *  (a+4)/(a-1) = 2 => a+4 = 2a-2 => a = 6. R = (6,11) [a+5=11 ✓]. Line PQR slope m1 = 2.
 *  Angle with y=x (slope 1): tanθ = |(1-2)/(1+2·1)| = |-1/3| = 1/3, θ = tan⁻¹(1/3) ≈ 18.43°.
 *  Bonus check: line PQR (y=2x-1) meets y=x exactly at x=1,y=1 — i.e. AT point P. The angle
 *  vertex is P itself, and the ray P->R (angle atan(2)=63.43°) vs ray along y=x (atan(1)=45°)
 *  brackets exactly θ=18.43° — the arc target is the two literal drawn rays, not a constructed one.
 *
 * board_content: item0 (heading) -> always-on title. items1-7 -> beat>=1..7.
 * reveals_english = [0, 6.49, 19.97, 27.22, 43.78, 54.95, 67.5, 74.67].
 *
 * Beats:
 *  1 | statement (P,Q,R given) + axes, P dot+label, Q dot+label (R withheld — a unknown)
 *  2 | slope(PQ)=2 formula + rise/run legs on P-Q
 *  3 | a=6 (HIGH chip) + R plotted + the FULL line through P,Q,R drawn (green) — collinearity lands
 *  4 | text (R=(6,11), m1=2, angle with y=x?) + y=x reference line drawn (amber)
 *  5 | tanθ=1/3 formula + preliminary thin angle arc at P
 *  6 | θ≈18.43° (HIGH chip) + arc recolors/thickens amber + θ label lands
 *  7 | red guardrail note (two tools chained) + sanity checkmark stamp
 *
 * Layout plan (single centered text column x540, one diagram below):
 *  title (always-on)   | T mid script22 red   | x540 y64  box y35.4..75.0
 *  b1 statement          | T mid15               | x540 y104 box y92.3..108.65 w427
 *  b2 formula             | T mid17 w700           | x540 y140 box y126.74..145.27 w238
 *  b3 chip (HIGH)         | Chip w400 h44          | x340 y164..208
 *  b4 statement            | T mid15               | x540 y248 box y236.3..252.65 w480
 *  b5 formula               | T mid17 w700          | x540 y284 box y270.74..289.27 w255
 *  b6 chip (HIGH)           | Chip w250 h44          | x415 y308..352
 *  b7 red note              | T mid16 w700 red       | x540 y392 box y379.52..396.96 w560
 *  diagram: axis box x[494.5,585.5] y[419,588], scale13, origin(494.5,575):
 *    P(1,1)=(507.5,562) Q(4,7)=(546.5,484) R(6,11)=(572.5,432) [solved a=6]
 *    PQR line extended (494.5,588)-(579,419) [slope 2 math, screen slope -2 — passes through all 3]
 *    y=x line extended (494.5,575)-(585.5,484) [slope 1 math] — meets PQR line exactly AT P
 *    angle arc at P, theta1=atan(1)=0.7854 (y=x ray toward Q/R side), theta2=atan(2)=1.1071
 *    (PQR ray toward Q,R) — the swept 18.43° between them is genuinely θ.
 *  Diagram top (419) clears text stack bottom (396.96) by 22px.
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
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, lineD, angleArcD, pointOnCircle, checkD } from "./math-kit";

const S = 13;
const OX = 494.5;
const OY = 575;
function toScreen(x: number, y: number) {
  return { x: OX + S * x, y: OY - S * y };
}

const P = toScreen(1, 1); // (507.5,562)
const Q = toScreen(4, 7); // (546.5,484)
const R = toScreen(6, 11); // (572.5,432) — uses solved a=6
const FOOT = { x: Q.x, y: P.y }; // (546.5,562) — for the P-Q rise/run legs

const LINE_START = toScreen(0, -1); // (494.5,588) — PQR line (y=2x-1) clipped to axis box
const LINE_END = toScreen(6.5, 12); // (579,419)
const DIAG_START = toScreen(0, 0); // (494.5,575) — y=x reference line
const DIAG_END = toScreen(7, 7); // (585.5,484)

const THETA1 = Math.atan(1); // 0.7854 rad — y=x ray direction
const THETA2 = Math.atan(2); // 1.1071 rad — PQR ray direction (toward Q,R)
const ARC_R = 24;
const THETA_LABEL = pointOnCircle(P.x, P.y, ARC_R + 14, (THETA1 + THETA2) / 2);

export default function M11Ch09Sec15({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const thetaHi = beat >= 6;

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} anchor="middle" script>
          {t("Worked: Collinearity, then Angle", "Worked: Collinearity, phir Angle")}
        </T>
      </Fade>

      {/* ===== beat 1 — statement + axes, P and Q (R withheld) ===== */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={104} size={15} fill={INK} anchor="middle">
          {t(
            "P(1,1), Q(4,7), R(a,a+5). Find a making them collinear.",
            "P(1,1), Q(4,7), R(a,a+5). a nikaalo taaki teeno collinear ho."
          )}
        </T>
      </Fade>
      <CartesianAxes on={beat >= 1} delay={dl(1, 0.5)} originX={OX} originY={OY} xLeft={494.5} xRight={585.5} yTop={419} yBottom={588} showTicks={false} />
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <Circle cx={P.x} cy={P.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={482} y={566} size={12} fill={INK} anchor="end" weight={700}>P(1,1)</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.0)}>
        <Circle cx={Q.x} cy={Q.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.3)}>
        <T x={521} y={470} size={12} fill={INK} anchor="end" weight={700}>Q(4,7)</T>
      </Fade>

      {/* ===== beat 2 — slope(PQ)=2 formula + rise/run legs ===== */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={140} size={17} fill={INK} anchor="middle" weight={700}>
          slope(PQ) = (7-1)/(4-1) = 2
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d={lineD(P.x, P.y, FOOT.x, FOOT.y)} stroke={MUTED} sw={1.6} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={527} y={548} size={11} fill={MUTED} anchor="middle">4-1</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.5)} d={lineD(FOOT.x, FOOT.y, Q.x, Q.y)} stroke={MUTED} sw={1.6} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 2.1)}>
        <T x={560} y={523} size={11} fill={MUTED} anchor="start">7-1</T>
      </Fade>

      {/* ===== beat 3 — a=6 (HIGH chip) + R plotted + full line drawn (collinearity lands) ===== */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <Chip x={340} y={164} w={400} h={44} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={16} script={false}>
          (a+5-1)/(a-1) = 2 ⇒ a+4 = 2a-2 ⇒ a = 6
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <Circle cx={R.x} cy={R.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.0)}>
        <T x={582} y={440} size={12} fill={INK} anchor="start" weight={700}>R(6,11)</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.4)} d={lineD(LINE_START.x, LINE_START.y, LINE_END.x, LINE_END.y)} stroke={GREEN} sw={2.4} dur={0.7} />

      {/* ===== beat 4 — text + y=x reference line ===== */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={248} size={15} fill={INK} anchor="middle">
          {t(
            "So R = (6,11) and the line has slope m₁ = 2. Angle with y = x?",
            "Toh R = (6,11) hai aur line ki slope m₁ = 2 hai. y = x ke saath angle?"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.5)} d={lineD(DIAG_START.x, DIAG_START.y, DIAG_END.x, DIAG_END.y)} stroke={AMBER_DARK} sw={2.2} dur={0.6} />

      {/* ===== beat 5 — tanθ=1/3 formula + preliminary thin arc ===== */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={284} size={17} fill={INK} anchor="middle" weight={700}>
          tanθ = |(1-2)/(1+2(1))| = 1/3
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.8)}
        dur={0.5}
        d={angleArcD(P.x, P.y, ARC_R, THETA1, THETA2)}
        stroke={thetaHi ? AMBER_DARK : MUTED}
        sw={thetaHi ? 2.4 : 1.4}
      />

      {/* ===== beat 6 — θ≈18.43° (HIGH chip) + θ label lands, arc recolors ===== */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Chip x={415} y={308} w={250} h={44} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={18} script={false}>
          θ = tan⁻¹ 1/3 ≈ 18.43°
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={THETA_LABEL.x} y={THETA_LABEL.y} size={13} fill={AMBER_DARK} anchor="start" weight={700}>θ</T>
      </Fade>

      {/* ===== beat 7 — guardrail + sanity stamp ===== */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={392} size={16} fill={RED} anchor="middle" weight={700}>
          {t(
            "Two tools chained: collinearity fixes a, the angle formula finishes.",
            "Do tools chain hue: collinearity ne a fix kiya, angle formula ne finish kiya."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.7)} d={checkD(600, 470, 14)} stroke={GREEN} sw={2.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.1)}>
        <T x={618} y={473} size={12} fill={GREEN} anchor="start" weight={700}>a = 6, θ confirmed</T>
      </Fade>
    </Scene>
  );
}
