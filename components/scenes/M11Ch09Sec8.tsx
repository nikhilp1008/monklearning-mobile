/**
 * M11 Ch09 · Section 8 — "Worked example: a locus (Apollonius circle)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — closes subtopic 1 (Coordinate Foundations) alongside Sec9.
 *
 * Numbers verified: P(h,k), dist to (4,0) = 2 × dist to (1,0).
 *   (h-4)²+k² = 4[(h-1)²+k²] ⇒ h²-8h+16+k² = 4h²-8h+4+4k² ⇒ (the -8h terms cancel)
 *   ⇒ 0 = 3h²+3k²-12 ⇒ h²+k²=4. Locus: x²+y²=4, circle radius 2 centred at ORIGIN.
 *   Sanity check at (2,0): dist to (4,0)=|2-4|=2; dist to (1,0)=|2-1|=1; ratio 2:1 ✓.
 *
 * Beats (board_reveal_at_english [0, 7.34, 19.46, 34.82, 39.68, 52.14, 67.33, 81.49]):
 *  0(title, always-on) | "Worked Example: Locus — Apollonius Circle"
 *  1 | setup: P(h,k), the two given points — DIAGRAM STARTS: axes + plot (4,0),(1,0)
 *  2 | formula: (h-4)²+k² = 4[(h-1)²+k²]
 *  3 | text: expand both sides
 *  4 | formula: h²-8h+16+k² = 4h²-8h+4+4k²
 *  5 | formula: 0 = 3h²+3k²-12 ⇒ h²+k²=4
 *  6 | LAND (boxed, high emphasis): x²+y²=4 — DIAGRAM PAYOFF: circle r=2 at origin +
 *      sanity-check point P(2,0) with the 2:1 distance segments
 *  7 | guardrail (red-margin): the -8h cancellation is the Apollonius signature
 *
 * Layout plan — two columns: left two-thirds = algebra (x60 anchor start), right third
 * = diagram panel (x700..1020), so the two never compete for the same space.
 *
 * Diagram: origin(800,360), SCALE=40px/unit, toScreen(x,y)={800+40x, 360-40y}.
 *   (4,0)->(960,360)  (1,0)->(840,360)  (2,0)->(880,360)  circle r=80px (720..880 x, 280..440 y).
 *
 *  b0 | title (22,red,script)                  | T mid  | x540 y62
 *  b1 | setup text (15,ink)                     | T st   | x60  y104
 *  b1 | axes c(800,360) 700..1020/230..490      | CartesianAxes (no ticks)
 *  b1 | O dot+label                             | circle+T | (800,360) label x786 y382 end
 *  b1 | (1,0) dot+label                         | circle+T | (840,360) label x840 y340 mid
 *  b1 | (4,0) dot+label                         | circle+T | (960,360) label x960 y340 mid
 *  b2 | formula (17,ink)                        | T st   | x60  y142
 *  b3 | text (15,ink)                           | T st   | x60  y178
 *  b4 | formula (16,ink)                        | T st   | x60  y216
 *  b5 | formula (16,ink)                        | T st   | x60  y252
 *  b6 | boxed landing formula (green box)       | Draw+T | box x90..390 y300..364, text x240 y341
 *  b6 | circle r=80 (ink)                       | Draw   | circleD(800,360,80)
 *  b6 | P dot (green) + label "P(2,0)"          | circle+T | (880,360) label x895 y344 start
 *  b6 | segment (2,0)->(4,0) amber + label "2"  | Draw+T | (880,360)-(960,360) label x920 y386
 *  b6 | segment (1,0)->(2,0) green + label "1"  | Draw+T | (840,360)-(880,360) label x860 y386
 *  b6 | caption "Ratio = 2 : 1" + checkD         | T+Draw | x796 y520 start, check x915 y512
 *  b7 | red bar x60 y388..442 + 2-line guardrail | Draw+T | text x76 y410 / y434
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
  GREEN,
  AMBER_DARK,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, circleD, lineD, checkD, roundRectD } from "./math-kit";

const OX = 800;
const OY = 360;
const SCALE = 40;
function toScreen(x: number, y: number) {
  return { x: OX + x * SCALE, y: OY - y * SCALE };
}

const P4 = toScreen(4, 0); // (960,360)
const P1 = toScreen(1, 0); // (840,360)
const P2 = toScreen(2, 0); // (880,360) — the sanity-check point, ON the locus
const R_PX = 2 * SCALE; // 80

export default function M11Ch09Sec8({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Worked Example: Locus — Apollonius Circle", "Solved Example: Locus — Apollonius Circle")}
        </T>
      </Fade>

      {/* beat 1 — setup + diagram starts: plot the two given points */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={60} y={104} size={15} fill={INK} anchor="start">
          {t(
            "P(h,k): distance from (4,0) = twice distance from (1,0).",
            "P(h,k): (4,0) se distance, (1,0) se distance ka double hai."
          )}
        </T>
      </Fade>

      <CartesianAxes on={beat >= 1} delay={dl(1, 0.3)} originX={OX} originY={OY} xLeft={700} xRight={1020} yTop={230} yBottom={490} showTicks={false} />
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <Circle cx={OX} cy={OY} r={3} fill={INK} />
        <T x={786} y={382} size={11} fill={MUTED} anchor="end">O</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <Circle cx={P1.x} cy={P1.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <T x={840} y={340} size={12} fill={INK} anchor="middle" weight={700}>(1, 0)</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <Circle cx={P4.x} cy={P4.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={960} y={340} size={12} fill={INK} anchor="middle" weight={700}>(4, 0)</T>
      </Fade>

      {/* beat 2 — condition, squared to kill the roots */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={60} y={142} size={17} fill={INK} anchor="start">
          (h - 4)² + k² = 4[(h - 1)² + k²]
        </T>
      </Fade>

      {/* beat 3 — expand */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={60} y={178} size={15} fill={INK} anchor="start">
          {t("Expand both sides carefully.", "Dono sides ko dhyaan se expand karo.")}
        </T>
      </Fade>

      {/* beat 4 — expanded form */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={60} y={216} size={16} fill={INK} anchor="start">
          h² - 8h + 16 + k² = 4h² - 8h + 4 + 4k²
        </T>
      </Fade>

      {/* beat 5 — bring to one side, the -8h cancels */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={60} y={252} size={16} fill={INK} anchor="start">
          0 = 3h² + 3k² - 12 ⇒ h² + k² = 4
        </T>
      </Fade>

      {/* beat 6 — LAND the result (boxed) + diagram payoff: circle + sanity check */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d={roundRectD(90, 300, 300, 64)} stroke={GREEN} sw={2.2} dur={0.7} />
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={240} y={341} size={26} fill={INK} anchor="middle" weight={700}>
          x² + y² = 4
        </T>
      </Fade>

      <Draw on={beat >= 6} delay={dl(6, 1.4)} d={circleD(OX, OY, R_PX)} stroke={INK} sw={2.2} dur={0.8} />
      <Fade on={beat >= 6} delay={dl(6, 2.4)}>
        <Circle cx={P2.x} cy={P2.y} r={5} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.6)}>
        <T x={895} y={344} size={12} fill={GREEN} anchor="start" weight={700}>P(2, 0)</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 2.9)} d={lineD(P2.x, P2.y, P4.x, P4.y)} stroke={AMBER_DARK} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 3.4)}>
        <T x={920} y={386} size={13} fill={AMBER_DARK} anchor="middle" weight={700}>2</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 3.6)} d={lineD(P1.x, P1.y, P2.x, P2.y)} stroke={GREEN} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 4.0)}>
        <T x={860} y={386} size={13} fill={GREEN} anchor="middle" weight={700}>1</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4.4)}>
        <T x={796} y={520} size={15} fill={GREEN} anchor="start" weight={700}>Ratio = 2 : 1</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 4.7)} d={checkD(915, 512, 18)} stroke={GREEN} sw={2.6} dur={0.3} />

      {/* beat 7 — guardrail: the cancellation is the Apollonius signature */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d="M 60 388 L 60 442" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={76} y={410} size={14} fill={RED} anchor="start" weight={700}>
          {t("The linear -8h terms cancel —", "Linear -8h terms cancel ho jaate hain —")}
        </T>
        <T x={76} y={434} size={14} fill={RED} anchor="start" weight={700}>
          {t("the signature of an Apollonius locus.", "yehi Apollonius locus ki pehchaan hai.")}
        </T>
      </Fade>
    </Scene>
  );
}
