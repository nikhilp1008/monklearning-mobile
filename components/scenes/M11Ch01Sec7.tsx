/**
 * M11 Ch01 · Section 7 — "Cardinality and equality: |x| ≤ 2 versus x³ = x"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type: worked_examples.
 *
 * Beats (board_reveal_at_english [0, 10.07, 25.17, 36.27, 54.02, 60.67]):
 *  0 title (always-on)
 *  1 SET UP: A = {x∈Z : |x|≤2}, B = {x∈Z : x³=x}
 *  2 REPRESENT A on a number line: dots at -2..2, roster + n(A)=5
 *  3 DERIVE B: x³=x ⇒ x³-x=0 ⇒ x(x-1)(x+1)=0 ⇒ x∈{-1,0,1}
 *  4 mark B on the SAME line: ring -1,0,1 green; roster + n(B)=3
 *  5 LAND: recolor -2,2 red (the gap) — B ⊂ A but A ≠ B
 *
 * Layout plan (estimated render boxes, longer language counts; k→x = 500+90k):
 *  b1 | "A = {x∈Z:|x|≤2}" / "B = {x∈Z:x³=x}" | T st (19) | x100 y120/150
 *  b2 | axis y360 x180..820 + 7 ticks + labels -3..3 (y386)
 *  b2 | 5 dots k=-2..2 (INK)         | IntervalDot | x320..680 y360
 *  b2 | "A = {-2,-1,0,1,2}" (20)     | T mid | x350 y300
 *  b2 | "n(A)=5" chip                | Chip  | x300 y318 w110 h30
 *  b3 | derivation line1/line2 (17)  | T mid | x540 y428/462
 *  b4 | ring ×3 green around -1,0,1  | Draw  | c(410/500/590,360) rx16 ry16
 *  b4 | "B = {-1,0,1}" (20)          | T mid | x650 y300
 *  b4 | "n(B)=3" chip                | Chip  | x600 y318 w110 h30
 *  b5 | recolor dots -2,2 → RED      | IntervalDot (stroke swap)
 *  b5 | verdict box 2 lines          | rect+T | x220..860 y495..575
 */

import React from "react";
import { Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  ringD,
  INK,
  MUTED,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { axisD, tickD, IntervalDot } from "./math-kit";

const AXIS_Y = 360;
const X = (k: number) => 500 + 90 * k;

export default function M11Ch01Sec7({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const aPoints = [-2, -1, 0, 1, 2];

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={25} fill={RED} script>
          {t("find n(A), n(B); is A = B?", "n(A), n(B) nikalo; A = B hai?")}
        </T>
      </Fade>

      {/* beat 1 — set up */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={100} y={120} size={19} fill={INK} anchor="start" weight={700}>
          {"A = {x ∈ Z : |x| ≤ 2}"}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={100} y={150} size={19} fill={INK} anchor="start" weight={700}>
          {"B = {x ∈ Z : x³ = x}"}
        </T>
      </Fade>

      {/* beat 2 — REPRESENT A on a number line */}
      <Draw on={beat >= 2} d={axisD(180, 820, AXIS_Y)} stroke={INK} sw={2.4} delay={dl(2, 0.3)} dur={1} />
      {[-3, -2, -1, 0, 1, 2, 3].map((k, i) => (
        <React.Fragment key={k}>
          <Draw
            on={beat >= 2}
            d={tickD(X(k), AXIS_Y, 6)}
            stroke={MUTED}
            sw={1.6}
            delay={dl(2, 1.3 + i * 0.08)}
            dur={0.3}
          />
          <Fade on={beat >= 2} delay={dl(2, 1.5 + i * 0.08)}>
            <T x={X(k)} y={386} size={13} fill={MUTED}>
              {k}
            </T>
          </Fade>
        </React.Fragment>
      ))}
      {aPoints.map((k, i) => (
        <IntervalDot
          key={k}
          on={beat >= 2}
          delay={dl(2, 2 + i * 0.25)}
          x={X(k)}
          y={AXIS_Y}
          open={false}
          r={7}
          stroke={beat >= 5 && (k === -2 || k === 2) ? RED : INK}
        />
      ))}
      <Fade on={beat >= 2} delay={dl(2, 3.6)}>
        <T x={350} y={300} size={20} fill={INK} weight={700}>
          {"A = {-2, -1, 0, 1, 2}"}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.4)}>
        <Chip x={300} y={318} w={110} h={30} fill={INK} textFill="#fff" size={16} script={false}>
          {"n(A) = 5"}
        </Chip>
      </Fade>

      {/* beat 3 — DERIVE B by factoring */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={428} size={17} fill={INK} weight={700}>
          {"x³ = x   ⇒   x³ − x = 0"}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={540} y={462} size={17} fill={INK} weight={700}>
          {"⇒   x(x − 1)(x + 1) = 0   ⇒   x ∈ {-1, 0, 1}"}
        </T>
      </Fade>

      {/* beat 4 — mark B on the same line */}
      {[-1, 0, 1].map((k, i) => (
        <Draw
          key={k}
          on={beat >= 4}
          d={ringD(X(k), AXIS_Y, 16, 16)}
          stroke={GREEN}
          sw={2.2}
          delay={dl(4, 0.3 + i * 0.4)}
          dur={0.6}
        />
      ))}
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <T x={650} y={300} size={20} fill={GREEN} weight={700}>
          {"B = {-1, 0, 1}"}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.6)}>
        <Chip x={600} y={318} w={110} h={30} fill={GREEN} textFill="#fff" size={16} script={false}>
          {"n(B) = 3"}
        </Chip>
      </Fade>

      {/* beat 5 — LAND: the gap is -2, 2 (recolored red above) */}
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <Rect x={220} y={495} width={640} height={80} rx={12} fill={RED} opacity={0.08} stroke={RED} strokeWidth={2} />
        <T x={540} y={528} size={20} fill={INK} weight={800}>
          {"B ⊂ A   but   A ≠ B"}
        </T>
        <T x={540} y={558} size={15} fill={RED} script>
          {t("-2, 2 ∈ A but ∉ B — that's the gap", "-2, 2 A mein hain par B mein nahi — yehi gap hai")}
        </T>
      </Fade>
    </Scene>
  );
}
