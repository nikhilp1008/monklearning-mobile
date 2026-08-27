/**
 * M11 Ch04 · Section 61 — "Worked: greatest and least |z| on a circle"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — subtopic 6 (Geometry of Complex Numbers).
 *
 * Numbers verified from JSON: z on |z-3-4i|=2 ⇒ z0=3+4i, |z0|=√(9+16)=5, r=2.
 * Unit direction of z0 = (3/5,4/5)=(0.6,0.8). nearest = z0 - 2·dir = (1.8,2.4),
 * |nearest|=3 ✓. farthest = z0 + 2·dir = (4.2,5.6), |farthest|=7 ✓. Verified by
 * script (node): screen mapping scale=43px/unit, origin(330,500):
 *   O=(330,500)  z0=(459,328)  nearest=(407.4,396.8)  farthest=(510.6,259.2)
 *   circle r=86px, top=242 bottom=414 left=373 right=545.
 *
 * Beats (board_reveal_at_english [0, 7.08, 18.26, 30.04, 40.11, 55.3, 65.62, 76.12]):
 *  0 subtitle: "Extremes along the O-z0 line"
 *  1 problem: z on |z-3-4i|=2, find greatest/least |z|
 *  2 setup: z0=3+4i, |z0|=√(9+16)=5, r=2
 *  3 THE DIAGRAM: axes, O, z0, circle, line O through z0
 *  4 land: mark nearest/farthest points, |z|max=7, |z|min=3
 *  5 explain: colour the two halves — near side (green) / beyond centre (amber)
 *  6 "no calculus" caption (right margin)
 *  7 guardrail (red-margin): locate |z0| first
 *
 * Layout plan (scale=43, origin(330,500)):
 *  b0 | subtitle (15,amber_dark,w700)      | T mid | x540 y92
 *  b1 | problem (16,ink)                   | T mid | x540 y120
 *  b2 | setup line (15,ink)                | T mid | x540 y152
 *  b3 | axes c(330,500) 290..590/214..530  | CartesianAxes (no ticks)
 *  b3 | O dot + label                      | circle+T | (330,500) label x312 y522 end
 *  b3 | z0 dot + circle r=86 + label       | circle/Draw/T | (459,328) label x560 y328 start
 *  b3 | line O→farthest                    | Draw | (330,500)→(510.6,259.2)
 *  b4 | nearest dot (green) + label        | circle+T | (407.4,396.8) label y426.8 mid "min = 3"
 *  b4 | farthest dot (amber) + label       | circle+T | (510.6,259.2) label x528.6 y235.2 "max = 7"
 *  b5 | green overlay O→nearest            | Draw | (330,500)→(407.4,396.8)
 *  b5 | amber overlay z0→farthest          | Draw | (459,328)→(510.6,259.2)
 *  b6 | right-margin caption (14,amber_dark,script) | T mid | x840 y285
 *  b7 | right-margin guardrail (16,red,w700) + bar   | Draw+T | bar x680 y348..388, text x696 y368
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
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, circleD, lineD } from "./math-kit";

const SCALE = 43;
const OX = 330;
const OY = 500;

function toScreen(re: number, im: number) {
  return { x: OX + re * SCALE, y: OY - im * SCALE };
}

const O = { x: OX, y: OY };
const Z0 = toScreen(3, 4);
const NEAREST = toScreen(1.8, 2.4); // |z|=3
const FARTHEST = toScreen(4.2, 5.6); // |z|=7
const R_PX = 2 * SCALE;

export default function M11Ch04Sec61({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Greatest and Least |z| on a Circle", "Circle par |z| ka Greatest aur Least")}
        </T>
      </Fade>

      {/* beat 0 — subtitle */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={92} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Extremes along the O-z₀ line", "Extremes O-z₀ line ke saath")}
        </T>
      </Fade>

      {/* beat 1 — problem statement */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={120} size={16} fill={INK} anchor="middle">
          {t(
            "z lies on |z - 3 - 4i| = 2. Find the greatest and least |z|.",
            "z |z - 3 - 4i| = 2 par hai. |z| ka greatest aur least nikaalo."
          )}
        </T>
      </Fade>

      {/* beat 2 — setup: identify z0, |z0|, r */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={152} size={15} fill={INK} anchor="middle">
          z₀ = 3 + 4i, |z₀| = √(3² + 4²) = √25 = 5, r = 2
        </T>
      </Fade>

      {/* beat 3 — THE DIAGRAM: axes, O, z0, circle, the O-z0 line */}
      <CartesianAxes on={beat >= 3} delay={dl(3, 0)} originX={OX} originY={OY} xLeft={290} xRight={590} yTop={214} yBottom={530} showTicks={false} />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <Circle cx={O.x} cy={O.y} r={3.5} fill={INK} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={312} y={522} size={12} fill={MUTED} anchor="end">O</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.1)} d={circleD(Z0.x, Z0.y, R_PX)} stroke={INK} sw={2.2} dur={0.7} />
      <Fade on={beat >= 3} delay={dl(3, 1.9)}>
        <Circle cx={Z0.x} cy={Z0.y} r={3.5} fill={INK} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.2)}>
        <T x={560} y={328} size={13} fill={INK} anchor="start" weight={700}>z₀ = 3 + 4i</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 2.6)} d={lineD(O.x, O.y, FARTHEST.x, FARTHEST.y)} stroke={INK} sw={1.8} dur={0.6} />

      {/* beat 4 — land: mark nearest/farthest, box the answers */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <Circle cx={NEAREST.x} cy={NEAREST.y} r={5} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={NEAREST.x} y={426.8} size={13} fill={GREEN} anchor="middle" weight={700}>min = 3</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <Circle cx={FARTHEST.x} cy={FARTHEST.y} r={5} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={528.6} y={235.2} size={13} fill={AMBER_DARK} anchor="middle" weight={700}>max = 7</T>
      </Fade>

      {/* beat 5 — colour the two halves: near side vs beyond centre */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={lineD(O.x, O.y, NEAREST.x, NEAREST.y)} stroke={GREEN} sw={3} dur={0.5} />
      <Draw on={beat >= 5} delay={dl(5, 0.7)} d={lineD(Z0.x, Z0.y, FARTHEST.x, FARTHEST.y)} stroke={AMBER_DARK} sw={3} dur={0.5} />

      {/* beat 6 — no calculus needed (right margin) */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={840} y={285} size={14} fill={AMBER_DARK} anchor="middle" script>
          {t("No calculus — just |z₀| ± r", "Calculus nahi — bas |z₀| ± r")}
        </T>
      </Fade>

      {/* beat 7 — guardrail: locate |z0| first (right margin) */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d="M 680 348 L 680 388" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={696} y={368} size={16} fill={RED} anchor="start" weight={700}>
          {t("Locate |z₀| first — always.", "Pehle |z₀| locate karo — hamesha.")}
        </T>
      </Fade>
    </Scene>
  );
}
