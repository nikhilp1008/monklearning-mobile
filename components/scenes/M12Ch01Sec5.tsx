/**
 * M12Ch01 · Section 5 — "Classifying a relation, step by step"
 * Subtopic: Types of Relations  (second of my three consecutive sections)
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * Section 4 drew the n × n array in the abstract; this one runs a concrete R
 * through it. Left column: the exam routine as an actual two-box flow with a
 * diagonal-only icon (reflexive is cheap — only the diagonal matters) and a
 * counterexample figure (one arrow present, its reverse missing and crossed).
 * Right: the SAME lattice convention as Section 4, now 4 × 4 for
 * A = {1, 2, 3, 4}, with the seven pairs of R filled in green, the diagonal
 * ringed, the missing (4, 3) cell boxed in red opposite the (3, 4) that is
 * present, and the transitive chain 1→2→1 drawn as a small digraph.
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "turn the traits into a routine"        title + underline + subtitle
 *                                             + the full-width rule
 *  1  "step one: reflexive first"             box ① + the diagonal-only 4 × 4
 *                                             icon and its caption
 *  2  "hunt one counterexample"               box ② + the a→b / b→a figure
 *                                             with the reverse crossed out
 *  3  "A = {1,2,3,4}, R = the seven pairs"    A and R written out, axis
 *                                             labels, the lattice, the seven
 *                                             cells filled green
 *  4  "reflexive check — all four (a,a)"      the four diagonal cells ringed
 *                                             amber + ✓, verdict chip
 *  5  "symmetric check — (4,3) missing"       mirror axis dashed, (3,4)
 *                                             ringed, (4,3) boxed red with ✗,
 *                                             the reflection arrow, chip
 *  6  "transitive check — chains land in R"   the three chain cells ringed +
 *                                             the 1 ⇄ 2 digraph with the
 *                                             self-loop it forces, chip
 *  7  "verdict: not an equivalence relation"  divider + the three verdict
 *                                             chips + the conclusion
 *
 * Visual vocabulary — identical to Sections 4 and 6:
 *   column index = FIRST coordinate, row index = SECOND coordinate ·
 *   lattice rules MUTED with an INK border · diagonal / self-pairs AMBER ·
 *   pairs IN R GREEN · anything missing or rejected RED · results GREEN_DARK ·
 *   headings RED · asides MUTED.
 */

import React from "react";
import { Circle, Path, Polygon, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, ringD, crossD,
  INK, MUTED, AMBER, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

/* ---------------- the 4 × 4 lattice for A = {1, 2, 3, 4} ---------------- */
const N = 4;
const L = 470;
const TOP = 208;
const C = 48;
const IDX = [0, 1, 2, 3];
const RULES = [0, 1, 2, 3, 4];

const cx = (i: number) => L + C * i + C / 2;
const cy = (j: number) => TOP + C * j + C / 2;

/** R = the four self-pairs, plus (1,2), (2,1) and (3,4)  — as [first, second] */
const R_PAIRS: [number, number][] = [
  [1, 1], [2, 2], [3, 3], [4, 4], [1, 2], [2, 1], [3, 4],
];

const checkD = (x: number, y: number) =>
  `M ${x - 6} ${y} L ${x - 1.5} ${y + 5} L ${x + 7} ${y - 6}`;
const xMarkD = (x: number, y: number) =>
  `M ${x - 7} ${y - 7} L ${x + 7} ${y + 7} M ${x + 7} ${y - 7} L ${x - 7} ${y + 7}`;

/* ---------------- the diagonal-only icon in the routine ---------------- */
const IL = 60;
const IT = 224;
const IC = 22;

export default function M12Ch01Sec5({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — the framing ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Classifying a relation — the exam routine",
             "Relation classify karna — exam routine")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.1)}
        d="M 312 62 C 460 58, 640 66, 768 60" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.9)}>
        <T x={540} y={82} size={12.5} fill={MUTED} script>
          {t("reflexive first, then hunt one counterexample — then run the routine on a real R",
             "pehle reflexive, phir ek counterexample dhoondo — phir routine ko asli R par chalao")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.8)} d="M 40 98 H 1044" stroke={MUTED} sw={1.2} dur={1} />

      {/* ═══════════════════════════════════════════════════════════
          beat 1 — step ① : reflexive is the cheapest check
          ═══════════════════════════════════════════════════════════ */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)}
        d="M 62 118 H 378 A 14 14 0 0 1 392 132 V 194 A 14 14 0 0 1 378 208 H 62 A 14 14 0 0 1 48 194 V 132 A 14 14 0 0 1 62 118 Z"
        stroke={RED} sw={1.8} dur={1} fill={CREAM} />
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={64} y={146} size={15} fill={RED} weight={800} anchor="start">
          {t("Step ① — test REFLEXIVE first", "Step ① — pehle REFLEXIVE test karo")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={64} y={170} size={12.5} fill={INK} weight={700} anchor="start">
          {t("the cheapest check of the three", "teenon mein sabse cheap check")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <T x={64} y={192} size={12.5} fill={RED} weight={800} anchor="start">
          {t("one missing (a, a) kills reflexive", "ek missing (a, a) reflexive khatam")}
        </T>
      </Fade>
      {/* the diagonal-only icon */}
      {RULES.map((i) => (
        <Draw key={`iv${i}`} on={beat >= 1} delay={dl(1, 3.4 + i * 0.07)}
          d={`M ${IL + IC * i} ${IT} V ${IT + IC * N}`} stroke={MUTED} sw={1.1} dur={0.4} />
      ))}
      {RULES.map((j) => (
        <Draw key={`ih${j}`} on={beat >= 1} delay={dl(1, 3.7 + j * 0.07)}
          d={`M ${IL} ${IT + IC * j} H ${IL + IC * N}`} stroke={MUTED} sw={1.1} dur={0.4} />
      ))}
      {IDX.map((i) => (
        <Fade key={`id${i}`} on={beat >= 1} delay={dl(1, 4.2 + i * 0.2)}>
          <Rect x={IL + IC * i} y={IT + IC * i} width={IC} height={IC} fill={AMBER} fillOpacity={0.45} />
        </Fade>
      ))}
      <Draw on={beat >= 1} delay={dl(1, 5.2)}
        d={`M ${IL} ${IT} H ${IL + IC * N} V ${IT + IC * N} H ${IL} Z`} stroke={INK} sw={1.7} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 5.8)}>
        <T x={162} y={246} size={12.5} fill={INK} weight={700} anchor="start">
          {t("look only at the cells", "sirf un cells ko dekho")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6.8)}>
        <T x={162} y={270} size={12.5} fill={INK} weight={700} anchor="start">
          {t("on the main diagonal", "jo main diagonal par hain")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 7.8)}>
        <T x={162} y={294} size={12.5} fill={RED} weight={800} anchor="start">
          {t("one gap ⇒ not reflexive", "ek gap ⇒ reflexive nahin")}
        </T>
      </Fade>

      {/* ═══════════════════════════════════════════════════════════
          beat 2 — step ② : hunt ONE counterexample
          ═══════════════════════════════════════════════════════════ */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d={arrowD(350, 214, 350, 330)} stroke={MUTED} sw={2} dur={0.6} />
      <Draw on={beat >= 2} delay={dl(2, 0.7)}
        d="M 62 336 H 378 A 14 14 0 0 1 392 350 V 412 A 14 14 0 0 1 378 426 H 62 A 14 14 0 0 1 48 412 V 350 A 14 14 0 0 1 62 336 Z"
        stroke={RED} sw={1.8} dur={1} fill={CREAM} />
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={64} y={364} size={15} fill={RED} weight={800} anchor="start">
          {t("Step ② — symmetric & transitive", "Step ② — symmetric aur transitive")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.3)}>
        <T x={64} y={388} size={12.5} fill={INK} weight={700} anchor="start">
          {t("do not verify every case —", "har case verify mat karo —")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.1)}>
        <T x={64} y={410} size={12.5} fill={RED} weight={800} anchor="start">
          {t("hunt ONE counterexample", "bas ek counterexample dhoondo")}
        </T>
      </Fade>
      {/* one arrow present, its reverse missing */}
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <Circle cx={120} cy={470} r={7} fill={INK} />
        <Circle cx={300} cy={470} r={7} fill={INK} />
        <T x={120} y={448} size={13} fill={INK} weight={900}>a</T>
        <T x={300} y={448} size={13} fill={INK} weight={900}>b</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 4.8)} d={arrowD(133, 462, 287, 462)} stroke={GREEN_DARK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 5.6)} d={arrowD(287, 480, 133, 480)} stroke={RED} sw={2.2} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 6.4)} d={crossD(170, 472, 80, 16)} stroke={RED} sw={2.4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 7)}>
        <T x={210} y={508} size={12.5} fill={RED} weight={800}>
          {t("(a, b) ∈ R  but  (b, a) ∉ R", "(a, b) ∈ R  par  (b, a) ∉ R")}
        </T>
      </Fade>

      {/* ═══════════════════════════════════════════════════════════
          beat 3 — the concrete A and R, on the lattice
          ═══════════════════════════════════════════════════════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={440} y={126} size={17} fill={INK} weight={900} anchor="start">
          {t("A = { 1, 2, 3, 4 }", "A = { 1, 2, 3, 4 }")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={440} y={154} size={15} fill={INK} weight={800} anchor="start">
          {t("R = { (1,1), (2,2), (3,3), (4,4), (1,2), (2,1), (3,4) }",
             "R = { (1,1), (2,2), (3,3), (4,4), (1,2), (2,1), (3,4) }")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={566} y={176} size={11.5} fill={MUTED} weight={700}>
          {t("column = first element", "column = pehla element")}
        </T>
        <T x={462} y={176} size={11.5} fill={MUTED} weight={700} anchor="end">
          {t("row = second", "row = doosra")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.4)}>
        {IDX.map((i) => (
          <T key={`cl${i}`} x={cx(i)} y={198} size={12.5} fill={INK} weight={800}>{`${i + 1}`}</T>
        ))}
        {IDX.map((j) => (
          <T key={`rl${j}`} x={462} y={cy(j) + 5} size={12.5} fill={INK} weight={800} anchor="end">{`${j + 1}`}</T>
        ))}
      </Fade>
      {RULES.map((i) => (
        <Draw key={`gv${i}`} on={beat >= 3} delay={dl(3, 2.8 + i * 0.08)}
          d={`M ${L + C * i} ${TOP} V ${TOP + C * N}`} stroke={MUTED} sw={1.2} dur={0.5} />
      ))}
      {RULES.map((j) => (
        <Draw key={`gh${j}`} on={beat >= 3} delay={dl(3, 3.2 + j * 0.08)}
          d={`M ${L} ${TOP + C * j} H ${L + C * N}`} stroke={MUTED} sw={1.2} dur={0.5} />
      ))}
      <Draw on={beat >= 3} delay={dl(3, 3.8)}
        d={`M ${L} ${TOP} H ${L + C * N} V ${TOP + C * N} H ${L} Z`} stroke={INK} sw={2} dur={0.9} />
      {R_PAIRS.map(([a, b], k) => (
        <Fade key={`rp${a}${b}`} on={beat >= 3} delay={dl(3, 4.6 + k * 0.22)}>
          <Rect x={L + C * (a - 1)} y={TOP + C * (b - 1)} width={C} height={C} fill={GREEN} fillOpacity={0.35} />
        </Fade>
      ))}
      <Fade on={beat >= 3} delay={dl(3, 6.4)}>
        <T x={700} y={196} size={11.5} fill={MUTED} weight={700} anchor="start">
          {t("filled cell = pair inside R", "bhara cell = R ke andar ka pair")}
        </T>
      </Fade>

      {/* ═══════════════════════════════════════════════════════════
          beat 4 — reflexive check
          ═══════════════════════════════════════════════════════════ */}
      {IDX.map((i) => (
        <Draw key={`dr${i}`} on={beat >= 4} delay={dl(4, 0.3 + i * 0.35)}
          d={ringD(cx(i), cy(i), 22, 20)} stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      ))}
      {IDX.map((i) => (
        <Draw key={`dc${i}`} on={beat >= 4} delay={dl(4, 0.55 + i * 0.35)}
          d={checkD(cx(i), cy(i))} stroke={GREEN_DARK} sw={2.6} dur={0.25} />
      ))}
      <Fade on={beat >= 4} delay={dl(4, 2.4)}>
        <Chip x={700} y={214} w={330} h={46} fill={CREAM} stroke={GREEN_DARK}
          textFill={GREEN_DARK} size={15} script={false}>
          {t("Reflexive ✓ — all four (a, a) in R", "Reflexive ✓ — chaaron (a, a) R mein")}
        </Chip>
      </Fade>

      {/* ═══════════════════════════════════════════════════════════
          beat 5 — symmetric check: the missing reverse
          ═══════════════════════════════════════════════════════════ */}
      <Path
        d={`M ${L} ${TOP} L ${L + C * N} ${TOP + C * N}`}
        fill="none" stroke={AMBER_DARK} strokeWidth={1.8} strokeDasharray="8 6"
        opacity={beat >= 5 ? 0.75 : 0}
      />
      <Draw on={beat >= 5} delay={dl(5, 0.8)} d={ringD(cx(2), cy(3), 24, 21)} stroke={GREEN_DARK} sw={2.4} dur={0.5} />
      <Draw on={beat >= 5} delay={dl(5, 1.6)} d={arrowD(600, 366, 628, 338)} stroke={RED} sw={2.2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 2.1)}>
        <Rect x={cx(3) - C / 2} y={cy(2) - C / 2} width={C} height={C}
          fill="none" stroke={RED} strokeWidth={2.2} strokeDasharray="7 5" />
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 2.6)} d={xMarkD(cx(3), cy(2))} stroke={RED} sw={2.6} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 3.4)}>
        <Chip x={700} y={280} w={330} h={46} fill={CREAM} stroke={RED}
          textFill={RED} size={15} script={false}>
          {t("Symmetric ✗ — (4, 3) is missing", "Symmetric ✗ — (4, 3) missing hai")}
        </Chip>
      </Fade>

      {/* ═══════════════════════════════════════════════════════════
          beat 6 — transitive check: the chain 1 → 2 → 1
          ═══════════════════════════════════════════════════════════ */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d={ringD(cx(0), cy(1), 23, 20)} stroke={GREEN_DARK} sw={2.2} dur={0.45} />
      <Draw on={beat >= 6} delay={dl(6, 0.7)} d={ringD(cx(1), cy(0), 23, 20)} stroke={GREEN_DARK} sw={2.2} dur={0.45} />
      {/* the chain (1,2) → (2,1) lands back on (1,1), which is already filled */}
      <Draw on={beat >= 6} delay={dl(6, 1.2)}
        d={`M ${cx(0)} ${cy(1)} L ${cx(1)} ${cy(0)}`} stroke={GREEN_DARK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 6} delay={dl(6, 1.5)}
        d={arrowD(cx(1), cy(0), cx(0) + 14, cy(0))} stroke={GREEN_DARK} sw={2.2} dur={0.4} />
      {/* the same chain as a digraph */}
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <Circle cx={520} cy={470} r={19} fill={CREAM} stroke={INK} strokeWidth={2} />
        <Circle cx={660} cy={470} r={19} fill={CREAM} stroke={INK} strokeWidth={2} />
        <T x={520} y={476} size={16} fill={INK} weight={900}>1</T>
        <T x={660} y={476} size={16} fill={INK} weight={900}>2</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 2.5)} d={arrowD(541, 458, 639, 458)} stroke={GREEN_DARK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 6} delay={dl(6, 3.1)} d={arrowD(639, 482, 541, 482)} stroke={GREEN_DARK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 6} delay={dl(6, 3.7)}
        d="M 505 455 C 490 418, 550 418, 535 455" stroke={GREEN_DARK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 4.3)}>
        <Polygon points="536,457 526,446 523,458" fill={GREEN_DARK} />
        <T x={478} y={436} size={12} fill={GREEN_DARK} weight={800} anchor="end">(1, 1)</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4.9)}>
        <T x={790} y={448} size={13} fill={INK} weight={700} anchor="start">
          {t("1 → 2   then   2 → 1", "1 → 2   phir   2 → 1")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5.7)}>
        <T x={790} y={472} size={13} fill={INK} weight={700} anchor="start">
          {t("gives 1 → 1, already in R", "deta hai 1 → 1, R mein already")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6.5)}>
        <T x={790} y={496} size={13} fill={GREEN_DARK} weight={800} anchor="start">
          {t("so transitivity holds", "to transitivity hold karti hai")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7.2)}>
        <Chip x={700} y={346} w={330} h={46} fill={CREAM} stroke={GREEN_DARK}
          textFill={GREEN_DARK} size={15} script={false}>
          {t("Transitive ✓ — chains land in R", "Transitive ✓ — chains R mein hi")}
        </Chip>
      </Fade>

      {/* ═══════════════════════════════════════════════════════════
          beat 7 — the verdict
          ═══════════════════════════════════════════════════════════ */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d="M 40 522 H 1044" stroke={MUTED} sw={1.3} dur={0.9} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={40} y={556} size={18} fill={RED} script anchor="start">
          {t("Verdict", "Verdict")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.3)}>
        <Chip x={120} y={530} w={156} h={44} fill={CREAM} stroke={GREEN_DARK}
          textFill={GREEN_DARK} size={15} script={false}>
          {t("Reflexive ✓", "Reflexive ✓")}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.2)}>
        <Chip x={292} y={530} w={156} h={44} fill={CREAM} stroke={RED}
          textFill={RED} size={15} script={false}>
          {t("Symmetric ✗", "Symmetric ✗")}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3.1)}>
        <Chip x={464} y={530} w={160} h={44} fill={CREAM} stroke={GREEN_DARK}
          textFill={GREEN_DARK} size={15} script={false}>
          {t("Transitive ✓", "Transitive ✓")}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={644} y={558} size={15} fill={RED} weight={800} anchor="start">
          {t("⇒ NOT an equivalence relation", "⇒ equivalence relation NAHIN hai")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5.2)}>
        <T x={540} y={592} size={12} fill={MUTED} weight={700}>
          {t("equivalence needs all three — one failure is enough to end it",
             "equivalence ko teenon chahiye — ek failure hi kaafi hai")}
        </T>
      </Fade>
    </Scene>
  );
}
