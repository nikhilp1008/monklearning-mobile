/**
 * M11 Ch06 · Section 31 — "Total selections derived, and grouping vs
 * distribution" FIFTH section of Subtopic "Total Selections, Grouping &
 * Distribution (Stars and Bars)". FLAGGED FOR EXTRA SCRUTINY as a "quick
 * justification" section — lighter than the full multi-step proofs in
 * Sec13/14/21/30, but each justification must still be SHOWN, not just
 * restated. TWO distinct ideas: Part 1 (beats 1-2) justifies 2ⁿ (n
 * independent binary choices, FPC — same core reasoning as Sec27's take-
 * or-leave string, restated concisely, NOT rebuilt) and the p+1 alike-group
 * count (count the values 0..p); Part 2 (beats 3-6, the centerpiece) is a
 * FRESH concrete example — 6 books / 2 people — for the divide-vs-
 * distribute over-counting argument Sec23 first derived with 12 books/3
 * groups (different numbers, genuinely new diagram, not copied). Canvas
 * 1080×620 · safe x36-1044, y30-596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. "2ⁿ" uses real superscript (Sec4/27/29
 * precedent); "p+1" and "g" stay plain/symbolic per the brief.
 *
 * Beats (board_reveal_at_english [0,6.57,23.13,40.53,46.51,66.3,78.51],
 * hinglish [0,6.74,21.42,37.8,42.58,60.59,72.28]):
 *  0 heading (= title, always-on) + amber underline flourish
 *  [group A: aOn = beat 1..2, erased at beat>=3 — PART 1, the two quick
 *   justifications]
 *  1 JUSTIFY 2ⁿ: a chain "2 × 2 × 2 × ⋯ × 2" built box by box (n boxes,
 *    each independently showing "2" — the take/leave choice), collapsing
 *    into a boxed "2ⁿ" landing; caption states the FPC reasoning.
 *  2 JUSTIFY p+1: a row of drawn circles "0,1,2,⋯,p" (the actual COUNT
 *    values a selection from an alike group of size p can take), a bracket
 *    spanning them landing "p+1 values", then "→ p+1 choices; groups
 *    multiply (Sec29 recap)".
 *  [group A erased at beat>=3 — full board freed for Part 2]
 *  [group B: bOn = beat>=3, final, never erased — PART 2, the fresh
 *   6-books/2-people diagram + both landed answers]
 *  3 THE DIAGRAM: a row of 6 book-spines (the shared starting material),
 *    then LEFT "DIVIDE (unlabelled)" — two identical boxes each "3 books"
 *    (green) — vs RIGHT "DISTRIBUTE (labelled)" — two boxes "Asha: 3" /
 *    "Ravi: 3" (red) — same 6 books, same 3+3 split, different structure.
 *  4 GENERAL divide formula recap (green "n!/(m₁!·m₂!⋯)" ÷g! red, callback
 *    Sec23/Sec29), THEN under the LEFT (divide) column: verify 6!/(3!·3!)
 *    = 20, ÷2! (equal & unlabelled) = boxed 10, checked.
 *  5 Under the RIGHT (distribute) column: 6!/(3!·3!) = 20, then "÷2!" is
 *    drawn CROSSED OUT (named recipients — no over-count to correct) →
 *    boxed 20 stands, checked. The cross-out IS the shown reason the
 *    correction disappears.
 *  6 (red guardrail, final) "Same books, different question: division vs
 *    distribution is a constant exam pivot."
 *
 * Layout plan (boxes = estimated render boxes; longer language counts):
 *  always | title (script 24, red)                                | T mid | x~230..850 y39..82
 *  b0 | title underline flourish (amber)                            | Draw | x400..680 y94
 *  [group A: aOn = beat 1..2, erased at beat>=3]
 *  a1 | caption "Each of n objects: IN or OUT." (16,ink)              | T mid | x~340..740 y107..125
 *  a1 | chain row: 4 boxes"2" + 4×"×" + "⋯" + "=" + boxed"2ⁿ"           | Draw/T| x259..821 y132..192
 *  a1 | caption2 "n choices, 2 each — multiply (FPC, Sec1)." (13,amb-dk)| T mid | x~350..730 y214..228
 *  a2 | caption "alike group p: selection = how many you take." (17,ink)| T mid | x~260..820 y263..281
 *  a2 | value row: circles "0,1,2,⋯,p" (r20, ink/amber-dk)              | Draw/T| x411..669 y296..336
 *  a2 | bracket line + ticks under row (ink)                            | Draw | x431..649 y346..354
 *  a2 | landing "p+1 values" (20,green,w800)                            | T mid | x~430..650 y368..390
 *  a2 | caption2 "→ p+1 choices; groups multiply (Sec29)." (13,amb-dk)   | T mid | x~350..730 y416..430
 *  [group A erased at beat>=3]
 *  [group B: bOn = beat>=3, final]
 *  b3 | header "Same 6 books, split 3+3 - two structures:" (17,ink)      | T mid | x~300..780 y111..129
 *  b3 | 6-book row (18×40 each, gap10)                                   | Draw | x461..619 y144..184
 *  b3 | LEFT header "DIVIDE (unlabelled)" (16,green,w800)                 | T mid | x117..303 y203..221
 *  b3 | LEFT box pair (110×64, gap14) "3 books"/"3 books" (green/ink)      | Draw/T| x93..327 y240..304
 *  b3 | LEFT caption "equal bundles swap -> /2!" (13,green)                | T mid | x~120..300 y320..334
 *  b3 | RIGHT header "DISTRIBUTE (labelled)" (16,red,w800)                 | T mid | x768..972 y203..221
 *  b3 | RIGHT box pair (120×64, gap14) "Asha:3"/"Ravi:3" (red)              | Draw/T| x743..997 y240..304
 *  b3 | RIGHT caption "named recipients differ -> no /2!" (13,red)          | T mid | x~760..980 y320..334
 *  b4 | general formula "n!/(m1!m2!..)"(green) "/g!"(red) "(g equal.."(13)  | T st  | x333..747 y361..390
 *  b4 | LEFT col: "6!/(3!3!)=20"(ink) "/2!="(red) + boxed"10"(green)+check  | T st/Draw| x85..364 y424..472
 *  b5 | RIGHT col: "6!/(3!3!)=20"(ink) "/2!"(red,crossed) "->" + boxed"20"  | T st/Draw| x750..1019 y424..472
 *  b6 | guardrail card (dynamic w, h68, red outline)                       | Draw | x~150..930 y502..570
 *  b6 | line "Same books, different question:"(red) " division vs..."(ink) | T mid | x~190..890 y527..551
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
import { roundRectD, lineD, checkD, circleD } from "./math-kit";

type Seg = { text: string; size: number; weight: number; fill: string };

/** Estimate a text segment's render width (Anek sans, non-script) — same
 * over-estimate convention used throughout this chapter's sections. */
function wEst(s: string, size: number, weight: number): number {
  return (weight >= 700 ? 0.58 : 0.5) * size * s.length;
}

/** Lay out a row of same-baseline segments centered at cx with a fixed gap
 * between them — returns each segment's start-x for anchor="start" text. */
function layoutSegs(segs: Seg[], cx: number, gap: number) {
  const widths = segs.map((s) => wEst(s.text, s.size, s.weight));
  const total = widths.reduce((a, b) => a + b, 0) + gap * (segs.length - 1);
  let cursor = cx - total / 2;
  const xs = widths.map((w) => {
    const x = cursor;
    cursor += w + gap;
    return x;
  });
  return { widths, total, xs, endCursor: cursor };
}

export default function M11Ch06Sec31({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Group A (Part 1: beats 1-2, the two quick justifications) is erased once
  // Part 2's fresh 6-books diagram needs the full board at beat 3; group B
  // then owns the board for good. Each element's own `on` is bounded to its
  // beat window (aOn / bOn && beat >= k) rather than a wrapper div's opacity,
  // so the verifier's Fade-opacity visibility check — which walks up to the
  // nearest g.sc-fade, not an arbitrary ancestor — sees the erasure; seeking
  // back into beat 1/2 correctly restores Part 1.
  const aOn = beat >= 1 && beat < 3;
  const bOn = beat >= 3;

  /* ================= Part 1, beat 1: chain "2×2×2×⋯×2 = 2ⁿ" ================= */
  type ChainItem = { kind: "unit" | "op" | "result"; txt?: string; w: number };
  const chainItems: ChainItem[] = [
    { kind: "unit", w: 42 },
    { kind: "op", txt: "×", w: 22 },
    { kind: "unit", w: 42 },
    { kind: "op", txt: "×", w: 22 },
    { kind: "unit", w: 42 },
    { kind: "op", txt: "×", w: 22 },
    { kind: "op", txt: "⋯", w: 26 },
    { kind: "op", txt: "×", w: 22 },
    { kind: "unit", w: 42 },
    { kind: "op", txt: "=", w: 28 },
    { kind: "result", txt: "2ⁿ", w: 92 },
  ];
  const chainGap = 16;
  const chainTotal =
    chainItems.reduce((a, it) => a + it.w, 0) + chainGap * (chainItems.length - 1);
  let chainCursor = 540 - chainTotal / 2;
  const chainXs = chainItems.map((it) => {
    const x = chainCursor;
    chainCursor += it.w + chainGap;
    return x;
  });
  const CHAIN_BOX_TOP = 144,
    CHAIN_BOX_H = 42;
  const CHAIN_RES_TOP = 138,
    CHAIN_RES_H = 54;
  const CHAIN_BASE_Y = 173;

  /* ================= Part 1, beat 2: value-count row "0,1,2,⋯,p" ================= */
  type ValItem = { val: string; amber?: boolean };
  const valItems: ValItem[] = [{ val: "0" }, { val: "1" }, { val: "2" }, { val: "⋯" }, { val: "p", amber: true }];
  const valDiam = 40,
    valGap = 18;
  const valWidths = valItems.map((v) => (v.val === "⋯" ? 26 : valDiam));
  const valTotal = valWidths.reduce((a, b) => a + b, 0) + valGap * (valItems.length - 1);
  let valCursor = 540 - valTotal / 2;
  const valXs = valWidths.map((w) => {
    const x = valCursor;
    valCursor += w + valGap;
    return x;
  });
  const VAL_ROW_TOP = 296,
    VAL_ROW_CY = 316;
  const bracketX1 = valXs[0] + valDiam / 2;
  const bracketX2 = valXs[4] + valDiam / 2;
  const BRACKET_Y = 346;

  /* ================= Part 2, beat 3: the 6-books diagram ================= */
  const bookW = 18,
    bookH = 40,
    bookGap = 10,
    bookN = 6;
  const bookTotal = bookN * bookW + (bookN - 1) * bookGap;
  const bookLeft0 = 540 - bookTotal / 2;
  const bookLefts = Array.from({ length: bookN }, (_, i) => bookLeft0 + i * (bookW + bookGap));
  const BOOK_Y = 144;

  const zoneBoxH = 64,
    zoneGap = 14;
  const leftZoneCx = 210,
    rightZoneCx = 870;
  const leftBoxW = 110,
    rightBoxW = 120;
  const leftTotal = 2 * leftBoxW + zoneGap;
  const rightTotal = 2 * rightBoxW + zoneGap;
  const leftLefts = [leftZoneCx - leftTotal / 2, leftZoneCx - leftTotal / 2 + leftBoxW + zoneGap];
  const rightLefts = [rightZoneCx - rightTotal / 2, rightZoneCx - rightTotal / 2 + rightBoxW + zoneGap];
  const ZONE_HEADER_Y = 216;
  const ZONE_BOX_TOP = 240;
  const ZONE_TEXT_Y = 276;
  const ZONE_CAPTION_Y = 330;

  /* ================= Part 2, beats 4-5: general formula + LEFT/RIGHT columns ================= */
  const genSegs: Seg[] = [
    { text: "n!/(m₁!·m₂!⋯)", size: 20, weight: 800, fill: GREEN },
    { text: "÷g!", size: 20, weight: 800, fill: RED },
    {
      text: t("(g equal, unlabelled groups)", "(g equal, unlabelled groups)"),
      size: 13,
      weight: 600,
      fill: AMBER_DARK,
    },
  ];
  const genL = layoutSegs(genSegs, 540, 14);
  const GEN_Y = 384;

  const sharedCalc = "6!/(3!·3!) = 20";
  const COL_BOX_TOP = 424,
    COL_BOX_H = 48;
  const COL_SEG_Y = 453;

  const leftSegs: Seg[] = [
    { text: sharedCalc, size: 15, weight: 700, fill: INK },
    { text: "÷ 2! =", size: 17, weight: 800, fill: RED },
  ];
  const leftL = layoutSegs(leftSegs, leftZoneCx, 10);
  const leftResW = wEst("10", 22, 800);
  const leftResX = leftL.endCursor + 16;
  const leftHeroX = leftResX - 10;
  const leftHeroW = leftResW + 20;

  const rightSegs: Seg[] = [
    { text: sharedCalc, size: 15, weight: 700, fill: INK },
    { text: "÷2!", size: 17, weight: 800, fill: RED },
    { text: "→", size: 17, weight: 700, fill: AMBER_DARK },
  ];
  const rightL = layoutSegs(rightSegs, rightZoneCx, 7);
  const rightResW = wEst("20", 22, 800);
  const rightResX = rightL.endCursor + 10;
  const rightHeroX = rightResX - 7;
  const rightHeroW = rightResW + 14;
  // the "÷2!" segment (index 1) is the one drawn crossed-out
  const rightCrossX = rightL.xs[1];
  const rightCrossW = rightL.widths[1];
  const rightCrossY = COL_SEG_Y - 0.78 * 17;
  const rightCrossH = 0.78 * 17 + 0.31 * 17;

  /* ================= Part 2, beat 6: guardrail ================= */
  const guardSegs: Seg[] = [
    { text: t("Same books, different question:", "Same books, alag sawaal:"), size: 17, weight: 800, fill: RED },
    {
      text: t(
        "division vs distribution — a constant exam pivot.",
        "division vs distribution — hamesha ka exam pivot."
      ),
      size: 15,
      weight: 600,
      fill: INK,
    },
  ];
  const guardL = layoutSegs(guardSegs, 540, 10);
  const GUARD_Y = 502,
    GUARD_H = 68;
  const guardBoxW = guardL.total + 80;
  const guardBoxX = 540 - guardBoxW / 2;
  const GUARD_LINE_Y = 540;

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={70} size={24} fill={RED} script>
          {t("Where 2ⁿ and the grouping rule come from", "2ⁿ aur grouping ka rule kahaan se aata hai")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.4)} d={lineD(400, 94, 680, 94)} stroke={AMBER} sw={2} dur={0.6} />

      {/* ===================== Group A — Part 1 (beats 1-2) ===================== */}

      {/* beat 1 — justify 2ⁿ: the chain of independent 2-choices */}
      <Fade on={aOn && beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={120} size={16} fill={INK} weight={600}>
          {t("Each of n objects: independently IN or OUT.", "Har object: independently IN ya OUT.")}
        </T>
      </Fade>
      {chainItems.map((it, i) => {
        const x = chainXs[i];
        const baseDelay = 0.6 + i * 0.4;
        if (it.kind === "unit") {
          return (
            <React.Fragment key={i}>
              <Draw
                on={aOn && beat >= 1}
                delay={dl(1, baseDelay)}
                d={roundRectD(x, CHAIN_BOX_TOP, it.w, CHAIN_BOX_H, 8)}
                stroke={INK}
                sw={2}
                dur={0.5}
              />
              <Fade on={aOn && beat >= 1} delay={dl(1, baseDelay + 0.35)}>
                <T x={x + it.w / 2} y={CHAIN_BASE_Y} size={24} fill={INK} weight={800}>
                  2
                </T>
              </Fade>
            </React.Fragment>
          );
        }
        if (it.kind === "result") {
          return (
            <React.Fragment key={i}>
              <Draw
                on={aOn && beat >= 1}
                delay={dl(1, baseDelay)}
                d={roundRectD(x, CHAIN_RES_TOP, it.w, CHAIN_RES_H, 12)}
                stroke={GREEN}
                sw={2.4}
                dur={0.7}
              />
              <Fade on={aOn && beat >= 1} delay={dl(1, baseDelay + 0.6)}>
                <T x={x + it.w / 2} y={CHAIN_BASE_Y} size={32} fill={GREEN} weight={800}>
                  {it.txt}
                </T>
              </Fade>
            </React.Fragment>
          );
        }
        return (
          <Fade key={i} on={aOn && beat >= 1} delay={dl(1, baseDelay)}>
            <T
              x={x + it.w / 2}
              y={CHAIN_BASE_Y}
              size={it.txt === "⋯" ? 26 : 22}
              fill={it.txt === "⋯" ? MUTED : INK}
              weight={700}
            >
              {it.txt}
            </T>
          </Fade>
        );
      })}
      <Fade on={aOn && beat >= 1} delay={dl(1, 6.8)}>
        <T x={540} y={224} size={13} fill={AMBER_DARK} weight={600}>
          {t(
            "n independent choices, 2 each — multiply (FPC, Sec1).",
            "n independent choices, har baar 2 — multiply karo (FPC, Sec1)."
          )}
        </T>
      </Fade>

      {/* beat 2 — justify p+1: count the values 0..p */}
      <Fade on={aOn && beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={276} size={17} fill={INK} weight={600}>
          {t(
            "An alike group of size p: a selection = how many you take.",
            "p size ka alike group: selection = kitne liye."
          )}
        </T>
      </Fade>
      {valItems.map((v, i) => {
        const x = valXs[i];
        const w = valWidths[i];
        const cx = x + w / 2;
        const delay0 = 0.6 + i * 0.4;
        if (v.val === "⋯") {
          return (
            <Fade key={i} on={aOn && beat >= 2} delay={dl(2, delay0)}>
              <T x={cx} y={VAL_ROW_CY + 5} size={26} fill={MUTED} weight={700}>
                ⋯
              </T>
            </Fade>
          );
        }
        const stroke = v.amber ? AMBER_DARK : INK;
        return (
          <React.Fragment key={i}>
            <Draw
              on={aOn && beat >= 2}
              delay={dl(2, delay0)}
              d={circleD(cx, VAL_ROW_CY, valDiam / 2)}
              stroke={stroke}
              sw={2}
              dur={0.4}
            />
            <Fade on={aOn && beat >= 2} delay={dl(2, delay0 + 0.3)}>
              <T x={cx} y={VAL_ROW_CY + 6} size={18} fill={stroke} weight={800}>
                {v.val}
              </T>
            </Fade>
          </React.Fragment>
        );
      })}
      <Draw
        on={aOn && beat >= 2}
        delay={dl(2, 2.9)}
        d={`M ${bracketX1} ${BRACKET_Y} L ${bracketX2} ${BRACKET_Y} M ${bracketX1} ${BRACKET_Y} L ${bracketX1} ${
          BRACKET_Y + 8
        } M ${bracketX2} ${BRACKET_Y} L ${bracketX2} ${BRACKET_Y + 8}`}
        stroke={INK}
        sw={1.8}
        dur={0.5}
      />
      <Fade on={aOn && beat >= 2} delay={dl(2, 3.6)}>
        <T x={540} y={384} size={20} fill={GREEN} weight={800}>
          {t("p+1 values", "p+1 values hain")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 4.3)}>
        <T x={540} y={426} size={13} fill={AMBER_DARK} weight={600}>
          {t(
            "→ p+1 choices; multiple groups multiply (Sec29 recap).",
            "→ p+1 choices; multiple groups multiply karte hain (Sec29)."
          )}
        </T>
      </Fade>

      {/* ===================== Group B — Part 2 (beats 3-6, final) ===================== */}

      {/* beat 3 — the fresh 6-books diagram */}
      <Fade on={bOn && beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={124} size={17} fill={INK} weight={600}>
          {t(
            "Same 6 books, split 3 + 3 — two different structures:",
            "Wahi 6 books, 3+3 split — do alag structures:"
          )}
        </T>
      </Fade>
      <Draw
        on={bOn && beat >= 3}
        delay={dl(3, 0.5)}
        d={bookLefts.map((x) => roundRectD(x, BOOK_Y, bookW, bookH, 3)).join(" ")}
        stroke={INK}
        sw={2}
        dur={0.6}
      />

      {/* LEFT — DIVIDE (unlabelled) */}
      <Fade on={bOn && beat >= 3} delay={dl(3, 1.3)}>
        <T x={leftZoneCx} y={ZONE_HEADER_Y} size={16} fill={GREEN} weight={800}>
          DIVIDE (unlabelled)
        </T>
      </Fade>
      <Draw
        on={bOn && beat >= 3}
        delay={dl(3, 1.3)}
        d={leftLefts.map((x) => roundRectD(x, ZONE_BOX_TOP, leftBoxW, zoneBoxH, 10)).join(" ")}
        stroke={GREEN}
        sw={2.2}
        dur={0.6}
      />
      {leftLefts.map((x, i) => (
        <Fade key={i} on={bOn && beat >= 3} delay={dl(3, 2.0 + i * 0.15)}>
          <T x={x + leftBoxW / 2} y={ZONE_TEXT_Y} size={16} fill={INK} weight={700}>
            {t("3 books", "3 books")}
          </T>
        </Fade>
      ))}
      <Fade on={bOn && beat >= 3} delay={dl(3, 2.4)}>
        <T x={leftZoneCx} y={ZONE_CAPTION_Y} size={13} fill={GREEN} weight={600}>
          {t("equal bundles swap → ÷2!", "bundles equal — swap karo → ÷2!")}
        </T>
      </Fade>

      {/* RIGHT — DISTRIBUTE (labelled) */}
      <Fade on={bOn && beat >= 3} delay={dl(3, 2.9)}>
        <T x={rightZoneCx} y={ZONE_HEADER_Y} size={16} fill={RED} weight={800}>
          DISTRIBUTE (labelled)
        </T>
      </Fade>
      <Draw
        on={bOn && beat >= 3}
        delay={dl(3, 2.9)}
        d={rightLefts.map((x) => roundRectD(x, ZONE_BOX_TOP, rightBoxW, zoneBoxH, 10)).join(" ")}
        stroke={RED}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={bOn && beat >= 3} delay={dl(3, 3.6)}>
        <T x={rightLefts[0] + rightBoxW / 2} y={ZONE_TEXT_Y} size={15} fill={RED} weight={800}>
          Asha: 3
        </T>
      </Fade>
      <Fade on={bOn && beat >= 3} delay={dl(3, 3.75)}>
        <T x={rightLefts[1] + rightBoxW / 2} y={ZONE_TEXT_Y} size={15} fill={RED} weight={800}>
          Ravi: 3
        </T>
      </Fade>
      <Fade on={bOn && beat >= 3} delay={dl(3, 4.0)}>
        <T x={rightZoneCx} y={ZONE_CAPTION_Y} size={13} fill={RED} weight={600}>
          {t("named recipients differ → no ÷2!", "named recipients alag — → ÷2! nahi")}
        </T>
      </Fade>

      {/* beat 4 — general divide formula + LEFT column verify */}
      {genSegs.map((s, i) => (
        <Fade key={i} on={bOn && beat >= 4} delay={dl(4, i * 0.5)}>
          <T x={genL.xs[i]} y={GEN_Y} size={s.size} fill={s.fill} weight={s.weight} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}
      {leftSegs.map((s, i) => (
        <Fade key={i} on={bOn && beat >= 4} delay={dl(4, 1.8 + i * 0.5)}>
          <T x={leftL.xs[i]} y={COL_SEG_Y} size={s.size} fill={s.fill} weight={s.weight} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}
      <Draw
        on={bOn && beat >= 4}
        delay={dl(4, 2.8)}
        d={roundRectD(leftHeroX, COL_BOX_TOP, leftHeroW, COL_BOX_H, 10)}
        stroke={GREEN}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={bOn && beat >= 4} delay={dl(4, 3.6)}>
        <T x={leftHeroX + leftHeroW / 2} y={COL_SEG_Y} size={22} fill={GREEN} weight={800}>
          10
        </T>
      </Fade>
      <Draw
        on={bOn && beat >= 4}
        delay={dl(4, 4.1)}
        d={checkD(leftHeroX + leftHeroW + 12, COL_SEG_Y - 8, 14)}
        stroke={GREEN}
        sw={2.4}
        dur={0.4}
      />

      {/* beat 5 — RIGHT column: ÷2! crossed out, 20 stands */}
      {rightSegs.map((s, i) => (
        <Fade key={i} on={bOn && beat >= 5} delay={dl(5, i * 0.5)}>
          <T x={rightL.xs[i]} y={COL_SEG_Y} size={s.size} fill={s.fill} weight={s.weight} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}
      <Draw
        on={bOn && beat >= 5}
        delay={dl(5, 1.5)}
        d={crossD(rightCrossX, rightCrossY, rightCrossW, rightCrossH)}
        stroke={RED}
        sw={2}
        dur={0.4}
      />
      <Draw
        on={bOn && beat >= 5}
        delay={dl(5, 2.2)}
        d={roundRectD(rightHeroX, COL_BOX_TOP, rightHeroW, COL_BOX_H, 10)}
        stroke={GREEN}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={bOn && beat >= 5} delay={dl(5, 3.0)}>
        <T x={rightHeroX + rightHeroW / 2} y={COL_SEG_Y} size={22} fill={GREEN} weight={800}>
          20
        </T>
      </Fade>
      <Draw
        on={bOn && beat >= 5}
        delay={dl(5, 3.5)}
        d={checkD(rightHeroX + rightHeroW + 8, COL_SEG_Y - 8, 12)}
        stroke={GREEN}
        sw={2.4}
        dur={0.4}
      />

      {/* beat 6 — guardrail (final, red) */}
      <Draw
        on={bOn && beat >= 6}
        delay={dl(6, 0)}
        d={roundRectD(guardBoxX, GUARD_Y, guardBoxW, GUARD_H, 14)}
        stroke={RED}
        sw={2.2}
        dur={0.7}
      />
      {guardSegs.map((s, i) => (
        <Fade key={i} on={bOn && beat >= 6} delay={dl(6, 0.9 + i * 0.4)}>
          <T x={guardL.xs[i]} y={GUARD_LINE_Y} size={s.size} fill={s.fill} weight={s.weight} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}
    </Scene>
  );
}
