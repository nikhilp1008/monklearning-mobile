/**
 * M11 Ch04 · Section 63 — "Worked (JEE Advanced): an arg-locus is an arc"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples (JEE Advanced) — subtopic 6 (Geometry of Complex Numbers).
 *
 * Numbers verified from JSON + node script: arg((z-1)/(z+1)) = π/2 ⇒ segment from
 * -1 to 1 subtends a right angle at z ⇒ z lies on |z|=1 (Thales: segment as
 * diameter). Sample point z at theta=110° verified numerically: dot(z->1, z->-1)
 * = 0, angle = 90.00° exactly. +π/2 sign selects the UPPER half (Im(z)>0),
 * endpoints -1, 1 excluded (open). Screen mapping (cx=540,cy=390,r=150):
 *   1=(690,390)  -1=(390,390)  z=(488.7,249.0) at theta=110°.
 * THE GUARDRAIL (this section's whole point): draw the full circle, then
 * cross out the LOWER half in red — it is an ARC (semicircle), never the
 * whole circle — before landing the green upper arc.
 *
 * Beats (board_reveal_at_english [0, 5.55, 13.99, 29.53, 38.74, 48.64, 60.07, 73.22]):
 *  0 subtitle: "A constant argument gives a semicircle"
 *  1 problem: arg((z-1)/(z+1)) = π/2
 *  2 reasoning: segment -1 to 1 subtends right angle at z — plot -1,1,z + chords + 90° mark AT z
 *  3 classical fact: such points lie on circle with that segment as diameter — draw full (faint) circle
 *  4 formula: circle |z|=1, diameter -1 to 1 — solidify circle, land chip
 *  5 guardrail (red-margin): draw+cross the LOWER half — "not the whole circle"
 *  6 land: GREEN upper arc, open endpoints, "Im(z) > 0"
 *  7 final: "the open upper unit semicircle" boxed
 *
 * Layout plan (cx=540, cy=390, r=150):
 *  b0 | subtitle (15,amber_dark,w700)      | T mid | x540 y92
 *  b1 | problem (16,ink)                   | T mid | x540 y122
 *  b2 | reasoning (15,ink)                 | T mid | x540 y156
 *  b2 | axes c(540,390) 330..705/210..530  | CartesianAxes (no ticks)
 *  b2 | -1,1 dots (filled) + labels        | circle+T | (390,390) end / (690,390) start
 *  b2 | z dot + label + chords z->1,z->-1  | circle+T/Draw | (488.7,249.0)
 *  b2 | 90° arc AT z r=20 + label          | Draw/T | label (495.6,292.4)
 *  b3 | full circle (faint, muted)         | Draw | circleD(540,390,150)
 *  b4 | solid circle (ink) + formula chip  | Draw/Chip | chip x740..1020 y260..300
 *  b5 | lower-half arc (red) + cross + note| Draw/T | box(390,390,300,150), text y570
 *  b6 | upper-half arc (green) + open dots + "Im(z)>0" | Draw/IntervalDot/T
 *  b7 | final chip (green)                 | Chip | x740..1020 y330..374
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
  crossD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, pointOnCircle, angleArcD, lineD, circleD, IntervalDot } from "./math-kit";

const CX = 540;
const CY = 390;
const R = 150;
const P1 = pointOnCircle(CX, CY, R, 0); // z = 1
const PM1 = pointOnCircle(CX, CY, R, Math.PI); // z = -1
const THETA_Z = (110 * Math.PI) / 180;
const Z = pointOnCircle(CX, CY, R, THETA_Z);
// right-angle mark at Z between rays Z->1 and Z->-1, verified 90° apart (node)
const THETA_Z_TO_1 = (-35 * Math.PI) / 180;
const THETA_Z_TO_M1 = (-125 * Math.PI) / 180;
const ANGLE_LABEL = pointOnCircle(Z.x, Z.y, 40, (THETA_Z_TO_1 + THETA_Z_TO_M1) / 2);

export default function M11Ch04Sec63({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("An Arg-Locus Is an Arc", "Arg-Locus Ek Arc Hota Hai")}
        </T>
      </Fade>

      {/* beat 0 — subtitle */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={92} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("A constant argument gives a semicircle", "Constant argument ek semicircle deta hai")}
        </T>
      </Fade>

      {/* beat 1 — problem */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={122} size={16} fill={INK} anchor="middle">
          {t("Find the locus of z with arg[(z-1)/(z+1)] = π/2.", "z ka locus nikaalo jahan arg[(z-1)/(z+1)] = π/2.")}
        </T>
      </Fade>

      {/* beat 2 — reasoning + plot -1,1,z + chords + right-angle mark AT z */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={156} size={15} fill={INK} anchor="middle">
          {t("Segment from -1 to 1 subtends a right angle at z.", "-1 se 1 tak ka segment z par right angle subtend karta hai.")}
        </T>
      </Fade>
      <CartesianAxes on={beat >= 2} delay={dl(2, 0.4)} originX={CX} originY={CY} xLeft={330} xRight={705} yTop={210} yBottom={530} showTicks={false} />
      {/* filled while still "given fixed points" (beats 2-5); beat 6 erases these
          in favour of the open (hollow) endpoint rings once "excluded" is landed */}
      <Fade on={beat >= 2 && beat < 6} delay={dl(2, 1.0)}>
        <Circle cx={PM1.x} cy={PM1.y} r={4.5} fill={INK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <T x={364} y={394} size={13} fill={INK} anchor="end" weight={700}>-1</T>
      </Fade>
      <Fade on={beat >= 2 && beat < 6} delay={dl(2, 1.6)}>
        <Circle cx={P1.x} cy={P1.y} r={4.5} fill={INK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.9)}>
        <T x={716} y={394} size={13} fill={INK} anchor="start" weight={700}>1</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.3)}>
        <Circle cx={Z.x} cy={Z.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.6)}>
        <T x={Z.x - 12} y={Z.y - 10} size={13} fill={INK} anchor="end" weight={700}>z</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 3.0)} d={lineD(Z.x, Z.y, P1.x, P1.y)} stroke={MUTED} sw={1.6} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 3.5)} d={lineD(Z.x, Z.y, PM1.x, PM1.y)} stroke={MUTED} sw={1.6} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 4.0)} d={angleArcD(Z.x, Z.y, 20, THETA_Z_TO_1, THETA_Z_TO_M1)} stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 4.5)}>
        <T x={ANGLE_LABEL.x} y={ANGLE_LABEL.y + 4} size={12} fill={AMBER_DARK} anchor="middle" weight={700}>90°</T>
      </Fade>

      {/* beat 3 — classical fact: full circle (faint), that segment as diameter */}
      <Draw on={beat >= 3} delay={dl(3, 0)} d={circleD(CX, CY, R)} stroke={MUTED} sw={1.6} dur={0.9} />

      {/* beat 4 — formula: circle |z|=1, diameter -1 to 1 (solidify + land) */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d={circleD(CX, CY, R)} stroke={INK} sw={2.2} dur={0.7} />
      <Fade on={beat >= 4} delay={dl(4, 1.0)}>
        <Chip x={740} y={260} w={280} h={40} fill={CREAM} stroke={INK} textFill={INK} size={14} script={false}>
          {t("circle |z| = 1, diameter -1 to 1", "circle |z| = 1, diameter -1 se 1")}
        </Chip>
      </Fade>

      {/* beat 5 — guardrail: it's an ARC, not the whole circle — cross the lower half */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={angleArcD(CX, CY, R, Math.PI, 2 * Math.PI)} stroke={RED} sw={2.6} dur={0.7} />
      <Draw on={beat >= 5} delay={dl(5, 0.9)} d={crossD(CX - R, CY, 2 * R, R)} stroke={RED} sw={2.2} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={540} y={570} size={14} fill={RED} anchor="middle" weight={700}>
          {t("It's an arc — not the whole circle.", "Ye arc hai — poora circle nahi.")}
        </T>
      </Fade>

      {/* beat 6 — land: green upper arc, open endpoints (erase filled dots above), Im(z) > 0 */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d={angleArcD(CX, CY, R, 0, Math.PI)} stroke={GREEN} sw={3} dur={0.7} />
      <IntervalDot on={beat >= 6} delay={dl(6, 0.9)} x={PM1.x} y={PM1.y} open r={5} stroke={GREEN} />
      <IntervalDot on={beat >= 6} delay={dl(6, 1.1)} x={P1.x} y={P1.y} open r={5} stroke={GREEN} />
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={580} y={225} size={13} fill={GREEN} anchor="start" weight={700}>Im(z) &gt; 0</T>
      </Fade>

      {/* beat 7 — final: the open upper unit semicircle */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <Chip x={740} y={330} w={280} h={44} fill={CREAM} stroke={GREEN} textFill={INK} size={14} script={false}>
          {t("open upper unit semicircle", "open upper unit semicircle")}
        </Chip>
      </Fade>
    </Scene>
  );
}
