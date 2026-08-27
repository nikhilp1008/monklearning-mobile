/**
 * M11 Ch08 · Section 4 — "Listing terms from a formula"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=worked_examples.
 *
 * Beats (en [0, 10.41, 21.85, 33.37, 43.78, 59.48, 68.35]):
 *  0 title (always-on) — "Write the first four terms of a_n = (2n-3)/4"
 *  1 setup: 4 n-value chips arrive, ready to substitute
 *  2 work a_1 fully: (2(1)-3)/4 = -1/4
 *  3 the other three, same procedure: a_2=1/4, a_3=3/4, a_4=5/4
 *  4 red-margin AP insight: number line, 4 equally-spaced dots, +1/2 gaps
 *  5 procedure label
 *  6 boxed final answer
 *
 * Layout plan:
 *  b1 | 4 chips x165..755 y96..130 · caption bl155
 *  b2 | line1 bl195 cx540 · line2 "= -1/4" bl222 cx540
 *  b3 | line bl255 cx540
 *  b4 | axis y330 x430..870 · 4 dots x500/600/700/800 · value labels bl352 ·
 *       +1/2 labels bl312 cx550/650/750 · red bar x240 y385..435 · text bl405/bl428 x260
 *  b5 | text bl465 cx540
 *  b6 | chip x350 y495 w380 h44 (text bl~522)
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { axisD, IntervalDot } from "./math-kit";

export default function M11Ch08Sec4({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const nCx = [165 + 55, 165 + 55 + 195, 165 + 55 + 390, 165 + 55 + 585];
  const dotX = [500, 600, 700, 800];
  const dotLabel = ["-1/4", "1/4", "3/4", "5/4"];
  const midX = [550, 650, 750];

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={25} fill={INK} anchor="middle" script>
          {t("Write the first four terms of a_n = (2n-3)/4", "a_n = (2n-3)/4 ke pehle chaar terms likho")}
        </T>
      </Fade>

      {/* beat 1 — setup: n-values ready */}
      {nCx.map((cx, i) => (
        <Fade key={`n${i}`} on={beat >= 1} delay={dl(1, 0.25 + i * 0.25)}>
          <Chip x={cx - 45} y={96} w={90} h={34} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={15}>
            {`n = ${i + 1}`}
          </Chip>
        </Fade>
      ))}
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={460} y={155} size={14} fill={MUTED} anchor="middle" script>
          {t("substitute each value into the rule", "har value ko rule mein substitute karo")}
        </T>
      </Fade>

      {/* beat 2 — work a_1 fully */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={195} size={17} fill={INK} anchor="middle">
          {"a_1 = (2(1) - 3)/4"}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.0)}>
        <T x={540} y={222} size={18} fill={AMBER_DARK} anchor="middle" weight={700}>
          {"= -1/4"}
        </T>
      </Fade>

      {/* beat 3 — the other three, same procedure */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={255} size={16} fill={INK} anchor="middle">
          {"a_2 = 1/4     a_3 = 3/4     a_4 = 5/4"}
        </T>
      </Fade>

      {/* beat 4 — AP insight: equally-spaced number line */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d={axisD(430, 870, 330)} stroke={INK} sw={2} dur={0.7} />
      {dotX.map((x, i) => (
        <IntervalDot key={`dot${i}`} on={beat >= 4} delay={dl(4, 0.6 + i * 0.25)} x={x} y={330} open={false} r={5} stroke={AMBER_DARK} />
      ))}
      {dotX.map((x, i) => (
        <Fade key={`dl${i}`} on={beat >= 4} delay={dl(4, 0.8 + i * 0.25)}>
          <T x={x} y={352} size={13} fill={INK} anchor="middle">{dotLabel[i]}</T>
        </Fade>
      ))}
      {midX.map((x, i) => (
        <Fade key={`gap${i}`} on={beat >= 4} delay={dl(4, 1.8 + i * 0.2)}>
          <T x={x} y={312} size={12} fill={GREEN_DARK} anchor="middle" weight={700}>+1/2</T>
        </Fade>
      ))}
      <Draw on={beat >= 4} delay={dl(4, 2.6)} d="M 240 385 v 50" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 3.2)}>
        <T x={260} y={405} size={15} fill={RED} anchor="start" script>
          {t("terms rise by 1/2 each —", "terms 1/2 se badhte hain —")}
        </T>
        <T x={260} y={428} size={15} fill={RED} anchor="start" script>
          {t("they form an AP!", "ye ek AP banate hain!")}
        </T>
      </Fade>

      {/* beat 5 — procedure label */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={465} size={14} fill={INK} anchor="middle" script>
          {t(
            "substitution is Procedure 1: from general term to terms",
            "substitution Procedure 1 hai: general term se terms tak"
          )}
        </T>
      </Fade>

      {/* beat 6 — boxed final answer */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Chip x={330} y={495} w={420} h={44} fill={CREAM} stroke={GREEN_DARK} textFill={GREEN_DARK} size={17}>
          {t("answer: -1/4, 1/4, 3/4, 5/4", "answer: -1/4, 1/4, 3/4, 5/4")}
        </Chip>
      </Fade>
    </Scene>
  );
}
