/**
 * M12Ch01 · Section 38 — "Evaluating and solving with floor and fractional part"
 * Subtopic: Standard Real Functions and Their Graphs
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * The voice evaluates four values and then solves two equations whose answers
 * are SETS, not numbers — so the board is built out of the two graphs that
 * make that visible. ⌊x⌋ = 3 is read off the staircase as the whole step from
 * 3 (solid) to 4 (hollow); {x} = 0.5 is read off the sawtooth as the whole
 * ladder of crossings at height one half. Every value the voice speaks —
 * 2.7, −2.3, 3.6, −5, −4, 3, 4, 0.5, −0.5, 1.5 — is a marked point on a real
 * axis, never a bullet.
 *
 * Grid
 *   title band           y  30– 94   (rule at y = 94)
 *   EVALUATE strip       y 104–292   left x 40–706 · rule x 716 · right x 730–1044
 *   floor staircase      y 300–520   x 40–520
 *   fractional sawtooth  y 300–520   x 560–1044
 *   the trap band        y 536–596   full width
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "evaluate, then two traps"       title + underline + subtitle + rule
 *  1  "⌊2.7⌋, ⌊−2.3⌋, {3.6}"           a −3..4 number line: 2.7 and −2.3
 *                                      marked, each with a drawn arrow to the
 *                                      integer it falls back to; 3.6 with the
 *                                      span arrow from 3 measuring 0.6
 *  2  "sgn(−5), |−4|"                  a −6..1 number line: −5 dotted, and
 *                                      |−4| drawn as the span from −4 to 0
 *  3  "solve ⌊x⌋ = 3"                  the staircase drawn with axes and
 *                                      labels, plus the dashed line y = 3
 *  4  "the answer is an interval"      the step at height 3 thickened, its
 *                                      solid/hollow ends, drop-lines onto the
 *                                      x-axis and the interval bar [3, 4)
 *  5  "solve {x} = 0.5"                the sawtooth drawn with axes, plus the
 *                                      dashed line at height 0.5
 *  6  "x = n + 0.5"                    the six crossings dotted, drop-lines,
 *                                      and −0.5, 0.5, 1.5 labelled on the axis
 *  7  "the trap"                       divider + interval-vs-point comparison,
 *                                      the lone x = 3 crossed out
 *
 * Visual vocabulary (shared with Sections 37 and 39)
 *   axes INK with drawn arrowheads · the standard function AMBER_DARK · solid
 *   endpoint = included, hollow endpoint (PAPER fill) = excluded · results and
 *   surviving sets GREEN_DARK · traps and headings RED · auxiliary lines BLUE
 *   dashed · notes MUTED.
 */

import React from "react";
import { Circle, G, Line } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, crossD,
  INK, MUTED, AMBER_DARK, GREEN, GREEN_DARK, RED, PAPER,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

/* ---------- evaluate strip: the −3..4 line ---------- */
const ax = (v: number) => 52 + 92.6 * (v + 3);
const A_INTS = [-3, -2, -1, 0, 1, 2, 3, 4];

/* ---------- evaluate strip: the −6..1 line ---------- */
const bx = (v: number) => 996 + 43 * v;
const B_INTS = [-6, -5, -4, -3, -2, -1, 0, 1];

/* ---------- floor staircase, origin (140, 470) ---------- */
const FX = (v: number) => 140 + 56 * v;
const FY = (w: number) => 470 - 26 * w;
const F_STEPS = [-1, 0, 1, 2, 3, 4];

/* ---------- fractional sawtooth, origin (700, 470) ---------- */
const GX = (v: number) => 700 + 64 * v;
const G_TEETH = [-1, 0, 1, 2, 3, 4];
const G_TOP = 380;      // height 1
const G_HALF = 425;     // height 0.5

export default function M12Ch01Sec38({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — the framing ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={50} size={25} fill={RED} script>
          {t("Evaluate carefully — then two equations that hide traps",
             "Carefully evaluate karo — phir do equations jo traps chhupati hain")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.1)}
        d="M 292 66 C 460 62, 650 70, 788 64" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.9)}>
        <T x={540} y={84} size={12.5} fill={MUTED} script>
          {t("the standard functions first, then two equations whose answers are sets, not numbers",
             "pehle standard functions, phir do equations jinke answers sets hain, numbers nahi")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.8)} d="M 40 94 H 1044" stroke={MUTED} sw={1.2} dur={1} />

      {/* ═══════════ beat 1 — evaluating floor and fractional part ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={44} y={120} size={13.5} fill={RED} weight={800} anchor="start">
          {t("EVALUATE — floor & fractional part", "EVALUATE — floor aur fractional part")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.7)} d="M 44 178 H 706" stroke={INK} sw={2.2} dur={0.8} />
      <Draw on={beat >= 1} delay={dl(1, 1.3)}
        d={A_INTS.map((v) => `M ${ax(v).toFixed(1)} 171 V 185`).join(" ")}
        stroke={INK} sw={1.6} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 1.7)}>
        {A_INTS.map((v) => (
          <T key={`al${v}`} x={ax(v)} y={202} size={12} fill={MUTED} weight={700}>
            {v < 0 ? `−${-v}` : `${v}`}
          </T>
        ))}
      </Fade>
      {/* 2.7 falls back to 2 */}
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <Circle cx={ax(2.7)} cy={178} r={5} fill={AMBER_DARK} />
        <T x={ax(2.7)} y={156} size={13} fill={AMBER_DARK} weight={800}>2.7</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.9)} d={arrowD(ax(2.7), 214, ax(2) + 7, 232)}
        stroke={AMBER_DARK} sw={2} dur={0.4} />
      {/* −2.3 rounds DOWN past zero, to −3 */}
      <Fade on={beat >= 1} delay={dl(1, 4.2)}>
        <Circle cx={ax(-2.3)} cy={178} r={5} fill={AMBER_DARK} />
        <T x={ax(-2.3)} y={156} size={13} fill={AMBER_DARK} weight={800}>−2.3</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 4.7)} d={arrowD(ax(-2.3), 214, ax(-3) + 7, 232)}
        stroke={AMBER_DARK} sw={2} dur={0.4} />
      {/* {3.6} = 3.6 − 3 */}
      <Fade on={beat >= 1} delay={dl(1, 7)}>
        <Circle cx={ax(3.6)} cy={178} r={5} fill={GREEN_DARK} />
        <T x={ax(3.6)} y={156} size={13} fill={GREEN_DARK} weight={800}>3.6</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 7.5)} d={arrowD(636, 222, ax(3), 222)} stroke={GREEN_DARK} sw={1.8} dur={0.25} />
      <Draw on={beat >= 1} delay={dl(1, 7.7)} d={arrowD(636, 222, ax(3.6), 222)} stroke={GREEN_DARK} sw={1.8} dur={0.25} />
      {/* the three results */}
      <Fade on={beat >= 1} delay={dl(1, 3.4)}>
        <T x={400} y={256} size={13} fill={GREEN_DARK} weight={800}>⌊2.7⌋ = 2</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5.2)}>
        <T x={150} y={256} size={13} fill={GREEN_DARK} weight={800}>⌊−2.3⌋ = −3</T>
        <T x={150} y={280} size={11.5} fill={MUTED} weight={700}>
          {t("rounding down, past zero", "zero ke paar neeche round")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8.2)}>
        <T x={620} y={256} size={13} fill={GREEN_DARK} weight={800}>
          {"{3.6} = 3.6 − 3 = 0.6"}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — signum and modulus ═══════════ */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M 716 104 V 292" stroke={MUTED} sw={1} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={734} y={120} size={13.5} fill={RED} weight={800} anchor="start">
          {t("SIGN & MAGNITUDE", "SIGN aur MAGNITUDE")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.8)} d="M 738 178 H 1040" stroke={INK} sw={2.2} dur={0.7} />
      <Draw on={beat >= 2} delay={dl(2, 1.3)}
        d={B_INTS.map((v) => `M ${bx(v)} 172 V 184`).join(" ")} stroke={INK} sw={1.5} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1.7)}>
        {B_INTS.map((v) => (
          <T key={`bl${v}`} x={bx(v)} y={200} size={11} fill={MUTED} weight={700}>
            {v < 0 ? `−${-v}` : `${v}`}
          </T>
        ))}
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <Circle cx={bx(-5)} cy={178} r={5} fill={RED} />
        <T x={bx(-5)} y={160} size={12} fill={RED} weight={800}>−5</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.8)}>
        <T x={886} y={236} size={14} fill={GREEN_DARK} weight={900}>sgn(−5) = −1</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.3)}>
        <T x={886} y={258} size={11.5} fill={MUTED} weight={700}>
          {t("only the sign survives", "sirf sign bachta hai")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <Circle cx={bx(-4)} cy={178} r={5} fill={BLUE} />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 4.4)} d={arrowD(910, 152, bx(-4), 152)} stroke={BLUE} sw={1.8} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 4.6)} d={arrowD(910, 152, bx(0), 152)} stroke={BLUE} sw={1.8} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 4.9)}>
        <T x={910} y={142} size={12.5} fill={BLUE} weight={800}>4</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.4)}>
        <T x={886} y={284} size={14} fill={GREEN_DARK} weight={900}>|−4| = 4</T>
      </Fade>

      {/* ═══════════ beat 3 — solve ⌊x⌋ = 3, on the staircase ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={44} y={318} size={13.5} fill={RED} weight={800} anchor="start">
          {t("SOLVE   ⌊x⌋ = 3", "SOLVE   ⌊x⌋ = 3")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <T x={44} y={340} size={12} fill={MUTED} weight={700} anchor="start">
          {t("not one value — which inputs floor to 3?",
             "single value nahi — kaun se inputs 3 pe floor hote hain?")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 2.2)} d={arrowD(60, 470, 500, 470)} stroke={INK} sw={2.2} dur={0.7} />
      <Draw on={beat >= 3} delay={dl(3, 2.6)} d={arrowD(140, 500, 140, 362)} stroke={INK} sw={2.2} dur={0.6} />
      {F_STEPS.map((n, i) => (
        <Draw key={`fs${n}`} on={beat >= 3} delay={dl(3, 3 + i * 0.18)}
          d={`M ${FX(n)} ${FY(n)} H ${FX(n + 1)}`} stroke={AMBER_DARK} sw={2.8} dur={0.3} />
      ))}
      <Fade on={beat >= 3} delay={dl(3, 4.4)}>
        {F_STEPS.map((n) => (
          <G key={`fm${n}`}>
            <Circle cx={FX(n)} cy={FY(n)} r={4.5} fill={AMBER_DARK} />
            <Circle cx={FX(n + 1)} cy={FY(n)} r={4.5} fill={PAPER} stroke={AMBER_DARK} strokeWidth={1.9} />
          </G>
        ))}
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        {[1, 2, 3, 4, 5].map((v) => (
          <T key={`fxl${v}`} x={FX(v)} y={490} size={12} fill={MUTED} weight={700}>{v}</T>
        ))}
        {[1, 2, 3, 4].map((w) => (
          <T key={`fyl${w}`} x={130} y={FY(w) + 4} size={12} fill={MUTED} weight={700} anchor="end">{w}</T>
        ))}
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6)}>
        <Line x1={140} y1={FY(3)} x2={440} y2={FY(3)} stroke={BLUE} strokeWidth={1.6} strokeDasharray="7 6" />
        <T x={452} y={380} size={12.5} fill={BLUE} weight={800} anchor="start">y = 3</T>
      </Fade>

      {/* ═══════════ beat 4 — the answer is the whole step ═══════════ */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d={`M ${FX(3)} ${FY(3)} H ${FX(4)}`}
        stroke={GREEN} sw={5.5} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <Circle cx={FX(3)} cy={FY(3)} r={6} fill={GREEN_DARK} />
        <Circle cx={FX(4)} cy={FY(3)} r={6} fill={PAPER} stroke={GREEN_DARK} strokeWidth={2.2} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.4)}>
        <Line x1={FX(3)} y1={FY(3)} x2={FX(3)} y2={470} stroke={GREEN_DARK} strokeWidth={1.5} strokeDasharray="6 5" />
        <Line x1={FX(4)} y1={FY(3)} x2={FX(4)} y2={470} stroke={GREEN_DARK} strokeWidth={1.5} strokeDasharray="6 5" />
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 2.2)} d={`M ${FX(3)} 470 H ${FX(4)}`} stroke={GREEN} sw={6} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 2.8)}>
        <Circle cx={FX(3)} cy={470} r={6} fill={GREEN_DARK} />
        <Circle cx={FX(4)} cy={470} r={6} fill={PAPER} stroke={GREEN_DARK} strokeWidth={2.2} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.6)}>
        <T x={452} y={432} size={18} fill={GREEN_DARK} weight={900}>x ∈ [ 3, 4 )</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6.4)}>
        <T x={452} y={456} size={11.5} fill={GREEN_DARK} weight={700}>
          {t("3 included · 4 excluded", "3 shaamil · 4 baahar")}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — solve {x} = 0.5, on the sawtooth ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={564} y={318} size={13.5} fill={RED} weight={800} anchor="start">
          {t("SOLVE   {x} = 0.5", "SOLVE   {x} = 0.5")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={564} y={340} size={12} fill={MUTED} weight={700} anchor="start">
          {t("x is exactly half-past an integer", "x kisi integer se exactly half-past ho")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 2.4)} d={arrowD(612, 470, 1032, 470)} stroke={INK} sw={2.2} dur={0.7} />
      <Draw on={beat >= 5} delay={dl(5, 2.8)} d={arrowD(700, 496, 700, 366)} stroke={INK} sw={2.2} dur={0.6} />
      {G_TEETH.map((n, i) => (
        <Draw key={`gt${n}`} on={beat >= 5} delay={dl(5, 3.2 + i * 0.18)}
          d={`M ${GX(n)} 470 L ${GX(n + 1)} ${G_TOP}`} stroke={AMBER_DARK} sw={2.8} dur={0.3} />
      ))}
      <Fade on={beat >= 5} delay={dl(5, 4.6)}>
        {G_TEETH.map((n) => (
          <G key={`gm${n}`}>
            <Circle cx={GX(n)} cy={470} r={4.5} fill={AMBER_DARK} />
            <Circle cx={GX(n + 1)} cy={G_TOP} r={4.5} fill={PAPER} stroke={AMBER_DARK} strokeWidth={1.9} />
          </G>
        ))}
        <T x={688} y={385} size={12} fill={MUTED} weight={700} anchor="end">1</T>
        <T x={630} y={429} size={12} fill={MUTED} weight={700} anchor="end">0.5</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5.6)}>
        <Line x1={640} y1={G_HALF} x2={1024} y2={G_HALF} stroke={BLUE} strokeWidth={1.6} strokeDasharray="7 6" />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6.2)}>
        {[-1, 1, 2, 3, 4].map((v) => (
          <T key={`gxl${v}`} x={GX(v)} y={490} size={11.5} fill={MUTED} weight={700}>
            {v < 0 ? `−${-v}` : `${v}`}
          </T>
        ))}
      </Fade>

      {/* ═══════════ beat 6 — every crossing is n + 0.5 ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        {[-1, 0, 1, 2, 3, 4].map((n) => (
          <G key={`gs${n}`}>
            <Circle cx={GX(n + 0.5)} cy={G_HALF} r={5} fill={GREEN_DARK} />
            <Line x1={GX(n + 0.5)} y1={G_HALF} x2={GX(n + 0.5)} y2={470}
              stroke={GREEN_DARK} strokeWidth={1.4} strokeDasharray="5 5" />
          </G>
        ))}
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={GX(-0.5)} y={514} size={12.5} fill={GREEN_DARK} weight={800}>−0.5</T>
        <T x={GX(0.5)} y={514} size={12.5} fill={GREEN_DARK} weight={800}>0.5</T>
        <T x={GX(1.5)} y={514} size={12.5} fill={GREEN_DARK} weight={800}>1.5</T>
        <T x={890} y={514} size={12.5} fill={MUTED} weight={700}>
          {t("…  and so on", "…  waghairah")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3.4)}>
        <T x={912} y={344} size={16} fill={GREEN_DARK} weight={900}>x = n + 0.5,   n ∈ ℤ</T>
      </Fade>

      {/* ═══════════ beat 7 — the trap: an interval, never a point ═══════════ */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d="M 40 536 H 1044" stroke={MUTED} sw={1.3} dur={0.9} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={44} y={562} size={13.5} fill={RED} weight={800} anchor="start">
          {t("THE TRAP — a floor equation gives an INTERVAL, not a point",
             "TRAP — floor equation interval deti hai, ek point nahi")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.4)}>
        <T x={44} y={590} size={16} fill={GREEN_DARK} weight={900} anchor="start">⌊x⌋ = 3   ⇒   x ∈ [ 3, 4 )</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.2)}>
        <T x={290} y={590} size={16} fill={RED} weight={800} anchor="start">x = 3</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 4.8)} d={crossD(288, 578, 46, 14)} stroke={RED} sw={2} dur={0.3} />
      <Fade on={beat >= 7} delay={dl(7, 5.4)}>
        <T x={360} y={590} size={12} fill={MUTED} weight={700} anchor="start">
          {t("— the whole interval is the answer", "— poora interval hi answer hai")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 6.2)} d="M 640 586 H 800" stroke={GREEN} sw={6} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 6.8)}>
        <Circle cx={640} cy={586} r={6} fill={GREEN_DARK} />
        <Circle cx={800} cy={586} r={6} fill={PAPER} stroke={GREEN_DARK} strokeWidth={2.2} />
        <T x={640} y={568} size={12} fill={GREEN_DARK} weight={800}>3</T>
        <T x={800} y={568} size={12} fill={GREEN_DARK} weight={800}>4</T>
      </Fade>
    </Scene>
  );
}
