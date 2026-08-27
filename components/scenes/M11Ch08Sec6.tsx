/**
 * M11 Ch08 · Section 6 — "Recursive sequences need not be AP or GP"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=worked_examples.
 *
 * Beats (en [0, 10.75, 22.19, 29.1, 38.83, 57.43, 68.35]):
 *  0 title (always-on) — "Write five terms: a_1=2, a_n=3a_(n-1)+1"
 *  1 chain skeleton (5 boxes + arrows), a_1=2 filled, "feed it forward" caption
 *  2 a_2 = 3(2)+1 = 7 — box 2 filled
 *  3 a_3, a_4, a_5 computed — boxes 3-5 filled
 *  4 red-margin: differences AND ratios both change — neither AP nor GP
 *  5 procedure label
 *  6 boxed final answer
 *
 * Layout plan:
 *  b1 | 5 boxes roundRect x90..890 y140..184 · 4 arrows y162 · value bl168 ·
 *       index label bl208 · caption bl240 cx540
 *  b2 | work line1 bl272 cx540
 *  b3 | work line2 bl304 cx540
 *  b4 | red bar x76 y330..386 · text bl350/376 x96
 *  b5 | text bl420 cx540
 *  b6 | chip x340 y445 w400 h44 (text bl~472)
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
  arrowD,
  INK,
  MUTED,
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

export default function M11Ch08Sec6({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const boxCx = [130, 310, 490, 670, 850];
  const values = ["2", "7", "22", "67", "202"];
  const idxLabel = ["a_1", "a_2", "a_3", "a_4", "a_5"];

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={23} fill={INK} anchor="middle" script>
          {t("Write five terms: a_1 = 2, a_n = 3a_(n-1) + 1", "Paanch terms likho: a_1 = 2, a_n = 3a_(n-1) + 1")}
        </T>
      </Fade>

      {/* beat 1 — chain skeleton, a_1 filled */}
      {boxCx.map((cx, i) => (
        <Draw
          key={`box${i}`}
          on={beat >= 1}
          delay={dl(1, 0.2 + i * 0.15)}
          d={roundRectD(cx - 40, 140, 80, 44)}
          stroke={i === 0 ? INK : MUTED}
          sw={2}
          dur={0.5}
        />
      ))}
      {boxCx.slice(0, 3).map((cx, i) =>
        i < 3 ? (
          <Draw
            key={`arr${i}`}
            on={beat >= 1}
            delay={dl(1, 1.0 + i * 0.15)}
            d={arrowD(cx + 44, 162, boxCx[i + 1] - 44, 162)}
            stroke={MUTED}
            sw={1.8}
            dur={0.4}
          />
        ) : null
      )}
      <Draw on={beat >= 1} delay={dl(1, 1.45)} d={arrowD(boxCx[3] + 44, 162, boxCx[4] - 44, 162)} stroke={MUTED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={boxCx[0]} y={168} size={16} fill={INK} anchor="middle">{values[0]}</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={boxCx[0]} y={208} size={12} fill={MUTED} anchor="middle">{idxLabel[0]}</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.0)}>
        <T x={540} y={240} size={14} fill={INK} anchor="middle" script>
          {t("each term is built from the one before it — feed it forward", "har term pichle se banta hai — aage feed karo")}
        </T>
      </Fade>

      {/* beat 2 — a_2 computed */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={boxCx[1]} y={168} size={16} fill={INK} anchor="middle">{values[1]}</T>
        <T x={boxCx[1]} y={208} size={12} fill={MUTED} anchor="middle">{idxLabel[1]}</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={540} y={272} size={16} fill={INK} anchor="middle">{"a_2 = 3(2) + 1 = 7"}</T>
      </Fade>

      {/* beat 3 — a_3, a_4, a_5 */}
      {[2, 3, 4].map((i) => (
        <Fade key={`v${i}`} on={beat >= 3} delay={dl(3, 0.2 + (i - 2) * 0.3)}>
          <T x={boxCx[i]} y={168} size={16} fill={INK} anchor="middle">{values[i]}</T>
          <T x={boxCx[i]} y={208} size={12} fill={MUTED} anchor="middle">{idxLabel[i]}</T>
        </Fade>
      ))}
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={540} y={304} size={16} fill={INK} anchor="middle">
          {"a_3 = 3(7)+1 = 22,   a_4 = 67,   a_5 = 202"}
        </T>
      </Fade>

      {/* beat 4 — red-margin: neither AP nor GP */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M 76 330 v 56" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={96} y={350} size={15} fill={RED} anchor="start" script>
          {t("differences 5, 15, 45… and ratios", "differences 5, 15, 45… aur ratios")}
        </T>
        <T x={96} y={376} size={15} fill={RED} anchor="start" script>
          {t("both change — neither AP nor GP", "dono change hote hain — na AP na GP")}
        </T>
      </Fade>

      {/* beat 5 — procedure label */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={420} size={15} fill={INK} anchor="middle" script>
          {t(
            "recursion is Procedure 4: unfold terms one at a time",
            "recursion Procedure 4 hai: terms ek ek karke unfold karo"
          )}
        </T>
      </Fade>

      {/* beat 6 — boxed final answer */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Chip x={340} y={445} w={400} h={44} fill={CREAM} stroke={GREEN_DARK} textFill={GREEN_DARK} size={17}>
          {t("answer: 2, 7, 22, 67, 202", "answer: 2, 7, 22, 67, 202")}
        </Chip>
      </Fade>
    </Scene>
  );
}
