/**
 * M11 Ch04 · Section 50 — "Worked: all cube roots of 8i"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — the full nth-roots method run on a clean numeric example.
 * z = 8i = 8·e^(iπ/2). ρ = 8^(1/3) = 2. Angles = (π/2+2kπ)/3 for k=0,1,2 → π/6, 5π/6, 3π/2
 * (30°, 150°, 270°) — three points on a radius-2 circle, evenly 120° apart.
 *
 * Beats (board_reveal_at_english [0, 5.97, 17.83, 30.21, 37.21, 45.4, 53.93, 63.06]):
 *  0 heading: the nth-roots method in full (subtitle)
 *  1 text: find cube roots of 8i; 8i = 8·e^(iπ/2) — plot the original point (angle 90°, r=140)
 *  2 formula: ρ=8^(1/3)=2; angles=(π/2+2kπ)/3, k=0,1,2 — draw the roots-circle (r=100)
 *  3 formula: angles = π/6, 5π/6, 3π/2 — left-column caption
 *  4 formula: root1 = 2(cos π/6+isin π/6) = √3+i — plot point at 30°, arc from 0°
 *  5 formula: root2 = 2(cos5π/6+isin5π/6) = -√3+i — plot point at 150°, arc from 0°
 *  6 formula: root3 = 2(cos3π/2+isin3π/2) = -2i — plot point at 270°, arc from 0°
 *  7 guardrail (red-margin): three roots, evenly spaced 120° apart, radius 2 — draw the
 *    connecting triangle (proof of even spacing) + red chip
 *
 * Layout plan (single diagram, c(540,380); roots-circle r100, original-number arrow r140):
 *  b0 | subtitle                        | T mid | x540 y90
 *  b1 | text line                       | T mid | x540 y120
 *  b1 | arrow O→8i (r140, 90°)          | Draw/T| label at (565,y) start-anchor
 *  b2 | formula line                    | T mid | x540 y152
 *  b2 | roots-circle (muted) r100       | Draw
 *  b3 | caption "angles: π/6,5π/6,3π/2" | T st  | x60 y300
 *  b4 | arc 0→30°, point + "√3+i" label | Draw/T
 *  b5 | arc 0→150°, point + "-√3+i"     | Draw/T
 *  b6 | arc 0→270°, point + "-2i"       | Draw/T
 *  b7 | triangle edges (amber)          | Draw
 *  b7 | red chip "3 roots, 120° apart"  | Chip  | x330 c y545..577
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
import { pointOnCircle, circleD, angleArcD } from "./math-kit";

const CX = 540, CY = 380;
const deg = (d: number) => (d * Math.PI) / 180;

// original number: 8i, modulus 8 (display radius 140), angle 90°
const Z0 = pointOnCircle(CX, CY, 140, deg(90));

// roots circle: radius 2 (display radius 100), angles 30°, 150°, 270°
const RR = 100;
const ANGLES = [deg(30), deg(150), deg(270)];
const roots = ANGLES.map((a) => pointOnCircle(CX, CY, RR, a));
const rootLabels = ANGLES.map((a) => pointOnCircle(CX, CY, RR + 30, a));

export default function M11Ch04Sec50({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Worked: All Cube Roots of 8i", "Worked: 8i ke Saare Cube Roots")}
        </T>
      </Fade>

      {/* beat 0 — subtitle */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={90} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("The nth-roots method in full", "The nth-roots method poora")}
        </T>
      </Fade>

      {/* beat 1 — the original number */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={120} size={15} fill={INK} anchor="middle">
          {t("Find all cube roots of 8i.", "8i ke saare cube roots dhoondo.")}
        </T>
      </Fade>
      <Circle cx={CX} cy={CY} r={3} fill={INK} />
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d={arrowD(CX, CY, Z0.x, Z0.y)} stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={Z0.x + 20} y={Z0.y - 5} size={14} fill={INK} anchor="start" weight={700}>8i = 8·e^(iπ/2)</T>
      </Fade>

      {/* beat 2 — ρ = cube root of 8 = 2, the roots-circle */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={152} size={15} fill={INK} anchor="middle">
          ρ = 8^(1/3) = 2;&nbsp;&nbsp; angles = (π/2+2kπ)/3, k=0,1,2
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d={circleD(CX, CY, RR)} stroke={MUTED} sw={1.6} dur={0.8} />

      {/* beat 3 — the three angles, listed */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={60} y={300} size={14} fill={INK} anchor="start">
          {t("angles: π/6, 5π/6, 3π/2", "angles: π/6, 5π/6, 3π/2")}
        </T>
      </Fade>

      {/* beat 4 — root 1 at 30° */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d={angleArcD(CX, CY, 40, 0, deg(30))} stroke={AMBER_DARK} sw={1.6} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 0.5)} d={arrowD(CX, CY, roots[0].x, roots[0].y)} stroke={GREEN} sw={2.2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={rootLabels[0].x} y={rootLabels[0].y} size={14} fill={GREEN} anchor="middle" weight={700}>√3+i</T>
      </Fade>

      {/* beat 5 — root 2 at 150° */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={angleArcD(CX, CY, 40, 0, deg(150))} stroke={AMBER_DARK} sw={1.6} dur={0.6} />
      <Draw on={beat >= 5} delay={dl(5, 0.6)} d={arrowD(CX, CY, roots[1].x, roots[1].y)} stroke={GREEN} sw={2.2} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <T x={rootLabels[1].x} y={rootLabels[1].y} size={14} fill={GREEN} anchor="middle" weight={700}>-√3+i</T>
      </Fade>

      {/* beat 6 — root 3 at 270° */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d={angleArcD(CX, CY, 40, 0, deg(270))} stroke={AMBER_DARK} sw={1.6} dur={0.7} />
      <Draw on={beat >= 6} delay={dl(6, 0.7)} d={arrowD(CX, CY, roots[2].x, roots[2].y)} stroke={GREEN} sw={2.2} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={rootLabels[2].x} y={rootLabels[2].y} size={14} fill={GREEN} anchor="middle" weight={700}>-2i</T>
      </Fade>

      {/* beat 7 — guardrail: three roots, evenly spaced, connecting triangle as proof */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0)}
        d={`M ${roots[0].x} ${roots[0].y} L ${roots[1].x} ${roots[1].y} L ${roots[2].x} ${roots[2].y} Z`}
        stroke={AMBER_DARK}
        sw={1.6}
        dur={0.9}
      />
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <Chip x={310} y={545} w={460} h={34} fill={CREAM} stroke={RED} textFill={INK} size={14} script={false}>
          {t("Three roots, evenly spaced 120° apart, radius 2.", "Teen roots, evenly spaced 120° apart, radius 2.")}
        </Chip>
      </Fade>
    </Scene>
  );
}
