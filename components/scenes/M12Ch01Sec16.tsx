/**
 * M12Ch01 · Section 16 — "Counting functions with inclusion-exclusion"
 * Subtopic: Types of Functions
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * The voice works ONE pair of sets (|X| = 4, |Y| = 5) three ways: plain
 * functions X → Y, one-one functions X → Y, and then — reversing the arrow —
 * onto functions Y → X. The whole point of the example is that the direction
 * of the map changes the formula, so every part gets its OWN drawn bipartite
 * diagram rather than a shared one: the reader can see the arrow flip.
 *
 * Grid: a full-width rule at y 92, three panels across the top
 *   A  x 40..330   the two sets, no map yet          (beat 1)
 *   B  x 356..690  part (a), a map that repeats      (beats 2–3)
 *   C  x 716..1044 part (b), a map that never does   (beats 4–5)
 * each panel ending in its own result line at y 330; a divider at y 352 and
 * then the reversed-direction band y 376..596 for part (c) (beats 6–7).
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "three-part counting example"      title + underline + subtitle + rule
 *  1  "|X| = 4, |Y| = 5"                 both ovals drawn with their real
 *                                        element dots (4 and 5), sizes stated
 *  2  "(a) each input picks 1 of 5"      X → Y ovals + four arrows, two of
 *                                        them landing on the SAME image, so
 *                                        the freedom of mⁿ is visible
 *  3  "5⁴ = 625"                         the result under panel B
 *  4  "(b) one-one, feasible since 5≥4"  X → Y ovals + four arrows to four
 *                                        DISTINCT images; the one image that
 *                                        is never hit is left hollow
 *  5  "⁵P₄ = 5!/1! = 120"                the result under panel C
 *  6  "(c) reverse: onto Y → X"          the ovals swap sides, five arrows
 *                                        cover all four targets (one target
 *                                        double-hit), + the reason we need I-E
 *  7  "the alternating sum = 240"        the four signed terms laid out with
 *                                        what each one is subtracting, ringed
 *                                        result
 *
 * Visual vocabulary (shared with Sections 17 and 18 of this subtopic):
 *   domain object AMBER_DARK · codomain object BLUE · map arrows AMBER_DARK ·
 *   element dots INK · results GREEN_DARK · headings and warnings RED ·
 *   supporting prose INK, asides MUTED. Same title band, same 92-rule.
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, ringD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

/** closed ellipse as a drawable path */
const ellD = (cx: number, cy: number, rx: number, ry: number) =>
  `M ${cx - rx} ${cy} A ${rx} ${ry} 0 1 1 ${cx + rx} ${cy} A ${rx} ${ry} 0 1 1 ${cx - rx} ${cy}`;

/* ---- panel A : the bare sets ---- */
const A_XY = [152, 177, 202, 227];          // the four elements of X
const A_YY = [138, 164, 190, 216, 242];     // the five elements of Y

/* ---- panel B : (a) an arbitrary function X → Y, two inputs sharing 190 ---- */
const B_MAP: [number, number][] = [
  [152, 138],
  [177, 190],
  [202, 190],
  [227, 242],
];

/* ---- panel C : (b) a one-one function X → Y, image 164 never used ---- */
const C_MAP: [number, number][] = [
  [152, 138],
  [177, 190],
  [202, 216],
  [227, 242],
];

/* ---- band : (c) an onto function Y → X, target 432 hit twice ---- */
const D_MAP: [number, number][] = [
  [418, 432],
  [444, 432],
  [470, 457],
  [496, 482],
  [522, 507],
];

export default function M12Ch01Sec16({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — the framing ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Counting one pair of sets three ways", "Ek pair of sets ko teen tarah se count karna")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.1)}
        d="M 244 62 C 420 58, 680 66, 836 60" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.9)}>
        <T x={540} y={82} size={12.5} fill={MUTED} script>
          {t("one pair of sets, three formulas — and the direction of the arrow decides which one",
             "ek hi pair of sets, teen formulas — aur arrow ki direction hi tay karti hai kaunsa")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.8)} d="M 40 92 H 1044" stroke={MUTED} sw={1.2} dur={1} />

      {/* ═══════════ beat 1 — panel A: the two sets ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={40} y={120} size={13.5} fill={RED} weight={800} anchor="start">
          {t("SET-UP — the two sets", "SET-UP — do sets")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.8)} d={ellD(110, 190, 40, 54)} stroke={AMBER_DARK} sw={2.4} dur={0.9} />
      <Draw on={beat >= 1} delay={dl(1, 1.5)} d={ellD(250, 190, 40, 66)} stroke={BLUE} sw={2.4} dur={0.9} />
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={62} y={196} size={17} fill={AMBER_DARK} weight={900} anchor="end">X</T>
        <T x={298} y={196} size={17} fill={BLUE} weight={900} anchor="start">Y</T>
      </Fade>
      {A_XY.map((y, i) => (
        <Fade key={`a-x${y}`} on={beat >= 1} delay={dl(1, 2.6 + i * 0.18)}>
          <Circle cx={110} cy={y} r={4.6} fill={INK} />
        </Fade>
      ))}
      {A_YY.map((y, i) => (
        <Fade key={`a-y${y}`} on={beat >= 1} delay={dl(1, 3.4 + i * 0.18)}>
          <Circle cx={250} cy={y} r={4.6} fill={INK} />
        </Fade>
      ))}
      <Fade on={beat >= 1} delay={dl(1, 4.5)}>
        <T x={110} y={276} size={13} fill={AMBER_DARK} weight={800}>|X| = 4</T>
        <T x={250} y={276} size={13} fill={BLUE} weight={800}>|Y| = 5</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5.6)}>
        <T x={40} y={302} size={12.5} fill={INK} weight={700} anchor="start">
          {t("count in turn: plain → one-one → onto",
             "baari-baari count: plain → one-one → onto")}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — panel B: (a) functions X → Y ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={356} y={120} size={13.5} fill={RED} weight={800} anchor="start">
          {t("(a)  functions  X → Y", "(a)  functions  X → Y")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.7)} d={ellD(430, 190, 38, 54)} stroke={AMBER_DARK} sw={2.4} dur={0.8} />
      <Draw on={beat >= 2} delay={dl(2, 1.2)} d={ellD(600, 190, 38, 66)} stroke={BLUE} sw={2.4} dur={0.8} />
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <T x={386} y={196} size={16} fill={AMBER_DARK} weight={900} anchor="end">X</T>
        <T x={646} y={196} size={16} fill={BLUE} weight={900} anchor="start">Y</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        {A_XY.map((y) => <Circle key={`b-x${y}`} cx={430} cy={y} r={4.4} fill={INK} />)}
        {A_YY.map((y) => <Circle key={`b-y${y}`} cx={600} cy={y} r={4.4} fill={INK} />)}
      </Fade>
      {B_MAP.map(([a, b], i) => (
        <Draw key={`b-m${i}`} on={beat >= 2} delay={dl(2, 2.6 + i * 0.45)}
          d={arrowD(474, a, 556, b)} stroke={AMBER_DARK} sw={2} dur={0.4} />
      ))}
      <Fade on={beat >= 2} delay={dl(2, 5)}>
        <T x={356} y={278} size={12.5} fill={INK} weight={700} anchor="start">
          {t("each of the 4 inputs picks 1 of 5, freely",
             "chaaron inputs mein se har ek 5 mein se 1 chunta hai, freely")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 7)}>
        <T x={356} y={302} size={12.5} fill={AMBER_DARK} weight={800} anchor="start">
          {t("mⁿ rule  →  5 × 5 × 5 × 5", "mⁿ rule  →  5 × 5 × 5 × 5")}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — the 625 ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={523} y={330} size={21} fill={GREEN_DARK} weight={900}>5⁴ = 625</T>
      </Fade>

      {/* ═══════════ beat 4 — panel C: (b) one-one X → Y ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={716} y={120} size={13.5} fill={RED} weight={800} anchor="start">
          {t("(b)  one-one  X → Y", "(b)  one-one  X → Y")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.7)} d={ellD(790, 190, 38, 54)} stroke={AMBER_DARK} sw={2.4} dur={0.8} />
      <Draw on={beat >= 4} delay={dl(4, 1.2)} d={ellD(960, 190, 38, 66)} stroke={BLUE} sw={2.4} dur={0.8} />
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <T x={746} y={196} size={16} fill={AMBER_DARK} weight={900} anchor="end">X</T>
        <T x={1006} y={196} size={16} fill={BLUE} weight={900} anchor="start">Y</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        {A_XY.map((y) => <Circle key={`c-x${y}`} cx={790} cy={y} r={4.4} fill={INK} />)}
        {A_YY.map((y) => (
          <Circle key={`c-y${y}`} cx={960} cy={y} r={4.4}
            fill={y === 164 ? CREAM : INK} stroke={y === 164 ? MUTED : "none"} strokeWidth={1.8} />
        ))}
      </Fade>
      {C_MAP.map(([a, b], i) => (
        <Draw key={`c-m${i}`} on={beat >= 4} delay={dl(4, 2.6 + i * 0.4)}
          d={arrowD(834, a, 916, b)} stroke={AMBER_DARK} sw={2} dur={0.4} />
      ))}
      <Fade on={beat >= 4} delay={dl(4, 4.6)}>
        <T x={716} y={278} size={12.5} fill={INK} weight={700} anchor="start">
          {t("4 distinct inputs → 4 distinct images",
             "4 alag inputs → 4 alag images")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6.2)}>
        <T x={716} y={302} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("feasible: codomain 5 ≥ domain 4",
             "feasible: codomain 5 ≥ domain 4")}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — the 120 ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.15)}>
        <T x={880} y={330} size={21} fill={GREEN_DARK} weight={900}>⁵P₄ = 5! / 1! = 120</T>
      </Fade>

      {/* ═══════════ beat 6 — (c) the arrow flips: onto Y → X ═══════════ */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 40 352 H 1044" stroke={MUTED} sw={1.3} dur={0.9} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={40} y={376} size={13.5} fill={RED} weight={800} anchor="start">
          {t("(c)  onto  Y → X   —   the direction reverses",
             "(c)  onto  Y → X   —   direction ulat jaati hai")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.2)} d={ellD(110, 470, 40, 66)} stroke={BLUE} sw={2.4} dur={0.8} />
      <Draw on={beat >= 6} delay={dl(6, 1.7)} d={ellD(250, 470, 40, 54)} stroke={AMBER_DARK} sw={2.4} dur={0.8} />
      <Fade on={beat >= 6} delay={dl(6, 2.2)}>
        <T x={62} y={476} size={17} fill={BLUE} weight={900} anchor="end">Y</T>
        <T x={298} y={476} size={17} fill={AMBER_DARK} weight={900} anchor="start">X</T>
        {[418, 444, 470, 496, 522].map((y) => (
          <Circle key={`d-y${y}`} cx={110} cy={y} r={4.6} fill={INK} />
        ))}
        {[432, 457, 482, 507].map((y) => (
          <Circle key={`d-x${y}`} cx={250} cy={y} r={4.6} fill={INK} />
        ))}
      </Fade>
      {D_MAP.map(([a, b], i) => (
        <Draw key={`d-m${i}`} on={beat >= 6} delay={dl(6, 2.8 + i * 0.35)}
          d={arrowD(156, a, 204, b)} stroke={AMBER_DARK} sw={2} dur={0.35} />
      ))}
      <Fade on={beat >= 6} delay={dl(6, 4.9)}>
        <T x={185} y={560} size={12} fill={INK} weight={700}>
          {t("every element of X must be hit", "X ka har element hit hona chahiye")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6)}>
        <T x={185} y={584} size={12} fill={GREEN_DARK} weight={800}>
          {t("feasible: 5 ≥ 4", "feasible: 5 ≥ 4")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7)}>
        <T x={360} y={412} size={12.5} fill={INK} weight={700} anchor="start">
          {t("onto counting needs inclusion–exclusion:",
             "onto counting mein inclusion–exclusion chahiye:")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8.6)}>
        <T x={360} y={436} size={12.5} fill={RED} weight={800} anchor="start">
          {t("subtract the maps that miss a target",
             "un maps ko ghatao jo koi target miss karte hain")}
        </T>
      </Fade>

      {/* ═══════════ beat 7 — the alternating sum ═══════════ */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={380} y={486} size={23} fill={INK} weight={800} anchor="start">4⁵</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.1)}>
        <T x={424} y={486} size={23} fill={RED} weight={900}>−</T>
        <T x={444} y={486} size={23} fill={INK} weight={800} anchor="start">⁴C₁ · 3⁵</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.4)}>
        <T x={566} y={486} size={23} fill={GREEN_DARK} weight={900}>+</T>
        <T x={586} y={486} size={23} fill={INK} weight={800} anchor="start">⁴C₂ · 2⁵</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3.7)}>
        <T x={708} y={486} size={23} fill={RED} weight={900}>−</T>
        <T x={728} y={486} size={23} fill={INK} weight={800} anchor="start">⁴C₃</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.8)}>
        <T x={395} y={516} size={11} fill={MUTED} weight={700}>
          {t("all maps", "saare maps")}
        </T>
        <T x={498} y={516} size={11} fill={MUTED} weight={700}>
          {t("miss 1", "miss 1")}
        </T>
        <T x={640} y={516} size={11} fill={MUTED} weight={700}>
          {t("miss 2", "miss 2")}
        </T>
        <T x={749} y={516} size={11} fill={MUTED} weight={700}>
          {t("miss 3", "miss 3")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5.8)}>
        <T x={800} y={486} size={23} fill={INK_LIGHT} weight={800}>=</T>
        <T x={830} y={486} size={28} fill={GREEN_DARK} weight={900} anchor="start">240</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 6.6)} d={ringD(852, 477, 34, 22)} stroke={GREEN_DARK} sw={2.2} dur={0.7} />
      <Fade on={beat >= 7} delay={dl(7, 7.6)}>
        <T x={380} y={558} size={12.5} fill={INK} weight={700} anchor="start">
          {t("the signs alternate — that is inclusion–exclusion doing its job",
             "signs alternate hote hain — yahi inclusion–exclusion ka kaam hai")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 9)}>
        <T x={380} y={584} size={12.5} fill={RED} weight={800} anchor="start">
          {t("flip the arrow and the formula flips with it",
             "arrow palto — formula bhi badal jaata hai")}
        </T>
      </Fade>
    </Scene>
  );
}
