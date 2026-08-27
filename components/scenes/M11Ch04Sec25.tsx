/**
 * M11 Ch04 · Section 25 — "Multiplication is rotation and scaling"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept.
 *
 * Worked example: z1 (r1=2, θ1=π/6=30°) and z2 (r2=1.5, θ2=π/4=45°), board scale
 * 55px/unit -> z1z2 has r=r1r2=3 (R=165px) and θ=θ1+θ2=75° (1.309 rad). Same device
 * as Sec1's ×i turn: draw the starting arrow(s), then an arc showing the ADDED
 * rotation θ2, landing on z1z2 — bigger (scaled) and further round (rotated).
 *
 * Beats (board_reveal_at_english [0, 9.56, 23.04, 40.87, 55.89, 65.96, 73.22, 85.59]):
 *  0 subtitle: multiply — moduli multiply, arguments add
 *  1 HERO formula: z1z2 = r1r2(cos(θ1+θ2) + i sin(θ1+θ2))
 *  2 text + DIAGRAM start: scales by r, rotates by φ — axes, arrow O->z1, small
 *    arrow O->z2 (the "operator")
 *  3 text + payoff: angle-sum identities are why arguments add — arc θ1->θ1+θ2,
 *    arrow O->z1z2 (bigger, further round)
 *  4 formula chips: arg(z1z2)=argz1+argz2, arg(z1/z2)=argz1-argz2
 *  5 formula chip: arg(conjugate) = -arg z
 *  6 guardrail (red-margin, bottom-left): holds only up to a multiple of 2π
 *  7 caption (bottom-right): division subtracts arguments, divides moduli
 *
 * Layout plan (origin CX=540 CY=380; axes xLeft330..xRight820 yTop205..yBottom540):
 *  b0 | subtitle (15,amber,w700)    | T mid | x540 y90
 *  b1 | hero chip                   | Chip  | x300..780 y106..150
 *  b2 | caption (14,ink)            | T mid | x540 y176
 *  b2 | axes (no ticks)             | CartesianAxes | x330..820 y205..540
 *  b2 | O dot, arrow O->z1, label   | Draw/T| (540,380)->(635,325)
 *  b2 | arrow O->z2 (amber), label  | Draw/T| (540,380)->(598,322)
 *  b3 | arc θ1..θ1+θ2 (amber)       | Draw  | r130 (visual-only beat — arc + result
 *    arrow carry the "angle-sum is why arguments add" idea; no caption fits safely)
 *  b3 | arc label θ2                | T mid | (653,233)
 *  b3 | arrow O->z1z2 (green),label | Draw/T| (540,380)->(583,221)
 *  b4 | 2 formula chips             | Chip  | x345..525 / x560..790  y440..478
 *  b5 | formula chip                | Chip  | x330..530 y490..524
 *  b6 | red bar + guardrail text    | Draw/T| x60 y552..586, (76,572)
 *  b7 | caption (13,amber_dark)     | T st  | (600,572)
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
import { CartesianAxes, pointOnCircle, angleArcD } from "./math-kit";

const CX = 540;
const CY = 380;
const THETA1 = 0.524; // 30°
const THETA2 = 0.785; // 45°
const THETA3 = THETA1 + THETA2; // 75°
const R1 = 110;
const R2 = 82.5;
const R3 = 165;
const P1 = pointOnCircle(CX, CY, R1, THETA1);
const P2 = pointOnCircle(CX, CY, R2, THETA2);
const P3 = pointOnCircle(CX, CY, R3, THETA3);
const ARC_LABEL = pointOnCircle(CX, CY, 185, (THETA1 + THETA3) / 2);

export default function M11Ch04Sec25({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Multiplication Is Rotation and Scaling", "Multiplication Rotation aur Scaling Hai")}
        </T>
      </Fade>

      {/* beat 0 — subtitle */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={90} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Multiply: moduli multiply, arguments add", "Multiply: moduli multiply, arguments add hote hain")}
        </T>
      </Fade>

      {/* beat 1 — hero formula */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <Chip x={300} y={106} w={480} h={44} fill="#EEA31F" textFill={INK} size={16} script={false}>
          z₁z₂ = r₁r₂(cos(θ₁+θ₂) + i sin(θ₁+θ₂))
        </Chip>
      </Fade>

      {/* beat 2 — text + diagram start: z1 and the operator z2 */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={176} size={14} fill={INK} anchor="middle">
          {t(
            "Multiply by modulus r, argument φ: scales by r, rotates by φ.",
            "Modulus r, argument φ se multiply: r se scale, φ se rotate."
          )}
        </T>
      </Fade>
      <CartesianAxes on={beat >= 2} delay={dl(2, 0.6)} originX={CX} originY={CY} xLeft={330} xRight={820} yTop={205} yBottom={540} showTicks={false} />
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={805} y={395} size={13} fill={MUTED} anchor="start">Re</T>
        <T x={552} y={213} size={13} fill={MUTED} anchor="start">Im</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.95)}>
        <Circle cx={CX} cy={CY} r={3.5} fill={INK} />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.15)} d={arrowD(CX, CY, P1.x, P1.y)} stroke={INK} sw={2.4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 1.55)}>
        <T x={645} y={317} size={13} fill={INK} anchor="start" weight={700}>z₁</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.1)} d={arrowD(CX, CY, P2.x, P2.y)} stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 2.5)}>
        <T x={590} y={346} size={12} fill={AMBER_DARK} anchor="end" weight={700}>z₂</T>
      </Fade>

      {/* beat 3 — angle-sum payoff: the arc + the product point */}
      <Draw on={beat >= 3} delay={dl(3, 0)} d={angleArcD(CX, CY, 130, THETA1, THETA3)} stroke={AMBER_DARK} sw={2} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={ARC_LABEL.x} y={ARC_LABEL.y} size={12} fill={AMBER_DARK} anchor="middle" weight={700}>θ₂</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.5)} d={arrowD(CX, CY, P3.x, P3.y)} stroke={GREEN} sw={2.6} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 2.0)}>
        <T x={593} y={213} size={14} fill={GREEN} anchor="start" weight={700}>z₁z₂</T>
      </Fade>

      {/* beat 4 — argument algebra: product and quotient */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <Chip x={345} y={440} w={180} h={38} fill="#FCF4E0" stroke={GREEN} textFill={INK} size={12} script={false}>
          arg(z₁z₂) = argz₁+argz₂
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <Chip x={560} y={440} w={230} h={38} fill="#FCF4E0" stroke={GREEN} textFill={INK} size={12} script={false}>
          arg(z₁/z₂) = argz₁-argz₂
        </Chip>
      </Fade>

      {/* beat 5 — argument of the conjugate */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Chip x={330} y={490} w={200} h={34} fill="#FCF4E0" stroke={AMBER_DARK} textFill={INK} size={13} script={false}>
          {t("arg(conjugate) = -arg z", "arg(conjugate) = -arg z")}
        </Chip>
      </Fade>

      {/* beat 6 — guardrail: only up to a multiple of 2π */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d="M 60 552 L 60 586" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={76} y={572} size={15} fill={RED} anchor="start" weight={700}>
          {t("These equalities hold only up to a multiple of 2π.", "Ye equalities sirf 2π ke multiple tak hoti hain.")}
        </T>
      </Fade>

      {/* beat 7 — division caption */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={600} y={572} size={13} fill={AMBER_DARK} anchor="start">
          {t("Division: subtract arguments, divide moduli.", "Division: arguments subtract, moduli divide.")}
        </T>
      </Fade>
    </Scene>
  );
}
