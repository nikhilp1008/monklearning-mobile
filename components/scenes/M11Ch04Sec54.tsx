/**
 * M11 Ch04 · Section 54 — "Complex numbers as position vectors"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — opens subtopic 6 (Geometry of Complex Numbers).
 *
 * Beats (board_reveal_at_english [0, 10.84, 24.92, 39.68, 53.5, 68.52, 80.81, 94.21]):
 *  0 heading: z is a point AND an arrow
 *  1 text: z=x+iy is the point (x,y) and the position vector from O
 *  2 text: z2-z1 is the displacement z1→z2; |z2-z1| is the distance
 *  3 DIAGRAM STARTS: axes, O, arrow O→z1 (position vector), arrow z1→z2 (displacement,
 *    green), midpoint M of z1z2 + chip "dist=|z1-z2|, mid=(z1+z2)/2"
 *  4 section-formula point D dividing z1z2 in ratio 1:2 + chip "(nz1+mz2)/(m+n)"
 *  5 third point z3, triangle sides, centroid G of z1z2z3 + chip "centroid=(z1+z2+z3)/3"
 *  6 text: every vector idea transfers to z
 *  7 red-margin guardrail: JEE Advanced favorite topic
 *
 * Geometry (fixed board coords, chosen so no triangle side crosses the O→z1 arrow):
 *  O  = (330,410)  origin
 *  z1 = (460,290)  z2 = (580,490)  z3 = (200,500)   — a scalene triangle around O
 *  M  = midpoint(z1,z2)              = (520,390)
 *  D  = section pt, ratio m:n=1:2 (z1D:Dz2=1:2, formula (n z1+m z2)/(m+n)) = (500,356.7)
 *  G  = centroid(z1,z2,z3) = (z1+z2+z3)/3 = (413.3,426.7)
 *
 * Layout plan:
 *  b0 | heading (16,amber_dark,w700)     | T mid | x540 y100
 *  b1 | text (15,ink)                    | T mid | x540 y140
 *  b2 | text (15,ink)                    | T mid | x540 y178
 *  b3 | axes c(330,410) 110..660/210..560| CartesianAxes (no ticks)
 *  b3 | Re/Im labels                     | T st  | (645,425) (342,218)
 *  b3 | O dot                            | circle| (330,410) r3.5
 *  b3 | arrow O→z1, label "z1"           | Draw/T| (330,410)→(460,290), label (460,264)
 *  b3 | arrow z1→z2, label "z2"          | Draw/T| (460,290)→(580,490), label (594,508)
 *  b3 | M dot + label "M"                | circle/T | (520,390), label (534,378)
 *  b3 | chip "dist=|z1-z2|, mid=(z1+z2)/2"| Chip  | x715..1015 y210..248
 *  b4 | D dot + label "D"                | circle/T | (500,356.7), label (482,369)
 *  b4 | chip "section pt=(nz1+mz2)/(m+n)"| Chip  | x715..1015 y272..310
 *  b5 | z3 dot + label "z3"              | circle/T | (200,500), label (180,527)
 *  b5 | triangle sides z1-z3, z3-z2      | Draw  | muted
 *  b5 | G dot + label "G"                | circle/T | (413.3,426.7), label (397,449)
 *  b5 | chip "centroid=(z1+z2+z3)/3"     | Chip  | x715..1015 y334..372
 *  b6 | text "every vector idea transfers"| T mid | x715 y410 (start-anchored col)
 *  b7 | red bar + guardrail text          | Draw/T| x715 y442..476
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
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, lineD } from "./math-kit";

const OX = 330;
const OY = 410;
const AXES = { xLeft: 110, xRight: 660, yTop: 210, yBottom: 560 };

const Z1 = { x: 460, y: 290 };
const Z2 = { x: 580, y: 490 };
const Z3 = { x: 200, y: 500 };
const M = { x: 520, y: 390 };
const D = { x: 500, y: 356.7 };
const G = { x: 413.3, y: 426.7 };

const COL_X = 715;
const COL_W = 300;

export default function M11Ch04Sec54({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={60} size={22} fill={RED} anchor="middle" script>
          {t("Complex Numbers as Position Vectors", "Complex Numbers Position Vectors Ki Tarah")}
        </T>
      </Fade>

      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={100} size={16} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("z is a point AND an arrow", "z ek point bhi hai, aur ek arrow bhi")}
        </T>
      </Fade>

      {/* beat 1 — z = x+iy is the point and the position vector */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={140} size={15} fill={INK} anchor="middle">
          {t(
            "z = x + iy is the point (x, y) — and the position vector from O to it.",
            "z = x + iy point (x, y) hai — aur O se us tak position vector."
          )}
        </T>
      </Fade>

      {/* beat 2 — z2-z1 displacement, |z2-z1| distance */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={178} size={15} fill={INK} anchor="middle">
          {t(
            "z₂-z₁ is the displacement from z₁ to z₂; |z₂-z₁| is the distance.",
            "z₂-z₁ hai z₁ se z₂ tak ka displacement; |z₂-z₁| distance hai."
          )}
        </T>
      </Fade>

      {/* beat 3 — THE DIAGRAM begins: axes, O, position vector, displacement, midpoint */}
      <CartesianAxes
        on={beat >= 3}
        delay={dl(3, 0)}
        originX={OX}
        originY={OY}
        xLeft={AXES.xLeft}
        xRight={AXES.xRight}
        yTop={AXES.yTop}
        yBottom={AXES.yBottom}
        showTicks={false}
      />
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={AXES.xRight - 15} y={OY + 15} size={13} fill={MUTED} anchor="start">Re</T>
        <T x={OX + 12} y={AXES.yTop + 8} size={13} fill={MUTED} anchor="start">Im</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <Circle cx={OX} cy={OY} r={3.5} fill={INK} />
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.7)} d={arrowD(OX, OY, Z1.x, Z1.y)} stroke={INK} sw={2.4} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 1.3)}>
        <Circle cx={Z1.x} cy={Z1.y} r={4} fill={INK} />
        <T x={Z1.x} y={244} size={14} fill={INK} anchor="middle" weight={700}>z₁</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.6)} d={arrowD(Z1.x, Z1.y, Z2.x, Z2.y)} stroke={GREEN} sw={2.4} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 2.2)}>
        <Circle cx={Z2.x} cy={Z2.y} r={4} fill={INK} />
        <T x={594} y={508} size={14} fill={INK} anchor="start" weight={700}>z₂</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.6)}>
        <Circle cx={M.x} cy={M.y} r={4} fill={AMBER} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.9)}>
        <T x={534} y={378} size={13} fill={AMBER} anchor="start" weight={700}>M</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.3)}>
        <Chip x={COL_X} y={210} w={COL_W} h={38} fill={CREAM} stroke={AMBER} textFill={INK} size={15} script={false}>
          dist = |z₁-z₂|,  mid = (z₁+z₂)/2
        </Chip>
      </Fade>

      {/* beat 4 — section formula: point dividing z1z2 in ratio m:n */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <Circle cx={D.x} cy={D.y} r={4} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={482} y={369} size={13} fill={AMBER_DARK} anchor="end" weight={700}>D</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <Chip x={COL_X} y={272} w={COL_W} h={38} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={14} script={false}>
          section pt = (nz₁+mz₂)/(m+n)
        </Chip>
      </Fade>

      {/* beat 5 — third point z3, triangle, centroid */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Circle cx={Z3.x} cy={Z3.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={180} y={527} size={14} fill={INK} anchor="end" weight={700}>z₃</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.6)} d={lineD(Z1.x, Z1.y, Z3.x, Z3.y)} stroke={MUTED} sw={1.8} dur={0.5} />
      <Draw on={beat >= 5} delay={dl(5, 1.2)} d={lineD(Z3.x, Z3.y, Z2.x, Z2.y)} stroke={MUTED} sw={1.8} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 2.0)}>
        <Circle cx={G.x} cy={G.y} r={4} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.3)}>
        <T x={397} y={449} size={13} fill={GREEN} anchor="end" weight={700}>G</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.7)}>
        <Chip x={COL_X} y={334} w={COL_W} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={15} script={false}>
          centroid = (z₁+z₂+z₃)/3
        </Chip>
      </Fade>

      {/* beat 6 — every vector idea transfers */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={COL_X} y={410} size={14} fill={INK} anchor="start">
          {t("Every vector idea transfers to z.", "Har vector idea z mein transfer hota hai.")}
        </T>
      </Fade>

      {/* beat 7 — red-margin guardrail: JEE Advanced */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d={`M ${COL_X} 442 L ${COL_X} 476`} stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={COL_X + 16} y={464} size={15} fill={RED} anchor="start" weight={700}>
          {t("JEE Advanced's favorite topic", "JEE Advanced ka favorite topic")}
        </T>
      </Fade>
    </Scene>
  );
}
