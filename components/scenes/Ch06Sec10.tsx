/**
 * Ch06 · Section 10 — "Worked example: uniform disc with a hole [JEE Main]"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 15.36, 27.56, 40.7, 59.65, 77.06, 91.73, 105.64]):
 *  0 title + problem subline
 *  1 figure: axis, full disc c(250,290) R130 cream, red dashed hole c(315,290) r65
 *    (passes through O), O dot+label, green "?" dot at (228,290)
 *  2 negative-mass method lines under diagram
 *  3 weighted-average fraction with the minus sign
 *  4 crunch → −R/6 line + green "−R/6" stamp on diagram
 *  5 part (b) header
 *  6 balance equation → x₀ = +R/2 result box
 *  7 "filling it back" note + m dot at hole centre + "put m here"
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title script22 cx540 bl 52 · sub script13 cx540 bl 96 (x336..744)
 *  b1 | axis (110,290)→(440,290) muted · disc c(250,290) R130 · hole dashed r65
 *       c(315,290) · "hole (R/2)" script12 cx315 bl 320 · O dot r3 ·
 *       "O" end(238,312) · green dot (228,290) r5 · "?" cx228 bl 270 (b1..3)
 *  b2 | L1 script13 cx250 bl 470 · L2 script13 cx250 bl 496
 *  b3 | "x_cm =" st x560 bl 172 · num cx790 bl 148 · bar x650..930 y165 · den bl 196
 *  b4 | line sans16 st x560 bl 245 · "−R/6" green sans13 cx228 bl 340
 *  b5 | header script13 st x560 bl 300
 *  b6 | eq sans16 st x560 bl 350 · green box x560..920 y380..440 · cx740 bl 416
 *  b7 | note script13 st x560 bl 480 · m dot (315,290) r5 amber ·
 *       "put m here" script12 cx315 bl 260
 */

import React from "react";
import { Path, TSpan } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const Sub = ({ children }: { children: string | number | (string | number)[] }) => (
  <TSpan dy={5} fontSize={11}>
    {children}
  </TSpan>
);
const Up = ({ children }: { children: string | number | (string | number)[] }) => (
  <TSpan dy={-5}>{children}</TSpan>
);

export default function Ch06Sec10({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the JEE Main problem */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t(
            "uniform disc with a hole [JEE Main]",
            "hole wali uniform disc [JEE Main]"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 7)}>
        <T x={540} y={96} size={13} fill={MUTED} script>
          {t(
            "disc R, hole R/2 cut centred at R/2 — CoM of what remains?",
            "disc R, hole R/2 kata centre se R/2 par — bache ka CoM?"
          )}
        </T>
      </Fade>

      {/* beat 1 — the figure */}
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <Path
          d="M 110 290 H 440"
          fill="none"
          stroke={MUTED}
          strokeWidth={1.4}
          strokeDasharray="5 5"
        />
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 2)}
        d="M 120 290 a 130 130 0 1 0 260 0 a 130 130 0 1 0 -260 0"
        stroke={INK}
        sw={2.6}
        dur={1.2}
        fill={CREAM}
      />
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <Path
          d="M 250 290 a 65 65 0 1 0 130 0 a 65 65 0 1 0 -130 0"
          fill="none"
          stroke={RED}
          strokeWidth={2}
          strokeDasharray="7 6"
        />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5)}>
        <T x={315} y={320} size={12} fill={RED} script>
          {t("hole (R/2)", "hole (R/2)")}
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 6.5)}
        d="M 247 290 a 3 3 0 1 0 6 0 a 3 3 0 1 0 -6 0"
        stroke={INK}
        fill={INK}
        sw={2}
        dur={0.3}
      />
      <Fade on={beat >= 1} delay={dl(1, 7.2)}>
        <T x={238} y={312} size={13} fill={INK} anchor="end" weight={700}>
          O
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 8.5)}
        d="M 223 290 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0"
        stroke={GREEN}
        fill={GREEN}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 1 && beat < 4} delay={dl(1, 9.3)}>
        <T x={228} y={270} size={14} fill={GREEN_DARK} weight={700}>
          ?
        </T>
      </Fade>

      {/* beat 2 — the negative-mass method */}
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={250} y={470} size={13} fill={AMBER_DARK} script>
          {t(
            "remaining body = full disc + NEGATIVE hole",
            "bachi body = poori disc + NEGATIVE hole"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5)}>
        <T x={250} y={496} size={13} fill={MUTED} script>
          {t("mass ∝ area ∝ R²", "mass ∝ area ∝ R²")}
        </T>
      </Fade>

      {/* beat 3 — weighted average, minus sign in place */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={560} y={172} size={16} fill={INK} anchor="start" weight={700}>
          x
          <Sub>cm</Sub>
          <Up> =</Up>
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.5)}>
        <T x={790} y={148} size={15} fill={INK} weight={700}>
          (R²)(0) − (R²/4)(R/2)
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 3.4)} d="M 650 165 h 280" stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 4.2)}>
        <T x={790} y={196} size={15} fill={INK} weight={700}>
          R² − R²/4
        </T>
      </Fade>

      {/* beat 4 — crunch to −R/6 */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={560} y={245} size={16} fill={INK} anchor="start" weight={700}>
          = (−R³/8) / (3R²/4) = −R/6
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5)}>
        <T x={228} y={340} size={13} fill={GREEN_DARK} weight={700}>
          −R/6
        </T>
      </Fade>

      {/* beat 5 — part (b) */}
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={560} y={300} size={13} fill={INK} script anchor="start">
          {t(
            "part (b): place m at x₀ so the CoM returns to O",
            "part (b): m ko x₀ par rakho ki CoM wapas O par aaye"
          )}
        </T>
      </Fade>

      {/* beat 6 — solve for x₀ */}
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={560} y={350} size={16} fill={INK} anchor="start" weight={700}>
          [3m(−R/6) + m·x₀] / 4m = 0
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 5)}
        d="M 572 380 h 336 q 12 0 12 12 v 36 q 0 12 -12 12 h -336 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 6.2)}>
        <T x={740} y={416} size={20} fill={INK} weight={700}>
          x₀ = + R/2
        </T>
      </Fade>

      {/* beat 7 — filling it back */}
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={560} y={480} size={13} fill={GREEN_DARK} script anchor="start">
          {t(
            "the added m sits EXACTLY where the hole was — filling it back",
            "added m theek wahin baithta hai jahan hole tha — wapas bhar rahe ho"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 4)}
        d="M 310 290 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0"
        stroke={AMBER}
        fill={AMBER}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 7} delay={dl(7, 5)}>
        <T x={315} y={260} size={12} fill={AMBER_DARK} script>
          {t("put m here", "m yahin rakho")}
        </T>
      </Fade>
    </Scene>
  );
}
