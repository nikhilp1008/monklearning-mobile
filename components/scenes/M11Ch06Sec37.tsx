/**
 * M11 Ch06 · Section 37 — "Derangements and the prime exponent in n!"
 * THIRD section of Subtopic 5 "Counting Applications & Advanced Tools"
 * (continues Sec35/36's "hard problems in costume" pacing, but here we
 * INTRODUCE two brand-new named tools instead of recognizing familiar
 * counting in disguise). Canvas 1080×620 · safe x36–1044, y30–596. Spec:
 * SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md ("concept" flow: Anchor →
 * Represent → Explain the move → Land the result → Guardrail).
 *
 * IMPORTANT SCOPE NOTE: this section only STATES both formulas with a
 * concrete illustration — it does NOT derive/prove either. Full proofs
 * (rank formula, derangements, Legendre) are Sec40's job. Every visual here
 * is a "show what the formula counts", never a derivation step.
 *
 * NOTATION: Dₙ uses a plain subscript letter (ₙ) — SCENE_AUTHORING_MATHS.md
 * explicitly approves "D_n (D subscript n)" as fine; Eₚ (subscript p) is the
 * same Unicode subscript-letter category, same fallback-but-safe treatment.
 * Floor brackets ⌊ ⌋ are whitelisted (second glyph audit, no plain
 * substitute exists). "−" (minus sign, not hyphen) and "⋯" (midline
 * ellipsis) are both already proven safe in this codebase (Sec35's
 * "nC2 − mC2", Sec36's "(a₁+1)(a₂+1)⋯"). The visual "✗" mark is always a
 * DRAWN crossD stroke, never a text glyph — the unaudited ✗ character never
 * appears in a <T>.
 *
 * Beats (board_reveal_at_english [0,7.08,18.35,31.15,47.79,61.53,75.69],
 * hinglish [0,8.87,20.39,33.79,47.1,58.28,71.25]):
 *  0 heading (= title, always-on) + underline flourish
 *  [group A: aOn = beat 1..4, erased at beat>=5 — TOOL A: DERANGEMENTS]
 *  1 setup: caption + 4 letters (row, numbered 1-4) / 4 envelopes (row,
 *    numbered 1-4) directly below, each column's gap marked with a drawn
 *    red ✗ (crossD) — "letter i is forbidden from envelope i"
 *  2 why it's hard: caption + a crossed-out red "n!" + arrow → amber chip
 *    naming "Inclusion–Exclusion Principle" (named, not taught)
 *  3 formula lands, boxed (amber outline, green text), built in 2 stages:
 *    "Dₙ = n! (" then the alternating series "1 − 1/1! + 1/2! − ⋯ + (−1)ⁿ/n!)"
 *  4 (red-margin guardrail) small-values quick-reference card: D₁..D₅ =
 *    0,1,2,9,44, boxed in red with a small "!" memorize icon
 *  [group A erased at beat>=5 — full board freed for group B]
 *  [group B: bOn = beat>=5, final group, never erased — TOOL B: LEGENDRE]
 *  5 setup: caption naming Legendre's formula + a concrete p=2,n=10 sieve —
 *    numbers 1..10 in a row, amber rings mark multiples of 2 (5 of them),
 *    a second amber ring layers on top for multiples of 4 (2 of them), a
 *    third for multiples of 8 (1 of them) — concentric rings on the SAME
 *    number visually show "counted again" exactly as the setup narration
 *    describes (count multiples of p, then p², then p³, …); a legend line
 *    per tier lands the running counts (5 / 2 / 1) in green
 *  6 (HIGH) general formula lands, boxed: "Eₚ(n!) = ⌊n/p⌋+⌊n/p²⌋+⌊n/p³⌋+⋯",
 *    then an optional tiny worked check reusing the SAME p=2,n=10 example
 *    from beat 5: ⌊10/2⌋+⌊10/4⌋+⌊10/8⌋ = 5+2+1 = 8, stamped with a checkmark
 *
 * Layout plan (boxes = estimated render boxes; longer language counts).
 *  always | title (script 24, red)                                | T mid  | x~256..824 y39..82 (en, shorter) / wider hi
 *  b0 | title underline flourish (amber)                           | Draw  | x300..780 y94
 *  [group A: aOn = beat 1..4, erased at beat>=5]
 *  b1 | caption "Derangement: every letter..." (16,ink,w600)        | T mid | x~320..760 y95..114
 *  b1 | row label "Letters" (14,muted) / "Envelopes" (14,muted)      | T end | x213..262 y158 / x199..262 y222
 *  b1 | 4 letter tiles (52×30) cx300/460/620/780                    | Draw  | y140..170
 *  b1 | 4 letter numbers (16,ink)                                    | T mid| y159 per tile
 *  b1 | 4 envelope tiles (56×38, flap)                                | Draw | y200..238
 *  b1 | 4 envelope numbers (15,ink)                                    | T mid| y230 per tile
 *  b1 | 4 red ✗ crosses (drawn, gap between rows)                       | Draw | y174..197 per col
 *  b1 | caption2 "(each letter forbidden from its own envelope)" (12,muted)| T mid| x~450..630 y252..264
 *  b2 | caption "Direct casework is messy here:" (15,ink,w600)            | T mid| x~416..664 y290..307
 *  b2 | "n!" crossed (22,red,w800)                                        | T/Draw mid| x~407..433 y318..347
 *  b2 | arrow n!→chip (muted)                                             | Draw | x448..556 y332..336
 *  b2 | Chip "Inclusion–Exclusion Principle" (14, amber outline)            | Chip | x565..855 y317..353
 *  b3 | box (620×64, amber)                                                | Draw | x230..850 y380..444
 *  b3 | "Dₙ = n! (" + "1 − 1/1! + ... )" (20,green,w800, 2 segs)             | T st | x~296..784 y401..423
 *  b4 | "!" memorize icon (r10, red)                                        | Fade | x412..456 y466..486
 *  b4 | caption "Small values (memorize!):" (13,red,w700)                    | T mid| x~455..625 y470..484
 *  b4 | card (700×84, red outline)                                           | Draw | x190..890 y495..579
 *  b4 | 5 column labels D₁..D₅ (14,ink,w700)                                  | T mid| cx250/395/540/685/830 y506..521
 *  b4 | 5 values 0/1/2/9/44 (25,green,w800)                                    | T mid| cx250/395/540/685/830 y535..563
 *  [group A erased at beat>=5]
 *  [group B: bOn = beat>=5, final group]
 *  b5 | header "Exponent of p in n!: count multiples..." (16,ink,w600)          | T mid| x~308..772 y96..113
 *  b5 | sublabel "(Legendre's formula)" (13,amber-dk)                            | T mid| x~460..620 y130..144
 *  b5 | 10 numbers 1..10 (18,ink,w700), spaced 58px                               | T mid| x279..801 y186..206
 *  b5 | tier-1 amber rings (2,4,6,8,10)                                            | Draw | rx17 ry15 cy196
 *  b5 | tier-2 amber rings (4,8)                                                    | Draw | rx23 ry20 cy196
 *  b5 | tier-3 amber ring (8)                                                       | Draw | rx29 ry25 cy196
 *  b5 | 3 legend lines "multiples of 2/4/8 → 5/2/1" (14, ink+green)                  | T st | x~407..673 y250..309
 *  b6 | box (600×78, amber)                                                          | Draw | x240..840 y335..413
 *  b6 | "Eₚ(n!) = " + "⌊n/p⌋+⌊n/p²⌋+⌊n/p³⌋+⋯" (24,green,w800, 2 segs)                  | T st | x~289..791 y361..387
 *  b6 | "Quick check — exponent of 2 in 10!:" (13,ink,w600)                            | T mid| x~417..663 y434..448
 *  b6 | "⌊10/2⌋+⌊10/4⌋+⌊10/8⌋ = 5+2+1 = " + green "8" + checkmark (17,w600/800)          | T st | x~369..730 y463..483
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  crossD,
  ringD,
  INK,
  MUTED,
  GREEN,
  RED,
  AMBER,
  AMBER_DARK,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, lineD, checkD } from "./math-kit";

const mult = (weight?: number) => (weight && weight >= 800 ? 0.58 : 0.5);
const estW = (text: string, size: number, weight?: number) => mult(weight) * size * text.length;

type Seg = { text: string; fill: string; weight?: number };

/** Left-anchored segments centered as a whole block at centerX — for
 * term-by-term formula assembly (see math-kit.tsx's layoutSegs precedent in
 * Sec36; local copy here since widths depend on this file's own strings). */
function segRow(segs: Seg[], size: number, centerX: number) {
  const widths = segs.map((s) => estW(s.text, size, s.weight));
  const total = widths.reduce((a, b) => a + b, 0);
  let x = centerX - total / 2;
  return segs.map((s, i) => {
    const sx = x;
    x += widths[i];
    return { ...s, x: sx, w: widths[i] };
  });
}

/** Envelope icon: rectangle + a V-flap line — local one-off device (same
 * reasoning as Sec35's local triD: a single-occurrence drawn glyph doesn't
 * need a new math-kit primitive). */
function envelopeD(x: number, y: number, w: number, h: number): string {
  const flapY = y + h * 0.52;
  return `M ${x} ${y} L ${x + w} ${y} L ${x + w} ${y + h} L ${x} ${y + h} Z M ${x} ${y} L ${x + w / 2} ${flapY} L ${x + w} ${y}`;
}

export default function M11Ch06Sec37({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Group A (beats 1-4: Tool A, derangements — setup, why-it's-hard, the
  // closed form, small-values recall card) is fully erased once Tool B
  // (Legendre, beat 5) needs the whole board. Group B (beats 5-6) is the
  // final group, never erased. Each element's own `on` is bounded to its
  // beat window (rather than a wrapper div's opacity) so the verifier's
  // Fade-opacity visibility check — which walks up to the nearest g.sc-fade,
  // not an arbitrary ancestor — sees the erasure too; seeking back into an
  // earlier beat correctly restores it.
  const aOn = beat >= 1 && beat < 5;
  const bOn = beat >= 5;

  // ---- beat 1: 4 letters / 4 envelopes, column-aligned, ✗ between ----
  const cols = [300, 460, 620, 780];
  const letterY = 140,
    letterH = 30,
    letterW = 52;
  const envY = 200,
    envH = 38,
    envW = 56;
  const letterTilesD = cols.map((x) => roundRectD(x - letterW / 2, letterY, letterW, letterH, 6)).join(" ");
  const envTilesD = cols.map((x) => envelopeD(x - envW / 2, envY, envW, envH)).join(" ");
  const crossesD = cols.map((x) => crossD(x - 8, 177, 16, 16)).join(" ");

  // ---- beat 2: crossed "n!" + arrow + named-technique chip ----
  const nFactX = 420,
    nFactY = 340;
  const nFactW = estW("n!", 22, 800);
  const chipText = "Inclusion–Exclusion Principle";
  const chipW = Math.max(230, estW(chipText, 14, 600) + 30);
  const chipX = 565,
    chipY = 317,
    chipH = 36;

  // ---- beat 3: Dₙ formula, 2 segments ----
  const dFormula = segRow(
    [
      { text: "Dₙ = n! (", fill: GREEN, weight: 800 },
      { text: "1 − 1/1! + 1/2! − ⋯ + (−1)ⁿ/n! )", fill: GREEN, weight: 800 },
    ],
    20,
    540
  );

  // ---- beat 4: small-values recall card ----
  const smallVals = [
    { label: "D₁", value: "0" },
    { label: "D₂", value: "1" },
    { label: "D₃", value: "2" },
    { label: "D₄", value: "9" },
    { label: "D₅", value: "44" },
  ];
  const cardCols = [250, 395, 540, 685, 830];
  const memoCaption = t("Small values (memorize!):", "Chhote values (yaad rakho!):");
  const memoCaptionW = estW(memoCaption, 13, 700);
  const iconX = 540 - memoCaptionW / 2 - 22;

  // ---- beat 5: p=2, n=10 sieve ----
  const numXs = [279, 337, 395, 453, 511, 569, 627, 685, 743, 801];
  const numVals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const numCy = 196;
  const tier1Xs = [337, 453, 569, 685, 801]; // multiples of 2
  const tier2Xs = [453, 685]; // multiples of 4
  const tier3Xs = [685]; // multiples of 8
  const legend1 = segRow(
    [
      { text: t("multiples of 2 → ", "multiples of 2 → "), fill: INK, weight: 600 },
      { text: "5", fill: GREEN, weight: 800 },
    ],
    14,
    540
  );
  const legend2 = segRow(
    [
      { text: t("multiples of 4 → ", "multiples of 4 → "), fill: INK, weight: 600 },
      { text: "2", fill: GREEN, weight: 800 },
    ],
    14,
    540
  );
  const legend3 = segRow(
    [
      { text: t("multiples of 8 → ", "multiples of 8 → "), fill: INK, weight: 600 },
      { text: "1", fill: GREEN, weight: 800 },
    ],
    14,
    540
  );

  // ---- beat 6: Legendre's formula, boxed + tiny worked check ----
  const eFormula = segRow(
    [
      { text: "Eₚ(n!) = ", fill: GREEN, weight: 800 },
      { text: "⌊n/p⌋ + ⌊n/p²⌋ + ⌊n/p³⌋ + ⋯", fill: GREEN, weight: 800 },
    ],
    24,
    540
  );
  const checkLine = segRow(
    [
      { text: "⌊10/2⌋ + ⌊10/4⌋ + ⌊10/8⌋ = 5 + 2 + 1 = ", fill: INK, weight: 600 },
      { text: "8", fill: GREEN, weight: 800 },
    ],
    17,
    540
  );
  const checkLineLastX = checkLine[1].x + checkLine[1].w;

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={70} size={24} fill={RED} script>
          {t("Two named tools examiners love", "Do named tools jo examiners ko pasand hain")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.4)} d={lineD(300, 94, 780, 94)} stroke={AMBER} sw={2} dur={0.6} />

      {/* ===================== Group A — beats 1-4 (Tool A: Derangements) ===================== */}

      {/* beat 1 — setup: letters/envelopes, ✗ marks the forbidden pairing */}
      <Fade on={aOn && beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={108} size={16} fill={INK} weight={600}>
          {t(
            "Derangement: every letter goes into the WRONG envelope.",
            "Derangement: har letter GALAT envelope mein jaata hai."
          )}
        </T>
      </Fade>
      <Draw on={aOn && beat >= 1} delay={dl(1, 0.6)} d={letterTilesD} stroke={INK} sw={1.8} dur={0.5} />
      <Fade on={aOn && beat >= 1} delay={dl(1, 1.3)}>
        {cols.map((x, i) => (
          <T key={x} x={x} y={159} size={16} fill={INK} weight={700}>
            {i + 1}
          </T>
        ))}
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 1.7)}>
        <T x={262} y={158} size={14} fill={MUTED} anchor="end">
          {t("Letters", "Letters")}
        </T>
      </Fade>
      <Draw on={aOn && beat >= 1} delay={dl(1, 2.0)} d={envTilesD} stroke={AMBER_DARK} sw={1.8} dur={0.5} />
      <Fade on={aOn && beat >= 1} delay={dl(1, 2.7)}>
        {cols.map((x, i) => (
          <T key={x} x={x} y={230} size={15} fill={INK} weight={700}>
            {i + 1}
          </T>
        ))}
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 3.1)}>
        <T x={262} y={222} size={14} fill={MUTED} anchor="end">
          {t("Envelopes", "Envelopes")}
        </T>
      </Fade>
      <Draw on={aOn && beat >= 1} delay={dl(1, 3.5)} d={crossesD} stroke={RED} sw={2.2} dur={0.5} />
      <Fade on={aOn && beat >= 1} delay={dl(1, 4.1)}>
        <T x={540} y={260} size={12} fill={MUTED}>
          {t(
            "(each letter is forbidden from its own envelope)",
            "(har letter apne hi envelope se forbidden hai)"
          )}
        </T>
      </Fade>

      {/* beat 2 — why it's hard: not a plain n!, needs a named technique */}
      <Fade on={aOn && beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={302} size={15} fill={INK} weight={600}>
          {t("Direct casework is messy here:", "Direct casework yahan messy hai:")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 0.6)}>
        <T x={nFactX} y={nFactY} size={22} fill={RED} weight={800}>
          n!
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 2}
        delay={dl(2, 0.9)}
        d={crossD(nFactX - nFactW / 2 - 6, nFactY - 22, nFactW + 12, 26)}
        stroke={RED}
        sw={2}
        dur={0.4}
      />
      <Draw
        on={aOn && beat >= 2}
        delay={dl(2, 1.4)}
        d={arrowD(nFactX + nFactW / 2 + 20, 336, chipX - 10, 335)}
        stroke={MUTED}
        sw={1.8}
        dur={0.4}
      />
      <Fade on={aOn && beat >= 2} delay={dl(2, 1.8)}>
        <Chip x={chipX} y={chipY} w={chipW} h={chipH} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={14} script={false}>
          {chipText}
        </Chip>
      </Fade>

      {/* beat 3 — Dₙ formula lands, boxed, built in 2 stages */}
      <Draw
        on={aOn && beat >= 3}
        delay={dl(3, 0)}
        d={roundRectD(230, 380, 620, 64, 14)}
        stroke={AMBER}
        sw={2.4}
        dur={0.8}
      />
      {dFormula.map((s, i) => (
        <Fade key={i} on={aOn && beat >= 3} delay={dl(3, 0.8 + i * 0.7)}>
          <T x={s.x} y={417} size={20} fill={s.fill} weight={800} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}

      {/* beat 4 (red-margin guardrail) — small-values quick-reference card */}
      <Fade on={aOn && beat >= 4} delay={dl(4, 0)}>
        <Circle cx={iconX} cy={476} r={10} fill="none" stroke={RED} strokeWidth={1.8} />
        <T x={iconX} y={479} size={14} fill={RED} weight={800}>
          !
        </T>
      </Fade>
      <Fade on={aOn && beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={480} size={13} fill={RED} weight={700}>
          {memoCaption}
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 4}
        delay={dl(4, 0.9)}
        d={roundRectD(190, 495, 700, 84, 14)}
        stroke={RED}
        sw={2.2}
        dur={0.7}
      />
      <Fade on={aOn && beat >= 4} delay={dl(4, 1.6)}>
        {smallVals.map((v, i) => (
          <T key={v.label} x={cardCols[i]} y={517} size={14} fill={INK} weight={700}>
            {v.label}
          </T>
        ))}
      </Fade>
      <Fade on={aOn && beat >= 4} delay={dl(4, 2.1)}>
        {smallVals.map((v, i) => (
          <T key={v.label} x={cardCols[i]} y={555} size={25} fill={GREEN} weight={800}>
            {v.value}
          </T>
        ))}
      </Fade>

      {/* ===================== Group B — beats 5-6 (Tool B: Legendre's formula) ===================== */}

      {/* beat 5 — setup: p=2, n=10 sieve, concentric rings show "counted again" */}
      <Fade on={bOn && beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={108} size={16} fill={INK} weight={600}>
          {t(
            "Exponent of p in n!: count multiples of p, then p², p³, …",
            "n! mein p ka exponent: p, p², p³ ke multiples count karo"
          )}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 5} delay={dl(5, 0.6)}>
        <T x={540} y={140} size={13} fill={AMBER_DARK} weight={600}>
          {t("(Legendre's formula)", "(Legendre's formula)")}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 5} delay={dl(5, 1.1)}>
        {numXs.map((x, i) => (
          <T key={x} x={x} y={200} size={18} fill={INK} weight={700}>
            {numVals[i]}
          </T>
        ))}
      </Fade>
      <Draw
        on={bOn && beat >= 5}
        delay={dl(5, 1.8)}
        d={tier1Xs.map((x) => ringD(x, numCy, 17, 15)).join(" ")}
        stroke={AMBER}
        sw={2}
        dur={0.6}
      />
      <Fade on={bOn && beat >= 5} delay={dl(5, 2.4)}>
        <T x={legend1[0].x} y={260} size={14} fill={legend1[0].fill} weight={legend1[0].weight} anchor="start">
          {legend1[0].text}
        </T>
        <T x={legend1[1].x} y={260} size={14} fill={legend1[1].fill} weight={legend1[1].weight} anchor="start">
          {legend1[1].text}
        </T>
      </Fade>
      <Draw
        on={bOn && beat >= 5}
        delay={dl(5, 2.9)}
        d={tier2Xs.map((x) => ringD(x, numCy, 23, 20)).join(" ")}
        stroke={AMBER}
        sw={2}
        dur={0.5}
      />
      <Fade on={bOn && beat >= 5} delay={dl(5, 3.4)}>
        <T x={legend2[0].x} y={282} size={14} fill={legend2[0].fill} weight={legend2[0].weight} anchor="start">
          {legend2[0].text}
        </T>
        <T x={legend2[1].x} y={282} size={14} fill={legend2[1].fill} weight={legend2[1].weight} anchor="start">
          {legend2[1].text}
        </T>
      </Fade>
      <Draw
        on={bOn && beat >= 5}
        delay={dl(5, 3.9)}
        d={tier3Xs.map((x) => ringD(x, numCy, 29, 25)).join(" ")}
        stroke={AMBER}
        sw={2}
        dur={0.4}
      />
      <Fade on={bOn && beat >= 5} delay={dl(5, 4.4)}>
        <T x={legend3[0].x} y={304} size={14} fill={legend3[0].fill} weight={legend3[0].weight} anchor="start">
          {legend3[0].text}
        </T>
        <T x={legend3[1].x} y={304} size={14} fill={legend3[1].fill} weight={legend3[1].weight} anchor="start">
          {legend3[1].text}
        </T>
      </Fade>

      {/* beat 6 (HIGH) — Legendre's formula lands, boxed + tiny worked check */}
      <Draw
        on={bOn && beat >= 6}
        delay={dl(6, 0)}
        d={roundRectD(240, 335, 600, 78, 14)}
        stroke={AMBER}
        sw={2.4}
        dur={0.8}
      />
      {eFormula.map((s, i) => (
        <Fade key={i} on={bOn && beat >= 6} delay={dl(6, 0.9 + i * 0.6)}>
          <T x={s.x} y={380} size={24} fill={s.fill} weight={800} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}
      <Fade on={bOn && beat >= 6} delay={dl(6, 2.0)}>
        <T x={540} y={444} size={13} fill={INK} weight={600}>
          {t(
            "Quick check — exponent of 2 in 10!:",
            "Quick check — 10! mein 2 ka exponent:"
          )}
        </T>
      </Fade>
      {checkLine.map((s, i) => (
        <Fade key={i} on={bOn && beat >= 6} delay={dl(6, 2.6 + i * 0.5)}>
          <T x={s.x} y={478} size={17} fill={s.fill} weight={s.weight} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}
      <Draw
        on={bOn && beat >= 6}
        delay={dl(6, 3.6)}
        d={checkD(checkLineLastX + 16, 471, 15)}
        stroke={GREEN}
        sw={2.6}
        dur={0.4}
      />
    </Scene>
  );
}
