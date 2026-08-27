/**
 * M11 Ch01 · Section 5 — "Set-builder to roster: two-digit numbers with digit-sum 8"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type: worked_examples.
 *
 * Beats (board_reveal_at_english [0, 10.24, 30.46, 48.21, 60.5, 74.41]):
 *  0 title (always-on)
 *  1 SET UP: S = {x : 2-digit, digit-sum(x)=8}; t + u = 8, t ≥ 1
 *  2 WORK (left col): t=1..4 → 17, 26, 35, 44
 *  3 WORK (right col): t=5..8 → 53, 62, 71, 80
 *  4 GUARDRAIL: ring the "80" — 8+0=8, don't drop it
 *  5 LAND: roster {17,26,35,44,53,62,71,80} boxed
 *
 * Layout plan (estimated render boxes, longer language counts):
 *  b1 | "S = {x : 2-digit, digit-sum(x) = 8}" | T st (19) | x100 y130
 *  b1 | "let tens = t (t ≥ 1), units = u, t + u = 8" | T st script (16) | x100 y168
 *  b2 | left col ×4 "t=k, u=.. → .." (20)   | T st | x100 y300/332/364/396
 *  b3 | right col ×4 (row4 split for ring)  | T st | x560 y300/332/364/396
 *  b4 | ring around "80" (row4 tail token)  | Draw | c(680,391) rx24 ry20
 *  b4 | "80 qualifies — 8+0=8. Don't drop it!" | T mid (17,red) | x540 y445
 *  b5 | verdict box + roster answer          | rect+T | x300..780 y500..575
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
  ringD,
  INK,
  MUTED,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

const LEFT_ROWS = [
  "t=1, u=7 → 17",
  "t=2, u=6 → 26",
  "t=3, u=5 → 35",
  "t=4, u=4 → 44",
];
const RIGHT_ROWS = ["t=5, u=3 → 53", "t=6, u=2 → 62", "t=7, u=1 → 71"];

export default function M11Ch01Sec5({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("two-digit numbers, digits adding to 8", "two-digit numbers, digit-sum 8")}
        </T>
      </Fade>

      {/* beat 1 — set up */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={100} y={130} size={19} fill={INK} anchor="start" weight={700}>
          {"S = {x : x is 2-digit, digit-sum(x) = 8}"}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <T x={100} y={168} size={16} fill={MUTED} script anchor="start">
          {t(
            "let tens = t (t ≥ 1), units = u, with t + u = 8",
            "tens = t (t ≥ 1), units = u, t + u = 8"
          )}
        </T>
      </Fade>

      {/* beat 2 — left column: t = 1..4 */}
      {LEFT_ROWS.map((row, i) => (
        <Fade key={row} on={beat >= 2} delay={dl(2, 0.3 + i * 0.8)}>
          <T x={100} y={300 + i * 32} size={20} fill={INK} anchor="start" weight={600}>
            {row}
          </T>
        </Fade>
      ))}

      {/* beat 3 — right column: t = 5..7, then t=8 split so beat 4 can ring "80" */}
      {RIGHT_ROWS.map((row, i) => (
        <Fade key={row} on={beat >= 3} delay={dl(3, 0.3 + i * 0.8)}>
          <T x={560} y={300 + i * 32} size={20} fill={INK} anchor="start" weight={600}>
            {row}
          </T>
        </Fade>
      ))}
      <Fade on={beat >= 3} delay={dl(3, 2.7)}>
        <T x={560} y={396} size={20} fill={INK} anchor="start" weight={600}>
          {"t=8, u=0 → "}
        </T>
        <T x={670} y={396} size={20} fill={INK} anchor="start" weight={700}>
          {"80"}
        </T>
      </Fade>

      {/* beat 4 — GUARDRAIL: 80 qualifies, don't drop it */}
      <Draw
        on={beat >= 4}
        d={ringD(680, 391, 24, 20)}
        stroke={RED}
        sw={2.4}
        delay={dl(4, 0.3)}
        dur={0.8}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={540} y={445} size={17} fill={RED} weight={700}>
          {t("80 qualifies — 8 + 0 = 8. Don’t drop it!", "80 qualify karta hai — 8+0=8. Mat chhodo!")}
        </T>
      </Fade>

      {/* beat 5 — LAND: roster answer */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Rect x={280} y={500} width={520} height={72} rx={12} fill={GREEN} opacity={0.12} stroke={GREEN} strokeWidth={2} />
        <T x={540} y={530} size={21} fill={INK} weight={800}>
          {"{17, 26, 35, 44, 53, 62, 71, 80}"}
        </T>
        <T x={540} y={558} size={14} fill={GREEN} script>
          {t("8 numbers, listed cleanly", "8 numbers, saaf list")}
        </T>
      </Fade>
    </Scene>
  );
}
