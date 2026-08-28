/**
 * M12Ch01 · Section 12 — "Definitions, special functions, and set-dependence"
 * Subtopic: Types of Functions  (closing section of the subtopic)
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * The voice pins down the two negations, banks three structural shortcuts
 * (identity / constant, odd vs even degree, strict monotonicity), and then
 * lands the trap: the TYPE of a function is a property of the declared sets,
 * not of the formula. x² is shown changing character three times.
 *
 * A summary section is exactly where a board turns into a bulleted list, so
 * every claim here is a figure: the two negations are a collapsing mapping and
 * a nested range-inside-B rectangle; identity and constant are real plotted
 * graphs with the constant map's inputs arrowed up onto one height; odd vs even
 * degree are plotted x³ and x⁴ with the y-coverage marked on each y-axis; the
 * monotone shortcut is a rising curve met once by a horizontal line; and the
 * climax is three plots of the SAME parabola whose only difference is the sets
 * written above them.
 *
 * Grid
 *   title band            y 30–94   (full width)
 *   row 1 (y 102–342)     the two negations     x 40–380
 *                         special maps          x 410–700
 *                         real polynomials ℝ→ℝ  x 730–1044
 *   row 2 (y 356–596)     strict monotonicity   x 40–330
 *                         the set-dependence trap, three panels x 360–1044
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "pin the definitions down"               title + underline + subtitle + rule
 *  1  "the two negations"                      many-one collapse figure and the
 *                                              range ⊊ B nested rectangles
 *  2  "identity is bijective, constant is      two plotted graphs: y = x on its
 *      many-one and into if |B| > 1"           axes, and y = c with two inputs
 *                                              arrowed up to the same height
 *  3  "odd degree onto, even degree into"      plotted x³ with the whole y-axis
 *                                              marked covered, plotted x⁴ with
 *                                              y < 0 shaded as never hit
 *  4  "strictly monotonic ⇒ one-one"           a rising curve and one horizontal
 *                                              line meeting it exactly once
 *  5  "the type depends on the sets"           the trap header + the rule
 *  6  "x² : ℝ→ℝ, ℝ→[0,∞), [0,∞)→[0,∞)"        f(x) = x² named in the header band,
 *                                              then three panels of the same
 *                                              parabola with three verdicts —
 *                                              all cued inside ~5s, because the
 *                                              segment is only 5.8s in Hinglish
 *  7  "read the sets before you classify"      the codomain in each title ringed
 *                                              red + the closing line
 *
 * Visual vocabulary — shared with Sections 10 and 11:
 *   INK ovals, axes and dots · AMBER_DARK for the plotted function · GREEN /
 *   GREEN_DARK for what IS covered and for verdicts that pass · RED for the
 *   failing case, for what is never reached, and for headings · MUTED for
 *   supporting captions · CREAM / PAPER fills on empty board only.
 */

import React from "react";
import { Circle, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, ringD,
  INK, MUTED, AMBER_DARK, GREEN, GREEN_DARK, RED, PAPER,
  Scene,
} from '@/components/scenes/kit';

/** closed oval as a drawable path (set diagrams) */
const ovalD = (cx: number, cy: number, rx: number, ry: number) =>
  `M ${cx - rx} ${cy} A ${rx} ${ry} 0 1 1 ${cx + rx} ${cy} A ${rx} ${ry} 0 1 1 ${cx - rx} ${cy}`;

/** y = x^p sampled on a frame with origin (ox, oy) and scales sx, sy */
function powPath(
  ox: number, oy: number, sx: number, sy: number, p: number, x0: number, x1: number
): string {
  const pts: string[] = [];
  const n = 44;
  for (let i = 0; i <= n; i++) {
    const x = x0 + ((x1 - x0) * i) / n;
    pts.push(`${(ox + sx * x).toFixed(1)} ${(oy - sy * Math.pow(x, p)).toFixed(1)}`);
  }
  return `M ${pts.join(" L ")}`;
}

/* ---- beat 3 : odd vs even degree, two mini frames ---- */
const CUBIC = powPath(810, 240, 26, 11, 3, -1.7, 1.7);
const QUARTIC = powPath(970, 240, 26, 11, 4, -1.5, 1.5);
/** double-headed arrow marking the whole y-axis as covered (odd degree) */
const FULL_Y =
  "M 750 294 V 186 M 745 193 L 750 186 L 755 193 M 745 287 L 750 294 L 755 287";

/* ---- beat 4 : a strictly increasing curve ---- */
const RISING = "M 70 548 C 120 536, 150 500, 185 478 C 220 456, 265 440, 312 428";

/* ---- beat 6 : the same parabola, three declared frames ---- */
const PAN1 = powPath(476, 520, 30, 13, 2, -2.2, 2.2);
const PAN2 = powPath(696, 520, 30, 13, 2, -2.2, 2.2);
const PAN3 = powPath(916, 520, 30, 13, 2, 0, 2.2);

export default function M12Ch01Sec12({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — the framing ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Definitions, shortcuts, and the sets",
             "Definitions, shortcuts, aur wo sets")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.1)}
        d="M 322 62 C 470 58, 650 66, 758 60" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.9)}>
        <T x={540} y={82} size={12.5} fill={MUTED} script>
          {t("structural facts that turn many questions into one-liners",
             "structural facts jo kai questions ko one-liners bana dete hain")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.8)} d="M 40 94 H 1044" stroke={MUTED} sw={1.2} dur={1} />

      {/* ═══════════ beat 1 — the two negations ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={40} y={118} size={13.5} fill={RED} weight={800} anchor="start">
          {t("THE TWO NEGATIONS", "DO NEGATIONS")}
        </T>
      </Fade>
      {/* many-one: two distinct inputs, one shared output */}
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={40} y={142} size={12} fill={INK} weight={800} anchor="start">many-one</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.4)} d={ovalD(78, 200, 28, 38)} stroke={INK} sw={2} dur={0.7} />
      <Draw on={beat >= 1} delay={dl(1, 1.7)} d={ovalD(176, 200, 24, 38)} stroke={INK} sw={2} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <Circle cx={78} cy={182} r={5} fill={INK} />
        <Circle cx={78} cy={218} r={5} fill={INK} />
        <Circle cx={176} cy={200} r={6} fill={RED} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.6)} d={arrowD(88, 182, 165, 196)} stroke={RED} sw={2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 2.9)} d={arrowD(88, 218, 165, 204)} stroke={RED} sw={2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 3.4)}>
        <T x={120} y={262} size={11} fill={RED} weight={700}>
          {t("distinct inputs,", "alag inputs,")}
        </T>
        <T x={120} y={284} size={11} fill={RED} weight={700}>
          {t("same output", "same output")}
        </T>
      </Fade>
      {/* into: range is a strict subset of B */}
      <Fade on={beat >= 1} delay={dl(1, 4.4)}>
        <T x={230} y={142} size={12} fill={INK} weight={800} anchor="start">into</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 4.8)} d="M 240 168 H 370 V 244 H 240 Z"
        stroke={INK} sw={2} dur={0.7} fill={PAPER} />
      <Fade on={beat >= 1} delay={dl(1, 5.6)}>
        <Rect x={250} y={180} width={62} height={52} rx={6}
          fill={GREEN} fillOpacity={0.35} stroke={GREEN_DARK} strokeWidth={1.8} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6.2)}>
        <T x={362} y={186} size={13} fill={INK} weight={900} anchor="end">B</T>
        <T x={281} y={212} size={11.5} fill={GREEN_DARK} weight={800}>range</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 7)}>
        <T x={305} y={262} size={11} fill={RED} weight={700}>
          {t("range is a STRICT", "range B ka STRICT")}
        </T>
        <T x={305} y={284} size={11} fill={RED} weight={700}>
          {t("subset of B", "subset hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — the special maps ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={410} y={118} size={13.5} fill={RED} weight={800} anchor="start">
          {t("SPECIAL MAPS", "SPECIAL MAPS")}
        </T>
      </Fade>
      {/* identity */}
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={470} y={160} size={12} fill={INK} weight={800}>identity  f(x) = x</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.4)} d="M 408 240 H 532" stroke={INK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 1.7)} d="M 470 302 V 176" stroke={INK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 2.1)} d="M 414 296 L 526 184" stroke={AMBER_DARK} sw={2.6} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 2.9)}>
        <T x={470} y={320} size={11.5} fill={GREEN_DARK} weight={800}>
          {t("always bijective", "hamesha bijective")}
        </T>
      </Fade>
      {/* constant */}
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={620} y={160} size={12} fill={INK} weight={800}>constant  f(x) = c</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 4.5)} d="M 558 240 H 682" stroke={INK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 4.8)} d="M 620 302 V 176" stroke={INK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 5.2)} d="M 564 205 H 678" stroke={AMBER_DARK} sw={2.6} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 5.9)}>
        <T x={655} y={196} size={11} fill={AMBER_DARK} weight={800} anchor="start">y = c</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 6.3)} d={arrowD(570, 236, 570, 208)} stroke={RED} sw={1.9} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 6.6)} d={arrowD(668, 236, 668, 208)} stroke={RED} sw={1.9} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 7.2)}>
        <T x={620} y={320} size={11.5} fill={RED} weight={800}>
          {t("many-one (|A| > 1) · into (|B| > 1)", "many-one (|A| > 1) · into (|B| > 1)")}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — real polynomials ℝ → ℝ ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={730} y={118} size={13.5} fill={RED} weight={800} anchor="start">
          {t("REAL POLYNOMIALS ℝ → ℝ", "REAL POLYNOMIALS ℝ → ℝ")}
        </T>
      </Fade>
      {/* odd degree */}
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={810} y={160} size={12} fill={INK} weight={800}>odd degree  (x³)</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.4)} d="M 754 240 H 866" stroke={INK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 1.7)} d="M 810 302 V 178" stroke={INK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 2.1)} d={CUBIC} stroke={AMBER_DARK} sw={2.6} dur={1} />
      <Draw on={beat >= 3} delay={dl(3, 3.1)} d={FULL_Y} stroke={GREEN_DARK} sw={1.9} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 3.8)}>
        <T x={810} y={320} size={11.5} fill={GREEN_DARK} weight={800}>
          {t("forces ONTO", "ONTO force karta hai")}
        </T>
      </Fade>
      {/* even degree */}
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <T x={970} y={160} size={12} fill={INK} weight={800}>even degree  (x⁴)</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 5.5)} d="M 914 240 H 1026" stroke={INK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 5.8)} d="M 970 302 V 178" stroke={INK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 6.2)} d={QUARTIC} stroke={AMBER_DARK} sw={2.6} dur={1} />
      <Rect
        x={914} y={240} width={112} height={56}
        fill={RED} stroke="none"
        opacity={beat >= 3 ? 0.14 : 0}
      />
      <Fade on={beat >= 3} delay={dl(3, 7.8)}>
        <T x={970} y={272} size={10.5} fill={RED} weight={800}>
          {t("y < 0 never hit", "y < 0 kabhi nahin")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 8.6)}>
        <T x={970} y={320} size={11.5} fill={RED} weight={800}>
          {t("INTO — never onto", "INTO — onto kabhi nahin")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — strictly monotonic ⇒ one-one ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={40} y={372} size={13.5} fill={RED} weight={800} anchor="start">
          {t("STRICTLY MONOTONIC ⇒ ONE-ONE", "STRICTLY MONOTONIC ⇒ ONE-ONE")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={40} y={394} size={11.5} fill={MUTED} weight={700} anchor="start">
          {t("always rising or always falling", "hamesha rising ya hamesha falling")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.4)} d={arrowD(60, 530, 320, 530)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 4} delay={dl(4, 1.8)} d={arrowD(185, 548, 185, 418)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 4} delay={dl(4, 2.3)} d={RISING} stroke={AMBER_DARK} sw={2.8} dur={1.1} />
      <Fade on={beat >= 4} delay={dl(4, 3.4)}>
        <T x={316} y={414} size={11.5} fill={AMBER_DARK} weight={800} anchor="end">
          {t("strictly increasing", "hamesha increasing")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 3.9)} d="M 66 478 H 316" stroke="#0284c7" sw={2} dur={0.7} />
      <Fade on={beat >= 4} delay={dl(4, 4.6)}>
        <T x={64} y={468} size={11} fill="#0284c7" weight={800} anchor="start">y = k</T>
        <Circle cx={185} cy={478} r={5} fill={GREEN_DARK} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5.4)}>
        <T x={190} y={568} size={12} fill={GREEN_DARK} weight={800}>
          {t("never turns back ⇒ never repeats an output",
             "kabhi mudti nahin ⇒ output dobara nahin")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6.6)}>
        <T x={190} y={592} size={12} fill={INK} weight={700}>
          {t("so it is automatically one-one", "to yeh automatically one-one hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — the trap ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={360} y={372} size={13.5} fill={RED} weight={800} anchor="start">
          {t("THE TRAP — the sets decide, not the formula",
             "THE TRAP — sets decide karte hain, formula nahin")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <T x={360} y={394} size={11.5} fill={MUTED} weight={700} anchor="start">
          {t("the type depends on the declared domain and codomain",
             "type declared domain aur codomain par depend karta hai")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 2.4)} d="M 360 406 H 1040" stroke={MUTED} sw={1.1} dur={0.9} />

      {/* ═══════════ beat 6 — one formula, three answers ═══════════
           Segment 6 is short (8.02s en / 5.80s hi), so every cue below
           lands inside ~5.0s: the three verdicts must be on the board as
           the voice says them, not after the beat has moved on. */}
      <Fade on={beat >= 6} delay={dl(6, 0.1)}>
        <T x={770} y={372} size={14} fill={AMBER_DARK} weight={900}>f(x) = x²</T>
        <T x={1040} y={372} size={13} fill={GREEN_DARK} weight={800} anchor="end">
          {t("same formula — three answers", "same formula — teen answers")}
        </T>
      </Fade>
      {/* panel 1 — f : ℝ → ℝ  is INTO */}
      <Fade on={beat >= 6} delay={dl(6, 0.35)}>
        <T x={476} y={428} size={13} fill={INK} weight={900}>f : ℝ → ℝ</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.55)} d="M 398 520 H 554" stroke={INK} sw={1.8} dur={0.35} />
      <Draw on={beat >= 6} delay={dl(6, 0.7)} d="M 476 552 V 442" stroke={INK} sw={1.8} dur={0.35} />
      <Draw on={beat >= 6} delay={dl(6, 0.9)} d={PAN1} stroke={AMBER_DARK} sw={2.6} dur={0.6} />
      <Rect
        x={398} y={520} width={156} height={30}
        fill={RED} stroke="none"
        opacity={beat >= 6 ? 0.16 : 0}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={404} y={540} size={10.5} fill={RED} weight={800} anchor="start">
          {t("y < 0 never", "y < 0 kabhi nahin")}
        </T>
        <T x={476} y={570} size={13} fill={RED} weight={900}>INTO</T>
      </Fade>
      {/* panel 2 — f : ℝ → [0, ∞)  is ONTO */}
      <Fade on={beat >= 6} delay={dl(6, 1.9)}>
        <T x={696} y={428} size={13} fill={INK} weight={900}>f : ℝ → [0, ∞)</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 2.1)} d="M 618 520 H 774" stroke={INK} sw={1.8} dur={0.35} />
      <Draw on={beat >= 6} delay={dl(6, 2.25)} d="M 696 528 V 442" stroke={INK} sw={1.8} dur={0.35} />
      <Draw on={beat >= 6} delay={dl(6, 2.45)} d={PAN2} stroke={AMBER_DARK} sw={2.6} dur={0.6} />
      <Draw on={beat >= 6} delay={dl(6, 2.95)} d="M 696 518 V 446" stroke={GREEN} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 3.2)}>
        <T x={696} y={548} size={10.5} fill={GREEN_DARK} weight={800}>
          {t("every y ≥ 0 is hit", "har y ≥ 0 hit hota hai")}
        </T>
        <T x={696} y={570} size={13} fill={GREEN_DARK} weight={900}>ONTO</T>
      </Fade>
      {/* panel 3 — f : [0, ∞) → [0, ∞)  is BIJECTIVE */}
      <Fade on={beat >= 6} delay={dl(6, 3.5)}>
        <T x={916} y={428} size={13} fill={INK} weight={900}>f : [0, ∞) → [0, ∞)</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 3.7)} d="M 838 520 H 994" stroke={INK} sw={1.8} dur={0.35} />
      <Draw on={beat >= 6} delay={dl(6, 3.85)} d="M 916 528 V 442" stroke={INK} sw={1.8} dur={0.35} />
      <Draw on={beat >= 6} delay={dl(6, 4.05)} d={PAN3} stroke={AMBER_DARK} sw={2.6} dur={0.55} />
      <Draw on={beat >= 6} delay={dl(6, 4.5)} d="M 918 520 H 992" stroke={GREEN} sw={4} dur={0.35} />
      <Fade on={beat >= 6} delay={dl(6, 4.7)}>
        <T x={908} y={508} size={10.5} fill={RED} weight={800} anchor="end">
          {t("x < 0 excluded", "x < 0 bahar")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4.95)}>
        <T x={916} y={548} size={10.5} fill={GREEN_DARK} weight={800}>
          {t("one input per output", "har output ka ek input")}
        </T>
        <T x={916} y={570} size={13} fill={GREEN_DARK} weight={900}>BIJECTIVE</T>
      </Fade>

      {/* ═══════════ beat 7 — read the sets first ═══════════ */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d={ringD(503, 424, 12, 8)} stroke={RED} sw={2} dur={0.4} />
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d={ringD(722, 424, 26, 8)} stroke={RED} sw={2} dur={0.5} />
      <Draw on={beat >= 7} delay={dl(7, 1)} d={ringD(959, 424, 26, 8)} stroke={RED} sw={2} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.8)}>
        <T x={700} y={592} size={12.5} fill={RED} weight={800}>
          {t("“is this function onto?” is incomplete until B is fixed — always read the sets first",
             "“is this function onto?” tab tak incomplete hai jab tak B fix na ho — pehle sets padho")}
        </T>
      </Fade>
    </Scene>
  );
}
