/**
 * M11 Ch07 · Section 1 — "Why the coefficients are just counting"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md.
 *
 * Beats (en [0, 9.3, 19.54, 34.65, 48.22, 63.49, 80.82, 94.81]):
 *  0 title (always-on) — the question
 *  1 the raw product written out: (a+b)(a+b)(a+b)⋯(a+b), "n brackets" caption
 *  2 transition: sweep arrow under the row + short label "pick a or b at each one"
 *  3 concrete diagram (left half): 3 boxes "(a+b)", arrows down to pick a/pick b/pick b
 *  4 generalize (right half): the resulting term "a^(n-r) · b^r" fades in
 *  5 land the result: boxed formula "coefficient of a^(n-r) b^r = nCr"
 *  6 red-margin guardrail: "coefficients = combination counts"
 *  7 red-margin fact: "(n-r) + r = n"
 *
 * Layout plan (Kalam bl−1.3s..+0.5s):
 *  b0 | title script26 cx540 bl58
 *  b1 | tokens script20 y140 cx 190/320/450(⋯540)/660 · caption script15 cx425 bl186
 *  b2 | arrow y222 x170..650 · label script17 cx540 bl255
 *  b3 | boxes roundRect x125/285/445 y290 w110 h46 · labels inside bl318 ·
 *       arrows cx180/340/500 y344..372 · pick labels bl396 (green/red/red)
 *  b4 | term script22 cx780 bl318
 *  b5 | chip x345 y430 w390 h50 (text bl~462)
 *  b6 | red bar x200 y495..535 · text script17 x220 bl520
 *  b7 | red bar x200 y545..575 · text script16 x220 bl566
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
  AMBER_DARK,
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

export default function M11Ch07Sec1({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const boxCx = [180, 340, 500];
  const pickLabel = [t("pick a", "a lo"), t("pick b", "b lo"), t("pick b", "b lo")];
  const pickColor = [GREEN_DARK, RED, RED];

  return (
    <Scene>
      {/* title — always on, the blank-board exception */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={INK} script>
          {t("what's really happening inside (a+b)^n?", "(a+b)^n mein asal mein ho kya raha hai?")}
        </T>
      </Fade>

      {/* beat 1 — the raw product, one bracket at a time */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={190} y={140} size={20} fill={INK} script>(a+b)</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={320} y={140} size={20} fill={INK} script>(a+b)</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <T x={450} y={140} size={20} fill={INK} script>(a+b)</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={540} y={140} size={20} fill={MUTED} script>⋯</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.9)}>
        <T x={660} y={140} size={20} fill={INK} script>(a+b)</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <T x={425} y={186} size={15} fill={MUTED} script>
          {t("(n brackets, multiplied together)", "(n brackets, sab multiply)")}
        </T>
      </Fade>

      {/* beat 2 — walk through, pick a or b */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d={arrowD(170, 222, 650, 222)} stroke={MUTED} sw={2} dur={1.2} />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={540} y={255} size={17} fill={INK} script>
          {t("pick a or b at each one", "har bracket se a ya b uthao")}
        </T>
      </Fade>

      {/* beat 3 — the concrete pick diagram (left half) */}
      {boxCx.map((cx, i) => (
        <Draw
          key={`box${i}`}
          on={beat >= 3}
          delay={dl(3, 0.3 + i * 0.3)}
          d={roundRectD(cx - 55, 290, 110, 46)}
          stroke={AMBER_DARK}
          sw={2}
          dur={0.7}
        />
      ))}
      {boxCx.map((cx, i) => (
        <Fade key={`lbl${i}`} on={beat >= 3} delay={dl(3, 0.6 + i * 0.3)}>
          <T x={cx} y={318} size={17} fill={INK} script>(a+b)</T>
        </Fade>
      ))}
      {boxCx.map((cx, i) => (
        <Draw
          key={`arr${i}`}
          on={beat >= 3}
          delay={dl(3, 1.6 + i * 0.3)}
          d={arrowD(cx, 344, cx, 372)}
          stroke={INK}
          sw={2}
          dur={0.5}
        />
      ))}
      {boxCx.map((cx, i) => (
        <Fade key={`pick${i}`} on={beat >= 3} delay={dl(3, 2.6 + i * 0.3)}>
          <T x={cx} y={396} size={14} fill={pickColor[i]} script>
            {pickLabel[i]}
          </T>
        </Fade>
      ))}

      {/* beat 4 — generalize into the term (right half) */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={780} y={318} size={22} fill={INK} script>
          a^(n-r) · b^r
        </T>
      </Fade>

      {/* beat 5 — land the result */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={345} y={430} w={390} h={50} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={19}>
          {t("coefficient of a^(n-r) b^r = nCr", "coefficient of a^(n-r) b^r = nCr")}
        </Chip>
      </Fade>

      {/* beat 6 — red-margin guardrail */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 200 495 v 40" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={220} y={520} size={17} fill={RED} script anchor="start">
          {t("coefficients = combination counts", "coefficients = combination ka count")}
        </T>
      </Fade>

      {/* beat 7 — red-margin fact */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 200 545 v 30" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <T x={220} y={566} size={16} fill={RED} script anchor="start">
          (n-r) + r = n
        </T>
      </Fade>
    </Scene>
  );
}
