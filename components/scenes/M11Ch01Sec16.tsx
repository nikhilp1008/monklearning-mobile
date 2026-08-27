/**
 * M11 Ch01 · Section 16 — "Quadratic inequality over Z, then the power-set count"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type: worked_examples.
 *
 * Beats (board_reveal_at_english [0, 10.92, 22.53, 38.14, 55.3, 61.44]):
 *  0 title (always-on)
 *  1 SET UP: A = {x∈Z : x²-x-6 ≤ 0}
 *  2 factor: (x-3)(x+2) ≤ 0 ⇒ -2 ≤ x ≤ 3 — draw the continuous real span
 *  3 REPRESENT over Z: 6 integer dots on the same line; A={-2..3}, n(A)=6
 *  4 n[P(A)] = 2⁶ = 64
 *  5 GUARDRAIL: over R the same span is infinite — recolor it red
 *
 * Layout plan (estimated render boxes, longer language counts; k→x = 550+80k):
 *  b1 | "A = {x∈Z : x²-x-6 ≤ 0}" (19) | T st | x100 y120
 *  b2 | "(x-3)(x+2) ≤ 0 ⇒ -2≤x≤3" (18)| T st | x100 y155
 *  b2 | axis y320 x200..970 + ticks -4..5 + continuous span x390..790
 *  b3 | 6 integer dots k=-2..3         | IntervalDot | y320
 *  b3 | "A = {-2,-1,0,1,2,3}" (18)     | T mid | x590 y365
 *  b3 | "n(A) = 6" chip                | Chip  | x520 y383 w120 h28
 *  b4 | "n[P(A)] = 2⁶ = 64" (24,red)   | T mid | x590 y430
 *  b5 | span recolors red; caption     | T mid script red | x590 y460
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { axisD, tickD, IntervalDot } from "./math-kit";

const AXIS_Y = 320;
const X = (k: number) => 550 + 80 * k;
const INT_POINTS = [-2, -1, 0, 1, 2, 3];

export default function M11Ch01Sec16({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={23} fill={RED} script>
          {t("find n[P(A)] for a quadratic-defined A", "quadratic A ke liye n[P(A)] nikalo")}
        </T>
      </Fade>

      {/* beat 1 — set up */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={100} y={120} size={19} fill={INK} anchor="start" weight={700}>
          {"A = {x ∈ Z : x² − x − 6 ≤ 0}"}
        </T>
      </Fade>

      {/* beat 2 — factor, draw the continuous real span */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={100} y={155} size={17} fill={INK} anchor="start" weight={700}>
          {"(x − 3)(x + 2) ≤ 0   ⇒   −2 ≤ x ≤ 3"}
        </T>
      </Fade>
      <Draw on={beat >= 2} d={axisD(200, 970, AXIS_Y)} stroke={INK} sw={2.2} delay={dl(2, 1.2)} dur={1} />
      {Array.from({ length: 10 }, (_, i) => i - 4).map((k, i) => (
        <React.Fragment key={k}>
          <Draw
            on={beat >= 2}
            d={tickD(X(k), AXIS_Y, 5)}
            stroke={MUTED}
            sw={1.4}
            delay={dl(2, 2.2 + i * 0.06)}
            dur={0.3}
          />
          <Fade on={beat >= 2} delay={dl(2, 2.3 + i * 0.06)}>
            <T x={X(k)} y={342} size={11} fill={MUTED}>
              {k}
            </T>
          </Fade>
        </React.Fragment>
      ))}
      <Draw
        on={beat >= 2}
        d={`M ${X(-2)} ${AXIS_Y} L ${X(3)} ${AXIS_Y}`}
        stroke={beat >= 5 ? RED : AMBER_DARK}
        sw={5}
        delay={dl(2, 3)}
        dur={0.7}
      />

      {/* beat 3 — REPRESENT over Z: integer dots */}
      {INT_POINTS.map((k, i) => (
        <IntervalDot key={k} on={beat >= 3} delay={dl(3, 0.3 + i * 0.2)} x={X(k)} y={AXIS_Y} open={false} r={7} stroke={GREEN} />
      ))}
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={590} y={378} size={18} fill={INK} weight={700}>
          {"A = {-2, -1, 0, 1, 2, 3}"}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.6)}>
        <Chip x={860} y={303} w={110} h={30} fill={GREEN} textFill="#fff" size={15} script={false}>
          {"n(A) = 6"}
        </Chip>
      </Fade>

      {/* beat 4 — power-set count */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={590} y={430} size={24} fill={RED} weight={800}>
          {"n[P(A)] = 2⁶ = 64"}
        </T>
      </Fade>

      {/* beat 5 — GUARDRAIL: over R it's infinite */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={590} y={465} size={15} fill={RED} script weight={700}>
          {t(
            "over R: A = [-2, 3] is INFINITE — no finite count!",
            "R par: A = [-2, 3] INFINITE hai — koi finite count nahi!"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
