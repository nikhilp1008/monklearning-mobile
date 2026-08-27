/**
 * M11 Ch04 · Section 60 — "Worked: reading a locus off the words"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — subtopic 6 (Geometry of Complex Numbers).
 * Two mini Argand panels side by side: panel 1 (left) = |z-2|=|z+2|, panel 2
 * (right) = |z-3|=2. Numbers verified from JSON: A=2, B=-2 (equidistant ⇒
 * perpendicular bisector = imaginary axis, i.e. Re(z)=0); circle centre
 * (3,0) radius 2, so max/min-style standard form |z-z0|=r read directly.
 *
 * Beats (board_reveal_at_english [0, 5.55, 12.71, 23.04, 32.6, 38.49, 46.59, 57.94]):
 *  0 subtitle: "Perpendicular bisector, and a circle"
 *  1 panel 1: header "|z-2|=|z+2|" + axes + points 2, -2 plotted
 *  2 panel 1: "equidistant from 2, -2" + tick marks + amber segment A-B
 *  3 panel 1: land — green highlighted imaginary axis, "Re(z) = 0"
 *  4 panel 2: header "|z-3|=2" + axes + point 3 plotted (+ O)
 *  5 panel 2: circle centre(3,0) r=2 drawn, radius labeled, landed caption
 *  6 shared takeaway: match |z-z0|=r → read z0, r directly
 *  7 guardrail (red-margin): translate the words, rarely need to expand
 *
 * Layout plan (panel1 cx=280, panel2 cx=780, shared originY=355, scale=50px/unit):
 *  b0 | subtitle (15,amber_dark,w700)   | T mid  | x540 y92
 *  b1 | header1 "|z-2|=|z+2|" (16,ink)  | T mid  | x280 y128
 *  b1 | axes1 c(280,355) 140..420/225..485 | CartesianAxes (no ticks)
 *  b1 | O1 dot (unlabeled)              | circle | (280,355) r3
 *  b1 | A=(380,355) "2", B=(180,355) "-2" | circle+T
 *  b2 | sub1 "equidistant..." (13,ink_light) | T mid | x280 y160
 *  b2 | tick marks (amber_dark)         | Draw   | (330,355) (230,355)
 *  b2 | amber segment A-B overlay       | Draw   | (180,355)→(380,355)
 *  b3 | green bisector highlight        | Draw   | x280 y237..473
 *  b3 | green label "Re(z) = 0"         | T st   | x298 y250
 *  b4 | header2 "|z-3|=2" (16,ink)      | T mid  | x780 y128
 *  b4 | axes2 c(630,355) 590..920/225..485 | CartesianAxes (no ticks)
 *  b4 | O2 dot + label "O"              | circle+T | (630,355) label x614 y378 end
 *  b4 | point "3"                       | circle+T | (780,355) label y338
 *  b5 | circle centre(780,355) r=100    | Draw   |
 *  b5 | radius line + "r = 2"           | Draw/T | (780,355)→(880,355) label x830 y338
 *  b5 | sub2 landed (13,green,w700)     | T mid  | x780 y160
 *  b6 | shared caption (14,amber_dark,script) | T mid | x540 y520
 *  b7 | guardrail (15,red,w700)         | T mid  | x540 y565
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
  INK,
  INK_LIGHT,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, circleD, lineD, tickD } from "./math-kit";

const SCALE = 50;
const OY = 355;
const P1CX = 280;
const P2CX = 630;

// panel 1 — perpendicular bisector
const A = { x: P1CX + 2 * SCALE, y: OY }; // z = 2
const B = { x: P1CX - 2 * SCALE, y: OY }; // z = -2
const TICK_A = { x: (P1CX + A.x) / 2, y: OY };
const TICK_B = { x: (P1CX + B.x) / 2, y: OY };

// panel 2 — circle
const P3 = { x: P2CX + 3 * SCALE, y: OY }; // z = 3 (centre)
const R2 = 2 * SCALE;
const O2 = { x: P2CX, y: OY };
const RADIUS_END = { x: P3.x + R2, y: OY };

export default function M11Ch04Sec60({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Reading a Locus off the Words", "Locus ko Words se Padhna")}
        </T>
      </Fade>

      {/* beat 0 — subtitle */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={92} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Perpendicular bisector, and a circle", "Perpendicular bisector, aur ek circle")}
        </T>
      </Fade>

      {/* beat 1 — panel 1: header + axes + points 2, -2 */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={280} y={128} size={16} fill={INK} anchor="middle" weight={700}>
          |z - 2| = |z + 2|
        </T>
      </Fade>
      <CartesianAxes on={beat >= 1} delay={dl(1, 0.4)} originX={P1CX} originY={OY} xLeft={140} xRight={420} yTop={225} yBottom={485} showTicks={false} />
      <Fade on={beat >= 1} delay={dl(1, 1.0)}>
        <Circle cx={P1CX} cy={OY} r={3} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <Circle cx={A.x} cy={A.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={A.x} y={A.y + 22} size={13} fill={INK} anchor="middle">2</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.9)}>
        <Circle cx={B.x} cy={B.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={B.x} y={B.y + 22} size={13} fill={INK} anchor="middle">-2</T>
      </Fade>

      {/* beat 2 — equidistant: tick marks + amber segment */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={280} y={160} size={13} fill={INK_LIGHT} anchor="middle">
          {t("equidistant from 2 and -2", "2 aur -2 se equidistant")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d={tickD(TICK_A.x, TICK_A.y, 7)} stroke={AMBER_DARK} sw={2} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 0.7)} d={tickD(TICK_B.x, TICK_B.y, 7)} stroke={AMBER_DARK} sw={2} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 1.1)} d={lineD(B.x, B.y, A.x, A.y)} stroke={AMBER} sw={3} dur={0.5} />

      {/* beat 3 — land: green bisector = imaginary axis, Re(z) = 0 */}
      <Draw on={beat >= 3} delay={dl(3, 0)} d={lineD(P1CX, 237, P1CX, 473)} stroke={GREEN} sw={3.5} dur={0.7} />
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={298} y={250} size={13} fill={GREEN} anchor="start" weight={700}>Re(z) = 0</T>
      </Fade>

      {/* beat 4 — panel 2: header + axes + point 3 */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={780} y={128} size={16} fill={INK} anchor="middle" weight={700}>
          |z - 3| = 2
        </T>
      </Fade>
      <CartesianAxes on={beat >= 4} delay={dl(4, 0.4)} originX={P2CX} originY={OY} xLeft={590} xRight={920} yTop={225} yBottom={485} showTicks={false} />
      <Fade on={beat >= 4} delay={dl(4, 1.0)}>
        <Circle cx={O2.x} cy={O2.y} r={3} fill={INK} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={614} y={378} size={12} fill={MUTED} anchor="end">O</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <Circle cx={P3.x} cy={P3.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.9)}>
        <T x={P3.x} y={338} size={13} fill={INK} anchor="middle">3</T>
      </Fade>

      {/* beat 5 — circle + radius label + landed caption */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={circleD(P3.x, P3.y, R2)} stroke={INK} sw={2.4} dur={0.7} />
      <Draw on={beat >= 5} delay={dl(5, 0.9)} d={lineD(P3.x, P3.y, RADIUS_END.x, RADIUS_END.y)} stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <T x={830} y={338} size={12} fill={AMBER_DARK} anchor="middle" weight={700}>r = 2</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={780} y={160} size={13} fill={GREEN} anchor="middle" weight={700}>
          {t("circle, centre (3,0), radius 2", "circle, centre (3,0), radius 2")}
        </T>
      </Fade>

      {/* beat 6 — shared takeaway */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={520} size={14} fill={AMBER_DARK} anchor="middle" script>
          {t("Match |z - z₀| = r → read z₀, r directly", "Match karo |z - z₀| = r → z₀, r seedha padho")}
        </T>
      </Fade>

      {/* beat 7 — guardrail */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={565} size={15} fill={RED} anchor="middle" weight={700}>
          {t("Translate the words - you rarely need to expand.", "Words translate karo - shaayad hi expand karna pade.")}
        </T>
      </Fade>
    </Scene>
  );
}
