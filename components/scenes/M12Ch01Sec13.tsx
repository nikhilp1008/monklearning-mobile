/**
 * M12Ch01 · Section 13 — "Counting functions by type"
 * Subtopic: Types of Functions
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * The voice reads four counting formulas and their feasibility gates. A list
 * of four formulas is exactly the board that fails, so everything here is
 * drawn from the mapping picture that produces the formula: the A→B set
 * diagram with the fan of m choices, the row of n slots that multiplies out
 * to mⁿ, and then three mapping figures — injective (targets all distinct,
 * one spare in B), bijective (a perfect pairing), surjective (every element
 * of B hit) — with the feasibility gate under each. The bottom band draws
 * the two failure pictures the last beat names: two arrows colliding on one
 * image (no one-one when n > m) and an image nobody reaches (no onto when
 * m > n).
 *
 * Grid:
 *   header      y 30..94   (title, underline, subtitle, rule at 94)
 *   band A      y 104..272 — set diagram x 40..390 · slots + mⁿ x 400..1044
 *   divider     y 278
 *   band B      y 282..462 — three panels: 40..356 · 376..700 · 720..1044
 *   divider     y 474
 *   band C      y 474..596 — the swap trap x 40..510 · the gates x 540..1044
 *
 * Beat map (8 segments, gates 0..7 — every gate used):
 *  0  "these are the formulas, with their gates"   title + underline + the
 *                                                  meta subtitle + the rule
 *  1  "all functions A→B: each of n inputs picks   the sets A and B, |A| = n,
 *      one of m images"                            |B| = m, dots in both, the
 *                                                  fan of m arrows off the
 *                                                  first input, the n slot
 *                                                  boxes, the brace, total = mⁿ
 *  2  "read it as m to the n"                      arrows naming the base m
 *                                                  (= |B|) and the exponent n
 *                                                  (= |A|)
 *  3  "injective: m! / (m − n)!, needs m ≥ n"      3→4 mapping, all targets
 *                                                  distinct, one spare in B
 *  4  "bijective: m = n, count n!"                 3→3 perfect pairing
 *  5  "surjective: inclusion–exclusion, n ≥ m"     4→3 mapping, every image hit
 *  6  "it is mⁿ, never nᵐ"                         mⁿ kept, nᵐ crossed out
 *  7  "keep the feasibility gates handy"           the two failure figures:
 *                                                  a collision, and an image
 *                                                  nobody reaches
 *
 * Visual vocabulary (shared with Sections 14 and 15 of this subtopic):
 *   headings and traps RED · the object being counted AMBER_DARK ·
 *   results and verdicts GREEN_DARK · set outlines and mapping arrows
 *   INK / INK_LIGHT · quiet captions MUTED.
 */

import React from "react";
import { Circle, G, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, ringD, crossD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

/** base with a raised exponent, laid out left-to-right from x (anchor start) */
function Pow({
  x, y, size, fill, base, exp, weight = 900,
}: {
  x: number; y: number; size: number; fill: string;
  base: string; exp: string; weight?: number;
}) {
  const bw = base.length * 0.56 * size;
  return (
    <G>
      <T x={x} y={y} size={size} fill={fill} anchor="start" weight={weight}>{base}</T>
      <T x={x + bw} y={y - size * 0.52} size={size * 0.62} fill={fill} anchor="start" weight={weight}>{exp}</T>
    </G>
  );
}

/** closed ellipse as a drawable path */
const ellD = (cx: number, cy: number, rx: number, ry: number) =>
  `M ${cx - rx} ${cy} A ${rx} ${ry} 0 1 1 ${cx + rx} ${cy} A ${rx} ${ry} 0 1 1 ${cx - rx} ${cy}`;

/* band A — the master set diagram */
const A_DOTS = [154, 178, 202, 228];
const B_DOTS = [162, 190, 218];

/* band A — the n slot boxes */
const SLOTS = [420, 496, 572, 668];

export default function M12Ch01Sec13({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — the framing and the two sets ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Counting functions by type",
             "Type ke hisaab se functions ginna")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.1)}
        d="M 340 62 C 470 58, 620 66, 740 60" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.8)}>
        <T x={540} y={82} size={12.5} fill={MUTED} script>
          {t("the counting formulas of this subtopic — and the feasibility gates to respect",
             "is subtopic ke counting formulas — aur jo feasibility gates respect karne hain")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.6)} d="M 40 94 H 1044" stroke={MUTED} sw={1.2} dur={1} />

      {/* ═══════════ beat 1 — A, B, and every input picks one of m images ═══════════ */}
      {/* the domain and the codomain, named as the voice names them */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <T x={110} y={124} size={13} fill={INK} weight={800}>A</T>
        <T x={310} y={124} size={13} fill={INK} weight={800}>B</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.25)} d={ellD(110, 190, 44, 56)} stroke={INK} sw={2.2} dur={0.7} />
      <Draw on={beat >= 1} delay={dl(1, 0.55)} d={ellD(310, 190, 44, 56)} stroke={INK} sw={2.2} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={110} y={266} size={12} fill={INK_LIGHT} weight={700}>|A| = n</T>
        <T x={310} y={266} size={12} fill={INK_LIGHT} weight={700}>|B| = m</T>
      </Fade>
      {A_DOTS.map((cy, i) => (
        <Fade key={`ad${cy}`} on={beat >= 1} delay={dl(1, 1 + i * 0.1)}>
          <Circle cx={112} cy={cy} r={i === 0 ? 6 : 4.5} fill={i === 0 ? AMBER_DARK : INK} />
        </Fade>
      ))}
      {B_DOTS.map((cy, i) => (
        <Fade key={`bd${cy}`} on={beat >= 1} delay={dl(1, 1.4 + i * 0.1)}>
          <Circle cx={312} cy={cy} r={4.5} fill={INK} />
        </Fade>
      ))}
      {B_DOTS.map((cy, i) => (
        <Draw key={`fan${cy}`} on={beat >= 1} delay={dl(1, 1.8 + i * 0.2)}
          d={arrowD(124, 154, 300, cy)} stroke={AMBER_DARK} sw={2} dur={0.4} />
      ))}
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <T x={210} y={124} size={12} fill={AMBER_DARK} weight={800}>
          {t("m choices each", "har input ke liye m choices")}
        </T>
      </Fade>

      {/* the n slots that multiply out */}
      <Fade on={beat >= 1} delay={dl(1, 2.9)}>
        <T x={420} y={124} size={12.5} fill={RED} weight={800} anchor="start">
          {t("ALL FUNCTIONS from A to B", "A se B tak ALL FUNCTIONS")}
        </T>
      </Fade>
      {SLOTS.map((x, i) => (
        <Fade key={`slot${x}`} on={beat >= 1} delay={dl(1, 3.2 + i * 0.2)}>
          <Rect x={x} y={136} width={44} height={42} rx={9}
            fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={x + 22} y={164} size={18} fill={AMBER_DARK} weight={900}>m</T>
        </Fade>
      ))}
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <T x={480} y={170} size={16} fill={INK_LIGHT} weight={800}>×</T>
        <T x={556} y={170} size={16} fill={INK_LIGHT} weight={800}>×</T>
        <T x={642} y={170} size={16} fill={INK_LIGHT} weight={800}>×</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 4.4)}
        d="M 420 186 Q 420 198 434 198 L 552 198 Q 566 198 566 206 Q 566 198 580 198 L 698 198 Q 712 198 712 186"
        stroke={INK_LIGHT} sw={1.8} dur={0.8} />
      <Fade on={beat >= 1} delay={dl(1, 5)}>
        <T x={566} y={222} size={12.5} fill={INK_LIGHT} weight={700}>
          {t("n factors — one per input in A", "n factors — A ke har input ke liye ek")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5.6)}>
        <T x={500} y={264} size={19} fill={INK_LIGHT} weight={700} anchor="end">
          {t("total =", "total =")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6)}>
        <Pow x={510} y={264} size={32} fill={AMBER_DARK} base="m" exp="n" />
      </Fade>

      {/* ═══════════ beat 2 — which letter is the base, which the exponent ═══════════ */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d={arrowD(590, 240, 556, 244)} stroke={AMBER_DARK} sw={1.8} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={596} y={248} size={12.5} fill={AMBER_DARK} weight={800} anchor="start">
          {t("exponent n = |A|, the inputs", "exponent n = |A|, yaani inputs")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.6)} d={arrowD(590, 265, 534, 266)} stroke={GREEN_DARK} sw={1.8} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={596} y={274} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("base m = |B|, the choices", "base m = |B|, yaani choices")}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — injective ═══════════ */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M 40 278 H 1044" stroke={MUTED} sw={1} dur={1} />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={40} y={300} size={13.5} fill={RED} weight={800} anchor="start">
          {t("INJECTIVE — one-one", "INJECTIVE — yaani one-one")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={110} y={322} size={11.5} fill={MUTED} weight={700}>A  (n)</T>
        <T x={250} y={322} size={11.5} fill={MUTED} weight={700}>B  (m)</T>
      </Fade>
      {[344, 368, 392].map((cy, i) => (
        <Fade key={`i1${cy}`} on={beat >= 3} delay={dl(3, 1.4 + i * 0.1)}>
          <Circle cx={110} cy={cy} r={4.5} fill={INK} />
        </Fade>
      ))}
      {[336, 360, 384, 408].map((cy, i) => (
        <Fade key={`i2${cy}`} on={beat >= 3} delay={dl(3, 1.7 + i * 0.1)}>
          <Circle cx={250} cy={cy} r={4.5} fill={i === 3 ? MUTED : INK} />
        </Fade>
      ))}
      {[[344, 336], [368, 360], [392, 384]].map(([a, b], i) => (
        <Draw key={`ia${a}`} on={beat >= 3} delay={dl(3, 2.2 + i * 0.3)}
          d={arrowD(122, a, 238, b)} stroke={INK_LIGHT} sw={1.8} dur={0.4} />
      ))}
      <Fade on={beat >= 3} delay={dl(3, 3.4)}>
        <T x={40} y={436} size={16} fill={GREEN_DARK} weight={900} anchor="start">
          m permute n  =  m! / (m − n)!
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.6)}>
        <T x={40} y={458} size={12.5} fill={RED} weight={800} anchor="start">
          {t("feasible only when m ≥ n", "tabhi feasible jab m ≥ n")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — bijective ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={376} y={300} size={13.5} fill={RED} weight={800} anchor="start">
          {t("BIJECTIVE — one-one and onto", "BIJECTIVE — one-one aur onto")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={446} y={322} size={11.5} fill={MUTED} weight={700}>A  (n)</T>
        <T x={586} y={322} size={11.5} fill={MUTED} weight={700}>B  (m = n)</T>
      </Fade>
      {[344, 368, 392].map((cy, i) => (
        <Fade key={`b1${cy}`} on={beat >= 4} delay={dl(4, 1.2 + i * 0.1)}>
          <Circle cx={446} cy={cy} r={4.5} fill={INK} />
          <Circle cx={586} cy={cy} r={4.5} fill={INK} />
        </Fade>
      ))}
      {[[344, 368], [368, 392], [392, 344]].map(([a, b], i) => (
        <Draw key={`ba${a}`} on={beat >= 4} delay={dl(4, 1.8 + i * 0.35)}
          d={arrowD(458, a, 574, b)} stroke={GREEN_DARK} sw={1.8} dur={0.45} />
      ))}
      <Fade on={beat >= 4} delay={dl(4, 3.2)}>
        <T x={376} y={436} size={16} fill={GREEN_DARK} weight={900} anchor="start">
          {t("count = n!  — the perfect pairings", "count = n!  — perfect pairings")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4.4)}>
        <T x={376} y={458} size={12.5} fill={RED} weight={800} anchor="start">
          {t("feasible only when m = n", "tabhi feasible jab m = n")}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — surjective ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={720} y={300} size={13.5} fill={RED} weight={800} anchor="start">
          {t("SURJECTIVE — onto", "SURJECTIVE — yaani onto")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={790} y={322} size={11.5} fill={MUTED} weight={700}>A  (n)</T>
        <T x={930} y={322} size={11.5} fill={MUTED} weight={700}>B  (m)</T>
      </Fade>
      {[336, 360, 384, 408].map((cy, i) => (
        <Fade key={`s1${cy}`} on={beat >= 5} delay={dl(5, 1.2 + i * 0.1)}>
          <Circle cx={790} cy={cy} r={4.5} fill={INK} />
        </Fade>
      ))}
      {[348, 372, 396].map((cy, i) => (
        <Fade key={`s2${cy}`} on={beat >= 5} delay={dl(5, 1.5 + i * 0.1)}>
          <Circle cx={930} cy={cy} r={4.5} fill={GREEN_DARK} />
        </Fade>
      ))}
      {[[336, 348], [360, 348], [384, 372], [408, 396]].map(([a, b], i) => (
        <Draw key={`sa${a}`} on={beat >= 5} delay={dl(5, 2 + i * 0.28)}
          d={arrowD(802, a, 918, b)} stroke={INK_LIGHT} sw={1.8} dur={0.4} />
      ))}
      <Fade on={beat >= 5} delay={dl(5, 3.4)}>
        <T x={720} y={436} size={14.5} fill={GREEN_DARK} weight={900} anchor="start">count = Σ</T>
        <Pow x={794} y={436} size={14.5} fill={GREEN_DARK} base="(−1)" exp="k" />
        <T x={838} y={436} size={14.5} fill={GREEN_DARK} weight={900} anchor="start">C(m, k)</T>
        <Pow x={897} y={436} size={14.5} fill={GREEN_DARK} base="(m − k)" exp="n" />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5)}>
        <T x={720} y={458} size={12.5} fill={RED} weight={800} anchor="start">
          {t("feasible only when n ≥ m", "tabhi feasible jab n ≥ m")}
        </T>
      </Fade>

      {/* ═══════════ beat 6 — the swap trap ═══════════ */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 40 474 H 1044" stroke={MUTED} sw={1.2} dur={1} />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={40} y={496} size={13.5} fill={RED} weight={800} anchor="start">
          {t("EXAM TRAP — do not swap base and exponent",
             "EXAM TRAP — base aur exponent swap mat karo")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.4)}>
        <Pow x={60} y={528} size={26} fill={GREEN_DARK} base="m" exp="n" />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.9)}>
        <T x={108} y={528} size={13} fill={GREEN_DARK} weight={800} anchor="start">
          {t("correct — base is |B| = m", "sahi — base |B| = m hai")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3)}>
        <Pow x={60} y={566} size={26} fill={RED} base="n" exp="m" />
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 3.5)} d={crossD(56, 544, 36, 28)} stroke={RED} sw={2.2} dur={0.35} />
      <Fade on={beat >= 6} delay={dl(6, 4)}>
        <T x={108} y={566} size={13} fill={RED} weight={800} anchor="start">
          {t("wrong — changes the answer completely",
             "galat — answer poora badal jaata hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 7 — the two feasibility gates, drawn ═══════════ */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d="M 520 486 V 588" stroke={MUTED} sw={1} dur={0.6} />
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={496} size={13.5} fill={RED} weight={800} anchor="start">
          {t("FEASIBILITY GATES — check before you count",
             "FEASIBILITY GATES — ginne se pehle check karo")}
        </T>
      </Fade>

      {/* gate ① — n > m kills one-one: two arrows collide on one image */}
      {[516, 530, 544].map((cy, i) => (
        <Fade key={`g1a${cy}`} on={beat >= 7} delay={dl(7, 1 + i * 0.1)}>
          <Circle cx={560} cy={cy} r={4} fill={INK} />
        </Fade>
      ))}
      {[520, 542].map((cy, i) => (
        <Fade key={`g1b${cy}`} on={beat >= 7} delay={dl(7, 1.3 + i * 0.1)}>
          <Circle cx={624} cy={cy} r={4} fill={INK} />
        </Fade>
      ))}
      {[[516, 520], [530, 520], [544, 542]].map(([a, b], i) => (
        <Draw key={`g1c${a}`} on={beat >= 7} delay={dl(7, 1.7 + i * 0.22)}
          d={arrowD(568, a, 616, b)} stroke={RED} sw={1.7} dur={0.3} />
      ))}
      <Draw on={beat >= 7} delay={dl(7, 2.5)} d={ringD(624, 520, 10, 7)} stroke={RED} sw={1.8} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 3)}>
        <T x={660} y={526} size={12.5} fill={RED} weight={800} anchor="start">
          {t("n > m  ⇒  no one-one map", "n > m  ⇒  one-one map nahin")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3.8)}>
        <T x={660} y={548} size={12} fill={INK_LIGHT} weight={700} anchor="start">
          {t("two inputs must share an image", "do inputs ko image share karni padegi")}
        </T>
      </Fade>

      {/* gate ② — m > n kills onto: an image nobody reaches */}
      {[566, 578].map((cy, i) => (
        <Fade key={`g2a${cy}`} on={beat >= 7} delay={dl(7, 4.4 + i * 0.1)}>
          <Circle cx={560} cy={cy} r={4} fill={INK} />
        </Fade>
      ))}
      {[558, 572, 584].map((cy, i) => (
        <Fade key={`g2b${cy}`} on={beat >= 7} delay={dl(7, 4.7 + i * 0.1)}>
          <Circle cx={624} cy={cy} r={4} fill={i === 2 ? RED : INK} />
        </Fade>
      ))}
      {[[566, 558], [578, 572]].map(([a, b], i) => (
        <Draw key={`g2c${a}`} on={beat >= 7} delay={dl(7, 5.1 + i * 0.22)}
          d={arrowD(568, a, 616, b)} stroke={INK_LIGHT} sw={1.7} dur={0.3} />
      ))}
      <Draw on={beat >= 7} delay={dl(7, 5.7)} d={ringD(624, 584, 10, 7)} stroke={RED} sw={1.8} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 6.2)}>
        <T x={660} y={572} size={12.5} fill={RED} weight={800} anchor="start">
          {t("m > n  ⇒  no onto map", "m > n  ⇒  onto map nahin")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={660} y={593} size={12} fill={INK_LIGHT} weight={700} anchor="start">
          {t("some image is never hit", "koi image kabhi hit nahin hoti")}
        </T>
      </Fade>
    </Scene>
  );
}
