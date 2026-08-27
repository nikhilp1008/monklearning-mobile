/**
 * M11 Ch14 · Section 24 — "Worked example: coloured marbles (CBSE)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type: worked_examples. "blue" has no
 * board-safe color (house palette has no blue) — per the notation rule,
 * blue marbles use INK fill + a white "B" letter to disambiguate; red
 * and green marbles use the real RED/GREEN palette colors directly.
 *
 * Beats (board_reveal_at_english [0,8.7,23.13,33.11,41.47,55.98,68.35]):
 *  0 heading
 *  1 problem: 4 red, 5 green, 3 blue; find P(red), P(not blue), P(red or green)
 *  2 grid of 12 marbles (row1=4 red, row2=5 green, row3=3 blue) + n(S)=12
 *  3 ring row1: P(red) = 4/12 = 1/3
 *  4 cross row3 (blue): P(not blue) = 1 − 3/12 = 3/4
 *  5 ring rows1+2: P(red or green) = 4/12 + 5/12 = 9/12 = 3/4
 *  6 GUARDRAIL: not-blue = red-or-green (same 9 marbles) — both 3/4 ✓
 *
 * Layout plan (marble grid rows y=180/228/276; longer language counts):
 *  b1 | problem, 2 lines (15, ink)                  | T mid | x140..940 y108..132
 *  b2 | 12 marbles (r16) + "n(S)=4+5+3=12" (17)      | Fade  | y164..292 / y310..328
 *  b3 | ring row1 (amber) + label (16)                | Draw/T| y360
 *  b4 | cross row3 (red) + label (16)                   | Draw/T| y388
 *  b5 | ring rows1+2 (green) + label (16)                 | Draw/T| y416
 *  b6 | guardrail chip (red, w760 h44)                     | Chip  | x160..920 y448..492
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, crossD, ringD, INK, RED, GREEN, AMBER, MUTED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const ROW1_X = [405, 495, 585, 675]; // red
const ROW2_X = [384, 462, 540, 618, 696]; // green
const ROW3_X = [450, 540, 630]; // blue

export default function M11Ch14Sec24({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("not-blue and red-or-green describe the same marbles", "not-blue aur red-or-green same marbles hain")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={18} fill={INK} weight={700}>
          {t("Worked Example — marbles (CBSE, 2–3 marks)", "Worked Example — marbles (CBSE, 2–3 marks)")}
        </T>
      </Fade>

      {/* beat 1 — problem (fades once grid replaces it visually, but stays put here) */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={130} size={15} fill={INK} weight={600}>
          {t("Box: 4 red, 5 green, 3 blue. Draw one at random.", "Box: 4 red, 5 green, 3 blue. Ek random draw karo.")}
        </T>
      </Fade>

      {/* beat 2 — the grid */}
      {ROW1_X.map((x, i) => (
        <Fade key={`r${i}`} on={beat >= 2} delay={dl(2, 0.2 + i * 0.1)}>
          <Circle cx={x} cy={180} r={16} fill={RED} />
        </Fade>
      ))}
      {ROW2_X.map((x, i) => (
        <Fade key={`g${i}`} on={beat >= 2} delay={dl(2, 0.6 + i * 0.1)}>
          <Circle cx={x} cy={228} r={16} fill={GREEN} />
        </Fade>
      ))}
      {ROW3_X.map((x, i) => (
        <Fade key={`b${i}`} on={beat >= 2} delay={dl(2, 1.1 + i * 0.1)}>
          <Circle cx={x} cy={276} r={16} fill={INK} />
          <T x={x} y={281} size={13} fill="#fff" weight={800}>
            B
          </T>
        </Fade>
      ))}
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={540} y={315} size={17} fill={INK} weight={700}>
          {"n(S) = 4 + 5 + 3 = 12"}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <T x={540} y={333} size={12} fill={MUTED}>
          {t("(all equally likely)", "(sab equally likely)")}
        </T>
      </Fade>

      {/* beat 3 — P(red) */}
      <Draw on={beat >= 3} delay={dl(3, 0.3)} d={ringD(540, 180, 160, 30)} stroke={AMBER} sw={2.4} dur={0.7} />
      <Fade on={beat >= 3} delay={dl(3, 1.1)}>
        <T x={540} y={365} size={16} fill={INK} weight={700}>
          {"P(red) = 4/12 = 1/3"}
        </T>
      </Fade>

      {/* beat 4 — P(not blue) */}
      {ROW3_X.map((x, i) => (
        <Draw key={i} on={beat >= 4} delay={dl(4, 0.3 + i * 0.3)} d={crossD(x - 16, 260, 32, 32)} stroke={RED} sw={2.2} dur={0.4} />
      ))}
      <Fade on={beat >= 4} delay={dl(4, 1.4)}>
        <T x={540} y={393} size={16} fill={INK} weight={700}>
          {"P(not blue) = 1 − 3/12 = 3/4"}
        </T>
      </Fade>

      {/* beat 5 — P(red or green) */}
      <Draw on={beat >= 5} delay={dl(5, 0.3)} d={ringD(540, 204, 200, 55)} stroke={GREEN} sw={2.4} dur={0.8} />
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={540} y={421} size={16} fill={INK} weight={700}>
          {"P(red or green) = 4/12 + 5/12 = 9/12 = 3/4"}
        </T>
      </Fade>

      {/* beat 6 — GUARDRAIL sanity check */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={160} y={450} w={760} h={44} fill={CREAM} stroke={RED} textFill={RED} size={15} script={false}>
          {t("not-blue = red-or-green (only non-red-non-green marble is blue) — both 3/4 ✓", "not-blue = red-or-green (sirf blue hi bacha) — dono 3/4 ✓")}
        </Chip>
      </Fade>
    </Scene>
  );
}
