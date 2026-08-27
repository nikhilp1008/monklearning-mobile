/**
 * M11 Ch13 · Section 29 — "Pitfalls and pro-tips: four ways students lose marks"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: tips — closes Subtopic 2. A rapid sequence of boxed pitfalls.
 *
 * Beats (board_reveal_at_english [0, 9.98, 29.78, 48.13, 61.7, 76.54, 92.67]):
 *  0 anchor: heading
 *  1 card 1 (red, high emphasis): confusing variance with SD
 *  2 card 2: mishandling the transformation rule
 *  3 card 3: stopping the shortcut formula early
 *  4 land (boxed, high emphasis): σ²=(1/n)Σx_i²-x̄² — negative variance
 *    diagnostic
 *  5 card 4: averaging two groups' SDs
 *  6 note (red-margin, high emphasis): two instant checks + C.V. reminder
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  title (script 19, red, always-on)     | T mid | x540 y54
 *  b0 | heading (script 14, amber_dark)  | T mid | x540 y80
 *  b1 | card 1 (red, LEFT)               | Draw+T| x60..500  y100..156
 *  b2 | card 2 (amber, RIGHT)            | Draw+T| x560..1000 y100..156
 *  b3 | card 3 (amber, full width)       | Draw+T| x60..1000 y168..210
 *  b4 | boxed formula (Row, green)       | Draw+Row | box x180..900 y222..266
 *  b5 | card 4 (amber, full width)       | Draw+T| x60..1000 y278..320
 *  b6 | red bar + note (14)              | Draw+T| x60 y342..360 · text y356
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, Overline } from "./math-kit";

function XBar({
  on,
  delay = 0,
  x,
  y,
  size,
  anchor = "start",
  fill = INK,
  weight = 700,
}: {
  on: boolean;
  delay?: number;
  x: number;
  y: number;
  size: number;
  anchor?: "start" | "middle" | "end";
  fill?: string;
  weight?: number;
}) {
  const w = size * 0.6;
  return (
    <>
      <Fade on={on} delay={delay}>
        <T x={x} y={y} size={size} fill={fill} anchor={anchor} weight={weight}>
          x
        </T>
      </Fade>
      <Overline on={on} delay={delay} x={x} y={y} size={size} textWidth={w} anchor={anchor} stroke={fill} />
    </>
  );
}

export default function M11Ch13Sec29({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={54} size={19} fill={RED} anchor="middle" script>
          {t("Four Ways Students Lose Marks", "Chaar Tareeke Jinse Marks Katte Hain")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={80} size={14} fill={AMBER_DARK} anchor="middle" script>
          {t("The classic slips — and how to dodge them", "Classic slips — aur inhe kaise dodge karein")}
        </T>
      </Fade>

      {/* beat 1 — card 1 (red, most severe) */}
      <Draw on={beat >= 1} delay={dl(1, 0)} d={roundRectD(60, 100, 440, 56)} stroke={RED} sw={2.2} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={280} y={125} size={13} fill={RED} anchor="middle" weight={700}>
          {t("1. Confusing variance with SD →", "1. Variance ko SD se confuse karna →")}
        </T>
        <T x={280} y={144} size={13} fill={RED} anchor="middle" weight={700}>
          {t("differ by √ & units. Read the question!", "√ aur units se alag. Question padho!")}
        </T>
      </Fade>

      {/* beat 2 — card 2 (amber) */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d={roundRectD(560, 100, 440, 56)} stroke={AMBER_DARK} sw={1.8} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={780} y={125} size={13} fill={INK} anchor="middle" weight={700}>
          {t("2. Transformation: variance ×a², SD ×|a|,", "2. Transformation: variance ×a², SD ×|a|,")}
        </T>
        <T x={780} y={144} size={13} fill={INK} anchor="middle">
          {t("b irrelevant. Slip: scale by a, not a².", "b irrelevant. Slip: a se scale, a² se nahi.")}
        </T>
      </Fade>

      {/* beat 3 — card 3 (amber, full width) */}
      <Draw on={beat >= 3} delay={dl(3, 0)} d={roundRectD(60, 168, 940, 42)} stroke={AMBER_DARK} sw={1.8} dur={0.7} />
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={530} y={193} size={13} fill={INK} anchor="middle" weight={700}>
          {t(
            "3. Stopping the shortcut early — forgetting -x̄², or subtracting x̄ instead of x̄².",
            "3. Shortcut jaldi rokna — -x̄² bhoolna, ya x̄² ke bajaye x̄ subtract karna."
          )}
        </T>
      </Fade>

      {/* beat 4 — land (boxed, high emphasis): the negative-variance diagnostic */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d={roundRectD(180, 222, 720, 44)} stroke={GREEN} sw={2.2} dur={0.8} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={220} y={250} size={15} fill={INK} anchor="start" weight={700}>{"σ² = (1/n)Σx_i² - "}</T>
      </Fade>
      <XBar on={beat >= 4} delay={dl(4, 1)} x={438} y={250} size={15} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={451} y={250} size={15} fill={GREEN} anchor="start" weight={800}>
          {t("²  (σ²<0 ⇒ you swapped the terms)", "²  (σ²<0 ⇒ terms swap ho gaye)")}
        </T>
      </Fade>

      {/* beat 5 — card 4 (amber, full width) */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={roundRectD(60, 278, 940, 42)} stroke={AMBER_DARK} sw={1.8} dur={0.7} />
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={530} y={303} size={13} fill={INK} anchor="middle" weight={700}>
          {t(
            "4. Averaging two groups' SDs is wrong — use the combined-variance formula.",
            "4. Do groups ke SDs average karna galat — combined-variance formula use karo."
          )}
        </T>
      </Fade>

      {/* beat 6 — note: two instant checks */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 60 342 L 60 360" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={356} size={14} fill={RED} anchor="start" weight={700}>
          {t(
            "Instant checks: σ² ≥ 0, σ ≤ range. For consistency, go to C.V. — lower wins.",
            "Instant checks: σ² ≥ 0, σ ≤ range. Consistency ke liye C.V. — kam wala jeetta."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
