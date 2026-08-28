/**
 * M12Ch01 · Section 53 — "Your complete Relations and Functions toolkit"
 * Subtopic: Chapter Close
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * A revision board is the easiest place in the corpus to ship a wall of text,
 * so every panel here carries the picture the formula came from:
 *   · relations   — the n × n grid of A × A, its diagonal (what "reflexive"
 *                   costs) and one mirrored pair (what "symmetric" pairs up);
 *   · functions   — the actual arrow diagram from an n-set to an m-set;
 *   · composition — X → Y → Z with f and g above and f⁻¹, g⁻¹ running back
 *                   underneath, which is the order-reversal, drawn;
 *   · range       — the linear-over-linear rational plotted with its
 *                   horizontal asymptote y = a / c, the value it never takes;
 *   · standards   — five real mini graphs: | x |, { x }, eˣ, ⌊x⌋ + ⌊−x⌋, and
 *                   sgn x · | x |;
 *   · symmetry    — a periodic wave with its period T bracketed;
 *   · f-equations — the four patterns with the curve each one produces.
 *
 * Grid
 *   title band      y  30– 92   (rule at y = 92)
 *   row 1           y  98–308   x 40–352 · 380–686 · 714–1044 (dividers 366, 700)
 *   row 2           y 316–446   x 40–520 · 540–1044 (rule 314, divider 530)
 *   row 3           y 456–562   x 40–520 · 540–1044 (rule 454, divider 530)
 *   closing band    y 570–596
 *
 * Beat map (9 segments, gates 0..8 — every beat used):
 *  0  "one board, fast revision"           title + underline + subtitle and
 *                                          the whole board frame ruled out
 *  1  "the four relation counts"           A × A grid, diagonal shaded, one
 *                                          mirrored pair, the four counts
 *  2  "the four function counts"           n-set → m-set arrow diagram + the
 *                                          four counts incl. inclusion–exclusion
 *  3  "composition and inverse"            X → Y → Z, f and g forward,
 *                                          g⁻¹ and f⁻¹ back, the three facts
 *  4  "domain jams and the rational range" the three jams + the hyperbola with
 *                                          its asymptote y = a / c
 *  5  "the standard functions"             five mini graphs with their facts
 *  6  "even part, odd part, period"        the two half-formulas + a wave with
 *                                          period T marked
 *  7  "the functional equations"           four patterns → four curves
 *  8  "one final glance"                   closing rule and the two closing lines
 *
 * Visual vocabulary (shared with Sections 52 and 54)
 *   axes and number lines INK with drawn arrowheads · the object under
 *   discussion AMBER_DARK · results, survivors and answers GREEN / GREEN_DARK ·
 *   headings and warnings RED · asides MUTED.
 */

import React from "react";
import { Circle, Line, Rect, TSpan } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD,
  INK, MUTED, AMBER, AMBER_DARK, GREEN, GREEN_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

/* ------------------------------------------------------------------ */
/* a superscripted power, e.g. 2^(n² − n)                              */
/* ------------------------------------------------------------------ */
function Pw({ b, e, size }: { b: string; e: string; size: number }) {
  return (
    <>
      <TSpan>{b}</TSpan>
      <TSpan fontSize={size * 0.66} dy={-size * 0.38}>{e}</TSpan>
    </>
  );
}

/* ---- beat 1 : the A × A grid ---- */
const GX = 48;
const GY = 132;
const GC = 20;
const CELLS = [0, 1, 2, 3];

/* ---- beat 2 : the arrow diagram ---- */
const DOM_DOTS = [148, 168, 188];
const COD_DOTS = [144, 160, 176, 192];

/* ---- beat 3 : the three sets ---- */
const SETS: [number, string][] = [[760, "X"], [880, "Y"], [1000, "Z"]];

/* ---- beat 5 : the five standard functions ---- */
const STD_CX = [590, 691, 792, 893, 994];

/* ---- beat 7 : the four functional-equation patterns ---- */
const FE_CX = [603, 729, 855, 981];
const FE_FORM = [
  "f (x+y) = f (x) + f (y)",
  "f (x+y) = f (x) · f (y)",
  "f (x y) = f (x) + f (y)",
  "f (x y) = f (x) · f (y)",
];
const FE_SOL = ["f (x) = k x", "f (x) = aˣ", "f (x) = k log x", "f (x) = xⁿ"];
const FE_CURVE = (cx: number, i: number) =>
  [
    `M ${cx - 24} 560 L ${cx + 24} 546`,
    `M ${cx - 24} 559 C ${cx - 8} 558, ${cx + 4} 554, ${cx + 24} 546`,
    `M ${cx - 24} 558 C ${cx - 16} 550, ${cx - 2} 547, ${cx + 24} 546`,
    `M ${cx - 24} 560 C ${cx - 4} 560, ${cx + 8} 556, ${cx + 24} 546`,
  ][i];

export default function M12Ch01Sec53({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const stdName = ["| x |", "{ x }", "eˣ", "⌊x⌋ + ⌊−x⌋", "sgn x · | x |"];
  const stdFact = [
    "[ 0, ∞ )",
    "[ 0, 1 )",
    t("always > 0", "hamesha > 0"),
    t("= −1 off ℤ", "= −1, ℤ ke bahar"),
    "= x",
  ];

  return (
    <Scene>
      {/* ═══════════ beat 0 — the board itself ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={48} size={24} fill={RED} script>
          {t("Your complete Relations and Functions toolkit",
             "Tumhara poora Relations and Functions toolkit")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1)}
        d="M 300 64 C 460 60, 650 68, 780 62" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.8)}>
        <T x={540} y={82} size={12.5} fill={MUTED} script>
          {t("one board, everything the chapter taught — a restatement for fast revision, not new teaching",
             "ek board, jo kuch chapter ne sikhaya — fast revision ke liye restatement, nayi teaching nahi")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.6)} d="M 40 92 H 1044" stroke={MUTED} sw={1.2} dur={0.9} />
      <Draw on={beat >= 0} delay={dl(0, 3.3)} d="M 366 98 V 308 M 700 98 V 308" stroke={MUTED} sw={1} dur={0.7} />
      <Draw on={beat >= 0} delay={dl(0, 3.9)} d="M 40 314 H 1044" stroke={MUTED} sw={1.1} dur={0.8} />
      <Draw on={beat >= 0} delay={dl(0, 4.4)} d="M 530 320 V 446 M 530 460 V 562" stroke={MUTED} sw={1} dur={0.7} />
      <Draw on={beat >= 0} delay={dl(0, 4.9)} d="M 40 454 H 1044" stroke={MUTED} sw={1.1} dur={0.8} />

      {/* ═══════════ beat 1 — relations: the four counts ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={44} y={116} size={13} fill={RED} weight={800} anchor="start">
          {t("RELATIONS on a set of n", "RELATIONS, n elements ke set pe")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        {CELLS.map((r) =>
          CELLS.map((c) => (
            <Rect key={`g${r}-${c}`} x={GX + c * GC} y={GY + r * GC} width={GC} height={GC}
              fill="none" stroke={MUTED} strokeWidth={1} />
          ))
        )}
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        {CELLS.map((k) => (
          <Rect key={`dg${k}`} x={GX + k * GC + 1} y={GY + k * GC + 1} width={GC - 2} height={GC - 2}
            fill={AMBER} opacity={0.5} />
        ))}
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.3)}>
        <Rect x={GX + 3 * GC + 1} y={GY + GC + 1} width={GC - 2} height={GC - 2} fill={GREEN} opacity={0.4} />
        <Rect x={GX + GC + 1} y={GY + 3 * GC + 1} width={GC - 2} height={GC - 2} fill={GREEN} opacity={0.4} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.8)} d={arrowD(112, 168, 84, 196)} stroke={GREEN_DARK} sw={1.8} dur={0.35} />
      <Draw on={beat >= 1} delay={dl(1, 3.1)} d={arrowD(84, 196, 112, 168)} stroke={GREEN_DARK} sw={1.8} dur={0.35} />
      <Fade on={beat >= 1} delay={dl(1, 3.5)}>
        <T x={88} y={228} size={11} fill={MUTED} weight={700}>
          {t("A × A — n² cells", "A × A — n² cells")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.2)}>
        <T x={144} y={150} size={12} fill={MUTED} weight={700} anchor="start">
          {t("all relations", "kul relations")}
        </T>
        <T x={244} y={150} size={13} fill={INK} weight={900} anchor="start">
          <Pw b="2" e="n²" size={13} />
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5.6)}>
        <T x={144} y={174} size={12} fill={MUTED} weight={700} anchor="start">
          {t("reflexive", "reflexive")}
        </T>
        <T x={244} y={174} size={13} fill={INK} weight={900} anchor="start">
          <Pw b="2" e="n² − n" size={13} />
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 7.4)}>
        <T x={144} y={198} size={12} fill={MUTED} weight={700} anchor="start">
          {t("symmetric", "symmetric")}
        </T>
        <T x={244} y={198} size={13} fill={INK} weight={900} anchor="start">
          <Pw b="2" e="n(n+1)/2" size={13} />
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 9.6)}>
        <T x={144} y={222} size={12} fill={MUTED} weight={700} anchor="start">
          {t("equivalence", "equivalence")}
        </T>
        <T x={244} y={222} size={13} fill={GREEN_DARK} weight={900} anchor="start">Bₙ</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 11)}>
        <T x={44} y={252} size={11.5} fill={MUTED} weight={700} anchor="start">
          {t("the n-th Bell number counts the partitions",
             "n-th Bell number partitions ginta hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — functions: the four counts ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={384} y={116} size={13} fill={RED} weight={800} anchor="start">
          {t("FUNCTIONS from n to m", "FUNCTIONS, n se m")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.9)}
        d="M 400 168 A 24 32 0 1 1 448 168 A 24 32 0 1 1 400 168" stroke={INK} sw={1.7} dur={0.7} />
      <Draw on={beat >= 2} delay={dl(2, 1.4)}
        d="M 488 168 A 24 32 0 1 1 536 168 A 24 32 0 1 1 488 168" stroke={INK} sw={1.7} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        {DOM_DOTS.map((y) => (
          <Circle key={`dd${y}`} cx={424} cy={y} r={3.4} fill={INK} />
        ))}
        {COD_DOTS.map((y) => (
          <Circle key={`cd${y}`} cx={512} cy={y} r={3.4} fill={INK} />
        ))}
      </Fade>
      {DOM_DOTS.map((y, i) => (
        <Draw key={`ar${y}`} on={beat >= 2} delay={dl(2, 2.4 + i * 0.3)}
          d={arrowD(430, y, 504, COD_DOTS[i])} stroke={AMBER_DARK} sw={1.7} dur={0.35} />
      ))}
      <Fade on={beat >= 2} delay={dl(2, 3.6)}>
        <T x={424} y={216} size={12} fill={INK} weight={900}>n</T>
        <T x={512} y={216} size={12} fill={INK} weight={900}>m</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.4)}>
        <T x={384} y={236} size={12} fill={MUTED} weight={700} anchor="start">
          {t("all functions", "saare functions")}
        </T>
        <T x={496} y={236} size={13} fill={INK} weight={900} anchor="start">
          <Pw b="m" e="n" size={13} />
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.6)}>
        <T x={384} y={258} size={12} fill={MUTED} weight={700} anchor="start">
          {t("one-one", "one-one")}
        </T>
        <T x={496} y={258} size={13} fill={INK} weight={900} anchor="start">ᵐPₙ</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 7)}>
        <T x={384} y={280} size={12} fill={MUTED} weight={700} anchor="start">
          {t("bijective", "bijective")}
        </T>
        <T x={496} y={280} size={13} fill={INK} weight={900} anchor="start">n !</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8.6)}>
        <T x={384} y={302} size={12} fill={MUTED} weight={700} anchor="start">
          {t("onto", "onto")}
        </T>
        <T x={496} y={302} size={12.5} fill={GREEN_DARK} weight={900} anchor="start">
          Σ (−1)ʳ ᵐCᵣ (m − r)ⁿ
        </T>
      </Fade>

      {/* ═══════════ beat 3 — composition and inverse ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={718} y={116} size={13} fill={RED} weight={800} anchor="start">
          {t("COMPOSITION & INVERSE", "COMPOSITION aur INVERSE")}
        </T>
      </Fade>
      {SETS.map(([cx], i) => (
        <Draw key={`st${cx}`} on={beat >= 3} delay={dl(3, 0.8 + i * 0.35)}
          d={`M ${cx - 26} 186 A 26 34 0 1 1 ${cx + 26} 186 A 26 34 0 1 1 ${cx - 26} 186`}
          stroke={INK} sw={1.7} dur={0.6} />
      ))}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        {SETS.map(([cx, name]) => (
          <T key={`sn${cx}`} x={cx} y={191} size={14} fill={INK} weight={900}>{name}</T>
        ))}
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 2.6)} d={arrowD(788, 172, 852, 172)} stroke={AMBER_DARK} sw={2} dur={0.35} />
      <Draw on={beat >= 3} delay={dl(3, 2.9)} d={arrowD(908, 172, 972, 172)} stroke={AMBER_DARK} sw={2} dur={0.35} />
      <Fade on={beat >= 3} delay={dl(3, 3.2)}>
        <T x={820} y={162} size={12} fill={AMBER_DARK} weight={900}>f</T>
        <T x={940} y={162} size={12} fill={AMBER_DARK} weight={900}>g</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 4)} d={arrowD(972, 200, 908, 200)} stroke={GREEN_DARK} sw={2} dur={0.35} />
      <Draw on={beat >= 3} delay={dl(3, 4.3)} d={arrowD(852, 200, 788, 200)} stroke={GREEN_DARK} sw={2} dur={0.35} />
      <Fade on={beat >= 3} delay={dl(3, 4.7)}>
        <T x={940} y={220} size={12} fill={GREEN_DARK} weight={900}>g⁻¹</T>
        <T x={820} y={220} size={12} fill={GREEN_DARK} weight={900}>f⁻¹</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5.6)}>
        <T x={718} y={254} size={12.5} fill={INK} weight={800} anchor="start">
          ( g ∘ f ) ( x ) = g ( f ( x ) )
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 7.6)}>
        <T x={718} y={278} size={12.5} fill={INK} weight={800} anchor="start">
          ( g ∘ f )⁻¹ = f⁻¹ ∘ g⁻¹
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 9.6)}>
        <T x={718} y={302} size={12.5} fill={GREEN_DARK} weight={900} anchor="start">
          {t("invertible  ⇔  bijective", "invertible  ⇔  bijective")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — domain jams and the rational range ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={44} y={334} size={13} fill={RED} weight={800} anchor="start">
          {t("DOMAIN & RANGE", "DOMAIN aur RANGE")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={44} y={360} size={12.5} fill={INK} weight={800} anchor="start">
          {t("denominator ≠ 0", "denominator ≠ 0")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.2)}>
        <T x={44} y={384} size={12.5} fill={INK} weight={800} anchor="start">
          {t("even root ≥ 0", "even root ≥ 0")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.4)}>
        <T x={44} y={408} size={12.5} fill={INK} weight={800} anchor="start">
          {t("log ( · ) strictly > 0", "log ( · ) strictly > 0")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 4.4)}
        d={`${arrowD(258, 400, 512, 400)} ${arrowD(320, 424, 320, 344)}`}
        stroke={INK} sw={1.7} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 5.2)}>
        <Line x1={380} y1={344} x2={380} y2={424} stroke={MUTED} strokeWidth={1.4} strokeDasharray="6 5" />
        <Line x1={258} y1={368} x2={512} y2={368} stroke={RED} strokeWidth={1.4} strokeDasharray="6 5" />
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 5.8)} d="M 388 346 C 402 358, 430 363, 512 365" stroke={AMBER_DARK} sw={2.6} dur={0.6} />
      <Draw on={beat >= 4} delay={dl(4, 6.3)} d="M 258 372 C 320 374, 362 384, 374 424" stroke={AMBER_DARK} sw={2.6} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 6.9)}>
        <T x={258} y={356} size={12} fill={RED} weight={800} anchor="start">y = a / c</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8.2)}>
        <T x={380} y={440} size={12.5} fill={GREEN_DARK} weight={900} anchor="start">
          {"range = ℝ \\ { a / c }"}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — the five standard functions ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={544} y={334} size={13} fill={RED} weight={800} anchor="start">
          {t("STANDARD FUNCTIONS", "STANDARD FUNCTIONS")}
        </T>
      </Fade>
      {STD_CX.map((ox, i) => (
        <Fade key={`sn${ox}`} on={beat >= 5} delay={dl(5, 0.8 + i * 1.6)}>
          <T x={ox} y={354} size={11.5} fill={AMBER_DARK} weight={900}>{stdName[i]}</T>
        </Fade>
      ))}
      {/* axes for each mini plot */}
      <Draw on={beat >= 5} delay={dl(5, 1.1)} d="M 556 404 H 624 M 590 410 V 372" stroke={INK} sw={1.4} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 2.7)} d="M 655 404 H 727 M 691 410 V 372" stroke={INK} sw={1.4} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 4.3)} d="M 758 404 H 826 M 792 410 V 366" stroke={INK} sw={1.4} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 5.9)} d="M 857 392 H 929 M 893 410 V 366" stroke={INK} sw={1.4} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 7.5)} d="M 960 396 H 1028 M 994 414 V 368" stroke={INK} sw={1.4} dur={0.4} />
      {/* the five curves */}
      <Draw on={beat >= 5} delay={dl(5, 1.4)} d="M 562 380 L 590 404 L 618 380" stroke={AMBER_DARK} sw={2.6} dur={0.6} />
      <Draw on={beat >= 5} delay={dl(5, 3)}
        d="M 655 404 L 673 384 M 673 404 L 691 384 M 691 404 L 709 384 M 709 404 L 727 384"
        stroke={AMBER_DARK} sw={2.4} dur={0.7} />
      <Draw on={beat >= 5} delay={dl(5, 4.6)} d="M 758 400 C 780 398, 798 390, 816 370" stroke={AMBER_DARK} sw={2.6} dur={0.6} />
      <Draw on={beat >= 5} delay={dl(5, 6.2)} d="M 871 406 H 891 M 895 406 H 915" stroke={AMBER_DARK} sw={2.6} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 6.6)}>
        {[869, 893, 917].map((x) => (
          <Circle key={`iz${x}`} cx={x} cy={392} r={3.4} fill={GREEN_DARK} />
        ))}
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 7.8)} d="M 970 420 L 1018 372" stroke={AMBER_DARK} sw={2.6} dur={0.6} />
      {STD_CX.map((ox, i) => (
        <Fade key={`sf${ox}`} on={beat >= 5} delay={dl(5, 2 + i * 1.6)}>
          <T x={ox} y={442} size={11} fill={GREEN_DARK} weight={800}>{stdFact[i]}</T>
        </Fade>
      ))}

      {/* ═══════════ beat 6 — symmetry and period ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={44} y={476} size={13} fill={RED} weight={800} anchor="start">
          {t("SYMMETRY & PERIOD", "SYMMETRY aur PERIOD")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={44} y={502} size={12.5} fill={INK} weight={800} anchor="start">
          {"even part  =  ½ [ f (x) + f (−x) ]"}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3)}>
        <T x={44} y={526} size={12.5} fill={INK} weight={800} anchor="start">
          {"odd part   =  ½ [ f (x) − f (−x) ]"}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5.4)}>
        <T x={44} y={550} size={12.5} fill={GREEN_DARK} weight={900} anchor="start">
          {t("f ( a x + b )  has period  T / | a |", "f ( a x + b )  ka period  T / | a |")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 6.2)} d="M 288 516 H 512" stroke={INK} sw={1.4} dur={0.5} />
      <Draw on={beat >= 6} delay={dl(6, 6.6)}
        d="M 288 516 C 300 490, 320 490, 332 516 C 344 542, 364 542, 376 516 C 388 490, 408 490, 420 516 C 432 542, 452 542, 464 516"
        stroke={AMBER_DARK} sw={2.6} dur={1.1} />
      <Draw on={beat >= 6} delay={dl(6, 7.8)} d={arrowD(332, 486, 288, 486)} stroke={GREEN_DARK} sw={1.8} dur={0.3} />
      <Draw on={beat >= 6} delay={dl(6, 8)} d={arrowD(332, 486, 376, 486)} stroke={GREEN_DARK} sw={1.8} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 8.4)}>
        <T x={332} y={472} size={13} fill={GREEN_DARK} weight={900}>T</T>
      </Fade>

      {/* ═══════════ beat 7 — the functional equations ═══════════ */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={544} y={476} size={13} fill={RED} weight={800} anchor="start">
          {t("FUNCTIONAL EQUATIONS", "FUNCTIONAL EQUATIONS")}
        </T>
      </Fade>
      {FE_CX.map((cx, i) => (
        <Fade key={`fe${cx}`} on={beat >= 7} delay={dl(7, 0.8 + i * 1.5)}>
          <T x={cx} y={498} size={11} fill={INK} weight={800}>{FE_FORM[i]}</T>
        </Fade>
      ))}
      {FE_CX.map((cx, i) => (
        <Draw key={`fa${cx}`} on={beat >= 7} delay={dl(7, 1.2 + i * 1.5)}
          d={arrowD(cx, 507, cx, 519)} stroke={AMBER_DARK} sw={1.8} dur={0.25} />
      ))}
      {FE_CX.map((cx, i) => (
        <Fade key={`fs${cx}`} on={beat >= 7} delay={dl(7, 1.5 + i * 1.5)}>
          <T x={cx} y={538} size={13} fill={GREEN_DARK} weight={900}>{FE_SOL[i]}</T>
        </Fade>
      ))}
      {FE_CX.map((cx, i) => (
        <Draw key={`fc${cx}`} on={beat >= 7} delay={dl(7, 1.9 + i * 1.5)}
          d={FE_CURVE(cx, i)} stroke={AMBER_DARK} sw={2.4} dur={0.4} />
      ))}

      {/* ═══════════ beat 8 — one final glance ═══════════ */}
      <Draw on={beat >= 8} delay={dl(8, 0.1)} d="M 40 570 H 1044" stroke={MUTED} sw={1.3} dur={0.9} />
      <Draw on={beat >= 8} delay={dl(8, 0.9)} d="M 44 586 L 52 594 L 68 574" stroke={GREEN_DARK} sw={2.6} dur={0.35} />
      <Fade on={beat >= 8} delay={dl(8, 1.3)}>
        <T x={80} y={592} size={12.5} fill={RED} weight={800} anchor="start">
          {t("Keep this toolkit for one final glance before the exam",
             "Is toolkit ko exam se pehle ek final glance ke liye rakho")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 3.4)}>
        <T x={1044} y={592} size={12} fill={MUTED} weight={700} anchor="end">
          {t("every formula here was taught in full earlier — this is only the consolidated recall",
             "yahan har formula pehle poori tarah padhaya gaya tha — yeh sirf consolidated recall hai")}
        </T>
      </Fade>
    </Scene>
  );
}
