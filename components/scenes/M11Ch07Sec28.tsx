/**
 * M11 Ch07 · Section 28 — "What could a fractional or negative power
 * expand to?"
 * Canvas 1080×620 · safe x36–1044, y30–596. Opens subtopic 5 (Any Index &
 * Approximations) — FLAGGED for extra eye-scrutiny per task brief.
 * 7 board_content items, seq1=title.
 *
 * Beats (en [0, 21.5, 41.64, 62.04, 86.87, 106.67, 128.85]):
 *  0 title
 *  1 intuition: no last term to stop at
 *  2 the generalized nCr formula, boxed (HIGH) — works for any real n
 *  3 why: integer n hits zero and stops; non-integer/negative n never does
 *  4 red-margin HIGH: converges to (1+x)^n only when |x|<1
 *  5 diagram: number line, open dots at -1 and 1, shaded convergence region
 *  6 red-margin HIGH: no nCr symbols; arrange so the smaller quantity is x
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, GREEN, GREEN_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, axisD, tickD, IntervalDot } from "./math-kit";

export default function M11Ch07Sec28({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={58} size={23} fill={INK} script>
          {t("generalising to any index n (JEE extension)", "kisi bhi index n ke liye generalise karna")}
        </T>
      </Fade>

      {/* beat 1 — intuition */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={102} size={16} fill={MUTED} script>
          {t("no last term to stop at — can't choose r things from 'half a thing'", "koi last term nahi — 'half a thing' se r cheezein nahi chun sakte")}
        </T>
      </Fade>

      {/* beat 2 — the generalized formula, boxed */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={148} size={18} fill={AMBER_DARK} script>
          nCr = n(n-1)(n-2)⋯(n-r+1) / r!
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.2)} d={roundRectD(280, 122, 520, 46)} stroke={AMBER_DARK} sw={2.4} dur={1} />

      {/* beat 3 — why it stops or doesn't */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={150} y={200} size={15} fill={INK} script anchor="start">
          {t("positive integer n: product hits (n-n)=0, stops — finite", "positive integer n: product (n-n)=0 pe ruk jaata — finite")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={150} y={230} size={15} fill={INK} script anchor="start">
          {t("n=-3 or 1/2: never hits zero — the series is infinite", "n=-3 ya 1/2: kabhi zero nahi hota — series infinite hai")}
        </T>
      </Fade>

      {/* beat 4 — red-margin: convergence condition */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M 150 258 v 40" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={170} y={282} size={16} fill={RED} script anchor="start">
          {t("infinite ⇒ converges to (1+x)^n only when |x| < 1", "infinite ⇒ (1+x)^n ke barabar sirf |x| < 1 pe")}
        </T>
      </Fade>

      {/* beat 5 — diagram: convergence region on a number line */}
      <Draw on={beat >= 5} delay={dl(5, 0.3)} d={axisD(220, 860, 350)} stroke={INK} sw={2} dur={0.8} />
      <Draw on={beat >= 5} delay={dl(5, 1)} d={tickD(540, 350)} stroke={INK} sw={1.4} />
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={540} y={375} size={13} fill={MUTED}>0</T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 1.6)}
        d={`M 390 350 L 690 350`}
        stroke={GREEN}
        sw={5}
        dur={0.8}
      />
      <IntervalDot on={beat >= 5} delay={dl(5, 1.6)} x={390} y={350} open={true} stroke={GREEN} />
      <IntervalDot on={beat >= 5} delay={dl(5, 2)} x={690} y={350} open={true} stroke={GREEN} />
      <Fade on={beat >= 5} delay={dl(5, 2.4)}>
        <T x={390} y={330} size={13} fill={GREEN_DARK}>-1</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.6)}>
        <T x={690} y={330} size={13} fill={GREEN_DARK}>1</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3)}>
        <T x={540} y={410} size={14} fill={GREEN_DARK} script>
          {t("convergence region: -1 < x < 1", "convergence region: -1 < x < 1")}
        </T>
      </Fade>

      {/* beat 6 — red-margin: no nCr symbols */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 150 450 v 56" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={170} y={472} size={15} fill={RED} script anchor="start">
          {t("no nCr symbols — undefined for non-integer or negative n", "koi nCr symbols nahi — non-integer ya negative n ke liye undefined")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.4)}>
        <T x={170} y={496} size={15} fill={RED} script anchor="start">
          {t("arrange so the smaller quantity is x", "arrange karo taaki chhoti quantity x ho")}
        </T>
      </Fade>
    </Scene>
  );
}
