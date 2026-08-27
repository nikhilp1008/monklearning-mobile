/**
 * M11 Ch04 · Section 55 — "The rotation theorem"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — subtopic 6 (Geometry of Complex Numbers).
 *
 * CRITICAL geometry note (per authoring brief): the angle theta is measured at the
 * VERTEX z1 — never at the origin. This scene never draws an origin/axes at all
 * (the source JSON's own diagram doesn't either), so there is no way to mistake
 * the arc for being centred anywhere but z1. angleArcD(z1.x, z1.y, ...) — the
 * *first two args* are the vertex, confirmed z1 throughout.
 *
 * Beats (board_reveal_at_english [0, 9.9, 24.06, 34.47, 49.49, 61.7, 73.22, 83.37]):
 *  0 heading: rotation = multiply displacement by e^{iθ}
 *  1 text: to rotate AB about A by θ, multiply zB-zA by e^{iθ} (generic, pre-diagram)
 *  2 DIAGRAM: z1 (vertex), arrow z1→z3, arrow z1→z2, angle arc at z1 from z1z3 to z1z2
 *  3 formula: (z2-z1)/(z3-z1) = |z2-z1|/|z3-z1| · e^{iθ}
 *  4 ring around z1 + text: angle sits at z1, not O (the flagged common mistake)
 *  5 red-margin: reversing the ratio flips θ's sign
 *  6 text: finds a 3rd vertex / right angle / square
 *  7 red-margin: e^{iθ} anticlockwise, e^{-iθ} clockwise
 *
 * Geometry (fixed board coords — matches the JSON formula's own convention
 * (z2-z1)/(z3-z1): theta sweeps from the z1→z3 ray to the z1→z2 ray):
 *  z1 = (280,470) vertex
 *  z3 = z1 + 210·(cos25°,-sin25°) = (470.3,381.3)   [bearing 25°]
 *  z2 = z1 + 260·(cos70°,-sin70°) = (368.9,225.7)   [bearing 70°]
 *  theta = 70°-25° = 45° = 0.785 rad, positive (anticlockwise) — matches beat 7.
 *
 * Layout plan:
 *  b0 | heading (16,amber_dark,w700)   | T mid | x540 y100
 *  b1 | text (15,ink)                  | T mid | x540 y136
 *  b2 | z1 dot+label                   | circle/T | (280,470), label (264,484)
 *  b2 | arrow z1→z3, label "z3"        | Draw/T| →(470.3,381.3), label (486,385)
 *  b2 | arrow z1→z2, label "z2"        | Draw/T| →(368.9,225.7), label (368.9,206)
 *  b2 | angle arc r65 25°..70° + "θ"   | Draw/T| label (344,400)
 *  b3 | formula card (2 lines)         | Chip×2| x705..1025 y205..286
 *  b4 | ring around z1 + text          | Draw/T| ring(280,470,22,20); text col y324
 *  b5 | red-margin (sign flip)         | Draw/T| bar+text col y356..390
 *  b6 | text (finds vertex/angle/sq)   | T st  | col y430
 *  b7 | red-margin (CCW/CW)            | Draw/T| bar+text col y462..496
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
  ringD,
  INK,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { angleArcD, pointOnCircle } from "./math-kit";

const Z1 = { x: 280, y: 470 };
const BEARING_Z3 = (25 * Math.PI) / 180;
const BEARING_Z2 = (70 * Math.PI) / 180;
const Z3 = pointOnCircle(Z1.x, Z1.y, 210, BEARING_Z3);
const Z2 = pointOnCircle(Z1.x, Z1.y, 260, BEARING_Z2);
const ARC_R = 65;
const ARC_LABEL = pointOnCircle(Z1.x, Z1.y, 95, (BEARING_Z3 + BEARING_Z2) / 2);

const COL_X = 705;
const COL_W = 320;

export default function M11Ch04Sec55({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={60} size={22} fill={RED} anchor="middle" script>
          {t("The Rotation Theorem", "Rotation Theorem")}
        </T>
      </Fade>

      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={100} size={16} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Rotation = multiply the displacement by e^(iθ)", "Rotation = displacement ko e^(iθ) se multiply karo")}
        </T>
      </Fade>

      {/* beat 1 — generic AB text, before the concrete diagram */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={136} size={15} fill={INK} anchor="middle">
          {t(
            "To rotate AB about A by angle θ, multiply zB - zA by e^(iθ).",
            "AB ko A ke baare mein angle θ se rotate karne ko, zB - zA ko e^(iθ) se multiply karo."
          )}
        </T>
      </Fade>

      {/* beat 2 — THE DIAGRAM: z1 vertex, two vectors, angle arc AT z1 */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Circle cx={Z1.x} cy={Z1.y} r={4.5} fill={INK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={264} y={484} size={14} fill={INK} anchor="end" weight={700}>z₁</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d={arrowD(Z1.x, Z1.y, Z3.x, Z3.y)} stroke={INK} sw={2.4} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <Circle cx={Z3.x} cy={Z3.y} r={4} fill={INK} />
        <T x={486} y={385} size={14} fill={INK} anchor="start" weight={700}>z₃</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.6)} d={arrowD(Z1.x, Z1.y, Z2.x, Z2.y)} stroke={GREEN} sw={2.4} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <Circle cx={Z2.x} cy={Z2.y} r={4} fill={INK} />
        <T x={368.9} y={206} size={14} fill={INK} anchor="middle" weight={700}>z₂</T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.6)}
        d={angleArcD(Z1.x, Z1.y, ARC_R, BEARING_Z3, BEARING_Z2)}
        stroke={AMBER_DARK}
        sw={2}
        dur={0.6}
      />
      <Fade on={beat >= 2} delay={dl(2, 3.3)}>
        <T x={ARC_LABEL.x} y={ARC_LABEL.y} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>θ</T>
      </Fade>

      {/* beat 3 — the ratio formula */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <Chip x={COL_X} y={205} w={COL_W} h={36} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={16} script={false}>
          (z₂-z₁) / (z₃-z₁)
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <Chip x={COL_X} y={250} w={COL_W} h={36} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={14} script={false}>
          {"= |z₂-z₁| / |z₃-z₁| · e^(iθ)"}
        </Chip>
      </Fade>

      {/* beat 4 — ring the vertex: angle is AT z1, not O (the flagged mistake) */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d={ringD(Z1.x, Z1.y, 22, 20)} stroke={AMBER_DARK} sw={2.2} dur={0.7} />
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <T x={COL_X} y={324} size={14} fill={INK} anchor="start">
          {t("θ sits at z₁ — not the origin.", "θ z₁ par hai — origin par nahi.")}
        </T>
      </Fade>

      {/* beat 5 — red-margin: reversing the ratio flips the sign */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d={`M ${COL_X} 356 L ${COL_X} 390`} stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={COL_X + 16} y={378} size={15} fill={RED} anchor="start" weight={700}>
          {t("Swap the ratio → θ flips sign", "Ratio ulta karo → θ ulta")}
        </T>
      </Fade>

      {/* beat 6 — what this move unlocks */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={COL_X} y={430} size={14} fill={INK} anchor="start">
          {t("Finds a vertex, right angle, or square", "3rd vertex, right angle, ya square milta hai")}
        </T>
      </Fade>

      {/* beat 7 — red-margin: direction convention */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d={`M ${COL_X} 462 L ${COL_X} 496`} stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={COL_X + 16} y={484} size={15} fill={RED} anchor="start" weight={700}>
          {t("+θ = anticlockwise, -θ = clockwise", "+θ = anticlockwise, -θ = clockwise")}
        </T>
      </Fade>
    </Scene>
  );
}
