/**
 * M12Ch01 · Section 7 — "The archetype: congruence modulo n is an equivalence"
 * Subtopic: Types of Relations
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * The voice walks the model proof end to end: the definition, then reflexive,
 * symmetric and transitive one after another, then the partition into residue
 * classes. So the board is a proof sheet made of PICTURES, not prose: an
 * integer line where a − b is a whole number of n-steps, a self-loop for
 * reflexivity, a two-point arc reversed for symmetry, two hops chained into
 * one for transitivity, and finally ℤ splitting into n labelled buckets.
 *
 * Grid
 *   header band            y  30 –  96   (title, underline, subtitle, rule)
 *   definition band        y 104 – 200   (left: the definition · right: n-steps line)
 *   three proof panels     y 205 – 445   (cols  40–350 | 372–700 | 722–1044)
 *                                        shared rhythm: header 216, sub 238,
 *                                        arc-label 270, line 320, point label 344,
 *                                        result ~390–414, verdict 436
 *   conclusion band        y 452 – 596   (ℤ bar fanning into the residue buckets)
 *
 * Beat map (9 segments, gates 0..8 — every beat used):
 *  0  "the model proof worth memorising"      title + underline + subtitle + rule
 *  1  "fix n; a R b means n divides a − b"    the definition, and an integer line
 *                                             where b reaches a by whole n-steps
 *  2  "reflexive: a − a = 0, n divides 0"     ① header + a line of integers, each
 *                                             carrying its own self-loop
 *  3  "a − a = 0 = n·0, reflexivity holds"    the symbolic line + the ✓ verdict
 *  4  "symmetric: a − b = n k"                ② header + a, b on a line with the
 *                                             arc a → b labelled n k
 *  5  "b − a = −(a − b) = n(−k)"              the reversed arc underneath + ✓
 *  6  "transitive: a − b = n k₁, b − c = n k₂" ③ header + the two hops a→b, b→c
 *  7  "b cancels: a − c = n(k₁ + k₂)"         b struck out, the long arc a → c + ✓
 *  8  "classes are the residues 0 … n − 1"    ℤ splitting into exactly n buckets
 *
 * Visual vocabulary shared with Sections 8 and 9 of this subtopic:
 *   number lines INK with a drawn arrowhead and a MUTED ℤ / ℝ tag ·
 *   elements and points AMBER_DARK · relation arcs and self-loops AMBER_DARK ·
 *   a property that HOLDS is GREEN_DARK · a failure or a trap is RED ·
 *   shaded regions AMBER at low opacity · headings RED, captions MUTED.
 */

import React from "react";
import { Circle, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, crossD,
  INK, MUTED, AMBER_DARK, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

/* ------------------------------------------------------------------ */
/* local path helpers                                                  */
/* ------------------------------------------------------------------ */

/** plain quadratic arc; positive rise bulges UP, negative bulges DOWN */
function arcD(x1: number, y1: number, x2: number, y2: number, rise: number): string {
  const cx = (x1 + x2) / 2;
  const cy = (y1 + y2) / 2 - rise;
  return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
}

/** the same arc, with a drawn head on the far end (tangent-correct) */
function arcArrow(x1: number, y1: number, x2: number, y2: number, rise: number): string {
  const cx = (x1 + x2) / 2;
  const cy = (y1 + y2) / 2 - rise;
  const a = Math.atan2(y2 - cy, x2 - cx);
  const h = 10;
  return (
    `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}` +
    ` M ${x2 - h * Math.cos(a - 0.5)} ${y2 - h * Math.sin(a - 0.5)}` +
    ` L ${x2} ${y2}` +
    ` L ${x2 - h * Math.cos(a + 0.5)} ${y2 - h * Math.sin(a + 0.5)}`
  );
}

/** self-loop sitting above a point, with a head returning into it */
function loopD(cx: number, cy: number, r: number): string {
  const x0 = cx - r * 0.55;
  const y0 = cy - r * 0.7;
  const x1 = cx + r * 0.55;
  const y1 = cy - r * 0.7;
  const c2x = cx + r * 2.2;
  const c2y = cy - r * 3.4;
  const a = Math.atan2(y1 - c2y, x1 - c2x);
  const h = 8.5;
  return (
    `M ${x0} ${y0} C ${cx - r * 2.2} ${cy - r * 3.4}, ${c2x} ${c2y}, ${x1} ${y1}` +
    ` M ${x1 - h * Math.cos(a - 0.55)} ${y1 - h * Math.sin(a - 0.55)}` +
    ` L ${x1} ${y1}` +
    ` L ${x1 - h * Math.cos(a + 0.55)} ${y1 - h * Math.sin(a + 0.55)}`
  );
}

/* ---- beat 1 : the n-step integer line (y = 170) ---- */
const NL_Y = 170;
const NL_B = 444;          // the point b
const NL_A = 700;          // the point a
const HOPS: [number, number][] = [
  [444, 508],
  [508, 572],
  [636, 700],
];
const NL_TICKS = [444, 508, 572, 636, 700];

/* ---- beat 8 : the residue buckets ---- */
const BUCKETS: [number, number][] = [
  [70, 180],
  [290, 180],
  [510, 180],
  [810, 200],
];

export default function M12Ch01Sec7({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — the framing ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={49} size={24} fill={RED} script>
          {t("Congruence mod n — the model proof",
             "Congruence mod n — wo model proof jo yaad karna hai")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)}
        d="M 320 65 C 470 61, 660 69, 792 63" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 2.1)}>
        <T x={540} y={84} size={12.5} fill={MUTED} script>
          {t("the archetype of every equivalence relation you will ever meet",
             "har equivalence relation ka archetype jo tumhe kabhi bhi milega")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3)} d="M 40 96 H 1044" stroke={MUTED} sw={1.2} dur={1} />

      {/* ═══════════ beat 1 — the definition ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={40} y={126} size={15} fill={GREEN_DARK} weight={900} anchor="start">
          {t("a R b  ⟺  n ∣ (a − b)", "a R b  ⟺  n ∣ (a − b)")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={40} y={150} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("fix a positive integer n · a, b integers",
             "ek positive integer n fix karo · a, b integers")}
        </T>
      </Fade>

      {/* the integer line: b reaches a in whole n-steps */}
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={714} y={114} size={12.5} fill={INK} weight={700}>
          {t("a − b lands exactly on a whole number of n-steps",
             "a − b theek n-steps ke whole number pe aata hai")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.6)} d={arrowD(396, NL_Y, 1032, NL_Y)} stroke={INK} sw={2.2} dur={0.8} />
      <Draw on={beat >= 1} delay={dl(1, 3.2)}
        d={NL_TICKS.map((x) => `M ${x} ${NL_Y - 7} V ${NL_Y + 7}`).join(" ")}
        stroke={INK} sw={1.6} dur={0.5} />
      {HOPS.map(([x1, x2], i) => (
        <Draw key={`hop${x1}`} on={beat >= 1} delay={dl(1, 3.7 + i * 0.35)}
          d={arcD(x1, NL_Y - 8, x2, NL_Y - 8, 26)} stroke={AMBER_DARK} sw={2.2} dur={0.4} />
      ))}
      <Fade on={beat >= 1} delay={dl(1, 5)}>
        {HOPS.map(([x1, x2]) => (
          <T key={`hl${x1}`} x={(x1 + x2) / 2} y={138} size={13} fill={AMBER_DARK} weight={900}>n</T>
        ))}
        <T x={604} y={152} size={15} fill={MUTED} weight={900}>⋯</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5.8)}>
        <Circle cx={NL_B} cy={NL_Y} r={5.5} fill={AMBER_DARK} />
        <Circle cx={NL_A} cy={NL_Y} r={5.5} fill={AMBER_DARK} />
        <T x={NL_B} y={192} size={14} fill={INK} weight={900}>b</T>
        <T x={NL_A} y={192} size={14} fill={INK} weight={900}>a</T>
        <T x={1032} y={194} size={13} fill={MUTED} weight={700}>ℤ</T>
      </Fade>

      {/* ═══════════ beat 2 — ① reflexive ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={40} y={216} size={13.5} fill={RED} weight={800} anchor="start">
          {t("① REFLEXIVE — a R a", "① REFLEXIVE — a R a")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={40} y={238} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("a − a = 0 — and 0 is divisible by every n",
             "a − a = 0 — aur 0 har n se divisible hai")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.6)} d={arrowD(46, 320, 296, 320)} stroke={INK} sw={2} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 3.2)}>
        <Circle cx={70} cy={320} r={5.5} fill={AMBER_DARK} />
        <Circle cx={150} cy={320} r={6.5} fill={AMBER_DARK} />
        <Circle cx={250} cy={320} r={5.5} fill={AMBER_DARK} />
        <T x={316} y={325} size={12.5} fill={MUTED} weight={700} anchor="start">ℤ</T>
      </Fade>
      {[70, 150, 250].map((cx, i) => (
        <Draw key={`rl${cx}`} on={beat >= 2} delay={dl(2, 4 + i * 0.5)}
          d={loopD(cx, 320, 10)} stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      ))}
      <Fade on={beat >= 2} delay={dl(2, 5.8)}>
        <T x={150} y={268} size={13} fill={AMBER_DARK} weight={900}>a R a</T>
        <T x={150} y={344} size={14} fill={INK} weight={900}>a</T>
      </Fade>

      {/* ═══════════ beat 3 — the symbolic line + verdict ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={195} y={390} size={17} fill={GREEN_DARK} weight={900}>a − a = 0 = n · 0</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.4)}>
        <T x={40} y={436} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("✓ every integer relates to itself — reflexivity holds",
             "✓ har integer khud se relate karta hai — reflexivity holds")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — ② symmetric ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={372} y={216} size={13.5} fill={RED} weight={800} anchor="start">
          {t("② SYMMETRIC — a R b ⇒ b R a", "② SYMMETRIC — a R b ⇒ b R a")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={372} y={238} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("suppose a − b = n k for some integer k",
             "maan lo a − b = n k, kisi integer k ke liye")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.8)} d="M 400 320 H 676" stroke={INK} sw={2} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 2.3)}>
        <Circle cx={450} cy={320} r={6} fill={AMBER_DARK} />
        <Circle cx={620} cy={320} r={6} fill={AMBER_DARK} />
        <T x={450} y={344} size={14} fill={INK} weight={900}>a</T>
        <T x={620} y={344} size={14} fill={INK} weight={900}>b</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 2.9)}
        d={arcArrow(450, 308, 620, 308, 26)} stroke={AMBER_DARK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 3.6)}>
        <T x={535} y={270} size={13} fill={AMBER_DARK} weight={900}>a − b = n k</T>
      </Fade>

      {/* ═══════════ beat 5 — the sign flip + verdict ═══════════ */}
      <Draw on={beat >= 5} delay={dl(5, 0.3)}
        d={arcArrow(620, 358, 450, 358, -30)} stroke={GREEN_DARK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={535} y={400} size={13} fill={GREEN_DARK} weight={900}>b − a = −(a − b) = n(−k)</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.4)}>
        <T x={372} y={436} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("✓ still a multiple of n — symmetry holds",
             "✓ abhi bhi n ka multiple — symmetry holds")}
        </T>
      </Fade>

      {/* ═══════════ beat 6 — ③ transitive ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={722} y={216} size={13.5} fill={RED} weight={800} anchor="start">
          {t("③ TRANSITIVE — a R b, b R c ⇒ a R c", "③ TRANSITIVE — a R b, b R c ⇒ a R c")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={722} y={238} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("a − b = n k₁ and b − c = n k₂ — add them",
             "a − b = n k₁ aur b − c = n k₂ — inhe jodo")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.8)} d="M 740 320 H 1030" stroke={INK} sw={2} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 2.3)}>
        <Circle cx={770} cy={320} r={6} fill={AMBER_DARK} />
        <Circle cx={880} cy={320} r={6} fill={AMBER_DARK} />
        <Circle cx={990} cy={320} r={6} fill={AMBER_DARK} />
        <T x={770} y={344} size={14} fill={INK} weight={900}>a</T>
        <T x={880} y={344} size={14} fill={INK} weight={900}>b</T>
        <T x={990} y={344} size={14} fill={INK} weight={900}>c</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 2.9)}
        d={arcArrow(770, 308, 880, 308, 24)} stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 6} delay={dl(6, 3.4)}
        d={arcArrow(880, 308, 990, 308, 24)} stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 4)}>
        <T x={825} y={270} size={13} fill={AMBER_DARK} weight={900}>n k₁</T>
        <T x={935} y={270} size={13} fill={AMBER_DARK} weight={900}>n k₂</T>
      </Fade>

      {/* ═══════════ beat 7 — b cancels, the long hop survives ═══════════ */}
      <Draw on={beat >= 7} delay={dl(7, 0.3)} d={crossD(872, 333, 16, 14)} stroke={RED} sw={2.2} dur={0.35} />
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <T x={880} y={296} size={12} fill={RED} weight={800}>
          {t("b cancels", "b cancel")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.8)}
        d={arcArrow(770, 358, 990, 358, -36)} stroke={GREEN_DARK} sw={2.4} dur={0.8} />
      <Fade on={beat >= 7} delay={dl(7, 3)}>
        <T x={880} y={414} size={13.5} fill={GREEN_DARK} weight={900}>a − c = n(k₁ + k₂)</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5)}>
        <T x={722} y={436} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("✓ a multiple of n — transitivity holds",
             "✓ n ka multiple — transitivity holds")}
        </T>
      </Fade>

      {/* ═══════════ beat 8 — ℤ partitions into n residue buckets ═══════════ */}
      <Draw on={beat >= 8} delay={dl(8, 0.1)} d="M 40 452 H 1044" stroke={MUTED} sw={1.3} dur={0.9} />
      <Fade on={beat >= 8} delay={dl(8, 0.6)}>
        <T x={40} y={478} size={13} fill={GREEN_DARK} weight={800} anchor="start">
          {t("all three hold ⇒", "teeno hold karte hain ⇒")}
        </T>
        <T x={40} y={502} size={13} fill={GREEN_DARK} weight={900} anchor="start">
          {t("R is an EQUIVALENCE relation", "R ek EQUIVALENCE relation hai")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <Rect x={300} y={470} width={480} height={34} rx={10} fill={CREAM} stroke={INK} strokeWidth={1.8} />
        <T x={540} y={492} size={19} fill={INK} weight={900}>
          {t("ℤ  —  all the integers", "ℤ  —  saare integers")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 2.2)}>
        <T x={1040} y={478} size={12.5} fill={MUTED} weight={700} anchor="end">
          {t("classes = the residues", "classes = residues")}
        </T>
        <T x={1040} y={502} size={12.5} fill={MUTED} weight={700} anchor="end">
          {t("0, 1, …, n − 1", "0, 1, …, n − 1")}
        </T>
      </Fade>
      {[
        [340, 160],
        [450, 380],
        [560, 600],
        [700, 910],
      ].map(([x1, x2], i) => (
        <Draw key={`fan${x1}`} on={beat >= 8} delay={dl(8, 3 + i * 0.25)}
          d={arrowD(x1, 508, x2, 542)} stroke={MUTED} sw={1.8} dur={0.4} />
      ))}
      {BUCKETS.map(([x, w], i) => (
        <Fade key={`bk${x}`} on={beat >= 8} delay={dl(8, 4.2 + i * 0.4)}>
          <Rect x={x} y={546} width={w} height={44} rx={12} fill={CREAM}
            stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={x + w / 2} y={574} size={18} fill={AMBER_DARK} weight={900}>
            {["[ 0 ]", "[ 1 ]", "[ 2 ]", "[ n − 1 ]"][i]}
          </T>
        </Fade>
      ))}
      <Fade on={beat >= 8} delay={dl(8, 5.8)}>
        <T x={750} y={578} size={22} fill={MUTED} weight={900}>⋯</T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 6.6)}>
        <T x={1040} y={530} size={12} fill={RED} weight={800} anchor="end">
          {t("exactly n buckets", "exactly n buckets")}
        </T>
      </Fade>
    </Scene>
  );
}
