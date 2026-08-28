/**
 * M12Ch01 · Section 48 — "The five standard functional equations"
 * Subtopic: Algebra of Functions and Functional Equations  (closing section)
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * The title promises FIVE standard equations, so five equation CARDS stand on
 * the board, each with its own mini-frame and the actual solution curve drawn:
 * the line kx through the origin, the exponential aˣ, the logarithm k log x
 * with its asymptote hugging the y-axis, the power xⁿ, and the reciprocal pair
 * f(x)·f(1/x) = f(x)+f(1/x) whose solution 1 ± xⁿ is drawn as the member
 * 1 + x². The voice names four of them one per beat; card ⑤ lands late on
 * beat 4 so the count on the board matches the count in the opening line. The
 * "anchors" beat lands a green dot on each of the five cards at the point
 * x = 0 or x = 1 pins down.
 *
 * The two REPLACEMENT MAPS, x → 1/x and x → 1 − x, are NOT an equation — they
 * are a substitution technique, so they sit BELOW the rule as a small muted
 * footnote beside moves 2 and 3 that name them, with no ordinal, no equation
 * row, no solution row and no arrowed axes: deliberately outside the card
 * grammar so nothing on the board can be miscounted as a sixth equation.
 *
 * Grid: five card columns centred 130, 330, 520, 749, 953 — ordinal y110,
 * equation y132, mini-frame y152–280, solution y302, descriptor y326. A
 * full-width rule at y344 splits off the two closing blocks (first moves on
 * the left of the vertical rule at x=540 with the replacement-map footnote
 * tucked at x378–528, domains on the right, both ending by y484), a second
 * rule at y492, then the four hook chips and the closing line.
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "five standard functional equations"  title + underline + subtitle + rule
 *  1  "Cauchy ⇒ f(x) = kx"                  card ①: f(x+y) = f(x)+f(y) with a
 *                                           straight line through the origin
 *  2  "sum → product ⇒ aˣ"                  card ②: the exponential curve
 *  3  "product → sum ⇒ k log x"             card ③: the logarithm curve
 *  4  "product → product ⇒ xⁿ"              card ④: the power curve, then
 *                                           card ⑤: the reciprocal pair, so
 *                                           all five stand before beat 5
 *  5  "first moves: anchors and partners"   rule + divider + the three moves,
 *                                           the anchor dot on cards ①–⑤, and
 *                                           the muted replacement-map footnote
 *  6  "domains on the algebra side"         the two-domain Venn, intersection
 *                                           shaded, zeros of g dropped
 *  7  "the one-line memory hook"            rule + four chips + closing line
 *
 * Visual vocabulary (shared with Sections 46 and 47 of this chapter):
 *   axes INK with arrowheads · the solution function AMBER_DARK · the second
 *   set / partner object BLUE · results, anchors and correct moves GREEN_DARK
 *   · headings RED · scaffolding MUTED.
 */

import React from "react";
import { Circle, Path } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN_DARK, RED, CREAM,
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

/* ① f(x) = k x — origin (130, 220) */
const LINE_D = "M 70 268 L 190 172";

/* ② f(x) = aˣ — origin (330, 268) */
const EXP_D = curveD(-2.1, 2.0, 48, (x) => 330 + 38 * x, (x) => 268 - 24 * Math.exp(0.75 * x));

/* ③ f(x) = k log x — origin (460, 220) */
const LOG_D = curveD(0.15, 5.6, 60, (x) => 460 + 27 * x, (x) => 220 - 26 * Math.log(x));

/* ④ f(x) = xⁿ — origin (689, 268) */
const POW_D = curveD(0, 3, 40, (x) => 689 + 46 * x, (x) => 268 - 12 * x * x);

/* ⑤ f(x) = 1 ± xⁿ, drawn as the member 1 + x² — origin (935, 268), unit 46 × 16.
   x ∈ [-1.2, 2.1] keeps it inside the frame: px 879.8–1031.6, py 181.4–252. */
const RECIP_PAIR_D = curveD(-1.2, 2.1, 44, (x) => 935 + 46 * x, (x) => 268 - 16 * (1 + x * x));

/* beat-5 FOOTNOTE (below the rule, not a card) — x → 1/x, origin (402, 456),
   unit 42 × 20: px 413.8–523.8, py 384.6–449.1 inside the little frame */
const RECIP_D = curveD(0.28, 2.9, 48, (x) => 402 + 42 * x, (x) => 456 - 20 / x);

/* beat-5 FOOTNOTE — x → 1 − x, same little frame: (381,426) → (467.1,467) */
const ONEMINUS_D = curveD(-0.5, 1.55, 2, (x) => 402 + 42 * x, (x) => 456 - 20 * (1 - x));

/* beat-6 — the two-domain Venn: circles r30 at (704,428) and (756,428), lens at x=730 */
const LENS_D = "M 730 413 A 30 30 0 0 1 730 443 A 30 30 0 0 1 730 413";

export default function M12Ch01Sec48({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — the framing ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={48} size={23} fill={RED} script>
          {t("The five standard functional equations", "Paanch standard functional equations")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.1)}
        d="M 372 64 C 500 60, 640 68, 708 62" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.9)}>
        <T x={540} y={82} size={12} fill={MUTED} script>
          {t("memorise the equation and its solution — many find-f questions become instant",
             "equation aur uska solution yaad karo — kai find-f questions instant ho jaate hain")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.7)} d="M 40 92 H 1040" stroke={MUTED} sw={1.2} dur={0.9} />

      {/* ═══════════ beat 1 — card ①: Cauchy ⇒ a line through the origin ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={130} y={110} size={11.5} fill={RED} weight={800}>
          {t("① Cauchy", "① Cauchy")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={130} y={132} size={12.5} fill={INK} weight={800}>f(x + y) = f(x) + f(y)</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.6)} d={arrowD(50, 220, 210, 220)} stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 2)} d={arrowD(130, 276, 130, 152)} stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 2.5)} d={LINE_D} stroke={AMBER_DARK} sw={2.8} dur={0.9} />
      <Fade on={beat >= 1} delay={dl(1, 3.5)}>
        <T x={130} y={302} size={14} fill={GREEN_DARK} weight={900}>f(x) = k x</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.6)}>
        <T x={130} y={326} size={11} fill={MUTED} weight={700}>
          {t("straight line through the origin", "origin se gujarti seedhi line")}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — card ②: sum → product ⇒ the exponential ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={330} y={110} size={11.5} fill={RED} weight={800}>
          {t("② sum → product", "② sum → product")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={330} y={132} size={12.5} fill={INK} weight={800}>f(x + y) = f(x) · f(y)</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.6)} d={arrowD(250, 268, 410, 268)} stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 2)} d={arrowD(330, 280, 330, 152)} stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 2.5)} d={EXP_D} stroke={AMBER_DARK} sw={2.8} dur={1} />
      <Fade on={beat >= 2} delay={dl(2, 3.6)}>
        <T x={330} y={302} size={14} fill={GREEN_DARK} weight={900}>f(x) = aˣ</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.8)}>
        <T x={330} y={326} size={11} fill={MUTED} weight={700}>
          {t("sum turns into a product", "sum, product ban jaata hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — card ③: product → sum ⇒ the logarithm ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={520} y={110} size={11.5} fill={RED} weight={800}>
          {t("③ product → sum", "③ product → sum")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={520} y={132} size={12.5} fill={INK} weight={800}>f(x y) = f(x) + f(y)</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.6)} d={arrowD(440, 220, 619, 220)} stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 2)} d={arrowD(460, 276, 460, 156)} stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 2.5)} d={LOG_D} stroke={AMBER_DARK} sw={2.8} dur={1} />
      <Fade on={beat >= 3} delay={dl(3, 3.6)}>
        <T x={520} y={302} size={14} fill={GREEN_DARK} weight={900}>f(x) = k log x</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.8)}>
        <T x={520} y={326} size={11} fill={MUTED} weight={700}>
          {t("product turns into a sum", "product, sum ban jaata hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — card ④: product → product ⇒ the power ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={749} y={110} size={11.5} fill={RED} weight={800}>
          {t("④ product → product", "④ product → product")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={749} y={132} size={12.5} fill={INK} weight={800}>f(x y) = f(x) · f(y)</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.6)} d={arrowD(649, 268, 839, 268)} stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 4} delay={dl(4, 2)} d={arrowD(689, 280, 689, 156)} stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 4} delay={dl(4, 2.5)} d={POW_D} stroke={AMBER_DARK} sw={2.8} dur={1} />
      <Fade on={beat >= 4} delay={dl(4, 3.6)}>
        <T x={749} y={302} size={14} fill={GREEN_DARK} weight={900}>f(x) = xⁿ</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4.8)}>
        <T x={749} y={326} size={11} fill={MUTED} weight={700}>
          {t("product stays a product", "product, product hi rehta hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 (late) — card ⑤: the reciprocal pair ⇒ 1 ± xⁿ ═══════════
          The title and beat 0 both say FIVE, so the fifth card lands here, after
          the fourth has settled, and every card is up before the moves beat. */}
      <Fade on={beat >= 4} delay={dl(4, 5.7)}>
        <T x={953} y={110} size={11.5} fill={RED} weight={800}>
          {t("⑤ reciprocal pair", "⑤ reciprocal pair")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6.3)}>
        <T x={953} y={132} size={12.5} fill={INK} weight={800}>f(x)·f(1/x) = f(x)+f(1/x)</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 7)} d={arrowD(875, 268, 1035, 268)} stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 4} delay={dl(4, 7.4)} d={arrowD(935, 280, 935, 152)} stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 4} delay={dl(4, 7.9)} d={RECIP_PAIR_D} stroke={AMBER_DARK} sw={2.8} dur={1} />
      <Fade on={beat >= 4} delay={dl(4, 8.9)}>
        <T x={953} y={302} size={14} fill={GREEN_DARK} weight={900}>f(x) = 1 ± xⁿ</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 9.9)}>
        <T x={953} y={326} size={11} fill={MUTED} weight={700}>
          {t("product equals sum here", "yahan product hi sum hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — the first moves, and the anchors they pin down ═══════════ */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M 40 344 H 1040" stroke={MUTED} sw={1.2} dur={0.9} />
      <Draw on={beat >= 5} delay={dl(5, 0.7)} d="M 540 352 V 484" stroke={MUTED} sw={1.3} dur={0.7} />
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={40} y={366} size={13} fill={RED} weight={800} anchor="start">
          {t("FIRST MOVES that crack these", "FIRST MOVES jo inhe crack karte hain")}
        </T>
      </Fade>
      {/* the anchors x = 0 and x = 1 pin one point on every card */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <Circle cx={130} cy={220} r={5.5} fill={GREEN_DARK} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.3)}>
        <Circle cx={330} cy={244} r={5.5} fill={GREEN_DARK} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.6)}>
        <Circle cx={487} cy={220} r={5.5} fill={GREEN_DARK} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.9)}>
        <Circle cx={735} cy={256} r={5.5} fill={GREEN_DARK} />
      </Fade>
      {/* card ⑤: x = 1 gives f(1)·f(1) = 2 f(1), so f(1) = 2 — the point (1, 2) */}
      <Fade on={beat >= 5} delay={dl(5, 3.2)}>
        <Circle cx={981} cy={236} r={5.5} fill={GREEN_DARK} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.6)}>
        <Circle cx={52} cy={398} r={10} fill={CREAM} stroke={GREEN_DARK} strokeWidth={1.8} />
        <T x={52} y={402} size={12} fill={GREEN_DARK} weight={900}>1</T>
        <T x={72} y={402} size={12.5} fill={INK} weight={800} anchor="start">
          {t("set x and y to 0 or 1 → find the anchors",
             "x aur y ko 0 ya 1 rakho → anchors milte hain")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6)}>
        <Circle cx={52} cy={432} r={10} fill={CREAM} stroke={GREEN_DARK} strokeWidth={1.8} />
        <T x={52} y={436} size={12} fill={GREEN_DARK} weight={900}>2</T>
        <T x={72} y={436} size={12.5} fill={INK} weight={800} anchor="start">
          {t("replace x by 1/x → a partner equation",
             "x ki jagah 1/x rakho → partner equation")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 9)}>
        <Circle cx={52} cy={466} r={10} fill={CREAM} stroke={GREEN_DARK} strokeWidth={1.8} />
        <T x={52} y={470} size={12} fill={GREEN_DARK} weight={900}>3</T>
        <T x={72} y={470} size={12.5} fill={INK} weight={800} anchor="start">
          {t("replace x by 1 − x → another partner",
             "x ki jagah 1 − x → ek aur partner")}
        </T>
      </Fade>
      {/* The two replacement maps moves 2 and 3 name — a SMALL muted footnote in
          the gap between the moves list and the divider, not an equation card:
          no ordinal, no equation row, no solution row, plain unarrowed axes. */}
      <Fade on={beat >= 5} delay={dl(5, 6.3)}>
        <T x={448} y={364} size={10.5} fill={MUTED} weight={700}>
          {t("the two replacement maps", "do replacement maps")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 6.7)} d="M 378 456 H 528" stroke={MUTED} sw={1.6} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 7)} d="M 402 468 V 376" stroke={MUTED} sw={1.6} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 7.4)} d={RECIP_D} stroke={BLUE} sw={2.2} dur={0.8} />
      <Fade on={beat >= 5} delay={dl(5, 8.2)}>
        <T x={500} y={432} size={10.5} fill={BLUE} weight={800}>1/x</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 9.6)} d={ONEMINUS_D} stroke={INK_LIGHT} sw={2.2} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 10.3)}>
        <T x={492} y={476} size={10.5} fill={INK_LIGHT} weight={800}>1 − x</T>
      </Fade>

      {/* ═══════════ beat 6 — the domains on the algebra side ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={560} y={366} size={13} fill={RED} weight={800} anchor="start">
          {t("DOMAINS on the algebra side", "ALGEBRA side ke domains")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={730} y={388} size={11.5} fill={GREEN_DARK} weight={800}>
          {t("f ± g and f · g live here", "f ± g aur f · g yahin rehte hain")}
        </T>
      </Fade>
      {/* tip at y=418 sits INSIDE the lens (top vertex y=413): 27.9 < r=30 from both centres */}
      <Draw on={beat >= 6} delay={dl(6, 1.8)} d={arrowD(730, 397, 730, 418)} stroke={GREEN_DARK} sw={1.8} dur={0.3} />
      <Draw on={beat >= 6} delay={dl(6, 2.2)}
        d="M 674 428 A 30 30 0 1 1 734 428 A 30 30 0 1 1 674 428" stroke={AMBER_DARK} sw={2.4} dur={0.9} />
      <Draw on={beat >= 6} delay={dl(6, 3)}
        d="M 726 428 A 30 30 0 1 1 786 428 A 30 30 0 1 1 726 428" stroke={BLUE} sw={2.4} dur={0.9} />
      <Path
        d={LENS_D}
        fill={GREEN_DARK}
        stroke="none"
        opacity={beat >= 6 ? 0.3 : 0}
      />
      <Draw on={beat >= 6} delay={dl(6, 4.3)} d={arrowD(640, 416, 678, 411)} stroke={AMBER_DARK} sw={1.8} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 4.6)}>
        <T x={600} y={418} size={11.5} fill={AMBER_DARK} weight={800} anchor="start">dom f</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 5)} d={arrowD(818, 416, 782, 411)} stroke={BLUE} sw={1.8} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 5.3)}>
        <T x={822} y={418} size={11.5} fill={BLUE} weight={800} anchor="start">dom g</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6.2)}>
        <T x={730} y={476} size={11.5} fill={RED} weight={800}>
          {t("f / g also drops the zeros of g", "f / g mein g ke zeros bhi hata do")}
        </T>
      </Fade>

      {/* ═══════════ beat 7 — the one-line memory hook ═══════════ */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d="M 40 492 H 1040" stroke={MUTED} sw={1.3} dur={0.9} />
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <Chip x={40} y={508} w={238} h={40} fill={CREAM} stroke={GREEN_DARK}
          textFill={GREEN_DARK} size={13} script={false}>
          sum → sum : linear
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <Chip x={294} y={508} w={238} h={40} fill={CREAM} stroke={GREEN_DARK}
          textFill={GREEN_DARK} size={13} script={false}>
          sum → product : exponential
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <Chip x={548} y={508} w={238} h={40} fill={CREAM} stroke={GREEN_DARK}
          textFill={GREEN_DARK} size={13} script={false}>
          product → sum : logarithm
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.2)}>
        <Chip x={802} y={508} w={238} h={40} fill={CREAM} stroke={GREEN_DARK}
          textFill={GREEN_DARK} size={13} script={false}>
          product → product : power
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.8)}>
        <T x={540} y={578} size={17} fill={RED} script>
          {t("Recognise the shape of the equation and the answer is already written.",
             "Equation ki shape pehchano — jawab pehle se likha hua hai.")}
        </T>
      </Fade>
    </Scene>
  );
}
