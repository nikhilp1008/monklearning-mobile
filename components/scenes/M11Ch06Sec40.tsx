/**
 * M11 Ch06 · Section 40 — "Proofs II: rank, derangements, Legendre"
 * SIXTH section of Subtopic 5 "Counting Applications & Advanced Tools"
 * (section 6 of 9), sibling to Sec39's "Proofs I". Canvas 1080×620 · safe
 * x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md
 * ("concept" flow, three compact procedures/proofs back to back).
 *
 * FLAGGED FOR EXTRA SCRUTINY — this section packs three procedures:
 *  - PROCEDURE 1 (beat 1): the rank-of-a-word algorithm, walked through with
 *    an actual worked example (Sec38 only stated the formula). Word chosen:
 *    DUCK — alphabetized C,D,K,U — hand-verified rank = 11 (also confirmed
 *    by brute-force dictionary listing: C... 1-6, D C.. 7-9, D K.. 10, D U C K
 *    = 11th — see the row/column math below).
 *  - PROOF 2 (beats 2-3, the CENTERPIECE): the derangement closed form is
 *    DERIVED via inclusion–exclusion, not asserted (Sec37 only stated
 *    Dₙ=n!Σ(−1)ⁱ/i!). The crux algebraic step nCi·(n−i)!=n!/i! is shown as
 *    its own equation, not skipped.
 *  - PROOF 3 (beats 4-5): Legendre's formula (Sec37 showed a p=2,n=10
 *    ring-sieve on a number row) is reformalized here as an explicit
 *    counting argument using a DIFFERENT example (p=3,n=12) and a different
 *    visual device — descending "staircase" tiles (the section's own title
 *    metaphor) instead of concentric rings, with each tier's sublabel
 *    spelling out which set is counted and why nesting prevents double count.
 *
 * NOTATION: nCi symbolic → plain text "nCi". Σ used bare/prefix-style, no
 * attached i=0..n bounds (no true 2-D math / stacked-bounds rule) — the
 * bound range is carried by a plain-text sub-caption "(i = 0, 1, …, n)"
 * instead, same device as Sec38's "(sum over k = 1, 2, 3, …)". "·" for
 * symbolic products (nCi · (n−i)!), "×" for literal-number products (1 × 6),
 * matching Sec38 (aC2 · bC2) vs Sec39 (the FPC "×" between two axes)
 * respectively. "−" is the proper minus sign throughout (not a hyphen).
 * "!" factorial, "⌊ ⌋" floor brackets — both previously whitelisted.
 * Fractions flattened inline: "n!/i!", "n!/(i!·(n−i)!)" (bracketed compound
 * denominator, same device as Sec38's divisor-sum formula).
 *
 * Beats (board_reveal_at_english [0,7.51,30.21,40.02,59.9,76.63,86.95],
 * hinglish [0,6.4,25.86,38.06,54.95,70.14,81.07]):
 *  0 heading (= title, always-on) + amber underline flourish
 *  [group R: rOn = beat===1, erased at beat>=2 — PROCEDURE 1: RANK]
 *  1 algorithm restated (2 lines) + worked example "DUCK": word tiles
 *    (D,U,C,K, numbered 1-4) + an alphabetized "unused pool" (C,D,K,U) that
 *    gets crossed out letter-by-letter as each position is scanned + a
 *    5-column table (Pos/Letter/smaller-unused count/(right)!/product)
 *    filled row by row in sync with the pool crossing + Sum line + boxed
 *    final answer "Rank(DUCK) = 10 + 1 = 11".
 *  [group R erased at beat>=2 — full board freed for Proof 2]
 *  [group D: dOn = beat 2..3, erased at beat>=4 — PROOF 2: DERANGEMENTS]
 *  2 setup: "start from n!, exclude fixing ≥1 object" line + a 2-circle
 *    Venn (real VennShade overlap) labeled "fixes A" / "fixes B" — the
 *    shaded lens IS the reason a naive single subtraction fails — + a
 *    closing line naming inclusion–exclusion as the fix.
 *  3 (the derivation, most room given) fix a SET of i objects → the rest
 *    arrange in (n−i)! ways (overcounts perms fixing MORE than i, hence the
 *    alternating sign) → nCi ways to choose the fixed set → term
 *    (−1)ⁱ·nCi·(n−i)! → THE CRUX STEP shown as its own equation:
 *    "nCi · (n−i)! = n!/(i!·(n−i)!) · (n−i)! = n!/i!" (underlined) + a
 *    plain-word reinforcement → factor n! out → boxed final result, two
 *    lines: "Dₙ = Σ(−1)ⁱ·nCi·(n−i)!" = "n!·Σ(−1)ⁱ/i!", with the i-range in
 *    a sub-caption.
 *  [group D erased at beat>=4 — full board freed for Proof 3]
 *  [group L: lOn = beat>=4, final group, never erased — PROOF 3: LEGENDRE]
 *  4 setup: "⌊n/p⌋ numbers among 1..n are multiples of p, each ≥1 factor"
 *    line + concrete p=3,n=12 example + a 3-tile DESCENDING STAIRCASE
 *    (⌊12/3⌋=4, ⌊12/9⌋=1, ⌊12/27⌋=0), each tile sublabelled with the actual
 *    set of qualifying numbers, + an insight line: each tier's multiples
 *    are a SUBSET of the one before → nothing missed, nothing double-counted.
 *  5 (HIGH) general formula lands, boxed: "Eₚ(n!) = ⌊n/p⌋+⌊n/p²⌋+⌊n/p³⌋+⋯"
 *    + a quick check reusing the SAME p=3,n=12 example from beat 4:
 *    ⌊12/3⌋+⌊12/9⌋+⌊12/27⌋ = 4+1+0 = 5, stamped with a checkmark.
 *  6 (red-margin guardrail, final) small red card: "'None correct' →
 *    derangement → inclusion–exclusion, NEVER a plain n!."
 *
 * Layout plan (boxes = estimated render boxes; longer language counts).
 *  always | title (script 24, red)                                    | T mid | x~250..830 y38..82
 *  b0 | title underline flourish (amber)                               | Draw | x300..780 y94
 *  [group R: rOn = beat===1, erased at beat>=2]
 *  b1 | cap1 "Rank: scan left to right..." (16,ink,w600)                | T mid | x~340..740 y106..123
 *  b1 | cap2 "(unused letters smaller...)" (14,ink,w600)                 | T mid | x~250..830 y140..154
 *  b1 | subcap "Example — word DUCK..." (13,amber-dk,w700)                | T mid | x~381..699 y170..184
 *  b1 | position labels 1-4 (12,muted,w600) cx426/502/578/654              | T mid | y202..214
 *  b1 | 4 word tiles (48×32, ink outline) cx426/502/578/654                | Draw | x402..678 y224..256
 *  b1 | tile letters D/U/C/K (16,ink,w800)                                 | T mid | y245 per tile
 *  b1 | pool row "Unused pool:" + C D K U (13/15,muted/ink,w600/700)        | T st/mid| x345..585 y271..285
 *  b1 | table header Pos/Letter/smaller/(right)!/product (14,ink,w700)      | T mid | x230..870 y298..316
 *  b1 | separator line (ink, sw1.4)                                        | Draw | x230..850 y328
 *  b1 | row1..row4 (14,ink+green product,w700/800)                          | T mid | x230..870 y336..452
 *  b1 | 4 pool cross-outs (red, sequenced D,U,C,K)                           | Draw | ~16×16 each, y267..283
 *  b1 | sum line "Sum = 6+4+0+0 = 10" (18,ink,w700)                          | T mid | x~430..650 y464..484
 *  b1 | final box (380×50, amber) + "Rank(DUCK) = 10+1 = 11" (20,green,w800) | Draw/T| x350..730 y496..546
 *  [group R erased at beat>=2]
 *  [group D: dOn = beat 2..3, erased at beat>=4]
 *  b2 | capMerged "Start from n! permutations..." (15,ink,w600)             | T mid | x~250..830 y106..123
 *  b2 | 2 circles (r38, ink outline) cx510/570 cy172                        | Draw | x472..608 y134..210
 *  b2 | VennShade overlap lens (amber, opacity.35)                          | Fade | inside circles
 *  b2 | label "fixes A" (13,ink,w700) / "fixes B" (13,ink,w700)              | T end/st| x447..472 / x608..633 y172..180
 *  b2 | concluding line "→ 'fix A' and 'fix B' can OVERLAP..." (14,red,w600) | T mid | x~180..900 y219..237
 *  b3 | line1 "Fix a SET of i objects..." (14,ink,w600)                      | T mid | x~320..760 y253..268
 *  b3 | line2 "(n−i)! ways — but this overcounts..." (13,amber-dk,w600)       | T mid | x~260..820 y284..298
 *  b3 | line3 "nCi ways to choose... term=..." (14,ink,w700)                  | T mid | x~320..760 y314..329
 *  b3 | crux "nCi·(n−i)! = n!/(i!·(n−i)!)·(n−i)! = n!/i!" (17,green,w800)      | T mid | x~284..796 y345..363
 *  b3 | underline under crux (amber, sw2)                                      | Draw | x300..780 y367
 *  b3 | note "(the (n−i)! cancels...)" (12,muted)                               | T mid | x~330..750 y378..392
 *  b3 | factor line "Factor n! out..." (13,ink,w600)                            | T mid | x~360..720 y418..432
 *  b3 | box (480×126, amber) x300..780 y444..570                                | Draw | x300..780 y444..570
 *  b3 | "Dₙ = Σ(−1)ⁱ·nCi·(n−i)!" (22,green,w800)                                 | T mid | x~387..693 y463..487
 *  b3 | "= n!·Σ(−1)ⁱ/i!" (22,green,w800)                                          | T mid | x~440..640 y501..525
 *  b3 | "(i = 0, 1, …, n)" (12,muted)                                             | T mid | x~489..591 y542..550
 *  [group D erased at beat>=4]
 *  [group L: lOn = beat>=4, final group]
 *  b4 | cap1 "Among 1..n, exactly ⌊n/p⌋..." (15,ink,w600)                        | T mid | x~285..795 y106..123
 *  b4 | example "Example: p = 3, n = 12" (13,amber-dk,w600)                       | T mid | x~450..630 y139..153
 *  b4 | tile1 (170×44, ink) x310..480 y170..214 "⌊12/3⌋ = 4" (16,green,w700)       | Draw/T| cx395 y197
 *  b4 | tile1 sublabel "{3, 6, 9, 12}" (12,muted)                                  | T mid | x~350..440 y226..240
 *  b4 | riser1 (ink, sw1.6)                                                        | Draw | x480..490 y214..222
 *  b4 | tile2 (170×44) x490..660 y222..266 "⌊12/9⌋ = 1" (16,green,w700)             | Draw/T| cx575 y249
 *  b4 | tile2 sublabel "{9}" (12,muted)                                            | T mid | x~565..585 y278..292
 *  b4 | riser2 (ink, sw1.6)                                                        | Draw | x660..670 y266..274
 *  b4 | tile3 (170×44) x670..840 y274..318 "⌊12/27⌋ = 0" (16,green,w700)            | Draw/T| cx755 y301
 *  b4 | tile3 sublabel "{ } (27 > 12)" (12,muted)                                   | T mid | x~700..810 y330..344
 *  b4 | insight "Each tier's multiples are a SUBSET..." (14,green,w700)             | T mid | x~215..865 y360..378
 *  b5 | box (560×86, amber) x260..820 y388..474                                     | Draw | x260..820 y388..474
 *  b5 | "Eₚ(n!) = ⌊n/p⌋+⌊n/p²⌋+⌊n/p³⌋+⋯" (24,green,w800)                             | T mid | x~276..804 y407..432
 *  b5 | "(sum continues until pᵏ > n)" (12,muted)                                    | T mid | x~446..634 y448..461
 *  b5 | checkline "Check: ⌊12/3⌋+⌊12/9⌋+⌊12/27⌋=4+1+0=" + green "5" (15,ink/green)    | T st | x~247..570 y484..503
 *  b5 | checkmark (green, sw2.6)                                                     | Draw | ~15×15 after "5"
 *  b6 (red-margin guardrail, final) card (680×50, red) x200..880 y515..565            | Draw | x200..880 y515..565
 *  b6 | "'None correct' → derangement → ... NEVER a plain n!." (14,red,w700)           | T mid | x~302..778 y536..550
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  crossD,
  INK,
  MUTED,
  GREEN,
  RED,
  AMBER,
  AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, lineD, checkD, circleD, VennShade } from "./math-kit";

const mult = (weight?: number) => (weight && weight >= 800 ? 0.58 : 0.5);
const estW = (text: string, size: number, weight?: number) => mult(weight) * size * text.length;

type Seg = { text: string; fill: string; weight?: number };

/** Left-anchored segments centered as a whole block at centerX — for
 * mixed-colour lines (same device as Sec37/Sec39's local segRow; a local
 * copy since widths depend on this file's own strings). */
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

export default function M11Ch06Sec40({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Group R (beat 1: rank-of-a-word procedure) is fully erased once Proof 2
  // (beat 2) needs the whole board. Group D (beats 2-3: derangement proof) is
  // in turn erased once Proof 3 (beat 4) lands for good. Each element's own
  // `on` is bounded to its beat window (rather than a wrapper div's opacity)
  // so the verifier's Fade-opacity visibility check — which walks up to the
  // nearest g.sc-fade, not an arbitrary ancestor — sees the erasure too;
  // seeking back into an earlier beat correctly restores it.
  const rOn = beat === 1;
  const dOn = beat >= 2 && beat < 4;
  const lOn = beat >= 4;

  // ---- beat 1: rank of "DUCK" — alphabetized C,D,K,U ----
  const tileCx = [426, 502, 578, 654];
  const wordLetters = ["D", "U", "C", "K"];
  const tileY = 224,
    tileW = 48,
    tileH = 32;
  const tilesD = tileCx.map((x) => roundRectD(x - tileW / 2, tileY, tileW, tileH, 6)).join(" ");

  const poolLetters = ["C", "D", "K", "U"];
  const poolX = [458, 498, 538, 578];
  const poolY = 280;

  const cols = { pos: 260, letter: 350, count: 480, rem: 650, prod: 810 };
  const rankRows = [
    { y: 351, pos: "1", letter: "D", count: "1", rem: "3! = 6", prod: "1 × 6 = 6", crossX: 498 },
    { y: 382, pos: "2", letter: "U", count: "2", rem: "2! = 2", prod: "2 × 2 = 4", crossX: 578 },
    { y: 413, pos: "3", letter: "C", count: "0", rem: "1! = 1", prod: "0 × 1 = 0", crossX: 458 },
    { y: 444, pos: "4", letter: "K", count: "0", rem: "0! = 1", prod: "0 × 1 = 0", crossX: 538 },
  ];

  // ---- beat 2: derangement setup — two overlapping "fixes" circles ----
  const vCxL = 510,
    vCxR = 570,
    vCy = 172,
    vR = 38;
  const circlesD = circleD(vCxL, vCy, vR) + " " + circleD(vCxR, vCy, vR);

  // ---- beat 3: derivation — final boxed formula ----
  const dBoxX = 300,
    dBoxY = 444,
    dBoxW = 480,
    dBoxH = 126;

  // ---- beat 4: Legendre staircase, p=3, n=12 ----
  const tiles = [
    { x: 310, y: 170, label: "⌊12/3⌋ = 4", sub: "{3, 6, 9, 12}", cx: 395 },
    { x: 490, y: 222, label: "⌊12/9⌋ = 1", sub: "{9}", cx: 575 },
    { x: 670, y: 274, label: "⌊12/27⌋ = 0", sub: t("{ } (27 > 12)", "{ } (27 > 12)"), cx: 755 },
  ];
  const legTileW = 170,
    legTileH = 44;
  const riser1D = `M 480 214 L 480 222 L 490 222`;
  const riser2D = `M 660 266 L 660 274 L 670 274`;

  // ---- beat 5: Legendre formula box + quick check ----
  const eBoxX = 260,
    eBoxY = 388,
    eBoxW = 560,
    eBoxH = 86;
  const checkLine = segRow(
    [
      { text: "Check: ⌊12/3⌋ + ⌊12/9⌋ + ⌊12/27⌋ = 4 + 1 + 0 = ", fill: INK, weight: 600 },
      { text: "5", fill: GREEN, weight: 800 },
    ],
    15,
    440
  );
  const checkLineLastX = checkLine[1].x + checkLine[1].w;

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={70} size={24} fill={RED} script>
          {t("Rank, derangements, and the prime staircase", "Rank, derangements, aur prime ki staircase")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.4)} d={lineD(300, 94, 780, 94)} stroke={AMBER} sw={2} dur={0.6} />

      {/* ===================== Group R — beat 1 (Procedure 1: Rank) ===================== */}

      <Fade on={rOn} delay={dl(1, 0)}>
        <T x={540} y={118} size={16} fill={INK} weight={600}>
          {t("Rank: scan left to right, letter by letter.", "Rank: word ko left se right, letter by letter scan karo.")}
        </T>
      </Fade>
      <Fade on={rOn} delay={dl(1, 0.5)}>
        <T x={540} y={150} size={14} fill={INK} weight={600}>
          {t(
            "(unused letters smaller than current) × (positions right)!; sum, then +1.",
            "(current se chhoti UNUSED letters) × (right ki positions)!; sum karo, phir +1."
          )}
        </T>
      </Fade>
      <Fade on={rOn} delay={dl(1, 1.0)}>
        <T x={540} y={180} size={13} fill={AMBER_DARK} weight={700}>
          {t("Example — word DUCK, alphabet order C, D, K, U:", "Example — DUCK word lo, alphabet order C, D, K, U:")}
        </T>
      </Fade>

      <Fade on={rOn} delay={dl(1, 1.5)}>
        {tileCx.map((x, i) => (
          <T key={x} x={x} y={210} size={12} fill={MUTED} weight={600}>
            {i + 1}
          </T>
        ))}
      </Fade>
      <Draw on={rOn} delay={dl(1, 1.9)} d={tilesD} stroke={INK} sw={1.8} dur={0.5} />
      <Fade on={rOn} delay={dl(1, 2.4)}>
        {tileCx.map((x, i) => (
          <T key={x} x={x} y={245} size={16} fill={INK} weight={800}>
            {wordLetters[i]}
          </T>
        ))}
      </Fade>

      <Fade on={rOn} delay={dl(1, 2.8)}>
        <T x={345} y={poolY} size={13} fill={MUTED} weight={600} anchor="start">
          {t("Unused pool:", "Baaki (unused) pool:")}
        </T>
        {poolLetters.map((l, i) => (
          <T key={l} x={poolX[i]} y={poolY} size={15} fill={INK} weight={700}>
            {l}
          </T>
        ))}
      </Fade>

      <Fade on={rOn} delay={dl(1, 3.3)}>
        <T x={cols.pos} y={312} size={14} fill={INK} weight={700}>
          Pos
        </T>
        <T x={cols.letter} y={312} size={14} fill={INK} weight={700}>
          Letter
        </T>
        <T x={cols.count} y={312} size={14} fill={INK} weight={700}>
          smaller
        </T>
        <T x={cols.rem} y={312} size={14} fill={INK} weight={700}>
          (right)!
        </T>
        <T x={cols.prod} y={312} size={14} fill={INK} weight={700}>
          product
        </T>
      </Fade>
      <Draw on={rOn} delay={dl(1, 3.7)} d={lineD(230, 328, 850, 328)} stroke={MUTED} sw={1.4} dur={0.4} />

      {rankRows.map((row, i) => (
        <React.Fragment key={row.y}>
          <Fade on={rOn} delay={dl(1, 4.1 + i * 0.9)}>
            <T x={cols.pos} y={row.y} size={14} fill={INK} weight={700}>
              {row.pos}
            </T>
            <T x={cols.letter} y={row.y} size={14} fill={INK} weight={700}>
              {row.letter}
            </T>
            <T x={cols.count} y={row.y} size={14} fill={INK} weight={700}>
              {row.count}
            </T>
            <T x={cols.rem} y={row.y} size={14} fill={INK} weight={700}>
              {row.rem}
            </T>
            <T x={cols.prod} y={row.y} size={14} fill={GREEN} weight={800}>
              {row.prod}
            </T>
          </Fade>
          <Draw
            on={rOn}
            delay={dl(1, 4.5 + i * 0.9)}
            d={crossD(row.crossX - 8, poolY - 12, 16, 16)}
            stroke={RED}
            sw={2}
            dur={0.3}
          />
        </React.Fragment>
      ))}

      <Fade on={rOn} delay={dl(1, 8.1)}>
        <T x={540} y={478} size={18} fill={INK} weight={700}>
          Sum = 6 + 4 + 0 + 0 = 10
        </T>
      </Fade>
      <Draw
        on={rOn}
        delay={dl(1, 8.7)}
        d={roundRectD(350, 496, 380, 50, 14)}
        stroke={AMBER}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={rOn} delay={dl(1, 9.4)}>
        <T x={540} y={528} size={20} fill={GREEN} weight={800}>
          Rank(DUCK) = 10 + 1 = 11
        </T>
      </Fade>

      {/* ===================== Group D — beats 2-3 (Proof 2: Derangements) ===================== */}

      <Fade on={dOn && beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={118} size={15} fill={INK} weight={600}>
          {t(
            "Start from n! permutations; exclude any that fix AT LEAST one object.",
            "n! permutations se shuru karo; jo bhi KAM SE KAM ek object fix kare use exclude karo."
          )}
        </T>
      </Fade>
      <Draw on={dOn && beat >= 2} delay={dl(2, 0.6)} d={circlesD} stroke={INK} sw={1.8} dur={0.6} />
      <VennShade
        on={dOn && beat >= 2}
        delay={dl(2, 1.2)}
        include={[
          { cx: vCxL, cy: vCy, r: vR },
          { cx: vCxR, cy: vCy, r: vR },
        ]}
        x={460}
        y={124}
        w={160}
        h={96}
        fill={AMBER}
        opacity={0.4}
      />
      <Fade on={dOn && beat >= 2} delay={dl(2, 1.6)}>
        <T x={447} y={176} size={13} fill={INK} weight={700} anchor="end">
          {t("fixes A", "fix A")}
        </T>
      </Fade>
      <Fade on={dOn && beat >= 2} delay={dl(2, 1.8)}>
        <T x={633} y={176} size={13} fill={INK} weight={700} anchor="start">
          {t("fixes B", "fix B")}
        </T>
      </Fade>
      <Fade on={dOn && beat >= 2} delay={dl(2, 2.3)}>
        <T x={540} y={233} size={14} fill={RED} weight={600}>
          {t(
            "→ 'fix A' and 'fix B' can OVERLAP — one subtraction over-corrects; inclusion–exclusion fixes it.",
            "→ 'fix A' aur 'fix B' OVERLAP ho sakte — ek subtraction galat hoga; inclusion–exclusion isse thik karta hai."
          )}
        </T>
      </Fade>

      <Fade on={dOn && beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={264} size={14} fill={INK} weight={600}>
          {t(
            "Fix a SET of i objects in place; the rest arrange freely:",
            "i objects ka ek SET fix karo; baaki free arrange honge:"
          )}
        </T>
      </Fade>
      <Fade on={dOn && beat >= 3} delay={dl(3, 0.6)}>
        <T x={540} y={294} size={13} fill={AMBER_DARK} weight={600}>
          {t(
            "(n−i)! ways — but this overcounts perms fixing MORE than those i)",
            "(n−i)! tareeke — but isme wo perms bhi count ho jaate jo i se ZYADA fix karte hain)"
          )}
        </T>
      </Fade>
      <Fade on={dOn && beat >= 3} delay={dl(3, 1.2)}>
        <T x={540} y={325} size={14} fill={INK} weight={700}>
          {t(
            "nCi ways to choose the fixed set → term = (−1)ⁱ · nCi · (n−i)!",
            "fixed set choose karne ke nCi tareeke → term = (−1)ⁱ · nCi · (n−i)!"
          )}
        </T>
      </Fade>
      <Fade on={dOn && beat >= 3} delay={dl(3, 1.9)}>
        <T x={540} y={358} size={17} fill={GREEN} weight={800}>
          nCi · (n−i)! = n!/(i! · (n−i)!) · (n−i)! = n!/i!
        </T>
      </Fade>
      <Draw on={dOn && beat >= 3} delay={dl(3, 2.5)} d={lineD(300, 367, 780, 367)} stroke={AMBER} sw={2} dur={0.5} />
      <Fade on={dOn && beat >= 3} delay={dl(3, 3.0)}>
        <T x={540} y={388} size={12} fill={MUTED}>
          {t(
            "(the (n−i)! cancels — nCi · (n−i)! always equals n!/i!)",
            "((n−i)! cancel ho jaata — nCi · (n−i)! hamesha n!/i! ke barabar)"
          )}
        </T>
      </Fade>
      <Fade on={dOn && beat >= 3} delay={dl(3, 3.6)}>
        <T x={540} y={428} size={13} fill={INK} weight={600}>
          {t("Factor n! out of every term in the sum:", "Sum ke har term se n! factor nikaalo:")}
        </T>
      </Fade>
      <Draw
        on={dOn && beat >= 3}
        delay={dl(3, 4.2)}
        d={roundRectD(dBoxX, dBoxY, dBoxW, dBoxH, 16)}
        stroke={AMBER}
        sw={2.4}
        dur={0.8}
      />
      <Fade on={dOn && beat >= 3} delay={dl(3, 5.0)}>
        <T x={540} y={480} size={22} fill={GREEN} weight={800}>
          Dₙ = Σ (−1)ⁱ · nCi · (n−i)!
        </T>
      </Fade>
      <Fade on={dOn && beat >= 3} delay={dl(3, 5.6)}>
        <T x={540} y={518} size={22} fill={GREEN} weight={800}>
          = n! · Σ (−1)ⁱ/i!
        </T>
      </Fade>
      <Fade on={dOn && beat >= 3} delay={dl(3, 6.2)}>
        <T x={540} y={546} size={12} fill={MUTED}>
          (i = 0, 1, …, n)
        </T>
      </Fade>

      {/* ===================== Group L — beats 4-6 (Proof 3: Legendre + guardrail) ===================== */}

      <Fade on={lOn && beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={118} size={15} fill={INK} weight={600}>
          {t(
            "Among 1..n, exactly ⌊n/p⌋ numbers are multiples of p, each ≥1 factor.",
            "1..n mein se exactly ⌊n/p⌋ numbers p ke multiples hain, har ek ≥1 factor deta hai."
          )}
        </T>
      </Fade>
      <Fade on={lOn && beat >= 4} delay={dl(4, 0.6)}>
        <T x={540} y={149} size={13} fill={AMBER_DARK} weight={600}>
          Example: p = 3, n = 12
        </T>
      </Fade>

      <Draw
        on={lOn && beat >= 4}
        delay={dl(4, 1.1)}
        d={roundRectD(tiles[0].x, tiles[0].y, legTileW, legTileH, 10)}
        stroke={INK}
        sw={1.8}
        dur={0.5}
      />
      <Fade on={lOn && beat >= 4} delay={dl(4, 1.7)}>
        <T x={tiles[0].cx} y={197} size={16} fill={GREEN} weight={700}>
          {tiles[0].label}
        </T>
      </Fade>
      <Fade on={lOn && beat >= 4} delay={dl(4, 2.0)}>
        <T x={tiles[0].cx} y={236} size={12} fill={MUTED}>
          {tiles[0].sub}
        </T>
      </Fade>
      <Draw on={lOn && beat >= 4} delay={dl(4, 2.4)} d={riser1D} stroke={INK} sw={1.6} dur={0.3} />

      <Draw
        on={lOn && beat >= 4}
        delay={dl(4, 2.7)}
        d={roundRectD(tiles[1].x, tiles[1].y, legTileW, legTileH, 10)}
        stroke={INK}
        sw={1.8}
        dur={0.5}
      />
      <Fade on={lOn && beat >= 4} delay={dl(4, 3.3)}>
        <T x={tiles[1].cx} y={249} size={16} fill={GREEN} weight={700}>
          {tiles[1].label}
        </T>
      </Fade>
      <Fade on={lOn && beat >= 4} delay={dl(4, 3.6)}>
        <T x={tiles[1].cx} y={288} size={12} fill={MUTED}>
          {tiles[1].sub}
        </T>
      </Fade>
      <Draw on={lOn && beat >= 4} delay={dl(4, 4.0)} d={riser2D} stroke={INK} sw={1.6} dur={0.3} />

      <Draw
        on={lOn && beat >= 4}
        delay={dl(4, 4.3)}
        d={roundRectD(tiles[2].x, tiles[2].y, legTileW, legTileH, 10)}
        stroke={INK}
        sw={1.8}
        dur={0.5}
      />
      <Fade on={lOn && beat >= 4} delay={dl(4, 4.9)}>
        <T x={tiles[2].cx} y={301} size={16} fill={GREEN} weight={700}>
          {tiles[2].label}
        </T>
      </Fade>
      <Fade on={lOn && beat >= 4} delay={dl(4, 5.2)}>
        <T x={tiles[2].cx} y={340} size={12} fill={MUTED}>
          {tiles[2].sub}
        </T>
      </Fade>

      <Fade on={lOn && beat >= 4} delay={dl(4, 5.8)}>
        <T x={540} y={370} size={14} fill={GREEN} weight={700}>
          {t(
            "Each tier's multiples are a SUBSET of the one before — nothing missed, nothing double-counted.",
            "Har tier ke multiples pichhle tier ka SUBSET hain — kuch chhutta nahi, kuch double-count nahi hota."
          )}
        </T>
      </Fade>

      <Draw
        on={lOn && beat >= 5}
        delay={dl(5, 0)}
        d={roundRectD(eBoxX, eBoxY, eBoxW, eBoxH, 16)}
        stroke={AMBER}
        sw={2.4}
        dur={0.8}
      />
      <Fade on={lOn && beat >= 5} delay={dl(5, 0.9)}>
        <T x={540} y={428} size={24} fill={GREEN} weight={800}>
          Eₚ(n!) = ⌊n/p⌋ + ⌊n/p²⌋ + ⌊n/p³⌋ + ⋯
        </T>
      </Fade>
      <Fade on={lOn && beat >= 5} delay={dl(5, 1.5)}>
        <T x={540} y={457} size={12} fill={MUTED}>
          {t("(sum continues until pᵏ > n)", "(sum tab tak chalta hai jab tak pᵏ > n)")}
        </T>
      </Fade>
      {checkLine.map((s, i) => (
        <Fade key={i} on={lOn && beat >= 5} delay={dl(5, 2.1 + i * 0.5)}>
          <T x={s.x} y={498} size={15} fill={s.fill} weight={s.weight} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}
      <Draw
        on={lOn && beat >= 5}
        delay={dl(5, 3.1)}
        d={checkD(checkLineLastX + 16, 491, 15)}
        stroke={GREEN}
        sw={2.6}
        dur={0.4}
      />

      <Draw
        on={lOn && beat >= 6}
        delay={dl(6, 0)}
        d={roundRectD(200, 515, 680, 50, 14)}
        stroke={RED}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={lOn && beat >= 6} delay={dl(6, 0.7)}>
        <T x={540} y={545} size={14} fill={RED} weight={700}>
          {t(
            "'None correct' → derangement → inclusion–exclusion, NEVER a plain n!.",
            "'Koi bhi correct nahi' → derangement → inclusion–exclusion, KABHI plain n! nahi."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
