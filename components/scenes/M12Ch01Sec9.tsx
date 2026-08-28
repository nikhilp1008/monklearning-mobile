/**
 * M12Ch01 · Section 9 — "Pitfalls and pro-tips for relations"
 * Subtopic: Types of Relations  (closing section of the subtopic)
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * A summary section is exactly where a board collapses into a bulleted list,
 * so every trap here is drawn as an actual digraph on an actual set: three
 * elements with self-loops, and the loop that is MISSING ringed in red. Trap
 * ① shows two loops present and (c, c) absent; trap ② shows the same three
 * elements with no arrows at all inside a dashed R = ∅ box; trap ③ draws the
 * identity relation, the one relation that is symmetric AND antisymmetric;
 * trap ④ draws the same pair list twice, once on { a, b } where it is
 * reflexive and once on { a, b, c } where it is not. The pro-tip half draws
 * the classification order as a real flow with a red drop-out, and the three
 * counting results as 2 raised to their three exponents.
 *
 * Grid
 *   header band     y  30 –  96
 *   four traps      y 110 – 386   cols 36–270 | 294–528 | 552–786 | 810–1044
 *                                 separators at x = 282, 540, 798
 *                                 shared rhythm: header 124/148, set label ~200,
 *                                 dots cy 250, caption 300/324, verdict 352, note 376
 *   pro-tip band    y 400 – 596   left  x 40–545  : the classification flow
 *                                 right x 560–1040: the three counting exponents
 *                                 divider at x = 552, y 432–572
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "traps that drain marks, then speed"  title + underline + subtitle + rule
 *  1  "a few self-pairs is not reflexivity" trap ①: loops on a and b, (c, c)
 *                                           missing and ringed in red
 *  2  "the empty relation"                  trap ②: the same three elements, no
 *                                           arrows, inside a dashed R = ∅ box
 *  3  "symmetric and antisymmetric are      trap ③: the identity relation drawn —
 *      not opposites"                       every element loops, and it is both
 *  4  "every trait is relative to A"        trap ④: one pair list, two sets —
 *                                           reflexive on { a, b }, not on { a, b, c }
 *  5  "now the speed habits"                the divider + the PRO-TIPS heading
 *  6  "test reflexive first, hunt one       the reflexive → symmetric → transitive
 *      counterexample"                      flow with the red drop-out
 *  7  "the three counting exponents"        2ⁿ², 2ⁿ²⁻ⁿ, 2ⁿ⁽ⁿ⁺¹⁾/²
 *
 * Visual vocabulary shared with Sections 7 and 8 of this subtopic:
 *   elements and relation arrows AMBER_DARK · a property that HOLDS is
 *   GREEN_DARK · a failure, a trap or a missing pair is RED · headings RED,
 *   captions MUTED · CREAM fills for boxes and chips.
 */

import React from "react";
import { Circle, G, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, ringD,
  INK, MUTED, AMBER_DARK, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

/** self-loop sitting above a point, with a head returning into it */
function loopD(cx: number, cy: number, r: number): string {
  const x0 = cx - r * 0.55;
  const y0 = cy - r * 0.7;
  const x1 = cx + r * 0.55;
  const y1 = cy - r * 0.7;
  const c2x = cx + r * 2.2;
  const c2y = cy - r * 3.4;
  const a = Math.atan2(y1 - c2y, x1 - c2x);
  const h = 8;
  return (
    `M ${x0} ${y0} C ${cx - r * 2.2} ${cy - r * 3.4}, ${c2x} ${c2y}, ${x1} ${y1}` +
    ` M ${x1 - h * Math.cos(a - 0.55)} ${y1 - h * Math.sin(a - 0.55)}` +
    ` L ${x1} ${y1}` +
    ` L ${x1 - h * Math.cos(a + 0.55)} ${y1 - h * Math.sin(a + 0.55)}`
  );
}

/** the three-element node row shared by traps ①, ② and ③ */
function Nodes({ xs, cy, r, size }: { xs: number[]; cy: number; r: number; size: number }) {
  return (
    <>
      {xs.map((x, i) => (
        <G key={`n${x}`}>
          <Circle cx={x} cy={cy} r={r} fill={CREAM} stroke={INK} strokeWidth={1.8} />
          <T x={x} y={cy + size * 0.34} size={size} fill={INK} weight={800}>
            {["a", "b", "c"][i]}
          </T>
        </G>
      ))}
    </>
  );
}

const A_X = [76, 153, 230];
const B_X = [334, 411, 488];
const C_X = [592, 669, 746];
const D_TOP = [903, 951];
const D_BOT = [879, 927, 975];

export default function M12Ch01Sec9({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — the framing ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={49} size={24} fill={RED} script>
          {t("Traps that drain marks — and the speed habits",
             "Traps jo marks khaate hain — aur speed habits")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)}
        d="M 300 65 C 460 61, 640 69, 780 63" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 2.1)}>
        <T x={540} y={84} size={12.5} fill={MUTED} script>
          {t("closing Types of Relations — the four slips, then the fast classification routine",
             "Types of Relations close — chaar slips, phir fast classification routine")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3)} d="M 40 96 H 1044" stroke={MUTED} sw={1.2} dur={1} />

      {/* ═══════════ beat 1 — trap ①: a few self-pairs is not reflexivity ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={40} y={124} size={12.5} fill={RED} weight={800} anchor="start">
          {t("① SOME self-pairs ≠ reflexive", "① kuch self-pairs ≠ reflexive")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={40} y={148} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("you need (a, a) for EVERY a ∈ A", "har a ∈ A ke liye (a, a) chahiye")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={153} y={200} size={13} fill={INK} weight={900}>
          {t("A = { a, b, c }", "A = { a, b, c }")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.8)}>
        <Nodes xs={A_X} cy={250} r={9.5} size={12} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.4)} d={loopD(76, 250, 11)} stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 3.9)} d={loopD(153, 250, 11)} stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 4.8)} d={ringD(230, 250, 22, 20)} stroke={RED} sw={2.2} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 5.6)}>
        <T x={153} y={300} size={12} fill={RED} weight={800}>
          {t("(c, c) is missing ⇒ not reflexive", "(c, c) missing hai ⇒ reflexive nahi")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6.6)}>
        <T x={153} y={352} size={12.5} fill={RED} weight={900}>
          {t("✗ NOT reflexive on A", "✗ A par reflexive NAHI")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 7.4)}>
        <T x={153} y={376} size={12} fill={MUTED} weight={700}>
          {t("check every self-pair of A", "A ka har self-pair check karo")}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — trap ②: the empty relation ═══════════ */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M 282 110 V 386" stroke={MUTED} sw={1} dur={0.8} />
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={298} y={124} size={12.5} fill={RED} weight={800} anchor="start">
          {t("② the EMPTY relation", "② EMPTY relation")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={298} y={148} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("vacuously symmetric and transitive", "vacuously symmetric aur transitive")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.4)}>
        <T x={411} y={200} size={15} fill={INK} weight={900}>R = ∅</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <Rect x={312} y={222} width={198} height={58} rx={12}
          fill="none" stroke={MUTED} strokeWidth={1.8} strokeDasharray="7 6" />
        <Nodes xs={B_X} cy={250} r={9.5} size={12} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.4)}>
        <T x={411} y={300} size={12} fill={RED} weight={800}>
          {t("no (a, a) at all ⇒", "ek bhi (a, a) nahi ⇒")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.2)}>
        <T x={411} y={324} size={12} fill={RED} weight={800}>
          {t("never reflexive on a non-empty set", "non-empty set par kabhi reflexive nahi")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6.4)}>
        <T x={411} y={352} size={12.5} fill={RED} weight={900}>
          {t("✗ “∅, so no properties”", "✗ “∅, so no properties”")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 7.4)}>
        <T x={411} y={376} size={12} fill={GREEN_DARK} weight={700}>
          {t("∅ is symmetric and transitive", "∅ symmetric aur transitive hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — trap ③: symmetric vs antisymmetric ═══════════ */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M 540 110 V 386" stroke={MUTED} sw={1} dur={0.8} />
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={556} y={124} size={12.5} fill={RED} weight={800} anchor="start">
          {t("③ symmetric vs antisymmetric", "③ symmetric vs antisymmetric")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <T x={556} y={148} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("they are NOT opposites", "ye opposites NAHI hain")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.4)}>
        <T x={669} y={200} size={13} fill={INK} weight={900}>
          {t("the identity relation", "identity relation")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3)}>
        <Nodes xs={C_X} cy={250} r={9.5} size={12} />
      </Fade>
      {C_X.map((cx, i) => (
        <Draw key={`cl${cx}`} on={beat >= 3} delay={dl(3, 3.6 + i * 0.4)}
          d={loopD(cx, 250, 11)} stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      ))}
      <Fade on={beat >= 3} delay={dl(3, 5.4)}>
        <T x={669} y={300} size={12} fill={GREEN_DARK} weight={900}>
          {t("BOTH symmetric and antisymmetric", "dono symmetric aur antisymmetric")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6.4)}>
        <T x={669} y={324} size={12} fill={MUTED} weight={700}>
          {t("and many relations are neither", "aur kai relations koi bhi nahi")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 7.6)}>
        <T x={669} y={352} size={12.5} fill={RED} weight={900}>
          {t("✗ “not symmetric ⇒ antisymmetric”", "✗ “not symmetric ⇒ antisymmetric”")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 8.6)}>
        <T x={669} y={376} size={12} fill={MUTED} weight={700}>
          {t("it does not hold in general", "ye general mein valid nahi hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — trap ④: every trait is relative to A ═══════════ */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d="M 798 110 V 386" stroke={MUTED} sw={1} dur={0.8} />
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={814} y={124} size={12.5} fill={RED} weight={800} anchor="start">
          {t("④ traits are relative to A", "④ traits set A ke relative")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={814} y={148} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("always state the set", "hamesha set batao")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.2)}>
        <T x={927} y={178} size={12} fill={INK} weight={900}>
          {t("A = { a, b }", "A = { a, b }")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.7)}>
        <Nodes xs={D_TOP} cy={214} r={8} size={11} />
      </Fade>
      {D_TOP.map((cx, i) => (
        <Draw key={`dt${cx}`} on={beat >= 4} delay={dl(4, 3.1 + i * 0.3)}
          d={loopD(cx, 214, 9)} stroke={AMBER_DARK} sw={2} dur={0.4} />
      ))}
      <Fade on={beat >= 4} delay={dl(4, 3.9)}>
        <T x={927} y={240} size={12} fill={GREEN_DARK} weight={900}>
          {t("✓ reflexive on this A", "✓ is A par reflexive")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4.8)}>
        <T x={927} y={268} size={12} fill={INK} weight={800}>
          {t("same pairs, bigger set { a, b, c }", "wahi pairs, bada set { a, b, c }")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5.3)}>
        <Nodes xs={D_BOT} cy={306} r={8} size={11} />
      </Fade>
      {D_BOT.slice(0, 2).map((cx, i) => (
        <Draw key={`db${cx}`} on={beat >= 4} delay={dl(4, 5.8 + i * 0.3)}
          d={loopD(cx, 306, 9)} stroke={AMBER_DARK} sw={2} dur={0.4} />
      ))}
      <Draw on={beat >= 4} delay={dl(4, 6.6)} d={ringD(975, 306, 18, 16)} stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 7.4)}>
        <T x={927} y={352} size={12.5} fill={RED} weight={900}>
          {t("✗ not reflexive on { a, b, c }", "✗ { a, b, c } par reflexive nahi")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8.4)}>
        <T x={927} y={376} size={12} fill={MUTED} weight={700}>
          {t("same list of pairs, different set", "same pairs, alag set")}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — turn to the speed habits ═══════════ */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 40 400 H 1044" stroke={MUTED} sw={1.3} dur={0.9} />
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={540} y={420} size={15} fill={RED} weight={800}>
          {t("PRO-TIPS — classification under time pressure",
             "PRO-TIPS — time pressure mein classification")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 2.4)} d="M 552 432 V 572" stroke={MUTED} sw={1.2} dur={0.9} />

      {/* ═══════════ beat 6 — the classification flow ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={44} y={444} size={12} fill={GREEN_DARK} weight={800} anchor="start">
          {t("① always test REFLEXIVE first", "① hamesha REFLEXIVE pehle test karo")}
        </T>
      </Fade>
      {([
        [44, t("reflexive?", "reflexive?")],
        [196, t("symmetric?", "symmetric?")],
        [348, t("transitive?", "transitive?")],
      ] as [number, string][]).map(([x, label], i) => (
        <Fade key={`bx${x}`} on={beat >= 6} delay={dl(6, 0.9 + i * 0.5)}>
          <Rect x={x} y={454} width={118} height={34} rx={10}
            fill={CREAM} stroke={GREEN_DARK} strokeWidth={1.8} />
          <T x={x + 59} y={475} size={12.5} fill={GREEN_DARK} weight={800}>{label}</T>
        </Fade>
      ))}
      <Draw on={beat >= 6} delay={dl(6, 1.4)} d={arrowD(164, 471, 194, 471)} stroke={MUTED} sw={1.8} dur={0.25} />
      <Draw on={beat >= 6} delay={dl(6, 1.9)} d={arrowD(316, 471, 346, 471)} stroke={MUTED} sw={1.8} dur={0.25} />
      <Draw on={beat >= 6} delay={dl(6, 2.6)} d={arrowD(103, 492, 103, 516)} stroke={RED} sw={2.2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 3.2)}>
        <T x={110} y={534} size={12} fill={RED} weight={800} anchor="start">
          {t("one missing (a, a) ⇒ not an equivalence, stop",
             "ek (a, a) missing ⇒ equivalence nahi, ruk jao")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4.6)}>
        <T x={40} y={560} size={12.5} fill={INK} weight={800} anchor="start">
          {t("for symmetric & transitive — hunt ONE counterexample, don't check everything",
             "symmetric & transitive ke liye — ek counterexample dhoondo, sab mat check karo")}
        </T>
      </Fade>

      {/* ═══════════ beat 7 — the three counting exponents ═══════════ */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={560} y={440} size={12.5} fill={RED} weight={800} anchor="start">
          {t("② memorise the three counting exponents", "② teen counting exponents yaad rakho")}
        </T>
      </Fade>
      {([
        [478, t("all relations on A", "A par saare relations"), "n²"],
        [518, t("reflexive relations", "reflexive relations"), "n² − n"],
        [558, t("symmetric relations", "symmetric relations"), "n(n + 1)/2"],
      ] as [number, string, string][]).map(([yb, name, expo], i) => (
        <Fade key={`ex${yb}`} on={beat >= 7} delay={dl(7, 1 + i * 1.2)}>
          <Rect x={560} y={yb - 28} width={470} height={38} rx={11}
            fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.5} />
          <T x={574} y={yb} size={13} fill={INK} weight={800} anchor="start">{name}</T>
          <T x={846} y={yb} size={20} fill={GREEN_DARK} weight={900}>2</T>
          <T x={861} y={yb - 13} size={13} fill={GREEN_DARK} weight={900} anchor="start">{expo}</T>
        </Fade>
      ))}
      <Fade on={beat >= 7} delay={dl(7, 5)}>
        <T x={1040} y={586} size={12} fill={MUTED} weight={700} anchor="end">
          {t("n = |A| — count first, then classify", "n = |A| — pehle count, phir classify")}
        </T>
      </Fade>
    </Scene>
  );
}
