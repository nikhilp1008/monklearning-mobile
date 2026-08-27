/**
 * M11 Ch04 · Section 23 — "Finding the principal argument by quadrant"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — FLAGGED, THE key quadrant diagram, extra eye-check.
 *
 * The source board_content's svg is a decorative 4-label sketch; instead we plot four
 * ACTUAL points, one per quadrant, all sharing the same acute reference angle α=36.87°
 * (the 3-4-5 triangle, reused from Sec21/Sec23's neighbours) reflected into each
 * quadrant, so every one of the JSON's four formulas is a real, checkable angle:
 *   Q1 (4,3)   θ=α        =  0.6435 rad  -> screen (700,260) top-right    ✓
 *   Q2 (-4,3)  θ=π-α       =  2.4981 rad  -> screen (380,260) top-left     ✓
 *   Q3 (-4,-3) θ=α-π       = -2.4981 rad  -> screen (380,500) bottom-left  ✓
 *   Q4 (4,-3)  θ=-α        = -0.6435 rad  -> screen (700,500) bottom-right ✓
 * Positive arguments (Q1,Q2) drawn GREEN; negative arguments (Q3,Q4) drawn RED —
 * Q2/Q4's arcs sweep from the positive real axis at a LARGER radius than Q1/Q3 so the
 * "goes the long way round" geometry for Q2 (and short way for Q4) is visible, not just
 * asserted. Axis-case points (arg=0,π,±π/2) are added at r=120 on beats 5-6.
 *
 * Beats (board_reveal_at_english [0, 10.41, 22.95, 32.85, 45.57, 56.66, 66.82, 77.14]):
 *  0 subtitle: fix the quadrant, then the angle
 *  1 text: let α = tan⁻¹|y/x| be the acute reference angle
 *  2 THE DIAGRAM: four points, one per quadrant, arcs + α-formula labels
 *  3 formula row: I:α  II:π-α  III:α-π  IV:-α (4 mini chips)
 *  4 guardrail (red-margin, bottom-left): the signature trap
 *  5 axis cases: real axis dots, arg=0 / arg=π
 *  6 axis cases: imaginary axis dots, arg=π/2 / arg=-π/2
 *  7 caption (bottom-right): sketch the point first
 *
 * Layout plan (origin CX=540 CY=380; axes xLeft320..xRight830 yTop212..yBottom540):
 *  b0 | subtitle (15,amber,w700)     | T mid | x540 y88
 *  b1 | reference-angle text (16,ink)| T mid | x540 y118
 *  b2 | axes (no ticks)              | CartesianAxes | x320..830 y212..540
 *  b2 | Re/Im labels                 | T st  | (815,395) (552,220)
 *  b2 | O dot                        | circle| (540,380) r3.5
 *  b2 | Q1 arrow+dot+arc+label α     | Draw/T| (540,380)->(700,260) r40
 *  b2 | Q2 arrow+dot+arc+label π-α   | Draw/T| (540,380)->(380,260) r65
 *  b2 | Q3 arrow+dot+arc+label α-π   | Draw/T| (540,380)->(380,500) r65
 *  b2 | Q4 arrow+dot+arc+label -α    | Draw/T| (540,380)->(700,500) r40
 *  b3 | 4 mini chips I..IV           | Chip  | x250..800 y158..192
 *  b4 | red bar + guardrail text     | Draw/T| x60 y552..586, (76,572)
 *  b5 | real-axis dots + labels      | circle/T | (660,380) (420,380)
 *  b6 | imag-axis dots + labels      | circle/T | (540,260) (540,500)
 *  b7 | caption (13,amber_dark)      | T st  | (600,572)
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
const R = 200;
const A = 0.6435; // acute reference angle, arctan(3/4)

const P1 = pointOnCircle(CX, CY, R, A); // Q1
const P2 = pointOnCircle(CX, CY, R, Math.PI - A); // Q2
const P3 = pointOnCircle(CX, CY, R, -(Math.PI - A)); // Q3
const P4 = pointOnCircle(CX, CY, R, -A); // Q4

const ARC1_LABEL = pointOnCircle(CX, CY, 65, A / 2);
const ARC4_LABEL = pointOnCircle(CX, CY, 65, -A / 2);

export default function M11Ch04Sec23({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Finding the Principal Argument by Quadrant", "Quadrant Se Principal Argument Nikaalna")}
        </T>
      </Fade>

      {/* beat 0 — subtitle */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={88} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Fix the quadrant, then the angle", "Pehle quadrant, phir angle")}
        </T>
      </Fade>

      {/* beat 1 — reference angle definition */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={118} size={16} fill={INK} anchor="middle">
          {t("Let α = tan⁻¹|y/x| be the acute reference angle.", "α = tan⁻¹|y/x| ko acute reference angle maano.")}
        </T>
      </Fade>

      {/* beat 2 — THE DIAGRAM: four points, one per quadrant */}
      <CartesianAxes on={beat >= 2} delay={dl(2, 0)} originX={CX} originY={CY} xLeft={320} xRight={830} yTop={212} yBottom={540} showTicks={false} />
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={815} y={395} size={13} fill={MUTED} anchor="start">Re</T>
        <T x={552} y={220} size={13} fill={MUTED} anchor="start">Im</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.35)}>
        <Circle cx={CX} cy={CY} r={3.5} fill={INK} />
      </Fade>

      {/* Q1 */}
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d={arrowD(CX, CY, P1.x, P1.y)} stroke={GREEN} sw={2.4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 1.0)}><Circle cx={P1.x} cy={P1.y} r={4} fill={GREEN} /></Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.2)} d={angleArcD(CX, CY, 40, 0, A)} stroke={GREEN} sw={2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1.7)}>
        <T x={ARC1_LABEL.x} y={ARC1_LABEL.y} size={13} fill={GREEN} anchor="middle" weight={700}>α</T>
      </Fade>

      {/* Q2 */}
      <Draw on={beat >= 2} delay={dl(2, 2.1)} d={arrowD(CX, CY, P2.x, P2.y)} stroke={GREEN} sw={2.4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 2.5)}><Circle cx={P2.x} cy={P2.y} r={4} fill={GREEN} /></Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.7)} d={angleArcD(CX, CY, 65, 0, Math.PI - A)} stroke={GREEN} sw={2} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 3.3)}>
        <T x={P2.x - 14} y={P2.y - 14} size={13} fill={GREEN} anchor="end" weight={700}>π - α</T>
      </Fade>

      {/* Q3 */}
      <Draw on={beat >= 2} delay={dl(2, 3.7)} d={arrowD(CX, CY, P3.x, P3.y)} stroke={RED} sw={2.4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 4.1)}><Circle cx={P3.x} cy={P3.y} r={4} fill={RED} /></Fade>
      <Draw on={beat >= 2} delay={dl(2, 4.3)} d={angleArcD(CX, CY, 65, 0, -(Math.PI - A))} stroke={RED} sw={2} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 4.9)}>
        <T x={P3.x - 14} y={P3.y + 20} size={13} fill={RED} anchor="end" weight={700}>α - π</T>
      </Fade>

      {/* Q4 */}
      <Draw on={beat >= 2} delay={dl(2, 5.3)} d={arrowD(CX, CY, P4.x, P4.y)} stroke={RED} sw={2.4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 5.7)}><Circle cx={P4.x} cy={P4.y} r={4} fill={RED} /></Fade>
      <Draw on={beat >= 2} delay={dl(2, 5.9)} d={angleArcD(CX, CY, 40, 0, -A)} stroke={RED} sw={2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 6.4)}>
        <T x={ARC4_LABEL.x} y={ARC4_LABEL.y} size={13} fill={RED} anchor="middle" weight={700}>-α</T>
      </Fade>

      {/* beat 3 — the quadrant formula row */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <Chip x={250} y={158} w={125} h={34} fill="#FCF4E0" stroke={GREEN} textFill={INK} size={14} script={false}>I: α</Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={390} y={158} w={125} h={34} fill="#FCF4E0" stroke={GREEN} textFill={INK} size={14} script={false}>II: π-α</Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <Chip x={530} y={158} w={125} h={34} fill="#FCF4E0" stroke={RED} textFill={INK} size={14} script={false}>III: α-π</Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <Chip x={670} y={158} w={125} h={34} fill="#FCF4E0" stroke={RED} textFill={INK} size={14} script={false}>IV: -α</Chip>
      </Fade>

      {/* beat 4 — guardrail: the signature trap */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d="M 60 552 L 60 586" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={76} y={572} size={15} fill={RED} anchor="start" weight={700}>
          {t("Signature trap: tan⁻¹(y/x) without fixing the quadrant.", "Signature trap: quadrant fix kiye bina tan⁻¹(y/x).")}
        </T>
      </Fade>

      {/* beat 5 — axis cases: real axis */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Circle cx={660} cy={380} r={4} fill={AMBER_DARK} />
        <Circle cx={420} cy={380} r={4} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={660} y={402} size={12} fill={AMBER_DARK} anchor="middle">arg = 0</T>
        <T x={420} y={402} size={12} fill={AMBER_DARK} anchor="middle">arg = π</T>
      </Fade>

      {/* beat 6 — axis cases: imaginary axis */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Circle cx={540} cy={260} r={4} fill={AMBER_DARK} />
        <Circle cx={540} cy={500} r={4} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={552} y={255} size={12} fill={AMBER_DARK} anchor="start">arg = π/2</T>
        <T x={552} y={505} size={12} fill={AMBER_DARK} anchor="start">arg = -π/2</T>
      </Fade>

      {/* beat 7 — the habit */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={600} y={572} size={13} fill={AMBER_DARK} anchor="start">
          {t("Habit: sketch the point first — it becomes obvious.", "Aadat: pehle point sketch karo — sab clear ho jaata hai.")}
        </T>
      </Fade>
    </Scene>
  );
}
