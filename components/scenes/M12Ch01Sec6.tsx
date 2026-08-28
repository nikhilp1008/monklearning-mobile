/**
 * M12Ch01 · Section 6 — "The empty-relation trap and a counting twist"
 * Subtopic: Types of Relations  (last of my three consecutive sections)
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * Closing the subtopic, so the board is a two-row grid of six real figures
 * rather than a summary list — every one of them the SAME 3 × 3 lattice
 * vocabulary Sections 4 and 5 established, now on A = {1, 2, 3}.
 *
 * Top row:  the empty relation drawn as a lattice with nothing in it and the
 *           diagonal crossed out in red · the if-then box with its hypothesis
 *           crossed off, which is what "vacuously true" actually means ·
 *           the same nine cells each carrying its two choices, giving 2⁹.
 * Bottom row: the relation that already IS an equivalence relation, with the
 *           two symmetric off-diagonal cells filled · the ringed answer
 *           "pairs to add = 0" and the crossed-out (2, 3) that is the trap ·
 *           and the only two partitions of {1, 2, 3} that keep 1 and 2 in one
 *           block, drawn as blobs — which is the answer "exactly two".
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "the most popular trap in the subtopic"  title + underline + subtitle
 *                                              + the full-width rule
 *  1  "A = {1,2,3}, R₁ = the empty relation"   lattice ①, every cell empty,
 *                                              R₁ = ∅ written beside it
 *  2  "vacuously symmetric and transitive,     the three diagonal cells boxed
 *      but not reflexive"                      red with ✗, and the three
 *                                              marked results underneath
 *  3  "why? they are if-then statements"       the IF / THEN boxes, the IF
 *                                              box crossed out, and the
 *                                              three-line reason
 *  4  "2^(3²) = 2⁹ = 512"                      the nine cells each carrying a
 *                                              2, and the count worked out
 *  5  "R = three self-pairs + (1,2) + (2,1)"   divider + lattice ②, five
 *                                              cells filled, all three pass
 *  6  "so add zero pairs — the trap is (2,3)"  the ringed 0, and (2, 3) drawn
 *                                              and crossed out
 *  7  "exactly two equivalence relations       the two partitions drawn as
 *      contain (1, 2)"                         blobs of dots
 *
 * Visual vocabulary — identical to Sections 4 and 5:
 *   column index = FIRST coordinate, row index = SECOND coordinate ·
 *   lattice rules MUTED with an INK border · diagonal / self-pairs AMBER ·
 *   pairs IN a relation GREEN · anything missing or rejected RED ·
 *   results GREEN_DARK · headings RED · asides MUTED.
 */

import React from "react";
import { Circle, Rect, TSpan } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, ringD, crossD,
  INK, MUTED, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const N = 3;
const IDX = [0, 1, 2];
const RULES = [0, 1, 2, 3];

/* lattice ① — the empty relation (top-left panel) */
const AL = 110, AT = 146, AC = 48;
/* lattice ③ — the nine cells being counted (top-right panel) */
const CL = 760, CT = 150, CC = 44;
/* lattice ② — the relation that is already an equivalence relation */
const BL = 110, BT = 426, BC = 44;

const gx = (L: number, c: number, i: number) => L + c * i + c / 2;

const checkD = (x: number, y: number) =>
  `M ${x - 6} ${y} L ${x - 1.5} ${y + 5} L ${x + 7} ${y - 6}`;
const xMarkD = (x: number, y: number) =>
  `M ${x - 8} ${y - 8} L ${x + 8} ${y + 8} M ${x + 8} ${y - 8} L ${x - 8} ${y + 8}`;

/** R = the three self-pairs plus (1,2) and (2,1) — as [first, second] */
const R2: [number, number][] = [[1, 1], [2, 2], [3, 3], [1, 2], [2, 1]];

export default function M12Ch01Sec6({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — the warning ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("The empty relation — the trap everyone falls for",
             "Empty relation — sabse popular trap")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.1)}
        d="M 280 62 C 460 58, 660 66, 800 60" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.9)}>
        <T x={540} y={82} size={12.5} fill={MUTED} script>
          {t("the single most popular trap in the whole subtopic — slow down here",
             "poore subtopic ka sabse popular trap — yahan thoda slow down karo")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.8)} d="M 40 98 H 1044" stroke={MUTED} sw={1.2} dur={1} />

      {/* ═══════════════════════════════════════════════════════════
          beats 1 and 2 — the empty relation on A = {1, 2, 3}
          ═══════════════════════════════════════════════════════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={40} y={118} size={13} fill={RED} weight={800} anchor="start">
          {t("① A = {1, 2, 3} and R₁ = the empty relation",
             "① A = {1, 2, 3} aur R₁ = empty relation")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        {IDX.map((i) => (
          <T key={`acl${i}`} x={gx(AL, AC, i)} y={138} size={12.5} fill={INK} weight={800}>{`${i + 1}`}</T>
        ))}
        {IDX.map((j) => (
          <T key={`arl${j}`} x={102} y={gx(AT, AC, j) + 5} size={12.5} fill={INK} weight={800} anchor="end">
            {`${j + 1}`}
          </T>
        ))}
      </Fade>
      {RULES.map((i) => (
        <Draw key={`av${i}`} on={beat >= 1} delay={dl(1, 1.4 + i * 0.1)}
          d={`M ${AL + AC * i} ${AT} V ${AT + AC * N}`} stroke={MUTED} sw={1.2} dur={0.5} />
      ))}
      {RULES.map((j) => (
        <Draw key={`ah${j}`} on={beat >= 1} delay={dl(1, 1.8 + j * 0.1)}
          d={`M ${AL} ${AT + AC * j} H ${AL + AC * N}`} stroke={MUTED} sw={1.2} dur={0.5} />
      ))}
      <Draw on={beat >= 1} delay={dl(1, 2.4)}
        d={`M ${AL} ${AT} H ${AL + AC * N} V ${AT + AC * N} H ${AL} Z`} stroke={INK} sw={2} dur={0.9} />
      <Fade on={beat >= 1} delay={dl(1, 3.4)}>
        <T x={266} y={222} size={22} fill={INK} weight={900} anchor="start">R₁ = ∅</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.4)}>
        <T x={266} y={250} size={12} fill={MUTED} weight={700} anchor="start">
          {t("no pairs at all", "koi pair nahin")}
        </T>
      </Fade>

      {/* beat 2 — the diagonal is empty, so reflexivity dies */}
      {IDX.map((i) => (
        <Fade key={`ad${i}`} on={beat >= 2} delay={dl(2, 0.2 + i * 0.3)}>
          <Rect x={AL + AC * i} y={AT + AC * i} width={AC} height={AC}
            fill="none" stroke={RED} strokeWidth={2.2} strokeDasharray="7 5" />
        </Fade>
      ))}
      {IDX.map((i) => (
        <Draw key={`ax${i}`} on={beat >= 2} delay={dl(2, 0.5 + i * 0.3)}
          d={xMarkD(gx(AL, AC, i), gx(AT, AC, i))} stroke={RED} sw={2.6} dur={0.3} />
      ))}
      <Draw on={beat >= 2} delay={dl(2, 1.6)} d={xMarkD(55, 309)} stroke={RED} sw={2.6} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 1.9)}>
        <T x={70} y={314} size={12.5} fill={RED} weight={800} anchor="start">
          {t("not reflexive — no (a, a) at all", "reflexive nahin — koi (a, a) nahin")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 3)} d={checkD(55, 336)} stroke={GREEN_DARK} sw={2.6} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 3.3)}>
        <T x={70} y={338} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("symmetric — vacuously true", "symmetric — vacuously true")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 4.2)} d={checkD(55, 360)} stroke={GREEN_DARK} sw={2.6} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 4.5)}>
        <T x={70} y={362} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("transitive — vacuously true", "transitive — vacuously true")}
        </T>
      </Fade>

      {/* ═══════════════════════════════════════════════════════════
          beat 3 — why vacuous truth works: the IF never fires
          ═══════════════════════════════════════════════════════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={375} y={118} size={13} fill={RED} weight={800} anchor="start">
          {t("② why it is symmetric and transitive",
             "② symmetric aur transitive kyun hai")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={448} y={142} size={12} fill={MUTED} weight={700}>{t("if", "if")}</T>
        <T x={632} y={142} size={12} fill={MUTED} weight={700}>{t("then", "then")}</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.2)}
        d="M 385 152 H 511 V 216 H 385 Z" stroke={RED} sw={2} dur={0.8} fill={CREAM} />
      <Draw on={beat >= 3} delay={dl(3, 1.7)}
        d="M 569 152 H 695 V 216 H 569 Z" stroke={INK} sw={2} dur={0.8} fill={CREAM} />
      <Fade on={beat >= 3} delay={dl(3, 2.3)}>
        <T x={448} y={189} size={14} fill={INK} weight={800}>(a, b) ∈ R</T>
        <T x={632} y={189} size={14} fill={INK} weight={800}>(b, a) ∈ R</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 2.9)} d="M 517 184 H 557 M 549 178 L 557 184 L 549 190"
        stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 3.5)} d={crossD(385, 152, 126, 64)} stroke={RED} sw={2.6} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 4.2)}>
        <T x={480} y={246} size={12.5} fill={RED} weight={800}>
          {t("R is empty ⇒ the IF never fires", "R empty hai ⇒ IF kabhi trigger nahin hota")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5.4)}>
        <T x={480} y={272} size={12.5} fill={INK} weight={700}>
          {t("no pair ⇒ no counterexample", "koi pair nahin ⇒ koi counterexample nahin")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6.6)}>
        <T x={480} y={298} size={12.5} fill={GREEN_DARK} weight={800}>
          {t("⇒ the property holds for free", "⇒ property free mein hold karti hai")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 7.8)}>
        <T x={480} y={324} size={12} fill={MUTED} weight={700}>
          {t("the same argument for transitivity", "wahi argument transitivity ke liye")}
        </T>
      </Fade>

      {/* ═══════════════════════════════════════════════════════════
          beat 4 — the counting warm-up: 2^(3²) = 2⁹ = 512
          ═══════════════════════════════════════════════════════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={725} y={118} size={13} fill={RED} weight={800} anchor="start">
          {t("③ counting warm-up on the three-element set",
             "③ counting warm-up, teen-element set par")}
        </T>
      </Fade>
      {RULES.map((i) => (
        <Draw key={`cv${i}`} on={beat >= 4} delay={dl(4, 0.6 + i * 0.08)}
          d={`M ${CL + CC * i} ${CT} V ${CT + CC * N}`} stroke={MUTED} sw={1.2} dur={0.4} />
      ))}
      {RULES.map((j) => (
        <Draw key={`ch${j}`} on={beat >= 4} delay={dl(4, 0.9 + j * 0.08)}
          d={`M ${CL} ${CT + CC * j} H ${CL + CC * N}`} stroke={MUTED} sw={1.2} dur={0.4} />
      ))}
      <Draw on={beat >= 4} delay={dl(4, 1.3)}
        d={`M ${CL} ${CT} H ${CL + CC * N} V ${CT + CC * N} H ${CL} Z`} stroke={INK} sw={2} dur={0.8} />
      {IDX.map((i) =>
        IDX.map((j) => (
          <Fade key={`c2${i}${j}`} on={beat >= 4} delay={dl(4, 1.8 + (i + j) * 0.14)}>
            <T x={gx(CL, CC, i)} y={gx(CT, CC, j) + 6} size={16} fill={AMBER_DARK} weight={900}>2</T>
          </Fade>
        ))
      )}
      <Fade on={beat >= 4} delay={dl(4, 3.4)}>
        <T x={906} y={196} size={13} fill={INK} weight={800} anchor="start">
          {t("9 cells", "9 cells")}
        </T>
        <T x={906} y={220} size={13} fill={INK} weight={800} anchor="start">
          {t("2 ways each", "2 tarike har ek")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4.2)}>
        <T x={826} y={312} size={22} fill={GREEN_DARK} weight={900}>
          2<TSpan dy={-10} fontSize={15}>3²</TSpan>
          <TSpan dy={10}> = 2</TSpan><TSpan dy={-10} fontSize={15}>9</TSpan>
          <TSpan dy={10}> = 512</TSpan>
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5.4)}>
        <T x={826} y={342} size={12.5} fill={MUTED} weight={700}>
          {t("each of the 9 cells: in R or out", "har cell: R mein ya bahar")}
        </T>
      </Fade>

      {/* ═══════════════════════════════════════════════════════════
          beat 5 — the relation that already passes all three
          ═══════════════════════════════════════════════════════════ */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M 40 372 H 1044" stroke={MUTED} sw={1.3} dur={0.9} />
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={40} y={390} size={13} fill={RED} weight={800} anchor="start">
          {t("④ now R = self-pairs + (1,2), (2,1)", "④ ab R = self-pairs + (1,2), (2,1)")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        {IDX.map((i) => (
          <T key={`bcl${i}`} x={gx(BL, BC, i)} y={416} size={12.5} fill={INK} weight={800}>{`${i + 1}`}</T>
        ))}
        {IDX.map((j) => (
          <T key={`brl${j}`} x={102} y={gx(BT, BC, j) + 5} size={12.5} fill={INK} weight={800} anchor="end">
            {`${j + 1}`}
          </T>
        ))}
      </Fade>
      {RULES.map((i) => (
        <Draw key={`bv${i}`} on={beat >= 5} delay={dl(5, 1.6 + i * 0.09)}
          d={`M ${BL + BC * i} ${BT} V ${BT + BC * N}`} stroke={MUTED} sw={1.2} dur={0.5} />
      ))}
      {RULES.map((j) => (
        <Draw key={`bh${j}`} on={beat >= 5} delay={dl(5, 1.9 + j * 0.09)}
          d={`M ${BL} ${BT + BC * j} H ${BL + BC * N}`} stroke={MUTED} sw={1.2} dur={0.5} />
      ))}
      <Draw on={beat >= 5} delay={dl(5, 2.5)}
        d={`M ${BL} ${BT} H ${BL + BC * N} V ${BT + BC * N} H ${BL} Z`} stroke={INK} sw={2} dur={0.9} />
      {R2.map(([a, b], k) => (
        <Fade key={`b${a}${b}`} on={beat >= 5} delay={dl(5, 3.2 + k * 0.3)}>
          <Rect x={BL + BC * (a - 1)} y={BT + BC * (b - 1)} width={BC} height={BC}
            fill={GREEN} fillOpacity={0.38} />
        </Fade>
      ))}
      <Fade on={beat >= 5} delay={dl(5, 5.2)}>
        <T x={176} y={580} size={12.5} fill={GREEN_DARK} weight={800}>
          {t("reflexive ✓   symmetric ✓   transitive ✓",
             "reflexive ✓   symmetric ✓   transitive ✓")}
        </T>
      </Fade>

      {/* ═══════════════════════════════════════════════════════════
          beat 6 — nothing to add, and the trap that adds anyway
          ═══════════════════════════════════════════════════════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={375} y={390} size={13} fill={RED} weight={800} anchor="start">
          {t("⑤ R is ALREADY an equivalence relation",
             "⑤ R already equivalence relation hai")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={537} y={452} size={24} fill={GREEN_DARK} weight={900}>
          {t("pairs to add = 0", "add karne wale pairs = 0")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 2)} d={ringD(537, 444, 165, 30)} stroke={GREEN_DARK} sw={2.4} dur={0.9} />
      <Fade on={beat >= 6} delay={dl(6, 3.2)}>
        <T x={537} y={508} size={12.5} fill={RED} weight={800}>
          {t("the trap: helpfully adding (2, 3)", "trap: madad karke (2, 3) jod dena")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 4)} d="M 470 522 H 604 V 558 H 470 Z" stroke={RED} sw={2} dur={0.7} fill={CREAM} />
      <Fade on={beat >= 6} delay={dl(6, 4.6)}>
        <T x={537} y={545} size={16} fill={RED} weight={900}>(2, 3)</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 5.2)} d={crossD(470, 522, 134, 36)} stroke={RED} sw={2.6} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 6)}>
        <T x={537} y={582} size={12.5} fill={RED} weight={800}>
          {t("⇒ the classes over-merge", "⇒ classes over-merge ho jaati hain")}
        </T>
      </Fade>

      {/* ═══════════════════════════════════════════════════════════
          beat 7 — the two equivalence relations containing (1, 2)
          ═══════════════════════════════════════════════════════════ */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={725} y={390} size={13} fill={RED} weight={800} anchor="start">
          {t("⑥ which equivalence relations contain (1, 2)?",
             "⑥ (1, 2) kis equivalence relation mein hai?")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={725} y={414} size={13} fill={GREEN_DARK} weight={800} anchor="start">
          {t("answer: exactly 2 — the two partitions below",
             "answer: exactly 2 — neeche do partitions")}
        </T>
      </Fade>
      {/* partition one: {1, 2} and {3} */}
      <Draw on={beat >= 7} delay={dl(7, 1.4)}
        d="M 740 430 H 1030 V 488 H 740 Z" stroke={INK} sw={1.6} dur={0.9} />
      <Draw on={beat >= 7} delay={dl(7, 2)} d={ringD(812, 459, 54, 19)} stroke={GREEN_DARK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 7} delay={dl(7, 2.4)} d={ringD(946, 459, 34, 19)} stroke={GREEN_DARK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 2.8)}>
        <Circle cx={790} cy={459} r={11} fill={CREAM} stroke={INK} strokeWidth={1.6} />
        <Circle cx={834} cy={459} r={11} fill={CREAM} stroke={INK} strokeWidth={1.6} />
        <Circle cx={946} cy={459} r={11} fill={CREAM} stroke={INK} strokeWidth={1.6} />
        <T x={790} y={463} size={12} fill={INK} weight={900}>1</T>
        <T x={834} y={463} size={12} fill={INK} weight={900}>2</T>
        <T x={946} y={463} size={12} fill={INK} weight={900}>3</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3.4)}>
        <T x={885} y={506} size={12} fill={MUTED} weight={700}>
          {t("{1, 2} together, {3} alone", "{1, 2} saath, {3} akela")}
        </T>
      </Fade>
      {/* partition two: everything in one block */}
      <Draw on={beat >= 7} delay={dl(7, 4)}
        d="M 740 522 H 1030 V 574 H 740 Z" stroke={INK} sw={1.6} dur={0.9} />
      <Draw on={beat >= 7} delay={dl(7, 4.5)} d={ringD(885, 548, 118, 17)} stroke={GREEN_DARK} sw={2.2} dur={0.7} />
      <Fade on={beat >= 7} delay={dl(7, 5)}>
        <Circle cx={825} cy={548} r={11} fill={CREAM} stroke={INK} strokeWidth={1.6} />
        <Circle cx={885} cy={548} r={11} fill={CREAM} stroke={INK} strokeWidth={1.6} />
        <Circle cx={945} cy={548} r={11} fill={CREAM} stroke={INK} strokeWidth={1.6} />
        <T x={825} y={552} size={12} fill={INK} weight={900}>1</T>
        <T x={885} y={552} size={12} fill={INK} weight={900}>2</T>
        <T x={945} y={552} size={12} fill={INK} weight={900}>3</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5.5)}>
        <T x={885} y={592} size={12} fill={MUTED} weight={700}>
          {t("{1, 2, 3} all together", "{1, 2, 3} sab saath")}
        </T>
      </Fade>
    </Scene>
  );
}
