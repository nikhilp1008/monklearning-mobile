/**
 * M12Ch01 · Section 47 — "Building and discovering functions"
 * Subtopic: Algebra of Functions and Functional Equations  (opening section)
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * The voice sets out the subtopic's two halves, so the board is split by a
 * vertical rule at x = 540 and stays split for the whole section.
 *
 * LEFT — algebra of functions: real axes carrying f (amber) and g (blue), a
 * vertical guide at x = a with the three read-off dots, then the (f + g)
 * curve itself and the three combination rules, then the domain picture as
 * three interval bars — dom f, dom g, and their intersection with the zero
 * of g punched out.
 *
 * RIGHT — functional equations: the black-box machine with a ? inside (no
 * formula, only a rule), the Cauchy rule ringed, the two substitution moves,
 * and the elimination laid out as a pair of equations with the shared
 * unwanted term crossed out and the formula falling out.
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "two ideas live in this subtopic"    title + underline + subtitle + rule
 *                                          + the vertical split
 *  1  "add and multiply point by point"    ① header + axes + f + g + the guide
 *                                          at x = a and the three dots
 *  2  "f+g, f·g, f/g at x"                 the (f + g) curve + the three rules
 *  3  "the only subtlety is the domain"    the three interval bars, the
 *                                          intersection, the excluded zero
 *  4  "functional equations: a rule"       ② header + the ? machine, x in,
 *                                          f(x) out
 *  5  "f(x+y) = f(x) + f(y)"               the rule written large and ringed
 *                                          + the reverse-engineering line
 *  6  "clever substitution"                move ①: x = y = 0 ⇒ f(0) = 0;
 *                                          move ②: a transformed x
 *  7  "eliminate, and out pops f"          the two equations, f(★) crossed
 *                                          out of both, arrow to the formula
 *
 * Visual vocabulary (shared with Sections 46 and 48 of this chapter):
 *   axes INK with arrowheads · the primary function AMBER_DARK · the second /
 *   partner object BLUE · results and correct moves GREEN_DARK · warnings and
 *   headings RED · de-emphasised scaffolding MUTED.
 */

import React from "react";
import { Circle, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, ringD, arrowD, crossD,
  INK, MUTED, AMBER_DARK, GREEN_DARK, RED, CREAM, PAPER,
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

/* ---- the left frame: origin (90, 300), 38 px per x-unit, 22 px per y-unit ---- */
const AX = (u: number) => 90 + 38 * u;
const AY = (v: number) => 300 - 22 * v;
const fOf = (u: number) => 0.35 * u + 1;
const gOf = (u: number) => 3.4 - 0.16 * u + 0.35 * Math.sin(0.6 * u);

const F_D = curveD(0, 10.5, 40, AX, (u) => AY(fOf(u)));
const G_D = curveD(0, 10.5, 60, AX, (u) => AY(gOf(u)));
const SUM_D = curveD(0, 10.5, 60, AX, (u) => AY(fOf(u) + gOf(u)));

const A_U = 8;
const AXA = AX(A_U);            // 394
const FA = AY(fOf(A_U));        // 216.4
const GA = AY(gOf(A_U));        // 261.0
const SA = AY(fOf(A_U) + gOf(A_U)); // 177.4

export default function M12Ch01Sec47({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — the framing and the split ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={48} size={23} fill={RED} script>
          {t("Building and discovering functions",
             "Functions banana aur discover karna")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.1)}
        d="M 366 64 C 500 60, 640 68, 714 62" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.9)}>
        <T x={540} y={82} size={12.5} fill={MUTED} script>
          {t("two ideas — combine known functions, or deduce an unknown one from the rule it obeys",
             "do ideas — known functions ko combine karo, ya rule se unknown function deduce karo")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.7)} d="M 40 96 H 1040" stroke={MUTED} sw={1.2} dur={0.9} />
      <Draw on={beat >= 0} delay={dl(0, 3.5)} d="M 540 108 V 592" stroke={MUTED} sw={1.3} dur={1.1} />

      {/* ═══════════ beat 1 — ① algebra of functions, point by point ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={40} y={120} size={14} fill={RED} weight={800} anchor="start">
          {t("① ALGEBRA OF FUNCTIONS — combine point by point",
             "① ALGEBRA OF FUNCTIONS — point by point combine")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.9)} d={arrowD(60, 300, 500, 300)} stroke={INK} sw={2.2} dur={0.8} />
      <Draw on={beat >= 1} delay={dl(1, 1.3)} d={arrowD(90, 312, 90, 150)} stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 1.7)}>
        <T x={508} y={305} size={11.5} fill={INK} weight={800} anchor="start">x</T>
        <T x={82} y={158} size={11.5} fill={INK} weight={800} anchor="end">y</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2)} d={F_D} stroke={AMBER_DARK} sw={2.8} dur={1.1} />
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <T x={496} y={201} size={12.5} fill={AMBER_DARK} weight={800} anchor="start">f</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.3)} d={G_D} stroke={BLUE} sw={2.8} dur={1.1} />
      <Fade on={beat >= 1} delay={dl(1, 4.3)}>
        <T x={496} y={266} size={12.5} fill={BLUE} weight={800} anchor="start">g</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 4.8)} d={`M ${AXA} 300 V 172`} stroke={MUTED} sw={1.4} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 5.3)}>
        <T x={AXA} y={316} size={11.5} fill={INK} weight={800}>x = a</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5.8)}>
        <Circle cx={AXA} cy={FA} r={5} fill={AMBER_DARK} />
        <T x={386} y={202} size={11.5} fill={AMBER_DARK} weight={800} anchor="end">f(a)</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6.6)}>
        <Circle cx={AXA} cy={GA} r={5} fill={BLUE} />
        <T x={386} y={276} size={11.5} fill={BLUE} weight={800} anchor="end">g(a)</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 7.6)}>
        <Circle cx={AXA} cy={SA} r={5.5} fill={GREEN_DARK} />
        <T x={386} y={160} size={11.5} fill={GREEN_DARK} weight={800} anchor="end">f(a) + g(a)</T>
      </Fade>

      {/* ═══════════ beat 2 — the combined curve and the three rules ═══════════ */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d={SUM_D} stroke={GREEN_DARK} sw={2.8} dur={1.2} />
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={496} y={163} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">f + g</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <T x={40} y={364} size={14} fill={GREEN_DARK} weight={800} anchor="start">(f + g)(x) = f(x) + g(x)</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.4)}>
        <T x={40} y={392} size={14} fill={GREEN_DARK} weight={800} anchor="start">(f · g)(x) = f(x) · g(x)</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6.6)}>
        <T x={40} y={420} size={14} fill={GREEN_DARK} weight={800} anchor="start">(f / g)(x) = f(x) / g(x)</T>
      </Fade>

      {/* ═══════════ beat 3 — the domain of a combination ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={40} y={466} size={12.5} fill={RED} weight={800} anchor="start">
          {t("the only subtlety — the DOMAIN", "ek hi subtlety — DOMAIN")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <Rect x={140} y={486} width={260} height={12} rx={6} fill={AMBER_DARK} />
        <T x={132} y={496} size={11.5} fill={AMBER_DARK} weight={800} anchor="end">dom f</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <Rect x={250} y={510} width={250} height={12} rx={6} fill={BLUE} />
        <T x={132} y={520} size={11.5} fill={BLUE} weight={800} anchor="end">dom g</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 2.8)} d="M 250 482 V 550 M 400 482 V 550" stroke={MUTED} sw={1.3} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 3.6)}>
        <Rect x={250} y={534} width={150} height={12} rx={6} fill={GREEN_DARK} />
        <T x={132} y={544} size={11.5} fill={GREEN_DARK} weight={800} anchor="end">dom (f/g)</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.6)}>
        <Circle cx={330} cy={540} r={6} fill={PAPER} stroke={RED} strokeWidth={2.2} />
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 5)} d={arrowD(408, 530, 340, 537)} stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 5.4)}>
        <T x={412} y={544} size={11} fill={RED} weight={800} anchor="start">g(x) = 0</T>
        <T x={412} y={566} size={11} fill={RED} weight={800} anchor="start">
          {t("thrown out", "hata do")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6.6)}>
        <T x={40} y={592} size={11.5} fill={INK} weight={800} anchor="start">
          {t("defined only where BOTH are defined",
             "sirf wahan defined jahan DONO defined hain")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — ② functional equations: the black box ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={560} y={120} size={14} fill={RED} weight={800} anchor="start">
          {t("② FUNCTIONAL EQUATIONS — deduce the function",
             "② FUNCTIONAL EQUATIONS — function deduce karo")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={560} y={148} size={12} fill={INK} weight={700} anchor="start">
          {t("no formula given — only a rule it obeys",
             "formula nahin — sirf ek rule diya jaata hai")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 2)} d="M 740 170 H 880 V 240 H 740 Z"
        stroke={INK} sw={2.4} dur={0.8} fill={CREAM} />
      <Fade on={beat >= 4} delay={dl(4, 2.8)}>
        <T x={810} y={216} size={34} fill={RED} weight={900}>?</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 3.4)} d={arrowD(660, 205, 732, 205)} stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 3.9)}>
        <T x={650} y={210} size={13} fill={INK} weight={800} anchor="end">x</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 4.3)} d={arrowD(888, 205, 960, 205)} stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 4.8)}>
        <T x={968} y={210} size={13} fill={INK} weight={800} anchor="start">f(x)</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5.6)}>
        <T x={810} y={262} size={11.5} fill={MUTED} weight={800}>
          {t("which functions could behave this way?",
             "kaun se functions aise behave kar sakte hain?")}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — the rule itself, and what solving it means ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={802} y={316} size={21} fill={GREEN_DARK} weight={900}>f(x + y) = f(x) + f(y)</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.4)} d={ringD(802, 310, 148, 28)} stroke={GREEN_DARK} sw={2} dur={0.9} />
      <Fade on={beat >= 5} delay={dl(5, 2.6)}>
        <T x={560} y={366} size={12} fill={INK} weight={700} anchor="start">
          {t("reverse-engineering: you know how the machine responds,",
             "reverse-engineering: tum jaante ho machine kaise respond karti hai,")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4.4)}>
        <T x={560} y={390} size={12} fill={INK} weight={700} anchor="start">
          {t("so you deduce the machine.", "to machine deduce karte ho.")}
        </T>
      </Fade>

      {/* ═══════════ beat 6 — clever substitution ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={560} y={418} size={12.5} fill={RED} weight={800} anchor="start">
          {t("the detective's tool — clever substitution",
             "detective ka tool — clever substitution")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <Circle cx={572} cy={446} r={10} fill={CREAM} stroke={GREEN_DARK} strokeWidth={1.8} />
        <T x={572} y={450} size={12} fill={GREEN_DARK} weight={900}>1</T>
        <T x={592} y={450} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("put x = y = 0  ⇒  f(0) = 0", "x = y = 0 rakho  ⇒  f(0) = 0")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5)}>
        <Circle cx={572} cy={480} r={10} fill={CREAM} stroke={GREEN_DARK} strokeWidth={1.8} />
        <T x={572} y={484} size={12} fill={GREEN_DARK} weight={900}>2</T>
        <T x={592} y={484} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("substitute a transformed x → a 2nd equation",
             "transformed x substitute karo → dusra equation")}
        </T>
      </Fade>

      {/* ═══════════ beat 7 — eliminate the unwanted term ═══════════ */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={560} y={514} size={12.5} fill={RED} weight={800} anchor="start">
          {t("two equations ⇒ eliminate the unwanted term",
             "do equations ⇒ unwanted term eliminate karo")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={580} y={542} size={13.5} fill={INK} weight={800} anchor="start">①</T>
        <T x={606} y={542} size={13.5} fill={INK} weight={800} anchor="start">f(x)</T>
        <T x={648} y={542} size={13.5} fill={MUTED} weight={700} anchor="start">and</T>
        <T x={684} y={542} size={13.5} fill={INK} weight={800} anchor="start">f(★)</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.4)}>
        <T x={580} y={566} size={13.5} fill={INK} weight={800} anchor="start">②</T>
        <T x={606} y={566} size={13.5} fill={INK} weight={800} anchor="start">f(★)</T>
        <T x={648} y={566} size={13.5} fill={MUTED} weight={700} anchor="start">and</T>
        <T x={684} y={566} size={13.5} fill={INK} weight={800} anchor="start">f(x)</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 3.4)} d={crossD(684, 531.5, 28, 13.5)} stroke={RED} sw={2} dur={0.3} />
      <Draw on={beat >= 7} delay={dl(7, 3.7)} d={crossD(606, 555.5, 28, 13.5)} stroke={RED} sw={2} dur={0.3} />
      <Draw on={beat >= 7} delay={dl(7, 4.3)} d={arrowD(740, 554, 800, 554)} stroke={GREEN_DARK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 4.8)}>
        <T x={808} y={559} size={14} fill={GREEN_DARK} weight={900} anchor="start">f(x) = the formula</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5.8)}>
        <T x={560} y={592} size={11.5} fill={MUTED} weight={700} anchor="start">
          {t("exactly like solving simultaneous linear equations",
             "bilkul simultaneous linear equations solve karne jaisa")}
        </T>
      </Fade>
    </Scene>
  );
}
