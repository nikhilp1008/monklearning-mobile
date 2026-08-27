/**
 * M11 Ch05 · Section 8 — "Worked example: solve and represent (CBSE)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md.
 *
 * Beats (en [0,18.94,23.64,40.19,50.01,55.72,62.38,73.81], hi
 * [0,16.55,20.57,38.14,47.62,54.02,61.87,73.39]) — a single accumulating
 * worked example, distribute → collect → divide → represent:
 *  0 heading: the problem — 3(2x-1) ≥ 2(x+3)-5
 *  1 text: distribute on both sides (caption)
 *  2 formula: 6x-3≥2x+6-5 ⇒ 6x-3≥2x+1
 *  3 text: collect terms, add 3 / subtract 2x, both safe (caption)
 *  4 formula: 4x ≥ 4
 *  5 text: divide by +4, positive, no flip (caption)
 *  6 formula (high, boxed green): x ≥ 1 ⇒ [1, ∞)
 *  7 diagram: number line, filled dot at 1, shaded to +∞
 *
 * Layout plan:
 *  b0 | problem (26,ink,w800)     | T mid  | x?..? y110..138 (bl 130)
 *  b1 | caption (16,muted,scr)    | T mid  | x?..? y154..180 (bl 175)
 *  b2 | formula (20,ink,w700)     | T mid  | x?..? y204..226 (bl 220)
 *  b3 | caption (15,muted,scr)    | T mid  | x?..? y244..272 (bl 264)
 *  b4 | formula (24,ink,w800)     | T mid  | x?..? y285..311 (bl 304)
 *  b5 | caption (15,muted,scr)    | T mid  | x?..? y328..356 (bl 348)
 *  b6 | boxed answer (22,green)   | Chip   | x390..690 y372..426
 *  b7 | axis+ticks 0-3            | Draw   | x220..650 y490
 *  b7 | filled dot x=1, shade     | circle/Draw | c(380,490) → x640
 *  b7 | "x ≥ 1" (18,green)        | T mid  | x380  y447..469 (bl 465)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { axisD, tickD, IntervalDot, lineD } from "./math-kit";

const VAL_X0 = 280;
const STEP = 100;

export default function M11Ch05Sec8({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={24} fill={RED} script>
          {t("three moves: distribute, collect, divide", "teen moves: distribute, collect, divide")}
        </T>
      </Fade>

      {/* beat 0 — the problem */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={130} size={26} fill={INK} weight={800}>
          3(2x - 1) ≥ 2(x + 3) - 5
        </T>
      </Fade>

      {/* beat 1 — distribute on both sides */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={175} size={16} fill={MUTED} script>
          {t("distribute on both sides", "dono taraf distribute karo")}
        </T>
      </Fade>

      {/* beat 2 — 6x-3≥2x+6-5 ⇒ 6x-3≥2x+1 */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={220} size={20} fill={INK} weight={700}>
          6x - 3 ≥ 2x + 6 - 5 ⇒ 6x - 3 ≥ 2x + 1
        </T>
      </Fade>

      {/* beat 3 — collect terms */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={264} size={15} fill={MUTED} script>
          {t("add 3, subtract 2x — both safe moves", "3 add karo, 2x subtract — dono safe")}
        </T>
      </Fade>

      {/* beat 4 — 4x ≥ 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={304} size={24} fill={INK} weight={800}>
          4x ≥ 4
        </T>
      </Fade>

      {/* beat 5 — divide by +4 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={348} size={15} fill={MUTED} script>
          {t("÷4 — positive, no flip", "÷4 — positive hai, koi flip nahi")}
        </T>
      </Fade>

      {/* beat 6 — the answer */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={390} y={372} w={300} h={54} fill={GREEN} textFill="#fff" size={22}>
          x ≥ 1 ⇒ [1, ∞)
        </Chip>
      </Fade>

      {/* beat 7 — represent on a number line */}
      <Draw on={beat >= 7} delay={dl(7, 0.3)} d={axisD(220, 650, 490)} stroke={INK} sw={2} dur={1} />
      <Draw
        on={beat >= 7}
        delay={dl(7, 1.3)}
        d={[0, 1, 2, 3].map((v) => tickD(VAL_X0 + v * STEP, 490, 6)).join(" ")}
        stroke={INK}
        sw={1.4}
        dur={0.5}
      />
      {[0, 1, 2, 3].map((v) => (
        <Fade key={v} on={beat >= 7} delay={dl(7, 2.0)}>
          <T x={VAL_X0 + v * STEP} y={512} size={14} fill={MUTED}>
            {v}
          </T>
        </Fade>
      ))}
      <IntervalDot on={beat >= 7} delay={dl(7, 2.7)} x={380} y={490} open={false} r={5} stroke={GREEN} />
      <Draw on={beat >= 7} delay={dl(7, 3.3)} d={lineD(380, 490, 640, 490)} stroke={GREEN} sw={5} dur={0.8} />
      <Fade on={beat >= 7} delay={dl(7, 4.1)}>
        <T x={380} y={465} size={18} fill={GREEN} weight={700}>
          x ≥ 1
        </T>
      </Fade>
    </Scene>
  );
}
