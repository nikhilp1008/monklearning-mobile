/**
 * M11 Ch14 · Section 3 — "The impossible and the sure event"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type: concept.
 *
 * Beats (board_reveal_at_english [0,9.73,22.95,32.94,46.68,55.72,65.19]):
 *  0 heading: "Two events at the extremes"
 *  1 LEFT: scoop NOTHING → empty circle "∅" → IMPOSSIBLE event tag
 *  2 LEFT: die example "shows a 7" crossed out — never happens
 *  3 RIGHT: scoop EVERYTHING → circle "S" (all 6) → SURE event tag
 *  4 RIGHT: die example "shows 1–6" checked — always happens
 *  5 formula stamp: Impossible = ∅, Sure = S (boxed)
 *  6 GUARDRAIL: outcome ≠ event (1 point vs a set of points)
 *
 * Layout plan (estimated render boxes, longer language counts):
 *  b0 | heading (21, ink)                     | T mid  | x380..700 y92..116
 *  b1 | "scoop NOTHING →" (14, red)            | T mid  | x180..360 y139..150
 *  b1 | empty circle cx270 cy215 r55 + "∅"     | Draw/T | x215..325 y160..270
 *  b1 | "IMPOSSIBLE event" chip (red, h38)     | Chip   | x150..390 y283..321
 *  b2 | die card "7" crossed (w50 h58)         | Draw/T | x245..295 y345..403
 *  b2 | "shows a 7 → never happens" (13,red)   | T mid  | x180..360 y417..430
 *  b3 | "scoop EVERYTHING →" (14, green)       | T mid  | x720..900 y139..150
 *  b3 | full circle cx810 cy215 r55 + "S"      | Draw/T | x755..865 y160..270
 *  b3 | "SURE event" chip (green, h38)         | Chip   | x690..930 y283..321
 *  b4 | die card "1–6" checked (w80 h58)       | Draw/T | x770..850 y345..403
 *  b4 | "shows 1–6 → always happens" (13,green)| T mid  | x720..900 y417..430
 *  b5 | boxed formula "Impossible=∅  Sure=S"   | Draw/T | x300..780 y452..494
 *  b6 | GUARDRAIL caption (16, red)             | T mid  | x420..660 y518..533
 *  b6 | dot icon "outcome = 1 point"            | Draw/T | x260..420 y548..574
 *  b6 | ringed-cluster icon "event = a SET"     | Draw/T | x660..820 y540..584
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
  GREEN,
  RED,
  AMBER_DARK,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { circleD, roundRectD, checkD } from "./math-kit";

export default function M11Ch14Sec3({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={64} size={25} fill={RED} script>
          {t("empty set: never — whole S: always", "empty set: kabhi nahi — poora S: hamesha")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={108} size={21} fill={INK} weight={700}>
          {t("Two events at the extremes", "Do events, dono extremes par")}
        </T>
      </Fade>

      {/* beat 1 — LEFT: impossible event */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={270} y={145} size={14} fill={RED} weight={600}>
          {t("scoop NOTHING →", "kuch bhi NAHI uthao →")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.7)} d={circleD(270, 215, 55)} stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={270} y={225} size={30} fill={RED} weight={800}>
          {"∅"}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.0)}>
        <Chip x={150} y={283} w={240} h={38} fill={CREAM} stroke={RED} textFill={RED} size={16} script={false}>
          {t("IMPOSSIBLE event", "IMPOSSIBLE event")}
        </Chip>
      </Fade>

      {/* beat 2 — LEFT: die example */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d={roundRectD(245, 345, 50, 58, 8)} stroke={RED} sw={2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={270} y={382} size={22} fill={INK} weight={700}>
          7
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.9)} d={crossD(245, 345, 50, 58)} stroke={RED} sw={2.4} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={270} y={423} size={13} fill={RED} script>
          {t("shows a 7 → never happens", "7 aata hi nahi → kabhi nahi hota")}
        </T>
      </Fade>

      {/* beat 3 — RIGHT: sure event */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={810} y={145} size={14} fill={GREEN} weight={600}>
          {t("scoop EVERYTHING →", "SAB kuch uthao →")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.7)} d={circleD(810, 215, 55)} stroke={GREEN} sw={2.2} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <T x={810} y={210} size={26} fill={GREEN} weight={800}>
          S
        </T>
        <T x={810} y={238} size={12} fill={MUTED}>
          {t("(all 6)", "(sab 6)")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.0)}>
        <Chip x={690} y={283} w={240} h={38} fill={CREAM} stroke={GREEN} textFill={GREEN} size={16} script={false}>
          {t("SURE event", "SURE event")}
        </Chip>
      </Fade>

      {/* beat 4 — RIGHT: die example */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d={roundRectD(770, 345, 80, 58, 8)} stroke={GREEN} sw={2} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={810} y={382} size={20} fill={INK} weight={700}>
          1–6
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.9)} d={checkD(848, 355, 16)} stroke={GREEN} sw={2.8} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={810} y={423} size={13} fill={GREEN} script>
          {t("shows 1–6 → always happens", "1–6 aata hai → hamesha hota hai")}
        </T>
      </Fade>

      {/* beat 5 — formula stamp */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d={roundRectD(280, 452, 520, 42, 8)} stroke={AMBER_DARK} sw={2} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={520} y={479} size={19} fill={INK} weight={800} anchor="end">
          {"Impossible = ∅"}
        </T>
        <T x={560} y={479} size={19} fill={INK} weight={800} anchor="start">
          {"Sure = S"}
        </T>
      </Fade>

      {/* beat 6 — GUARDRAIL: outcome ≠ event */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={525} size={16} fill={RED} script weight={700}>
          {t('"outcome" ≠ "event"', '"outcome" ≠ "event"')}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <Circle cx={300} cy={557} r={6} fill={INK} />
        <T x={320} y={562} size={14} fill={INK} anchor="start">
          {t("= 1 outcome (a point of S)", "= 1 outcome (S ka ek point)")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <Circle cx={700} cy={550} r={5} fill={INK} />
        <Circle cx={716} cy={558} r={5} fill={INK} />
        <Circle cx={700} cy={566} r={5} fill={INK} />
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 2.0)} d={circleD(708, 558, 26)} stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 2.5)}>
        <T x={744} y={563} size={14} fill={INK} anchor="start">
          {t("= event (a SET of points)", "= event (points ka SET)")}
        </T>
      </Fade>
    </Scene>
  );
}
