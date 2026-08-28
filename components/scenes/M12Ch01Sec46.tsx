/**
 * M12Ch01 · Section 46 — "Pitfalls and pro-tips for symmetry and periodicity"
 * Subtopic: Even, Odd, and Periodic Functions  (closing section of the subtopic)
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * A summary section is exactly where a board decays into bullets, so every
 * trap the voice names gets its own REAL figure: the exponential whose mirror
 * is neither itself nor its negative, the odd line whose square is an even
 * parabola, |sin x| riding above a dimmed sin x with the π-period bracketed,
 * and two waves of period π and 1 whose sum visibly never repeats. The two
 * reflexes get figures too — sin²x with its halved period measured, and an
 * odd cubic pinned through the origin.
 *
 * Grid: three trap panels across the top (headers y116, figures y130–286,
 * captions y308/330) in columns 40–360, 380–700, 720–1040. A full-width rule
 * at y344. The bottom half is split by a VERTICAL rule at x=390 drawn on the
 * transition beat: trap ④ to its left (40–360), the two reflexes to its right
 * (420–710, 740–1040), headers y372/400, figures below, captions y562/586.
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "close symmetry and periodicity"     title + underline + subtitle + rule
 *  1  "trap ①: assuming even or odd"       axes + y = eˣ and its mirror e⁻ˣ;
 *                                          neither equal nor negated
 *  2  "trap ②: mishandling products"       y = x (odd) —×x→ y = x² (even),
 *                                          two mini frames, the flips cancel
 *  3  "trap ③: a modulus shrinks period"   sin x dimmed + |sin x| in amber,
 *                                          the π-period bracketed on the axis
 *  4  "trap ④: LCM of incommensurables"    row rule + sin 2x (T=π), sin 2πx
 *                                          (T=1) and their non-repeating sum
 *  5  "now the reflexes"                   vertical divider + REFLEXES header
 *  6  "convert to double angles"           y = sin²x plotted with its period
 *                                          measured as π, plus the identity
 *  7  "odd forces f(0) = 0"                y = x³ through a ringed origin,
 *                                          the ±1 pair, f(0) = 0 arrowed
 *
 * Visual vocabulary (shared with Sections 47 and 48 of this chapter):
 *   axes INK with arrowheads · the primary function AMBER_DARK · the second /
 *   mirrored / partner object BLUE · results and correct moves GREEN_DARK ·
 *   traps, warnings and headings RED · de-emphasised reference curves MUTED.
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, ringD, arrowD,
  INK, MUTED, AMBER_DARK, GREEN_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

/** sampled polyline through a parametrised curve */
function curveD(
  u0: number,
  u1: number,
  n: number,
  fx: (u: number) => number,
  fy: (u: number) => number
): string {
  const pts: string[] = [];
  for (let i = 0; i <= n; i++) {
    const u = u0 + ((u1 - u0) * i) / n;
    pts.push(`${fx(u).toFixed(1)} ${fy(u).toFixed(1)}`);
  }
  return `M ${pts.join(" L ")}`;
}

/* ---- ① y = eˣ and its mirror, origin (200, 270) ---- */
const E1X = (x: number) => 200 + 58 * x;
const EXP_D = curveD(-1.7, 1.5, 44, E1X, (x) => 270 - 28 * Math.exp(x));
const EXP_MIRROR_D = curveD(-1.5, 1.7, 44, E1X, (x) => 270 - 28 * Math.exp(-x));

/* ---- ② the even parabola y = x², origin (628, 210) ---- */
const PAR_D = curveD(-2, 2, 36, (x) => 628 + 26 * x, (x) => 210 - 18 * x * x);

/* ---- ③ sin x and |sin x| over 0..3π, axis y = 226, origin x = 752 ---- */
const P3X = (u: number) => 752 + 29 * u;
const SIN_D = curveD(0, 3 * Math.PI, 150, P3X, (u) => 226 - 42 * Math.sin(u));
const ABS_SIN_D = curveD(0, 3 * Math.PI, 150, P3X, (u) => 226 - 42 * Math.abs(Math.sin(u)));

/* ---- ④ two incommensurable waves and their sum, x = 110..348 ---- */
const P4X = (u: number) => 110 + 29.75 * u;
const W_PI_D = curveD(0, 8, 200, P4X, (u) => 412 - 13 * Math.sin(2 * u));
const W_ONE_D = curveD(0, 8, 260, P4X, (u) => 462 - 13 * Math.sin(2 * Math.PI * u));
const W_SUM_D = curveD(0, 8, 320, P4X, (u) =>
  516 - 10 * (Math.sin(2 * u) + Math.sin(2 * Math.PI * u))
);

/* ---- ⑥ y = sin²x over 0..6.6, axis y = 524, origin x = 440 ---- */
const P6X = (u: number) => 440 + 39.8 * u;
const SIN2_D = curveD(0, 6.6, 150, P6X, (u) => 524 - 60 * Math.sin(u) * Math.sin(u));

/* ---- ⑦ the odd cubic y = x³, origin (890, 490) ---- */
const CUB_D = curveD(-1.75, 1.75, 60, (x) => 890 + 60 * x, (x) => 490 - 10 * x * x * x);

export default function M12Ch01Sec46({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — the framing ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={48} size={23} fill={RED} script>
          {t("Symmetry and periodicity — the traps, then the reflexes",
             "Symmetry aur periodicity — traps, phir reflexes")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.1)}
        d="M 300 64 C 460 60, 640 68, 780 62" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.9)}>
        <T x={540} y={82} size={12.5} fill={MUTED} script>
          {t("closing the subtopic — the mistakes that cost marks, and the two-second checks",
             "subtopic band karte hue — jo galtiyan marks khaati hain, aur do-second checks")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.7)} d="M 40 96 H 1040" stroke={MUTED} sw={1.2} dur={1} />

      {/* ═══════════ beat 1 — trap ①: assuming even or odd ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={40} y={116} size={13} fill={RED} weight={800} anchor="start">
          {t("①  assuming a function is even or odd",
             "①  function ko even ya odd maan lena")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.8)} d={arrowD(96, 270, 330, 270)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 1} delay={dl(1, 1.2)} d={arrowD(200, 282, 200, 136)} stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={338} y={275} size={11.5} fill={INK} weight={800} anchor="start">x</T>
        <T x={192} y={144} size={11.5} fill={INK} weight={800} anchor="end">y</T>
        <Circle cx={200} cy={270} r={3.2} fill={INK} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2)} d={EXP_D} stroke={AMBER_DARK} sw={2.8} dur={1.1} />
      <Fade on={beat >= 1} delay={dl(1, 3.1)}>
        <T x={300} y={152} size={12} fill={AMBER_DARK} weight={800} anchor="start">f(x) = eˣ</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.5)} d={EXP_MIRROR_D} stroke={BLUE} sw={2.2} dur={1.1} />
      <Fade on={beat >= 1} delay={dl(1, 4.6)}>
        <T x={44} y={158} size={11.5} fill={BLUE} weight={800} anchor="start">f(−x) = e⁻ˣ</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5.4)}>
        <Circle cx={E1X(1)} cy={270 - 28 * Math.E} r={4.2} fill={AMBER_DARK} />
        <Circle cx={E1X(-1)} cy={270 - 28 * Math.E} r={4.2} fill={BLUE} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6.2)}>
        <T x={40} y={308} size={11.5} fill={RED} weight={800} anchor="start">
          {t("always compute f(−x) — never guess from the shape",
             "hamesha f(−x) compute karo — shape se guess mat karo")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={40} y={330} size={11.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("e⁻ˣ ≠ eˣ and ≠ −eˣ  ⇒  neither even nor odd",
             "e⁻ˣ ≠ eˣ aur ≠ −eˣ  ⇒  na even, na odd")}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — trap ②: products and the sign flips ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={380} y={116} size={13} fill={RED} weight={800} anchor="start">
          {t("②  mishandling products", "②  products ko mishandle karna")}
        </T>
      </Fade>
      {/* mini frame A — the odd line y = x */}
      <Draw on={beat >= 2} delay={dl(2, 0.8)} d="M 396 210 H 504" stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 1.1)} d="M 452 254 V 160" stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 1.5)} d="M 414 248 L 490 172" stroke={BLUE} sw={2.8} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <Circle cx={490} cy={172} r={4} fill={BLUE} />
        <Circle cx={414} cy={248} r={4} fill={BLUE} />
        <T x={452} y={274} size={11.5} fill={BLUE} weight={800}>y = x  (odd)</T>
      </Fade>
      {/* the multiply-again arrow */}
      <Draw on={beat >= 2} delay={dl(2, 2.8)} d={arrowD(516, 210, 560, 210)} stroke={GREEN_DARK} sw={2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 3.2)}>
        <T x={538} y={196} size={11.5} fill={GREEN_DARK} weight={800}>× x</T>
      </Fade>
      {/* mini frame B — the even parabola y = x² */}
      <Draw on={beat >= 2} delay={dl(2, 3.6)} d="M 572 210 H 684" stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 3.9)} d="M 628 254 V 132" stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 4.3)} d={PAR_D} stroke={AMBER_DARK} sw={2.8} dur={0.9} />
      <Fade on={beat >= 2} delay={dl(2, 5.2)}>
        <Circle cx={628} cy={210} r={3.4} fill={INK} />
        <T x={628} y={274} size={11.5} fill={AMBER_DARK} weight={800}>y = x²  (even)</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={380} y={308} size={11.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("odd × odd = EVEN — the two sign flips cancel",
             "odd × odd = EVEN — do sign flips cancel ho jaate hain")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 7.8)}>
        <T x={380} y={330} size={11.5} fill={RED} weight={800} anchor="start">
          {t("(−f)(−g) = +fg — track every flip, don't assume",
             "(−f)(−g) = +fg — har flip track karo, maan mat lo")}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — trap ③: the modulus shrinks the period ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={720} y={116} size={13} fill={RED} weight={800} anchor="start">
          {t("③  forgetting a modulus shrinks the period",
             "③  bhoolna ki modulus period shrink karta hai")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.8)} d={arrowD(736, 226, 1024, 226)} stroke={INK} sw={2.2} dur={0.7} />
      <Draw on={beat >= 3} delay={dl(3, 1.2)} d="M 752 238 V 170" stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={1030} y={231} size={11.5} fill={INK} weight={800} anchor="start">x</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.9)} d={SIN_D} stroke={MUTED} sw={1.8} dur={1.2} />
      <Fade on={beat >= 3} delay={dl(3, 3.1)}>
        <T x={958} y={262} size={11.5} fill={MUTED} weight={800} anchor="start">sin x</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 3.5)} d={ABS_SIN_D} stroke={AMBER_DARK} sw={2.8} dur={1.3} />
      <Fade on={beat >= 3} delay={dl(3, 4.8)}>
        <T x={1000} y={166} size={12} fill={AMBER_DARK} weight={800}>|sin x|</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 5.2)}
        d="M 752 245 V 255 M 752 250 H 843 M 843 245 V 255" stroke={GREEN_DARK} sw={2} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 5.9)}>
        <T x={797} y={274} size={12.5} fill={GREEN_DARK} weight={800}>period π</T>
        <Circle cx={843} cy={226} r={4} fill={GREEN_DARK} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6.8)}>
        <T x={720} y={308} size={11.5} fill={RED} weight={800} anchor="start">
          {t("|sin x| has period π — not 2π",
             "|sin x| ka period π hai — 2π nahin")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 8.4)}>
        <T x={720} y={330} size={11.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("after any modulus, always test the half-period",
             "modulus ke baad hamesha half-period test karo")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — trap ④: incommensurable periods ═══════════ */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d="M 40 344 H 1040" stroke={MUTED} sw={1.2} dur={0.9} />
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={40} y={372} size={13} fill={RED} weight={800} anchor="start">
          {t("④  taking the LCM of incommensurable periods",
             "④  incommensurable periods ka LCM lena")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.2)} d="M 110 412 H 348" stroke={INK} sw={1.6} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 1.5)} d={W_PI_D} stroke={AMBER_DARK} sw={2.4} dur={1.1} />
      <Fade on={beat >= 4} delay={dl(4, 2.5)}>
        <T x={40} y={416} size={11} fill={AMBER_DARK} weight={800} anchor="start">sin 2x</T>
        <T x={356} y={416} size={11} fill={AMBER_DARK} weight={800} anchor="start">T = π</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 3.1)} d="M 110 462 H 348" stroke={INK} sw={1.6} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 3.4)} d={W_ONE_D} stroke={BLUE} sw={2.2} dur={1.1} />
      <Fade on={beat >= 4} delay={dl(4, 4.4)}>
        <T x={40} y={466} size={11} fill={BLUE} weight={800} anchor="start">sin 2πx</T>
        <T x={356} y={466} size={11} fill={BLUE} weight={800} anchor="start">T = 1</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 5)} d="M 110 516 H 348" stroke={INK} sw={1.6} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 5.3)} d={W_SUM_D} stroke={RED} sw={2.2} dur={1.4} />
      <Fade on={beat >= 4} delay={dl(4, 6.6)}>
        <T x={40} y={520} size={11} fill={RED} weight={800} anchor="start">sum</T>
        <T x={356} y={520} size={11} fill={RED} weight={800} anchor="start">T = ?</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 7.4)}>
        <T x={40} y={562} size={11.5} fill={RED} weight={800} anchor="start">
          {t("ratio π : 1 is irrational → no common period",
             "ratio π : 1 irrational hai → koi common period nahin")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 9.2)}>
        <T x={40} y={586} size={11.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("so f + g is NOT periodic — never LCM these",
             "to f + g periodic NAHIN — inka LCM mat lo")}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — the turn to the reflexes ═══════════ */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M 390 350 V 592" stroke={MUTED} sw={1.3} dur={0.9} />
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={420} y={372} size={14} fill={RED} weight={800} anchor="start">
          {t("REFLEXES — the moves that save real time",
             "REFLEXES — jo sach mein time bachate hain")}
        </T>
      </Fade>

      {/* ═══════════ beat 6 — reflex ⑴: double angles halve the period ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={420} y={400} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("⑴  convert sin²x to a double angle first",
             "⑴  pehle sin²x ko double angle mein badlo")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={420} y={428} size={14} fill={INK} weight={800} anchor="start">sin²x = (1 − cos 2x) / 2</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 2)} d={arrowD(428, 524, 706, 524)} stroke={INK} sw={2.2} dur={0.7} />
      <Draw on={beat >= 6} delay={dl(6, 2.4)} d="M 440 536 V 468" stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 6} delay={dl(6, 2.8)} d={SIN2_D} stroke={AMBER_DARK} sw={2.8} dur={1.3} />
      <Fade on={beat >= 6} delay={dl(6, 4.1)}>
        <T x={565} y={490} size={11} fill={AMBER_DARK} weight={800}>sin²x</T>
        <Circle cx={565} cy={524} r={4} fill={GREEN_DARK} />
        <Circle cx={690} cy={524} r={4} fill={GREEN_DARK} />
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 4.6)}
        d="M 440 448 V 458 M 440 453 H 565 M 565 448 V 458" stroke={GREEN_DARK} sw={2} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 5.3)}>
        <T x={572} y={458} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">T = π</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6.1)}>
        <T x={420} y={562} size={11.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("the period usually HALVES: 2π  →  π",
             "period aam taur pe AADHA: 2π  →  π")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7.6)}>
        <T x={420} y={586} size={11.5} fill={RED} weight={800} anchor="start">
          {t("convert first, then read off the period",
             "pehle convert karo, phir period padho")}
        </T>
      </Fade>

      {/* ═══════════ beat 7 — reflex ⑵: odd forces f(0) = 0 ═══════════ */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={740} y={400} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("⑵  odd functions FORCE f(0) = 0",
             "⑵  odd functions f(0) = 0 force karte hain")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d={arrowD(770, 490, 1010, 490)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 7} delay={dl(7, 1.1)} d={arrowD(890, 556, 890, 428)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 7} delay={dl(7, 1.5)} d={CUB_D} stroke={AMBER_DARK} sw={2.8} dur={1.1} />
      <Fade on={beat >= 7} delay={dl(7, 2.4)}>
        <T x={770} y={450} size={12.5} fill={AMBER_DARK} weight={800} anchor="start">f(x) = x³</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 2.7)} d="M 830 500 L 950 480" stroke={MUTED} sw={1.3} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 3)}>
        <Circle cx={950} cy={480} r={4.2} fill={BLUE} />
        <Circle cx={830} cy={500} r={4.2} fill={BLUE} />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3.3)}>
        <Circle cx={890} cy={490} r={5.5} fill={GREEN_DARK} />
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 3.6)} d={ringD(890, 490, 26, 20)} stroke={GREEN_DARK} sw={2} dur={0.6} />
      <Draw on={beat >= 7} delay={dl(7, 4)} d={arrowD(932, 522, 902, 498)} stroke={GREEN_DARK} sw={2} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 4.2)}>
        <T x={935} y={530} size={13} fill={GREEN_DARK} weight={900} anchor="start">f(0) = 0</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.5)}>
        <T x={740} y={562} size={11.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("f(−0) = −f(0)  ⇒  f(0) = 0 — a free check",
             "f(−0) = −f(0)  ⇒  f(0) = 0 — ek free check")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.8)}>
        <T x={740} y={586} size={11.5} fill={RED} weight={800} anchor="start">
          {t("if f(0) ≠ 0, the function cannot be odd",
             "agar f(0) ≠ 0, to function odd ho hi nahin sakta")}
        </T>
      </Fade>
    </Scene>
  );
}
