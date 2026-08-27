/**
 * M11 Ch04 · Section 49 — "Worked: Euler form powers and 4th roots of unity"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples.
 *
 * Beats (board_reveal_at_english [0, 6.14, 14.08, 26.03, 40.11, 52.48, 61.18, 70.66]):
 *  0 heading: a power, and a full set of roots (subtitle)
 *  1 text: write z=-1+i in Euler form, find z^8
 *  2 formula: r=√2, arg z=3π/4 ⇒ z=√2·e^(i3π/4) — LEFT diagram: point z at 135°
 *  3 formula: z^8=(√2)^8·e^(i6π)=16·e^(i6π)=16 — z^8 lands on +Re axis
 *  4 text: the four 4th roots of unity: α_k=e^(ikπ/2), k=0,1,2,3 — RIGHT diagram axes/circle
 *  5 formula: 1, i, -1, -i — plot all 4 points (callback to Sec1's diagram)
 *  6 text: sum is 1+i-1-i=0 — chip
 *  7 guardrail (red-margin): four roots, not one — always k=0 to n-1 (tally chip)
 *
 * Layout plan (two diagrams: LEFT c(290,380) power example, RIGHT c(800,380) r85 roots-of-unity):
 *  b0 | subtitle                          | T mid | x540 y90
 *  b1 | text line                         | T mid | x540 y120
 *  b2 | formula line                      | T mid | x540 y152
 *  b2 | LEFT axes + point z (135°,r90)    | CartesianAxes/Draw/T
 *  b3 | z⁸ point (0°, r150) + arc "×8"    | Draw/T
 *  b3 | chip "z⁸=(√2)⁸e^(i6π)=16"          | Chip  | x150 y470..502
 *  b4 | text (caption) near right diagram | T mid | x800 y230
 *  b4 | RIGHT circle r85 (empty)          | Draw
 *  b5 | 4 points 1,i,-1,-i (callback Sec1)| Draw/T
 *  b6 | chip "sum = 1+i-1-i = 0"          | Chip  | x680 y470..502
 *  b7 | red bar + guardrail text          | Draw/T| x420 y545..579 / x436 y567
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
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, pointOnCircle, angleArcD, circleD } from "./math-kit";

const deg = (d: number) => (d * Math.PI) / 180;

// LEFT diagram: z = -1+i at 135°, and z^8 = 16 landing at 0°
const CXL = 290, CYL = 380;
const THETA_Z = deg(135);
const Z = pointOnCircle(CXL, CYL, 90, THETA_Z);
const Z_LABEL = pointOnCircle(CXL, CYL, 108, THETA_Z);
const Z8 = pointOnCircle(CXL, CYL, 140, 0);
const ARC_MID = pointOnCircle(CXL, CYL, 118, deg(67.5));

// RIGHT diagram: the 4th roots of unity — same geometry as Sec1's 1, i, -1, -i
const CXR = 800, CYR = 380, RR = 85;
const P1 = pointOnCircle(CXR, CYR, RR, 0);
const PI_ = pointOnCircle(CXR, CYR, RR, Math.PI / 2);
const PM1 = pointOnCircle(CXR, CYR, RR, Math.PI);
const PMI = pointOnCircle(CXR, CYR, RR, -Math.PI / 2);

export default function M11Ch04Sec49({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Worked: A Power, and the 4th Roots of Unity", "Worked: Ek Power, aur 4th Roots of Unity")}
        </T>
      </Fade>

      {/* beat 0 — subtitle */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={90} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("A power, and a full set of roots", "Ek power, aur roots ka poora set")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={120} size={15} fill={INK} anchor="middle">
          {t("Write z = -1+i in Euler form and find z⁸.", "z = -1+i ko Euler form mein likho aur z⁸ nikaalo.")}
        </T>
      </Fade>

      {/* beat 2 — modulus & argument, plot z */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={152} size={15} fill={INK} anchor="middle">
          r = √2, arg z = 3π/4&nbsp;&nbsp;⇒&nbsp;&nbsp;z = √2·e^(i3π/4)
        </T>
      </Fade>
      <CartesianAxes on={beat >= 2} delay={dl(2, 0.4)} originX={CXL} originY={CYL} xLeft={150} xRight={460} yTop={260} yBottom={490} showTicks={false} />
      <Draw on={beat >= 2} delay={dl(2, 0.9)} d={arrowD(CXL, CYL, Z.x, Z.y)} stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={Z_LABEL.x} y={Z_LABEL.y} size={13} fill={INK} anchor="middle" weight={700}>z</T>
        <Circle cx={Z.x} cy={Z.y} r={3.5} fill={INK} />
      </Fade>

      {/* beat 3 — raise to the 8th: angle sweeps back to 0 mod 2π */}
      <Draw on={beat >= 3} delay={dl(3, 0)} d={angleArcD(CXL, CYL, 118, THETA_Z, 0)} stroke={AMBER_DARK} sw={1.8} dur={0.7} />
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={ARC_MID.x} y={ARC_MID.y - 8} size={12} fill={AMBER_DARK} anchor="middle" weight={700}>×8</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.1)} d={arrowD(CXL, CYL, Z8.x, Z8.y)} stroke={GREEN} sw={2.4} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={Z8.x + 10} y={Z8.y - 10} size={14} fill={GREEN} anchor="start" weight={700}>z⁸ = 16</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <Chip x={150} y={510} w={280} h={34} fill={CREAM} stroke={GREEN} textFill={INK} size={13} script={false}>
          z⁸=(√2)⁸e^(i6π)=16e^(i6π)=16
        </Chip>
      </Fade>

      {/* beat 4 — now the four 4th roots of unity */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={800} y={230} size={14} fill={INK} anchor="middle">
          {t("4th roots of unity: α_k = e^(ikπ/2), k=0,1,2,3", "4th roots of unity: α_k = e^(ikπ/2), k=0,1,2,3")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.5)} d={circleD(CXR, CYR, RR)} stroke={MUTED} sw={1.6} dur={0.7} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <Circle cx={CXR} cy={CYR} r={3.5} fill={INK} />
      </Fade>

      {/* beat 5 — plot 1, i, -1, -i (callback to Sec1's diagram) */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={arrowD(CXR, CYR, P1.x, P1.y)} stroke={INK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={P1.x + 14} y={P1.y + 4} size={14} fill={INK} anchor="start" weight={700}>1</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.7)} d={arrowD(CXR, CYR, PI_.x, PI_.y)} stroke={GREEN} sw={2.2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <T x={PI_.x} y={PI_.y - 14} size={14} fill={GREEN} anchor="middle" weight={700}>i</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.4)} d={arrowD(CXR, CYR, PM1.x, PM1.y)} stroke={RED} sw={2.2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={PM1.x - 20} y={PM1.y + 4} size={14} fill={RED} anchor="start" weight={700}>-1</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 2.1)} d={arrowD(CXR, CYR, PMI.x, PMI.y)} stroke={INK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 2.5)}>
        <T x={PMI.x} y={PMI.y + 20} size={14} fill={INK} anchor="middle" weight={700}>-i</T>
      </Fade>

      {/* beat 6 — sum is zero */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Chip x={680} y={510} w={240} h={34} fill={CREAM} stroke={GREEN} textFill={INK} size={14} script={false}>
          1+i-1-i = 0
        </Chip>
      </Fade>

      {/* beat 7 — guardrail: four roots, not one */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d="M 420 556 L 420 590" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={436} y={578} size={15} fill={RED} anchor="start" weight={700}>
          {t("Four roots, not one — always k=0 to n-1.", "Chaar roots, ek nahi — hamesha k=0 se n-1.")}
        </T>
      </Fade>
    </Scene>
  );
}
