/**
 * M11 Ch01 · Section 25 — "Operations on intervals: A = [-2,5), B = (1,8]"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type: worked_examples.
 *
 * 7 beats (board_reveal_at_english has 7 entries, indices 0..6):
 *  0 title (always-on)
 *  1 REPRESENT: two-row number line — A=[-2,5) row + B=(1,8] row + shared axis
 *  2 A∩B = (1,5) — tighter bounds & stricter brackets
 *  3 A∪B = [-2,8] — looser bounds
 *  4 A−B = [-2,1] — 1∉B, so 1 survives
 *  5 shade the overlap band (1,5) on the diagram
 *  6 GUARDRAIL: ∩ tighter/stricter, ∪ looser — endpoints win marks
 *
 * Layout plan (estimated render boxes; X(k) = 150+80(k+2)):
 *  b2 | "A∩B=(1,5)  [tighter, stricter]" | T mid | x540 y115
 *  b3 | "A∪B=[-2,8]  [looser bounds]"     | T mid | x540 y150
 *  b4 | "A−B=[-2,1]  [1∉B, survives]"     | T mid | x540 y185
 *  b1 | A-row y310 x150..710, B-row y350 x390..950, axis y390 x100..1000
 *  b1 | ticks/labels k=-2,0,1,5,8 at X(k), label y415
 *  b5 | shaded band x390..710 y295..400 (green) + "A∩B=(1,5)" label y440
 *  b6 | guardrail line                    | T mid script red | x540 y465
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { axisD, tickD, IntervalDot } from "./math-kit";

const AXIS_Y = 390;
const X = (k: number) => 150 + 80 * (k + 2);
const KEY_TICKS = [-2, 0, 1, 5, 8];

export default function M11Ch01Sec25({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={25} fill={RED} script>
          {t("interval operations over R", "R par interval operations")}
        </T>
      </Fade>

      {/* beat 1 — REPRESENT: A row, B row, shared axis */}
      <Draw on={beat >= 1} d={axisD(100, 1000, AXIS_Y)} stroke={INK} sw={2.2} delay={dl(1, 0.3)} dur={1} />
      {KEY_TICKS.map((k, i) => (
        <React.Fragment key={k}>
          <Draw on={beat >= 1} d={tickD(X(k), AXIS_Y, 5)} stroke={MUTED} sw={1.6} delay={dl(1, 1.1 + i * 0.1)} dur={0.3} />
          <Fade on={beat >= 1} delay={dl(1, 1.2 + i * 0.1)}>
            <T x={X(k)} y={415} size={13} fill={MUTED}>{k}</T>
          </Fade>
        </React.Fragment>
      ))}
      <Draw on={beat >= 1} d={`M ${X(-2)} 310 L ${X(5)} 310`} stroke={AMBER_DARK} sw={5} delay={dl(1, 1.8)} dur={0.6} />
      <IntervalDot on={beat >= 1} delay={dl(1, 2.4)} x={X(-2)} y={310} open={false} r={6} stroke={AMBER_DARK} />
      <IntervalDot on={beat >= 1} delay={dl(1, 2.7)} x={X(5)} y={310} open={true} r={6} stroke={AMBER_DARK} />
      <Fade on={beat >= 1} delay={dl(1, 3.2)}>
        <T x={200} y={288} size={15} fill={AMBER_DARK} anchor="start" weight={700}>
          {"A = [-2, 5)"}
        </T>
      </Fade>
      <Draw on={beat >= 1} d={`M ${X(1)} 350 L ${X(8)} 350`} stroke={RED} sw={5} delay={dl(1, 3.8)} dur={0.6} />
      <IntervalDot on={beat >= 1} delay={dl(1, 4.4)} x={X(1)} y={350} open={true} r={6} stroke={RED} />
      <IntervalDot on={beat >= 1} delay={dl(1, 4.7)} x={X(8)} y={350} open={false} r={6} stroke={RED} />
      <Fade on={beat >= 1} delay={dl(1, 5.2)}>
        <T x={830} y={330} size={15} fill={RED} anchor="start" weight={700}>
          {"B = (1, 8]"}
        </T>
      </Fade>

      {/* beat 2 — intersection reasoning */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={115} size={15} fill={INK} weight={700}>
          {t(
            "A ∩ B = (1, 5)   [tighter bounds, stricter brackets]",
            "A ∩ B = (1, 5)   [tighter bounds, stricter brackets]"
          )}
        </T>
      </Fade>

      {/* beat 3 — union reasoning */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={150} size={15} fill={INK} weight={700}>
          {t("A ∪ B = [-2, 8]   [looser bounds]", "A ∪ B = [-2, 8]   [looser bounds]")}
        </T>
      </Fade>

      {/* beat 4 — difference reasoning */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={185} size={15} fill={INK} weight={700}>
          {t("A − B = [-2, 1]   [1 ∉ B, so 1 survives]", "A − B = [-2, 1]   [1 ∉ B, isliye 1 bachta hai]")}
        </T>
      </Fade>

      {/* beat 5 — shade the overlap band */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Rect x={X(1)} y={295} width={X(5) - X(1)} height={105} fill={GREEN} opacity={0.14} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={550} y={445} size={15} fill={GREEN} weight={800}>
          {"A ∩ B = (1, 5)"}
        </T>
      </Fade>

      {/* beat 6 — GUARDRAIL */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={475} size={14} fill={RED} script weight={700}>
          {t(
            "∩: tighter bounds & stricter brackets.   ∪: looser bounds. Endpoints win marks!",
            "∩: tighter bounds, stricter brackets.   ∪: looser bounds. Endpoints hi marks hain!"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
