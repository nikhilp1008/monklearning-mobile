/**
 * M11 Ch09 · Section 10 — "Slope: One Number for a Line's Tilt"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — opens subtopic 2 (Slope of a Line and Angles).
 * reveals_english = [0, 8.45, 19.29, 35.24, 46.68, 53.93, 70.91, 88.75] (8 values, seq1..8).
 *
 * Beats:
 *  0(title, always-on) | "Slope: One Number for a Line's Tilt"
 *  1 | railway-track analogy
 *  2 | inclination theta defined: anticlockwise from +x-axis, 0deg <= theta < 180deg
 *  3 | THE DIAGRAM: +x-axis ray, then three rays from O at 30deg/135deg/90deg, each with its
 *      own swept angleArcD + angle-value label — built one construction at a time
 *  4 | formula: m = tan(theta), boxed
 *  5 | 45deg -> slope 1; downhill-to-the-right -> negative slope
 *  6 | guardrail (red-margin, high): vertical line slope is UNDEFINED, never infinite/zero
 *  7 | closing: same slope => parallel; product = -1 => perpendicular
 *
 * Diagram geometry — angles converted to radians for pointOnCircle/angleArcD (both take
 * standard math-convention radians, counterclockwise from +x-axis, per math-kit's own
 * pointOnCircle doc comment — no manual y-negation needed):
 *   30deg  = PI/6   ≈ 0.5236 rad
 *   135deg = 3*PI/4 ≈ 2.3562 rad
 *   90deg  = PI/2   ≈ 1.5708 rad
 * O = (540, 330), ray radius R = 130. Arc radii are graduated (26/48/72, smallest angle gets
 * the smallest radius) so all three angle-sweep arcs nest concentrically and stay individually
 * legible instead of stacking on the same ring. Colour-code: 30deg (gentle, rising) = GREEN; 135deg (falling,
 * obtuse) = AMBER_DARK; 90deg (vertical, the "doesn't behave normally" case) = MUTED, standing
 * in for a dashed stroke (Draw's own dasharray slot is used by the reveal animation, so a muted
 * thin stroke is the documented substitute — see math-kit.tsx HalfPlaneShade doc).
 *
 * Layout plan:
 *  b0 | title (26,red,script)                    | T mid | x540 y62
 *  b1 | text (16,ink)                             | T mid | x540 y96
 *  b2 | text (15,ink)                              | T mid | x540 y126
 *  b3 | +x-axis shaft+arrowhead                    | Draw (axisD) | (400,330)->(720,330)
 *  b3 | "x" label                                  | T st | x730 y335
 *  b3 | O dot + label                              | circle+T | (540,330) label x528 y348 end
 *  b3 | ray O->30deg (GREEN) + arc r26 + "30°"      | Draw/Draw/T | tip (652.6,265.0) label x664 y258 start
 *  b3 | ray O->135deg (AMBER_DARK) + arc r72 + "135°"| Draw/Draw/T | tip (448.1,238.1) label x436 y231 end
 *  b3 | ray O->90deg (MUTED) + arc r48 + "90°"      | Draw/Draw/T | tip (540,200) label x540 y186 mid
 *  b4 | formula chip "m = tan θ" (AMBER fill,ink)  | Chip | x430..650 y380..434
 *  b5 | text (15,ink)                              | T mid | x540 y470
 *  b6 | red bar x200 y502..542                     | Draw
 *  b6 | guardrail text (16,red,w700)                | T st | x216 y528
 *  b7 | closing caption (14,amber_dark,script)      | T mid | x540 y586
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
  Scene,
} from '@/components/scenes/kit';
import { axisD, lineD, pointOnCircle, angleArcD } from "./math-kit";

const OX = 540;
const OY = 330;
const R = 130;

const THETA_30 = Math.PI / 6;
const THETA_135 = (3 * Math.PI) / 4;
const THETA_90 = Math.PI / 2;

const TIP_30 = pointOnCircle(OX, OY, R, THETA_30);
const TIP_135 = pointOnCircle(OX, OY, R, THETA_135);
const TIP_90 = pointOnCircle(OX, OY, R, THETA_90);

const ARC_R_30 = 26;
const ARC_R_90 = 48;
const ARC_R_135 = 72;

export default function M11Ch09Sec10({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={26} fill={RED} anchor="middle" script>
          {t("Slope: One Number for a Line's Tilt", "Slope: Line ke Tilt Ka Ek Number")}
        </T>
      </Fade>

      {/* beat 1 — railway-track analogy */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={96} size={16} fill={INK} anchor="middle">
          {t(
            "Slope captures how steeply a line tilts — like a railway track climbing a valley.",
            "Slope batata hai line kitni steeply tilt hoti hai — jaise valley se chadhti railway track."
          )}
        </T>
      </Fade>

      {/* beat 2 — inclination theta defined */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={126} size={15} fill={INK} anchor="middle">
          {t(
            "Inclination θ is the anticlockwise angle from the +x-axis, with 0° ≤ θ < 180°.",
            "Inclination θ, +x-axis se anticlockwise angle hai, jahan 0° ≤ θ < 180° hota hai."
          )}
        </T>
      </Fade>

      {/* beat 3 — THE DIAGRAM: x-axis first, then each ray+arc+label, one construction at a time */}
      <Draw on={beat >= 3} delay={dl(3, 0)} d={axisD(400, 720, OY)} stroke={INK} sw={2} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={730} y={335} size={12} fill={MUTED} anchor="start">x</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <Circle cx={OX} cy={OY} r={3.5} fill={INK} />
        <T x={528} y={348} size={11} fill={MUTED} anchor="end">O</T>
      </Fade>

      {/* 30deg — gentle, rising */}
      <Draw on={beat >= 3} delay={dl(3, 0.9)} d={lineD(OX, OY, TIP_30.x, TIP_30.y)} stroke={GREEN} sw={2.4} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 1.5)} d={angleArcD(OX, OY, ARC_R_30, 0, THETA_30)} stroke={GREEN} sw={2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 2.0)}>
        <T x={664} y={258} size={14} fill={GREEN} anchor="start" weight={700}>30°</T>
      </Fade>

      {/* 135deg — falling, obtuse */}
      <Draw on={beat >= 3} delay={dl(3, 2.5)} d={lineD(OX, OY, TIP_135.x, TIP_135.y)} stroke={AMBER_DARK} sw={2.4} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 3.1)} d={angleArcD(OX, OY, ARC_R_135, 0, THETA_135)} stroke={AMBER_DARK} sw={2} dur={0.7} />
      <Fade on={beat >= 3} delay={dl(3, 3.9)}>
        <T x={436} y={231} size={14} fill={AMBER_DARK} anchor="end" weight={700}>135°</T>
      </Fade>

      {/* 90deg — vertical, the special/undefined case: MUTED stands in for dashed */}
      <Draw on={beat >= 3} delay={dl(3, 4.4)} d={lineD(OX, OY, TIP_90.x, TIP_90.y)} stroke={MUTED} sw={2.2} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 5.0)} d={angleArcD(OX, OY, ARC_R_90, 0, THETA_90)} stroke={MUTED} sw={1.8} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 5.5)}>
        <T x={540} y={186} size={14} fill={MUTED} anchor="middle" weight={700}>90°</T>
      </Fade>

      {/* beat 4 — formula: m = tan theta, boxed */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <Chip x={430} y={380} w={220} h={54} fill={AMBER} textFill={INK} size={24} script={false}>
          m = tan θ
        </Chip>
      </Fade>

      {/* beat 5 — 45deg -> slope 1; downhill -> negative */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={470} size={15} fill={INK} anchor="middle">
          {t(
            "A 45° line has slope exactly 1; a downhill-to-the-right line has negative slope.",
            "45° line ki slope exactly 1 hoti hai; right ki taraf downhill line ki slope negative hoti hai."
          )}
        </T>
      </Fade>

      {/* beat 6 — guardrail: vertical line slope is UNDEFINED */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d="M 200 502 L 200 542" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={216} y={528} size={16} fill={RED} anchor="start" weight={700}>
          {t(
            "Vertical line: slope is UNDEFINED — never 'infinite', never 'zero'.",
            "Vertical line: slope UNDEFINED hoti hai — kabhi 'infinite' ya 'zero' mat kaho."
          )}
        </T>
      </Fade>

      {/* beat 7 — closing: parallel / perpendicular reads */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={586} size={14} fill={AMBER_DARK} anchor="middle" script>
          {t(
            "Same slope ⇒ parallel; slopes multiplying to -1 ⇒ perpendicular.",
            "Same slope ⇒ parallel; slopes ka product -1 ⇒ perpendicular."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
