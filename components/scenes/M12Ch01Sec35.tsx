/**
 * M12Ch01 · Section 35 — "Six machines you must recognise on sight"
 * Subtopic: Standard Real Functions and Their Graphs
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * The whole section IS an atlas of graphs, so the board plots all six for
 * real: the V of |x|, the two open-ended shelves of sgn x, the staircase of
 * [x] with closed-left / open-right endpoints, the number line that shows
 * [−2.3] landing on −3, the sawtooth of {x} that never reaches 1, and the
 * exponential/logarithm pair on one set of axes — eˣ above its asymptote and
 * log x diving down the y-axis, defined only for x > 0.
 *
 * Grid: three panels across × two rows.
 *   columns A x 40–372 (centre 206) · B x 388–716 (centre 552) · C x 732–1044
 *   (centre 888);  row 1 headers y 118, graphs y 136–252, captions y 272/296;
 *   row 2 headers y 320, graphs y 338–454, captions y 474/498;
 *   the atlas band runs y 508–596.
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "a toolkit of named machines"       title + underline + subtitle + rule
 *  1  "the modulus is a V on the origin"  y = |x| plotted, range y ≥ 0 marked
 *                                         green up the y-axis
 *  2  "signum keeps only the sign"        the two shelves at +1 and −1 with
 *                                         open ends, the solid dot at (0,0)
 *  3  "the floor is a staircase"          five steps of [x], closed left dot,
 *                                         open right circle, integer ticks
 *  4  "[−2.3] = −3, not −2"               a number line with −3 and −2, the
 *                                         point −2.3 marked, the DOWN arrow
 *                                         landing on −3 (ringed) and −2 crossed
 *  5  "the fractional part is a sawtooth" five teeth of {x}, the dashed level 1
 *                                         it never reaches
 *  6  "exponential and logarithm"         y = eˣ above its asymptote, y = log x
 *                                         only for x > 0, green domain strip
 *  7  "the atlas, all six together"       band rule + the six named chips + the
 *                                         multiplication-tables line
 *
 * Visual vocabulary shared with Sections 34 and 36:
 *   axes INK with arrowheads · primary curve AMBER_DARK · second curve on the
 *   same axes BLUE · valid sets / results GREEN and GREEN_DARK · shaded region
 *   AMBER at low opacity · traps RED.
 */

import React from "react";
import { Circle, Line } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, crossD, ringD,
  INK, MUTED, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM, PAPER,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

/* ── panel C row 1 : the floor staircase, origin (888, 200), 24 px/unit ── */
const FX = 888;
const FY = 200;
const FS = 24;
/** each step is [x from, x to] on the integer n */
const STEPS = [-2, -1, 0, 1, 2];

/* ── panel B row 2 : the fractional-part sawtooth, origin (552, 430) ───── */
const SX = 552;
const SY = 430;
const SSX = 26;
const SSY = 52;
const TEETH = [-2, -1, 0, 1, 2];

/* ── panel C row 2 : exponential and logarithm, origin (830, 430) ─────── */
const EX = 830;
const EY = 430;
const ES = 26;
function expPts(x0: number, x1: number, n: number): string[] {
  const pts: string[] = [];
  for (let i = 0; i <= n; i++) {
    const x = x0 + ((x1 - x0) * i) / n;
    pts.push(`${(EX + ES * x).toFixed(1)} ${(EY - ES * Math.exp(x)).toFixed(1)}`);
  }
  return pts;
}
function logPts(x0: number, x1: number, n: number): string[] {
  const pts: string[] = [];
  for (let i = 0; i <= n; i++) {
    const x = x0 + ((x1 - x0) * i) / n;
    pts.push(`${(EX + ES * x).toFixed(1)} ${(EY - ES * Math.log(x)).toFixed(1)}`);
  }
  return pts;
}
/* eˣ stops at x = −1.7 so its left end sits 4.7 px clear of the x-axis —
   the curve must never LOOK like it meets the asymptote it is labelled with.
   log x starts at x = 0.429 so it dives to y = 452, past the foot of the
   y-axis, reading as the fall to −∞ that it is. */
const EXP_D = `M ${expPts(-1.7, 1.14, 30).join(" L ")}`;
const LOG_D = `M ${logPts(0.429, 7.69, 44).join(" L ")}`;

/* ── beat 7 : the six named machines, in the order they were taught ───── */
const ATLAS: [string, string][] = [
  ["modulus |x|", "modulus |x|"],
  ["signum sgn x", "signum sgn x"],
  ["floor [x]", "floor [x]"],
  ["frac part {x}", "frac part {x}"],
  ["exponential eˣ", "exponential eˣ"],
  ["logarithm log x", "logarithm log x"],
];

export default function M12Ch01Sec35({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — the framing ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Six machines you must know on sight",
             "Chhe machines jo turant pehchanni hain")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.1)}
        d="M 330 62 C 480 58, 650 66, 754 60" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.9)}>
        <T x={540} y={82} size={12.5} fill={MUTED} script>
          {t("a mechanic knows every tool by its shape — you must know every graph by its shape",
             "mechanic har tool ko shape se jaanta hai — tumhe har graph shape se pehchanna hai")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.8)} d="M 40 94 H 1044" stroke={MUTED} sw={1.2} dur={1} />

      {/* ═══════════ beat 1 — the modulus, a V on the origin ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={44} y={118} size={13} fill={RED} weight={800} anchor="start">
          {t("MODULUS   y = |x|", "MODULUS   y = |x|")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.8)} d={arrowD(90, 240, 322, 240)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 1} delay={dl(1, 1.2)} d={arrowD(206, 250, 206, 142)} stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 1.7)}>
        <T x={328} y={245} size={11.5} fill={INK} weight={800} anchor="start">x</T>
        <T x={198} y={148} size={11.5} fill={INK} weight={800} anchor="end">y</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2)} d="M 115 149 L 206 240 L 297 149" stroke={AMBER_DARK} sw={2.8} dur={1.1} />
      <Fade on={beat >= 1} delay={dl(1, 3.2)}>
        <Circle cx={206} cy={240} r={4.5} fill={AMBER_DARK} />
        <T x={300} y={170} size={12} fill={AMBER_DARK} weight={800} anchor="start">
          {t("y = |x|", "y = |x|")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.8)} d="M 206 240 V 146" stroke={GREEN} sw={4} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 4.4)}>
        <T x={214} y={176} size={11.5} fill={GREEN_DARK} weight={800} anchor="start">y ≥ 0</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5.2)}>
        <T x={206} y={272} size={12} fill={INK} weight={700}>
          {t("strips the sign — distance from 0", "sign hata deta hai — zero se distance")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6.6)}>
        <T x={206} y={296} size={12} fill={GREEN_DARK} weight={800}>
          {t("never negative · V on the origin", "kabhi negative nahin · origin par V")}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — signum, two flat shelves ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={392} y={118} size={13} fill={RED} weight={800} anchor="start">
          {t("SIGNUM   y = sgn x", "SIGNUM   y = sgn x")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.8)} d={arrowD(436, 200, 668, 200)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 2} delay={dl(2, 1.2)} d={arrowD(552, 250, 552, 150)} stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 1.7)}>
        <T x={674} y={205} size={11.5} fill={INK} weight={800} anchor="start">x</T>
        <T x={544} y={156} size={11.5} fill={INK} weight={800} anchor="end">y</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.1)} d="M 560 170 H 660" stroke={AMBER_DARK} sw={2.8} dur={0.7} />
      <Draw on={beat >= 2} delay={dl(2, 2.9)} d="M 444 230 H 544" stroke={AMBER_DARK} sw={2.8} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 3.7)}>
        <Circle cx={552} cy={170} r={5} fill={PAPER} stroke={AMBER_DARK} strokeWidth={2.2} />
        <Circle cx={552} cy={230} r={5} fill={PAPER} stroke={AMBER_DARK} strokeWidth={2.2} />
        <Circle cx={552} cy={200} r={5} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.5)}>
        <T x={566} y={160} size={11.5} fill={GREEN_DARK} weight={800} anchor="start">1</T>
        <T x={538} y={246} size={11.5} fill={GREEN_DARK} weight={800} anchor="end">−1</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.4)}>
        <T x={552} y={272} size={12} fill={INK} weight={700}>
          {t("keeps only the sign — ±1 or 0", "sirf sign rakhta hai — ±1 ya 0")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6.8)}>
        <T x={552} y={296} size={12} fill={GREEN_DARK} weight={800}>
          {t("two flat shelves, jump at 0", "do flat shelves, 0 par jump")}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — the greatest integer staircase ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={736} y={118} size={13} fill={RED} weight={800} anchor="start">
          {t("GREATEST INTEGER   y = [x]", "GREATEST INTEGER   y = [x]")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.8)} d={arrowD(772, FY, 1004, FY)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 3} delay={dl(3, 1.2)} d={arrowD(FX, 252, FX, 148)} stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 1.7)}>
        <T x={1010} y={205} size={11.5} fill={INK} weight={800} anchor="start">x</T>
        <T x={880} y={154} size={11.5} fill={INK} weight={800} anchor="end">y</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.9)}>
        {[-2, -1, 1, 2].map((n) => (
          <Line key={`tick${n}`} x1={FX + FS * n} y1={FY} x2={FX + FS * n} y2={FY + 6}
            stroke={INK} strokeWidth={1.4} />
        ))}
      </Fade>
      {STEPS.map((n, i) => (
        <Draw key={`st${n}`} on={beat >= 3} delay={dl(3, 2.2 + i * 0.32)}
          d={`M ${FX + FS * n} ${FY - FS * n} H ${FX + FS * (n + 1)}`}
          stroke={AMBER_DARK} sw={2.8} dur={0.35} />
      ))}
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        {STEPS.map((n) => (
          <Circle key={`sd${n}`} cx={FX + FS * n} cy={FY - FS * n} r={3.8} fill={AMBER_DARK} />
        ))}
        {STEPS.map((n) => (
          <Circle key={`so${n}`} cx={FX + FS * (n + 1)} cy={FY - FS * n} r={3.8}
            fill={PAPER} stroke={AMBER_DARK} strokeWidth={1.9} />
        ))}
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.8)}>
        <T x={972} y={162} size={12} fill={AMBER_DARK} weight={800} anchor="start">
          {t("y = [x]", "y = [x]")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5.6)}>
        <T x={888} y={272} size={12} fill={INK} weight={700}>
          {t("rounds DOWN to the integer below", "neeche wale integer tak DOWN round")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 7)}>
        <T x={888} y={296} size={12} fill={RED} weight={800}>
          {t("a staircase — down for negatives too", "staircase — negatives ke liye bhi down")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — the negative trap: [−2.3] = −3 ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={44} y={320} size={13} fill={RED} weight={800} anchor="start">
          {t("THE NEGATIVE TRAP", "NEGATIVE KA TRAP")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.8)} d={arrowD(70, 410, 344, 410)} stroke={INK} sw={2.2} dur={0.7} />
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <Circle cx={120} cy={410} r={5} fill={INK} />
        <Circle cx={240} cy={410} r={5} fill={INK} />
        <T x={120} y={444} size={13} fill={INK} weight={800}>−3</T>
        <T x={240} y={444} size={13} fill={INK} weight={800}>−2</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.4)}>
        <Circle cx={204} cy={410} r={6} fill={CREAM} stroke={AMBER_DARK} strokeWidth={2.4} />
        <T x={204} y={390} size={13} fill={AMBER_DARK} weight={800}>−2.3</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 3.2)} d={arrowD(200, 364, 126, 364)} stroke={GREEN_DARK} sw={2.4} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 3.8)}>
        <T x={163} y={352} size={12} fill={GREEN_DARK} weight={800}>
          {t("rounds DOWN", "DOWN round hota hai")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 4.4)} d={ringD(120, 410, 15, 12)} stroke={GREEN_DARK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 4} delay={dl(4, 5.2)} d={crossD(231, 433, 18, 15)} stroke={RED} sw={2} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 5.9)}>
        <T x={206} y={474} size={14} fill={GREEN_DARK} weight={800}>
          {t("[ −2.3 ] = −3,  not −2", "[ −2.3 ] = −3,  −2 nahin")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 7.4)}>
        <T x={206} y={498} size={12} fill={RED} weight={800}>
          {t("for negatives, floor moves AWAY from zero",
             "negatives mein floor zero se DOOR jaata hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — the fractional part sawtooth ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={392} y={320} size={13} fill={RED} weight={800} anchor="start">
          {t("FRACTIONAL PART   y = {x}", "FRACTIONAL PART   y = {x}")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.8)} d={arrowD(436, SY, 668, SY)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 5} delay={dl(5, 1.2)} d={arrowD(SX, 442, SX, 366)} stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 1.7)}>
        <T x={674} y={435} size={11.5} fill={INK} weight={800} anchor="start">x</T>
        <T x={558} y={372} size={11.5} fill={INK} weight={800} anchor="start">y</T>
        <T x={642} y={374} size={11.5} fill={GREEN_DARK} weight={800} anchor="start">1</T>
        <T x={544} y={448} size={11.5} fill={INK} weight={800} anchor="end">0</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.1)}>
        <Line x1={SX - 2 * SSX} y1={SY - SSY} x2={SX + 3 * SSX} y2={SY - SSY}
          stroke={GREEN_DARK} strokeWidth={1.6} strokeDasharray="6 5" />
      </Fade>
      {TEETH.map((n, i) => (
        <Draw key={`tooth${n}`} on={beat >= 5} delay={dl(5, 2.5 + i * 0.32)}
          d={`M ${SX + SSX * n} ${SY} L ${SX + SSX * (n + 1)} ${SY - SSY}`}
          stroke={AMBER_DARK} sw={2.6} dur={0.35} />
      ))}
      <Fade on={beat >= 5} delay={dl(5, 4.3)}>
        {TEETH.map((n) => (
          <Circle key={`td${n}`} cx={SX + SSX * n} cy={SY} r={3.8} fill={AMBER_DARK} />
        ))}
        {TEETH.map((n) => (
          <Circle key={`to${n}`} cx={SX + SSX * (n + 1)} cy={SY - SSY} r={3.8}
            fill={PAPER} stroke={AMBER_DARK} strokeWidth={1.9} />
        ))}
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5.1)}>
        <T x={642} y={400} size={12} fill={AMBER_DARK} weight={800} anchor="start">
          {t("y = {x}", "y = {x}")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5.9)}>
        <T x={552} y={474} size={12} fill={INK} weight={700}>
          {t("keeps what the floor leaves behind", "jo floor chhod jaata hai wahi rakhta hai")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 7.3)}>
        <T x={552} y={498} size={12} fill={GREEN_DARK} weight={800}>
          {t("always in 0 ≤ {x} < 1 — a sawtooth", "hamesha 0 ≤ {x} < 1 — sawtooth")}
        </T>
      </Fade>

      {/* ═══════════ beat 6 — exponential and logarithm ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={736} y={320} size={13} fill={RED} weight={800} anchor="start">
          {t("EXPONENTIAL  &  LOGARITHM", "EXPONENTIAL  &  LOGARITHM")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.8)} d={arrowD(748, EY, 1030, EY)} stroke={INK} sw={2.2} dur={0.7} />
      <Draw on={beat >= 6} delay={dl(6, 1.2)} d={arrowD(EX, 442, EX, 348)} stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 1.7)}>
        <T x={1034} y={435} size={11.5} fill={INK} weight={800} anchor="start">x</T>
        <T x={822} y={354} size={11.5} fill={INK} weight={800} anchor="end">y</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 2.2)} d={EXP_D} stroke={AMBER_DARK} sw={2.8} dur={1.2} />
      <Fade on={beat >= 6} delay={dl(6, 3.4)}>
        <Circle cx={EX} cy={EY - ES} r={4} fill={AMBER_DARK} />
        <T x={820} y={400} size={11} fill={AMBER_DARK} weight={800} anchor="end">1</T>
        <T x={752} y={360} size={12} fill={AMBER_DARK} weight={800} anchor="start">
          {t("y = eˣ", "y = eˣ")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4.2)}>
        <T x={748} y={450} size={11} fill={RED} weight={800} anchor="start">
          {t("never touches", "kabhi nahin chhuta")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 4.8)} d={LOG_D} stroke={BLUE} sw={2.8} dur={1.2} />
      {/* the domain strip sits just BELOW the axis so it cannot bury the real
          crossing of log x at (1, 0); the open end marks x = 0 excluded. */}
      <Draw on={beat >= 6} delay={dl(6, 6)} d="M 836 438 H 1026" stroke={GREEN} sw={4} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 6.6)}>
        <Circle cx={EX} cy={438} r={4.5} fill={PAPER} stroke={GREEN_DARK} strokeWidth={2.2} />
        <T x={952} y={366} size={12} fill={BLUE} weight={800} anchor="start">
          {t("y = log x", "y = log x")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7.5)}>
        <T x={888} y={474} size={12} fill={INK} weight={700}>
          {t("eˣ: always positive, never 0", "eˣ: hamesha positive, kabhi 0 nahin")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 9)}>
        <T x={888} y={498} size={12} fill={GREEN_DARK} weight={800}>
          {t("log x: only for x > 0 — eˣ run backwards", "log x: sirf x > 0 — eˣ ulta chalaya hua")}
        </T>
      </Fade>

      {/* ═══════════ beat 7 — the atlas band ═══════════ */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d="M 40 508 H 1044" stroke={MUTED} sw={1.3} dur={0.9} />
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <T x={540} y={532} size={18} fill={RED} script>
          {t("The atlas — all six on one board", "Atlas — chhehon ek hi board par")}
        </T>
      </Fade>
      {ATLAS.map(([e, h], i) => (
        <Fade key={`chip${i}`} on={beat >= 7} delay={dl(7, 1.4 + i * 0.5)}>
          <Chip x={44 + i * 168} y={544} w={160} h={30} fill={CREAM} stroke={GREEN_DARK}
            textFill={GREEN_DARK} size={15} script={false}>
            {t(e, h)}
          </Chip>
        </Fade>
      ))}
      <Fade on={beat >= 7} delay={dl(7, 4.8)}>
        <T x={540} y={592} size={12} fill={INK} weight={700}>
          {t("memorise them like multiplication tables — everything downstream becomes automatic",
             "inhe multiplication tables ki tarah yaad karo — aage sab kuch automatic ho jaata hai")}
        </T>
      </Fade>
    </Scene>
  );
}
