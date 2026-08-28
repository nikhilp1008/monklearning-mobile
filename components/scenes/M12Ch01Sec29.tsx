/**
 * M12Ch01 · Section 29 — "The constraint catalogue and range shortcuts"
 * Subtopic: Domain and Range of Real Functions
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * The voice literally says "domain constraints on one side, range shortcuts on
 * the other", so the top half is split by a real vertical rule. The LEFT side
 * carries four constraints, each with its own number line — and the whole point
 * of the section, the ≥ 0 endpoint (filled) versus the > 0 endpoint (hollow),
 * is drawn, not merely written. The RIGHT side plots the five standard
 * functions the voice lists and marks each one's range as a blue bar beside
 * its y-axis. The bottom band draws the two shortcuts: a real hyperbola with
 * its horizontal asymptote y = a/c and the hole it leaves in the y-axis, and
 * the discriminant test shown as a quadratic in x that either meets the axis
 * (D ≥ 0, y is attainable) or floats clear of it (D < 0, y is not).
 *
 * Grid
 *   header band          y  30..90    (title 46, underline 62, subtitle 80, rule 90)
 *   vertical rule x=540  y 100..338
 *   LEFT   x  40..516    y 100..338   four domain constraints + number lines
 *   RIGHT  x 564..1044   y 100..346   five standard ranges, 3 across then 2
 *                                     (row 2 axes run to y = 344, above the
 *                                      y = 352 divider)
 *   divider y 352
 *   BOTTOM-L x  40..560  y 360..596   (ax+b)/(cx+d): range = R minus a/c
 *   BOTTOM-R x 590..1044 y 360..596   quadratic ÷ quadratic: force D ≥ 0
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "the working catalogue"          title, underline, subtitle, rule, the
 *                                      vertical split and BOTH column headings
 *  1  "rational ≠ 0, even root ≥ 0"    rows ① and ②: labels, conditions, their
 *                                      number lines, hollow hole vs filled 0
 *  2  "root in a denominator, log"     rows ③ and ④, both with a HOLLOW 0, and
 *                                      the "open circle — 0 is excluded" note
 *  3  "the standard ranges"            the "memorise, never re-derive" note
 *  4  "x², |x|, eˣ, ln x, sin, cos"    the five plotted functions, the range
 *                                      bar drawn beside each plot, and the
 *                                      blue-bar colour key
 *  5  "rational: R minus one value"    the statement + axes + both hyperbola
 *                                      branches
 *  6  "the excluded value is a/c"      the horizontal asymptote y = a/c (the
 *                                      only asymptote the voice names), the
 *                                      hollow point at a/c on the y-axis, and
 *                                      "approached, never reached"
 *  7  "quadratic ÷ quadratic ⇒ D ≥ 0"  the three algebra lines, then the two
 *                                      parabolas: crossing vs floating clear
 *
 * Visual vocabulary (shared with Sections 28 and 30):
 *   axes INK with computed arrowheads · the function itself AMBER_DARK ·
 *   DOMAIN facts on the x-axis in GREEN_DARK · RANGE facts on the y-axis in
 *   BLUE · results GREEN_DARK · exclusions, asymptotes and traps RED ·
 *   headings RED, secondary prose MUTED · filled dot = included,
 *   hollow dot = excluded, everywhere.
 */

import React from "react";
import { Circle, Line } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD,
  INK, MUTED, AMBER, AMBER_DARK, GREEN_DARK, RED, PAPER,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

/** sample a parametric curve into a polyline path */
function pathFrom(
  fn: (u: number) => [number, number],
  u0: number,
  u1: number,
  n: number
): string {
  const pts: string[] = [];
  for (let i = 0; i <= n; i++) {
    const u = u0 + ((u1 - u0) * i) / n;
    const [x, y] = fn(u);
    pts.push(`${x.toFixed(1)} ${y.toFixed(1)}`);
  }
  return `M ${pts.join(" L ")}`;
}

/* ---- the five standard functions (top-right catalogue) ---- */
const SQ_D = pathFrom((u) => [640 + 32 * u, 214 - 27 * u * u], -1.3, 1.3, 40);
const ABS_D = "M 762 172 L 804 214 L 846 172";
const EXP_D = pathFrom((u) => [968 + 26 * u, 214 - 16 * Math.exp(u)], -1.6, 1.05, 36);
const LN_D = pathFrom((u) => [632 + 22 * u, 306 - 17 * Math.log(u)], 0.12, 3.2, 44);
const SIN_D = pathFrom((u) => [852 + u, 306 - 26 * Math.sin(u / 32)], -24, 178, 64);
const COS_D = pathFrom((u) => [852 + u, 306 - 26 * Math.cos(u / 32)], -24, 178, 64);

/* ---- the hyperbola (ax+b)/(cx+d): y = 505 + 1350/(x - 220) ----
   The numerator is 1350 (not 600) so that BOTH drawn ends stay visibly clear of
   the horizontal asymptote y = 505, which is the whole point of beat 6:
     right end  x = 350 -> y = 515.4, i.e. 8.3px of white between the 2.6-wide
                curve and the 1.6-wide dashed asymptote — approached, not reached
     left  end  x = 116 -> y = 492.0, which is 29px from the hollow a/c dot at
                (90, 505) — the curve never comes near the excluded value
   The right branch now starts at x = 236 (y = 589.4, inside the y<=596 safe
   area), so it plunges through the x-axis at x = 244.5 and reads as a real
   hyperbola branch instead of floating just above the axis. */
const HYP_L = pathFrom((u) => [u, 505 + 1350 / (u - 220)], 116, 195, 40);
const HYP_R = pathFrom((u) => [u, 505 + 1350 / (u - 220)], 236, 350, 40);

/* ---- the two discriminant parabolas, axis at y = 562 ---- */
const PAR_HIT = pathFrom((u) => [700 + u, 592 - 0.02 * u * u], -52, 52, 32);
const PAR_MISS = pathFrom((u) => [900 + u, 548 - 0.02 * u * u], -38, 38, 28);

export default function M12Ch01Sec29({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);
  /* Beat 7 is the closing segment and the two takes give it very different room:
     english starts it at 66.99s of a 77s track (10.0s left), hinglish at 66.73s
     of a 72s track (5.27s left). The same stagger would run ~3.6s past the end
     of the hinglish voice, so it is compressed there and left alone in english. */
  const dl7 = (d: number) => dl(7, en ? d : d * 0.55);

  return (
    <Scene>
      {/* ═══════════ beat 0 — the catalogue, split in two ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("The constraint catalogue", "Constraint catalogue")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.9)}
        d="M 396 62 C 480 58, 600 66, 686 60" stroke={RED} sw={2.2} dur={0.5} />
      <Fade on={beat >= 0} delay={dl(0, 1.4)}>
        <T x={540} y={80} size={12.5} fill={MUTED} script>
          {t("domain constraints on one side, range shortcuts on the other",
             "ek taraf domain constraints, doosri taraf range shortcuts")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.9)} d="M 40 90 H 1044" stroke={MUTED} sw={1.2} dur={0.8} />
      <Draw on={beat >= 0} delay={dl(0, 2.6)} d="M 540 100 V 338" stroke={MUTED} sw={1.2} dur={0.8} />
      <Fade on={beat >= 0} delay={dl(0, 3.4)}>
        <T x={44} y={112} size={13.5} fill={RED} weight={800} anchor="start">
          {t("DOMAIN CONSTRAINTS — what x is allowed",
             "DOMAIN CONSTRAINTS — kaun sa x allowed hai")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4.4)}>
        <T x={564} y={112} size={13.5} fill={RED} weight={800} anchor="start">
          {t("RANGE SHORTCUTS — memorise these", "RANGE SHORTCUTS — yeh yaad kar lo")}
        </T>
      </Fade>

      {/* ═══════════ beat 1 — ① a rational, ② an even root ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={44} y={148} size={12.5} fill={AMBER_DARK} weight={800} anchor="start">
          ①  rational   p(x) / q(x)
        </T>
        <T x={44} y={172} size={13} fill={RED} weight={800} anchor="start">
          {t("q(x) ≠ 0  — denominator non-zero", "q(x) ≠ 0  — denominator zero nahin")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.2)} d={arrowD(300, 156, 500, 156)} stroke={INK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 1.7)} d="M 300 156 H 394" stroke={GREEN_DARK} sw={4.5} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 1.9)} d="M 406 156 H 494" stroke={GREEN_DARK} sw={4.5} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 2.3)}>
        <Circle cx={400} cy={156} r={5} fill={PAPER} stroke={RED} strokeWidth={2} />
        <T x={400} y={176} size={11} fill={RED} weight={800}>q(x) = 0</T>
        <T x={508} y={161} size={11.5} fill={INK} weight={700} anchor="start">x</T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 4.2)}>
        <T x={44} y={196} size={12.5} fill={AMBER_DARK} weight={800} anchor="start">
          ②  even root   √( g(x) )
        </T>
        <T x={44} y={220} size={13} fill={GREEN_DARK} weight={800} anchor="start">
          {t("g(x) ≥ 0  — content at least zero", "g(x) ≥ 0  — content kam se kam zero")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 5.2)} d={arrowD(300, 204, 500, 204)} stroke={INK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 5.7)} d="M 400 204 H 494" stroke={GREEN_DARK} sw={4.5} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 6.1)}>
        <Circle cx={400} cy={204} r={5} fill={GREEN_DARK} />
        <T x={400} y={224} size={11.5} fill={INK} weight={700}>0</T>
        <T x={508} y={209} size={11.5} fill={INK} weight={700} anchor="start">g</T>
      </Fade>

      {/* ═══════════ beat 2 — ③ a root in a denominator, ④ a log ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={44} y={244} size={12.5} fill={AMBER_DARK} weight={800} anchor="start">
          {t("③  root in a denominator  1/√( g(x) )",
             "③  denominator mein root  1/√( g(x) )")}
        </T>
        <T x={44} y={268} size={13} fill={RED} weight={800} anchor="start">
          {t("g(x) > 0  — strictly greater", "g(x) > 0  — strictly zero se bada")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.2)} d={arrowD(300, 252, 500, 252)} stroke={INK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 1.7)} d="M 400 252 H 494" stroke={GREEN_DARK} sw={4.5} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 2.1)}>
        <Circle cx={400} cy={252} r={5} fill={PAPER} stroke={RED} strokeWidth={2} />
        <T x={400} y={272} size={11.5} fill={INK} weight={700}>0</T>
        <T x={508} y={257} size={11.5} fill={INK} weight={700} anchor="start">g</T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={44} y={292} size={12.5} fill={AMBER_DARK} weight={800} anchor="start">
          ④  logarithm   log( g(x) )
        </T>
        {/* the Hinglish line carries the comparand ("zero se") and is the longer of
            the two, so it is set a step smaller to stay clear of the number line at x=300 */}
        <T x={44} y={316} size={en ? 13 : 11.5} fill={RED} weight={800} anchor="start">
          {t("g(x) > 0  — argument > 0 strictly", "g(x) > 0  — argument strictly zero se bada")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 5)} d={arrowD(300, 300, 500, 300)} stroke={INK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 5.5)} d="M 400 300 H 494" stroke={GREEN_DARK} sw={4.5} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 5.9)}>
        <Circle cx={400} cy={300} r={5} fill={PAPER} stroke={RED} strokeWidth={2} />
        <T x={400} y={318} size={11.5} fill={INK} weight={700}>0</T>
        <T x={508} y={305} size={11.5} fill={INK} weight={700} anchor="start">g</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 7.2)}>
        <T x={400} y={336} size={11.5} fill={RED} weight={800}>
          {t("open circle — 0 is excluded", "open circle — 0 excluded hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — how to read the right-hand column ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        {/* beat 3 speaks only of the standard ranges being worth memorising —
            the blue bars do not exist until beat 4, so this line cannot point
            at them */}
        <T x={564} y={134} size={12} fill={MUTED} weight={700} anchor="start">
          {t("the standard ranges — commit them to memory, never re-derive",
             "standard ranges — yaad kar lo, kabhi dobara derive mat karo")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — the five standard ranges, plotted ═══════════ */}
      {/* x² */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={640} y={154} size={12.5} fill={AMBER_DARK} weight={800}>x²  →  [0, ∞)</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.5)} d={arrowD(588, 214, 692, 214)} stroke={INK} sw={1.8} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 0.8)} d={arrowD(640, 226, 640, 164)} stroke={INK} sw={1.8} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 1.1)} d={SQ_D} stroke={AMBER_DARK} sw={2.4} dur={0.6} />
      <Draw on={beat >= 4} delay={dl(4, 1.7)} d={arrowD(582, 214, 582, 168)} stroke={BLUE} sw={3.5} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <Circle cx={582} cy={214} r={4} fill={BLUE} />
      </Fade>
      {/* | x | */}
      <Fade on={beat >= 4} delay={dl(4, 2.6)}>
        <T x={804} y={154} size={12.5} fill={AMBER_DARK} weight={800}>| x |  →  [0, ∞)</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 2.9)} d={arrowD(752, 214, 856, 214)} stroke={INK} sw={1.8} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 3.2)} d={arrowD(804, 226, 804, 164)} stroke={INK} sw={1.8} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 3.5)} d={ABS_D} stroke={AMBER_DARK} sw={2.4} dur={0.6} />
      <Draw on={beat >= 4} delay={dl(4, 4.1)} d={arrowD(746, 214, 746, 168)} stroke={BLUE} sw={3.5} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 4.4)}>
        <Circle cx={746} cy={214} r={4} fill={BLUE} />
      </Fade>
      {/* e^x */}
      <Fade on={beat >= 4} delay={dl(4, 5)}>
        <T x={968} y={154} size={12.5} fill={AMBER_DARK} weight={800}>e^x  →  (0, ∞)</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 5.3)} d={arrowD(916, 214, 1020, 214)} stroke={INK} sw={1.8} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 5.6)} d={arrowD(968, 226, 968, 164)} stroke={INK} sw={1.8} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 5.9)} d={EXP_D} stroke={AMBER_DARK} sw={2.4} dur={0.6} />
      <Draw on={beat >= 4} delay={dl(4, 6.5)} d={arrowD(910, 210, 910, 168)} stroke={BLUE} sw={3.5} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 6.8)}>
        <Circle cx={910} cy={214} r={4} fill={PAPER} stroke={BLUE} strokeWidth={2} />
      </Fade>
      {/* ln x */}
      <Fade on={beat >= 4} delay={dl(4, 7.6)}>
        <T x={650} y={252} size={12.5} fill={AMBER_DARK} weight={800}>ln x  →  all of R</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 7.9)} d={arrowD(596, 306, 704, 306)} stroke={INK} sw={1.8} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 8.2)} d={arrowD(632, 344, 632, 264)} stroke={INK} sw={1.8} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 8.5)} d={LN_D} stroke={AMBER_DARK} sw={2.4} dur={0.7} />
      {/* both arrows leave the SAME origin y = 306 — the bar is unbroken, ln's range is all of R */}
      <Draw on={beat >= 4} delay={dl(4, 9.2)} d={arrowD(574, 306, 574, 268)} stroke={BLUE} sw={3.5} dur={0.3} />
      <Draw on={beat >= 4} delay={dl(4, 9.5)} d={arrowD(574, 306, 574, 344)} stroke={BLUE} sw={3.5} dur={0.3} />
      {/* sin x, cos x */}
      <Fade on={beat >= 4} delay={dl(4, 10.2)}>
        <T x={930} y={252} size={12.5} fill={AMBER_DARK} weight={800}>sin x, cos x  →  [−1, 1]</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 10.5)} d={arrowD(828, 306, 1032, 306)} stroke={INK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 4} delay={dl(4, 10.8)} d={arrowD(852, 344, 852, 268)} stroke={INK} sw={1.8} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 11.1)} d={SIN_D} stroke={AMBER_DARK} sw={2.4} dur={0.8} />
      <Draw on={beat >= 4} delay={dl(4, 11.7)} d={COS_D} stroke={AMBER} sw={2.2} dur={0.8} />
      <Draw on={beat >= 4} delay={dl(4, 12.4)} d="M 816 280 V 332" stroke={BLUE} sw={4} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 12.7)}>
        <Circle cx={816} cy={280} r={4} fill={BLUE} />
        <Circle cx={816} cy={332} r={4} fill={BLUE} />
      </Fade>
      {/* the colour key, in the empty gap between the ln plot (x-axis ends 704)
          and the sin/cos plot (x-axis starts 828), and only once the bars are
          actually on the board */}
      <Fade on={beat >= 4} delay={dl(4, 13.1)}>
        <T x={765} y={304} size={11} fill={BLUE} weight={800}>blue bar = range</T>
      </Fade>

      {/* ═══════════ beat 5 — the rational shortcut ═══════════ */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M 40 352 H 1044" stroke={MUTED} sw={1.2} dur={0.8} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={40} y={376} size={13.5} fill={RED} weight={800} anchor="start">
          {t("⑤ shortcut: the rational  (ax + b)/(cx + d)",
             "⑤ shortcut: rational  (ax + b)/(cx + d)")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={40} y={400} size={12.5} fill={INK} weight={700} anchor="start">
          {t("range = all of R except a single value",
             "range = ek single value ko chhodkar saara R")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 3)} d={arrowD(60, 560, 356, 560)} stroke={INK} sw={2} dur={0.6} />
      <Draw on={beat >= 5} delay={dl(5, 3.4)} d={arrowD(90, 578, 90, 448)} stroke={INK} sw={2} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 3.9)}>
        <T x={362} y={565} size={12} fill={INK} weight={800} anchor="start">x</T>
        <T x={100} y={452} size={12} fill={INK} weight={800} anchor="start">y</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 4.3)} d={HYP_R} stroke={AMBER_DARK} sw={2.6} dur={0.9} />
      <Draw on={beat >= 5} delay={dl(5, 5.2)} d={HYP_L} stroke={AMBER_DARK} sw={2.6} dur={0.9} />

      {/* ═══════════ beat 6 — that value is a/c, the horizontal asymptote ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={40} y={424} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("that value is a/c — the horizontal asymptote",
             "wo value hai a/c — horizontal asymptote")}
        </T>
      </Fade>
      {/* only the HORIZONTAL asymptote is drawn: y = a/c is the one the voice
          names. The vertical asymptote x = −d/c is a domain fact this segment
          never speaks, so it is not on the board. */}
      <Fade on={beat >= 6} delay={dl(6, 1.4)}>
        <Line x1={102} y1={505} x2={356} y2={505} stroke={RED} strokeWidth={1.6} strokeDasharray="7 6" />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.4)}>
        <T x={364} y={500} size={12.5} fill={RED} weight={800} anchor="start">y = a/c</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3.4)}>
        <Circle cx={90} cy={505} r={5} fill={PAPER} stroke={RED} strokeWidth={2} />
        <T x={78} y={510} size={12.5} fill={RED} weight={900} anchor="end">a/c</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5)}>
        <T x={364} y={522} size={11.5} fill={RED} weight={700} anchor="start">
          {t("approached, never reached", "paas jaata hai, pahunchta nahin")}
        </T>
      </Fade>

      {/* ═══════════ beat 7 — quadratic over quadratic: force D ≥ 0 ═══════════ */}
      <Fade on={beat >= 7} delay={dl7(0.2)}>
        <T x={590} y={376} size={13.5} fill={RED} weight={800} anchor="start">
          {t("⑥ quadratic over quadratic — do not guess",
             "⑥ quadratic upon quadratic — guess mat karo")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl7(1)}>
        <T x={590} y={404} size={13} fill={AMBER_DARK} weight={800} anchor="start">
          y = (quadratic) / (quadratic)
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl7(2)}>
        <T x={590} y={430} size={13} fill={INK} weight={700} anchor="start">
          {t("cross-multiply ⇒ a quadratic in x = 0",
             "cross-multiply ⇒ x mein quadratic = 0")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl7(3)}>
        <T x={590} y={456} size={15} fill={GREEN_DARK} weight={900} anchor="start">force  D ≥ 0</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl7(3.8)}>
        <T x={590} y={480} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("y is in the range exactly when a real x exists",
             "y range mein tabhi jab real x exist kare")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl7(4.8)}>
        <T x={700} y={508} size={11.5} fill={GREEN_DARK} weight={800}>
          {t("D ≥ 0 — y IS in the range", "D ≥ 0 — y range mein hai")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl7(5.2)} d={arrowD(628, 562, 776, 562)} stroke={INK} sw={1.8} dur={0.4} />
      <Draw on={beat >= 7} delay={dl7(5.5)} d={PAR_HIT} stroke={AMBER_DARK} sw={2.4} dur={0.6} />
      <Fade on={beat >= 7} delay={dl7(6.2)}>
        <Circle cx={661.3} cy={562} r={4} fill={GREEN_DARK} />
        <Circle cx={738.7} cy={562} r={4} fill={GREEN_DARK} />
      </Fade>
      <Fade on={beat >= 7} delay={dl7(6.9)}>
        <T x={900} y={508} size={11.5} fill={RED} weight={800}>
          {t("D < 0 — y is NOT in the range", "D < 0 — y range mein nahin")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl7(7.3)} d={arrowD(830, 562, 970, 562)} stroke={INK} sw={1.8} dur={0.4} />
      <Draw on={beat >= 7} delay={dl7(7.6)} d={PAR_MISS} stroke={AMBER_DARK} sw={2.4} dur={0.6} />
      <Fade on={beat >= 7} delay={dl7(8.3)}>
        {/* the vertex IS on the curve; what is missing is the axis crossing, so the
            hollow marker sits on the axis where a root would be — mirroring the two
            filled roots of PAR_HIT */}
        <Line x1={900} y1={548} x2={900} y2={556} stroke={RED} strokeWidth={1.8} strokeDasharray="4 4" />
        <Circle cx={900} cy={562} r={4} fill={PAPER} stroke={RED} strokeWidth={2} />
      </Fade>
    </Scene>
  );
}
