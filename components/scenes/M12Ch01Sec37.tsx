/**
 * M12Ch01 · Section 37 — "Definitions, ranges, and key identities"
 * Subtopic: Standard Real Functions and Their Graphs
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * This is the reference block for the subtopic, so the danger is obvious: it
 * turns into a wall of formulas. Instead every range the voice names is drawn
 * as its actual graph — the V of |x|, the three-level step of sgn x, the
 * staircase of ⌊x⌋, the sawtooth of {x}, and the exp/log pair — and every
 * identity gets the small figure that makes it obvious (a number line for the
 * modulus rebuild, a number line for the floor sandwich, a punctured/solid
 * line for the ⌊x⌋ + ⌊−x⌋ off-by-one, a two-tooth sawtooth for the period).
 *
 * Grid
 *   title band          y  30– 94   (rule at y = 94)
 *   ROW B  four graphs  y 104–272   columns 40/291/542/793/1044
 *   ROW C  three panels y 290–450   columns 40–352 · 372–706 · 726–1044
 *   ROW D  three panels y 462–596   same three columns
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "here is the reference block"        title + underline + subtitle + rule
 *  1  "the ranges to lock in"              FOUR graphs drawn: |x| V with ±2
 *                                          ticks, sgn x three-level step with
 *                                          open ends, ⌊x⌋ staircase (5 steps,
 *                                          10 endpoint markers), {x} sawtooth
 *                                          (5 teeth) under the dashed level 1
 *  2  "the growth pair"                    eˣ and logₐ x on one axis frame,
 *                                          with their range / domain captions
 *  3  "the modulus identities"             |x|² = x², |xy| = |x||y|,
 *                                          sgn(x)·|x| = x + a number line
 *                                          showing |x| as the distance and
 *                                          sgn(x) = −1 as the direction
 *  4  "the floor identities"               number line with x−1 (open), ⌊x⌋,
 *                                          x, the width-1 span arrow, and the
 *                                          shift-by-n identity
 *  5  "⌊x⌋ + ⌊−x⌋ = 0 or −1"               integers-vs-gaps number line:
 *                                          green dots = 0, red gaps = −1
 *  6  "fractional part and the log rule"   {x} = x − ⌊x⌋, two sawtooth teeth
 *                                          with the period-1 span arrow, and
 *                                          logₐ(xy) = logₐx + logₐy
 *  7  "change of base, and the collapse"   the quotient drawn as a real
 *                                          fraction, then a^(logₐ x) = x
 *
 * Visual vocabulary (shared with Sections 38 and 39)
 *   axes INK with drawn arrowheads · the graph of the standard function
 *   AMBER_DARK · solid endpoint = included, hollow endpoint (PAPER fill) =
 *   excluded · results and surviving sets GREEN_DARK · exclusions, traps and
 *   headings RED · auxiliary construction lines BLUE dashed · notes MUTED.
 */

import React from "react";
import { Circle, G, Line, TSpan } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD,
  INK, MUTED, AMBER_DARK, GREEN, GREEN_DARK, RED, PAPER,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

/* ---------- ROW B : four graph panels ---------- */
const CXS = [166, 417, 668, 919];
const AXY = 200;           // every panel's x-axis
const STEP = 25;           // one unit horizontally in panels 2 and 3

/* floor staircase: [x0, x1, y] for n = −2..2, one unit = 17px vertically */
const stairs = (cx: number) =>
  [-2, -1, 0, 1, 2].map((n) => ({
    x0: cx + STEP * n,
    x1: cx + STEP * (n + 1),
    y: AXY - 17 * n,
  }));

/* fractional-part sawtooth: teeth for n = −2..2, height 34px */
const teeth = (cx: number) =>
  [-2, -1, 0, 1, 2].map((n) => ({
    x0: cx + STEP * n,
    x1: cx + STEP * (n + 1),
  }));

/* ---------- ROW C panel 1 : the growth pair ---------- */
const OX = 140;
const OY = 384;
const S = 20;
const gx = (x: number) => OX + S * x;
const gy = (y: number) => OY - S * y;
function curve(f: (x: number) => number, x0: number, x1: number, n: number) {
  const pts: string[] = [];
  for (let i = 0; i <= n; i++) {
    const x = x0 + ((x1 - x0) * i) / n;
    pts.push(`${gx(x).toFixed(1)} ${gy(f(x)).toFixed(1)}`);
  }
  return `M ${pts.join(" L ")}`;
}
const EXP_D = curve(Math.exp, -2.9, 1.05, 44);
const LOG_D = curve(Math.log, 0.42, 8.6, 48);

/* ---------- ROW D panel 1 : the integers-vs-gaps line ---------- */
const NL_TICKS = [56, 104, 152, 200, 248, 296, 344];

export default function M12Ch01Sec37({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — the framing ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={50} size={25} fill={RED} script>
          {t("The reference block — ranges and identities",
             "Reference block — ranges aur identities")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.1)}
        d="M 320 66 C 470 62, 640 70, 760 64" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.9)}>
        <T x={540} y={84} size={12.5} fill={MUTED} script>
          {t("ranges first, then the identities that turn many problems into one-liners",
             "pehle ranges, phir wo identities jo kai problems ko one-liners bana dete hain")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.8)} d="M 40 94 H 1044" stroke={MUTED} sw={1.2} dur={1} />

      {/* ═══════════ beat 1 — the four ranges, drawn ═══════════ */}
      {[291, 542, 793].map((x) => (
        <Draw key={`vb${x}`} on={beat >= 1} delay={dl(1, 0.1)}
          d={`M ${x} 104 V 272`} stroke={MUTED} sw={1} dur={0.5} />
      ))}

      {/* ---- panel 0 : y = |x| ---- */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={CXS[0]} y={116} size={13.5} fill={AMBER_DARK} weight={800}>
          {t("modulus   y = | x |", "modulus   y = | x |")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.7)} d={arrowD(CXS[0] - 80, AXY, CXS[0] + 80, AXY)}
        stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 0.9)} d={arrowD(CXS[0], 244, CXS[0], 148)}
        stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 1.2)}
        d={`M ${CXS[0] - 48} 152 L ${CXS[0]} ${AXY} L ${CXS[0] + 48} 152`}
        stroke={AMBER_DARK} sw={2.8} dur={0.8} />
      <Draw on={beat >= 1} delay={dl(1, 1.8)}
        d={`M ${CXS[0] - 48} 194 V 206 M ${CXS[0] + 48} 194 V 206`} stroke={INK} sw={1.6} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <Circle cx={CXS[0]} cy={AXY} r={4.5} fill={AMBER_DARK} />
        <T x={CXS[0] - 48} y={224} size={12} fill={MUTED} weight={700}>−2</T>
        <T x={CXS[0] + 48} y={224} size={12} fill={MUTED} weight={700}>2</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <T x={CXS[0]} y={262} size={12.5} fill={GREEN_DARK} weight={800}>
          {t("range   [ 0, ∞ )", "range   [ 0, ∞ )")}
        </T>
      </Fade>

      {/* ---- panel 1 : y = sgn x ---- */}
      <Fade on={beat >= 1} delay={dl(1, 2.9)}>
        <T x={CXS[1]} y={116} size={13.5} fill={AMBER_DARK} weight={800}>
          {t("signum   y = sgn x", "signum   y = sgn x")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.2)} d={arrowD(CXS[1] - 80, AXY, CXS[1] + 80, AXY)}
        stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 3.4)} d={arrowD(CXS[1], 244, CXS[1], 148)}
        stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 3.7)} d={`M ${CXS[1]} 178 H ${CXS[1] + 66}`}
        stroke={AMBER_DARK} sw={2.8} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 4)} d={`M ${CXS[1] - 66} 222 H ${CXS[1]}`}
        stroke={AMBER_DARK} sw={2.8} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 4.4)}>
        <Circle cx={CXS[1]} cy={178} r={4.5} fill={PAPER} stroke={AMBER_DARK} strokeWidth={2} />
        <Circle cx={CXS[1]} cy={222} r={4.5} fill={PAPER} stroke={AMBER_DARK} strokeWidth={2} />
        <Circle cx={CXS[1]} cy={AXY} r={4.5} fill={AMBER_DARK} />
        <T x={CXS[1] + 34} y={168} size={12} fill={MUTED} weight={700}>1</T>
        <T x={CXS[1] - 34} y={240} size={12} fill={MUTED} weight={700}>−1</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.9)}>
        <T x={CXS[1]} y={262} size={12.5} fill={GREEN_DARK} weight={800}>
          {t("range   { −1, 0, 1 }", "range   { −1, 0, 1 }")}
        </T>
      </Fade>

      {/* ---- panel 2 : y = floor x ---- */}
      <Fade on={beat >= 1} delay={dl(1, 5.4)}>
        <T x={CXS[2]} y={116} size={13.5} fill={AMBER_DARK} weight={800}>
          {t("floor   y = ⌊ x ⌋", "floor   y = ⌊ x ⌋")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 5.7)} d={arrowD(CXS[2] - 80, AXY, CXS[2] + 82, AXY)}
        stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 5.9)} d={arrowD(CXS[2], 244, CXS[2], 148)}
        stroke={INK} sw={2} dur={0.5} />
      {stairs(CXS[2]).map((s, i) => (
        <Draw key={`st${i}`} on={beat >= 1} delay={dl(1, 6.2 + i * 0.16)}
          d={`M ${s.x0} ${s.y} H ${s.x1}`} stroke={AMBER_DARK} sw={2.8} dur={0.3} />
      ))}
      <Fade on={beat >= 1} delay={dl(1, 7.2)}>
        {stairs(CXS[2]).map((s, i) => (
          <G key={`sm${i}`}>
            <Circle cx={s.x0} cy={s.y} r={4} fill={AMBER_DARK} />
            <Circle cx={s.x1} cy={s.y} r={4} fill={PAPER} stroke={AMBER_DARK} strokeWidth={1.8} />
          </G>
        ))}
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 7.8)}>
        <T x={CXS[2]} y={262} size={12.5} fill={GREEN_DARK} weight={800}>
          {t("range   ℤ   (integers)", "range   ℤ   (integers)")}
        </T>
      </Fade>

      {/* ---- panel 3 : y = {x} ---- */}
      <Fade on={beat >= 1} delay={dl(1, 8.3)}>
        <T x={CXS[3]} y={116} size={13.5} fill={AMBER_DARK} weight={800}>
          {t("fractional part   y = { x }", "fractional part   y = { x }")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 8.6)} d={arrowD(CXS[3] - 80, AXY, CXS[3] + 82, AXY)}
        stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 8.8)} d={arrowD(CXS[3], 244, CXS[3], 148)}
        stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 9)}>
        <Line x1={CXS[3] - 80} y1={166} x2={CXS[3] + 82} y2={166}
          stroke={BLUE} strokeWidth={1.4} strokeDasharray="6 5" />
      </Fade>
      {teeth(CXS[3]).map((s, i) => (
        <Draw key={`tt${i}`} on={beat >= 1} delay={dl(1, 9.2 + i * 0.16)}
          d={`M ${s.x0} ${AXY} L ${s.x1} 166`} stroke={AMBER_DARK} sw={2.8} dur={0.3} />
      ))}
      <Fade on={beat >= 1} delay={dl(1, 10.2)}>
        {teeth(CXS[3]).map((s, i) => (
          <G key={`tm${i}`}>
            <Circle cx={s.x0} cy={AXY} r={4} fill={AMBER_DARK} />
            <Circle cx={s.x1} cy={166} r={4} fill={PAPER} stroke={AMBER_DARK} strokeWidth={1.8} />
          </G>
        ))}
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 10.8)}>
        <T x={CXS[3]} y={262} size={12.5} fill={GREEN_DARK} weight={800}>
          {t("range   [ 0, 1 )", "range   [ 0, 1 )")}
        </T>
      </Fade>

      {/* ═══════════ ROW C / ROW D column rules ═══════════ */}
      {[362, 716].map((x) => (
        <Draw key={`vc${x}`} on={beat >= 2} delay={dl(2, 0.1)}
          d={`M ${x} 290 V 596`} stroke={MUTED} sw={1} dur={0.7} />
      ))}

      {/* ═══════════ beat 2 — the growth pair ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={44} y={298} size={13.5} fill={RED} weight={800} anchor="start">
          {t("GROWTH PAIR — eˣ and logₐ x", "GROWTH PAIR — eˣ aur logₐ x")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.8)} d={arrowD(52, OY, 326, OY)} stroke={INK} sw={2.1} dur={0.6} />
      <Draw on={beat >= 2} delay={dl(2, 1.1)} d={arrowD(OX, 404, OX, 316)} stroke={INK} sw={2.1} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={332} y={389} size={12} fill={INK} weight={800} anchor="start">x</T>
        <T x={132} y={320} size={12} fill={INK} weight={800} anchor="end">y</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.8)} d={EXP_D} stroke={AMBER_DARK} sw={2.8} dur={1} />
      <Fade on={beat >= 2} delay={dl(2, 2.8)}>
        <T x={172} y={330} size={12.5} fill={AMBER_DARK} weight={800} anchor="start">y = eˣ</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 3.2)} d={LOG_D} stroke={BLUE} sw={2.8} dur={1.1} />
      <Fade on={beat >= 2} delay={dl(2, 4.3)}>
        <T x={262} y={334} size={12.5} fill={BLUE} weight={800}>y = logₐ x</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5)}>
        <T x={44} y={424} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("eˣ  :  range = ( 0, ∞ )", "eˣ  :  range = ( 0, ∞ )")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 7)}>
        <T x={44} y={448} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("logₐ x  :  domain = ( 0, ∞ ),  range = ℝ",
             "logₐ x  :  domain = ( 0, ∞ ),  range = ℝ")}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — the modulus identities ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={376} y={298} size={13.5} fill={RED} weight={800} anchor="start">
          {t("MODULUS IDENTITIES", "MODULUS IDENTITIES")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={376} y={332} size={17} fill={GREEN_DARK} weight={800} anchor="start">| x |² = x²</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.6)}>
        <T x={376} y={364} size={17} fill={GREEN_DARK} weight={800} anchor="start">|xy| = |x| |y|</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.6)}>
        <T x={376} y={396} size={17} fill={GREEN_DARK} weight={800} anchor="start">sgn(x) · |x| = x</T>
      </Fade>
      {/* the rebuild, on a number line: magnitude from the modulus, direction from the sign */}
      <Draw on={beat >= 3} delay={dl(3, 5.4)} d="M 546 372 H 700" stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 5.8)}
        d="M 570 366 V 378 M 620 366 V 378 M 670 366 V 378" stroke={INK} sw={1.6} dur={0.3} />
      <Fade on={beat >= 3} delay={dl(3, 6.1)}>
        <Circle cx={570} cy={372} r={5} fill={RED} />
        <T x={570} y={394} size={12} fill={RED} weight={800}>x</T>
        <T x={620} y={394} size={12} fill={MUTED} weight={700}>0</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 6.5)} d={arrowD(595, 352, 570, 352)} stroke={AMBER_DARK} sw={2} dur={0.25} />
      <Draw on={beat >= 3} delay={dl(3, 6.7)} d={arrowD(595, 352, 620, 352)} stroke={AMBER_DARK} sw={2} dur={0.25} />
      <Fade on={beat >= 3} delay={dl(3, 7)}>
        <T x={595} y={340} size={12.5} fill={AMBER_DARK} weight={800}>|x|</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 7.6)}>
        <T x={623} y={418} size={12} fill={GREEN_DARK} weight={800}>sgn(x) = −1</T>
      </Fade>

      {/* ═══════════ beat 4 — the floor identities ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={730} y={298} size={13.5} fill={RED} weight={800} anchor="start">
          {t("FLOOR IDENTITIES", "FLOOR IDENTITIES")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.8)} d="M 740 358 H 1034" stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <Circle cx={800} cy={358} r={5.5} fill={PAPER} stroke={RED} strokeWidth={2.2} />
        <Circle cx={880} cy={358} r={5.5} fill={AMBER_DARK} />
        <Circle cx={960} cy={358} r={5.5} fill={INK} />
        <T x={800} y={382} size={12.5} fill={RED} weight={800}>x − 1</T>
        <T x={880} y={382} size={12.5} fill={AMBER_DARK} weight={800}>⌊x⌋</T>
        <T x={960} y={382} size={12.5} fill={INK} weight={800}>x</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 2.2)} d={arrowD(880, 334, 800, 334)} stroke={MUTED} sw={1.8} dur={0.3} />
      <Draw on={beat >= 4} delay={dl(4, 2.4)} d={arrowD(880, 334, 960, 334)} stroke={MUTED} sw={1.8} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 2.7)}>
        <T x={880} y={320} size={11.5} fill={MUTED} weight={700}>
          {t("width exactly 1", "width exactly 1")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.4)}>
        <T x={880} y={410} size={16} fill={GREEN_DARK} weight={900}>x − 1 &lt; ⌊x⌋ ≤ x</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6.2)}>
        <T x={880} y={440} size={15} fill={GREEN_DARK} weight={800}>⌊x + n⌋ = ⌊x⌋ + n,  n ∈ ℤ</T>
      </Fade>

      {/* ═══════════ beat 5 — the off-by-one favourite ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={44} y={476} size={13.5} fill={RED} weight={800} anchor="start">
          {t("A JEE FAVOURITE", "JEE KA FAVOURITE")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={44} y={506} size={15} fill={GREEN_DARK} weight={800} anchor="start">
          ⌊x⌋ + ⌊−x⌋ = 0   if x ∈ ℤ
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3)}>
        <T x={44} y={530} size={15} fill={RED} weight={800} anchor="start">
          ⌊x⌋ + ⌊−x⌋ = −1  otherwise
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 4.2)} d="M 48 566 H 344" stroke={INK} sw={2} dur={0.6} />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <Draw key={`gap${i}`} on={beat >= 5} delay={dl(5, 4.8 + i * 0.12)}
          d={`M ${NL_TICKS[i] + 9} 566 H ${NL_TICKS[i + 1] - 9}`} stroke={RED} sw={4.5} dur={0.25} />
      ))}
      <Fade on={beat >= 5} delay={dl(5, 5.8)}>
        {NL_TICKS.map((x) => (
          <Circle key={`gd${x}`} cx={x} cy={566} r={5} fill={GREEN_DARK} />
        ))}
        <T x={200} y={552} size={12} fill={GREEN_DARK} weight={900}>0</T>
        <T x={272} y={552} size={12} fill={RED} weight={900}>−1</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 7)}>
        <T x={196} y={592} size={11.5} fill={MUTED} weight={700}>
          {t("the off-by-one favourite trap", "wahi off-by-one favourite trap")}
        </T>
      </Fade>

      {/* ═══════════ beat 6 — fractional part and the log rule ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={376} y={476} size={13.5} fill={RED} weight={800} anchor="start">
          {t("FRACTIONAL PART & LOG RULE", "FRACTIONAL PART & LOG RULE")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={376} y={506} size={16} fill={GREEN_DARK} weight={800} anchor="start">
          {"{x} = x − ⌊x⌋"}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 2)} d="M 520 520 L 600 492" stroke={AMBER_DARK} sw={2.8} dur={0.4} />
      <Draw on={beat >= 6} delay={dl(6, 2.4)} d="M 600 520 L 680 492" stroke={AMBER_DARK} sw={2.8} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 2.8)}>
        <Circle cx={520} cy={520} r={4} fill={AMBER_DARK} />
        <Circle cx={600} cy={520} r={4} fill={AMBER_DARK} />
        <Circle cx={600} cy={492} r={4} fill={PAPER} stroke={AMBER_DARK} strokeWidth={1.8} />
        <Circle cx={680} cy={492} r={4} fill={PAPER} stroke={AMBER_DARK} strokeWidth={1.8} />
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 3.3)} d={arrowD(560, 538, 520, 538)} stroke={GREEN} sw={1.8} dur={0.25} />
      <Draw on={beat >= 6} delay={dl(6, 3.5)} d={arrowD(560, 538, 600, 538)} stroke={GREEN} sw={1.8} dur={0.25} />
      <Fade on={beat >= 6} delay={dl(6, 3.8)}>
        <T x={560} y={560} size={12.5} fill={GREEN_DARK} weight={800}>
          {t("period 1", "period 1")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5.2)}>
        <T x={376} y={566} size={12} fill={MUTED} weight={700} anchor="start">
          {t("product → sum", "product → sum")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6)}>
        <T x={376} y={590} size={15} fill={GREEN_DARK} weight={800} anchor="start">
          logₐ(x y) = logₐ x + logₐ y
        </T>
      </Fade>

      {/* ═══════════ beat 7 — change of base, and the collapse ═══════════ */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={730} y={476} size={13.5} fill={RED} weight={800} anchor="start">
          {t("CHANGE OF BASE", "CHANGE OF BASE")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={730} y={522} size={17} fill={INK} weight={800} anchor="start">logₐ x   =</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.8)}>
        <T x={872} y={510} size={15} fill={GREEN_DARK} weight={800}>log<TSpan dy={4.8} fontSize={10.5}>b</TSpan> x</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 2.2)} d="M 838 521 H 906" stroke={GREEN_DARK} sw={2.2} dur={0.35} />
      <Fade on={beat >= 7} delay={dl(7, 2.6)}>
        <T x={872} y={542} size={15} fill={GREEN_DARK} weight={800}>log<TSpan dy={4.8} fontSize={10.5}>b</TSpan> a</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={730} y={566} size={18} fill={INK} weight={800} anchor="start">a</T>
        <T x={742} y={556} size={11} fill={INK} weight={800} anchor="start">logₐ x</T>
        <T x={786} y={566} size={18} fill={GREEN_DARK} weight={900} anchor="start">= x</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5.4)}>
        <T x={730} y={592} size={11.5} fill={MUTED} weight={700} anchor="start">
          {t("a raised to logₐ x collapses straight back to x",
             "a raised to logₐ x seedha x pe collapse ho jaata hai")}
        </T>
      </Fade>
    </Scene>
  );
}
